

import ExcelConfigReader from "../ExcelConfigReader";
import HeroExpConfig from "../ConfigExtends/HeroExpConfig";
export default class HeroExpConfigReader extends ExcelConfigReader<HeroExpConfig>
{
    getConfigByHeroLevel(lv: int)
    {
        let config = this.configList.find((e)=>{
            return e.level == lv;
        });
        if(!config)
            console.error(`HeroExp: 没有等级为${lv}的配置`);
        return config;
    }
}