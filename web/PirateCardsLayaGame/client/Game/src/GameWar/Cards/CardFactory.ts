import Game from "../../Game";
import Basket from "./Basket";
import GameStatus from "./GameStatus";
import Hero from "./Hero";
import { CardGenerationType } from "../enums/CardGenerationType";
import { CardScoreType } from "../enums/CardScoreType";
import Card from "./Card";
import RandomHelper from "../RandomHelper";
import CardScoreTypeHelper from "../enums/CardScoreTypeHelper";
import { CardBackgroundType } from "../enums/CardBackgroundType";
import Consts from "../Consts";
import { HeroType } from "../HeroType";
import LogInfo from "./LogInfo";
import GMath from "../GMath";

export default class CardFactory
{
    game: Game;
    container;
    cardShapeFactory: CardShapeFactory;
    movesAfterLastSpecialCard = 0;

    // 血量
    healthBasket = new Basket();
    // 护甲
    armorBasket = new Basket();
    // 炸弹
    cannonBasket = new Basket();
    // 小怪
    enemyBasket = new Basket();
    // 金币
    goldBasket = new Basket();
    // 宝箱开出东西集合
    chestBasket = Basket.AfterChestBasket();

    constructor(game: Game, container)
    {
        this.game = game;
        this.container = container;
        this.cardShapeFactory = new CardShapeFactory(game, container);
    }

    getDefault()
    {
        var e = this.cardShapeFactory.getDefaultShape();
        return Card.GetDefault(e, this.game)
    }

    getHero()
    {
        var shape = this.cardShapeFactory.getHeroShape(GameStatus.currentHero),
        hero = new Hero(shape, this.game);
        hero.setShopItemsStatus(),
        hero.totalLife = 10,
        hero.currentLife = 10,
        hero.armor = 0,
        GameStatus.isHorseshoe && (hero.totalLife += 1, hero.currentLife += 1),
        hero.setStatus(),
        this.movesAfterLastSpecialCard++;
        return hero;
    }

    // 随机生成卡牌
    getCard(cardGenerationType: CardGenerationType = CardGenerationType.Random, score: number, cardTypeList: CardScoreType[]) 
    {
        // 是否需要创建Boss
        if(GameStatus.isNeedCreateBoss && cardGenerationType == CardGenerationType.Random)
        {
            GameStatus.isNeedCreateBoss = false;
            return this.getBoss();
        }
        // 是否需要创建宝箱
        else if(GameStatus.isNeedCreateChest &&  cardGenerationType == CardGenerationType.Random )
        {
            GameStatus.isNeedCreateChest = false;
            return this.getChestCard();
        }
        // 随机到坏牌
        else if(this.generateCardType(cardGenerationType, cardTypeList) == CardBackgroundType.Warrior)
        {
            return this.getEnemy(score);
        }
        // 随机到好牌
        else
        {
            return this.getPowerUp(cardGenerationType, score, cardTypeList);
        }

    }
    
    getHealth(e) {
        var cardScoreType = CardScoreType.Health;
        return Card.GetNew(this.cardShapeFactory.getPowerUpCardShape(cardScoreType, e), this.game, cardScoreType, e)
    }
    // 根据生成方式 生成卡牌类型
    generateCardType(cardGenerationType:CardGenerationType, cardTypeList: CardScoreType[]) 
    {
        // 木桶替换 并且 是钥匙英雄
        if (cardGenerationType == CardGenerationType.AfterBarrel && GameStatus.currentHero == HeroType.Key)
        {
            return CardBackgroundType.PowerUp;
        }

        // 宝箱替换 或者 生成好的牌
        if (cardGenerationType == CardGenerationType.AfterChest || cardGenerationType == CardGenerationType.Positive)
        {
            return CardBackgroundType.PowerUp;
        } 

        // 木桶替换 并且 随机概率75%
        if (cardGenerationType == CardGenerationType.AfterBarrel && Math.random() < .75) 
        {
            return CardBackgroundType.PowerUp;
        }

        LogInfo.reset();
        // 好牌数量 比 坏牌数量 多2张时
        if (GameStatus.cardCounter > 2) 
        {
            // 随机概率80% 坏牌
            var n = Math.random();
            if (LogInfo.ChanceOfNegativeFromBox = n, n < .8) 
            {
                return CardBackgroundType.Warrior;
            }
        }
        
        // 坏牌数量 比 好牌数量 多3张时
        if (GameStatus.cardCounter < -3) 
        {
            // 随机概率80% 好牌
            var s = Math.random();
            if (LogInfo.ChanceOfPositiveFromBox = s, s < .8) 
            {
                return CardBackgroundType.PowerUp;
            }
        }

        if(CardFactory.isShouldBePositiveCard(cardTypeList))
        {
            return CardBackgroundType.PowerUp;
        }
        else
        {
            CardBackgroundType.Warrior;
        }

    }

