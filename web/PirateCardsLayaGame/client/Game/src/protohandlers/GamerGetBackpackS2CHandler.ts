import GamerGetBackpackS2C = proto.GamerGetBackpackS2C;
import Game from "../Game";
var GamerGetBackpackS2CHandler = function(msg: GamerGetBackpackS2C)
{
    if(!msg.error)
    {
        Game.moduleModel.bag.setProtoItemList(msg.items);
        Game.moduleModel.equip.CreateEquipList(msg.items); // 装备模块数据
    }
    // let items =  msg.items;    
    // items.forEach(item => {
    //     Game.moduleModel.bag.setItemNum(item.id, item.count,item.obtainTime);
    // });
}            
export {GamerGetBackpackS2CHandler}
