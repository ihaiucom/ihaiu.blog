/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PanelUplevelStruct from "../../Generates/GameHome/PanelUplevelStruct";

export default class PanelUplevel extends PanelUplevelStruct
{
    
    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_panel.panel = this;
        this.m_panel.m_closeBtn.onClick(this, this.Close)
    }

    Open()
    {
        this.visible = true;
        this.m_panel.Open();
    }

    Close()
    {
        this.visible = false;
    }
}