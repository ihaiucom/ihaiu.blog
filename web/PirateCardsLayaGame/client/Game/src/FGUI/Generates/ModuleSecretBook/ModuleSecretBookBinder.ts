/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import SecretBookWindowUI from "../../Extends/ModuleSecretBook/SecretBookWindowUI";
import SecretBookHeroItem from "../../Extends/ModuleSecretBook/SecretBookHeroItem";
import SecretButton from "../../Extends/ModuleSecretBook/SecretButton";
import SecretBookDetailWindowUI from "../../Extends/ModuleSecretBook/SecretBookDetailWindowUI";
import SecretBookButton from "../../Extends/ModuleSecretBook/SecretBookButton";
import SecretBookCondition from "../../Extends/ModuleSecretBook/SecretBookCondition";
import SecretBookListWindowUI from "../../Extends/ModuleSecretBook/SecretBookListWindowUI";
import SecretBookListItem from "../../Extends/ModuleSecretBook/SecretBookListItem";
import SecretBookHeroListBg from "../../Extends/ModuleSecretBook/SecretBookHeroListBg";
import SectionBookAddButton from "../../Extends/ModuleSecretBook/SectionBookAddButton";
import SecretBookRewardBoxButton from "../../Extends/ModuleSecretBook/SecretBookRewardBoxButton";
import SecretBookStarCount from "../../Extends/ModuleSecretBook/SecretBookStarCount";
import SecretBookDetailBg from "../../Extends/ModuleSecretBook/SecretBookDetailBg";

export default class ModuleSecretBookBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(SecretBookWindowUI.URL, SecretBookWindowUI);
		bind(SecretBookHeroItem.URL, SecretBookHeroItem);
		bind(SecretButton.URL, SecretButton);
		bind(SecretBookDetailWindowUI.URL, SecretBookDetailWindowUI);
		bind(SecretBookButton.URL, SecretBookButton);
		bind(SecretBookCondition.URL, SecretBookCondition);
		bind(SecretBookListWindowUI.URL, SecretBookListWindowUI);
		bind(SecretBookListItem.URL, SecretBookListItem);
		bind(SecretBookHeroListBg.URL, SecretBookHeroListBg);
		bind(SectionBookAddButton.URL, SectionBookAddButton);
		bind(SecretBookRewardBoxButton.URL, SecretBookRewardBoxButton);
		bind(SecretBookStarCount.URL, SecretBookStarCount);
		bind(SecretBookDetailBg.URL, SecretBookDetailBg);
	}
}