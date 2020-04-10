/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuRightTopBarStruct from "../../Generates/SystemModuleHome/MenuRightTopBarStruct";
import Game from "../../../Game";
import { Mawait } from "../../../GameWar/Logic/Utils/Mawait";
import MenuRightTopButton from "./MenuRightTopButton";
import GamerNotifyFatigueS2C = proto.GamerNotifyFatigueS2C;
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import { MenuId } from "../../../GameModule/MenuId";

export default class MenuRightTopBar extends MenuRightTopBarStruct
{
    private powerItem:MenuRightTopButton;

    private coinItem:MenuRightTopButton;

    private goldItem:MenuRightTopButton;

    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_listMenu.on(fgui.Events.CLICK_ITEM, this, this.OpenMenu);
        Game.net.gamerNotifyFatigueS2C.on(this.GamerNotifyFatigueS2C, this);
        Game.net.gamerNotifyItemChangeS2C.on(this.GamerNotifyItemChangeS2C, this);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_listMenu.off(fgui.Events.CLICK_ITEM, this, this.OpenMenu);
        Game.net.gamerNotifyFatigueS2C.off(this.GamerNotifyFatigueS2C, this);
        Game.net.gamerNotifyItemChangeS2C.off(this.GamerNotifyItemChangeS2C, this);

        this.Reset();
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 打开系统 */
    private OpenMenu(item: MenuRightTopButton)
    {
        if (item.m_Add.selectedIndex == 0) 
        {
            let itemId  = 0;

            let menuid = Number(item.title);
            switch (menuid) 
            {
                case MenuId.Power:
                    return Game.menu.open(menuid);
                case MenuId.Money:
                    return Game.system.SystemObtainShow(3);
                case MenuId.Gold:
                    return Game.system.SystemObtainShow(2);
                case MenuId.DraugCoin:
                    return Game.system.SystemObtainShow(10);
                case MenuId.RollCoin:
                    return Game.system.SystemObtainShow(5);
            }
        }
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
        this.powerItem = null;
        this.coinItem  = null;
        this.goldItem  = null;
        Laya.timer.clear(this, this.UpdatePower);
    }

    /** 设置体力 */
    private async SetPower()
    {
        let resetCd = Game.time.serverSeconds - Game.moduleModel.power.lastUpdateTime;
        await Mawait.Time(resetCd % Global.powerIncrease);
        if(this.powerItem)
        {
            Laya.timer.loop(Global.powerIncrease * 1000, this, this.UpdatePower);
        }
    }

    /** 刷新体力 */
    private UpdatePower(nownum?:number, maxnum?:number)
    {
        let power = Game.moduleModel.power;
        nownum = nownum ? nownum : power.fatigueNum;
        maxnum = maxnum ? maxnum : power.maxFatigueNum;

        this.powerItem.UpdateText(nownum, maxnum)
    }

    /** 设置货币 */
    private async SetMoney()
    {
        let model = Game.moduleModel.bag;

        this.coinItem.UpdateText(model.getItemNum(3));
        this.goldItem.UpdateText(model.getItemNum(2));
    }

    /** 刷新货币 */
    private UpdateMoney()
    {
        this.SetMoney();
    }

    /** 刷新红点 */
    private RefreshRed()
    {
        let list = this.m_listMenu;
        for (let i = 0, len = list.numChildren; i < len; i++) 
        {
            let menu = <GButton>list.getChildAt(i);
            MenuValidateRed.getInstance().openMenu(Number(menu.title), menu);
        }
    }

    /*public----------------------外部接口---------------------------*/
    /** 打开界面 */
    public Open()
    {
        this.powerItem    = <MenuRightTopButton>this.m_listMenu.getChildAt(0);
        this.powerItem.m_Add.selectedIndex = Game.config.unlock.getConfig(MenuId.Power).showType - 1;

        this.coinItem     = <MenuRightTopButton>this.m_listMenu.getChildAt(1);
        this.coinItem.m_Add.selectedIndex  = Game.config.unlock.getConfig(MenuId.Money).showType - 1;

        this.goldItem     = <MenuRightTopButton>this.m_listMenu.getChildAt(2);
        this.goldItem.m_Add.selectedIndex  = Game.config.unlock.getConfig(MenuId.Gold).showType - 1;

        
        this.SetPower();
        this.SetMoney();

        this.UpdatePower();
        this.RefreshRed();
    }
}