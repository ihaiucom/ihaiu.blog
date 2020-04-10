/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SkillContralViewStruct from "../../Generates/GameWarUI/SkillContralViewStruct";
import Game from "../../../Game";
import { InputManager } from "../../../GameWar/Logic/Utils/InputManager";
import InputDefine from "../../../GameWar/Logic/Enum/InputDefine";

export default class SkillContralView extends SkillContralViewStruct
{

    // 窗口初始化完毕
    onWindowInited(): void
    {
        let scale = 1;
        this.setScale(scale, scale);
    }

    // 窗口显示
    onWindowShow(): void
    {
    }

    // 窗口隐藏
    onWindowHide(): void
    {
    }
}