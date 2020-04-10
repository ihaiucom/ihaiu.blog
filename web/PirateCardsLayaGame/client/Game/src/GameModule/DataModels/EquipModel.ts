import MModel from "../../GameFrame/Module/MModel";
import { EquipData } from "../DataStructs/EquipData";
import { EquipQuality } from "../DataEnums/EquipType";
import GameEventKey from "../../GameEventKey";
import Game from "../../Game";
import IntMath from "../../GameWar/CoreLib/IntMath/IntMath";

export default class EquipModel extends MModel
{
    public MaxStar: number = 5;
    public MaxLevel: number = 80;

    // 所有的装备数据 唯一UID作为索引
    private _dict: Dictionary<number, EquipData> = new Dictionary<number, EquipData>();
    // 所有的装备唯一UID列表 
    private _list = [];

    // ID下有多少件装备
    private _IDdict: Dictionary<number, Array<int>> = new Dictionary<number, Array<int>>();

    // 穿在角色身上的装备
    private _heroList = [];

    // 背包里面的装备
    private _bagList = [];

    /** 红点——有可穿戴的装备 */
    IsCanWearEquip(heroid:number, pos:number, wearequip:EquipData):boolean | number
    {
        let equiplist = this._dict.getValues();;


        for (let i = 0, len = equiplist.length; i < len; i++) 
        {
            let equip = equiplist[i];
            if(!equip || equip.onWho)
            {
                continue;
            }


            let equippos = equip.pos;
            let equipown = (!equip.ownerHeroIDs.length || equip.ownerHeroIDs.indexOf(heroid) != -1);
            
          
            let equiptyp = this.CheckType(equip, heroid);

            if (equippos == pos && equipown && equiptyp) 
            {

                if (this.IsWearEquip(equip, wearequip)) 
                {
                    return true;    
                }
            }
        }

        return false;
    }

    /** 红点——是可穿戴的装备 */
    IsWearEquip(equip:EquipData, wearequip:EquipData):boolean | number
    {
        if (!wearequip || (equip.id == wearequip.id ? equip.level > wearequip.level : equip.quality > wearequip.quality) ) 
        {
            return true;
        }

        return false;
    }

    /** 红点——有可升星的装备 */
    IsCanStarEquip()
    {
        let herolist = this._heroList;
        if (!herolist.length) 
        {
            this.SortList();
            herolist = this._heroList;    
        }

        for (let i = 0, len = herolist.length; i < len; i++) {
            let equipuid = herolist[i];
            if (this.IsStarEquip(equipuid)) 
            {
                return true;    
            }
        }
        
        return false;
    }

    /** 红点——是可升星的装备 */
    IsStarEquip(uid:number)
    {
        if (this.IsMaxStar(uid) || !this.CanUpStar(uid)) 
        {
            return false;    
        }

        let data   = this.GetDataByUID(uid);
        if (!data.onWho) 
        {
            return false;
        }

        if (data.quality >= EquipQuality.Purple) 
        {
            let itemids = Global.epuipPromotionItem;
            let itemid  = (data.quality == EquipQuality.Orange) ? itemids[1] : itemids[0];

            return Boolean(this.GetMinEquipByID(data.id, data.uid)) || Game.moduleModel.bag.hasItemNum(itemid, 1);
        } 
        else 
        {
            return Boolean(this.GetMinEquipByID(data.id, data.uid));
        }
    }


    /** 红点——有可强化的装备 */
    IsCanStrenghenEquip()
    {
        let herolist = this._heroList;
        if (!herolist.length) 
        {
            this.SortList();
            herolist = this._heroList;    
        }
        
        for (let i = 0, len = herolist.length; i < len; i++) {
            let equipuid = herolist[i];
            if (this.IsStrenghenEquip(equipuid)) 
            {
                return true;    
            }
        }
        
        return false;
    }

    /** 红点——是可强化的装备 */
    IsStrenghenEquip(uid:number)
    {
        let allexps = 0;
        let baglist = this._bagList;
        for (let i  = 0, len = baglist.length; i < len; i++) {
            let equip = this.GetDataByUID(baglist[i]);
            if (equip.quality < EquipQuality.Purple) 
            {
                allexps += this.GetEatExp(equip.uid);
            }
        }


        let data   = this.GetDataByUID(uid);
        if (!data.onWho) 
        {
            return false;
        }

        let cost   = Game.config.equipExp.getConfig(data.level + 1);
        let enough = Game.moduleModel.bag.hasItemNum(cost.coin.ItemId, cost.coin.ItemNum); 
        
        let needexp = this.GetMaxExp(uid);

        return allexps >= needexp && enough;
    }



