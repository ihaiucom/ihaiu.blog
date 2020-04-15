import WindowWarUI from "../FGUI/Extends/GameHome/WindowWarUI";
import Field from "./Logics/Field";
import StageClickFx from "../FGUI/StageClickFx";
import CardFactory from "./Logics/CardFactory";
import CardViewFactory from "./Logics/CardViewFactory";
import RandomDataGenerator from "./Utils/RandomDataGenerator";
import GameStatus from "./Datas/GameStatus";
import TweenContainer from "./Utils/TweenContainer";
import keyboardManager from "./Logics/KeyboardManager";

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
    cardShapeFactory:CardViewFactory;
    cardFactory:CardFactory;
    field: Field;


    isAnimationing: boolean = false;
    isPause: boolean = false;
    isChest: boolean = false;

    init(windowUI: WindowWarUI)
    {
        this.windowUI = windowUI;
        this.container = windowUI.m_container;
        this.stageClickFx = new StageClickFx();

        this.rnd = new RandomDataGenerator([(Date.now() * Math.random()).toString()]);
        this.cardShapeFactory = new CardViewFactory(this);
        this.cardFactory = new CardFactory(this);
        this.field = new Field(this);
    }

    launch()
    {
        this.stageClickFx.install();
        GameStatus.init(),
        this.animationQueue = this.field.initField();
        Laya.timer.frameLoop(1, this, this.update);
    }

    stop()
    {
        Laya.timer.clear(this, this.update);
        this.stageClickFx.uninstall();
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

    }


    

    
}