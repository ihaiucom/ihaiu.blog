/*
 * @Descripttion: 
 * @version: 
 * @Author: ZengFeng
 * @Date: 2019-06-27 12:51:37
 * @LastEditors: ZengFeng
 * @LastEditTime: 2019-06-27 12:51:37
 */
import { PropType } from "./PropType";
import PropHelper from "./PropHelper";
import Game from "../../Game";
import PropertyConfig from "../../Config/ConfigExtends/PropertyConfig";
import { PropGroupType } from "./PropGroupType";
import { ConfigValueType } from "../../Config/ConfigValueType";
import IntMath from "../../GameWar/CoreLib/IntMath/IntMath";


export default class Prop extends protoSources.CarryProp
{
    private static UID:int = 0;
    uid;
    constructor(properties?: proto.ICarryProp)
    {
        super(properties);
        this.uid = Prop.UID ++;
    }
    
    /** 属性类型 */
    private _propType: PropType;
    /** 属性ID */
    private _propId: int;
    /** 属性类型和属性ID组合后的ID */
    private _propTypeId: int;
    /** 值 */
    private _value: float = 0;

    clone():Prop
    {
        let d = new Prop();
        d._propType = this._propType;
        d._propId = this._propId;
        d._propTypeId = this._propTypeId;
        d.value = this.value;
        if(isNaN(this.value))
            d.value = 0;
        return d;
    }

    copyValue(p: Prop): Prop
    {
        this._propType = p._propType;
        this._propId = p._propId;
        this._propTypeId = p._propTypeId;
        this.value = p.value;
        if(isNaN(p.value))
            this.value = 0;
        return this;
    }

    public toString()
    {
        return `Prop {id:${this.propId}, val:${this.value}, field:${this.field}, name:${this.name}, type:${this.propType}, }`;
    }

    public static ToStr(list:Prop[]): string
    {
        let str = "";
        for(let prop of list)
        {
            str += "    " + prop.toString();
        }

        return str;
    }

    /**
     * 创建Prop
     * @param propId  属性ID
     * @param propVal  值
     * @param propType 属性类型
     */
    public static Create(propId: int, propVal: float, propType: PropType = PropType.Base): Prop
    {
        let prop = new Prop();
        prop._propTypeId = PropHelper.GetTypeId(propId, propType);
        prop._propId = propId;
        prop._propType = propType;
        prop.value = propVal;
        
        if(isNaNOrEmpty(propVal))
            prop.value = 0;
        return prop;
    }

    /**
     * 创建Prop
     * @param propTypeId 属性类型ID
     * @param propVal 值
     */
    public static CreateByTypeid(propTypeId: int, propVal: float): Prop
    {
        let prop = new Prop();
        prop._propTypeId = propTypeId;
        prop._propId = PropHelper.PropTypeid2Id(propTypeId);
        prop._propType = PropHelper.PropTypeid2Type(propTypeId);
        prop.value = propVal;
        if(isNaN(propVal))
            prop.value = 0;
        return prop;
    }

    /**
     * 创建Prop
     * @param proField 属性字段
     * @param propVal 值
     */
    public static CreateByField(proField: string, propVal: float)
    {
        let prop = new Prop();
        prop._propId = PropHelper.GetPropId(proField);
        prop._propType = PropType.Base;
        prop._propTypeId = PropHelper.GetTypeId(prop._propId, prop._propType);
        prop.value = propVal;
        if(isNaN(propVal))
            prop.value = 0;
        return prop;
    }


    // Property id
    public get propId(): int
    {
        return this._propId;
    }

    public set propId(value: int)
    {
        this._propId = value;
        this._propTypeId = PropHelper.GetTypeId(this._propId, this._propType);
    }

    // Property type
    public get propType():PropType
    {
        return this._propType;
    }

    public set propType(value: PropType)
    {
        this._propType = value;
        this._propTypeId = PropHelper.GetTypeId(this._propId, this._propType);
    }

    // typeId
    public get propTypeId(): int
    {
        return this._propTypeId;
    }

    public set propTypeId(value: int)
    {
        this._propTypeId = value;
        this._propId = PropHelper.PropTypeid2Id(value);
        this._propType = PropHelper.PropTypeid2Type(value);
    }

    // propTypeId 别名
    public get id(): int
    {
        return this._propTypeId;
    }

    public set id(value: int)
    {
        this.propTypeId = value;
    }


    // 值
    public get value(): float
    {
        return this._value;
    }

    public set value(value: float)
    {
        if (value == 249) {
            console.log()
        }
        this._value = value;
    }

    // 视图值: 80 或者 80%
    public get valueView(): string
    {
        switch(this.propType)
        {
            case PropType.Per:
                return this.value / 100 + "%";
            case PropType.Base:
            default:
                switch(this.config.ValueType)
                {
                    case ConfigValueType.TenThousand:
                        return this.value  / 100 + "%";
                    case ConfigValueType.Normal:
                    default:
                        return this.value + "";
                }
        }
    }
    
    // 名称+视图值: 物功:80 或者 命中:80%
    public get valueViewText(): string
    {
        return  this.name + ":" +  this.valueView;
    }




    /** 配置 */
    public get config():PropertyConfig
    {
        return Game.config.property.getConfig(this._propId);
    }


    /** 组类型 */
    public get groupType():PropGroupType
    {
        return this.config.groupType;
    }

    
    /** 是否可以回滚 */
    public get enableRevert(): boolean
    {
        return this.groupType != PropGroupType.Nonrevert;
    }

    /** 属性字段名 */
    public get field():string
    {
        return this.config.field;
    }

    /** 显示名称 */
    public get name(): string
    {
        let per_name = this.propType == PropType.Base ? "" : "加成";
        return this.config.name + per_name;
    }

    /** 图标URL */
    public get icon(): string
    {
        return this.config.iconUrl;
    }

    /** 是否可见 */
    public get visiable():boolean
    {
        return this.config.visible;
    }

    /** 显示方式 是否是百分比 */
    public get isPercent(): boolean
    {
        return this._propType == PropType.Per || this.config.ValueType == 2;
    }

    
}

proto.CarryProp = Prop;
window['Prop'] = Prop;