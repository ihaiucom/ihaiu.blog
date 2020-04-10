
import Handler = Laya.Handler;
import LocalStorage = Laya.LocalStorage;
import VersionConfig from "./VersionConfig";
import VersionData from "./VersionData";
import Game from "../Game";



export default class VersionManager
{

	private static _Instance: VersionManager;
	static get Instance(): VersionManager
	{
		if (!VersionManager._Instance)
		{
			VersionManager._Instance = new VersionManager();
		}
		return VersionManager._Instance;
	}


	// 本地版本号发生变化
	sLocalVersionChange: Signal = new Signal();


	// 网络，版本信息配置		
	webVersionConfig: VersionConfig;
	// 拷贝 assets->data/{packages}/files 的版本
	assetCopytoFileVersionData: VersionData = new VersionData();
	// 本地，应用版本
	localAppVersionData: VersionData = new VersionData();
	// 网络，应用版本
	webAppVersionData: VersionData = new VersionData();
	// 本地，资源版本
	localResVersionData: VersionData = new VersionData();
	// 网络，资源版本
	webResVersionData: VersionData = new VersionData();
	// 本地，分包资源版本
	localPartialVersionData: VersionData = new VersionData();
	// 网络，分包资源版本
	webPartialVersionData: VersionData = new VersionData();


	init()
	{
		this.localAppVersionData.setVersionTxt(VersionConfig.AppVersion);
		this.localResVersionData.setVersionTxt(VersionConfig.ResVersion);
	}





	/**
	 * 获取当前应用版本
	 */
	get localAppVersion(): string
	{
		if(window['VersionConfig'] && VersionConfig.AppVersion)
		{
			return VersionConfig.AppVersion;
		}
		return "v1.0.0.0";
		// return Game.application.AppVersionName;
	}


	/**
	 * 当前资源版本
	 */
	private __localResVersion;
	get localResVersion(): string
	{
		if (!this.__localResVersion)
		{
			this.__localResVersion = LocalStorage.getItem("__localResVersion");
			if (!this.__localResVersion)
			{
				this.__localResVersion = this.localAppVersion;
			}
		}

		return this.__localResVersion;
	}

	set localResVersion(version)
	{
		this.__localResVersion = version;
		LocalStorage.setItem("__localResVersion", version);
		this.sLocalVersionChange.dispatch();

	}

	/**
	 * 拷贝 assets->data/{packages}/files 的版本
	 */

	private __assetsCopytoFileVersion;
	get assetsCopytoFileVersion(): string
	{
		if (!this.__assetsCopytoFileVersion)
		{
			this.__assetsCopytoFileVersion = LocalStorage.getItem("__assetsCopytoFileVersion");
			if (!this.__assetsCopytoFileVersion)
			{
				this.__assetsCopytoFileVersion = "0.0.0";
			}
		}

		return this.__assetsCopytoFileVersion;
	}

	set assetsCopytoFileVersion(version)
	{
		this.__assetsCopytoFileVersion = version;
		LocalStorage.setItem("__assetsCopytoFileVersion", version);
	}


	/**
	 * 当前分包资源版本
	 */

	private __localPartialVersion;
	get localPartialVersion(): string
	{
		if (!this.__localPartialVersion)
		{
			this.__localPartialVersion = LocalStorage.getItem("__localPartialVersion");
			if (!this.__localPartialVersion)
			{
				this.__localPartialVersion = "0.0.0";
			}
		}

		return this.__localPartialVersion;
	}

	set localPartialVersion(version)
	{
		this.__localPartialVersion = version;
		LocalStorage.setItem("__localPartialVersion", version);
	}

	// 获取是否需要拷贝assets->data/{packages}/files
	get isNeedAssetsCopy(): boolean
	{
		// if (Game.browserSetting.isCrosswalk)
		// {
		// 	return !this.localAppVersionData.equal(this.assetCopytoFileVersionData);
		// }
		return false;
	}






}
