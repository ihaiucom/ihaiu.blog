import Consts from "../Enums/Consts";
import TweenContainer from "./TweenContainer";
import TweenUtil from "./TweenUtil";
import SoundController from "../Logics/SoundController";
import SoundConsts from "../Enums/SoundConsts";

export default class TweenHelper
{
    static spriteHide(view: fgui.GComponent)
    {
        Laya.Tween.clearAll(view);
        Laya.Tween.to(view, 
            {
                scaleX: 0,
                scaleY: 0,
                rotation: 360,
                alpha: 0
            }, 
            700, 
            null,
            Laya.Handler.create(this, ()=>
            {
                view.visible = false;
                view.rotation = 0;
                view.alpha = 1;
                view.scaleX = 1;
                view.scaleY = 1;
            }));
    }

    
    static spriteShow(view: fgui.GComponent)
    {
        
        view.visible = true;
        view.alpha = 1;
        Laya.Tween.clearAll(view);
        Laya.Tween.to(view, 
            {
                scaleX: 0,
                scaleY: 0,
                alpha:1
            }, 
            100
            );

        Laya.Tween.to(view, 
            {
                scaleX: 1.5,
                scaleY: 1.5
            }, 
            250, 
            null,
            null,
            100);
            

        Laya.Tween.to(view, 
            {
                scaleX: 1,
                scaleY: 1
            }, 
            100, 
            null,
            null,
            100 + 250);
    }

    /** 翻转卡牌， 翻转前半 */
    static turnAnimationStart(tweenContainer: TweenContainer, view: fgui.GComponent) 
    {
        if(!tweenContainer)  tweenContainer = new TweenContainer();

        var t1 = TweenUtil.to(view, 
            {
                scaleX: Consts.ScaleZoom,
                scaleY: Consts.ScaleZoom
            }, 
            Consts.ScaleSpeed);
        tweenContainer.tweens.push(t1);

        var t2 = TweenUtil.to(view, 
            {
                scaleX: 0.1,
                scaleY: Consts.FlipZoom
            }, 
            Consts.FlipSpeed / 2, null, null, Consts.ScaleSpeed, false);
        tweenContainer.tweens.push(t2);

        return tweenContainer;
    }
    
    /** 翻转卡牌， 翻转后半 */
    static  turnAnimationEnd(tweenContainer: TweenContainer, view: fgui.GComponent) {
        
        if(!tweenContainer)  tweenContainer = new TweenContainer();

        var t1 = TweenUtil.to(view, 
            {
                scaleX: Consts.ScaleZoom,
                scaleY: Consts.ScaleZoom
            }, 
            Consts.FlipSpeed / 2);

        tweenContainer.tweens.push(t1);

        
        var t2 = TweenUtil.to(view, 
            {
                scaleX: 1,
                scaleY: 1
            }, 
           Consts.FlipSpeed);

        tweenContainer.tweens.push(t2);
        
        return tweenContainer;
    }

    static TurnCard(viewFrom: fgui.GComponent, viewTo: fgui.GComponent)
    {
        SoundController.instance.playSound(SoundConsts.Card);
        
        viewTo.setScale(0, Consts.FlipZoom);
        var tweenContainer = TweenHelper.turnAnimationStart(null, viewFrom);
        tweenContainer.onComplete.add(()=>
        {
            viewFrom.visible = false;
            viewTo.visible = true;
            viewTo.scaleX = 0.1;
            TweenHelper.turnAnimationEnd(null, viewTo).restart();
        }, this);
        tweenContainer.restart();

    }



    static  scaleIn(tweenContainer: TweenContainer, view: fgui.GComponent, o = true) 
    {
        if(!tweenContainer)  tweenContainer = new TweenContainer();

        view.enabled = false;

        var t1 = TweenUtil.to(view, 
            {
                scaleX: 0,
                scaleY: 0
            }, 
            .25 * Consts.ShowTime, null, Laya.Handler.create(this, ()=>{
                view.setScale(1, 1);
                view.visible = false;
                view.enabled = true;
            }));

        tweenContainer.tweens.push(t1);

        return tweenContainer;

    }
    static  scaleOut(tweenContainer, view: fgui.GComponent, scale = 1) 
    {
        view.setScale(0, 0);
        view.visible = true;
        view.enabled = true;

        
        if(!tweenContainer)  tweenContainer = new TweenContainer();
        
        var t1 = TweenUtil.to(view, 
            {
                scaleX: scale,
                scaleY: scale
            }, 
            .25 * Consts.ShowTime);

        tweenContainer.tweens.push(t1);

        return tweenContainer;

    }
}