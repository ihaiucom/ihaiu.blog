/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Game from '../../../Game';
import SectionModel from '../../../GameModule/DataModels/SectionModel';
import MissionData from '../../../GameModule/DataStructs/MissionData';
import {MenuId} from '../../../GameModule/MenuId';
import SectionDetailWindow from '../../../GameModule/ViewWindows/SectionDetailWindow';
import ItemTipsCtrl from '../../Customs/ItemTipsCtrl';
import MenuLayer from "../../../GameFrame/Menu/MenuLayer";
import { GuideGroup } from "../../../GameModule/DataModels/GuideModel";
import { GuideHelper } from "../../../GameModule/GuideModule/GuideHelper";
import SectionDetailUIStruct from "../../Generates/GameSectionsUI/SectionDetailUIStruct";
import BaseRewardItem from '../CommonGame/BaseRewardItem';
import CommonRewardItem from '../CommonGame/CommonRewardItem';
import SectionType = proto.CheckPointType;
import GameEventKey from "../../../GameEventKey";
import GuideData from "../../../GameModule/DataStructs/GuideData";
import TEXT from '../../../Config/Keys/TEXT';


export default class SectionDetailUI extends SectionDetailUIStruct
{
    checkpointId: int = 1;
    /**参数1： 关卡类型， 1：剧情，2：精英，3：魔王 */
    type: int = 1;
    /**参数2： 节id */
    missionId: int = 1;
    /**参数3： 章id */
    chapter: int;

    private _challengeBtnBeforeParent : any = null;

    get model(): SectionModel
    {
        return Game.moduleModel.section;
    }

    get missionData(): MissionData
    {
        return Game.moduleModel.section.getMissionDataById(this.missionId);
    }

    get rewardList()
    {
        return this.missionData.rewardList;
    }
    
    moduleWindow: SectionDetailWindow;
     // 窗口显示
     onWindowShow(): void
     {
        this.m_head.SetWindow(MenuId.SubMenuSectionDetail);
        this.addEventListener();
        let params = this.moduleWindow.menuParameter.args;
        this.updateView(params[0])
        this.model.clearSelection();
        
        Laya.timer.once(50, this, this.CheckGuide);
     }
 
    onHide()
    {
        this.removeEventListener();
    }

    updateView(checkpointId: number)
    {
        this.checkpointId = checkpointId;
        let config = Game.config.checkPoint.getConfig(this.checkpointId);
        this.type = config.type;
        this.missionId = config.id;
        this.chapter = config.chapter;
        this.InitView();
    } 

    InitView()
    {
        switch (this.type) {
            
            case proto.CheckPointType.Story:
            case proto.CheckPointType.Elite:
                {
                    this.m_missionType.setSelectedPage('normal');
                    this.m_normalItem.renderItem(this.missionData);
                    // this.m_normalItem.m_isHideStar.setSelectedIndex(1);
                }
                break;
            // case proto.CheckPointType.Elite:
            //     {
            //         this.m_missionType.setSelectedPage('special');
            //         this.m_specialItem.rendererItem(this.missionData);
            //         // this.m_specialItem.m_isHideStar.setSelectedIndex(1);
            //     }
            //     break;
            case proto.CheckPointType.Devil:
                {
                    this.m_missionType.setSelectedPage('monster');
                    this.m_monsterItem.rendererItem(this.missionData);
                    // this.m_monsterItem.m_isHideStar.setSelectedIndex(1);
                }
                break;
        
            default:
                break;
        }
        //显示扫荡按钮
        let showSweep = this.missionData.star >= 3 && this.missionData.canSweep;
        // this.m_teamBtn.visible = this.m_challengeBtn.visible = !showSweep;
        this.m_sweepBtn.visible = showSweep;

        this.m_rewardList.numItems = this.rewardList.length;
        for(let index = 0;index < this.missionData.baseRewardItemList.length; index++) {
            let rewardItem: BaseRewardItem = <BaseRewardItem>this['m_baseItem'+index];
            rewardItem.renderItem(this.missionData.baseRewardItemList[index]);
        }
        // this.m_condition1.m_isGet.selectedIndex()
        this.m_condition1.text = this.missionData.challengeKillBossCondition;
        this.m_condition2.text = this.missionData.challengeHPCondition;
        this.m_condition3.text = this.missionData.challengeMaxTimeCondition;

        this.m_stamina.text = this.missionData.staminaText;
    }


    addEventListener()
    {
        Game.net.gamerNotifyFatigueS2C.on(this.updateFatigue, this);
        this.m_rewardList.itemRenderer = Laya.Handler.create(this, this.rendererListItem,null,false);
        this.m_sweepBtn.onClick(this, this.onClickSweepButton);
        this.m_challengeBtn.onClick(this, this.onClickChallengeBtn);
        this.m_teamBtn.onClick(this, this.onClickTeamBtn);
        this.m_sweepView.m_closeBtn.delayOnClick(this,this.onCloseSweep);
        this.m_rewardList.on(fgui.Events.CLICK_ITEM, this, this.listItemOnClick);
    }

