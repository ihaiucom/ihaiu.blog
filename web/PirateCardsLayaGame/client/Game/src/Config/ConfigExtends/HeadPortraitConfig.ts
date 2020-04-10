
import {HeadPortraitConfigLang} from "../ExcelConfigLange";
import Game from "../../Game";
export default class HeadPortraitConfig extends HeadPortraitConfigLang
{
	
    get iconUrl(): string
    {
        let avatarConfig = Game.config.avatar.getConfig(this.icon);
        if (avatarConfig)
        {
            return avatarConfig.iconUrl;
        }
    }
}