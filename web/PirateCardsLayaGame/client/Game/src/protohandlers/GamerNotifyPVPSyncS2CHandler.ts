import GamerNotifyPVPSyncS2C = proto.GamerNotifyPVPSyncS2C;
import Game from "../Game";
import GameEventKey from "../GameEventKey";
// import CGameTable from "../../../JJSG/testPK/CGameTable";
// import JJSGDebug from "../../../JJSG/JJSGDebug";
// import { GOW } from "../../../JJSG/gameLibs/gow/core/GOW";
// import JJSGRuntime from "../../../JJSG/JJSGRuntime";

var GamerNotifyPVPSyncS2CHandler = function(msg: GamerNotifyPVPSyncS2C)
{
    if(msg.error == 2300)
    {
        console.log("on Notification error 2300 do：") 
        // War.exit(true);
        Game.event.dispatch(GameEventKey.GameBattle_onServerError2300);
    }

    // let frames = msg.framesData;
    // if (msg.error) {
    //     console.log("同步消息错误" + msg.error)
    // } else {
    //     if(!JJSGRuntime.isBattleRuning)
    //     {
    //         console.error("匹配战斗结束，服务器还发帧消息");
    //         return;
    //     }

    //     if(!JJSGRuntime.isSyncModel)
    //     {
    //         console.error("不是同步模式的战斗，服务器还发帧消息");
    //         return;
    //     }


    //     let pvpFrames:proto.PVPFrames =  proto.PVPFrames.decode(msg.framesData);
    //     if(pvpFrames.frames.length == 1 && pvpFrames.frames[0].inputs.length > 0)
    //     {
    //         let debugHasOp = false;
    //         for(let i = 0; i < pvpFrames.frames[0].inputs.length; i ++)
    //         {
    //             let input = pvpFrames.frames[0].inputs[i];
    //             if((input.cmds != null && input.cmds.length != 0) || input.yaw != 0 || input.btn != 0 || input.talk != 0 )
    //             {
    //                 debugHasOp = true;
    //                 break;
    //             }
    //         }
        
    //         if(debugHasOp)
    //         {
    //             // console.info("收到帧消息: ", pvpFrames);
    //         }
    //     }


    //     if(JJSGDebug.isDebug)
    //     {
    //         JJSGDebug.frames.push(pvpFrames);
    //         JJSGDebug.framesStr += JSON.stringify(pvpFrames.frames) + "\n";
    //     }
            
            
    //     GOW.GetStepLock().OnUpdateMsgList(pvpFrames.frames);
        // CGameTable.Get().OnStepUpdate(pvpFrames.frames)
        // GOW.m_pTick.TestDoTick2();
    // }
}            
export {GamerNotifyPVPSyncS2CHandler}