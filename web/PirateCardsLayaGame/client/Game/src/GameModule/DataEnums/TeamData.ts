import Team = proto.Team;
import ITeam = proto.ITeam;
import ITeamer = proto.ITeamer;
import PVPType = proto.PVPType;
import CheckPointConfig from "../../Config/ConfigExtends/CheckPointConfig";
import Game from "../../Game";
import GameEventKey from "../../GameEventKey";
    
export default class TeamData extends Team 
{
    private config:CheckPointConfig;

    /**
     * 生成队伍数据
     * @param team 
     */
    static Create(team:ITeam):TeamData
    {
        let data = new TeamData();
        data.teamId  = team.teamId;
        data.aim = team.aim;
        data.leaderGid = team.leaderGid;
        data.lastInviteWolrd = team.lastInviteWolrd;
        data.name = team.name;
        data.pvpType = team.pvpType;
        data.status = team.status;
        data.memberList   = team.memberList;

        if (data.aim) {
            data.config = Game.config.checkPoint.getConfig(data.aim);
        }
        
        return data;
    }

    /** 设置目标 */
    SetAim(aim:number)
    {
        this.aim = aim;
        if (aim) {
            this.config = Game.config.checkPoint.getConfig(aim);
        }
    }

    /** 设置状态 */
    SetStatus(status:number)
    {
        this.status = status;
    }

    // /** 设置准备 */
    // SetReady(isReady:boolean)
    // {
    //     this.
    // }

    /** 设置队长 */
    SetLeader(leaderGid:number)
    {
        this.leaderGid = leaderGid;
    }

    /** 设置成员 */
    SetMembers(teamer:ITeamer)
    {
        let memberlist = this.memberList;
        for (let i = 0, len = memberlist.length; i < len; i++) 
        {
            let member = memberlist[i];
            if (member.gamer.id == teamer.gamer.id) 
            {
                memberlist.splice(i, 1, teamer);
                Game.event.dispatch(GameEventKey.GameFrame_TeamMemberNetStateChange, teamer.gamer.id, teamer.gamer.state);
                return;
            }
        }
        memberlist.push(teamer);
    }

    /** 成员离开 */
    LeaveMember(memberId:number)
    {
        if (!memberId) 
        {
            return;    
        }

        let memberlist = this.memberList;
        for (let i = 0, len = memberlist.length; i < len; i++) 
        {
            let member = memberlist[i];
            if (member.gamer.id == memberId) 
            {
                memberlist.splice(i, 1);
                Game.event.dispatch(GameEventKey.GameFrame_TeamMemberLeave, member.gamer.id);
                break;
            }
        }
    }

    /**匹配类型 */
    GetPvPType():number
    {
        let limit = this.config.teamLimit;
        switch (limit) {
            case 2:
                return PVPType.PVE_M2;
            case 3:
                return PVPType.PVE_M3;
            case 4:
                return PVPType.PVE_M4;
            default:
                return PVPType.MINVALID;
        }  
    }

}