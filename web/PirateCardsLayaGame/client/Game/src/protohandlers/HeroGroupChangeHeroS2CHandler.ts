import HeroGroupChangeHeroS2C = proto.HeroGroupChangeHeroS2C;
import Game from "../Game";
var HeroGroupChangeHeroS2CHandler = function(msg: HeroGroupChangeHeroS2C)
{
    let model = Game.moduleModel.battlePlan;
    if(!model)
    {
        console.error("未注册备战系统对应的model实例");
    }
    model.ChangeHero(msg.heroGroupId, msg.pos, msg.heroId);
}            
export {HeroGroupChangeHeroS2CHandler}
