/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipSelectViewStruct from "../../Generates/ModuleEquip/EquipSelectViewStruct";
import EquipWindowUI from "./EquipWindowUI";
import { EquipType, EquipQuality, EquipFuncType } from "../../../GameModule/DataEnums/EquipType";
import GameEventKey from "../../../GameEventKey";
import Game from "../../../Game";
import EquipTypeButton from "./EquipTypeButton";
import EquipIconButtonSmall from "./EquipIconButtonSmall";
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import { MenuId } from "../../../GameModule/MenuId";

export default class EquipSelectView extends EquipSelectViewStruct
{
    windowUI: EquipWindowUI;

    // 选中装备的唯一UID
    selectEquipUID: number;

    // 当前类型卡牌数据
    list: Array<int> = []; 

    // 记录装备类型按钮操作
    lastTypeIndex = 0;

    // 满屏幕的数量
    private MaxNum = 42;


    OnShowBtnListItem(index: number = 0)
    {
        let isShow = index == 0? true: false;
        let list = this.m_btnList.m_list
        for(let i = 0; i < list.numItems; i++)
        {
            let item = list.getChildAt(i);
            if(isShow)
            {
                item.visible = true;
            }
            else
            {
                item.visible = i > 0? false: true;
            }
        }
    }

    OnRestTopList()
    {
        this.m_listSelectView.m_topView.m_listItem.visible = false;
    }

    // 切换正常/吞噬状态
    OnSwitchState(index: number = 0)
    {
        this.OnShowBtnListItem(index); 
        this.m_state.selectedIndex = index;
        if(index == 0)
        {
            // 切换至列表状态
            this.m_btnList.m_list.selectedIndex = this.lastTypeIndex;
            this.m_listSelectView.ResetView();
            this.OnViewChange(this.lastTypeIndex, true);
        }
        else
        {
            // 切换至吞噬状态
            this.m_btnList.m_list.selectedIndex = 0;
            this.m_listSelectView.InitViewData()
            this.OnSelectQulity([true, EquipQuality.White]) // 默认选中白
        }
    }

    // 升星回调
    OnEquipStarUp()
    {
        this.OnSwitchState(0);
    }

    // 升级回调
    OnEquipLevelUp()
    {
        this.m_listSelectView.OnEquipLevelUp()
    }

    initView(defaultSelectID: number)
    {
        if(defaultSelectID)
        {
            this.selectEquipUID = defaultSelectID;
            this.OnClickAll(true);
        }
        else
        {
            this.OnClickAll();
        }
    }
    
    // 全部
    OnClickAll(needSelectItem: boolean = false)
    {
        this.m_btnList.m_list.selectedIndex = 0;

        this.UpdateList(EquipType.All);
        if(needSelectItem)
        {
            this.SelectItemByUID(this.selectEquipUID);
        }   
        else
        {
            this.SelectDefaultItem()
        }
    }

    // 分页按钮
    OnViewChange(index: number, needSelectItem: boolean = false)
    {
        this.UpdateList(index);
        if(needSelectItem)
        {
            this.SelectItemByUID(this.selectEquipUID);
        }   
        else
        {
            this.SelectDefaultItem()
        }
    }

    renderBtnListItem(index: number, item: EquipTypeButton)
    {
        item.index = index;
    }

    clickBtnListItem(item: EquipTypeButton, event: Event)
    {
        this.OnViewChange(item.index);
    }

    renderListItem(index: number, item: EquipIconButtonSmall): void  
    {
        let uid = this.list[index];
        let data = Game.moduleModel.equip.GetDataByUID(uid);
        item.RenderItem(data);
        item.SetOnWho();

        if (data) 
        {
            MenuValidateRed.getInstance().openItem(MenuId.Equip, data, item);    
        }
        else
        {
            MenuValidateRed.getInstance().closeRed(item);  
        }
    }

    clickListItem(target: EquipIconButtonSmall, event: Event): void 
    {
        if(target.itemData.uid == this.selectEquipUID)
        {
            // 不要重复点击同一个
            return;
        }
        this.selectEquipUID = target.itemData.uid;
        this.m_listSelectView.selectEquipUID = target.itemData.uid;

        let index = this.windowUI.m_detialView.m_state.selectedIndex
        this.OnDetialViewUpdate(index)

        Game.event.dispatch(GameEventKey.GameFrame_EquipSelectFirst);
    }

    onReset()
    {
        this.selectEquipUID = null;
        this.list = []; 
        this.lastTypeIndex = 0;
        this.m_state.selectedIndex = 0;
        this.m_listSelectView.ResetView();
    }

    onWindowInited(): void
    {
    }