    // 大概率生成好牌
    static isShouldBePositiveCard(cardTypeList: CardScoreType[]) 
    {
        // 当前好牌数量
        var positiveCount = cardTypeList.filter(CardScoreTypeHelper.isCardScoreTypePositive).length;
        // 当前坏牌数量
        var negativeCount = cardTypeList.filter(CardScoreTypeHelper.isCardScoreTypeNegative).length;

        // 如果是3X3的格子,  85%的概率, 好牌数量小于1
        if (!GameStatus.isFourXFour && Math.random() < .85 && positiveCount <= 1)
        {
            return Math.random() < .8;
        }

        // 如果是4x4的格子,  85%的概率, 好牌数量小于2
        if (GameStatus.isFourXFour && Math.random() < .85 && positiveCount <= 2)
        {
            return Math.random() < .8;
        } 





        // 随机好牌概率
        var n = Math.min(.35, .4 - .01 * GameStatus.levelStep),
        s = negativeCount * (GameStatus.isFourXFour ? .02 : .03),
        a = GMath.clamp(n + s, .2, .75);

        // 随机值
        var r = Math.random();
        LogInfo.PositiveCardProbability = a;
        LogInfo.CurrentPositiveCardProbability = r;

        // 比较: 随机值 < 随机好牌概率
        return r < a;
    }

    // 生成好牌
    getPowerUp(cardGenerationTyp: CardGenerationType, score: number, cardTypeList: CardScoreType[]) 
    {
        var cardScoreType = this.generatePowerUpType(cardGenerationTyp, cardTypeList);
        return score = this.generateCardScore(cardScoreType, score),
        Card.GetNew(this.cardShapeFactory.getPowerUpCardShape(cardScoreType, score), this.game, cardScoreType, score)
    }

    // 生成牌的分数
    generateCardScore(cardScoreType:  CardScoreType, score: number = 0) 
    {
        if(score == 0)
        {
            switch (cardScoreType) 
            {
            case CardScoreType.Armor:
                this.armorBasket.fillBasketWithStep(1, 4, 3, 10),
                score = Number(this.armorBasket.getFromBasket());
                break;
            case CardScoreType.Health:
                this.healthBasket.fillBasketWithStep(1, 4, 3, 10),
                score = Number(this.healthBasket.getFromBasket());
                break;
            case CardScoreType.Cannon:
                this.cannonBasket.fillBasketWithStep(1, 1, 3, 10),
                score = Number(this.cannonBasket.getFromBasket()),
                GameStatus.currentHero == HeroType.Bomb && (score += 2);
                break;
            case CardScoreType.Barrel:
                score = this.generateScore(2, 4, 3, 10);
                break;
            case CardScoreType.Poison:
                var o = 1 + Math.ceil(GameStatus.gameLevel / 2);
                score = o > 10 ? 10 : o;
                break;
            case CardScoreType.Lightning:
                score = this.generateScore(1, 4, 3, 10);
                break;
            case CardScoreType.Gold:
                this.goldBasket.fillBasketWithStep(1, 4, 2, 1e3),
                score = Number(this.goldBasket.getFromBasket());
                break;
            default:
                score = this.game.rnd.integerInRange(1, 5)
            }
        }

        if(cardScoreType === CardScoreType.Bomb)
        {
            score = this.game.rnd.integerInRange(1, 4 + Math.ceil(GameStatus.gameLevel / 2));
            if(score > 10)
            {
                score = 10;
            }
        }

        if(cardScoreType === CardScoreType.Multiplier)
        {
            score = 2;
        }


        return score
    }
    generateScore(min, start, level, max) {
        var s = start + Math.ceil(GameStatus.gameLevel / level),
        a = this.game.rnd.integerInRange(min, s);
        return GMath.clamp(a, min, max)
    }
    // 生成坏牌
    getEnemy(score: number) {
        var cardType = this.generateEnemyPower(score);
        Consts.IsDev && this.enemyBasket.print("Enemy");

        if(0 == score)
        {
            score = cardType;

            if(GameStatus.gameLevel > 10)
            {
                score += Math.floor((GameStatus.gameLevel - 10) / 2);
            }
        }

        if(0 == cardType)
        {
            // 桥
            this.getTrap(score + 1);
        }
        else
        {
            // 怪
            this.getWarrior(cardType, score);
        }

    }
     // 桥
    getTrap(score) {
        return Card.GetNew(this.cardShapeFactory.getTrapCardShape(), this.game, CardScoreType.Trap, score)
    }
    // 怪
    getWarrior(cardType, score) {
        return Card.GetNew(this.cardShapeFactory.getEnemyCardShape(cardType), this.game, CardScoreType.Warrior, score)
    }
    // 获取桥的伤害
    static getTrapScore() 
    {
        // 如果是枪兵，伤害为0
        if(GameStatus.currentHero == HeroType.Gun)
        {
            return 0;
        }
        else
        {
            // 随机，概率  每4级伤害加1
            return 1 + RandomHelper.getRandomIntInclusive(0, Math.ceil(GameStatus.gameLevel / 4));
        }
       
    }
    // boss
    getBoss() {
        var i = this.cardShapeFactory.getBossCardShape(CardFactory.generateBossPower()),
        o = 8 + GameStatus.gameLevel;
        return Card.GetNew(i, this.game, CardScoreType.Warrior, o)
    }
    // 宝箱
    getChestCard() {
        var e = CardScoreType.Chest,
        i = this.cardShapeFactory.getPowerUpCardShape(e, 0);
        return Card.GetNew(i, this.game, e, 0)
    }
    // 金币
    getCoinCard(score) {
        var i = CardScoreType.Gold;
        0 === score && (score = this.generateCardScore(i));
        var o = this.cardShapeFactory.getPowerUpCardShape(i, score);
        return Card.GetNew(o, this.game, i, score)
    }

