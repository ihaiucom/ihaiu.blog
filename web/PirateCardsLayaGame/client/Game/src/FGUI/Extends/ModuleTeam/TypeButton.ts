/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TypeButtonStruct from "../../Generates/ModuleTeam/TypeButtonStruct";

export default class TypeButton extends TypeButtonStruct
{
    public DataSource:any;

    public RenderItem(data:any)
    {
        this.DataSource = data;

        this.title = data;
    }
}