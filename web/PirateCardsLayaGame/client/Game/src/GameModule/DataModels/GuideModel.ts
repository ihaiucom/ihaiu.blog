import MModel from "../../GameFrame/Module/MModel";
import GuideData from "../DataStructs/GuideData";
import ProtoHandlerList from "../../protohandlers/ProtoHandlerList";
import Game from "../../Game";
import GameEventKey from "../../GameEventKey";
import { GuideMgr } from "../GuideModule/GuideMgr";
import GuideConfigReader from "../../Config/ReaderExtends/GuideConfigReader";

export enum GuideGroup
{
    /** 单人PVE */
    PVE_BATTLE = 1001,
    /** 英雄升级 */
    HERO_LEVELUP = 1002,
    /** 英雄装备 */
    HERO_EQUIP = 1003,
    /** 上阵第二个英雄 */
    BATTLE_PLAN_SECOND = 1004,
    /** 装备升级 */
    EQUIP_LEVELUP = 1005,
    /** 进入战斗1-2 */
    BATTLE_ENTER_1_2 = 1006,
    /** 进入战斗1-3 */
    BATTLE_ENTER_1_3 = 1007,
    /** 进入战斗1-4 */
    BATTLE_ENTER_1_4 = 1008,
    /** 精英副本 */
    BATTLE_ENTER_SPECIAL_1 = 1009,
    /** 进入战斗1-6 */
    BATTLE_ENTER_1_6 = 1010,
    /** 进入战斗2-1 */
    BATTLE_ENTER_2_1 = 1011,
    /** 结束引导 */
    Guide_Finish = 1012,
}


export default class GuideModel extends MModel
{
    private _mapGuideData : Map<number, GuideData>;

    private get guideMgr() : GuideMgr
    {
        return Game.system.guideMgr;
    }

    private get guideConfigReader() : GuideConfigReader
    {
        return Game.config.guide;
    }

    constructor()
    {
        super();
        this._mapGuideData = new Map<number, GuideData>();
    }

    /**
     * 初始化数据
     * @param list 数据列表
     */
    public InitData(list : proto.IGuide[])
    {
        for(let i = 0 ; i < list.length ; i ++)
        {
            let item = list[i];
            let data = GuideData.Create();
            data.SetDataByServer(item);
            this._mapGuideData.set(data.id, data);

            if(!data.isOver && !this.guideMgr.isGuiding)
            {
                let item = this.guideConfigReader.getConfig(data.id * 1000 + data.progress);
                if(item)
                {
                    this.guideMgr.StartGuide(item.id, true, item.group);
                }
            }
        }
    }

    /**
     * 发送数据
     */
    public SendData()
    {
        let list = this._mapGuideData.getValues();
        if(list.length <= 0)
        {
            return;
        }
        Game.sender.guide.ChangeGuideData(list);
    }

    /**
     * 添加一个新的Guide数据
     * @param type guideGroup类型
     */
    public AddNewGuideData(type : GuideGroup) : GuideData
    {
        let data = GuideData.Create();
        data.SetData(type, false, 1);
        this._mapGuideData.set(type, data);
        return data;
    }

    /**
     * 通过UID改变数据
     * @param isOver 是否结束
     * @param nowState 当前状态
     * @param uid guide的UID
     */
    public ChangeDataByIndex(nowState : number, uid : number)
    {
        let item = this._mapGuideData.get(uid);
        if(!item)
        {
            return;
        }
        item.SetGuideProgress(nowState);
    }

    public DataGotoNextStep(uid : number)
    {
        let item = this._mapGuideData.get(uid);
        if(!item)
        {
            return;
        }
        // item.SetGuideProgress(item.progress + 1);
        item.GoNextGuideProgress();
    }
    /**
     * 跳到某一步骤
     * @param groupID 
     * @param progress 
     */
    public DataJumpToStep(groupID : number, progress : number)
    {
        let item = this._mapGuideData.get(groupID);
        if(!item)
        {
            return;
        }
        
        item.SetGuideProgress(progress);
    }


    // /**
    //  * 通过当前的新手引导状态来派发事件
    //  */
    // public CheckNowBattleState() : int
    // {
    //     let data = this._mapGuideData.get(GuideType.PVE_BATTLE);
    //     if(!data)
    //     {
    //         data = this.AddNewGuideData(GuideType.PVE_BATTLE);
    //     }
    //     return data.progress;
    // }
    
    public GetData(type : GuideGroup) : GuideData
    {
        if(!GuideMgr.isOpenGuide)
        {
            return null;
        }
        // return null;
        let res = this._mapGuideData.get(type);
        return res;
    }
    
}