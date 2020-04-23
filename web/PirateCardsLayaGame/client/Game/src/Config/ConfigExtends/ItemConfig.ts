
import {ItemConfigLang} from "../ExcelConfigLange";
import { ItemToolType } from "../../GameModule/DataEnums/ItemToolType";
export default class ItemConfig extends ItemConfigLang
{
    
    get itemToolType(): ItemToolType
    {
        return this.id % 100 - 1;
    }

    get spriteIndex(): number
    {
        return this.itemToolType;
    }
}