import DraugSelectHeroS2C = proto.DraugSelectHeroS2C;
import Game from "../Game";
var DraugSelectHeroS2CHandler = function(msg: DraugSelectHeroS2C)
{
    // 战魂英雄选择
    let model = Game.moduleModel.draug;
    model.SetSelectHero(msg.selectHeroId);
}            
export {DraugSelectHeroS2CHandler}
