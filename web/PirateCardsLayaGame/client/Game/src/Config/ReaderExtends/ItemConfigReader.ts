

import ExcelConfigReader from "../ExcelConfigReader";
import ItemConfig from "../ConfigExtends/ItemConfig";
import { ItemType } from "../../GameModule/DataEnums/ItemType";
import Game from "../../Game";
export default class ItemConfigReader extends ExcelConfigReader<ItemConfig>
{
    
    typeMap = new Map<ItemType, ItemConfig[]>();

    
    onGameLoadedAll()
    {
        super.onGameLoadedAll();
        this.typeMap.clear();
        let list = this.configList;
        var itemList:any[] = Game.config.itemConsume.configList;
        this.addConfigList(itemList, ItemType.Consume);

        var itemList:any[] = Game.config.itemDecorate.configList;
        this.addConfigList(itemList, ItemType.Decorate);

        var itemList:any[] = Game.config.itemWeapon.configList;
        this.addConfigList(itemList, ItemType.Weapon);

        for (let i = 0; i < list.length; i++)
        {
            var config = list[i];
            var configList: ItemConfig[];
            if(this.typeMap.has(config.type))
            {
                configList = this.typeMap.get(config.type);
            }
            else
            {
                configList = [];
                this.typeMap.set(config.type, configList);
            }

            configList.push(config);
        }
    }

    getConfigListByTypeKey(type: ItemType):ItemConfig[]
    {
        return this.typeMap.get(type);
    }

    addConfigList(configs:ItemConfig[], type: ItemType)
    {
        var configDict = this.configDict;
        var configList = this.configList;
        for(var item of configs)
        {
            if(!configDict[item.id])
            {
                item.type = type;
                configDict[item.id] = item;
                configList.push(item);
            }
        }
    }


}