    removeEventListener()
    {
        Game.net.gamerNotifyFatigueS2C.off(this.updateFatigue,this);
        this.m_rewardList.itemRenderer.recover();
        this.m_sweepBtn.offClick(this, this.onClickSweepButton);
        this.m_challengeBtn.offClick(this, this.onClickChallengeBtn);
        this.m_teamBtn.offClick(this, this.onClickTeamBtn);
        this.m_sweepView.m_closeBtn.delayOffClick(this,this.onCloseSweep);
    }

    onCloseSweep()
    {
        this.m_isSweep.setSelectedIndex(0);
    }

    onClickSweepButton()
    {
        this.m_isSweep.setSelectedIndex(1);
        this.m_sweepView.updateView(this.missionId);
        // Game.sender.section.SweepMission(this.missionId, 1);
    }

    onClickChallengeBtn()
    {
        //TODO: 进入备战系统
        // this.model.checkpointId = this.checkpointId;
        if (Game.moduleModel.team.GetTeam() || Game.moduleModel.team.IsMatching()) 
        {
            Game.system.toastText("队伍中，无法挑战！");
            return;    
        }
        if(Game.moduleModel.power.fatigueNum < this.missionData.challengePower)
        {
            Game.system.toastText(TEXT.FatigueNotEnough);
            return;
        }
        Game.event.dispatch(GameEventKey.GameFrame_SectionDeltaEnterOnClick);
        Game.menu.openTab(MenuId.BattlePlan,1, this.checkpointId)
    }
    onClickTeamBtn()
    {
        //TODO: 进入组队大厅
        Game.menu.open(MenuId.Team,this.checkpointId);
    }

    backBtnOnClick()
    {
        this.moduleWindow.menuBack();
    }

    rendererListItem(index: number, item: CommonRewardItem)
    {
        let data =this.rewardList[index];
        item.rendererItem(data);
    }

    listItemOnClick(item: CommonRewardItem)
    {
        // ItemTipsCtrl.ShowWithItem(item.displayObject,item.itemData);
    }

    private updateFatigue()
    {
    }

    private CheckGuide()
    {
        let model = Game.moduleModel.guide;
        if(!model)
        {
            return;
        }

        let data = model.GetData(GuideGroup.PVE_BATTLE);
        if(data && !data.isOver) // && data.progress == 2
        { 
            this.GuideBattle(data);
            return;
        }  
        data = model.GetData(GuideGroup.BATTLE_ENTER_1_2);
        if(data && !data.isOver)
        {
            this.GuideBattle(data);
            return;
        } 
        data = model.GetData(GuideGroup.BATTLE_ENTER_1_3);
        if(data && !data.isOver)
        {
            this.GuideBattle(data);
            return;
        } 
        data = model.GetData(GuideGroup.BATTLE_ENTER_1_4);
        if(data && !data.isOver)
        {
            this.GuideBattle(data);
            return;
        } 
        data = model.GetData(GuideGroup.BATTLE_ENTER_1_6);
        if(data && !data.isOver)
        {
            this.GuideBattle(data);
            return;
        }
        data = model.GetData(GuideGroup.BATTLE_ENTER_2_1);
        if(data && !data.isOver)
        {
            this.GuideBattle(data);
            return;
        }
        
        data = model.GetData(GuideGroup.BATTLE_PLAN_SECOND);
        if(data && !data.isOver) // && data.progress == 1
        {
            this.GuideBattle(data);
        }
        
        data = model.GetData(GuideGroup.BATTLE_ENTER_SPECIAL_1);
        if(data && !data.isOver) // && data.progress == 2
        {
            this.GuideBattle(data);
        } 

    }
    

    /**
     * 战斗引导
     */
    private GuideBattle(data : GuideData)
    {
        if(data)
        {
            let obj = this.m_challengeBtn;
            let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(obj)//obj.parent.localToGlobal(obj.x, obj.y);
            Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, obj.width, obj.height);
            this._challengeBtnBeforeParent = this.m_challengeBtn.parent;
            GuideHelper.ChangeObjParent(obj, Game.system.guideMgr.otherNode);

            // list.onClick(this, this.FinishGuide, [list, beforeParent]);
            Game.event.add(GameEventKey.GameFrame_SectionDeltaEnterOnClick, this.FinishGuide, this);
        }
    }

    private FinishGuide()
    {
        let model = Game.moduleModel.guide;
        if(!model)
        {
            return;
        }

        GuideHelper.ChangeObjParent(this.m_challengeBtn, this._challengeBtnBeforeParent);

        model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
        Game.event.remove(GameEventKey.GameFrame_SectionDeltaEnterOnClick, this.FinishGuide, this);
        // this._challengeBtnBeforeParent = null;
        // obj.offClick(this, this.FinishGuide);
    }
}