import MenuLayer from "../../GameFrame/Menu/MenuLayer";
import Game from "../../Game";
import { FGUIPool } from "../../GameWar/Logic/Utils/FGUIPool";

export class GuideHelper
{
    static helperPoint : Laya.Point = new Laya.Point();
    /**
     * 改变obj的父节点和坐标
     * @param obj 需改变的物体
     * @param pos 原来的坐标
     * @param targetParent 父节点
     */
    static ChangeObjParent(obj : fgui.GObject, targetParent : fgui.GComponent)
    {
        let globalPos = obj.parent.localToGlobal(obj.x, obj.y);
        obj.removeFromParent();
        targetParent.addChild(obj);
        let newPos = targetParent.globalToLocal(globalPos.x, globalPos.y);
        obj.x = newPos.x;
        obj.y = newPos.y;
    }

    /**
     * 获取这个节点的globalPos
     * @param obj UI实体
     * @param listNum 如果有在list里面，作为list里的第几个child传入
     */
    static GetObjGlobalPosInLeftTopPovit(obj : fgui.GObject, listNum : number = -1) : Laya.Point
    {
        this.helperPoint.x = obj.x;
        this.helperPoint.y = obj.y;
        if(listNum != -1)
        {
            let parent = obj.parent as fgui.GList;
            let col = 0;
            let row = 0;
            //单列竖排
            if(parent.layout == 0)
            {
                col = 0;
                row = listNum;
            }
            else if(parent.layout == 1)
            {
                col = listNum;
                row = 0;
            }
            else
            {
                col = parent.columnCount == 0 ? listNum : listNum % parent.columnCount;
                row = Math.floor(parent.columnCount == 0 ? 0 : listNum / parent.columnCount);
            }

            
            let x = obj.width * col + parent.columnGap * col;
            let y = obj.height * row + parent.lineGap * row;

            this.helperPoint.x = x;
            
            this.helperPoint.y = y;
            if(parent.pivotAsAnchor)
            {
                this.helperPoint.x -= parent.width * parent.pivotX;
                this.helperPoint.y -= parent.height * parent.pivotY
            }
            
            // console.log(this.helperPoint.x, this.helperPoint.y, obj.width, parent.columnGap, listNum);
        }

        let globalPos = obj.parent.localToGlobal(this.helperPoint.x, this.helperPoint.y);
        if(obj.pivotAsAnchor)
        {
            globalPos.x -= obj.pivotX * obj.width;
            globalPos.y -= obj.pivotY * obj.height;
            
        }
        // console.log(globalPos.x, globalPos.y);

        return globalPos;
    }
    /**
     * 该接口只能给list里的item使用,这个方法会吧当前的item直接拿出来，放进menuLayer.guide节点
     * 然后list中会重新创建一个和原来一样的节点
     * @param index list中的位置
     * @param list list节点引用
     * @param func onclickFun使用list的onClickItem的方法
     * @param context 域 
     */
    static FguiListChangeByIndex(index : number, list : fgui.GList, func?: Function, context? : any)
    {
        if(!list)
        {
            return ;
        }
        
        list['_eventLocked'] = true;
        let listLen = list.numItems;
        let item = list.getChildAt(index);
        let pos = this.GetObjGlobalPosInLeftTopPovit(item, index);
        pos = list.globalToLocal(pos.x, pos.y);
        item.x = pos.x;
        item.y = pos.y;
        if(item.pivotAsAnchor)
        {
            item.x += item.pivotX * item.width;
            item.y += item.pivotY * item.height;    
        }
        this.ChangeObjParent(item, Game.system.guideMgr.otherNode);
        let tempItem = fgui.UIPackage.createObjectFromURL(list.defaultItem);
        tempItem.alpha = 0;
        list.addChildAt(tempItem, index);
        // list.numItems = listLen;
        // let nowItem = list.getChildAt(index);
        // if(!nowItem)
        // {
        //     return;
        // }
        if(func && context)
        {
            item.onClick(this, this.DestorySelf, [item, func, list, index, context])
            item.onClick(context, func, [item]);
        }
    }

    static DestorySelf(item : fgui.GObject, func : Function, list : fgui.GList, index : number, context : any)
    {

        list['_eventLocked'] = false;
        
        list.removeChildAt(index);

        list.addChildAt(item, index);
        this.ListItemPosCal(item, list, index);

        // item.offClick(item, func);
        Laya.timer.once(50, item, item.offClick, [context, func]);
        item.offClick(this, this.DestorySelf);
    }

    static ListItemPosCal(item : fgui.GObject, list : fgui.GList, index : number)
    {
        let col = 0;
        let row = 0;
        let parent = list;
        //单列竖排
        if(parent.layout == 0)
        {
            col = 0;
            row = index;
        }
        else if(parent.layout == 1)
        {
            col = index;
            row = 0;
        }
        else
        {
            col = parent.columnCount == 0 ? index : index % parent.columnCount;
            row = Math.floor(parent.columnCount == 0 ? 0 : index / parent.columnCount);
        }
        let x = item.width * col + list.columnGap * col;
        let y = item.height * row + list.lineGap * row;
        item.x = x;
        item.y = y;
    }

}