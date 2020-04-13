import { CardScoreType } from "./CardScoreType";
import ArrayUtils from "../ArrayUtils";

export default class CardScoreTypeHelper
{
    
    static itemsFromChest = [CardScoreType.Bomb, CardScoreType.Poison, CardScoreType.Horseshoe, CardScoreType.Lightning, CardScoreType.Multiplier, CardScoreType.Skull];
    static itemsFromBarrel = [CardScoreType.Health, CardScoreType.Gold, CardScoreType.Armor, CardScoreType.Cannon];
    static powerUps = [CardScoreType.Health, CardScoreType.Armor, CardScoreType.Cannon, CardScoreType.Barrel, CardScoreType.Gold];

    // 是否是减分的卡牌
    static isCardScoreTypeNegative(cardScoreType:CardScoreType)
    {
        return cardScoreType == CardScoreType.Trap || 
        cardScoreType == CardScoreType.Warrior || 
        cardScoreType == CardScoreType.Poison;
    }
    
    // 是否是加分的卡牌
    static isCardScoreTypePositive(cardScoreType:CardScoreType)
    {
        return cardScoreType == CardScoreType.Health || 
        cardScoreType == CardScoreType.Armor || 
        cardScoreType == CardScoreType.Cannon || 
        cardScoreType == CardScoreType.Horseshoe || 
        cardScoreType == CardScoreType.Lightning || 
        cardScoreType == CardScoreType.Skull;
    }


    static getRandomFromChest()
    {
        return ArrayUtils.getRandomItem(this.itemsFromChest)
    }

    
    static getRandomPowerUpFromBarrel()
    {
        return ArrayUtils.getRandomItem(this.itemsFromBarrel)
    }

    
    static getRandomPowerUp()
    {
        return ArrayUtils.getRandomItem(this.powerUps)
    }
}

