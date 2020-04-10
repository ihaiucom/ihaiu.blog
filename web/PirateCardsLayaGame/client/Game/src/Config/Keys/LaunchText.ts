// ===========================
// 代码文本--启动游戏加载界面时用，这时还没有加载配置代码。
// 处理框架可以使用
// 其他模块不准在这里添加，可以到TEXT.TS里添加
// ---------------------------
export default class LaunchText
{
    // 进度条提示
    tips = 
    [
    ];

    btnYes = "确定";

    LoadedConfig = "加载配置文件";
    LoadedUI = "加载UI";
    LoadedWar = "加载战斗资源";
    LoadedWarConfig = "加载战斗配置";
    LoadedEnd = "加载完成";



    //==============================================
    // 英文
    //----------------------------------------------
    
    public setLangForEn()
    {
        this.tips = 
        [
        ];
        
        this.btnYes = "Ok";
        
        this.LoadedConfig = "Loading Config...";
        this.LoadedUI = "Loading UI...";
        this.LoadedEnd = "Loading Complete";
    }
}