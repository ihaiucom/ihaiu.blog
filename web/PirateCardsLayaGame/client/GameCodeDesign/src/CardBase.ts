import Point from "./Datas/Point";

export default class CardBase
{
    /** 设置卡牌位置 */
    setCoordinate(point: Point)
    {

    }

    /** 缓动移动卡牌位置到制定位置 */
    moveTo(point: Point, time: number): Laya.Tween
    {

    }

    /** 获取卡牌视图坐标 x */
    getCenterX(): number
    {

    }

    /** 获取卡牌视图坐标 y */
    getCenterY(): number
    {

    }

    /** 播放被闪电攻击的特效 */
    runLightning()
    {

    }

    /** 获取视图缩放缓动 */
    getScaleTween(view, tweenContainer?:TweenContainer ) : TweenContainer
    {

    }
}