import { CardScoreType } from "../Enums/CardScoreType";
import ArrayUtils from "./ArrayUtils";

export default class CardScoreTypeHelper
{
    // 开宝箱的牌
    static itemsFromChest = [CardScoreType.Bomb, CardScoreType.Poison, CardScoreType.Horseshoe, CardScoreType.Lightning, CardScoreType.Multiplier, CardScoreType.Skull];
    // 开木桶的牌
    static itemsFromBarrel = [CardScoreType.Health, CardScoreType.Gold, CardScoreType.Armor, CardScoreType.Cannon];
    // 好的牌
    static powerUps = [CardScoreType.Health, CardScoreType.Armor, CardScoreType.Cannon, CardScoreType.Barrel, CardScoreType.Gold];

    // 是否是减分的卡牌
    static isCardScoreTypeNegative(cardScoreType:CardScoreType)
    {
        return cardScoreType == CardScoreType.Trap || 
        cardScoreType == CardScoreType.Boss || 
        cardScoreType == CardScoreType.Enemy || 
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


    // 随机宝箱里的卡牌
    static getRandomFromChest()
    {
        return ArrayUtils.getRandomItem(this.itemsFromChest)
    }

    
    // 随机木桶里的卡牌
    static getRandomPowerUpFromBarrel()
    {
        return ArrayUtils.getRandomItem(this.itemsFromBarrel)
    }

    // 随机好的牌
    static getRandomPowerUp()
    {
        return ArrayUtils.getRandomItem(this.powerUps)
    }
}

