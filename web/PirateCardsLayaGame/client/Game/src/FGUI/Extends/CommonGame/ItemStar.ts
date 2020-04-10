/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemStarStruct from "../../Generates/CommonGame/ItemStarStruct";

export default class ItemStar extends ItemStarStruct
{


    onWindowShow(){

    }
    onWindowHide(){
        this.m_StarNumber.selectedIndex = 0;
    }
}