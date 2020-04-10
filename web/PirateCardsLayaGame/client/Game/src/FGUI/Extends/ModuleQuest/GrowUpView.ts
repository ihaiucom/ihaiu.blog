/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GrowUpViewStruct from "../../Generates/ModuleQuest/GrowUpViewStruct";
import QuestItem from "./QuestItem";
import QuestData from "../../../GameModule/DataStructs/QuestData";
import Game from "../../../Game";
import QuestType = proto.QuestType;
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import { MenuId } from "../../../GameModule/MenuId";
import QuestWindowUI from "./QuestWindowUI";

export default class GrowUpView extends GrowUpViewStruct
{
    private questList: QuestData[];

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

        Game.net.gamerNotifyQuestsS2C.on(this.GamerNotifyQuestsS2C, this);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_listsQuest.itemRenderer.clear();

        Game.net.gamerNotifyQuestsS2C.off(this.GamerNotifyQuestsS2C, this);

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


    /*private----------------------EVENT事件操作-----------------------*/
    private GamerNotifyQuestsS2C()
    {
        this.Open();
        (<QuestWindowUI>this.parent).RefreshRed();
    }


    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.m_listsQuest.numItems = 0;
        this.m_listsQuest.itemPool.clear();
        this.questList = [];
    }

    /** 刷新界面 */
    private UpdateView(questlist: QuestData[])
    {
        this.questList = questlist;
        this.m_listsQuest.numItems = questlist.length;
        this.m_listsQuest.refreshVirtualList();
    }


    /*public----------------------外部接口---------------------------*/
    /** 打开界面 */
    public Open()
    {
        let model     = Game.moduleModel.quest;
        let questlist = model.GetQuestListByType(QuestType.GrowQuest);
        this.UpdateView(model.SortQuest(questlist));
    }
}