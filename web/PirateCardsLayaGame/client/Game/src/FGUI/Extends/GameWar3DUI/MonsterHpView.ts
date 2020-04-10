/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MonsterHpViewStruct from "../../Generates/GameWar3DUI/MonsterHpViewStruct";
import { ComponentProp } from "../../../GameWar/Logic/EcsComponents/ComponentProp";
import { EnumBossType } from "../../../GameWar/Logic/Enum/EnumBossType";
import IntMath from "../../../GameWar/CoreLib/IntMath/IntMath";

export default class MonsterHpView extends MonsterHpViewStruct
{
    /** boss血条状态名字 */
    static readonly bossStateName : string = "boss";
    /** 短血条状态名字 */
    static readonly shortStateName : string = "short";
    /** 中血条状态名字 */
    static readonly midStateName : string = "mid";
    /** 长血条状态名字 */
    static readonly longStateName : string = "long";
    /** 缓动时间 */
    static readonly tweenTime : number = 700;
    /** 血条隐藏时间 */
    static readonly hideTime : number = 3000;
    /** 血条最大数目 */
    static readonly hpMaxLineCount : number = 4;
    /** 斩字显示间隔 */
    static readonly deadShowDelta : number = 100;
    /** 斩字最长显示时间 */
    static readonly deadShowSlowTime : number = 3000;
    /** 斩字最短显示时间 */
    static readonly deadShowFastTime : number = 1000;
    /** 进度条满的数字 */
    static readonly fullBarNum : number = 100;

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
    /** 当前死亡显示时间 */
    private _nowDeadShowTime : number;

    private _deadShowPassTime : number;

    private isActive : boolean;
    
    private _isFirst : boolean;

    private _perLineHp : number;
    /** 是否在显示被斩杀 */
    private _isDeadShow : boolean ;

