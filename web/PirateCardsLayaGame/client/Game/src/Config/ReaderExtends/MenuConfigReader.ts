

import ExcelConfigReader from "../ExcelConfigReader";
import MenuConfig from "../ConfigExtends/MenuConfig";
import { MenuBarType } from "../../GameFrame/Menu/MenuBarType";
import Game from "../../Game";
import { MenuId } from "../../GameModule/MenuId";
export default class MenuConfigReader extends ExcelConfigReader<MenuConfig>
{
    barDict: Dictionary<MenuBarType, MenuConfig[]> = new Dictionary<MenuBarType, MenuConfig[]>();

    getBarMenus(barType: MenuBarType): MenuConfig[]
    {
        let configlist = [];
        configlist = this.barDict.getValue(barType);

        let isshowlist = [];
        for (let i = 0, len = configlist.length; i < len; i++) 
        {
            let config = configlist[i];
            let unlock = Game.config.unlock.getUnlockConfig(config.menuId);
            (unlock && unlock.showType != 2 && config.menuId != MenuId.Sections) && isshowlist.push(config); 
        }

        isshowlist.sort((a, b)=>{
            return a.barIndex - b.barIndex
        })

        return isshowlist;
    }

    getShowBarMenus(barType: MenuBarType): MenuConfig[]
    {
        let configlist = [];
        configlist = this.barDict.getValue(barType);

        let isshowlist = [];
        for (let i = 0, len = configlist.length; i < len; i++) 
        {
            let config = configlist[i];
            let unlock = Game.config.unlock.getUnlockConfig(config.menuId);
            (unlock && unlock.showType == 1 && unlock.showLevel <= Game.user.level) && isshowlist.push(config); 
        }

        isshowlist.sort((a, b)=>{
            return a.barIndex - b.barIndex
        })

        return isshowlist;
    }



    /** 游戏所有配置加载完成 */
    onGameLoadedAll()
    {
        let list = this.configList;
        for (let i = 0; i < list.length; i++)
        {
            let config: MenuConfig = list[i];

            // TODO ZF 将右下角菜单 强制设置为右上角
            // if(config.barType == MenuBarType.Right_Bottom) 
            //     config.barType = MenuBarType.Right_Top;


            let menuList = this.barDict.getValue(config.barType);
            if (!menuList)
            {
                menuList = [];
                this.barDict.add(config.barType, menuList);
            }
            menuList.push(config);
        }
    }
}