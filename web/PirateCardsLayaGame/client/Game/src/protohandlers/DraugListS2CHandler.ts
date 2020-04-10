import DraugListS2C = proto.DraugListS2C;
import Game from "../Game";
var DraugListS2CHandler = function(msg: DraugListS2C)
{
    if (msg.error) 
        return;
    
    // 获取到战魂列表
    let model = Game.moduleModel.draug;
    model.SetDraugDict(msg.draugList);
    model.SetAwakenLevel(msg.awakenLevel);
    model.SetSelectHero(msg.selectHeroId);
    model.SetAwakenList(msg.tempAreaDraugList);
}            
export {DraugListS2CHandler}
