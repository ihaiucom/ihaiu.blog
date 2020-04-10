import MModel from "../../GameFrame/Module/MModel";
import { HeroData } from "../DataStructs/HeroData";
import { HeroState } from "../DataEnums/HeroType";
import Game from "../../Game";
import GameEventKey from "../../GameEventKey";
import DraugData from "../DataStructs/DraugData";
import { EnumSkillState } from "../../GameWar/Logic/Enum/EnumSkill";
import { MenuId } from "../MenuId";
import { MenuIndexId } from "../MenuIndexId";

export default class HeroModel extends MModel
{
    public maxLevel = 80;

    // 存储当前已获得的英雄
    private _dict: Dictionary<number, HeroData> = new Dictionary<number, HeroData>();

    // 存储当前已获得的英雄ID列表
    private _IDList: Array<number> = [];

    /** 红点——可获得英雄 */
    IsCanGetHero():boolean | number
    {
        let configlist = Game.config.hero.getConfigList();
        for(let config of configlist )
        {
            let data = this.GetData(config.id)
            if(data && data.state == HeroState.CanGet)
            {
                return true;
            }
        }
        
        return false;
    }

    /** 红点——可穿戴的英雄 */
    IsCanLevelSkillWearStarHero():boolean | number
    {
        // 已获得英雄
        for( let id of this.IDList )
        {
            if (this.IsCanLevelHero(id) || this.IsCanWearPosHero(id) || this.IsCanUpSkillHero(id) || this.IsCanStarHero(id)) 
            {
                return true;
            }
        }

        return false;
    }

    /** 红点——可升级的上阵英雄 */
    IsCanLevelHero(heroid:number):boolean | number
    {
        if (Game.config.unlock.hasConfig(MenuIndexId.HeroBase) && !Game.moduleModel.home.IsOpen(MenuIndexId.HeroBase)) 
        {
            return false    
        }

        let herodata = Game.moduleModel.hero.GetData(heroid);
        
        let canlv  = herodata.level < Game.user.level;
        let inteam = Game.moduleModel.battlePlan.CheckHeroInTeam(heroid);
        let itemid = Global.heroLevelItem;
        let enough = false;
        for (let i = 0, len = itemid.length; i < len; i++) 
        {
            if (Game.moduleModel.bag.getItemNum(itemid[i]) > 0) 
            {
                enough = true;
                break;
            }
        }
        
        return canlv && inteam && enough;
    }

    /** 红点——可穿戴的孔位 */
    IsCanWearPosHero(heroid:number):boolean | number
    {
        if (Game.config.unlock.hasConfig(MenuIndexId.HeroEquip) && !Game.moduleModel.home.IsOpen(MenuIndexId.HeroEquip)) 
        {
            return false    
        }

        let poslength  = 6;

        // 所有孔位
        for (let pos = 1; pos <= poslength; pos++) 
        {
            // 已穿戴装备
            let wearequip = this.GetPosEquip(heroid, pos);
            if (Game.moduleModel.equip.IsCanWearEquip(heroid, pos, wearequip)) 
            {
                return true    
            }
        }
        
        return false;
    }

    IsCanUpSkillHero(heroid:number):boolean | number
    {
        if (Game.config.unlock.hasConfig(MenuIndexId.HeroSkill) && !Game.moduleModel.home.IsOpen(MenuIndexId.HeroSkill)) 
        {
            return false    
        }

        let skilllength = 3;  

        let skilllist = Game.moduleModel.hero.GetSkillList(heroid);

        // 所有技能
        for (let i = 0, len = skilllength; i < len; i++) 
        {
            let skill = skilllist[i];
            if (this.IsCanUpSkill(heroid, skill.id)) 
            {
                return true;    
            }
            
        }

        return false;
    }

    IsCanUpSkill(heroid:number, skillid:number):boolean | number
    {
        
        let skilldata = Game.moduleModel.hero.GetSkillData(heroid, skillid);
        if (skilldata.state != EnumSkillState.CanLv) 
        {
            return false;
        }
        

        let costmoney = skilldata.costMoney;
        if (costmoney.length && !Game.moduleModel.bag.hasItemNum(costmoney[0], costmoney[1])) 
        {
            return false;    
        }

        let costitems = skilldata.costList;
        for (let i = 0, len = costitems.length; i < len; i++) 
        {
            let costitem = costitems[i];
            if (costitem && !Game.moduleModel.bag.hasItemNum(costitem[0], costitem[1])) 
            {
                return false;    
            }
        }

        let herodata  = Game.moduleModel.hero.GetData(heroid);
        let skilluplv = skilldata.config.upSkillLv[skilldata.lv - 1];
        
        return herodata.level >=skilluplv;
    }


