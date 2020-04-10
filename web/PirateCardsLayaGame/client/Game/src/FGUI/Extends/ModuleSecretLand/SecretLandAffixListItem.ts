/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandAffixListItemStruct from "../../Generates/ModuleSecretLand/SecretLandAffixListItemStruct";
import Game from '../../../Game';
import AffixConfig from '../../../Config/ConfigExtends/AffixConfig';
import SecretLandAffixSubListItem from './SecretLandAffixSubListItem';

export default class SecretLandAffixListItem extends SecretLandAffixListItemStruct
{

    dataList: AffixConfig[] = [];
    
    updateView(groupId: number)
    {
        this.dataList = Game.config.affix.GetAffixListByGroup(groupId);
        let numItems = this.dataList.length;
        this.m_list.numItems = numItems;
        this.m_list.resizeToFit(numItems,2);
        if(numItems > 0)
            this.m_icon.icon = this.dataList[0].titleIconUrl;
    }

    private renderListItem(index: number,item: SecretLandAffixSubListItem)
    {
        let config = this.dataList[index];
        item.updateView(config);
    }
    
    protected handleSizeChanged()
    {
        super.handleSizeChanged();
        console.log(`handleSizeChanged: ${this.height}`);
    }

    protected constructFromXML(xml: any): void 
    {
        super.constructFromXML(xml);
        this.m_list.setItemRenderer(this.renderListItem,this);
    }
    dispose()
    {
        if(this.m_list.itemRenderer)
            this.m_list.itemRenderer.recover();
        super.dispose();
    }
}