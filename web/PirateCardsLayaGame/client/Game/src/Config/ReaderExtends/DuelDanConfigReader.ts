

import ExcelConfigReader from "../ExcelConfigReader";
import DuelDanConfig from '../ConfigExtends/DuelDanConfig';
import Game from '../../Game';
export default class DuelDanConfigReader extends ExcelConfigReader<DuelDanConfig>
{
    private _danConfigIds: number[];
    get danIds(): number[]
    {
        if(!this._danConfigIds)
        {
            this._danConfigIds = [];
            for(let config of this.configList)
            {
                if(this._danConfigIds.findIndex((v, i)=>{ return Game.config.duelDan.getConfig(v).dan == config.dan}) == -1)
                // if(this._danConfigIds.indexOf(config.dan) == -1)
                {
                    this._danConfigIds.push(config.id);
                }
            }
        }
        return this._danConfigIds;
    }

    public getDanLevelsByDan(dan: number): DuelDanConfig[]
    {
        let list: DuelDanConfig[] = [];
        for(let config of this.configList)
        {
            config.dan == dan && (list.push(config));
        }
        list.sort((a,b)=>{return b.level - a.level});
        return list;
    }
    
}