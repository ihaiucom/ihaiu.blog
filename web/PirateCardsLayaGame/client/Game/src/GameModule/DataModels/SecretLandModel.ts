import TEXT from '../../Config/Keys/TEXT';
import Game from '../../Game';
import MModel from '../../GameFrame/Module/MModel';
import SecretLandRewardData from '../DataStructs/SecretLandRewardData';
import GetGamerSecretLandS2C = proto.GetGamerSecretLandS2C;
import GamerBuyRollS2C = proto.GamerBuyRollS2C;
import GamerSecretLand = proto.GamerSecretLand;
import GamerNotifySecretLandInfoS2C = proto.GamerNotifySecretLandInfoS2C;
import MissionData from '../DataStructs/MissionData';
import GamerNotifySLTreasureBoxS2C = proto.GamerNotifySLTreasureBoxS2C;
import GamerNotifyGamerSecretLandInfoS2C = proto.GamerNotifyGamerSecretLandInfoS2C;

export default class SecretLandModel extends MModel
{
    constructor()
    {
        super();
        this._infoData = new SecretLandInfo();
        this.treasureBox = new Dictionary<string,SecretLandTreasureBox>();
    }

    public getTreasureBox(key: string)
    {
        return this.treasureBox.getValue(key);
    }
       
    /** 大秘境Roll币积攒上限 */
    public get maxRollNum()
    {
        return Global.max_RollcoinCollect;
    }
    /** 大秘境Roll币购买次数上限 */
    public get maxRollBuyTimes()
    {
        return Global.max_RollcoinSell;
    }
    /** 大秘境Roll币消耗体力 */
    public get buyRollCost()
    {
        return Global.RollconsumePower;
    }
    /** 当前roll币数量 */
    public get rollNum()
    {
        return this._infoData.roll;
    }

    public get buyTimes()
    {
        return this._infoData.buyTimes;
    }
    
    /** 本周词缀 */
    public get thisAffixList(): number[]
    {
        return this._thisAffixList;
    }
    /** 下周词缀 */
    public get nextAffixList(): number[]
    {
        return this._nextAffixList;
    }
    /** 本周预览 */
    public get thisWeekReward(): number
    {
        return this._thisWeekReward;
    }
    /** 上周未领取物品(固定掉落) */
    public get lastWeekReward(): number
    {
        return this._lastWeekReward;
    }
    /** 上一场未领取奖励 */
    public get lastBattleReward(): SecretLandRewardData
    {
        return this._lastBattleReward;
    }
    /** 大秘境信息 */
    public get infoData()
    {
        return this._infoData;
    }

    /** 大秘境关卡数据 */
    public get missionData()
    {
        let data = MissionData.Create();
        data.id = this.infoData.checkPointID;
        return data;
    }

   
    public get buyRollCostTxt()
    {
        return TEXT.SecretLand_Buy_Roll_Tips.format(this.buyRollCost);
    }
    public get desRollTxt()
    {
        return TEXT.SecretLand_Roll_tips.format(this.maxRollBuyTimes-this.infoData.buyTimes, this.maxRollNum);
    }
    
    public SetProto(msg: GetGamerSecretLandS2C | GamerNotifyGamerSecretLandInfoS2C)
   {
       this._infoData.setProto(msg.secretLand);
       if(msg.thisWeekReward)
            this._thisWeekReward = msg.thisWeekReward;
        if(msg.lastWeekReward)
            this._lastWeekReward = msg.lastWeekReward;
        if(Object.keys(msg.lastBattleReward).length > 0)
            this._lastBattleReward = SecretLandRewardData.Create(msg.lastBattleReward);
   }
    public SetAffixProto(msg: GamerNotifySecretLandInfoS2C)
   {
        this._thisAffixList = [];
        this._nextAffixList = [];
        msg.thisAffixList && (this._thisAffixList = msg.thisAffixList);
        msg.nextAffixList && (this._nextAffixList = msg.nextAffixList);
        this._checkpointMap = msg.checkpointMap;
   }

