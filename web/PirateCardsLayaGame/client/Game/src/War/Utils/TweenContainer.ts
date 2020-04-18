
export default class TweenContainer
{
    onStart = new Signal();
    onComplete  = new Signal();

    tweens: (Laya.Tween | TweenContainer)[]  = [];

    static PoolGet():TweenContainer
    {
        return Pool.createByClass(TweenContainer);
    }

    recover()
    {
        while(this.tweens.length > 0)
        {
            var tween = this.tweens.shift();
            if(tween)
            {
                tween.recover();
            }
        }
        this.tweens.length = 0;

        this.onStart.removeAll();
        this.onComplete.removeAll();
        this.duration = null;

        Pool.recoverByClass(this);
    }

    private duration: number = null;
    get animationDuration()
    {
        if(this.duration === null)
        {
            var time: number = 0;
            for(var i = 0, len = this.tweens.length; i < len; i ++)
            {
                var tween = this.tweens[i];
                if(tween)
                {
                    if(tween instanceof TweenContainer)
                    {
                        time = Math.max(tween.animationDuration, time);
                    }
                    else
                    {
                        var t = tween._duration + tween._delay;
                        time = Math.max(t, time);
                    }
                }
            }
            this.duration = time;
        }
        
        return this.duration;
    }

    set animationDuration(val: number)
    {
        this.duration = val;
    }



    setAnimationDuration(duration: number)
    {
        this.duration = duration;
        return this;
    }

    restart()
    {
        setTimeout(this.onEnd.bind(this), this.animationDuration);

        this.onStart.dispatch();
        while(this.tweens.length > 0)
        {
            var tween = this.tweens.shift();
            if(tween)
            {
                tween.restart();
            }
        }
    }

    onEnd()
    {
        this.onComplete.dispatch();
        this.recover();
    }
}