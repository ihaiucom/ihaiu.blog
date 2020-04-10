import {MenuIndexConfigLang} from "../ExcelConfigLange";
import Game from "../../Game";
import TEXT from "../Keys/TEXT";
import { MenuIndexId } from "../../GameModule/MenuIndexId";
import MenuValidateEnableOpen from "../../GameModule/MenuValidateEnableOpen";
import MenuWindows from "../../GameModule/MenuWindows";
export default class MenuIndexConfig extends MenuIndexConfigLang
{
    // 页签ID
    get menuIndexId(): MenuIndexId
    {
        return this.id;
    }

    // 页签索引
    get tabIndex(): number
    {
        return this.id % 1000;
    }

     /**
     * 获取是否解锁
     */
    get isUnlock(): boolean
    {
        let menuIndexId = this.menuIndexId;
        if (Game.config.unlock.hasConfig(menuIndexId)) 
        {
            return Game.moduleModel.home.IsOpen(menuIndexId);    
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
        let unlockConfig = Game.config.unlock.getUnlockConfig(this.menuIndexId);
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
     * 前往
     */
    async openTab(): Promise<boolean>
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
            Game.menu.openTab(this.menuId, this.tabIndex);
            return true;
        }

        return true;
    }

}