/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DraugProbabilityItemStruct from "../../Generates/ModuleDraug/DraugProbabilityItemStruct";
import DraugAwakenConfig from "../../../Config/ConfigExtends/DraugAwakenConfig";

export default class DraugProbabilityItem extends DraugProbabilityItemStruct
{
    RenderItem(config:DraugAwakenConfig)
    {
        this.m_labWhiteProbability.text  = `（${config.rate1 / 100}%）`;
        this.m_labGreenProbability.text  = `（${config.rate2 / 100}%）`;
        this.m_labBlueProbability.text   = `（${config.rate3 / 100}%）`;
        this.m_labPurPleProbability.text = `（${config.rate4 / 100}%）`;
        this.m_labOrangeProbability.text = `（${config.rate5 / 100}%）`;
    }
}