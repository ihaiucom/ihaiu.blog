// ihaiu.ExportFairyGUICode生成
/////////////////////////////////////
// http://blog.ihaiu.com
/////////////////////////////////////

import Game from '../../../Game';
import SectionWindow from "../../../GameModule/ViewWindows/SectionWindow";
import SectionWindowUIStruct from "../../Generates/GameSectionsUI/SectionWindowUIStruct";
import { MenuId } from '../../../GameModule/MenuId';
import TEXT from '../../../Config/Keys/TEXT';
import SectionType = proto.CheckPointType;
import MenuLayer from '../../../GameFrame/Menu/MenuLayer';
import { GuideGroup } from '../../../GameModule/DataModels/GuideModel';
import { GuideHelper } from '../../../GameModule/GuideModule/GuideHelper';
import GameEventKey from '../../../GameEventKey';
import GameLog, { EnumLogLevel } from '../../../GameLog';
import GuideData from '../../../GameModule/DataStructs/GuideData';
import { EnumTextPosType } from '../../../GameModule/GuideModule/GuideEnum';
import MenuValidateRed from '../../../GameModule/MenuValidateRed';
import { MenuIndexId } from '../../../GameModule/MenuIndexId';


export default class SectionWindowUI extends SectionWindowUIStruct
{
      // 窗口
      moduleWindow: SectionWindow;
      
      // private _listParent : any = null;

      // private _backBtnParent : any = null;

      // 窗口初始化完毕
      onWindowInited(): void
      {
        this.m_monsterView.onInit();
        this.m_normalView.onInit();
        this.m_SpecialView.onInit();
      }

      // 窗口显示
      onWindowShow(): void
      {
        let params = this.moduleWindow.menuParameter.args;
        this.m_head.SetWindow(MenuId.Sections);
        this.addEventListener();
        this.m_normalView.onShow(true);
        this.m_SpecialView.onShow(false);
        this.m_monsterView.onShow();
        
        Laya.timer.once(50, this, this.CheckGuide);

        this.RefreshRed();
      }

      /** 刷新红点 */
      RefreshRed()
      {
          // 剧情
          MenuValidateRed.getInstance().openTab(MenuIndexId.SectionStory, null, this.m_btnNormal);

          // 精英
          MenuValidateRed.getInstance().openTab(MenuIndexId.SectionElite, null, this.m_btnSpecial);
      }

      // 窗口隐藏
      onWindowHide(): void
      {
         this.removeEventListener();
         this.clear();
      }

      addEventListener()
      {
          this.m_sectionType.on(fgui.Events.STATE_CHANGED,this,this.onClickSectionTab);
      }
  
      removeEventListener()
      {
          this.m_sectionType.off(fgui.Events.STATE_CHANGED,this,this.onClickSectionTab);
      }

      onClickSectionTab()
      {
          switch (this.m_sectionType.selectedIndex) {
            case 0:
              this.showNormalView();
              break;
            case 1:
              this.showSpecialView();
              break;
            case 2:
              this.showMonsterView();
              break;
            default:
              this.showNormalView();
              break;
          }
      }

      /** 显示剧情关卡 */
      showNormalView()
      {
        Game.menu.openTab(MenuId.Sections,0);
        // this.m_sectionType.setSelectedIndex(0);
        Game.event.dispatch(GameEventKey.GameFrame_BattleNormalBtn);
      }

      /** 显示精英关卡 */
      showSpecialView()
      {
        Game.menu.openTab(MenuId.Sections,1);
        // this.m_sectionType.setSelectedIndex(1);
        // this.m_SpecialView.updateView();

        Game.event.dispatch(GameEventKey.GameFrame_BattleSpecialBtn);
      }

      /** 显示魔王关卡 */
      showMonsterView()
      {
          Game.menu.openTab(MenuId.Sections,2);
        // this.m_sectionType.setSelectedIndex(2);
        this.m_monsterView.updateView();
      }
    
    showStarTip(chapterId: int, level: number)
    {
      this.m_starTipView.show(chapterId, level);
      
    }

    showBuyTimesView(type: SectionType)
    {
        this.m_buyTimesView.onShow(type);
    }

    clear()
    {
      this.m_sectionType.setSelectedIndex(0);
      this.m_normalView.clear();
      this.m_SpecialView.clear();
      this.m_monsterView.clear();
    }

