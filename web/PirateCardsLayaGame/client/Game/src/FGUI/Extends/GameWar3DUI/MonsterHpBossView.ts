/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MonsterHpBossViewStruct from "../../Generates/GameWar3DUI/MonsterHpBossViewStruct";
import MonsterHpView from "./MonsterHpView";
import { ComponentProp } from "../../../GameWar/Logic/EcsComponents/ComponentProp";
import { EnumBossType } from "../../../GameWar/Logic/Enum/EnumBossType";
import IntMath from "../../../GameWar/CoreLib/IntMath/IntMath";

export default class MonsterHpBossView extends MonsterHpBossViewStruct
{
    /** 上一次的血量 */
    private _beforeHp : number;
    /** 当前血量 */
    private _nowHp : number;
    /** 总血量 */
    private _totalHp : number;
    /** 阴影的血量 */
    private _nowTweenHp : number;
    /** 经过的时间 */
    private _passTime : number;
    /** hp的血条数量 */
    private _hpTotalProgressCount : number;
    /** 拥有者的实体ID */
    private _ownerEntityId : number;

    private isActive : boolean;
    
    private _isFirst : boolean;

    private _perLineHp : number;

    private _isInit : boolean;

    private _nowIconName : string;

    // 窗口显示
    onWindowShow(): void
    {
        this._beforeHp = 0;
        this._nowHp = 0;
        this._nowTweenHp = 0;
        this._passTime = 0;
        this._hpTotalProgressCount = 10;
        this._totalHp = 1;
        this._ownerEntityId = -1;
        this.isActive = false;
        this._isFirst = true;
        this._perLineHp = 0;
        this._isInit = false;
        this.ShowView(false);
        this._nowIconName = "";
        
    }
    
    // 窗口隐藏
    onWindowHide(): void
    {
        
        this.m_hpBar_1.value = MonsterHpView.fullBarNum;
        this.m_hpBar_2.value = MonsterHpView.fullBarNum;
        this.m_hpBar_3.value = MonsterHpView.fullBarNum;
        this.m_hpBar_4.value = MonsterHpView.fullBarNum;
        this.m_hpBar_0.value = MonsterHpView.fullBarNum;
    }

    public Update(deltaTime : number)
    {
        if(!this.isActive)
        {
            return;
        }
        if(this._nowHp == 0 && this._passTime >= MonsterHpView.hideTime && this.isActive)
        {
            this.isActive = false;
            this.ShowView(false);
            return;
        }
        if(this._passTime <= MonsterHpView.tweenTime)
        {
            this._passTime += deltaTime;
            let precent = Math.min(this._passTime / MonsterHpView.tweenTime, 1);
            let n1 = this._beforeHp - this._nowHp;
            this._nowTweenHp = Math.floor(this._nowHp + (1 - precent) * n1);
            let colorNum = this.GetLineCount(this._nowHp);
            let greyNum = this.GetLineCount(this._nowTweenHp);
            let colorPer = Math.floor((this._nowHp - Math.floor(this._nowHp / this._perLineHp) * this._perLineHp) / this._perLineHp * 100);
            let greyPer = Math.floor((this._nowTweenHp - Math.floor(this._nowTweenHp / this._perLineHp) * this._perLineHp) / this._perLineHp * 100);
            this.UpdateView(colorNum, greyNum, colorPer, greyPer);
        }
        else
        {
            this._passTime += deltaTime;
        }
    }

    /**
     * 
     * @param deltaTime 
     * @param prop 
     * @param monsterType 
     * @param hpType 
     */
    public SetHpProp(prop : ComponentProp, name : string, hpStripCnt : number, icon : string = "")
    {
        if(!prop || (prop.entityId == this._ownerEntityId && prop.HPView == this._nowHp))
        {
            return;
        }
        this._totalHp = Math.max(1, prop.HPMaxView);
        if(this._isFirst)
        {
            this._isFirst = false;
            this._beforeHp = this._totalHp;
        }
        else
        {
            this._beforeHp = Math.floor(prop.wfLastHp / IntMath.BaseCalFactor);
        }
        if(hpStripCnt <= 0)
        {
            hpStripCnt = 1;
        }
        this._hpTotalProgressCount = hpStripCnt;
        this._perLineHp = this._totalHp / this._hpTotalProgressCount;
        this._nowHp = Math.max(0, prop.HPView);
        this.SetHpNumher(this._nowHp, this._totalHp)
        this._passTime = 0;
        this._ownerEntityId = prop.entityId;
        this.isActive = true;
        this.ShowView(true);
        this.SetName(name);
        this.SetIcon(icon);
    }

    public SetHpNumher(hp : number, hpMax : number)
    {
        this.m_hpNumText.changeText(hp.toString() + "/" + hpMax.toString());
    }

    public Init(prop : ComponentProp, name : string, hpStripCnt : number, icon : string = "")
    {
        if(!this._isInit)
        {
            this.SetHpProp(prop, name, hpStripCnt, icon);//
            this._isInit = true;
        }
    }

    public ShowView(isShow : boolean)
    {
        if(isShow && this.alpha != 1)
        {
            this.alpha = 1;
        }
        else if(!isShow && this.alpha != 0)
        {
            this.alpha = 0;
        }
    }

    private progressMinVal = 0;
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
        if(colorPer > 0)
        {
            this.m_hpCount.changeText("X" + (colorCnt + 1).toString());
        }
        else
        {
            this.m_hpCount.changeText("X" + (colorCnt).toString());
        }
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
     * 设置头像
     * @param url 
     */
    public SetIcon(url : string)
    {
        if(url == "")
        {
            url = "test";
        }
        if(url == this._nowIconName)
        {
            return;
        }
        this._nowIconName = url;
        let iconUrl = "res/fspriteassets/icon/BattleBossHeadIcon/" + url + ".png";
        this.m_imgHero.url = iconUrl;
    }

    private GetLineCount(hp : number) : number
    {
        let colorNum = hp / this._perLineHp;
        colorNum = Math.floor(colorNum);
        return colorNum
    }

    
}