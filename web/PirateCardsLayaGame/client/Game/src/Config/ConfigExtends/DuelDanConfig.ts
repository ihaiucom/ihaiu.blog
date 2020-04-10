
import {DuelDanConfigLang} from "../ExcelConfigLange";
import Game from "../../Game";
export default class DuelDanConfig extends DuelDanConfigLang
{
    public get iconUrl(): string
    {
        let icon = "";
        let avatar = Game.config.avatar.getConfig(this.icon);
        if(avatar)
        {
            icon = avatar.iconUrl;
        }
        return icon;
    }
}