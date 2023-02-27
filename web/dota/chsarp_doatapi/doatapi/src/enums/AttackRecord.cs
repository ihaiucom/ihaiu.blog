using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    /// 攻击记录
    /// </summary>
    public enum AttackRecord
    {

        FAIL_NO = 0,
        FAIL_TERRAIN_MISS = 1,
        FAIL_SOURCE_MISS = 2,
        FAIL_TARGET_EVADED = 3,
        FAIL_TARGET_INVULNERABLE = 4,
        FAIL_TARGET_OUT_OF_RANGE = 5,
        CANNOT_FAIL = 6,
        FAIL_BLOCKED_BY_OBSTRUCTION = 7,
    }
}
