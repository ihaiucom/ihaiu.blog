/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WearViewStruct from "../../Generates/ModuleDraug/WearViewStruct";
import DraugItem from "./DraugItem";
import DraugTypeItem from "./DraugTypeItem";
import DraugWindowUI from "./DraugWindowUI";
import DraugData from "../../../GameModule/DataStructs/DraugData";
import Game from "../../../Game";
import DraugTypeData from "../../../GameModule/DataStructs/DraugTypeData";
import { EnumDraugDialogType } from "../../../GameModule/DataEnums/EnumDraugDialogType";
import AwakenButton from "./AwakenButton";
import LockDraugS2C = proto.LockDraugS2C;
import SwallowDraugS2C = proto.SwallowDraugS2C;
import WearDraugS2C = proto.WearDraugS2C;
import UnwearDraugS2C = proto.UnwearDraugS2C;
import PartButton from "./PartButton";
import PartItemButton from "./PartItemButton";
import QualityItemButton from "./QualityItemButton";
import Prop from "../../../GameFrame/Props/Prop";
import AllPropItem from "./AllPropItem";
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import { MenuId } from "../../../GameModule/MenuId";

export default class WearView extends WearViewStruct
{
    /** 可装配列表 */
    private wearList: DraugData[] = [];

    /** 筛选列表 */
    private filterList: DraugData[] = [];

    /** 属性列表 */
    private propList: Prop[] = [];

    /** 被吞噬Id列表 */
    private beSwallowIds:Dictionary<number, number> = new Dictionary<number, number>();

    /** 吞噬者Id */
    private swallowDraug:DraugData;

    /** 部位筛选 */
    private partIndex:number = -1;

    /** 属性筛选 */
    private propIndex:number = -1;

    /** 质量筛选 */
    private qualityIndex: number = -1;

    /** 类型筛选 */
    private typeData:DraugTypeData;

    /** 类型列表 */
    private typeList: DraugTypeData[];

    /** 选中战魂 */
    private selectItem: DraugItem;

    /** 当前吞噬后等级 */
    private newLevel:number  = 0;

    /** 溢出经验 */
    private overExp:number   = -1;

    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        this.m_listDrug.setVirtual();       
        this.m_listDrugType.setVirtual();
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_listDrug.setItemRenderer(this.DraugRender, this);
        this.m_listDrugType.setItemRenderer(this.DraugTypeRender, this);
        this.m_listPart.setItemRenderer(this.PartRender, this);
        this.m_listQuality.setItemRenderer(this.QualityRender, this);
        this.m_listProp.setItemRenderer(this.PropRender, this)
        this.m_listDrug.on(fgui.Events.CLICK_ITEM, this, this.DraugSelect);
        this.m_listDrugType.on(fgui.Events.CLICK_ITEM, this, this.DraugTypeSelect);
        this.m_listPart.on(fgui.Events.CLICK_ITEM, this, this.PartSelect);
        this.m_listQuality.on(fgui.Events.CLICK_ITEM, this, this.QualitySelect);
        this.m_Filter.on(fgui.Events.STATE_CHANGED, this, this.FilterChanged);
        this.m_btnReturn.onClick(this, this.FilterRecover);
        this.m_btnClose.onClick(this, this.CloseSwallow);
        this.m_btnSelect.onClick(this, this.SelectSwallow);
        this.m_btnSwallow.onClick(this, this.DraugSwallow);
        this.m_boxFilter.on(fgui.Events.STATE_CHANGED, this, this.ChangeFilterBox);
        this.m_boxProp.onClick(this, this.ShowPropBox);
        this.m_boxProp.on(fgui.Events.STATE_CHANGED, this, this.ChangePropBox);
        Game.net.lockDraugS2C.on(this.LockDraugS2C, this);
        Game.net.swallowDraugS2C.on(this.SwallowDraugS2C, this);
        Game.net.wearDraugS2C.on(this.WearDraugS2C, this);
        Game.net.unwearDraugS2C.on(this.UnWearDraugS2C, this);
        Game.event.add("FILETER_DRAUG", this.FilterDraug, this);
        Game.event.add("CHANGE_DRAUG", this.ChangeDraug, this);
        Game.event.add("CHANGE_HERO", this.UpdateProp, this);

