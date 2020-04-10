/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonSkillWindowUIStruct from "../../Generates/ModuleCommonSkill/CommonSkillWindowUIStruct";
import CommonSkillChooseBtn from "../ModuleBattlePlan/CommonSkillChooseBtn";
import Game from "../../../Game";
import CommonSkillTextItem from "../ModuleBattlePlan/CommonSkillTextItem";
import CommonSkillWindow from "../../../GameModule/ViewWindows/CommonSkillWindow";
import GameEventKey from "../../../GameEventKey";

export default class CommonSkillWindowUI extends CommonSkillWindowUIStruct
{
    
    moduleWindow: CommonSkillWindow;
    /** 表示通用技能的ID从多少开始偏移 */
    static readonly commonSkillIndexOffset = 101;

    // /** 选中的队伍 */
    // private _choosedTeamIndex : number;
    // /** 选中的队伍中英雄的位置 */
    // private _choosedHeroTeamPos : number;
    /** 选中技能的下标，从101开始 */
    private _nowChooseSkill : number
    /** 选中技能在列表内的下表 */
    private _nowSelectIndex : number;
    /** 回调 */
    private callBack : Function;
    /** 域 */
    private context : any;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.m_head.m_closeBtn.onClick(this, this.Close);
        this.m_listCommonSkill.setItemRenderer(this.RenderCommonSkill, this);
    }

    // 窗口显示
    onWindowShow(): void
    {
        this.m_listEffects.setItemRenderer(this.RenderInfo, this);
        this.m_listCommonSkill.on(fgui.Events.CLICK_ITEM, this, this.SkillChoose);
        this.m_choose.onClick(this, this.SendChoose);
        this.SetSelectType(this._nowChooseSkill, true);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.m_listCommonSkill.off(fgui.Events.CLICK_ITEM, this, this.SkillChoose);
        this.m_choose.offClick(this, this.SendChoose);
        this.Reset();
    }


    /**
     * 打开技能面板
     * @param chooseIndex 之前选择的技能,如果是-1代表没有选中任何技能
     * @param callFunction 回调函数，带一个参数，参数1为选中技能
     * @param context 域
     */
    public Init(chooseIndex : number, callFunction : Function, context : any)
    {
        // this._choosedTeamIndex = teamIndex;
        // this._choosedHeroTeamPos = heroTeamPos;
        this._nowChooseSkill = chooseIndex;
        this._nowSelectIndex = chooseIndex - CommonSkillWindowUI.commonSkillIndexOffset;
        this.m_listCommonSkill.numItems = 5;
        this.callBack = callFunction;
        this.context = context;
    }

    private RenderCommonSkill(index : number, item : CommonSkillChooseBtn)
    {
        let id = index + CommonSkillWindowUI.commonSkillIndexOffset;
        let config = Game.config.skill.getConfig(id);
        if(!config)
        {
            return;
        }
        item.title = config.Name;
        let resId = config.icon;
        let resConfig = Game.config.avatar.getConfig(resId);
        if(resConfig)
        {
            item.m_icon.url = resConfig.commonSkillIconUrl;
        }
    }

    /**
     * 技能选择
     * @param item 
     */
    private SkillChoose(item : CommonSkillChooseBtn)
    {
        if(!item)
        {
            return;
        }
        let index = this.m_listCommonSkill.getChildIndex(item);
        // 技能从101开始算起
        let skillIndex = index + CommonSkillWindowUI.commonSkillIndexOffset;
        this.SetSelectType(this._nowChooseSkill, false);
        this._nowChooseSkill = skillIndex;
        this._nowSelectIndex = index;
        this.SetSelectType(this._nowChooseSkill, true);
    }
    
    private SendChoose()
    {
        if(this._nowChooseSkill == 0)
        {
            this.Close();
            return;
        }
        if(this.callBack && this.context)
        {
            this.callBack.apply(this.context, [this._nowChooseSkill]);
        }
        // Game.event.dispatch(GameEventKey.GameFrame_CommonSkillChoose, this._nowChooseSkill);
        // Game.sender.battlePlan.BattleChangeSkill(this._choosedTeamIndex, this._choosedHeroTeamPos, this._nowChooseSkill);
        this.Close();
    }

    private Close()
    {
        this.callBack = null;
        this.context = null;
        this.moduleWindow.menuBack();
    }

    private Reset()
    {
        this.m_listCommonSkill.off(fgui.Events.CLICK_ITEM, this, this.SkillChoose);
        this.m_choose.offClick(this, this.SendChoose);
        for(let i = 0 ; i < this.m_listCommonSkill.numChildren ; i++)
        {
            let item = this.m_listCommonSkill.getChildAt(i) as CommonSkillChooseBtn;
            if(item && item.m_button.selectedPage != "no")
            {
                item.m_select.setSelectedPage("no");
            }
        }
        // this._choosedTeamIndex = -1;
        // this._choosedHeroTeamPos = -1;
        this._nowChooseSkill = 0;
        this._nowSelectIndex = -1;
    }

    /**
     * 设置选中技能
     * @param index 
     */
    private SetSelectType(index : number, isSelect : boolean)
    {
        let config = Game.config.skill.getConfig(index);
        index -= CommonSkillWindowUI.commonSkillIndexOffset;
        if(index < 0)
        {
            return;
        }
        let item = this.m_listCommonSkill.getChildAt(index) as CommonSkillChooseBtn;
        if(item)
        {
            item.m_select.setSelectedPage( isSelect ? "yes" : "no");
        }
        if(isSelect && config)
        {
            this.m_listEffects.numItems = 1;
            this.m_SkillName.text = config.Name;
        }
    }

    private RenderInfo(index : number, item : CommonSkillTextItem)
    {
        let config = Game.config.skill.getConfig(this._nowChooseSkill);
        if(!config)
        {
            return;
        }
        item.m_info.text = config.Desc;
    }
}