/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import CommonSkillWindowUI from "../../Extends/ModuleCommonSkill/CommonSkillWindowUI";

export default class ModuleCommonSkillBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(CommonSkillWindowUI.URL, CommonSkillWindowUI);
	}
}