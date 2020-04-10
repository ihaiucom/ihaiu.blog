
import {DuelSeasonConfigLang} from "../ExcelConfigLange";
export default class DuelSeasonConfig extends DuelSeasonConfigLang
{
    public get startTimeStr(): string
    {
        let t = this.startTime;
        return t.Y+"."+t.M+"."+t.D;
    }

    public get overTimeStr(): string
    {
        let t = this.overTime;
        return t.Y + "." + t.M + "." + t.D;
    }
}