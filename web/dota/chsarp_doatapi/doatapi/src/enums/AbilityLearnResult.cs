using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    public enum AbilityLearnResult
    {
        CAN_BE_UPGRADED = 0,
        CANNOT_BE_UPGRADED_NOT_UPGRADABLE = 1,
        CANNOT_BE_UPGRADED_AT_MAX = 2,
        CANNOT_BE_UPGRADED_REQUIRES_LEVEL = 3,
        NOT_LEARNABLE = 4,
    }
}