    public CheckGuide()
    {
      let model = Game.moduleModel.guide;
      if(!model)
      {
          return;
      }
      
      let data = model.GetData(GuideGroup.PVE_BATTLE);
      if(data && !data.isOver) //&& data.progress == 1 
      {
        data.SetGuideProgress(2);
        this.GuideBattle(data, 0);
        return;
      }
      data = model.GetData(GuideGroup.HERO_LEVELUP);
      if(data && !data.isOver)
      {
        this.GuideBack(data);
        return;
      }
      data = model.GetData(GuideGroup.EQUIP_LEVELUP);
      if(data && !data.isOver)
      {
        this.GuideBack(data);
        return;
      }
      data = model.GetData(GuideGroup.HERO_EQUIP);
      if(data && !data.isOver)
      {
        this.GuideBack(data);
        return;
      }

      data = model.GetData(GuideGroup.BATTLE_PLAN_SECOND);
      if(data && !data.isOver)
      {
        data.SetGuideProgress(1);
          this.GuideBattle(data, 4);
          return;
      }

      data = model.GetData(GuideGroup.BATTLE_ENTER_1_2);
      if(data && !data.isOver)
      {
        
          data.SetGuideProgress(2);
          this.GuideBattle(data, 1);
          return;
      }
      data = model.GetData(GuideGroup.BATTLE_ENTER_1_3);
      if(data && !data.isOver)
      {
          data.SetGuideProgress(2);
          this.GuideBattle(data, 2);
          return;
      }
      
      data = model.GetData(GuideGroup.BATTLE_ENTER_1_4);
      if(data && !data.isOver)
      {
        
          data.SetGuideProgress(1);
          this.GuideBattle(data, 3);
          return;
      }

      data = model.GetData(GuideGroup.BATTLE_ENTER_1_6);
      if(data && !data.isOver)
      {
          data.SetGuideProgress(1);
          this.GuideBattle(data, 5);
          return;
      }
      
      data = model.GetData(GuideGroup.BATTLE_ENTER_2_1);
      if(data && !data.isOver)
      {
        data.SetGuideProgress(1);
        this.GuideBattle(data, 0);
        return;
      }
      data = model.GetData(GuideGroup.BATTLE_ENTER_SPECIAL_1);
      if(data && !data.isOver)
      {
        if(this.m_sectionType.selectedIndex == 0)
        {
          data.SetGuideProgress(1);
          this.GuideSpecialBtn(data);
        }
        else if(this.m_sectionType.selectedIndex == 1)
        {
          
          data.SetGuideProgress(2);
          this.GuideSpecialList(data, 2);
        }
        return
      }
      data = model.GetData(GuideGroup.Guide_Finish);
      if(data && !data.isOver)
      {
        if(this.m_sectionType.selectedIndex == 0)
        {
          data.SetGuideProgress(2);
          this.GuideBattle(data, 1);
        }
        else if(this.m_sectionType.selectedIndex == 1)
        {
          data.SetGuideProgress(1);
          this.GuideNormalBtn(data, 1);
        }
        // Game.system.toastText(TEXT.GuideFinish);
        // let model = Game.moduleModel.guide;
        // if(!model)
        // {
        //     GameLog.Log(EnumLogLevel.Error, "SectionWindowUI, FinishGuide error");
        //     return;
        // }
        // model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
      }
    }

    private _helperBeforeParent : any = null;

    /**
     * 引导返回
     */
    private GuideBack(data : GuideData)
    {
      if(data) // && data.CheckProgress(1)
      {
        let obj = this.m_head.m_btnReturn;
        this._helperBeforeParent = obj.parent;
        let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(obj);
        let text = Game.config.msg.getConfig(TEXT.GuideBackHome) ? Game.config.msg.getConfig(TEXT.GuideBackHome).zhCnNotice : "";
        Game.system.guideMgr.BackGuideShow(pos.x, pos.y, 0, 0, 0, 0, 
          EnumTextPosType.RIGHT_BOTTOM, text);
        GuideHelper.ChangeObjParent(obj, Game.system.guideMgr.otherNode);

        Game.event.add(GameEventKey.GameFrame_SectionBackBtnOnClick, this.GuideBackFinish, this);
      }
    }

    private GuideBackFinish()
    {
      let model = Game.moduleModel.guide;
      if(!model || !this._helperBeforeParent)
      {
          GameLog.Log(EnumLogLevel.Error, "SectionWindowUI, GuideBackFinish error");
          return;
      }
      GuideHelper.ChangeObjParent(this.m_head.m_btnReturn, this._helperBeforeParent);
      // model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
      Game.event.remove(GameEventKey.GameFrame_SectionBackBtnOnClick, this.GuideBackFinish, this);
      this._helperBeforeParent = null;
    }