    public SetTreasureBox(msg: GamerNotifySLTreasureBoxS2C)
    {
        this.treasureBox.add(msg.boxKey,SecretLandTreasureBox.Create(msg.treasureBox)) ;
    }
    public SetRollProto(rollNum: number)
   {
       this._infoData.roll = rollNum;
       this._infoData.buyTimes++;
   }

   

   /** 获取地图的随机幕 */
   public GetRandomMapIndexs(checkpointId: number)
   {
        return this._checkpointMap.find((map)=> checkpointId == map.checkpointID).mapChoose;
   }

//-------------------------------PRIVATE

    private treasureBox: Dictionary<string,SecretLandTreasureBox>;

    private _infoData: SecretLandInfo;
    /** 本周词缀 */
    private _thisAffixList: number[] = [];
    /** 下周词缀 */
    private _nextAffixList: number[] = [];
    /** 本周预览 */
    private _thisWeekReward: number = 0;
    /** 上周未领取物品 */
    private _lastWeekReward: number = 0;
    /** 上一场未领取奖励 */
    private _lastBattleReward: SecretLandRewardData;

    private _checkpointMap: proto.ISecretLandMap[];
    
    private Clear()
    {

    }
}

/**
 * 大秘境信息
 */
export class SecretLandInfo extends proto.GamerSecretLand
{
    /**钥石 */
    public get keystoneTxt(): string
    {
        return TEXT.SecretLand_CurrentKeyStone.format(this.keyStone);
    }

    public get newKeystoneTxt(): string
    {
        let name = "";
        let config = Game.config.checkPoint.getConfig(this.checkPointID);
        if(config)
            name = config.name;
        return TEXT.SecretLand_New_Keystone.format(name,this.checkPointID);
    }
    /**roll币数量 */
    // public roll: number;
    /**上次购买时间 */
    // public lastRollTime: number;
    /**当天已购买roll币次数 */
    // public buyTimes: number;
    /**历史最高层数 */
    public get bestScoreTxt(): string
    {
        let scoreStr = "";
        let config = Game.config.secretLand.getConfig(this.highestLevel);
        if(config)
            scoreStr = TEXT.SecretLand_BestScore.format(config.name);
        return scoreStr;
    }
    /**本周最高层数 */
    public weekHighestLevel: number;
    /**上一次更新周记录时间，用来开箱子&更新周 */
    public lastTimestamp: number;

    public static Create(msg: proto.IGamerSecretLand)
    {
        let land = new SecretLandInfo();
        land.setProto(msg);
        return land;
    }
    
    public setProto(msg?: any)
    {
        this.reset();
        for(const key in msg)
        {
            this[key] = msg[key];
        }
    }

    private reset()
    {
        this.id = 1;
        this.keyStone = 1;
        this.checkPointID = 40000;
        this.roll = 0;
        this.lastRollTime = 0;
        this.buyTimes = 0;
        this.highestLevel = 1;
        this.weekHighestLevel = 1;
        this.lastTimestamp = 0;
    }
}

export class SecretLandTreasureBox extends proto.SecretLandTreasureBox
{
    public static Create(msg: proto.ISecretLandTreasureBox)
    {
        let land = new SecretLandTreasureBox();
        land.setProto(msg);
        return land;
    }
    public setProto(msg?: any)
    {
        this.reset();
        for(const key in msg)
        {
            this[key] = msg[key];
        }
    }
    public reset()
    {
        this.no = ""; // 编号，可以由teamid组成
        this.timeStamp = 0; // 创建时间戳，0表示已领取
        this.items = []; // 宝箱内容
        this.gidList = []; // 玩家列表
        this.rewardID = 0; // 基础奖励
        this.teamID = 0; // 队伍编号
        this.receive = []; // 是否领取
    }
}