/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CPLockSwitchStruct from "../../Generates/GameHome/CPLockSwitchStruct";
import { ChestLockData } from "../../../War/Logics/ChestLockData";
import RandomHelper from "../../../War/Utils/RandomHelper";

export default class CPLockSwitch extends CPLockSwitchStruct
{
    lockData:ChestLockData;

    static speed = 0.2;

    elasticList = [Laya.Ease.linearInOut];


    Init(lockData: ChestLockData)
    {
        this.lockData =lockData; 
        this.m_arrow.rotation = lockData.beginAngle;
    }

    isRuning: boolean = false;
    Run()
    {
        if(this.isRuning)
        {
            return;
        }
        this.isRuning = true;
        Laya.timer.frameLoop(1, this, this.onLoop);
    }

    Stop()
    {
        this.isRuning = false;
        Laya.timer.clearAll(this);
    }



    get angle()
    {
        return this.m_arrow.rotation;
    }

    set angle(val: number)
    {
        this.m_arrow.rotation = val;
    }

    onLoop()
    {
        this.angle += Laya.timer.delta * CPLockSwitch.speed;
        if(this.angle >= this.lockData.endAngle)
        {
            this.angle = this.lockData.endAngle;
            CPLockSwitch.speed *= -1;
        }
        else if(this.angle <= this.lockData.beginAngle)
        {
            this.angle = this.lockData.beginAngle;
            CPLockSwitch.speed *= -1;
        }
    }
}

window['CPLockSwitch'] = CPLockSwitch;