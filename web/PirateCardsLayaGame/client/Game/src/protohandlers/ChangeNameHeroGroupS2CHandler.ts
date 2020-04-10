import ChangeNameHeroGroupS2C = proto.ChangeNameHeroGroupS2C;
import Game from "../Game";
import Log from "../GameFrame/Log/Log";
var ChangeNameHeroGroupS2CHandler = function(msg: ChangeNameHeroGroupS2C)
{
    let model = Game.moduleModel.battlePlan;
    if(!model)
    {
        Log.Error("battlePlan model 初始化不存在");
    }
    model.ChangeHeroGroupName(msg.heroGroupId, msg.name);
}            
export {ChangeNameHeroGroupS2CHandler}
