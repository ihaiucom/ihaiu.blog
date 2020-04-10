/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import Z1 from "../../Extends/WarSceneMap_czhulin/Z1";
import Z2 from "../../Extends/WarSceneMap_czhulin/Z2";
import Z3 from "../../Extends/WarSceneMap_czhulin/Z3";

export default class WarSceneMap_czhulinBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(Z1.URL, Z1);
		bind(Z2.URL, Z2);
		bind(Z3.URL, Z3);
	}
}