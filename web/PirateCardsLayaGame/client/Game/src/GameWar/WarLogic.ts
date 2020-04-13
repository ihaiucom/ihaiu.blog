import CardFactory from "./Cards/CardFactory";
import Consts from "./Consts";
import AnimationConsts from "./enums/AnimationConsts";
import WindowsConsts from "./WindowsConsts";

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
    clickAnimation:


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
            else if(this.isPause)
            {
                if(GameStatus.isGameEnd)
                {
                    GameStatus.resetShop();
                    this.fadeOutState(WindowsConsts.Result)

                    if(   this.onAnimation || (this.animationQueue.length > 0 )   )
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
            var e, i, o, n, s, hero = this.field.getHero();
            if (hero.needShoot)
            {
                (e = this.animationQueue).push.apply(e, this.field.shootCannon());
                hero.needShoot = false;
                return;
            }



            if (hero.needRunLightning) 
            {
                (i = this.animationQueue).push.apply(i, this.field.shootLightning());
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





}