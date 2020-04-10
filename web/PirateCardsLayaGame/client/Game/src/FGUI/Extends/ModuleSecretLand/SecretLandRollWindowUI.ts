/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandRollWindowUIStruct from "../../Generates/ModuleSecretLand/SecretLandRollWindowUIStruct";

export default class SecretLandRollWindowUI extends SecretLandRollWindowUIStruct
{
    onWindowShow(): void
    {
        this.m_rollView.OnShow();
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.m_rollView.OnHide();
    }
}