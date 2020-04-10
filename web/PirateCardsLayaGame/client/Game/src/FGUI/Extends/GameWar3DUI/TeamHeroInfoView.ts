/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TeamHeroInfoViewStruct from "../../Generates/GameWar3DUI/TeamHeroInfoViewStruct";
import { ComponentProp } from "../../../GameWar/Logic/EcsComponents/ComponentProp";
import Game from "../../../Game";
import { EnumTeamMemberState } from "./TeamInfoView";
import Res from "../../../Config/Keys/Res";

export default class TeamHeroInfoView extends TeamHeroInfoViewStruct
{
    /** 链接的实体ID */
    private _linkEntityID : int = -1;
    /** 对应的玩家ID，是服务器传过来的id */
    private _guid : int = -1;
    public get guid() : int
    {
        return this._guid;
    }
    /** 对应匹配信息玩家里的pos */
    private _pos : int = -1;
    /** 当前是否死亡的状态 */
    private aliveState : boolean;
    /** 是否在线 */
    private isOnline : boolean;
    /**
     * 初始化
     * @param id 初始化这个UI对应的entityID
     */
    public Init(id : int, pos : number, chaId : number, isCapter : boolean = false)
    {
        
        this._linkEntityID = id;
        this._pos = pos;
        let matchInfo = Game.moduleModel.match.matchInfo;
        if(!matchInfo || pos < 0 || pos > matchInfo.gamers.length)
        {
            return;
        }
        
        let info = matchInfo.gamers[pos];
        this._guid = info.mini.id;
        let name = info.mini.name;
        // 头像
        let heroConfig = Game.config.hero;
        let avatarConfig = Game.config.avatar;
        let item = heroConfig.getConfig(chaId);
        if(item)
        {
            let avatarId = item.icon;
            let avatarItem = avatarConfig.getConfig(avatarId);
            if(avatarItem)
            {
                let url = avatarItem.zhCnIcon;
                url = Res.GetBattleRoleIcon(url);
                this.m_imgHero.url = url;
            }
        }
        
        if(isCapter)
        {
            this.m_isCapter.setSelectedPage("yes");
        }
        else
        {
            this.m_isCapter.setSelectedPage("no");
        }
        this.SetRunAwayState(false);
        this.SetName(name);
        this.SetState(EnumTeamMemberState.online);
        this.aliveState = true;
        this.isOnline = true;
    }

    public RenderUpdate(prop : ComponentProp)
    {
        let hpMax = prop.HPMaxView;
        let hp = prop.HPView;
        let mpMax = prop.MPMaxView;
        let mp = prop.MPView;
        this.m_progressHP.value = hp;
        this.m_progressHP.max   = hpMax;
        this.m_progressMP.value = mp;
        this.m_progressMP.max   = mpMax;
        
    }

    public IsEntityIDEqual(id : int) : boolean
    {
        if(id == this._linkEntityID && this._linkEntityID != -1)
        {
            return true;
        }
        return false;
    }

    public SetName(name : string = "")
    {
        if(!name || name == "")
        {
            return;
        }
        this.m_labName.text = name;
    }

    /**
     * 存活状态
     * @param val 
     */
    public SetAliveState(val : boolean)
    {
        this.aliveState = val;
        if(!this.isOnline)
        {
            return;
        }
        if(this.aliveState)
        {
            this.SetState(EnumTeamMemberState.online);
        }
        else
        {
            this.SetState(EnumTeamMemberState.dead);
        }
        
    }

    /**
     * 设置网络的状态
     * @param val 
     */
    public SetNetState(val : boolean)
    {
        this.isOnline = val;
        if(val)
        {
            if(this.aliveState)
            {
                this.SetState(EnumTeamMemberState.online);
            }
            else
            {
                this.SetState(EnumTeamMemberState.dead);
            }
        }
        else
        {
            this.SetState(EnumTeamMemberState.offline);
        }
    }

    /**
     * 
     */
    public PlayerRunAway()
    {
        this.SetNetState(false);
        this.SetRunAwayState(true);
    }

    /**
     * 检测玩家ID是否相同
     * @param playerId 
     */
    public CheckPlayerID(playerId : number) : boolean
    {
        return this._guid == playerId;
    }

    /**
     * 检查玩家的pos是否一样
     * @param pos 玩家在matchInfo里面的pos位置
     */
    public CheckPosIsEqual(pos : number)
    {
        return this._pos == pos;
    }

    /**
     * 设置头像
     * @param url 
     */
    public SetIcon(heroId : int)
    {
        let avatarConfig = Game.config.avatar;
        let heroConfig = Game.config.hero;
        let item = heroConfig.getConfig(heroId);
        if(item)
        {
            let avatarId = item.icon;
            let avatarItem = avatarConfig.getConfig(avatarId);
            if(avatarItem)
            {
                let url = avatarItem.zhCnIcon;
                url = Res.GetBattleRoleIcon(url);
                if(this.m_imgHero.url != url && url != "")
                {
                    this.m_imgHero.url = url;
                }
            }
        }
    }

    
    /**
     * 设置状态
     * @param state 状态类型
     */
    private SetState(state : EnumTeamMemberState)
    {
        switch(state)
        {
            case EnumTeamMemberState.dead :
                this.m_state.setSelectedPage("dead");
                break;
            case EnumTeamMemberState.offline :
                this.m_state.setSelectedPage("offline");
                break;
            case EnumTeamMemberState.online :
                this.m_state.setSelectedPage("online");
                break;
        }
    }

    /**
     * 设置逃跑状态
     * @param isRunAway 是否逃跑
     */
    private SetRunAwayState(isRunAway : boolean)
    {
        if(isRunAway)
        {
            this.m_isRunAway.setSelectedPage("yes");
        }
        else
        {
            this.m_isRunAway.setSelectedPage("no");
        }
    }

}