        this.Init();
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_listDrug.itemRenderer.clear();
        this.m_listDrugType.itemRenderer.clear();
        this.m_listPart.itemRenderer.clear();
        this.m_listQuality.itemRenderer.clear();
        this.m_listDrug.off(fgui.Events.CLICK_ITEM, this, this.DraugSelect);
        this.m_listDrugType.off(fgui.Events.CLICK_ITEM, this, this.DraugTypeSelect);
        this.m_listPart.off(fgui.Events.CLICK_ITEM, this, this.PartSelect);
        this.m_listQuality.off(fgui.Events.CLICK_ITEM, this, this.QualitySelect);
        this.m_Filter.off(fgui.Events.STATE_CHANGED, this, this.FilterChanged);
        this.m_btnReturn.offClick(this, this.FilterRecover);
        this.m_btnClose.offClick(this, this.CloseSwallow);
        this.m_btnSelect.offClick(this, this.SelectSwallow);
        this.m_btnSwallow.offClick(this, this.DraugSwallow);
        this.m_boxFilter.off(fgui.Events.STATE_CHANGED, this, this.ChangeFilterBox);
        this.m_boxProp.offClick(this, this.ShowPropBox);
        this.m_boxProp.off(fgui.Events.STATE_CHANGED, this, this.ChangePropBox);
        Game.net.lockDraugS2C.off(this.LockDraugS2C, this);
        Game.net.swallowDraugS2C.off(this.SwallowDraugS2C, this);
        Game.net.wearDraugS2C.off(this.WearDraugS2C, this);
        Game.net.unwearDraugS2C.off(this.UnWearDraugS2C, this);
        Game.event.remove("FILETER_DRAUG", this.FilterDraug, this);
        Game.event.remove("CHANGE_DRAUG", this.ChangeDraug, this);
        Game.event.remove("CHANGE_HERO", this.UpdateProp, this);
    
        this.Reset();
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 刷新觉醒战魂列表 */
    private DraugRender(index: number, item: DraugItem): void
    {
        let data;
        if (this.IsFilter()) 
        {
            data = this.filterList[index];
            item.RenderItem(data);
        }
        else
        {
            data = this.wearList[index];
            item.RenderItem(data);
        } 

        if (data) 
        {
            data.heroId = this.m_heroItem.GetData().id;
            MenuValidateRed.getInstance().openItem(MenuId.Draug, data, item);    
        }
        else
        {
            MenuValidateRed.getInstance().closeRed(item);  
            return;  
        }

        if (this.m_Info.selectedIndex == 0) 
        {
            item.CloseSwallow();
            this.selectItem && this.selectItem.OpenSwallow(true);
        } 
        else 
        {
            item.OpenSwallow(item.IsSelf(this.swallowDraug.uid));
            if (!item.IsSwallow() && !item.IsLock()) 
            {
                let selected = this.beSwallowIds.hasKey(item.uId);
                item.SetSelect(selected);
            }

            item.SetSelectGray(item.IsLock());
        }

        
    }

    /** 刷新觉醒战魂分类列表 */
    private DraugTypeRender(index: number, item: DraugTypeItem)
    {
        item.RenderItem(this.typeList[index]);
    }

    /** 刷新部位分类列表 */
    private PartRender(index: number, item:PartItemButton)
    {
        item.RenderItem(index);
    }

    /** 刷新质量分类列表 */
    private QualityRender(index: number, item:QualityItemButton)
    {
        item.RenderItem(index);
    }

    /** 刷新属性列表 */
    private PropRender(index: number, item:AllPropItem)
    {
        item.RenderItem(this.propList[index]);
    }

