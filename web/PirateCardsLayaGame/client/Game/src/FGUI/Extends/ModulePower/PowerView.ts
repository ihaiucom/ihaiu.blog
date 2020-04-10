/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PowerViewStruct from "../../Generates/ModulePower/PowerViewStruct";
import UseItem from "./UseItem";
import PowerConfig from "../../../Config/ConfigExtends/PowerConfig";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import GamerNotifyFatigueS2C = proto.GamerNotifyFatigueS2C;

export default class PowerView extends PowerViewStruct
{
    private buyConfig:PowerConfig;

    private useConfig:PowerConfig[];


    /*----------------------默认视图接口---------------------------*/
    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_listUse.setItemRenderer(this.UseRender, this);
        Game.net.gamerNotifyFatigueS2C.on(this.GamerNotifyFatigueS2C, this);
        Game.net.gamerNotifyItemChangeS2C.on(this.GamerNotifyItemChangeS2C, this);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_listUse.itemRenderer.recover();
        Game.net.gamerNotifyFatigueS2C.off(this.GamerNotifyFatigueS2C, this);
        Game.net.gamerNotifyItemChangeS2C.off(this.GamerNotifyItemChangeS2C, this);

        this.Reset();
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 使用体力 */
    private UsePower()
    {

    }

    /** 渲染体力物品列表 */
    private UseRender(index:number, item:UseItem)
    {
        item.RenderItem(this.useConfig[index]);
    }


    /*private----------------------EVENT事件操作-----------------------*/
    /** 购买体力返回 */
    private GamerNotifyFatigueS2C(msg: GamerNotifyFatigueS2C)
    {
        let buyconfig = this.buyConfig;

        let times = Game.moduleModel.power.GetBuyTimes(buyconfig.id, msg.fatigueInfo);
        this.m_buy.RenderItem(buyconfig, times);
        this.m_labNum.text = `每日最多可购买${buyconfig.useCount}次体力，当前已经购买${times}次`
    }

    /** 使用物品返回 */
    private GamerNotifyItemChangeS2C()
    {
        let useconfig = this.useConfig;
        this.m_listUse.numItems = useconfig.length;
    }

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.m_listUse.numItems = 0;
        this.m_listUse.itemPool.clear();
        this.buyConfig = null;
        this.useConfig = null;
    }

    
    /*public----------------------外部接口---------------------------*/
    /** 打开界面 */
    public Open()
    {
        let buyconfig = this.buyConfig;
        let useconfig = this.useConfig;
        if (!buyconfig || !useconfig) 
        {
            let configs = Game.config.power.getConfigList();
            buyconfig   = configs[0];
            useconfig   = configs.slice(1, configs.length);
            this.buyConfig = buyconfig;
            this.useConfig = useconfig;
        }
        // 购买次数
        let times = Game.moduleModel.power.GetBuyTimes(buyconfig.id);
        this.m_labNum.text = `每日最多可购买${buyconfig.useCount}次体力，当前已经购买${times}次`

        // 购买
        this.m_buy.RenderItem(buyconfig);

        // 使用
        this.m_listUse.numItems = useconfig.length;
    }
}