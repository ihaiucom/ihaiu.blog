

import ExcelConfigReader from "../ExcelConfigReader";
import ItemConfig from "../ConfigExtends/ItemConfig";
import { ItemType } from "../../GameModule/DataEnums/ItemType";
export default class ItemConfigReader extends ExcelConfigReader<ItemConfig>
{
    
    typeMap = new Map<ItemType, ItemConfig[]>();

    
    onGameLoadedAll()
    {
        super.onGameLoadedAll();
        this.typeMap.clear();
        let list = this.configList;
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
}