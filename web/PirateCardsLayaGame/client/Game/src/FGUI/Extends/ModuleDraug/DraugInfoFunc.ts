/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DraugInfoFuncStruct from "../../Generates/ModuleDraug/DraugInfoFuncStruct";
import Game from "../../../Game";

export default class DraugInfoFunc extends DraugInfoFuncStruct
{
    /*----------------------默认视图接口---------------------------*/
    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        
    }

    //** 窗口显示 */
    onWindowShow(): void
    {
        this.m_btnUnWear.onClick(this, this.DraugUnWear);
        this.m_btnSwallow.onClick(this, this.OpenSwallow);
        this.m_btnDecompose.onClick(this, this.OpenDecompose);
        this.m_btnWear.onClick(this, this.DraugWear);
        this.m_btnChange.onClick(this, this.DraugChange);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_btnUnWear.offClick(this, this.DraugUnWear);
        this.m_btnSwallow.offClick(this, this.OpenSwallow);
        this.m_btnDecompose.offClick(this, this.OpenDecompose);
        this.m_btnWear.offClick(this, this.DraugWear);
        this.m_btnChange.offClick(this, this.DraugChange);
    }

    /** 卸掉战魂 */
    private DraugUnWear()
    {
        Game.event.dispatch("CLICK_UNWEAR");
    }

    /** 打开吞噬 */
    private OpenSwallow(): void
    {
        Game.event.dispatch("CLICK_SWALLOW");
    }

    /** 打开分解 */
    private OpenDecompose(): void
    {
        Game.event.dispatch("CLICK_DECOMPOSE");
    }

    /** 装备战魂 */
    private DraugWear(): void
    {
        Game.event.dispatch("CLICK_WEAR");
    }

    /** 替换战魂 */
    private DraugChange(): void
    {
        Game.event.dispatch("CLICK_CHANGE")
    }
}