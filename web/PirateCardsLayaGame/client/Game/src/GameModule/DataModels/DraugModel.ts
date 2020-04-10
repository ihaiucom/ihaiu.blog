import MModel from "../../GameFrame/Module/MModel";
import IDraug = proto.IDraug;
import DraugData from "../DataStructs/DraugData";
import { EnumDraugAwakenLevel } from "../DataEnums/EnumDraugAwakenLevel";
import DraugConfig from "../../Config/ConfigExtends/DraugConfig";
import DraugTypeData from "../DataStructs/DraugTypeData";
import Game from "../../Game";
import { PropId } from "../../GameFrame/Props/PropId";
import Prop from "../../GameFrame/Props/Prop";
import { PropType } from "../../GameFrame/Props/PropType";

/**
 * 战魂Model
 */
export default class DraugModel extends MModel 
{
    /** 战魂数据字典 */
    private draugDict:Dictionary<number, DraugData> = new Dictionary<number, DraugData>();

    /** 战魂类型字典 */
    private typeDict:Dictionary<string, DraugTypeData> = new Dictionary<string, DraugTypeData>();

    /** 觉醒等级 */
    public awakenLevel:EnumDraugAwakenLevel    = 0;

    /** 选择英雄 */
    public selectHero:number = 0;

    /** 当前觉醒的临时战魂列表 */
    public awakenList:DraugData[] = [];

    //---------------------红点相关--------------------------
    /** 红点——可穿戴的英雄 */
    IsCanWearHero(heroid?:number)
    {
        let herolist = Game.moduleModel.hero.IDList;
        for (let i = 0, len = herolist.length; i < len; i++) 
        {
            let hero = herolist[i];
            if (hero == heroid) 
            {
                continue;    
            }

            if (this.IsCanWearPosHero(hero)) 
            {
                return true;    
            }
        }

        return false;
    }

    /** 红点——可穿戴的孔位 */
    IsCanWearPosHero(heroid:number):boolean | number
    {
        let poslength  = 6;

        // 所有孔位
        for (let pos = 1; pos <= poslength; pos++) 
        {
            // 已穿戴战魂
            let weardraug = Game.moduleModel.hero.GetPosDraug(heroid, pos);
            if (this.IsCanWearDraug(heroid, pos, weardraug)) 
            {
                return true    
            }
        }
        
        return false;
    }

    /** 红点——有可穿戴的装备 */
    IsCanWearDraug(heroid:number, pos:number, weardraug:DraugData):boolean | number
    {
        let drauglist = this.draugDict.getValues();;


        for (let i = 0, len = drauglist.length; i < len; i++) 
        {
            let draug = drauglist[i];

            let draugpos = draug.pos;

            if (draugpos == pos) 
            {
                if (this.IsWearDraug(draug, weardraug)) 
                {
                    return true;    
                }
            }
        }

        return false;
    }

    /** 红点——是可穿戴的战魂 */
    IsWearDraug(draug:DraugData, weardraug:DraugData):boolean | number
    {
        if (!weardraug || (draug.quality == weardraug.quality ? draug.level > weardraug.level : draug.quality > weardraug.quality) ) 
        {
            return true;
        }

        return false;
    }


    /**
     * 生成战魂数据字典
     * @param draugList 
     */
    SetDraugDict(draugList:IDraug[])
    {
        for (let i = 0, len = draugList.length; i < len; i++) 
        {
            let data = DraugData.Create(draugList[i]);
            this.draugDict.add(data.uid, data);
        }
    }

    /**
     * 设置觉醒等级
     * @param level 
     */
    SetAwakenLevel(level:number)
    {
        this.awakenLevel = level;
    }

    /**
     * 设置选择英雄
     * @param heroid 
     */
    SetSelectHero(heroid:number)
    {
        this.selectHero = heroid;
    }

