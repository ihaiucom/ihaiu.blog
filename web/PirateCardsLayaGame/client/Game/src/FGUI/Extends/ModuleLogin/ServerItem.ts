/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ServerItemStruct from "../../Generates/ModuleLogin/ServerItemStruct";

export default class ServerItem extends ServerItemStruct
{
    DataSource:any;

    RenderItem(data:any)
    {
        this.DataSource = data;

        this.m_labServer.text = data.name;

        this.m_labLevel.text  = "";
    }
}