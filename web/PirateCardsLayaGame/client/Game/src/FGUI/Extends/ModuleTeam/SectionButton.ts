/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SectionButtonStruct from "../../Generates/ModuleTeam/SectionButtonStruct";
import MissionData from "../../../GameModule/DataStructs/MissionData";

export default class SectionButton extends SectionButtonStruct
{
    public DataSource:MissionData;

    public RenderItem(data:MissionData, selected:boolean)
    {
        this.DataSource = data;

        this.title    = data.name;
        this.selected = selected
    }
}