    private _hideTime : number;

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
        this.alpha = 0;
        this._isDeadShow = false;
        this._deadShowPassTime = 0;
        this._nowDeadShowTime = MonsterHpView.deadShowSlowTime;
        this._hideTime = MonsterHpView.deadShowSlowTime;
    }
    
    // 窗口隐藏
    onWindowHide(): void
    {

    }

    public UpdateView(deltaTime : number)
    {
        if(!this.isActive)
        {
            return;
        }
        // hp小于0，经过时间长于隐藏时间则隐藏血条
        if(this._nowHp == 0 && this._passTime >= this._hideTime && this.isActive)
        {
            this.isActive = false;
            this.alpha = 0;
            this.SetDeadShow(false);
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
            
            

            switch(this.m_monster_type.selectedPage)
            {
                case MonsterHpView.shortStateName:
                    this.m_MonsterShortHp.UpdateView(colorNum, greyNum, colorPer, greyPer);
                    break;
                case MonsterHpView.midStateName:
                    this.m_monsterMidHp.UpdateView(colorNum, greyNum, colorPer, greyPer);
                    break;
                case MonsterHpView.longStateName:
                    this.m_monsterLongHp.UpdateView(colorNum, greyNum, colorPer, greyPer);
                    break;
                case MonsterHpView.bossStateName:
                    this.m_bossHp.UpdateView(colorNum, greyNum, colorPer, greyPer);
                    this.m_bossHp.alpha = 1;
                    break;
            }
        }
        else
        {
            this._passTime += deltaTime;
        }

        // 死亡斩杀显示            
        if(this._isDeadShow && this._passTime < this._nowDeadShowTime)
        {
            this._deadShowPassTime += deltaTime;
            if(this._deadShowPassTime > MonsterHpView.deadShowDelta)
            {
                this._deadShowPassTime -= MonsterHpView.deadShowDelta;
                switch(this.m_monster_type.selectedPage)
                {
                    case MonsterHpView.shortStateName:
                        this.m_MonsterShortHp.DeadShowChange();
                        break;
                    case MonsterHpView.midStateName:
                        this.m_monsterMidHp.DeadShowChange();
                        break;
                    case MonsterHpView.longStateName:
                        this.m_monsterLongHp.DeadShowChange();
                        break;
                }
            }
        }
        else if(this._isDeadShow && this._passTime >= this._nowDeadShowTime)
        {
            switch(this.m_monster_type.selectedPage)
            {
                case MonsterHpView.shortStateName:
                    this.m_MonsterShortHp.SetIsDeadShow(true);
                    this.m_MonsterShortHp.SetMonsterHeadVisiable(true);
                    break;
                case MonsterHpView.midStateName:
                    this.m_monsterMidHp.SetIsDeadShow(true);
                    this.m_monsterMidHp.SetMonsterHeadVisiable(true);
                    break;
                case MonsterHpView.longStateName:
                    this.m_monsterLongHp.SetIsDeadShow(true);
                    this.m_monsterLongHp.SetMonsterHeadVisiable(true);
                    break;
            }
            this._isDeadShow = false;
        }
        
    }

    /**
     * 
     * @param prop 属性组件
     * @param monsterType 怪物类型
     * @param name 名字
     * @param hpStripCnt 血条数
     * @param hpType 血量类型,1为短，2为中，3为长
     * @param iconUrl 头像路径
     */
    public SetHpProp(prop : ComponentProp, monsterType : EnumBossType , name : string, hpStripCnt : number, hpType : number, iconUrl : string = "")
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
        if(monsterType != EnumBossType.BossLevel_2 && this._isDeadShow)
        {
            this._nowDeadShowTime = MonsterHpView.deadShowFastTime;
            this._hideTime = MonsterHpView.deadShowFastTime;
            return;
        }

        this._hpTotalProgressCount = hpStripCnt;
        if(hpStripCnt <= 0)
        {
            this._hpTotalProgressCount = 1;
        }
        this._perLineHp = this._totalHp / this._hpTotalProgressCount;
        this._nowHp = Math.max(0, prop.HPView);
        this._passTime = 0;
        this._ownerEntityId = prop.entityId;
        this.isActive = true;
        this.alpha = 1;
        this._hideTime = MonsterHpView.deadShowSlowTime;

        if(monsterType == EnumBossType.BossLevel_2)
        {
            this.SetState(MonsterHpView.bossStateName);
            this.m_bossHp.SetHpNumher(this._nowHp, this._totalHp);
            this.m_bossHp.SetName(name);
            this.m_bossHp.SetIcon(iconUrl);
            this.SetDeadShow(false);
        }
        else
        {
            if(this._nowHp <= 0)
            {
                this.SetDeadShow(true);
            }
            else
            {
                this.SetDeadShow(false);
            }
            switch(hpType)
            {
                case 2:
                default:
                    this.SetState(MonsterHpView.midStateName);
                    this.m_monsterMidHp.SetName(name);
                    this.m_monsterMidHp.SetIcon(iconUrl);
                    this.m_monsterMidHp.SetMonsterHeadVisiable(true);
                    break;
                case 1:
                    this.SetState(MonsterHpView.shortStateName);
                    this.m_MonsterShortHp.SetName(name);
                    this.m_MonsterShortHp.SetIcon(iconUrl);
                    this.m_MonsterShortHp.SetMonsterHeadVisiable(true);
                    break;
                case 3:
                    this.SetState(MonsterHpView.longStateName);
                    this.m_monsterLongHp.SetName(name);
                    this.m_monsterLongHp.SetIcon(iconUrl);
                    this.m_monsterLongHp.SetMonsterHeadVisiable(true);
                    break;
            }
        }
    }

    /**
     * 
     * @param page 
     */
    private SetState(page : string)
    {
        if(this.m_monster_type.selectedPage == page)
        {
            return;
        }
        this.m_monster_type.setSelectedPage(page);
    }
    /**
     * 获取有多少血条
     * @param hp 
     */
    private GetLineCount(hp : number) : number
    {
        let colorNum = hp / this._perLineHp;
        colorNum = Math.floor(colorNum);
        return colorNum
    }
    /**
     * 设置死亡斩杀显示
     * @param val 
     */
    private SetDeadShow(val : boolean)
    {
        this._isDeadShow = val;
        this._deadShowPassTime = 0;
        this._nowDeadShowTime = MonsterHpView.deadShowSlowTime;
        // if(!val)
        // {
        this.m_MonsterShortHp.SetIsDeadShow(false);
        this.m_monsterMidHp.SetIsDeadShow(false);
        this.m_monsterLongHp.SetIsDeadShow(false);
        // }
    }
}