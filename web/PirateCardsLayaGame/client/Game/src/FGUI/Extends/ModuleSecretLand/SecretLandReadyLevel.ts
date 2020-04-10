/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandReadyLevelStruct from "../../Generates/ModuleSecretLand/SecretLandReadyLevelStruct";

export default class SecretLandReadyLevel extends SecretLandReadyLevelStruct
{
    UpdateView(keystone: number)
    {
        keystone = 14;
        this.m_digit1.visible = keystone >= 10;
        let digit1 = Math.floor(keystone/10);
        let digit2 = keystone % 10;
        this.m_digit1.SetNum(digit1);
        this.m_digit2.SetNum(digit2);
    }
}