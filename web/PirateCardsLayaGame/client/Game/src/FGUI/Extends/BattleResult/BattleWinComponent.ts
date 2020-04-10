/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TEXT from '../../../Config/Keys/TEXT';
import Game from '../../../Game';
import ItemData from '../../../GameModule/DataStructs/ItemData';
import WinSkeletonTemple from "../../Customs/WinSkeletonTemple";
import BattleWinComponentStruct from "../../Generates/BattleResult/BattleWinComponentStruct";
import CommonRewardItem from "../CommonGame/CommonRewardItem";

export default class BattleWinComponent extends BattleWinComponentStruct
{
    private dataList: ItemData[] = [];
    private winaction: WinSkeletonTemple;

    onWindowInited(): void
    {

    }
    /** 窗口显示 */
    onWindowWillShow(): void
    {
        // let winaction = WinSkeletonTemple.poolGet();
        // winaction.setXY(this.width / 2, this.height / 2);
        // winaction.setParent(this.displayObject);
        // this.winaction = winaction;
        this.m_list.setItemRenderer(this.itemListRenderer,this);
    }

    /** 窗口隐藏 */
    onWindowHide()
    {
        if (this.winaction) 
        {
            this.winaction.release();    
        }
        this.m_list.itemRenderer.recover();
    } 
    
    updateView(msg: proto.GamerNotifyNewPVPResultS2C)
    {
        if(msg.battleType == proto.PVPType.PVP_M1V1)
            return;
        this.m_condition1.m_isGet.setSelectedIndex(1);
        msg.battleStar & proto.BattleStarType.HP && (this.m_condition2.m_isGet.setSelectedIndex(1));
        msg.battleStar & proto.BattleStarType.Time && (this.m_condition3.m_isGet.setSelectedIndex(1));
        let checkpoint = Game.config.checkPoint.getConfig(msg.checkPointId);
        this.m_condition1.m_title.text = TEXT.MissionKillBoss
        this.m_condition2.m_title.text = TEXT.MissionHPState.format(checkpoint.challengeHp);
        this.m_condition3.m_title.text = TEXT.MissionMaxTime.format(checkpoint.challengeTime);
        this.dataList.length = 0;
        for(let reward of msg.firstRewardList)
        {
            let item = ItemData.CreateItem(reward);
            item.isFirstReward = true;
            this.dataList.push(item);
        }
        for(let reward of msg.ItemRewardList)
        {
            let item = ItemData.CreateItem(reward);
            this.dataList.push(item);
        }
        msg.baseRewardList.sort((a,b)=>{
            return b.id - a.id;
        })
        for(let index = 0; index < msg.baseRewardList.length; index++)
        {
            let reward = msg.baseRewardList[index];
            let item = ItemData.CreateItem(reward);
            if(item.type == proto.ItemType.exp)
            {
                this.m_exp.renderItem(item);
            }
            else if(item.type == proto.ItemType.silver)
            {
                this.m_rewardItem.renderItem(item);
            }
            else if(item.type == proto.ItemType.heroExpItem)
            {
                this.m_heroExp.renderItem(item);
            }
        }

        this.m_list.numItems = this.dataList.length;
    }

    itemListRenderer(index: number, item: CommonRewardItem)
    {
        let data = this.dataList[index];
        if(item instanceof CommonRewardItem)
        item.rendererItem(data);
    }
}