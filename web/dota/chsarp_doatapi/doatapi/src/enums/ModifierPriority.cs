using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    //枚举类型：状态优先级
    public enum ModifierPriority
    {
        LOW = 0,            //低优先级
        NORMAL = 1,         //普通优先级
        HIGH = 2,           //高优先级
        ULTRA = 3,          //超高优先级
        SUPER_ULTRA = 4,    //极高优先级
    }
}
