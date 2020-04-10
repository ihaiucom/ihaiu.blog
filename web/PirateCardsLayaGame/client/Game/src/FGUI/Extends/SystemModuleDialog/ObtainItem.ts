/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import {EquipData} from '../../../GameModule/DataStructs/EquipData';
import ItemData from '../../../GameModule/DataStructs/ItemData';
import ObtainItemStruct from "../../Generates/SystemModuleDialog/ObtainItemStruct";
import WayConfig from '../../../Config/ConfigExtends/WayConfig';
import Game from '../../../Game';

export default class ObtainItem extends ObtainItemStruct
{
    private DataSource:WayConfig


    /*----------------------默认视图接口---------------------------*/
    /** 初始化视图 */
    protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        this.m_btnGo.onClick(this, this.GoMenu);
    }

    /** 销毁视图 */
    dispose()
    {
        this.m_btnGo.offClick(this, this.GoMenu);
        this.Reset();
        super.dispose();
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 前往模块 */
    async GoMenu()
    {
        let data = this.DataSource;
       
        if (data.menuIndex) 
        {
            let menuindexconfig  = Game.config.menuIndex.getConfig(data.menuIndex);
            await menuindexconfig.openTab() && Game.event.dispatch("DIALOG_CLOSE");
        } 
        else if (data.menu) 
        {
            let menuconfig  = Game.config.menu.getConfig(data.menu);
            await menuconfig.openMenu() && Game.event.dispatch("DIALOG_CLOSE");
        }

    }

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.DataSource = null;
    }

    /** 刷新Item */
    private UpdateItem()
    {
        let data = this.DataSource;

        this.m_labName.text = data.name;
        this.m_labInfo.text = data.des;

        this.m_icon.url = Game.config.avatar.getConfig(data.icon).iconUrl
    }

    /*public----------------------外部接口---------------------------*/
    /** 渲染Item */
    RenderItem(wayid:number, index:number)
    {
        let config = Game.config.way.getConfig(wayid);
        this.DataSource = config;

        this.UpdateItem();
        this.m_Type.selectedIndex = (index % 2)
    }
}