    CheckType(equipData: EquipData, heroid:number)
    {
        let armorTypes = equipData.config.armorType;
        let heroType   = Game.moduleModel.hero.GetData(heroid).Type;

        // 未配置适用所有的
        if(armorTypes.length == 0)
        {
            return true
        }

        for(let type of armorTypes)
        {
            if(type == heroType)
            {
                return true;
            }
        }

        return false;
    }

    /*******************************************************/
    /*****************装备服务器接口*************************/
    /*******************************************************/
    CreateEquipList(items: proto.IGameItem[])
    {
        if(!items)
        {
            return;
        }

        for(let item of items)
        {
            if(item.type == proto.ItemType.equipment)
            {
                let data = this._dict.getValue(item.uid);
                if(!data)
                {
                    this.CreateEquip(item);
                }
            }
        }

        // 创建角色身上的
        let list = this.GetAllHeroEquipDatas()
        for(let item of list)
        {
            let data = this._dict.getValue(item.uid);
            if(!data)
            {
                this.CreateEquip(item);
            }
        }
    }

    CreateEquip(item: proto.IGameItem)
    {
        let data = EquipData.Create(item.uid, item.id, item.equip);
        this._dict.set(data.uid, data);
        this._list.push(data.uid);

        let group: Array<int>;
        if(this._IDdict.hasKey(data.id))
        {
            group = this._IDdict.getValue(data.id);
        }
        else
        {
            group = [];
            this._IDdict.add(data.id, group);
        }
        group.push(data.uid);
    }

    updateEquipList(items: proto.IGameItem[])
    {
        for(let item of items)
        {
            if(item.type == proto.ItemType.equipment)
            {
                // console.log("要删除，啊", item.uid, item.count, item.equip.onWho)
                // 穿在角色身上的不删除
                if(item.count <= 0 && item.equip.onWho <= 0 )
                {
                    this.DeleteEquip(item.uid);
                }
                else
                {
                    let data = this._dict.getValue(item.uid);
                    if(data)
                    {
                        data.UpdateData(item.equip);
                    }
                    else
                    {
                        this.CreateEquip(item);
                    }
                }
            }
        }
    }

    OnStarUp(equip: any)
    {
        let data = this._dict.getValue(equip.uid);
        if(data)
        {
            data.UpdateData(equip.equip);
            Game.event.dispatch(GameEventKey.GameFrame_EquipStarUp);
        }
    }

    OnLevelUp(equip: any)
    {
        let data = this._dict.getValue(equip.uid);
        if(data)
        {
            data.UpdateData(equip.equip);
            Game.event.dispatch(GameEventKey.GameFrame_EquipLevelUp);
        }
    }

    OnHeroChangeEquip(equip: any)
    {
        let data = this._dict.getValue(equip.uid);
        if(data)
        {
            data.UpdateData(equip.equip);
        }
        else
        {
            this.CreateEquip(equip);
        }
    }

    DeleteEquip(uid: int)
    {
        let id = this.GetIDByUID(uid);
        let idList = this._IDdict.getValue(id);
        for(let i = idList.length - 1; i >= 0; --i )
        {
            if(idList[i] == uid)
            {
                idList.splice(i,1);
                break;
            }
        }

        // 删除列表的
        for(let i = this._list.length - 1; i >= 0; --i )
        {
            if(this._list[i] == uid)
            {
                this._list.splice(i,1);
                break;
            }
        }

        this._dict.set(uid, null);

        // 删除背包的
        for(let i = this._bagList.length - 1; i >= 0; --i)
        {
            if(this._bagList[i] == uid)
            {
                this._bagList.splice(i,1);
                break;
            }
        }
    }

    get data()
    {
        return this._dict;
    }

    get List()
    {
        this.SortList();
        // console.log("拿到的全部的", this._list)
        return this._list;
    }


    // 背包中的装备数据，降序
    get BagList()
    {
        this.SortList();
        // console.log("背包的", this._bagList)
        return this._bagList;
    }

    get BagDataList():EquipData[]
    {
        let list = [];
        for(let uid of this.BagList)
        {
            let data = this.GetDataByUID(uid);
            list.push(data);
        }
        return list;
    }

