import PropLevelDataItem from "./PropLevelDataItem";
import Prop from "./Prop";
import PropList from "./PropList";
import { PropType } from "./PropType";
import PropHelper from "./PropHelper";

export default class PropLevelDataList
{
	// 属性列表（白板属性，不算上技能和装备的任务白板属性）
    private _list: PropLevelDataItem[] = [];

    // 属性字典 PropLevelDataItem
    private _dict  = {};

    // 当前等级属性字典 Prop
    private currentDict  = {};
    // 下一等级属性字典 Prop
    private nextDict  = {};

    //===========================
    // 当前等级
    //----------------------------
    public addCurrentLevelList(propList: PropList)
    {
        for(let prop of propList.list)
        {
            this.addCurrentLevel(prop);
        }
    }

    public removeCurrentLevelList(propList: PropList)
    {
        for(let prop of propList.list)
        {
            this.removeCurrentLevel(prop);
        }
    }

    public addCurrentLevelArray(props: Prop[])
    {
        if(!props) return;

        for(let prop of props)
        {
            this.addCurrentLevel(prop);
        }
    }

    public removeCurrentLevelArray(props: Prop[])
    {
        for(let prop of props)
        {
            this.removeCurrentLevel(prop);
        }
    }

    /** 添加 当前等级属性 */
    public addCurrentLevel(prop:Prop)
    {
        if(this.currentDict[prop.uid])
        {
            return;
        }

        this.currentDict[prop.uid] = prop;
    }

    /** 移除 当前等级属性 */
    public removeCurrentLevel(prop:Prop)
    {
        if(!this.currentDict[prop.uid])
        {
            return;
        }

        delete this.currentDict[prop.uid];
    }

    
    //===========================
    // 下一等级
    //----------------------------
    public addNextLevelList(propList: PropList)
    {
        for(let prop of propList.list)
        {
            this.addNextLevel(prop);
        }
    }

    public removeNextLevelList(propList: PropList)
    {
        for(let prop of propList.list)
        {
            this.removeNextLevel(prop);
        }
    }

    
    public addNextLevelArray(props: Prop[])
    {
        for(let prop of props)
        {
            this.addNextLevel(prop);
        }
    }

    public removeNextLevelArray(props: Prop[])
    {
        for(let prop of props)
        {
            this.removeNextLevel(prop);
        }
    }
    

  

    /** 添加 下一等级属性 */
    public addNextLevel(prop: Prop)
    {
        if(this.nextDict[prop.uid])
        {
            return;
        }

        this.nextDict[prop.uid] = prop;
    }
    
    /** 移除 下一等级属性 */
    public removeNextLevel(prop:Prop)
    {
        if(!this.nextDict[prop.uid])
        {
            return;
        }

        delete this.nextDict[prop.uid];
    }








    private _filters: PropLevelDataItem[] = [];
    /** 获取属性列表，过滤 */
    public getList(propTypeIds:int[], enableValZero: boolean = false, isAllVisiable: boolean = false): PropLevelDataItem[]
    {
        let list = this._filters;
        list.splice(0, list.length);
        for(let propTypeId of propTypeIds)
        {
            let item = this.get(propTypeId);
            if(item)
            {
                if(!isAllVisiable && item.visiable)
                {
                    continue;
                }

                if(!enableValZero && item.val == 0)
                {
                    continue;
                }
                list.push(item);
            }
        }

        return list;
    }

    
    /** 获取属性列表，过滤 */
    public getListByeId(propIds:int[], enableValZero: boolean = false, isAllVisiable: boolean = false): PropLevelDataItem[]
    {
        let list = this._filters;
        list.splice(0, list.length);
        for(let propId of propIds)
        {
            for(let propType = 0; propType <= PropType.Per; propType ++)
            {
                let propTypeId = PropHelper.GetTypeId(propId, propType);
                let item = this.get(propTypeId);
                if(item)
                {
                    if(!isAllVisiable && item.visiable)
                    {
                        continue;
                    }
    
                    if(!enableValZero && item.val == 0)
                    {
                        continue;
                    }
                    list.push(item);
                }
            }
            
        }

        return list;
    }

    public get list():PropLevelDataItem[]
    {
        return this._list;
    }

    
    /** 获取 */
    public get(propTypeId: int): PropLevelDataItem
    {
        return this._dict[propTypeId];
    }

    /** 获取当前值 */
    public getVal(propTypeId: int):float
    {
        let item = this.get(propTypeId);
        return item ? item.val : 0;
    }
    
    // /** 获取 */
    // public getVal(propId: int): int
    // {
    //     let item = this.get(propId);
    //     return item ? item.val : 0;
    // }
    

    /** 添加 */
    private add(item: PropLevelDataItem)
    {
        this._dict[item.propTypeId] = item;
        this._list.push(item);
    }

    /** 计算 */
    public calculate()
    {
        for(let item of this._list)
        {
            delete this._dict[item.propTypeId];
            item.poolRecover();
        }

        this._list.splice(0, this._list.length);

        // Current
        for(let uid in this.currentDict)
        {
            let prop: Prop = this.currentDict[uid];
            let item = this.get(prop.propTypeId);
            if(!item)
            {
                item = PropLevelDataItem.poolGet();
                item.propTypeId = prop.propTypeId;
                item.val = 0;
                item.nextVal  = 0;
                this.add(item);
            }
            let val = 0;
            if(!isNaN(prop.value))
                val = prop.value;
            item.val += val;
            item.val = Number(item.val.toFixed(4));
        }

        // Next
        for(let uid in this.nextDict)
        {
            let prop: Prop = this.nextDict[uid];
            let item = this.get(prop.propTypeId);
            if(!item)
            {
                item = PropLevelDataItem.poolGet();
                item.propTypeId = prop.propTypeId;
                item.val = 0;
                this.add(item);
            }
            item.nextVal += prop.value;
            item.nextVal = Number(item.nextVal.toFixed(4));
        }

        
        for(let item of this._list)
        {
            item.calculate();
        }

        this._list.sort((a, b)=>
        {
            if(a.val == 0)
                return -1;
            
            if(b.val == 0)
                return 1;

            return a.propTypeId - b.propTypeId;
        });


    }

    /** 清空 */
    public clear()
    {
        for(let item of this._list)
        {
            delete this._dict[item.propTypeId];
            item.poolRecover();
        }
        this._list.splice(0, this._list.length);

        delete this.currentDict;
        delete this.nextDict;
        this.currentDict = {};
        this.nextDict = {};


    }


}