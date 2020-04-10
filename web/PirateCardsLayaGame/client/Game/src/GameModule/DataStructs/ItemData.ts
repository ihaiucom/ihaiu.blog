import ItemConfig from "../../Config/ConfigExtends/ItemConfig";
import Game from '../../Game';
import TEXT from '../../Config/Keys/TEXT';
import TimeHelper from '../../GameHelpers/TimeHelper';
import ItemType = proto.ItemType;
import {EnumBagUseType} from "../DataModels/BagModel";
import { EquipData } from "./EquipData";

export enum EnumItemExpireType
{
    /**限时过期 */
    limit,
    /** 指定日期过期 */
    period
}



//======================
// 物品 数据
//----------------------
export default class ItemData extends proto.GameItem
{
    // 唯一ID
    uid: number;

    // 物品ID
    id: number = 0;

    // 物品数量
    count: number = 0;

    // 创建(获得)时间
    obtainTime: number = 0;

    // red 物品是否已查看
    isSaw: boolean = true;

    isFirstReward: boolean = false;
    type: ItemType = ItemType.other;

    static CreateItem(item: proto.IGameItem): ItemData
    {
        let itemData = new ItemData();
        for(let key in item)
            itemData[key] = item[key];
        return itemData;
    }
    
    setProtoData(data: proto.IGameItem)
    {
        for (let key in data) {
            this[key] = data[key];
        }
    }

    public Copy(): ItemData
    {
        let itemData = new ItemData();
        itemData.uid = this.uid;
        itemData.id = this.id;
        itemData.type = this.type;
        itemData.count = this.count;
        itemData.name = this.name;
        itemData.expireTime = this.expireTime;
        itemData.isSaw = this.isSaw;
        return itemData;
    }

    get isLimit(): boolean
    {
        return this.expireTime > 0;
    }


    get isExpired(): boolean
    {
        if(!this.isLimit)
            return false;
        return TimeHelper.TimeleftIsOver(this.expireTime);
    }

    // 数字文本
    get itemNumTxt1(): string  {
        return this.count + "";
        // let fix = this.count > 1000 ? 1 : 0;
        // return formatNumberUnit(this.count, fix);
    }

    /** 例如：x100,x1m */
    get itemNumTxt2(): string
    {
        return TEXT.RewardItemCount.format(this.itemNumTxt1);
    }
    

    // 物品配置
    get itemConfig()
    {
        return Game.config.item.getConfig(this.id);
    }

    get quality()
    {
        if(this.type == ItemType.heroItem)
        {
            return this.heroConfig.quality;
        }
        let quality = this.itemConfig.quality;
        return quality > 0 ? quality : 1;
    }

    get heroConfig()
    {
        if(this.type == ItemType.heroItem)
            return Game.config.hero.getConfig(this.id);
        console.error(`物品类型${this.type}非英雄类型${ItemType.heroItem}`);
    }

    get equipConfig()
    {
        if(this.type == ItemType.equipment)
            return Game.config.equipment.getConfig(this.id);
        console.error(`物品类型${this.type}非装备类型${ItemType.equipment}`);
    }

    get equipData()
    {
        if(!this.equipData)
            return;
        return EquipData.Create(this.uid,this.id,this.equip);

    }
    // 物品类型
    // get itemType(): proto.ItemType  {
    get itemType(): any  {
        if (this.itemConfig)  {
            return this.itemConfig.type;
        }

        return 0;
    }

    // 物品名称
    get itemName(): string  {
        if(this.type == ItemType.heroItem)
        {
            return this.heroConfig.name;
        }
        if (this.itemConfig)  {
            return this.itemConfig.name;
        }

        return `${this.id}没配置该物品`;
    }

    /** 物品分解获得的奖励列表 */
    get rewardItems()
    {
        if(this.itemConfig && this.itemConfig.rewardId)
        {
            let rewardConf = Game.config.reward.getConfig(this.itemConfig.rewardId);
            let itemList: ItemData[] = [];
            for(let item of rewardConf.randomItems)
            {
                let itemData = ItemData.Create(item.ItemId,item.ItemNum,item.ItemType);
                itemList.push(itemData);
            }
            return itemList;
        }
    }

    // 物品图标
    get iconUrl(): string  {
        if(this.type == ItemType.heroItem)
        {
            return this.heroConfig.heroIcon;
        }
        let avatarConfig = Game.config.avatar.getConfig(this.itemConfig.icon);
            if (avatarConfig)  {
                return avatarConfig.iconUrl;
            }
        return "";
    }

    get useTypes(): EnumBagUseType[]
    {
        return this.itemConfig.useType;
    }

    get useUi(): number
    {
        return this.itemConfig.useUi[0];
    }
    

    // 创建物品数据结构，使用物品ID和数量
    static Create(itemId: number, itemNum: number, type: proto.ItemType = 0): ItemData  {
        let item = new ItemData();
        item.id = itemId;
        item.count = itemNum;
        item.type = type;
        return item;
    }

    static GetIconUrl(id: number)  {
        let itemConfig = Game.config.item.getConfig(id);
        if (itemConfig)  {
            let avatarConfig = Game.config.avatar.getConfig(itemConfig.icon);
            if (avatarConfig)  {
                return avatarConfig.iconUrl;
            }
        }
        return "";
    }

}