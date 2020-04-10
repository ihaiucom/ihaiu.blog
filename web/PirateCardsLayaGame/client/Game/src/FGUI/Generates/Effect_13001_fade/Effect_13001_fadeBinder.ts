/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import Effect_13001_fade from "../../Extends/Effect_13001_fade/Effect_13001_fade";

export default class Effect_13001_fadeBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(Effect_13001_fade.URL, Effect_13001_fade);
	}
}