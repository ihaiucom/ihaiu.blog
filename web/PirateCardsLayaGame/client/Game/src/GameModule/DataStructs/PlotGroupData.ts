import { EnumPlotTriggerType } from "../../GameWar/Logic/Enum/EnumPlotNodeType";
import PlotData from "./PlotData";
export default class PlotGroupData
{
    private _data: pbconfig.StoryGroup;
    private _list: PlotData[] = [];
    triggerType: EnumPlotTriggerType;
    chapterID: number; // 章节ID
    mapID: number; // 地图ID
    WfBossHPPer: intwf; // boss血量百分比
    
    static create(storyGroup: pbconfig.StoryGroup)
    {
        let data = new PlotGroupData();
        data.triggerType = storyGroup.TriggerMode;
        data.chapterID = storyGroup.ChapterID;
        data.chapterID = storyGroup.MapID;
        data.chapterID = storyGroup.WfBossHPPer;
        data._data = storyGroup;
        data.BuildPlotList(storyGroup);
        return data;
    }

    get list()
    {
        return this._list;
    }

    get PBData()
    {
        return this._data;
    }

    PlotData(index: number)
    {   
        return this._list[index];
    }

    BuildPlotList(storyGroup: pbconfig.StoryGroup)
    {
        let list = [];
        for(let storyNode of storyGroup.vecStoryNode)
        {
            let plotData = PlotData.create(storyNode as pbconfig.StoryNode);
            list.push(plotData);
        }
        this._list = list;
    }

    IsEnd(index: number)
    {
        let list = this._list;
        if(!list)
        {
            return;
        }

        return index + 1 >= list.length;
    }

    Reset()
    {
        this.triggerType = null;
        this.chapterID = null;
        this.chapterID = null;
        this.chapterID = null;
        this._data = null;
        this._list = [];
    }
}