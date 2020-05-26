/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import UplevelAlertStruct from "../../Generates/GameHome/UplevelAlertStruct";
import PanelUplevel from "./PanelUplevel";
import { Player } from "../../../War/Datas/Player";
import TweenHelper from "../../../War/Utils/TweenHelper";

export default class UplevelAlert extends UplevelAlertStruct
{
    panel:PanelUplevel;
    
    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_equipDecorate.onClick(this, this.onClickEquipDecorate)
        this.m_equipWeapon.onClick(this, this.onClickEquipWeapon)
        this.m_equipConsume.onClick(this, this.onClickEquipConsume)
    }

    Open()
    {
        this.m_equipDecorate.SetId(Player.current.randomEquipDecorateId())
        this.m_equipWeapon.SetId(Player.current.randomEquipWeaponId())
        this.m_equipConsume.SetId(Player.current.randomEquipConsumeId())
        TweenHelper.spriteShow2(this);
    }

    onClickEquipDecorate()
    {
        var id = this.m_equipDecorate.equipId;
        Player.current.equipDecorateData.setId(id);
        this.panel.Close();
    }
    
    onClickEquipWeapon()
    {
        var id = this.m_equipWeapon.equipId;
        Player.current.equipWeaponData.setId(id);
        this.panel.Close();
    }

    onClickEquipConsume()
    {
        var id = this.m_equipConsume.equipId;
        Player.current.useEquipConsumeDelay(id);
        this.panel.Close();
    }
}