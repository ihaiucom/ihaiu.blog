
import {ItemConsumeConfigLang} from "../ExcelConfigLange";
import { ItemType } from "../../GameModule/DataEnums/ItemType";
import Game from "../../Game";
export default class ItemConsumeConfig extends ItemConsumeConfigLang
{
    type = ItemType.Consume;


    get effectConfig()
    {
        return Game.config.effectType.getConfig(this.effectType);
    }

    get effectTypeId()
    {
        var typeConfig = this.effectConfig;
        if(typeConfig)
        {

            return typeConfig.id;
        }
        else
        {
            console.error("ItemConsumeConfig.effectTypeId    effectConfig=null", this.name, this)
        }
    }
}