import HeroGroup = proto.HeroGroup;
import IHeroGroup = proto.IHeroGroup;
import HeroGroupPos = proto.HeroGroupPos;
import IHeroGroupPos = proto.IHeroGroupPos;
import HeroGroupPosData from "./HeroGroupPosData";
import Game from "../../Game";
import GameEventKey from "../../GameEventKey";
/**
 * 备战玩家数据
 */
export default class HeroGroupData extends HeroGroup 
{
    public heroGroupPosDict = new Dictionary<number, HeroGroupPosData>();
    constructor()
    {
        super();
    }    

    /**
     * 生成数据
     * @param draug 
     */
    static Create(serverData:IHeroGroup):HeroGroupData
    {
        let data = new HeroGroupData();
        data.SetData(serverData);
        return data;
    }
    /**
     * 初始化
     * @param uid 表里对应的id
     */
    public Init()
    {

    }

    /**
     * 改变对应的Pos的数据
     * @param pos 
     */
    public ChangeHeroGroupPosData(pos : IHeroGroupPos)
    {
        let data = this.heroGroupPosDict.getValue(pos.pos);
        if(!data)
        {
            console.error("不存在这个pos, pos为", pos.pos);
        }
        data.ChangeData(pos);
    }
    /**
     * 改变对应的英雄
     * @param pos 
     * @param heroId 
     */
    public ChangeHeroGroupPosHero(pos : number, heroId : number, groupId : number)
    {
        let data = this.heroGroupPosDict.getValue(pos);
        if(!data)
        {
            console.error("不存在这个pos, pos为", pos);
        }
        data.heroId = heroId;
        Game.event.dispatch(GameEventKey.GameFrame_BattlePlanChangeHero, pos, groupId);
    }

    public GetHeroCount() : number
    {
        let count = 0;
        let keys = this.heroGroupPosDict.getKeys();
        for(let i = keys.length - 1 ; i >= 0 ; i --)
        {
            let item = this.heroGroupPosDict.getValue(keys[i]);
            if(item && item.heroId != 0)
            {
                count++;
            }
        }
        return count;
    }

    /**
     * 改变对应的技能
     * @param pos 
     * @param skillId 
     */
    public ChangeHeroGroupPosSkill(pos : number, skillId : number)
    {
        let data = this.heroGroupPosDict.getValue(pos);
        if(!data)
        {
            console.error("不存在这个pos, pos为", pos);
        }
        data.skillId = skillId;
        Game.event.dispatch(GameEventKey.GameFrame_BattlePlanRefreshCommonSkill, this.id, pos, skillId);
    }

    public GetHeroData(index : number) : HeroGroupPosData
    {
        let data = this.heroGroupPosDict.getValue(index);
        return data;
    }
    /**
     * 通过英雄ID获取该队伍内这个英雄的数据，如果没有则返回NULL
     * @param guid 英雄的GUID
     */
    public GetHeroByID(guid : number) : HeroGroupPosData
    {
        let items = this.heroGroupPosDict.getValues();
        for(let item of items)
        {
            if(item && item.heroId == guid)
            {
                return item;
            }
        }
        return null;
    }
    /**
     * 设置数据
     * @param serverData 
     */
    public SetData(serverData:IHeroGroup)
    {
        this.id = serverData.id;
        this.name = serverData.name;
        let list : IHeroGroupPos[] = [];
        let len = serverData.posList.length;
        for(let i = 0; i < len ; i++)
        {
            let heroGroupPosItem = HeroGroupPosData.Create(serverData.posList[i]);
            list.push(heroGroupPosItem);
            this.heroGroupPosDict.set(heroGroupPosItem.pos, heroGroupPosItem);
        }
        this.posList = list;
    }
}