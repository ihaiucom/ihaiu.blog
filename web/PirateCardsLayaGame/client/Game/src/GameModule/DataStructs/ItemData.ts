import ItemConfig from "../../Config/ConfigExtends/ItemConfig";
import Game from "../../Game";
import GameStatus from "../../War/Datas/GameStatus";
import ReportMonitor from "../../Libs/ReportMonitor";

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

    get enabelBuy()
    {
        return this.itemConfig.coin <= GameStatus.gold;
    }

    buy()
    {
        this.isGeted = true;
        GameStatus.gold -= this.itemConfig.coin;
        ReportMonitor.OnBuyShop(this.itemConfig.spriteIndex);
    }

    
}