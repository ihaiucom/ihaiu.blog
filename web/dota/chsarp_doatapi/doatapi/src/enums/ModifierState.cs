using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    /// http://www.dota2rpg.com/forum.php?mod=viewthread&tid=1423
    /// 修改器状态
    /// </summary>
    public enum ModifierState
    {
        ROOTED = 0,
        DISARMED = 1,
        ATTACK_IMMUNE = 2,
        SILENCED = 3,
        MUTED = 4,
        STUNNED = 5,
        HEXED = 6,
        INVISIBLE = 7,
        INVULNERABLE = 8,
        MAGIC_IMMUNE = 9,
        PROVIDES_VISION = 10,
        NIGHTMARED = 11,
        BLOCK_DISABLED = 12,
        EVADE_DISABLED = 13,
        UNSELECTABLE = 14,
        CANNOT_TARGET_ENEMIES = 15,
        CANNOT_MISS = 16,
        SPECIALLY_DENIABLE = 17,
        FROZEN = 18,
        COMMAND_RESTRICTED = 19,
        NOT_ON_MINIMAP = 20,
        LOW_ATTACK_PRIORITY = 21,
        NO_HEALTH_BAR = 22,
        NO_HEALTH_BAR_FOR_ENEMIES = 23,
        FLYING = 24,
        NO_UNIT_COLLISION = 25,
        NO_TEAM_MOVE_TO = 26,
        NO_TEAM_SELECT = 27,
        PASSIVES_DISABLED = 28,
        DOMINATED = 29,
        BLIND = 30,
        OUT_OF_GAME = 31,
        FAKE_ALLY = 32,
        FLYING_FOR_PATHING_PURPOSES_ONLY = 33,
        TRUESIGHT_IMMUNE = 34,
        UNTARGETABLE = 35,
        IGNORING_MOVE_AND_ATTACK_ORDERS = 36,
        ALLOW_PATHING_THROUGH_TREES = 37,
        NOT_ON_MINIMAP_FOR_ENEMIES = 38,
        UNSLOWABLE = 39,
        TETHERED = 40,
        IGNORING_STOP_ORDERS = 41,
        FEARED = 42,
        TAUNTED = 43,
        CANNOT_BE_MOTION_CONTROLLED = 44,
        FORCED_FLYING_VISION = 45,
        ATTACK_ALLIES = 46,
        ALLOW_PATHING_THROUGH_CLIFFS = 47,
        ALLOW_PATHING_THROUGH_FISSURE = 48,
        SPECIALLY_UNDENIABLE = 49,
    }
}
