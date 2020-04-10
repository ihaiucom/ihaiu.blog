/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import NormalNumberStruct from "../../Generates/GameWarUI/NormalNumberStruct";

export default class NormalNumber extends NormalNumberStruct
{
    private static pool = [];
    static poolGet():NormalNumber
    {
        let item:NormalNumber;
        if(this.pool.length > 0)
        {
            item = this.pool.shift();
        }
        else
        {
            item = NormalNumber.createInstance();
        }
        item.visible = true;

        return item;
    }

    poolRecover()
    {
        if(NormalNumber.pool.indexOf(this) == -1 )
        {
            NormalNumber.pool.push(this);
        }
    }
    
    init(num : number, x : number, y : number)
    {
        this.setValue(num);
        this.x = x;
        this.y = y;

        
        Tween.to(this, {y : this.y -100}, 1000, Ease.linearNone, Handler.create(this, this.release), 0, false);
        this.name = "normalNumber";
    }
    /**
     * 设置伤害数值
     * @param value 伤害的数字大小
     */
    setValue(value : int)
    {
        this.m_text.text = value.toString();
    }

    public release()
    {
        this.visible = false;
        this.removeFromParent();
        this.poolRecover();
    }
}