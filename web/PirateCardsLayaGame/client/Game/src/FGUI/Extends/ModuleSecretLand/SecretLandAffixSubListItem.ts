/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandAffixSubListItemStruct from "../../Generates/ModuleSecretLand/SecretLandAffixSubListItemStruct";
import AffixConfig from '../../../Config/ConfigExtends/AffixConfig';

export default class SecretLandAffixSubListItem extends SecretLandAffixSubListItemStruct
{
    config: AffixConfig;
    updateView(config: AffixConfig)
    {
        this.m_title.text = config.AffixName + "："+ config.AffixExplain;
        this.m_item.updateView(config.id, false);
    }

    protected handleSizeChanged()
    {
        super.handleSizeChanged();
        // if(this.parent)
            // (<fgui.GList> this.parent).resizeToFit();
    }
}