/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EnemyViewStruct from "../../Generates/GameWar3DUI/EnemyViewStruct";
import { ComponentProp } from "../../../GameWar/Logic/EcsComponents/ComponentProp";
import HeroButton from "./HeroButton";
import { Entity } from "../../../GameWar/CoreLib/ECS/Entity";
import { ComponentSkillParam } from "../../../GameWar/Logic/EcsComponents/ComponentSkillParam";
import GameLog, { EnumLogLevel } from "../../../GameLog";
import Game from "../../../Game";
import { InputManager } from "../../../GameWar/Logic/Utils/InputManager";
import InputDefine from "../../../GameWar/Logic/Enum/InputDefine";
import GameEventKey from "../../../GameEventKey";

export default class EnemyView extends EnemyViewStruct
{
    private heroList:Entity[];

    private selectHero:HeroButton;

    public playerEntity:Entity;
    /** 表示pos的位置 */
    private _iPos : number

    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        this.m_listHero.setItemRenderer(this.ItemHeroRender, this);
        
        this.m_labName.text = "街机三国";
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_listHero.off(fgui.Events.CLICK_ITEM, this, this.ItemHeroClick);
    }

    /**
     * 
     * @param pos 玩家在下发list里所处的位置
     */
    public Init(pos : number)
    {
        let matchInfo = Game.moduleModel.match.matchInfo;
        if(!matchInfo || matchInfo.gamers.length - 1 < pos)
        {
            return;
        }
        this._iPos = pos;
        let info = matchInfo.gamers[pos];
        this.SetName(info.mini.name);
    }

    public InitChangeClick()
    {
        this.m_listHero.on(fgui.Events.CLICK_ITEM, this, this.ItemHeroClick);
    }

    /** 设置英雄列表 */
    setHeroInfo(list:Entity[])
    {
        this.heroList = list;
        this.m_listHero.numItems = list.length;

        if (list.length > 0) 
        {
            this.selectHero = <HeroButton>this.m_listHero.getChildAt(0);
        }
    }

    updateCD()
    {
        // let herolist    = this.heroList;
        // for(let i = 1; i < herolist.length; i ++)
        // {
        //     if(!herolist[i])
        //         continue;

        //     let skillparam  = herolist[i].getComponent(ComponentSkillParam);
        //     let skill   = skillparam.skillGroupData.data.get(EnmuSkillType.Change);
        //     let button  = <HeroButton>this.m_listHero.getChildAt(i);
        //     if (skill && button) 
        //     {
        //         button.updateCD(skill.CDTime / IntMath.BaseCalFactor, skill.BaseCDTime / IntMath.BaseCalFactor);
        //     }
        // }

    }

    updateView(prop: ComponentProp):void
    {
        let skillparam  = prop.getComponent(ComponentSkillParam);        
        if(!skillparam || !skillparam.skillGroupData)
        {
            GameLog.Log(EnumLogLevel.Error, "角色没有技能数据！")
            return;
        }
        if(!this.selectHero)
        {
            return;
        }
        
        this.selectHero.m_progressHP.value = (prop.HPView / prop.HPMaxView) * 100;

        // 血量
        this.m_progressHP.value = prop.HPView;
        this.m_progressHP.max   = prop.HPMaxView;

        if (prop.HPView == 0) 
        {
            // this.selectHero.m_state.selectedIndex = 2;
        } 
        else 
        {
            //蓝量
            this.m_progressMP.value = prop.MPView;
            this.m_progressMP.max   = prop.MPMaxView;
        }

        
    }

    /**
     * 
     * @param name 设置名字
     */
    public SetName(name : string = "")
    {
        if(!name || name == "")
        {
            return;
        }
        this.m_labName.text = name;
    }

    private ItemHeroClick(item:HeroButton)
    {
        if (item.isCD) 
        {
            return;
        }

        switch (item.index) 
        {
            case 1:
                InputManager.Get().keyDownScreen(InputDefine.FUNCTION_KEY11);
                Game.event.dispatch(GameEventKey.GameFrame_GuideChangeHero);
                break;
            case 2:
                InputManager.Get().keyDownScreen(InputDefine.FUNCTION_KEY12);
                break;
            default:
                break;
        }
    }

    /** 刷新英雄列表 */
    private ItemHeroRender(index: number, item:HeroButton)
    {
        item.index = index;
        item.RenderItem(this.heroList[index]);
    }
}