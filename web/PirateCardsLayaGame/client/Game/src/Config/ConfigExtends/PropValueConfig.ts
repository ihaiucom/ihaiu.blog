
import {PropValueConfigLang} from "../ExcelConfigLange";
import Prop from "../../GameFrame/Props/Prop";
import PropHelper from "../../GameFrame/Props/PropHelper";
import PropertyConfig from "./PropertyConfig";
import PropertyConfigReader from "../ReaderExtends/PropertyConfigReader";
import PropList from "../../GameFrame/Props/PropList";
import Game from "../../Game";
export default class PropValueConfig extends PropValueConfigLang
{
    private _propTypeId:int = 0;
    /** 等级 品质 属性缓存 */
    private _levelQualityPropMap:Map<int, Prop> = new Map<int, Prop>();
    /** 等级 成长缓存 */
    private _levelUpgradConfigMap:Map<int, excelconfig.DTPropGrowupStep> = new Map<int, excelconfig.DTPropGrowupStep>();

    /** 当前属性对应的 属性类型ID */
    get PropTypeId(): int
    {
        if(this._propTypeId == 0)
        {
            this._propTypeId = PropHelper.GetPropTypeId(this.PropName);
        }
        return this._propTypeId;
    }

    get PropertyConfig():PropertyConfig
    {
        return PropertyConfigReader.GetConfigByPropTypeField(this.PropName);
    }

    /** 获取等级成长配置 */
    GetUpgradConfig(level:int):excelconfig.DTPropGrowupStep
    {
        if(this._levelUpgradConfigMap.has(level))
        {
            return this._levelUpgradConfigMap.get(level);
        }

        for(let i = this.Upgrade.length - 1; i >= 0; i --)
        {
            let item:excelconfig.DTPropGrowupStep = <excelconfig.DTPropGrowupStep> this.Upgrade[i];
            if(level >= item.Level)
            {
                this._levelUpgradConfigMap.set(level, item);
                return item;
            }
        }

    }

    /** 获取品质 系数 */
    GetQualityRangeRatio(quality:int):intwf
    {
        if(quality > this.RangeRatio.length)
        {
            quality = this.RangeRatio.length
        }
        return this.RangeRatio[quality - 1];
    }

    /**
     * 获取等级、品质 属性
     * @param level  等级
     * @param quality 品质
     * @param initVal 初始值, 服务器传过来
     */
    GetLevelProp(level:int, quality:int, initVal?:int): Prop
    {
        let key = quality * 100000 + level;

        if(this._levelQualityPropMap.has(key))
        {
            return this._levelQualityPropMap.get(key);
        }

        
        let preLevelValue = 0;
        if(level > 1)
        {
            let preLevelProp = this.GetLevelProp(level - 1, quality);
            preLevelValue = preLevelProp.value;
        }
        else if(level == 1)
        {
            if(initVal)
            {
                preLevelValue = initVal;
            }
            else
            {
                preLevelValue = this.PropValue;
            }
        }

        let upgrade = this.GetUpgradConfig(level);
        let rangeRatio = this.GetQualityRangeRatio(quality);
        let propVal: float = preLevelValue;
        switch(this.GrowupMode)
        {
            // 线性
            case 1:
                propVal =  Math.floor(preLevelValue + upgrade.Step * ( rangeRatio / 10000) );
                break;

            // 指数
            case 2:
                propVal = Math.floor(preLevelValue * (upgrade.Step * rangeRatio / 10000) / 10000)
                break;
        }


        let prop = Prop.CreateByTypeid(this.PropTypeId, propVal);
        this._levelQualityPropMap.set(key, prop);
        return prop;
    }

    
    /**
     * 获取下一等级制
     * @param nextLevel  下一等级
     * @param quality 品质
     * @param currLeveValue 当前等级值，服务器传来的
     */
    GetNextLevelProp(nextLevel:int, quality:int, currLeveValue:int): Prop
    {
        let key = quality * 100000 + nextLevel;

        
        let upgrade = this.GetUpgradConfig(nextLevel);
        let rangeRatio = this.GetQualityRangeRatio(quality);
        let propVal: float = currLeveValue;
        switch(this.GrowupMode)
        {
            // 线性
            case 1:
                propVal =  Math.floor(currLeveValue + upgrade.Step * ( rangeRatio / 10000) );
                break;

            // 指数
            case 2:
                propVal = Math.floor(currLeveValue * (upgrade.Step * rangeRatio / 10000) / 10000)
                break;
        }


        let prop = Prop.CreateByTypeid(this.PropTypeId, propVal);
        this._levelQualityPropMap.set(key, prop);
        return prop;
    }

    /**
     * 生成属性列表
     * @param propValueConfigIdList 
     * @param level 
     * @param quality 
     * @param initVal 
     */
    static GetLevelPropList(outPropList:PropList, propValueConfigIdList:int[], level:int, quality, initVal?:int):PropList
    {
        outPropList.clear();
        for(let id of propValueConfigIdList)
        {
            let config = Game.config.propValue.getConfig(id);
            let prop =config.GetLevelProp(level, quality, initVal);
            outPropList.add(prop)
        }
        return outPropList;
    }

    /**
     * 生成下一等级属性列表
     * @param propValueConfigIdList 
     * @param level 
     * @param quality 
     * @param initVal 
     */
    static GetNextLevelPropList(outNextPropList:PropList, propValueConfigIdList:int[], level:int, quality, currentLvelPropList:PropList):PropList
    {
        outNextPropList.clear();
        for(let id of propValueConfigIdList)
        {
            let config = Game.config.propValue.getConfig(id);
            let currValue = currentLvelPropList.getVal(config.PropTypeId);
            let prop =config.GetNextLevelProp(level, quality, currValue);
            outNextPropList.add(prop)
        }
        return outNextPropList;
    }


}

window['PropValueConfig'] = PropValueConfig;