import MissionData from './MissionData';
import ChapterConfig from '../../Config/ConfigExtends/ChapterConfig';
import Game from '../../Game';
import TEXT from '../../Config/Keys/TEXT';
import ItemData from './ItemData';
import SectionType = proto.CheckPointType

export enum EnumChapterRewardState
{
    CannotRecieve,
    CanRecieve,
    Recieved
}

export default class ChapterData extends proto.Chapter
{

    private _isActive: boolean = false;
    public get isActive():boolean
    {
        return this._isActive;
    }
    /** 已通关列表 */
    private _dataList: MissionData[] = [];

    addMission(mission: MissionData)
    {
        this._dataList.push(mission);
        this.sortMissions();
    }

    activateChapter()
    {
        if(this._isActive)
            return;
        this._isActive = true;
    }
    
    private sortMissions()
    {
        this._dataList.sort((a,b)=>{return a.id - b.id})
    }

    public getRewardItemList(level: number): ItemData[]
    {
        let list: ItemData[] = [];
        let items =this.config.getRewardByLevel(level);
        for(let item of items)
        {
            let data = ItemData.Create(item.ItemId,item.ItemNum,item.ItemType);
            list.push(data);
        }
        return list;
    }

    get missionList(): MissionData[]
    {
        return this._dataList;
    }

    public get currentStarText()
    {
        let total = this.totalStar;
        return TEXT.ChapterCurrentStarNum.format(this.plotStar, total);
    }

    public get RewardAlreadyGet(): string
    {
        return TEXT.ChapterRewardAlreadyGet;
    }
    
    public get StarNotEnoughToast(): string
    {
        return TEXT.ChapterStarNotEnough;
    }

    /** 章节名称 */
    public get name()
    {
        return this.config.name;
    }

    public get iconUrl()
    {
        return this.config.chapterIconUrl;
    }

    /** 第几章 */
    public get chapterCountTxt()
    {
        return this.config.chapterCountTxt;
    }

    public get needStar1()
    {
        return this.config.starReward[0].Starnum;
    }

    public get rewardLevel1()
    {
        return this.config.starReward[0].Level;
    }

    public get needStar2()
    {
        return this.config.starReward[1].Starnum;
    }
    public get rewardLevel2()
    {
        return this.config.starReward[1].Level;
    }

    public get needStar3()
    {
        return this.config.starReward[2].Starnum;
    }
    public get rewardLevel3()
    {
        return this.config.starReward[2].Level;
    }

    public get reward1State(): EnumChapterRewardState
    {
        if(this.needStar1 > this.plotStar)
            return EnumChapterRewardState.CannotRecieve;
        if(this.plotChapterGradeIdList.findIndex((i)=>{return i == this.rewardLevel1}) == -1)
            return EnumChapterRewardState.CanRecieve;
        else 
            return EnumChapterRewardState.Recieved;
    }

    public get reward2State(): EnumChapterRewardState
    {
        if(this.needStar2 > this.plotStar)
            return EnumChapterRewardState.CannotRecieve;
        if(this.plotChapterGradeIdList.findIndex((i)=>{return i == this.rewardLevel2}) == -1)
            return EnumChapterRewardState.CanRecieve;
        else 
            return EnumChapterRewardState.Recieved;
    }

    public get reward3State(): EnumChapterRewardState
    {
        if(this.needStar3 > this.plotStar)
            return EnumChapterRewardState.CannotRecieve;
        if(this.plotChapterGradeIdList.findIndex((i)=>{return i == this.rewardLevel3}) == -1)
            return EnumChapterRewardState.CanRecieve;
        else 
            return EnumChapterRewardState.Recieved;
    }

    /** 剧情副本当前章总星数 */
    public get totalStar()
    {
        let length = Game.config.checkPoint.getConfigListByChapter(this.Id).length;
        return length * 3;
    }

    public getStarByLevel(lv: number)
    {
        return this.config.getStarByLevel(lv);
    }
    
    /** 章节配置 */
    get config(): ChapterConfig
    {
        return Game.config.chapter.getConfig(this.Id);
    }

    get type()
    {
        return this.config.type;
    }
    
    static Create(c?: proto.IChapter): ChapterData
    {
        let cData = new ChapterData();
        for (let key in c) {
            cData[key] = c[key];
        }
        return cData;
    }
    setProto(c?: proto.IChapter)
    {
        if(c)
        {
            for (let key in c) {
                this[key] = c[key];
            } 
        }
    }
}