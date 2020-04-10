import Game from '../../Game';
import TEXT from '../../Config/Keys/TEXT';
import ItemData from './ItemData';
import TimeHelper from '../../GameHelpers/TimeHelper';
export default class SectionData extends proto.CheckPointData
{
   
    static Create(data?: proto.ICheckPointData): SectionData
    {
        let d = new SectionData();
        for (let p in data) {
            d[p] = data[p];
        }
        return d;
    }

    updateSectionData(data?: proto.ICheckPointData)
    {
        for(let key in data)
        {
            this[key] = data[key];
        }
    }

    public resetData()
    {
        this.eliteTimes = Global.baseCount[0];
        this.devilTimes = Global.baseCount[1];
        this.secretTimes = Global.baseCount[2];
        this.eliteBuyTimes = Global.eliteBuyCount.length;
        this.devilBuyTimes = Global.devilBuyCount.length;
        this.secretBuyTimes = Global.SecretBookBuyCount.length;
        this.resetTime = Game.time.serverSeconds;
        
    }

    get specialTotalTimes(): number
    {
        return Global.eliteBuyCount.length;
    }

    get specialTotalTimesTxt()
    {
        return TEXT.SectionSpecialTotalTimes.format(this.specialTotalTimes);
    }
    get specialTimesNotEnough(): boolean
    {
        let timesUsed = Global.eliteBuyCount.length -this.eliteBuyTimes;
        return timesUsed >= Global.eliteBuyCount.length;
    }

    get specialCurrentTimesTxt()
    {
        let timesUsed = Global.eliteBuyCount.length -this.eliteBuyTimes;
        if(!this.specialTimesNotEnough)
            return TEXT.SectionCurrentTimes.format(timesUsed+1);
        else
            return TEXT.SectionTimesNotEnough;
    }

    get specialCost(): ItemData
    {
        let cost = Global.eliteBuyCount.length - this.eliteBuyTimes;
        let item = Global.eliteBuyCount[cost];
        let itemData = ItemData.Create(item.ItemId,item.ItemNum);
        return itemData;
    }

    get secretBookTotalTimesTxt()
    {
        return TEXT.SecretBookTotalTimes.format(Global.SecretBookBuyCount.length);
    }

    get secretBookTimesNotEnough(): boolean
    {
        let timesUsed = Global.SecretBookBuyCount.length -this.secretBuyTimes;
        return timesUsed >= Global.SecretBookBuyCount.length;
    }

    get secretBookCurrentTimesTxt()
    {
        let timesUsed = Global.SecretBookBuyCount.length -this.secretBuyTimes;
        if(!this.secretBookTimesNotEnough)
        {
            return TEXT.SectionCurrentTimes.format(timesUsed+1);
        }
        else
        {
            return TEXT.SectionTimesNotEnough;
        }
    }

    get secretBookCost(): ItemData
    {
        let cost = Global.SecretBookBuyCount.length - this.secretBuyTimes;
        let item = Global.SecretBookBuyCount[cost];
        let itemData = ItemData.Create(item.ItemId,item.ItemNum);
        return itemData;
    }

    get monsterTotalTimesTxt()
    {
        return TEXT.SectionMonsterTotalTimes.format(Global.devilBuyCount.length);
    }

    get monsterTimesNotEnough(): boolean
    {
        let timesUsed = Global.devilBuyCount.length -this.devilBuyTimes;
        return timesUsed >= Global.devilBuyCount.length;
    }

    get monsterCurrentTimesTxt()
    {
        let timesUsed = Global.devilBuyCount.length -this.devilBuyTimes;
        if(!this.monsterTimesNotEnough)
        {
            return TEXT.SectionCurrentTimes.format(timesUsed+1);
        }
        else
        {
            return TEXT.SectionTimesNotEnough;
        }
    }

    get monsterCost(): ItemData
    {
        let cost = Global.devilBuyCount.length - this.devilBuyTimes;
        let item = Global.devilBuyCount[cost];
        let itemData = ItemData.Create(item.ItemId,item.ItemNum);
        return itemData;
    }

}