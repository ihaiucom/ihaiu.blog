import ItemData from '../../GameModule/DataStructs/ItemData';
import ItemTips from '../Extends/CommonGame/ItemTips';
import Game from '../../Game';
import ItemTipsMask from '../Extends/CommonGame/ItemTipsMask';
import ItemEquipTips from '../Extends/CommonGame/ItemEquipTips';
import { EquipData } from '../../GameModule/DataStructs/EquipData';
import ItemType = proto.ItemType;
export default class ItemTipsCtrl
{

    public static ShowWithItem(item: Laya.Sprite, data?: ItemData, showBackground: boolean = false)
    {
        if(data.itemType == proto.ItemType.equipment)
        {
            let d = EquipData.CreateByID(data.id);
            Game.system.equipTipShow(d,false);
            return;
        }
        if(showBackground)
            this.addBackgroundMask();
        this.addTipsUI(data);
        let localPt = Laya.Point.create();
        localPt.setTo(item.x, item.y);
        let parent = <Laya.Sprite>item.parent;
        let pt = parent.localToGlobal(localPt);
        let itemRight = pt.x + item.width;
        let itemBottom = pt.y + item.height;
        
        this.show(pt.x,itemRight,pt.y,itemBottom);
    }

    public static Hide()
    {
        Laya.stage.removeChild(this.tipsUI.displayObject);
        Laya.stage.removeChild(this.equitTipsUI.displayObject);
        Laya.stage.removeChild(this.backgroundMask.displayObject);
        if(this.backgroundMask && !Laya.stage.contains(this.backgroundMask.displayObject))
            this.backgroundMask.off(Laya.Event.CLICK,this,this.onClickStage);
    }

    /**                  内部方法变量                             */
    private static get width(): number
    {
        return this.tipsUI.width;
    }
    private static get height(): number
    {
        return this.tipsUI.height;
    }

    private static _backgroundMask: ItemTipsMask;
    private static get backgroundMask(): ItemTipsMask
    {
        !this._backgroundMask && (this._backgroundMask = ItemTipsMask.createInstance());
        return this._backgroundMask;
    }
    
    private static _ItemTipsUI: ItemTips;
    private static get tipsUI(): ItemTips
    {
        !this._ItemTipsUI && (this._ItemTipsUI = ItemTips.createInstance());
        return this._ItemTipsUI;
    }

    private static _equitTipsUI: ItemEquipTips;
    private static get equitTipsUI(): ItemEquipTips
    {
        !this._equitTipsUI && (this._equitTipsUI = ItemEquipTips.createInstance());
        return this._equitTipsUI;
    }

    private static show(itemLeft: number, itemRight: number, itemTop: number, itemBottom: number)
    {
        let stageWidth = Laya.stage.width;
        let stageHeight = Laya.stage.height;
        this.tipsUI.x = stageWidth - itemRight < this.width?itemLeft - this.width:itemRight;
        this.tipsUI.y = stageHeight - itemBottom < this.height ? itemBottom-this.height: itemTop;
    }
    

    private static addBackgroundMask()
    {
        if(this.backgroundMask && !Laya.stage.contains(this.backgroundMask.displayObject))
            Laya.stage.addChild(this.backgroundMask.displayObject);
        this.backgroundMask.on(Laya.Event.CLICK,this,this.onClickStage);
    }

    private static onClickStage()
    {
        this.Hide();
    }

    private static addTipsUI(data?: ItemData)
    {
        if(data.itemType == ItemType.equipment)
        {
            if(!Laya.stage.contains(this.equitTipsUI.displayObject))
                Laya.stage.addChild(this.equitTipsUI.displayObject);
            return;
        }
        if(!Laya.stage.contains(this.tipsUI.displayObject))
            Laya.stage.addChild(this.tipsUI.displayObject);
        this.tipsUI.updateView(data);
    }

    
}