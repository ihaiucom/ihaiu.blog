using System;

namespace ZF
{
    /// <summary>
    /// 伤害标记
    /// </summary>
    [Flags]
    public enum DamageFlag
    {
        NONE = 0,
        IGNORES_MAGIC_ARMOR = 1, // 无视魔抗
        IGNORES_PHYSICAL_ARMOR = 2, // 无视物理护甲
        BYPASSES_INVULNERABILITY = 4, // 跳过无敌
        BYPASSES_BLOCK = 8, // 块
        REFLECTION = 16, //反弹标记
        HPLOSS = 32, // 生命丢失
        NO_DIRECTOR_EVENT = 64, // 无 目录 事件
        NON_LETHAL = 128, // 非致命的
        USE_COMBAT_PROFICIENCY = 256, // 使用 战斗 精通
        NO_DAMAGE_MULTIPLIERS = 512, // 没有 伤害 加倍
        NO_SPELL_AMPLIFICATION = 1024, // 没有 释放 放大器
        DONT_DISPLAY_DAMAGE_IF_SOURCE_HIDDEN = 2048,// 如果 隐藏的，不显示伤害
        NO_SPELL_LIFESTEAL = 4096, // 不释放 致命
        PROPERTY_FIRE = 8192, // 属性 火
        IGNORES_BASE_PHYSICAL_ARMOR = 16384, // 无视 基础 物理 护甲
        SECONDARY_PROJECTILE_ATTACK = 32768, // 二级 弹射 攻击
        FORCE_SPELL_AMPLIFICATION = 65536, // 强制 释放 放大器
        MAGIC_AUTO_ATTACK = 131072, // 魔法自动攻击
    }
}
