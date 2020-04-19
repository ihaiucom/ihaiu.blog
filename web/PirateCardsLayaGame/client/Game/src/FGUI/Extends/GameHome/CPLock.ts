/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CPLockStruct from "../../Generates/GameHome/CPLockStruct";
import { ChestLockData, ChestLockItemType } from "../../../War/Logics/ChestLockData";
import PanelPopupChest from "./PanelPopupChest";
import FxShootBoom from "./FxShootBoom";
import RandomHelper from "../../../War/Utils/RandomHelper";
import SoundController from "../../../War/Logics/SoundController";
import SoundConsts from "../../../War/Enums/SoundConsts";

export default class CPLock extends CPLockStruct
{
    panel: PanelPopupChest;
    lockData: ChestLockData;
    Init(panel: PanelPopupChest)
    {
        this.panel = panel;
        var lockData = this.lockData = panel.lockData;
        this.m_dial.Init(lockData);
        this.m_switch.Init(lockData);
        this.m_lampGroup.Init(lockData);
        this.m_bridge.m_state.setSelectedIndex(0);

        this.Run();
    }

    Run()
    {
        this.panel.on(Laya.Event.MOUSE_DOWN, this, this.onClickHandler);
        this.m_switch.Run();
    }

    onClickHandler()
    {
        this.panel.off(Laya.Event.MOUSE_DOWN,this, this.onClickHandler);
        this.m_switch.Stop();
        var angle = this.m_switch.m_arrow.rotation;
        var itemData = this.lockData.getItemByAngle(angle);
        console.log(angle, itemData);
        if(itemData)
        {
            if(!itemData.isOpen && !this.lockData.isEnd)
            {
                switch(itemData.config.type)
                {
                    case ChestLockItemType.LoadBig:
                    case ChestLockItemType.LoadSmall:
                        itemData.isOpen = true;
                        this.m_dial.setItemState(itemData);
                        this.m_lampGroup.setItemState(itemData);
                        this.m_switch.m_arrow.m_clickSuccess.play();
                        break;
                    default:
                        this.lockData.leftClickCount --;
                        this.m_switch.m_arrow.m_clickFail.play();
                        break;
                }

            }
            else
            {
                this.lockData.leftClickCount --;
                this.m_switch.m_arrow.m_clickFail.play();
            }
        }
        else
        {
            this.lockData.leftClickCount --;
            this.m_switch.m_arrow.m_clickSuccess.play();
        }
        SoundController.instance.playSound(SoundConsts.PickLockNeutral);
        
        if(!this.lockData.isEnd)
        {
            var isOpenAll = this.lockData.isOpendAll();
        
            if(isOpenAll)
            {
                this.lockData.isEnd = true;
                this.OnSuccess();
            }
            else
            {
                if(this.lockData.leftClickCount <= 0)
                {
                    this.lockData.isEnd = true;
                    this.OnFail();
                }
            }
        }


        Laya.timer.once(500, this, this.Run);
    }


    OnSuccess()
    {
        this.m_bridge.m_state.setSelectedIndex(1);
        SoundController.instance.playSound(SoundConsts.PickLockSuccess);
        Laya.timer.once(500, this, this.SetResult, [true]);
    }

    OnFail()
    {
        SoundController.instance.playSound(SoundConsts.PickLockFail);
        
        for(var i = 0; i < 4; i ++)
        {
            var fx = FxShootBoom.PoolGet();
            fx.setXY(RandomHelper.getRandomIntInclusive( -120, 120), RandomHelper.getRandomIntInclusive( -280, 120));
            fx.DelayPalay(RandomHelper.getRandomIntInclusive(0, 200), this);
        }
        Laya.timer.once(500, this, this.SetResult, [true]);
    }

    SetResult(isSuccess: boolean = true)
    {
        this.panel.sResult.dispatch(isSuccess);
        this.panel.Close();

    }


    OnClose()
    {
        Laya.timer.clearAll(this);
        this.m_switch.Stop();
    }
}