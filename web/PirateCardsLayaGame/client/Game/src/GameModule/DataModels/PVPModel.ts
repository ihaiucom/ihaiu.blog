import MModel from '../../GameFrame/Module/MModel';
import DanInfoData from '../DataStructs/DanInfoData';
import Game from '../../Game';
import HeroGroupData from '../DataStructs/HeroGroupData';
export default class PVPModel extends MModel
{
    public danInfo: DanInfoData;
    public oldDanInfo: DanInfoData[] = [];
    private danInfoDict: Dictionary<int, DanInfoData> = new Dictionary<int, DanInfoData>();
    
    private _heroGroupUid: int;
    /**
     * 决斗神殿队伍选择
     * 
     * @param {int} uid 队伍uid
     * @memberof PVPModel
     */
    public SetHeroGroupUid(uid: int)
    {
        this._heroGroupUid = uid;
    }

    public get SelectedHeroGroup(): HeroGroupData
    {
        if(!this._heroGroupUid)
            this._heroGroupUid = Game.moduleModel.battlePlan.nowSelectTeam;
        return Game.moduleModel.battlePlan.GetTeamInfo(this._heroGroupUid);
    }
    
    /**
     * 决斗神殿段位信息
     * 
     * @param {proto.IGamerDan} danInfo 
     * @memberof PVPModel
     */
    public setDanInfo(danInfo: proto.IGamerDan)
    {
        this.oldDanInfo.length = 0;
        this.danInfoDict.clear();
        this.danInfo = DanInfoData.Create(danInfo.curDanInfo);
        for(let info of danInfo.historyDanInfo)
        {
            let danInfo = DanInfoData.Create(info);
            this.oldDanInfo.push(danInfo);
            this.danInfoDict.add(danInfo.seasonId, danInfo);
        }
    }

    public GetDanInfoBySeasonId(seasionId: int)
    {
        return this.danInfoDict.getValue(seasionId);
    }
}