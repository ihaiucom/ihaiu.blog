

import ExcelConfigReader from "../ExcelConfigReader";
import PlayListConfig from "../ConfigExtends/PlayListConfig";

export enum EnumPlayListType
{
    PVP = 1,
    PVE = 2
}

export default class PlayListConfigReader extends ExcelConfigReader<PlayListConfig>
{
    get pvpList(): PlayListConfig[]
    {
        let list: PlayListConfig[] = [];
        for(let config of this.configList)
        {
            if(config.type == EnumPlayListType.PVP)
            {
                list.push(config);
            }
        }
        return list;
    }

    get pveList(): PlayListConfig[]
    {
        let list: PlayListConfig[] = [];
        for(let config of this.configList)
        {
            if(config.type == EnumPlayListType.PVE)
            {
                list.push(config);
            }
        }
        return list;
    }
}