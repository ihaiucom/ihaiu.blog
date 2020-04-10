
import {AffixConfigLang} from "../ExcelConfigLange";
import Game from '../../Game';
export default class AffixConfig extends AffixConfigLang
{
    public get iconUrl(): string
    {
        if(!this._iconUrl)
        {
            let avatar = Game.config.avatar.getConfig(this.AffixIcon);
            if(avatar)
                this._iconUrl = avatar.iconUrl;
        }
        return this._iconUrl;
    }
    private _iconUrl: string = "";

    public get titleIconUrl(): string
    {
        if(!this._titleIconUrl)
        {
            let avatar = Game.config.avatar.getConfig(this.ExplainIcon);
            if(avatar)
                this._titleIconUrl = avatar.iconUrl;
        }
        return this._titleIconUrl;
    }
    private _titleIconUrl = "";
}