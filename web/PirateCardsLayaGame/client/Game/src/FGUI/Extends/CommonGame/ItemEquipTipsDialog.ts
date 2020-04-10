/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemEquipTipsDialogStruct from "../../Generates/CommonGame/ItemEquipTipsDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import {EquipData} from "../../../GameModule/DataStructs/EquipData";
import TEXT from "../../../Config/Keys/TEXT";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";
export default class ItemEquipTipsDialog extends ItemEquipTipsDialogStruct
{
    private dialogCtrl: DialogCtrl;

    equipData :EquipData;
    protected constructFromXML(xml: any): void
    {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);
        this.dialogCtrl.setCloseBtnEvent();
    }

    open(data: EquipData,showItemChange: boolean = true)
    {
      
        this.dialogCtrl.open();
           //初始化装备参数
        this.initScene(data, showItemChange);
    }

    close()
    {
        this.dialogCtrl.close();
    }

    initScene(data:EquipData, showItemChange:boolean=true)
    {
        //装备专属
        this.equipData = data; 
        if (data.isExclusive)
        {
            this.m_itemUnique.selectedIndex = 0; 
            this.m_uniqueCharacterName.text = data.exclusiveSimpleTxt;
        }
        else
        {
            this.m_itemUnique.selectedIndex = 1;
        }

        //测试用 表还没配
        this.m_itemEffectNumber.selectedIndex = 0;

        
        //是否显示装备卸下/更换
        this.m_itemChange.selectedIndex = showItemChange? 0:1;

        //装备名字
        this.m_itemName.text = data.name;
        this.m_itemDescription.text= data.desc;
        this.m_strType.selectedIndex = data.config.decompose?1:0;

        this.m_itemLevel.text = data.level.toString();
        this.m_itemType.text = data.itemTypeText;

        this.m_itemStar.m_StarNumber.selectedIndex = data.star;
    

        this.m_itemPicture.m_icon.url = data.iconUrl;

     

        this.m_backgoundLoader.setSize( this.m_backgoundLoader.width,this.getBackgroundHeight()) ;
       

        //***************待对接参数****************

        //服务器未对接好  装备最终加成攻击力和防御力
        // m_physicalAttack : fgui.GTextField;
        // m_physicalDefense : fgui.GTextField;
        // m_firstitemEffectDescription : fgui.GTextField;
        // m_seconditemEffectDescription : fgui.GTextField;
        // m_firstitemEffectName : fgui.GTextField;
        // m_firstitemEffectLevel : fgui.GTextField;
        // m_seconditemEffectName : fgui.GTextField;
        // m_seconditemEffectLevel : fgui.GTextField;

        // m_itemTypePicture : fgui.GImage; //例如：重甲 贴图
        // m_itemPicture : ItemEquip;       //装备对应贴图
    }
    
    //装备卸下
    onBtnUnequip()
    {
        let uid = this.equipData.uid ;
        let data = Game.moduleModel.equip.GetDataByUID(uid);
        let pos = data.pos;
        let heroIdOff = data.onWho;
        Game.sender.hero.UnEquip(heroIdOff, uid);
        this.close();
    }
    //切换装备 打开装界面
    onBtnSwapEquip()
    {
        // TODO show EquipSelectDialog

    }
    getBackgroundHeight ():number
    {
        return this.m_unequipLoader.y+ this.m_unequipLoader.height- this.m_backgoundLoader.y;
    }

    onWindowShow()
    {
        
        this.m_btnUnequip.onClick(this,this.onBtnUnequip);
        this.m_btnSwapEquip.onClick(this,this.onBtnSwapEquip);
       
    }
    onWindowHide()
    {
        this.m_btnUnequip.offClick(this,this.onBtnUnequip);
        this.m_btnSwapEquip.offClick(this,this.onBtnSwapEquip);
        

    }









}