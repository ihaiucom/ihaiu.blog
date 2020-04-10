/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MonsterShortHpStruct from "../../Generates/GameWar3DUI/MonsterShortHpStruct";
import MonsterHpView from "./MonsterHpView";

export default class MonsterShortHp extends MonsterShortHpStruct
{

    private progressMinVal = 0;

    private _nowIconName : string;
    // 窗口显示
    onWindowShow(): void
    {
        this.m_zhan.visible = false;
        this._nowIconName = "";
    }

    public UpdateView(colorCnt : number, greyCnt : number, colorPer : number, greyPer : number)
    {
        colorCnt = Math.floor(colorCnt)
        greyCnt = Math.floor(greyCnt);
        // colorPer = Math.floor(colorPer) / 100;
        // greyPer = Math.floor(greyPer) / 100;
        if(colorCnt > 2)
        {
            this.m_helperBar.visible = true;
            // this.m_helperBar.fillAmount = 100;
        }
        else
        {
            this.m_helperBar.visible = false;            
        }
        if(colorCnt < 1)
        {
            this.m_hpCount.visible = false;
            this.m_hpNumCount_Backgroud.visible = false;
        }
        else
        {
            this.m_hpCount.visible = true;
            this.m_hpNumCount_Backgroud.visible = true;
        }

        this.m_hpCount.changeText("X" + (colorCnt + 1).toString());
        let colorIndex = colorCnt % MonsterHpView.hpMaxLineCount;
        
        greyPer = Math.max(greyPer, this.progressMinVal);
        colorPer = Math.max(colorPer, this.progressMinVal);
        switch(colorIndex)
        {
            case 0:
                this.m_hpBar_1.value = 0;
                this.m_hpBar_2.value = 0;
                this.m_hpBar_3.value = 0;
                this.m_hpBar_4.value = 0;
                this.m_hpBar_0.value = colorPer;
                break;
            case 1:
                this.m_hpBar_0.value = MonsterHpView.fullBarNum;
                this.m_hpBar_2.value = 0;
                this.m_hpBar_3.value = 0;
                this.m_hpBar_4.value = 0;
                this.m_hpBar_1.value = colorPer;

                break;
            case 2:
                this.m_hpBar_0.value = MonsterHpView.fullBarNum;
                this.m_hpBar_1.value = MonsterHpView.fullBarNum;
                this.m_hpBar_3.value = 0;
                this.m_hpBar_4.value = 0;
                this.m_hpBar_2.value = colorPer;

                break;
            case 3:
                this.m_hpBar_0.value = MonsterHpView.fullBarNum;
                this.m_hpBar_1.value = MonsterHpView.fullBarNum;
                this.m_hpBar_2.value = MonsterHpView.fullBarNum;
                this.m_hpBar_4.value = 0;
                this.m_hpBar_3.value = colorPer;
                break;
            case 4:
                this.m_hpBar_0.value = MonsterHpView.fullBarNum;
                this.m_hpBar_1.value = MonsterHpView.fullBarNum;
                this.m_hpBar_2.value = MonsterHpView.fullBarNum;
                this.m_hpBar_3.value = MonsterHpView.fullBarNum;
                this.m_hpBar_4.value = colorPer;
                break;
        }

        let greyIndex = greyCnt % MonsterHpView.hpMaxLineCount;

        switch(greyIndex)
        {
            case 0:
                this.m_grey_1.value = 0;
                this.m_grey_2.value = 0;
                this.m_grey_3.value = 0;
                this.m_grey_4.value = 0;
                this.m_grey_0.value = greyPer;
                break;
            case 1:
                this.m_grey_0.value = MonsterHpView.fullBarNum;
                this.m_grey_2.value = 0;
                this.m_grey_3.value = 0;
                this.m_grey_4.value = 0;
                this.m_grey_1.value = greyPer;

                break;
            case 2:
                this.m_grey_0.value = MonsterHpView.fullBarNum;
                this.m_grey_1.value = MonsterHpView.fullBarNum;
                this.m_grey_3.value = 0;
                this.m_grey_4.value = 0;
                this.m_grey_2.value = greyPer;

                break;
            case 3:
                this.m_grey_0.value = MonsterHpView.fullBarNum;
                this.m_grey_1.value = MonsterHpView.fullBarNum;
                this.m_grey_2.value = MonsterHpView.fullBarNum;
                this.m_grey_4.value = 0;
                this.m_grey_3.value = greyPer;
                break;
            case 4:
                this.m_grey_0.value = MonsterHpView.fullBarNum;
                this.m_grey_1.value = MonsterHpView.fullBarNum;
                this.m_grey_2.value = MonsterHpView.fullBarNum;
                this.m_grey_3.value = MonsterHpView.fullBarNum;
                this.m_grey_4.value = greyPer;
                break;
        }
    }

    public SetName(name : string)
    {
        if(this.m_monsterName.text != name)
        {
            this.m_monsterName.changeText(name);
        }
    }
    /**
     * 设置斩字显示
     * @param visible 
     */
    public SetIsDeadShow(visible : boolean)
    {
        if(this.m_zhan.visible == visible)
        {
            return;
        }
        this.m_zhan.visible = visible;
    }

    public SetMonsterHeadVisiable(visible : boolean)
    {
        if(this.m_monsterHead.visible == visible)
        {
            return;
        }
        this.m_monsterHead.visible = visible;
    }
    
    public DeadShowChange()
    {
        this.m_zhan.visible = !this.m_zhan.visible;
        this.m_monsterHead.visible = this.m_zhan.visible;
    }


    /**
     * 设置头像
     * @param url 
     */
    public SetIcon(url : string)
    {
        if(url == "")
        {
            url = "2002";
        }
        if(url == this._nowIconName)
        {
            return;
        }
        this._nowIconName = url;
        let iconUrl = "res/fspriteassets/icon/BattleBossHeadIcon/" + url + ".png";
        this.m_monsterHead.url = iconUrl;
    }
}