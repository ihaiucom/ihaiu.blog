/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MissDamageNumberStruct from "../../Generates/GameWar3DUI/MissDamageNumberStruct";

export default class MissDamageNumber extends MissDamageNumberStruct
{
    private static pool = [];
    static poolGet():MissDamageNumber
    {
        let item:MissDamageNumber;
        if(this.pool.length > 0)
        {
            item = this.pool.shift();
        }
        else
        {
            item = MissDamageNumber.createInstance();
        }
        item.visible = true;

        return item;
    }

    poolRecover()
    {
        if(MissDamageNumber.pool.indexOf(this) == -1 )
        {
            MissDamageNumber.pool.push(this);
        }
    }

    private startX:number = 0;

    private startY:number = 0;

    private startIndex:number = 0;

    private endIndex:number   = 0;

    private startDir:number   = 1;

    init(num : number, x : number, y : number, path:any, dir:number)
    {
        this.startX = this.x = x;
        this.startY = this.y = y;
        this.startIndex = 0;
        this.endIndex   = path.length;
        this.startDir   = dir;

        this.setScale(0.5,0.5);
        this.alpha = 1.0;
        Tween.to(this, {scaleX : 1.0,scaleY : 1.0}, 300, Ease.linearNone, null, 0, false);
        Tween.to(this, {scaleX : 0.7,scaleY : 0.7,alpha : 0.3}, 800, Ease.linearNone, Laya.Handler.create(this,this.release), 400, false);
        Laya.timer.frameLoop(2, this, this.updatePosition, [path]);
    }

    /**
     * 更新位置
     * @param path 
     */
    updatePosition(path:any)
    {  
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