    /** 战魂点击 弹TIPS */
    private DraugSelect(item: DraugItem): void
    {
        let data  = item.DataSource;
        // 是否空格
        if (!data) 
        {
            return;
        }

        // 英雄相关
        let weardata = null;
        let herodata  = this.m_heroItem.GetData();
        if (herodata) 
        {
            data.suitData = herodata.GetWearDraugSuit(data.typeName);

            weardata = herodata.GetWearDraug(data.pos);
            if (weardata) 
            {
                weardata.suitData = herodata.GetWearDraugSuit(weardata.typeName);
            }
        }

        if (item.CanSelect()) 
        {
            if (data.isLock) 
            {
                Game.system.toastText("已锁定战魂，无法吞噬");    
                return;
            }

            item.SetSelect();
            this.AddOrRemoveSwallow(data, item.IsSelect());
            if (item.IsSelect()) 
            {
                Game.system.draugInfoDialogShow(data, weardata, EnumDraugDialogType.UnWearBeSwallowed);    
            } 
            else 
            {
                this.DialogClose();
            }
        }
        else
        {
            if (this.selectItem != item) {
                if (this.selectItem) this.selectItem.CloseSwallow();
                
                this.selectItem = item;
                this.selectItem.OpenSwallow(true);
            }

            Game.system.draugInfoDialogShow(data, weardata, EnumDraugDialogType.UnWearSwallowed);
        }

        if (this.IsFilter()) 
        {
            this.DraugAllSelect(this.filterList);
        } 
        else 
        {
            this.DraugAllSelect(this.wearList);
        }
    }

    /** 战魂类型点击 筛选该类型战魂 */
    private DraugTypeSelect(item: DraugTypeItem): void
    {
        let data  = item.DataSource;

        this.typeData = data;
        if (item.IsHad()) 
        {
            this.m_Type.selectedIndex = 2;
            this.FilterTypeInfo(data);    
        }
    }

    /** 战魂部位点击 筛选该类型战魂 */
    private PartSelect(item:AwakenButton)
    {
        let model      = Game.moduleModel.draug;

        let part       = item.DataSouce + 1;
        let partlist   = model.GetDraugListByPos(part);
        this.partIndex = item.DataSouce;
        model.SortDraugProp(partlist, this.propIndex);
        this.UpdateView(partlist, true);
    }

    /** 战魂质量点击 筛选该类型战魂 */
    private QualitySelect(item:AwakenButton)
    {
       let model         = Game.moduleModel.draug;

       let quality       = item.DataSouce + 1;
       let qualitylist   = model.GetDraugListByQuality(quality);
       this.qualityIndex = item.DataSouce;
       model.SortDraug(qualitylist);
       this.UpdateView(qualitylist, true);
    }

    /** 筛选变化 */
    private FilterChanged()
    {
        if(this.m_Filter.selectedIndex == 1)
        {
            this.m_Type.selectedIndex = 1;
            this.FilterType();
        }
        else
        {
            this.m_Type.selectedIndex = 0;
            this.filterList   = [];
            this.partIndex    = -1;
            this.qualityIndex = -1;

            let wearlist    = this.wearList;
            this.UpdateView(wearlist, false);
        }
    }

    /** 恢复筛选列表 */
    private FilterRecover()
    {
        this.m_Type.selectedIndex = 1;
        this.FilterType();
    }

    /** 关闭吞噬界面 */
    private CloseSwallow(): void
    {
        this.m_Info.selectedIndex = 0;

        this.m_listDrug.refreshVirtualList();
    }

    /** 全选/全取消 战魂选择 */
    private SelectSwallow(): void
    {
        let selected = this.m_btnSelect.selected;

        if (this.IsFilter()) 
        {
            let filterlist = this.filterList;
            for (let i = 0, len = filterlist.length; i < len; i++) 
            {
                this.AddOrRemoveSwallow(filterlist[i], selected);
            }
            this.UpdateView(filterlist, true);
        } 
        else 
        {
            let wearlist = this.wearList;
            for (let i = 0, len = wearlist.length; i < len; i++) 
            {
                this.AddOrRemoveSwallow(wearlist[i], selected);
            }
            this.UpdateView(wearlist, false);
        }
    }

