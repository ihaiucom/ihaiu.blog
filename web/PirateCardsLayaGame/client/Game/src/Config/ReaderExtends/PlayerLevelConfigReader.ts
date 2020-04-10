

import ExcelConfigReader from "../ExcelConfigReader";
import PlayerLevelConfig from "../ConfigExtends/PlayerLevelConfig";
export default class PlayerLevelConfigReader extends ExcelConfigReader<PlayerLevelConfig>
{
    maxLevel:int = 0;
    
    /** 游戏所有配置加载完成 */
    onGameLoadedAll()
    {
        

        let list = this.configList;
        for (let i = 0; i < list.length; i++)
        {
            let config = list[i];
            this.maxLevel = Math.max(config.id, this.maxLevel);
        }
    }
}