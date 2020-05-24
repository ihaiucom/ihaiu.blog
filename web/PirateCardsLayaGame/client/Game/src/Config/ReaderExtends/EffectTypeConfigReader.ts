

import ExcelConfigReader from "../ExcelConfigReader";
import EffectTypeConfig from "../ConfigExtends/EffectTypeConfig";
export default class EffectTypeConfigReader extends ExcelConfigReader<EffectTypeConfig>
{
    
    // 配置字典
    configsByKey: Map<TKey, EffectTypeConfig> = new Map<TKey, EffectTypeConfig>();

    onGameLoadedAll()
    {
        if(this.configsByKey.size != 0)
        {
            return;
        }
        super.onGameLoadedAll();
        let list = this.configList;
        for (let i = 0; i < list.length; i++)
        {
            let key: TKey = list[i].effectTypeKey;
            if (isNullOrEmpty(key))
            {
                key = list[i].id;
            }

            this.configsByKey.set(key, list[i]);
        }
    }

    
    getConfig(key: TKey)
    {
        
        if(this.configsByKey.size == 0)
        {
            this.onGameLoadedAll();
        }

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

    keyToTypeId(key: string)
    {
        var config = this.getConfig(key);
        if(config)
        {
            return config.id;
        }
    }
}