    /** 吞噬战魂 */
    private DraugSwallow()
    {
        let qualitylist = this.beSwallowIds.getValues();
        if (!qualitylist.length) 
        {
            Game.system.toastText("请选择被吞噬战魂！");
            return;
        }

        let overexp = this.overExp;
        let quality = 1;
        for (let i = 0, len = qualitylist.length; i < len; i++) 
        {
            quality = Math.max(quality, qualitylist[i]);
        }

        if (overexp <= 0 && quality <= 3) 
        {
            this.SenderSwallow();
        }
        else if (overexp <= 0 && quality > 3)
        {
            let text = `本次吞噬将要消耗一个或多个紫色战魂！`;
            Game.system.alrtTextFull(text, "战魂吞噬：", this, this.SenderSwallow,"确定");   
        } 
        else if (overexp > 0 && quality > 3)
        {
            let text = `本次吞噬将要消耗一个或多个紫色战魂，溢出${overexp}经验！`;
            Game.system.alrtTextFull(text, "战魂吞噬：", this, this.SenderSwallow,"确定"); 
        }
        else if (overexp > 0 && quality <= 3)
        {
            let text = `溢出${overexp}经验！`;
            Game.system.alrtTextFull(text, "战魂吞噬：", this, this.SenderSwallow,"确定"); 
        }
    }

    /** 发送吞噬消息 */
    private SenderSwallow()
    {
        let beswallowIds = this.beSwallowIds.getKeys();
        let swallowId    = this.swallowDraug.uid;
        let heroId       = this.swallowDraug.heroId;
        Game.sender.draug.DraugSwallow(swallowId, heroId, beswallowIds);
    }

    /** 选择筛选方式 */
    private ChangeFilterBox()
    {
        let filterId = Number(this.m_boxFilter.value);
        this.m_Filter.selectedIndex = filterId + 1;
    }

    /** 弹出属性筛选列表 */
    private ShowPropBox()
    {
        let model  = Game.moduleModel.draug;   
        let values = [-1].concat(model.GetDraugPropIds()); 
        values.length % 2 == 1 && values.push(-1);
        this.m_boxProp.values = values;
        let items  = ["默认"];
        for (let i = 1, len = values.length; i < len; i++) 
        {
            if (values[i] != -1) {
                let name = Game.config.property.getConfig(values[i]).name;
                items.push(name);
            } else {
                items.push("");
            }    
        }
        this.m_boxProp.items  = items;
    }

    /** 选择属性排序 */
    private ChangePropBox()
    {
        let model  = Game.moduleModel.draug;   
        let propId = Number(this.m_boxProp.value);
        this.propIndex = propId;

        let wearlist   = this.wearList;
        model.SortDraugProp(wearlist, propId);
        
        if (this.IsFilter())
        {
            if (this.partIndex != -1) 
            {
                let index = this.partIndex;
                let item  = <AwakenButton>this.m_listPart.getChildAt(index);
                this.PartSelect(item);
            } 
            else if (this.qualityIndex != -1) 
            {
                let index = this.qualityIndex;
                let item  = <AwakenButton>this.m_listQuality.getChildAt(index);
                this.QualitySelect(item);
            }
            else if (this.typeData)
            {
                this.FilterTypeInfo(this.typeData);
            }
        }
        else
        {
            this.UpdateView(wearlist, false); 
        }
    }

    
    /*private----------------------EVENT事件操作-----------------------*/
    /** 更新锁定状态 */
    private LockDraugS2C(msg: LockDraugS2C)
    {
        if (msg.error) {
            return;
        }

        this.ChangeDraugsInList(msg.draugId, msg.isLock)
    }

    /** 更新吞噬后的列表 */
    private SwallowDraugS2C(msg: SwallowDraugS2C)
    {
        if (msg.error) {
            return;
        }

        let newdraug = DraugData.Create(msg.draug);
        newdraug.heroId = msg.heroId;
        this.UpdateSwallow(newdraug);
        
        this.RemoveDraugsInList(msg.beSwallowIdList);

        let herodata = this.m_heroItem.GetData();
        if (newdraug.heroId == herodata.ID) 
        {
            this.m_heroItem.UpdateView()
            this.UpdateProp();
        }
        else
        {
            this.ReplaceDraugInList(newdraug);
        }
    }

