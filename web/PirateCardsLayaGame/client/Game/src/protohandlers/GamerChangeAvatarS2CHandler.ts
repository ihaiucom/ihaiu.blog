import Game from '../Game';
import GamerChangeAvatarS2C = proto.GamerChangeAvatarS2C;
var GamerChangeAvatarS2CHandler = function(msg: GamerChangeAvatarS2C)
{
    if(!msg.error)
    {
        Game.user.avatar = msg.Avatar;
    }
}            
export {GamerChangeAvatarS2CHandler}
