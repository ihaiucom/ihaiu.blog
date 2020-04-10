/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PartButtonStruct from "../../Generates/ModuleDraug/PartButtonStruct";
import DraugData from "../../../GameModule/DataStructs/DraugData";
import Game from "../../../Game";
import { EnumDraugDialogType } from "../../../GameModule/DataEnums/EnumDraugDialogType";
import Res from "../../../Config/Keys/Res";

export default class PartButton extends PartButtonStruct
{
    /** 战魂数据 */
    DataSouce:DraugData;

    private partIndex:number = 0;

    /*----------------------默认视图接口---------------------------*/
    /** 初始化视图 */
    protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        this.onClick(this, this.DialogShow);
    }

    /** 销毁视图 */
    public dispose()
    {
        this.offClick(this, this.DialogShow);
        this.Reset();
        super.dispose();
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 打开弹框 */
    private DialogShow()
    {
        let datasouce = this.DataSouce;
        if (datasouce) 
        {
            Game.system.draugInfoDialogShow(null, datasouce, EnumDraugDialogType.Weared); 
        }
        else
        {
            let index = this.partIndex
            Game.event.dispatch("FILETER_DRAUG", index);
        }
    }

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.DataSouce = null;
        this.partIndex = 0;
        this.m_imgItem.url = "";
        this.m_imgPart.visible = false;
        this.m_Quality.selectedIndex = 0;
        // this.m_draug.visible = false;
    }

    /** 设置战魂信息 */
    private SetInfo()
    {
        let datasouce = this.DataSouce;
        this.m_imgItem.url = Res.getDraugIcon(datasouce.typeName);
        this.m_imgPart.visible = true;
        this.m_Quality.selectedIndex = datasouce.quality - 1;
        // this.m_labName.text = datasouce.name;
        // this.m_draug.visible = true;
        // this.m_draug.RenderItem(datasouce);
    }

    /*public----------------------外部接口---------------------------*/
    /** 渲染Item */
    public RenderItem(datasouce: DraugData)
    {
        this.DataSouce = datasouce;

        this.SetInfo();
    }

    /** 渲染重置 */
    public ResetRender()
    {
        this.DataSouce = null;
        this.m_imgItem.url = "";
        this.m_imgPart.visible = false;
        this.m_Quality.selectedIndex = 0;
    }

    /** 设置位置 */
    public SetPartIndex(index:number)
    {
        this.partIndex = index;
    }
}