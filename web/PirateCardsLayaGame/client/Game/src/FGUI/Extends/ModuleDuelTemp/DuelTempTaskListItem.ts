/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DuelTempTaskListItemStruct from "../../Generates/ModuleDuelTemp/DuelTempTaskListItemStruct";
import QuestData from "../../../GameModule/DataStructs/QuestData";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import ItemCommon from "../CommonGame/ItemCommon";
import Game from "../../../Game";

export default class DuelTempTaskListItem extends DuelTempTaskListItemStruct
{
    protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);

        this.m_list.setItemRenderer(this.renderListItem, this);
        this.m_recieveBtn.onClick(this, this.recieveBtnOnClick)
    }

     /** 销毁视图 */
     dispose()
     {
         this.m_list.itemRenderer.clear();
         this.m_recieveBtn.offClick(this, this.recieveBtnOnClick)
 
         super.dispose();
     }

     questData: QuestData;
    
    rewardList: ItemData[];
    
    updateView(data: QuestData)
    {
        this.questData = data;
        this.m_recieveBtn.visible = data.status >= proto.QuestState.QuestComplete;
        this.m_recieveBtn.m_IsRecieved.setSelectedPage(data.IsFinished?'yes':'no')        
        // this.m_task.text = data.name;
        this.m_task.text = data.info;
        this.rewardList = data.rewardList;
        this.m_list.numItems = this.rewardList.length;
    }

    renderListItem(index: number, item: ItemCommon)
    {
        let data = this.rewardList[index];
        item.renderItem(data);
    }

    recieveBtnOnClick()
    {
        if(this.questData.IsFinished)
            return;
        Game.sender.quest.QuestGetReward(this.questData.id);
    }
    
}