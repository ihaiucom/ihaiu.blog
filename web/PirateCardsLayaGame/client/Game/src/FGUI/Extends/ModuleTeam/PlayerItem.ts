/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlayerItemStruct from "../../Generates/ModuleTeam/PlayerItemStruct";
import Teamer = proto.Teamer;
import Game from "../../../Game";
import { HeroWindowOpenType } from "../../../GameModule/DataEnums/HeroType";
import { MenuId } from "../../../GameModule/MenuId";
import { SecretLandInfo } from '../../../GameModule/DataModels/SecretLandModel';

export default class PlayerItem extends PlayerItemStruct
{
    DataSource:Teamer;

    /*----------------------默认视图接口---------------------------*/
    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_btnCancel.onClick(this, this.CancelTeamer);
        this.m_imgHero.onClick(this, this.ChangeHero);
        this.m_btnTalent.onClick(this, this.ChangeTalent);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_btnCancel.offClick(this, this.CancelTeamer);
        this.m_imgHero.offClick(this, this.ChangeHero);
        this.m_btnTalent.offClick(this, this.ChangeTalent);
        
        this.Reset();
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 踢人 */
    private CancelTeamer()
    {
        if (Game.moduleModel.team.IsMatching()) 
        {
            Game.system.toastText("匹配中，无法踢人！");
        }
        else
        {
            let data = this.DataSource;
            Game.sender.team.TeamKick(data.gamer.id);
        }
    }

    /** 切换英雄 */
    private ChangeHero()
    {
        let data = this.DataSource;
        if (data.gamer.id != Game.user.id) 
        {
            Game.system.TeamPlayerShow(data);
        }
        else if (Game.moduleModel.team.IsMatching()) 
        {
            Game.system.toastText("匹配中，无法切换英雄！");
        }
        else
        {
            let params = [HeroWindowOpenType.Team, 0, [data.hero.id], this.SenderChange]
            Game.menu.open(MenuId.Hero, params);
        }
    }

    /** 切换天赋技能 */
    private ChangeTalent()
    {
        let data = this.DataSource;
        if (data.gamer.id != Game.user.id) 
        {
            
        }
        else if (Game.moduleModel.team.IsMatching()) 
        {
            Game.system.toastText("匹配中，无法切换技能！");
        }
        else
        {
            // 切换英雄技能
        }
    }

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.DataSource = null;
        this.m_Type.selectedIndex = 0;
    }

    /** 设置玩家信息 */
    private SetTeamerInfo()
    {
        let data   = this.DataSource;
        let hero   = data.hero;
        let gamer  = data.gamer;

        let model  = Game.moduleModel.team;

        let heroconfig   = Game.config.hero.getConfig(hero.id);
        let avatarconfig = Game.config.avatar.getConfig(heroconfig.icon);

        this.m_imgHero.icon  = avatarconfig.heroTeamImgUrl;
        this.m_imgTitle.icon = avatarconfig.heroTeamNameUrl;

        this.m_labHero.text = hero.name;
        this.m_labLv.text   = String(hero.level);
        this.m_labName.text = gamer.name;
        
        this.m_imgHelp.visible  = data.isHelper;
        this.m_labReady.visible = data.isReady || model.IsLeader(data.gamer.id);
        this.m_btnCancel.visible   = model.IsLeader();

        this.m_star.m_starNum.selectedIndex = (hero.star);
        this.m_Status.selectedIndex = gamer.state; 
    }

    /** 发送协议替换英雄 */
    private SenderChange(heroid:number)
    {
        if (Game.moduleModel.team.GetTeam()) 
        {
            let hero = Game.moduleModel.hero.GetData(heroid);
            Game.sender.team.TeamSetHero(hero); 
        }
        else
        {
            Game.moduleModel.hero.teamSelectHeroId = heroid;
            Game.event.dispatch("HEROS_CHANGE");
        }
    }   

    /*public----------------------外部接口---------------------------*/
    /** 渲染Item */
    public RenderItem(datasouce:Teamer, index: number)
    {
        this.DataSource = datasouce;

        if (datasouce) 
        {
            let model = Game.moduleModel.team;

            if (model.IsLeader(datasouce.gamer.id)) 
            {
                this.m_Type.selectedIndex = 1;
            } else {
                this.m_Type.selectedIndex = model.IsLeader() ? 2: 3;
            }
            if(this.m_View.selectedPage == 'secretland')
            {
                let infoData = SecretLandInfo.Create(datasouce.secretLand);
                let checkPointConfig = Game.config.checkPoint.getConfig(infoData.checkPointID)

                this.m_keystone.text = checkPointConfig.name + infoData.keyStone + "级";
            }
            this.SetTeamerInfo();
        } 
        else 
        {
            this.m_Type.selectedIndex = 0;
        }
        
    }

    public SetViewType(page: string)
    {
        this.m_View.setSelectedPage(page);
    }
}