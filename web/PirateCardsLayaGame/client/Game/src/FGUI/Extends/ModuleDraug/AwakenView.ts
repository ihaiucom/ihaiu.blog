/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AwakenViewStruct from "../../Generates/ModuleDraug/AwakenViewStruct";
import Game from "../../../Game";
import DraugListS2C = proto.DraugListS2C;
import AwakenDraugS2C = proto.AwakenDraugS2C;
import IDraug = proto.IDraug;
import DraugItem from "./DraugItem";
import AwakenButton from "./AwakenButton";
import { EnumDraugAwakenType } from "../../../GameModule/DataEnums/EnumDraugAwakenType";
import DraugData from "../../../GameModule/DataStructs/DraugData";
import DraugWindowUI from "./DraugWindowUI";
import { EnumDraugDialogType } from "../../../GameModule/DataEnums/EnumDraugDialogType";

export default class AwakenView extends AwakenViewStruct
{
    /** 临时觉醒列表 */
    private awakenList: DraugData[] = [];

    /** 临时觉醒列表长度 */
    private awakenLength: number    = 0;

    /** 觉醒等级 */
    private levelIndex: number      = 0;

    /** 当前选中 */
    private selectItem: DraugItem;

    /*----------------------默认视图接口---------------------------*/
    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
       
    }

    //** 窗口显示 */
    onWindowShow(): void
    {
        this.m_listDrug.setItemRenderer(this.DraugRender, this);
        this.m_listAwaken.setItemRenderer(this.AwakenRender, this);
        this.m_listDrug.on(fgui.Events.CLICK_ITEM, this, this.DraugShow);
        this.m_listAwaken.on(fgui.Events.CLICK_ITEM, this, this.DraugAwaken);
        this.m_btnOneKey.onClick(this, this.DraugAwakenOneKey);
        this.m_btnCollect.onClick(this, this.BagCollect);
        
        Game.net.awakenDraugS2C.on(this.AwakenDraugS2C, this);
        Game.net.putDraugIntoPackS2C.on(this.PutDraugIntoPackS2C, this);

        this.Init()
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_listDrug.itemRenderer.recover();
        this.m_listAwaken.itemRenderer.recover();
        this.m_listDrug.off(fgui.Events.CLICK_ITEM, this, this.DraugShow);
        this.m_listAwaken.off(fgui.Events.CLICK_ITEM, this, this.DraugAwaken);
        this.m_btnOneKey.offClick(this, this.DraugAwakenOneKey);
        this.m_btnCollect.offClick(this, this.BagCollect);


        Game.net.awakenDraugS2C.off(this.AwakenDraugS2C, this);
        Game.net.putDraugIntoPackS2C.off(this.PutDraugIntoPackS2C, this);

        this.Reset();
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 刷新觉醒战魂列表 */
    private DraugRender(index: number, item: DraugItem): void
    {
        item.RenderItem(this.awakenList[index]);
    }

    /** 战魂点击 弹TIPS */
    private DraugShow(item: DraugItem): void
    {
        let data  = item.DataSource;
        // 是否空格
        if (!data) 
        {
            return;
        }

        if (this.selectItem != item) {
            if (this.selectItem) this.selectItem.CloseSwallow();
            
            this.selectItem = item;
            this.selectItem.OpenSwallow(true);
        }
        
        Game.system.draugInfoDialogShow(data, null, EnumDraugDialogType.Awaken);
    }

    /** 刷新觉醒等级列表 */
    private AwakenRender(index: number, item:AwakenButton): void
    {
        item.RenderItem(index);
    }

    /** 觉醒点击 觉醒战魂 */
    private DraugAwaken(item: AwakenButton): void
    {
        if(this.levelIndex != item.DataSouce)
            return;

        if (this.awakenList.length < this.awakenLength && item.IsEnough()) 
        {
            Game.sender.draug.DraugAwaken(EnumDraugAwakenType.Once);
        }
        else
        {
            let text = this.awakenList.length < this.awakenLength ? "铜钱不足" : "觉醒栏已满";
            Game.system.toastText(text);
        }
    }

    /** 一键觉醒 */
    private DraugAwakenOneKey()
    {
        let item = <AwakenButton>this.m_listAwaken.getChildAt(this.levelIndex);
        if (this.awakenList.length < this.awakenLength && item.IsEnough())  
        {
            Game.sender.draug.DraugAwaken(EnumDraugAwakenType.OneKey);
        }
        else
        {
            let text = this.awakenList.length < this.awakenLength ? "铜钱不足" : "觉醒栏已满";
            Game.system.toastText(text);
        }
    }

    /** 放入背包 */
    private BagCollect()
    {
        if (this.awakenList.length > 0) 
        {
            Game.sender.draug.DraugPutIntoPack();
        }
        else
        {
            Game.system.toastText("放置区无觉醒战魂");
        }
    }


    /*private----------------------EVENT事件操作-----------------------*/
    /** 觉醒战魂返回 */
    private AwakenDraugS2C()
    {
        let model = Game.moduleModel.draug;
        this.UpdateView(model.awakenLevel, model.awakenList);
    }


    /** 放进背包成功 */
    private PutDraugIntoPackS2C(): void
    {
        this.awakenList = [];
        this.m_listDrug.numItems = 20;

        (<DraugWindowUI>this.parent).RefreshRed();
    }


    /*private---------------------内部方法---------------------------*/
    /** 创建 */
    private Init()
    {
        this.awakenLength = Global.draugTempAreaLength;
        this.m_listAwaken.numItems = 5;
    }

    /** 重置 */
    private Reset()
    {
        this.m_listDrug.numItems = 0;
        this.m_listDrug.itemPool.clear();
        this.awakenList = [];
        this.levelIndex = 0;
        this.selectItem = null;
    }

    /** 刷新界面 */
    private UpdateView(awakenlevel: number, awakenlist: DraugData[])
    {
        let levelIndex = awakenlevel - 1;
        // 觉醒等级
        if (levelIndex != this.levelIndex) 
        {
            let oldlevel = <AwakenButton>this.m_listAwaken.getChildAt(this.levelIndex);
            oldlevel.SetState(1); 

            let newlevel =  <AwakenButton>this.m_listAwaken.getChildAt(levelIndex);
            newlevel.SetState(0);

            this.levelIndex = levelIndex;
        }

        this.awakenList = awakenlist;
        this.m_listDrug.numItems = 20;
    }
    
    /*public----------------------外部接口---------------------------*/
    /** 开启界面 */
    public Open(): void
    {
        let model = Game.moduleModel.draug;
        this.UpdateView(model.awakenLevel, model.awakenList);
    }

    /** 关闭界面 */
    public Close(): void
    {
        this.Reset();
    }
}