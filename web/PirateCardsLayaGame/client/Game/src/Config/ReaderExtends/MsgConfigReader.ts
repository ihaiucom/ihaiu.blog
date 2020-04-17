

import ExcelConfigReader from "../ExcelConfigReader";
import MsgConfig from "../ConfigExtends/MsgConfig";
export default class MsgConfigReader extends ExcelConfigReader<MsgConfig>
{
    
    // 配置字典
    configsByKey: Map<TKey, MsgConfig> = new Map<TKey, MsgConfig>();

    onGameLoadedAll()
    {
        super.onGameLoadedAll();
        let list = this.configList;
        for (let i = 0; i < list.length; i++)
        {
            let key: TKey = list[i].key;
            if (isNullOrEmpty(key))
            {
                key = list[i].id;
            }

            this.configsByKey.set(key, list[i]);
        }
    }

    
    getConfig(key: TKey)
    {
        if (!this.configsByKey.has(key))
        {
            if (this.hasConfig(key))
            {
                return super.getConfig(key);
            }
            console.log(`${this.tableName} 没有 key=${key} 的配置`);
        }
        return this.configsByKey.get(key);
    }

    getTxt(key: TKey): string
    {
        let config = this.getConfig(key);
        if (!config)
        {
            return `[Error]${this.tableName} 没有 key=${key} 的配置`
        }
        return config.notice;
    }

    getTxtFormat(key: TKey, ...args): string
    {
        let txt = this.getTxt(key).format(...args);
        return txt;
    }

}