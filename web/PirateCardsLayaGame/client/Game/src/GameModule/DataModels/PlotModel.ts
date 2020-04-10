import MModel from "../../GameFrame/Module/MModel";
import PlotData from "../DataStructs/PlotData";
import { EnumPlotTriggerType } from "../../GameWar/Logic/Enum/EnumPlotNodeType";
import PlotGroupData from "../DataStructs/PlotGroupData";
export default class PlotModel extends MModel
{
    // 关卡内可能出现多段剧情
    public _groupDict:Dictionary<number, PlotGroupData> = new Dictionary<number, PlotGroupData>();
    // 当前关卡有多少剧情组
    private _groupNum: number = -1;
    // 当前关卡所有剧情组PB数据
    private _data: pbconfig.StoryData;

    getPlotData(index: number, groupID: number): PlotData
    {
        if(!this._groupDict)
        {
            return null
        }
        
        let groupData = this._groupDict.getValue(groupID);
        if(!groupData)
        {
            return null
        }
        
        return groupData.PlotData(index);
    }

    // 当前组结束
    isGroupEnd(index: number, groupID: number): boolean
    {
        return this._groupDict.getValue(groupID).IsEnd(index);
    }

    // 组下表结束了
    isGroupMax(groupNum: number): boolean
    {
        return groupNum >= this._groupNum;
    }

    // 当前所有引导组都结束
    isAllEnd(index: number, groupID: number, groupNum: number): boolean
    {
        if(this.isGroupEnd(index, groupID) && this.isGroupMax(groupNum))
        {
            return true;
        }

        return false;
    }

    // 创建关卡所有剧情组
    createGroupDict(storyData:pbconfig.StoryData)
    {
        if(!storyData)
        {
            return;
        }

        this._data = storyData;
        let groupNum = 0;
        let groupDict = new Dictionary<number, PlotGroupData>();
        for(let storyGroup of storyData.StoryGroup)
        {
            let groupData = PlotGroupData.create(storyGroup as pbconfig.StoryGroup);
            groupDict.set(storyGroup.GroupID, groupData);
            groupNum ++;
        }

        this._groupDict = groupDict;
        this._groupNum = groupNum;
    }

    // 获取当前能触发的组， // TODO 后期需要补充参数对比，目前只有战斗开始和结束
    getGroupIDByTriggerType(type: EnumPlotTriggerType)
    {
        if(!this._data)
        {
            return null
        }

        for(let storyGroup of this._data.StoryGroup)
        {
            let triggerType = storyGroup.TriggerMode;
            if(type == triggerType)
            {
                return storyGroup.GroupID;
            }
        }

        return null;
    }

    allEnd()
    {
        this._groupDict = new Dictionary<number, PlotGroupData>();
        this._groupNum = -1;
        this._data = null;
    }
}
