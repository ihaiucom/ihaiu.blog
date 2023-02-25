using System;

namespace ZF
{
    /// <summary>
    /// 单位--目标标记
    /// </summary>
    [Flags]
    public enum UnitTargetFlags
    {
        NONE = 0,
        RANGED_ONLY = 2, // 远程单位
        MELEE_ONLY = 4, // 混乱
        DEAD = 8, // 已死亡
        MAGIC_IMMUNE_ENEMIES = 16, // 魔法免疫的敌人
        NOT_MAGIC_IMMUNE_ALLIES = 32, // 不是魔法免疫的盟友
        INVULNERABLE = 64, // 无敌
        FOW_VISIBLE = 128, // 可见
        NO_INVIS = 256, // 不是隐形的
        NOT_ANCIENTS = 512, // 不是古老的
        PLAYER_CONTROLLED = 1024, // 玩家控制的
        NOT_DOMINATED = 2048, // 不可控制的
        NOT_SUMMONED = 4096, // 非召唤的
        NOT_ILLUSIONS = 8192, // 不是幻象
        NOT_ATTACK_IMMUNE = 16384, // 不是攻击免疫
        MANA_ONLY = 32768,
        CHECK_DISABLE_HELP = 65536, // 检测玩家“禁用帮助”选项
        NOT_CREEP_HERO = 131072, // 不是野怪
        OUT_OF_WORLD = 262144, // 被放逐出世界的
        NOT_NIGHTMARED = 524288, // 非被催眠的
        PREFER_ENEMIES = 1048576, // 更倾向敌人
        RESPECT_OBSTRUCTIONS = 2097152,
    }
}
