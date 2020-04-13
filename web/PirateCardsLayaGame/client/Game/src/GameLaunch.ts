import GameConfig from "./GameConfig";
import GuiSetting from "./FGUI/GuiSetting";
import FGLoader from "./FGUI/FGLoader";
import GuiBinderList from "./FGUI/Generates/GuiBinderList";
import GuiResPackageConfig from "./FGUI/GuiResPackageConfig";
import Game from './Game';
import GuiPackageNames from "./FGUI/Generates/GuiPackageNames";
import { LoaderId } from "./GameFrame/Loader/LoaderId";
import MenuLayer from "./GameFrame/Menu/MenuLayer";
import { MenuId } from "./GameModule/MenuId";
import MenuWindows from "./GameModule/MenuWindows";
import AntNet from "./AntFrame/Net/AntNet";
import AntFrame from "./AntFrame/AntFrame";
import AntFrameConfig from "./AntFrame/AntFrameConfig";
import MsgKey from "./Config/Keys/MsgKey";
import SoundKey from "./FGUI/Generates/SoundKey";
import { AssetItemType } from "./GameFrame/AssetManagers/AssetItemType";
import Res from "./Config/Keys/Res";
import { Mawait } from "./Libs/Mawait";
declare var net;
export default class GameLaunch 
{
    constructor() 
    {
	}

	// 初始化
	install(callback?: Function)
	{
		this.installAsync(callback);
	}


	async installAsync(callback?: Function)
	{
		if(VersionConfig)
		{
			VersionConfig.Init();
		}


		Game.init();

		// 初始化UI层级容器
		MenuLayer.install();
		// 初始化UI窗口配置
		MenuWindows.install();

		// 初始化化版本信息
		Game.version.init();
		if(Engine.borwer.isWXGame)
		{
			
			// 设置FGUI
			await this.initFguiSetting();

			// 初始化加载界面
			Game.loader.install();

			//==============================先初始加载面板，再去下载版本清单
			
			// 加载网络版本配置
			// await this.loadWebVersionConfigAsync();

			// 加载版本清单文件
			await this.loadVersionAsync();
			Game.localStorage.setString("__basePath__", Laya.URL.basePath, true);


		}
		else
		{
			// 加载网络版本配置
			// await this.loadWebVersionConfigAsync();

			// 加载版本清单文件
			await this.loadVersionAsync();
			Game.localStorage.setString("__basePath__", Laya.URL.basePath, true);

			//==============================先下载版本清单，再去初始加载面板

			// 设置FGUI
			await this.initFguiSetting();

			// 初始化加载界面
			Game.loader.install();
		}






		// 打开启动界面
		Game.loader.open(LoaderId.Launch);
		Game.loaderSettingHandler.onBegin();

		// 检测清理微信缓存
		await this.clearWXFileCache();
		// Game.loaderSettingHandler.onBegin();

		// 加载配置
		await this.initConfig();
		// 加载多语言配置
		await this.initLangConfig();
		// 初始化数据模型
		Game.moduleModel.install();
		// 加载服务器列表
		// await this.installServerList();
		
		// 资源预加载
		// await Game.preload.start();

		Game.loaderSettingHandler.onEnd();

		// 打开登录界面
		// Game.menu.open(MenuId.Login);

		// 声音
		Game.sound.install();

		if(window['launcherInitBG'])
		{
		  window['launcherInitBG'].removeSelf();
		}
		
		if(callback)
		{
			callback();
		}
		else
		{
			// Game.menu.open(MenuId.Login);
		}



		

	}


	// 加载版本文件
	loadVersion()
	{
		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
		Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
	}

    onVersionLoaded(): void 
    {
	}

	

	// 异步加载版本清单文件
	async loadVersionAsync():Promise<void>
	{
		return new Promise<void>((resolve)=>
		{
			Laya.ResourceVersion.enable("version.json?t=" + Laya.timer.currTimer, Laya.Handler.create(this, ()=>
			{
				if(Laya.ResourceVersion.manifest )
				{
					if(Laya.ResourceVersion.manifest["__ResVersion__"])
					{

						let resVersion = Laya.ResourceVersion.manifest["__ResVersion__"];
						Game.version.localResVersionData.setVersionTxt(resVersion);
						Game.version.localResVersion = resVersion;
					}
					
					
					if(!VersionConfig.IsUseZip)
					{
						let manifest = Laya.ResourceVersion.manifest;
						let keyList = [];
						for(var key in manifest)
						{
							keyList.push(key);
						}

						for(var key2 of keyList)
						{
							manifest[key2.toLowerCase()] = manifest[key2];
						}
					}



					if(Laya.MiniAdpter)
					{
						Laya.MiniAdpter.AutoCacheDownFile = false;
					}
				}

					
				
				
				this.checkWXFileCache();
				resolve();
			}), Laya.ResourceVersion.FILENAME_VERSION);
		});
	}

	
	async checkWXFileCache()
	{
		if(Engine.borwer.isWXGame)
		{
			let preBasePath = Game.localStorage.getString("__basePath__", true);
			if (preBasePath != Laya.URL.basePath) 
			{
				console.log(`资源根目录不一样: preBasePath=${preBasePath}, Laya.URL.basePath=${Laya.URL.basePath}`);

				Laya.MiniFileMgr.onSetVersion(preBasePath, Laya.URL.basePath);
			}
		}
	}

