

import ExcelConfigReader from "../ExcelConfigReader";
import SoundConfig from "../ConfigExtends/SoundConfig";
export default class SoundConfigReader extends ExcelConfigReader<SoundConfig>
{
    static map:Map<string, SoundConfig> = new Map<string, SoundConfig>();
    

    static GetSoundConfig(path:string):SoundConfig
    {
        if(this.map.has(path))
        {
            return this.map.get(path);
        }
        return null;
    }

    /** 游戏所有配置加载完成 */
    onGameLoadedAll()
    {
        let map = SoundConfigReader.map;
        map.clear();

        let list = this.configList;
        let time = 0;
        for (let i = 0; i < list.length; i++)
        {
            let config: SoundConfig = list[i];

            config.startTime = time;
            time += config.time;

            map.set(config.soundName, config);
        }
    }
}