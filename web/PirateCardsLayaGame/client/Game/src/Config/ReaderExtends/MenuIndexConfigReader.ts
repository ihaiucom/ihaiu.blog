

import ExcelConfigReader from "../ExcelConfigReader";
import MenuIndexConfig from "../ConfigExtends/MenuIndexConfig";
export default class MenuIndexConfigReader extends ExcelConfigReader<MenuIndexConfig>
{
    getConfigByMenuIndexId(menuIndexId:number)
    {
        return this.getConfig(menuIndexId);
    }
}