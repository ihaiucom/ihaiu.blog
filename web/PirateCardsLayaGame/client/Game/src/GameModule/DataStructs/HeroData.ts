import GamerHero = proto.GamerHero;
import Game from "../../Game";
import HeroConfig from "../../Config/ConfigExtends/HeroConfig";
import { HeroState, HeroAttackType } from "../DataEnums/HeroType";
import DraugData from "./DraugData";
import TEXT from '../../Config/Keys/TEXT';
import { EquipData } from "./EquipData";
import { PropId } from "../../GameFrame/Props/PropId";
import PropHelper from "../../GameFrame/Props/PropHelper";
import { SkillData } from "./SkillData";
import { SkillUtil } from "../../GameWar/Logic/Utils/SkillUtil";

export class HeroData extends GamerHero
{
    // 角色配置
    config: HeroConfig;

    // 角色状态：已获得，可激活，未获得
    state: HeroState;

    // 存储英雄身上的所有属性
    propDict: Dictionary<number, number>;

    draugList: DraugData[] = [];

    // 装备列表
    equipList: proto.IGameItem[];

    // red 英雄头像是否已查看
    isSaw: boolean = true;

    // 装备位置信息
    private _equipPosList: Dictionary<number, number>;

    // 战魂位置信息
    private _draugPosList: Dictionary<number, DraugData>;

    // 所有技能数据
    private allSkillDict: Dictionary<int, SkillData> = new Dictionary<int, SkillData>();

    // 技能数据，只包含使用的四个技能
    private useSkillList: SkillData[] = [];

    constructor()
    {
        super();
    }

    static Create(hero: any)
    {
        let data = new HeroData();
        data.id = hero.id;
        data.name = hero.name;
        data.level = hero.level;
        data.exp = hero.exp;
        data.quality = hero.quality;
        data.star = hero.star;

        let drauglist = hero.draugList;
        if (drauglist) 
        {
            for (let i = 0, len = drauglist.length; i < len; i++) 
            {
                let draug = DraugData.Create(drauglist[i]);
                draug.heroId = hero.id;
                data.draugList.push(draug);
            }   
            data.RefreshDraugData();
        }
        data.inBattle = hero.inBattle;
        data.equipList = hero.equipList;
        data.isSaw = hero.isSaw;
        data.baseProp = hero.baseProp;
        data.allProp = hero.allProp;
        data.skillList = hero.skillList;

        data.config = Game.config.hero.getConfig(data.id)
        data.updateAllProp(hero.allProp);
        data.updateSkillData();
        data.state = HeroState.Got;
        return data;
    }

    UpdateData(hero: any)
    {
        this.id = hero.id;
        this.name = hero.name;
        this.level = hero.level;
        this.exp = hero.exp;
        this.quality = hero.quality;
        this.star = hero.star;
        let drauglist = hero.draugList
        if (drauglist) 
        {
            this.draugList = [];
            for (let i = 0, len = drauglist.length; i < len; i++) 
            {
                let draug = DraugData.Create(drauglist[i]);
                draug.heroId = hero.id;
                this.draugList.push(draug);
            }    
            this.RefreshDraugData();
        }
        this.inBattle = hero.inBattle;
        this.equipList = hero.equipList;
        this.isSaw = hero.isSaw;
        this.baseProp = hero.baseProp;
        this.allProp = hero.allProp;
        this.skillList = hero.skillList;

        this.updateAllProp(hero.allProp);
        this.updateSkillData();
    }

    setConfig(id: number)
    {
        this.config = Game.config.hero.getConfig(id)
    }

    setState(state: HeroState)
    {
        this.state = state;
    }

    public get ID()
    {
        return this.id;
    }

    public get Name()
    {
        return this.config.name;
    }

    public get HeroIcon()
    {
        return this.config.heroIcon;
    }

    public get Level()
    {
        return this.level;
    }

    public get LevelString()
    {
        return TEXT.Lv.format(this.level);
    }

    public get Exp()
    {
        return this.exp;
    }

    public get Quality()
    {
        return this.config.quality;
    }

    public get Star()
    {
        return this.star;
    }

    public get Type()
    {
        return this.config.type[0];
    }

    public get DraugList()
    {
        return this.draugList;
    }

    /** 英雄立绘 */
    public get Display()
    {
        let avater = Game.config.avatar.getConfig(this.config.icon);
        if(avater)
        {
            return avater.drawingUrl;
        }
    }

    /** 编队英雄立绘 */
    public get TeamIconUrl()
    {
        let avater = Game.config.avatar.getConfig(this.config.icon);
        if(avater)
        {
            return avater.heroTeamImgUrl;
        }
    }

    public get LoadingIconUrl()
    {
        let avater = Game.config.avatar.getConfig(this.config.icon);
        if(avater)
        {
            return avater.heroLoadingImgUrl;
        }
    }

    /** 英雄名称icon */
    public get NameIcon()
    {
        let avater = Game.config.avatar.getConfig(this.config.icon);
        if(avater)
        {
            return avater.heroNameUrl;
        }
    }


