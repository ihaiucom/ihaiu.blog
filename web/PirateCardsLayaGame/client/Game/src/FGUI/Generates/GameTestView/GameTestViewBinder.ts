/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import TestWarInput from "../../Extends/GameTestView/TestWarInput";
import TestWarView from "../../Extends/GameTestView/TestWarView";

export default class GameTestViewBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(TestWarInput.URL, TestWarInput);
		bind(TestWarView.URL, TestWarView);
	}
}