
import {ItemDecorateConfigLang} from "../ExcelConfigLange";
import { ItemType } from "../../GameModule/DataEnums/ItemType";
import Game from "../../Game";
import TriggerTypeConfig from "./TriggerTypeConfig";
export default class ItemDecorateConfig extends ItemDecorateConfigLang
{
    type = ItemType.Decorate;

    
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
            console.error("ItemDecorateConfig.effectTypeId    effectConfig=null", this.name, this)
        }
    }

    
    get triggerConfig(): TriggerTypeConfig
    {
        return Game.config.triggerType.getConfig(this.triggerType);
    }

    get triggerTypeId()
    {
        var typeConfig = this.triggerConfig;
        if(typeConfig)
        {

            return typeConfig.id;
        }
        else
        {
            console.error("ItemDecorateConfig.triggerTypeId    triggerConfig=null", this.name, this)
        }
    }
}