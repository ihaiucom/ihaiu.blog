/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SystemItemDialogStruct from "../../Generates/SystemModuleDialog/SystemItemDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import ItemItem from "./ItemItem";
import ItemCommon from "../CommonGame/ItemCommon";
import IGameItem = proto.IGameItem;

export default class SystemItemDialog extends SystemItemDialogStruct
{
    private dialogCtrl: DialogCtrl;

    DataSource:ItemData[] = [];

    /*----------------------默认视图接口---------------------------*/
    /** 视图实例化完成 */
    protected constructFromXML(xml: any): void  
    {
        super.constructFromXML(xml);

        this.dialogCtrl = new DialogCtrl().init(this);
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_btnOk.onClick(this, this.DialogClose);
        this.m_listItem.setItemRenderer(this.ItemRender, this);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_btnOk.offClick(this, this.DialogClose);
        this.m_listItem.itemRenderer.clear();
        this.Reset()
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 关闭弹框 */
    private DialogClose(): void
    {
        this.close();
    }

    /** 刷新副属性列表 */
    private ItemRender(index: number, item: ItemCommon)
    {
        item.renderItem(this.DataSource[index]);
    }

    /*private----------------------EVENT事件操作-----------------------*/
    


    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.m_listItem.numItems = 0;
        this.m_listItem.itemPool.clear();

        this.DataSource = [];
    }

    /** 刷新界面 */
    private UpdateView()
    {
        let data = this.DataSource;

        this.m_listItem.numItems = data.length;
        // this.m_listItem.refreshVirtualList();
    }

    /*public----------------------外部接口---------------------------*/
    /** 打开弹框 */
    open(itemdatas:ItemData[] | IGameItem[])
    {
        this.dialogCtrl.open();

        for (let i = 0, len = itemdatas.length; i < len; i++) 
        {
            let data = itemdatas[i];
            if (data instanceof ItemData) 
            {
                this.DataSource.push(data);
            } 
            else 
            {
                this.DataSource.push(ItemData.CreateItem(<IGameItem>data));
            }
        }

        this.UpdateView();
    }

    /** 关闭弹框 */
    close(): void 
    {
        this.dialogCtrl.close();
    }
}