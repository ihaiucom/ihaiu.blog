/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ServerPanelStruct from "../../Generates/ModuleLogin/ServerPanelStruct";
import ServerItem from "./ServerItem";
import Game from "../../../Game";

export default class ServerPanel extends ServerPanelStruct
{
    private serverList:any[] = [];

    private openServer:any[] = [];

    private roles:Dictionary<number, any> = new Dictionary<number, any>();

    lastServer:any;

    

    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_listMenu.setItemRenderer(this.MenuRender, this);
        this.m_listMenu.on(fgui.Events.CLICK_ITEM, this, this.MenuSelect);
        this.m_listServer.setItemRenderer(this.ServerRender, this);
        this.m_listServer.on(fgui.Events.CLICK_ITEM, this, this.ServerSelect);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_listMenu.itemRenderer.clear();
        this.m_listMenu.off(fgui.Events.CLICK_ITEM, this, this.MenuSelect);
        this.m_listServer.itemRenderer.clear();
        this.m_listServer.off(fgui.Events.CLICK_ITEM, this, this.ServerSelect);

        this.Reset();
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 显示菜单 */
    private MenuRender(index: number, item: any)
    {

    }

    /** 打开菜单 */
    private MenuSelect(item: any)
    {
      
    }

    /** 渲染服务器列表 */
    private ServerRender(index: number, item: ServerItem)
    {
        item.RenderItem(this.serverList[index]);
    }

    /** 切换服务器列表 */
    private ServerSelect(item: ServerItem)
    {
        let lastserver = item.DataSource;
        this.lastServer = lastserver;

        this.m_btnChange.RenderItem(lastserver);

        this.m_Server.selectedIndex = 0;
    }

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.serverList = [];
        this.openServer = [];
        this.roles.clear();
    }

    /** 更新界面 */
    private UpdateServer()
    {
        let serverlist = this.serverList;
        this.m_listServer.numItems = serverlist.length;

        
        this.m_listMenu.selectedIndex = 0;

        let openserver = this.openServer;

        if (!serverlist.length) 
        {
            return;    
        }

        let serverid = Game.localStorage.server;
        let lastserver;
        if (!serverid) 
        {
            lastserver = openserver.length ? openserver[openserver.length - 1] : serverlist[serverlist.length - 1];
        }
        else
        {
            
            lastserver = this.GetServer(serverid, true);
        }

        if(lastserver)
        {
            this.lastServer = lastserver;
            this.m_btnChange.RenderItem(lastserver);
        }
    }

    /*public----------------------外部接口---------------------------*/
    /** 打开界面 */
    public Open(serverlist:any[])
    {
        this.serverList = serverlist;
        if (this.roles.count) 
        {
            for (let i = 0, len = serverlist.length; i < len; i++) 
            {
                let server = serverlist[i];
                if (this.roles.hasKey(server.id)) this.openServer.push(server);
            }
        }

        this.UpdateServer();
    }

    /** 设置角色 */
    public SetRoles(roles:any[])
    {
        if (!roles || !roles.length) 
        {
            return;
        }

        for (let i = 0, len = roles.length; i < len; i++) 
        {
            let role = roles[i];
            this.roles.add(role.server, role);
        }
    }

    /** 获取角色 */
    public GetRole(server:number)
    {
        return this.roles.getValue(server);
    }

    /** 获取区服 */
    public GetServer(server:number, isopen?:boolean)
    {
        let serverlist = isopen ? this.openServer : this.serverList;
        for (let i = 0, len = serverlist.length; i < len; i++) 
        {
            if (serverlist[i].id = server) return serverlist[i]
        }

        return this.GetServer(server);
    }
}