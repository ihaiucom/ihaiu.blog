using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    /// 攻击设定
    /// </summary>
    public enum UnitAttackCapability
    {
        NO_ATTACK = 0,
        MELEE_ATTACK = 1,
        RANGED_ATTACK = 2,
        RANGED_ATTACK_DIRECTIONAL = 4,
    }
}
