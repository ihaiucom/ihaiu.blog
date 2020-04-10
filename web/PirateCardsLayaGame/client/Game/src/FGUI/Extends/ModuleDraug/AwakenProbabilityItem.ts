/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AwakenProbabilityItemStruct from "../../Generates/ModuleDraug/AwakenProbabilityItemStruct";
import DraugAwakenConfig from "../../../Config/ConfigExtends/DraugAwakenConfig";

export default class AwakenProbabilityItem extends AwakenProbabilityItemStruct
{
    RenderItem(config:DraugAwakenConfig, isend:boolean)
    {
        this.m_labName.text = config.name;
        this.m_labProbability.text = `（${config.showRate / 100}%）` + (isend ? "" : "、");
    }
}