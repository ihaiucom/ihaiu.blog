/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemTipsStruct from "../../Generates/CommonGame/ItemTipsStruct";
import ItemData from '../../../GameModule/DataStructs/ItemData';
import TEXT from "../../../Config/Keys/TEXT";
import TimeHelper from "../../../GameHelpers/TimeHelper";
export default class ItemTips extends ItemTipsStruct
{
    updateView(itemData: ItemData)
    {
        this.m_itemName.text = itemData.itemName;
        this.m_icon.m_icon.icon = itemData.iconUrl;
        this.m_num.text = TEXT.BagItemCount.format(itemData.count);
        let limitIndex = 0;
        if(itemData.isLimit)
        {
            this.m_icon.m_itemState.setSelectedIndex(1);
            !itemData.isExpired && (limitIndex = 1);
            if(itemData.itemConfig.periodTime)
            {
                let period = TimeHelper.GetYMDHMS(itemData.expireTime,true,true);
                this.m_expiredTimeLb.text = TEXT.BagExpiredPeriodTip.format(period);
            }
            else if(itemData.itemConfig.limitTime)
            {
                this.limitCountdown(itemData.expireTime);
                Engine.timer.loop(1000,this,this.limitCountdown,null,false);
            }
        }
        else
        {
            this.m_icon.m_itemState.setSelectedIndex(0);
        }
    }
    private expiredTime: number;

    private limitCountdown(expiredTime?: number)
    {
        if(expiredTime)
            this.expiredTime = expiredTime;
        if(TimeHelper.TimeleftIsOver(this.expiredTime))
        {
            this.m_isLimit.setSelectedIndex(0);
            Engine.timer.clear(this,this.limitCountdown);
            return;
        }
        let timeStr = TimeHelper.TimeleftHHMMSS(this.expiredTime);
        this.m_expiredTimeLb.text = TEXT.BagExpiredLimitTip.format(timeStr);
    }
}