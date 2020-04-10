import MModel from "../../GameFrame/Module/MModel";
import ITeam = proto.ITeam;
import ITeamer = proto.ITeamer;
import InviteType = proto.InviteType;
import GamerStatus = proto.GamerStatus;
import TeamStatus = proto.TeamStatus;
import CheckPointType = proto.CheckPointType;
import TeamData from "../DataEnums/TeamData";
import Game from "../../Game";

export default class TeamModel extends MModel 
{
    /** 队伍数据 */
    private team:TeamData;

    /** 匹配时间 */
    public matchTime:number;

    /** 匹配状态——未创建队伍 */
    public matchStatus:boolean;

    /** 匹配目标——未创建队伍 */
    public matchCheckId:number;

    /** 队伍ID */
    get TeamId():number
    {
        return this.team.teamId;
    }

    /** 队伍层数 */
    get TeamStone():number
    {
        return this.GetLeader().secretLand.keyStone;
    }


    /** 设置队伍信息 */
    SetTeam(team:ITeam)
    {
        this.team = TeamData.Create(team);
    }

    /** 获取队伍信息 */
    GetTeam()
    {
        return this.team;
    }

    /** 清除队伍信息 */
    ClearTeam()
    {
        this.team = null;
        this.matchTime    = null;
        this.matchStatus  = null;
        this.matchCheckId = null;
    }

    /** 设置目标 */
    SetAim(aim:number)
    {
        this.team.SetAim(aim);
    }

    /** 设置状态 */
    SetStatus(status:number)
    {
        this.team.SetStatus(status);
    }

    /** 设置准备 */
    SetReady(memberId:number, isReady:boolean)
    {
        if(this.team)
        {
            let teamer = this.IsTeamer(memberId);
            if (teamer) teamer.isReady = isReady;
        }
    }

    /** 设置所有人准备状态 */
    SetAllReady(isReady:boolean)
    {
        if (this.team) 
        {
            let memberList = this.team.memberList;
            for (let i = 0, len = memberList.length; i < len; i++) 
            {
                let member = memberList[i];
                member.isReady = isReady;
            }
        }
    }

    /** 设置队长 */
    SetLeader(leaderGid:number)
    {
        this.team.SetLeader(leaderGid)
    }

    /** 设置成员 */
    SetMembers(teamer:ITeamer)
    {
        this.team.SetMembers(teamer)
    }

    /** 更新被邀请人 */
    SetInviter(inviterGid:number, type:InviteType, inviteTime:number)
    {
        if(this.team)
        {
            let teamer = this.GetTeamer();
            let invitelist = teamer.lastInviteList;
            for (let i = 0, len = invitelist.length; i < len; i++) 
            {
                let inviter = invitelist[i];
                if (inviter.gid == inviterGid) 
                {
                    inviter.type = type;
                    inviter.timeStamp = inviteTime;
                    break;
                }
            }
        }
    }

    /** 获取玩家自己的teamer */
    GetTeamer()
    {
        return this.IsTeamer(Game.user.id);
    } 

    /** 获取队长的teamer */
    GetLeader()
    {
        return this.IsTeamer(this.team.leaderGid);
    }

    /** 获取队伍所有成员 */
    GetMemberList()
    {
        return this.team.memberList;
    }

    /** 是否队长 */
    IsLeader(id?:number)
    {
        if (!this.team) 
            return false;

        return this.team.leaderGid == (id ? id : Game.user.id);
    }

    /** 是否队伍成员 */
    IsTeamer(id:number)
    {
        if (this.team) 
        {
            let memberList = this.team.memberList;
            for (let i = 0, len = memberList.length; i < len; i++) 
            {
                let member = memberList[i];
                if (member.gamer.id == id) 
                {
                    return member;
                }
            }
        }
        else
        {
            return null;
        }
    } 

    /** 是否已邀请 */
    IsInviter(id:number)
    {
        if(this.team)
        {
            let teamer = this.GetTeamer();
            let invitelist = teamer.lastInviteList;
            for (let i = 0, len = invitelist.length; i < len; i++) 
            {
                let inviter = invitelist[i];
                if (inviter.gid == id) 
                {
                    return inviter;
                }
            }
        }
        else
        {
            return null;
        }
    }

    /** 是否只有自己 */
    IsOnlySelf()
    {
        return this.team.memberList.length == 1;
    }

    /** 是否满员 */
    IsFull()
    {
        return this.team.memberList.length == 4;
    }

    /** 是否准备 */
    IsReady()
    {
        if (this.team) 
        {
            let memberlist = this.team.memberList;
            for (let i = 0, len = memberlist.length; i < len; i++) 
            {
                let member = memberlist[i];
                if (member.gamer.id != this.team.leaderGid && !member.isReady) 
                {
                    return false;
                }
            }
            return true;
        }
        
        
        return false;
    }

    /** 是否匹配 */
    IsMatching()
    {
        return this.team ? this.team.status == TeamStatus.InMatching : this.matchStatus;
    }

    /** 是否在线 */
    IsOnLine()
    {
        if (this.team) 
        {
            let memberlist = this.team.memberList;
            for (let i = 0, len = memberlist.length; i < len; i++) 
            {
                let member = memberlist[i];
                if (member.gamer.state == GamerStatus.Offline) 
                {
                    return false;
                }
            }
            return true;
        }
        
        
        return false;
    }

    /** 是否是自己 */
    IsSelf(memberId:number)
    {
        return memberId == Game.user.id;
    }

    /** 成员离开 */
    LeaveMember(memberId:number)
    {
        this.team.LeaveMember(memberId);
    }

    /** 离开房间 */
    LeaveTeam()
    {   
        this.team = null;
    }

    /** 等级不足的 */
    GetNoLevel(level:number)
    {
        let text = ""
        if (this.team) 
        {
            let memberlist = this.team.memberList;
            for (let i = 0, len = memberlist.length; i < len; i++) 
            {
                let member = memberlist[i];
                if (member.gamer.level < level) 
                {
                    text += member.gamer.name + (i != len - 1) ? "、" : "";
                }
            }
        }
        
        return text;
    }

    /** 钥匙层数不足的 */
    GetNoStone(stone:number)
    {
        let text = ""
        if (this.team) 
        {
            let memberlist = this.team.memberList;
            for (let i = 0, len = memberlist.length; i < len; i++) 
            {
                let member = memberlist[i];
                if (member.secretLand.keyStone - stone > 5) 
                {
                    text += member.gamer.name + (i != len - 1) ? "、" : "";
                }
            }
        }
        
        return text;
    }

    /** 是否大秘境 */
    IsSecretLand()
    {
        let aimid  = this.team.aim;
        let config = Game.config.checkPoint.getConfig(aimid);

        return (config.type == CheckPointType.SecretLand);
    }
}