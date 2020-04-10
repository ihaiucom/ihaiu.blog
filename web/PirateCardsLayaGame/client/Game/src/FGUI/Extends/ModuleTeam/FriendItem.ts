/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FriendItemStruct from "../../Generates/ModuleTeam/FriendItemStruct";
import Game from "../../../Game";
import InviteType = proto.InviteType;
import InviteTeamS2C = proto.InviteTeamS2C;

export default class FriendItem extends FriendItemStruct
{
    DataSource:any;

    /*----------------------默认视图接口---------------------------*/
    /** 初始化视图 */
    protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        this.m_btnInvite.onClick(this, this.FriendInvite);
        Game.event.add("FINISH_CD", this.FinishCd, this);
    }

    /** 销毁视图 */
    public dispose()
    {
        this.m_btnInvite.offClick(this, this.FriendInvite);
        Game.event.remove("FINISH_CD", this.FinishCd, this);
        this.Reset();
        super.dispose();
    }
    /*private----------------------UI事件操作---------------------------*/
    /** 好友/军团邀请 */
    private FriendInvite()
    {
        if (this.m_State.selectedIndex != 0) 
        {
            Game.system.toastText("无法邀请！")
            return;    
        }

       let data  = this.DataSource;

       let model = Game.moduleModel.team;
       Game.sender.team.TeamInvite(data.id);
    }

    /*private----------------------EVENT事件操作-----------------------*/
    private FinishCd()
    {
        if (this.m_State.selectedIndex != 0) 
        {
            this.m_State.selectedIndex = 0;
        }
    }

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.DataSource = null;
    }

    /** 设置好友信息 */
    private SetFriendInfo()
    {
        let data   = this.DataSource;

        this.m_labLv.text   = String(data.level);
        this.m_labName.text = data.name;
    }

    /** 设置邀请信息 */
    private SetInviteInfo()
    {
        let data   = this.DataSource;

        let model  = Game.moduleModel.team;

        let teamer  = model.IsTeamer(data.id);
        let inviter = model.IsInviter(data.id);
        if (teamer) 
        {
            this.m_State.selectedIndex = 1;    
        }
        else if (inviter && inviter.type == InviteType.Reject)
        {
            this.m_State.selectedIndex = 2;  
            
            let time = inviter.timeStamp + 60 - Game.time.serverSeconds - 1;
            if (time > 0) 
            {
                this.m_btnInvite.SetTime(time)
            }
            else
            {
                this.FinishCd();
            }
        }
        else
        {
            this.m_State.selectedIndex = 0;    
        }
    }

    /*public----------------------外部接口---------------------------*/
    /** 渲染Item */
    public RenderItem(datasouce:any)
    {
        this.DataSource = datasouce;

        this.SetFriendInfo();
        this.SetInviteInfo();
    }
}