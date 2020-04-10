import Game from '../../Game';
export default class RankData extends proto.RankLength
{

    static Create(rankLength: proto.IRankLength): RankData
    {
        let data = new RankData();
        for(let k in rankLength)
        {
            data[k] = rankLength[k];
        }
        return data;
    }
    
    public get star(): number
    {
        return this.length;
    }

    public get rankTimes(): number
    {
        return this.length;
    }
    
    public get name(): string
    {
        let n = "用户"+this.rank;
        if(this.mini)
            n = this.mini.name;
        return n;
    }

    public get danName()
    {
        return this.config.name;
    }

    public get serverName()
    {
        return this.mini.lsid + "";
    }

    private get config()
    {
        let that = this;
        let configList = Game.config.duelDan.getConfigList();
        let config = configList.find((e) =>
        {
            return e.totalStar <= that.star && e.totalStar+e.star > that.star;
        });
        if(!config)
            console.error(`DuelDan没有星星数为${this.length}的配置`);
        return config;
    }
   


}