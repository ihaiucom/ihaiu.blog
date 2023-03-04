using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    //枚举类型：运动控制器优先级
    public enum MotionControllerPriority
    {
        LOWEST = 0,     //最低优先级
        LOW = 1,        //低优先级
        MEDIUM = 2,     //中等优先级
        HIGH = 3,       //高优先级
        HIGHEST = 4,    //最高优先级
    }
}
