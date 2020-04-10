/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SwitchChapterStruct from "../../Generates/GameSectionsUI/SwitchChapterStruct";
import Game from '../../../Game';

export default class SwitchChapter extends SwitchChapterStruct
{
    refreshButtons(chapterIndex: int, chapterLength: number = 1)
    {
        this.m_left.visible = chapterIndex > 0;
        this.m_right.visible = chapterIndex < chapterLength -1;
    }
}