    public GetWearDraug(pos:number)
    {
        let drauglist = this.DraugList;
        for (let i = 0, len = drauglist.length; i < len; i++) 
        {
            if (drauglist[i].pos == pos) 
            {
                return drauglist[i];
            }
        }
        return null;
    }

    public GetWearDraugSuit(type:number)
    {
        let drauglist = this.DraugList;
        let suitlist  = [];
        for (let i = 0, len = drauglist.length; i < len; i++) 
        {
            if (drauglist[i].typeName == type) 
            {
                suitlist.push(drauglist[i].id)
            }
        }

        let suit = Game.config.draugSuit.getConfig(type);
        if (suitlist.length >= 4) 
        {
            
            return [suit.Suit2, suit.Suit4];     
        } 
        else if (suitlist.length >= 2)
        {
            return [suit.Suit2];
        }
        else
        {
            return [];
        }
    }

    public AddDraug(data:DraugData)
    {
        data.heroId = this.ID;

        let drauglist = this.DraugList;
        for (let i = 0, len = drauglist.length; i < len; i++) 
        {
            let draug = drauglist[i];
            if (draug.uid == data.uid) 
            {
                drauglist.splice(i, 1, data);
                return
            }
        }
        drauglist.push(data);
    }

    public RemoveDraug(data:DraugData)
    {
        let drauglist = this.DraugList;
        for (let i = 0, len = drauglist.length; i < len; i++) 
        {
            let draug = drauglist[i];
            if (draug.uid == data.uid) 
            {
                drauglist.splice(i, 1);
                return;
            }
        }
    }

    // 获取角色某个部位的战魂
    public GetDraugDataByPos(pos: int)
    {
        if(!this._draugPosList)
        {
            this._draugPosList = new Dictionary<number, DraugData>();
            for(let data of this.draugList)
            {
                this._draugPosList.set(data.pos, data);
            }
        }

        let data = this._draugPosList.getValue(pos);
        return data;
    }

    // 刷新战魂数据
    public RefreshDraugData()
    {
        this._draugPosList = new Dictionary<number, DraugData>();

        for(let data of this.draugList)
        {
            this._draugPosList.set(data.pos, data);
        }
    }

    // 获取角色某个部位的装备
    public GetEquipDataByPos(pos: int)
    {
        if(!this._equipPosList)
        {
            this._equipPosList = new Dictionary<number, number>();
            for(let data of this.equipList)
            {
                this._equipPosList.set(data.equip.pos, data.uid);
            }
        }

        let uid = this._equipPosList.getValue(pos);
        let data = Game.moduleModel.equip.GetDataByUID(uid);
        return data;
    }

    // 刷新装备数据
    public RefreshEquipData()
    {
        this._equipPosList = new Dictionary<number, number>();

        for(let data of this.equipList)
        {
            this._equipPosList.set(data.equip.pos, data.uid);
        }
    }

    // 获取角色身上穿的所有装备
    public get AllEquips()
    {
        return this.equipList;
    }

    // 英雄的所有属性
    updateAllProp(allProp: any[])
    {
        this.propDict = new Dictionary();
        for(let propData of allProp)
        {
            let id = propData.id;
            let value = propData.value;
            this.propDict.set(id, value);
        }
    }

    // 初始化技能数据
    updateSkillData()
    {
        this.useSkillList.length = 0;
        this.allSkillDict.clear();

        let list = Game.config.skill.HeroSkillList(this.id);
        if(!list)
        {
            console.error("Hero：", this.Name, "Not Config Skill Info !!!")
            return
        }

        for(let i = 0; i < list.length; ++i)
        {
            let data = list[i];
            let skillData: SkillData;
            if(SkillUtil.CheckSkillIsSkill(data.skillType))
            {
                // 四个技能
                let baseData = this.GetSkillBaseData(data.id);
                if(baseData)
                {
                    skillData = SkillData.Create(baseData.id, baseData.lv, this.id, this.level);
                }
                else
                {
                    skillData = SkillData.Create(data.id, 0, this.id, this.level);                    
                }
                this.useSkillList.push(skillData);
            }
            else
            {
                // 其他技能
                skillData = SkillData.Create(data.id, 0, this.id, this.level);
            }
            this.allSkillDict.set(data.skillType, skillData);
        }
    }

    // 获取服务器下发的技能数据
    GetSkillBaseData(skillID: int)
    {
        for(let i = 0; i < this.skillList.length; ++i)
        {
            let data = this.skillList[i]
            if(data.id == skillID)
            {
                return data;
            }
        }
        return null;
    }

    // 获取单个技能数据
    GetSkillData(skillID: int)
    {
        let skillType = Game.config.skill.getConfig(skillID).skillType
        return this.allSkillDict.getValue(skillType);
    }

    get AllSkillData()
    {
        return this.allSkillDict;
    }

    get UseSkillList()
    {
        return this.useSkillList;
    }
}