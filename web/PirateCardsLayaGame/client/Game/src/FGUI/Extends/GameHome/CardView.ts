/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CardViewStruct from "../../Generates/GameHome/CardViewStruct";
import CardViewFrontBg from "./CardViewFrontBg";
import { CardBackgroundType } from "../../../War/Enums/CardBackgroundType";
import CardConfig from "../../../Config/ConfigExtends/CardConfig";
import CardViewFrontHero from "./CardViewFrontHero";
import CardViewFrontPowerUp from "./CardViewFrontPowerUp";
import CardViewFrontPowerUpBarrel from "./CardViewFrontPowerUpBarrel";
import CardViewFrontPowerUpCannon from "./CardViewFrontPowerUpCannon";
import CardViewFrontPowerUpBomb from "./CardViewFrontPowerUpBomb";
import CardViewFrontPowerUpChest from "./CardViewFrontPowerUpChest";
import CardViewFrontPowerUpSkull from "./CardViewFrontPowerUpSkull";
import CardViewFrontWarriowBoss from "./CardViewFrontWarriowBoss";
import CardViewFrontWarriowEnemy from "./CardViewFrontWarriowEnemy";
import CardViewFrontWarriowTrap from "./CardViewFrontWarriowTrap";
import CardScoreTypeConfig from "../../../Config/ConfigExtends/CardScoreTypeConfig";
import CardViewFrontWarriow from "./CardViewFrontWarriow";
import Card from "../../../War/Logics/Card";
import WarGame from "../../../War/WarGame";
import Hero from "../../../War/Logics/Hero";
import Game from "../../../Game";
import AbstractCard from "../../../War/Logics/AbstractCard";
import { CardScoreType } from "../../../War/Enums/CardScoreType";

export default class CardView extends CardViewStruct
{

    static _FrontClassMap: Map<string, any>;
    
    static get FrontClassMap():Map<string, any>
    {
        if(!this._FrontClassMap)
        {
            var map = new Map<string, any>();
            this._FrontClassMap = map;

            map.set("CardViewFrontHero", CardViewFrontHero);
            map.set("CardViewFrontPowerUp", CardViewFrontPowerUp);
            map.set("CardViewFrontPowerUpBarrel", CardViewFrontPowerUpBarrel);
            map.set("CardViewFrontPowerUpBomb", CardViewFrontPowerUpBomb);
            map.set("CardViewFrontPowerUpCannon", CardViewFrontPowerUpCannon);
            map.set("CardViewFrontPowerUpChest", CardViewFrontPowerUpChest);
            map.set("CardViewFrontPowerUpSkull", CardViewFrontPowerUpSkull);
            map.set("CardViewFrontWarriow", CardViewFrontWarriow);
            map.set("CardViewFrontWarriowBoss", CardViewFrontWarriowBoss);
            map.set("CardViewFrontWarriowEnemy", CardViewFrontWarriowEnemy);
            map.set("CardViewFrontWarriowTrap", CardViewFrontWarriowTrap);
        }
        return this._FrontClassMap;
    }

    static GetFrontClass(key: string)
    {
        if(!this.FrontClassMap.has(key))
        {
            console.error("没有找到卡牌视图组件", key);
            return CardViewFrontPowerUp;
        }
        return this.FrontClassMap.get(key);
    }

    static GetFrontView(key: string): fgui.GComponent
    {
        var cls = CardView.GetFrontClass(key);
        var item =  Pool.getItem(cls.URL);
        if(!item)
        {
            item = cls.createInstance();
        }
        return item;
    }

    static GetSpriteUrl(name: string)
    {
        return "ui://GameHome" + "/" + name;
    }

    static PoolGet():CardView
    {
        var item =  Pool.getItem(this.URL);
        if(!item)
        {
            item = CardView.createInstance();
        }
        return item;
    }

    PoolRecover()
    {
        this.RecoverFront();

        this.cardConfig = null;
        this.cardScoreConfig = null;
        Pool.recover(CardView.URL, this);
    }




    game: WarGame;
    cardConfig: CardConfig;
    cardScoreConfig: CardScoreTypeConfig;
    card: AbstractCard;

    bg: CardViewFrontBg;
    front: fgui.GComponent;


