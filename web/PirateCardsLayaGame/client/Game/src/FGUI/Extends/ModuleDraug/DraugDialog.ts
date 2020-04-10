/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DraugDialogStruct from "../../Generates/ModuleDraug/DraugDialogStruct";
import DraugWindowUI from "./DraugWindowUI";
import DraugData from "../../../GameModule/DataStructs/DraugData";
import { EnumDraugDialogType } from "../../../GameModule/DataEnums/EnumDraugDialogType";
import DraugItem from "./DraugItem";
import MenuLayer from "../../../GameFrame/Menu/MenuLayer";
import Game from "../../../Game";

export default class DraugDialog extends DraugDialogStruct
{
    windowUI: DraugWindowUI;

    private mainDraugData:DraugData;

    private viceDraugData:DraugData;

    /** 窗口初始化完毕 */
    onWindowInited(): void
    {

    }

    //** 窗口显示 */
    onWindowShow(): void
    {
        this.m_mainTips.m_btnAwaken.onClick(this, this.AwakenClick);
        this.m_mainTips.m_btnSwallow.onClick(this, this.SwallowClick);
        this.m_mainTips.m_btnDecompose.onClick(this, this.DecomposeClick);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_mainTips.m_btnAwaken.offClick(this, this.AwakenClick);
        this.m_mainTips.m_btnSwallow.offClick(this, this.SwallowClick);
        this.m_mainTips.m_btnDecompose.offClick(this, this.DecomposeClick);
    }

    /** 关闭 */
    DialogClose()
    {
        if (this.visible) 
        {
            Game.event.remove("CLOSE_DIALOG", this.DialogClose, this);
            this.visible = false;
        }
    }

     /** 获取战魂 */
     AwakenClick()
     {
        this.windowUI.m_view.selectedIndex = 0;
        this.windowUI.OpenAwaken();
        this.DialogClose();
     }
 
     /** 吞噬战魂 */
     SwallowClick()
     {
         this.DialogClose();
         this.windowUI.SelectSwallowDraug(this.mainDraugData);
     }
 
     /** 分解战魂 */
     DecomposeClick()
     {
        this.windowUI.m_view.selectedIndex = 2;
        this.windowUI.OpenDecompose();
        this.DialogClose();
     }

    /** 刷新界面 */
    updateView(maindata:DraugData, type:EnumDraugDialogType): void
    {
        this.mainDraugData = maindata;

        // TODO 判定当前是否已装备该槽位战魂，已装备则显示副tips
        switch (type) 
        {
            case EnumDraugDialogType.UnWeared:
                // 吞噬战魂tips 无关闭按钮
                this.m_type.selectedIndex = 2;
                this.m_swallowTips.open(maindata)
                break;
            default:
                this.m_type.selectedIndex = 0;
                this.m_mainTips.open(maindata);
                break;
        }

        if (!this.visible) 
        {
            Game.event.add("CLOSE_DIALOG", this.DialogClose, this);
            this.visible = true;    
        }
    }
}