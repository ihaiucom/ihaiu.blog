import { ExcelConfigManager } from "./ExcelConfigManager";
import BaseConfig from "./BaseConfig";

export default class ExcelConfigReader<T extends BaseConfig>
{
    // 表名
    tableName: string;
    tabelConfigClass:ObjectConstructor;
    private _configList:T[] = [];
    private _configDict:DictionaryObject<number, T>;

    constructor(tabelName: string, tabelConfigClass:any)
    {
        this.tableName = tabelName;
        this.tabelConfigClass = tabelConfigClass;
    }
    
    /** 游戏所有配置加载完成 */
    onGameLoadedAll()
    {
    }

    // 配置列表
    get configDict():DictionaryObject<number, T>
    {
        if(!this._configDict)
        {
            this._configDict = ExcelConfigManager.pbconfig[this.tableName];
        }
        return this._configDict;
    }
    
    // 配置列表
    get configList():T[]
    {
        if(this._configList.length == 0)
        {
            let dict = this.configDict;
            for(let id in this.configDict)
            {
                this._configList.push(this.configDict[id]);
            }

        }
        return this._configList;
    }

    getConfigList():T[]
    {
        return this.configList;
    }

    // 获取配置
    getConfig(id: TKey):T
    {
        if(!this.configDict[id])
        {
            console.log(`${this.tableName} 没有 id=${id} 的配置`);
        }
        return this.configDict[id];
    }

    // 是否存在配置
    hasConfig(id: TKey): boolean
    {
        return this.configDict[id] ? true : false;
    }

    // 屏蔽配置
    shieldConfig(ids:number[])
    {
        for (let i = 0, len = ids.length; i < len; i++) 
        {
            let id = ids[i];
            if (this.hasConfig(id)) 
            {
                delete this._configDict[id];

                let configlist = this.configList;
                for (let i = 0, len = configlist.length; i < len; i++) 
                if (configlist[i].id == id)
                {
                    configlist.splice(i, 1);
                    break;
                }
            }
        }
    }
}