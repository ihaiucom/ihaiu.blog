import WindowWarUI from "../FGUI/Extends/GameHome/WindowWarUI";
import Field from "./Logics/Field";
import StageClickFx from "../FGUI/StageClickFx";
import CardFactory from "./Logics/CardFactory";
import RandomDataGenerator from "./Utils/RandomDataGenerator";
import GameStatus from "./Datas/GameStatus";
import TweenContainer from "./Utils/TweenContainer";
import keyboardManager from "./Logics/KeyboardManager";
import Game from "../Game";
import CardView from "../FGUI/Extends/GameHome/CardView";
import FightResult from "./Datas/FightResult";
import { HeroType } from "./Enums/HeroType";
import { MoveType } from "./Enums/MoveType";
import { CardGenerationType } from "./Enums/CardGenerationType";

export default class WarGame
{
    //=================================
    // view
    //---------------------------------
    /** 战斗UI窗口 */
    windowUI: WindowWarUI;
    /** 卡牌容器 */
    container: fgui.GComponent;
    /** 场景点击特效 */
    stageClickFx: StageClickFx;

    //=================================
    // logic
    //---------------------------------
    rnd: RandomDataGenerator;
    animationQueue: TweenContainer[] = [];
    keyboardManager: keyboardManager = new keyboardManager();
    cardFactory:CardFactory;
    field: Field;


    isAnimationing: boolean = false;
    isPause: boolean = false;
    isChest: boolean = false;

    moveType: MoveType;

    init(windowUI: WindowWarUI)
    {
        this.windowUI = windowUI;
        this.container = windowUI.m_container;
        this.stageClickFx = new StageClickFx();

        this.keyboardManager.init(this);
        this.rnd = new RandomDataGenerator([(Date.now() * Math.random()).toString()]);
        this.cardFactory = new CardFactory(this);
        this.field = new Field(this);

        // this.testCardViews();
    }

    testCardViews()
    {
        var colMax = 5;
        
        var list = Game.config.card.getConfigList();
        for(var i = 0, len = list.length; i < len; i ++)
        {
            var config = list[i];
            var view = CardView.PoolGet();
            view.SetConfig(config);
            this.container.addChild(view);

            var x = i % colMax * view.width + view.width * 0.5;
            var y = Math.floor(i / colMax) * view.height;
            view.setXY(x, y);
            console.log(i, x, y, config.name, config.id);
        }

        this.container.setScale(0.5, 0.5);
    }

    launch()
    {
        GameStatus.init(),
        this.stageClickFx.install();
        this.keyboardManager.StartListenKeyboard();
        this.animationQueue = this.field.initField();
        Laya.timer.frameLoop(1, this, this.update);
    }

    stop()
    {
        Laya.timer.clear(this, this.update);
        this.stageClickFx.uninstall();
        this.keyboardManager.StopListenKeyboard();
    }

    update()
    {
        if(this.isPause)
        {
            return;
        }

        if(!this.isAnimationing)
        {
            if(  this.animationQueue.length > 0  )
            {
                this.runAnimationFromQueue();
            }

        }
    }

    // 播放动画队列
    runAnimationFromQueue()
    {
        var animation = this.animationQueue.shift();
        var animationDuration = animation.animationDuration;
        this.isAnimationing = true;

        animation.restart();
        setTimeout(this.onAnimationComplete.bind(this), animationDuration);

    }

    
    onAnimationComplete()
    {
        this.isAnimationing = false;
        this.keyboardManager.reset()
    }

    
    fillQueue()
    {
        if (GameStatus.isHeroAlive) 
        {
            this.checkKeyHandler();
        }
        else
        {
            GameStatus.isGameEnd = true;
        }
    }

    

    checkKeyHandler() 
    {
        var moveType = this.keyboardManager.getMoveType();
        if (moveType) 
        {
            var tweenList = this.move(moveType);
            if(tweenList && tweenList.length > 0)
            {
                this.field.stepUpdate();
                this.animationQueue.push(...tweenList);
            }
            else
            {
                this.keyboardManager.reset()
            }
        }
    }

    
    move(moveType) 
    {
        var fightCard = this.field.getCardToFight(moveType);
        if (null == fightCard) 
            return [];

        var heroCard = this.field.getHero();
        var fightResult: FightResult = heroCard.fight(fightCard);

        // 英雄死了
        if (!fightResult.isHeroAlive) 
        {
            
            // 是否购买了道具 生命
            if(GameStatus.isHeart)
            {
                GameStatus.isHeart =false;
                this.keyboardManager.reset();
                heroCard.useHeart();
                return this.field.move(moveType);
            }
            else
            {
                GameStatus.isHeroAlive = false;
                return this.field.removeAllChild();
            }
        }


        if (fightResult.isChest)
        {
            this.moveType = moveType;
            // 如果英雄是 钥匙英雄
            if(GameStatus.currentHero == HeroType.Key)
            {
                this.chestOpened();
            }
            // 是否购买了道具 钥匙
            else if(GameStatus.isKey)
            {
                this.field.getHero().setShopItemsStatus();
                this.chestOpened();
            }
            else
            {
                this.openChestPopUp();
            }

            return[];
        } 

        var tweenContainer;
        var tweenList = []; 

        GameStatus.stepUpdate();
        // 战斗结果是否需要增加生命
        if(fightResult.isNeedIncreaseLifeByOne)
        {
            tweenContainer = new TweenContainer();
            tweenContainer.tweens.push(this.field.getHero().increaseLifeByOneTween());
            tweenList.push(tweenContainer);
        }

        // 战斗结果 是否移动
        if(fightResult.isMove)
        {
            tweenList.push(this.field.move(moveType));
        }
        else
        {
            // 替换卡牌, 木桶替换
            this.field.replaceCard(moveType, CardGenerationType.AfterBarrel, fightCard.getScore() );
            tweenContainer = new TweenContainer();
            tweenContainer.tweens.push(this.field.getHero().increaseLifeByOneTween());
            tweenList.push(tweenContainer);
        }

        if(this.isChangeTurnsToBoss())
        {
            GameStatus.decreaseTurnsToBoss();
        }
        return tweenList
    }

    isChangeTurnsToBoss() 
    {
        return ! GameStatus.isNeedCreateBoss && !this.field.isBossInTheField()
    }

    

    
}