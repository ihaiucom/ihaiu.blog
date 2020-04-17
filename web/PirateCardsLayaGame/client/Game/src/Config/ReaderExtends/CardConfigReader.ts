

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
}