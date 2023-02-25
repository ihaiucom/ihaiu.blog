using System;

namespace ZF
{
    /// <summary>
    /// 伤害类型
    /// </summary>
    [Flags]
    public enum DamageTypes
    {
        NONE = 0,
        PHYSICAL = 1, // 物理
        MAGICAL = 2, // 魔法
        PURE = 4, // 存粹
        ALL = 7, // 所有
        HP_REMOVAL = 8, // 生命移除
        ABILITY_DEFINED = 22, // 技能定义
    }
}
