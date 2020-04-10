/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipLevelUpDialogStruct from "../../Generates/ModuleEquip/EquipLevelUpDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import EquipIcon from "./EquipIcon";
import Game from "../../../Game";
import EquipIconItemButtonSmall from "./EquipIconItemButtonSmall";

export default class EquipLevelUpDialog extends EquipLevelUpDialogStruct
{
    private list: Array<int> = [];
    private isLevelUp = true;
    private callback: Function;
    private dialogCtrl: DialogCtrl;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);
        this.dialogCtrl.setCloseBtnEvent();

        this.m_btnClose.onClick(this, this.close);
        this.m_btnOk.onClick(this, this.OnClickOK);
        this.m_btnCancel.onClick(this, this.close);

        this.m_levellist.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_levellist.on(fgui.Events.CLICK_ITEM, this, this.clickListItem);

        this.m_starList.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_starList.on(fgui.Events.CLICK_ITEM, this, this.clickListItem);
    }

    OnClickOK()
    {
        if(this.callback)
        {
            this.callback();
        }
        this.close();
    }

    open(list: Array<int>, func: Function, isLevelUp: boolean = false): void {
        this.isLevelUp = isLevelUp;
        this.callback = func;
        this.list = list;
        this.updateView()
        this.dialogCtrl.open();
    }

    //弹窗关闭
    close(): void  {
        this.dialogCtrl.close();     
    }

    updateView()
    {
        this.m_state.selectedIndex = this.isLevelUp?0:1;
        this.m_levellist.numItems = this.list.length;
        this.m_starList.numItems = 1;
    }

    //List刷新回调
    renderListItem(index: number, item: EquipIconItemButtonSmall): void  {
        let uid = this.list[index]     
        if(uid)
        {
            let data = Game.moduleModel.equip.GetDataByUID(uid);
            item.RenderItem(data);
        }
    }

    //List点击回调
    clickListItem(target: EquipIcon, event: Event): void  {
        // TODO 
        console.log("点到++++++++！！！！showTips")
    }
}