    // 获取可吞噬列表
    EatList(selfUID: int)
    {
        let list = [];
        for(let uid of this.BagList)
        {
            if(uid != selfUID) // 排除选中的
            {
                let data = this.GetDataByUID(uid);
                if(data.config.eat) // 排除不可吞噬的
                {
                    list.push(uid);
                }
            }
        }

        return list
    }

    // 头像
    Icon(uid: int)
    {
        let data = this.GetDataByUID(uid);
        let config = Game.config.avatar.getConfig(data.config.icon)
        if(!config)
        {
            return "";
        }
        return config.iconUrl;
    }

    GetDataByUID(uid: number): EquipData
    {
        let data = this._dict.getValue(uid);
        return data;
    }

    GetDataByID(id: number): Array<int>
    {
        let data = this._IDdict.getValue(id);
        return data;
    }

    // 获取统一ID下最低等级的装备
    GetMinEquipByID(id: int, selfUID: int): EquipData
    {
        let list = this.GetDataByID(id).concat();
        if(list.length <= 0 )
        {
            return null;
        }

        // 已升星、已被穿戴的不计入
        for(let i = list.length - 1; i >= 0; --i)
        {
            let uid = list[i];
            let data = this.GetDataByUID(uid);

            if(uid == selfUID || data.star > 0 || data.onWho > 0)
            {
                list.splice(i, 1);
            }
        }

        if(list.length <= 0 )
        {
            return null;
        }

        list.sort((aUID: int, bUID: int)=>
        {
            let aData: EquipData = this.GetDataByUID(aUID);
            let bData: EquipData = this.GetDataByUID(bUID);
            if(aData.level == bData.level)
            {
                return aData.star - bData.star;
            }
            else
            {
                return aData.level - bData.level;
            }
        })

        let data = this.GetDataByUID(list[0])
        return data;
    }

    GetIDByUID(uid: int)
    {
        let data = this._dict.getValue(uid);
        return data.id;
    }

    /** 最大等级 */
    IsMaxLevel(uid: number)
    {
        let data = this.GetDataByUID(uid);
        if(data.level >= Game.user.level)
        {
            return true;
        }
        return false; 
    }

    /** 是否达到最大星级 */
    IsMaxStar(uid: number)
    {
        let data = this.GetDataByUID(uid);
        if(data.star == Game.moduleModel.equip.MaxStar)
        {
            return true
        }
        return false
    }

    // 白色品质不可升星
    CanUpStar(uid: number)
    {
        let data = this.GetDataByUID(uid);
        if(data.config.quality == EquipQuality.White)
        {
            return false
        }
        return true;
    }

    GetAllHeroEquipDatas()
    {
        let inHeroDataList = [];
        let list = Game.moduleModel.hero.GotList;
        for(let hero of list)
        {
            let equips = hero.AllEquips
            if(equips && equips.length > 0)
            {
                for( let data of equips )
                {
                    inHeroDataList.push(data);
                }
            }
        }

        console.log("穿在角色身上的", inHeroDataList)
        return inHeroDataList;
    }

    GetAllHeroEquips()
    {
        let inHeroList = [];
        let list = Game.moduleModel.hero.GotList;
        for(let hero of list)
        {
            let equips = hero.AllEquips
            if(equips && equips.length > 0)
            {
                for( let data of equips )
                {
                    inHeroList.push(data.uid);
                }
            }
        }

        console.log("穿在角色身上的", inHeroList)
        return inHeroList;
    }

    // 排序规则：已穿戴、品质（橙色装备有专属的靠前）、星级、等级、ID（ID以升序）
    SortList()
    {
        let list = this._list.concat()
        let tmpList = [];
        // 拿出已经穿在角色身上的
        for(let i = list.length - 1; i >= 0; i-- )
        {
            let data = this.GetDataByUID(list[i]);
            if(data.onWho > 0)
            {
                tmpList.push(list[i]);
                list.splice(i,1);
            }
        }
        tmpList = this.baseSortList(tmpList);

        // 拿到角色身上的
        // tmpList = this.GetAllHeroEquips().concat();

        // 保存穿在角色身上的
        this._heroList = tmpList.concat();
        list = this.baseSortList(list);

        // 保存背包里面的
        this._bagList = list.concat();

        tmpList.push.apply(tmpList, list);
        this._list = tmpList;
    }

