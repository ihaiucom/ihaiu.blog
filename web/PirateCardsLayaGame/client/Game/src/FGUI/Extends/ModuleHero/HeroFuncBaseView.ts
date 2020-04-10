/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroFuncBaseViewStruct from "../../Generates/ModuleHero/HeroFuncBaseViewStruct";
import Game from "../../../Game";
import HeroTag from "./HeroTag";
import { HeroData } from "../../../GameModule/DataStructs/HeroData";
import GameEventKey from "../../../GameEventKey";
import HeroProButton from "./HeroProButton";
import { PropId } from "../../../GameFrame/Props/PropId";
import TEXT from "../../../Config/Keys/TEXT";
import { HeroAttackType } from "../../../GameModule/DataEnums/HeroType";
import { ConfigValueType } from "../../../Config/ConfigValueType";
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import { MenuId } from "../../../GameModule/MenuId";
import { MenuIndexId } from "../../../GameModule/MenuIndexId";

export default class HeroFuncBaseView extends HeroFuncBaseViewStruct
{
    heroID: number;
    heroData: HeroData;
    propList: int[] = [];
    highPropList: int[] = [];

    tempLevel : number ; 
    tempEXP :number ;
    onWindowInited(): void 
    {
    }
    
    onWindowShow(): void  
    {
        this.m_btnAdd.onClick(this, this.onClickButton)
        this.m_list.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_propList.itemRenderer = Laya.Handler.create(this, this.renderPropListItem, null, false);
        this.m_highPropList.itemRenderer = Laya.Handler.create(this, this.renderHighPropListItem, null, false);
        Game.event.add(GameEventKey.GameFrame_HeroLevelUp, this.onLevelUp, this);
        Game.event.add(GameEventKey.GameFrame_UpdateEXP, this.updateTempData, this);
        Game.event.add(GameEventKey.GameFrame_UpdateProp, this.updatePropList, this);

        this.m_levelUpView.m_frame.onClick(this, this.onCloseLevelBg);
        Game.event.add(GameEventKey.GameFrame_HeroLevelGuideUpClose, this.GuideCloseLevelUpPanel, this);

        this.ShowLevelBg(false);
    }

    onWindowHide(): void  {
        this.heroID = null;
        this.m_list.numItems = 0;
        this.m_propList.numItems = 0;
        this.m_highPropList.numItems = 0;
        this.m_btnAdd.offClick(this, this.onClickButton)
        Game.event.remove(GameEventKey.GameFrame_HeroLevelUp, this.onLevelUp, this);
        Game.event.remove(GameEventKey.GameFrame_UpdateEXP, this.updateTempData, this);
        Game.event.remove(GameEventKey.GameFrame_UpdateProp, this.updatePropList, this);
        Game.event.remove(GameEventKey.GameFrame_HeroLevelGuideUpClose, this.GuideCloseLevelUpPanel, this);

        this.ShowLevelBg(false);
    }