    // 生成Boss卡牌类型
    static generateBossPower() 
    {
        return RandomHelper.getRandomIntInclusive(1, 3)
    }
    
    // 生成好牌的卡牌类型
    generatePowerUpType(cardGenerationTyp:CardGenerationType, cardTypeList: CardScoreType[]) 
    {
        // 替换宝箱
        if(cardGenerationTyp == CardGenerationType.AfterChest )
        {
            // 开宝箱的牌
            return this.generatePowerUpTypeFromChest() ;
        }
        // 替换木桶
        else if(cardGenerationTyp == CardGenerationType.AfterBarrel)
        {
            // 开木桶里的牌, 根据当前牌类型不同数量
            CardFactory.generatePowerUpTypeFromBarrel(cardTypeList) 
        }
        else
        {
            // 好的牌, 根据当前牌类型不同数量
            CardFactory.generatePowerUpCardScoreType(cardTypeList)
        }
    }

    // 开宝箱的牌: 生成好牌类型， 替换宝箱
    generatePowerUpTypeFromChest() : CardScoreType
    {
        return Number(this.chestBasket.getFromBasket())
    }
    // 开木桶里的牌: 生成好牌类型， 替换木桶, 根据当前牌类型不同数量
    static generatePowerUpTypeFromBarrel(cardTypeList: CardScoreType[]) 
    {
        return CardFactory.generateFromBasket(cardTypeList, CardScoreTypeHelper.getRandomPowerUpFromBarrel, this.maxPowerUpNumber())
    }

    // 随机好的牌, 根据当前牌类型不同数量
    static generatePowerUpCardScoreType(cardTypeList: CardScoreType[]) 
    {
        return CardFactory.generateFromBasket(cardTypeList, CardScoreTypeHelper.getRandomPowerUp, this.maxPowerUpNumber())
    }


    // 生成集合里的卡牌，只要满足类型卡牌数量小于指定数量， 否则生成目前类型最少的牌
    static generateFromBasket(cardTypeList: CardScoreType[], randomPowerUpFromBarrelFun, maxPowerUpNumber) 
    {
        var filterFun = (itemCardScoreType)=>
        {
            return itemCardScoreType === cardScoreType
        };

        var cardScoreType:CardScoreType;
        for (var i = 0; i < 10 && (cardScoreType = randomPowerUpFromBarrelFun(), !(cardTypeList.filter(filterFun).length < maxPowerUpNumber)); i++);

        return cardScoreType
    }

    // 随机好牌数量 最大值
    static maxPowerUpNumber() 
    {
        return RandomHelper.getRandomIntInclusive(1, 2)
    }

    // 生成敌人血量
    generateEnemyPower(score) 
    {
        this.enemyBasket.fillBasketWithStep(0, 4, 2, 9);

        if (0 == score)
        {
            return Number(this.enemyBasket.getFromBasket());
        } 
        var power = GMath.clamp(score, 0, 9);
        this.enemyBasket.removeFromBasket(power.toString());
        return power
    }
}