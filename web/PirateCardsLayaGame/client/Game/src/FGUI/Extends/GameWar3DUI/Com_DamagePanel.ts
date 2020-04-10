/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Com_DamagePanelStruct from "../../Generates/GameWar3DUI/Com_DamagePanelStruct";
import Game from "../../../Game";
import { CharacterDamageRankStatic } from "../../../GameWar/Logic/Struct/CharacterDamageRank";
import DamageBar from "./DamageBar";
import Com_DamageBar from "./Com_DamageBar";

export default class Com_DamagePanel extends Com_DamagePanelStruct
{
    public Init()
    {

    }

    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_damageList.setItemRenderer(this.damageListRender, this);
    }

    /**
     * 更新伤害列表
     */
    public UpdateDamage()
    {
        // return;

        let matchModel = Game.moduleModel.match;
        if(!matchModel)
        {
            return;
        }
        let gamers = matchModel.gamers;
        let damageList = CharacterDamageRankStatic.Get().vDamageList;
        if(!gamers || gamers.length <= 0 || !damageList)
        {
            return;
        }
        damageList.sort((a, b) =>
        {   
            return b.damage - a.damage;
        });

        let max = 0;
        let all = 0;
        for(let i = 0 ; i < damageList.length ; i ++)
        {
            let clsDamage = damageList[i];
            if(!clsDamage)
            {
                continue;
            }
            max = Math.max(clsDamage.damage, max);
            all += clsDamage.damage;
        }
        if(max == 0)
        {
            return;
        }


        for(let i = 0 ; i < damageList.length ; i ++)
        {
            if(i > this.m_damageList.numItems - 1)
            {
                return;
            }

            let item = this.m_damageList.getChildAt(i) as Com_DamageBar;
            let clsDamage = damageList[i];
            if(!item || !clsDamage)
            {
                continue;
            }
            let gamer = matchModel.GetGamerByPos(clsDamage.pos);
            if(!gamer.mini)
            {
                continue;
            }
            let percent = clsDamage.damage / all * 100;
            let barVal = clsDamage.damage / max * 100
            let name = gamer.mini.name;
            item.SetInfo(name.toString(), clsDamage.damage, percent, barVal);
        }
    }

    private damageListRender(index : number, item : Com_DamageBar)
    {
        let matchModel = Game.moduleModel.match;
        if(!matchModel || !matchModel.gamers || !matchModel.gamers[index])
        {
            return;
        }
        let gamer = matchModel.gamers[index];
        if(!gamer.mini)
        {
            return;
        }
        item.Init(index);
        item.ResetInfo(gamer.mini.name);
    }
}