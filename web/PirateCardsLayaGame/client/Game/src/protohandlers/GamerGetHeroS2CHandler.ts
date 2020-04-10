import GamerGetHeroS2C = proto.GamerGetHeroS2C;
import Game from "../Game";
var GamerGetHeroS2CHandler = function(msg: GamerGetHeroS2C)
{
    if(msg.error == 0)
    {
        let heroList = msg.heroList;
        if(heroList)
        {
            for(let hero of heroList)
            {
                Game.moduleModel.hero.CreateHero(hero)
            }
        }
        
        Game.moduleModel.hero.teamSelectHeroId = msg.teamSelectHeroId;
    }
}            
export {GamerGetHeroS2CHandler}
