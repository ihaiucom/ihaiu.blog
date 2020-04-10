/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipBaseViewStruct from "../../Generates/ModuleEquip/EquipBaseViewStruct";
import Game from "../../../Game";
import EquipProButton from "./EquipProButton";
import { PropId } from "../../../GameFrame/Props/PropId";
import TEXT from "../../../Config/Keys/TEXT";
import { EquipType } from "../../../GameModule/DataEnums/EquipType";
import EquipHeroTypeIcon from "./EquipHeroTypeIcon";

export default class EquipBaseView extends EquipBaseViewStruct
{
    uid: number;

    //主窗口显示时将被调
    onWindowShow(): void  
    {
        this.m_proplist.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_heroType.m_list.itemRenderer = Laya.Handler.create(this, this.renderHeroTypeListItem, null, false);
        
        // this.m_proplist.numItems = 2;
    }

    //主窗口关闭时将被调
    onWindowHide(): void  {
        this.m_proplist.numItems = 0;
    }

    renderListItem(index: number, target: EquipProButton)
    {
        target.m_state.selectedIndex = 0;
        let data = Game.moduleModel.equip.GetDataByUID(this.uid);

        // TODO提审版本
        if(VersionConfig.IsReviewVersion)
        {
            let config = Game.config.property.getConfig(data.levelProp.id);
            target.m_icon.url = Game.config.avatar.getConfig(config.icon).iconUrl;
            target.m_labelNum.text = data.TotalProp;
            target.m_title.text = config.name;
        }
        else
        {
            if(index == 0 && data.config.equipPos == EquipType.Weapon) // 第一个为装备的系数，第二个为属性
            {
                let config = Game.config.property.getConfig( PropId.AtkRange);
                target.m_icon.url = Game.config.avatar.getConfig(config.icon).iconUrl;
                let atkRange = data.config.atkRange;
                target.m_labelNum.text = (atkRange.Num1/10000).toFixed(2) + "-" + (atkRange.Num2/10000).toFixed(2);;
                target.m_title.text = TEXT.EquipAtkRange;
            }
            else
            {
                let config = Game.config.property.getConfig(data.levelProp.id);
                target.m_icon.url = Game.config.avatar.getConfig(config.icon).iconUrl;
                target.m_labelNum.text = data.TotalProp;
                target.m_title.text = config.name;
            }
        }
        

        let heros = data.ownerHeroIDs;
        this.m_isOnly.selectedIndex = heros.length > 0?1:0;
    }

    renderHeroTypeListItem(index: number, target: EquipHeroTypeIcon)
    {
        let data = Game.moduleModel.equip.GetDataByUID(this.uid)
        let armorTypes = data.config.armorType
        let len = armorTypes.length;
        if(len == 0)
        {
            armorTypes = [1,2,3,4,5]
        }

        let type = armorTypes[index]
        let config = Game.config.heroType.getConfig(type)
        let url = Game.config.avatar.getConfig(config.icon).iconUrl;
        target.m_typeIcon.url = url;
    }

    updateView(uid: number)
    {
        this.uid = uid;
        let data = Game.moduleModel.equip.GetDataByUID(uid);
        this.m_name.text = data.name;
        this.m_labelDesc.text = data.desc;
        this.m_isOnly.selectedIndex = data.IsExclusive?1:0;
        this.m_labelOnly.text = data.exclusiveSimpleTxt;

        // TODO提审版本
        if(VersionConfig.IsReviewVersion)
        {
            this.m_proplist.numItems = 1;
        }
        else
        {
            if(data.config.equipPos == EquipType.Weapon)
            {
                this.m_proplist.numItems = 2;
            }
            else
            {
                this.m_proplist.numItems = 1;
            }
        }
        

        // TODO 特性暂无
        this.m_buffDescState.selectedIndex = 1;

        // 装备实用英雄类型
        let len = data.config.armorType.length;
        if(len == 0)
        {
            len = 5;
        }
        this.m_heroType.m_list.numItems = len;
    }
}