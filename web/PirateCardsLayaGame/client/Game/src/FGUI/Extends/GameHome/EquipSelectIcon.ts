/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipSelectIconStruct from "../../Generates/GameHome/EquipSelectIconStruct";
import Game from "../../../Game";
import ItemDecorateConfig from "../../../Config/ConfigExtends/ItemDecorateConfig";
import ItemWeaponConfig from "../../../Config/ConfigExtends/ItemWeaponConfig";
import TweenHelper from "../../../War/Utils/TweenHelper";
import EquipTip from "./EquipTip";
import { ItemType } from "../../../GameModule/DataEnums/ItemType";

export default class EquipSelectIcon extends EquipSelectIconStruct
{
    equipId: number;
    
    config:ItemDecorateConfig | ItemWeaponConfig;

    SetId(id: number)
    {
        var config = Game.config.item.getConfig(id);
        this.config = <any> config;
        this.equipId = id;

        this.m_icon.url = "res/sprite/icon/" + config.icon + ".png";
        this.m_title.text = config.name;
       
        var itemType = 0;
        switch(config.type)
        {
            case ItemType.Weapon:
                itemType = 0;
                break;
            case ItemType.Decorate:
                itemType = 1;
                break;
            case ItemType.Consume:
                itemType = 2;
                break;
        }

        if(config.coin && config.coin > 0)
        {
            this.m_coinText.text = config.coin + "";
        }
        this.m_itemType.setSelectedIndex(itemType);
    }

    
	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
        
        this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
    }

    onMouseDown()
    {
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
        Laya.timer.once(500, this, this.showTip);
    }

    
    onMouseUp()
    {
        Laya.timer.clear(this, this.showTip);
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp);
        
        EquipTip.instance.hide();
    }

    showTip()
    {
        EquipTip.instance.Show(this);
    }
}