    /** 更新装配后的列表 */
    private WearDraugS2C(msg: WearDraugS2C)
    {
        if (msg.error) {
            return;
        }

        let weardraug = this.RemoveDraugsInList([msg.draugId]);
        if (this.swallowDraug && this.swallowDraug.uid == weardraug.uid) {
            this.swallowDraug.heroId = msg.heroId;
        }

        if(msg.unwearDraug)
        {
            let unweardraug = DraugData.Create(msg.unwearDraug);
            this.AddDraugsInList(unweardraug);
            if (this.swallowDraug && this.swallowDraug.uid == unweardraug.uid) {
                this.swallowDraug.heroId = -1;
            }
        }

        this.m_heroItem.UpdateView();
        this.UpdateProp();

        (<DraugWindowUI>this.parent).RefreshRed();
    }

    /** 更新卸载后的列表 */
    private UnWearDraugS2C(msg: UnwearDraugS2C)
    {
        if (msg.error) {
            return;
        }

        let unweardraug = DraugData.Create(msg.unwearDraug);
        this.AddDraugsInList(unweardraug);

        this.m_heroItem.UpdateView();
        this.UpdateProp();

        (<DraugWindowUI>this.parent).RefreshRed();
    }

    /** 监听位置筛选 */
    private FilterDraug(partindex:number)
    {
        this.m_Filter.selectedIndex = 2;

        let selectindex = partindex - 1;
        this.m_listPart.selectedIndex = selectindex
        let part = <AwakenButton>this.m_listPart.getChildAt(selectindex);
        if (part) this.PartSelect(part);
    }

    /** 监听位置替换 */
    private ChangeDraug(partindex:number)
    {
        this.m_Filter.selectedIndex = 2;

        let selectindex = partindex - 1;
        this.m_listPart.selectedIndex = selectindex
        let part = <AwakenButton>this.m_listPart.getChildAt(selectindex);
        if (part) this.PartSelect(part);
    }

    /*private---------------------内部方法---------------------------*/
    /** 创建 */
    private Init()
    {
        this.m_listPart.numItems = 6;
        this.m_listQuality.numItems = 5;
    }

    /** 重置 */
    private Reset()
    {
        this.m_Filter.selectedIndex = 0;
        this.m_Type.selectedIndex   = 0;
        this.m_Info.selectedIndex   = 0;
        this.wearList   = [];
        this.filterList = [];
        this.propList   = [];
        this.beSwallowIds.clear();
        this.swallowDraug = null;
        this.partIndex  = -1;
        this.qualityIndex = -1;
        this.propIndex  = -1;
        this.typeData   = null;
        this.typeList   = null;
        this.selectItem = null; 
        this.newLevel   = 0;
        this.overExp    =-1;
        this.m_listDrug.numItems = 0;
        this.m_listDrug.itemPool.clear();
        this.m_listDrugType.numItems = 0;
        this.m_listDrugType.itemPool.clear();
        this.m_listProp.numItems = 0;
        this.m_listProp.itemPool.clear();
    }

    /** 关闭弹框 */
    private DialogClose()
    {
        Game.event.dispatch("CLOSE_DIALOG");
    }

