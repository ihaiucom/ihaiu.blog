import Draug = proto.Draug;
import IDraug = proto.IDraug;
import DraugConfig from "../../Config/ConfigExtends/DraugConfig";
import Game from "../../Game";
import Prop from "../../GameFrame/Props/Prop";
/**
 * 战魂数据
 */
export default class DraugData extends Draug 
{
    /** 配置 */
    public config:DraugConfig;

    /** 所有属性id列表 */
    public propIds:number[] = [];

    /** 主属性 */
    public mainProp:Prop;

    /** 副属性列表 */
    public propList:Prop[] = [];

    /** 装配英雄Id， -1表示没有 */
    public heroId:number = -1;

    /** 套装属性 */
    public suitData:number[] = [];

    /** 价值(铜钱) */
    public get wrothCoin():number
    {
        return this.nowExp * this.config.CoinRatio;
    }

    /** 所有等级总的经验 */
    public get nowExp():number
    {
        let exps  = this.config.ExpLevel;
        let exp   = this.exp
        let level = this.level;
        return level > 1 ? (exp + exps[level - 2]) : exp + this.config.initialExp;
    }

    /** 当前等级所需经验 */
    public get nextExp():number
    {
        let exps  = this.config.ExpLevel;
        let level = Math.min(this.level, exps.length); 
        return level > 1 ? (exps[level - 1] - exps[level - 2]) : (exps[level - 1] - this.config.initialExp);
    }

    /** 类型名 */
    public get typeName():number
    {
        return this.config.TypeName;
    }

    /** 最大等级 */
    public get maxLv():number
    {
        return (this.config.ExpLevel.length + 1);
    }

    /** 最大经验 */
    public get maxExp():number
    {
        let exps  = this.config.ExpLevel;
        return exps[exps.length - 1];
    }

    /** 判断是否携带某个属性 */
    public IsHadProp(propId:number)
    {
        let index = this.propIds.indexOf(propId);
        return index != -1;
    }

    /** 获取携带某个属性的值 */
    public GetValueProp(propId:number)
    {
        let value = 0;

        let mainprop = this.mainProp
        if (mainprop && mainprop.id == propId) 
        {
            value += mainprop.value;
        }

        let proplist = this.propList;
        if (proplist) 
        {
            for (let i = 0, len = proplist.length; i < len; i++) 
            {
                let viceprop = proplist[i];
                if(viceprop.id == propId)
                {
                    value += viceprop.value;
                }
            }
        }

        return value;
    }

    /** 根据当前经验获取等级 */
    public GetNewLv(exp:number)
    {
        let allexp = this.nowExp + exp;

        let exps  = this.config.ExpLevel;
        let len   = exps.length;
        for (let i = 0; i < len; i++) 
        {
            if (allexp < exps[i]) 
            {
                return i + 1;
            }
        }

        return len + 1;
    }

    constructor()
    {
        super();
    }    

    /**
     * 生成战魂数据
     * @param draug 
     */
    static Create(draug:IDraug):DraugData
    {
        let data = new DraugData();
        data.uid    = draug.uid;
        data.id     = draug.id;
        data.config = Game.config.draug.getConfig(draug.id);

        data.name   = draug.name;
        data.exp    = draug.level > 1 ? draug.exp : draug.exp - data.config.initialExp;
        data.level  = draug.level;
        data.pos    = draug.pos;
        data.quality= draug.quality;
        data.isLock = draug.isLock;
        // 主属性
        let mainprop = <Prop>draug.mainProp;
        if (mainprop) 
        {
            data.mainProp = mainprop;
            data.propIds.push(mainprop.propId);
        }
        // 副属性
        let proplist = draug.propList
        if (proplist) {
            for (let i = 0; i < proplist.length; i++) 
            {
                let prop = <Prop>draug.propList[i];
                data.propIds.push(prop.propId);
                data.propList.push(prop);
            }
        }

        
        return data;
    }
    
}