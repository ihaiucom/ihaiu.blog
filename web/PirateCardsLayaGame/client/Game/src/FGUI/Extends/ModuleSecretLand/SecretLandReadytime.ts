/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandReadytimeStruct from "../../Generates/ModuleSecretLand/SecretLandReadytimeStruct";
import TEXT from '../../../Config/Keys/TEXT';

export default class SecretLandReadytime extends SecretLandReadytimeStruct
{
    UpdateView(seconds: number)
    {
        let minutes = Math.floor(seconds / 60);
        this.m_title.text = TEXT.Keystone_LevelUp_Time_Limit.format(minutes);
    }
}