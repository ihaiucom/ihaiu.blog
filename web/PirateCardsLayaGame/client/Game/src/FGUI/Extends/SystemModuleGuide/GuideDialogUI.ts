/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GuideDialogUIStruct from "../../Generates/SystemModuleGuide/GuideDialogUIStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";

export default class GuideDialogUI extends GuideDialogUIStruct
{

    private dialogCtrl: DialogCtrl;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);
        this.dialogCtrl.setCloseBtnEvent();
    }

    public Open()
    {
        this.dialogCtrl.open();
        // this.m_mask.visible = true;
    }

    /**
     * 关闭当前页面
     */
    public Close()
    {
        this.dialogCtrl.close();
        // this.m_mask.visible = false;
    }


}