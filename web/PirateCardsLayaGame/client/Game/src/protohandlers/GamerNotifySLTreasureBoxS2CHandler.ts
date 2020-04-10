import Game from '../Game';
import GamerNotifySLTreasureBoxS2C = proto.GamerNotifySLTreasureBoxS2C;
var GamerNotifySLTreasureBoxS2CHandler = function(msg: GamerNotifySLTreasureBoxS2C)
{
    if(!msg.error)
    {
        Game.moduleModel.secretLand.SetTreasureBox(msg);
    }
}            
export {GamerNotifySLTreasureBoxS2CHandler}
