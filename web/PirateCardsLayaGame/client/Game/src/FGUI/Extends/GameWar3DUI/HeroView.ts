/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroViewStruct from "../../Generates/GameWar3DUI/HeroViewStruct";
import { ComponentProp } from "../../../GameWar/Logic/EcsComponents/ComponentProp";
import HeroButton from "./HeroButton";
import { ComponentCharacterInput } from "../../../GameWar/Logic/EcsComponents/ComponentCharacterInput";
import InputDefine from "../../../GameWar/Logic/Enum/InputDefine";
import { ComponentSkillParam } from "../../../GameWar/Logic/EcsComponents/ComponentSkillParam";
import { EnumSkillType } from "../../../GameWar/Logic/Enum/EnumSkill";
import { Entity } from "../../../GameWar/CoreLib/ECS/Entity";
import { ComponentPlayerInput } from "../../../GameWar/Logic/EcsComponents/ComponentPlayerInput";
import { InputManager } from "../../../GameWar/Logic/Utils/InputManager";
import War3DWindowUI from "./War3DWindowUI";
import IntMath from "../../../GameWar/CoreLib/IntMath/IntMath";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";

export default class HeroView extends HeroViewStruct
{
    private heroList:Entity[];

    private selectHero:HeroButton;

    private _iPos : number = -1;

    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
        this.m_listHero.setItemRenderer(this.ItemHeroRender, this);
        
        this.m_labName.text = "街机三国";
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        // this.m_labName.text = Game.user.name;
        this.m_btnSetting.onClick(this, this.OnSetting);
        // this.m_btnFight.onClick(this, this.OnFighting);
        (<War3DWindowUI>this.parent).m_settingView.Hide();
        Game.event.add(GameEventKey.GameBattle_onServerError2300, this.onError, this);
        Game.net.gamerNotifyNewPVPResultS2C.on(this.CloseSetting, this);
        // this.InitChangeClick();
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_btnSetting.offClick(this, this.OnSetting);
        // this.m_btnFight.offClick(this, this.OnFighting);
        this.m_listHero.off(fgui.Events.CLICK_ITEM, this, this.ItemHeroClick);

        Game.event.remove(GameEventKey.GameBattle_onServerError2300, this.onError, this);
        Game.net.gamerNotifyNewPVPResultS2C.off(this.CloseSetting, this);

        this._iPos = -1;
    }

    public InitChangeClick()
    {
        this.m_listHero.on(fgui.Events.CLICK_ITEM, this, this.ItemHeroClick);
    }

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

    
    /** 设置英雄列表 */
    setHeroInfo(list:Entity[])
    {
        this.heroList = list;
        this.m_listHero.numItems = list.length;

        if (list.length > 0) 
        {
            this.selectHero = <HeroButton>this.m_listHero.getChildAt(0);
        }
        // Tween.to()
    }

    updateCD()
    {
        let herolist    = this.heroList;
        for(let i = 1; i < herolist.length; i ++)
        {
            if(!herolist[i])
                continue;

            let skillparam  = herolist[i].getComponent(ComponentSkillParam);
            let skill   = skillparam.skillGroupData.data.get(EnumSkillType.Change);
            let button  = <HeroButton>this.m_listHero.getChildAt(i);
            if (skill && button) 
            {
                button.updateCD(skill.CDTime / IntMath.BaseCalFactor, skill.BaseCDTime / IntMath.BaseCalFactor);
            }
        }

    }

    updateView(prop: ComponentProp):void
    {
        let skillparam  = prop.getComponent(ComponentSkillParam);        
        if(!skillparam || !skillparam.skillGroupData)
        {
            console.error("角色没有技能数据！")
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

            this.m_progressMP.value = prop.MPView;
            // console.log(this.m_progressMP.value);
            this.m_progressMP.max   = prop.MPMaxView;
            // console.log(this.m_progressMP.max);
            // this.m_progressMP.perce
        }

        
    }
    /**
     * 重新刷一次对应的视图
     */
    public UpdateHeroUI()
    {
        let list = this.m_listHero;
        let len = list.numItems;
        for(let i = 0 ; i < len ; i ++)
        {
            let button  = <HeroButton>this.m_listHero.getChildAt(i);
            button.RenderItem(this.heroList[i]);
        }
        
    }
    /**
     * 
     * @param name 设置名字
     */
    private SetName(name : string = "")
    {
        if(!name || name == "")
        {
            return;
        }
        this.m_labName.text = name;
    }

    /** 刷新英雄列表 */
    private ItemHeroRender(index: number, item:HeroButton)
    {
        item.index = index;
        item.RenderItem(this.heroList[index]);
    }

    
    /** 点击英雄列表 */
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


    /** 打开设置 */
    private OnSetting()
    {
        (<War3DWindowUI>this.parent).m_settingView.Show();
    }

    private CloseSetting()
    {
        (<War3DWindowUI>this.parent).m_settingView.Hide();
    }

    private onError()
    {
        fgui.GRoot.inst.closeModalWait();
        (<War3DWindowUI>this.parent).m_settingView.Show(1);
    }

    // /** 开启自动战斗 */
    // private OnFighting()
    // {
        
    // }

}