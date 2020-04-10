import GamerUpHeroSkillS2C = proto.GamerUpHeroSkillS2C;
import Game from "../Game";
var GamerUpHeroSkillS2CHandler = function(msg: GamerUpHeroSkillS2C)
{
    if(msg.error == 0)
    {
        Game.moduleModel.hero.OnSkillLevelUp(msg);
    }
}            
export {GamerUpHeroSkillS2CHandler}
