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
            config.packageName = "BattleResult";
            config.resBin = "BattleResult.bin";
            config.resAtlas.push("BattleResult_atlas0.png");
            config.resAtlas.push("BattleResult_atlas_qyvtx.png");
            config.resAtlas.push("BattleResult_atlas_qyvty.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "CommonBase";
            config.resBin = "CommonBase.bin";
            config.resAtlas.push("CommonBase_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "CommonFx";
            config.resBin = "CommonFx.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "CommonGame";
            config.resBin = "CommonGame.bin";
            config.resAtlas.push("CommonGame_atlas0.png");
            config.resAtlas.push("CommonGame_atlas0_1.png");
            config.resAtlas.push("CommonGame_atlas_gf6222.png");
            config.resAtlas.push("CommonGame_atlas_l9j14e.png");
            config.resAtlas.push("CommonGame_atlas_pwntz5a.png");
            config.resAtlas.push("CommonGame_atlas_pwntz5b.png");
            config.resAtlas.push("CommonGame_atlas_pwntz5h.png");
            config.resAtlas.push("CommonGame_atlas_rvbr3l.png");
            config.resAtlas.push("CommonGame_atlas_rvbr3m.png");
            config.resAtlas.push("CommonGame_atlas_rvbr3u.png");
            config.resAtlas.push("CommonGame_atlas_rvbr3v.png");
            config.resAtlas.push("CommonGame_atlas_tzxbu.png");
            config.resAtlas.push("CommonGame_atlas_tzxbv.png");
            config.resAtlas.push("CommonGame_atlas_tzxbx.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Effect_1001_Dianguanglongqi_Skin1__Skill4_13";
            config.resBin = "Effect_1001_Dianguanglongqi_Skin1__Skill4_13.bin";
            config.resAtlas.push("Effect_1001_Dianguanglongqi_Skin1__Skill4_13_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Effect_1002_Zhanji_Skin1__Skill4_13";
            config.resBin = "Effect_1002_Zhanji_Skin1__Skill4_13.bin";
            config.resAtlas.push("Effect_1002_Zhanji_Skin1__Skill4_13_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Effect_13001_fade";
            config.resBin = "Effect_13001_fade.bin";
            config.resAtlas.push("Effect_13001_fade_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Effect_13002_321go";
            config.resBin = "Effect_13002_321go.bin";
            config.resAtlas.push("Effect_13002_321go_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Effect_13003_dijiangjipo";
            config.resBin = "Effect_13003_dijiangjipo.bin";
            config.resAtlas.push("Effect_13003_dijiangjipo_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "GameGM";
            config.resBin = "GameGM.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "GameHome";
            config.resBin = "GameHome.bin";
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
            config.packageName = "GameMain";
            config.resBin = "GameMain.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "GameMatchUI";
            config.resBin = "GameMatchUI.bin";
            config.resAtlas.push("GameMatchUI_atlas0.png");
            config.resAtlas.push("GameMatchUI_atlas_i78ti.png");
            config.resAtlas.push("GameMatchUI_atlas_i78tj.png");
            config.resAtlas.push("GameMatchUI_atlas_ozlgw22.png");
            config.resAtlas.push("GameMatchUI_atlas_ozlgw23.png");
            config.resAtlas.push("GameMatchUI_atlas_uqxnw1a.png");
            config.resAtlas.push("GameMatchUI_atlas_uqxnw1d.png");
            config.resAtlas.push("GameMatchUI_atlas_uqxnw1e.png");
            config.resAtlas.push("GameMatchUI_atlas_uqxnw1n.png");
            config.resAtlas.push("GameMatchUI_atlas_waqcp.jpg");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "GamePlayerInfoUI";
            config.resBin = "GamePlayerInfoUI.bin";
            config.resAtlas.push("GamePlayerInfoUI_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "GameSectionsUI";
            config.resBin = "GameSectionsUI.bin";
            config.resAtlas.push("GameSectionsUI_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "GameTestView";
            config.resBin = "GameTestView.bin";
            config.resAtlas.push("GameTestView_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "GameWar3DUI";
            config.resBin = "GameWar3DUI.bin";
            config.resAtlas.push("GameWar3DUI_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "GameWarPrefab";
            config.resBin = "GameWarPrefab.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "GameWarPrefabDebug";
            config.resBin = "GameWarPrefabDebug.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "GameWarUI";
            config.resBin = "GameWarUI.bin";
            config.resAtlas.push("GameWarUI_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "GashaponUI";
            config.resBin = "GashaponUI.bin";
            config.resAtlas.push("GashaponUI_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Lang";
            config.resBin = "Lang.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Lang_en";
            config.resBin = "Lang_en.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Lang_zh-cn";
            config.resBin = "Lang_zh-cn.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Lang_zh_tw";
            config.resBin = "Lang_zh_tw.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleBag";
            config.resBin = "ModuleBag.bin";
            config.resAtlas.push("ModuleBag_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleBattlePlan";
            config.resBin = "ModuleBattlePlan.bin";
            config.resAtlas.push("ModuleBattlePlan_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleCommonSkill";
            config.resBin = "ModuleCommonSkill.bin";
            config.resAtlas.push("ModuleCommonSkill_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleDialogs";
            config.resBin = "ModuleDialogs.bin";
            config.resAtlas.push("ModuleDialogs_atlas0.png");
            config.resAtlas.push("ModuleDialogs_atlas_dx3ty.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleDraug";
            config.resBin = "ModuleDraug.bin";
            config.resAtlas.push("ModuleDraug_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleDuelTemp";
            config.resBin = "ModuleDuelTemp.bin";
            config.resAtlas.push("ModuleDuelTemp_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleEmail";
            config.resBin = "ModuleEmail.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleEquip";
            config.resBin = "ModuleEquip.bin";
            config.resAtlas.push("ModuleEquip_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleHero";
            config.resBin = "ModuleHero.bin";
            config.resAtlas.push("ModuleHero_atlas0.png");
            config.resAtlas.push("ModuleHero_atlas0_1.png");
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
            config.packageName = "ModuleMoney";
            config.resBin = "ModuleMoney.bin";
            config.resAtlas.push("ModuleMoney_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModulePower";
            config.resBin = "ModulePower.bin";
            config.resAtlas.push("ModulePower_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModulePVEHall";
            config.resBin = "ModulePVEHall.bin";
            config.resAtlas.push("ModulePVEHall_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModulePVPHall";
            config.resBin = "ModulePVPHall.bin";
            config.resAtlas.push("ModulePVPHall_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleQuest";
            config.resBin = "ModuleQuest.bin";
            config.resAtlas.push("ModuleQuest_atlas0.png");
            config.resAtlas.push("ModuleQuest_atlas_k1yvx.png");
            config.resAtlas.push("ModuleQuest_atlas_k1yvy.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleRank";
            config.resBin = "ModuleRank.bin";
            config.resAtlas.push("ModuleRank_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleSecretBook";
            config.resBin = "ModuleSecretBook.bin";
            config.resAtlas.push("ModuleSecretBook_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleSecretLand";
            config.resBin = "ModuleSecretLand.bin";
            config.resAtlas.push("ModuleSecretLand_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleSetting";
            config.resBin = "ModuleSetting.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleShop";
            config.resBin = "ModuleShop.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleTeam";
            config.resBin = "ModuleTeam.bin";
            config.resAtlas.push("ModuleTeam_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleWelfare";
            config.resBin = "ModuleWelfare.bin";
            config.resAtlas.push("ModuleWelfare_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Sound";
            config.resBin = "Sound.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "SystemModuleDialog";
            config.resBin = "SystemModuleDialog.bin";
            config.resAtlas.push("SystemModuleDialog_atlas0.png");
            config.resAtlas.push("SystemModuleDialog_atlas_dx3tx.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "SystemModuleGuide";
            config.resBin = "SystemModuleGuide.bin";
            config.resAtlas.push("SystemModuleGuide_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "SystemModuleHome";
            config.resBin = "SystemModuleHome.bin";
            config.resAtlas.push("SystemModuleHome_atlas0.png");
            config.resAtlas.push("SystemModuleHome_atlas_hjoo10.png");
            config.resAtlas.push("SystemModuleHome_atlas_hjooq.png");
            config.resAtlas.push("SystemModuleHome_atlas_i4ke24.png");
            config.resAtlas.push("SystemModuleHome_atlas_szpp1o.png");
            config.resAtlas.push("SystemModuleHome_atlas_szpp1w.jpg");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "SystemModuleMenu";
            config.resBin = "SystemModuleMenu.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "SystemModulePlot";
            config.resBin = "SystemModulePlot.bin";
            config.resAtlas.push("SystemModulePlot_atlas0.png");
            config.resAtlas.push("SystemModulePlot_atlas0_1.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "SystemModuleTask";
            config.resBin = "SystemModuleTask.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "WarSceneMap_czhulin";
            config.resBin = "WarSceneMap_czhulin.bin";
            config.resAtlas.push("WarSceneMap_czhulin_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "_ResImagePic";
            config.resBin = "_ResImagePic.bin";
            config.resAtlas.push("_ResImagePic_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "_ResImageUIV1";
            config.resBin = "_ResImageUIV1.bin";
            config.resAtlas.push("_ResImageUIV1_atlas0.png");
            config.resAtlas.push("_ResImageUIV1_atlas0_1.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "__ResFont";
            config.resBin = "__ResFont.bin";
            config.resAtlas.push("__ResFont_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "__ResImageTmp";
            config.resBin = "__ResImageTmp.bin";
            config.resAtlas.push("__ResImageTmp_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "__Style";
            config.resBin = "__Style.bin";
            this.addconfig(config)





    }
}