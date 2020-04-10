/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipStarUpDialogStruct from "../../Generates/ModuleEquip/EquipStarUpDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import Game from "../../../Game";
import { EquipQuality } from "../../../GameModule/DataEnums/EquipType";
import TEXT from "../../../Config/Keys/TEXT";

export default class EquipStarUpDialog extends EquipStarUpDialogStruct
{
    private callback: Function;
    private dialogCtrl: DialogCtrl;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);
        this.dialogCtrl.setCloseBtnEvent();

        this.m_btnClose.onClick(this, this.close);
        this.m_equip.m_btnSelect.onClick(this, this.OnSelectEquip)
        this.m_item.m_btnSelect.onClick(this, this.OnSelectItem)
    }
    
    open(uid: int, func: Function): void {
        this.callback = func;
        this.updateView(uid)
        this.dialogCtrl.open();
    }

    //弹窗关闭
    close(): void  {
        this.dialogCtrl.close();     
    }

    updateView(uid: int)
    {
        let data = Game.moduleModel.equip.GetDataByUID(uid);
        let quality = data.quality;
        if(quality >= EquipQuality.Purple) // 紫橙消耗升星石
        {
            this.m_equip.updateEquip(data)
            this.m_item.updateItem(uid);
        }
        else
        {
            this.m_item.visible = false;
            this.m_equip.updateEquip(data);
        }
    }

    OnSelectEquip()
    {
        if(!this.m_equip.equipEnough)
        {
            Game.system.toastText(TEXT.EquipNotEnough);
            return
        }

        this.OnCallback(this.m_equip.uid, true)
    }

    OnSelectItem()
    {
        if(!this.m_item.itemEnough)
        {
            Game.system.toastText(TEXT.EquipNotEnough);
            return
        }

        this.OnCallback(this.m_item.itemID, false)
    }

    OnCallback(id: int, isEquip: boolean = false)
    {
        if(this.callback)
        {
            this.callback(id, isEquip);
        }
        this.close();
    }
}