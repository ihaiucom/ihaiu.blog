/*
 * @Descripttion: 
 * @version: 
 * @Author: ZengFeng
 * @Date: 2019-09-25 20:55:00
 * @LastEditors: ZengFeng
 * @LastEditTime: 2019-09-25 20:55:00
 */

/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EnemyViewStruct from "../../Generates/GameWarUI/EnemyViewStruct";
import { ComponentProp } from "../../../GameWar/Logic/EcsComponents/ComponentProp";

export default class EnemyView extends EnemyViewStruct
{
    private monsterType:number;

    private progressHp:fgui.GProgressBar;

    private entityId:number = -1;

    // 窗口显示
    onWindowShow(): void
    {
        this.setVisible(false);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.resetProgressHp(7);
    }

    setInfo(gamer:proto.IGamerMatch)
    {
        if (this.monsterType == gamer.hero)
            return;
        
        this.monsterType = gamer.hero;
        //怪物头像显示，暂无
        //TODO---------
    }

    update(ComponentProp:ComponentProp)
    {
        
        let restHP = ComponentProp.HPView / ComponentProp.HPMaxView;
        if (false)  // 是否是BOSS
        {
            let type = 2; // 暂写死血条类型
            let part = 1 / type;
            let index= Math.floor(restHP / part)
            restHP = restHP / part - index;
            this.resetProgressHp(index);
            this.m_color.selectedIndex = index + 1; 
            this.m_labHpIndex.text = "X" + (index + 1);
            this.progressHp = <fgui.GProgressBar>this.getChild("progressHp" + (index + 1));
        }
        else
        {
            this.m_color.selectedIndex = 1;
            this.m_labHpIndex.text = "X" + 1;;
            this.progressHp = <fgui.GProgressBar>this.getChild("progressHp" + (1));
        }

        this.setVisible(true);
        if (this.entityId != ComponentProp.entityId) {
            this.progressHp.value = restHP * 100;
        } else {
            this.progressHp.tweenValue(restHP * 100, 0.5);
        }
        this.entityId = ComponentProp.entityId;
        this.m_labHpScale.text = `${ComponentProp.HPView}/${ComponentProp.HPMaxView}`;

        Engine.timer.clearAll(this);
        Engine.timer.once(1000, this, this.setVisible, [false], true)
    }

    setVisible(val: boolean)
    {
        if (!val) {
            this.m_color.selectedIndex = 0;
        }

        this.m_labHpIndex.visible = val;
        this.m_labHpScale.visible = val;
    }

    resetProgressHp(max: number)
    {
        for (let i = 0; i < max; i++) {
            let progressHp = <fgui.GProgressBar>this.getChild("progressHp" + (i + 1));
            progressHp.value = 100;
        }
        
    }
}