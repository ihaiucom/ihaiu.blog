import TEXT from '../../Config/Keys/TEXT';
import Game from '../../Game';
import MModel from '../../GameFrame/Module/MModel';
import LocalServer from '../../GameWar/Logic/LocalServer/LocalServer';
import MissionData from '../DataStructs/MissionData';
import SectionData from '../DataStructs/SectionData';
import SectionType = proto.CheckPointType
import TimeHelper from '../../GameHelpers/TimeHelper';
import SkillConfig from '../../Config/ConfigExtends/SkillConfig';
import ChapterData, { EnumChapterRewardState } from '../DataStructs/ChapterData';
import CheckPointConfig from '../../Config/ConfigExtends/CheckPointConfig';

 export default class SectionModel extends MModel
{
    static readonly isBattleLocal = VersionConfig.IsOpenPVE_M1Local; 

    /**体力相关属性 */
    private _sectionData: SectionData;
     private _missionDict: Dictionary<int,MissionData> = new Dictionary<int,MissionData>();
     private _typedMissionDict: Dictionary<int,MissionData[]> = new Dictionary<int,MissionData[]>();
    private _chapterDict: Dictionary<int,ChapterData> = new Dictionary<int,ChapterData>();
    private _chapterList: ChapterData[] = [];
    private _secretBookDict: Dictionary<int,ChapterData> = new Dictionary<int,ChapterData>();

    IsCanGetStoryReWards()
    {
        let list = this.GetChapterListByType(SectionType.Story);
        for (let i = 0, len = list.length; i < len; i++) 
        {
            let chapter = list[i];
            if (this.IsCanGetSection(chapter)) 
            {
                return true;
            }
        }

        return false;
    }

    IsCanGetStoryReWardsLR(nowchapter:ChapterData, dir?:boolean)
    {
        let list = this.GetChapterListByType(SectionType.Story);
        for (let i = 0, len = list.length; i < len; i++) 
        {
            let chapter = list[i];
            if (dir ? chapter.Id < nowchapter.Id : chapter.Id > nowchapter.Id) 
            {
                continue;
            }

            if (this.IsCanGetSection(chapter)) 
            {
                return true;
            }
        }

        return false;
    }

    IsCanGetEliteReWards()
    {
        let list = this.GetChapterListByType(SectionType.Devil);
        for (let i = 0, len = list.length; i < len; i++) 
        {
            let chapter = list[i];
            if (this.IsCanGetSection(chapter)) 
            {
                return true;
            }
        }

        return false;
    }

    IsCanGetEliteReWardsLR(nowchapter:ChapterData, dir?:boolean)
    {
        let list = this.GetChapterListByType(SectionType.Devil);
        for (let i = 0, len = list.length; i < len; i++) 
        {
            let chapter = list[i];
            if (dir ? chapter.Id < nowchapter.Id : chapter.Id > nowchapter.Id) 
            {
                continue;
            }

            if (this.IsCanGetSection(chapter)) 
            {
                return true;
            }
        }

        return false;
    }

    IsCanGetSection(chapter:ChapterData)
    {
        let canget1 = this.IsCanGetReward(chapter.reward1State);
        let canget2 = this.IsCanGetReward(chapter.reward2State);
        let canget3 = this.IsCanGetReward(chapter.reward3State);

        return canget1 || canget2 || canget3;
    }

    IsCanGetReward(rewardstate:EnumChapterRewardState)
    {
        return rewardstate == EnumChapterRewardState.CanRecieve;
    }

    public GetChapterListByType(type: SectionType)
    {
        let list = this._chapterDict.getValues().filter((c) =>
        {
            return c.type == type && c.isActive;
        });

        list.sort((a:ChapterData, b:ChapterData)=>{
            return a.Id - b.Id;
        });

        return list;
    }

