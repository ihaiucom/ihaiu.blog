var VersionConfig =
{
  // 缓存版本编号
  VersionCacheCode: 61,
  // 应用版本号
  AppVersion : "v1.0.0.0",
  // 资源版本好
  ResVersion : "v1.0.0.0",
  // 是否是调试版本
  IsDebugVer: true,
  // 是否是微信登录
  IsEnableWx: false,
  // 是否使用Zip
  IsUseZip: true,
  // 是否开启新手引导
  IsOpenGuide: false,
  // 单人PVE是否为本地
  IsOpenPVE_M1Local : false,

  // 是否开启身份验证
  IsOpenIDCard: false,
  // 是否使用网络资源
  IsUseWebRes: true,
  // 网络资源路径
  // UrlBasePath: "https://h5-jjsg-cdn.123u.com/web_beta/",
  // UrlBasePath: "http://192.168.11.1:8900/bin/",
  UrlBasePath: "https://ihaiu.gitee.io/gameweb/PirateCardsLayaGame/",
  
  // 海外CDN
  // UrlBasePath: 'http://h5-hwjjsg-cdn.123u.com/testlaya/web/',
  // UrlBasePath: "http://192.168.1.8:8900/bin/",

  // 网络资源路径 是否使用多个CDN
  IsUseCdnList: false,
  // 网络资源路径 CDN 资源根目录路径
  RootPath: "web_beta/",
  // 网络资源路径 多个CDN列表
  CDNList:
    [
      "https://h5-jjsg-cdn.123u.com/",
      "https://h5-jjsg-cdn1.123u.com/",
      "https://h5-jjsg-cdn2.123u.com/",
      "https://h5-jjsg-cdn3.123u.com/",
      "https://h5-jjsg-cdn4.123u.com/",
      "https://h5-jjsg-cdn5.123u.com/",
      "https://h5-jjsg-cdn6.123u.com/",
      "https://h5-jjsg-cdn7.123u.com/",
      "https://h5-jjsg-cdn8.123u.com/",
      "https://h5-jjsg-cdn9.123u.com/",
      "https://h5-jjsg-cdn10.123u.com/",
    ],


  isInited: false,
  Init: function () {
    if (this.isInited) {
      return;
    }
    this.isInited = true;

    if (window['wx']) {
      // VersionConfig.IsUseZip = true;
      // VersionConfig.IsUseCdnList = true;
      // VersionConfig.IsUseWebRes = true;
    }
    else {
      var isWeb = location.origin.eStartsWith("https://");
      if (isWeb) {
        VersionConfig.IsUseZip = true;
        VersionConfig.IsUseCdnList = true;
      }
    }

    // if (VersionConfig.IsUseCdnList) {
    //   VersionConfig.IsUseCdnList = VersionConfig.CDNList && VersionConfig.CDNList.length > 0;
    // }

    if (VersionConfig.IsUseWebRes && VersionConfig.UrlBasePath) {
      Laya.URL.basePath = VersionConfig.UrlBasePath;
    }
    Laya.URL.basePath = VersionConfig.UrlBasePath;

    if (Laya.MiniAdpter) {
      Laya.MiniAdpter.nativefiles =
        [
          "res/fgui/GameLaunch.bin",
          "res/fgui/GameLaunch_atlas0",
          "res/fgui/GameLaunch_atlas_qyvzw2s.png",
          "res/fgui/GameLaunch_atlas_tnlhw3c.png",
          "res/sprite/launchlogo.png",
        ];
    }

  }

};
window.VersionConfig = VersionConfig;
