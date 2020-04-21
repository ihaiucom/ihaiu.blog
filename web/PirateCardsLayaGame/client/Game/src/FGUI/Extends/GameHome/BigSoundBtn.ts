/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BigSoundBtnStruct from "../../Generates/GameHome/BigSoundBtnStruct";
import SoundController from "../../../War/Logics/SoundController";

export default class BigSoundBtn extends BigSoundBtnStruct
{
    
    SetSoundBtnState()
    {
        this.m_button.setSelectedIndex(SoundController.instance.soundBtnIndex)
    }
}