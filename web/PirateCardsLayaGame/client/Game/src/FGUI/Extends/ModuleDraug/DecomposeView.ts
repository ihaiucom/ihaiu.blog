/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DecomposeViewStruct from "../../Generates/ModuleDraug/DecomposeViewStruct";
import DraugWindowUI from "./DraugWindowUI";
import DraugData from "../../../GameModule/DataStructs/DraugData";
import DraugItem from "./DraugItem";
import AwakenButton from "./AwakenButton";
import Game from "../../../Game";
import DecomposeDraugS2C = proto.DecomposeDraugS2C;
import { EnumDraugDialogType } from "../../../GameModule/DataEnums/EnumDraugDialogType";
import DraugTypeData from "../../../GameModule/DataStructs/DraugTypeData";
import DraugTypeItem from "./DraugTypeItem";

export default class DecomposeView extends DecomposeViewStruct
{
    /** 可分解列表 */
    private decomposeList: DraugData[] = [];

    /** 筛选列表 */
    private filterList: DraugData[] = [];

    /** 被分解Id列表 */
    private beDecomposeIds:Dictionary<number, number> = new Dictionary<number, number>();

    /** 部位筛选 */
    private partIndex: number = -1;
    
    /** 质量筛选 */
    private qualityIndex: number = -1;

     /** 类型筛选 */
     private typeData:DraugTypeData;

     /** 类型列表 */
     private typeList: DraugTypeData[];

