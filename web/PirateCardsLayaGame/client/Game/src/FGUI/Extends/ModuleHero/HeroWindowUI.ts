/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroWindowUIStruct from "../../Generates/ModuleHero/HeroWindowUIStruct";
import { HeroViewType } from "../../../GameModule/DataEnums/HeroType";
import HeroWindow from "../../../GameModule/ViewWindows/HeroWindow";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import GuideData from "../../../GameModule/DataStructs/GuideData";
import GameLog, { EnumLogLevel } from "../../../GameLog";
import GameEventKey from "../../../GameEventKey";
import { GuideHelper } from "../../../GameModule/GuideModule/GuideHelper";
import { GuideGroup } from "../../../GameModule/DataModels/GuideModel";
import { EnumGuideTriggerType, EnumTextPosType } from "../../../GameModule/GuideModule/GuideEnum";
import TEXT from "../../../Config/Keys/TEXT";

export default class HeroWindowUI extends HeroWindowUIStruct
{
    //窗口
    moduleWindow: HeroWindow;
    selectHeroID: number;

    //窗口初始化完毕
    onWindowInited(): void 
    {
    }

    onBack()
    {
        this.onClose();
    }

    onClose()
    {
        
        Game.event.dispatch(GameEventKey.GameFrame_HeroPanelBack);
        if(this.m_ViewState.selectedIndex == 1)
        {
            this.m_ViewState.selectedIndex = 0;
            return
        }

        this.moduleWindow.battleParam = null;
        Game.menu.back(MenuId.Hero)
    }

    showView( index: HeroViewType, id: number = 1, param?: any[] )
    {
        this.m_ViewState.selectedIndex = index;
        
        switch(index)
        {
            case HeroViewType.List:
                this.m_listView.initView(param)
                break;
            case HeroViewType.Info:
                this.m_infoView.initView(id)
                break;
        }
    }
 
    Open()
    {
        
        let heroID = 1001;
        let index = HeroViewType.List;
        let param = null;
        let params = this.moduleWindow.battleParam
        if(params)
        {
            param = params[0];
        }

        this.showView(index, heroID, param);
    }

    //主窗口显示时将被调
    onWindowShow(): void  
    {
        // Game.event.add(GameEventKey.GameFrame_HeroLevelCloseBg, this.CheckGuide, this);
        Game.event.add(GameEventKey.Gameframe_HeroEquipClose, this.CheckGuide, this);
        Game.event.add(GameEventKey.GameFrame_HeroLevelGuideUpClose, this.CheckGuide, this);
        this.m_head.m_btnReturn.onClick(this, this.onClose)
        this.m_head.SetWindow(MenuId.Hero);
        // this.CheckGuide();
    }

    //主窗口关闭时将被调
    onWindowHide(): void  
    {
        // Game.event.remove(GameEventKey.GameFrame_HeroLevelCloseBg, this.CheckGuide, this);
        Game.event.remove(GameEventKey.Gameframe_HeroEquipClose, this.CheckGuide, this);
        this.m_head.m_btnReturn.offClick(this, this.onClose)
    }

    /**
     * 检测新手引导
     */
    private CheckGuide()
    {
        let model = Game.moduleModel.guide;
        if(!model)
        {
            return;
        }
        let data = model.GetData(GuideGroup.BATTLE_ENTER_1_2);
        if(data && !data.isOver)
        {
            this.GuideBack(data)
            return;
        }
        data = model.GetData(GuideGroup.BATTLE_ENTER_1_3);
        if(data && !data.isOver)
        {
            this.GuideBack(data)
            return;
        }
    }

    private _parentHelper : any = null;

    /**
     * 引导返回
     * @param data 数据 
     */
    private GuideBack(data : GuideData)
    {
        if(data) // && data.CheckProgress(0)
        {
            let obj = this.m_head.m_btnReturn;
            this._parentHelper = obj.parent;
            let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(obj);
            let text = Game.config.msg.getConfig(TEXT.GuideBackHome) ? Game.config.msg.getConfig(TEXT.GuideBackHome).zhCnNotice : "";
            // TODO 临时这样写死，之后再改的时候重构
            Game.system.guideMgr.BackGuideShow(pos.x, pos.y, 0, 0, 0, 0, 
                EnumTextPosType.RIGHT_BOTTOM, text);
            GuideHelper.ChangeObjParent(obj, Game.system.guideMgr.otherNode);

            Game.event.add(GameEventKey.GameFrame_HeroPanelBack, this.GuideBackFinish, this);
        }
    }

    /**
     * 结束引导返回
     */
    private GuideBackFinish()
    {
        let model = Game.moduleModel.guide;
        if(!model || !this._parentHelper)
        {
            GameLog.Log(EnumLogLevel.Error, "HeroWindowUI, GuideBackFinish error");
            return;
        }
        Game.event.remove(GameEventKey.GameFrame_HeroPanelBack, this.GuideBackFinish, this);
        GuideHelper.ChangeObjParent(this.m_head.m_btnReturn, this._parentHelper);
        this._parentHelper = null;
        
    }

}