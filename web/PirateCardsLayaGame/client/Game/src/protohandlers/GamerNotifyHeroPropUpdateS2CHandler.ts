import GamerNotifyHeroPropUpdateS2C = proto.GamerNotifyHeroPropUpdateS2C;
import Game from "../Game";
import GameEventKey from "../GameEventKey";
var GamerNotifyHeroPropUpdateS2CHandler = function(msg: GamerNotifyHeroPropUpdateS2C)
{
    if(0 == msg.error)
    {
        Game.moduleModel.hero.UpdateData(msg.hero);
        Game.event.dispatch(GameEventKey.GameFrame_UpdateProp, msg.hero.id);
    }
}            
export {GamerNotifyHeroPropUpdateS2CHandler}