    /**
     * 移除或者添加吞噬战魂
     * @param id 
     * @param selected  true 添加  false 移除
     */
    private AddOrRemoveSwallow(data:DraugData, selected:boolean)
    {
        let swallowdraug = this.swallowDraug
        if(data.isLock || data.uid == swallowdraug.uid)
        {
            return;
        }

        let beSwallowIds = this.beSwallowIds
        if (selected && this.newLevel < swallowdraug.maxLv) 
        {
            if (beSwallowIds.hasKey(data.uid)) 
            {
                return;    
            }
            beSwallowIds.add(data.uid, data.quality);
            this.m_progressExp.value = this.m_progressExp.value + data.nowExp;
        } 
        else 
        {
            if (!beSwallowIds.hasKey(data.uid)) 
            {
                return;    
            }
            beSwallowIds.remove(data.uid);
            this.m_progressExp.value = this.m_progressExp.value - data.nowExp;
        }

        let selectexp = this.m_progressExp.value - swallowdraug.exp;
        let overexp   = swallowdraug.nowExp + selectexp - swallowdraug.maxExp;
        this.overExp  = overexp;

        let newlv     = swallowdraug.GetNewLv(selectexp);
        this.newLevel = newlv;
        this.m_labNewLv.text = (swallowdraug.level == newlv) ? "" : `->${newlv}级`;
    }

    /** 添加列表里的战魂 */
    private AddDraugsInList(data:DraugData)
    {
        let model     = Game.moduleModel.draug;

        let wearlist = this.wearList;
        wearlist.push(data);
        model.SortDraugProp(wearlist, this.propIndex);

        let filterlist = this.filterList;
        if (this.IsFilter() && (this.partIndex == data.pos -1 || this.qualityIndex == data.quality -1 || (this.typeData && this.typeData.draugType == data.typeName))) 
        {
            filterlist.push(data);
            model.SortDraugProp(filterlist, this.propIndex);
            this.UpdateView(filterlist, true);
        } 
        else 
        {
            this.UpdateView(wearlist, false);
        }
    }

    /** 替换列表里的战魂 */
    private ReplaceDraugInList(data:DraugData)
    {
        let wearlist = this.wearList;
        for (let i = 0, len = wearlist.length; i < len; i++) 
        {
            let draug = wearlist[i];
            if (data.uid == draug.uid) 
            {
                wearlist.splice(i, 1, data);
                break;
            }
        }

        
        if (this.IsFilter()) 
        {
            let filterlist = this.filterList;
            for (let i = 0, len = filterlist.length; i < len; i++) 
            {
                let draug = filterlist[i];
                if (data.uid == draug.uid) 
                {
                    filterlist.splice(i, 1, data);
                    break;;
                }
            }

            this.UpdateView(filterlist, true);
        } 
        else 
        {
            this.UpdateView(wearlist, false);
        }
    }

    /** 移除列表里的战魂 */
    private RemoveDraugsInList(ids:number[])
    {
        let wearlist = this.wearList;

        let weardraug = null;
        for (let i = 0, len = wearlist.length; i < len; i++) 
        {
            let draug = wearlist[i];
            if (ids.indexOf(draug.uid) > -1) 
            {
                weardraug = draug;
                wearlist.splice(i, 1);
                len--;
                i--;
            }
        }

        
        if (this.IsFilter()) 
        {
            let filterlist = this.filterList;
            for (let i = 0, len = filterlist.length; i < len; i++) 
            {
                let draug = filterlist[i];
                if (ids.indexOf(draug.uid) > -1) 
                {
                    filterlist.splice(i, 1);
                    len--;
                    i--;
                }
            }

            this.UpdateView(filterlist, true);
        } 
        else 
        {
            this.UpdateView(wearlist, false);
        }

        return weardraug;
    }

    /** 改变列表里的战魂 */
    private ChangeDraugsInList(id:number, islock:boolean)
    {
        let wearlist = this.wearList;

        for (let i = 0, len = wearlist.length; i < len; i++) 
        {
            let draug = wearlist[i];
            if (draug.uid == id) 
            {
               draug.isLock = islock
               break;
            }
        }

        
        if (this.IsFilter()) 
        {
            let filterlist = this.filterList;
            for (let i = 0, len = filterlist.length; i < len; i++) 
            {
                let draug = filterlist[i];
                if (draug.uid == id) 
                {
                    draug.isLock = islock
                    break;
                }
            }

            this.UpdateView(filterlist, true);
        } 
        else 
        {
            this.UpdateView(wearlist, false);
        }
    }

