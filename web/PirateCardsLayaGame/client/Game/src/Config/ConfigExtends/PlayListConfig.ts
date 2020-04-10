
import {PlayListConfigLang} from "../ExcelConfigLange";
import Game from '../../Game';
export default class PlayListConfig extends PlayListConfigLang
{
    get isUnlock(): boolean
    {
        
        return true;//TODO:开启条件未配置
    }

    private _iconUrl: string = "";
    public get iconUrl(): string
    {
        if(!this._iconUrl)
        {
            let avatar = Game.config.avatar.getConfig(this.icon);
            if(avatar)
                this._iconUrl = avatar.iconUrl;
        }
        return this._iconUrl;
    }

    public get openTime1Txt(): string
    {
        let t0 = this.openTime1[0];
        let t1 = this.openTime1[1];
        return this._DateToString(t0) + " " + this._DateToString(t1);
    }

    private _DateToString(time: excelconfig.IDTTime)
    {
        return this.__padStart(time.H) + ":" + this.__padStart(time.Mm) + ":" + this.__padStart(time.S);
    }

    private __padStart(num: number)
    {
        return num.toString().padStart(2,'0');
    }

    public IsOpen()
    {
        if(!this._checkOpenTime1())
        {
            Game.system.toastText('限时开启');
            return false;
        }
        return true;
    }

    private _checkOpenTime1()
    {
        if(!this.openTime1 || this.openTime1.length <= 0)
            return true;
        let t0 = this.openTime1[0];
        let t1 = this.openTime1[1];
        let t0Secs = 9 * 60 * 60 + t0.Mm * 60 + t0.S;
        let t1Secs = t1.H * 60 * 60 + t1.Mm * 60 + t1.S;
        let date = new Date();
        let nowSecs = date.getHours()*60*60 + date.getMinutes()*60 + date.getSeconds();
        return nowSecs >= t0Secs && nowSecs <= t1Secs;
    }
}