    /**
     * 
     * @param data 引导数据
     * @param sectionIndex list对应下表
     */
    private GuideBattle(data : GuideData, sectionIndex : number = 0)
    {
      if(data)
      {
        // this._listParent = this.m_normalView.m_list.parent;
        let list = this.m_normalView.m_list;
        let item = list.getChildAt(sectionIndex);
        list.scrollPane.touchEffect = false;
        let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(item)//list.parent.localToGlobal(list.x, list.y);
        Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, item.width, item.height);
        GuideHelper.FguiListChangeByIndex(sectionIndex, list, this.m_normalView.itemOnClick, this.m_normalView);
        // GuideHelper.ChangeObjParent(list, Game.system.guide`Mgr.otherNode);

        // list.on(fgui.Events.CLICK_ITEM, this, this.FinishGuide, [list, beforeParent]);

        Game.event.add(GameEventKey.GameFrame_SectionEnterOnClick, this.FinishBattleGuide, this);
      }
    }

    private FinishBattleGuide()
    {
      let model = Game.moduleModel.guide;
      if(!model)
      {
          GameLog.Log(EnumLogLevel.Error, "SectionWindowUI, FinishGuide error");
          return;
      }
      // GuideHelper.ChangeObjParent(this.m_normalView.m_list, this._listParent);
      this.m_normalView.m_list.scrollPane.touchEffect = true;
      model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
      Game.event.remove(GameEventKey.GameFrame_SectionEnterOnClick, this.FinishBattleGuide, this);
    }

     /**
     * 引导精英副本战斗
     */
    private _battleEnterParent;
    private GuideSpecialBtn(data : GuideData, sectionIndex : number = 0)
    {
      if(data)
      {
        let obj = this.m_btnSpecial;
        let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(obj);
        Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, obj.width, obj.height);
        this._battleEnterParent = obj.parent;
        GuideHelper.ChangeObjParent(obj, Game.system.guideMgr.otherNode);
        Game.event.add(GameEventKey.GameFrame_BattleSpecialBtn, this.FinishSpecialBtn, this);
      }
    }

    private FinishSpecialBtn()
    {
      let model = Game.moduleModel.guide;
      if(!model)
      {
          GameLog.Log(EnumLogLevel.Error, "SectionWindowUI, FinishGuide error");
          return;
      }
      GuideHelper.ChangeObjParent(this.m_btnSpecial, this._battleEnterParent);
      Game.system.guideMgr.HideGuideDialog();
      model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
      Game.event.remove(GameEventKey.GameFrame_BattleSpecialBtn, this.FinishSpecialBtn, this);

      Laya.timer.once(50, this, this.CheckGuide);
    }

     /**
     * 引导精英副本战斗
     */
    private _NormalBtnParent;
    private GuideNormalBtn(data : GuideData, sectionIndex : number = 0)
    {
      if(data)
      {
        let obj = this.m_btnNormal;
        let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(obj);
        Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, obj.width, obj.height);
        this._battleEnterParent = obj.parent;
        GuideHelper.ChangeObjParent(obj, Game.system.guideMgr.otherNode);
        Game.event.add(GameEventKey.GameFrame_BattleNormalBtn, this.FinishNormalBtn, this);
      }
    }

    private FinishNormalBtn()
    {
      let model = Game.moduleModel.guide;
      if(!model)
      {
          GameLog.Log(EnumLogLevel.Error, "SectionWindowUI, FinishGuide error");
          return;
      }
      GuideHelper.ChangeObjParent(this.m_btnNormal, this._battleEnterParent);
      Game.system.guideMgr.HideGuideDialog();
      model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
      Game.event.remove(GameEventKey.GameFrame_BattleNormalBtn, this.FinishNormalBtn, this);

      Laya.timer.once(50, this, this.CheckGuide);
    }

     /**
     * 引导精英副本关卡选择
     */
    private GuideSpecialList(data : GuideData, sectionIndex : number = 0)
    {
      // if(data)
      // {
      //   let list = this.m_SpecialView.m_list;
      //   let item = list.getChildAt(sectionIndex);
      //   list.scrollPane.touchEffect = false;
      //   let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(item)//list.parent.localToGlobal(list.x, list.y);
      //   Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, item.width, item.height);
      //   GuideHelper.FguiListChangeByIndex(sectionIndex, list, this.m_SpecialView.onClickListItem, this.m_SpecialView);
      //   Game.event.add(GameEventKey.GameFrame_BattleSpecialList, this.FinishSpecialList, this);
      // }

        if(data)
        {
          // this._listParent = this.m_normalView.m_list.parent;
          let list = this.m_SpecialView.m_list;
          let item = list.getChildAt(sectionIndex);
          list.scrollPane.touchEffect = false;
          let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(item)//list.parent.localToGlobal(list.x, list.y);
          Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, item.width, item.height);
          GuideHelper.FguiListChangeByIndex(sectionIndex, list, this.m_SpecialView.itemOnClick, this.m_SpecialView);
          // GuideHelper.ChangeObjParent(list, Game.system.guide`Mgr.otherNode);

          // list.on(fgui.Events.CLICK_ITEM, this, this.FinishGuide, [list, beforeParent]);

          Game.event.add(GameEventKey.GameFrame_SectionEnterOnClick, this.FinishBattleGuide, this);
        }
    }

    private FinishSpecialList()
    {
      let model = Game.moduleModel.guide;
      if(!model)
      {
          GameLog.Log(EnumLogLevel.Error, "SectionWindowUI, FinishGuide error");
          return;
      }
      this.m_SpecialView.m_list.scrollPane.touchEffect = true;
      model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
      Game.event.remove(GameEventKey.GameFrame_BattleSpecialList, this.FinishSpecialList, this);
    }

}