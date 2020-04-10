import Game from "../../Game";
import { War } from "../../GameWar/Logic/War";
// import CGameTable from "../../../../JJSG/testPK/CGameTable";
// import JJSGRuntime from "../../../../JJSG/JJSGRuntime";

export default class BattleMatchSender 
{
    opIndex = 0;
    enableCancel: boolean  = true;
    /**
     * 开始匹配
     */
    async matchStart(type: number, hero: number, groupId : number, checkpointId?: number)
    {
        this.enableCancel = true;
        // if(!(hero instanceof Array))
        // {
        //     hero = [hero];
        // } 
        let s2c = await Game.net.AsyncGamerMatchC2S(type,hero, null ,checkpointId,null, groupId, null, null);
        
        this.enableCancel = false;
        setTimeout(() => 
        {
            this.enableCancel = true;
        }, 1000);
        
        if(s2c.error)
        {
            return  false;
        }
        return true; 
    }

    /**
     * 取消匹配
     */
    async matchCancel()
    {
        if(!this.enableCancel)
        {
            return;
        }
        let s2c = await  Game.net.AsyncGamerCancelMatchC2S();
        if(s2c.error)
        {
            return;
        } 
    }

    /**
     * 开始准备
     * @param roomId 
     */
    async changeReady(roomId: number)
    {
        let s2c = await  Game.net.AsyncGamerChangeReadyInRoomC2S(roomId);
        if(s2c.error)
        {
            return;
        } 
    }

    /**
     * 创建新房间
     * @param type 
     * @param hero 
     * @param name 
     */
    async newRoom(type: proto.PVPType, hero: number, name: string)
    {
        let s2c = await Game.net.AsyncGamerNewRoomC2S(type, hero, name);
        if(s2c.error)
        {
            return;
        } 
    }

    /**
     * 加入房间
     * @param roomId 
     * @param hero 
     */
    async addRoom(roomId: number, hero: number)
    {
        let s2c = await Game.net.AsyncGamerAddRoomC2S(roomId, hero);
        if(s2c.error)
        {
            return;
        } 
    }

    /**
     * 离开房间
     * @param roomId 
     */
    async leavelRoom(roomId: number)
    {
        let s2c = await Game.net.AsyncGamerLeaveRoomC2S(roomId);
        if(s2c.error)
        {
            return;
        }
    }

    /**
     * 获取房间列表
     */
    async getRoomList()
    {
        let s2c = await Game.net.AsyncRoomListC2S();
        if(s2c.error)
        {
            return;
        } 
    }

    /**
     * 发送加载进度
     */
    async pvpLoading(per: number)
    {
        let s2c = await Game.net.AsyncGamerPVPLoadingC2S(War.launcherParameter.matchInfo.session, per);
        if(s2c.error)
        {
            return;
        } 
    }
}