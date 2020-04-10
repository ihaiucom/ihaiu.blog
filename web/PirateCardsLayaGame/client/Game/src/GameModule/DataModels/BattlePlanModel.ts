import MModel from "../../GameFrame/Module/MModel";
import HeroGroup = proto.HeroGroup;
import IHeroGroup = proto.IHeroGroup;
import HeroGroupPos = proto.HeroGroupPos;
import IHeroGroupPos = proto.IHeroGroupPos;
import HeroGroupData from "../DataStructs/HeroGroupData";
import HeroGroupPosData from "../DataStructs/HeroGroupPosData";
import Log from "../../GameFrame/Log/Log";
import Game from "../../Game";
import GameEventKey from "../../GameEventKey";
import GameLog, { EnumLogLevel } from "../../GameLog";

/**
 * 战魂Model
 */
export default class BattlePlanModel extends MModel 
{

    public isInit : boolean = false;
    /** 组编号对应的组数据 */
    public battleTeamDict : Map<number, HeroGroupData> = new Map<number, HeroGroupData>();

    public nowSelectTeam = 0;

    public Init()
    {
        if(!this.isInit)
        {
            Game.sender.battlePlan.BattlePlanList();
        }
        this.nowSelectTeam = 1;
    }
    /**
     * 初始化编队系统
     * @param teamList 
     */
    SetHeroGroupDict(teamList : IHeroGroup[])
    {
        let len = teamList.length;
        if(!teamList)
        {
            console.error("初始化备战英雄不存在出错");
        }
        for(let i = 0 ; i < len ; i ++)
        {
            let item = teamList[i];
            let data = HeroGroupData.Create(item);
            
            this.battleTeamDict.set(data.id, data);
        }
        this.isInit = true;
        Game.event.dispatch(GameEventKey.GameFrame_BattlePlanDataUpdate);
        this.nowSelectTeam = 1; 
    }
    /**
     * 添加新的英雄组
     * @param data 
     */
    AddHeroGroup(data : IHeroGroup)
    {
        if(!data)
        {
            // console.error("添加英雄数据出错");
            return;
        }
        let item = HeroGroupData.Create(data);
        this.battleTeamDict.set(item.id, item);
        Game.event.dispatch(GameEventKey.GameFrame_BattlePlanUnlockNewTeam, item.id);
    }
    /**
     * 通关解锁英雄栏位
     * @param teamList 
     */
    UnlockHeroList(teamList : IHeroGroup[])
    {
        let len = teamList.length;
        if(!teamList)
        {
            GameLog.Log(EnumLogLevel.Error, "解锁英雄栏位传入的英雄不存在,请检查");
            return;
        }
        for(let i = 0 ; i < len ; i ++)
        {
            let item = teamList[i];
            let data = this.battleTeamDict.get(item.id);
            if(!data)
            {
                data = HeroGroupData.Create(item);
                this.battleTeamDict.set(data.id, data);
            }
            else
            {
                data.SetData(item);
            }

        }
        Game.event.dispatch(GameEventKey.GameFrame_BattlePlanUnlockNewHeroChair);
    }

    /**
     * 改变英雄组名字
     * @param groupId 
     * @param name 
     */
    ChangeHeroGroupName(groupId : number, name : string)
    {
        let data = this.battleTeamDict.get(groupId);
        if(!data)
        {
            Log.Error("不存在这个队伍，id为：", groupId);
            return;
        }
        data.name = name;
        Game.event.dispatch(GameEventKey.GameFrame_BattlePlanChangeTeamName, groupId);
    }

    /**
     * 解锁对应英雄组的对应位置的英雄栏
     * @param groupId 
     * @param pos 
     */
    UnlockHeroGroupPos(groupId : number, pos : IHeroGroupPos)
    {
        let data = this.battleTeamDict.get(groupId);
        if(!data)
        {
            console.error("不存在这个队伍，id为：", groupId);
            return;
        }
        data.ChangeHeroGroupPosData(pos);
        
        Game.event.dispatch("ChangeBattlePlanHero");
    }

    

    /**
     * 改变对应英雄
     * @param groupId 
     * @param pos 
     * @param heroId 
     */
    ChangeHero(groupId : number, pos : number, heroId : number)
    {
        let data = this.battleTeamDict.get(groupId);
        console.log(this.battleTeamDict, groupId);
        if(!data)
        {
            console.error("切换英雄,不存在这个队伍，id为：", groupId);
            return;
        }
        data.ChangeHeroGroupPosHero(pos, heroId, groupId);
    }
    /**
     * 改变对应英雄技能
     * @param groupId 
     * @param pos 
     * @param skillId 
     */
    ChangeSkill(groupId : number, pos : number, skillId : number)
    {
        let data = this.battleTeamDict.get(groupId);
        if(!data)
        {
            console.error("不存在这个队伍，id为：", groupId);
            return;
        }
        data.ChangeHeroGroupPosSkill(pos, skillId);
    }
    /**
     * 获取队伍信息
     * @param index 队伍的下标
     */
    public GetTeamInfo(index : number) : HeroGroupData
    {
        let data = this.battleTeamDict.get(index);
        return data;
    }
    /**
     * 获取对应的英雄信息
     * @param teamIndex 
     * @param heroIndex 
     */
    public GetHeroInfo(teamIndex : number, heroIndex) : HeroGroupPosData
    {
        let data = this.battleTeamDict.get(teamIndex);
        if(!data)
        {
            Log.Warn("不存在队伍下标为", teamIndex, "的队伍信息");
            return null;
        }
        let res = data.GetHeroData(heroIndex);
        return res;
    }
    
    /**
     * 判断英雄是否已经在备战队伍里面
     * @param heroId 英雄的id
     */
    public CheckHeroInTeam(heroId : number) : boolean
    {
        let items = this.battleTeamDict.getValues();
        let hero = null;
        for(let item of items)
        {
            hero = item.GetHeroByID(heroId);
            if(hero != null)
            {
                return true
            }
        }
        return false;
    }

}