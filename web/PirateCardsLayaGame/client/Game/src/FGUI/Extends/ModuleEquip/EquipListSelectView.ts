/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipListSelectViewStruct from "../../Generates/ModuleEquip/EquipListSelectViewStruct";
import { EquipQuality } from "../../../GameModule/DataEnums/EquipType";
import Game from "../../../Game";
import { EquipData } from "../../../GameModule/DataStructs/EquipData";
import EquipSelectItem from "./EquipSelectItem";

export default class EquipListSelectView extends EquipListSelectViewStruct
{
    selectEquipUID: int;
    // 保存当前选中的装备， 按品质
    itemDict: Dictionary<EquipQuality, int[]> = new Dictionary<EquipQuality, int[]>();
    // 保存当前选中的装备uid
    itemList: Array<int> = [];

    // 品质排序： 默认升序true，白绿蓝紫橙；
    qualitySort: boolean = true;

    // 升序列表
    upList: Array<int> = [];

    // 降序列表
    downList: Array<int> = [];

    ResetView()
    {
        this.itemDict = new Dictionary<number, int[]>();
        this.itemList = [];
        this.m_list.numItems = 0;
        this.qualitySort = true;
        this.downList = [];
        this.upList = [];
    }

    InitViewData()
    {
        this.ResetView();
        let list = Game.moduleModel.equip.EatList(this.selectEquipUID).concat();
        this.upList = list;
        this.downList = this.OnReverseOrder(this.upList);

        this.m_topView.updateView();
    }

    // 升级回调
    OnEquipLevelUp()
    {
        this.itemDict = new Dictionary<number, int[]>();
        this.itemList = [];
        let list = Game.moduleModel.equip.EatList(this.selectEquipUID).concat();
        this.upList = list;
        this.downList = this.OnReverseOrder(this.upList);
        this.UpdateSelectList()
    }

    // 刷新吞噬列表状态
    UpdateSelectList()
    {
        let list = this.upList; // 这初始化list数量
        this.m_list.numItems = list.length;
    }

    // 按品质排序
    OnSortQulity()
    {
        this.qualitySort = !this.qualitySort;
        this.UpdateSelectList()
    }

    SaveItemList()
    {
        this.itemList = [];
        let list = this.itemDict.getValues();
        if(list && list.length > 0)
        {
            for(let i = 0; i < list.length; ++i)
            {
                let arr = list[i];
                for(let uid of arr)
                {
                    this.itemList.push(uid)
                }
            }
        }
        else
        {
            this.itemList = [];
        }
    }

    // 获取吞噬列表中item选中状态
    ItemSelectState(uid: int): boolean
    {
        let quality = Game.moduleModel.equip.GetDataByUID(uid).quality;
        let list = this.itemDict.getValue(quality);
        if(list && list.length > 0)
        {
            if(list.indexOf(uid) >= 0)
            {
                return true
            }
        }
        return false;
    }

    // 升序
    OnReverseOrder(list: Array<int>): Array<int>
    {
        let tmpList = list.concat();
        tmpList.sort((aUID: int, bUID: int) => 
        {
            let aData: EquipData = Game.moduleModel.equip.GetDataByUID(aUID);
            let bData: EquipData = Game.moduleModel.equip.GetDataByUID(bUID);
            if(aData.quality == bData.quality)
            {
                if(aData.star == bData.star)
                {
                    return aData.id - bData.id;
                }
                else
                {
                    return bData.star - aData.star;
                }
            }
            else
            {
                return aData.quality - bData.quality;
            }
        })
        return tmpList;
    }

    // 选中/取消一类品质的装备
    OnSelectQulity(param: Array<any>)
    {
        let isSelect = param[0];
        let quality = param[1];
        if(isSelect)
        {
            let group: int[] = [];
            let list = Game.moduleModel.equip.EatList(this.selectEquipUID);
            for(let i = 0; i < list.length; ++i)
            {
                let uid = list[i]
                let data = Game.moduleModel.equip.GetDataByUID(uid)
                if(data.quality == quality && uid != this.selectEquipUID)
                {
                    group.push(uid);
                }
            }
            if(group.length > 0)
            {
                this.itemDict.set(quality, group);
            }
        }
        else
        {
            this.itemDict.remove(quality);
        }
        this.UpdateSelectList();
        this.SaveItemList();
    }

    // 选中/取消一个装备
    OnSelectItem(param: Array<any>)
    {
        let isSelect = param[0];
        let uid = param[1];
        let quality = Game.moduleModel.equip.GetDataByUID(uid).quality;
        if(isSelect)
        {
            let group: int[];
            if(this.itemDict.hasKey(quality))
            {
                group = this.itemDict.getValue(quality);
            }
            else
            {
                group = [];
                this.itemDict.add(quality, group);
            }
            group.push(uid);
        }
        else
        {
            let list = this.itemDict.getValue(quality)
            if(list)
            {
                for(let i = list.length - 1; i >= 0; --i)
                {
                    if(list[i] == uid)
                    {
                        list.splice(i,1);
                        break;
                    }
                }
            }
            else
            {
                console.error("Equip 删除了一个不存在的UID", this.itemDict)
            }
        }

        this.SaveItemList();
    }

    renderSelectListItem(index: number, item: EquipSelectItem): void  
    {
        let list = this.qualitySort?this.upList:this.downList;
        let uid = list[index];
        let data = Game.moduleModel.equip.GetDataByUID(uid);
        item.RenderItem(data);

        item.select = this.ItemSelectState(uid);
    }

    clickSelectListItem(target: EquipSelectItem, event: Event): void 
    {
        // TODO Tips
    }

    onWindowShow(): void  
    {
        this.m_list.itemRenderer = Laya.Handler.create(this, this.renderSelectListItem, null, false);
        this.m_list.on(fgui.Events.CLICK_ITEM, this, this.clickSelectListItem);
        this.m_list.setVirtual();
    }

    onWindowHide(): void
    {
        this.m_list.itemRenderer.clear();
        this.m_list.numItems = 0;
        this.m_list.itemPool.clear();
    }

}