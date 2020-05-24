/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipSelectIconStruct from "../../Generates/GameHome/EquipSelectIconStruct";
import Game from "../../../Game";
import ItemDecorateConfig from "../../../Config/ConfigExtends/ItemDecorateConfig";
import ItemWeaponConfig from "../../../Config/ConfigExtends/ItemWeaponConfig";
import TweenHelper from "../../../War/Utils/TweenHelper";

export default class EquipSelectIcon extends EquipSelectIconStruct
{
    equipId: number;
    
    config:ItemDecorateConfig | ItemWeaponConfig;

    SetId(id: number)
    {
        var config = Game.config.item.getConfig(id);
        this.config = <any> config;
        this.equipId = id;

        this.m_icon.url = "res/sprite/icon/" + config.icon + ".png";
        this.m_title.text = config.name;
    }
}