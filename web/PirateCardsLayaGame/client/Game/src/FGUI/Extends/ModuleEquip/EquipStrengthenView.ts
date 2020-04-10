/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipStrengthenViewStruct from "../../Generates/ModuleEquip/EquipStrengthenViewStruct";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";
import EquipProButton from "./EquipProButton";
import TEXT from "../../../Config/Keys/TEXT";
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import { MenuId } from "../../../GameModule/MenuId";
import EquipDetialView from "./EquipDetialView";
import { MenuIndexId } from "../../../GameModule/MenuIndexId";

export default class EquipStrengthenView extends EquipStrengthenViewStruct
{
    uid: int;

    // 预计达到的等级；
    newLevel: int = 0;
    // 预计达到的经验
    newExp: int = 0; 

    //主窗口显示时将被调
    onWindowShow(): void  
    {
        this.m_propList.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        Game.event.add(GameEventKey.GameFrame_EquipLevelUp, this.OnEquipLevelUp, this)
    }

    //主窗口关闭时将被调
    onWindowHide(): void  
    {
        this.m_propList.numItems = 0;
        Game.event.remove(GameEventKey.GameFrame_EquipLevelUp, this.OnEquipLevelUp, this)
    }

    RefreshRed()
    {
        let data = Game.moduleModel.equip.GetDataByUID(this.uid);
        // 强化
        MenuValidateRed.getInstance().openTab(MenuIndexId.EquipStrenghen, data, this.m_btnStrengthen);
    }

    renderListItem(index: number, target: EquipProButton)
    {
        let prop = Game.moduleModel.equip.GetDataByUID(this.uid).levelProp;
        let data = Game.moduleModel.equip.GetDataByUID(this.uid);
        // let isMax = Game.moduleModel.equip.IsMaxLevel(this.uid);

        target.m_labelAdd.text = "";
        let selectedIndex = this.m_state.selectedIndex
        if(selectedIndex == 0)
        {
            target.m_state.selectedIndex = 1;
            let num = Game.moduleModel.equip.GetUpgradePropValue(data.uid, prop.propTableId, data.level + 1)
            target.m_labelAdd.text = "+" + num;

            this.m_labelPropStr.text = TEXT.EquipLevelUpStr1;
        }
        else
        {
            if(selectedIndex == 1)
            {
                let addLevel = this.newLevel - data.level
                target.m_state.selectedIndex = 1;
                if(addLevel > 0)
                {
                    let num = 0;
                    for(let i = 1; i <= addLevel; ++i)
                    {
                        num = num + Game.moduleModel.equip.GetUpgradePropValue(data.uid, prop.propTableId, data.level + 1)
                    }
                    target.m_labelAdd.text = "+" + num;

                    this.m_labelPropStr.text = TEXT.EquipLevelUpStr2.format(this.newLevel);
                }
                else
                {
                    let num = Game.moduleModel.equip.GetUpgradePropValue(data.uid, prop.propTableId, data.level + 1)
                    target.m_labelAdd.text = "+" + num;

                    this.m_labelPropStr.text = TEXT.EquipLevelUpStr1;
                }
            }
            else
            {
                target.m_state.selectedIndex = 0;
            }
        }

        let config = Game.config.property.getConfig(prop.id);
        target.m_icon.url = Game.config.avatar.getConfig(config.icon).iconUrl;
        target.m_labelNum.text = data.TotalProp;
        target.m_title.text = config.name;
    }
    
    OnStrengthen()
    {
        let str = GameEventKey.GameFrame_EquipStrengthenBtn2
        Game.event.dispatch(str, [str]);
        
        this.m_state.selectedIndex = 1;
    }

    OnStrengthenCancel()
    {
        this.m_state.selectedIndex = 0;
        this.updateView(this.uid)
    }

    OnEquipLevelUp()
    {
        this.updateView(this.uid);
        (<EquipDetialView>this.parent).RefreshRed();
    }

