const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = parseInt(process.env.PORT || process.argv[2] || '8082', 10);

function uid() {
  return Math.random().toString(36).substr(2, 6).toUpperCase();
}

const rooms = new Map();

/** 与客户端 MAP_THEME_DEFS 数量一致（固定主题 + 「随机」用 seed 推导） */
const MAP_THEME_COUNT = 6;

// ===================== LEADERBOARD =====================
const LB_FILE = path.join(__dirname, 'leaderboard.json');
let leaderboard = { records: [], lastGame: [] };
// records: [{ name, time, coins, date }] — 每人保留最佳成绩
// lastGame: [{ name, color, time, coins, rank, date }] — 最近一局结果

function loadLeaderboard() {
  try {
    if (fs.existsSync(LB_FILE)) {
      leaderboard = JSON.parse(fs.readFileSync(LB_FILE, 'utf-8'));
      if (!leaderboard.records) leaderboard.records = [];
      if (!leaderboard.lastGame) leaderboard.lastGame = [];
    }
  } catch { leaderboard = { records: [], lastGame: [] }; }
}

function saveLeaderboard() {
  try { fs.writeFileSync(LB_FILE, JSON.stringify(leaderboard, null, 2), 'utf-8'); } catch {}
}

function updateRecords(finishOrder, allPlayers) {
  // 更新最近一局（完赛的按名次，未完赛的也记录）
  let rank = 1;
  const gameResults = finishOrder.map(fo => {
    const p = allPlayers.find(pp => pp.id === fo.id);
    return {
      name: fo.name, color: fo.color, time: fo.time,
      coins: p?.coins || 0, rank: rank++, date: Date.now()
    };
  });
  for (const p of allPlayers) {
    if (!finishOrder.find(f => f.id === p.id)) {
      gameResults.push({
        name: p.name, color: p.color, time: null,
        coins: p.coins || 0, rank: null, date: Date.now()
      });
    }
  }
  leaderboard.lastGame = gameResults;

  // 更新历史最佳：所有参与者都记录（完赛用时间排名，未完赛用金币排名）
  for (const p of allPlayers) {
    const fo = finishOrder.find(f => f.id === p.id);
    const time = fo ? fo.time : null;
    const coins = p.coins || 0;
    const existing = leaderboard.records.find(r => r.name === p.name);

    if (!existing) {
      leaderboard.records.push({ name: p.name, time, coins, date: Date.now() });
    } else {
      // 已有记录：新成绩更好时更新
      const newBetter = isBetterRecord(time, coins, existing.time, existing.coins);
      if (newBetter) {
        existing.time = time;
        existing.coins = coins;
        existing.date = Date.now();
      }
    }
  }

  // 排序：完赛的按时间升序排前面，未完赛的按金币降序排后面
  leaderboard.records.sort((a, b) => {
    if (a.time != null && b.time != null) return a.time - b.time;
    if (a.time != null) return -1;
    if (b.time != null) return 1;
    return (b.coins || 0) - (a.coins || 0);
  });
  leaderboard.records = leaderboard.records.slice(0, 50);

  saveLeaderboard();
}

function isBetterRecord(newTime, newCoins, oldTime, oldCoins) {
  // 新完赛 vs 旧未完赛 → 新的更好
  if (newTime != null && oldTime == null) return true;
  // 都完赛 → 时间短的更好
  if (newTime != null && oldTime != null) return newTime < oldTime;
  // 都未完赛 → 金币多的更好
  if (newTime == null && oldTime == null) return (newCoins || 0) > (oldCoins || 0);
  // 新未完赛 vs 旧完赛 → 旧的更好
  return false;
}

loadLeaderboard();

/** 道具拾取按玩家独立：powerupId -> Set<playerId>，每人可对同一道具各领一次 */
function serializePowerupClaims(claimsMap) {
  const o = {};
  if (!claimsMap || claimsMap.size === 0) return o;
  for (const [pid, set] of claimsMap) {
    o[String(pid)] = [...set];
  }
  return o;
}

