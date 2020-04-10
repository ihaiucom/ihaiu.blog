import GamerUpStarHeroS2C = proto.GamerUpStarHeroS2C;
import Game from "../Game";
var GamerUpStarHeroS2CHandler = function(msg: GamerUpStarHeroS2C)
{
    if(msg.error == 0)
    {
        Game.moduleModel.hero.OnStarUp(msg)
    }
}            
export {GamerUpStarHeroS2CHandler}
