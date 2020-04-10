import GMSelectServerPageStruct from "../../Generates/GameGM/GMSelectServerPageStruct";
import GMWindow from "../../../GM/GMWindow";
import ChannelManager, { ServerItem } from "../../../GameFrame/Channel/ChannelManager";
import Game from "../../../Game";
import TEXT from "../../../Config/Keys/TEXT";

declare var net;

export default class GMSelectServerPage extends GMSelectServerPageStruct
{
	// 窗口
	moduleWindow: GMWindow;

	channel: ChannelManager;

	// 窗口初始化完毕
	onWindowInited(): void
	{
		let list = this.m_list;
		list.setVirtual();
		list.setVirtualAndLoop();
        this.channel = ChannelManager.Instance;
        this.loadServerList();
    }
    
    async loadServerList()
    {
		let list = this.m_list;
        let isSuccess = await this.channel.requestServerListAsync();
        if(isSuccess)
        {
            list.on(fgui.Events.CLICK_ITEM, this, this.onClickItem);
            list.setItemRenderer(this.renderListItem, this);
            list.numItems = this.channel.serverList.list.length;

            if (this.channel.serverIndex >= 0)
                this.m_list.selectedIndex = this.channel.serverIndex;

        }
        else
        {
			
            list.numItems = 0;
            Game.system.alertText(TEXT.ErorRequestServerList);
        }
    }


	// 该组件所在Tab 显示
	onTabShow(): void
	{
		let list = this.m_list;
		list.numItems = this.channel.serverList.list.length;
		if (this.channel.serverIndex >= 0)
			this.m_list.selectedIndex = this.channel.serverIndex;
	}


	renderListItem(index: number, item: fgui.GButton)
	{
		let data = this.channel.serverList.list[index];
		item.title = `${data.name}  ${data.ip}:${data.port}`;
		item["serverItem"] = data;
	}


	onClickItem(item: fgui.GButton, ...args)
	{
		let data: ServerItem = item["serverItem"];
		if (data)
		{
			this.channel.serverName = data.name;
			net.config.url = Game.channel.serverItem.main;
		}
	}
}