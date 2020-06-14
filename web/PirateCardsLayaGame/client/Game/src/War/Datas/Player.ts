import ItemDecorateConfig from "../../Config/ConfigExtends/ItemDecorateConfig";
import ItemWeaponConfig from "../../Config/ConfigExtends/ItemWeaponConfig";
import Game from "../../Game";
import LevelConfig from "../../Config/ConfigExtends/LevelConfig";
import Card from "../Logics/Card";
import { CardScoreType } from "../Enums/CardScoreType";
import ItemConsumeConfig from "../../Config/ConfigExtends/ItemConsumeConfig";
import WarGame from "../WarGame";
import { EffectType } from "../Enums/EffectType";
import EquipIcon from "../../FGUI/Extends/GameHome/EquipIcon";
import { ItemType } from "../../GameModule/DataEnums/ItemType";

export class EquipData
{
    sChange: Signal = new Signal();
    sStepChange: Signal = new Signal();

    view: EquipIcon;

    id: number;
    config:ItemDecorateConfig | ItemWeaponConfig;
    
    step = 0;
    stepMax = 0;

    setId(id: number)
    {
        this.id = id;
        if(id <= 0)
        {
            this.config = null;
            this.step = 0;
            this.stepMax = 0;
        }
        else
        {
            this.config = <any> Game.config.item.getConfig(id);
            if(this.config.triggerArgs && this.config.triggerArgs.length > 0)
            {
                this.stepMax = this.config.triggerArgs[0];
                this.step = 0;
            }
            else
            {
                this.stepMax = 0;
            }
        }
        this.sChange.dispatch();
    }

    get iconUrl()
    {
        return this.config ? "res/sprite/icon/" + this.config.icon + ".png" : "";
    }

    

    get effectTypeId()
    {
        if(this.config)
        {
            return this.config.effectTypeId;
        }
        return 0;
    }

    get effectArg()
    {
        if(this.config)
        {
            if(this.config.effectArgs.length > 1)
            {
                return Random.rangeBoth(this.config.effectArgs[0], this.config.effectArgs[1]);
            }
            else
            {
                return this.config.effectArgs[0];
            }
        }
        return 0;
    }

    onEatCard(card: Card)
    {
        if(this.config && this.config.triggerConfig)
        {
            var cardTypeList = this.config.triggerConfig.cardTypeIdList
            if(cardTypeList.length == 0)
            {
                this.addStep(card);
            }
            else if(cardTypeList.indexOf(card.type) != -1)
            {
                this.addStep(card);
            }
        }
    }

    addStep(card: Card)
    {
        if(this.step < this.stepMax)
        {
            this.step ++;
            this.sStepChange.dispatch();
        }

        if(this.enabelUse)
        {
            this.use();
            // switch(this.effectTypeId)
            // {
            //     case EffectType.AddDamageExtra:
            //         if(card.isNegative())
            //         {
            //             this.use();
            //         }
            //         break;
            //     default:
            //         this.use();
            //         break;
            // }
        }
    }

    get enabelUse()
    {
        return this.step >= this.stepMax;
    }

    use()
    {
        switch(this.effectTypeId)
        {
            case EffectType.AddHP:
            case EffectType.AddArmor:
            case EffectType.AddHPMax:
            case EffectType.AddHPPer:
                this.playShoot();
                break;
            case EffectType.TiggerCannonOne:
                
                break;
        }
    }

    playShoot()
    {
        var tween = Player.current.game.field.shootEquipToHero(this.view, 300);
        tween.onComplete.addOnce(this.doUse, this);
        // tween.restart();
        Player.current.game.addToAnimationQueue(tween);
    }

    doUse()
    {
        Player.current.useEquipConsume(this.id);
        this.onUse();
    }

    onUse()
    {
        this.step = 0;
        this.sStepChange.dispatch();
    }

}

export class Player
{
    private static _current: Player;
    static get current():Player
    {
        if(!this._current)
        {
            this._current = new Player();
        }
        return this._current;
    }

    game:WarGame;

    sUpLevelChange: Signal = new Signal();
    sLevelChange: Signal = new Signal();
    sEquipChange: Signal = new Signal();
    sExpChange: Signal = new Signal();

    levelConfig: LevelConfig;
    level: number = 1;

    levelExp = 0;
    levelExpMax = 100;

    
    equipDecorateData:EquipData = new EquipData();
    equipWeaponData:EquipData = new EquipData();

    equips: EquipData[]= [];

    constructor()
    {
        this.equips.push(this.equipDecorateData);
        this.equips.push(this.equipWeaponData);
    }

    getRandomList(itemType: ItemType, ignoreList:number[])
    {
        var list = [];
        var arr = this.levelConfig.randomWeaponList;
        for(var id of arr)
        {
            var config = Game.config.item.getConfig(id);
            if(config.type == itemType)
            {
                if(ignoreList && ignoreList.indexOf(id) != -1)
                {
                    continue;
                }
                list.push(id);
            }
        }
        if(list.length == 0) list = arr;
        return list;
    }

    randomEquipIgnoreList = [];

