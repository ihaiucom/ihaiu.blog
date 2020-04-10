/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MoneyWindowUIStruct from "../../Generates/ModuleMoney/MoneyWindowUIStruct";
import MoneyWindow from "../../../GameModule/ViewWindows/MoneyWindow";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";

export default class MoneyWindowUI extends MoneyWindowUIStruct
{
    /** 窗口 */
    moduleWindow: MoneyWindow;

    /*----------------------默认视图接口---------------------------*/
    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_moneyView.m_btnClose.onClick(this, this.BackWindow);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_moneyView.m_btnClose.offClick(this, this.BackWindow);
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 关闭界面 */
    private BackWindow()
    {
        Game.menu.back(MenuId.Money);
    }


    /*public----------------------外部接口---------------------------*/
    /** 打开货币 */
    public OpenMoney()
    {
        this.m_moneyView.Open(3);
    }
}