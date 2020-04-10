
import Game from "../../Game";
import SkillConfig from "../../Config/ConfigExtends/SkillConfig";
import { EnumSkillState } from "../../GameWar/Logic/Enum/EnumSkill";
import { SkillUtil } from "../../GameWar/Logic/Utils/SkillUtil";

export class SkillData
{
    maxLv = 6;

    heroID: int;
    heroLevel: int;
    id: int;
    lv: int;
    state: int;
    config: SkillConfig;

    static Create(id: int, lv: int, heroID: int, heroLevel: int)
    {
        let data = new SkillData();
        data.heroID = heroID;
        data.heroLevel = heroLevel;
        data.id = id;
        data.lv = lv;
        data.config = Game.config.skill.getConfig(data.id);
        data.UpdateState();
        return data;
    }

    // 技能状态：未解锁、可升级、已满级
    UpdateState()
    {
        // 角色未获得
        if(this.heroLevel <= 0)
        {
            this.state = EnumSkillState.lock;
            return
        }

        if( SkillUtil.CheckSkillIsSkill(this.config.skillType))
        {
            if(this.lv >= this.maxLv)
            {
                this.state = EnumSkillState.MaxLv;
            }
            else if(this.config.openSkillLv <= this.heroLevel)
            {
                this.state = EnumSkillState.CanLv;
            }
            else
            {
                this.state = EnumSkillState.lock;
            }
        }
        else
        {
            this.state = EnumSkillState.MaxLv;
        }
    }

    get IsMax()
    {
        return this.lv >= this.maxLv;
    }
    
    get icon()
    {
        let config = Game.config.avatar.getConfig(this.config.icon);
        if(!config)
        {
            console.error("Not Skill Config");
            return "";
        }
        return config.iconUrl;
    }

    get name(): string
    {
        return this.config.Name;
    }

    get costMoney(): any[]
    {
        let ID = this.config.cost[this.lv - 1];
        let config = Game.config.resCost.getConfig(ID);
        if(!config)
        {
            console.error("cost config not get!!!", ID);
            return [];
        }
        let list = config.costItemNum
        for(let costConfig of list)
        {
            if(costConfig.ItemType == proto.ItemType.silver)
            {
                return [costConfig.ItemId, costConfig.ItemNum, costConfig.ItemType];
            }
        }
        console.error("cost config not silver!!!", ID);
        return [];
    }

    get costList(): any[]
    {
        let ID = this.config.cost[this.lv - 1];
        let config = Game.config.resCost.getConfig(ID);
        if(!config)
        {
            console.error("cost config not get!!!", ID);
            return [];
        }
        let configs = [];
        let list = config.costItemNum
        for(let costConfig of list)
        {
            if(costConfig.ItemType != proto.ItemType.silver)
            {
                let arr = [costConfig.ItemId, costConfig.ItemNum, costConfig.ItemType]
                configs.push(arr);
            }
        }
        return configs;
    }

    get desc(): string
    {
        let heroData = Game.moduleModel.hero.GetData(this.heroID);
        let attStr = heroData.config.atkType == 1?"物攻的":"魔攻的"

        let lv = this.lv
        let baseStr = this.descConfig;
        let num1 = this.config.fixedDamage[lv-1];
        let num2 = this.config.coefficientDamage[lv-1];
        num2 = Math.floor(num2/100)
        let str1 = "";
        let str2 = "";
        if(num1 != 0)
        {
            str1 = num1 + "点+";
        }

        if(num2 != 0)
        {
            str2 = num2 + "%" + attStr;
        }
        
        let str = baseStr.format(str1+str2);
        return str;
    }

    get nextDesc(): string
    {
        if(this.IsMax)
        {
            return "";
        }

        let heroData = Game.moduleModel.hero.GetData(this.heroID);
        let attStr = heroData.config.atkType == 1?"物攻的":"法攻的"

        let lv = this.lv
        let baseStr = this.descConfig;
        let num1 = this.config.fixedDamage[lv-1];
        let num2 = this.config.coefficientDamage[lv-1];
        num2 = Math.floor(num2/100)
        let nextNum1 = this.config.fixedDamage[lv];
        let nextNum2 = this.config.coefficientDamage[lv];
        nextNum2 = Math.floor(nextNum2/100)
        let str1 = "";
        let str2 = "";
        if(num1 == 0)
        {
            if(nextNum1 != 0)
            {
                str1 = nextNum1 + "点+";
            }
        }
        else
        {
            if(nextNum1 == 0)
            {
                str1 = num1 + "点+";
            }
            else
            {
                str1 = num1 + "+" + (nextNum1 - num1) + "点+";
            }
        }

        if(num2 == 0)
        {
            if(nextNum2 != 0)
            {
                str2 = nextNum2 + "%" + attStr;
            }
        }
        else
        {
            if(nextNum2 == 0)
            {
                str2 = num2 + "%" + attStr;
            }
            else
            {
                str2 = num2 + "%+" + (nextNum2 - num2) + "%" + attStr;
            }
        }
        
        let str = baseStr.format(str1+str2);
        return str;
    }

    get descConfig()
    {
        switch(this.lv)
        {
            case 1:
                return this.config.Updesc1;
            case 2:
                return this.config.Updesc2;
            case 3:
                return this.config.Updesc3;
            case 4:
                return this.config.Updesc4;
            case 5:
                return this.config.Updesc5;
            case 6:
                return this.config.Updesc6;
        }
    }
}