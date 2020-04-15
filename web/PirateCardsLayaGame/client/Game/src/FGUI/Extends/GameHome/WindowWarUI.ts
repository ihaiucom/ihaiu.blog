/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WindowWarUIStruct from "../../Generates/GameHome/WindowWarUIStruct";
import WarWindow from "../../../GameModule/ViewWindows/WarWindow";
import War from "../../../War/War";

export default class WindowWarUI extends WindowWarUIStruct
{
    // 窗口
    moduleWindow: WarWindow;

    // 窗口初始化完毕
    onWindowInited(): void
    {

    }

    // 窗口销毁
    onWindowDestory(): boolean
    {
        return false;
    }

    // 窗口即将打开，可以在这里做缓动
    onWindowWillShow()
    {

    }

    // 窗口即将关闭，可以在这里做缓动
    onWindowWillHide(): void
    {

    }

    // 窗口显示
    onWindowShow(): void
    {
        War.launch();
    }

    // 窗口隐藏
    onWindowHide(): void
    {
    }
}