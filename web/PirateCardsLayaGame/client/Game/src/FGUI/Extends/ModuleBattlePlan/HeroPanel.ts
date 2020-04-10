/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroPanelStruct from "../../Generates/ModuleBattlePlan/HeroPanelStruct";
import BattlePlanModel from "../../../GameModule/DataModels/BattlePlanModel";
import Log from "../../../GameFrame/Log/Log";
import Game from "../../../Game";
import HeroGroupPosData from "../../../GameModule/DataStructs/HeroGroupPosData";
import { MenuId } from "../../../GameModule/MenuId";
import { HeroWindowOpenType } from "../../../GameModule/DataEnums/HeroType";
import GameLog, { EnumLogLevel } from "../../../GameLog";
import GameEventKey from "../../../GameEventKey";

export default class HeroPanel extends HeroPanelStruct
{
    /** 对应自己是第几个下标 */
    public index : number = -1
    /** 配置里的uid */
    public teamUid : number = -1
    /** 对应总数据 */
    private model : BattlePlanModel;

    private nowHeroID = 0;
    /**
     * 
     * @param index 
     * @param teamIndex 
     */
    public Init(index : number, teamIndex : number)
    {
        this.index = index;
        this.model = Game.moduleModel.battlePlan;
        this.SetTeamIndex(teamIndex);
        this.RefreshHero(teamIndex);
    }
    
    public dispose()
    {
        this.Reset();
    }
    
    public Reset()
    {
        this.index = -1;
        this.teamUid = -1;
        this.model = null;
        this.nowHeroID = 0;
    }
    
    public onWindowShow()
    {
        this.m_btn_centerChooseHero.onClick(this, this.ChooseNewHero);
        this.m_com_heroMsg.m_img_background.onClick(this, this.ChooseNewHero);
    }

    public onWindowHide()
    {
        this.m_btn_centerChooseHero.offClick(this, this.ChooseNewHero);
        this.m_com_heroMsg.m_img_background.offClick(this, this.ChooseNewHero);
    }

    public RefreshHero(teamIndex : number)
    {
        if(this.index == -1)
        {
            Log.Error("heroPanel初始化失败，index下标为-1");
            return;
        }
        let model = Game.moduleModel.battlePlan;
        let heroGroupData = model.GetHeroInfo(teamIndex, this.index);
        this.SetTeamIndex(teamIndex);
        if(heroGroupData == null)
        {
            this.SetState("lock");
            let config = Game.config.heroTeam.getConfig(teamIndex);
            if(!config || !config.zhCnDes || !config.zhCnDes[this.index])
            {
                return;
            }
            let hitInfo = config.zhCnDes[this.index];
            if(hitInfo != "0")
            {
                this.m_textTeamUnlcok.text = hitInfo;
            }
            else
            {
                this.m_textTeamUnlcok.text = "";
            }

        }
        else 
        {
            if(heroGroupData.heroId == 0)
            {
                this.SetState("unLock");
                this.nowHeroID = 0;
            }
            else 
            {
                this.ChoosedHero(heroGroupData, teamIndex);
            }
        }
    }

    /**
     * 切换技能下标
     * @param skillIndex 技能下标
     */
    public ChangeCommonSkill(skillIndex : number)
    {
        if(this.m_lock.selectedPage == "choosed")
        {
            this.m_com_heroMsg.ChangeCommonSkill(skillIndex);
        }
    }

    /**
     * 设置这个英雄所属的队伍下标
     * @param index 
     */
    private SetTeamIndex(index : number)
    {
        this.teamUid = index;
    }

    /**
     * 换新的英雄，打开英雄面板
     * @param teamIndex 
     * @param heroIndex 
     * @param heroId 
     */
    private ChooseNewHero()
    {
        let teamIndex = this.teamUid;
        let index = this.index;
        let callback = function onSender(id: int, isDown: boolean = false) {
            // isDown是卸下意思
            let heroId = isDown ? 0 : id;
            Game.sender.battlePlan.BattleChangeHero(teamIndex, index, heroId);
        }
        let model = Game.moduleModel.battlePlan;
        if(!model)
        {
            return;
        }
        let data = model.GetTeamInfo(teamIndex);
        if(!data)
        {
            return;
        }
        let listHeroID = [];
        let values = data.heroGroupPosDict.getValues();
        for(let i = 0 ; i < values.length ; i ++)
        {
            listHeroID.push(values[i].heroId);
        }
        let params = [HeroWindowOpenType.BattlePlan, this.nowHeroID, listHeroID, callback]
        Game.menu.open(MenuId.Hero, params);

        if(index == 1)
        {
            Game.event.dispatch(GameEventKey.GameFrame_BattlePlanSecondHero);
        }
    }

    /**
     * 换英雄
     * @param heroGroupData 
     */
    private ChoosedHero(heroGroupData : HeroGroupPosData, teamIndex : number)
    {
        this.SetState("choosed");
        let configData = Game.config.hero.getConfig(heroGroupData.heroId);
        this.nowHeroID = heroGroupData.heroId;

        let data = Game.moduleModel.hero.GetData(heroGroupData.heroId);

        if(!data)
        {
            GameLog.Log(EnumLogLevel.Error, "获取英雄数据失败，请检查");
            return;
        }

        // TODO等级以后要接其他人的
        this.m_com_heroMsg.Init(configData.name, data.level, data.star, this.nowHeroID, teamIndex, heroGroupData.pos, heroGroupData.skillId);
    }
    /**
     * 设置状态
     * @param name 
     */
    private SetState(name : string)
    {
        this.m_lock.setSelectedPage(name);
    }
}
