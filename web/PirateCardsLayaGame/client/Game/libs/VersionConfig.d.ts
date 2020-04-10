declare class VersionConfig
{
    // 缓存编号
    static VersionCacheCode: number;
    // 应用版本号
    static AppVersion: string;
    // 资源版本好
    static ResVersion: string;
    // 是否是调试版本
    static IsDebugVer: boolean;
    // 是否是微信登录
    static IsEnableWx: boolean;
    // 是否开启新手引导
    static IsOpenGuide: boolean;
    // 是否开启剧情引导
    static IsOpenPlot: boolean;
    // 单人PVE是否为本地
    static IsOpenPVE_M1Local : boolean;
    // 是否开启身份验证
    static IsOpenIDCard: boolean;
    // 是否使用Zip
    static IsUseZip: boolean;
    // 是否使用网络资源
    static IsUseWebRes: boolean;
    // 网络资源路径
    static UrlBasePath: string;
    // 网络资源路径 是否使用多个CDN
    static IsUseCdnList: boolean;
    // 网络资源路径 多个CDN列表
    static CDNList: string[];
    // 网络资源路径 CDN 资源根目录路径
    static RootPath: string;
    // 提审版本标记，关闭部分功能
    static IsReviewVersion: boolean;

    
    /** 是否开启GPUSkin */
    static EnableGPUSkin:boolean;

    static Init();
}