/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuBottomButtonStruct from "../../Generates/SystemModuleHome/MenuBottomButtonStruct";
import MenuConfig from "../../../Config/ConfigExtends/MenuConfig";

export default class MenuBottomButton extends MenuBottomButtonStruct
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
        this.m_Menu.selectedIndex = datasource.barIndex - 1;

        this.DataSource = datasource;
    } 
}