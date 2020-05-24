
import {ItemWeaponConfigLang} from "../ExcelConfigLange";
import { ItemType } from "../../GameModule/DataEnums/ItemType";
import Game from "../../Game";
export default class ItemWeaponConfig extends ItemWeaponConfigLang
{
    type = ItemType.Weapon;

    
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
            console.error("ItemWeaponConfig.effectTypeId    effectConfig=null", this.name, this)
        }
    }

    
    get triggerConfig()
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
            console.error("ItemWeaponConfig.triggerTypeId    triggerConfig=null", this.name, this)
        }
    }
}