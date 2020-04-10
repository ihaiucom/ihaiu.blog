/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonSkillDialogStruct from "../../Generates/ModuleBattlePlan/CommonSkillDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import CommonSkillChooseBtn from "./CommonSkillChooseBtn";
import Game from "../../../Game";
import CommonSkillTextItem from "./CommonSkillTextItem";

export default class CommonSkillDialog extends CommonSkillDialogStruct
{
    /** 表示通用技能的ID从多少开始偏移 */
    static readonly commonSkillIndexOffset = 101;

    private dialogCtrl: DialogCtrl;
    /** 选中的队伍 */
    private _choosedTeamIndex : number;
    /** 选中的队伍中英雄的位置 */
    private _choosedHeroTeamPos : number;
    /** 选中技能的下标，从101开始 */
    private _nowChooseSkill : number
    /** 选中技能在列表内的下表 */
    private _nowSelectIndex : number;
    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);
        this.dialogCtrl.setCloseBtnEvent();
        this.m_head.m_closeBtn.onClick(this, this.Close);
    }

    /**
     * 打开技能面板
     * @param chooseIndex 之前选择的技能,如果是-1代表没有选中任何技能
     */
    public OpenPanel(chooseIndex : number, teamIndex : number, heroTeamPos : number)
    {
        this.dialogCtrl.open();
        this._choosedTeamIndex = teamIndex;
        this._choosedHeroTeamPos = heroTeamPos;
        this._nowChooseSkill = chooseIndex;
        this.m_listCommonSkill.setItemRenderer(this.RenderCommonSkill, this);
        this.m_listEffects.setItemRenderer(this.RenderInfo, this);
        this.m_listCommonSkill.on(fgui.Events.CLICK_ITEM, this, this.SkillChoose);
        this._nowSelectIndex = chooseIndex - CommonSkillDialog.commonSkillIndexOffset;
        this.m_listCommonSkill.numItems = 5;
        this.m_choose.onClick(this, this.SendChoose);
        this.SetSelectType(chooseIndex, true);
    }

    private RenderCommonSkill(index : number, item : CommonSkillChooseBtn)
    {
        let id = index + CommonSkillDialog.commonSkillIndexOffset;
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
        let skillIndex = index + CommonSkillDialog.commonSkillIndexOffset;
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
        Game.sender.battlePlan.BattleChangeSkill(this._choosedTeamIndex, this._choosedHeroTeamPos, this._nowChooseSkill);
        this.Close();
    }

    private Close()
    {
        this.dialogCtrl.close();
        this.Reset();
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
    }

    private Reset()
    {
        this._choosedTeamIndex = -1;
        this._choosedHeroTeamPos = -1;
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
        index -= CommonSkillDialog.commonSkillIndexOffset;
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