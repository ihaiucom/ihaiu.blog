/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AffixCommonStruct from "../../Generates/CommonGame/AffixCommonStruct";
import AffixConfig from "../../../Config/ConfigExtends/AffixConfig";
import Game from "../../../Game";
import {MenuId} from "../../../GameModule/MenuId";

export default class AffixCommon extends AffixCommonStruct
{

    config: AffixConfig;
    private showTips: boolean = true;
    updateView(affixId: number, showTips: boolean = true)
    {
        this.showTips = showTips;
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
        if(this.showTips)
            Game.menu.open(MenuId.AffixTips,this.config,this.displayObject);
    }
}