    // TODO 胡昊
    updateTempData(heroID :number , itemID :number )
    {
        //GameFrame_LevelExceedBound
        // if (Game.moduleModel.hero.MaxCanLevel < this.tempLevel)
        let canLevel = Game.moduleModel.hero.CheckCanLevelByLevel(this.tempLevel, this.m_progress.value, this.m_progress.max)
        // console.log("信息", canLevel, this.tempLevel, Game.user.level, this.m_progress.value, this.m_progress.max)
        if(!canLevel)
        {
            Game.event.dispatch(GameEventKey.GameFrame_LevelExceedBound);
            return;
        }

        let itemData =Game.moduleModel.bag.getItemsById(itemID);
        let itemEXP = 0 ;
        if (itemData.length > 0)
        {
            itemEXP = itemData[0].itemConfig.value;
        }
        
        if(this.tempLevel == Game.moduleModel.hero.maxLevel)
        {
            this.m_labelExp.text = TEXT.HeroMaxLevel;
            this.m_progress.max = 100;
            this.m_progress.value = 100;
            this.m_labelLv.text = Game.moduleModel.hero.maxLevel.toString();
            Game.event.dispatch(GameEventKey.GameFrame_LevelExceedMaxLevelInLoop);
            return
        }

        let needEXP = Game.config.heroExp.getConfig( this.tempLevel + 1).exp;
        let totalEXP = this.tempEXP + itemEXP ;
        if (totalEXP < needEXP)
        {
            this.m_labelExp.text = totalEXP + "/" + needEXP;
            this.m_progress.value = totalEXP;
            this.tempEXP += itemEXP;
        }
        else
        {
            while (totalEXP >= needEXP)
            {
                this.tempLevel++;

                if(this.tempLevel == Game.moduleModel.hero.maxLevel)
                {
                    this.m_labelExp.text = TEXT.HeroMaxLevel;
                    this.m_progress.max = 100;
                    this.m_progress.value = 100;
                    this.m_labelLv.text = Game.moduleModel.hero.maxLevel.toString();
                    Game.event.dispatch(GameEventKey.GameFrame_LevelExceedMaxLevelInLoop);
                    return
                }

                let canLevel = Game.moduleModel.hero.CheckCanLevelByLevel(this.tempLevel)
                // console.log("数据===========", canLevel, this.tempLevel, Game.user.level)
                if (Game.moduleModel.hero.MaxCanLevel == this.tempLevel)
                {
                    this.m_labelLv.text =  this.tempLevel.toString();
                    let maxEXP = Game.config.heroExp.getConfig(this.tempLevel + 1).exp;
                    this.m_labelExp.text = 0 + "/" + maxEXP;
                    this.m_progress.max =  maxEXP;
                    this.m_progress.value = 0 ; 
                }
                else 
                {
                    // if (Game.moduleModel.hero.MaxCanLevel < this.tempLevel)
                    let canLevel = Game.moduleModel.hero.CheckCanLevelByLevel(this.tempLevel)
                    if(!canLevel)
                    {
                        // this.m_labelLv.text =  this.tempLevel.toString();
                        // let maxEXP = Game.config.heroExp.getConfig(this.tempLevel + 1).exp;
                        // this.m_labelExp.text = 0 + "/" + maxEXP;
                        // this.m_progress.max =  maxEXP;
                        // this.m_progress.value = 0 ; 

                        this.m_labelLv.text =  (this.tempLevel - 1).toString();
                        let maxEXP = Game.config.heroExp.getConfig(this.tempLevel).exp;
                        this.m_labelExp.text = (maxEXP - 1) + "/" + maxEXP;
                        this.m_progress.max =  maxEXP;
                        this.m_progress.value = maxEXP - 1 ; 

                        Game.event.dispatch(GameEventKey.GameFrame_LevelExceedMaxLevelInLoop);
                        return;
                    }
                }
                totalEXP -= needEXP; 
                needEXP = Game.config.heroExp.getConfig(this.tempLevel + 1).exp;
            }
            this.tempEXP= totalEXP;
            this.m_labelLv.text =  this.tempLevel.toString();
            this.m_labelExp.text = totalEXP + "/" + needEXP;
            this.m_progress.max = needEXP;
            this.m_progress.value = totalEXP;
        }
        // console.log("m_labelLv", this.m_labelLv.text) ;
        // console.log("m_labelExp", this.m_labelExp.text) ;
        // console.log("m_progress.value", this.m_progress.value) ;
        // console.log("this.m_progress.max", this.m_progress.max) ;
    }

    renderListItem(index: number, item: HeroTag): void  {        
        let data = Game.moduleModel.hero.GetData(this.heroID);
        let tag = data.config.tag[index]
        let str = Game.config.heroTag.getConfig(tag).name;
        item.m_label.text = str;
    }

    renderPropListItem(index: number, item: HeroProButton)
    {
        let data: HeroData = this.heroData;
        let propID = this.propList[index]
        let propConfig = Game.config.property.getConfig(propID)
        item.m_title.text = propConfig.name + "：";
        let icon = Game.config.avatar.getConfig(propConfig.icon).iconUrl;
        item.m_icon.url = icon;
        
        if(!Game.moduleModel.hero.IsGet(this.heroID))
        {
            item.m_labelNum.text = "0";
            return
        }
        
        let value = data.propDict.getValue(propID) || 0;
        let valueType = propConfig.ValueType;
        if(value == 0)
        {
            if(valueType == ConfigValueType.Normal)
            {
                item.m_labelNum.text = "0";
            }
            else
            {
                item.m_labelNum.text = "0.00%";
            }
        }
        else
        {
            let valueStr = "0";
            if(valueType == ConfigValueType.Normal)
            {
                valueStr = value.toFixed(2);
                valueStr = "" + parseFloat(valueStr);
                item.m_labelNum.text = valueStr;
            }
            else
            {
                valueStr = (value/100).toFixed(2);
                item.m_labelNum.text = valueStr + "%";
            }
        }
    }

