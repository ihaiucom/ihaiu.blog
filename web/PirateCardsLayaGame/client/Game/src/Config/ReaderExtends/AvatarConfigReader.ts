

import ExcelConfigReader from "../ExcelConfigReader";
import AvatarConfig from "../ConfigExtends/AvatarConfig";
import Game from "../../Game";
export default class AvatarConfigReader extends ExcelConfigReader<AvatarConfig>
{
    // 获取配置
    getConfig(id: TKey):AvatarConfig
    {
        // GJC 提审服，暂时处理资源
        let ids = Game.channel.serverItem.shieldHero;
        if (ids.indexOf(id) != -1) 
        {
            id = 1001;
        } 

        if(!this.configDict[id])
        {
            console.log(`${this.tableName} 没有 id=${id} 的配置`);
        }
        return this.configDict[id];
    }
}