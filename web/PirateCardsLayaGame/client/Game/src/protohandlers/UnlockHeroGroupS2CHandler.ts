import UnlockHeroGroupS2C = proto.UnlockHeroGroupS2C;
import Game from "../Game";
var UnlockHeroGroupS2CHandler = function(msg: UnlockHeroGroupS2C)
{
    let model = Game.moduleModel.battlePlan;
    console.log(msg);
    if(!model)
    {
        console.error("未注册备战系统对应的model实例");
    }
    model.AddHeroGroup(msg.heroGroup);
}            
export {UnlockHeroGroupS2CHandler}
