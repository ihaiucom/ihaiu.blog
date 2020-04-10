import LockDraugS2C = proto.LockDraugS2C;
import Game from "../Game";
var LockDraugS2CHandler = function(msg: LockDraugS2C)
{
    if (msg.error) 
        return;

    // 设置战魂锁定状态
    let model = Game.moduleModel.draug;
    model.SetDraugLock(msg.draugId, msg.isLock);
}            
export {LockDraugS2CHandler}
