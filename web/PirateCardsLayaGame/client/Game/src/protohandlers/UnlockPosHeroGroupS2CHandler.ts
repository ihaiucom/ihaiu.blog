import UnlockPosHeroGroupS2C = proto.UnlockPosHeroGroupS2C;
import Game from "../Game";
var UnlockPosHeroGroupS2CHandler = function(msg: UnlockPosHeroGroupS2C)
{
    let model = Game.moduleModel.battlePlan;
    if(!model)
    {
        console.error("未注册备战系统对应的model实例");
    }
    model.UnlockHeroGroupPos(msg.heroGroupId, msg.pos);
}            
export {UnlockPosHeroGroupS2CHandler}
