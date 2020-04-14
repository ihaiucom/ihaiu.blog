import Game from "../../Game";
import CardFactory from "./CardFactory";
import keyboardManager from "./KeyboardManager";
import GameStatus from "./GameStatus";
import Consts from "../Consts";
import RandomHelper from "../RandomHelper";
import { CardGenerationType } from "../enums/CardGenerationType";
import { MoveType } from "../enums/MoveType";

export default class Field
{
    step = 1;
    game: Game;
    cardFactory: CardFactory;
    keyboardManager: keyboardManager;

    field: FieldItems;

    // 鼠标按下的卡牌
    downPointer: Card;

    constructor(game: Game, cardFactory: CardFactory, keyboardManager: keyboardManager)
    {
        this.game = game;
        this.cardFactory = cardFactory;
        this.keyboardManager = keyboardManager;
    }

    initField()
    {
        var list = [],
        columnCount = GameStatus.ColumnCount,
        rowCount = GameStatus.RowCount,
        animationTime = Consts.AnimationTime - (rowCount * columnCount == 9 ? 0 : 50);

        this.field = new FieldItems(columnCount, rowCount);
        
        for (var randomVal = RandomHelper.getRandomIntInclusive(1, 5), row = 0; row < rowCount; row++) 
        {
            for (var column = 0; column < columnCount; column++) 
            {
                var hero = undefined,
                // 是否是英雄开始位置所在行
                isHeroStartRow = row === Consts.HeroStartRow - 1,
                // 是否是英雄开始位置所在列
                isHeroStartColumn = column === Consts.HeroStartColumn - 1;
                
                if (isHeroStartRow && isHeroStartColumn)
                {
                    hero = this.cardFactory.getHero();
                    hero.shape.name = Consts.Hero,
                    GameStatus.isHeroAlive = false,
                    GameStatus.isGameEnd = false;
                }
                else if (GameStatus.isTutorialSeen)
                {
                    hero = this.getCardFromFactory();
                }
                // 英雄右侧格子，显示新手教程 手指
                else if (isHeroStartRow && column === Consts.HeroStartColumn) 
                {
                    hero = this.getEnemyCardFromFactory(randomVal);
                    var u = new Arm(this.game, -30, 30);
                    hero.shape.name = Consts.CardWithArm;
                    hero.shape.add(u);
                } 
                else
                {
                    if(row === Consts.HeroStartRow && column === Consts.HeroStartColumn)
                    {
                        hero = this.getHealsCardFromFactory(randomVal);
                        this.movingArm = new Arm(this.game, -30, -50);
                        this.movingArm.alpha = 0;
                        hero.shape.add(this.movingArm);
                        hero.shape.name = Consts.CardWithMovingArm;
                        this.movingArmY = -200;

                    }
                    else
                    {
                        hero = this.getCardFromFactory();
                    }
                   
                } 
                var fieldPosition = new FieldPosition(column, row),
                l = this.cardFactory.getDefault();
                list.push(this.moveAndSetWithAnimation(fieldPosition, l, animationTime)),
                list.push(this.replaceCardByPosition(fieldPosition, hero).setAnimationDuration(1))
            }
        }

        if(GameStatus.isTutorialSeen)
        {
            return GameStatus.isTutorialSeen;
        }
        else
        {
            this.addShadow();
        }
        return list;
    }

    // 添加遮罩
    addShadow()
    {
        var e = this.game.add.graphics(0, 0);
        e.name = Consts.Shadow,
        e.alpha = .5,
        e.beginFill(0),
        e.drawRect(2 * -this.game.width, 2 * -this.game.height, 4 * this.game.width, 4 * this.game.height),
        this.cardFactory.container.add(e),
        this.cardFactory.container.bringToTop(this.cardFactory.container.getByName(Consts.Hero)),
        this.cardFactory.container.bringToTop(this.cardFactory.container.getByName(Consts.CardWithArm))
    }

