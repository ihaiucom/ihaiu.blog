/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DraugWindowUIStruct from "../../Generates/ModuleDraug/DraugWindowUIStruct";
import DraugWindow from "../../../GameModule/ViewWindows/DraugWindow";
import Game from "../../../Game";
import DraugData from "../../../GameModule/DataStructs/DraugData";
import { EnumDraugDialogType } from "../../../GameModule/DataEnums/EnumDraugDialogType";
import DraugItem from "./DraugItem";
import { MenuId } from "../../../GameModule/MenuId";
import DraugListS2C = proto.DraugListS2C;
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import { MenuIndexId } from "../../../GameModule/MenuIndexId";

export default class DraugWindowUI extends DraugWindowUIStruct
{
    /** 窗口 */
    moduleWindow: DraugWindow;

    private openView: any;

    /*----------------------默认视图接口---------------------------*/
    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
       
    }
 
    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_view.on(fgui.Events.STATE_CHANGED, this, this.ChangeView);
        this.on(Laya.Event.MOUSE_DOWN, this , this.CloseDialog);
        Game.net.draugListS2C.on(this.DraugListS2C, this);
        Game.event.add("OPEN_AWAKEN", this.ChangeView, this);
        Game.event.add("OPEN_WEAR", this.ChangeView, this);
        Game.event.add("OPEN_DECOMPOSE", this.OpenDecomposeSelect, this);
        Game.event.add("OPEN_SWALLOW", this.OpenSwallow, this);

        this.m_head.SetWindow(MenuId.Draug);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_view.off(fgui.Events.STATE_CHANGED, this, this.ChangeView);
        this.off(Laya.Event.MOUSE_DOWN, this , this.CloseDialog);
        Game.net.draugListS2C.off(this.DraugListS2C, this);
        Game.event.remove("OPEN_AWAKEN", this.ChangeView, this);
        Game.event.remove("OPEN_WEAR", this.ChangeView, this);
        Game.event.remove("OPEN_DECOMPOSE", this.OpenDecomposeSelect, this);
        Game.event.remove("OPEN_SWALLOW", this.OpenSwallow, this);

        this.Reset();
    }

    /*private----------------------UI事件操作---------------------------*/
    /** view控制器变化 */
    private ChangeView(view?:number)
    {
        if (this.openView) 
        {
            this.openView.Close();
        }

        if (view != null) 
        {
            this.m_view.selectedIndex = view;
        }

        switch (this.m_view.selectedIndex) 
        {
            case 0:
                this.OpenAwaken();
                this.openView = this.m_awakenView;
                break;
            case 1:
                this.OpenWear();
                this.openView = this.m_wearView;
                break;
            case 2:
                this.OpenDecompose();
                this.openView = this.m_decomposeView;
                break;
        }
    }

    /** 关闭弹框 */
    private CloseDialog()
    {
        Game.event.dispatch("CLOSE_DIALOG");
    }

    /*private----------------------EVENT事件操作-----------------------*/
    /** 获取战魂列表返回 */
    private DraugListS2C(msg: DraugListS2C)
    {

        // this.ChangeView();
    }

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.openView = null;
        this.m_view.selectedIndex = 0;
    }

    /** 开启觉醒界面 */
    private OpenAwaken()
    {
        this.m_head.m_btnHelp.visible = true;
        this.m_awakenView.Open();
    }

    /** 开启装配界面 */
    private OpenWear()
    {
        this.m_head.m_btnHelp.visible = false;
        this.m_wearView.Open();
    }

    /** 开启分解界面 */
    private OpenDecompose()
    {
        this.m_head.m_btnHelp.visible = false;
        this.m_decomposeView.Open();
    }

    /** 开启吞噬界面 */
    private OpenSwallow(data: DraugData)
    {
        this.m_wearView.OpenSwallow(data);
    }

    /** 开启分解界面 选中 */
    private OpenDecomposeSelect(data: DraugData)
    {
        this.ChangeView(2);
        this.m_decomposeView.OpenSelect(data);
    }

    

    /*public----------------------外部接口---------------------------*/
    /** 打开界面 */
    public Open()
    {
        this.OpenAwaken();
        this.RefreshRed();
    }

    /** 刷新红点 */
    public RefreshRed()
    {
        // MenuValidateRed.getInstance().openTab(MenuId.Draug, 0, this.m_btnAwaken);
        MenuValidateRed.getInstance().openTab(MenuIndexId.DraugWeared, null, this.m_btnWear);
        // MenuValidateRed.getInstance().openTab(MenuId.Draug, 2, this.m_btnDecompose);
    }


}