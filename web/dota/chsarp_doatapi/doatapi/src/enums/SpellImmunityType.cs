using System;

namespace ZF
{
    /// <summary>
    /// 技能免疫类型
    /// </summary>
    public enum SpellImmunityType
    {
        SPELL_IMMUNITY_NONE, // 无
        SPELL_IMMUNITY_ALLIES_YES, // 可用于技能免疫的友方
        SPELL_IMMUNITY_ALLIES_NO, // 不可用于技能免疫的友方
        SPELL_IMMUNITY_ENEMIES_YES, // 可用于技能免疫的敌方
        SPELL_IMMUNITY_ENEMIES_NO  // 不可用于技能免疫的敌方

    }
}
