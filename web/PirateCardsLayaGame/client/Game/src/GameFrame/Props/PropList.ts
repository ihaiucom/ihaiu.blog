import Prop from "./Prop";

import { PropType } from "./PropType";
import PropHelper from "./PropHelper";

export default class PropList
{
    private _list: Prop[] = [];
    private _dict = {};

    // 添加
    public add(prop: Prop)
    {
        this._dict[prop.propTypeId] = prop;
        this._list.push(prop);
        return this;
    }

    // 获取
    public get(propTypeId: int): Prop
    {
        return this._dict[propTypeId];
    }

    // 获取值
    public getVal(propTypeId: int): float
    {
        let prop = this.get(propTypeId);
        if(prop)
            return prop.value;
        return 0;
    }

    // 添加值
    public addOrSetVal(propId:int, val:float, propType: PropType = PropType.Base ): Prop
    {
        let propTypeId = PropHelper.GetTypeId(propId, propType);
        let prop = this.get(propTypeId);
        if(prop)
        {

            if(isNaN(val))
                val = 0;
            prop.value += val;
        }
        else
        {
            prop = Prop.Create(propId,  val, propType);
            this.add(prop);
        }
        return prop;
    }

    public setVal(propId:int, val:float, propType: PropType = PropType.Base ): Prop
    {
        let propTypeId = PropHelper.GetTypeId(propId, propType);
        let prop = this.get(propId);
        if(prop)
        {
            if(isNaN(val))
                val = 0;
            prop.value += val;
        }
        else
        {
            prop = Prop.Create(propId, val, propType);
            this.add(prop);
        }
        return prop;
    }

    /** 获取列表 */
    public get list(): Prop[]
    {
        return this._list;
    }

    public clear(): void {
        this._dict = {};
        this._list = [];;
    }

}