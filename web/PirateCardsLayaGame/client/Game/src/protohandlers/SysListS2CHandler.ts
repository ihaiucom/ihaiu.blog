import SysListS2C = proto.SysListS2C;
import Game from "../Game";
var SysListS2CHandler = function(msg: SysListS2C)
{
    if (msg.error) 
        return;
    let model = Game.moduleModel.home;
    model.SetOpenMenuList(msg.openedSys);
}            
export {SysListS2CHandler}
