/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandReadyDigitStruct from "../../Generates/ModuleSecretLand/SecretLandReadyDigitStruct";

export default class SecretLandReadyDigit extends SecretLandReadyDigitStruct
{
    SetNum(num: number)
    {
        num = num > 9? 0: num;
        this.m_num.setSelectedIndex(num);
    }
}