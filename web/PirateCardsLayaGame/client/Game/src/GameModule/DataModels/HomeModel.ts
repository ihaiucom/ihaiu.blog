import MModel from "../../GameFrame/Module/MModel";
import Game from "../../Game";

export default class HomeModel extends MModel 
{
    /** 已开启列表 */
    private openMenuList:number[] = [303];//[200,204,301,500,601];

    /** 设置已开启列表 */
    SetOpenMenuList(list:number[])
    {
        this.openMenuList = list;
    }

    /** 获取已开启列表 */
    GetOpenMenuList()
    {
        return this.openMenuList;
    }

    /** 获取已开启列表通过类型 */
    GetOpenMenuListByType(type:number)
    {
        let list = [];

        let openlist = this.openMenuList;
        for (let i = 0, len = openlist.length; i < len; i++) 
        {
            let menuid = openlist[i];
            if (Math.floor(menuid / 100) == type) 
            {
                list.push(menuid);
            }
        }

        return list;
    }

    /** 已经解锁 */
    IsOpen(menuid:number)
    {
        return this.openMenuList.indexOf(menuid) != -1;
    }

    /** 设置新的已开启 */
    SetOpenMenuByLvOrPoint(point?:number)
    {
        let openlist   = this.openMenuList;
        let openmenu   = null;

        let configlist = Game.config.unlock.getConfigList();
        for (let i = 0, len = configlist.length; i < len; i++) 
        {
            let config = configlist[i];
            let menuid = config.menuIndexId ? config.menuIndexId : config.menuId;
            if ((openlist.indexOf(menuid) == -1) && config.openLevel <= Game.user.level ) 
            {
                if (!config.checkPoint || config.checkPoint == point) 
                {
                    openlist.push(menuid);
                    // return menuid;
                    // Gjc 暂时改为全部遍历，因为测试需要一次开多个功能
                    openmenu = menuid;
                } 
            }
        }

        return openmenu;
    }
}