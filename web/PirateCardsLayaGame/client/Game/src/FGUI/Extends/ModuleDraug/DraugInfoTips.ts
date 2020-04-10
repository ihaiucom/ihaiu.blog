/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DraugInfoTipsStruct from "../../Generates/ModuleDraug/DraugInfoTipsStruct";
import DraugData from "../../../GameModule/DataStructs/DraugData";
import Game from "../../../Game";
import LockDraugS2C = proto.LockDraugS2C;
import PropItem from "./PropItem";
import Prop from "../../../GameFrame/Props/Prop";
import SuitItem from "./SuitItem";
import { PropId } from "../../../GameFrame/Props/PropId";
import { PropType } from "../../../GameFrame/Props/PropType";
import IntMath from "../../../GameWar/CoreLib/IntMath/IntMath";

export default class DraugInfoTips extends DraugInfoTipsStruct
{
    private DataSource:DraugData;

    /** 副属性列表 */
    private vicePropList:Prop[] = [];

    /** 套装属性列表 */
    private suitPropList:Prop[] = [];

    /** 已开启属性列表 */
    private suitOpenList:number[] = [];

    /*----------------------默认视图接口---------------------------*/
    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        
    }

    //** 窗口显示 */
    onWindowShow(): void
    {
        this.m_listProp.setItemRenderer(this.VicePropRender, this);
        this.m_listSuit.setItemRenderer(this.SuitPropRender, this);
        this.m_btnLock.onClick(this, this.DraugLock);
        this.m_btnUnWear.onClick(this, this.DraugUnWear);
        this.m_btnAwaken.onClick(this, this.OpenAwaken);
        this.m_btnSwallow.onClick(this, this.OpenSwallow);
        this.m_btnDecompose.onClick(this, this.OpenDecompose);
        this.m_btnWear.onClick(this, this.DraugWear);
        this.m_btnChange.onClick(this, this.DraugChange);
        if (this.m_Type.selectedIndex == 2) 
        {
            Game.net.lockDraugS2C.on(this.LockDraugS2C, this);
        }
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_listProp.itemRenderer.clear();
        this.m_listSuit.itemRenderer.clear();
        this.m_btnLock.offClick(this, this.DraugLock);
        this.m_btnUnWear.offClick(this, this.DraugUnWear);
        this.m_btnAwaken.offClick(this, this.OpenAwaken);
        this.m_btnSwallow.offClick(this, this.OpenSwallow);
        this.m_btnDecompose.offClick(this, this.OpenDecompose);
        this.m_btnWear.offClick(this, this.DraugWear);
        this.m_btnChange.offClick(this, this.DraugChange);
        if (this.m_Type.selectedIndex == 2) 
        {
            Game.net.lockDraugS2C.off(this.LockDraugS2C, this);
        }

        this.Reset();
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 刷新副属性列表 */
    private VicePropRender(index: number, item: PropItem)
    {
        item.RenderItem(this.vicePropList[index]);
    }

    /** 刷新套装列表 */
    private SuitPropRender(index: number, item: SuitItem)
    {
        item.RenderItem(this.suitPropList[index], Boolean(this.suitOpenList[index]), index);
    }

    /** 锁定战魂 */
    private DraugLock()
    {
        let data = this.DataSource;
        Game.sender.draug.DraugLock(data.uid);
    }

    /** 卸掉战魂 */
    private DraugUnWear()
    {
        let data = this.DataSource;
        Game.sender.draug.DraugUnWear(data.heroId, data.pos);
        this.DialogClose();
    }

    /** 打开觉醒 */
    private OpenAwaken(): void
    {
        Game.event.dispatch("OPEN_AWAKEN", 0);
        this.DialogClose();
    }

    /** 打开吞噬 */
    private OpenSwallow(): void
    {
        Game.event.dispatch("OPEN_SWALLOW", this.DataSource);
        this.DialogClose();
    }

    /** 打开分解 */
    private OpenDecompose(): void
    {
        if (this.DataSource.isLock) 
        {
            Game.system.toastText("无法分解锁定战魂！")
        } 
        else 
        {
            Game.event.dispatch("OPEN_DECOMPOSE", this.DataSource);
            this.DialogClose();
        }
    }

    /** 装备战魂 */
    private DraugWear(): void
    {
        Game.event.dispatch("WEAR_DRAUG", this.DataSource);
        this.DialogClose();
    }

    /** 替换战魂 */
    private DraugChange(): void
    {
        Game.event.dispatch("CHANGE_DRAUG", this.DataSource.pos);
        this.DialogClose();
    }
    /*private----------------------EVENT事件操作-----------------------*/
    /** 更新锁定状态 */
    private LockDraugS2C(msg: LockDraugS2C): void
    {
        let data = this.DataSource;


        if(data.uid == msg.draugId)
        {
            this.m_selectDraug.m_imgLock.visible = msg.isLock;
        }
    }


    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.m_listProp.numItems = 0;
        this.m_listProp.itemPool.clear();
        this.m_listSuit.numItems = 0;
        this.m_listSuit.itemPool.clear();
        this.DataSource = null;
        this.vicePropList = [];
        this.suitPropList = []; 
        this.suitOpenList = [];
    }

    /** 关闭弹框 */
    private DialogClose()
    {
        Game.event.dispatch("CLOSE_DIALOG");
    }

    /** 刷新主属性 */
    private UpdateMain(data:Prop)
    {
        this.m_mainProp.RenderItem(data);
    }

    /** 刷新副属性 */
    private UpdateVice(propList:Prop[])
    {
        this.vicePropList = propList;
        this.m_listProp.numItems = propList.length;    
    }

    /** 刷新套装属性 */
    private UpdateSuit(type:number)
    {
        let suitconfig = Game.config.draugSuit.getConfig(type);
        let suit2 = Game.config.propValue.getConfig(suitconfig.Suit2);
        let name2 = suit2.PropName.split("Per");
        let prop2 = Prop.Create(PropId[name2[0]], suit2.PropValue, name2[1] == "" ? PropType.Per : PropType.Base);

        let suit4 = Game.config.propValue.getConfig(suitconfig.Suit4);
        let name4 = suit4.PropName.split("Per");
        let prop4 = Prop.Create(PropId[name4[0]], suit4.PropValue, name4[1] == "" ? PropType.Per : PropType.Base);

        let proplist = [prop2, prop4];
        this.suitPropList = proplist;
        this.m_listSuit.numItems = proplist.length;
    }

    /** 刷新界面 */
    private UpdateView()
    {
        let data = this.DataSource;

        this.m_selectDraug.RenderItem(data);
        this.m_labName.text  = data.name;
        let herodata = Game.moduleModel.hero.GetOwnerData(data.heroId);
        this.m_labOwner.text = herodata ? `【${herodata.name}】` : "【未装配】";
        this.m_labLv.text  = `${data.level}级`;
        this.m_labExp.text = `携带经验：${data.nowExp}`;
        this.m_progressExp.max   = data.nextExp;
        this.m_progressExp.value = data.exp;
        this.m_btnLock.selected  = data.isLock;
        this.m_MaxLv.selectedIndex = (data.level == data.maxLv) ? 0 : 1;

        if (data.mainProp) 
        {
            this.UpdateMain(data.mainProp);
        }
        if (data.propList) 
        {
            this.UpdateVice(data.propList);   
        }

        this.suitOpenList = data.suitData;
        this.UpdateSuit(data.typeName);
    }

    
    /*public----------------------外部接口---------------------------*/
    /** 打开界面 */
    open(data:DraugData): void
    {
        this.DataSource = data;

        this.UpdateView();
    }
}