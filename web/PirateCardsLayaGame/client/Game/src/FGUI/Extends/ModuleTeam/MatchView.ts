/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MatchViewStruct from "../../Generates/ModuleTeam/MatchViewStruct";
import TeamData from "../../../GameModule/DataEnums/TeamData";
import Game from "../../../Game";
import TimeHelper from "../../../GameHelpers/TimeHelper";

export default class MatchView extends MatchViewStruct
{
    /** 房间信息 */
    teamData:TeamData;

    private time:number;

    /*----------------------默认视图接口---------------------------*/
    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
       this.m_btnCancle.onClick(this, this.TeamCancel);

        this.Init()
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_btnCancle.onClick(this, this.TeamCancel);

        this.Reset();
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 取消组队 */
    private TeamCancel()
    {
        Game.sender.team.TeamCancelMatch();
    }

    /*private---------------------内部方法---------------------------*/
    /** 创建 */
    private Init()
    {
        this.time = 0;
    }

    /** 重置 */
    private Reset()
    {
        this.teamData       = null;
        this.time           = 0;
        this.m_labAim.text  = "无";
        this.m_labTime.text = "00:00:00";
    }

    /** 刷新计时 */
    private UpdateTime()
    {
        this.time++;
        this.m_labTime.text = TimeHelper.TimeFormatFixedHHMMSS(this.time);
    }

    /*public----------------------外部接口---------------------------*/
    /** 开启界面 */
    public Open(): void
    {
        let model = Game.moduleModel.team;

        let team  = model.GetTeam();
        let text = ["精英关卡1","精英关卡2","精英关卡3","精英关卡4","魔王张辽","魔王曹操","魔王孙权","魔王颜良"]
        let aim = text[team.aim - 1];
        this.m_labAim.text = aim;

        this.teamData = team;

        Laya.timer.loop(1000, this, this.UpdateTime);
    }

    /** 关闭界面 */
    public Close(): void
    {
        this.Reset();

        Laya.timer.clear(this, this.UpdateTime);
    }
}