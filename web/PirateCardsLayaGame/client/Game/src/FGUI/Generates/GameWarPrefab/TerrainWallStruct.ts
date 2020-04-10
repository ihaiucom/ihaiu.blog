/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TerrainWall from "../../Extends/GameWarPrefab/TerrainWall";

export default class TerrainWallStruct extends fgui.GComponent
{
	public m_terrainType : fgui.Controller;

	
	public static URL:string = "ui://xqptd9n8l0ip1";
	
	public static DependPackages:string[] = ["GameWarPrefab"];

	
	public static createInstance():TerrainWall {
		return <TerrainWall><any>(fgui.UIPackage.createObject("GameWarPrefab","TerrainWall"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_terrainType = this.getController("terrainType");

		
		
		
	}
}