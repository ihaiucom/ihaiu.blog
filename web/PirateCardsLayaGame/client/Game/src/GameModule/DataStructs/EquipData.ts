import Equip = proto.Equip
import EquipmentConfig from "../../Config/ConfigExtends/EquipmentConfig";
import Game from '../../Game';
import TEXT from '../../Config/Keys/TEXT';
import {EnumBagUseType} from "../DataModels/BagModel";
import ItemData from './ItemData';
import { EquipType } from "../DataEnums/EquipType";


export class EquipData extends Equip
{
    id: number;
    uid: number;

    constructor()
    {
        super();
    }

    static Create(uid: number, id: number, equip: any)
    {
        let data = new EquipData();
        data.id = id; // 装备ID
        data.uid = uid; // 唯一ID
        data.level = equip.level; // 等级
        data.star = equip.star; // 星级
        data.exp = equip.exp; // 当前等级的经验
        data.onWho = equip.onWho; // 装备穿在英雄的ID
        data.levelProp = equip.levelProp; // 强化的属性
        data.starProp = equip.starProp; // 升星的属性
        data.pos = equip.pos; // 所属位置类型
        return data;
    }

    static CreateByID(id: number)
    {
        let data = new EquipData();
        data.id = id; // 装备ID
        data.uid = 0; // 唯一ID
        data.level = 1; // 等级
        data.star = 0; // 星级
        data.exp = 0; // 当前等级的经验
        data.onWho = 0; // 装备穿在英雄的ID
        data.levelProp = null; // 强化的属性
        data.starProp = null; // 升星的属性
        data.pos = 0; // 所属位置类型
        return data;
    }

    UpdateData(equip: proto.IEquip)
    {
        // this.id = equip.id; // 装备ID
        // this.uid = equip.uid; // 唯一ID
        this.level = equip.level; // 等级
        this.star = equip.star; // 星级
        this.exp = equip.exp; // 当前等级的经验
        this.onWho = equip.onWho; // 装备穿在英雄的ID
        this.levelProp = equip.levelProp; // 强化的属性
        this.starProp = equip.starProp; // 升星的属性
        this.pos = equip.pos; // 所属位置类型
    }

    Copy(equip: any)
    {
        equip.id = this.id;
        equip.uid = this.uid;
        equip.level = this.level;
        equip.star = this.star;
        equip.exp = this.exp;
        equip.onWho = this.onWho;
        equip.levelProp = this.levelProp;
        equip.starProp = this.starProp;
        equip.pos = this.pos;
    }

    get config(): EquipmentConfig
    {
        return Game.config.equipment.getConfig(this.id)
    }

    public get name()
    {
        return this.config.name;
    }

    public get desc()
    {
        return this.config.des;
    }

    public get quality()
    {
        return this.config.quality;
    }

    public get iconUrl()
    {
        return Game.config.avatar.getConfig(this.config.icon).iconUrl;
    }

    public get TotalProp()
    {
        if(this.levelProp.id == this.starProp.id)
        {
            return this.levelProp.value + this.starProp.value
        }
        return this.levelProp.value;
    }

    // 专属于哪些角色
    public get ownerHeroIDs(): number[]
    {
        return this.config.heroID;
    }

    public get useTypes(): EnumBagUseType[]
    {
        return this.config.useType;
    }

    /** eg. 物攻+100  暴击+30 */
    public get propsTxt()
    {
        let txt = "";
        let props = this.config.propID
        for(let prop of props)
        {
            let p = Game.config.propValue.getConfig(prop.PropID);
            if(p)
            {
                txt += TEXT.EquipPropDes.format(p.DisplayAss, 100)//TODO: 属性系统未接入 
            }
        }
        return txt;
    }

    public get isExclusive(): boolean
    {
        return this.config.heroID.length > 0;
    }

    public get exclusiveTxt()
    {
        let heros = "";
        for(let index = 0; index < this.config.heroID.length; index++)
        {
            let heroId = this.config.heroID[index];
            let config = Game.config.hero.getConfig(heroId);
            if(config)
            {
                heros += config.name;
            }
            if(index < this.config.heroID.length-1)
            {
                heros += "，";
            }
        }
        return TEXT.EquipExclusiveTxtMsg.format(heros,heros);
    }

    // 专属，字符
    public get exclusiveSimpleTxt()
    {
        if(!this.IsExclusive)
        {
            return "";
        }

        let str = "";
        for(let index = 0; index < this.config.heroID.length; index++)
        {
            let heroId = this.config.heroID[index];
            let config = Game.config.hero.getConfig(heroId);
            if(config)
            {
                if(index > 0)
                {
                    str = str + "、" + config.name;
                }
                else
                {
                    str = str + config.name;
                }
                return TEXT.EquipExclusiveTxt.format(str);
            }
            
        }
    }

    public get IsExclusive()
    {
        let list = this.config.heroID;
        if(list && list.length > 0 && list[0] > 0)
        {
            return true
        }

        return false;
    }

    /** 装备分解获得的奖励列表 */
    get rewardItems()
    {
        if(this.config && this.config.dropItem)
        {
            let rewardConf = Game.config.reward.getConfig(this.config.dropItem);
            let itemList: ItemData[] = [];
            for(let item of rewardConf.randomItems)
            {
                let itemData = ItemData.Create(item.ItemId,item.ItemNum,item.ItemType);
                itemList.push(itemData);
            }
            return itemList;
        }
    }

    get itemTypeText()
    {
        let strItemType : string ;
        switch(this.config.equipPos)
        {
            case EquipType.Weapon:
                strItemType = TEXT.EquipTypeWeapon;
                break;
            case EquipType.Helmet:
                strItemType = TEXT.EquipTypeHelmet;
                break;
            case EquipType.Armor:
                strItemType = TEXT.EquipTypeArmor;
                break;
            case EquipType.Boots:
                strItemType = TEXT.EquipTypeBoots;
                break;
            case EquipType.Pendant:
                strItemType = TEXT.EquipTypePendant;
                break;
            case EquipType.Gem:
                strItemType = TEXT.EquipTypeGem;
                break;
            default:
                break;
        }
        return strItemType;
    }
}