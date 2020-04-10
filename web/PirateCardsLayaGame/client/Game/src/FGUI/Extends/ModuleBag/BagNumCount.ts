/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagNumCountStruct from "../../Generates/ModuleBag/BagNumCountStruct";
import ItemData from '../../../GameModule/DataStructs/ItemData';

export default class BagNumCount extends BagNumCountStruct
{

    public setMaxCount(data: number)
    {
        this.maxCount = data;
        this.setItemNum(1);
    }

    public get itemNum(): number
    {
        return Number(this.m_title.text);
    }
    
    private maxCount: number;

    private setItemNum(num: number)
    {
        this.m_title.text = num + "";
    }

    addBtnOnClick()
    {
        if(this.itemNum < this.maxCount)
            this.setItemNum(this.itemNum+1);
    }

    minusBtnOnClick()
    {
        if(this.itemNum > 1)
            this.setItemNum(this.itemNum - 1);
    }

    minBtnOnClick()
    {
        this.setItemNum(1);
    }

    maxBtnOnClick()
    {
        this.setItemNum(this.maxCount);
    }
}