    /*----------------------默认视图接口---------------------------*/
    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        this.m_listDrug.setVirtual();       
        this.m_listDrugType.setVirtual();
    }

    //** 窗口显示 */
    onWindowShow(): void
    {
        this.m_listDrug.setItemRenderer(this.DraugRender, this);
        this.m_listDrugType.setItemRenderer(this.DraugTypeRender, this);
        this.m_listPart.setItemRenderer(this.PartRender, this);
        this.m_listQuality.setItemRenderer(this.QualityRender, this);
        this.m_listDrug.on(fgui.Events.CLICK_ITEM, this, this.DraugSelect);
        this.m_listDrugType.on(fgui.Events.CLICK_ITEM, this, this.DraugTypeSelect);
        this.m_listPart.on(fgui.Events.CLICK_ITEM, this, this.PartSelect);
        this.m_listQuality.on(fgui.Events.CLICK_ITEM, this, this.QualitySelect);
        this.m_Filter.on(fgui.Events.STATE_CHANGED, this, this.FilterChanged);
        this.m_btnReturn.onClick(this, this.FilterRecover);
        this.m_btnDecompose.onClick(this, this.DraugDecompose);
        this.m_btnSelect.onClick(this, this.SelectDecompose);
        Game.net.decomposeDraugS2C.on(this.DecomposeDraugS2C, this);

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
        this.m_listPart.off(fgui.Events.CLICK_ITEM, this, this.PartSelect);
        this.m_listQuality.off(fgui.Events.CLICK_ITEM, this, this.QualitySelect);
        this.m_Filter.off(fgui.Events.STATE_CHANGED, this, this.FilterChanged);
        this.m_btnReturn.offClick(this, this.FilterRecover);
        this.m_btnDecompose.offClick(this, this.DraugDecompose);
        this.m_btnSelect.offClick(this, this.SelectDecompose);
        Game.net.decomposeDraugS2C.off(this.DecomposeDraugS2C, this);

        this.Reset();
    }

    /*private----------------------UI事件操作---------------------------*/
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

            let decomposelist    = this.decomposeList;
            this.UpdateView(decomposelist, false);
        }
    }

    /** 恢复筛选列表 */
    private FilterRecover()
    {
        this.m_Type.selectedIndex = 1;
        this.FilterType();
    }

    /** 刷新觉醒战魂列表 */
    private DraugRender(index: number, item: DraugItem): void
    {
        if (this.IsFilter()) 
        {
            item.RenderItem(this.filterList[index]);
        }
        else
        {
            item.RenderItem(this.decomposeList[index]);
        } 

        // 空的战魂
        if (!item.DataSource) 
        {
            return;    
        }

        if (!item.CanDecompose()) 
        {
            item.SetDecompose();    
        }

        let selected = this.beDecomposeIds.hasKey(item.uId);
        item.SetSelect(selected);
        // if(!selected) this.m_btnSelect.selected = false;
    }

    /** 刷新觉醒战魂分类列表 */
    private DraugTypeRender(index: number, item: DraugTypeItem)
    {
        item.RenderItem(this.typeList[index]);
    }

    /** 刷新质量分类列表 */
    private QualityRender(index: number, item:AwakenButton)
    {
        item.RenderItem(index);
    }

    /** 刷新部位分类列表 */
    private PartRender(index: number, item:AwakenButton)
    {
        item.RenderItem(index);
    }

    /** 战魂点击 选中战魂 */
    private DraugSelect(item: DraugItem): void
    {
        if(this.beDecomposeIds.count == 100 && !item.IsSelect())
        {
            Game.system.alertText("已达到最大分解数量！");
            return
        }

        let data  = item.DataSource;

        item.SetSelect();
        this.AddOrRemoveDecompose(item.DataSource ,item.IsSelect());
        if (item.IsSelect()) 
        {
            Game.system.draugInfoDialogShow(data, null, EnumDraugDialogType.Decompose);    
        } 
        else 
        {
            this.DialogClose();
        }


        if (this.IsFilter()) 
        {
            this.DraugAllSelect(this.filterList);
        } 
        else 
        {
            this.DraugAllSelect(this.decomposeList);
        }
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
        model.SortDraug(partlist);
        this.UpdateView(partlist, true);
     }

     /** 分解战魂 */
    private DraugDecompose()
    {
        let qualitylist = this.beDecomposeIds.getValues();
        if (!qualitylist.length) 
        {
            Game.system.toastText("请选择被分解战魂！");
            return;
        }

        let quality = 1;
        for (let i = 0, len = qualitylist.length; i < len; i++) 
        {
            quality = Math.max(quality, qualitylist[i]);
        }

        if (quality <= 3) 
        {
            this.SenderDecompose()
        }
        else
        {
            let text = `分解紫色及以上战魂！`;
            Game.system.alrtTextFull(text, "战魂分解：", this, this.SenderDecompose,"确定");   
        }
    }

    /** 发送分解消息 */
    private SenderDecompose()
    {
        let bedecomposeIds = this.beDecomposeIds.getKeys();;
        Game.sender.draug.DraugDecompose(bedecomposeIds);    
    }

     /** 全选/全取消 战魂选择 */
     private SelectDecompose()
     {
        let selected = this.m_btnSelect.selected;

        if(this.beDecomposeIds.count == 100 && selected)
        {
            Game.system.alertText("已达到最大分解数量！");
            return
        }

        if (this.IsFilter()) 
        {
            let filterlist = this.filterList;
            for (let i = 0, len = filterlist.length; i < len; i++) 
            {
                this.AddOrRemoveDecompose(filterlist[i] ,selected);
            }
            this.UpdateView(filterlist, true);
        } 
        else 
        {
            let decomposelist = this.decomposeList;
            for (let i = 0, len = decomposelist.length; i < len; i++) 
            {
                this.AddOrRemoveDecompose(decomposelist[i] ,selected);
            }
            this.UpdateView(decomposelist, false);
        }
     }

    /*private----------------------EVENT事件操作-----------------------*/
    /** 更新分解后的列表 */
    private DecomposeDraugS2C(msg: DecomposeDraugS2C):void
    {
        if (msg.error) {
            return;
        }
        
        let decomposelist = this.decomposeList;
        let deletelist = msg.draugIdList;
        for (let i = 0, len = decomposelist.length; i < len; i++) 
        {
            let draug = decomposelist[i];
            if (deletelist.indexOf(draug.uid) > -1) 
            {
                decomposelist.splice(i, 1);
                len--;
                i--;
            }
        }

        this.ResetDecompose();

        if (this.IsFilter()) 
        {
            let filterlist = this.filterList;
            for (let i = 0, len = filterlist.length; i < len; i++) 
            {
                let draug = filterlist[i];
                if (deletelist.indexOf(draug.uid) > -1) 
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
            this.UpdateView(decomposelist, false);
        }
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
        this.ResetDecompose();
        
        this.m_Filter.selectedIndex = 0;
        this.m_Type.selectedIndex   = 0;
        this.decomposeList = [];
        this.filterList = [];
        this.partIndex  = -1;
        this.qualityIndex  = -1;
        this.typeData   = null;
        this.typeList   = null;
        this.m_listDrug.numItems = 0;
        this.m_listDrug.itemPool.clear();
        this.m_listDrugType.numItems = 0;
        this.m_listDrugType.itemPool.clear();
    }

    /** 关闭弹框 */
    private DialogClose()
    {
        Game.event.dispatch("CLOSE_DIALOG");
    }

    /**
     * 移除或者添加战魂
     * @param data 
     * @param selected  true 添加  false 移除
     */
    private AddOrRemoveDecompose(data:DraugData, selected:boolean)
    {
        let beDecomposeIds = this.beDecomposeIds;
        let money = Number(this.m_labMoney.text);
        if (selected && beDecomposeIds.count < 100) 
        {
            if (beDecomposeIds.hasKey(data.uid)) 
            {
                return;    
            }
            beDecomposeIds.add(data.uid, data.quality);
            this.m_labMoney.text     = String(money + data.wrothCoin);
        } 
        else 
        {
            if (!beDecomposeIds.hasKey(data.uid)) 
            {
                return;    
            }
            beDecomposeIds.remove(data.uid);
            this.m_labMoney.text     = String(money - data.wrothCoin)
        }
        
        this.m_progressNum.value = beDecomposeIds.count;

        let ismax = (beDecomposeIds.count == 100);
        this.m_btnDecompose.title = ismax ? "神赐" : "分解";
    }

    /** 重置分解战魂 */
    private ResetDecompose(): void
    {
        this.beDecomposeIds.clear();
        this.m_labMoney.text      = "0";
        this.m_progressNum.value  = 0;
        this.m_btnSelect.selected = false;
        this.m_btnDecompose.title = "分解";
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
            this.decomposeList = drauglist;    
        }
        
        this.m_listDrug.numItems = Math.max(24, drauglist.length);
        this.m_listDrug.refreshVirtualList();

        this.DraugAllSelect(drauglist);
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
         
         this.UpdateView(filterlist, true);
     }

    /** 判断是否是筛选状态 */
    private IsFilter():Boolean
    {
        return this.m_Type.selectedIndex == 2 || this.partIndex != -1 || this.qualityIndex != -1;
    }

    /** 战魂是否全选 */
    private DraugAllSelect(drauglist:DraugData[])
    {
        let idlist = this.beDecomposeIds.getKeys();

        for (let i = 0, len = drauglist.length; i < len; i++) 
        {
            let draug = drauglist[i];

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
        let model = Game.moduleModel.draug;
        // 已获取、未锁定、未装配的战魂
        let unlocklist  = model.GetDraugUnLockList()
        model.SortDraug(unlocklist);
        
        this.UpdateView(unlocklist, false);
    }

    /** 开启1同时选中 */
    public OpenSelect(data:DraugData): void
    {
        this.AddOrRemoveDecompose(data, true);
        this.m_listDrug.refreshVirtualList();
    }

    /** 关闭界面 */
    public Close(): void
    {
        this.Reset();
    }
}