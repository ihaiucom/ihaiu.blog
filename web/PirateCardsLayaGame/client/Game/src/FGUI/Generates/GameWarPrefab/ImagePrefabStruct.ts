/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ImagePrefab from "../../Extends/GameWarPrefab/ImagePrefab";

export default class ImagePrefabStruct extends fgui.GLabel
{
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://xqptd9n8u6vi0";
	
	public static DependPackages:string[] = ["GameWarPrefab"];

	
	public static createInstance():ImagePrefab {
		return <ImagePrefab><any>(fgui.UIPackage.createObject("GameWarPrefab","ImagePrefab"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		
	}
}