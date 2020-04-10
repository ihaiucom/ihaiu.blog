/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import QuestWindowUIStruct from "../../Generates/ModuleQuest/QuestWindowUIStruct";
import QuestWindow from "../../../GameModule/ViewWindows/QuestWindow";
import { MenuId } from "../../../GameModule/MenuId";
import ViewButton from "./ViewButton";
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import Game from "../../../Game";

export default class QuestWindowUI extends QuestWindowUIStruct
{
    /** 窗口 */
    moduleWindow: QuestWindow;

    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_head.SetWindow(MenuId.Quest);
        this.m_listView.setItemRenderer(this.MenuRender, this);
        Game.net.gamerNotifyQuestsS2C.on(this.GamerNotifyQuestsS2C, this);

        this.Init();
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_listView.itemRenderer.clear();
        Game.net.gamerNotifyQuestsS2C.off(this.GamerNotifyQuestsS2C, this);
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 刷新任务类型列表 */
    private MenuRender(index: number, item: ViewButton)
    {
        MenuValidateRed.getInstance().openTab(MenuId.Quest * 1000 + index, null, item);
    }

    /*private----------------------EVENT事件操作-----------------------*/
    private GamerNotifyQuestsS2C()
    {
        switch (this.m_View.selectedIndex) 
        {
            case 0:
                this.OpenDaily();
                break;
            case 1:
                this.OpenGrowUp();
                break;
        }
    }

    /*private---------------------内部方法---------------------------*/
    /** 创建 */
    private Init()
    {
        this.m_listView.numItems = 2;
    }

    /*public---------------------外部接口---------------------------*/
    /** 刷新红点 */
    public RefreshRed()
    {
        this.Init();
    }

    /** 打开成长任务 */
    public OpenGrowUp()
    {
        this.m_growUpView.Open();
    }

    /** 打开日常活跃 */
    public OpenDaily()
    {
        this.m_dailyView.Open();
    }
}