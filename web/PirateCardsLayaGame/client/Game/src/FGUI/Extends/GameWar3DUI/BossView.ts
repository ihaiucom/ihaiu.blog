/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BossViewStruct from "../../Generates/GameWar3DUI/BossViewStruct";
import { ComponentProp } from "../../../GameWar/Logic/EcsComponents/ComponentProp";
import Game from "../../../Game";

export default class BossView extends BossViewStruct
{
    prop : ComponentProp;

    constructor()
    {
        super();
        this.prop = null;
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_labName.text = "街机三国";
        // this.x -= Game.screenSetting.liuHaiHeightTop;
        
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        // this.x += Game.screenSetting.liuHaiHeightTop;
        this.resetProgressHp(2);
    }
    public Init(bossName : string)
    {
        this.m_labName.text = bossName;
    }

    updateView(prop: ComponentProp)
    {
        if(!prop)
        {
            this.visible = false
        }

        if(!this.prop)
        {
            this.prop = prop;
            this.visible = true;
            Laya.timer.loop(1000, this, this.MyUpdate);
        }

        let hp      = prop.HPView;
        let hpmax   = prop.HPMaxView;
        if (Boolean(hp) != this.visible) 
        {
            this.visible = Boolean(hp);    
        }
        this.m_labHp.text = `${hp}/${hpmax}`;

        let type    = 2; // 怪物血条类型prop.bossType
        let part    = 1 / type;
        let restHP  = hp / hpmax;
        let index   = Math.ceil(restHP / part);
        this.m_color.selectedIndex = index - 1;
        this.m_labIndex.text = "X" + (index);

        restHP = restHP / part - (index - 1);// (resthp - (index - 1) * part) / part
        let progressHp = <fgui.GProgressBar>this.getChild("progressHP" + (index));
        // progressHp.tweenValue(restHP * 100, 0.5);
        if (progressHp) progressHp.value = restHP * 100;
    }

    resetProgressHp(max: number)
    {
        for (let i = 0; i < max; i++) {
            let progressHp = <fgui.GProgressBar>this.getChild("progressHP" + (i + 1));
            progressHp.value = 100;
        }
        
    }

    private MyUpdate()
    {
        if(!this.prop || this.prop.HPView <= 0)
        {
            Laya.timer.clear(this, this.MyUpdate);
            this.visible = false;
            this.prop = null;
        } 
    }

    
}