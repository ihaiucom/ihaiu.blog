/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import OtherPlayerReviveViewStruct from "../../Generates/GameWar3DUI/OtherPlayerReviveViewStruct";
import { InputManager } from "../../../GameWar/Logic/Utils/InputManager";
import { EnumInputCmd } from "../../../GameWar/Logic/Enum/InputDefine";

export default class OtherPlayerReviveView extends OtherPlayerReviveViewStruct
{
    private static pool = [];
    /** 拥有玩家的POS */
    private ownerPos : number;

    static poolGet():OtherPlayerReviveView
    {
        let item:OtherPlayerReviveView;
        if(this.pool.length > 0)
        {
            item = this.pool.shift();
        }
        else
        {
            item = OtherPlayerReviveView.createInstance();
        }

        return item;
    }

    poolRecover()
    {
        if(OtherPlayerReviveView.pool.indexOf(this) == -1 )
        {
            OtherPlayerReviveView.pool.push(this);
        }
        this.ownerPos = -1;
        this.visible = false;
    }

    public Init(pos : number)
    {
        this.ownerPos = pos;
        this.m_icon.onClick(this, this.ReviveOtherPerson);
        this.visible = true;
    }   

    public Release()
    {
        this.offClick(this, this.ReviveOtherPerson);
        this.poolRecover();
    }

    private ReviveOtherPerson()
    {
        if(this.ownerPos < 0)
        {
            return;
        }
        InputManager.Get().AddCmd(EnumInputCmd.REVIVE, [this.ownerPos]);
    }
    
}