    constructor()
    {
        super();
    }

    
	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
        this.InitBg();
    }
    
    InitBg()
    {
        this.bg = CardViewFrontBg.createInstance();
        this.addChild(this.bg);
        this.bg.setXY(this.width * 0.5, this.height * 0.5);
    }

    /** 设置背景 */
    SetBg(type: CardBackgroundType)
    {
        this.bg.m_state.setSelectedIndex(type);
    }

    /** 设置前景 */
    SetFront(frontComponentClassName: string)
    {
        var view:any = CardView.GetFrontView(frontComponentClassName);
        view.displayListContainer.mouseThrough = true;
        view.displayListContainer.mouseEnabled = false;
        view.cardView = this;
        this.addChild(view);
        view.setXY(this.width * 0.5, this.height * 0.5);
        this.front =view;

        

        var fun: Function = this.front['SetConfig'];
        if(fun)
        {
            fun.call(this.front, this.cardConfig);
        }
        
        this.onClick(this, this.OnClickHandler);
    }

    

    /** 将Front 丢回对象池 */
    RecoverFront()
    {
        if(this.front)
        {
            this.front.removeFromParent();
            var fun: Function = this.front['OnRecover'];
            if(fun)
            {
                fun.call(this.front);
            }
            var signal = (<any>this.front.constructor).URL;
            Pool.recover(signal, this.front);
            this.front = null;
        }
        
        this.offClick(this, this.OnClickHandler);
    }

    /** 设置配置 */
    SetConfig(cardConfig: CardConfig)
    {
        this.RecoverFront();
        this.cardConfig = cardConfig;
        if(cardConfig)
        {
            var cardScoreConfig = this.cardScoreConfig = cardConfig.cardScoreConfig;
            if(!cardScoreConfig || cardScoreConfig.backgroundType == undefined)
            {
                console.error("!cardScoreConfig || cardScoreConfig.backgroundType == undefined", cardScoreConfig, cardConfig);
            }
            this.SetBg(cardScoreConfig.backgroundType);
            this.SetFront(cardScoreConfig.frontView);
        }
        else
        {
            this.cardScoreConfig = null;
            this.SetBg(CardBackgroundType.Default);
        }
    }

    /** 设置卡牌数据 */
    SetCard(card: AbstractCard)
    {
        this.card = card;
        if(this.front)
        {
            var fun: Function = this.front['SetCard'];
            if(fun)
            {
                fun.call(this.front, this.card);
            }
        }
    }

    OnClickHandler()
    {
        if(this.card)
        {
            this.game.keyboardManager.OnClickCard(<Card>this.card);
        }
    }

    // 设置生命值
    setHealthText()
    {
        if(this.card.isHero)
        {
            var hero: Hero = <any> this.card;
            (<CardViewFrontHero>this.front).m_life.title = hero.currentLife + "/" + hero.totalLife;
        }
        else
        {
            this.setPowerUpText();
        }

    }

    //  设置能力
    setPowerUpText()
    {
        var card: Card = <Card> this.card;
        if(card.isDisplayLife())
        {
            (<CardViewFrontHero>this.front).m_life.title = card.lifeAmount.toString();
        }
        else
        {
            (<CardViewFrontHero>this.front).m_life.title = card.powerUpAmount.toString();
        }

    }

    private preArmor = -1;
    // 设置护甲
    setArmor()
    {
        if(this.card.isHero)
        {
            var hero = <Hero> this.card;
            var heroView = <CardViewFrontHero>this.front;
            
            if(hero.armor > 0)
            {
                if(heroView.m_shield.visible == false || this.preArmor != hero.armor)
                {
                    heroView.setArmorShowOrChange();
                    this.preArmor = hero.armor;
                }
            }
            else
            {
                heroView.setArmorHide();
            }
            heroView.m_shield.title = hero.armor.toString();
        }
    }

    tweenLife()
    {
        var view = (<CardViewFrontHero>this.front).m_life;
        var tweenContainer = this.card.getScaleTween(view);
        tweenContainer.onComplete.addOnce(this.setHealthText, this);
        return tweenContainer;
    }

    
    tweenPowerUp()
    {
        var view = (<CardViewFrontHero>this.front).m_life;
        var tweenContainer = this.card.getScaleTween(view);
        tweenContainer.onComplete.addOnce(this.setHealthText, this);
        return tweenContainer;
    }

    // 使用道具， 生命
    useLuck()
    {
        if(this.card.isHero)
        {
            var hero = <Hero> this.card;
            var heroView = <CardViewFrontHero>this.front;
            heroView.m_shopBar.useLuck();
        }
    }

    // 
    increaseLifeByOneTween()
    {

    }

    setOpen()
    {
        if(this.card.isTrap)
        {
            (<CardViewFrontWarriowTrap>this.front).SetOpen();
        }
    }

    setClose()
    {
        if(this.card.isTrap)
        {
            (<CardViewFrontWarriowTrap>this.front).SetClose();
        }
    }


    
}