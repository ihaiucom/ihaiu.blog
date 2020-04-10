/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AffixCommonSmallStruct from "../../Generates/CommonGame/AffixCommonSmallStruct";
import AffixConfig from "../../../Config/ConfigExtends/AffixConfig";
import Game from "../../../Game";
import {MenuId} from "../../../GameModule/MenuId";

export default class AffixCommonSmall extends AffixCommonSmallStruct
{
    config: AffixConfig;

    updateView(affixId: number)
    {
        this.config = Game.config.affix.getConfig(affixId);
        if(this.config)
        {
            this.m_icon.icon = this.config.iconUrl;
        }
    }

    protected constructFromXML(xml: any): void 
    {
        super.constructFromXML(xml);
        this.onClick(this,this.ShowAffixTips);
    }

    dispose()
    {
        this.offClick(this,this.ShowAffixTips);
    }

    private ShowAffixTips()
    {
        Game.menu.open(MenuId.AffixTips,this.config,this.displayObject);
    }
}