/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GashaponBasePropItemStruct from "../../Generates/GashaponUI/GashaponBasePropItemStruct";
import SkillConfig from "../../../Config/ConfigExtends/SkillConfig";
import Game from "../../../Game";
import TEXT from "../../../Config/Keys/TEXT";

export default class GashaponBasePropItem extends GashaponBasePropItemStruct
{
    updateView(propId:number)
    {
        let config = Game.config.propValue.getConfig(propId);
        if(config)
        {
            let property = config.PropertyConfig;
            if(property)
                this.m_icon.icon = property.iconUrl;
            this.m_prop.text = TEXT.Gashapon_PropDisplay.format(config.DisplayAss,config.PropValue);
        }
    }
    
}