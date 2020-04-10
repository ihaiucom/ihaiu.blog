/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FrameView from "../../Extends/CommonBase/FrameView";
import ItemEquip from "../../Extends/CommonGame/ItemEquip";
import CommonButton from "../../Extends/CommonBase/CommonButton";
import ItemStar from "../../Extends/CommonGame/ItemStar";
import ItemEquipTips from "../../Extends/CommonGame/ItemEquipTips";

export default class ItemEquipTipsStruct extends fgui.GComponent
{
	public m_itemUnique : fgui.Controller;
	public m_itemEffectNumber : fgui.Controller;
	public m_itemChange : fgui.Controller;
	public m_strType : fgui.Controller;
	public m_backgoundLoader : fgui.GLoader;
	public m_firstitemEffectDescription : fgui.GTextField;
	public m_unequipLoader : fgui.GLoader;
	public m_seconditemEffectDescription : fgui.GTextField;
	public m_firstitemEffectName : fgui.GTextField;
	public m_firstitemEffectLevel : fgui.GTextField;
	public m_seconditemEffectName : fgui.GTextField;
	public m_seconditemEffectLevel : fgui.GTextField;
	public m_itemName : fgui.GTextField;
	public m_uniqueCharacterName : fgui.GTextField;
	public m_physicalAttack : fgui.GTextField;
	public m_physicalDefense : fgui.GTextField;
	public m_itemDescription : fgui.GTextField;
	public m_strType : fgui.GTextField;
	public m_itemTypePicture : fgui.GImage;
	public m_itemLevel : fgui.GTextField;
	public m_itemType : fgui.GTextField;
	public m_frame : FrameView;
	public m_itemPicture : ItemEquip;
	public m_btnUnequip : CommonButton;
	public m_btnSwapEquip : CommonButton;
	public m_itemStar : ItemStar;

	
	public static URL:string = "ui://4snov4n9sfsq32";
	
	public static DependPackages:string[] = ["CommonGame","CommonBase","ModuleHero"];

	
	public static createInstance():ItemEquipTips {
		return <ItemEquipTips><any>(fgui.UIPackage.createObject("CommonGame","ItemEquipTips"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_itemUnique = this.getController("itemUnique");
		this.m_itemEffectNumber = this.getController("itemEffectNumber");
		this.m_itemChange = this.getController("itemChange");
		this.m_strType = this.getController("strType");

		
		this.m_backgoundLoader = <fgui.GLoader><any>(this.getChild("backgoundLoader"));
		this.m_firstitemEffectDescription = <fgui.GTextField><any>(this.getChild("firstitemEffectDescription"));
		this.m_unequipLoader = <fgui.GLoader><any>(this.getChild("unequipLoader"));
		this.m_seconditemEffectDescription = <fgui.GTextField><any>(this.getChild("seconditemEffectDescription"));
		this.m_firstitemEffectName = <fgui.GTextField><any>(this.getChild("firstitemEffectName"));
		this.m_firstitemEffectLevel = <fgui.GTextField><any>(this.getChild("firstitemEffectLevel"));
		this.m_seconditemEffectName = <fgui.GTextField><any>(this.getChild("seconditemEffectName"));
		this.m_seconditemEffectLevel = <fgui.GTextField><any>(this.getChild("seconditemEffectLevel"));
		this.m_itemName = <fgui.GTextField><any>(this.getChild("itemName"));
		this.m_uniqueCharacterName = <fgui.GTextField><any>(this.getChild("uniqueCharacterName"));
		this.m_physicalAttack = <fgui.GTextField><any>(this.getChild("physicalAttack"));
		this.m_physicalDefense = <fgui.GTextField><any>(this.getChild("physicalDefense"));
		this.m_itemDescription = <fgui.GTextField><any>(this.getChild("itemDescription"));
		this.m_strType = <fgui.GTextField><any>(this.getChild("strType"));
		this.m_itemTypePicture = <fgui.GImage><any>(this.getChild("itemTypePicture"));
		this.m_itemLevel = <fgui.GTextField><any>(this.getChild("itemLevel"));
		this.m_itemType = <fgui.GTextField><any>(this.getChild("itemType"));
		this.m_frame = <FrameView><any>(this.getChild("frame"));
		this.m_itemPicture = <ItemEquip><any>(this.getChild("itemPicture"));
		this.m_btnUnequip = <CommonButton><any>(this.getChild("btnUnequip"));
		this.m_btnSwapEquip = <CommonButton><any>(this.getChild("btnSwapEquip"));
		this.m_itemStar = <ItemStar><any>(this.getChild("itemStar"));
		
		
	}
}