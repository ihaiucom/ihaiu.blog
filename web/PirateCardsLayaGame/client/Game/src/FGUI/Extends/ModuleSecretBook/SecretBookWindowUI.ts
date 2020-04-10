/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretBookWindowUIStruct from "../../Generates/ModuleSecretBook/SecretBookWindowUIStruct";
import SecretBookWindow from '../../../GameModule/ViewWindows/SecretBookWindow';
import {MenuId} from "../../../GameModule/MenuId";
import SecretBookHeroItem from './SecretBookHeroItem';
import Game from '../../../Game';

export default class SecretBookWindowUI extends SecretBookWindowUIStruct

{
    moduleWindow: SecretBookWindow;

    private get model()
    {
        return Game.moduleModel.section;
    }
    
    private get heroList()
    {
        return Game.moduleModel.hero.GotList;
    }
    // 窗口显示
    onWindowShow(): void
    {
        this.m_head.SetWindow(MenuId.SecretBook);
        this.m_list.on(fgui.Events.CLICK_ITEM,this, this.itemOnClick);
        this.m_secretBtn.onClick(this, this.secretBtnOnClick);
        this.m_list.setItemRenderer(this.renderListItem, this);
        this.m_list.setVirtual();
        this.updateView();
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.m_list.off(fgui.Events.CLICK_ITEM,this, this.itemOnClick);
        this.m_secretBtn.offClick(this, this.secretBtnOnClick);
        if(this.m_list.itemRenderer)
            this.m_list.itemRenderer.recover();
    }

    updateView()
    {
        this.model.resetGame();
        this.m_list.numItems = this.heroList.length;
        if(this.heroList.length > 0)
        {
            this.m_list.addSelection(0);
            let data = this.heroList[0];
            let drawingUrl = Game.config.avatar.getConfig(data.config.icon).drawingUrl;
            this.m_hero.url = drawingUrl;
        }
    }

    renderListItem(index: number, item: SecretBookHeroItem)
    {
        let heroData = this.heroList[index];
        item.renderItem(heroData);
    }

    itemOnClick(item: SecretBookHeroItem)
    {
        
        let data = item.heroData;
        let drawingUrl = Game.config.avatar.getConfig(data.config.icon).drawingUrl;
        this.m_hero.url = drawingUrl;
    }

    secretBtnOnClick()
    {
        let index = this.m_list.selectedIndex;
        if(index < 0)
            return;
        let heroData = this.heroList[index];
        Game.menu.open(MenuId.SecretBookListWindow,heroData.ID);
    }

}