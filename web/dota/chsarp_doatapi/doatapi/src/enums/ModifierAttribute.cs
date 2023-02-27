using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    /// 修改器属性
    /// </summary>
    public enum ModifierAttribute
    {
        NONE = 0,
        PERMANENT = 1,
        MULTIPLE = 2,
        IGNORE_INVULNERABLE = 4,
        AURA_PRIORITY = 8,
        IGNORE_DODGE = 16,
    }
}
