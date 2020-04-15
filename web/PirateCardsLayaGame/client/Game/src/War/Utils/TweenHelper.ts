import Consts from "../Enums/Consts";
import TweenContainer from "./TweenContainer";
import TweenUtil from "./TweenUtil";

export default class TweenHelper
{
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