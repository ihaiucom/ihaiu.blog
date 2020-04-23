var VersionConfig =
{
    // 缓存版本编号
    VersionCacheCode: 37,
    // 应用版本号
    AppVersion : "0.5",
    // 资源版本好
    ResVersion : "0.5",
    // 是否是调试版本
    IsDebugVer: true,
    // 是否是微信登录
    IsEnableWx: false,
    // 是否开启新手引导
    IsOpenGuide: false,
    // 是否开启剧情引导
    IsOpenPlot: true,
    // 单人PVE是否为本地
    IsOpenPVE_M1Local : false,
    // 是否开启身份验证
    IsOpenIDCard: false,
    // 是否使用Zip
    IsUseZip: false,
    // 是否使用Zip， 第一关是否合并为一个zip
    IsUseZip_PVE01: false,
    // 是否使用网络资源
    IsUseWebRes : true,
    // 提审版本标记，关闭部分功能
    IsReviewVersion: false,

    
    // 是否开启GPUSkin
    EnableGPUSkin: true,
    
    // 网络资源路径
    // UrlBasePath : "https://h5-jjsg-cdn.123u.com/testlaya/web/",
    UrlBasePath: "https://ihaiu.gitee.io/gameweb/PirateCardsLayaGame/",
    // 海外CDN
    // UrlBasePath: 'http://h5-hwjjsg-cdn.123u.com/testlaya/web/',
    // 网络资源路径 是否使用多个CDN
    IsUseCdnList : false,
    // 网络资源路径 CDN 资源根目录路径
    RootPath : "testlaya/web/",
    // 网络资源路径 多个CDN列表
    CDNList : 
    [
        "https://h5-jjsg-cdn.123u.com/",
        "https://h5-jjsg-cdn1.123u.com/",
        "https://h5-jjsg-cdn2.123u.com/",
        "https://h5-jjsg-cdn3.123u.com/",
        "https://h5-jjsg-cdn4.123u.com/",
        "https://h5-jjsg-cdn5.123u.com/"
    ],


    isInited: false,
    Init:function()
    {
		if(VersionConfig.IsUseWebRes && VersionConfig.UrlBasePath)
		{
			Laya.URL.basePath = VersionConfig.UrlBasePath;
        }

        if(!Engine.borwer.isWXGame)
        {
            VersionConfig.IsEnableWx = false;
            // VersionConfig.IsUseZip = true;
            // VersionConfig.IsUseCdnList = true;
            // VersionConfig.IsUseWebRes = true;
        }
        
        return;
        if(this.isInited)
        {
            return;
        }
        this.isInited = true;
        if(Engine.borwer.isWXGame)
        {
            // VersionConfig.IsUseZip = true;
            // VersionConfig.IsUseCdnList = true;
            // VersionConfig.IsUseWebRes = true;
        }
        else
        {
            var isWeb = location.origin.eStartsWith("https://");
            if(isWeb)
            {
                VersionConfig.IsUseZip = true;
                VersionConfig.IsUseCdnList = true;
                
                this.RootPath = location.href.replace("index.html", "").replace(location.origin + "/", "");
            }
        }

		if(VersionConfig.IsUseCdnList)
		{
			VersionConfig.IsUseCdnList =  VersionConfig.CDNList && VersionConfig.CDNList.length > 0;
        }
        
		if(VersionConfig.IsUseWebRes && VersionConfig.UrlBasePath)
		{
			Laya.URL.basePath = VersionConfig.UrlBasePath;
        }

        
		if(Engine.borwer.isWXGame)
		{
			if(Laya.MiniAdpter)
			{
				Laya.MiniAdpter.nativefiles =
				[
				  "res/fgui/GameLaunch.bin",
				  "res/fgui/GameLaunch_atlas0.png",
				  "res/fgui/GameLaunch_atlas_upoiw2g.jpg",
				];
			}
		}
        
    }
}
window.VersionConfig = VersionConfig;