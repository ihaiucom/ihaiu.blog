/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TeamWindowUIStruct from "../../Generates/ModuleTeam/TeamWindowUIStruct";
import TeamWindow from "../../../GameModule/ViewWindows/TeamWindow";
import { MenuId } from "../../../GameModule/MenuId";
import Game from "../../../Game";

export default class TeamWindowUI extends TeamWindowUIStruct
{
    /** 窗口 */
    moduleWindow: TeamWindow;


    /*----------------------默认视图接口---------------------------*/
    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        Game.event.add("WINDOW_CLOSE", this.Exite, this);
       

        this.m_head.SetWindow(MenuId.Team);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        Game.event.remove("WINDOW_CLOSE", this.Exite, this);
    }

    /*private----------------------EVENT事件操作-----------------------*/
   

    /*public----------------------内部接口---------------------------*/
    /** 退出组队 */
    private Exite()
    {
        if(Game.moduleModel.team.IsMatching())
        {
            return;
        }

        if (Game.moduleModel.team.GetTeam() && Game.moduleModel.team.IsOnlySelf()) 
        {
            Game.sender.team.TeamExit();
        }
        else
        {
            Game.moduleModel.team.matchCheckId = null;
        }
    }


    /*public----------------------外部接口---------------------------*/
    /** 打开组队 */
    public Open()
    {
        let params = this.moduleWindow.menuParameter.args;
        this.m_teamView.Open();
    }
    
    /** 设置目标 */
    public SetCheckPoint(checkPointId:number)
    {
        this.m_teamView.SetCheckPoint(checkPointId);
    }
}