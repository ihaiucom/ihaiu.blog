import MModel from "../../GameFrame/Module/MModel";
import Game from "../../Game";
import { CardScoreType } from "../../War/Enums/CardScoreType";
import HeroData from "../DataStructs/HeroData";
import GameStatus from "../../War/Datas/GameStatus";

export default class HeroModel extends MModel
{
    LocalStorageKey = "HeroModel";

    list : HeroData[] = [];
    map = new Map<number, HeroData>();
    selectId: number = -1;
    
    
    // 初始化
    install(): void
    {
        var configList = Game.config.card.getConfigListByTypeKey(CardScoreType.Hero);
        for(var i = 0, len = configList.length; i < len; i ++)
        {
            var config = configList[i];
            var heroData = new HeroData();
            heroData.cardConfig = config;
            heroData.id = config.id;

            this.list.push(heroData);
            this.map.set(heroData.id, heroData);
        }

        if(this.list.length > 0)
        {
            this.list[0].isGeted = true;
            this.selectId = this.list[0].id;
        }

        this.read();
    }

    getItem(id: number)
    {
        return this.map.get(id);
    }

    get selectHero()
    {
        var item = this.getItem(this.selectId);
        if(item)
        {
            return item;
        }
        else
        {
            if(this.list.length > 0)
            {
                this.selectId = this.list[0].id;
                return this.list[0];
            }
        }
    }

    set selectHero(heroData: HeroData)
    {
        this.selectId = heroData.id;
        GameStatus.currentHero = heroData.cardConfig.heroType;

        this.save();
    }

    hasNext()
    {
        var index = this.list.indexOf(this.selectHero);
        index ++ 
        return index  < this.list.length;
    }

    hasPrev()
    {
        var index = this.list.indexOf(this.selectHero);
        index --
        return index >= 0;
    }

    getNextItem()
    {
        var index = this.list.indexOf(this.selectHero);
        index ++;
        if(index < this.list.length)
        {
            this.selectHero = this.list[index];
        }
        return this.selectHero;
    }

    getPrevItem()
    {
        var index = this.list.indexOf(this.selectHero);
        index --;
        if(index >= 0)
        {
            this.selectHero = this.list[index];
        }
        return this.selectHero;
    }

    enableBuy()
    {
        return GameStatus.gold >= this.selectHero.cardConfig.coin;
    }

    buy()
    {
        this.selectHero.isGeted = true;
        GameStatus.gold -= this.selectHero.cardConfig.coin;
        this.save();
    }



    save()
    {
        var json = {selectId: this.selectId, list:[]};
        for(var item of this.list)
        {
            json.list.push({id: item.id, num: item.isGeted ? 1: 0});
        }

        Game.localStorage.setJSON(this.LocalStorageKey, json, false);
    }

    read()
    {
        if(Game.localStorage.hasItem(this.LocalStorageKey, false))
        {
            var json = Game.localStorage.getJSON(this.LocalStorageKey, false);
            this.selectId = json.selectId;
            for(var item of json.list)
            {
                var heroData = this.getItem(item.id);
                if(heroData)
                {
                    heroData.isGeted = item.num > 0;
                }

            }
        }
       

    }


}