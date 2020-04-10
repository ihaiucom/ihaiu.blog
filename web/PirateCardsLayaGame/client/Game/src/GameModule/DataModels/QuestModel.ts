import MModel from "../../GameFrame/Module/MModel";
import QuestData from "../DataStructs/QuestData";
import IGamerQuest = proto.IGamerQuest;
import QuestState = proto.QuestState;
import IDailyActive = proto.IDailyActive;
import QuestType = proto.QuestType;
import DailyConfig from "../../Config/ConfigExtends/DailyConfig";
import Game from "../../Game";

/**
 * 任务Model
 */
export default class QuestModel extends MModel 
{
    /** 任务数据字典 */
    private questDict:Dictionary<number, QuestData> = new Dictionary<number, QuestData>();

    private dailyActive:IDailyActive;

    /** 红点——成长任务可领取 */
    IsCanGetGrowUp()
    {
        let questlist = this.GetQuestListByType(QuestType.GrowQuest);
        for (let i = 0, len = questlist.length; i < len; i++) 
        {
            let quest = questlist[i];
            if (this.IsGetGrowUp(quest)) 
            {
                return true;
            }
        }

        return false;
    }

    IsGetGrowUp(quest:QuestData)
    {
        return quest.status == QuestState.QuestComplete;
    }

    /** 红点——日常任务可领取 */
    IsCanGetDaily()
    {
        let questlist = this.GetQuestListByType(QuestType.DailyQuest);
        for (let i = 0, len = questlist.length; i < len; i++) 
        {
            let quest = questlist[i];
            if (this.IsGetDaily(quest)) 
            {
                return true;
            }
        }

        return false;
    }

    IsGetDaily(quest:QuestData)
    {
        return quest.status == QuestState.QuestComplete;
    }

    /** 红点——活跃度可领取 */
    IsCanGetDailyActive()
    {
        let activelist  = Game.config.daily.getConfigList();
        for (let i = 0, len = activelist.length; i < len; i++) 
        {
            let active = activelist[i];
            if (this.IsGetDailyActive(active)) 
            {
                return true;    
            }
        }

        return false;
    }

    IsGetDailyActive(active:DailyConfig)
    {
        return !this.IsReceive(active.id) && this.GetActive() >= active.active;
    }

    /**
     * 生成任务数据字典
     * @param quesrList 
     */
    SetQuestDict(quesrList:IGamerQuest[])
    {
        for (let i = 0, len = quesrList.length; i < len; i++) 
        {
            let data = QuestData.Create(quesrList[i]);
            if (data.status == QuestState.QuestFinished && data.type == QuestType.GrowQuest) 
            {
                this.questDict.remove(data.id);
            } else {
                this.questDict.add(data.id, data);
            }
        }
    }

    /**
     * 获取任务数据列表
     */
    GetQuestList():QuestData[]
    {
        return this.questDict.getValues();
    }

    /**
     * 获取任务数据列表
     * 通过类型
     */
    GetQuestListByType(type:QuestType):QuestData[]
    {
        let list = [];

        let questlist = this.GetQuestList();
        for (let i = 0, len = questlist.length; i < len; i++) 
        {
            let quest = questlist[i];
            if (quest.type == type) 
            {
                list.push(quest);
            }
        }

        return list;
    }

    /**
     * 设置日活情况
     * @param active 
     */
    SetDailyActive(active:IDailyActive)
    {
        this.dailyActive = active;
    }

    /**
     * 获取日活情况
     */
    GetDailyActive()
    {
        return this.dailyActive;
    }

    /** 获取日活值 */
    GetActive()
    {
        return this.dailyActive.active;
    }

    /** 是否已领取 */
    IsReceive(dailyId:number)
    {
        let receivelist = this.dailyActive.receiveList;
        for (let i = 0, len = receivelist.length; i < len; i++) 
        {
            if (receivelist[i] == dailyId) 
            {
                return true;    
            }
        }

        return false;
    }

    /**
     * 排序任务
     * @param list 
     */
    SortQuest(list:QuestData[])
    {
        // 可领取
        let oklist = [];
        // 未达成
        let nolist = []; 
        // 已领取
        let filist = []; 

        for (let i = 0, len = list.length; i < len; i++) 
        {
            let quest = list[i];
            switch (quest.status) 
            {
                case QuestState.QuestComplete:
                    oklist.push(quest);
                    break;
                case QuestState.QuestTacked:
                    nolist.push(quest);
                    break;
                case QuestState.QuestFinished:
                    filist.push(quest);
                    break;
            }
        }

        oklist.sort((a, b)=>{
            return a.acceptTime - b.acceptTime;
        });
        
        nolist.sort((a, b)=>{
            return a.acceptTime - b.acceptTime;
        });

        let questlist = oklist.concat(nolist, filist);

        return questlist;
    }
}