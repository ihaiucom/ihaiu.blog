import Game from "../../Game";
import { EquipStarUpItemType } from "../../GameModule/DataEnums/EquipType";

export default class EquipSender
{
    // 装备升星
    async EquipUpStar(heroID: number, uid: int, type: EquipStarUpItemType, uids: Array<int>)
    {
        let s2c = await Game.net.AsyncUpStarEquipC2S(heroID, uid, type, uids);
        if(s2c.error)
        {
            return;
        }
    }

    // 装备强化
    async EquipStrengthen(heroID: number, uid: int, uids: Array<int>)
    {
        let s2c = await Game.net.AsyncEatEquipsC2S(heroID, uid, uids);
        if(s2c.error)
        {
            return;
        }
    }
}