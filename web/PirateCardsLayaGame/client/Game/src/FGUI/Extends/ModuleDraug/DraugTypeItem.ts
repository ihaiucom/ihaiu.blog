/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DraugTypeItemStruct from "../../Generates/ModuleDraug/DraugTypeItemStruct";
import DraugTypeData from "../../../GameModule/DataStructs/DraugTypeData";
import Res from "../../../Config/Keys/Res";

export default class DraugTypeItem extends DraugTypeItemStruct
{
    /** 战魂类型数据 */
    DataSource:DraugTypeData;

    /*----------------------默认视图接口---------------------------*/
    /** 初始化视图 */
    protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
    }

    /** 销毁视图 */
    dispose()
    {
        this.Reset();
        super.dispose();
    }

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.DataSource = null;
    }

    /** 设置类型信息 */
    private SetDraugTypeInfo()
    {
        let datasouce = this.DataSource;
        this.m_labName.text = datasouce.draugName;
        this.m_labSuit.text = datasouce.suitType;
        this.m_labNum.text  = String(datasouce.draugNum);
        this.m_imgBg.grayed = !datasouce.draugNum;
        this.m_imgDraug.url = Res.getDraugIcon(datasouce.draugType);
        this.m_imgDraug.grayed = !datasouce.draugNum;
        this.m_labSuit.grayed  = !datasouce.draugNum;
    }

    /*public----------------------外部接口---------------------------*/
    /** 是否拥有类型战魂 */
    public IsHad()
    {
        return this.DataSource.isHad;
    }

    /** 渲染Item */
    public RenderItem(datasouce:DraugTypeData)
    {
        this.DataSource = datasouce;

        this.SetDraugTypeInfo();
    }
}