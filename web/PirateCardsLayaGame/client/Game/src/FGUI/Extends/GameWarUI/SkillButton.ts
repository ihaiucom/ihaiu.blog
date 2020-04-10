/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SkillButtonStruct from "../../Generates/GameWarUI/SkillButtonStruct";

export default class SkillButton extends SkillButtonStruct
{
    public coolProgress: fgui.GProgressBar;
    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.coolProgress = this.getChild("progressCool").asProgress;
        this.coolProgress.value = 0;

        this.Reset();
    }
 
    onWindowShow(): void
    {
        this.m_CDNumber.visible = false;
    }

    onWindowHide(): void
    {
        
    }

    private Reset()
    {
    }
}