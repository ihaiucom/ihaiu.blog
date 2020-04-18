
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
        Laya.timer.clearAll(this);
        this.recoverArray(this.tweens);
        this.tweens.length = 0;

        this.onStart.removeAll();
        this.onComplete.removeAll();
        this.duration = null;
        this._delay = 0;

        Pool.recoverByClass(this);
    }

    recoverArray(tweens: (Laya.Tween | TweenContainer)[] | TweenContainer)
    {
        if(tweens == null) return;

        if(tweens instanceof Array)
        {
            for(var item of tweens)
            {
                if(item == null) continue;

                if(item instanceof Array)
                {
                    this.recoverArray(item);
                }
                else
                {
                    item.recover();
                }
            }
        }
        else
        {
            tweens.recover();
        }
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
                    else if(tween instanceof Array)
                    {
                        if(tween.length > 0)
                        {
                            var item = tween[0];
                            if(item)
                            { 
                                if(item instanceof TweenContainer)
                                {
                                    time = Math.max(item.animationDuration, time);
                                }
                                else
                                {
                                    var t = item._duration + item._delay;
                                    time = Math.max(t, time);
                                }
                            }
                            else
                            {
                                this.duration = 100;
                            }
                        }
                        else
                        {
                            this.duration = 100;
                        }
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

    _delay: number = 0;
    setFirstDelay(delay: number)
    {
        this._delay = delay;

        // if(this.tweens.length > 0)
        // {
        //     var item = this.tweens[0];
        //     if(item)
        //     {
        //         if(item instanceof Laya.Tween)
        //         {
        //             item._delay = delay;
        //         }
        //         else if(item instanceof TweenContainer)
        //         {
        //             item.setFirstDelay(delay);
        //         }
        //     }
        // }
    }

    restart()
    {
        setTimeout(this.onEnd.bind(this), this.animationDuration);

        this.onStart.dispatch();
        console.log(this.tweens);
        if(this._delay > 0)
        {
            Laya.timer.once(this._delay, this, this.playTweens);
        }
        else
        {
            this.playTweens();
        }
    }

    private playTweens()
    {

        this.playArray(this.tweens);
    }

    playArray(tweens: (Laya.Tween | TweenContainer)[] | TweenContainer)
    {
        if(tweens == null) return;

        if(tweens instanceof Array)
        {
            for(var item of tweens)
            {
                if(item == null) continue;

                if(item instanceof Array)
                {
                    this.playArray(item);
                }
                else
                {
                    if(item instanceof Laya.Tween)
                    {
                        if(!item['_props'] || item['_props'].length == 0)
                        {
                            console.error("没设置属性");
                            continue;
                        }
                    }
                    item.restart();
                }
            }
        }
        else
        {
            tweens.restart();
        }
    }

    onEnd()
    {
        this.onComplete.dispatch();
        Laya.timer.once(3000, this, this.recover);
    }
}