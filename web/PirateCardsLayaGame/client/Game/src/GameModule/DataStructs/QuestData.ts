import GamerQuest = proto.GamerQuest;
import IGamerQuest = proto.IGamerQuest;
import QuestState = proto.QuestState;
import Game from "../../Game";
import ItemData from "./ItemData";

export default class QuestData extends GamerQuest {

    private get config()
    {
        return Game.config.quest.getConfig(this.id);
    }
    /**
     * 生成任务数据
     * @param qust 
     */
    public static Create(qust:IGamerQuest):QuestData
    {
        let data = new QuestData();
        data.id     = qust.id;
        data.name   = qust.name;
        data.N      = qust.N;
        data.nowCount   = qust.nowCount;
        data.status     = qust.status;
        data.acceptTime = qust.acceptTime;
        data.preCount   = qust.preCount;
        data.type   = qust.type;

        
        return data;
    }

    /** 任务信息 */
    public get info()
    {
        return this.N == 0 ? this.name : `${this.name}(${this.nowCount}/${this.N})`
    }

    /** 任务是否完成 */
    public get IsComplete()
    {
        return this.status == QuestState.QuestComplete;
    }

    public get IsFinished()
    {
        return this.status == QuestState.QuestFinished;
    }

    /** 固定掉落的奖励 */
    public get rewardList(): ItemData[]
    {
        if(!this.config)
            return [];
            
        let itemlist: ItemData[] = [];
        let rewardconfig = Game.config.reward.getConfig(this.config.rewardId);
        if(rewardconfig)
        {
            for (let i = 0, len = rewardconfig.fixedItems.length; i < len; i++) 
            {
                let rewarditem = rewardconfig.fixedItems[i];
                let itemdata   = ItemData.Create(rewarditem.ItemId, rewarditem.ItemNum, rewarditem.ItemType);
                itemlist.push(itemdata);
            }
        }
        return itemlist;
    }
}