    baseSortList(list: any[]): any[]
    {
        list.sort((aUID: number, bUID: number) =>
        {
            let aData: EquipData = this.GetDataByUID(aUID);
            let bData: EquipData = this.GetDataByUID(bUID);
            if(aData.quality == bData.quality)
            {
                if(aData.quality == EquipQuality.Orange)
                {
                    if(bData.ownerHeroIDs[1] == aData.ownerHeroIDs[1])
                    {
                        if(aData.star == bData.star)
                        {
                            if(aData.level == bData.level)
                            {
                                return aData.id - bData.id;
                            }
                            else
                            {
                                return bData.level - aData.level;
                            }
                        }
                        else
                        {
                            return bData.star - aData.star;
                        }
                    }
                    else
                    {
                        return bData.ownerHeroIDs[1] - aData.ownerHeroIDs[1]
                    }
                }
                else
                {
                    if(aData.star == bData.star)
                    {
                        if(aData.level == bData.level)
                        {
                            return aData.id - bData.id;
                        }
                        else
                        {
                            return bData.level - aData.level;
                        }
                    }
                    else
                    {
                        return bData.star - aData.star;
                    }
                }
            }
            else
            {
                return bData.quality - aData.quality;
            }
        });

        return list;
    }


    /****************************************************************/
    /*-------------------------装备经验计算相关--------------------------*/
    /****************************************************************/

    // 根据角色提供的经验，获取能升到的等级
    GetMaxLevelByExp(exp: int, uid: int): int
    {
        let data = this.GetDataByUID(uid);
        let equipConfig = data.config;

        let list = Game.config.equipExp.getConfigList();
        let level = 0;
        for(let config of list)
        {
            let totalExp = config.exp * equipConfig.expPara/IntMath.BaseCalFactor
            if(exp < totalExp)
            {
                return level
            }
            level ++;
        }
        return 0;
    }

    // 获得升到指定等级的下一级所需经验值，经验条最大值
    GetMaxExpByLevel(level: int, uid: int)
    {
        let data = this.GetDataByUID(uid);
        let equipConfig = data.config;
        let config = Game.config.equipExp.getConfig(level);
        let nextConfig = Game.config.equipExp.getConfig(level + 1);
        let maxExp = (nextConfig.exp - config.exp) * equipConfig.expPara/IntMath.BaseCalFactor;
        return Math.floor(maxExp);
    }

    // 获得升级到某一级所需总经验
    GetTotalExpByLevel(level: int, uid: int)
    {
        let data = this.GetDataByUID(uid);
        let equipConfig = data.config;
        let config = Game.config.equipExp.getConfig(level);
        let totalExp = config.exp * equipConfig.expPara/IntMath.BaseCalFactor;
        return totalExp;
    }

    // 获得升级到下一级所需要的经验值，经验条的最大值
    GetMaxExp(uid: int)
    {
        let data = this.GetDataByUID(uid);
        let level = data.level;
        let equipConfig = data.config;
        let config = Game.config.equipExp.getConfig(level);
        let nextConfig = Game.config.equipExp.getConfig(level + 1);
        let maxExp = (nextConfig.exp - config.exp) * equipConfig.expPara/IntMath.BaseCalFactor;
        return Math.floor(maxExp);
    }

    // 获取当前装备的总经验
    GetTotalExp(uid: int)
    {
        let data = this.GetDataByUID(uid);
        let level = data.level;
        let equipConfig = data.config;
        let config = Game.config.equipExp.getConfig(level);
        let totalExp = config.exp * equipConfig.expPara/IntMath.BaseCalFactor;
        return Math.floor(totalExp + data.exp);
    }

    // 被吞噬装备提供的经验点 = （当前等级对应的经验点equipExp.xlsm * 强化系数expPara + data.exp）* 吞噬系数eatPara
    GetEatExp(uid: int)
    {
        let data = this.GetDataByUID(uid);
        let level = data.level;
        let equipConfig = data.config;
        let config = Game.config.equipExp.getConfig(level);
        let exp = (config.exp * equipConfig.expPara/IntMath.BaseCalFactor + data.exp) * equipConfig.eatPara/IntMath.BaseCalFactor;
        return Math.floor(exp);
    }

    // 查找成长值系数，反向查找
    GetUpgradePropValue(uid: number, id:number, level: number)
    {
        let data = this.GetDataByUID(uid);
        let config = Game.config.propValue.getConfig(id);
        let list = config.Upgrade;
        for(let i = 0; i < list.length; ++i)
        {
            let item = list[list.length - i - 1]
            if(level >= item.Level)
            {
                let num = config.RangeRatio[data.quality-1]
                return Math.floor(item.Step * num/10000);
            }
        }
    }
}