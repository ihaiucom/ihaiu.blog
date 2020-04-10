/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WindowHeadStruct from "../../Generates/CommonGame/WindowHeadStruct";
import Game from "../../../Game";
import GamerNotifyFatigueS2C = proto.GamerNotifyFatigueS2C;
import { MenuId } from "../../../GameModule/MenuId";
import { Mawait } from "../../../GameWar/Logic/Utils/Mawait";
import GameEventKey from "../../../GameEventKey";
import WindowHeadItem from "./WindowHeadItem";

export default class WindowHead extends WindowHeadStruct
{
    private MenuId:number;
    
    private lastTab: number;

    private itemList:WindowHeadItem[] = [];
    
    /*----------------------默认视图接口---------------------------*/
    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        this.itemList = [this.m_fatigue, this.m_coin, this.m_gold, this.m_draug];
    }

    /** 窗口显示 添加事件 */
    onWindowShow(): void
    {
        this.m_fatigue.onClick(this, this.OpenMenu);
        this.m_btnReturn.onClick(this, this.BackWindow);
        this.m_btnHelp.onClick(this, this.OnClickShowHelp);
        Game.net.gamerNotifyFatigueS2C.on(this.GamerNotifyFatigueS2C, this);
        Game.net.gamerNotifyItemChangeS2C.on(this.GamerNotifyItemChangeS2C, this);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_fatigue.offClick(this, this.OpenMenu);
        this.m_btnReturn.offClick(this, this.BackWindow);
        this.m_btnHelp.offClick(this, this.OnClickShowHelp)
        Game.net.gamerNotifyFatigueS2C.off(this.GamerNotifyFatigueS2C, this);
        Game.net.gamerNotifyItemChangeS2C.off(this.GamerNotifyItemChangeS2C, this);

        if(this.m_fatigue)
        {
            Laya.timer.clear(this, this.UpdatePower);
        }
    }


    /*private----------------------UI事件操作---------------------------*/
    /** 关闭界面 */
    private BackWindow()
    {
        Game.event.dispatch("WINDOW_CLOSE");

        if(this.lastTab)
        {
            Game.menu.openTab(this.MenuId, this.lastTab);
            this.lastTab = null;
        }
        else
        {
            // TODO gjc 框架返回部分暂时没有 从结算界面到关卡详情后，上一个window是结算界面 播放二次特效.
            if (this.MenuId == MenuId.Sections) 
            {
                // Game.menu.openHome();
                Game.menu.close(this.MenuId)
            }
            else
            {
                Game.menu.back(this.MenuId);
            }

        }
        let str = GameEventKey.GameFrame_SectionBackBtnOnClick;
        Game.event.dispatch(str, [GameEventKey.GameFrame_SectionBackBtnOnClick]);
    }

    private OnClickShowHelp()
    {
        switch (this.MenuId) 
        {
        case MenuId.Draug:
                Game.system.DraugTipsShow(1);
                break;
        
            default:
                break;
        }
    }

    private OpenMenu()
    {
        Game.menu.open(Number(this.m_fatigue.title));
    }

    /*private----------------------EVENT事件操作-----------------------*/
    private GamerNotifyFatigueS2C(msg?: GamerNotifyFatigueS2C)
    {
        this.UpdatePower(msg.fatigueInfo.fatigueNum, msg.fatigueInfo.maxFatigueNum);
    }

    private GamerNotifyItemChangeS2C()
    {
        this.UpdateMoney();
    }


    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.MenuId  = null;
        this.lastTab = null;
    }

    /** 设置体力 */
    private async SetPower()
    {
        let resetCd = Game.time.serverSeconds - Game.moduleModel.power.lastUpdateTime;
        await Mawait.Time(resetCd % Global.powerIncrease);
        if(this.m_fatigue)
        {
            Laya.timer.loop(Global.powerIncrease * 1000, this, this.UpdatePower);
        }
    }

    /** 设置货币 */
    private async SetMoney()
    {
        this.UpdateMoney();
    }

    /** 刷新体力 */
    private UpdatePower(nownum?:number, maxnum?:number)
    {
        let power = Game.moduleModel.power;
        nownum = nownum ? nownum : power.fatigueNum;
        maxnum = maxnum ? maxnum : power.maxFatigueNum;

        this.m_fatigue.UpdateText(nownum, maxnum)
    }

    /** 刷新货币 */
    private UpdateMoney()
    {
        let model = Game.moduleModel.bag;

        this.m_coin.UpdateText(model.getItemNum(3));
        this.m_gold.UpdateText(model.getItemNum(2));
        this.m_draug.UpdateText(model.getItemNum(10));
    }

    /** 刷新图标 */
    private SetHead()
    {
        let config = Game.config.menu.getConfig(this.MenuId);

        let itemlist = this.itemList;

        if (config && config.topInformation.length) 
        {
            let startx = this.m_fatigue.x;
            let deltax = 195;

            
            let itemshow = config.topInformation;
            for (let i = 0, len = itemlist.length; i < len; i++) 
            {
                let item  = itemlist[i];
                let index = itemshow.indexOf(Number(item.title));
                item.visible =  (index != -1);
                item.visible && (item.x = startx + deltax * index);
            }
        }
        else
        {
            for (let i = 0, len = itemlist.length; i < len; i++) 
            {
                let item  = itemlist[i];
                item.visible =  false;
            }
        }
    }

    /*public----------------------外部接口---------------------------*/
    /**
     * 
     * @param menuid 模块id
     * @param lastTab 是否返回上一个页签
     */
    public SetWindow(menuId:number, lastTab?: number)
    {
     
        lastTab != undefined && (this.lastTab = lastTab);
        let url = Game.config.menu.getConfig(menuId).nameIconUrl;
        if(!url)
        {
            console.error("Menu.xlsx No ModuleNameIcon!")
        }
        else
        {
            this.m_icon.url = url
        }
        this.MenuId = menuId;
        this.SetHead();

        this.SetPower();
        this.SetMoney();
        
        this.UpdatePower();
    }


}