import GamerNewHeroS2C = proto.GamerNewHeroS2C;
import Game from "../Game";
var GamerNewHeroS2CHandler = function(msg: GamerNewHeroS2C)
{
    if(msg.error == 0)
    {
        Game.moduleModel.hero.OnAddHero(msg)
    }
}            
export {GamerNewHeroS2CHandler}