    randomEquipDecorateId()
    {
        var ignoreList = this.randomEquipIgnoreList;
        ignoreList.length = 0;
        ignoreList.push(this.equipDecorateData.id);
        ignoreList.push(this.equipWeaponData.id);
        var list = this.getRandomList(ItemType.Decorate, ignoreList);
        var i = Random.rangeBoth(0, list.length - 1);
        var id = list[i];
        ignoreList.push(id);
        return id;
    }

    randomEquipWeaponId()
    {
        
        var ignoreList = this.randomEquipIgnoreList;
        var list = this.getRandomList(ItemType.Weapon, ignoreList);
        var i = Random.rangeBoth(0, list.length - 1);
        var id = list[i];
        ignoreList.push(id);
        return id;
        
    }

    randomEquipConsumeId()
    {
        var ignoreList = this.randomEquipIgnoreList;
        var list = this.getRandomList(ItemType.Consume, ignoreList);
        var i = Random.rangeBoth(0, list.length - 1);
        var id = list[i];
        ignoreList.push(id);
        return id;
    }

    randomEquip(list: number[], igroonId: number)
    {
        list = list.slice(0);
        if(list.length  > 1)
        {
            var i = list.indexOf(igroonId);
            if(i != -1)
            {
                list.splice(i, 1);
            }
        }

        var i = Random.rangeBoth(0, list.length - 1);
        return list[i];
    }
    
    

    reset()
    {
        this.levelExp = 0;
        this.setLevel(1);
        this.equipDecorateData.setId(0);
        this.equipWeaponData.setId(0);

        this.sLevelChange.dispatch();
        this.sExpChange.dispatch();
        this.sEquipChange.dispatch();
    }

    setLevel(level: number)
    {
        level = Math.min(level, Game.config.level.levelMax);
        level = Math.max(1, level);
        if(this.levelExp > 0 && this.levelConfig)
        {
            this.levelExp = this.levelExp - this.levelExpMax;
            this.levelExp = Math.max(0, this.levelExp);
        }
        this.level = level;
        var levelConfig = this.levelConfig = Game.config.level.getConfig(level);
        this.levelExpMax = levelConfig.exp;
        this.sLevelChange.dispatch();
        this.sExpChange.dispatch();
    }

    uplevel()
    {
        if(this.level >= Game.config.level.levelMax)
        {
            return;
        }

        this.setLevel(this.level + 1);
        this.sUpLevelChange.dispatch();
    }

    addExp(exp: number)
    {
        this.levelExp += exp;
        this.checkUplevel();
        this.sExpChange.dispatch();
    }

    checkUplevel()
    {
        if(this.levelExp >= this.levelExpMax)
        {
            this.uplevel();
        }
    }

    onCardToReplaceAfterSmash(card: Card)
    {
        if(card.config.exp > 0)
        {
            this.addExp(card.config.exp);
        }
    }

    onEatCard(card: Card)
    {
        if(card.config.exp > 0)
        {
            this.addExp(card.config.exp);
        }

        
        for(var item of this.equips)
        {
            item.onEatCard(card);
        }
    }
    
    useEquipConsumeDelay(id: number)
    {
        Laya.timer.once(500, this, this.useEquipConsume, [id])
    }

    useEquipConsume(id: number)
    {
        var config:ItemConsumeConfig = <any> Game.config.item.getConfig(id);
        var hero = this.game.field.getHero();
        if(hero)
        {
            hero.useEffect(config.effectTypeId, config.effectArgs)
        }
    }

    goldMultiplier(): number
    {
        var v = 0;
        for(var item of this.equips)
        {
            if(item.enabelUse)
            {
                if(item.effectTypeId == EffectType.GoldMultiplier)
                {
                    v += item.effectArg;
                    // item.playShoot();
                    item.onUse();
                }
            }
        }
        return v > 1 ? v : 1;
    }

    damageExtra(): number
    {
        var v = 0;
        for(var item of this.equips)
        {
            if(item.enabelUse)
            {
                if(item.effectTypeId == EffectType.AddDamageExtra)
                {
                    v += item.effectArg;
                    // item.playShoot();
                    item.onUse();
                }
            }
        }
        return v;
    }

    
    invincible(): boolean
    {
        for(var item of this.equips)
        {
            if(item.enabelUse)
            {
                if(item.effectTypeId == EffectType.Invincible)
                {
                    // item.playShoot();
                    item.onUse();
                    return true;
                }
            }
        }
        return false;
    }
    
    autoUnlockChest(): boolean
    {
        for(var item of this.equips)
        {
            if(item.enabelUse)
            {
                if(item.effectTypeId == EffectType.AutoUnlockChest)
                {
                    // item.playShoot();
                    item.onUse();
                    return true;
                }
            }
        }
        return false;
    }

    checkTrigger()
    {
        
        for(var item of this.equips)
        {
            if(item.enabelUse)
            {
                switch(item.effectTypeId)
                {
                    case EffectType.TiggerCannonOne:
                    case EffectType.TiggerLightning:
                    case EffectType.TiggerBomb:
                        return this.game.field.equipTrigger(item);
                }
            }
        }
    }

    
    debugCheckTrigger()
    {
        for(var item of this.equips)
        {
            switch(item.effectTypeId)
            {
                case EffectType.TiggerCannonOne:
                case EffectType.TiggerLightning:
                case EffectType.TiggerBomb:
                    return this.game.field.equipTrigger(item);
            }
        }
    }




}

window['Player'] = Player;