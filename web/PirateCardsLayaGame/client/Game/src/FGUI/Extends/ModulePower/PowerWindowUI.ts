/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PowerWindowUIStruct from "../../Generates/ModulePower/PowerWindowUIStruct";
import PowerWindow from "../../../GameModule/ViewWindows/PowerWindow";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";

export default class PowerWindowUI extends PowerWindowUIStruct
{
    /** 窗口 */
    moduleWindow: PowerWindow;


    /*----------------------默认视图接口---------------------------*/
    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
       this.m_powerView.m_btnClose.onClick(this, this.BackWindow);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_powerView.m_btnClose.offClick(this, this.BackWindow);
    }


    /*private----------------------UI事件操作---------------------------*/
    /** 关闭界面 */
    private BackWindow()
    {
        Game.menu.back(MenuId.Power);
    }


    /*public----------------------外部接口---------------------------*/
    /** 打开体力 */
    public OpenPower()
    {
        this.m_powerView.Open();
    }
}