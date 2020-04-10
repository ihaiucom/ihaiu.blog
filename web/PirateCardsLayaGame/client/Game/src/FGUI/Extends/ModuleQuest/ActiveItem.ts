/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActiveItemStruct from "../../Generates/ModuleQuest/ActiveItemStruct";
import Game from "../../../Game";
import DailyConfig from "../../../Config/ConfigExtends/DailyConfig";
import MenuValidateRed from "../../../GameModule/MenuValidateRed";

export default class ActiveItem extends ActiveItemStruct
{
    /** 活跃数据 */
    DataSource:DailyConfig;

    /*----------------------默认视图接口---------------------------*/
    /** 初始化视图 */
    protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);

        this.m_btnGet.onClick(this, this.ItemGet)
        
    }

    /** 销毁视图 */
    dispose()
    {
        this.m_btnGet.offClick(this, this.ItemGet)
        

        this.Reset();
        super.dispose();
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 前往/领取/已领取按钮 */
    private ItemGet()
    {
        let data = this.DataSource;
        if (this.m_State.selectedIndex == 1) 
        {
            Game.sender.quest.QuestGettDailyQuestReward(data.id)    
        }
        else
        {
            let reward = Game.config.reward.getConfig(data.reward);
            let text   = `活跃度累计${data.active}可领取`;
            Game.system.SystemCanGetDialog(reward.itemList, text);
        }
    }

    /*private----------------------EVENT事件操作-----------------------*/
    


    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.DataSource  = null;
        this.m_State.selectedIndex = 0;
    }

    /** 设置活跃信息 */
    private SetItemInfo()
    {
        let data = this.DataSource;

        this.m_labActive.text = String(data.active);

        let model = Game.moduleModel.quest;
        if (model.IsReceive(data.id)) 
        {
            if (this.m_State.selectedIndex == 1) 
            {
                MenuValidateRed.getInstance().closeRed(this);
            }
            this.m_State.selectedIndex = 2;    
        }
        else if (model.GetActive() >= data.active)
        {
            this.m_State.selectedIndex = 1;    
        }
        else
        {
            this.m_State.selectedIndex = 0;    
        }
    }

    /** 设置活跃状态 */
    private SetItemState()
    {

    }


    /*public----------------------外部接口---------------------------*/ 
    /** 渲染Item */
    public RenderItem(datasouce:DailyConfig)
    {
        this.DataSource = datasouce;

        this.SetItemInfo();
    }
}