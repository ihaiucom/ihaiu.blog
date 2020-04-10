/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CdkPanelStruct from "../../Generates/ModuleLogin/CdkPanelStruct";

export default class CdkPanel extends CdkPanelStruct
{
    // 验证码
    get cdk(): string
    {
        return this.m_cdkInput.m_txt_cdk.text.trim();
    }

    set cdk(value: string)
    {
        this.m_cdkInput.m_txt_cdk.text = value;
    }
}