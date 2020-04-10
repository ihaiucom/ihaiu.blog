
import {HeroConfigLang} from "../ExcelConfigLange";
import Game from '../../Game';
import Res from '../Keys/Res';
export default class HeroConfig extends HeroConfigLang
{
    // private _icon:number;
    // get icon(): number
    // {
    //     let ids = Game.channel.serverItem.shieldHero;
    //     if (ids.indexOf(this.id) != -1) 
    //     {
    //         return Game.config.hero.getConfig(1001)._icon;
    //     }
    //     return this.icon;
    // }

    // set icon(value: number)
    // {
    //     this._icon = value;
    // }

    get heroIcon(): string
    {
        let icon: string = "";
        let avatarConfig = Game.config.avatar.getConfig(this.icon);
        if(avatarConfig)
        {
            icon = Res.getConfigIcon(avatarConfig.icon);
        }
        return icon;
    }
}