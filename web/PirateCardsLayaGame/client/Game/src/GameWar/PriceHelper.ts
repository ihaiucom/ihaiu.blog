import { HeroType } from "./HeroType";
import PriceConsts from "./PriceConsts";

export default class PriceHelper
{
    static getHeroPrice(heroType)
    {
        switch (heroType) 
        {
            case HeroType.Key:
                return PriceConsts.HeroKey;
            case HeroType.Gun:
                return PriceConsts.HeroGun;
            case HeroType.Bomb:
                return PriceConsts.HeroBomb;
            default:
                throw new Error("Not implemented yet")
        }
    }
}