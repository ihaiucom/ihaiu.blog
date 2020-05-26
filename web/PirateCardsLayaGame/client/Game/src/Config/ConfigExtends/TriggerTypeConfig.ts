
import {TriggerTypeConfigLang} from "../ExcelConfigLange";
import { CardScoreType } from "../../War/Enums/CardScoreType";
import Game from "../../Game";
export default class TriggerTypeConfig extends TriggerTypeConfigLang
{
    private _cardTypeIdList: CardScoreType[];
    get cardTypeIdList()
    {
        if(!this._cardTypeIdList)
        {
            var list = [];
            this._cardTypeIdList = list;
            for(var key of this.cardTypeList)
            {
                var id = Game.config.cardScoreType.keyToTypeId(key);
                if(id > 0)
                {
                    list.push(id);
                }
            }
        }
        return this._cardTypeIdList;
    }
}