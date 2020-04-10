/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ObtainWayItemStruct from "../../Generates/SystemModuleDialog/ObtainWayItemStruct";
import Game from "../../../Game";
import WayConfig from "../../../Config/ConfigExtends/WayConfig";

export default class ObtainWayItem extends ObtainWayItemStruct
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
    GoMenu()
    {
        // TODO 各模块留好打开接口
        Game.system.toastText("暂无法前往！");
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

        this.m_labWay.text = data.name;
    }

    /*public----------------------外部接口---------------------------*/
    /** 渲染Item */
    RenderItem(wayid:number)
    {
        let config = Game.config.way.getConfig(wayid);
        this.DataSource = config;

        this.UpdateItem();
    }
}