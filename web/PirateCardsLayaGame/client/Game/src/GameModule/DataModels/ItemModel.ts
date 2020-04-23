import MModel from "../../GameFrame/Module/MModel";
import ItemData from "../DataStructs/ItemData";
import Game from "../../Game";
import { ItemType } from "../DataEnums/ItemType";
import { ItemToolType } from "../DataEnums/ItemToolType";
import GameStatus from "../../War/Datas/GameStatus";

export default class ItemModel extends MModel
{

    LocalStorageKey = "ItemModel";

    list : ItemData[] = [];
    map = new Map<number, ItemData>();
    toolTypeMap = new Map<ItemToolType, ItemData>();
    
    
    // 初始化
    install(): void
    {
        var configList = Game.config.item.getConfigListByTypeKey(ItemType.Tool);
        for(var i = 0, len = configList.length; i < len; i ++)
        {
            var config = configList[i];
            var itemData = new ItemData();
            itemData.itemConfig = config;
            itemData.id = config.id;

            this.list.push(itemData);
            this.map.set(itemData.id, itemData);
            this.toolTypeMap.set(itemData.itemConfig.itemToolType, itemData);
        }

    }

    getItemTool(id: number)
    {
        return this.map.get(id);
    }

    getItemToolByType(type: ItemToolType)
    {
        return this.toolTypeMap.get(type);
    }



    getGameStatusVal(type: ItemToolType)
    {
        switch(type)
        {
            case ItemToolType.Heart:
                return GameStatus.isHeart;
            case ItemToolType.Horseshoe:
                return GameStatus.isHorseshoe;
            case ItemToolType.Luck:
                return GameStatus.isLuck;
            case ItemToolType.Key:
                return GameStatus.isKey;
        }
    }

    

    setGameStatusVal(type: ItemToolType, val: boolean)
    {
        switch(type)
        {
            case ItemToolType.Heart:
                GameStatus.isHeart = val;
                break;
            case ItemToolType.Horseshoe:
                GameStatus.isHorseshoe = val;
                break;
            case ItemToolType.Luck:
                GameStatus.isLuck = val;
                break;
            case ItemToolType.Key:
                GameStatus.isKey = val;
                break;
        }
    }

}