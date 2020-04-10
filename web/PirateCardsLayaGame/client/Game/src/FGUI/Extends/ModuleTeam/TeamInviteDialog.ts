/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TeamInviteDialogStruct from "../../Generates/ModuleTeam/TeamInviteDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import Game from "../../../Game";
import InviteType = proto.InviteType;

export default class TeamInviteDialog extends TeamInviteDialogStruct
{
    private dialogCtrl: DialogCtrl;

    private teamId:number;

    private inviteId:number;

    /*----------------------默认视图接口---------------------------*/
    /** 视图实例化完成 */
    protected constructFromXML(xml: any): void  
    {
        super.constructFromXML(xml);

        this.dialogCtrl = new DialogCtrl().init(this);
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_btnClose.onClick(this, this.DialogClose);
        this.m_btnReceive.onClick(this, this.TeamReceive);
        this.m_btnRefuse.onClick(this, this.TeamRefuse);
        this.m_btnWait.onClick(this, this.TeamWait);

    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
       
        this.m_btnClose.offClick(this, this.DialogClose);

        this.Reset()
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 关闭弹框 */
    private DialogClose():void
    {
        this.close();
    }

    /** 接受邀请 */
    private TeamReceive()
    {
        this.close();

        let hero = Game.moduleModel.hero.GetRandomData();
        if (!hero) {
            Game.system.toastText("请获取英雄！");
            return;
        }
        Game.sender.team.TeamJoin(this.teamId, hero);
    }

    /** 拒绝邀请 */
    private TeamRefuse()
    {
        this.close();

        Game.sender.team.TeamReject(this.teamId, this.inviteId, InviteType.Reject);
    }

    /** 等待邀请 */
    private TeamWait()
    {
        this.close();

        Game.sender.team.TeamReject(this.teamId, this.inviteId, InviteType.Wait);
    }

    /*private----------------------EVENT事件操作-----------------------*/

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset():void
    {
        this.teamId   = null;
        this.inviteId = null;
        this.m_labInvite.text = "";
    }


    /*public----------------------外部接口---------------------------*/
    /** 打开弹框 */
    open(teamId:number, inviteId:number): void 
    {
        this.dialogCtrl.open();

        this.teamId   = teamId;
        this.inviteId = inviteId;
        this.m_labInvite.text = `是否接受玩家${inviteId}的邀请？`
    }

    /** 关闭弹框 */
    close(): void 
    {
        this.dialogCtrl.close();
    }
}