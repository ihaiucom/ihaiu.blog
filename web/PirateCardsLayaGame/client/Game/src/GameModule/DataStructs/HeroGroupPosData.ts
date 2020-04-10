import { HeroData } from './HeroData';
import Game from '../../Game';
import HeroGroup = proto.HeroGroup;
import HeroGroupPos = proto.HeroGroupPos;
import IHeroGroupPos = proto.IHeroGroupPos;
/**
 * 备战玩家数据
 */
export default class HeroGroupPosData extends HeroGroupPos 
{
   

    constructor()
    {
        super();
    }    

    /**
     * 生成战魂数据
     * @param draug 
     */
    static Create(serverData:IHeroGroupPos):HeroGroupPosData
    {
        let data = new HeroGroupPosData();
        data.pos = serverData.pos;
        data.heroId = serverData.heroId;
        data.skillId = serverData.skillId;
        console.log(data.skillId);
        return data;
    }

    public ChangeData(pos : IHeroGroupPos)
    {
        this.heroId = pos.heroId;
        this.skillId = pos.skillId;
    }

    public get heroData(): HeroData
    {
        return Game.moduleModel.hero.GetData(this.heroId);
    }
}
