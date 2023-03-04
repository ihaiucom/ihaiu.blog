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
        // 无
        NONE = 0,
        // 永久
        PERMANENT = 1,
        // 多个
        MULTIPLE = 2,
        // 忽略无敌状态
        IGNORE_INVULNERABLE = 4,
        // 光环优先级
        AURA_PRIORITY = 8,
        // 忽略闪避
        IGNORE_DODGE = 16,
    }
}
