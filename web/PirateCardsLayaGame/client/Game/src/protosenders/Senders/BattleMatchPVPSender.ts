import Game from "../../Game";
import { War } from "../../GameWar/Logic/War";
import UserData from "../../GameModule/DataStructs/UserData";
import { EnumOverType } from "../../GameWar/Logic/Enum/EnumOverType";

export default class BattleMatchPVPSender 
{
    
    /**
     * 开始游戏
     */
    async pvpStart()
    {
        // console.log("pvpStart");
        // this.opIndex = 1;
        // let inpute = new proto.PVPInput();
        // inpute.id  = CGameTable.Get().MyPlayerID;
        // inpute.pos = CGameTable.Get().MyPlayerPos;

        // let s2c = await  Game.net.AsyncGamerPVPSyncC2S(CGameTable.Get().TableSession, inpute, null, null, null, true, false, this.opIndex ++, null, null);
        // if(s2c.error)
        // {
        //     console.error("pvpStart:", s2c.error);
        //     return;
        // } 
    }


    
    /**
     * 断线重链，请求协议
     * 
     */
    async pvpRequestCacheFrame(input: proto.PVPInput, session: string, index:int,  needFrames: int[])
    {

        
        Game.net.GamerPVPSyncC2S(
            session, // session: string, 
            input, // input: PVPInput, 
            needFrames, // needFrames: number[],
            null, //crc: number[], 
            null, //inputs: PVPInput[], 
            true, //reconn: boolean, 
            false, //exit: boolean, 
            index, //index: number, 
            null, //gateAddr: string, 
            null, //result: PVPResult, 
            null, //recvTime: number, 
            null, //clientAddr: string
            );
    }

    /**
     * 同步操作
     * 
     */
    async pvpSync(input: proto.PVPInput, session: string, index:int)
    {
        
        Game.net.GamerPVPSyncC2S(
            session, // session: string, 
            input, // input: PVPInput, 
            null, // needFrames: number[],
            null, //crc: number[], 
            null, //inputs: PVPInput[], 
            false, //reconn: boolean, 
            false, //exit: boolean, 
            index, //index: number, 
            null, //gateAddr: string, 
            null, //result: PVPResult, 
            null, //recvTime: number, 
            null, //clientAddr: string
            );

    }

    /**
     * 发送结果
     * 
     */
    async pvpResult(result:proto.PVPResult)
    {

        let input = new proto.PVPInput();
		input.id  = Game.user.id;
        input.pos = War.launcherParameter.selfPos;

        
        let s2c = await  Game.net.AsyncGamerPVPSyncC2S(
            War.launcherParameter.matchInfo.session, // session: string, 
            input, // input: PVPInput, 
            null, // needFrames: number[],
            null, //crc: number[], 
            null, //inputs: PVPInput[], 
            false, //reconn: boolean, 
            false, //exit: boolean, 
            0, //index: number, 
            null, //gateAddr: string, 
            result, //result: PVPResult, 
            null, //recvTime: number, 
            null, //clientAddr: string
            );
        
        if(s2c.error)
        {
            // console.error("pvpResule:", s2c.error);
            return;
        } 
    }

    
    /**
     * 退出游戏
     * 
     */
    async pvpExit()
    {
        let input = new proto.PVPInput();
		input.id  = Game.user.id;
        input.pos = War.launcherParameter.selfPos;

        
        let s2c = await  Game.net.AsyncGamerPVPSyncC2S(
            War.launcherParameter.matchInfo.session, // session: string, 
            input, // input: PVPInput, 
            null, // needFrames: number[],
            null, //crc: number[], 
            null, //inputs: PVPInput[], 
            false, //reconn: boolean, 
            true, //exit: boolean, 
            0, //index: number, 
            null, //gateAddr: string, 
            null, //result: PVPResult, 
            null, //recvTime: number, 
            null, //clientAddr: string
            );
        
        if(s2c.error)
        {
            // console.error("pvpResule:", s2c.error);
            return;
        } 
        
       
    }

    async pveM_1Result(checkPoint : number, battleTime : number, heroList : proto.HeroStatus[], reserve? : string[])
    {
        await Game.net.GamerSettlePVEC2S(checkPoint,
            battleTime, 
            heroList, 
            reserve
            );
        // if(s2c)
        // {
        //     return;
        // }
    }


}