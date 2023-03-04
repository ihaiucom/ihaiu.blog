using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    /// 神符类型
    /// </summary>
    public enum RuneType
    {
        INVALID = -1,           //无效符文
        DOUBLEDAMAGE = 0,       //双倍伤害符文
        HASTE = 1,              //加速符文
        ILLUSION = 2,           //幻象符文
        INVISIBILITY = 3,       //隐身符文
        REGENERATION = 4,       //回复符文
        BOUNTY = 5,             //赏金符文
        ARCANE = 6,             //奥术符文
        WATER = 7,              //水符文
    }
}
