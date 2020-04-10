/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DialogHeadBigStruct from "../../Generates/CommonGame/DialogHeadBigStruct";
import FguiHelper from "../../../Libs/Helpers/FguiHelper";
import MenuLayer from "../../../GameFrame/Menu/MenuLayer";

export default class DialogHeadBig extends DialogHeadBigStruct
{
    private dialogUI: fgui.GComponent;

    init(dialogUI: fgui.GComponent): DialogHeadBig
    {
        this.dialogUI = dialogUI;
        
        FguiHelper.setScreenSize(dialogUI);
        return this;
    }

    open()
    {
        MenuLayer.dialog.addChild(this.dialogUI);
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
        if(this.dialogUI)
        {
            this.m_closeBtn.onClick(this, this.close);
        }
    }

    public Init(dialogID : number)
    {
        
    }

}