/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMServerHostPageStruct from "../../Generates/GameGM/GMServerHostPageStruct";
import GMWindow from "../../../GM/GMWindow";
import ChannelManager, { ServerStateType } from "../../../GameFrame/Channel/ChannelManager";
import Game from "../../../Game";
import GameLocalStorage from "../../../GameFrame/LocalStorage/GameLocalStorage";
import GameURL from "../../../Config/Keys/GameURL";

export default class GMServerHostPage extends GMServerHostPageStruct
{
    
	// 窗口
	moduleWindow: GMWindow;

	channel: ChannelManager;

	// 窗口初始化完毕
	onWindowInited(): void
	{
        this.channel = ChannelManager.Instance;

        this.m_ipIput.m_title.text = GameLocalStorage.Instance.getString("GM_SERVER_HOST_IP", true);
        this.m_portInput.m_title.text = GameLocalStorage.Instance.getString("GM_SERVER_HOST_PORT", true);
        this.m_isHttpCheckbox.selected = GameLocalStorage.Instance.getBoolean("GM_SERVER_HOST_HTTPS", true);
        if(isNullOrEmpty(this.m_portInput.text))
        {
            this.m_portInput.text = "5000";
        }
        this.m_addButton.onClick(this, this.onClickAddButton);
    }

    onClickAddButton()
    {
        var ip = this.m_ipIput.m_title.text;
        var port = this.m_portInput.m_title.text;
        var isHttps = this.m_isHttpCheckbox.selected;

        
        GameLocalStorage.Instance.setString("GM_SERVER_HOST_IP", ip, true);
        GameLocalStorage.Instance.setString("GM_SERVER_HOST_PORT", port, true);
        GameLocalStorage.Instance.setBoolean("GM_SERVER_HOST_HTTPS", isHttps, true);
        var portNum = parseInt(port);
        var item = {
            name: "GM 自定义",
            ip: ip,
            port: portNum,
            main: (isHttps ? "https://" : "http://") + ip + ":" + portNum,
            https: isHttps,
            test: true,
            state: ServerStateType.Noraml,
            shieldHero: []
        };
        item.main = GameURL.getServerMainUrl(item);
        this.channel.serverList.list.push( item );
    }
}