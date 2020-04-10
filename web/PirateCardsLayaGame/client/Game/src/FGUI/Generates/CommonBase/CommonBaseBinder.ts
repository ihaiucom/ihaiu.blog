/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import Level from "../../Extends/CommonBase/Level";
import ExpProgressBar from "../../Extends/CommonBase/ExpProgressBar";
import CommonTab from "../../Extends/CommonBase/CommonTab";
import CommonButton from "../../Extends/CommonBase/CommonButton";
import FrameView from "../../Extends/CommonBase/FrameView";
import EmptyButton from "../../Extends/CommonBase/EmptyButton";
import ItemNumButton from "../../Extends/CommonBase/ItemNumButton";
import EnableButton from "../../Extends/CommonBase/EnableButton";
import Button1 from "../../Extends/CommonBase/Button1";
import Button2 from "../../Extends/CommonBase/Button2";
import HeroLevelProgressBar from "../../Extends/CommonBase/HeroLevelProgressBar";
import AddButton from "../../Extends/CommonBase/AddButton";
import MaxAddButton from "../../Extends/CommonBase/MaxAddButton";
import CloseButton from "../../Extends/CommonBase/CloseButton";
import BackButton from "../../Extends/CommonBase/BackButton";
import HelpButton from "../../Extends/CommonBase/HelpButton";
import CommonButton1 from "../../Extends/CommonBase/CommonButton1";
import CommonButton2 from "../../Extends/CommonBase/CommonButton2";
import EquipExpProgressBar from "../../Extends/CommonBase/EquipExpProgressBar";
import EquipExpAddProgressBar from "../../Extends/CommonBase/EquipExpAddProgressBar";
import TouziButton from "../../Extends/CommonBase/TouziButton";
import CommonTabBtn from "../../Extends/CommonBase/CommonTabBtn";
import CommonButton4 from "../../Extends/CommonBase/CommonButton4";
import CommonButton3 from "../../Extends/CommonBase/CommonButton3";
import CommonButtonNew from "../../Extends/CommonBase/CommonButtonNew";
import BackButton3 from "../../Extends/CommonBase/BackButton3";
import JumpButton from "../../Extends/CommonBase/JumpButton";
import CommonButton5 from "../../Extends/CommonBase/CommonButton5";
import CloseButton2 from "../../Extends/CommonBase/CloseButton2";
import CommonButton6 from "../../Extends/CommonBase/CommonButton6";

export default class CommonBaseBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(Level.URL, Level);
		bind(ExpProgressBar.URL, ExpProgressBar);
		bind(CommonTab.URL, CommonTab);
		bind(CommonButton.URL, CommonButton);
		bind(FrameView.URL, FrameView);
		bind(EmptyButton.URL, EmptyButton);
		bind(ItemNumButton.URL, ItemNumButton);
		bind(EnableButton.URL, EnableButton);
		bind(Button1.URL, Button1);
		bind(Button2.URL, Button2);
		bind(HeroLevelProgressBar.URL, HeroLevelProgressBar);
		bind(AddButton.URL, AddButton);
		bind(MaxAddButton.URL, MaxAddButton);
		bind(CloseButton.URL, CloseButton);
		bind(BackButton.URL, BackButton);
		bind(HelpButton.URL, HelpButton);
		bind(CommonButton1.URL, CommonButton1);
		bind(CommonButton2.URL, CommonButton2);
		bind(EquipExpProgressBar.URL, EquipExpProgressBar);
		bind(EquipExpAddProgressBar.URL, EquipExpAddProgressBar);
		bind(TouziButton.URL, TouziButton);
		bind(CommonTabBtn.URL, CommonTabBtn);
		bind(CommonButton4.URL, CommonButton4);
		bind(CommonButton3.URL, CommonButton3);
		bind(CommonButtonNew.URL, CommonButtonNew);
		bind(BackButton3.URL, BackButton3);
		bind(JumpButton.URL, JumpButton);
		bind(CommonButton5.URL, CommonButton5);
		bind(CloseButton2.URL, CloseButton2);
		bind(CommonButton6.URL, CommonButton6);
	}
}