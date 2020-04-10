/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroFuncEquipViewStruct from "../../Generates/ModuleHero/HeroFuncEquipViewStruct";
import HeroEquipItem from "./HeroEquipItem";
import Game from "../../../Game";
import { EquipData } from "../../../GameModule/DataStructs/EquipData";
import GameEventKey from "../../../GameEventKey";
import { GuideHelper } from "../../../GameModule/GuideModule/GuideHelper";
import GuideData from "../../../GameModule/DataStructs/GuideData";
import { GuideGroup } from "../../../GameModule/DataModels/GuideModel";
import GameLog, { EnumLogLevel } from "../../../GameLog";
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import { MenuId } from "../../../GameModule/MenuId";

export default class HeroFuncEquipView extends HeroFuncEquipViewStruct
{
    heroID: number;

    //主窗口显示时将被调
    onWindowShow(): void  
    {
        this.m_list.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_list.on(fgui.Events.CLICK_ITEM, this, this.clickListItem);
        Game.event.add(GameEventKey.GameFrame_EquipStarUp, this.OnUpdate, this);
        Game.event.add(GameEventKey.GameFrame_EquipLevelUp, this.OnUpdate, this);
        Game.event.add(GameEventKey.GameFrame_HeroSelectEquip, this.OnUpdate, this);

        Game.event.add(GameEventKey.GameFrame_FinishGuideOpenHeroEquip, this.CheckGuide, this);
    }

    //主窗口关闭时将被调
    onWindowHide(): void  {
        Game.event.remove(GameEventKey.GameFrame_EquipStarUp, this.OnUpdate, this);
        Game.event.remove(GameEventKey.GameFrame_EquipLevelUp, this.OnUpdate, this);
        Game.event.remove(GameEventKey.GameFrame_HeroSelectEquip, this.OnUpdate, this);
        this.m_list.off(fgui.Events.CLICK_ITEM, this, this.clickListItem);
        this.m_list.itemRenderer.clear();
        this.m_list.numItems = 0;
        this.m_list.itemPool.clear();
    }

    //List刷新回调
    renderListItem(index: number, item: HeroEquipItem): void  {
        let pos = index + 1
        let data: EquipData = Game.moduleModel.hero.GetPosEquip(this.heroID, pos);
        item.RenderItem(pos, this.heroID, data);

        
        if(!data)
        {   
            // red 申请一个临时数据
            let temp = EquipData.CreateByID(0);
            temp.onWho = this.heroID;
            temp.pos   = pos;
            MenuValidateRed.getInstance().openItem(MenuId.Hero, temp, item.m_btnItem);
        }
        else
        {
            MenuValidateRed.getInstance().openItem(MenuId.Hero, data, item.m_btnItem);
        }
    }

    //List点击回调
    clickListItem(target: HeroEquipItem, event: Event): void  {
    }

    OnUpdate()
    {
        this.updateView(this.heroID);
    }

    updateView(id: number)
    {
        this.heroID = id;
        this.m_list.numItems = 6
    }

    /**
     * 新手引导检测
     */
    private CheckGuide()
    {
        let model = Game.moduleModel.guide;
        if(!model)
        {
            return;
        }

        let data : GuideData = null;
        data = model.GetData(GuideGroup.HERO_EQUIP);
        if(data && !data.isOver) // && data.CheckProgress(3)
        {
            this.GuideEquip(data);
        }
    }
    /** guide使用 */
    private _btnAddParent : any = null;

    private GuideEquip(data : GuideData)
    {
        if(data)
        {
            let btn = (this.m_list.getChildAt(0) as HeroEquipItem).m_btnAdd;
            let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(btn);// btn.parent.localToGlobal(btn.x, btn.y);
            Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, btn.width, btn.height);
            this._btnAddParent = btn.parent;
            // GuideHelper.FguiListChangeByIndex(1, this.m_list, btn.OnClickAdd, this);
            GuideHelper.ChangeObjParent(btn, Game.system.guideMgr.otherNode);
            Game.event.add(GameEventKey.gameFrame_GuideEquipList, this.FinishGuideEquip, this);
            Game.event.remove(GameEventKey.GameFrame_FinishGuideOpenHeroEquip, this.CheckGuide, this);
        }
    }

    private FinishGuideEquip()
    {
        let model = Game.moduleModel.guide;
        if(!model || !this._btnAddParent)
        {
          GameLog.Log(EnumLogLevel.Error, "HeroFuncEquipView, FinishGuideEquip error");
          return;
        }
        let btn = this.m_list.getChildAt(0) as HeroEquipItem;
        model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
        GuideHelper.ChangeObjParent(btn.m_btnAdd, this._btnAddParent);
        Game.event.remove(GameEventKey.gameFrame_GuideEquipList, this.FinishGuideEquip, this);
        Game.event.dispatch(GameEventKey.GameFrame_OpenHeroEquipList);
    }
}