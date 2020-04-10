import DraugData from "./DraugData";
import DraugConfig from "../../Config/ConfigExtends/DraugConfig";
import Game from "../../Game";

/**
 * 战魂类型数据
 */
export default class DraugTypeData
{
    config:DraugConfig;

    /** 战魂名称 */
    draugName:string;

    /** 战魂类型 */
    draugType:number;

    /** 套装类型(名称) */
    suitType:string;

    /** 当前类型战魂列表 */
    draugList:DraugData[] = [];

    /** 当前类型战魂数量 */
    get draugNum():number
    {
        return this.draugList.length;
    }

    /** 是否拥有类型战魂 */
    get isHad():boolean
    {
        return Boolean(this.draugList.length);
    }

    /** 添加战魂 */
    AddDraug(draug:DraugData)
    {
        let list = this.draugList;
        for (let i = 0, len = list.length; i < len; i++) 
        {
            if (draug.uid == list[i].uid) 
            {
                return;    
            }
        }
        
        this.draugList.push(draug);
    }

    /**
     * 生成战魂类型数据
     * @param draugs 
     */
    static Create(config:DraugConfig):DraugTypeData
    {
        let data = new DraugTypeData();
        data.config     = config;
        data.draugName  = config.name;
        data.draugType  = config.TypeName;
        // 套装属性config
        let suitconfig = Game.config.draugSuit.getConfig(config.TypeName);
        data.suitType  = Game.config.propValue.getConfig(suitconfig.Suit2).DisplayAss

        return data;
    }
}