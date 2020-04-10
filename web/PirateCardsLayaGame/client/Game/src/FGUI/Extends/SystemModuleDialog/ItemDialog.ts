/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemDialogStruct from "../../Generates/SystemModuleDialog/ItemDialogStruct";
import ItemItem from "./ItemItem";
import ItemData from "../../../GameModule/DataStructs/ItemData";

export default class ItemDialog extends ItemDialogStruct
{
    DataSource:ItemData[];

    /*----------------------默认视图接口---------------------------*/
    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        // this.m_listItem.setVirtual();
    }

    //** 窗口显示 */
    onWindowShow(): void
    {
        this.m_listItem.setItemRenderer(this.ItemRender, this);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_listItem.itemRenderer.clear();

        this.Reset();
    }

     /*private----------------------UI事件操作---------------------------*/
    /** 刷新副属性列表 */
    private ItemRender(index: number, item: ItemItem)
    {
        item.RenderItem(this.DataSource[index]);
    }

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.m_listItem.numItems = 0;
        this.m_listItem.itemPool.clear();

        this.DataSource = null;
    }

    /** 刷新界面 */
    private UpdateView()
    {
        let data = this.DataSource;

        this.m_listItem.numItems = data.length;
        // this.m_listItem.refreshVirtualList();
    }

    /*public----------------------外部接口---------------------------*/
    /** 打开界面 */
    open(itemdatas:ItemData[]): void
    {
        this.DataSource = itemdatas;

        this.UpdateView();
    }
}