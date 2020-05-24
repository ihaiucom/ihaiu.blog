

import ExcelConfigReader from "../ExcelConfigReader";
import LevelConfig from "../ConfigExtends/LevelConfig";
export default class LevelConfigReader extends ExcelConfigReader<LevelConfig>
{
    levelMax: number = 0;

    /** 游戏所有配置加载完成 */
    onGameLoadedAll()
    {
        let list = this.configList;
        for (let i = 0; i < list.length; i++)
        {
            let config: LevelConfig = list[i];
            this.levelMax = Math.max(this.levelMax, config.id);
        }
    }
    
}