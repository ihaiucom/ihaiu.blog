/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DraugTipsDialogStruct from "../../Generates/ModuleDraug/DraugTipsDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import DraugAwakenConfig from "../../../Config/ConfigExtends/DraugAwakenConfig";
import AwakenProbabilityItem from "./AwakenProbabilityItem";
import DraugProbabilityItem from "./DraugProbabilityItem";
import Game from "../../../Game";

export default class DraugTipsDialog extends DraugTipsDialogStruct
{
    private dialogCtrl: DialogCtrl;

    private configList: DraugAwakenConfig[] = [];

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
        this.m_listAwakenProbability.setItemRenderer(this.AwakenProbabilityRender, this);
        this.m_listDraugProbability.setItemRenderer(this.DraugProbabilityRender, this);
        this.m_btnOk.onClick(this, this.DialogClose);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_listAwakenProbability.itemRenderer.clear();
        this.m_listDraugProbability.itemRenderer.clear();
        this.m_btnOk.offClick(this, this.DialogClose);

        this.Reset()
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 刷新战魂觉醒概率 */
    private AwakenProbabilityRender(index: number, item: AwakenProbabilityItem)
    {
        item.RenderItem(this.configList[index], (index == this.configList.length - 1));
    }

    /** 刷新战魂获得概率 */
    private DraugProbabilityRender(index: number, item: DraugProbabilityItem)
    {
        item.RenderItem(this.configList[index]);
    }

    /*private----------------------EVENT事件操作-----------------------*/
    /** 关闭弹框 */
    private DialogClose(): void
    {
        this.close();
    }

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
    }

    /** 打开觉醒tips */
    private OpenAwakenTips()
    {
        let configlist = Game.config.draugAwaken.getConfigList();
        this.configList = configlist;
        this.m_listAwakenProbability.numItems = configlist.length;
        this.m_listDraugProbability.numItems  = configlist.length;
    }

    
    /*public----------------------外部接口---------------------------*/
    /** 打开弹框 */
    open(type:number): void 
    {
        this.dialogCtrl.open();
        switch (type) 
        {
            case 1:
                this.OpenAwakenTips();
                break;
        
            default:
                break;
        }
    }

    /** 关闭弹框 */
    close(): void 
    {
        this.dialogCtrl.close();
    }
}