/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Game from '../../../Game';
import SectionModel from '../../../GameModule/DataModels/SectionModel';
import ChapterData,{EnumChapterRewardState} from '../../../GameModule/DataStructs/ChapterData';
import MissionData from "../../../GameModule/DataStructs/MissionData";
import {MenuId} from "../../../GameModule/MenuId";
import SectionWindow from '../../../GameModule/ViewWindows/SectionWindow';
import SectionViewNormalStruct from "../../Generates/GameSectionsUI/SectionViewNormalStruct";
import NormalSectionItem from "./NormalSectionItem";
import SectionWindowUI from './SectionWindowUI';
import TEXT from '../../../Config/Keys/TEXT';
import MsgKey from '../../../Config/Keys/MsgKey';
import SectionType = proto.CheckPointType;
import GameEventKey from '../../../GameEventKey';
import MenuValidateRed from '../../../GameModule/MenuValidateRed';


export default class SectionViewNormal extends SectionViewNormalStruct
{
    moduleWindow: SectionWindow;
    get window(): SectionWindowUI
    {
        return this.moduleWindow.window;
    }

    currentChapterIndex: int;

    
    private _type: SectionType;

    get model(): SectionModel
    {
        return Game.moduleModel.section;
    }

    private _chapterList: ChapterData[];
    get chapterList(): ChapterData[]
    {
        this._chapterList = this.model.GetActiveChaptersByType(this._type);
        return this._chapterList;
    }

    get chapterData(): ChapterData
    {
        return this._chapterList[this.currentChapterIndex];
    }

    get missionDataList():MissionData[]
    {
        return this.chapterData.missionList;
    }
    onInit()
    {
    }

    onShow(isnormal:boolean)
    {
        this.addEventListener();
        // !this.currentChapter && (this.currentChapter = this.model.totalChapterCount);
        this._type = isnormal? SectionType.Story: SectionType.Elite;
        this.m_list.setItemRenderer(this.renderListItem,this);
        this.currentChapterIndex = this.chapterList.length - 1;
        this.refreshView();
    }

    onHide()
    {
        this.removeEventListener();
    }

    /** 刷新红点 */
    RefreshRed()
    {
        // 左边章节
        MenuValidateRed.getInstance().openItem(MenuId.Sections, {data:this.chapterData, dir:false}, this.m_switchChapter.m_left);

        // 右边章节
        MenuValidateRed.getInstance().openItem(MenuId.Sections, {data:this.chapterData, dir:true}, this.m_switchChapter.m_right);
    
        // 奖励1
        MenuValidateRed.getInstance().openItem(MenuId.Sections, this.chapterData.reward1State, this.m_reward1);

        // 奖励2
        MenuValidateRed.getInstance().openItem(MenuId.Sections, this.chapterData.reward2State, this.m_reward2);

        // 奖励3
        MenuValidateRed.getInstance().openItem(MenuId.Sections, this.chapterData.reward3State, this.m_reward3);
    }


    addEventListener()
    {
        this.m_switchChapter.m_left.onClick(this,this.switchToLastChapter);
        this.m_switchChapter.m_right.onClick(this,this.switchToNextChapter);
        this.m_list.on(fgui.Events.CLICK_ITEM, this, this.itemOnClick);
        this.m_reward1.onClick(this, this.onClickRewardButton, [1]);
        this.m_reward2.onClick(this, this.onClickRewardButton, [2]);
        this.m_reward3.onClick(this, this.onClickRewardButton, [3]);
    }

    removeEventListener()
    {
        this.m_switchChapter.m_left.offClick(this,this.switchToLastChapter);
        this.m_switchChapter.m_right.offClick(this,this.switchToNextChapter);
        this.m_list.off(fgui.Events.CLICK_ITEM,this,this.itemOnClick);
        this.m_reward1.offClick(this,this.onClickRewardButton);
        this.m_reward2.offClick(this,this.onClickRewardButton);
        this.m_reward3.offClick(this,this.onClickRewardButton);
    }

