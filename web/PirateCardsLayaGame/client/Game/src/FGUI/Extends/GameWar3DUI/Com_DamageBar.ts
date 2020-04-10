/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Com_DamageBarStruct from "../../Generates/GameWar3DUI/Com_DamageBarStruct";

export default class Com_DamageBar extends Com_DamageBarStruct
{
    /** 下标 */
    private _index : number = -1;
    public get index() : number
    {
        return this._index;
    }
    public set index(val : number)
    {
        this._index = val;
    }

    public Init(index : number)
    {
        this.index = index;
        
    }

    public ResetInfo(name : string)
    {
        this.m_playerName.text = (this.index + 1).toString() + "." + name;
        this.m_damageNum.text = "0 (0%)";
        this.m_damageBar.value = 0;
        
    }
    /**
     * 设置伤害信息
     * @param name 玩家名字
     * @param damage 伤害值
     * @param percent 所占伤害百分比
     * @param barVal 进度条长度
     */
    public SetInfo(name : string, damage : number, percent : number, barVal : number)
    {
        this.m_playerName.text = (this.index + 1).toString() + "." + name;
        this.m_damageNum.text = Math.round(damage) + " (" + Math.round(percent) + "%)";
        this.m_damageBar.value = barVal;
    }
}