    // 手指 动画
    runArmTween()
    {
        var e = this.cardFactory.container.getByName(Consts.Shadow);
        e && this.cardFactory.container.bringToTop(e),
        this.cardFactory.container.bringToTop(this.cardFactory.container.getByName(Consts.Hero)),
        this.cardFactory.container.bringToTop(this.cardFactory.container.getByName(Consts.CardWithMovingArm)),
        this.movingArm.alpha = 1,
        this.movingArm.y = this.movingArmY;
        var i = this.movingArmY + 150,
        o = this.game.add.tween(this.movingArm).to({
            y: this.movingArmY
        },
        200).to({
            y: i
        },
        600),
        n = this.game.add.tween(this.movingArm).to({
            y: i
        },
        200);
        o.onStart.add(function() {
            this.movingArm.changeFrame(1)
        },
        this),
        n.onStart.add(function() {
            this.movingArm.changeFrame(0)
        },
        this),
        n.onComplete.add(this.runArmTween, this),
        o.chain(n),
        o.start()
    }

    // 生产卡牌 宝箱
    getChestCardFromFactory()
    {
        var card = this.cardFactory.getChestCard();
        card.setOnClickEvent(this.onCardDown, this.onCardUp, this);
        return card;
    }

    // 生产卡牌 根据生成随机类型
    getCardFromFactory(generationType:CardGenerationType = CardGenerationType.Random, i = 0)
    {
        var card = this.cardFactory.getCard(generationType, i, this.getCardTypesOnTheTable());
        if(GameStatus.isTutorialSeen)
        {
            card.setOnClickEvent(this.onCardDown, this.onCardUp, this);
        }
        return card;
    }

    // 生成卡牌 敌人小兵
    getEnemyCardFromFactory(t)
    {
        var card = this.cardFactory.getEnemy(t);
        card.setOnClickEvent(this.onCardDown, this.onCardUp, this);
        return card;
    }

    // 生成卡牌 血量
    getHealsCardFromFactory(t)
    {
        return this.cardFactory.getHealth(t)
    }

    // 获取所有卡牌类型
    getCardTypesOnTheTable()
    {
        return this.field.getAll().filter(function(e) {
            return e instanceof Card
        }).map(function(t) {
            return t.type
        })
    }

    // 生成卡牌 金币
    getCoinCardFromFactory(t)
    {
        var card = this.cardFactory.getCoinCard(t);
        card.setOnClickEvent(this.onCardDown, this.onCardUp, this);
        return card
    }

    onCardDown(t, e, i, o)
    {
        this.downPointer = e;
    }

    onCardUp(e, i, o, card)
    {
        if (!this.onAnimation) 
        {
            var point = new Phaser.Point(this.downPointer.x, this.downPointer.y),
            point2 = new Phaser.Point(i.x, i.y);
            if (point.distance(point2) > 5) return;
            var field = this.field.getPosition(function(t) {
                return t === card
            });
            if (!field) return;

            if (this.field.isPositionValid(field.getNewPosition(MoveType.Down)) && this.field.get(field.getNewPosition(MoveType.Down)) instanceof Hero) return void(this.keyboardManager.isUp = true);
            if (this.field.isPositionValid(field.getNewPosition(MoveType.Up)) && this.field.get(field.getNewPosition(MoveType.Up)) instanceof Hero) return void(this.keyboardManager.isDown = true);
            if (this.field.isPositionValid(field.getNewPosition(MoveType.Left)) && this.field.get(field.getNewPosition(MoveType.Left)) instanceof Hero) return void(this.keyboardManager.isRight = true);
            if (this.field.isPositionValid(field.getNewPosition(MoveType.Right)) && this.field.get(field.getNewPosition(MoveType.Right)) instanceof Hero) return void(this.keyboardManager.isLeft = true);
            card.playNoAccess()
        }
    }
}

