import { EnumPlotNodeType, EnumPlotTriggerType } from "../../GameWar/Logic/Enum/EnumPlotNodeType";
let StoryNode = pbconfig.StoryNode
export default class PlotData extends StoryNode
{
    plotConfigIDList: number[]; // 剧情对话框数组
    needShowView: boolean;
    nodeData: any;
    nodeType: EnumPlotNodeType;
    nodeNo: number; // 引导组顺序标记，默认顺序播放，多线程时需要检测当前标记
    
    static create(storyNode: pbconfig.StoryNode)
    {
        let data = new PlotData();
        data.nodeType = storyNode.NodeType;
        data.nodeNo = storyNode.NodeNo;
        data.setNodeData(storyNode);
        return data;
    }

    setNodeData(storyNode: pbconfig.StoryNode)
    {
        if(!storyNode.NodeType)
        {
            this.nodeData = null
            return;
        }

        this.needShowView = false;
        switch (storyNode.NodeType)
        {
            case EnumPlotNodeType.Dialog:
                let plots = storyNode.DialogNode;
                let list = [];
                for(let plotConfigID of plots.DialogId)
                {
                    list.push(plotConfigID);
                }

                this.plotConfigIDList = list;
                this.nodeData = plots;
                this.needShowView = true;
                return;
            case EnumPlotNodeType.Animate:
                this.nodeData = storyNode.AnimatorNode;
                return;
            case EnumPlotNodeType.Effect:
                this.nodeData = storyNode.EffectNode;
                return;
            case EnumPlotNodeType.ScreenEffect:
                this.nodeData = storyNode.ScreenEffectNode;
                return;
            case EnumPlotNodeType.Move:
                this.nodeData = storyNode.MoveNode;
                return;
            case EnumPlotNodeType.Trigger:
                this.nodeData = storyNode.TriggerNode;
                return;
        }
    }

    reset()
    {
        this.plotConfigIDList = null;
        this.needShowView = false;
        this.nodeData = null;
        this.nodeType = null;
        this.nodeNo = null;
    }
}