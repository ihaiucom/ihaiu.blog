using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    ///  https://developer.valvesoftware.com/wiki/Damage_types
    /// </summary>
    public enum SourceEngineDamageTypes
    {
        /**
        * 通用伤害。
        */
        GENERIC = 0,
        /**
         * 由物理相互作用引起的伤害。忽略空气船驾驶员。
         */
        CRUSH = 1,
        /**
         * 子弹伤害。
         */
        BULLET = 2,
        /**
         * 利器造成的伤害，例如Manhacks或其他NPC的攻击。
         */
        SLASH = 4,
        /**
         * 火焰伤害。
         */
        BURN = 8,
        /**
         * 被车辆撞击。这需要为某些车辆的乘客设置以接收伤害。
         */
        VEHICLE = 16,
        /**
         * 跌落伤害。
         */
        FALL = 32,
        /**
         * 爆炸伤害。大多数车辆乘客将忽略。
         */
        BLAST = 64,
        /**
         * 铁棒伤害。
         */
        CLUB = 128,
        /**
         * 电击伤害，在伤害位置显示烟雾。
         */
        SHOCK = 256,
        /**
         * 声波伤害，由Gargantua和Houndeye NPC使用。
         */
        SONIC = 512,
        /**
         * 激光。
         */
        ENERGYBEAM = 1024,
        /**
         * 防止物理力量。
         */
        PREVENT_PHYSICS_FORCE = 2048,
        /**
         * 从不创建碎片。由十字弓使用。
         */
        NEVERGIB = 4096,
        /**
         * 总是创建碎片。
         */
        ALWAYSGIB = 8192,
        /**
         * 淹死伤害。
         */
        DROWN = 16384,
        /**
         * 与DMG_POISON相同。
         */
        PARALYZE = 32768,
        /**
         * 神经毒气伤害。
         */
        NERVEGAS = 65536,
        /**
         * 毒药伤害。
         */
        POISON = 131072,
        /**
         * 辐射。大多数车辆乘客将忽略。
         */
        RADIATION = 262144,
        /**
         * 在淹水后应用于玩家以恢复健康的伤害。
         */
        DROWNRECOVER = 524288,
        /**
         * 有毒化学物质或酸灼伤。
         */
        ACID = 1048576,
        /**
         * 在烤箱中。
         */
        SLOWBURN = 2097152,
        /**
         * 在死亡时不要创建布娃娃。
         */
        REMOVENORAGDOLL = 4194304,
        /**
         * 重力枪造成的伤害。
         */
        PHYSGUN = 8388608,
        /**
         * 等离子体。
         */
        PLASMA = 16777216,
    }
}
