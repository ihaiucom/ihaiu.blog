/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HitNumberStruct from "../../Generates/GameWar3DUI/HitNumberStruct";
import Game from "../../../Game";
import MenuLayer from "../../../GameFrame/Menu/MenuLayer";

export default class HitNumber extends HitNumberStruct
{
    /**  显示了多少帧 */
    public showTick;
    /** 能够显示的帧数 */
    public canShowTick = 80;

    private defaultX = MenuLayer.getLayerWidth(MenuLayer.home) - 700;
    private defalutY = 110;

    public nowHitCount;

    private m_text

    Init()
    {
        this.showTick = 60;
        this.updatePosition();
        this.nowHitCount = 0;
    }

    setValue(value : int)
    {
        this.nowHitCount += value;
        let m_text:fgui.GTextField;
        if (this.nowHitCount <= 50) 
        {
            this.m_level.selectedIndex = 0;
            m_text = this.m_stext;
        }
        else if (this.nowHitCount <= 100) 
        {
            this.m_level.selectedIndex = 1;
            m_text = this.m_mtext;
        }
        else if (this.nowHitCount > 100) 
        {
            this.m_level.selectedIndex = 2;
            m_text = this.m_btext;
        }

        this.visible = true;
        this.showTick = 0;
        this.m_text = m_text;
        m_text.text = this.nowHitCount.toString();

        // 随机连击字底
        let ratio = Number(Math.random().toFixed(2));
        this.m_type.selectedIndex = Math.floor(ratio * 3.9)

        
        this.setScale(1.2,1.2);
        // 数字
        Tween.to(this.m_text, {scaleX : 1.9, scaleY: 1.9}, 70, Ease.linearNone, null,   0, false);
        Tween.to(this.m_text, {scaleX : 1.0, scaleY: 1.0}, 100, Ease.linearNone, null, 70, false);
        // 背景
        Tween.to(this.m_imgBg, {scaleX : 1.4, scaleY: 1.4}, 70, Ease.linearNone, null,   0, false);
        Tween.to(this.m_imgBg, {scaleX : 1.0, scaleY: 1.0},  70, Ease.linearNone, null, 70, false);
        // 击字
        Tween.to(this.m_imgHit, {scaleX : 1.2, scaleY: 1.2}, 70, Ease.linearNone, null,  60, false);
        Tween.to(this.m_imgHit, {scaleX : 1.0, scaleY: 1.0}, 100, Ease.linearNone, null, 130, false);
    }

    onReset()
    {
        this.nowHitCount = 0;
        this.visible = false;
        // Tween.clearAll(this.m_imgBg);
        // Tween.clearAll(this.m_imgHit);
        // Tween.clearAll(this.m_text);

        this.updatePosition();;
    }

    public updatePosition()
    {
        this.x = this.defaultX;
        this.y = this.defalutY;
    }
}