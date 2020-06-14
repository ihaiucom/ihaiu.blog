/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import UplevelAlertStruct from "../../Generates/GameHome/UplevelAlertStruct";
import PanelUplevel from "./PanelUplevel";
import { Player } from "../../../War/Datas/Player";
import TweenHelper from "../../../War/Utils/TweenHelper";
import EquipSelectIcon from "./EquipSelectIcon";
import { ItemType } from "../../../GameModule/DataEnums/ItemType";
import ItemConfig from "../../../Config/ConfigExtends/ItemConfig";
import GameStatus from "../../../War/Datas/GameStatus";
import Game from "../../../Game";

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
        this.onSelect(this.m_equipDecorate);
    }
    
    onClickEquipWeapon()
    {
        this.onSelect(this.m_equipWeapon);
    }

    onClickEquipConsume()
    {
        this.onSelect(this.m_equipConsume);
    }

    onSelect(icon: EquipSelectIcon)
    {
        if(icon.config)
        {
            var itemConfig:ItemConfig = <any> icon.config;
            if(itemConfig.coin && itemConfig.coin > 0)
            {
                if(GameStatus.goldPerGame < itemConfig.coin)
                {
                    Game.system.toastText("金币不够");
                    return;
                }
                GameStatus.goldPerGame -= itemConfig.coin;
            }

            var id = icon.config.id;
            switch(icon.config.type)
            {
                case ItemType.Weapon:
                    Player.current.equipWeaponData.setId(id);
                    break;
                case ItemType.Decorate:
                    Player.current.equipDecorateData.setId(id);
                    break;
                case ItemType.Consume:
                    Player.current.useEquipConsumeDelay(id);
                    break;
            }
        }

        this.panel.Close();
    }
}