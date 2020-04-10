/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TestWarViewStruct from "../../Generates/GameTestView/TestWarViewStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import Game from "../../../Game";
import { PropId } from "../../../GameFrame/Props/PropId";
import { War } from "../../../GameWar/Logic/War";
import { MenuId } from "../../../GameModule/MenuId";
import { LauncherParameter } from "../../../GameWar/Logic/Struct/LauncherParameter";
import BehaviourBattleManager from "../../../GameWar/Logic/EcsBehaviours/BehaviourBattleManager";
import { EnumBossType } from "../../../GameWar/Logic/Enum/EnumBossType";
import { EnumCellEnemyShowType } from "../../../GameWar/Logic/Enum/MapEnums";
import SceneConfigManager from "../../../GameWar/Logic/Struct/ConfigManagers/SceneConfigManager";
import IntMath from "../../../GameWar/CoreLib/IntMath/IntMath";
import { ComponentTransform } from "../../../GameWar/Logic/EcsComponents/ComponentTransform";
import { ComponentProp } from "../../../GameWar/Logic/EcsComponents/ComponentProp";
import { WarLoader } from "../../../GameWar/View/WarLoader";

export default class TestWarView extends TestWarViewStruct
{
    private dialogCtrl: DialogCtrl;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);
        this.dialogCtrl.setCloseBtnEvent();
    }

    // 窗口显示
    onWindowShow(): void
    {  
        this.m_section.m_title.text = "1";
        this.m_capter.m_title.text = "1";
        this.m_myRole1.m_title.text = "1001";
        this.m_myRole2.m_title.text = "";
        this.m_myRole3.m_title.text = "";
        this.m_myHP.m_title.text = "1000";
        this.m_myMP.m_title.text = "200";
        this.m_myAttack.m_title.text = "200";
        this.m_otherRole.m_title.text = "1001";
        this.m_otherHp.m_title.text = "1000";
        this.m_otherMP.m_title.text = "200";
        this.m_otherAttack.m_title.text = "200";
        this.m_otherAI.m_title.text = "-1"
        
        this.m_start.onClick(this, this.TestStart);
        this.m_close.onClick(this, this.Close);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.m_start.offClick(this, this.TestStart);
    }

    public Open()
    {
        this.dialogCtrl.open();
    }

    public Close()
    {
        this.dialogCtrl.close();
    }

    /**
     * 开始测试
     */
    private async TestStart()
    {
        let section = parseInt(this.m_section.m_title.text == "" ? "1" : this.m_section.m_title.text);
        let capter = parseInt(this.m_capter.m_title.text == "" ? "1" : this.m_capter.m_title.text);
        let heroList = [];
        if(this.m_myRole1.m_title.text != "")
        {
            let role1 = parseInt(this.m_myRole1.m_title.text);
            heroList.push(role1);
        }
        if(this.m_myRole2.m_title.text != "")
        {
            let role2 = parseInt(this.m_myRole2.m_title.text);
            heroList.push(role2);
        }
        if(this.m_myRole3.m_title.text != "")
        {
            let role3 = parseInt(this.m_myRole3.m_title.text);
            heroList.push(role3);
        }
        if(heroList.length == 0)
        {
            Game.system.toastText("请输入创建的玩家");
            return;
        }

        let matchInfo = new proto.MatchInfo(
            {
                frameDelta:33,
                minFrameDelta:30,
                inputDelta:50,
                pvpType:proto.PVPType.PVE_M1,
                threadRecv:true,         
                session:"",   
                gamers:[
                ],
            }
        ); 

        let myHP = Number(this.m_myHP.m_title.text);
        let myMP = Number(this.m_myMP.m_title.text);
        let myPhyAtt = Number(this.m_myAttack.m_title.text);
        let myManaAtt = Number(this.m_myAttack.m_title.text);
        let myHeroList = [];
        for(let i = 0 ; i < heroList.length ; i ++)
        {
            let item = new proto.GamerHero(
                {
                    id: heroList[i],
                    baseProp: [
                        new proto.Prop({id: PropId.HPMax, value: myHP}),
                        new proto.Prop({id: PropId.MPMax, value: myMP}),
                        new proto.Prop({id: PropId.PAtt, value: myPhyAtt}),
                        new proto.Prop({id: PropId.MAtt, value: myManaAtt})
                    ],
                    allProp: [
                        new proto.Prop({id: PropId.HPMax, value: myHP}),
                        new proto.Prop({id: PropId.MPMax, value: myMP}),
                        new proto.Prop({id: PropId.PAtt, value: myPhyAtt}),
                        new proto.Prop({id: PropId.MAtt, value: myManaAtt})
                    ]
                }
            )
            myHeroList.push(item);
        }
        let gamerMatch1 = new proto.GamerMatch(
            {
                ai:false,
                teamId:0,
                mini: new proto.GamerMini({
                    id:1,
                    name:"test1",
                    level:1,
                    lsid:1,
                    state: 3,
                    avatar: "3",
                    channel:  "mine"
                }),
                heroList: myHeroList
            }
        );
        
        matchInfo.gamers.push(gamerMatch1);

        matchInfo.gamers[0].mini.id = Game.user.id;
        matchInfo.gamers[0].mini.name = Game.user.name;
        matchInfo.matchTime = 60 * 60 * 60;
        matchInfo.time = 0;

        let launcherParam = new LauncherParameter();
        launcherParam.isLocalSignal = true;
        launcherParam.selfPos = 0;
        launcherParam.matchInfo = matchInfo;
        Game.moduleModel.match.matchInfo = launcherParam.matchInfo;
        launcherParam.chapter = section;
        launcherParam.sectionIndex = capter;
        let config = Game.config.checkPoint.getConifgByChapterAndMap(section, capter);
        if(config)
        {
            launcherParam.matchInfo.checkPointId = config.id;
        }
        if(this.m_otherRole.m_title.text != "")
        {
            WarLoader.Instance.AddExtra(Number(this.m_otherRole.m_title.text == "" ? "1001" : this.m_otherRole.m_title.text))
        }
        War.init();
        await War.launch(launcherParam, true);
        
        if(this.m_otherRole.m_title.text != "")
        {
            let otherRoleId = Number(this.m_otherRole.m_title.text == "" ? "1001" : this.m_otherRole.m_title.text);
            let otherHP = Number(this.m_otherHp.m_title.text) * IntMath.BaseCalFactor;
            let otherMP = Number(this.m_otherMP.m_title.text) * IntMath.BaseCalFactor;
            let otherPhyAtt = Number(this.m_otherAttack.m_title.text) * IntMath.BaseCalFactor;
            let otherManaAtt = Number(this.m_otherAttack.m_title.text) * IntMath.BaseCalFactor;
            let isAi = Number(this.m_otherAI.m_title.text);
            let cellEnemy = new CellEnemy();
            cellEnemy.UniqueID = 50000000005;
            cellEnemy.CharacterID = otherRoleId;
            cellEnemy.Team = 2;
            cellEnemy.Face = 0;
            cellEnemy.BossType = EnumBossType.Monster
            cellEnemy.CreateType = EnumCellEnemyShowType.Always;
            cellEnemy.ShowType = 10000;
            cellEnemy.WfShowAndRunPosX = 0;
            cellEnemy.WfShowAndRunPosZ = 0;
            cellEnemy.AIType = isAi;
            cellEnemy.IsCanNotAttackFall = false;
            let birthPos = SceneConfigManager.GetPlayerBirthPos(1, 2);
            {
                
                if (birthPos != null)
                {
                    cellEnemy.WfPositionX = birthPos.WfPositionX;
                    cellEnemy.WfPositionZ = birthPos.WfPositionZ; 
                }
                else
                {
                    cellEnemy.WfPositionX = -1400 * IntMath.BaseCalFactor;
                    cellEnemy.WfPositionZ = 400 * IntMath.BaseCalFactor + 1 * 50 * IntMath.BaseCalFactor; 
                }
            }
            cellEnemy.PropertyConfigID = 0;
            cellEnemy.AIAbility = 60;
            cellEnemy.BloodStripsNum = 3;
            let listProp = [[]];
            let hpMax = [PropId.HPMax, otherHP];
            let hp = [PropId.HP, otherHP];
            let mp = [PropId.MPMax, otherMP];
            let phyAtt = [PropId.PAtt, otherPhyAtt];
            let maAtt = [PropId.MAtt, otherManaAtt];
            listProp.push(hpMax);
            listProp.push(hp);
            listProp.push(mp);
            listProp.push(phyAtt);
            listProp.push(maAtt);
            for(let simulation of War.launcher.logicSimulationList)
            {
                let creater = simulation.getBehaviour(BehaviourBattleManager);
                creater.BuildOneEnemy(cellEnemy, true);
                let list = simulation.entityWorld.getComponents(ComponentTransform);
                for(let i = 0 ; i < list.length; i ++)
                {
                    let item = list[i];
                    if(item && item.uniqueID == cellEnemy.UniqueID)
                    {
                        let prop = item.getComponent(ComponentProp);
                        if(prop)
                        {
                            prop.init(listProp);
                            break;
                        }
                    }
                }
            }
        }
        
        
        Game.menu.close(MenuId.Login);
        this.Close();
    }

    

}
