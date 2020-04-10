

import ExcelConfigReader from "../ExcelConfigReader";
import UnlockConfig from "../ConfigExtends/UnlockConfig";
export default class UnlockConfigReader extends ExcelConfigReader<UnlockConfig>
{
    //
    private menuConfigs: Dictionary<number, UnlockConfig> = new Dictionary<number, UnlockConfig>();
    //
    private menuGroups: Dictionary<number, Array<UnlockConfig>> = new Dictionary<number, Array<UnlockConfig>>();
    //
    private unlockGroups: Dictionary<number, Array<UnlockConfig>> = new Dictionary<number, Array<UnlockConfig>>();
    //
    private sortMenus: Dictionary<number, boolean> = new Dictionary<number, boolean>();
    private setConfig(config: UnlockConfig)
    {
        if (!config.menuIndexId) 
        {
            this.menuConfigs.add(config.menuId, config);
        }
        else
        {
            this.menuConfigs.add(config.menuIndexId, config);
        }
        

        let list: UnlockConfig[], group;
        group = config.group;
        if (this.menuGroups.hasKey(group))
        {
            list = this.menuGroups.getValue(group);
        }
        else
        {
            list = [];
            this.menuGroups.add(group, list);
        }
        list.push(config);

        //
        let openList: UnlockConfig[], type;
        type = config.openType;
        if (this.unlockGroups.hasKey(type))
        {
            openList = this.unlockGroups.getValue(type);
        }
        else
        {
            openList = [];
            this.unlockGroups.add(type, openList);
        }
        openList.push(config);
    }

    /**
     * 获取解锁数据
     * @param menuId 
     */
    public getUnlockConfig(menuId: number): UnlockConfig
    {
        return this.menuConfigs.getValue(menuId);
    }

    /**
     * 
     * @param barType 
     */
    getBarMenus(barType: number): UnlockConfig[]
    {
        let list = this.menuGroups.getValue(barType);
        if (this.sortMenus.hasKey(barType) == false)
        {
            list.sort((a, b) => { return a.groupId - b.groupId });
            this.sortMenus.add(barType, true);
        }
        return list;
    }

    //获取解锁
    getUnlocks(openType: number): UnlockConfig[]
    {
        let list = this.unlockGroups.getValue(openType);
        return list;
    }

    /** 游戏所有配置加载完成 */
    onGameLoadedAll()
    {
        let list = this.configList;
        for(let config of list)
        {
            this.setConfig(config);
        }
    }
}