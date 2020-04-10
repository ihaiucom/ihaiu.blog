/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WelfareWindowUIStruct from "../../Generates/ModuleWelfare/WelfareWindowUIStruct";
import WelfareWindow from "../../../GameModule/ViewWindows/WelfareWindow";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";

export default class WelfareWindowUI extends WelfareWindowUIStruct
{
    /** 窗口 */
    moduleWindow: WelfareWindow;

    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_head.SetWindow(MenuId.Welfare);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        
    }

    /*public---------------------外部接口---------------------------*/
    /** 打开体力福利 */
    public OpenWelfarePower()
    {
        this.m_powerView.Open();
    }
}