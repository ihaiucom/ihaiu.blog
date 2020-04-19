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

    speed = 0.05;

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
        Laya.Tween.clearAll(this.m_arrow);
        this.ArrowTweenToMax();
    }

    Stop()
    {
        console.log("Stop");
        this.isRuning = false;
        Laya.Tween.clearAll(this.m_arrow);
    }

    ArrowTweenToMax()
    {
        console.log("ArrowTweenToMax",  this.lockData.endAngle);
        Laya.Tween.clearAll(this.m_arrow);
        var duration = this.getDuration( this.lockData.endAngle);
        console.log(ChestLockData.AngleSub360(this.m_arrow.rotation, this.lockData.endAngle), duration);
        var tween = Laya.Tween.to(this.m_arrow, {rotation: this.lockData.endAngle}, duration, Laya.Ease.linearInOut, Laya.Handler.create(this, this.ArrowTweenToMin), 0, true, true);
      
    }

    
    ArrowTweenToMin()
    {
        console.log("ArrowTweenToMin", this.lockData.beginAngle);
        Laya.Tween.clearAll(this.m_arrow);
        var duration = this.getDuration( this.lockData.beginAngle);
        console.log(ChestLockData.AngleSub360(this.m_arrow.rotation, this.lockData.beginAngle), duration);
        var tween = Laya.Tween.to(this.m_arrow, {rotation: this.lockData.beginAngle}, duration, Laya.Ease.linearInOut, Laya.Handler.create(this, this.ArrowTweenToMax), 0, true, true);
       
    }

    getDuration(endAngle: number)
    {
        var duration = Math.ceil(ChestLockData.AngleSub360(this.m_arrow.rotation,endAngle) / this.speed);
        if(!duration)
        {
            duration = 200;
        }
        else if(duration > 3000)
        {
            duration = 3000;
        }
        return duration;

    }
}