import BuyFatigueS2C = proto.BuyFatigueS2C;
import Game from "../Game";
var BuyFatigueS2CHandler = function(msg: BuyFatigueS2C)
{
    if (msg.error) 
        return;

    let config = Game.config.power.getConfig(msg.goodId);
    if (config) 
    {
        switch (config.id) 
        {
            case 1:
                let times = Game.moduleModel.power.GetBuyTimes(msg.goodId);
                Game.system.toastText(`购买成功，获得${config.addPower[times-1]}体力`);
                break;
            default:
                Game.system.toastText(`使用成功，获得${config.addPower[0]}体力`);
                break;
        }    
    }
}            
export {BuyFatigueS2CHandler}
