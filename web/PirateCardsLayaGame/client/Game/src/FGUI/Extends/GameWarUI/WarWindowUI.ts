/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WarWindowUIStruct from "../../Generates/GameWarUI/WarWindowUIStruct";
import WarWindow from "../../../GameModule/ViewWindows/WarWindow";

export default class WarWindowUI extends WarWindowUIStruct
{
    moduleWindow: WarWindow;

    type: string = "PVE";

    static currentBattleUI:fgui.GComponent;

    // 窗口初始化完毕
    onWindowInited(): void
    {
        window["warWindowUI"] = this;
        // console.log("WarWindowUI onWindowInited " , this.moduleWindow);
        // if (!Engine.borwer.isLiuHai) 
        // {
        //     this.m_skillcontralView.x += 35
        // }
    }

    // 窗口销毁完毕
    onWindowDestory(): void
    {
        // if (!Engine.borwer.isLiuHai) 
        // {
        //     this.m_skillcontralView.x -= 35
        // }
    }

    // 窗口显示
    onWindowShow(): void
    {
        let params = this.moduleWindow.menuParameter.args;
        if(params.length > 0)
        {
            
            this.type = params[0][0];
            if (this.type == "2V2")
                WarWindowUI.currentBattleUI = this.m_p2vp2View;
            else if (this.type == "PVP")
                WarWindowUI.currentBattleUI = this.m_pvpView;
            else if (this.type == "PVE")
                WarWindowUI.currentBattleUI = this.m_avatorView;
        }
        else
        {
            this.type = "PVE";
            WarWindowUI.currentBattleUI = this.m_avatorView;
        }
        this.m_type.setSelectedPage(this.type);

        // JJSGRuntime.event.add("ISPAUSE", this.isPause, this);

        // GOW.GetTicker().showSpeedUpSignal.add(this.DelayShowStepView, this);
        // GOW.GetTicker().hideSpeedUpSignal.add(this.HideStepView, this);

    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.HideStepView();
        // JJSGRuntime.event.remove("ISPAUSE", this.isPause, this);
        // GOW.GetTicker().showSpeedUpSignal.remove(this.DelayShowStepView, this);
        // GOW.GetTicker().hideSpeedUpSignal.remove(this.HideStepView, this);
        this.OnUnpause();
    }

    OnPause()
    {
        this.m_pauseView.visible = true;
    }

    OnUnpause()
    {
        this.m_pauseView.visible = false;
    }

    private _stepViewVisible: boolean = false;
    DelayShowStepView(tickcount)
    {
        if (tickcount > 30) 
        {
            this.ShowStepView();
        }
        else
        {
            this.HideStepView();
        }
    }
    
    ShowStepView()
    {
        if (this._stepViewVisible == false) 
        {
            this._stepViewVisible  = true;
            this.m_goStepView.visible = true;
        }
    }

    HideStepView()
    {
        if (this._stepViewVisible ) 
        {
            this.m_goStepView.visible = false;
            this._stepViewVisible  = false;
        }
    }

}