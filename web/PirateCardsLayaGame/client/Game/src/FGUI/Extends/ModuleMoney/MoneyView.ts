/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MoneyViewStruct from "../../Generates/ModuleMoney/MoneyViewStruct";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import WayItem from "./WayItem";

export default class MoneyView extends MoneyViewStruct
{
    private DataSource:number[] = [];

    /*----------------------默认视图接口---------------------------*/
    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        this.m_listWay.setVirtual();
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_listWay.setItemRenderer(this.WayRender, this);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_listWay.itemRenderer.recover();

        this.Reset();
    }


    /*private----------------------UI事件操作---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.m_listWay.numItems = 0;
        this.m_listWay.itemPool.clear();
        this.DataSource = [];
    }

    /** 刷新获取路径 */
    private WayRender(index: number, item: WayItem)
    {
        item.RenderItem(this.DataSource[index]);
    }

    /*public----------------------外部接口---------------------------*/
    /** 打开界面 */
    public Open(itemId:number)
    {
        // TODO 获取货币信息 渲染货币
        //......
        this.m_itemMoney.RenderItem(itemId);

        // TODO 获取所有路径配置 渲染路径
        //......
        let config = Game.config.item.getConfig(itemId);
        this.DataSource = config.getWay;
        this.m_listWay.numItems = config.getWay.length;
    }
}