    /**
     * 设置临时战魂列表
     * @param list 
     */
    SetAwakenList(list:IDraug[])
    {
        for (let i = 0, len = list.length; i < len; i++) 
        {
            let data = DraugData.Create(list[i]);
            this.awakenList.push(data);
        }
    }

    /**
     * 获取战魂数据列表
     */
    GetDraugList():DraugData[]
    {
        return this.draugDict.getValues();
    }

    /**
     * 获取战魂数据列表通过属性ID
     * @param propid 
     */
    GetDraugListByPropId(propid:number):DraugData[]
    {
        let list = this.GetDraugList();
        let drauglist = [];
        for (let i = 0, len = list.length; i < len; i++) 
        {
            let draug = list[i];
            if (draug.IsHadProp(propid)) 
            {
                drauglist.push(draug)
            }
        }

        return drauglist;
    }

    /**
     * 获取战魂数据列表，已锁定
     * @param pos 
     */
    GetDraugLockList():DraugData[]
    {
        let list = this.GetDraugList();
        let locklist = [];
        for (let i = 0, len = list.length; i < len; i++) 
        {
            let draug = list[i];
            if (draug.isLock) 
            {
                locklist.push(draug);    
            }
        }
        return locklist;
    }

    /**
     * 获取战魂数据列表，未锁定
     * @param pos 
     */
    GetDraugUnLockList():DraugData[]
    {
        let list = this.GetDraugList();
        let unlocklist = [];
        for (let i = 0, len = list.length; i < len; i++) 
        {
            let draug = list[i];
            if (!draug.isLock) 
            {
                unlocklist.push(draug);    
            }
        }
        return unlocklist;
    }

    /**
     * 获取战魂数据列表，通过战魂槽位
     * @param pos 
     * @param containlock 
     */
    GetDraugListByPos(pos:number):DraugData[]
    {
        let list = this.GetDraugList();
        let poslist = [];
        for (let i = 0, len = list.length; i < len; i++) 
        {
            let draug = list[i];
            if (draug.pos == pos) 
            {
                poslist.push(draug);    
            }
        }
        return poslist;
    }

    /**
     * 获取战魂数据列表，通过战魂品质(是否包含锁定)
     * @param quality 
     * @param containlock 
     */
    GetDraugListByQuality(quality:number):DraugData[]
    {
        let list = this.GetDraugList();
        let qualitylist = [];
        for (let i = 0, len = list.length; i < len; i++) 
        {
            let draug = list[i];
            if (draug.quality == quality) 
            {
                qualitylist.push(draug);    
            }
        }
        return qualitylist;
    }

    /**
     * 获取战魂数据列表，可吞噬的列表
     * @param swallowid 
     */
    GetDraugListBySwallow(swallowid:number)
    {
        let list = this.GetDraugList();
        let swallowlist = [];
        for (let i = 0, len = list.length; i < len; i++) 
        {
            let draug = list[i];
            if (draug.uid == swallowid && !draug.isLock) 
            {
                swallowlist.push(draug);    
            }
        }
        return swallowlist;
    }

    /** 获取战魂类型数据列表 */
    GetDraugTypeList():DraugTypeData[]
    {
        // 所有类型列表
        let typelist = this.typeDict.getValues();
        
        if (!typelist.length) 
        {
            let configlist = Game.config.draug.getConfigList();
            for (let i = 0, len = configlist.length; i < len; i++) 
            {
                let data = DraugTypeData.Create(configlist[i]);
                this.typeDict.add(data.draugType, data);
            }
        }
        else
        {
            for (let i = 0, len = typelist.length; i < len; i++) 
            {
                let data = typelist[i];
                data.draugList = [];
            }
        }

        // 已觉醒战魂
        let awakenlist = this.GetDraugList();
        for (let i = 0, len = awakenlist.length; i < len; i++) 
        {
            let draug = awakenlist[i];
            let type  = this.typeDict.getValue(draug.typeName); 
            if (type) 
            {
                type.AddDraug(draug);    
            }
            else
            {
                console.error("未知类型的战魂")
            }
        }
        
        return this.typeDict.getValues();
    }

