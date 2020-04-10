/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SystemObtainDialogStruct from "../../Generates/SystemModuleDialog/SystemObtainDialogStruct";
import ItemData from '../../../GameModule/DataStructs/ItemData';
import { EquipData } from '../../../GameModule/DataStructs/EquipData';
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import ObtainItem from "./ObtainItem";
import Game from "../../../Game";

export default class SystemObtainDialog extends SystemObtainDialogStruct
{
    private dialogCtrl: DialogCtrl;

    private DataSource: number;

    private obtainList: number[] = [];

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
        this.m_listObtain.setItemRenderer(this.RenderListItem, this);
        this.m_btnClose.onClick(this, this.DialogClose);
        this.m_btnOk.onClick(this, this.DialogClose);
        Game.event.add("DIALOG_CLOSE", this.DialogClose, this);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_listObtain.itemRenderer.recover();
        this.m_btnClose.offClick(this, this.DialogClose);
        this.m_btnOk.offClick(this, this.DialogClose);
        Game.event.remove("DIALOG_CLOSE", this.DialogClose, this);

        this.Reset();
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 关闭弹框 */
    private DialogClose(): void
    {
        this.close();
    }

    private RenderListItem(index: number,item: ObtainItem)
    {
        item.RenderItem(this.obtainList[index], index)
    }

   /*private----------------------内部接口---------------------------*/
   /** 重置 */
    private Reset()
    {
        this.DataSource = null;

        this.m_labName.text   = "";
        this.m_labNumber.text = "数量：0";

        this.obtainList = [];
        this.m_listObtain.numItems = 0;
        this.m_listObtain.itemPool.clear();
    }

    /** 刷新界面 */
    private UpdateView()
    {
        let data = this.DataSource;

        let item = ItemData.Create(data, 1);
        this.m_item.renderItem(item);

        let config = Game.config.item.getConfig(data);
        this.obtainList = config.getWay;
        this.m_listObtain.numItems = this.obtainList.length;

        this.m_labName.text   = config.name;
        this.m_labNumber.text = "数量：" + Game.moduleModel.bag.getItemNum(data);
    }

   /*publice----------------------外部接口---------------------------*/
    public showObtainWaysWithId(id: number)
    {
        this.dialogCtrl.open();

        this.DataSource = id;

        this.UpdateView();
    }

    /** 关闭弹框 */
    public close(): void 
    {
        this.dialogCtrl.close();
    }

    
}