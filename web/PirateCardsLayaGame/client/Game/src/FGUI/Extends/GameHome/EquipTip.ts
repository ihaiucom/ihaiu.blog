/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipTipStruct from "../../Generates/GameHome/EquipTipStruct";
import EquipIcon from "./EquipIcon";
import EquipSelectIcon from "./EquipSelectIcon";

export default class EquipTip extends EquipTipStruct
{
    private static _instance: EquipTip;
    static get instance()
    {
        if(!this._instance)
        {
            this._instance = EquipTip.createInstance();
            this._instance.init();
        }
        return this._instance;
    }

    init()
    {
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onStageMouseDown);
    }

    onStageMouseDown(event)
    {
        // console.log(event);
        this.hide();
    }

    Show(icon: EquipIcon | EquipSelectIcon)
    {
        if(icon)
        {
            if(icon instanceof EquipIcon)
            {
                if(icon.data && icon.data.config)
                {
                    this.title = icon.data.config.zhCnItemDes;
                }
            }
            else
            {
                if(icon.config)
                {
                    this.title = icon.config.zhCnItemDes;
                }
            }
        }

        var pos = icon.localToGlobal(0, 0)
        this.x = pos.x - this.width * 0.5;
        this.y = pos.y - icon.height * 0.5 - this.height;
        fgui.GRoot.inst.addChild(this);

    }

    hide()
    {
        this.removeFromParent();
    }
    
}