    IsCanStarHero(heroid:number):boolean | number
    {
        if (Game.config.unlock.hasConfig(MenuIndexId.HeroStar) && !Game.moduleModel.home.IsOpen(MenuIndexId.HeroStar)) 
        {
            return false    
        }

        if(Game.moduleModel.hero.IsMaxStar(heroid))
        {
            return false;
        }

        let herodata = Game.moduleModel.hero.GetData(heroid);
        let starData = Game.config.heroStar.getConfig(herodata.Quality);

        let itemnum = Game.moduleModel.bag.getItemNum(herodata.config.heroItem);
        let neednum = starData.needStar[herodata.star];

        return itemnum >= neednum;
    }





    // 队伍默认英雄
    private _teamSelectHeroId:number;

    set teamSelectHeroId(heroid:number)
    {
        this._teamSelectHeroId = heroid ? heroid : Global.teamBaseHero;
    }

    get teamSelectHeroId():number
    {
        return this._teamSelectHeroId;
    }
    

    CreateHero(hero: any)
    {
        if(this.IsGet(hero.id))
        {
            return
        }
        let heroData = HeroData.Create(hero);
        this._dict.set(heroData.id, heroData);
        this._IDList.push(heroData.id);
    }

    /** 初始化 英雄状态*/
    private initHeroState(id: number): HeroState
    {
        let config = Game.config.hero.getConfig(id);
        if(!config)
        {
            console.error("hero config error:", id, config);
            return
        }
        let itemID = config.heroItem;
        let itemNum = Game.moduleModel.bag.getItemNum(itemID);
        let needNum = config.heroItemNum;
        return itemNum >= needNum? HeroState.CanGet: HeroState.NotGet;
    }

    UpdateHeroState(id: number)
    {
        let data = this.GetData(id)
        if(data.state == HeroState.Got)
        {
            return;
        }
        
        let config = Game.config.hero.getConfig(id);
        let itemID = config.heroItem;
        let itemNum = Game.moduleModel.bag.getItemNum(itemID);
        let needNum = config.heroItemNum;
        let state = itemNum >= needNum? HeroState.CanGet: HeroState.NotGet;
        data.state = state;
    }

    UpdateData(hero: any)
    {
        let data = this._dict.getValue(hero.id)
        if(data)
            data.UpdateData(hero);
    }

    get IDList()
    {
        return this._IDList;
    }

    get List()
    {
        return this._dict;
    }

    get GotList()
    {
        let list = [];
        for(let id of this.IDList )
        {
            let data = this.GetData(id)
            if(data.state == HeroState.Got)
            {
                list.push(data);
            }
        }
        return  list
    }

    // 获得卡牌数据，未获得卡牌会创建一份数据结构
    GetData(heroID: int)
    {
        let data: HeroData = this._dict.getValue(heroID)
        if(!data)
        {
            // 设置未获得卡牌的基础数据
            data = new HeroData();
            data.id = heroID;
            data.setConfig(heroID);
            data.setState(this.initHeroState(heroID));
            data.updateSkillData();
            this._dict.set(heroID, data);
        }
        return data
    }

    GetRandomData()
    {
        let list  = this.GotList;
        let index = Math.floor(Math.random()*list.length)
        return list[index];
    }

    // 获取已拥有卡牌的数据
    GetOwnerData(heroID: number)
    {
        return this._dict.getValue(heroID);
    }

    // 头像
    Icon(heroID: int)
    {
        let data = this.GetData(heroID);
        let iconData = Game.config.avatar.getConfig(data.config.icon);
        if(!iconData)
        {
            console.error("Not Avatar Config：", heroID)
            return "";
        }
        return iconData.iconUrl;
    }

    // 卡片
    Card(heroID: int)
    {
        let data = this.GetData(heroID);
        let cardUrlData = Game.config.avatar.getConfig(data.config.icon);
        if(!cardUrlData)
        {
            console.error("Not Avatar Config：", heroID)
            return "";
        }
        return cardUrlData.cardUrl;
    }

    // 大图立绘
    Drawing(heroID: int)
    {
        let data = this.GetData(heroID);
        let drawingUrlData = Game.config.avatar.getConfig(data.config.icon);
        if(!drawingUrlData)
        {
            console.error("Not Avatar Config：", heroID)
            return "";
        }
        return drawingUrlData.drawingUrl;
    }

