/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuyItemStruct from "../../Generates/ModulePower/BuyItemStruct";
import PowerConfig from "../../../Config/ConfigExtends/PowerConfig";
import Game from "../../../Game";
import ItemData from "../../../GameModule/DataStructs/ItemData";

export default class BuyItem extends BuyItemStruct
{
    DataSource:PowerConfig;

    private times:number = 0;

    /*----------------------默认视图接口---------------------------*/
    /** 窗口初始化完毕 */
    onWindowInited(): void
    {

    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_btnBuy.onClick(this, this.BuyFatigue);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_btnBuy.offClick(this, this.BuyFatigue);
        
        this.Reset();
    }


    /*private----------------------UI事件操作---------------------------*/
    /** 购买体力 */
    private BuyFatigue()
    {
        if (this.m_Enough.selectedIndex == 0)
        {
            let datasouce = this.DataSource;
            Game.sender.power.BuyFatigue(datasouce.id);
        }
        else
        {
            let text = this.times == this.DataSource.useCount ? "购买次数不足！" : "物品数量不足！"
            Game.system.toastText(text);
        }
    }


    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.DataSource = null;
        this.times      = 0;
        this.m_Enough.selectedIndex = 0;
    }

    /** 设置购买信息 */
    private SetBuyInfo(index:number)
    {   
        let datasouce = this.DataSource;

        // 消耗数量
        let costitem= datasouce.costID[index];
        let costid  = costitem.ItemId;
        let costnum = costitem.ItemNum; 
        this.m_labNum.text = `${costnum}`;

        // 次数、数量是否满足
        let itemnum = Game.moduleModel.bag.getItemNum(costid);
        let enough  = (itemnum >= costnum) && (index < datasouce.useCount - 1);
        this.m_Enough.selectedIndex = enough ? 0 : 1;
        this.m_btnBuy.m_IsGray.selectedIndex = enough ? 0 : 1;

        let addpower = datasouce.addPower[index];
        // 物品item
        this.m_item.renderPowerItem(4, `体力x${addpower}`, datasouce.icon);
    }


    /*public----------------------外部接口---------------------------*/
    /** 渲染Item */
    public RenderItem(datasouce:PowerConfig, times?:number)
    {
        this.DataSource = datasouce;

        // 购买次数
        times = times ? times : Game.moduleModel.power.GetBuyTimes(datasouce.id);
        this.times = times
        
        // 购买索引
        let index = Math.max(0, times - 1);

        // 刷新购买索引
        this.SetBuyInfo(index);
    }


}