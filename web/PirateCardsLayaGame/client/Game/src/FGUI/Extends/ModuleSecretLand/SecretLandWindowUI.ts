/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandWindowUIStruct from "../../Generates/ModuleSecretLand/SecretLandWindowUIStruct";
import {MenuId} from "../../../GameModule/MenuId";
import AffixCommon from '../CommonGame/AffixCommon';
import Game from '../../../Game';
import SecretLandData from '../../../GameModule/DataStructs/SecretLandData';
import SecretLandRewardData from '../../../GameModule/DataStructs/SecretLandRewardData';
import TEXT from '../../../Config/Keys/TEXT';
import GamerNotifySecretLandInfoS2C = proto.GamerNotifySecretLandInfoS2C;

export default class SecretLandWindowUI extends SecretLandWindowUIStruct
{
    private get model()
    {
        return Game.moduleModel.secretLand;
    }
    
    onWindowShow(): void
    {
        this.m_head.SetWindow(MenuId.SecretLand);
        this.m_thisWeekList.on(fgui.Events.CLICK_ITEM,this,this.OnClickAffixItem);
        this.m_nextWeekList.on(fgui.Events.CLICK_ITEM,this,this.OnClickAffixItem);
        this.m_thisWeekList.setItemRenderer(this.renderListItem,this);
        this.m_nextWeekList.setItemRenderer(this.renderNextListItem,this);
        this.m_affixBtn.delayOnClick(this, this.OnClickAffixBtn);
        this.m_teamBtn.delayOnClick(this,this.OnclickTeamBtn);
        this.m_baseReward.delayOnClick(this, this.OnClickBaseReward);
        this.m_weekRewardPanel.m_btnClose.delayOnClick(this, this.OnClickWeekRewardClose);
        this.InitView();
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.m_thisWeekList.off(fgui.Events.CLICK_ITEM,this,this.OnClickAffixItem);
        this.m_nextWeekList.off(fgui.Events.CLICK_ITEM,this,this.OnClickAffixItem);
        if(this.m_thisWeekList.itemRenderer)
            this.m_thisWeekList.itemRenderer.recover();
        if(this.m_nextWeekList.itemRenderer)
            this.m_nextWeekList.itemRenderer.recover();
        this.m_affixBtn.offClick(this,this.OnClickAffixBtn);
        this.m_teamBtn.offClick(this,this.OnclickTeamBtn);
        this.m_baseReward.delayOffClick(this,this.OnClickBaseReward);
        this.m_weekRewardPanel.m_btnClose.delayOffClick(this,this.OnClickWeekRewardClose);

    }

    private InitView()
    {
        // this.testData();
        this.m_thisWeekList.numItems = this.model.thisAffixList.length;
        this.m_nextWeekList.numItems = this.model.nextAffixList.length;
        this.m_bestScore.text = this.model.infoData.bestScoreTxt;
        this.m_keystone.text = this.model.infoData.keystoneTxt;
        if(this.model.lastWeekReward)
            this.m_openWeekReward.setSelectedIndex(1);
        else
            this.m_openWeekReward.setSelectedIndex(0);
    }

    private testData()
    {
        let msg = new proto.GetGamerSecretLandS2C();
        let secretLand = new proto.GamerSecretLand();
        secretLand.keyStone = 14;
        secretLand.checkPointID = 40000;
        secretLand.highestLevel = 22;
        secretLand.weekHighestLevel = 16;
        msg.secretLand = secretLand;
        msg.lastBattleReward = {};
        this.model.SetProto(msg);


        let msg2 = new GamerNotifySecretLandInfoS2C()
        msg2.thisAffixList = [1,4,6,10];
        msg2.nextAffixList = [2,3,9,12];
        this.model.SetAffixProto(msg2);
    }

    private OnClickAffixBtn()
    {
        Game.menu.open(MenuId.SecretLandAffix);
    }

    private OnClickAffixItem(item: AffixCommon)
    {
        //显示词缀tips

    }

    private OnclickTeamBtn()
    {
        if(this.model.infoData.keyStone)
        {
            let config = Game.config.secretLand.getConfig(this.model.infoData.keyStone);
            if(config)
            {
                if(config.LevelLimit > Game.user.level)
                {
                    Game.system.toastFormatText(TEXT.SecretLand_Level_Limit.format(config.LevelLimit,this.model.infoData.keyStone));
                    return;
                }
            }
        }
        Game.menu.open(MenuId.Team,this.model.infoData.checkPointID,'secretland');
    }

    renderListItem(index: number,item: AffixCommon)
    {
        let id = this.model.thisAffixList[index];
        item.updateView(id);
    }
    renderNextListItem(index: number,item: AffixCommon)
    {
        let id = this.model.nextAffixList[index];
        item.updateView(id);
    }
    
    private async OnClickBaseReward()
    {
        let s2c = await Game.sender.secretLand.WeekReward();
        if(!s2c.error)
        {
            
            this.m_openWeekReward.setSelectedIndex(2);
            this.m_weekRewardPanel.UpdateView(s2c.items);
        }
    }

    private OnClickWeekRewardClose()
    {
        this.m_openWeekReward.setSelectedIndex(0);
    }
}

 
