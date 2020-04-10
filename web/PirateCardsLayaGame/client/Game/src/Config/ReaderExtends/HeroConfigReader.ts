import ExcelConfigReader from "../ExcelConfigReader";
import HeroConfig from "../ConfigExtends/HeroConfig";
export default class HeroConfigReader extends ExcelConfigReader<HeroConfig>
{
    // 根据角色品质存储角色ID
    private _qualityList: Dictionary<number, number[]> = new Dictionary<number, number[]>();
    // 根据角色类型存储角色ID
    private _typeList: Dictionary<number, number[]> = new Dictionary<number, number[]>();
    // 所有角色ID
    private _AllList: Array<number> = [];
    
    onGameLoadedAll()
    {
        super.onGameLoadedAll()

        this.filterConfig();
    }

    public filterConfig()
    {
        let list = this.getConfigList()
        for(let config of list)
        {
            let quality = config.quality;
            let group: number[];
            if( this._qualityList.hasKey(quality) )
            {
                group = this._qualityList.getValue(quality);
            }
            else
            {
                group = [];
                this._qualityList.add(quality, group);
            }
            group.push(config.id);

            let types: number[] = config.type;
            let typeGroup: number[];
            for(let type of types)
            {
                if(this._typeList.hasKey(type))
                {
                    typeGroup = this._typeList.getValue(type);
                }
                else
                {
                    typeGroup = [];
                    this._typeList.add(type, typeGroup);
                }
            }
            typeGroup.push(config.id);

            this._AllList.push(config.id);
        }
    }

    public getQualityList(quality: int)
    {
        let list = this._qualityList.getValue(quality);
        return list || [];
    }

    public getTypeList(type: int)
    {
        let list = this._typeList.getValue(type);
        return list || [];
    }

    public getConfigIDs()
    {
        return this._AllList;
    }

    public shieldConfig(ids:number[])
    {
        super.shieldConfig(ids);
        
        this._qualityList.clear();
        this._typeList.clear();
        this._AllList = [];
        this.filterConfig();
    }

    /** pvp匹配界面随机对手英雄列表 3个 */
    public get GetRandomHeroList(): number[]
    {
        let heroList: number[] = [];
        let maxLength = this.configList.length;
        while (heroList.length < 3) {
            let randomIndex = Math.floor(Math.random() * maxLength);
            heroList.indexOf(randomIndex) == -1 && (heroList.push(this.configList[randomIndex].id));
        }
        
        return heroList;
    }
}