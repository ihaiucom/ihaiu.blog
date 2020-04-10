/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PartItemButtonStruct from "../../Generates/ModuleDraug/PartItemButtonStruct";

export default class PartItemButton extends PartItemButtonStruct
{
    /** 按钮索引 */
    DataSouce:number;

    /*----------------------默认视图接口---------------------------*/
    /** 初始化视图 */
    protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
    }

    /** 销毁视图 */
    public dispose()
    {
        this.Reset();
        super.dispose();
    }

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.DataSouce = null;
    }

    /*public----------------------外部接口---------------------------*/
    /** 渲染Item */
    public RenderItem(datasouce: number)
    {
        this.DataSouce = datasouce;
    }
}