    public launchGame(heroId: number, groupId : number)
     {
        if(!this.checkpointId)
            console.error("关卡id为空");
        if(!SectionModel.isBattleLocal)
        {
            Game.sender.battleMatch.matchStart(proto.PVPType.PVE_M1, heroId, groupId ,this.checkpointId);
        }
        else
        {
            let heroList = [];
            let commonSkillList = [];
            let group = Game.moduleModel.battlePlan.GetTeamInfo(groupId);
            if(group)
            {
                let items = group.heroGroupPosDict.getValues();
                for(let item of items)
                {
                    if(item.heroId != 0)
                    {
                        heroList.push(item.heroId);
                        commonSkillList.push(item.skillId);
                    }
                }
            }
            else
            {
                heroId == 0 ? 1001 : heroId;
                heroList.push(heroId);
            }
            
            // TODO 单机 塞入数据
            let matchInfo = new proto.MatchInfo();
            // 战场数据添加
            matchInfo.gamers = [];
            matchInfo.checkPointId = this.checkpointId;
            matchInfo.pvpType = proto.PVPType.PVE_M1;
            matchInfo.frameDelta = 33;
            matchInfo.minFrameDelta = LocalServer.frameDelta;
            let checkPointConfig = Game.config.checkPoint.getConfig(this.checkpointId);
            matchInfo.matchTime = checkPointConfig.time;
            matchInfo.inputDelta = 50;
            matchInfo.session = "";
            // 添加第一个玩家
            let gameMatch = new proto.GamerMatch();
            gameMatch.heroList =[];
            gameMatch.ai = false;
            gameMatch.teamId = 0;
            let mini = new proto.GamerMini();
            mini.id = Game.user.id;
            mini.name = Game.user.name;
            mini.avatar = Game.user.avatar;
            mini.level = Game.user.level;
            gameMatch.mini = mini;
            for(let i = 0 ; i < heroList.length ; i++)
            {
                let heroData = new proto.GamerHero();
                let id = heroList[i];
                let heroConfig = Game.moduleModel.hero.GetData(id);
                if(!heroConfig)
                {
                    return;
                }
                // allprop 
                for(let i = 0 ; i < heroConfig.allProp.length;i++)
                {
                    let item = new proto.Prop(heroConfig.allProp[i]);
                    heroData.allProp.push(item);
                }
                // baseProp
                for(let i = 0 ; i < heroConfig.baseProp.length;i++)
                {
                    let item = new proto.Prop(heroConfig.baseProp[i]);
                    heroData.baseProp.push(item);
                }
                heroData.id = id;
                heroData.commSkill = commonSkillList[i];
                let hero = Game.moduleModel.hero.GetOwnerData(id);
                // 技能添加
                for(let item of hero.skillList)
                {
                    heroData.skillList.push(item)
                }
                heroData.level = heroConfig.level;
                gameMatch.heroList.push(heroData)
            }
            matchInfo.gamers.push(gameMatch);
            Game.moduleModel.match.matchInfo = matchInfo;
            Game.moduleModel.match.launchWar(true);
        }
     }

     public checkpointId: number = -1;
     public heroId: number;
     
     public clearSelection()
     {
         this.checkpointId = -1;
     }

     public resetGame()
     {
         this.checkpointId = -1;
         this.heroId = -1;
     }

     setSectionData(checkPoint: proto.ICheckPointListS2C)
     {
        this.clear();
        this._sectionData = SectionData.Create(checkPoint.data);
        for (let chapter of Game.config.chapter.sortedConfigList)
        {
            let chapterData = this.CreateChapter(chapter.id);
            let ichapter = checkPoint.chapterList.find((c)=>c.Id == chapter.id);
            if(ichapter)
                chapterData.setProto(ichapter);
        }
        let configList = Game.config.checkPoint.configList;
        for(let config of configList)
        {
            let data = this.CreateMission(config);
            let iCheckpoint = checkPoint.checkPointList.find((c) => c.id == data.id);
            let chapterData = this._chapterDict.getValue(data.chapterId);
            if(iCheckpoint)
            {
                data.setProto(iCheckpoint);
                if(chapterData) chapterData.activateChapter();
            }
            if(chapterData)
            {
                chapterData.addMission(data);
                if(chapterData.type == SectionType.SecretBook && !this._secretBookDict.getValue(data.heroId))
                    this._secretBookDict.add(data.heroId, chapterData);
            }
        }
     }

     /** chapter数据 */
     private CreateChapter(id: number): ChapterData
     {
        let chapterData = ChapterData.Create();
        chapterData.Id = id;
        this._chapterDict.add(id, chapterData);
        this._chapterList.push(chapterData);
        return chapterData;
     }

     /** checkpoint数据 */
     private CreateMission(config: CheckPointConfig)
     {
         let data = MissionData.Create();
         data.id = config.id;
         data.type = config.type;
         this._missionDict.add(data.id,data);
         if(!this._typedMissionDict.hasKey(data.type))
             this._typedMissionDict.add(config.type,[]);
         let list = this._typedMissionDict.getValue(config.type);
         list.push(data);
         list.sort((m1, m2)=>{return m1.id - m2.id});
         return data;
     }

    updateSectionData(data: proto.GamerNotifyCheckPointListS2C)
    {
        let chapterData =  this._chapterDict.getValue(data.chapter.Id);
        if(chapterData)
            chapterData.setProto(data.chapter);
        this._sectionData.updateSectionData(data.data);
        let missionData = this._missionDict.getValue(data.checkPoint.id);
        if(!missionData)
            return;
		missionData.setProto(data.checkPoint);
        if(!(missionData.type == SectionType.Story || missionData.type == SectionType.Elite))
            return;
        let missionDatas = this._typedMissionDict.getValue(missionData.type);
        let index = missionDatas.indexOf(missionData);
        if(index == -1)
            return;
        if(index < missionDatas.length-1)
        {
            let newData = missionDatas[index + 1];
            newData.hasFirstReward = true;
            newData.isActive = newData.config.Level <= Game.user.level;
            this._chapterDict.getValue(newData.chapterId).activateChapter();
        }
    }