    /** 获取所有属性id(不重复) */
    GetDraugPropIds():number[]
    {
        let drauglist = this.GetDraugList();
        let draugIds  = [];
        for (let i = 0, len = drauglist.length; i < len; i++) 
        {
            let propIds = drauglist[i].propIds;
            draugIds = draugIds.concat(propIds);
        }

        // 最快的去重方式
        let result = [];
        let obj = {};
        for (let id of draugIds) 
        {
            if (!obj[id]) 
            {
                result.push(id);
                obj[id] = 1;
            }
        }

        return result.sort((a, b)=>{return a - b});
    }

    /**
     * 设置战魂数据
     * @param draug 
     */
    SetDraug(draug:IDraug)
    {
        let data = DraugData.Create(draug);
        this.draugDict.add(data.uid, data);
        
        return data;
    }

    /**
     * 获取战魂数据
     * @param draug 
     */
    GetDraug(uid:number)
    {   
        return this.draugDict.getValue(uid);
    }

    /**
     * 改变战魂数据
     * @param draug 
     */
    ChangeDraug(draug:IDraug)
    {
        let data = DraugData.Create(draug);
        if (this.draugDict.hasKey(data.uid)) 
        {
            this.draugDict.add(data.uid, data)
            return true;    
        }
        
        return false;   
    }

    /**
     * 设置战魂锁定状态
     * @param draugId 
     * @param isLock 
     */
    SetDraugLock(draugId:number, isLock:boolean)
    {
        let data = this.draugDict.getValue(draugId);
        data.isLock = isLock;
    }

    /**
     * 将战魂放入背包
     * @param draugList 
     */
    PutDraugIntoPack(draugList:DraugData[])
    {
        for (let i = 0, len = draugList.length; i < len; i++) 
        {
            let draug = draugList[i];
            this.draugDict.add(draug.uid, draug);
        }

        // 重置本地临时战魂列表
        this.awakenList = [];
    }

    /**
     * 根据ID列表移除战魂
     * @param idList 
     */
    RemoveDraugByIdList(idList:number[])
    {
        for (let i = 0, len = idList.length; i < len; i++) 
        {
            this.draugDict.remove(idList[i]);
        }
    }

    /**
     * 根据ID移除战魂
     * @param uid 
     */
    RemoveDraugById(uid:number)
    {
        let dict  = this.draugDict
        let draug = dict.getValue(uid);
        dict.remove(uid);

        return draug;
    }

    /**
     * 是否拥有战魂
     * @param config 
     */
    ISHadDraug(config:DraugConfig)
    {
        let list = this.GetDraugList();
        for (let i = 0, len = list.length; i < len; i++) 
        {
            if (config.id == list[i].id) 
            {
                return true
            }
        }

        return false;
    }

    /**
     * 排序战魂
     * @param list 
     */
    SortDraug(list:DraugData[])
    {
        list.sort((a, b)=>{
            if (a.quality == b.quality) 
            {
                if (a.name == b.name) 
                {
                    return b.level - a.level;
                } 
                else 
                {
                    return a.name.localeCompare(b.name, "zh");   
                }
            }
            else
            {
                return b.quality - a.quality;
            }
        })
    }

    /**
     * 排序战魂类型
     * @param list 
     */
    SortDraugType(list:DraugTypeData[])
    {
        for (let i = 0, len = list.length; i < len; i++) 
        {
            let type = list[i];
            if (!type.isHad) 
            {
                list.splice(i, 1);
                list.push(type);
                len--;
                i--;
            }
        }
    }

