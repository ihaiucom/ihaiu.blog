
import {RewardConfigLang} from "../ExcelConfigLange";
import ItemData from "../../GameModule/DataStructs/ItemData";
export default class RewardConfig extends RewardConfigLang
{
    public get itemList():ItemData[]
    {
        let items  = [];
        for (let i = 0, len = this.fixedItems.length; i < len; i++) 
        {
            let item = this.fixedItems[i]
            let data = ItemData.Create(item.ItemId, item.ItemNum);
            items.push(data);
        }
        return items;
    }
}