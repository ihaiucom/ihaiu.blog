import ItemConfig from "../../Config/ConfigExtends/ItemConfig";
import Game from "../../Game";

export default class ItemData
{
    id: number;
    itemConfig: ItemConfig;

    get isGeted()
    {
        return Game.moduleModel.item.getGameStatusVal(this.itemConfig.itemToolType);
    }

    set isGeted(val: boolean)
    {
        Game.moduleModel.item.setGameStatusVal(this.itemConfig.itemToolType, val);
    }

    
}