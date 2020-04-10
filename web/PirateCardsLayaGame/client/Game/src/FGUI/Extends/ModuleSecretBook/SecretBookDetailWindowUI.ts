/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TEXT from "../../../Config/Keys/TEXT";
import Game from '../../../Game';
import SectionModel from "../../../GameModule/DataModels/SectionModel";
import MissionData from "../../../GameModule/DataStructs/MissionData";
import SecretBookDetailWindow from "../../../GameModule/ViewWindows/SecretBookDetailWindow";
import SecretBookDetailWindowUIStruct from "../../Generates/ModuleSecretBook/SecretBookDetailWindowUIStruct";
import BaseRewardItem2 from '../CommonGame/BaseRewardItem2';
import CommonRewardItem from "../CommonGame/CommonRewardItem";
import CommonRewardItem3 from '../CommonGame/CommonRewardItem3';

export default class SecretBookDetailWindowUI extends SecretBookDetailWindowUIStruct
{
    checkpointId: int = 1;
    heroId: int;

    get model(): SectionModel
    {
        return Game.moduleModel.section;
    }

    get missionData(): MissionData
    {
        return Game.moduleModel.section.getMissionDataById(this.checkpointId);
    }

    get rewardList()
    {
        return this.missionData.itemReward;
    }

    moduleWindow: SecretBookDetailWindow;
    // 窗口显示
    onWindowShow(): void
    {
        this.addEventListener();
        this.model.clearSelection();
        let params = this.moduleWindow.menuParameter.args;
        this.checkpointId = params[0];
        this.heroId = params[1];
        this.updateView()
    }

    onHide()
    {
        this.removeEventListener();
    }


    updateView()
    {
        //显示扫荡按钮
        let showSweep = this.missionData.star >= 3 && this.missionData.canSweep;
        // this.m_teamBtn.visible = this.m_challengeBtn.visible = !showSweep;
        this.m_sweepBtn.visible = showSweep;

        this.m_rewardList.numItems = this.rewardList.length;
        for(let index = 0;index < this.missionData.baseRewardItemList.length;index++)
        {
            let rewardItem: BaseRewardItem2 = <BaseRewardItem2> this['m_baseItem' + index];
            rewardItem.renderItem(this.missionData.baseRewardItemList[index]);
        }
        // this.m_condition1.m_isGet.selectedIndex()
        this.m_condition1.text = this.missionData.challengeKillBossCondition;
        this.m_condition2.text = this.missionData.challengeHPCondition;
        this.m_condition3.text = this.missionData.challengeMaxTimeCondition;

        this.m_stamina.text = this.missionData.staminaText;
        this.m_missionItem.rendererItem(this.missionData);
    }


    addEventListener()
    {
        Game.net.gamerNotifyFatigueS2C.on(this.updateFatigue,this);
        this.m_rewardList.itemRenderer = Laya.Handler.create(this,this.rendererListItem,null,false);
        this.m_background.m_closeBtn.onClick(this, this.menuBack);
        this.m_sweepBtn.onClick(this,this.onClickSweepButton);
        this.m_challengeBtn.onClick(this,this.onClickChallengeBtn);
        this.m_sweepView.m_closeBtn.delayOnClick(this,this.onCloseSweep);
        this.m_rewardList.on(fgui.Events.CLICK_ITEM,this,this.listItemOnClick);
    }

    removeEventListener()
    {
        Game.net.gamerNotifyFatigueS2C.off(this.updateFatigue,this);
        this.m_rewardList.itemRenderer.recover();
        this.m_background.m_closeBtn.offClick(this,this.menuBack);
        this.m_sweepBtn.offClick(this,this.onClickSweepButton);
        this.m_challengeBtn.offClick(this,this.onClickChallengeBtn);
        this.m_sweepView.m_closeBtn.delayOffClick(this,this.onCloseSweep);
    }

    onCloseSweep()
    {
        this.m_isSweep.setSelectedIndex(0);
    }

    onClickSweepButton()
    {
        let data = this.missionData;
        if(data && data.challengeTimes >= Global.NumberOfChallengesPerday)
        {
            Game.system.toastText(TEXT.SecretBookTimesNotEnough);
            return;
        }
        this.m_isSweep.setSelectedIndex(1);
        // let missionId = Game.config.checkPoint.getConfig().mapID;
        this.m_sweepView.updateView(this.checkpointId,true);
        // Game.sender.section.SweepMission(this.missionId, 1);
    }

    onClickChallengeBtn()
    {
        if (Game.moduleModel.team.GetTeam()) 
        {
            Game.system.toastText("队伍中，无法进入！");
            return;    
        }

        let data = this.missionData;
        if(data && data.challengeTimes >= Global.NumberOfChallengesPerday)
        {
            Game.system.toastText(TEXT.SecretBookTimesNotEnough);
            return;
        }
        //TODO: 进入备战系统
        this.model.checkpointId = this.checkpointId;
        this.model.launchGame(this.heroId, 0);
    }

    backBtnOnClick()
    {
        this.moduleWindow.menuBack();
    }

    rendererListItem(index: number,item: CommonRewardItem3)
    {
        let data = this.rewardList[index];
        item.rendererItem(data);
    }

    listItemOnClick(item: CommonRewardItem)
    {
        // ItemTipsCtrl.ShowWithItem(item.displayObject,item.itemData);
    }

    private updateFatigue()
    {
    }

    private menuBack()
    {
        this.moduleWindow.menuBack();
    }
}