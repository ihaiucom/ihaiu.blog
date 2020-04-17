

import ExcelConfigReader from "../ExcelConfigReader";
import CardScoreTypeConfig from "../ConfigExtends/CardScoreTypeConfig";
export default class CardScoreTypeConfigReader extends ExcelConfigReader<CardScoreTypeConfig>
{
    
    // 配置字典
    configsByKey: Map<TKey, CardScoreTypeConfig> = new Map<TKey, CardScoreTypeConfig>();

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
}