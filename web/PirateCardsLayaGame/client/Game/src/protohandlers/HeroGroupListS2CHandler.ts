import HeroGroupListS2C = proto.HeroGroupListS2C;
import Game from "../Game";
import { MenuId } from "../GameModule/MenuId";
var HeroGroupListS2CHandler = function(msg: HeroGroupListS2C)
{
    let model = Game.moduleModel.battlePlan;
    console.log("recv");
    if(!model)
    {
        console.error("未注册备战系统对应的model实例");
    }
    model.SetHeroGroupDict(msg.heroGroupList);
}            
export {HeroGroupListS2CHandler}
