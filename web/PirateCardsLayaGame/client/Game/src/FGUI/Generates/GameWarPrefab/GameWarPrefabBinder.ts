/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import ImagePrefab from "../../Extends/GameWarPrefab/ImagePrefab";
import TerrainWall from "../../Extends/GameWarPrefab/TerrainWall";

export default class GameWarPrefabBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(ImagePrefab.URL, ImagePrefab);
		bind(TerrainWall.URL, TerrainWall);
	}
}