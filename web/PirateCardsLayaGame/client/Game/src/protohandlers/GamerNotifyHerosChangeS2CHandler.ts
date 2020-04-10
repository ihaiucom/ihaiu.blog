import GamerNotifyHerosChangeS2C = proto.GamerNotifyHerosChangeS2C;
import Game from "../Game";
var GamerNotifyHerosChangeS2CHandler = function(msg: GamerNotifyHerosChangeS2C)
{
    if(0 == msg.error) {
        let heroList = msg.heroList;
        if(heroList)
            Game.moduleModel.hero.OnNotification(heroList);
    }
}            
export {GamerNotifyHerosChangeS2CHandler}
