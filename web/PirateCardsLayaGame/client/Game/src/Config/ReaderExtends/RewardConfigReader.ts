

import ExcelConfigReader from "../ExcelConfigReader";
import GashaponType = proto.GashaponType;
import Game from "../../Game";
import RewardConfig from "../ConfigExtends/RewardConfig";

export default class RewardConfigReader extends ExcelConfigReader<RewardConfig>
{

    //**************************************招募相关********************************************* */

    public getGashaponItemListByType(type: GashaponType)
    {
        if(type == GashaponType.AdvancedGashapon)
            return this.advancedGashaponItemList;
        else
            return this.generalGashaponItemList;
    }

    public getWeightByType(itemId: number, type: GashaponType)
    {
        let rate = 0;
        if(GashaponType.GeneralGashapon == type)
        {
            let list = this.generalGashaponItemList;
            let item = list.find((e)=>{
                return e.ItemId == itemId;
            });
            if(item)
                rate = item.Weight / this.generalTotalWeight;
        }
        else if(GashaponType.AdvancedGashapon == type)
        {
            let list = this.advancedGashaponItemList;
            let item = list.find((e)=>{
                return e.ItemId == itemId;
            });
            if(item)
                rate = item.Weight / this.advancedTotalWeight;
        }
        else
            rate = 0;
        return rate;
        
    }

    private __generalTotalWeight;
    private get generalTotalWeight()
    {
        if(!this.__generalTotalWeight)
        {
            this.__generalTotalWeight = 0;
            for (let item of this.generalGashaponItemList) {
                this.__generalTotalWeight += item.Weight;
            }
        }
        return this.__generalTotalWeight;
    }

    private __advancedTotalWeight;
    private get advancedTotalWeight()
    {
        if(!this.__advancedTotalWeight)
        {
            this.__advancedTotalWeight = 0;
            for (let item of this.advancedGashaponItemList) {
                this.__advancedTotalWeight += item.Weight;
            }
        }
        return this.__advancedTotalWeight;
    }
    
    private __generalGashaponItemList: excelconfig.IDTRewardRandom[];
    private get generalGashaponItemList()
    {
        if(!this.__generalGashaponItemList)
        {
            let reward = this.getConfig(100);
            this.__generalGashaponItemList = reward.randomItems;
        }
        return this.__generalGashaponItemList;
    }

    private __advancedGashaponItemList: excelconfig.IDTRewardRandom[];
    private get advancedGashaponItemList()
    {
        if(!this.__advancedGashaponItemList)
        {
            // let gConfig = Game.config.gashapon
            let reward = this.getConfig(101);
            this.__advancedGashaponItemList = reward.randomItems;
        }
        return this.__advancedGashaponItemList;
    }

    
}