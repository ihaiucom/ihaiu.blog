import ItemData from './ItemData';
export default class SweepRewardData
{
    checkPointId: number = 0;
    times: number = 0;
    baseReward: ItemData[] = [];
    itemRewardList: ItemData[][] = [];

    SetProto(s2c: proto.ISweepCheckPointS2C)
    {
        this.checkPointId = s2c.checkPointId;
        this.times = s2c.times;
        this.baseReward = [];
        this.itemRewardList = [];
        for(let reward of s2c.baseReward.ItemList)
        {
            if(reward.type != proto.ItemType.heroExpItem)
            {
                let itemData = ItemData.CreateItem(reward);
                this.baseReward.push(itemData);
            }
        }
        for(let itemList of s2c.itemReward)
        {
            let list = [];
            for(let reward of itemList.ItemList)
            {
                let itemData = ItemData.CreateItem(reward);
                list.push(itemData);
            }
            this.itemRewardList.push(list);
        }
    }
}