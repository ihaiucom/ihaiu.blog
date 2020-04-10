/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import BattlePlanWindowUI from "../../Extends/ModuleBattlePlan/BattlePlanWindowUI";
import HeroPanel from "../../Extends/ModuleBattlePlan/HeroPanel";
import BoardHeroPanel from "../../Extends/ModuleBattlePlan/BoardHeroPanel";
import SkillChoosePanel from "../../Extends/ModuleBattlePlan/SkillChoosePanel";
import BtnTeamPanel from "../../Extends/ModuleBattlePlan/BtnTeamPanel";
import InputPanel from "../../Extends/ModuleBattlePlan/InputPanel";
import UnlockTeamCostMoneyPanel from "../../Extends/ModuleBattlePlan/UnlockTeamCostMoneyPanel";
import BattlePlanDialog from "../../Extends/ModuleBattlePlan/BattlePlanDialog";
import ComCommonSkill from "../../Extends/ModuleBattlePlan/ComCommonSkill";
import TextInput from "../../Extends/ModuleBattlePlan/TextInput";
import ComMoneyCost from "../../Extends/ModuleBattlePlan/ComMoneyCost";
import CommonSkillDialog from "../../Extends/ModuleBattlePlan/CommonSkillDialog";
import CommonSkillTextItem from "../../Extends/ModuleBattlePlan/CommonSkillTextItem";
import SkillChooseCommonSkill from "../../Extends/ModuleBattlePlan/SkillChooseCommonSkill";
import CommonSkillChooseBtn from "../../Extends/ModuleBattlePlan/CommonSkillChooseBtn";

export default class ModuleBattlePlanBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(BattlePlanWindowUI.URL, BattlePlanWindowUI);
		bind(HeroPanel.URL, HeroPanel);
		bind(BoardHeroPanel.URL, BoardHeroPanel);
		bind(SkillChoosePanel.URL, SkillChoosePanel);
		bind(BtnTeamPanel.URL, BtnTeamPanel);
		bind(InputPanel.URL, InputPanel);
		bind(UnlockTeamCostMoneyPanel.URL, UnlockTeamCostMoneyPanel);
		bind(BattlePlanDialog.URL, BattlePlanDialog);
		bind(ComCommonSkill.URL, ComCommonSkill);
		bind(TextInput.URL, TextInput);
		bind(ComMoneyCost.URL, ComMoneyCost);
		bind(CommonSkillDialog.URL, CommonSkillDialog);
		bind(CommonSkillTextItem.URL, CommonSkillTextItem);
		bind(SkillChooseCommonSkill.URL, SkillChooseCommonSkill);
		bind(CommonSkillChooseBtn.URL, CommonSkillChooseBtn);
	}
}