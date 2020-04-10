/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroSkillLevelUpDialogStruct from "../../Generates/ModuleHero/HeroSkillLevelUpDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import Game from "../../../Game";
import TEXT from "../../../Config/Keys/TEXT";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import HeroUseItemButton from "./HeroUseItemButton";
import GameEventKey from "../../../GameEventKey";

export default class HeroSkillLevelUpDialog extends HeroSkillLevelUpDialogStruct
{
    heroID: int; // 英雄ID
    skillID: int; // 技能ID
    costItems: any[]; // 消耗的物品
    costMoney: any; // 消耗的银两

    private dialogCtrl: DialogCtrl;
    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);
        this.dialogCtrl.setCloseBtnEvent();
        
        this.m_list.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_btnLevel.onClick(this, this.onClickLevelUp)
        this.m_btnClose.onClick(this,this.close)

        Game.event.add(GameEventKey.GameFrame_HeroSkillLevel, this.onLevelUp, this);
    }

    dispose()
    {
        this.m_list.numItems = 0;
        this.m_btnLevel.offClick(this, this.onClickLevelUp);
        this.m_btnClose.offClick(this,this.close);
        Game.event.remove(GameEventKey.GameFrame_HeroSkillLevel, this.onLevelUp, this);
        super.dispose();
    }

    open(heroID: int, skillID: int): void {
        this.heroID = heroID;
        this.skillID = skillID;
        this.updateView();

        this.dialogCtrl.open();
    }

    close(): void  {
        this.heroID = null;
        this.skillID = null;
        this.dialogCtrl.close();
    }

    onClickLevelUp()
    {
        let costMoneyID = this.costMoney[0];
        let costMoneyNum = this.costMoney[1];
        let isEnough = Game.moduleModel.bag.hasItemNum(costMoneyID, costMoneyNum);
        if(!isEnough)
        {
            Game.system.toastText(TEXT.HeroLevelUpItemNotEnough);
            return
        }

        let list = this.costItems
        for(let arr of list)
        {
            let itemID = arr[0];
            let itemNum = arr[1];
            let isEnough = Game.moduleModel.bag.hasItemNum(itemID, itemNum);
            if(!isEnough)
            {
                Game.system.toastText(TEXT.HeroLevelUpItemNotEnough);
                return
            }
        }

        Game.sender.hero.SkillLevelUp(this.heroID, this.skillID);
    }

    renderListItem(index: number, item: HeroUseItemButton)
    {
        let itemID = this.costItems[index][0];
        let needNum = this.costItems[index][1];
        item.RenderItem(itemID, needNum);
    }

    onLevelUp()
    {
        let data = Game.moduleModel.hero.GetSkillData(this.heroID, this.skillID);
        if(data.IsMax)
        {
            this.close()
            return;
        }
        this.updateView();
    }

    updateView()
    {
        let data = Game.moduleModel.hero.GetSkillData(this.heroID, this.skillID);
        this.m_icon.m_icon.url = data.icon;
        this.m_labelLv.text = data.lv.toString();
        this.m_labelNextLv.text = (data.lv + 1).toString();
        this.m_labelNextDesc.text = data.nextDesc;
        
        this.costMoney = data.costMoney;
        this.costItems = data.costList;
        this.m_list.numItems = this.costItems.length;
        
        if(this.costMoney.length > 0)
        {
            let costMoneyID = this.costMoney[0];
            let costMoneyNum = this.costMoney[1];
            this.m_labelCost.text = costMoneyNum;
            let itemData = ItemData.Create(costMoneyID, 1)
            this.m_moneyIcon.url = itemData.iconUrl;
            let isEnough = Game.moduleModel.bag.hasItemNum(costMoneyID, costMoneyNum);
            this.m_color.selectedIndex = isEnough?0:1;
        }
    }
}