    /** 筛选类型列表 */
    private FilterType():void
    {
        let model     = Game.moduleModel.draug;
        let typelist  = model.GetDraugTypeList();
        model.SortDraugType(typelist);
        this.typeList = typelist;
        this.m_listDrugType.numItems = typelist.length;
        this.m_listDrugType.refreshVirtualList();
    }

    /** 筛选类型列表详情 */
    private FilterTypeInfo(data:DraugTypeData):void
    {
        let model     = Game.moduleModel.draug;

        this.m_labName.text = data.draugName;
        let filterlist = data.draugList;
        
        model.SortDraugProp(filterlist, this.propIndex);
        this.UpdateView(filterlist, true);
    }

    /** 刷新吞噬战魂 */
    private UpdateSwallow(data:DraugData): void
    {
        this.beSwallowIds.clear();
        this.swallowDraug        = data;
        this.newLevel            = data.level;
        this.m_labInfo.text      = data.name
        this.m_labNowLv.text     = `${data.level}级`;
        this.m_labNewLv.text     = "";
        this.m_selectDraug.RenderItem(data);
        this.m_progressExp.max   = data.nextExp;
        this.m_progressExp.value = data.exp;
        this.m_btnSelect.selected = false;
        if(data.level == data.maxLv)
        {
            Game.system.toastText("战魂已达满级！");
            this.CloseSwallow();
        }
        else
        {
            this.m_listDrug.refreshVirtualList();
        }
    }

    /** 刷新界面 */
    private UpdateView(drauglist:DraugData[], isfilter:boolean = false)
    {
        if (isfilter) 
        {
            this.filterList = drauglist;
        } 
        else 
        {
            this.wearList = drauglist;    
        }

        this.m_listDrug.numItems = Math.max(24, drauglist.length);
        this.m_listDrug.refreshVirtualList();

        this.DraugAllSelect(drauglist);
    }

    /** 刷新属性 */
    private UpdateProp()
    {
        let herodata  = this.m_heroItem.GetData();
        let proplist  = Game.moduleModel.draug.DraugPropCalculate(herodata.DraugList);
        this.propList = proplist;
        this.m_listProp.numItems = proplist.length;
    }

    /** 判断是否是筛选状态 */
    private IsFilter():Boolean
    {
        return this.m_Type.selectedIndex == 2 || this.partIndex != -1 || this.qualityIndex != -1;
    }

    /** 战魂是否全选 */
    private DraugAllSelect(drauglist:DraugData[])
    {
        if(this.overExp >= 0)
        {
            this.m_btnSelect.selected = true;
            return;
        }

        let idlist = this.beSwallowIds.getKeys();

        let sdraug = this.swallowDraug;
        if (sdraug) 
        {
            let include = (drauglist.indexOf(sdraug) != -1);
            include && idlist.push(String(sdraug.uid));
        }

        for (let i = 0, len = drauglist.length; i < len; i++) 
        {
            let draug = drauglist[i];
            if (draug.isLock) continue;

            let noindex = (idlist.indexOf(String(draug.uid)) == -1);
            if (noindex) 
            {
                return this.m_btnSelect.selected = false;
            }
        }

        this.m_btnSelect.selected = true;
    }

    /*public----------------------外部接口---------------------------*/
    /** 开启界面 */
    public Open(): void
    {
        
        this.m_heroItem.Open();

        let model = Game.moduleModel.draug;
        // 已获取
        let locklist    = model.GetDraugLockList();
        let unlocklist  = model.GetDraugUnLockList();
        model.SortDraug(locklist);
        model.SortDraug(unlocklist);
        let awakenlist = locklist.concat(unlocklist);
        this.UpdateView(awakenlist, false);  

        this.ShowPropBox();

        this.UpdateProp();
    }

    /** 关闭界面 */
    public Close(): void
    {
        this.Reset();
    }

    /** 开启吞噬战魂 */
    OpenSwallow(data: DraugData): void
    {
        this.m_Info.selectedIndex = 1;

        this.UpdateSwallow(data);
    }
}