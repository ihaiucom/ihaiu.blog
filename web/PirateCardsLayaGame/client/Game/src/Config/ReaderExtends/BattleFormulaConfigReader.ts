

import ExcelConfigReader from "../ExcelConfigReader";
import BattleFormulaConfig from "../ConfigExtends/BattleFormulaConfig";
import IntFactor from "../../GameWar/CoreLib/IntMath/IntFactor";
import IntMath from "../../GameWar/CoreLib/IntMath/IntMath";
export default class BattleFormulaConfigReader extends ExcelConfigReader<BattleFormulaConfig>
{
    
    private static intMap: Map<string, intwf> = new Map<string, intwf>();
    
    onGameLoadedAll()
    {
        super.onGameLoadedAll();
        let list = this.configList;
        
        let o = BattleFormulaConfigReader;
        for(let config of list)
        {
            let value = config.ParaValue;
            if(config.ValueType == 1)
            {
                value = value * IntMath.BaseCalFactor;
            }
            o.intMap.set(config.ParaName, value);
        }
    }

    static getInt(key: string): intwf
    {
        return this.intMap.get(key);
    }

}