    /** 检测能否升星 */
    CanUpStar(id: number): boolean
    {
        let data:HeroData = this.GetData(id)
        if(data.state == HeroState.Got && data.star < data.config.maxstar )
        {
            let itemID = data.config.heroItem;
            let itemNum = Game.moduleModel.bag.getItemNum(itemID);
            let starData = Game.config.heroStar.getConfig(data.Quality);
            let needNum = starData.needStar[data.star + 1]
            return itemNum >= needNum
        }
        return false
    }
    
    /** 能否升级 */
    CanLevle(id: number)
    {
        if(this.IsMaxLevel(id))
        {
            return false;
        }

        let data: HeroData = this.GetData(id)
        return this.CheckCanLevelByLevel(data.level, data.Exp)
    }

    /** 英雄可到到的最大等级：玩家当前等级+1级+89经验（最大经验90）, 也就是说角色等级小于玩家等级 + 2 */
    CheckCanLevelByLevel(level: number, exp: number = 0, maxExp: number = 0): boolean
    {
        if(level < Game.user.level)
        {
            return true;
        }
        
        let maxLevel = Game.user.level + 2 // 角色等级小于玩家等级 + 2
        if(maxLevel <= Game.user.maxLevel)
        {
            if(level < maxLevel)
            {
                if((maxLevel - level == 1) && (maxExp - exp == 1))
                {
                    return false
                }
                return true
            }
        }
        else
        {
            if(level < Game.user.maxLevel)
            {
                return true
            }
        }
        return false
    }

    /** 英雄可到到的最大等级：玩家当前等级+1级+89经验（最大经验90）, 也就是说角色等级小于玩家等级 + 2 */
    get MaxCanLevel()
    {
        return Game.user.level;
    }

    /** 最大等级 */
    IsMaxLevel(id: int)
    {
        let data: HeroData = this.GetData(id)
        if(data.state == HeroState.Got)
        {
            if(data.level >= Game.user.maxLevel)
            {
                return true;
            }
        }
        return false;
    }
    
    /** 是否达到最大星级 */
    IsMaxStar(id: number)
    {
        let data:HeroData = this.GetData(id)
        if(data.state == HeroState.Got && data.star == data.config.maxstar)
        {
            return true
        }

        return false
    }

    /** 是否获得 */
    IsGet(id: number)
    {
        let data:HeroData = this.GetData(id)
        return data.state == HeroState.Got
    }

    // 获取简化的英雄id： 1、2、3、4...... 为了方便策划配置
    baseIDNum = 1000;
    GetSimpleID(heroID: int)
    {
        return heroID > this.baseIDNum?heroID-this.baseIDNum:heroID
    }

    /***********************************分割线  服务器消息处理***********************************/
    OnAddHero(msg: any)
    {
        let heroData = HeroData.Create(msg.hero);
        if(this.IsGet(heroData.id))
        {   
            return
        }

        heroData.isSaw = false;
        this._dict.set(heroData.id, heroData);
        this._IDList.push(heroData.id);
        Game.event.dispatch(GameEventKey.GameFrame_AddHero);
    }

    OnNotification(heroList: any[])
    {
        for(let hero of heroList)
        {
            if(this.IsGet(hero.id))
            {
                this.UpdateData(hero);
            }
            else
            {
                this.CreateHero(hero);
            }
        }
    }

    OnLevelUp(msg: any)
    {
        this.UpdateData(msg.hero)
        Game.event.dispatch(GameEventKey.GameFrame_HeroLevelUp, [msg.hero.id]);
    }
    onLevelUpFailed ()
    {
        Game.event.dispatch(GameEventKey.GameFrame_RestoreData);
    }

    OnStarUp(msg: any)
    {
        this.UpdateData(msg.hero)
        Game.event.dispatch(GameEventKey.GameFrame_HeroStarUp, [msg.hero.id]);
    }

    OnChangeEquip(msg: any)
    {
        if (msg.heroIdOn!=null)
        {
            this.UpdateData(msg.heroIdOn);
            let heroOnData = this.GetData(msg.heroIdOn.id);
            heroOnData.RefreshEquipData();
        }

        if (msg.heroIdOff!=null)
        {
            this.UpdateData(msg.heroIdOff);
            let heroOffData = this.GetData(msg.heroIdOff.id);
            heroOffData.RefreshEquipData();
        }

        Game.moduleModel.equip.SortList();
        Game.event.dispatch(GameEventKey.GameFrame_HeroSelectEquip);
    }

