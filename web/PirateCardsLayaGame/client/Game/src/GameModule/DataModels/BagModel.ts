import MModel from '../../GameFrame/Module/MModel';
import ItemData from '../DataStructs/ItemData';
import ItemConfig from '../../Config/ConfigExtends/ItemConfig';
import Game from '../../Game';
import { EquipData } from '../DataStructs/EquipData';
import ItemType = proto.ItemType;
export enum EnumBagUseType
{
    /**出售 */
    Sell = 1,
    /** 使用 */
    Use = 2,
    /** 分解 */
    Split = 3,
    /** 锻造 */
    Forge = 4

}
export default class BagModel extends MModel
{
	// 物品字典,用uid作为字典
    private dictByUid: Dictionary<number, ItemData> = new Dictionary<number, ItemData>();
    private dictById: Dictionary<number, ItemData[]> = new Dictionary<number, ItemData[]>();
    /** 不显示的item（如货币) */
    private currencyItemList: ItemData[] = [];
    /** 道具 */
    private itemList: ItemData[] = [];
    /** 装备 */
    private equipList: ItemData[] = [];
    /** 信物（英雄碎片） */
    private heroPiecesList: ItemData[] = [];
    
/**                        public                                 */
    /** 红点——有新获取的物品 */
    public IsNewGetItem():boolean | number
    {
        if (this.IsNewNormalItem() || this.IsNewPiecesItem()) 
        {
            return true;
        }
        return false;
    }

    /** 普通物品 */
    public IsNewNormalItem():boolean | number
    {
        let itemlist = this.itemList;
        for (let i = 0, len = itemlist.length; i < len; i++) 
        {
            let item = itemlist[i];
            if (this.IsNewItem(item.uid)) 
            {
                return true;
            }
        }
        return false;
    }

    public SetAllNormalItemSaw()
    {
        let itemuids = [];
        let itemlist = this.itemList;
        for (let i = 0, len = itemlist.length; i < len; i++) 
        {
            let item = itemlist[i];
            if (!item.isSaw) 
            {
                itemuids.push(item.uid);
                item.isSaw = true;
            }
        }

        return itemuids;
    }

    /** 英雄信物 */
    public IsNewPiecesItem():boolean | number
    {
        let itemlist = this.heroPiecesList;
        for (let i = 0, len = itemlist.length; i < len; i++) 
        {
            let item = itemlist[i];
            if (this.IsNewItem(item.uid)) 
            {
                return true;
            }
        }
        return false;
    }

    public SetAllPiecesItemSaw()
    {
        let itemuids = [];
        let itemlist = this.heroPiecesList;
        for (let i = 0, len = itemlist.length; i < len; i++) 
        {
            let item = itemlist[i];
            if (!item.isSaw) 
            {
                itemuids.push(item.uid);
                item.isSaw = true;
            }
        }

        return itemuids;
    }

    /** 英雄装备 */
    public IsNewEquipItem():boolean | number
    {
        let equiplist = this.equipList;
        for (let i = 0, len = equiplist.length; i < len; i++) 
        {
            let item = equiplist[i];
            if (this.IsNewItem(item.uid)) 
            {
                return true;
            }
        }
        return false;
    }

    public SetAllEquipItemSaw()
    {
        let equipuids = [];
        let equiplist = this.equipList;
        for (let i = 0, len = equiplist.length; i < len; i++) 
        {
            let item = equiplist[i];
            if (!item.isSaw) 
            {
                equipuids.push(item.uid);
                item.isSaw = true;
            }
        }

        return equipuids;
    }

    /** 红点——新物品 */
    public IsNewItem(itemuid:number):boolean | number
    {
        let item = this.dictByUid.getValue(itemuid);
        if (!item) {
            return false;
        }
        return !item.isSaw;
    }

    /**
     * 拉取背包列表
     * @param items 背包列表
     */
	public setProtoItemList(items: proto.IGameItem[])
	{
        this.clear();
		for(let item of items)
            this.addItemData(item)
    }

    /**
     * 更新背包数据
     * @param items 
     */
    public updateProtoItemList(items: proto.IGameItem[])
    {
        if(!items || items.length <= 0)
            return;
        for(let item of items)
        {
            let itemData = this.dictByUid.getValue(item.uid);
            if(itemData)
            {
                itemData.setProtoData(item);
                if(itemData.count <= 0)
                    this.removeItemData(itemData);
                continue;
            }
            this.addItemData(item);
            
            let newData = this.dictByUid.getValue(item.uid);
            if (newData) 
            {
                newData.isSaw = false;
            }
        }
    }

