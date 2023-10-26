using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    // 枚举属性加成状态
    public enum AttributeDerivedStats
    {
        STRENGTH_DAMAGE = 0, // 力量对伤害的加成
        STRENGTH_HP = 1, // 力量对生命值的加成
        STRENGTH_HP_REGEN = 2, // 力量对生命值回复的加成
        AGILITY_DAMAGE = 3, // 敏捷对伤害的加成
        AGILITY_ARMOR = 4, // 敏捷对护甲的加成
        AGILITY_ATTACK_SPEED = 5, // 敏捷对攻击速度的加成
        INTELLIGENCE_DAMAGE = 6, // 智力对伤害的加成
        INTELLIGENCE_MANA = 7, // 智力对魔法值的加成
        INTELLIGENCE_MANA_REGEN = 8, // 智力对魔法值回复的加成
    }
}
