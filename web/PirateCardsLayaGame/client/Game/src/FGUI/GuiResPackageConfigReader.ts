/////////////////////////////////////
// ihaiu.GenerateFguiResPackageConfig生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GuiResPackageConfig from "./GuiResPackageConfig";

// =====================
// fgui包资源配置列表
// ---------------------
export default class GuiResPackageConfigReader
{
    // 字典
    dict:Dictionary<string, GuiResPackageConfig> = new Dictionary<string, GuiResPackageConfig>();

    // 添加配置
    addconfig(config: GuiResPackageConfig)
    {
        this.dict.add(config.packageName, config);
    }

    // 获取配置
    getconfig(packageName: string)
    {
        return this.dict.getValue(packageName);
    }



    // 初始化
    install()
    {
        let config:GuiResPackageConfig;

		
		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "GameHome";
            config.resBin = "GameHome.bin";
            config.resAtlas.push("GameHome_atlas0.png");
            config.resAtlas.push("GameHome_atlas_sqzy0.jpg");
            config.resAtlas.push("GameHome_atlas_sqzy1.jpg");
            config.resAtlas.push("GameHome_atlas_sqzy15.png");
            config.sounds.push("GameHome_sqzy7p.mp3");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "GameLaunch";
            config.resBin = "GameLaunch.bin";
            config.resAtlas.push("GameLaunch_atlas0.png");
            config.resAtlas.push("GameLaunch_atlas_qyvzw2s.png");
            config.resAtlas.push("GameLaunch_atlas_tnlhw3c.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleLogin";
            config.resBin = "ModuleLogin.bin";
            config.resAtlas.push("ModuleLogin_atlas0.png");
            config.resAtlas.push("ModuleLogin_atlas_je283m.png");
            config.resAtlas.push("ModuleLogin_atlas_je283n.png");
            config.resAtlas.push("ModuleLogin_atlas_tnlh35.png");
            config.resAtlas.push("ModuleLogin_atlas_tnlh3d.png");
            config.resAtlas.push("ModuleLogin_atlas_tnlh3e.png");
            config.resAtlas.push("ModuleLogin_atlas_tnlh3j.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Sound";
            config.resBin = "Sound.bin";
            this.addconfig(config)





    }
}