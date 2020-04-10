import Game from "../../Game";
import { MenuId } from "../../GameModule/MenuId";
import GameURL from "../../Config/Keys/GameURL";
import TimeHelper from "../../GameHelpers/TimeHelper";
import { AssetItemType } from "../AssetManagers/AssetItemType";
export enum ServerStateType
{
	Close = 0,
	Noraml = 1
}

export interface ServerItem
{
	name: string;
	ip: string;
	port: number;
	state: ServerStateType;
	// 是否是用https
	https: boolean;
	// 是否是测试用
	test: boolean;
	// 屏蔽的英雄Id
	shieldHero?:any;
	// shinezone统计gameId
	staticGameId?: number;
	// shinezone统计url
	staticUrl?: string;
	// 通知url
	noticUrl?: string;
	// 充值验证url
	marketVerifyUrl?: string;

	// https://nisak.123u.com:5000
	main?: string;
}



export interface ServerList
{
	list: ServerItem[];
	defaultServer: string;
}

enum ServerNoticType
{
	Normal = 1,
	StopServer = 2,
}

interface ServerNoticData
{
	title: string,
	content: string,
	type: ServerNoticType,
	timezone: string,
	starttime: string,
	endtime: string;
	visible: boolean;
}

export default class ChannelManager 
{
	
    private static _Instance: ChannelManager;
    static get Instance(): ChannelManager
    {
        if (!ChannelManager._Instance)
        {
            ChannelManager._Instance = new ChannelManager();
        }
        return ChannelManager._Instance;
    }


	get serverListUrl()
	{
		return GameURL.serverListUrl;
	}

	serverList: ServerList;
	serverNoticData: ServerNoticData;

	// 通知Url		
	get noticUrl(): string
	{
		if (this.serverItem)
		{
			if (this.serverItem.noticUrl)
			{
				return this.serverItem.noticUrl;
			}

			if (this.serverItem.https)
			{
				return "https://" + this.serverItem.ip + "/notice.html";
			}
			else
			{
				return "http://" + this.serverItem.ip + "/notice.html";
			}
		}

		return "http://172.16.0.93/notice.html";
	}

	// 程序内置默认		
	defaultServerItem: ServerItem = { name: "默认", ip: "nisak.123u.com", port: 5000, state: ServerStateType.Noraml, https: true, test: false, shieldHero: [], main:"https://nisak.123u.com:5000"};

	private getServerItem(serverName: string): ServerItem
	{
		if (!serverName)
			return null;

		if (this.serverList)
		{
			for (let i = 0; i < this.serverList.list.length; i++)
			{
				if (this.serverList.list[i].name == serverName)
				{
					return this.serverList.list[i];
				}
			}
		}
		return null;
	}

	//======================
	// 选择的服务器名称
	//----------------------

	private _serverName: string;

	get serverName(): string
	{
		if (!this._serverName)
		{
			if (Game.localStorage.serverName)
			{
				let item = this.getServerItem(Game.localStorage.serverName);
				if (item)
				{
					this._serverName = Game.localStorage.serverName;
				}
			}

			if (!this._serverName && this.serverList)
			{
				let item = this.getServerItem(this.serverList.defaultServer);
				if (item)
				{
					this._serverName = this.serverList.defaultServer;
				}
				else if (this.serverList.list.length > 0)
				{
					this._serverName = this.serverList.list[0].name;
				}
			}
		}
		return this._serverName;
	}

	set serverName(name: string)
	{
		this._serverName = name;
		Game.localStorage.serverName = name;
	}

	//======================
	// 选择的服务器的索引
	//----------------------
	get serverIndex(): number
	{
		if (this.serverList)
		{
			for (let i = 0; i < this.serverList.list.length; i++)
			{
				if (this.serverList.list[i].name == this.serverName)
				{
					return i;
				}
			}
		}
		return -1;
	}


	//======================
	// 选择的服务器
	//----------------------
	get serverItem(): ServerItem
	{

		let item = this.getServerItem(this.serverName);
		if (item)
		{
			return item;
		}
		return this.defaultServerItem;
	}