    updateView(uid: number)
    {
        this.uid = uid;
        let data = Game.moduleModel.equip.GetDataByUID(uid);

        this.m_name.text = data.name;
        this.m_labelLevel.text = data.level.toString();
        if(data.level == Game.moduleModel.equip.MaxLevel)
        {
            this.m_progress.max = 0;
            this.m_progress.value = 0;
            this.m_labelExp.text = "";
        }
        else
        {
            let maxExp = Game.moduleModel.equip.GetMaxExp(uid);
            this.m_progress.max = maxExp;
            this.m_progress.value = data.exp;
            this.m_labelExp.text = data.exp + "/" + maxExp;   
        }

        this.m_icon.RenderItem(data);
        this.m_labelAddExp.text = "";
        this.ResetAddProgress();

        this.RefreshRed();
    }

    /**
     * 
     * @param addExp 被吞噬装备能提供的总经验
     */
    UpdateAddProgress(addExp: number)
    {
        let testExp = 0;

        this.m_labelAddExp.text = "+" + addExp;

        let data = Game.moduleModel.equip.GetDataByUID(this.uid);
        let curLevel = data.level;

        let curTotalExp = Game.moduleModel.equip.GetTotalExp(this.uid) // 当前装备的总经验
        let newExp = curTotalExp + addExp; // 当前可以达到的总经验
        let newLevel = Game.moduleModel.equip.GetMaxLevelByExp(newExp, this.uid); // 根据经验获取可以达到的等级
        // console.log('测试数据====', addExp, curTotalExp, newExp, newLevel, curLevel)
        if(newLevel > curLevel)
        {
            this.m_addSpr.visible = true;
            this.m_labelAddLevel.visible = true;
            this.m_labelAddLevel.text = newLevel.toString();

            let maxExp = Game.moduleModel.equip.GetMaxExpByLevel(newLevel, this.uid); // 可以达到的等级下一级最大经验，用于进度条最大值
            let totalExp = Game.moduleModel.equip.GetTotalExpByLevel(newLevel, this.uid); // 可以达到的等级的总经验值，用于计算差值
            let exp = newExp - totalExp;
            // console.log('测试数据11111====', maxExp, totalExp, exp)
            this.m_progressAdd.max = maxExp;
            this.m_progressAdd.value = 0;
            // this.m_progressAdd.value = exp;
            this.m_progressAdd.value = maxExp; // 超过一级显示满

            this.newLevel = newLevel;
            this.newExp = exp;

            testExp = exp;
        }
        else
        {
            this.m_addSpr.visible = false;
            this.m_labelAddLevel.visible = false;
            let maxExp = Game.moduleModel.equip.GetMaxExp(this.uid);
            let exp = addExp + data.exp;
            this.m_progressAdd.max = maxExp;
            this.m_progressAdd.value = 0;
            this.m_progressAdd.value = exp;
            // console.log('测试数据11111====', maxExp, exp)
            this.newLevel = curLevel;
            this.newExp = exp;

            testExp = exp;
        }

        if(newLevel > curLevel)
        {
            this.m_costIcon.visible = true;
            let cost = 0;
            let costID;
            for(let i = curLevel + 1; i <= newLevel; i++)
            {
                let config = Game.config.equipExp.getConfig(i);
                cost += config.coin.ItemNum;

                costID = config.coin.ItemId;
            }
            this.m_labelCost.text = cost.toString();

            if(costID)
            {
                let num = Game.moduleModel.bag.getItemNum(costID)
                this.m_color.selectedIndex = num>=cost?0:1;
            }
        }
        else
        {
            this.m_costIcon.visible = false;
            this.m_labelCost.text = "";
        }

        this.m_propList.numItems = 1;
        
        // console.log("预计到达的等级、经验", newLevel, testExp)
    }

    ResetAddProgress()
    {
        this.newLevel = 0;
        this.newExp = 0;
        this.m_progressAdd.max = 0;
        this.m_progressAdd.value = 0;
        this.m_addSpr.visible = false;
        this.m_labelAddLevel.text = "";
        this.m_labelAddExp.text = "";
        this.m_labelCost.text = "";
        this.m_costIcon.visible = false;
        this.m_propList.numItems = 1;
    }
}