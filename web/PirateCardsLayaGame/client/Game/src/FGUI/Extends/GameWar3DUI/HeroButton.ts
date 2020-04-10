/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroButtonStruct from "../../Generates/GameWar3DUI/HeroButtonStruct";
import { Entity } from "../../../GameWar/CoreLib/ECS/Entity";
import { ComponentProp } from "../../../GameWar/Logic/EcsComponents/ComponentProp";
import { ComponentCharacterInstructions } from "../../../GameWar/Logic/EcsComponents/ComponentCharacterInstructions";
import Game from "../../../Game";
import Res from "../../../Config/Keys/Res";
import { WarSetting } from "../../../GameWar/Logic/WarSetting";

export default class HeroButton extends HeroButtonStruct
{
    /** 切换英雄的位置索引 */
    public index:number = 0;

    private _isMainPlayer : boolean = false;
    public set isMainPlayer(val : boolean)
    {
        this._isMainPlayer = val;
    }
    public get isMainPlayer() : boolean
    {
        return this._isMainPlayer;
    }

    /** 渲染英雄信息 */
    RenderItem(entity:Entity)
    {
        // 头像
        // let instructions = characterEntity.getComponent(ComponentCharacterInstructions);
        this.isMainPlayer = (this.index == 0);
        let prop = entity.getComponent(ComponentProp);
        this.m_progressHP.value = (prop.HPView / prop.HPMaxView) * 100;
        let state = this.isMainPlayer? 3 : 0;
        state = prop.HPView ? state : 2;
        this.m_state.setSelectedIndex(state);
        let instructions = entity.getComponent(ComponentCharacterInstructions);
        let heroConfig = Game.config.hero;
        let avatarConfig = Game.config.avatar;
        if(instructions && heroConfig && avatarConfig)
        {
            // let heroindex    = (instructions.instruction.id == 1001) ? 0 : 1
            let heroId = instructions.instruction.id;
            let item = heroConfig.getConfig(heroId);
            if(item)
            {
                let avatarId = item.icon;
                let avatarItem = avatarConfig.getConfig(avatarId);
                if(avatarItem)
                {
                    let url = avatarItem.zhCnIcon;
                    url = Res.GetBattleRoleIcon(url);
                    this.m_imgHero.url = url;
                }
            }
            // this.m_hero.selectedIndex = heroindex;
        }
    }

    /** 是否CD */
    isCD:boolean = false;

    /** 更新CD */
    updateCD(cost:number, total:number)
    {
        let iscd    = Boolean(cost);
        if ((iscd || this.isCD) && this.m_state.selectedIndex != 2) 
        {
            if(this.m_state.selectedIndex != 3)
            {
                this.m_state.selectedIndex = iscd ? 1 : 0;
            }
            this.m_labTime.changeText((cost / WarSetting.clientTickFrame).toFixed(1));
            // this.m_labTime.text        = (cost / War.setting.minFrameDelta).toFixed(1);
            this.m_progressCool.value  = cost / total * 100;
            if (!iscd) 
            {
                this.m_effChange.visible = true;
                Laya.timer.frameOnce(6, this, ()=>
                {
                    this.m_effChange.visible = false;
                });
            }
        }
        this.isCD   = iscd;
    }

}