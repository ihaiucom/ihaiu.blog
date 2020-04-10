import MenuLayer from "../Menu/MenuLayer";
import FguiHelper from "../../Libs/Helpers/FguiHelper";

export default class DialogCtrl
{
    private dialogUI: fgui.GComponent;
    private parent:fgui.GComponent;

    init(dialogUI: fgui.GComponent, parent?:fgui.GComponent): DialogCtrl
    {
        this.dialogUI = dialogUI;
        this.parent = parent ? parent : MenuLayer.dialog;
        
        FguiHelper.setScreenSize(dialogUI);
        return this;
    }

    open()
    {
        this.parent.addChild(this.dialogUI);
        FguiHelper.callChildOnWindowShow(this.dialogUI);
    }


    close()
    {
        this.dialogUI.removeFromParent();
        FguiHelper.callChildOnWindowHide(this.dialogUI);
    }

    
    // 设置关闭按钮 关闭当前窗口
    setCloseBtnEvent()
    {
        if(this.dialogUI && this.dialogUI["m_frame"] && this.dialogUI["m_frame"].getChild("closeBtn"))
        {
            this.dialogUI["m_frame"].getChild("closeBtn").onClick(this, this.close);
        }
    }



}