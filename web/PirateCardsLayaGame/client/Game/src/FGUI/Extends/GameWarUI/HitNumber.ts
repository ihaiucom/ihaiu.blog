/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HitNumberStruct from "../../Generates/GameWarUI/HitNumberStruct";

export default class HitNumber extends HitNumberStruct
{
    /**  显示了多少帧 */
    public showTick;
    /** 能够显示的帧数 */
    public canShowTick = 60;

    private defaultX = 1400 - 400;
    private defalutY = 120;

    public nowHitCount;

    Init()
    {
        this.showTick = 60;
        this.updatePosition();
        this.nowHitCount = 0;
    }

    setValue(value : int)
    {
        this.nowHitCount += value;
        this.m_text.text = this.nowHitCount.toString();
        this.visible = true;
        this.setScale(1.2, 1.2);
        this.showTick = 0;
        Tween.to(this, {scaleX : 1, scaleY: 1}, 200, Ease.linearNone, null, 0, true);
    }

    onReset()
    {
        this.nowHitCount = 0;
        this.visible = false;
        this.setScale(1.0, 1.0);
        this.updatePosition();;
    }

    public updatePosition()
    {
        this.x = this.defaultX;
        this.y = this.defalutY;
    }
}