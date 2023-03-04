using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    //枚举类型：状态移除方式
    public enum ModifierRemove
    {
        ALL = 0,        //移除所有状态
        ENEMY = 1,      //移除敌方状态
        ALLY = 2,       //移除友方状态
    }
}
