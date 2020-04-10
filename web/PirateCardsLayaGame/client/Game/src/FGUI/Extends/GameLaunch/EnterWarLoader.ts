/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EnterWarLoaderStruct from "../../Generates/GameLaunch/EnterWarLoaderStruct";
import Game from "../../../Game";
import PvpType = proto.PVPType;
import IGamerMatch = proto.IGamerMatch;
import GamerNotifyPVPLoadingS2C = proto.GamerNotifyPVPLoadingS2C;
import { War } from "../../../GameWar/Logic/War";
import EnterWarItem from "./EnterWarItem";

export default class EnterWarLoader extends EnterWarLoaderStruct
{
    private isSend:boolean  = false;

    private value:number    = 0;

    private state:number    = 0;

    private teamGamers:IGamerMatch[];

    private enemyGamers:IGamerMatch[];

    private itemGamers:EnterWarItem[] = [];

    private pvpType:PvpType;

    /** 窗口初始化完毕 */
    onInit(): void
    {
        
    }
 
    /** 窗口显示 */
    onShow(): void
    {
        let model = Game.moduleModel.match;
        this.pvpType = model.pvpType;
        if(this.pvpType == PvpType.PVP_M1V1)
        {

        }
        else
        {
            this.m_listTeam.setItemRenderer(this.TeamRender, this);
            this.m_listEnemy.setItemRenderer(this.EnemyRender, this);
        }
        Game.net.gamerNotifyPVPLoadingS2C.on(this.ReceiveValue, this)
        Laya.timer.loop(1000, this, this.SendValue);

        this.Open();
    }

    /** 窗口隐藏 */
    onHide(): void
    {
        if(this.m_listTeam.itemRenderer)
            this.m_listTeam.itemRenderer.recover();
        if(this.m_listEnemy.itemRenderer)
            this.m_listEnemy.itemRenderer.recover();
        Game.net.gamerNotifyPVPLoadingS2C.off(this.ReceiveValue, this)
        Laya.timer.clear(this, this.SendValue);

        this.Reset();
    }

    /** 打开 */
    Open()
    {
        let teamgamers  = [];
        let enemygamers = [];

        let model   = Game.moduleModel.match;
        // 类型
        let type    = model.pvpType;
        // 玩家
        let gamers  = model.gamers;
        // 位置
        let selfpos = War.setting.selfPos;

        switch (type) 
        {
            case PvpType.PVE_M1:
            case PvpType.PVE_M2:
            case PvpType.PVE_M3:
                break;
            case PvpType.PVE_M4:
                this.m_View.selectedIndex = 2;
                teamgamers = gamers;
                break;
            case PvpType.PVP_M1V1:
                this.m_View.selectedIndex = 0;
                if (selfpos < 1) 
                {
                    teamgamers  = gamers.slice(0, 1);
                    enemygamers = gamers.slice(1, 2); 
                } 
                else 
                {
                    teamgamers  = gamers.slice(1, 2);
                    enemygamers = gamers.slice(0, 1);
                }
                break;
            case PvpType.PVP_M2V2:
                this.m_View.selectedIndex = 2;
                if (selfpos < 2) 
                {
                    teamgamers  = gamers.slice(0, 2);
                    enemygamers = gamers.slice(2, 4); 
                } 
                else 
                {
                    teamgamers  = gamers.slice(2, 4);
                    enemygamers = gamers.slice(0, 2);
                }
                break;

            default:
                break;
        }

        this.teamGamers  = teamgamers;
        this.m_listTeam.numItems  = teamgamers.length;

        this.enemyGamers = enemygamers;
        this.m_listEnemy.numItems = enemygamers.length;
    }

    /** 重置 */
    Reset()
    {
        this.m_listTeam.numItems  = 0;
        this.m_listTeam.itemPool.clear();

        this.m_listEnemy.numItems = 0;
        this.m_listEnemy.itemPool.clear();

        this.isSend      = false;
        this.value       = 0;
        this.state       = 0;
        this.teamGamers  = null;
        this.enemyGamers = null;
        this.itemGamers  = [];
    }

    /** 刷新我方加载 */
    TeamRender(index:number, item:EnterWarItem)
    {
        item.RenderItem(this.teamGamers[index]);
        this.itemGamers.push(item);
    }

    /** 刷新地方加载 */
    EnemyRender(index:number, item:EnterWarItem)
    {
        item.RenderItem(this.enemyGamers[index]);
        this.itemGamers.push(item);
    }

    /** 设置加载进度 */
    setValue(value: number)
    {
        if(this.value != value)
        {
            this.value  = value;
            this.isSend = true; 
        }
    }

    /** 发送加载进度 */
    SendValue()
    {
        if(this.pvpType == PvpType.PVP_M1V1)
        {
            if(this.isSend)
            {
                if(this.state == 0) 
                {
                    Game.sender.battleMatch.pvpLoading(this.value);
                    this.isSend = false;
                }
                else 
                {
                    this.m_pvpProgress1.text = this.value + "%";
                    this.m_pvpProgress2.text = 100 + "%";
                }
            }
        }
        else
        {
            if (this.isSend)
            {
                
                if (this.state == 0 && this.itemGamers.length != 1) 
                {
                    Game.sender.battleMatch.pvpLoading(this.value);
                    this.isSend = false;
                } 
                else 
                {
                    let itemgamers = this.itemGamers;
                    for (let item of itemgamers) 
                    {
                        let per = item.ID == Game.user.id ? this.value : 100;
                        item.UpdatePer(per);
                    }
                }
            }
        }
    }

    ReceiveValue(msg: GamerNotifyPVPLoadingS2C)
    {
        if (msg.state == 0) 
        {
            if(this.pvpType == PvpType.PVP_M1V1)
            {
                let loadings = msg.loading;
                for(let loading of loadings) 
                {
                    if(Game.user.id == loading.id) this.m_pvpProgress1.text = loading.per + "%";
                    else this.m_pvpProgress2.text = loading.per +"%";
                }
            }
            else
            {
                let itemgamers = this.itemGamers;
                let loadings   = msg.loading;
                for (let item of itemgamers) 
                {
                    for (let loading of loadings) 
                    {
                        if (item.ID == loading.id) item.UpdatePer(loading.per);
                    }
                }
            }
        }
        else
        {
            this.state = msg.state
        }
    }
}