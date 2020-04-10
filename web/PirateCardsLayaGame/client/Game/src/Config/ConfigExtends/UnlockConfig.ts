
import {UnlockConfigLang} from "../ExcelConfigLange";
import MenuConfig from "./MenuConfig";
import Game from "../../Game";
export default class UnlockConfig extends UnlockConfigLang
{
	public get menuConfig(): MenuConfig
    {
        return Game.config.menu.getConfig(this.menuId);
    }

    get lockvisible(): boolean
    {
        return this.showType == 1;
    }

    get isUnlock(): boolean
    {
        let menuConfig = this.menuConfig;
        if (menuConfig)
        {
            return menuConfig.isUnlock;
        }
        return false;
    }

    get IsNew(): boolean
    {
        let menuConfig = this.menuConfig;
        if (menuConfig)
        {
            return menuConfig.isNew;
        }
        return false;
    }


    //是否展示
    get isOpenShow(): boolean
    {
        // for (var index = 0; index < this.openShow.length; index++)
        // {
        //     var element = this.openShow[index];
        //     if (element == 1)
        //     {
        //         return true;
        //     }
        // }
        return false;
    }

    get isOpenShowMenu(): boolean
    {
        // for (var index = 0; index < this.openShow.length; index++)
        // {
        //     var element = this.openShow[index];
        //     if (element == 2)
        //     {
        //         return true;
        //     }
        // }
        return false;
    }


    // 	菜单图片	
    get iconUrl(): string
    {
        let url = "";

        // if (this.itemId > 0)
        // {
        //     url = Game.config.item.getItemIcon(this.itemId);
        // }
        // else if (this.menuConfig)
        // {

        //     url = this.menuConfig.iconUrl;
        // }
        return url;
    }
}