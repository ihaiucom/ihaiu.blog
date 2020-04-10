/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeadHPViewStruct from "../../Generates/GameWar3DUI/HeadHPViewStruct";

export default class HeadHPView extends HeadHPViewStruct
{
    private static pool = [];
    static poolGet():HeadHPView
    {
        let item:HeadHPView;
        if(this.pool.length > 0)
        {
            item = this.pool.shift();
        }
        else
        {
            item = HeadHPView.createInstance();
        }

        return item;
    }

    poolRecover()
    {
        if(HeadHPView.pool.indexOf(this) == -1 )
        {
            HeadHPView.pool.push(this);
        }
    }

    isBorn:boolean = true;

    updateHP(hp: int, maxhp: int)
    {
        switch (this.m_type.selectedIndex) {
            case 1:
                this.m_preogressTeam.value = (hp / maxhp) * 100
                break;
            case 2:
                this.m_progressEnemy.value = (hp / maxhp) * 100
                break;
            case 3:
                this.m_progressBoss.value  = (hp / maxhp) * 100
                break;
        }
    }

    release()
    {
        this.isBorn  = true;
        this.visible = true;
        this.m_type.selectedIndex = 0;
        this.m_preogressTeam.value = 100;
        this.m_progressEnemy.value = 100;
        this.m_progressBoss.value  = 100;
        this.poolRecover();
    }
}