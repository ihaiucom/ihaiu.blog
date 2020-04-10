import { ExcelConfigManager } from "./ExcelConfigManager";

export abstract class BaseConfig
{
    id: number;
}
interface DictionaryObject<K, V> {
}

export default class ExcelConfigReader<T extends BaseConfig>
{
    // 表名
    tableName: string;
    private _configList:T[] = [];
    private _configDict:DictionaryObject<number, T>;

    constructor(tabelName: string)
    {
        this.tableName = tabelName;
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

    // 获取配置
    getConfig(id: number):T
    {
        if (!this._configDict[id])
        {
            console.log(`${this.tableName} 没有 id=${id} 的配置`);
        }
        return this._configDict['id'];
    }



}