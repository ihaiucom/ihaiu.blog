
import ConfigLoaderInterface from "./Interfaces/ConfigLoaderInterface";

import ConfigManagerExpressionList from "./ConfigManagerExpressionList";
import { ExcelConfigManager } from "./ExcelConfigManager";
import ExcelConfigReader from "./ExcelConfigReader";
import Game from "../Game";
import MenuConfig from "./ConfigExtends/MenuConfig";
import AntFrameConfig from "../AntFrame/AntFrameConfig";

export enum EnumExcelConfigType
{
    pb,
    json
}

export default class ConfigManager extends ConfigManagerExpressionList
{
    // 消息--加载进度
    sLoadProgress: Typed3Signal<number, number, number> = new Typed3Signal<number, number, number>();
    // 消息--加载完成
    sLoaded: Signal = new Signal()
    // 加载器
    configLoader: ConfigLoaderInterface;

    // 加载进度
    loadProgress = 0;

    // 读取器
    readers:ExcelConfigReader<any>[] = [];
    readerMap:Map<string, ExcelConfigReader<any>> = new Map<string, ExcelConfigReader<any>>();

    // 配置使用什么方式的
    configType:EnumExcelConfigType = EnumExcelConfigType.json;

    initList()
    {
        ExcelConfigManager.Init();
        this.readers.length = 0;
        for(let key in this)
        {
            let item = this[key];
            if(item instanceof ExcelConfigReader)
            {
                this.readers.push(item);
                this.readerMap.set(item.tableName, item);
            }
        }
    }

    shieldList()
    {
        let heros = Game.channel.serverItem.shieldHero;
        if (heros && heros.length) 
        {
            Game.config.hero.shieldConfig(heros);   
        }
    }

    async loadAllAsync():Promise<void>
    {
        this.loadProgress = 0;
        let count = this.readers.length;
        let loadedNum = 0;

        
        switch(this.configType)
        {
            case EnumExcelConfigType.pb:
                await this.loadPB();
                break;
            default:
                await this.loadJson();
                break
        }


        window['Global'] = <any> ExcelConfigManager.pbconfig.Global;

        this.onGameLoadedAll();
    }



    async loadPB():Promise<void>
    {
        let arrayBuffer : ArrayBuffer = await Game.asset.loadResAsync("res/config/pb/excelconfig.bin", Laya.Loader.BUFFER);
        let buffer = new Uint8Array(arrayBuffer);
        ExcelConfigManager.pbconfig = excelconfig.ConfigMng.decode(buffer);
    }
    
    async loadJson():Promise<void>
    {
        let json  = await Game.asset.loadResAsync("res/config/pb/excelconfig.json", Laya.Loader.JSON);
        // let json  = await AntFrameConfig.GetNetConfig();
        this.InstallJson(json);
    }

    InstallJson(json:object)
    {
        let cm = ExcelConfigManager.pbconfig = new excelconfig.ConfigMng();

        // Global
        let globalJson = json['Global'];
        let globalConfig = new excelconfig.Global();
        for(var key in globalJson)
        {
            let configKey = this.keyToPbKey(key);
            globalConfig[key] = globalJson[key];
        }
        cm.Global = globalConfig;



        for(let tabelName in json)
        {
            let tabelJson = json[tabelName];
            if(!this.readerMap.has(tabelName))
                continue;
            let reader = this.readerMap.get(tabelName);
            let configCls = reader.tabelConfigClass;
            cm[tabelName] = {};
            for(let id in tabelJson)
            {
                let lineJson = tabelJson[id];
                let config = new configCls();
                for(var key in lineJson)
                {
                    let configKey = this.keyToPbKey(key);
                    config[configKey] = lineJson[key];
                }
                cm[tabelName][id] = config;
            }
        }
    }

    keyToPbKey(key: string)
    {
        if(key.indexOf("_") == -1)
            return key;
        
        let arr = key.split('_');
        for(let i = 1; i < arr.length; i ++)
        {
            let str = arr[i];
            if(str.length >= 1)
            {
                arr[i] = str.substr(0, 1).toUpperCase() + str.substr(1, str.length - 1);
            }
        }
        key = arr.join('');
        // console.log(key);
        return key;
    }

    // 加载完成所有
    onGameLoadedAll()
    {
        for (let i = 0; i < this.readers.length; i++)
        {
            this.readers[i].onGameLoadedAll();
        }

        this.sLoaded.dispatch();
    }



}