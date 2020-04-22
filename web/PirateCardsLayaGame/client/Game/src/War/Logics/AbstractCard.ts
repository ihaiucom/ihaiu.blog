import WarGame from "../WarGame";
import CardConfig from "../../Config/ConfigExtends/CardConfig";
import CardView from "../../FGUI/Extends/GameHome/CardView";
import { CardScoreType } from "../Enums/CardScoreType";
import Point from "../Datas/Point";
import TweenUtil from "../Utils/TweenUtil";
import FxShootLightningBig from "../../FGUI/Extends/GameHome/FxShootLightningBig";
import TweenContainer from "../Utils/TweenContainer";
import Consts from "../Enums/Consts";
import TweenHelper from "../Utils/TweenHelper";
import SoundController from "./SoundController";
import SoundConsts from "../Enums/SoundConsts";

export default abstract class AbstractCard
{
    /** 游戏主类 */
    game: WarGame;
    /** 卡牌配置 */
    config: CardConfig;
    /** 卡牌视图 */
    view: CardView;
    
    /** 卡牌类型 */
    type: CardScoreType = CardScoreType.None;

    
    constructor()
    {
        this.view = CardView.PoolGet();
        this.reset();
    }
    

    /** 刷新步骤 */
    abstract stepUpdate();
    /** 是否是坏牌 */
    abstract isNegative(): boolean;
    /** 获取分数 */
    abstract getScore(): number;
    /** 获取金币数量 */
    abstract getGoldValue(): number;
    /** 减少血量, 延迟 */
    abstract reduceScoreInNSeconds(score: number, delay: number) ;
    /** 添加血量, 延迟 */
    abstract increaseScoreInNSeconds(score: number, delay: number) ;
    
    
    //=====================================
    // 对象池
    //-------------------------------------

    /** 丢回对象池 */
    poolRecover()
    {
        this.reset();
        Pool.recoverByClass(this);
    }

    /** 重置 */
    reset()
    {
        this.view.setXY(-300, -400);
        this.view.setScale(1, 1);
    }

    
    //=====================================
    // 配置
    //-------------------------------------

    /** 设置空配置 */
    SetEmpty()
    {
        this.SetConfig(null);
    }

    /** 设置配置 */
    SetConfig(config: CardConfig)
    {
        this.config = config;
        this.view.game = this.game;
        this.view.SetConfig(config);
        this.view.SetCard(this);
    }

    /** 是否是空牌 */
    get isEmpty()
    {
        return this.type == CardScoreType.None;
    }

    /** 是否是英雄 */
    get isHero(): boolean
    {
        return this.type == CardScoreType.Hero;
    }

    /** 是否是Boss */
    get isBoss(): boolean
    {
        return this.type == CardScoreType.Boss;
    }

    /** 是否是桥 */
    get isTrap(): boolean
    {
        return this.type == CardScoreType.Trap;
    }

    /** 是否是加农炮 */
    get isCannon(): boolean
    {
        return this.type == CardScoreType.Cannon;
    }

    /** 等级 */
    get level(): number
    {
        return this.config.level;
    }





    
    //=====================================
    // 设置位置
    //-------------------------------------
    
    /** 设置卡牌位置 */
    setCoordinate(point: Point)
    {
        this.game.container.addChild(this.view);
        this.view.setXY(point.x, point.y);
    }

    /** 缓动移动卡牌位置到制定位置 */
    moveTo(point: Point, time: number): Laya.Tween
    {
        this.game.container.addChild(this.view);
        return TweenUtil.to(this.view, point, time);
    }

    

    /** 获取卡牌视图坐标 x */
    getCenterX(): number
    {
        return this.view.x;
    }

    /** 获取卡牌视图坐标 y */
    getCenterY(): number
    {
        return this.view.y;
    }


    //=====================================
    // 翻转卡牌
    //-------------------------------------
    
    /** 翻转卡牌， 设置初始缩放状态 */
    endTurnAnimationStart()
    {
        this.view.setScale(0, Consts.FlipZoom);
    }

    /** 翻转卡牌， 翻转缓动动画过程--前半 */
    startTurnAnimation(endCallback: () => void, endCaller:any): TweenContainer
    { 
        // 翻转前半
        var tweenContainer = TweenHelper.turnAnimationStart(null, this.view);
        tweenContainer.onStart.add(this.playCardSoundInSeconds, this);
        tweenContainer.onComplete.add(this.removeShapeFromStage, this);
        tweenContainer.onComplete.add(endCallback, endCaller);
        return tweenContainer;
    }


    /** 翻转卡牌， 翻转缓动动画过程--后半 */
    endTurnAnimationEnd()
    {
        // 如果是Boss， 播放声音
        if(this.isBoss)
        {
            SoundController.instance.playSound(SoundConsts.BossAppearance);
        }
        this.view.scaleX = 0.1;
        
        // 翻转后半
        TweenHelper.turnAnimationEnd(null, this.view).restart();
    }


    /** 翻转卡牌， 延迟播放， 卡牌声音 */
    playCardSoundInSeconds()
    {
        setTimeout(this.playCardSound.bind(this), 50)
    }

    /** 翻转卡牌， 卡牌声音 */
    playCardSound()
    {
        SoundController.instance.playSound(SoundConsts.Card);
    }

    









    //=====================================
    // 移除卡牌
    //-------------------------------------



    /** 移除 */
    removeChild(): TweenContainer
    {
        var tweenContainer = TweenContainer.PoolGet();
        var tween = TweenUtil.to(this.view, {scaleX: 1.1, scaleY: 1.1}, 50);
        tweenContainer.tweens.push(tween);

        tween = TweenUtil.to(this.view, {scaleX: 1, scaleY: 1}, 50, null, null, 50);
        tweenContainer.tweens.push(tween);

        
        tween = TweenUtil.to(this.view, {scaleX: 1.1, scaleY: 1.1}, 50, null, null, 50 + 50);
        tweenContainer.tweens.push(tween);

        tween = TweenUtil.to(this.view, {scaleX: 0, scaleY: 0}, 80, null, Laya.Handler.create(this, this.removeShapeFromStage), 50 + 50 + 50);
        tweenContainer.tweens.push(tween);

        return tweenContainer;
    }

    

    /** 从场景移除视图 */
    removeShapeFromStage()
    {
        if(this.view.parent)
        {
            this.view.removeFromParent();
            this.delayPoolRecover();
        }
    }


    /** 延迟移除对象池 */
    delayPoolRecover()
    {
        Laya.timer.frameOnce(10, this, this.poolRecover);
    }










    //=====================================
    // 其他
    //-------------------------------------

    
    // 播放被闪电攻击的特效
    runLightning()
    {
        var fx = FxShootLightningBig.PoolGet();
        fx.setXY(this.getCenterX(), this.getCenterY());
        this.game.container.addChild(fx);
        return fx.Play();
    }

    
    /** 获取视图缩放缓动 */
    getScaleTween(view, tweenContainer?:TweenContainer ) 
    {
        if(!tweenContainer)
        {
            tweenContainer = TweenContainer.PoolGet();
        }
        var tween = TweenUtil.to(view, {scaleX: 2.5, scaleY: 2.5}, 200);
        tweenContainer.tweens.push(tween)
        
        tween = TweenUtil.to(view, {scaleX: 1, scaleY:  1}, 200, null, null, 200);
        tweenContainer.tweens.push(tween)
        return tweenContainer;
    }


}