    /**
     * 排序战魂属性
     * @param list 
     */
    SortDraugProp(list:DraugData[], propid:number)
    {
        if (propid == -1) 
        {
            this.SortDraug(list);
            return;    
        }

        list.sort((a, b)=>{
            if (a.GetValueProp(propid) == b.GetValueProp(propid)) 
            {
                if (a.quality == b.quality) 
                {
                    if (a.name == b.name) 
                    {
                        return b.level - a.level;
                    } 
                    else 
                    {
                        return a.name.localeCompare(b.name, "zh");   
                    }
                }
                else
                {
                    return b.quality - a.quality;
                }
            }
            else
            {
                return b.GetValueProp(propid) - a.GetValueProp(propid);
            }
        })
    }

    /** 战魂属性计算 */
    DraugPropCalculate(drauglist:DraugData[]):Prop[]
    {
        let propDict: Dictionary<number, Prop> = new Dictionary<number, Prop>();
        
        let typeidlist: number[] = [];
        for (let i = 0, len = drauglist.length; i < len; i++) 
        {
            let draug = drauglist[i];
            // 主属性
            let mainprop = draug.mainProp.clone();
            if (mainprop) 
            {
                let prop = propDict.getValue(mainprop.id)
                if (prop) 
                {
                    mainprop.value += prop.value;
                    propDict.set(mainprop.id, mainprop);
                } 
                else 
                    propDict.add(mainprop.id, mainprop);
            }

            // 副属性
            let viceprops = draug.propList;
            if (viceprops.length) 
            {
                for (let i = 0, len = viceprops.length; i < len; i++) 
                {
                    let viceprop = viceprops[i].clone();
                    let prop = propDict.getValue(viceprop.id)
                    if (prop) 
                    {
                        viceprop.value += prop.value;
                        propDict.set(viceprop.id, viceprop);
                    } 
                    else 
                        propDict.add(viceprop.id, viceprop);
                }
            }

            
            typeidlist.push(draug.typeName);
        }

        // 套装属性计算
        let suitDict:Dictionary<number, number> = new Dictionary<number, number>();
        for (let i = 0, len = typeidlist.length; i < len; i++) 
        {
            let typeid = typeidlist[i];
            let number = suitDict.getValue(typeidlist[i]);
            if (number) 
            {
                number += 1;
                suitDict.set(typeidlist[i], number);
            } 
            else 
                suitDict.add(typeidlist[i], 1);
        }

        let suitkeys = suitDict.getKeys();
        for (let i = 0, len = suitkeys.length; i < len; i++) 
        {
            let suitid = Number(suitkeys[i]);
            let number = suitDict.getValue(suitid);
            if (number >= 4) 
            {
                let suit  = Game.config.draugSuit.getConfig(suitid)
                let suit4 = Game.config.propValue.getConfig(suit.Suit4);
                let name4 = suit4.PropName.split("Per");
                let prop4 = Prop.Create(PropId[name4[0]], suit4.PropValue, name4[1] == "" ? PropType.Per : PropType.Base);
                let prop = propDict.getValue(prop4.id)
                if (prop) 
                {
                    prop4.value += prop.value;
                    propDict.set(prop4.id, prop4);
                } 
                else 
                    propDict.add(prop4.id, prop4);
            }
            if (number >= 2) 
            {
                let suit  = Game.config.draugSuit.getConfig(suitid)
                let suit2 = Game.config.propValue.getConfig(suit.Suit2);
                let name2 = suit2.PropName.split("Per");
                let prop2 = Prop.Create(PropId[name2[0]], suit2.PropValue, name2[1] == "" ? PropType.Per : PropType.Base);
                let prop = propDict.getValue(prop2.id)
                if (prop) 
                {
                    prop2.value += prop.value;
                    propDict.set(prop2.id, prop2);
                } 
                else 
                    propDict.add(prop2.id, prop2);
            }
        }

        // 属性排序
        let list = propDict.getValues();
        list.sort((a, b)=>{
            return a.id - b.id;
        })

        return list;
    }
}