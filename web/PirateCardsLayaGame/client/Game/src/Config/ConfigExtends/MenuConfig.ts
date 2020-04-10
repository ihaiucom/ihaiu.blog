
import {MenuConfigLang} from "../ExcelConfigLange";
import Game from "../../Game";
import { MenuId } from "../../GameModule/MenuId";
import { MenuLayerType } from "../../GameFrame/Menu/MenuLayerType";
import { MenuCloseOtherType } from "../../GameFrame/Menu/MenuCloseOtherType";
import { LoaderId } from "../../GameFrame/Loader/LoaderId";
import Res from "../Keys/Res";
import MenuValidateUnlock from "../../GameModule/MenuValidateUnlock";
import TEXT from "../Keys/TEXT";
import { MenuBarType } from "../../GameFrame/Menu/MenuBarType";
import MenuValidateEnableOpen from "../../GameModule/MenuValidateEnableOpen";
import MenuValidateNew from "../../GameModule/MenuValidateNew";
import MenuWindows from "../../GameModule/MenuWindows";
export default class MenuConfig extends MenuConfigLang
{
    // 模块ID
    get menuId(): MenuId
    {
        return this.id;
    }

    // 层级
    get menuLayer(): MenuLayerType
    {
        return this.layer;
    }

    // 关闭其他类型
    get menuCloseOtherType(): MenuCloseOtherType
    {
        return this.closeOtherType;
    }


    // 加载界面ID
    get menuLoaderId(): LoaderId
    {
        switch(this.menuId)
        {
            case MenuId.WarWindowUI:
            case MenuId.BattleResultWindow:
                return LoaderId.None;
        }
        return this.loaderId;
    }


    private _iconUrl: string;
    // 	菜单图片	
    get iconUrl(): string
    {
        if(!this._iconUrl)
        {
            if(!isNullOrEmpty(this.icon))
            {
                this._iconUrl = Res.getMenuIconUrl(this.icon);
            }
        }

       return this._iconUrl;
    }

    private _nameIcon: string
    // 标题图片
    get nameIconUrl(): string
    {
        if(!this._nameIcon)
        {
            if(!isNullOrEmpty(this.moduleNameIcon))
            {
                this._nameIcon = Res.getMenuNameIconUrl(this.moduleNameIcon);
            }
        }

        return this._nameIcon;
    }

    // private _dialogNameIcon: string
    // // 弹窗标题图片
    // get diolagNameIconUrl(): string
    // {
    //     if(!this._dialogNameIcon)
    //     {
    //         if(!isNullOrEmpty(this.dialogNameIcon))
    //         {
    //             this._dialogNameIcon = Res.getMenuNameIconUrl(this.dialogNameIcon);
    //         }
    //     }

    //     return this._dialogNameIcon;
    // }

    /**
     * 是否是子菜单栏的主菜单
     */
    get isSubbarMainButton(): boolean
    {
        return this.menuId >= MenuId.SubMenuButtonBegin;
    }

    /**
     * 获取是否解锁
     */
    get isUnlock(): boolean
    {
        let menuid = this.menuId;
        if (Game.config.unlock.hasConfig(menuid)) 
        {
            return Game.moduleModel.home.IsOpen(menuid);    
        }
        else
        {
            return true;
        }

        // return <boolean>MenuValidateUnlock.getInstance().validate(this.menuId);
    }

    /**
     * 获取未解锁文本
     */
    get lockText(): string
    {
        let unlockConfig = Game.config.unlock.getUnlockConfig(this.menuId);
        if (unlockConfig)
        {
            let olevel = unlockConfig.openLevel <= Game.user.level ? "" : `需要主公等级达到${unlockConfig.openLevel}`;
            if (!unlockConfig.checkPoint) 
            {
                return olevel + "后开启";
            }
            
            let config = Game.config.checkPoint.getConfig(unlockConfig.checkPoint);
            let active = Game.moduleModel.section.getMissionDataById(unlockConfig.checkPoint).isActive
            let cpoint = `通过关卡${config.chapter}-${config.mapID}`;
                        
            return Boolean(olevel) ? olevel + (active ? ",且" + cpoint : "") : cpoint + "后开启";
        }
        return TEXT.Lock;
    }

    /**
     * 锁住情况下是否显示
     */
    get lockVisiable(): boolean
    {
        let unlockConfig = Game.config.unlock.getConfig(this.menuId);
        if (unlockConfig)
        {
            return unlockConfig.showType == 0;
        }
        return true;
    }

    /**
     * 是否可以打开
     */
    get enableOpen(): boolean
    {
        return <boolean>MenuValidateEnableOpen.getInstance().validate(this.menuId);
    }


    /**
     * 是否可以是新的
     */
    get isNew(): boolean
    {
        return <boolean>MenuValidateNew.getInstance().validate(this.menuId);
    }

    /**
     * 前往
     */
    async openMenu(): Promise<boolean>
    {
        if (this.menuId < MenuId.SubMenuButtonBegin)
        {
            if (!this.isUnlock)
            {
                Game.system.toastText(this.lockText);
                return false;
            }

            let windowConfig = MenuWindows.get(this.menuId);

            if (!windowConfig)
            {
                Game.system.toastText(TEXT.Disable);
                return false;
            }

            if(windowConfig.windowClass)
            {
                let result = await windowConfig.windowClass.AsyncEnableOpen();
                if(!result)
                {
                    return false;
                }
            }

            if (this.enableOpen)
            {
                Game.menu.open(this.menuId);
                return true;
            }
        }
        return true;
    }
}