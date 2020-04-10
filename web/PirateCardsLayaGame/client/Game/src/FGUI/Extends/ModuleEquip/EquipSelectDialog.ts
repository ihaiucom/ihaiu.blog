/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipSelectDialogStruct from "../../Generates/ModuleEquip/EquipSelectDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import { EquipType } from "../../../GameModule/DataEnums/EquipType";
import Game from "../../../Game";
import MsgKey from "../../../Config/Keys/MsgKey";
import EquipIconButtonSmall from "./EquipIconButtonSmall";
import EquipPageButton from "./EquipPageButton";
import { EquipData } from "../../../GameModule/DataStructs/EquipData";
import { HeroData } from "../../../GameModule/DataStructs/HeroData";
import EquipProButton from "./EquipProButton";
import { PropId } from "../../../GameFrame/Props/PropId";
import TEXT from "../../../Config/Keys/TEXT";
import EquipHeroTypeIcon from "./EquipHeroTypeIcon";
import GuideData from "../../../GameModule/DataStructs/GuideData";
import { GuideGroup } from "../../../GameModule/DataModels/GuideModel";
import GameEventKey from "../../../GameEventKey";
import { GuideHelper } from "../../../GameModule/GuideModule/GuideHelper";
import GameLog, { EnumLogLevel } from "../../../GameLog";
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import { MenuId } from "../../../GameModule/MenuId";

export enum EquipSelectBtnState
{
    On, // 穿戴
    Down, // 卸下
    Change, // 替换
}

export default class EquipSelectDialog extends EquipSelectDialogStruct
{
    // 所属英雄
    heroID: int;

    // 穿着位置
    pos: int;

    // 选中装备的唯一UID
    selectEquipUID: number;

    // 当前类型卡牌数据
    list: Array<int> = []; 

    private MaxNum = 30;