function tryClaimPowerupForPlayer(room, playerId, powerupId) {
  if (!room.powerupClaims) room.powerupClaims = new Map();
  let s = room.powerupClaims.get(powerupId);
  if (!s) {
    s = new Set();
    room.powerupClaims.set(powerupId, s);
  }
  if (s.has(playerId)) return false;
  s.add(playerId);
  return true;
}

/** 与客户端 index.html 中 mulberry32 一致 */
function mulberry32(seed) {
  return function () {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = t + Math.imul(t ^ (t >>> 7), 61 | t) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** 多人：约 34% 的道具为「全房仅一人可领」，其余为每人各领一次 */
function powerupExclusiveMultiplayer(seed, powerupId) {
  const s = ((Number(seed) | 0) ^ Math.imul(Number(powerupId) | 0, 0x9e3779b1)) >>> 0;
  return mulberry32(s)() < 0.34;
}

function serializeExclusiveConsumed(set) {
  if (!set || set.size === 0) return [];
  return [...set];
}

/** 多人吃金币后低概率在附近刷补偿道具（全房同步） */
function maybeSpawnDynamicPowerupFromCoin(room, atX, atY, isStar) {
  if (room.players.size < 2) return;
  if (room.dynamicPowerupsSpawned >= 14) return;
  if (typeof atX !== 'number' || typeof atY !== 'number' || !Number.isFinite(atX) || !Number.isFinite(atY)) return;
  if (Math.abs(atX) > 800000 || Math.abs(atY) > 800000) return;
  const pSpawn = isStar ? 0.017 : 0.036;
  if (Math.random() >= pSpawn) return;

  const id = room.dynamicPowerupSeq++;
  const rng = mulberry32((room.seed ^ id ^ 0x51ed) >>> 0);
  const pool = ['speed2', 'speed2', 'energy_full', 'life', 'extra_jump', 'invincible', 'fly', 'speed3', 'life', 'energy_full', 'speed2', 'invincible'];
  const ptype = pool[(rng() * pool.length) | 0];
  const exclusive = powerupExclusiveMultiplayer(room.seed, id);
  const jx = (rng() - 0.5) * 48;
  const jy = (rng() - 0.5) * 32 - 22;
  const x = Math.round(atX + jx);
  const y = Math.round(atY + jy);
  const phase = rng() * Math.PI * 2;
  room.dynamicPowerupsSpawned++;
  room.broadcast({
    type: 'dynamicPowerupSpawn',
    powerup: { id, x, y, ptype, phase, exclusive }
  });
}

function clearWorldEventTimers(room) {
  if (!room) return;
  if (room._evWarn) { clearTimeout(room._evWarn); room._evWarn = null; }
  if (room._evStart) { clearTimeout(room._evStart); room._evStart = null; }
  if (room._evEnd) { clearTimeout(room._evEnd); room._evEnd = null; }
}

function buildWorldEventSnapshot(room) {
  const now = Date.now();
  if (room.activeEventKind && room.activeEventEndsAt && room.activeEventEndsAt > now) {
    return { phase: 'active', kind: room.activeEventKind, remainingMs: room.activeEventEndsAt - now };
  }
  if (room.pendingEventKind && room.eventStartsAt && room.eventStartsAt > now) {
    return { phase: 'warning', kind: room.pendingEventKind, remainingMs: room.eventStartsAt - now };
  }
  return null;
}

function scheduleNextWorldEvent(room, isFirst) {
  clearWorldEventTimers(room);
  if (room.state !== 'playing') return;
  const waitMs = isFirst ? (14000 + Math.random() * 26000) : (18000 + Math.random() * 32000);
  room._evWarn = setTimeout(() => {
    room._evWarn = null;
    if (room.state !== 'playing') return;
    const kind = Math.random() < 0.5 ? 'coinRain' : 'slowdown';
    room.pendingEventKind = kind;
    room.eventStartsAt = Date.now() + 3000;
    room.broadcast({ type: 'eventWarning', kind, startsInMs: 3000 });
    room._evStart = setTimeout(() => beginWorldEvent(room, kind), 3000);
  }, waitMs);
}

function beginWorldEvent(room, kind) {
  room._evStart = null;
  room.pendingEventKind = null;
  room.eventStartsAt = null;
  if (room.state !== 'playing') return;
  const durationMs = kind === 'coinRain' ? 9000 : 6000;
  room.activeEventKind = kind;
  room.activeEventEndsAt = Date.now() + durationMs;
  room.rainGrants = new Map();
  room.broadcast({ type: 'eventBegin', kind, durationMs });
  room._evEnd = setTimeout(() => endWorldEvent(room), durationMs);
}

function endWorldEvent(room) {
  room._evEnd = null;
  const k = room.activeEventKind;
  room.activeEventKind = null;
  room.activeEventEndsAt = null;
  room.rainGrants = null;
  if (k && room.state === 'playing') {
    room.broadcast({ type: 'eventEnd', kind: k });
    scheduleNextWorldEvent(room, false);
  }
}

class Room {
  constructor() {
    this.id = uid();
    this.seed = (Math.random() * 1e9) | 0;
    this.players = new Map();   // id -> playerState
    this.wsToId = new Map();    // ws -> id
    this.idToWs = new Map();    // id -> ws
    this.spectators = new Set();
    this.state = 'waiting';     // waiting | countdown | playing | finished
    this.hostId = null;
    this.finishOrder = [];
    this.startTime = 0;
    this._timer = null;
    this.collectedCoins = new Set();
    this.powerupClaims = new Map();
    this.exclusivePowerupConsumed = new Set();
    this.dynamicPowerupSeq = 1000000;
    this.dynamicPowerupsSpawned = 0;
    this.firstStarTaken = false; // 本局是否已有星币被拾取（全场首个星币里程碑）
    this._evWarn = null;
    this._evStart = null;
    this._evEnd = null;
    this.pendingEventKind = null;
    this.eventStartsAt = null;
    this.activeEventKind = null;
    this.activeEventEndsAt = null;
    this.rainGrants = null;
    /** 环境主题：'random' | 0..MAP_THEME_COUNT-1，房主在房间内可改，默认随机 */
    this.envTheme = 'random';
    /** 同一会话总关卡数；1 = 传统单图一局。>1 时：非最后一关任意一人冲线即全员复活并进入下一关（新图） */
    this.stageTotal = 1;
    this.stageCurrent = 1;
    this.stageWinners = [];
    this._advancingStage = false;
  }

  addPlayer(ws, name) {
    const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F0A500'];

    // 同名玩家重连：踢掉旧连接，复用颜色
    for (const [oldId, oldP] of this.players) {
      if (oldP.name === name) {
        const oldWs = this.idToWs.get(oldId);
        this.players.delete(oldId);
        this.wsToId.delete(oldWs);
        this.idToWs.delete(oldId);
        if (oldWs && oldWs !== ws && oldWs.readyState === WebSocket.OPEN) {
          oldWs.send(JSON.stringify({ type: 'error', msg: '你已在其他窗口重新加入该房间' }));
          oldWs.close();
        }
        break;
      }
    }

    const id = uid();
    const player = {
      id, name,
      color: COLORS[this.players.size % COLORS.length],
      x: 200 + this.players.size * 50, y: 400,
      vx: 0, vy: 0,
      facing: 1, frame: 0,
      onGround: false, isAlive: true,
      finished: false, finishTime: null,
      ready: false,
      lives: 5,
      away: false // 长时间无游戏操作，客户端上报，他人视为暂离
    };
    this.players.set(id, player);
    this.wsToId.set(ws, id);
    this.idToWs.set(id, ws);
    if (!this.hostId) this.hostId = id;
    return player;
  }

  removeClient(ws) {
    const id = this.wsToId.get(ws);
    if (id) {
      const player = this.players.get(id);
      this.players.delete(id);
      this.wsToId.delete(ws);
      this.idToWs.delete(id);
      if (this.hostId === id) {
        this.hostId = this.players.size > 0 ? [...this.players.keys()][0] : null;
      }
      return { type: 'player', id, player };
    }
    if (this.spectators.has(ws)) {
      this.spectators.delete(ws);
      return { type: 'spectator' };
    }
    return null;
  }

  broadcast(data, skip = null) {
    const s = JSON.stringify(data);
    for (const [ws] of this.wsToId) {
      if (ws !== skip && ws.readyState === WebSocket.OPEN) ws.send(s);
    }
    for (const ws of this.spectators) {
      if (ws !== skip && ws.readyState === WebSocket.OPEN) ws.send(s);
    }
  }

  getPlayers() {
    return [...this.players.values()].map(p => ({
      id: p.id, name: p.name, color: p.color,
      x: p.x, y: p.y, vx: p.vx, vy: p.vy,
      facing: p.facing, frame: p.frame,
      onGround: p.onGround, isAlive: p.isAlive,
      finished: p.finished, finishTime: p.finishTime, ready: p.ready,
      away: p.finished ? false : !!p.away
    }));
  }

  isDone() {
    for (const p of this.players.values()) {
      if (p.isAlive && !p.finished) return false;
    }
    return true;
  }

  countdown() {
    if (this.state !== 'waiting') return;
    this.state = 'countdown';
    let n = 3;
    this.broadcast({ type: 'countdown', n, stageTotal: this.stageTotal, stageCurrent: 1 });
    this._timer = setInterval(() => {
      n--;
      if (n > 0) {
        this.broadcast({ type: 'countdown', n, stageTotal: this.stageTotal, stageCurrent: 1 });
      } else {
        clearInterval(this._timer);
        this._timer = null;
        this.startGame();
      }
    }, 1000);
  }

  startGame() {
    clearWorldEventTimers(this);
    this.pendingEventKind = null;
    this.eventStartsAt = null;
    this.activeEventKind = null;
    this.activeEventEndsAt = null;
    this.rainGrants = null;
    this.state = 'playing';
    this.startTime = Date.now();
    this.finishOrder = [];
    this.collectedCoins = new Set();
    this.powerupClaims = new Map();
    this.exclusivePowerupConsumed = new Set();
    this.dynamicPowerupSeq = 1000000;
    this.dynamicPowerupsSpawned = 0;
    this.firstStarTaken = false;
    this.stageCurrent = 1;
    this.stageWinners = [];
    let i = 0;
    for (const p of this.players.values()) {
      p.x = 150 + i * 50; p.y = 400;
      p.vx = 0; p.vy = 0;
      p.isAlive = true; p.finished = false;
      p.finishTime = null; p.coins = 0; p.lives = 5;
      p.away = false;
      i++;
    }
    this.broadcast({
      type: 'gameStart',
      seed: this.seed,
      startTime: this.startTime,
      players: this.getPlayers(),
      collectedCoins: [], // 新局开始时为空
      powerupClaims: serializePowerupClaims(this.powerupClaims),
      exclusivePowerupConsumed: serializeExclusiveConsumed(this.exclusivePowerupConsumed),
      envTheme: this.envTheme,
      stageCurrent: this.stageCurrent,
      stageTotal: this.stageTotal
    });
    scheduleNextWorldEvent(this, true);
  }

  /**
   * 多关卡：非最后一关，任意一人先到终点 → 记录本关胜者，全员满血复活，换新 seed 进入下一关。
   */
  advanceStageFromFinish(winnerId, winnerName, winnerTime) {
    if (this.state !== 'playing') return;
    if (this._advancingStage) return;
    if (!(this.stageTotal > 1 && this.stageCurrent < this.stageTotal)) return;
    this._advancingStage = true;

    clearWorldEventTimers(this);
    this.pendingEventKind = null;
    this.eventStartsAt = null;
    this.activeEventKind = null;
    this.activeEventEndsAt = null;
    this.rainGrants = null;

    const clearedStage = this.stageCurrent;
    if (!this.stageWinners) this.stageWinners = [];
    this.stageWinners.push({
      stage: clearedStage,
      id: winnerId,
      name: winnerName,
      time: winnerTime
    });
    this.stageCurrent += 1;

    this.seed = (Math.random() * 1e9) | 0;
    this.startTime = Date.now();
    this.finishOrder = [];
    this.collectedCoins = new Set();
    this.powerupClaims = new Map();
    this.exclusivePowerupConsumed = new Set();
    this.dynamicPowerupSeq = 1000000;
    this.dynamicPowerupsSpawned = 0;
    this.firstStarTaken = false;

    let i = 0;
    for (const p of this.players.values()) {
      p.x = 150 + i * 50; p.y = 400;
      p.vx = 0; p.vy = 0;
      p.isAlive = true; p.finished = false;
      p.finishTime = null; p.coins = 0; p.lives = 5;
      p.away = false;
      i++;
    }

    this.broadcast({
      type: 'stageCleared',
      clearedStage,
      nextStage: this.stageCurrent,
      stageTotal: this.stageTotal,
      winnerId,
      winnerName,
      time: winnerTime
    });
    this.broadcast({
      type: 'gameStart',
      seed: this.seed,
      startTime: this.startTime,
      players: this.getPlayers(),
      collectedCoins: [],
      powerupClaims: serializePowerupClaims(this.powerupClaims),
      exclusivePowerupConsumed: serializeExclusiveConsumed(this.exclusivePowerupConsumed),
      envTheme: this.envTheme,
      stageCurrent: this.stageCurrent,
      stageTotal: this.stageTotal
    });
    scheduleNextWorldEvent(this, true);

    setTimeout(() => { this._advancingStage = false; }, 600);
  }

  endGame() {
    if (this.state === 'finished') return;
    clearWorldEventTimers(this);
    this.pendingEventKind = null;
    this.eventStartsAt = null;
    this.activeEventKind = null;
    this.activeEventEndsAt = null;
    this.rainGrants = null;
    this.state = 'finished';
    updateRecords(this.finishOrder, [...this.players.values()]);
    const totalOnline = this.players.size + this.spectators.size;
    const stayInRoom = totalOnline > 1;
    this.broadcast({
      type: 'gameEnd',
      finishOrder: this.finishOrder,
      stayInRoom,
      stageWinners: Array.isArray(this.stageWinners) ? this.stageWinners.slice() : []
    });
    this._timer = setTimeout(() => {
      this._timer = null;
      if (this.players.size === 0 && this.spectators.size === 0) {
        rooms.delete(this.id);
        return;
      }
      this.state = 'waiting';
      this.seed = (Math.random() * 1e9) | 0;
      this.finishOrder = [];
      this.collectedCoins = new Set();
      this.powerupClaims = new Map();
      this.exclusivePowerupConsumed = new Set();
      this.dynamicPowerupSeq = 1000000;
      this.dynamicPowerupsSpawned = 0;
      for (const p of this.players.values()) {
        p.ready = false; p.finished = false; p.finishTime = null; p.coins = 0;
        p.away = false;
      }
      const n = this.players.size + this.spectators.size;
      const backStay = n > 1;
      this.broadcast({
        type: 'backToLobby',
        seed: this.seed,
        stayInRoom: backStay,
        players: this.getPlayers(),
        hostId: this.hostId,
        envTheme: this.envTheme,
        stageTotal: this.stageTotal
      });
    }, 8000);
  }
}

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
});