    public updateProtoItem(item: proto.IGameItem)
    {
        if(!item)
            return;
        let itemData = this.dictByUid.getValue(item.uid);
        if(itemData)
        {
            itemData.setProtoData(itemData);
            if(itemData.count <= 0)
                this.removeItemData(itemData);
            return;
        }
        this.addItemData(item);
       
    }

    

	public CreateItem(id: number, num: number)
	{
		let item = new ItemData();
		item.id = id;
		item.count = num;
		return item;
	}


    /**
     *  背包数据列表
     * @param type 如果是信物(英雄碎片)才填
     */
	public getItemListByType(type?: ItemType): ItemData[]
	{
        let list: ItemData[] = [];
        if(ItemType.heroPieces == type)
            list = this.heroPiecesList;
        else if(ItemType.equipment == type)
            list = this.equipList;
        else
            list = this.itemList;
        let itemList = [];
        for (let item of list)
        {
            if(item.count > 0)
                itemList.push(item.Copy())
        }
		return itemList;
	}

	/**
     * 获取背包格子数据
     * @param uid 格子id
     */
	public getItemByUid(uid: number): ItemData
	{
		if (this.dictByUid.hasKey(uid))
		{
			return this.dictByUid.getValue(uid);
		}
    }

    public getItemNumByUid(uid: number)
    {
        let data = this.getItemByUid(uid);
        return !data? 0 : data.count;
    }
    
	/** 获取相同物品的所有格子 */
	getItemsById(itemId: number): ItemData[]
	{
		if (this.dictById.hasKey(itemId))
		{
            return this.dictById.getValue(itemId);
        }
        
        return [];
	}

	// 获取物品数量文本
	public getItemNumTxt(itemId: number): string
	{
		return formatNumberUnit(this.getItemNum(itemId));
	}

	// 获取物品数量
	getItemNum(itemId: number): number
	{
        let items = this.getItemsById(itemId);
        let count = 0;
        for(let item of items)
            count += item.count;
		return count;
    }

    // 是否满足物品数量
    hasItemNum(itemId: number,needNum: number): boolean
    {
        return this.getItemNum(itemId) >= needNum;
    }

    /**                                   pivate                                     */

    private addItemData(item: proto.IGameItem)
    {
        let itemData = ItemData.CreateItem(item);


        if(itemData.count <= 0)
            return;
        if(ItemType.equipment == itemData.type)
            this.equipList.push(itemData);
        else if(ItemType.heroPieces == itemData.type)
            this.heroPiecesList.push(itemData);
        else if((<ItemConfig> itemData.itemConfig).maxNum > 0)
            this.itemList.push(itemData);
        else
            this.currencyItemList.push(itemData);
        if(!this.dictById.hasKey(itemData.id))
            this.dictById.add(itemData.id,[])
        this.dictById.getValue(itemData.id).push(itemData);
        this.dictByUid.add(itemData.uid,itemData);

        if(ItemType.heroPieces == itemData.type)
        {
            Game.moduleModel.hero.UpdateHeroState(itemData.id);
        }
    }

    private removeItemData(itemData: ItemData)
    {
        let item = this.dictByUid.getValue(itemData.uid)
        if(item)
        {
            this.dictByUid.remove(itemData.uid);
            let itemList = this.dictById.getValue(itemData.id);
            this.removeByUid(itemList,itemData.uid);
            if(ItemType.equipment == itemData.type)
                this.removeByUid(this.equipList,itemData.uid);
            else if(ItemType.heroPieces == itemData.type)
                this.removeByUid(this.heroPiecesList,itemData.uid);
            else if((<ItemConfig> itemData.itemConfig).maxNum > 0)
                this.removeByUid(this.currencyItemList,itemData.uid);
            else
                this.removeByUid(this.itemList,itemData.uid);
        }
    }


    private removeByUid(itemList: ItemData[],uid: number)
    {
        for(let i = 0; i < itemList.length; i++)
        {
            let item = itemList[i];
            if(item.uid == uid)
            {
                itemList.splice(i,1);
                break;
            }
        }
    }

    private clear()
    {
        this.dictById.clear();
        this.dictByUid.clear();
        this.currencyItemList = [];
        this.itemList = [];
        this.equipList = [];
        this.heroPiecesList = [];
    }
    
}