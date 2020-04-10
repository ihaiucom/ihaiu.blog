/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AwakenButtonStruct from "../../Generates/ModuleDraug/AwakenButtonStruct";
import DraugAwakenConfig from "../../../Config/ConfigExtends/DraugAwakenConfig";
import Game from "../../../Game";

export default class AwakenButton extends AwakenButtonStruct
{
    /** 按钮索引 */
    DataSouce:number;

    /** 觉醒配置 */
    private config:DraugAwakenConfig;

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
        this.config    = null;
    }

    /*public----------------------外部接口---------------------------*/
    /** 设置状态 0 正常 1 选中 */
    public SetState(state:number)
    {
        this.m_State.selectedIndex = state;
    }

    /** 判断是否足够 */
    public IsEnough()
    {
        let config   = this.config;
        let costitem = config.costCoin[0];
        let costid   = costitem.ItemId;

        return costitem.ItemNum <= Game.moduleModel.bag.getItemNum(costid)
    }

    /** 渲染Item */
    public RenderItem(datasouce: number)
    {
        this.DataSouce = datasouce;
        this.m_index.selectedIndex = datasouce;

        let config  = Game.config.draugAwaken.getConfig(datasouce + 1);
        this.m_title.text = String(config.costCoin[0].ItemNum);
        this.config = config;
    }
}