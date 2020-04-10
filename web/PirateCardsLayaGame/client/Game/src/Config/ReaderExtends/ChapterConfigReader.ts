

import ExcelConfigReader from "../ExcelConfigReader";
import ChapterConfig from "../ConfigExtends/ChapterConfig";
import Game from '../../Game';
export default class ChapterConfigReader extends ExcelConfigReader<ChapterConfig>
{
    get sortedConfigList(): ChapterConfig[]
    {
        let list = this.configList.sort((a,b)=>{return a.id - b.id})
        return list;
    }
}