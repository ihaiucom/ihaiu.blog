/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Btn_teamListStruct from "../../Generates/GameWar3DUI/Btn_teamListStruct";

export default class Btn_teamList extends Btn_teamListStruct
{
    /** 对应的下标，如果是-1代表没有初始化 */
    private _index : number = -1;



    public get index() : number
    {
        return this._index
    }
    public set index(val : number)
    {
        this._index = val;
    }

    public Init(index : number)
    {
        this.index = index;
        if(index == 0)
        {
            this.m_type.setSelectedPage("team");
        }
        else if(index == 1)
        {
            this.m_type.setSelectedPage("damage");
        }
    }

    

    
}