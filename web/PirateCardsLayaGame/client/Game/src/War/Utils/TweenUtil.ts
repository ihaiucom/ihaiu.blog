import Tween = Laya.Tween;
export default class TweenUtil
{
    /**
     * 缓动对象的props属性到目标值。
     * @param	target 目标对象(即将更改属性值的对象)。
     * @param	props 变化的属性列表，比如{x:100,y:20,ease:Ease.backOut,complete:Handler.create(this,onComplete),update:new Handler(this,onComplete)}。
     * @param	duration 花费的时间，单位毫秒。
     * @param	ease 缓动类型，默认为匀速运动。
     * @param	complete 结束回调函数。
     * @param	delay 延迟执行时间。
     * @param	coverBefore 是否覆盖之前的缓动。
     * @param	autoRecover 是否自动回收，默认为true，缓动结束之后自动回收到对象池。
     * @return	返回Tween对象。
     */
    static to(target: any, props: any, duration: number, ease: Function = null, complete: Handler = null, delay: number = 0, coverBefore: boolean = false, autoRecover: boolean = true): Tween {
        return Pool.getItemByClass("tween", Tween)._create(target, props, duration, ease, complete, delay, coverBefore, true, autoRecover, false);
    }

    /**
     * 从props属性，缓动到当前状态。
     * @param	target 目标对象(即将更改属性值的对象)。
     * @param	props 变化的属性列表，比如{x:100,y:20,ease:Ease.backOut,complete:Handler.create(this,onComplete),update:new Handler(this,onComplete)}。
     * @param	duration 花费的时间，单位毫秒。
     * @param	ease 缓动类型，默认为匀速运动。
     * @param	complete 结束回调函数。
     * @param	delay 延迟执行时间。
     * @param	coverBefore 是否覆盖之前的缓动。
     * @param	autoRecover 是否自动回收，默认为true，缓动结束之后自动回收到对象池。
     * @return	返回Tween对象。
     */
    static from(target: any, props: any, duration: number, ease: Function = null, complete: Handler = null, delay: number = 0, coverBefore: boolean = false, autoRecover: boolean = true): Tween {
        return Pool.getItemByClass("tween", Tween)._create(target, props, duration, ease, complete, delay, coverBefore, false, autoRecover, false);
    }
}