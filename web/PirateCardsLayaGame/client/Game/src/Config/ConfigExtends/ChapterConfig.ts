
import {ChapterConfigLang} from "../ExcelConfigLange";
import Game from "../../Game";
import TEXT from "../Keys/TEXT";
import ItemData from '../../GameModule/DataStructs/ItemData';
export default class ChapterConfig extends ChapterConfigLang
{
    /** 章节名称图片 */
    get chapterIconUrl(): string
    {
        let icon = "";
        let iconId = this.icon;
        let avater = Game.config.avatar.getConfig(iconId);
        if(avater)
            icon = avater.iconUrl;
        return icon;
    }

    /** 第几章 */
    get chapterCountTxt(): string
    {
        // gjc 适配精英关卡id是10000
        let id = this.id >= 10000 ? (this.id % 10000 + 1) : this.id;
        let chapterNum = TEXT['N'+id];
        return TEXT.Chapter.format(chapterNum);
    }

   public getRewardByLevel(lv: number)
   {
       
       let reward = this.starReward.find((reward)=>{
           return reward.Level == lv;
       });
       if(!reward)
           console.error(`ChapterConfig id = ${this.id} 星级奖励等级${lv}不存在`)
       let rewardConfig = Game.config.reward.getConfig(reward.Rewardid);
       if(!rewardConfig.fixedItems)
           console.error(`reward id = ${reward.Rewardid} 固定奖励不存在`)
       return rewardConfig.fixedItems;
    }

    public getStarByLevel(lv: number)
    {
        let reward = this.starReward.find((reward) =>
        {
            return reward.Level == lv;
        });
        if(reward)
            return reward.Starnum;
        return 0;
    }
}