

import ExcelConfigReader from "../ExcelConfigReader";
import TriggerTypeConfig from "../ConfigExtends/TriggerTypeConfig";
export default class TriggerTypeConfigReader extends ExcelConfigReader<TriggerTypeConfig>
{
     // 配置字典
     configsByKey: Map<TKey, TriggerTypeConfig> = new Map<TKey, TriggerTypeConfig>();

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
             let key: TKey = list[i].triggerTypeKey;
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