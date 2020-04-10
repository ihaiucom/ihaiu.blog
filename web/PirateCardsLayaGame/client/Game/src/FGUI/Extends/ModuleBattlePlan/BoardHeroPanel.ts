/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BoardHeroPanelStruct from "../../Generates/ModuleBattlePlan/BoardHeroPanelStruct";
import Game from "../../../Game";
import GameLog, { EnumLogLevel } from "../../../GameLog";
import { MenuId } from "../../../GameModule/MenuId";

export default class BoardHeroPanel extends BoardHeroPanelStruct
{

    private _heroGuid : int = -1;

    private _teamUid : int = -1;

    private _heroTeamPos : number;

    private readonly commonskillPath = ""

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.Reset();
    }

    onWindowInited(): void
    {
    }

    // 窗口显示
    onWindowShow(): void
    {   
        this.m_btnCommonSkill.onClick(this, this.ShowCommonSkillPanel);
        let config = Game.config.unlock.getConfig(MenuId.CommonSkill);
        if(config)
        {
            this.m_btnCommonSkill.visible = config.showLevel <= Game.user.level;
        }
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.m_btnCommonSkill.offClick(this, this.ShowCommonSkillPanel);
        this.Reset();
    }

    /**
     * 设置英雄信息
     * @param name 
     * @param level 等级
     * @param star 星数
     * @param heroId 英雄UID
     * @param teamUid 队伍UID
     * @param teamPos 英雄所在队伍的pos
     * @param skillId 通用技能ID
     */
    public Init(name : string, level : number,star : number, heroId : number, teamUid : number, teamPos : number, skillId : number)
    {
        this.m_text_level.text = level.toString();
        this.m_comStars.m_starNum.setSelectedIndex(star);
        this.m_comStars.m_starPos.setSelectedIndex(star);
        this._heroGuid = heroId;
        let heroData = Game.config.hero.getConfig(heroId);
        if(!heroData)
        {
            GameLog.Log(EnumLogLevel.Error, "英雄列表里面没有该英雄，请检查ID为" + heroId);
            return;
        }
        let resId = heroData.icon;
        let resData = Game.config.avatar.getConfig(resId);
        if(!resData)
        {
            GameLog.Log(EnumLogLevel.Error, "资源列表里面没有该资源，请检查ID为" + resId);
            return;
        }
        let nameUrl = resData.heroTeamNameUrl;
        let imgUrl = resData.heroTeamImgUrl;

        let quality = "A";
        if(heroData.quality == 2)
        {
            quality = "S";
        }

        let backGroundUrl = "res/fspriteassets/heroTeam/" + quality + ".png";
        this.m_img_background.url = backGroundUrl;
        if(imgUrl)
        {
            this.m_img_hero.url = imgUrl;
        }
        if(nameUrl)
        {
            this.m_img_name.url = nameUrl;
        }
        this._teamUid = teamUid;
        this._heroTeamPos = teamPos;
        this.ChangeCommonSkill(skillId);
        // this.m_text_heroName.text = name;
        // this.m_text_heroLevel.text = level.toString();

        
    }

    public Reset()
    {
        this._heroGuid = -1;
        this._teamUid = -1;
        this._heroTeamPos = -1;
    }
    /**
     * 更换通用技能
     * @param skillIndex 技能下标
     */
    public ChangeCommonSkill(skillIndex : number)
    {
        if(skillIndex == 0)
        {
            this.m_btnCommonSkill.m_skillCom.url = ""
        }
        else
        {
            let url = "res/fspriteassets/icon/skillIcon/common_" + skillIndex.toString() + ".png";
            this.m_btnCommonSkill.m_skillCom.url = url;
        }

    }

    private ShowCommonSkillPanel()
    {
        let config = Game.moduleModel.battlePlan.GetHeroInfo(this._teamUid, this._heroTeamPos);
        // Game.system.CommonSkillDialog(config.skillId, this._teamUid, config.pos);
        Game.menu.open(MenuId.CommonSkill, config.skillId, this.SendChooseCommonSkill, this)
        // Game.menu.open(MenuId.CommonSkill, config.skillId, this._teamUid, config.pos);
    }

    private SendChooseCommonSkill(skillID : number)
    {
        let config = Game.moduleModel.battlePlan.GetHeroInfo(this._teamUid, this._heroTeamPos);
        Game.sender.battlePlan.BattleChangeSkill(this._teamUid, config.pos, skillID);
    }


}