    private switchToLastChapter()
    {
        this.currentChapterIndex -= 1;
        this.refreshView();
    }
    private switchToNextChapter()
    {
        this.currentChapterIndex += 1;
        this.refreshView(); 
    }

    refreshView()
    {
        this.m_chapterInfo.m_chapterNameIcon.icon = this.chapterData.iconUrl;
        this.m_switchChapter.m_title.text = this.chapterData.chapterCountTxt;
        this.m_starCount.text = this.chapterData.currentStarText;
        this.m_reward1.m_title.text = this.chapterData.needStar1 + "";
        this.m_reward2.m_title.text = this.chapterData.needStar2 + "";
        this.m_reward3.m_title.text = this.chapterData.needStar3 + "";
        this.refreshRewardBtnsState();
        this.m_switchChapter.refreshButtons(this.currentChapterIndex, this._chapterList.length);
		this.m_list.numItems = this.missionDataList.length;
		let index = this.missionDataList.findIndex((data)=>{
			return data.isUnlock?-1:1;
		})
		console.log("0000000000000",index)

        this.RefreshRed();
    }

    refreshRewardBtnsState()
    {
        this.m_reward1.m_rewardState.setSelectedIndex(this.chapterData.reward1State);
        this.m_reward2.m_rewardState.setSelectedIndex(this.chapterData.reward2State);
        this.m_reward3.m_rewardState.setSelectedIndex(this.chapterData.reward3State);
    }

    renderListItem(index: number, item: NormalSectionItem)
    {
        let data = this.missionDataList[index];
        item.renderItem(data);
    }

    itemOnClick(item: NormalSectionItem)
    {
        let index = this.m_list.getChildIndex(item);
        let data = this.missionDataList[index];
        if(data.isActive)
        {
            Game.event.dispatch(GameEventKey.GameFrame_SectionEnterOnClick);
            Game.menu.open(MenuId.SubMenuSectionDetail,data.id);
        }
        else
        {
            Game.system.toastText(TEXT.MissionNotOpen);
        }
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
                    if (data.needStar1 > this.chapterData.plotStar)
                        this.window.showStarTip(this.chapterData.Id, 1);
                        // Game.system.toastText(this.chapterData.StarNotEnoughToast);
                    else  {
                        let s2c = await Game.sender.section.getReward(data.Id, data.rewardLevel1);
                        this.m_reward1.m_rewardState.setSelectedIndex(EnumChapterRewardState.Recieved);
                        if(!s2c.error)
                        {
                            let itemList = this.chapterData.getRewardItemList(s2c.chapterGradeId);
                            this.RefreshRed();
                            (<SectionWindowUI>this.parent).RefreshRed();
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
                        this.window.showStarTip(this.chapterData.Id,2);
                        // Game.system.toastText(this.chapterData.StarNotEnoughToast);
                    else  {
                        let s2c = await Game.sender.section.getReward(data.Id, data.rewardLevel2);
                        this.m_reward2.m_rewardState.setSelectedIndex(EnumChapterRewardState.Recieved);
                        if(!s2c.error)
                        {
                            let itemList = this.chapterData.getRewardItemList(s2c.chapterGradeId);
                            this.RefreshRed();
                            (<SectionWindowUI>this.parent).RefreshRed();
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
                        this.window.showStarTip(this.chapterData.Id,3);
                        // Game.system.toastText(this.chapterData.StarNotEnoughToast);
                    else  {
                        let s2c = await Game.sender.section.getReward(data.Id,data.rewardLevel3);
                        this.m_reward3.m_rewardState.setSelectedIndex(EnumChapterRewardState.Recieved);
                        if(!s2c.error)
                        {
                            let itemList = this.chapterData.getRewardItemList(s2c.chapterGradeId);
                            this.RefreshRed();
                            (<SectionWindowUI>this.parent).RefreshRed();
                        }
                    }
                }
                break;
            default:
                break;
        }
    }

    clear()
    {
        this.currentChapterIndex = void 0;
        
    }
}