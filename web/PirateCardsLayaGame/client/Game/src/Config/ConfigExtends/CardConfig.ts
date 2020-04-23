
import {CardConfigLang} from "../ExcelConfigLange";
import Game from "../../Game";
import CardView from "../../FGUI/Extends/GameHome/CardView";
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