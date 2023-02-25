using System;

namespace ZF
{
    /// <summary>
    /// 技能--行为
    /// </summary>
    [Flags]
    public enum AbilityBehavior
    {
        LAST_RESORT_POINT = -2147483648,
        CAN_SELF_CAST = 0, // 能自己施法
        FREE_DRAW_TARGETING = 0, // 自由拖拽目标
        IGNORE_SILENCE = 0, // 无视沉默
        NONE = 0,
        OVERSHOOT = 0, // 超过
        SHOW_IN_GUIDES = 0, // 显示指南
        SUPPRESS_ASSOCIATED_CONSUMABLE = 0, // 抑制相关消耗品
        UNLOCKED_BY_EFFECT_INDEX = 0, // 由效果索引解锁
        HIDDEN = 1, // #隐藏
        PASSIVE = 2, // #被动
        NO_TARGET = 4, // #无目标
        UNIT_TARGET = 8, // #目标
        POINT = 16, // #点
        AOE = 32, // #范围
        NOT_LEARNABLE = 64, // 不可学习
        CHANNELLED = 128, // #持续施法
        ITEM = 256, // 物品
        TOGGLE = 512, // 开关
        DIRECTIONAL = 1024, // 方向
        IMMEDIATE = 2048, // #立即
        AUTOCAST = 4096, // 自动施法
        OPTIONAL_UNIT_TARGET = 8192, // 可选目标单位
        OPTIONAL_POINT = 16384, // 可选点
        OPTIONAL_NO_TARGET = 32768, // 可选无目标
        AURA = 65536, // 光环
        ATTACK = 131072, // 法球
        DONT_RESUME_MOVEMENT = 262144, // 不可恢复移动
        ROOT_DISABLES = 524288, // 定身无法释放
        UNRESTRICTED = 1048576, // 无视限制
        IGNORE_PSEUDO_QUEUE = 2097152, // 总有效--自身施法
        IGNORE_CHANNEL = 4194304, // 施法打断有效
        DONT_CANCEL_MOVEMENT = 8388608, // 不影响移动
        DONT_ALERT_TARGET = 16777216, // 不惊醒目标
        DONT_RESUME_ATTACK = 33554432, // 不恢复攻击
        NORMAL_WHEN_STOLEN = 67108864, // 偷取保持前摇
        IGNORE_BACKSWING = 134217728, // 无视后摇
        RUNE_TARGET = 268435456, // 神符目标
        DONT_CANCEL_CHANNEL = 536870912, // 不取消持续施法
        VECTOR_TARGETING = 1073741824, // 矢量方向
    }
}
