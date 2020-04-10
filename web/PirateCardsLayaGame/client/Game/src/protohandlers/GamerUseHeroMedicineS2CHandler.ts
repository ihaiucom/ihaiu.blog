import GamerUseHeroMedicineS2C = proto.GamerUseHeroMedicineS2C;
import Game from "../Game";
var GamerUseHeroMedicineS2CHandler = function(msg: GamerUseHeroMedicineS2C)
{
    if(msg.error == 0)
    {
        Game.moduleModel.hero.OnLevelUp(msg)
    }
    else
    {
        Game.moduleModel.hero.onLevelUpFailed();
    }
}            
export {GamerUseHeroMedicineS2CHandler}
