import Card from "./Card";
import { CardScoreType } from "../Enums/CardScoreType";
import FightResult from "../Datas/FightResult";
import GameStatus from "../Datas/GameStatus";
import SoundConsts from "../Enums/SoundConsts";
import ArrayUtils from "../Utils/ArrayUtils";
import ArtConsts from "../Enums/ArtConsts";
import SoundController from "./SoundController";
import { HeroType } from "../Enums/HeroType";
import Consts from "../Enums/Consts";

export default class Hero extends Card
{
    
    // currentLife: number = 0;
    armor: number = 0;
    totalLife: number = 0;

    needRunLightning: boolean = false;
    lightningScore: number = 0;

    //  CardScoreType.Cannon
    needShoot: boolean = false;
    shootScore: number = 0;

    // CardScoreType.Multiplier
    needShootMultiplier: boolean = false;
    multiplierScore: number = 0;


    // CardScoreType.Skull
    needShootSkull: boolean = false;
    
    fight(card: Card) 
    {
        var fightResult = new FightResult(true, false, true);
        switch (card.type) 
        {
        case CardScoreType.Trap:
            if(card.getLife() > 0 &&  GameStatus.currentHero != HeroType.Gun)
            {
                SoundController.instance.playSound(SoundConsts.Trap);
                if(this.currentLife > card.getScore())
                {
                    this.currentLife -= card.getScore();
                    GameStatus.addGold(card.getScore());
                    fightResult.isHeroAlive = true;
                }
                else
                {
                    fightResult.isHeroAlive = false;
                }
            }
            break;
        case CardScoreType.Boss:
        case CardScoreType.Enemy:
            SoundController.instance.playSound(ArrayUtils.getRandomItem([SoundConsts.Hit1, SoundConsts.Hit2]));
            fightResult.isHeroAlive = this.fightWithEnemy(card);
            if(fightResult.isHeroAlive && card.isBoss)
            {
                fightResult.isNeedIncreaseLifeByOneAfterBoss =  true;
            }
            break;
        case CardScoreType.Armor:
            card.getScore(),
            SoundController.instance.playSound(SoundConsts.ShieldWood);
            if(GameStatus.currentHero == HeroType.Gun )
            {
                this.needSmashLightning(card.getScore());
            }
            else
            {
                if(this.armor < card.getScore() )
                {
                    this.armor = card.getScore();
                    this.setArmorFrame(card);
                }
                else if(GameStatus.currentHero == HeroType.Base)
                {
                    this.armor++;
                }
            }
            break;
        case CardScoreType.Gold:
            if(card.level == 1)
            {
                SoundController.instance.playSound(SoundConsts.Coin);
            }
            else
            {
                SoundController.instance.playSound(SoundConsts.CoinsBag);
            }
            GameStatus.addGold(card.getScore());
            break;
        case CardScoreType.Health:
            SoundController.instance.playSound(ArrayUtils.getRandomItem([SoundConsts.Health1, SoundConsts.Health2]));
            this.currentLife += card.getScore();
            if(this.currentLife > this.totalLife)
            {
                this.currentLife = this.totalLife;
            }
            break;
        case CardScoreType.Cannon:
            this.needShoot = true,
            this.shootScore = card.getScore();
            break;
        case CardScoreType.Chest:
            fightResult.isChest = true;
            break;
        case CardScoreType.Poison:
            SoundController.instance.playSound(SoundConsts.Poison);
            if (GameStatus.isLuck)
            {
                fightResult.isHeroAlive = true;
                this.useLuck();
                return fightResult;
            } 

            if (card.getScore() >= this.currentLife) 
            {
                fightResult.isHeroAlive = false;
                return fightResult;
            }
            this.currentLife -= card.getScore();
            break;
        case CardScoreType.Horseshoe:
            fightResult.isNeedIncreaseLifeByOne = true;
            break;
        case CardScoreType.Bomb:
            break;
        case CardScoreType.Lightning:
            this.needSmashLightning(card.getScore());
            break;
        case CardScoreType.Multiplier:
            this.needShootMultiplier = true,
            this.multiplierScore = card.getScore();
            break;
        case CardScoreType.Skull:
            this.needShootSkull = true;
            break;
        case CardScoreType.Barrel:
            SoundController.instance.playSound(ArrayUtils.getRandomItem([SoundConsts.Barrel1, SoundConsts.Barrel2]));
            fightResult.isMove = false;
        }
        this.setStatus();
        return fightResult;
    }