var e = function() {
   
    e.prototype.getHero = function() {
        return this.field.get(this.getHeroPosition())
    },
    e.prototype.getHeroPosition = function() {
        return this.field.getPosition(function(e) {
            return e instanceof t.Hero
        })
    },
    e.prototype.getCardToFight = function(e) {
        var i = this.field.getPosition(function(e) {
            return e instanceof t.Hero
        });
        if (null != i) {
            var o = i.getNewPosition(e);
            if (this.field.isPositionValid(o)) return this.field.get(o)
        }
        return null
    },
    e.prototype.replaceCard = function(e, i, o) {
        void 0 === o && (o = 0);
        var n = this.field.getPosition(function(e) {
            return e instanceof t.Hero
        }),
        s = Array(),
        a = this.getCardFromFactory(i, o);
        return s.push(this.replaceCardByPosition(n.getNewPosition(e), a)),
        t.GameStatus.isTutorialSeen || a.setOnClickEvent(this.onCardDown, this.onCardUp, this),
        s
    },
    e.prototype.tutorialStep1 = function() {
        var e = this;
        this.movingArm.animations.stop(),
        this.runArmTween(),
        t.GameStatus.isTutorialStep1Done = !0,
        this.field.getAll().forEach(function(i) {
            i instanceof t.Card && i.shape.name === t.Consts.CardWithMovingArm && i.setOnClickEvent(e.onCardDown, e.onCardUp, e)
        })
    },
    e.prototype.tutorialStep2 = function(e) {
        t.GameStatus.isTutorialStep2Done = !0,
        this.runAllCardsAroundHero(e)
    },
    e.prototype.tutorialStep3 = function(t) {
        this.runAllCardsAroundHero(t)
    },
    e.prototype.tutorialStep4 = function() {
        var e = this.cardFactory.container.getByName(t.Consts.Shadow);
        this.game.add.tween(e).to({
            alpha: 0
        },
        100).start().onComplete.add(function() {
            var i = this;
            e.destroy(),
            t.GameStatus.isTutorialSeen = !0,
            this.field.getAll().forEach(function(e) {
                e instanceof t.Card && e.setOnClickEvent(i.onCardDown, i.onCardUp, i)
            })
        }.bind(this))
    },
    e.prototype.runAllCardsAroundHero = function(e) {
        for (var i = 0,
        o = [e.getNewPosition(t.MoveType.Left), e.getNewPosition(t.MoveType.Up), e.getNewPosition(t.MoveType.Right), e.getNewPosition(t.MoveType.Down)]; i < o.length; i++) {
            var n = o[i];
            if (this.field.isPositionValid(n)) {
                var s = this.field.get(n);
                this.cardFactory.container.bringToTop(s.shape),
                s instanceof t.Card && s.setOnClickEvent(this.onCardDown, this.onCardUp, this)
            }
        }
    },
    e.prototype.move = function(e) {
        var i = Array(),
        o = this.getHeroPosition(),
        n = o.getNewPosition(e),
        s = this.field.get(n);
        if (s instanceof t.NullCard) return i;
        this.isPlayMove(s) && setTimeout(this.playMoveSound.bind(this), 115);
        var a, r = this.field.get(o);
        if (s.type === t.CardScoreType.Bomb) i.push(this.moveAndSetWithAnimation(o.getNewPosition(e), r, t.Consts.AnimationTime).setAnimationDuration(1)),
        i.push(this.moveAndSetWithAnimation(o, s, t.Consts.AnimationTime));
        else {
            s.isBoss() && t.GameStatus.gameLevel++;
            var h = this.getCardPositionType(e, o),
            d = this.getCardToReplace(s),
            c = new t.TweenContainer;
            switch ((a = c.tweens).push.apply(a, s.removeChild()), i.push(c), h) {
            case t.CardPositionType.Center:
                switch (i.push(this.moveAndSetWithAnimation(o.getNewPosition(e), r, t.Consts.AnimationTime)), e) {
                case t.MoveType.Left:
                    0 === o.row ? i.push.apply(i, this.moveAllLine(t.MoveType.Down, t.MoveType.Up, o.getNewPosition(t.MoveType.Down), d)) : i.push.apply(i, this.moveAllLine(t.MoveType.Up, t.MoveType.Down, o.getNewPosition(t.MoveType.Up), d));
                    break;
                case t.MoveType.Right:
                    o.row === this.field.getRowCount() - 1 ? i.push.apply(i, this.moveAllLine(t.MoveType.Up, t.MoveType.Down, o.getNewPosition(t.MoveType.Up), d)) : i.push.apply(i, this.moveAllLine(t.MoveType.Down, t.MoveType.Up, o.getNewPosition(t.MoveType.Down), d));
                    break;
                case t.MoveType.Up:
                    o.column === this.field.getColumnCount() - 1 ? i.push.apply(i, this.moveAllLine(t.MoveType.Left, t.MoveType.Right, o.getNewPosition(t.MoveType.Left), d)) : i.push.apply(i, this.moveAllLine(t.MoveType.Right, t.MoveType.Left, o.getNewPosition(t.MoveType.Right), d));
                    break;
                case t.MoveType.Down:
                    0 === o.column ? i.push.apply(i, this.moveAllLine(t.MoveType.Right, t.MoveType.Left, o.getNewPosition(t.MoveType.Right), d)) : i.push.apply(i, this.moveAllLine(t.MoveType.Left, t.MoveType.Right, o.getNewPosition(t.MoveType.Left), d))
                }
                break;
            case t.CardPositionType.End:
                i.push.apply(i, this.moveAllLine(this.getOppositeMoveType(e), e, o, d))
            }
        }
        if (!t.GameStatus.isTutorialSeen) {
            var u, p = this.cardFactory.container.getByName(t.Consts.Shadow);
            if (p && this.cardFactory.container.bringToTop(p), this.cardFactory.container.bringToTop(this.cardFactory.container.getByName(t.Consts.Hero)), this.cardFactory.container.bringToTop(s.shape), 1 === this.step)(u = i[i.length - 1]).tweens[u.tweens.length - 1].onComplete.add(function() {
                this.tutorialStep1()
            }.bind(this));
            if (2 === this.step)(u = i[i.length - 1]).tweens[u.tweens.length - 1].onComplete.add(function() {
                this.tutorialStep2(n)
            }.bind(this));
            if (3 === this.step)(u = i[i.length - 1]).tweens[u.tweens.length - 1].onComplete.add(function() {
                this.tutorialStep3(n)
            }.bind(this));
            if (4 === this.step)(u = i[i.length - 1]).tweens[u.tweens.length - 1].onComplete.add(function() {
                this.tutorialStep4()
            }.bind(this));
            this.step++
        }
        return i
    },
    e.prototype.isPlayMove = function(e) {
        switch (e.type) {
        case t.CardScoreType.Warrior:
            return ! 1;
        case t.CardScoreType.Trap:
            return ! e.shape.getByName(t.Consts.CardManAnimation).isOpen;
        case t.CardScoreType.Health:
        case t.CardScoreType.Gold:
        case t.CardScoreType.Armor:
        case t.CardScoreType.Cannon:
        case t.CardScoreType.Barrel:
        case t.CardScoreType.Chest:
        case t.CardScoreType.Bomb:
        case t.CardScoreType.Poison:
        case t.CardScoreType.Horseshoe:
        case t.CardScoreType.Lightning:
        case t.CardScoreType.Multiplier:
        case t.CardScoreType.Skull:
            return ! 0
        }
    },
    e.prototype.playMoveSound = function() {
        t.SoundController.instance.playSound(Phaser.ArrayUtils.getRandomItem([t.SoundConsts.Move01, t.SoundConsts.Move02]))
    },
    e.prototype.getCardToReplace = function(e) {
        return e.shape.getByName(t.Consts.CardManAnimation) instanceof t.Boss ? this.getChestCardFromFactory() : this.getCardFromFactory()
    },
    e.prototype.getCardToReplaceAfterSmash = function(e) {
        e.shape.getByName(t.Consts.CardManAnimation) instanceof t.Boss && (t.GameStatus.isNeedCreateChestOnNextStep = !0);
        var i = e.getGoldValue() > 0 ? e.getGoldValue() : e.getScore();
        return this.getCoinCardFromFactory(i)
    },
    e.prototype.getCardPositionType = function(e, i) {
        switch (e) {
        case t.MoveType.Right:
            return i.column == this.field.getColumnCount() - 1 ? t.CardPositionType.Start: 0 == i.column ? t.CardPositionType.Center: t.CardPositionType.End;
        case t.MoveType.Down:
            return i.row == this.field.getRowCount() - 1 ? t.CardPositionType.Start: 0 == i.row ? t.CardPositionType.Center: t.CardPositionType.End;
        case t.MoveType.Left:
            return 0 == i.column ? t.CardPositionType.Start: i.column == this.field.getColumnCount() - 1 ? t.CardPositionType.Center: t.CardPositionType.End;
        case t.MoveType.Up:
            return 0 == i.row ? t.CardPositionType.Start: i.row == this.field.getRowCount() - 1 ? t.CardPositionType.Center: t.CardPositionType.End
        }
    },
    e.prototype.removeAllChild = function() {
        var e = [];
        t.SoundController.instance.playSound(t.SoundConsts.HeroDies);
        for (var i, o = this.field.getAll(), n = 0, s = o = t.RandomHelper.shuffle(o); n < s.length; n++) {
            var a = s[n],
            r = new t.TweenContainer;
            r.animationDuration = t.RandomHelper.getRandomIntInclusive(50, 150),
            (i = r.tweens).push.apply(i, a.removeChild()),
            e.push(r)
        }
        return e
    },
    e.prototype.isBossInTheField = function() {
        return this.field.any(function(e) {
            return ! (e instanceof t.NullCard) && e.shape.getByName(t.Consts.CardManAnimation) instanceof t.Boss
        })
    },
    e.prototype.moveAllLine = function(e, i, o, n) {
        for (var s = [], a = t.Consts.AnimationTime * t.Consts.AnimationMultiplier; this.field.isPositionValid(o);) s.push(this.moveAndSetWithAnimation(o.getNewPosition(i), this.field.get(o), t.Consts.AnimationTime).setAnimationDuration(a)),
        o = o.getNewPosition(e);
        var r = this.cardFactory.getDefault(),
        h = o.getNewPosition(i);
        return s.push(this.moveAndSetWithAnimation(h, r, t.Consts.AnimationTime)),
        s.push(this.replaceCardByPosition(h, n).setAnimationDuration(1)),
        s
    },
    e.prototype.stepUpdate = function() {
        for (var e = 0,
        i = this.field.getAll(); e < i.length; e++) {
            var o = i[e];
            o.shape.getByName(t.Consts.CardManAnimation) instanceof t.Boss && this.cardFactory.container.bringToTop(o.shape),
            o.stepUpdate()
        }
    },
    e.prototype.shootCannon = function() {
        t.SoundController.instance.playSound(t.SoundConsts.Cannon);
        var e = this.getHeroPosition(),
        i = this.field.get(e),
        o = [];
        return o.push.apply(o, this.shootCannonInDirection(t.MoveType.Right, i, e)),
        o.push.apply(o, this.shootCannonInDirection(t.MoveType.Left, i, e)),
        o.push.apply(o, this.shootCannonInDirection(t.MoveType.Up, i, e)),
        o.push.apply(o, this.shootCannonInDirection(t.MoveType.Down, i, e)),
        o
    },
    e.prototype.shootCannonInDirection = function(e, i, o) {
        var n = [],
        s = o.getNewPosition(e);
        if (!this.field.isPositionValid(s)) return n;
        var a = this.field.get(s);
        if (t.Field.canShootCard(a)) {
            if (n.push(this.shootCard(i.getCenterX(), i.getCenterY(), a.getCenterX(), a.getCenterY(), 200)), a.type === t.CardScoreType.Cannon) a.increaseScoreInNSeconds(i.shootScore, 400);
            else if (i.shootScore >= a.getScore()) {
                var r = this.getCardToReplaceAfterSmash(a),
                h = this.replaceCardByPosition(s, r, !0).setAnimationDuration(1);
                h.tweens[0].delay(400),
                n.push(h)
            } else a.reduceScoreInNSeconds(i.shootScore, 400)
        }
        return n
    },
    e.prototype.shootCard = function(e, i, o, n, s) {
        var a = t.ShapeFactoryHelper.getShape(this.game, e, i, t.ArtConsts.Items1, t.ArtConsts.Core);
        this.cardFactory.container.add(a);
        var r = this.game.add.tween(a).to({
            x: o,
            y: n
        },
        s);
        r.onUpdateCallback(this.onCoreFlyingUpdate, this),
        r.onComplete.add(this.onCoreFlyingComplete, this);
        var h = new t.TweenContainer;
        return h.animationDuration = 1,
        h.tweens.push(r),
        h
    },
    e.prototype.onCoreFlyingUpdate = function(e) {
        var i = new t.CannonFlyingSmoke(this.game, e.target.x, e.target.y);
        this.cardFactory.container.add(i)
    },
    e.prototype.onCoreFlyingComplete = function(t) {
        this.addBombExplosionAnimation(t.x, t.y, 0),
        t.kill()
    },
    e.canShootCard = function(e) {
        if (e instanceof t.NullCard) return ! 1;
        if (! (e instanceof t.Card)) return ! 0;
        switch (e.type) {
        case t.CardScoreType.Warrior:
        case t.CardScoreType.Trap:
        case t.CardScoreType.Armor:
        case t.CardScoreType.Health:
        case t.CardScoreType.Poison:
        case t.CardScoreType.Cannon:
            return ! 0;
        default:
            return ! 1
        }
    },
    e.prototype.smashBomb = function() {
        for (var e = [], i = 0, o = this.field.getPositions(function(e) {
            var i = e;
            return i && i.type === t.CardScoreType.Bomb && i.getPowerUp() <= 0
        }); i < o.length; i++) {
            var n = o[i];
            t.SoundController.instance.playSound(t.SoundConsts.Bomb);
            var s = this.field.get(n);
            this.addBombExplosionAnimation(s.shape.x, s.shape.y, 100);
            var a = this.getCardToReplaceAfterSmash(this.field.get(n)),
            r = this.replaceCardByPosition(n, a, !0);
            e.push(r);
            for (var h = s.getLife(), d = 0, c = [t.MoveType.Up, t.MoveType.Down, t.MoveType.Left, t.MoveType.Right]; d < c.length; d++) {
                var u = c[d];
                if (e.push.apply(e, this.smashBombInDirection(u, n, h)), !t.GameStatus.isHeroAlive) return e
            }
        }
        return e
    },
    e.prototype.smashBombInDirection = function(e, i, o) {
        var n = [],
        s = t.Consts.SmashDelay;
        for (i = i.getNewPosition(e); this.field.isPositionValid(i);) {
            if (n.push.apply(n, this.smashBombInPosition(i, s, o)), !t.GameStatus.isHeroAlive) return n;
            s += t.Consts.SmashDelay,
            i = i.getNewPosition(e)
        }
        return n
    },
    e.prototype.smashBombInPosition = function(e, i, o) {
        var n = this.field.get(e),
        s = 4 == t.GameStatus.RowCount ? 1e3: 500;
        if (this.game.camera.shake(t.Consts.ShakeIntensity, s), this.addBombExplosionAnimation(n.shape.x, n.shape.y, i), n.type == t.CardScoreType.Chest) return [];
        if (n instanceof t.Hero && t.GameStatus.currentHero == t.HeroType.Bomb) return [];
        if (o >= n.getScore()) {
            if (! (n instanceof t.Hero)) {
                var a = this.getCardToReplaceAfterSmash(n);
                return [this.replaceCardByPosition(e, a, !0).setAnimationDuration(1)]
            }
            if (!t.GameStatus.isHeart) return t.GameStatus.isHeroAlive = !1,
            this.removeAllChild();
            t.GameStatus.isHeart = !1,
            this.keyboardManager.reset(),
            n.useHeart()
        } else n.reduceScoreInNSeconds(o, 1.2 * i);
        return []
    },
    e.prototype.addBombExplosionAnimation = function(t, e, i) {
        setTimeout(this.playBombExplosionAnimation.bind(this, t, e), i)
    },
    e.prototype.playBombExplosionAnimation = function(e, i) {
        var o = new t.Boom(this.game, e, i);
        o.play(t.AnimationConsts.Action, 60, !1, !0),
        this.cardFactory.container.add(o)
    },
    e.prototype.replaceCardByPosition = function(e, i, o) {
        void 0 === o && (o = !1);
        var n, s, a = new t.TweenContainer,
        r = this.field.get(e),
        h = r.shape.getByName(t.Consts.CardManAnimation);
        return a.tweens.push(),
        o || (h instanceof t.Chest && (n = a.tweens).push.apply(n, h.open()), h instanceof t.Barrel && (this.cardFactory.container.bringToTop(r.shape), (s = a.tweens).push.apply(s, h.open()))),
        r.isBoss() && t.GameStatus.gameLevel++,
        this.moveAndSet(e, i),
        i.endTurnAnimationStart(),
        a.tweens.push(r.startTurnAnimation(i.endTurnAnimationEnd.bind(i))),
        a
    },
    e.prototype.moveAndSet = function(t, e) {
        this.field.set(t, e),
        e.setCoordinate(t.getPoint())
    },
    e.prototype.moveAndSetWithAnimation = function(e, i, o) {
        var n = e.getPoint();
        this.field.set(e, i);
        var s = new t.TweenContainer;
        return s.tweens.push(i.moveTo(n, o)),
        s
    },
    e.prototype.getOppositeMoveType = function(e) {
        switch (e) {
        case t.MoveType.Up:
            return t.MoveType.Down;
        case t.MoveType.Down:
            return t.MoveType.Up;
        case t.MoveType.Left:
            return t.MoveType.Right;
        case t.MoveType.Right:
            return t.MoveType.Left
        }
    },
    e.prototype.shootLightning = function() {
        var e = this.getHeroPosition(),
        i = this.field.get(e),
        o = [];
        return o.push.apply(o, this.shootLightningInAllDirections(i.lightningScore, e, t.Consts.LightningDuration)),
        this.clearLightning(),
        o.length > 0 && t.SoundController.instance.playSound(t.SoundConsts.Lighting),
        o
    },
    e.prototype.clearLightning = function() {
        this.field.getAll().forEach(function(t) {
            t.canLightningStrike = !1
        })
    },
    e.prototype.shootLightningInAllDirections = function(e, i, o) {
        var n = [];
        return n.push.apply(n, this.shootLightningInDirection(t.MoveType.Right, e, i, o)),
        n.push.apply(n, this.shootLightningInDirection(t.MoveType.Left, e, i, o)),
        n.push.apply(n, this.shootLightningInDirection(t.MoveType.Up, e, i, o)),
        n.push.apply(n, this.shootLightningInDirection(t.MoveType.Down, e, i, o)),
        n
    },
    e.prototype.shootLightningInDirection = function(i, o, n, s) {
        var a = [],
        r = n.getNewPosition(i);
        if (!this.field.isPositionValid(r)) return a;
        var h, d = this.field.get(r);
        if (d instanceof t.Hero) return a;
        if (d.canLightningStrike) return a;
        if (e.canShootLightning(d)) {
            var c = s + t.Consts.LightningDuration,
            u = new t.TweenContainer;
            if ((h = u.tweens).push.apply(h, d.runLightning()), u.setAnimationDuration(t.Consts.LightningDuration), a.push(u), o >= d.getScore()) {
                var p = this.getCardToReplaceAfterSmash(d);
                p.canLightningStrike = !0;
                var l = this.replaceCardByPosition(r, p, !0).setAnimationDuration(1);
                l.tweens[0].delay(2 * c),
                a.push(l)
            } else d.reduceScoreInNSeconds(o, 2 * c);
            d.canLightningStrike = !0,
            a.push.apply(a, this.shootLightningInAllDirections(o, r, c))
        }
        return a
    },
    e.canShootLightning = function(e) {
        if (e instanceof t.NullCard) return ! 1;
        if (! (e instanceof t.Card)) return ! 0;
        switch (e.type) {
        case t.CardScoreType.Warrior:
        case t.CardScoreType.Trap:
            return ! 0;
        default:
            return ! 1
        }
    },
    e.prototype.shootMultiplier = function() {
        t.SoundController.instance.playSound(t.SoundConsts.Idol);
        var e = this.getHeroPosition(),
        i = this.field.get(e),
        o = [];
        return o.push.apply(o, this.shootMultiplierInDirection(t.MoveType.Right, i.multiplierScore, e)),
        o.push.apply(o, this.shootMultiplierInDirection(t.MoveType.Left, i.multiplierScore, e)),
        o.push.apply(o, this.shootMultiplierInDirection(t.MoveType.Up, i.multiplierScore, e)),
        o.push.apply(o, this.shootMultiplierInDirection(t.MoveType.Down, i.multiplierScore, e)),
        o
    },
    e.prototype.shootSkull = function() {
        t.SoundController.instance.playSound(t.SoundConsts.Skull);
        for (var e = this.getHeroPosition().getPoint(), i = [], o = 0, n = this.field.getPositions(function(e) {
            return ! (e instanceof t.Hero)
        }); o < n.length; o++) {
            var s = n[o],
            a = s.getPoint();
            i.push(this.shootSkullInCoordinate(e.x, e.y, a.x, a.y, 300));
            var r = this.getCardToReplaceAfterSmash(this.field.get(s)),
            h = this.replaceCardByPosition(s, r, !0).setAnimationDuration(1);
            h.tweens[0].delay(350),
            i.push(h)
        }
        return i
    },
    e.prototype.shootSkullInCoordinate = function(e, i, o, n, s) {
        var a = new t.Skull(this.game, e, i);
        a.animations.play(t.AnimationConsts.Action),
        a.anchor.set(0, 0),
        a.rotation = Phaser.Point.angle(new Phaser.Point(o, n), new Phaser.Point(e, i)),
        this.cardFactory.container.add(a);
        var r = this.game.add.tween(a).to({
            x: o,
            y: n
        },
        s);
        r.onUpdateCallback(this.onSkullFlyingUpdate, this),
        r.onComplete.add(this.onSkullFlyingComplete, this);
        var h = new t.TweenContainer;
        return h.animationDuration = 1,
        h.tweens.push(r),
        h
    },
    e.prototype.onSkullFlyingUpdate = function(e) {
        var i = new t.SkullLight(this.game, e.target.x, e.target.y);
        this.cardFactory.container.addChild(i),
        e.target.bringToTop()
    },
    e.prototype.onSkullFlyingComplete = function(t) {
        this.addBombExplosionAnimation(t.x, t.y, 0),
        t.kill()
    },
    e.prototype.shootMultiplierInDirection = function(i, o, n) {
        var s = [],
        a = n.getNewPosition(i);
        if (!this.field.isPositionValid(a)) return s;
        var r = this.field.get(a);
        if (e.canMultiply(r.type, r.getScore())) {
            var h = r.multiplyScore(o);
            if (!h) return s;
            var d = (new t.TweenContainer).setAnimationDuration(1);
            return d.tweens.push(h),
            s.push(d),
            s
        }
    },
    e.canMultiply = function(e, i) {
        switch (e) {
        case t.CardScoreType.Armor:
        case t.CardScoreType.Bomb:
        case t.CardScoreType.Cannon:
        case t.CardScoreType.Gold:
        case t.CardScoreType.Health:
        case t.CardScoreType.Lightning:
        case t.CardScoreType.Poison:
        case t.CardScoreType.Warrior:
        case t.CardScoreType.Barrel:
            return ! 0;
        case t.CardScoreType.Trap:
            return i > 0;
        case t.CardScoreType.Multiplier:
        case t.CardScoreType.Horseshoe:
        case t.CardScoreType.Chest:
        case t.CardScoreType.Skull:
            return ! 1
        }
    },
    e.prototype.stopAllAnimations = function() {
        for (var e = 0,
        i = this.field.getAll(); e < i.length; e++) {
            i[e].shape.children.filter(function(e) {
                return e instanceof t.SpriteAnimationBase
            }).forEach(function(t) {
                t.stopAnimation()
            })
        }
    },
    e.prototype.playAllAnimations = function() {
        for (var e = 0,
        i = this.field.getAll(); e < i.length; e++) {
            i[e].shape.children.filter(function(e) {
                return e instanceof t.SpriteAnimationBase
            }).forEach(function(t) {
                t.playAnimation()
            })
        }
    },
    e.prototype.replaceAllNegativeCards = function() {
        for (var e = [], i = 0, o = this.field.getPositions(function(e) {
            return ! (e instanceof t.Hero)
        }); i < o.length; i++) {
            var n = o[i];
            if (this.field.get(n).isNegative()) {
                var s = this.getCardFromFactory(t.CardGenerationType.Positive),
                a = this.replaceCardByPosition(n, s, !0).setAnimationDuration(1);
                a.tweens[0].delay(200),
                e.push(a)
            }
        }
        return e
    },
    e.prototype.smashHero = function(t) {
        var e = this.getHero();
        this.addBombExplosionAnimation(e.shape.x, e.shape.y, t)
    },
    e
} ();
t.Field = e