	async clearWXFileCache()
	{
		let vv = VersionConfig.VersionCacheCode;
		// if(Engine.borwer.isWXGame && Game.localStorage.hasItem("__verIsNeedClear__", true))
		if(Engine.borwer.isWXGame )
		{
			let v = Game.localStorage.getInt("__verIsNeedClear__", true);
			if (v != vv) 
			{
				console.log("清理缓存 v=", v, "vv=", vv);
				Game.loaderSettingHandler.setTip("清理缓存中...");
				await Mawait.Frame(5);
				Laya.MiniFileManager.RemoveAll();
			}
		}
		Game.localStorage.setInt("__verIsNeedClear__", vv, true);
	}



	// 设置FGUI
	async initFguiSetting()
	{

		// 初始化 fgui资源列表
		Game.guiRes.install();

		// 设置fgui文件后缀
		fgui.UIConfig.packageFileExtension = GuiSetting.packageFileExtension;
		// 注册Loader类
		fgui.UIObjectFactory.setLoaderExtension(FGLoader);
		// 绑定组件
		GuiBinderList.fguiBinderAll();
		// 设置按钮声音
		fgui.UIConfig.buttonSound = SoundKey.getUrl(SoundKey.MM01_Button);
		//设置字体
		fgui.UIConfig.defaultFont = "_sans";
		
		let packageConfig: GuiResPackageConfig = await Game.asset.loadFguiByPackagenameAsync(GuiPackageNames.GameLaunch);
		GuiSetting.addPackage(packageConfig.packagePath);
		
		// 初始化转圈
		fgui.UIConfig.globalModalWaiting = fgui.UIPackage.getItemURL(packageConfig.packageName, "GlobalModalWaiting");
		fgui.UIConfig.windowModalWaiting = fgui.UIPackage.getItemURL(packageConfig.packageName, "WindowModalWaiting");
		
	}

	// 加载配置
	async initConfig()
	{ 
		Game.config.configLoader = Game.asset;
		Game.config.initList();
		Game.config.sLoadProgress.add(Game.loaderSettingHandler.onLoadedConfig, Game.loaderSettingHandler);
		await Game.config.loadAllAsync();
		Game.config.sLoadProgress.remove(Game.loaderSettingHandler.onLoadedConfig, Game.loaderSettingHandler);
	}

	
	// 加载多语言配置
	async initLangConfig()
	{
		Game.lang.current.configLoader = Game.asset;
		Game.lang.current.initList();

		if(Game.lang.isUseLang)
		{
			Game.lang.current.sLoadProgress.add(Game.loaderSettingHandler.onLoadedLangConfig, Game.loaderSettingHandler);
			await Game.lang.current.loadAllAsync();
			Game.lang.current.sLoadProgress.remove(Game.loaderSettingHandler.onLoadedLangConfig, Game.loaderSettingHandler);
		}
	}

	// 初始化网络设置
	async installServerList()
	{
		if(VersionConfig.IsDebugVer)
		{
			// 测试--区服
			await Game.channel.requestServerListAsync();
			net.config.url = Game.channel.serverItem.main; 
		}
		else
		{
			// 正式--渠道服
			await Game.channel.requestChannelServerAsync();
			net.config.url = Game.channel.serverItem.main; 
		}

		
		// net.config.url = "https://nisak.123u.com:5000";
		net.logic.onError.on(this.onNetError, this);
	}

	async onNetError(error: number)
	{
		console.log("onNetError " + error);
		let txt = await AntFrameConfig.GetErrorStr(error);
		console.log(`OnNetError no=${error}  txt=${txt}`);
		if(!txt)
			txt = "服务器反馈错误: " + error;

		Game.system.toastText(txt);
	}

	

		

}
