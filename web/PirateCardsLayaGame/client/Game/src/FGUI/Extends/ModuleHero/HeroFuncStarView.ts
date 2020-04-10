/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroFuncStarViewStruct from "../../Generates/ModuleHero/HeroFuncStarViewStruct";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";
import HeroStarProButton from "./HeroStarProButton";
import { HeroData } from "../../../GameModule/DataStructs/HeroData";
import IntMath from "../../../GameWar/CoreLib/IntMath/IntMath";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import TEXT from "../../../Config/Keys/TEXT";
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import { MenuId } from "../../../GameModule/MenuId";
import { MenuIndexId } from "../../../GameModule/MenuIndexId";

export default class HeroFuncStarView extends HeroFuncStarViewStruct
{
    heroID: number;
    data: HeroData;

    //窗口初始化完毕
    onWindowInited(): void {
    }

    //主窗口显示时将被调
    onWindowShow(): void  {
        this.m_btnIcon.onClick(this, this.onClickIcon);
        this.m_btnStar.onClick(this, this.onClickButton)
        this.m_proList.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        Game.event.add(GameEventKey.GameFrame_HeroStarUp, this.onUpStar, this);
    }

    //主窗口关闭时将被调
    onWindowHide(): void  {
        this.m_proList.numItems = 0;
        this.m_btnIcon.offClick(this, this.onClickIcon);
        this.m_btnStar.offClick(this, this.onClickButton)
        Game.event.remove(GameEventKey.GameFrame_HeroStarUp, this.onUpStar, this);
    }

    onUpStar()
    {
        this.updateView(this.heroID)
    }

    onClickButton()
    {
        Game.sender.hero.HeroStarUp(this.heroID);
    }

    onClickIcon()
    {
        if(VersionConfig.IsReviewVersion)
        {
            // TODO提审版本
            return
        }
        let data = ItemData.Create(this.heroID,1);
        Game.system.SystemObtainShow(data.id);
    }

    renderListItem(index: number, item: HeroStarProButton): void  {
        let data = this.data;
        let curBaseProp = data.config.starId[data.Star];
        let newBaseProp = data.config.starId[data.Star+1];
        let propID = data.config.propId[index];
        let propData = Game.config.propValue.getConfig(propID);
        let curProp = curBaseProp / IntMath.BaseCalFactor * propData.Upgrade[0].Step;
        let newProp = newBaseProp / IntMath.BaseCalFactor * propData.Upgrade[0].Step;
        item.m_labelCurNum.text = curProp.toFixed(1); // Math.floor(curProp).toString();
        item.m_labelNewNum.text = newProp.toFixed(1); // Math.floor(newProp).toString();
        item.m_title.text = propData.DisplayAss + TEXT.HeroStarProStr;
    }

    updateView(id: number)
    {
        if(Game.moduleModel.hero.IsMaxStar(id))
        {
            this.m_state.selectedIndex = 1;
            return
        }
        this.m_state.selectedIndex = 0;
        
        this.heroID = id;
        let data = Game.moduleModel.hero.GetData(id);
        this.data = data;
        this.m_star0.visible = data.star > 0?false:true
        
        this.m_starCur.m_starNum.selectedIndex = data.star;
        this.m_starCur.m_starPos.selectedIndex = data.star;

        this.m_starNew.m_starNum.selectedIndex = data.star + 1;
        this.m_starNew.m_starPos.selectedIndex = data.star + 1;

        // TODO 天赋技能
        this.m_skillDesc.text = this.m_skillDesc.text.format();

        let itemID = data.config.heroItem;
        let itemNum = Game.moduleModel.bag.getItemNum(itemID);
        let starData = Game.config.heroStar.getConfig(data.Quality);
        let needNum = starData.needStar[data.star]

        this.m_labelNeed.text = itemNum.toString();
        this.m_labelHave.text = "/" + needNum.toString();

        this.m_color.selectedIndex = itemNum < needNum? 1: 0;
        this.m_btnStar.grayed = itemNum < needNum? true: false;
        this.m_btnStar.touchable = itemNum < needNum? false: true;

        let itemData = ItemData.Create(itemID,1);
        this.m_btnIcon.m_icon.url = itemData.iconUrl;

        this.m_proList.numItems = 3;

        // red
        MenuValidateRed.getInstance().openTab(MenuIndexId.HeroStar, data, this.m_btnStar);
    }
}