/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuLeftTopButtonStruct from "../../Generates/SystemModuleHome/MenuLeftTopButtonStruct";
import MenuConfig from "../../../Config/ConfigExtends/MenuConfig";
import Res from "../../../Config/Keys/Res";

export default class MenuLeftTopButton extends MenuLeftTopButtonStruct
{
    DataSource:MenuConfig;

    OpenMenu()
    {
        let config = this.DataSource
        if (!config) {
            return ;
        }
        return config.openMenu();
    }

    UpdateIcon(datasource:MenuConfig)
    {
        this.m_icon.url = Res.getMenuIcon(datasource.menuId);

        this.DataSource = datasource;
    }  
}