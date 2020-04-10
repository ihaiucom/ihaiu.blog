
import {CheckPointConfigLang} from "../ExcelConfigLange";
import Game from '../../Game';
import TEXT from '../Keys/TEXT';
export default class CheckPointConfig extends CheckPointConfigLang
{
    /** boss关卡icon */
    get bossIconUrl(): string
    {
        let url = "";
        if(this.iconBoss)
            url = Game.config.avatar.getConfig(this.iconBoss).iconUrl;
        return url;
    }

    /** 关卡美术字 */
    get nameIconUrl()
    {
        let url = "";
        if(this.iconName)
            return Game.config.avatar.getConfig(this.iconName).iconUrl;
        return url;
    }
    /** 关卡头像 */
    get headIconUrl(): string
    {
        let url = "";
        if(this.icon)
            return Game.config.avatar.getConfig(this.icon).iconUrl;
        return url;
    }

    get background(): string
    {
        let url = "";
        if(this.picture)
            return Game.config.avatar.getConfig(this.picture).iconUrl;
        return url;
    }

    /** 在此时间（单位：秒）内通关方可升级钥石 */
    public get levelUpTime(): number
    {
        let time = 0;
        if(this.secretlandTime.length > 0)
        {
            time = this.secretlandTime[this.secretlandTime.length-1];
        }
        return time;
    }
}