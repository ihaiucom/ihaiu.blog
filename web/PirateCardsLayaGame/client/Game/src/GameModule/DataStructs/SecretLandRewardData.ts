import ItemData from './ItemData';
export default class SecretLandRewardData
{
    public timeStamp: number;
    public item: ItemData;
    
    static Create(msg: proto.ISecretLandReward)
    {
        let data = new SecretLandRewardData();
        data.timeStamp = msg.timeStamp;
        data.item = ItemData.CreateItem(msg.item);
        return data;
    }
}