    renderHighPropListItem(index: number, item: HeroProButton)
    {
        let data: HeroData = this.heroData;
        let propID = this.highPropList[index]
        let propConfig = Game.config.property.getConfig(propID)
        item.m_title.text = propConfig.name + "：";
        let icon = Game.config.avatar.getConfig(propConfig.icon).iconUrl;
        item.m_icon.url = icon;
        
        if(!Game.moduleModel.hero.IsGet(this.heroID))
        {
            item.m_labelNum.text = "0";
            return
        }
        
        let value = data.propDict.getValue(propID) || 0;
        let valueType = propConfig.ValueType;
        if(value == 0)
        {
            if(valueType == ConfigValueType.Normal)
            {
                item.m_labelNum.text = "0";
            }
            else
            {
                item.m_labelNum.text = "0.00%";
            }
        }
        else
        {
            let valueStr = "0";
            if(valueType == ConfigValueType.Normal)
            {
                valueStr = value.toFixed(2);
                valueStr = "" + parseFloat(valueStr);
                item.m_labelNum.text = valueStr;
            }
            else
            {
                valueStr = (value/100).toFixed(2);
                item.m_labelNum.text = valueStr + "%";
            }
        }
    }

    onClickButton()
    {
        if(!Game.moduleModel.hero.IsGet(this.heroID))
        {
            return
        }
        this.ShowLevelBg(true);
        // Game.system.heroLevelUpShow(this.heroID);

        this.m_levelUpView.open(this.heroID)
        Game.event.dispatch(GameEventKey.GameFrame_HeroInfoShowAddExpPanel);
    }

    updatePropList( heroID: int )
    {
        if(this.heroID && heroID == this.heroID)
        {
            this.m_propList.numItems = 5;
            this.m_highPropList.numItems = 5;
        }
    }

    updateView(id: number)
    {
        let data = Game.moduleModel.hero.GetData(id);
        this.heroData = data;
        if(!this.heroID || this.heroID != id)
        {
            this.initView(data, id)
        }
        
        let isMaxLevel = Game.moduleModel.hero.IsMaxLevel(id);
        if(isMaxLevel)
        {
            this.m_labelExp.text = TEXT.HeroMaxLevel;
            this.m_labelLv.text =  data.level.toString();
            this.m_progress.max = 100;
            this.m_progress.value = 100;
        }
        else
        {
            let needExp = Game.config.heroExp.getConfig( data.level + 1).exp;
            this.m_labelExp.text = data.exp + "/" + needExp;
            this.m_labelLv.text =  data.level.toString();
            this.m_progress.max = needExp;
            this.m_progress.value = 0;
            this.m_progress.value = data.exp;
        }

        let isGet = Game.moduleModel.hero.IsGet(this.heroID)
        this.m_btnAdd.grayed = !isGet;

        // 本地暂存level 和 exp 信息 用于升级同步更新

        this.tempEXP = data.exp;
        this.tempLevel = data.level;

        this.m_propList.numItems = 5;
        this.m_highPropList.numItems = 5;

        // 升级
        MenuValidateRed.getInstance().openTab(MenuIndexId.HeroBase, data, this.m_btnAdd);
    }

    initView(data: HeroData, id: number)
    {
        this.heroID = id;
        let tags = data.config.tag
        this.m_list.numItems = tags.length;

        this.propList = [PropId.PAtt, PropId.HPMax, PropId.Def, PropId.Hit, PropId.Dodge]
        if(data.config.atkType == HeroAttackType.MAtt)
        {
            this.propList = [PropId.MAtt, PropId.HPMax, PropId.Def, PropId.Hit, PropId.Dodge]
        }
        this.highPropList = [PropId.Crit, PropId.Violence, PropId.HPAddHit, PropId.CD, PropId.MPCost]
    }

    onLevelUp()
    {
        this.updateView(this.heroID)
    }

    onCloseLevelBg()
    {
        this.m_levelUpView.close();
        this.ShowLevelBg(false);
    }

    ShowLevelBg(isShow: boolean = false)
    {
        if(isShow)
        {
            this.m_levelBgState.selectedIndex = 1;
        }
        else
        {
            this.m_levelBgState.selectedIndex = 0;
        }
    }

    private GuideCloseLevelUpPanel()
    {
        this.onCloseLevelBg();
    }
}