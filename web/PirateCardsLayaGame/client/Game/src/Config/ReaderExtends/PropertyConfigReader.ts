

import ExcelConfigReader from "../ExcelConfigReader";
import PropertyConfig from "../ConfigExtends/PropertyConfig";
import PropHelper from "../../GameFrame/Props/PropHelper";
import { PropType } from "../../GameFrame/Props/PropType";
export default class PropertyConfigReader extends ExcelConfigReader<PropertyConfig>
{
    // 配置字典
    static configsByField: Map<string, PropertyConfig> = new Map<string, PropertyConfig>();
    static propTypeIdByField: Map<string, int> = new Map<string, int>();

    onGameLoadedAll()
    {
        super.onGameLoadedAll();
        PropertyConfigReader.configsByField.clear();
        let list = this.configList;
        for (let i = 0; i < list.length; i++)
        {
            let config = list[i];
            config.field = trim( config.field);
            PropertyConfigReader.configsByField.set(config.field, config);
            PropertyConfigReader.configsByField.set(config.field + "Pre", config);

            
            PropertyConfigReader.propTypeIdByField.set(config.field, config.id);
            PropertyConfigReader.propTypeIdByField.set(config.field + "Pre", PropHelper.GetTypeId(config.id, PropType.Per));
        }
    }
    
    static GetConfigByPropTypeField(propTypeField:string):PropertyConfig
    {
        if(!this.configsByField.has(propTypeField))
        {
            console.error(`没有配置属性字段名为${propTypeField} 的配置PropertyConfig`);
        }
        return this.configsByField.get(propTypeField);
    }

    static GetPropTypeId(propTypeField: string):int
    {
        if(!this.propTypeIdByField.has(propTypeField))
        {
            console.error(`没有配置属性字段名为${propTypeField} 的配置PropertyConfig`);
        }
        return this.propTypeIdByField.get(propTypeField);
    }




}