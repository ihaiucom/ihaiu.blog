/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DailyViewStruct from "../../Generates/ModuleQuest/DailyViewStruct";
import QuestData from "../../../GameModule/DataStructs/QuestData";
import Game from "../../../Game";
import QuestItem from "./QuestItem";
import QuestType = proto.QuestType;
import IDailyActive = proto.IDailyActive;
import DailyConfig from "../../../Config/ConfigExtends/DailyConfig";
import ActiveItem from "./ActiveItem";
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import { MenuId } from "../../../GameModule/MenuId";
import QuestWindowUI from "./QuestWindowUI";

export default class DailyView extends DailyViewStruct
{
    private questList: QuestData[] = [];

    private activeList: DailyConfig[] = [];

    private dailyActive: IDailyActive;

    /*----------------------默认视图接口---------------------------*/
    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        this.m_listsQuest.setVirtual();
    }
 
    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_listsQuest.setItemRenderer(this.QuestRender, this);
        this.m_listActive.setItemRenderer(this.ActiveRender, this);

        Game.net.gamerNotifyQuestsS2C.on(this.GamerNotifyQuestsS2C, this);
        Game.net.getDailyQuestRewardS2C.on(this.GetDailyQuestRewardS2C, this);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_listsQuest.itemRenderer.clear();
        this.m_listActive.itemRenderer.clear();

        Game.net.gamerNotifyQuestsS2C.off(this.GamerNotifyQuestsS2C, this);
        Game.net.getDailyQuestRewardS2C.off(this.GetDailyQuestRewardS2C, this);

        this.Reset();
    }


    /*private----------------------UI事件操作---------------------------*/
    /** 刷新任务列表 */
    private QuestRender(index: number, item: QuestItem): void
    {
        let data = this.questList[index];
        item.RenderItem(data);

        MenuValidateRed.getInstance().openItem(MenuId.Quest, data, item.m_btnGet);
    }

    /** 刷新活跃列表 */
    private ActiveRender(index: number, item: ActiveItem): void
    {
        let data = this.activeList[index];
        item.RenderItem(data); 

        MenuValidateRed.getInstance().openItem(MenuId.Quest, data, item.m_btnGet);
    }


    /*private----------------------EVENT事件操作-----------------------*/
    private GamerNotifyQuestsS2C()
    {
        this.UpdateQuest();
        (<QuestWindowUI>this.parent).RefreshRed();
    }

    private GetDailyQuestRewardS2C()
    {
        this.UpdateActive();
        (<QuestWindowUI>this.parent).RefreshRed();
    }


    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.m_listsQuest.numItems = 0;
        this.m_listsQuest.itemPool.clear();
        this.m_listActive.numItems = 0;
        this.m_listActive.itemPool.clear();
        this.questList = [];
        this.activeList = [];
    }

    /** 更新任务 */
    private UpdateQuest()
    {
        let questlist = this.questList;

        this.m_listsQuest.numItems = questlist.length;
        this.m_listsQuest.refreshVirtualList();
    }

    /** 更新活跃 */
    private UpdateActive()
    {
        let active = this.dailyActive;

        this.m_labActive.text = String(active.active);

        let activelist  = Game.config.daily.getConfigList();
        this.activeList = activelist;
        this.m_listActive.numItems = activelist.length;
        
        this.m_progressActive.value = active.active;
        let activeMax  = activelist[activelist.length - 1];
        this.m_progressActive.max   = activeMax.active;
    }

    /** 刷新界面 */
    private UpdateView(questlist: QuestData[], active:IDailyActive)
    {
        this.questList = questlist;
        this.dailyActive = active;

        this.UpdateQuest();
        this.UpdateActive();
    }


    /*public----------------------外部接口---------------------------*/
    /** 打开界面 */
    public Open()
    {
        let model     = Game.moduleModel.quest;
        let questlist = model.GetQuestListByType(QuestType.DailyQuest);
        let dailyActive = model.GetDailyActive();
        this.UpdateView(model.SortQuest(questlist), dailyActive);
    }
}