/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScreenBGStruct from "../../Generates/GameLaunch/ScreenBGStruct";
import FguiHelper from "../../../Libs/Helpers/FguiHelper";
import Game from "../../../Game";

export default class ScreenBG extends ScreenBGStruct
{
    onWindowShow()
    {
        this.setScreenSize();
        window["screenBG"] = this;
        Engine.stage.sResize.add(this.setScreenSize, this);
    }

    onWindowHide()
    {
        Engine.stage.sResize.remove(this.setScreenSize, this);
    }

    setScreenSize()
    {
        
		let rate = Game.screenSetting.screenScaleShrinkMax;

		this.m_icon.scaleX = rate;
        this.m_icon.scaleY = rate;
        
        // FguiHelper.autoScreenScaleShrink2(this);
        // FguiHelper.autoScreenSize(this, Laya.Stage.ALIGN_CENTER, Laya.Stage.ALIGN_MIDDLE);
    }
}