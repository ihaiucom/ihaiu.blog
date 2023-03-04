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
        NO_ATTACK = 0,                      // 无攻击能力
        MELEE_ATTACK = 1,                   // 近战攻击能力
        RANGED_ATTACK = 2,                  // 远程攻击能力
        RANGED_ATTACK_DIRECTIONAL = 4,      // 有方向的远程攻击能力
    }
}