    needSmashLightning(score) {
        this.needRunLightning =  true,
        this.lightningScore = score
    }
    setStatus() 
    {
        this.setLife(),
        this.setArmor()
    }

    stepUpdate() {}
    getScore() {
        return this.currentLife + this.armor
    }
    reduceScoreInNSeconds(t, e) {
        if (t <= this.armor) this.armor -= t;
        else {
            var i = t - this.armor;
            this.armor = 0,
            this.currentLife -= i
        }
        setTimeout(this.setStatus.bind(this), e)
    }
    increaseScoreInNSeconds(t, e) {
        this.totalLife - this.currentLife > t ? this.currentLife = this.totalLife: this.currentLife += t,
        setTimeout(this.setStatus.bind(this), e)
    }
    setShopItemsStatus() 
    {
        var e = 1;
        this.destroySpriteByName(ArtConsts.SmallHeart),
        this.destroySpriteByName(ArtConsts.SmallHorseshoe),
        this.destroySpriteByName(ArtConsts.SmallLuck),
        this.destroySpriteByName(ArtConsts.SmallKey),
        GameStatus.isHeart && this.addSpriteByName(ArtConsts.SmallHeart, e++, 0, 1),
        GameStatus.isHorseshoe,
        GameStatus.isLuck && this.addSpriteByName(ArtConsts.SmallLuck, e++, 30),
        GameStatus.isKey && this.addSpriteByName(ArtConsts.SmallKey, e, 30)
    }
    addSpriteByName(e, i, o, n) {
        void 0 === o && (o = 0),
        void 0 === n && (n = 1);
        var s = 38 * i - .5 * Consts.CardWidth,
        a = t.ShapeFactoryHelper.getShape(this.game, s, 80, ArtConsts.Items1, e, 0);
        a.name = e,
        a.angle = o,
        a.scale.set(n),
        this.view.add(a)
    }
    destroySpriteByName(t) {
        var e = this.view.getByName(t);
        e && e.destroy()
    }
    
    setArmor() 
    {
        this.view.setArmor();
    }

    setArmorFrame(card: Card) 
    {
        this.view.setArmor();
    }

    fightWithEnemy(e) {
        if (e.getScore() >= this.armor + this.currentLife) return ! 1;
        if (e.getScore() <= this.armor) e.getScore() < this.armor && GameStatus.currentHero == HeroType.Base ? this.armor -= 1 : this.armor -= e.getScore();
        else if (this.armor > 0) {
            var i = e.getScore() - this.armor;
            this.armor = 0,
            this.currentLife -= i
        } else this.currentLife -= e.getScore();
        return GameStatus.addGold(e.getScore()),
        !0
    }
    useHeart() {
        var e = this.view.getByName(ArtConsts.SmallHeart);
        this.view.bringToTop(e);
        SoundController.instance.playSound(SoundConsts.Revive),
        e.animations.add("explode", Phaser.Animation.generateFrameNames(ArtConsts.SmallHeart, 0, 16, "", 4), 30, !1, !1),
        this.game.add.tween(e.scale).to({
            x: 1,
            y: 1
        },
        100, null, !0).onComplete.add(function() {
            var t = e.animations.play("explode", 60, !1, !1);
            t.onComplete.add(this.setStatus, this),
            t.onComplete.add(this.setShopItemsStatus, this)
        },
        this),
        this.currentLife = this.totalLife
    }

    /** 添加最大血量 */
    increaseLifeByOneTween() 
    {
        var t = this.getScaleTween(this.getCardLifeText(), this.increaseLifeByOne);
        return t.onStart.add(this.playHorseshoe, this),
        t
    }
    
    playHorseshoe() {
        SoundController.instance.playSound(SoundConsts.Horseshoe)
    }

    increaseLifeByOne() {
        this.currentLife++,
        this.totalLife++,
        this.setLife()
    }

    /** 使用道具， 生命 */
    useLuck() 
    {
        GameStatus.isLuck = false;
        this.view.useLuck();
    }

    getGoldValue() {
        return 0
    }
    
}