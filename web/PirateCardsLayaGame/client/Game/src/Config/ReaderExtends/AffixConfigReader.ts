

import ExcelConfigReader from "../ExcelConfigReader";
import AffixConfig from '../ConfigExtends/AffixConfig';
export default class AffixConfigReader extends ExcelConfigReader<AffixConfig>
{
    private _dictByGroup: Dictionary<int, AffixConfig[]> = new Dictionary<int, AffixConfig[]>();
    
    onGameLoadedAll()
    {
        super.onGameLoadedAll();
        this._dictByGroup.clear();
        for(let affix of this.configList)
        {
            !this._dictByGroup.hasKey(affix.Group) && (this._dictByGroup.add(affix.Group,[]));
            this._dictByGroup.getValue(affix.Group).push(affix);
        }
    }

    public get groupList(): number[]
    {
        return this._dictByGroup.getKeys().sort();
    }
    
    /**
     *根据词缀组获取词缀列表
     *
     * @param {number} groupId
     * @returns
     * @memberof AffixConfigReader
     */
    public GetAffixListByGroup(groupId: number)
    {
        let list: AffixConfig[] = [];
        if(this._dictByGroup.hasKey(groupId))
        {
            list = this._dictByGroup.getValue(groupId);
            list.sort((a,b)=>{return a.id - b.id;});
        }
        return list;
    }

}