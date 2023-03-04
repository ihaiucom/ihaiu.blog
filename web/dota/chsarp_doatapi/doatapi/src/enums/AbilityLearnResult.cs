using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    // 枚举技能学习结果
    public enum AbilityLearnResult
    {
        CAN_BE_UPGRADED = 0, // 技能可以升级
        CANNOT_BE_UPGRADED_NOT_UPGRADABLE = 1, // 技能无法升级，不可升级
        CANNOT_BE_UPGRADED_AT_MAX = 2, // 技能无法升级，已达到最高等级
        CANNOT_BE_UPGRADED_REQUIRES_LEVEL = 3, // 技能无法升级，需要等级不够
        NOT_LEARNABLE = 4, // 技能无法学习
    }
}
