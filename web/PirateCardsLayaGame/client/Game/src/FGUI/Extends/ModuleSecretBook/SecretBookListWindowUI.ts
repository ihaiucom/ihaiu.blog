/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TEXT from '../../../Config/Keys/TEXT';
import Game from "../../../Game";
import ChapterData,{EnumChapterRewardState} from '../../../GameModule/DataStructs/ChapterData';
import MissionData from "../../../GameModule/DataStructs/MissionData";
import {MenuId} from "../../../GameModule/MenuId";
import SecretBookListWindow from "../../../GameModule/ViewWindows/SecretBookListWindow";
import SecretBookListWindowUIStruct from "../../Generates/ModuleSecretBook/SecretBookListWindowUIStruct";
import SecretBookListItem from "./SecretBookListItem";
import SectionType = proto.CheckPointType;

export default class SecretBookListWindowUI extends SecretBookListWindowUIStruct
{
    moduleWindow: SecretBookListWindow;
    private get model()
    {
        return Game.moduleModel.section;
    }
    private chapterData: ChapterData;
    private dataList: MissionData[]
    private heroId: number = 0;
    
    // 窗口显示
    onWindowShow(): void
    {
        this.InitData();
        this.m_head.SetWindow(MenuId.SecretBookListWindow);
        this.m_reward1.onClick(this, this.onClickRewardButton, [1]);
        this.m_reward2.onClick(this, this.onClickRewardButton, [2]);
        this.m_reward3.onClick(this, this.onClickRewardButton, [3]);
        Game.net.buyTimesCheckPointS2C.on(this.buyTimesHandler,this);
        this.m_list.setItemRenderer(this.renderListItem,this);
        this.m_addTimesBtn.onClick(this,this.onClickAddTimes);
        this.m_list.scrollItemToViewOnClick = false;
        this.m_list.numItems = this.dataList.length;
        this.initView();
        this.m_list.on(fgui.Events.CLICK_ITEM,this,this.onClickListItem);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.heroId = 0;
        this.m_reward1.offClick(this,this.onClickRewardButton);
        this.m_reward2.offClick(this,this.onClickRewardButton);
        this.m_reward3.offClick(this,this.onClickRewardButton);
        Game.net.buyTimesCheckPointS2C.off(this.buyTimesHandler,this);
        this.m_addTimesBtn.offClick(this,this.onClickAddTimes);
        this.m_list.off(fgui.Events.CLICK_ITEM,this,this.onClickListItem);
        if(this.m_list.itemRenderer)
            this.m_list.itemRenderer.recover();
    }

    private InitData()
    {
        this.heroId = this.moduleWindow.menuParameter.args[0];
        this.chapterData = this.model.getSecretChapterByHeroId(this.heroId);
        this.dataList = this.chapterData.missionList;
    }

    initView()
    {
        this.m_times.text = TEXT.SecretTimesRemain.format(this.model.sectionData.secretTimes);
        this.m_starCount.text = this.chapterData.currentStarText;
        let heroData = Game.moduleModel.hero.GetData(this.heroId);
        this.m_heroIcon.icon = heroData.Display;
        this.refreshRewardBtnsState();
    }
    private buyTimesHandler(msg: proto.BuyTimesCheckPointS2C)
    {
        if(!msg.error)
        {
            Game.system.toastText(TEXT.SectionBuyTimesToast);
            this.m_times.text = TEXT.SecretTimesRemain.format(this.model.sectionData.secretTimes);
        }
    }

    private onClickAddTimes()
    {
        this.m_buyTimesView.onShow(SectionType.SecretBook);
    }

    renderListItem(index: number,item: SecretBookListItem)
    {
        let data = this.dataList[index];
        item.rendererItem(data);
    }