    //主窗口显示时将被调
    onWindowShow(): void  
    {
        this.m_listView.m_list.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_listView.m_list.on(fgui.Events.CLICK_ITEM, this, this.clickListItem);
        this.m_listView.m_list.setVirtual();

        this.m_btnList.m_list.itemRenderer = Laya.Handler.create(this, this.renderBtnListItem, null, false);
        this.m_btnList.m_list.on(fgui.Events.CLICK_ITEM, this, this.clickBtnListItem);
        
        Game.event.add(GameEventKey.GameFrame_EquipStarUp, this.OnEquipStarUp, this);
        Game.event.add(GameEventKey.GameFrame_EquipLevelUp, this.OnEquipLevelUp, this)
        Game.event.add(GameEventKey.GameFrame_EquipQualitySelect, this.OnSelectQulity, this);
        Game.event.add(GameEventKey.GameFrame_EquipItemSelect, this.OnSelectItem, this);
        Game.event.add(GameEventKey.GameFrame_EquipQualitySort, this.OnSortQulity, this);
        this.m_btnList.m_list.numItems = 7;
        // this.OnClickAll();
    }

    //主窗口关闭时将被调
    onWindowHide(): void  {
        Game.event.remove(GameEventKey.GameFrame_EquipStarUp, this.OnEquipStarUp, this);
        Game.event.remove(GameEventKey.GameFrame_EquipLevelUp, this.OnEquipLevelUp, this)
        Game.event.remove(GameEventKey.GameFrame_EquipQualitySelect, this.OnSelectQulity, this);
        Game.event.remove(GameEventKey.GameFrame_EquipItemSelect, this.OnSelectItem, this);
        Game.event.remove(GameEventKey.GameFrame_EquipQualitySort, this.OnSortQulity, this);

        this.m_listView.m_list.itemRenderer.clear();
        this.m_listView.m_list.numItems = 0;
        this.m_listView.m_list.itemPool.clear();

        this.m_btnList.m_list.numItems = 0;

        this.onReset();
    }

    /** ---------------------------------------------------初始选择状态--------------------------------------------------------- */
    UpdateList(type: EquipType)
    {
        // 记录最后一次点击的按钮类型
        this.lastTypeIndex = this.m_btnList.m_list.selectedIndex // this.m_type.selectedIndex;

        if(type == EquipType.All)
        {
            this.list = Game.moduleModel.equip.List.concat();

            let num = this.list.length
            if(num < this.MaxNum)
            {
                num = this.MaxNum;
            }
    
            this.m_listView.m_list.numItems = num;     
            return
        }

        let equip = Game.moduleModel.equip
        let list = equip.List;
        let typeList = [];
        for(let i = 0; i < list.length; ++i)
        {
            let uid = list[i];
            let data = equip.GetDataByUID(uid)
            if(type == data.config.equipPos)
            {
                typeList.push(uid);
            }
        }

        this.list = typeList;

        let num = typeList.length
        if(num < this.MaxNum)
        {
            num = this.MaxNum;
        }

        this.m_listView.m_list.numItems = num;
    }

    // 切换标签时默认选中第一个
    SelectDefaultItem()
    {
        if(this.list.length > 0)
        {
            this.m_listView.m_list.selectedIndex = 0;
        }
        else
        {
            this.m_listView.m_list.selectedIndex = -1;
        }
        this.selectEquipUID = this.list[0];
        this.m_listSelectView.selectEquipUID = this.selectEquipUID;
        this.OnDetialViewUpdate(EquipFuncType.Base)
    }

    SelectItemByUID(uid: int)
    {
        let list = this.list;
        let index = 0;
        for(let i = 0; i < list.length; ++i)
        {
            let _uid = list[i];
            if(uid == _uid)
            {
                index = i;
                break;
            }
        }

        this.m_listView.m_list.selectedIndex = index;
        if(index > 36)
        {
            this.m_listView.m_list.scrollToView(index);
        }
        
        let buttonIndex = this.windowUI.m_detialView.m_state.selectedIndex
        this.OnDetialViewUpdate(buttonIndex)
    }
    
    OnDetialViewUpdate(index: EquipFuncType)
    {
        this.windowUI.m_detialView.selectEquipUID = this.selectEquipUID;
        this.windowUI.m_detialView.OnClickButton(index);
    }

    /** ---------------------------------------------------吞噬状态------------------------------------------------------------- */

    // 刷新经验进度条预计增加多少经验
    OnUpdateProgress()
    {
        let list = this.m_listSelectView.itemList;
        if(list.length <= 0)
        {
            this.windowUI.m_detialView.ResetAddProgress();
            return
        }

        let addExp = 0;
        for(let uid of list)
        {
            let exp = Game.moduleModel.equip.GetTotalExp(uid);
            addExp = addExp + exp;
        }

        this.windowUI.m_detialView.UpdateAddProgress(addExp);
    }

    // 按品质排序
    OnSortQulity()
    {
        this.m_listSelectView.OnSortQulity();
    }

    // 选中/取消一类品质的装备
    OnSelectQulity(param: Array<any>)
    {
        this.m_listSelectView.OnSelectQulity(param);
        this.OnUpdateProgress();
    }

    // 选中/取消一个装备
    OnSelectItem(param: Array<any>)
    {
        this.m_listSelectView.OnSelectItem(param);
        this.OnUpdateProgress();
    }
}