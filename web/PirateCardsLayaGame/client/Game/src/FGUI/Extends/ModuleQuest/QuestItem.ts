/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import QuestItemStruct from "../../Generates/ModuleQuest/QuestItemStruct";
import QuestData from "../../../GameModule/DataStructs/QuestData";
import BagItem from "../CommonGame/BagItem";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import Game from "../../../Game";
import QuestConfig from "../../../Config/ConfigExtends/QuestConfig";
import QuestState = proto.QuestState;
import { MenuId } from "../../../GameModule/MenuId";

export default class QuestItem extends QuestItemStruct
{
    /** 任务数据 */
    DataSource:QuestData;

    private questConfig:QuestConfig;

    private itemList:ItemData[] = [];

    /*----------------------默认视图接口---------------------------*/
    /** 初始化视图 */
    protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);

        this.m_listItem.setItemRenderer(this.ItemRender, this);
        this.m_btnGet.onClick(this, this.ItemGet)
    }

    /** 销毁视图 */
    dispose()
    {
        this.m_listItem.itemRenderer.clear();
        this.m_btnGet.offClick(this, this.ItemGet)

        this.Reset();
        super.dispose();
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 渲染奖品列表 */
    private ItemRender(index: number, item: BagItem)
    {
        item.renderItem(this.itemList[index]);
    }

    /** 前往/领取/已领取按钮 */
    private ItemGet()
    {
        switch (this.m_State.selectedIndex) {
            case 1:
                this.OpenModul();
            break;
            case 2:
                this.SenderGet();
            break;
        
            default:
                break;
        }
    }


    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.m_listItem.numItems = 0;
        this.m_listItem.itemPool.clear();
        this.itemList    = [];
        this.questConfig = null;
        this.DataSource  = null;
        this.m_State.selectedIndex = 0;
    }

    /** 打开模块 */
    private OpenModul()
    {
        let questconfig  = this.questConfig;

        
        if (questconfig.tabId) 
        {
            let menuindexconfig  = Game.config.menuIndex.getConfig(questconfig.tabId);
            menuindexconfig.openTab();
        }
        else if (questconfig.menuId)
        {
            let menuconfig  = Game.config.menu.getConfig(questconfig.menuId);
            menuconfig.openMenu();
        }
        else
        {
            Game.system.toastText("无法前往！");
        }
    }

    /** 请求领取 */
    private SenderGet()
    {
        let datasouce = this.DataSource;

        Game.sender.quest.QuestGetReward(datasouce.id);
    }

    /** 设置奖励列表 */
    private SetItemList()
    {   
        let questconfig  = this.questConfig;

        
        if (questconfig.rewardId) 
        {
            this.m_Type.selectedIndex = 1;
            let reward    = Game.config.reward.getConfig(questconfig.rewardId);
            let itemlist  = reward.itemList;
            this.itemList = itemlist;
            this.m_listItem.numItems = itemlist.length;
        } 
        else if (questconfig.active)
        {
            this.m_Type.selectedIndex = 2;
            this.m_labActive.text = `奖励活跃度：${questconfig.active}`;
        }
        else
        {
            this.m_Type.selectedIndex = 0;
        }
        
    }

    /** 设置任务信息 */
    private SetQuestInfo()
    {
        let datasouce = this.DataSource;

        let  questConfig = Game.config.quest.getConfig(datasouce.id);
        this.questConfig = questConfig;

        this.m_labQuest.text = questConfig.name;
        this.m_labInfo.text  = datasouce.info;

        switch (datasouce.status) {
            case QuestState.QuestLocked:
                this.m_State.selectedIndex = 0; 
                break;
            case QuestState.QuestTacked:
                this.m_State.selectedIndex = 1; 
                break;
            case QuestState.QuestComplete:
                this.m_State.selectedIndex = 2;
                break;
            case QuestState.QuestFinished:
                this.m_State.selectedIndex = 3;
                break;
        }




    }
    
    /*public----------------------外部接口---------------------------*/ 
    /** 渲染Item */
    public RenderItem(datasouce:QuestData)
    {
        this.DataSource = datasouce;

        this.SetQuestInfo();
        this.SetItemList();
    }
}