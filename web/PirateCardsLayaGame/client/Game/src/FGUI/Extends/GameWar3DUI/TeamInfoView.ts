/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TeamInfoViewStruct from "../../Generates/GameWar3DUI/TeamInfoViewStruct";
import TeamHeroInfoView from "./TeamHeroInfoView";
import { ComponentProp } from "../../../GameWar/Logic/EcsComponents/ComponentProp";
import Btn_teamList from "./Btn_teamList";
import { War } from "../../../GameWar/Logic/War";
import DuelTempDanListItem from "../ModuleDuelTemp/DuelTempDanListItem";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";

export enum EnumTeamMemberState
{
    /** 离线 */
    offline,
    /** 存活 */
    online,
    /** 死亡 */
    dead
}

export default class TeamInfoView extends TeamInfoViewStruct
{
    static updateDelta = 200;

    /** 所有队友的列表 */
    private _memberEntityList : Array<int>;
    /** 更新时间 */
    private _updateTime : number = 0;

    private _isInit = false;

    public get updateTime() : number
    {
        return this._updateTime;
    }
    public set updateTime(val : number)
    {
        this._updateTime = val;
    }

    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_teamInfoBtnList.selectedIndex = 0;
    }

    onWindowShow(): void
    {
        
        this.m_teamInfoBtnList.setItemRenderer(this.TeamInfoBtnListRender, this);
        this.m_teamInfoBtnList.on(fgui.Events.CLICK_ITEM, this, this.TeamInfoBtnListOnClick);
        Game.event.add(GameEventKey.GameFrame_TeamMemberNetStateChange, this.TeamMemberNetChange, this);
        Game.event.add(GameEventKey.GameFrame_TeamMemberLeave, this.TeamMmeberRunAway, this);
    }

    onWindowHide(): void
    {
        
        this.m_teamInfoBtnList.off(fgui.Events.CLICK_ITEM, this, this.TeamInfoBtnListOnClick);
        Game.event.remove(GameEventKey.GameFrame_TeamMemberNetStateChange, this.TeamMemberNetChange, this);
        Game.event.remove(GameEventKey.GameFrame_TeamMemberLeave, this.TeamMmeberRunAway, this);
    }

    // 窗口销毁
    onWindowDestory(): boolean
    {
        return false;
    }

    /**
     * 设置初始的队伍信息
     * @param list 队友玩家的信息
     * @param posList 匹配信息对应的pos列表 
     * @param chaIdList 玩家当前角色类型ID
     */
    public InitTeamInfo(list : Array<int>, posList : Array<int>, chaIdList : Array<int>)
    {
        this._isInit = false;
        if(list.length < 0)
        {   
            return;
        }
        this._isInit = true;
        this.m_comDamage.m_damageList.numItems = list.length + 1;
        this.m_memberList.numItems = list.length;

        
        console.log(War.launcherParameter.matchInfo.LeaderGid);

        
        this._memberEntityList = [];
        // 队长处理
        let pos = -1;
        if(War.launcherParameter)
        {
            for(let i = 0; i < War.launcherParameter.matchInfo.gamers.length; i ++)
            {
                let item = War.launcherParameter.matchInfo.gamers[i];
                if(item.mini.id == War.launcherParameter.matchInfo.LeaderGid)
                {
                    pos = i;
                    break;
                }
            }
        }
        let index = 0;
        if(pos != -1)
        {
            for(let i = 0 ; i < list.length && i < posList.length; i ++)
            {
                if(posList[i] == pos)
                {
                    this.SwapList(posList, 0, i);
                    this.SwapList(chaIdList, 0, i);
                    this.SwapList(list, 0, i);
                    break;
                }
            }
            
        }

        for(let i = 0 ; i < list.length && i < posList.length; i ++)
        {
            this._memberEntityList.push(list[i]);
            let item = this.m_memberList.getChildAt(index) as TeamHeroInfoView;
            if(item)
            {
                if(posList[i] == pos)
                {
                    item.Init(list[i], posList[i], chaIdList[i], true);
                }
                else
                {
                    item.Init(list[i], posList[i], chaIdList[i], false);
                }
            }
            index++;
        }
        for(let i = 0 ; i < this.m_teamInfoBtnList.numItems ; i ++)
        {
            let item = this.m_teamInfoBtnList.getChildAt(i) as Btn_teamList;
            item.Init(i);
        }

        this.m_comDamage.Init();
    }
    /**
     * 更新队伍列表中一个玩家的数据
     * @param prop 
     */
    public UpdateItem(prop : ComponentProp, entityID : Guid)
    {
        if(!prop)
        {
            return;
        }
        let len = this.m_memberList.numItems;
        for(let i = 0 ; i < len ; i ++)
        {
            let item = this.m_memberList.getChildAt(i) as TeamHeroInfoView;
            if(item && item.IsEntityIDEqual(entityID))
            {
                item.RenderUpdate(prop);
            }
        }
    }

    /**
     * list渲染初始化
     * @param index 
     * @param heroPanel 
     */
    private TeamInfoBtnListRender(index : number, heroPanel : Btn_teamList)
    {
        if(!heroPanel)
        {
            return;
        }
        heroPanel.Init(index);
    }
    /**
     * 
     * @param item 
     */
    private TeamInfoBtnListOnClick(item : Btn_teamList)
    {
        let index = item.index;
        if(index == -1)
        {
            return;
        }
        if(index == 0 )
        {
            this.m_state.setSelectedPage("playerInfo");   
        }
        else if(index == 1)
        {
            this.m_state.setSelectedPage("playerDamage");
        }
    }
    /**
     * 更新伤害的面板
     * @param frameDelta 
     */
    public UpdateDamagePanel(frameDelta : number = 0)
    {
        if(!this._isInit)
        {
            return;
        }
        this.updateTime += frameDelta;
        if(this.updateTime > TeamInfoView.updateDelta)
        {
            this.updateTime -= (TeamInfoView.updateDelta * (this.updateTime / TeamInfoView.updateDelta))
            this.m_comDamage.UpdateDamage();
        }
    }
    /**
     * 设置队伍状态
     * @param uid 玩家的UID,从matchInfo的id中获取
     */
    public SetTeamInfoStateByUid(uid : number, state : EnumTeamMemberState)
    {
        let children = this.m_memberList._children;
        for(let i = 0 ; i < children.length ; i++)
        {
            let item = children[i] as TeamHeroInfoView;
            if(item.CheckPlayerID(uid))
            {
                this.SetTeamInfoState(state, item);
            }
        }
    }

    /**
     * 设置队伍状态
     * @param pos 玩家的pos,从matchInfo的heroList中获取
     */
    public SetTeamInfoStateByPos(pos : number, state : EnumTeamMemberState)
    {
        let children = this.m_memberList._children;
        for(let i = 0 ; i < children.length ; i++)
        {
            let item = children[i] as TeamHeroInfoView;
            if(item.CheckPosIsEqual(pos))
            {
                this.SetTeamInfoState(state, item);
            }
        }
    }
    
    /**
     * 
     * @param state 
     * @param item 
     */
    private SetTeamInfoState(state : EnumTeamMemberState, item : TeamHeroInfoView)
    {
        switch(state)
        {
            case EnumTeamMemberState.online:
                item.SetAliveState(true);
                break;
            case EnumTeamMemberState.dead:
                item.SetAliveState(false);
                break;
        }
    }

    private SwapList(list : Array<number>, fir : number, sec : number)
    {
        let temp = list[fir];
        list[fir] = list[sec];
        list[sec] = temp;
    }

    /**
     * 玩家网络状态改变
     * @param gamerID 
     * @param state 
     */
    private TeamMemberNetChange(gamerID : number, state : proto.GamerStatus)
    {
        let view : TeamHeroInfoView = this.GetPlayerByGuid(gamerID);
        if(!view)
        {
            return;
        }
        switch(state)
        {
            case proto.GamerStatus.Online:
                view.SetNetState(true);
                break;
            case proto.GamerStatus.Offline:
                view.SetNetState(false);
                break;
        }
    }

    /**
     * 玩家逃跑处理
     * @param gamerID 
     */
    private TeamMmeberRunAway(gamerID : number)
    {
        let view : TeamHeroInfoView = this.GetPlayerByGuid(gamerID);
        if(!view)
        {
            return;
        }
        view.PlayerRunAway();
    }


    private GetPlayerByGuid(gamerID : number) : TeamHeroInfoView
    {
        let view : TeamHeroInfoView = null;
        for(let i = 0 ; i < this.m_memberList.numItems ; i ++)
        {
            let item = this.m_memberList.getChildAt(i) as TeamHeroInfoView;
            if(item.guid == gamerID)
            {
                view = item;
                break;
            }
        }
        return view;
    }
}