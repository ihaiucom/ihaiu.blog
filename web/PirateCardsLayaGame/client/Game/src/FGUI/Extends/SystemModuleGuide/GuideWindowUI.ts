/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GuideWindowUIStruct from "../../Generates/SystemModuleGuide/GuideWindowUIStruct";

export default class GuideWindowUI extends GuideWindowUIStruct
{

    /**
     * 显示遮罩
     */
    public ShowMask()
    {
        this.m_mask.visible = true;
    }

    /**
     * 隐藏遮罩
     */
    public HideMask()
    {
        this.m_mask.visible = false;
    }

    

}