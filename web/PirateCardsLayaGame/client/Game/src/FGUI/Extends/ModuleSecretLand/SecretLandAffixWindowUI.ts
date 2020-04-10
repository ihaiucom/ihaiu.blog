/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandAffixWindowUIStruct from "../../Generates/ModuleSecretLand/SecretLandAffixWindowUIStruct";
import {MenuId} from "../../../GameModule/MenuId";
import SecretLandAffixListItem from './SecretLandAffixListItem';
import Game from '../../../Game';

export default class SecretLandAffixWindowUI extends SecretLandAffixWindowUIStruct
{
    private get datasource()
    {
        return  Game.config.affix.groupList;
    }
    
    onWindowShow(): void
    {
        this.m_head.SetWindow(MenuId.SecretLandAffix);
        this.m_list.setItemRenderer(this.renderListItem,this);
        let numItems = this.datasource.length;
        this.m_list.numItems = numItems;
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        if(this.m_list.itemRenderer)
            this.m_list.itemRenderer.recover();
    }

    private renderListItem(index: number, item: SecretLandAffixListItem)
    {
        let groupId = this.datasource[index];
        item.updateView(groupId);
    }
}