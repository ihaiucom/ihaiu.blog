using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    //枚举类型：修改经验值的原因
    public enum ModifyXpReason
    {
        UNSPECIFIED = 0,        //未指定原因
        HERO_KILL = 1,          //杀死英雄
        CREEP_KILL = 2,         //杀死小兵
        ROSHAN_KILL = 3,        //杀死肉山
        TOME_OF_KNOWLEDGE = 4,  //使用知识之书
        OUTPOST = 5,            //占领前哨站
        MAX = 6,                //最大值
    }
}
