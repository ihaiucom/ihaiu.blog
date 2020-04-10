import Game from "../../Game";
import TEXT from '../../Config/Keys/TEXT';
import ItemData from './ItemData';
import CheckPointConfig from '../../Config/ConfigExtends/CheckPointConfig';
import SweepRewardData from "./SweepRewardData";

/** 每一关的数据 */
export default class MissionData extends proto.CheckPoint
{
    id: number = 0;
    /** 星级 */
    star: number = 0;

    type: number = 0;

    isActive: boolean = false;

    get isBoss(): boolean
    {
        return this.config.bossIconUrl?true:false;
    }

    get chapterId(): number
    {
        return this.config.chapter;
    }

    get mapId(): number
    {
        return this.config.mapID;
    }

    static Create(check?: proto.ICheckPoint): MissionData
    {
        let missionData = new MissionData();
        if(check)
        {
            for (let key in check) {
                missionData[key] = check[key];
            }
        }
        return missionData;
    }

    public setProto(check?: proto.ICheckPoint)
    {
        if(check)
        {
            for(let key in check)
            {
                this[key] = check[key];
            }
        }
        this.isActive = true;
    }
    
    get config(): CheckPointConfig
    {
        
        return Game.config.checkPoint.getConfig(this.id);
    }

    
    private _challengeTimes : number;
    public get challengeTimes() : number {
        if(Game.moduleModel.section.CheckTime(this.lastChallengeTime))
        {
            this._challengeTimes = 0;
            this.lastChallengeTime = Game.time.serverSeconds;
        }
        return this._challengeTimes;
    }
    public set challengeTimes(v : number) {
        this._challengeTimes = v;
    }
    
    public get timesRemainTxt()
    {
        let times = Global.NumberOfChallengesPerday - this.challengeTimes;
        times = Math.max(0,times);
        return TEXT.SecretMissionTimesRemain.format(times);
    }

    /** 二级界面背景图 */
    get background(): string
    {
        return this.config.background;
    }

    get bossIconUrl()
    {
        return this.config.bossIconUrl;
    }
    
    get headIconUrl(): string
    {
        return this.config.headIconUrl;
    }

    get nameIconUrl()
    {
        return this.config.nameIconUrl
    }

    /** 本节的名称 */
    get name(): string
    {
        return this.config.name;
    }

    get introduction(): string
    {
        return this.config.describe;
    }

    get heroId(): number
    {
        return this.config.heroId;
    }

    /** 体力消耗 */
    public get challengePower(): int
    {
        return this.config.challengePower;
    }

    /** 体力消耗文本 */
    get staminaText(): string
    {
        let stamina = this.challengePower;
        return TEXT.MissionStamina.format(stamina);
    }

    get canSweep(): boolean
    {
        return this.config.sweep;
    }

    /** 关卡时间上限 */
    get challengeMaxTimeCondition(): string
    {
        return TEXT.MissionMaxTime.format(this.config.time);
    }

    /** 击杀首领 */
    get challengeKillBossCondition(): string
    {
        return TEXT.MissionKillBoss;
    }

    /** 三星血量要求百分比 */
    get challengeHPCondition(): string
    {
        return TEXT.MissionHPState.format(this.config.challengeHp);
    }
    
    /** 玩家经验、英雄经验，道具奖励 */
    get baseRewardItemList(): ItemData[]
    {
        let list = [];
        let rewardConfig = Game.config.reward.getConfig(this.config.baseReward);
        if(rewardConfig)
        {
            for (const item of rewardConfig.fixedItems) {
                let data  = ItemData.Create(item.ItemId,item.ItemNum,item.ItemType);
                list.push(data);
            }
        }
        return list;
    }

    get itemReward()
    {
        let list = [];
        let itemReward = Game.config.reward.getConfig(this.config.rewardId)
        if(itemReward)
        {
            for(let item of itemReward.fixedItems)
            {
                let itemData = ItemData.Create(item.ItemId,item.ItemNum);
                list.splice(0,0,itemData);
            }
        }
        return list;
    }

    /** 首杀和道具奖励列表 */
    get rewardList(): ItemData[]
    {
        let list = [];
        let rewardConfig = Game.config.reward.getConfig(this.config.showReward);
        if(rewardConfig)
        {
            for (let item of rewardConfig.fixedItems) {
                let itemData = ItemData.Create(item.ItemId,item.ItemNum);
                list.push(itemData);
            }
        }
        if(this.star <= 0)
        {
            let firstReward = Game.config.reward.getConfig(this.config.firstReward)
            if(firstReward)
            {
                for(let item of firstReward.fixedItems)
                {
                    let itemData = ItemData.Create(item.ItemId,item.ItemNum);
                    itemData.isFirstReward = true;
                    list.splice(0,0,itemData);
                }
            }
        }
        return list;
    }

    get isShow(): boolean
    {
        return Game.user.level >= this.config.showLevel;

    }

    /** 关卡是否开启 */
    get isUnlock(): boolean
    {
        let condition1: boolean = true;
        let condition2: boolean = false;
        let condition3: boolean = true;
        (this.config.prepose) 
        && (Game.moduleModel.section.getMissionDataById(this.config.prepose).star < 1) 
        && (condition1 = false);
        condition2 = Game.user.level >= this.config.Level;
        if(this.config.type == proto.CheckPointType.SecretBook && this.heroId)
        {
            let hero = Game.moduleModel.hero.GetData(this.heroId);
            condition3 = hero.level >= this.config.heroLevel;
        }
        return condition1 && condition2 && condition3;
    }

    get unlockCondition(): string
    {
        let unlockTip: string = "";
        unlockTip = Game.user.level >= this.config.Level? "":TEXT.MissionUnlockCondition.format(this.config.Level);
        if(this.config.type == proto.CheckPointType.SecretBook)
        {
            let hero = Game.moduleModel.hero.GetData(this.heroId);
            let lv = hero.level < this.config.heroLevel;
            if(lv)
                unlockTip = TEXT.SecretBookHeroLevelNotEnough.format(this.config.heroLevel);
        }
        
        return unlockTip;
    }
    
    
    
    
}