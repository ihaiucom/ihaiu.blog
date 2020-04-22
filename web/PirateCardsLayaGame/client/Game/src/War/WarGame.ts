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
import { Shake } from "./Utils/Shake";
import SoundController from "./Logics/SoundController";
import SoundConsts from "./Enums/SoundConsts";
import Consts from "./Enums/Consts";
import Hero from "./Logics/Hero";
import { MenuId } from "../GameModule/MenuId";
import { HomeTabType } from "../GameModule/ViewWindows/HomeWindow";
import War from "./War";

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
    /** 震屏处理器 */
    shakeHandler: Shake = new Shake();

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
        window['game'] = this;
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

    uninstall()
    {
        Laya.timer.clear(this, this.update);
        this.stageClickFx.uninstall();
        this.keyboardManager.StopListenKeyboard();
        this.field.uninstall();

        for(var i = this.container.numChildren - 1; i >= 0; i --)
        {
            var child = this.container.getChildAt(i);
            var fun : Function= child['PoolRecover'];
            if(fun)
            {
                fun.call(this);
            }
            
            if(child.parent)
            {
                child.removeFromParent();
            }
        }
        this.container;
    }

    update()
    {
        if(this.isPause)
        {
            return;
        }

        if(!this.isAnimationing)
        {
            // 执行动画
            if(  this.animationQueue.length > 0  )
            {
                this.runAnimationFromQueue();
            }
            // 执行操作
            else
            {
                this.fillQueue();
            }

        }
    }

    // 播放所有动画
    playAllAnimations()
    {
        while(this.animationQueue.length > 0)
        {
            this.runAnimationFromQueue();
        }
    }

    // 播放动画队列
    runAnimationFromQueue()
    {
        var animation = this.animationQueue.shift();
        if(animation instanceof TweenContainer)
        {
            var animationDuration = animation.animationDuration;
            this.isAnimationing = true;
    
            animation.restart();
            setTimeout(this.onAnimationComplete.bind(this), animationDuration);
        }
        else
        {
            console.error(animation);
            this.onAnimationComplete();
        }

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
            var hero = this.field.getHero();
            // CardScoreType.Cannon， 加农炮
            if (hero.needShoot)
            {
                this.addToAnimationQueue(this.field.shootCannon());
                hero.needShoot = false;
                return;
            }

            // CardScoreType.Lightning, 闪电
            if (hero.needRunLightning) 
            {
                this.addToAnimationQueue(this.field.shootLightning());
                hero.needRunLightning = false;
                return;
            }
            
            // CardScoreType.Multiplier 倍数
            if (hero.needShootMultiplier)
            {
                this.addToAnimationQueue(this.field.shootMultiplier());
                hero.needShootMultiplier = false;
                return;
            }

            // CardScoreType.Skull 骷髅清屏
            if (hero.needShootSkull)
            {
                this.addToAnimationQueue(this.field.shootSkull());
                hero.needShootSkull = false;
                return;
            }

            // CardScoreType.Bomb 炸弹
            this.addToAnimationQueue(this.field.smashBomb());
            
            this.checkKeyHandler();
        }
        else if(!GameStatus.isGameEnd)
        {
            this.setGameEnd();
        }
    }

    setGameOver()
    {
        GameStatus.isHeroAlive = false;
        this.addToAnimationQueue(this.field.removeAllChild());
        this.isPause = false;
    }

    setGameEnd()
    {
        GameStatus.isGameEnd = true;
        War.exit();
    }


    addToAnimationQueue(tweenList: TweenContainer[] | TweenContainer)
    {
        if(tweenList == null) return;
        if(tweenList instanceof Array)
        {
            for(var item of tweenList)
            {
                if(item == null) continue;
                
                if(item instanceof Array)
                {
                    this.addToAnimationQueue(item);
                }
                else
                {
                    this.animationQueue.push(item);
                }
            }

        }
        else
        {
            this.animationQueue.push(tweenList);
        }
    }

    checkKeyHandler() 
    {
        var moveType = this.keyboardManager.getMoveType();
        if (moveType) 
        {
            console.log(moveType);
            var tweenList = this.move(moveType);
            if(tweenList && tweenList.length > 0)
            {
                this.field.stepUpdate();
                this.addToAnimationQueue(tweenList);
                
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
            tweenContainer = TweenContainer.PoolGet();
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
            console.log("替换卡牌, 木桶替换");
            tweenContainer = TweenContainer.PoolGet();
            // 替换卡牌, 木桶替换
            var tween = this.field.replaceCard(moveType, CardGenerationType.AfterBarrel, fightCard.getScore() );
            tweenContainer.tweens.push(tween);
            tweenList.push(tweenContainer);
        }

        // 打死Boss, 最多血量和血量+1
        if(fightResult.isNeedIncreaseLifeByOneAfterBoss)
        {
            tweenList.push(this.field.getHero().increaseLifeByOneTween());
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

    // 震屏
    shake(intensity: number, time: number)
    {
        this.shakeHandler.exe(this.windowUI, intensity, time);
    }


    // 打开宝箱弹窗
    openChestPopUp() 
    {
        if (!this.isPause && !this.isChest) 
        {
            this.isChest = true;
            this.windowUI.m_chectPopupPanel.sResult.addOnce((isSuccess: boolean)=>{

                if(isSuccess)
                {
                    this.chestOpened();
                }
                else
                {
                    this.chestClosed();
                }
            }, this);
            this.windowUI.m_chectPopupPanel.Open();
        }
    }

    // 打开宝箱
    chestOpened() 
    {
        SoundController.instance.playSound(SoundConsts.ChestOpening);
        this.isChest = false,
        this.playAllAnimations();
        this.chestOpenedAction();
    }

    // 宝箱打开动作
    chestOpenedAction() 
    {
        this.destroyChestDelayed();
        this.addToAnimationQueue(this.field.replaceCard(this.moveType, CardGenerationType.AfterChest));
        GameStatus.stepUpdate();
        this.isChangeTurnsToBoss();
        GameStatus.decreaseTurnsToBoss();
    }

    // 延迟消耗宝箱弹窗
    destroyChestDelayed (delay: number = 1) 
    {
        setTimeout(this.destroyChest.bind(this), delay);
    }

    // 消耗宝箱弹窗
    destroyChest() 
    {
        // this.popup && this.fadeOut(this.popup,
        // function() {
        //     this.chestUnlock && this.chestUnlock.destroy(),
        //     this.popup.removeAll(!0),
        //     this.popup.destroy(!0)
        // }.bind(this))
    }

    // 宝箱关闭
    chestClosed() 
    {
        this.isChest = false;
        var shakeTime = 4 == GameStatus.RowCount ? 1e3: 500;
        this.shake(Consts.ShakeIntensity, shakeTime),
        this.field.smashHero(600);
        this.playAllAnimations();
        this.destroyChestDelayed(500);

        var heroCard = <Hero> this.field.getHero();
        if(GameStatus.currentHero != HeroType.Bomb)
        {
            heroCard.reduceScoreInNSeconds(1, 1);
        }

        if(0 == heroCard.getScore())
        {
            this.addToAnimationQueue(this.field.removeAllChild());
            GameStatus.isHeroAlive = false;
        }
        else
        {
            this.addToAnimationQueue(this.field.move(this.moveType));
        }
        
        GameStatus.stepUpdate();
        if(this.isChangeTurnsToBoss())
        {
            GameStatus.decreaseTurnsToBoss();
        }
    }



    

    
}