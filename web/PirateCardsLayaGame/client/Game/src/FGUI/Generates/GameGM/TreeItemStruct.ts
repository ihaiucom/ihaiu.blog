/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TreeItemCheckbox from "../../Extends/GameGM/TreeItemCheckbox";
import TreeItemOpenCheckbox from "../../Extends/GameGM/TreeItemOpenCheckbox";
import TreeList from "../../Extends/GameGM/TreeList";
import TreeItem from "../../Extends/GameGM/TreeItem";

export default class TreeItemStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;
	public m_visiable : TreeItemCheckbox;
	public m_openClose : TreeItemOpenCheckbox;
	public m_list : TreeList;

	
	public static URL:string = "ui://ujw583ypx6hot";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():TreeItem {
		return <TreeItem><any>(fgui.UIPackage.createObject("GameGM","TreeItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_visiable = <TreeItemCheckbox><any>(this.getChild("visiable"));
		this.m_openClose = <TreeItemOpenCheckbox><any>(this.getChild("openClose"));
		this.m_list = <TreeList><any>(this.getChild("list"));
		
		
	}
}