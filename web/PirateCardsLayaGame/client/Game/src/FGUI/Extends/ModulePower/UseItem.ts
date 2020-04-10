/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import UseItemStruct from "../../Generates/ModulePower/UseItemStruct";
import PowerConfig from "../../../Config/ConfigExtends/PowerConfig";
import Game from "../../../Game";
import ItemData from "../../../GameModule/DataStructs/ItemData";

export default class UseItem extends UseItemStruct
{
    DataSource:PowerConfig;


    /*----------------------默认视图接口---------------------------*/
    /** 初始化视图 */
    protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        this.m_btnUse.onClick(this, this.UseItem);
    }

    /** 销毁视图 */
    public dispose()
    {
        this.m_btnUse.offClick(this, this.UseItem);
        this.Reset();
        super.dispose();
    }


    /*private----------------------UI事件操作---------------------------*/
    /** 使用道具 */
    private UseItem()
    {
        if (this.m_Enough.selectedIndex == 0)
        {
            let datasouce = this.DataSource;
            Game.sender.power.BuyFatigue(datasouce.id);
        }
        else
        {
            Game.system.toastText("物品数量不足！");
        }
    }

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.DataSource = null;
    }

    /** 设置使用信息 */
    private SetUseInfo()
    {
        let datasouce = this.DataSource;

        // 消耗数量
        let costitem= datasouce.costID[0];
        let costid  = costitem.ItemId;
        let costnum = costitem.ItemNum; 
        
        // 数量是否满足
        let itemnum = Game.moduleModel.bag.getItemNum(costid);
        let enough = (itemnum >= costnum);
        this.m_Enough.selectedIndex = enough ? 0 : 1;
        this.m_btnUse.m_IsGray.selectedIndex = enough ? 0 : 1;

        // 物品item
        let itemdata = ItemData.Create(costid, itemnum);
        this.m_item.renderItem(itemdata);
    }

    /*public----------------------外部接口---------------------------*/
    /** 渲染Item */
    public RenderItem(datasouce:PowerConfig)
    {
        this.DataSource = datasouce;

        // 刷新使用情况
        this.SetUseInfo();
    }
}