    onClickListItem(evet)
    {
        
        let index = this.m_list.getChildIndex(evet);
        let data = this.dataList[index];
        if(data && data.challengeTimes >= Global.NumberOfChallengesPerday)
        {
            Game.system.toastText(TEXT.SecretBookTimesNotEnough);
            return;
        }
        if(data && data.isUnlock)
            Game.menu.open(MenuId.SecretBookDetailWindow,data.id,this.heroId);
    }


    refreshRewardBtnsState()
    {
        this.m_reward1.m_rewardState.setSelectedIndex(this.chapterData.reward1State);
        this.m_reward2.m_rewardState.setSelectedIndex(this.chapterData.reward2State);
        this.m_reward3.m_rewardState.setSelectedIndex(this.chapterData.reward3State);
    }

    showStarTip(chapterId: int, level: number)
    {
      this.m_starTipView.show(chapterId, level);
      
    }

    /** 领取奖励按钮事件 */
    async onClickRewardButton(index: number)  
    {
        let data = this.chapterData;
        switch (index)  {
            case 1:
                {
                    if (this.m_reward1.m_rewardState.selectedIndex == EnumChapterRewardState.Recieved)  {
                        // Game.system.toastText(this.chapterData.RewardAlreadyGet);
                        break;
                    }
                    if (data.needStar1 > data.plotStar)
                        this.showStarTip(data.Id, 1);
                        // Game.system.toastText(this.chapterData.StarNotEnoughToast);
                    else  {
                        let s2c = await Game.sender.section.getReward(data.Id, data.rewardLevel1);
                        this.m_reward1.m_rewardState.setSelectedIndex(EnumChapterRewardState.Recieved);
                        if(!s2c.error)
                        {
                            // this.chapterData.plotChapterGradeIdList.push(s2c.chapterLevel);
                            let itemList = this.chapterData.getRewardItemList(s2c.chapterLevel);
                            // GJC 提审服服务器暂未修改 暂时不屏蔽
                            // Game.system.SystemItemShow(itemList);
                        }

                    }
                }
                break;
            case 2:
                {
                    if (this.m_reward2.m_rewardState.selectedIndex == EnumChapterRewardState.Recieved)  {
                        // Game.system.toastText(this.chapterData.RewardAlreadyGet);
                        break;
                    }
                    if (data.needStar2 > this.chapterData.plotStar)
                        this.showStarTip(this.chapterData.Id,2);
                        // Game.system.toastText(this.chapterData.StarNotEnoughToast);
                    else  {
                        let s2c = await Game.sender.section.getReward(data.Id, data.rewardLevel2);
                        this.m_reward2.m_rewardState.setSelectedIndex(EnumChapterRewardState.Recieved);
                        if(!s2c.error)
                        {
                            // this.chapterData.plotChapterGradeIdList.push(s2c.chapterLevel);
                            let itemList = this.chapterData.getRewardItemList(s2c.chapterLevel);
                            // GJC 提审服服务器暂未修改 暂时不屏蔽
                            // Game.system.SystemItemShow(itemList);
                        }
                    }
                }
                break;
            case 3:
                {
                    if (this.m_reward3.m_rewardState.selectedIndex == EnumChapterRewardState.Recieved)  {
                        // Game.system.toastText(this.chapterData.RewardAlreadyGet);
                        break;
                    }
                    if (data.needStar3 > this.chapterData.plotStar)
                        this.showStarTip(this.chapterData.Id,3);
                        // Game.system.toastText(this.chapterData.StarNotEnoughToast);
                    else  {
                        let s2c = await Game.sender.section.getReward(data.Id,data.rewardLevel3);
                        this.m_reward3.m_rewardState.setSelectedIndex(EnumChapterRewardState.Recieved);
                        if(!s2c.error)
                        {
                            // this.chapterData.plotChapterGradeIdList.push(s2c.chapterLevel);
                            let itemList = this.chapterData.getRewardItemList(s2c.chapterLevel);
                            // GJC 提审服服务器暂未修改 暂时不屏蔽
                            // Game.system.SystemItemShow(itemList);
                        }
                    }
                }
                break;
            default:
                break;
        }
    }
}