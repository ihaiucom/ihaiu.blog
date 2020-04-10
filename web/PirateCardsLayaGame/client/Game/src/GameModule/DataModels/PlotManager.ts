import MModel from "../../GameFrame/Module/MModel";
import PlotModel from "./PlotModel";
import Game from "../../Game";
import { War } from "../../GameWar/Logic/War";
import { EnumPlotTriggerType } from "../../GameWar/Logic/Enum/EnumPlotNodeType";
import MenuCtl from "../../GameFrame/Menu/MenuCtl";
import { MenuId } from "../MenuId";
import PlotWindowUI from "../../FGUI/Extends/SystemModulePlot/PlotWindowUI";
export default class PlotManager extends MModel
{
    // 剧情引导模块引用
    private plot: PlotModel;
    // 当前引导组数据单元下表
    private plotIndex: number = -1;
    // 当前关卡执行了多少个引导组，用于判断当前关卡所有引导组是不是结束了
    private plotGroupIndex: number = 0;
    // 当前引导组ID
    private plotGroupID: number = -1;
    // 当前引导组的触发类型
    public triggerType: EnumPlotTriggerType;
    // 剧情引导界面
    private plotWindowUI: PlotWindowUI;

    constructor()
    {
        super();
    }

    public buildPlotData(stroyData: pbconfig.StoryData)
    {
        if(!this.plot)
        {
            this.plot = Game.moduleModel.plot;
        }

        this.plot.createGroupDict(stroyData);
    }

    public startByType(type: EnumPlotTriggerType)
    {
        if(!this.plot)
        {
            this.plot = Game.moduleModel.plot;
        }

        this.triggerType = type;
        let groupID = this.plot.getGroupIDByTriggerType(type);
        this.start(groupID);
    }

    public start(groupID: number)
    {
        if(!this.plot)
        {
            this.plot = Game.moduleModel.plot;
        }

        if(!groupID)
        {
            this.doCallback();
            return;
        }

        this.plotGroupID = groupID;
        this.plotGroupIndex ++;

        this.plotIndex = 0;
        this.do();

        // TODO 多线程处理
    }

    private do()
    {
        let plotData = this.plot.getPlotData(this.plotIndex, this.plotGroupID);
        // console.log("执行", this.plotIndex, this.plotGroupID, this.plot._groupDict)
        if(!plotData)
        {
            console.log("ON Plot Manager ERROR!!!", this.plotIndex, this.plotGroupID)
            return;
        }
        if(plotData.needShowView)
        {
            this.showView();
        }
        else
        {
            // this.hideView();
            // TODO 战斗内关闭
            // War.api.DoBattlePlot(plotData, plotData.NodeType);
        }
    }

    public next()
    {
        if(this.isGroupEnd)
        {
            this.end();
            return;
        }

        this.plotIndex ++;
        this.do();
    }

    public end()
    {
        if(this.isAllEnd)
        {
            this.allEnd()
            return;
        }

        // this.removeView();
        this.doCallback();
        this.clearGroup();
    }

    public allEnd()
    {
        this.doCallback();
        this.clear();
    }

    private doCallback()
    {
        if(this.triggerType && this.triggerType == EnumPlotTriggerType.End)
        {
            War.api.OnShowResult();
        }
        else
        {
            War.api.OnPlotEndBackBattle();
        }
    }
    
    public clear()
    {
        // this.removeView();
        this.clearGroup()
        
        this.triggerType = null;
        this.plotGroupID = -1;
        this.plotGroupIndex = 0;
        this.plotIndex = -1;
        if(this.plot)
        {
            this.plot.allEnd();
        }
    }

    public clearGroup()
    {
        this.plotIndex = -1;
        this.triggerType = null;
    }

    // 当前关卡所有的结束
    public get isAllEnd()
    {
        return this.plot.isAllEnd(this.plotIndex, this.plotGroupID, this.plotGroupIndex);
    }

    // 当前组结束
    public get isGroupEnd()
    {
        return this.plot.isGroupEnd(this.plotIndex, this.plotGroupID);
    }

    private showView()
    {
        if(!this.PlotData)
        {
            console.error("On Plot Update View ERROR", this.plotIndex, this.plotGroupID);
            return;
        }

        Game.menu.open(MenuId.Plot);
    }

    // private hideView()
    // {
    //     if(this.plotView)
    //     {
    //         this.plotView.end();
    //     }
    // }

    public get PlotData()
    {
        return this.plot.getPlotData(this.plotIndex, this.plotGroupID);
    }

    private get plotView()
    {
        if(!this.plotWindowUI)
        {
            let plotWindow:MenuCtl = Game.menu.getMenuCtl(MenuId.Plot);
            let plotWindowUI:PlotWindowUI = <PlotWindowUI>  plotWindow.moduleWindow.contentPane;
            this.plotWindowUI = plotWindowUI;
        }
        return this.plotWindowUI;
    }

    // private removeView()
    // {
    //     if(this.plotView)
    //     {
    //         this.plotView.end();
    //         this.plotWindowUI = null;
    //     }
    // }
}