const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
  let room = null;
  let myId = null;
  let spectator = false;

  ws.on('message', raw => {
    let msg;
    try { msg = JSON.parse(raw); } catch { return; }

    switch (msg.type) {
      case 'getLeaderboard': {
        const myBest = leaderboard.records.find(r => r.name === msg.name) || null;
        ws.send(JSON.stringify({
          type: 'leaderboard',
          records: leaderboard.records.slice(0, 20),
          lastGame: leaderboard.lastGame,
          myBest
        }));
        break;
      }

      case 'getRooms': {
        // 清理空房间
        for (const [rid, r] of rooms) {
          if (r.players.size === 0 && r.spectators.size === 0) {
            if (r._timer) { clearInterval(r._timer); clearTimeout(r._timer); }
            clearWorldEventTimers(r);
            rooms.delete(rid);
          }
        }
        const list = [...rooms.values()].map(r => ({
          id: r.id, state: r.state,
          playerCount: r.players.size,
          spectatorCount: r.spectators.size,
          stageTotal: r.stageTotal > 1 ? r.stageTotal : undefined
        }));
        ws.send(JSON.stringify({ type: 'roomList', rooms: list }));
        break;
      }

      // 仅离开房间、不断开 WebSocket（用于对局结束后回大厅等）
      case 'exitToLobby': {
        if (!room) {
          ws.send(JSON.stringify({ type: 'exitedToLobby', ok: true }));
          break;
        }
        const r = room;
        const res = r.removeClient(ws);
        if (res?.type === 'player') {
          r.broadcast({ type: 'playerLeft', id: res.id, players: r.getPlayers() });
          if (r.state === 'playing' && r.isDone()) {
            setTimeout(() => r.endGame(), 2000);
          }
        }
        room = null;
        myId = null;
        spectator = false;
        if (r.players.size === 0 && r.spectators.size === 0) {
          if (r._timer) { clearInterval(r._timer); clearTimeout(r._timer); }
          clearWorldEventTimers(r);
          rooms.delete(r.id);
        }
        ws.send(JSON.stringify({ type: 'exitedToLobby', ok: true }));
        break;
      }

      case 'createRoom': {
        room = new Room();
        rooms.set(room.id, room);
        {
          let st = parseInt(msg.stageTotal, 10);
          if (!Number.isFinite(st)) st = 1;
          room.stageTotal = Math.max(1, Math.min(15, st));
        }
        const p = room.addPlayer(ws, msg.name || '玩家');
        myId = p.id;
        ws.send(JSON.stringify({
          type: 'roomCreated',
          roomId: room.id, seed: room.seed,
          playerId: myId, playerColor: p.color, playerName: p.name,
          isHost: true, players: room.getPlayers(),
          envTheme: room.envTheme,
          stageTotal: room.stageTotal
        }));
        break;
      }

      case 'joinRoom': {
        const r = rooms.get(msg.roomId);
        if (!r) { ws.send(JSON.stringify({ type: 'error', msg: '房间不存在' })); return; }
        room = r;

        // 仅在：主动观战 / 房间已满 / 已结算 时强制观战
        const forceSpectator = msg.spectate || r.state === 'finished' || r.players.size >= 20;

        if (forceSpectator) {
          spectator = true;
          r.spectators.add(ws);
          ws.send(JSON.stringify({
            type: 'joinedSpectator', roomId: r.id, seed: r.seed,
            state: r.state, players: r.getPlayers(),
            startTime: r.startTime, finishOrder: r.finishOrder,
            collectedCoins: r.state === 'playing' ? [...r.collectedCoins] : [],
            powerupClaims: r.state === 'playing' ? serializePowerupClaims(r.powerupClaims) : {},
            exclusivePowerupConsumed: r.state === 'playing' ? serializeExclusiveConsumed(r.exclusivePowerupConsumed) : [],
            worldEvent: r.state === 'playing' ? buildWorldEventSnapshot(r) : null,
            envTheme: r.envTheme,
            stageTotal: r.stageTotal,
            stageCurrent: r.state === 'playing' ? r.stageCurrent : 1
          }));
          r.broadcast({ type: 'spectatorJoined', count: r.spectators.size }, ws);
        } else {
          // 等待 / 倒计时 / 进行中 均可作为玩家加入
          const p = r.addPlayer(ws, msg.name || '玩家');
          myId = p.id;

          const isLateJoin = r.state === 'playing' || r.state === 'countdown';
          ws.send(JSON.stringify({
            type: 'joinedRoom', roomId: r.id, seed: r.seed,
            playerId: myId, playerColor: p.color, playerName: p.name,
            isHost: myId === r.hostId, players: r.getPlayers(),
            // 游戏中/倒计时加入时附带当前游戏状态，客户端直接进入游戏
            lateJoin: isLateJoin,
            gameState: r.state,
            startTime: r.startTime,
            collectedCoins: [...r.collectedCoins],
            powerupClaims: serializePowerupClaims(r.powerupClaims),
            exclusivePowerupConsumed: serializeExclusiveConsumed(r.exclusivePowerupConsumed),
            worldEvent: r.state === 'playing' ? buildWorldEventSnapshot(r) : null,
            envTheme: r.envTheme,
            stageTotal: r.stageTotal,
            stageCurrent: r.state === 'playing' ? r.stageCurrent : 1
          }));
          r.broadcast({ type: 'playerJoined', players: r.getPlayers() }, ws);
        }
        break;
      }

      case 'setReady': {
        if (!room || spectator) return;
        const p = room.players.get(myId);
        if (!p || room.state !== 'waiting') return;
        p.ready = !!msg.ready;
        room.broadcast({ type: 'playerReady', players: room.getPlayers() });
        if (room.players.size >= 1) {
          let allReady = true;
          for (const pl of room.players.values()) {
            if (!pl.ready) { allReady = false; break; }
          }
          if (allReady) room.countdown();
        }
        break;
      }

      case 'forceStart': {
        if (!room || spectator) return;
        const p = room.players.get(myId);
        if (!p || p.id !== room.hostId || room.state !== 'waiting' || room.players.size < 1) return;
        room.countdown();
        break;
      }

      case 'setRoomEnvTheme': {
        if (!room || spectator) return;
        if (room.hostId !== myId || room.state !== 'waiting') return;
        const v = msg.envTheme;
        if (v === 'random' || v === null || v === undefined) {
          room.envTheme = 'random';
        } else {
          const n = parseInt(v, 10);
          if (!Number.isFinite(n) || n < 0 || n >= MAP_THEME_COUNT) break;
          room.envTheme = n;
        }
        room.broadcast({ type: 'roomEnvTheme', envTheme: room.envTheme });
        break;
      }

      case 'setRoomStageTotal': {
        if (!room || spectator) return;
        if (room.hostId !== myId || room.state !== 'waiting') return;
        let st = parseInt(msg.stageTotal, 10);
        if (!Number.isFinite(st)) st = 1;
        room.stageTotal = Math.max(1, Math.min(15, st));
        room.broadcast({ type: 'roomStageTotal', stageTotal: room.stageTotal });
        break;
      }

      case 'updatePos': {
        // 倒计时阶段也接收位置，方便后加入的玩家被其他人看到
        if (!room || spectator || (room.state !== 'playing' && room.state !== 'countdown')) return;
        const p = room.players.get(myId);
        if (!p) return;
        p.x = msg.x; p.y = msg.y;
        p.vx = msg.vx; p.vy = msg.vy;
        p.facing = msg.facing; p.frame = msg.frame;
        p.onGround = msg.onGround; p.isAlive = msg.isAlive;
        p.away = p.finished ? false : !!msg.away;
        room.broadcast({
          type: 'peerPos', id: myId,
          x: p.x, y: p.y, vx: p.vx, vy: p.vy,
          facing: p.facing, frame: p.frame,
          onGround: p.onGround, isAlive: p.isAlive,
          away: p.away
        }, ws);
        break;
      }

      case 'collectCoin': {
        if (!room || spectator || room.state !== 'playing') return;
        const p = room.players.get(myId);
        if (!p) return;
        const coinId = msg.id;
        if (room.collectedCoins.has(coinId)) return; // 已被抢走
        room.collectedCoins.add(coinId);
        if (!p.coins) p.coins = 0;
        const v = msg.value || 1;
        p.coins += v;
        // 与客户端地图一致：星币分值恒为 5，以此判定星币（防仅伪造 coinType）
        const isStar = v === 5;
        let milestoneFirstStar = false;
        if (isStar && !room.firstStarTaken) {
          room.firstStarTaken = true;
          milestoneFirstStar = true;
        }
        room.broadcast({
          type: 'coinCollected',
          id: coinId,
          playerId: p.id,
          name: p.name,
          color: p.color,
          coins: p.coins,
          coinType: isStar ? 'star' : 'coin',
          milestoneFirstStar
        });
        maybeSpawnDynamicPowerupFromCoin(room, msg.atX, msg.atY, isStar);
        break;
      }

      case 'monsterStomped': {
        if (!room || spectator || room.state !== 'playing') return;
        room.broadcast({ type: 'monsterStomped', idx: msg.idx, playerId: myId }, ws);
        break;
      }

      case 'collectPowerup': {
        if (!room || spectator || room.state !== 'playing') return;
        const p = room.players.get(myId);
        if (!p) return;
        const pid = msg.id;
        const exclusive = powerupExclusiveMultiplayer(room.seed, pid);
        if (exclusive) {
          if (!room.exclusivePowerupConsumed) room.exclusivePowerupConsumed = new Set();
          if (room.exclusivePowerupConsumed.has(pid)) return;
          room.exclusivePowerupConsumed.add(pid);
        } else {
          if (!tryClaimPowerupForPlayer(room, p.id, pid)) return;
        }
        room.broadcast({
          type: 'powerupCollected',
          id: pid,
          playerId: p.id,
          playerName: p.name,
          playerColor: p.color,
          ptype: msg.ptype,
          exclusive
        });
        break;
      }

      case 'rainCoinCollected': {
        if (!room || spectator || room.state !== 'playing') return;
        if (room.activeEventKind !== 'coinRain') return;
        if (!room.activeEventEndsAt || Date.now() >= room.activeEventEndsAt) return;
        const p = room.players.get(myId);
        if (!p) return;
        const cnt = room.rainGrants ? (room.rainGrants.get(myId) || 0) : 0;
        if (cnt >= 34) return;
        if (room.rainGrants) room.rainGrants.set(myId, cnt + 1);
        if (!p.coins) p.coins = 0;
        p.coins += 1;
        room.broadcast({ type: 'coinsUpdated', playerId: p.id, coins: p.coins });
        break;
      }

      case 'finished': {
        if (!room || spectator) return;
        if (room._advancingStage) return;
        const p = room.players.get(myId);
        if (!p || p.finished || !p.isAlive) return;

        if (room.stageTotal > 1 && room.stageCurrent < room.stageTotal) {
          room.advanceStageFromFinish(p.id, p.name, msg.time);
          break;
        }

        p.finished = true;
        p.finishTime = msg.time;
        p.away = false;
        room.finishOrder.push({ id: p.id, name: p.name, color: p.color, time: msg.time });
        room.broadcast({
          type: 'playerFinished',
          id: p.id, name: p.name, color: p.color,
          time: msg.time, rank: room.finishOrder.length
        });
        if (room.isDone()) setTimeout(() => room.endGame(), 3000);
        break;
      }

      case 'died': {
        if (!room || spectator) return;
        const p = room.players.get(myId);
        if (!p) return;
        const lives = typeof msg.lives === 'number' ? msg.lives : 0;
        p.lives = lives;
        if (lives <= 0) {
          p.isAlive = false;
          room.broadcast({ type: 'peerDied', id: p.id, lives: 0, eliminated: true }, ws);
          if (room.isDone()) setTimeout(() => room.endGame(), 3000);
        } else {
          room.broadcast({ type: 'peerDied', id: p.id, lives, eliminated: false }, ws);
        }
        break;
      }

      case 'chat': {
        if (!room) return;
        const p = spectator ? null : room.players.get(myId);
        room.broadcast({
          type: 'chat',
          name: p?.name || '观战者',
          color: p?.color || '#aaa',
          text: String(msg.text || '').slice(0, 100),
          spectator
        });
        break;
      }
    }
  });

  ws.on('close', () => {
    if (!room) return;
    const res = room.removeClient(ws);
    if (res?.type === 'player') {
      room.broadcast({ type: 'playerLeft', id: res.id, players: room.getPlayers() });
      if (room.state === 'playing' && room.isDone()) {
        setTimeout(() => room.endGame(), 2000);
      }
    }
    if (room.players.size === 0 && room.spectators.size === 0) {
      if (room._timer) { clearInterval(room._timer); clearTimeout(room._timer); }
      rooms.delete(room.id);
    }
  });
});

server.on('error', err => {
  if (err.code === 'EADDRINUSE') {
    console.error(`错误：端口 ${PORT} 已被占用！`);
    console.error(`请换一个端口：node server.js 8083`);
    console.error(`或先关掉占用端口的进程（Windows）：`);
    console.error(`  netstat -ano | findstr :${PORT}  → 找到 PID`);
    console.error(`  taskkill /PID <PID> /F`);
  } else {
    console.error('服务器错误:', err);
  }
  process.exit(1);
});

server.listen(PORT, () => {
  console.log(`跑酷游戏服务器启动: http://localhost:${PORT}`);
  console.log('支持功能: 多人对战 | 随机地图 | 观战模式');
});