    get sectionData(): SectionData
    {
        if(this._sectionData)
        {
            if(this.CheckTime(this._sectionData.resetTime))
                this._sectionData.resetData();
        }
        return this._sectionData;
    }

    public CheckTime(resetTime: number)
    {
        let d = Global.updataDayTime;
        return this.timeIsOver(resetTime,d.H,d.Mm,d.S);
    }

    public getChapterDataById(chapterId: int)
    {
        return this._chapterDict.getValue(chapterId);
    }

    public GetActiveChaptersByType(type: SectionType)
    {
        let list = this._chapterList;
        return list.filter((c) => (c.type == type && c.isActive == true));
    }
    
    /** 剧情副本章节总数 */
    get totalChapterCount(): int
    {
        let count = 0;
        let list = this._chapterDict.getValues();
        let chapterid = 0;
        for(let chapter of list)
            if (chapter.isActive &&chapter.type == SectionType.Story) 
            {
                chapter.Id > chapterid && (chapterid = chapter.Id);
            }
        return chapterid;
    }

    /** 精英副本章节总数 */
    get totalSpecialChapterCount(): int
    {
        let count = 0;
        let list = this._chapterDict.getValues();
        let chapterid = 0;
        for(let chapter of list)
            if (chapter.isActive &&chapter.type == SectionType.Elite) 
            {
                chapter.Id > chapterid && (chapterid = chapter.Id);
            }
        return chapterid;
    }



    /** 获取前置关卡信息 */
    getMissionDataById(id: int): MissionData
    {
        let data = this._missionDict.getValue(id);
        if(Game.moduleModel.section.CheckTime(data.lastChallengeTime))
        {
            data.challengeTimes = 0;
            data.lastChallengeTime = Game.time.serverSeconds;
        }
        return data;
    }

    /** 精英副本 */
    get specialMissions(): MissionData[]
    {
        return this._typedMissionDict.getValue(SectionType.Elite);
    }

    /** 已开启的精英副本 */
    get openSpecialMissions(): MissionData[]
    {
        let list = [];
        for(let data of this.specialMissions) {
            (data.isActive || data.isUnlock) && list.push(data)
        }
        return list;
    }

    /**精英副本奖励次数 */
    getSpecialTimesTxt(): string
    {
        return TEXT.ChapterSpecialTimes.format(this._sectionData.eliteTimes);
    }
     
    /** 魔王副本 */
    get MonsterMissions(): MissionData[]
    {
        return this._typedMissionDict.getValue(SectionType.Devil);
    }

    /** 已开启的魔王副本 */
    get openMonsterMissions(): MissionData[]
    {
        let list = [];
        for(let data of this.MonsterMissions) {
            (data.isActive || data.isUnlock) && list.push(data)
        }
        return list;
    }

     /**魔王副本奖励次数 */
     getMonsterTimesTxt(): string
     {
         return TEXT.ChapterMonsterTimes.format(this._sectionData.devilTimes);
     }

     get secretLandMissionDatas(): MissionData[]
     {
        return this._missionDict.getValues().filter((m)=> m.config.type == proto.CheckPointType.SecretLand);
     }

     /**秘闻本奖励次数 */
     getSecretBookTimesTxt(): string
     {
         return TEXT.SecretBookTimes.format(this._sectionData.secretTimes);
     }

     /** 所有已开启关卡 */
     public getActiveMissions()
     {
         let list = [];
         for(let missionData of this._missionDict.getValues())
         {
            missionData.isActive && (list.push(missionData))
         }
         return list;
     }

     public getSecretChapterByHeroId(heroId: number): ChapterData
     {
        return this._secretBookDict.getValue(heroId);
     }
     

/**************************************************************************************************/
/*************************************** 内部方法 **************************************************/
/**************************************************************************************************/

    private clear()
    {
        this._sectionData = null;
        this._secretBookDict.clear();
        this._missionDict.clear();
        this._chapterDict.clear();
        this._chapterList.length = 0;
    }

    private timeIsOver(resetTime: number, hour: number, minutes: number, seconds: number)
	{
		let isOver = false;
		let updateDate = new Date();
        updateDate.setHours(hour);
        updateDate.setMinutes(minutes);
        updateDate.setSeconds(seconds);
        let updateStamp = updateDate.valueOf() / 1000;
        let now = Game.time.serverSeconds;
        resetTime < updateStamp && (now > updateStamp) && (isOver = true);
		return isOver;
    }
    
    
}