    async requestServerListAsync():Promise<boolean>
    {
		if(this.serverList)
		{
			return true;
		}
		
		let url = this.serverListUrl;
		console.log("serverListUrl=" + url);


		let resust = await Game.asset.loadAsync(url, AssetItemType.Json);
		if (resust)
		{
			this.serverList = isString(resust) ? JSON.parse(resust) : <ServerNoticData>resust;
			if(this.serverList && this.serverList.list)
			{
				for(let item of this.serverList.list)
				{
					item.main = GameURL.getServerMainUrl(item);
				}
			}
			console.log("获取服务器列表成功");
			// console.log(resust);
			// console.log(JSON.stringify(this.serverList));
			return true;
		}
		else
		{
			console.log("ChannelManager LoadFail: ServerList.json ");
			return false;
		}

    }

	// 是否需要打开通知		
	get isTodayOpenedNotice(): boolean
	{
		if (Game.localStorage.isNoticTodayNoOpen)
		{
			if (Game.localStorage.hasItem("lastOpenNoticeTime", true))
			{
				let lastOpenTime = Game.localStorage.getInt("lastOpenNoticeTime", true);
				return !TimeHelper.isToday(lastOpenTime);;
			}
		}
		return true;
	}

	// 请求通知
	requestNotice()
	{
		console.log(this.noticUrl);
		Engine.loader.load(this.noticUrl, Handler.create(this, this.onResopneNotic));


		// Laya.loader.load("http://blog.ihaiu.com/params.json", Handler.create(this, () =>
		// {
		// 	let result = Laya.loader.getRes("http://blog.ihaiu.com/params.json");
		// 	if (!isString(result))
		// 	{
		// 		result = JSON.stringify(result);
		// 	}
		// 	console.log("加载http://blog.ihaiu.com/params.json: " + result);
		// }));
	}

	private onResopneNotic()
	{
		let resust = Engine.loader.getRes(this.noticUrl);
		console.log(resust);
		if (resust)
		{
			try
			{
				this.serverNoticData = isString(resust) ? JSON.parse(resust) : <ServerNoticData>resust;
				if (!this.serverNoticData || this.serverNoticData.visible == false)
				{
					return;
				}
				if (this.serverNoticData.type == ServerNoticType.Normal)
				{
					if (this.isTodayOpenedNotice)
					{
						Game.menu.open(MenuId.Notice);
						Game.localStorage.setInt("lastOpenNoticeTime", Game.time.localTimeMS, true);
					}
				} else
				{
					Game.system.alrtTextFull(this.serverNoticData.content, this.serverNoticData.title, null, () =>
					{
						// TODO 退出程序
						if (window["conch"] && window["conch"]["exit"])
							window["conch"].exit();
					})
				}
			}
			catch (error) 
			{
				console.warn("通知有问题");
			}

		}
	}

	//-------------------------------Gjc 整理登录流程-------------------------
	/** 渠道服地址 */
	private _channelServer:ServerItem;

	set channelServer(server:ServerItem)
	{
		this._channelServer = server
	}

	get channelServer():ServerItem
	{
		return this._channelServer
	}

	/** 渠道服地址下载链接 */
	// private channelUrl = `https://h5-jjsg-cdn.123u.com/server_config/banhao.json`;
	private channelUrl = `https://h5-jjsg-cdn.123u.com/server_config/config.${VersionConfig.AppVersion}.json`;

	/** 第一步：下载渠道服地址 */
	async requestChannelServerAsync():Promise<boolean>
    {
		let url = this.channelUrl;

		let resust = await Game.asset.loadAsync(url, AssetItemType.Json);
		if (resust)
		{
			let channel = isString(resust) ? JSON.parse(resust) : <ServerNoticData>resust;
			channel.main = GameURL.getServerMainUrl(channel);
			this.serverList = {list:[channel], defaultServer:channel.name};
			// this.channelServer = channel;
			console.log(`ChannelUrl Request Successed: ${channel}`);
			return true;
		}
		else
		{
			this.requestChannelServerAsync();
			console.log(`ChannelUrl Request Failed: ${url} `);
			// return false;
		}
    }
}