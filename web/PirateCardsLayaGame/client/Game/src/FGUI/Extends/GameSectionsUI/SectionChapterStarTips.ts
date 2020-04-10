/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SectionChapterStarTipsStruct from "../../Generates/GameSectionsUI/SectionChapterStarTipsStruct";
import ChapterData from '../../../GameModule/DataStructs/ChapterData';
import TEXT from '../../../Config/Keys/TEXT';
import Game from '../../../Game';
import ItemCommon from '../CommonGame/ItemCommon';
import ItemData from '../../../GameModule/DataStructs/ItemData';

export default class SectionChapterStarTips extends SectionChapterStarTipsStruct

{
    chapterData: ChapterData;
    itemList: ItemData[] = [];
    // 窗口显示
    onWindowShow(): void
    {
        this.m_list.setItemRenderer(this.renderListItem, this);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        if(this.m_list.itemRenderer)
            this.m_list.itemRenderer.recover();
    }

    
    show(chapterId: int, level: number)
    {
        
        this.chapterData = Game.moduleModel.section.getChapterDataById(chapterId);
        this.itemList = this.chapterData.getRewardItemList(level);
        this.m_background.onClick(this, this.hide);
        this.m_title.text = TEXT.ChapterStarTipTitle.format(this.chapterData.getStarByLevel(level));
        this.visible = true;
        this.m_list.numItems = this.itemList.length;
    }

    hide()
    {
        this.m_background.offClick(this, this.hide);
        this.visible = false;
    }

    renderListItem(index: number, item: ItemCommon)
    {
        let data = this.itemList[index];
        item.renderItem(data);
    }

}