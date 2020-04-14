import CardFactory from "./Cards/CardFactory";
import Consts from "./Consts";
import AnimationConsts from "./enums/AnimationConsts";
import WindowsConsts from "./WindowsConsts";
import Field from "./Cards/Field";
import GameStatus from "./Cards/GameStatus";
import FightResult from "./Cards/FightResult";
import { HeroType } from "./HeroType";
import { CardGenerationType } from "./enums/CardGenerationType";

export default class WarLogic
{
    game:WarLogic;
    keyboardManager: KeyboardManager;
    gameContainer;
    tableContainer;
    cardFactory: CardFactory;
    field: Field;

    onAnimation: boolean = false;
    isPause: boolean = false;

    input;
    clickAnimation;


    constructor()
    {
        this.keyboardManager = new KeyboardManager(this),
        this.cardFactory = new CardFactory(this, this.tableContainer);
        this.field = new Field(this, this.cardFactory, this.keyboardManager),

        var scaleRate = 3 == GameStatus.RowCount ? .9 : .7;
        this.tableContainer.scale.set(scaleRate, scaleRate),
        this.tableContainer.x = .5 * (Consts.Width - (Consts.CardWidth * GameStatus.RowCount + Consts.CardSpaceBetweenWidth * (GameStatus.RowCount - 1)) * scaleRate),
        this.tableContainer.y = .5 * (Consts.Height - (Consts.CardHeight * GameStatus.ColumnCount + Consts.CardSpaceBetweenHeight * (GameStatus.ColumnCount - 1)) * scaleRate) + 30,
        
        GameStatus.init(),

        this.animationQueue = this.field.initField(),
        this.onAnimation = false,
        this.field.onAnimation = this.onAnimation,
        this.isPause = false,
        this.gameContainer.add(this.tableContainer),
        this.input.onUp.add(this.onMouseClick, this),
        this.clickAnimation = new MouseClickAnimation(this, 0, 0),
        this.world.addChild(this.clickAnimation)
    }

    onMouseClick()
    {
        // 滑动
        if(this.isSwipe)
        {
            this.isSwipe = false;
        }
        else
        {
            this.clickAnimation.x = this.input.activePointer.x;
            this.clickAnimation.y = this.input.activePointer.y;
            this.clickAnimation.play(AnimationConsts.Action, 60, !1, !1);
        }
    }

    update()
    {
        // 如果有宝箱
        if(this.isChest)
        {
            this.keyboardManager.reset();
            this.keyboardManager.update();
            this.isSwipe = this.keyboardManager.isPressed();

            if(this.isChest)
            {
                if(this.keyboardManager.isSpace)
                {
                    setTimeout( this.chestUnlock.onClick.bind(this.chestUnlock), 1) 
                }
            }
            else if(!this.isPause)
            {
                if(GameStatus.isGameEnd)
                {
                    GameStatus.resetShop();
                    this.fadeOutState(WindowsConsts.Result)

                    if(!this.onAnimation)
                    {
                        if(  this.animationQueue.length > 0  )
                        {
                            this.runAnimationFromQueue();
                        }
                        else
                        {
                            this.fillQueue();
                        }
                    }

                   
                }
            }
        }


    
    
    }

    runAnimationFromQueue()
    {
        var animation = this.animationQueue.shift();
        this.onAnimation = !0,
        this.field.onAnimation = this.onAnimation;
        var itemFirst = animation.tweens.shift();
        var item = itemFirst;
        if (animation.tweens.length > 0) 
        {
            for (item = animation.tweens.shift(), itemFirst.chain(item); animation.tweens.length > 0;) 
            {
                var n = animation.tweens.shift();
                item.chain(n),
                item = n
            }
        }

        if(0 === animation.animationDuration)
        {
            item.onComplete.add
            (
                function() 
                {
                    this.onAnimation = false,
                    this.field.onAnimation = this.onAnimation,
                    this.keyboardManager.reset()
                },
                this
            )
        }
        else
        {
            setTimeout(this.onAnimationComplete.bind(this), animation.animationDuration);
            itemFirst.start()
        }
    }

    fillQueue()
    {
        if (GameStatus.isHeroAlive) 
        {
            var e, tweenList, o, n, s;
            var hero = this.field.getHero();
            if (hero.needShoot)
            {
                (e = this.animationQueue).push.apply(e, this.field.shootCannon());
                hero.needShoot = false;
                return;
            }



            if (hero.needRunLightning) 
            {
                (tweenList = this.animationQueue).push.apply(tweenList, this.field.shootLightning());
                hero.needRunLightning = false;
                return;
            }

            if (hero.needShootMultiplier)
            {
                (o = this.animationQueue).push.apply(o, this.field.shootMultiplier());
                hero.needShootMultiplier = false;
                return;
            }

            if (hero.needShootSkull)
            {
                (n = this.animationQueue).push.apply(n, this.field.shootSkull());
                hero.needShootSkull = false;
                return;
            }

            (s = this.animationQueue).push.apply(s, this.field.smashBomb());
            this.checkKeyHandler();
        } 
        else
        {
            GameStatus.isGameEnd = false;

        }
    }

    onAnimationComplete()
    {
        this.onAnimation = false;
        this.field.onAnimation = this.onAnimation;
        this.keyboardManager.reset()
    }

    checkKeyHandler() 
    {
        var moveType = this.keyboardManager.getMoveType();
        if (moveType) 
        {
            var animationQueue;
            var tweenList = this.move(moveType);
            if(tweenList.length > 0)
            {
                this.field.stepUpdate();
                animationQueue = this.animationQueue;
                animationQueue.push(tweenList);
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

        var s;
        var tweenList = []; 

        GameStatus.stepUpdate();
        // 战斗结果是否需要增加生命
        if(fightResult.isNeedIncreaseLifeByOne)
        {
            s = new TweenContainer();
            s.tweens.push(this.field.getHero().increaseLifeByOneTween());
            tweenList.push(s);
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
            s = new TweenContainer();
            s.tweens.push(this.field.getHero().increaseLifeByOneTween());
            tweenList.push(s);
        }

        if(this.isChangeTurnsToBoss())
        {
            GameStatus.decreaseTurnsToBoss();
        }
        return tweenList
    }



}