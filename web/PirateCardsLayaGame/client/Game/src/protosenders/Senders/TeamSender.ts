import Game from "../../Game";
import GamerHero = proto.GamerHero;
export default class TeamSender
{
    /** 请求创建队伍 */
    async TeamMake(aim:number, hero:GamerHero)
    {
        let s2c = await Game.net.AsyncMakeTeamC2S(aim, hero.id, hero,null);
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求设置目标 */
    async TeamSetAim(aim:number)
    {
        let s2c = await Game.net.AsyncSetTeamAimC2S(aim);
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求设置助战 */
    async TeamSetHelp(isHelper:boolean)
    {
        let s2c = await Game.net.AsyncSetTeamHelpC2S(isHelper);
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求加入队伍 */
    async TeamJoin(tid:number, hero: GamerHero)
    {
        let s2c = await Game.net.AsyncJoinTeamC2S(tid, hero.id, hero,null);
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求离开队伍 */
    async TeamExit()
    {
        let s2c = await Game.net.AsyncExitTeamC2S();
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求邀请好友 */
    async TeamInvite(gid: number)
    {
        let s2c = await Game.net.AsyncInviteTeamC2S(gid);
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求拒绝邀请 */
    async TeamReject(tid:number, gid:number, type:number)
    {
        let s2c = await Game.net.AsyncRejectTeamC2S(tid, gid, type);
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求设置英雄 */
    async TeamSetHero(hero: GamerHero)
    {
        let s2c = await Game.net.AsyncSetTeamHeroC2S(hero.id, 101 ,hero);
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求踢出队友 */
    async TeamKick(gid:number)
    {
        let s2c = await Game.net.AsyncKickTeamC2S(gid);
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求自动匹配 */
    async TeamMatch(type: number, heroId:number, roomId: number, aimId:number)
    {
        let s2c = await Game.net.AsyncGamerMatchC2S(type, heroId, roomId, aimId, null, null, null, null);
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求取消自动匹配 */
    async TeamCancelMatch()
    {
        let s2c = await Game.net.AsyncGamerCancelMatchC2S();
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求开始挑战 */
    async TeamBattle()
    {
        let s2c = await Game.net.AsyncTeamBattleC2S();
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求游戏准备 */
    async TeamReady()
    {
        let s2c = await Game.net.AsyncSwitchTeamReadyC2S();
        if(s2c.error)
        {
            return;
        } 
    }

    /**
     * 转让队长
     */
    async TeamTurnLeader(leaderId:number)
    {
        let s2c = await Game.net.AsyncTurnOverTeamLeaderC2S(leaderId);
        if(s2c.error)
        {
            return;
        } 
    }
}