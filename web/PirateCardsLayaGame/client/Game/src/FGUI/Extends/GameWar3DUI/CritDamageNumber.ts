/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CritDamageNumberStruct from "../../Generates/GameWar3DUI/CritDamageNumberStruct";

export default class CritDamageNumber extends CritDamageNumberStruct
{
    private static pool = [];
    static poolGet():CritDamageNumber
    {
        let item:CritDamageNumber;
        if(this.pool.length > 0)
        {
            item = this.pool.shift();
        }
        else
        {
            item = CritDamageNumber.createInstance();
        }
        item.visible = true;

        
        return item;
    }

    poolRecover()
    {
        if(CritDamageNumber.pool.indexOf(this) == -1 )
        {
            CritDamageNumber.pool.push(this);
        }
    }

    private startX:number = 0;

    private startY:number = 0;

    private startIndex:number = 0;

    private nowIndex:number   = 0;

    private endIndex:number   = 0;

    private startDir:number   = 1;

    init(num : number, x : number, y : number, path:any, dir:number)
    {

        this.setValue(num);

        // 随机位置
        let ratio = Number(Math.random().toFixed(2));
        this.startX = this.x = (x - 40 + 80 * ratio);
        this.startY = this.y = (y - 80 * ratio);
        this.startIndex = 0;
        this.nowIndex   = 0;
        this.endIndex   = path.length;
        this.startDir   = dir;

        this.setScale(0.0,0.0);
        this.alpha = 1.0;

        // 天女散花版
        // Tween.to(this, { scaleX: 1.7, scaleY: 1.7 }, 100, Ease.linearNone, null, 0, false);
        // Tween.to(this, { scaleX: 0.9, scaleY: 0.9 }, 150, Ease.linearNone, null, 100, false);
        // Tween.to(this, { alpha: 0.3 }, 800, Ease.linearNone, Laya.Handler.create(this, this.release), 250, false);
        // Laya.timer.frameLoop(1, this, this.updatePosition, [path]);

        // 家教版
        Tween.to(this, { scaleX: 1.6, scaleY: 1.6 }, 112, Ease.circInOut, null, 0, false);
        Tween.to(this, { scaleX: 0.8, scaleY: 0.8 }, 112, Ease.linearNone, null, 112, false);
        Tween.to(this, { y: this.startY - 50,alpha: 0.0 }, 400, Ease.linearNone, Laya.Handler.create(this, this.release), 750, false);

    }

    /**
     * 设置伤害数值
     * @param value 伤害的数字大小
     */
    setValue(value : int)
    {
        this.m_stext.text = value.toString();
        this.m_otext.text = value.toString();
    }

    /**
     * 更新位置
     * @param path 
     */
    updatePosition(path:any)
    {  
        this.nowIndex++;
        if(this.nowIndex < 15) 
        {
            return;
        }

        if (this.startIndex > this.endIndex - 1)
        {
            this.startIndex = 0;
            this.endIndex   = 0;
            this.startDir   = 1;
            Laya.timer.clear(this, this.updatePosition);
            this.release();
            return;
        }

        let point = path[this.startIndex];
        this.x = this.startX + point.x * this.startDir;
        this.y = this.startY + point.y;

        this.startIndex++;
    }

    public release()
    {
        this.alpha = 1.0;
        this.setScale(1.0,1.0);
        this.visible = false;
        Laya.Tween.clearAll(this);
        Laya.timer.clearAll(this);
        this.removeFromParent();
        this.poolRecover();
    }
}