    OnSkillLevelUp(msg: any)
    {
        this.UpdateData(msg.hero);
        Game.event.dispatch(GameEventKey.GameFrame_HeroSkillLevel);
    }

    /***********************************分割线  战魂相关***********************************/
    /** 添加战魂 */
    AddDraug(heroID:number,  draug:DraugData)
    {
        let hero = this.GetData(heroID);
        hero.AddDraug(draug);
    }

    /** 移除战魂 */
    RemoveDraug(heroID:number,  draug:DraugData)
    {
        let hero = this.GetData(heroID);
        hero.RemoveDraug(draug)
    }

    // 获得英雄某个部位的战魂
    GetPosDraug(heroID: int, pos: int)
    {
        let heroData = this.GetData(heroID);
        return heroData.GetDraugDataByPos(pos);
    }

    /***********************************分割线  装备相关***********************************/
    // 获得英雄某个部位的装备
    GetPosEquip(heroID: int, pos: int)
    {
        let heroData = this.GetData(heroID);
        return heroData.GetEquipDataByPos(pos);
    }

    /***********************************分割线  技能相关***********************************/
    // 获取单个技能数据
    GetSkillData(heroID: int, skillID: int)
    {
        return this.GetData(heroID).GetSkillData(skillID);
    }

    // 英雄身上的技能列表，这里只包含四个技能
    GetSkillList(heroID: int)
    {
        return this.GetData(heroID).UseSkillList;
    }

    // 英雄的所有技能数据，这里包含Skill.xlsx表配置的所有技能
    GetAllSkillData(heroID: int)
    {
        return this.GetData(heroID).AllSkillData;
    }

    /***********************************分割线 排序相关***********************************/
    /**
     * 排序：可获得、已上阵、品质、星级、等级、ID
     * @param paramList 
     */
    Sort(paramList: any[], needNotGet: boolean = false, needCanGet: boolean = true)
    {
        let list = paramList.concat()
        let tmpList = [];
        let notGetList = [];

        // 拿出可招募的角色
        for(let i = list.length - 1; i >= 0; i--)
        {
            let id = list[i]
            let data: HeroData = Game.moduleModel.hero.GetData(id)
            if(data.state == HeroState.CanGet)
            {
                if(needCanGet)
                {
                    tmpList.push(id);
                }
                list.splice(i,1);
            }
            else if(data.state == HeroState.NotGet)
            {
                if(needNotGet)
                {
                    notGetList.push(id);
                }
                list.splice(i,1);
            }
        }

        // 拿出已上阵的
        for(let i = list.length - 1; i >= 0; i--)
        {
            let id = list[i]
            let inBattle = Game.moduleModel.battlePlan.CheckHeroInTeam(id);
            if(inBattle)
            {
                tmpList.push(id);
                list.splice(i,1);
            }
            tmpList = this.baseSortList(tmpList);
        }

        list = this.baseSortList(list);
        tmpList.push.apply(tmpList,list);

        if(needNotGet)
        {
            notGetList = this.baseSortList(notGetList);
            tmpList.push.apply(tmpList,notGetList);
        }
        return tmpList;
    }

    /**
     * 基础排序：品质、星级、等级、ID
     * @param list 
     */
    baseSortList(list: any[]): any[]
    {
        list.sort(( aID:number, bID:number )=>{
            let aData: HeroData = this.GetData(aID)
            let bData: HeroData = this.GetData(bID)

            if(aData.Quality == bData.Quality)
            {
                if(aData.star == bData.star)
                {
                    if(aData.level == bData.level)
                    {
                        return aID - bID;
                    }
                    else
                    {
                        return bData.level - aData.level;
                    }
                }
                else
                {
                    return bData.star - aData.star;
                }        
            }
            else
            {
                return bData.Quality - aData.Quality
            }
        })

        return list;
    }

    /**
     * 图鉴排序规则：品质、ID
     * @param list 
     */
    SortAtlas( list: any[] )
    {
        list.sort(( aID:number, bID:number )=>{
            let aData: HeroData = this.GetData(aID)
            let bData: HeroData = this.GetData(bID)

            if(aData.Quality == bData.Quality)
            {
                return aID - bID;
            }
            else
            {
                return bData.Quality - aData.Quality;
            }
        });
        // return list.concat();
    }   
}