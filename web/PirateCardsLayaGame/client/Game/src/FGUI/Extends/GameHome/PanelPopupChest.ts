/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PanelPopupChestStruct from "../../Generates/GameHome/PanelPopupChestStruct";
import { ChestLockData } from "../../../War/Logics/ChestLockData";

export default class PanelPopupChest extends PanelPopupChestStruct
{
    lockData:ChestLockData = new ChestLockData();
    sResult: TypedSignal<boolean> = new TypedSignal<boolean>();

    
	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
        
        this.Open();
        window['panelPopupChest'] = this;
		
		
	}

    Open()
    {
        this.lockData.init();
        this.m_lock.Init(this);

        this.visible = true;
        this.alpha = 0;
        Laya.Tween.to(this, {alpha: 1}, 200)
    }

    Close()
    {
        Laya.Tween.to(this, {alpha: 0}, 200, null, Laya.Handler.create(this, ()=>{
            this.visible = false;
        }))
    }
}