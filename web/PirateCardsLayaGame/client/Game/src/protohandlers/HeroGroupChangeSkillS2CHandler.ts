import HeroGroupChangeSkillS2C = proto.HeroGroupChangeSkillS2C;
import Game from "../Game";
var HeroGroupChangeSkillS2CHandler = function(msg: HeroGroupChangeSkillS2C)
{
    let model = Game.moduleModel.battlePlan;
    if(!model)
    {
        console.error("未注册备战系统对应的model实例");
    }
    model.ChangeSkill(msg.heroGroupId, msg.pos, msg.skillId);
}            
export {HeroGroupChangeSkillS2CHandler}
