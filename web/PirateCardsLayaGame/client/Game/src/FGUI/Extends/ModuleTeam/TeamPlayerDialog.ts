/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TeamPlayerDialogStruct from "../../Generates/ModuleTeam/TeamPlayerDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import Teamer = proto.Teamer;
import Game from "../../../Game";

export default class TeamPlayerDialog extends TeamPlayerDialogStruct
{
    private dialogCtrl: DialogCtrl;

    /** 玩家数据 */
    private teamer:Teamer;

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
        this.m_btnSee.onClick(this, this.TeamerSee);
        this.m_btnFriend.onClick(this, this.TeamerFriend);
        this.m_btnChate.onClick(this, this.TeamerChate);
        this.m_btnLeader.onClick(this, this.TeamerLeader);
        this.m_btnClose.onClick(this, this.DialogClose);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_btnSee.offClick(this, this.TeamerSee);
        this.m_btnFriend.offClick(this, this.TeamerFriend);
        this.m_btnChate.offClick(this, this.TeamerChate);
        this.m_btnLeader.offClick(this, this.TeamerLeader);
        this.m_btnClose.offClick(this, this.DialogClose);

        this.Reset()
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 查看信息 */
    private TeamerSee()
    {
        Game.system.toastText("暂未开放！")
    }

    /** 添加好友 */
    private TeamerFriend()
    {
        Game.system.toastText("暂未开放！")
    }

    /** 私聊 */
    private TeamerChate()
    {
        Game.system.toastText("暂未开放！")
    }
    
    /** 转让队长 */
    private TeamerLeader()
    {
        if (Game.moduleModel.team.IsSecretLand()) 
        {
            let request  = Game.moduleModel.team.GetTeamer().secretLand.keyStone;
            let keystone = this.teamer.secretLand.keyStone;
            if (keystone < request - 5) 
            {
                Game.system.toastText("无法转让，转让后会存在队员钥匙层数低于队长5层！")
                return;
            }    
        }

        let leaderid = this.teamer.gamer.id;
        Game.sender.team.TeamTurnLeader(leaderid);
    }

    /** 关闭弹框 */
    private DialogClose():void
    {
        this.close();
    }

    /*private----------------------EVENT事件操作-----------------------*/

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset():void
    {
        this.teamer = null;
    }


    /*public----------------------外部接口---------------------------*/
    /** 打开弹框 */
    open(teamer:Teamer): void 
    {
        this.dialogCtrl.open();

        this.m_labName.text  = teamer.gamer.name;
        this.m_labLevel.text = String(teamer.gamer.level);
        // this.m_labGroup.text = String(teamer.gamer.id);

        let portraitCfg  = Game.config.avatar.getConfig(teamer.gamer.avatar);
        if (!portraitCfg) portraitCfg = Game.config.avatar.getConfig(1001);
        this.m_player.icon = portraitCfg.iconUrl;

        this.teamer = teamer;
    }

    /** 关闭弹框 */
    close(): void 
    {
        this.dialogCtrl.close();
    }
}