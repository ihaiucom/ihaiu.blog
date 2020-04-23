

import ExcelConfigReader from "../ExcelConfigReader";
import CardConfig from "../ConfigExtends/CardConfig";
import { CardScoreType } from "../../War/Enums/CardScoreType";
export default class CardConfigReader extends ExcelConfigReader<CardConfig>
{
    static GetId(type: CardScoreType, level: number = 1): int
    {
        return type * 100 + level;
    }
    
    getTypeLevelConfig(type: CardScoreType, level: number = 1):CardConfig
    {
        var id = CardConfigReader.GetId(type, level);
        return this.getConfig(id);
    }



    typeMap = new Map<CardScoreType, CardConfig[]>();

    
    onGameLoadedAll()
    {
        super.onGameLoadedAll();
        this.typeMap.clear();
        let list = this.configList;
        for (let i = 0; i < list.length; i++)
        {
            var config = list[i];
            var configList: CardConfig[];
            if(this.typeMap.has(config.cardScoreType))
            {
                configList = this.typeMap.get(config.cardScoreType);
            }
            else
            {
                configList = [];
                this.typeMap.set(config.cardScoreType, configList);
            }

            configList.push(config);
        }
    }

    getConfigListByTypeKey(type: CardScoreType):CardConfig[]
    {
        return this.typeMap.get(type);
    }

}