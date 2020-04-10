/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CritNumberStruct from "../../Generates/GameWarUI/CritNumberStruct";

export default class CritNumber extends CritNumberStruct
{
    private static pool = [];
    static poolGet():CritNumber
    {
        let item:CritNumber;
        if(this.pool.length > 0)
        {
            item = this.pool.shift();
        }
        else
        {
            item = CritNumber.createInstance();
        }
        item.visible = true;

        return item;
    }

    poolRecover()
    {
        if(CritNumber.pool.indexOf(this) == -1 )
        {
            CritNumber.pool.push(this);
        }
    }

    init(num : number, x : number, y : number)
    {
        this.setValue(num);
        this.x = x;
        this.y = y;
        Tween.to(this, {y : this.y - 100}, 1000, Ease.linearNone, Handler.create(this, this.release), 0, false);
    }

    

    /**
     * 设置伤害数值
     * @param value 伤害的数字大小
     */
    setValue(value : int)
    {
        this.m_Text.text = '暴击' + value.toString();
    }

    public release()
    {
        this.visible = false;
        this.removeFromParent();
        this.poolRecover();
    }
}