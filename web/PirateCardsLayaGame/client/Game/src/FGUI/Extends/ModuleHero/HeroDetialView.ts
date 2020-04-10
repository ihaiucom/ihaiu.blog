/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroDetialViewStruct from "../../Generates/ModuleHero/HeroDetialViewStruct";
import { HeroDetailType } from "../../../GameModule/DataEnums/HeroType";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";
import { MenuId } from "../../../GameModule/MenuId";
import PlotData from "../../../GameModule/DataStructs/PlotData";
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import { MenuIndexId } from "../../../GameModule/MenuIndexId";

export default class HeroDetialView extends HeroDetialViewStruct
{
    heroID: number;

    //窗口初始化完毕
    onWindowInited(): void 
    {    
    }

    //主窗口显示时将被调
    onWindowShow(): void  
    {
        this.m_btnInfo.onClick(this, this.OnClickButton, [HeroDetailType.Base]);
        this.m_btnSkill.onClick(this, this.OnClickButton, [HeroDetailType.Skill]);
        this.m_btnEquip.onClick(this, this.OnClickButton, [HeroDetailType.Equip]);
        this.m_btnStar.onClick(this, this.OnClickButton, [HeroDetailType.Star]);
        Game.event.add(GameEventKey.GameFrame_HeroStarUp, this.onUpStar, this);

        // red
        Game.event.add(GameEventKey.GameFrame_HeroSelectEquip, this.RefreshRed, this);
        Game.event.add(GameEventKey.GameFrame_HeroLevelUp, this.RefreshRed, this);
        Game.event.add(GameEventKey.GameFrame_HeroSkillLevel, this.RefreshRed, this);
        Game.event.add(GameEventKey.GameFrame_HeroStarUp, this.RefreshRed, this);
    }

    //主窗口关闭时将被调
    onWindowHide(): void 
    {
        this.m_btnInfo.offClick(this, this.OnClickButton);
        this.m_btnSkill.offClick(this, this.OnClickButton);
        this.m_btnEquip.offClick(this, this.OnClickButton);
        this.m_btnStar.offClick(this, this.OnClickButton);
        Game.event.remove(GameEventKey.GameFrame_HeroStarUp, this.onUpStar, this);

        // red
        Game.event.remove(GameEventKey.GameFrame_HeroSelectEquip, this.RefreshRed, this);
        Game.event.remove(GameEventKey.GameFrame_HeroLevelUp, this.RefreshRed, this);
        Game.event.remove(GameEventKey.GameFrame_HeroSkillLevel, this.RefreshRed, this);
        Game.event.remove(GameEventKey.GameFrame_HeroStarUp, this.RefreshRed, this);
    }

    /** 刷新红点 */
    RefreshRed()
    {
        let herodata = Game.moduleModel.hero.GetData(this.heroID);

        // 基础
        MenuValidateRed.getInstance().openTab(MenuIndexId.HeroBase, herodata, this.m_btnInfo);

        // 技能
        MenuValidateRed.getInstance().openTab(MenuIndexId.HeroSkill, herodata, this.m_btnSkill);

        // 装备
        MenuValidateRed.getInstance().openTab(MenuIndexId.HeroEquip, herodata, this.m_btnEquip);

        // 升星
        MenuValidateRed.getInstance().openTab(MenuIndexId.HeroStar, herodata, this.m_btnStar);
    }

    onUpStar()
    {
        let type = this.m_funcIndex.selectedIndex
        // 检测是否满星
        if(type == HeroDetailType.Star)
        {
            if(Game.moduleModel.hero.IsMaxStar(this.heroID))
            {
                this.m_funcIndex.selectedIndex = HeroDetailType.MaxStar;
            }
        }
    }

    OnClickButton(type: HeroDetailType)
    {
        if(!this.heroID)
        {
            return
        }

        switch(type)
        {
            case HeroDetailType.Base:
                break;
            case HeroDetailType.Skill:
                if(!this.openSkill)
                {
                    let text = Game.config.menuIndex.getConfigByMenuIndexId(MenuIndexId.HeroSkill).lockText;
                    Game.system.toastText(text);
                    this.m_funcIndex.selectedIndex = this.lastIndex;
                    return false;
                }
                break;
            case HeroDetailType.Equip:
                if(!this.openEquip)
                {
                    let text = Game.config.menuIndex.getConfigByMenuIndexId(MenuIndexId.HeroEquip).lockText;
                    Game.system.toastText(text);
                    this.m_funcIndex.selectedIndex = this.lastIndex;
                    return false;
                }
                break;
            case HeroDetailType.Star:
                if(!this.openStar)
                {
                    let text = Game.config.menuIndex.getConfigByMenuIndexId(MenuIndexId.HeroStar).lockText;
                    Game.system.toastText(text);
                    this.m_funcIndex.selectedIndex = this.lastIndex;
                    return false;
                }
                break;
        }

        this.updateView(this.heroID, type)
    }

    initView(id: number)
    {
        this.heroID = id;

        this.OnClickButton(HeroDetailType.Base);
        this.updateButtonState();
    }

    updateView(id: number, type: HeroDetailType = HeroDetailType.Base)
    {
        this.heroID = id;
        this.m_funcIndex.selectedIndex = type;
        this.lastIndex = type;

        switch(type)
        {
            case HeroDetailType.Base:
                this.m_baseView.updateView(this.heroID)
                break;
            case HeroDetailType.Skill:
                this.m_skillView.updateView(this.heroID)
                break;
            case HeroDetailType.Equip:
                this.m_equipView.updateView(this.heroID)
                Game.event.dispatch(GameEventKey.GameFrame_HeroWindowEquipPanel);
                break;
            case HeroDetailType.Star:
                this.m_starView.updateView(this.heroID)
                break;
        }
        this.updateButtonState();
        
        this.RefreshRed();
    }

    lastIndex: number = HeroDetailType.Base;
    openSkill: boolean = false;
    openEquip: boolean = false;
    openStar: boolean = false; 
    updateButtonState()
    {
        let idBase = Game.config.menuIndex.getConfigByMenuIndexId(MenuIndexId.HeroBase).id;
        let idSkill = Game.config.menuIndex.getConfigByMenuIndexId(MenuIndexId.HeroSkill).id;
        let idEquip = Game.config.menuIndex.getConfigByMenuIndexId(MenuIndexId.HeroEquip).id;
        let idStar = Game.config.menuIndex.getConfigByMenuIndexId(MenuIndexId.HeroStar).id;

        let openBase = true;
        let openSkill = Game.moduleModel.home.IsOpen(idSkill);
        let openEquip = Game.moduleModel.home.IsOpen(idEquip);
        let openStar = Game.moduleModel.home.IsOpen(idStar);

        this.openSkill = openSkill;
        this.openEquip = openEquip;
        this.openStar = openStar;

        this.m_btnSkill.grayed = openSkill?false:true;
        this.m_btnEquip.grayed = openEquip?false:true;
        this.m_btnStar.grayed = openStar?false:true;


        // 未获得不显示升星、装备
        let isGot = Game.moduleModel.hero.IsGet(this.heroID)
        this.m_btnStar.touchable = isGot?true:false;
        this.m_btnStar.grayed = isGot?false:true;
        this.m_btnEquip.touchable = isGot?true:false;
        this.m_btnEquip.grayed = isGot?false:true;
    }
}