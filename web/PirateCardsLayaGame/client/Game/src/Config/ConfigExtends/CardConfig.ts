
import {CardConfigLang} from "../ExcelConfigLange";
import Game from "../../Game";
import CardView from "../../FGUI/Extends/GameHome/CardView";
import { HeroType } from "../../War/Enums/HeroType";
export default class CardConfig extends CardConfigLang
{
    get cardScoreConfig()
    {
        return Game.config.cardScoreType.getConfig(this.scoreTypeKey);
    }

    get cardScoreType()
    {
        var scoreConfig = this.cardScoreConfig;
        if(scoreConfig)
        {

            return scoreConfig.id;
        }
        else
        {
            console.error("CardConfig.cardScoreType    scoreConfig=null", this.name, this)
        }
    }

    get heroType(): HeroType
    {
        return this.id % 100;
    }

    get spriteIndex(): number
    {
        return this.heroType - 1;
    }

    private _spriteUrl:string;
    get spriteUrl()
    {
        if(!this._spriteUrl)
        {
            this._spriteUrl = CardView.GetSpriteUrl(this.sprite);
        }
        return this._spriteUrl;
    }
}