    private dialogCtrl: DialogCtrl;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);
        this.dialogCtrl.setCloseBtnEvent();

        this.m_head.m_closeBtn.onClick(this, this.close)

        this.m_listView.m_list.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_listView.m_list.on(fgui.Events.CLICK_ITEM, this, this.clickListItem);
        this.m_listView.m_list.setVirtual();
        
        this.m_btnSelect.onClick(this, this.OnClickSelect);

        this.m_btnList.m_list.itemRenderer = Laya.Handler.create(this, this.renderBtnListItem, null, false);
        this.m_btnList.m_list.on(fgui.Events.CLICK_ITEM, this, this.clickBtnListItem);

        this.m_proplist.itemRenderer = Laya.Handler.create(this, this.renderPropListItem, null, false);
        this.m_heroType.m_list.itemRenderer = Laya.Handler.create(this, this.renderHeroTypeListItem, null, false);
    }

    open(id: int, pos: int): void {
        this.heroID = id;
        this.pos = pos;

        this.m_btnList.m_list.numItems = 6;
        let index = pos - 1
        this.m_btnList.m_list.selectedIndex = index;
        this.UpdateList(index);

        this.dialogCtrl.open();

        // this.CheckGuide();
        Game.event.add(GameEventKey.GameFrame_OpenHeroEquipList, this.CheckGuide, this);
    }

    //弹窗关闭
    close(): void  {
        this.heroID = null;
        this.selectEquipUID = null;
        this.pos = null;
        this.list = [];
        this.m_proplist.numItems = 0;
        this.dialogCtrl.close();     

        Game.event.dispatch(GameEventKey.Gameframe_HeroEquipClose);
    }

    OnClickSelect()
    {
        let uid = this.selectEquipUID;
        let heroID = this.heroID;
        let heroIdOff = heroID ;
        let data = Game.moduleModel.equip.GetDataByUID(uid);
        if (data.onWho != heroID )
            heroIdOff = data.onWho ;

        switch(this.m_equipState.selectedIndex)
        {
            case EquipSelectBtnState.On: // 穿
                if(!this.CheckPosIsEnough())
                {
                    return;
                }
                Game.sender.hero.ChangeEquip(heroID,heroIdOff, uid);
                Game.event.dispatch(GameEventKey.gameFrame_HeroEquip);
                break;
            case EquipSelectBtnState.Down: // 脱
                Game.sender.hero.UnEquip(heroID, uid);
                break;
            case EquipSelectBtnState.Change: // 换
                if(!this.CheckPosIsEnough())
                {
                    return
                }
                Game.sender.hero.ChangeEquip(heroID,heroIdOff, uid);
                break;
        }
        this.close();
    }

    CheckPosIsEnough()
    {
        let uid = this.selectEquipUID;
        let data = Game.moduleModel.equip.GetDataByUID(uid);
        // let pos = this.pos;
        // let equipPos = data.config.equipPos;
        // if(pos != equipPos)
        // {
        //     // 位置不对
        //     Game.system.toastMsg(MsgKey.hero_changeEquip_notPos);
        //     return false
        // }

        let canUse = false;
        if(data.ownerHeroIDs && data.ownerHeroIDs.length > 0)
        {
            for(let heroID of data.ownerHeroIDs)
            {
                if(heroID == this.heroID)
                {
                    canUse = true;
                    break;
                }            
            }
        }
        else
        {
            canUse = true;
        }

        if(!canUse)
        {
            // 专属于其他英雄
            Game.system.toastMsg(MsgKey.hero_changeEquip_notHero);
            return false
        }

        return true;
    }

    renderBtnListItem(index: number, target: EquipPageButton)
    {
        target.index = index;

        let pos  = index + 1; 
        let data = Game.moduleModel.hero.GetPosEquip(this.heroID, pos);
        if(!data)
        {   
            // red 申请一个临时数据
            let temp = EquipData.CreateByID(0);
            temp.onWho = this.heroID;
            temp.pos   = pos;
            MenuValidateRed.getInstance().openItem(MenuId.Hero, temp, target);
        }
        else
        {
            MenuValidateRed.getInstance().openItem(MenuId.Hero, data, target);
        }
    }

    clickBtnListItem(target: EquipPageButton, event: Event)
    {
        this.UpdateList(target.index);
    }

    renderListItem(index: number, item: EquipIconButtonSmall): void  
    {
        let uid = this.list[index];
        let data = Game.moduleModel.equip.GetDataByUID(uid);
        item.RenderItem(data);
        item.SetOnWho();

        if (data && !data.onWho) 
        {
            let temp = new EquipData();
            data.Copy(temp);
            temp.onWho = -this.heroID;

            MenuValidateRed.getInstance().openItem(MenuId.Hero, temp, item);
        }
        else
        {
            MenuValidateRed.getInstance().closeRed(item);
        }
        
    }

    clickListItem(target: EquipIconButtonSmall, event: Event): void 
    {
        let uid = target.itemData.uid;
        this.UpdateView(uid);
    }

    ChackType(equipData: EquipData, heroData: HeroData)
    {
        let armorTypes = equipData.config.armorType;
        let heroType = heroData.Type;

        // 未配置适用所有的
        if(armorTypes.length == 0)
        {
            return true
        }

        for(let type of armorTypes)
        {
            if(type == heroType)
            {
                return true;
            }
        }

        return false;
    }

    UpdateList(type: EquipType)
    {
        let pos = type + 1
        let heroData = Game.moduleModel.hero.GetData(this.heroID)
        let equip = Game.moduleModel.equip
        let list = equip.List;
        let typeList = [];
        for(let i = 0; i < list.length; ++i)
        {
            let uid = list[i];
            let data = equip.GetDataByUID(uid)
            if(pos == data.config.equipPos && this.ChackType(data, heroData))
            {
                typeList.push(uid);
            }
        }

        this.list = typeList;

        let num = typeList.length >= this.MaxNum? typeList.length: this.MaxNum;
        this.m_listView.m_list.numItems = num;

        this.SelectDefaultItem();
    }

    // 切换标签时默认选中第一个
    SelectDefaultItem()
    {
        if(this.list.length > 0)
        {
            this.m_listView.m_list.selectedIndex = 0;
        }
        else
        {
            this.m_listView.m_list.selectedIndex = -1;
        }

        let uid = this.list[0];
        this.UpdateView(uid);
    }

    UpdateView(uid: int)
    {
        this.selectEquipUID = uid;
        let data = Game.moduleModel.equip.GetDataByUID(uid);        
        this.m_have.selectedIndex = data?0:1;
        if(!data)
        {
            this.m_have.selectedIndex = 1;
            this.m_isOnly.selectedIndex = 0;
            this.m_buffDescState.selectedIndex = 0;
            // 装备实用英雄类型
            this.m_heroType.m_list.numItems = 0;
            return
        }
        else
        {
            this.m_name.text = data.name;
            this.m_have.selectedIndex = 0;
            this.m_isOnly.selectedIndex = data.IsExclusive?1:0;
            this.m_labelOnly.text = data.exclusiveSimpleTxt;
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
       
        
        // 按钮状态
        if(data.onWho == this.heroID)
        {
            this.m_equipState.selectedIndex = EquipSelectBtnState.Down;
        }
        else if(data.onWho > 0)
        {
            this.m_equipState.selectedIndex = EquipSelectBtnState.Change;
        }
        else
        {
            this.m_equipState.selectedIndex = EquipSelectBtnState.On;
        }
    }

    renderPropListItem(index: number, target: EquipProButton)
    {
        target.m_state.selectedIndex = 0;
        let data = Game.moduleModel.equip.GetDataByUID(this.selectEquipUID);

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
        let data = Game.moduleModel.equip.GetDataByUID(this.selectEquipUID)
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
        if(data && !data.isOver) //&& data.CheckProgress(4)
        {
            this.GuideEquip(data);
        }
    }

    /** guide btnSelect原来的父亲节点 */
    private _btnSelectParent : any = null;

    private GuideEquip(data : GuideData)
    {
        if(data)
        {
            let btn = this.m_btnSelect;
            this._btnSelectParent = btn.parent;
            let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(btn);// btn.parent.localToGlobal(btn.x, btn.y);
            Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, btn.width, btn.height);
            GuideHelper.ChangeObjParent(btn, Game.system.guideMgr.otherNode);
            Game.event.add(GameEventKey.gameFrame_HeroEquip, this.FinishGuideEquip, this);
            Game.event.remove(GameEventKey.GameFrame_OpenHeroEquipList, this.CheckGuide, this);
        }
    }

    private FinishGuideEquip()
    {
        let model = Game.moduleModel.guide;
        if(!model || !this._btnSelectParent)
        {
            GameLog.Log(EnumLogLevel.Error, "EuipSelectDialog, FinishGuideEquip error");
            return;
        }
        model.DataGotoNextStep(Game.system.guideMgr.nowGuideGroup);
        GuideHelper.ChangeObjParent(this.m_btnSelect, this._btnSelectParent);
        Game.event.remove(GameEventKey.gameFrame_HeroEquip, this.FinishGuideEquip, this);
    }
}