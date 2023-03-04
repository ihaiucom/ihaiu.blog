using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    /// http://www.dota2rpg.com/forum.php?mod=viewthread&tid=1423
    /// 修改器功能
    /// 修改器事件
    /// </summary>
    public enum ModifierFunction
    {
        /**
         * Method Name: `GetModifierPreAttack_BonusDamage`
         */
        PREATTACK_BONUS_DAMAGE = 0,  //增加攻击前附加的额外伤害
        /**
         * Method Name: `GetModifierPreAttack_BonusDamage_Target`
         */
        PREATTACK_BONUS_DAMAGE_TARGET = 1, //攻击特定目标附加的额外伤害
        /**
         * Method Name: `GetModifierPreAttack_BonusDamage_Proc`
         */
        PREATTACK_BONUS_DAMAGE_PROC = 2,  //触发攻击前附加的额外伤害
        /**
         * Method Name: `GetModifierPreAttack_BonusDamagePostCrit`
         */
        PREATTACK_BONUS_DAMAGE_POST_CRIT = 3, //暴击后触发的攻击前附加的额外伤害
        /**
         * Method Name: `GetModifierBaseAttack_BonusDamage`
         */
        BASEATTACK_BONUSDAMAGE = 4,  //增加基础攻击力
        /**
         * Method Name: `GetModifierProcAttack_BonusDamage_Physical`
         */
        PROCATTACK_BONUS_DAMAGE_PHYSICAL = 5,  //触发攻击附加的物理伤害
        /**
         * Method Name: `GetModifierProcAttack_ConvertPhysicalToMagical`
         */
        PROCATTACK_CONVERT_PHYSICAL_TO_MAGICAL = 6,  //将物理伤害转化为魔法伤害
        /**
         * Method Name: `GetModifierProcAttack_BonusDamage_Magical`
         */
        PROCATTACK_BONUS_DAMAGE_MAGICAL = 7,  //触发攻击附加的魔法伤害
        /**
         * Method Name: `GetModifierProcAttack_BonusDamage_Pure`
         */
        PROCATTACK_BONUS_DAMAGE_PURE = 8,   //触发攻击附加的纯粹伤害
        /**
         * Method Name: `GetModifierProcAttack_BonusDamage_Magical_Target`
         */
        PROCATTACK_BONUS_DAMAGE_MAGICAL_TARGET = 9,  //攻击特定目标触发的魔法伤害
        /**
         * Method Name: `GetModifierProcAttack_Feedback`
         */
        PROCATTACK_FEEDBACK = 10, //反弹攻击伤害
        /**
         * Method Name: `GetModifierOverrideAttackDamage`
         */
        OVERRIDE_ATTACK_DAMAGE = 11,    //覆盖攻击伤害
        /**
         * Method Name: `GetModifierPreAttack`
         */
        PRE_ATTACK = 12,  //攻击前触发的效果
        /**
         * Method Name: `GetModifierInvisibilityLevel`
         */
        INVISIBILITY_LEVEL = 13,     //设置隐身等级
        /**
         * Method Name: `GetModifierInvisibilityAttackBehaviorException`
         */
        INVISIBILITY_ATTACK_BEHAVIOR_EXCEPTION = 14,   //设定隐身攻击行为
        /**
         * Method Name: `GetModifierPersistentInvisibility`
         */
        PERSISTENT_INVISIBILITY = 15,  //持续隐身
        /**
         * Method Name: `GetModifierMoveSpeedBonus_Constant`
         */
        MOVESPEED_BONUS_CONSTANT = 16,  //增加一个固定的移动速度值
        /**
         * Method Name: `GetModifierMoveSpeedOverride`
         */
        MOVESPEED_BASE_OVERRIDE = 17,   //覆盖基础移动速度
        /**
         * Method Name: `GetModifierMoveSpeedBonus_Percentage`
         */
        MOVESPEED_BONUS_PERCENTAGE = 18,  //增加一个百分比的移动速度
        /**
         * Method Name: `GetModifierMoveSpeedBonus_Percentage_Unique`
         */
        MOVESPEED_BONUS_PERCENTAGE_UNIQUE = 19,  //增加一个唯一的百分比移动速度
        /**
         * Method Name: `GetModifierMoveSpeedBonus_Special_Boots`
         */
        MOVESPEED_BONUS_UNIQUE = 20, //增加一个唯一的移动速度值
        /**
         * Method Name: `GetModifierMoveSpeedBonus_Special_Boots_2`
         */
        MOVESPEED_BONUS_UNIQUE_2 = 21, //增加另一个唯一的移动速度值
        /**
         * Method Name: `GetModifierMoveSpeedBonus_Constant_Unique`
         */
        MOVESPEED_BONUS_CONSTANT_UNIQUE = 22,  //增加一个唯一的固定移动速度值
        /**
         * Method Name: `GetModifierMoveSpeedBonus_Constant_Unique_2`
         */
        MOVESPEED_BONUS_CONSTANT_UNIQUE_2 = 23,  //增加另一个唯一的固定移动速度值
        /**
         * Method Name: `GetModifierMoveSpeed_Absolute`
         */
        MOVESPEED_ABSOLUTE = 24,  //设置一个绝对的移动速度值
        /**
         * Method Name: `GetModifierMoveSpeed_AbsoluteMin`
         */
        MOVESPEED_ABSOLUTE_MIN = 25,  //设置一个最小的绝对移动速度值
        /**
         * Method Name: `GetModifierMoveSpeed_AbsoluteMax`
         */
        MOVESPEED_ABSOLUTE_MAX = 26,  //设置一个最大的绝对移动速度值
        /**
         * Method Name: `GetModifierIgnoreMovespeedLimit`
         */
        IGNORE_MOVESPEED_LIMIT = 27,  //忽略移动速度上限
        /**
         * Method Name: `GetModifierMoveSpeed_Limit`
         */
        MOVESPEED_LIMIT = 28,   //设置移动速度上限
        /**
         * Method Name: `GetModifierAttackSpeedBaseOverride`
         */
        ATTACKSPEED_BASE_OVERRIDE = 29,   //覆盖基础攻击速度
        /**
         * Method Name: `GetModifierFixedAttackRate`
         */
        FIXED_ATTACK_RATE = 30,   //设置一个固定的攻击速度
        /**
         * Method Name: `GetModifierAttackSpeedBonus_Constant`
         */
        ATTACKSPEED_BONUS_CONSTANT = 31,   //增加一个固定的攻击速度值
        /**
         * Method Name: `GetModifierAttackSpeed_Limit`
         */
        IGNORE_ATTACKSPEED_LIMIT = 32,  //忽略攻击速度上限
        /**
         * Method Name: `GetModifierCooldownReduction_Constant`
         */
        COOLDOWN_REDUCTION_CONSTANT = 33,   //减少技能冷却时间
        /**
         * Method Name: `GetModifierManacostReduction_Constant`
         */
        MANACOST_REDUCTION_CONSTANT = 34,     //减少技能魔法消耗
        /**
         * Method Name: `GetModifierBaseAttackTimeConstant`
         */
        BASE_ATTACK_TIME_CONSTANT = 35,  //设置一个基础攻击间隔时间
        /**
         * Method Name: `GetModifierBaseAttackTimeConstant_Adjust`
         */
        BASE_ATTACK_TIME_CONSTANT_ADJUST = 36, //调整基础攻击间隔时间
        /**
         * Method Name: `GetModifierBaseAttackTimePercentage`
         */
        BASE_ATTACK_TIME_PERCENTAGE = 37,    //增加一个百分比的攻击间隔时间
        /**
         * Method Name: `GetModifierAttackPointConstant`
         */
        ATTACK_POINT_CONSTANT = 38,   //设置一个基础攻击前摇时间
        /**
         * Method Name: `GetModifierBonusDamageOutgoing_Percentage`
         */
        BONUSDAMAGEOUTGOING_PERCENTAGE = 39,   //增加一个百分比的物理伤害
        /**
         * Method Name: `GetModifierDamageOutgoing_Percentage`
         */
        DAMAGEOUTGOING_PERCENTAGE = 40,    //增加一个百分比的伤害
        /**
         * Method Name: `GetModifierDamageOutgoing_Percentage_Illusion`
         */
        DAMAGEOUTGOING_PERCENTAGE_ILLUSION = 41,  //增加一个百分比的幻象伤害
        /**
         * Method Name: `GetModifierDamageOutgoing_Percentage_Illusion_Amplify`
         */
        DAMAGEOUTGOING_PERCENTAGE_ILLUSION_AMPLIFY = 42, //增加一个幻象伤害加成
        /**
         * Method Name: `GetModifierTotalDamageOutgoing_Percentage`
         */
        TOTALDAMAGEOUTGOING_PERCENTAGE = 43,  //增加一个总体伤害加成
        /**
         * Method Name: `GetModifierSpellAmplify_PercentageCreep`
         */
        SPELL_AMPLIFY_PERCENTAGE_CREEP = 44,  //增加一个百分比的对野怪技能加成
        /**
         * Method Name: `GetModifierSpellAmplify_Percentage`
         */
        SPELL_AMPLIFY_PERCENTAGE = 45,  //增加一个百分比的技能加成
        /**
         * Method Name: `GetModifierSpellAmplify_PercentageUnique`
         */
        SPELL_AMPLIFY_PERCENTAGE_UNIQUE = 46,   //增加一个唯一的技能加成
        /**
         * Method Name: `GetModifierHealAmplify_PercentageSource`
         */
        HEAL_AMPLIFY_PERCENTAGE_SOURCE = 47, //增加一个百分比的治疗加成（来源）
        /**
         * Method Name: `GetModifierHealAmplify_PercentageTarget`
         */
        HEAL_AMPLIFY_PERCENTAGE_TARGET = 48,   //增加一个百分比的治疗加成（目标）
        /**
         * Method Name: `GetModifierHPRegen_CanBeNegative`
         */
        HP_REGEN_CAN_BE_NEGATIVE = 49,   //允许生命回复为负值
        /**
         * Method Name: `GetModifierHPRegenAmplify_Percentage`
         */
        HP_REGEN_AMPLIFY_PERCENTAGE = 50,   //增加一个百分比的生命回复加成
        /**
         * Method Name: `GetModifierLifestealRegenAmplify_Percentage`
         */
        LIFESTEAL_AMPLIFY_PERCENTAGE = 51,     //增加一个百分比的吸血加成
        /**
         * Method Name: `GetModifierSpellLifestealRegenAmplify_Percentage`
         */
        SPELL_LIFESTEAL_AMPLIFY_PERCENTAGE = 52,   //增加一个百分比的技能吸血加成
        /**
         * Method Name: `GetModifierMPRegenAmplify_Percentage`
         */
        MP_REGEN_AMPLIFY_PERCENTAGE = 53,    //增加一个百分比的魔法回复加成
        /**
         * Method Name: `GetModifierManaDrainAmplify_Percentage`
         */
        MANA_DRAIN_AMPLIFY_PERCENTAGE = 54,   //增加一个百分比的魔法吸收加成
        /**
         * Total amplify value is clamped to 0.
         *
         *
         *
         * Method Name: `GetModifierMPRestoreAmplify_Percentage`.
         */
        MP_RESTORE_AMPLIFY_PERCENTAGE = 55,   //增加一个百分比的魔法恢复加成
        /**
         * Method Name: `GetModifierBaseDamageOutgoing_Percentage`
         */
        BASEDAMAGEOUTGOING_PERCENTAGE = 56,   //增加一个基础伤害的百分比加成
        /**
         * Method Name: `GetModifierBaseDamageOutgoing_PercentageUnique`
         */
        BASEDAMAGEOUTGOING_PERCENTAGE_UNIQUE = 57,   //增加一个唯一的基础伤害百分比加成
        /**
         * Method Name: `GetModifierIncomingDamage_Percentage`
         */
        INCOMING_DAMAGE_PERCENTAGE = 58,      //目标受到的所有伤害百分比加成
        /**
         * Method Name: `GetModifierIncomingPhysicalDamage_Percentage`
         */
        INCOMING_PHYSICAL_DAMAGE_PERCENTAGE = 59,    //目标受到的物理伤害百分比加成
        /**
         * Method Name: `GetModifierIncomingPhysicalDamageConstant`
         */
        INCOMING_PHYSICAL_DAMAGE_CONSTANT = 60,    //目标受到的物理伤害常量加成
        /**
         * Method Name: `GetModifierIncomingSpellDamageConstant`
         */
        INCOMING_SPELL_DAMAGE_CONSTANT = 61,   //目标受到的技能伤害常量加成
        /**
         * Method Name: `GetModifierEvasion_Constant`
         */
        EVASION_CONSTANT = 62,  //增加一个固定的闪避率
        /**
         * Method Name: `GetModifierNegativeEvasion_Constant`
         */
        NEGATIVE_EVASION_CONSTANT = 63,   //增加一个固定的负面闪避率
        /**
         * Method Name: `GetModifierStatusResistance`
         */
        STATUS_RESISTANCE = 64,     //增加一个状态抵抗百分比
        /**
         * Method Name: `GetModifierStatusResistanceStacking`
         */
        STATUS_RESISTANCE_STACKING = 65,    //增加一个状态抵抗百分比（可叠加）
        /**
         * Method Name: `GetModifierStatusResistanceCaster`
         */
        STATUS_RESISTANCE_CASTER = 66,    //增加一个状态抵抗百分比（施法者）
        /**
         * Method Name: `GetModifierAvoidDamage`
         */
        AVOID_DAMAGE = 67,     //增加一个固定的免伤值
        /**
         * Method Name: `GetModifierAvoidSpell`
         */
        AVOID_SPELL = 68,    //增加一个固定的免技能值
        /**
         * Method Name: `GetModifierMiss_Percentage`
         */
        MISS_PERCENTAGE = 69,    //增加一个固定的闪避率
        /**
         * Values above 100% are ignored.
         *
         *
         *
         * Method Name: `GetModifierPhysicalArmorBase_Percentage`.
         */
        PHYSICAL_ARMOR_BASE_PERCENTAGE = 70, // 物理护甲基础百分比
        /**
         * Method Name: `GetModifierPhysicalArmorTotal_Percentage`
         */
        PHYSICAL_ARMOR_TOTAL_PERCENTAGE = 71, // 物理护甲总百分比
        /**
         * Method Name: `GetModifierPhysicalArmorBonus`
         */
        PHYSICAL_ARMOR_BONUS = 72, // 物理护甲加成
        /**
         * Method Name: `GetModifierPhysicalArmorBonusUnique`
         */
        PHYSICAL_ARMOR_BONUS_UNIQUE = 73, // 物理护甲独特加成
        /**
         * Method Name: `GetModifierPhysicalArmorBonusUniqueActive`
         */
        PHYSICAL_ARMOR_BONUS_UNIQUE_ACTIVE = 74, // 物理护甲独特加成生效
        /**
         * Method Name: `GetModifierPhysicalArmorBonusPost`
         */
        PHYSICAL_ARMOR_BONUS_POST = 75, // 物理护甲加成后
        /**
         * Method Name: `GetModifierIgnorePhysicalArmor`
         */
        IGNORE_PHYSICAL_ARMOR = 76, // 忽略物理护甲
        /**
         * Method Name: `GetModifierMagicalResistanceBaseReduction`
         */
        MAGICAL_RESISTANCE_BASE_REDUCTION = 77, // 魔法抗性基础减少
        /**
         * Method Name: `GetModifierMagicalResistanceDirectModification`
         */
        MAGICAL_RESISTANCE_DIRECT_MODIFICATION = 78, // 直接修改魔法抗性
        /**
         * Method Name: `GetModifierMagicalResistanceBonus`
         */
        MAGICAL_RESISTANCE_BONUS = 79, // 魔法抗性加成
        /**
         * Method Name: `GetModifierMagicalResistanceBonusIllusions`
         */
        MAGICAL_RESISTANCE_BONUS_ILLUSIONS = 80, // 幻象魔法抗性加成
        /**
         * Method Name: `GetModifierMagicalResistanceDecrepifyUnique`
         */
        MAGICAL_RESISTANCE_DECREPIFY_UNIQUE = 81, // 独特减速魔法抗性
        /**
         * Method Name: `GetModifierBaseRegen`
         */
        BASE_MANA_REGEN = 82, // 基础法力回复
        /**
         * Method Name: `GetModifierConstantManaRegen`
         */
        MANA_REGEN_CONSTANT = 83, // 固定法力回复
        /**
         * Method Name: `GetModifierConstantManaRegenUnique`
         */
        MANA_REGEN_CONSTANT_UNIQUE = 84, // 独特固定法力回复
        /**
         * Method Name: `GetModifierTotalPercentageManaRegen`
         */
        MANA_REGEN_TOTAL_PERCENTAGE = 85, // 总法力回复百分比
        /**
         * Method Name: `GetModifierConstantHealthRegen`
         */
        HEALTH_REGEN_CONSTANT = 86, // 固定生命回复
        /**
         * Method Name: `GetModifierHealthRegenPercentage`
         */
        HEALTH_REGEN_PERCENTAGE = 87, // 生命回复百分比
        /**
         * Method Name: `GetModifierHealthRegenPercentageUnique`
         */
        HEALTH_REGEN_PERCENTAGE_UNIQUE = 88, // 独特生命回复百分比
        /**
         * Method Name: `GetModifierHealthBonus`
         */
        HEALTH_BONUS = 89, // 生命值加成
        /**
         * Method Name: `GetModifierManaBonus`
         */
        MANA_BONUS = 90, // 法力值加成
        /**
         * Method Name: `GetModifierExtraStrengthBonus`
         */
        EXTRA_STRENGTH_BONUS = 91, // 额外力量加成
        /**
         * Method Name: `GetModifierExtraHealthBonus`
         */
        EXTRA_HEALTH_BONUS = 92, // 额外生命值加成
        /**
         * Method Name: `GetModifierExtraManaBonus`
         */
        EXTRA_MANA_BONUS = 93, // 额外法力值加成
        /**
         * Method Name: `GetModifierExtraManaBonusPercentage`
         */
        EXTRA_MANA_BONUS_PERCENTAGE = 94, // 额外法力值百分比加成
        /**
         * Method Name: `GetModifierExtraHealthPercentage`
         */
        EXTRA_HEALTH_PERCENTAGE = 95, // 额外生命值百分比加成
        /**
         * Method Name: `GetModifierExtraManaPercentage`
         */
        EXTRA_MANA_PERCENTAGE = 96, // 额外法力值百分比加成
        /**
         * Method Name: `GetModifierBonusStats_Strength`
         */
        STATS_STRENGTH_BONUS = 97, // 力量加成
        /**
         * Method Name: `GetModifierBonusStats_Agility`
         */
        STATS_AGILITY_BONUS = 98, // 敏捷加成
        /**
         * Method Name: `GetModifierBonusStats_Intellect`
         */
        STATS_INTELLECT_BONUS = 99, // 智力加成
        /**
         * Method Name: `GetModifierBonusStats_Strength_Percentage`
         */
        STATS_STRENGTH_BONUS_PERCENTAGE = 100, // 力量百分比加成
        /**
         * Method Name: `GetModifierBonusStats_Agility_Percentage`
         */
        STATS_AGILITY_BONUS_PERCENTAGE = 101, // 敏捷百分比加成
        /**
         * Method Name: `GetModifierBonusStats_Intellect_Percentage`
         */
        STATS_INTELLECT_BONUS_PERCENTAGE = 102, // 智力百分比加成
        /**
         * Method Name: `GetModifierCastRangeBonus`
         */
        CAST_RANGE_BONUS = 103, // 施法距离加成
        /**
         * Method Name: `GetModifierCastRangeBonusPercentage`
         */
        CAST_RANGE_BONUS_PERCENTAGE = 104, // 施法距离百分比加成
        /**
         * Method Name: `GetModifierCastRangeBonusTarget`
         */
        CAST_RANGE_BONUS_TARGET = 105, // 施法距离目标加成
        /**
         * Method Name: `GetModifierCastRangeBonusStacking`
         */
        CAST_RANGE_BONUS_STACKING = 106, // 施法距离叠加加成
        /**
         * Method Name: `GetModifierAttackRangeOverride`
         */
        ATTACK_RANGE_BASE_OVERRIDE = 107, // 基础攻击范围覆盖
        /**
         * Method Name: `GetModifierAttackRangeBonus`
         */
        ATTACK_RANGE_BONUS = 108, // 攻击范围加成
        /**
         * Method Name: `GetModifierAttackRangeBonusUnique`
         */
        ATTACK_RANGE_BONUS_UNIQUE = 109, // 独特攻击范围加成
        /**
         * Method Name: `GetModifierAttackRangeBonusPercentage`
         */
        ATTACK_RANGE_BONUS_PERCENTAGE = 110, // 攻击范围百分比加成
        /**
         * Method Name: `GetModifierMaxAttackRange`
         */
        MAX_ATTACK_RANGE = 111, // 最大攻击范围
        /**
         * Method Name: `GetModifierProjectileSpeedBonus`
         */
        PROJECTILE_SPEED_BONUS = 112, // 投射物速度加成
        /**
         * Method Name: `GetModifierProjectileSpeedBonusPercentage`
         */
        PROJECTILE_SPEED_BONUS_PERCENTAGE = 113, // 投射物速度百分比加成
        /**
         * Method Name: `GetModifierProjectileName`
         */
        PROJECTILE_NAME = 114, // 投射物名称
        /**
         * Method Name: `ReincarnateTime`
         */
        REINCARNATION = 115, // 重生
        /**
         * Method Name: `GetModifierConstantRespawnTime`
         */
        RESPAWNTIME = 116, // 重生时间
        /**
         * Method Name: `GetModifierPercentageRespawnTime`
         */
        RESPAWNTIME_PERCENTAGE = 117, // 重生时间百分比加成
        /**
         * Method Name: `GetModifierStackingRespawnTime`
         */
        RESPAWNTIME_STACKING = 118, // 重生时间叠加加成
        /**
         * Method Name: `GetModifierPercentageCooldown`
         */
        COOLDOWN_PERCENTAGE = 119, // 冷却时间百分比加成
        /**
         * Method Name: `GetModifierPercentageCooldownOngoing`
         */
        COOLDOWN_PERCENTAGE_ONGOING = 120, // 持续冷却时间百分比加成
        /**
         * Method Name: `GetModifierPercentageCasttime`
         */
        CASTTIME_PERCENTAGE = 121, // 施法时间百分比加成
        /**
         * Method Name: `GetModifierPercentageAttackAnimTime`
         */
        ATTACK_ANIM_TIME_PERCENTAGE = 122, // 攻击动画时间百分比加成
        /**
         * Method Name: `GetModifierPercentageManacost`
         */
        MANACOST_PERCENTAGE = 123, // 法力消耗百分比加成
        /**
         * Method Name: `GetModifierPercentageManacostStacking`
         */
        MANACOST_PERCENTAGE_STACKING = 124, // 法力消耗叠加加成
        /**
         * Method Name: `GetModifierConstantDeathGoldCost`
         */
        DEATHGOLDCOST = 125, // 死亡金币惩罚
        /**
         * Method Name: `GetModifierPercentageExpRateBoost`
         */
        EXP_RATE_BOOST = 126, // 经验增益
        /**
         * Method Name: `GetModifierPercentageGoldRateBoost`
         */
        GOLD_RATE_BOOST = 127, // 金币增益
        /**
         * Method Name: `GetModifierPreAttack_CriticalStrike`
         */
        PREATTACK_CRITICALSTRIKE = 128, // 攻击前暴击
        /**
         * Method Name: `GetModifierPreAttack_Target_CriticalStrike`
         */
        PREATTACK_TARGET_CRITICALSTRIKE = 129, // 攻击前目标暴击
        /**
         * Method Name: `GetModifierMagical_ConstantBlock`
         */
        MAGICAL_CONSTANT_BLOCK = 130, // 魔法常数格挡
        /**
         * Method Name: `GetModifierPhysical_ConstantBlock`
         */
        PHYSICAL_CONSTANT_BLOCK = 131, // 物理常数格挡
        /**
         * Method Name: `GetModifierPhysical_ConstantBlockSpecial`
         */
        PHYSICAL_CONSTANT_BLOCK_SPECIAL = 132, // 特殊物理常数格挡
        /**
         * Method Name: `GetModifierPhysical_ConstantBlockUnavoidablePreArmor`
         */
        TOTAL_CONSTANT_BLOCK_UNAVOIDABLE_PRE_ARMOR = 133, // 无法避免的总常数格挡前护甲
        /**
         * Method Name: `GetModifierTotal_ConstantBlock`
         */
        TOTAL_CONSTANT_BLOCK = 134, // 总常数格挡
        /**
         * Method Name: `GetOverrideAnimation`
         */
        OVERRIDE_ANIMATION = 135, // 覆盖动画
        /**
         * Method Name: `GetOverrideAnimationWeight`
         */
        OVERRIDE_ANIMATION_WEIGHT = 136, // 覆盖动画权重
        /**
         * Method Name: `GetOverrideAnimationRate`
         */
        OVERRIDE_ANIMATION_RATE = 137, // 覆盖动画速率
        /**
         * Method Name: `GetAbsorbSpell`
         */
        ABSORB_SPELL = 138, // 吸收技能
        /**
         * Method Name: `GetReflectSpell`
         */
        REFLECT_SPELL = 139, // 反弹技能
        /**
         * Method Name: `GetDisableAutoAttack`
         */
        DISABLE_AUTOATTACK = 140, // 禁用自动攻击
        /**
         * Method Name: `GetBonusDayVision`
         */
        BONUS_DAY_VISION = 141, // 白天视野加成
        /**
         * Method Name: `GetBonusNightVision`
         */
        BONUS_NIGHT_VISION = 142, // 夜晚视野加成
        /**
         * Method Name: `GetBonusNightVisionUnique`
         */
        BONUS_NIGHT_VISION_UNIQUE = 143, // 独特夜晚视野加成
        /**
         * Method Name: `GetBonusVisionPercentage`
         */
        BONUS_VISION_PERCENTAGE = 144, // 视野百分比加成
        /**
         * Method Name: `GetFixedDayVision`
         */
        FIXED_DAY_VISION = 145, // 固定白天视野
        /**
         * Method Name: `GetFixedNightVision`
         */
        FIXED_NIGHT_VISION = 146, // 固定夜晚视野
        /**
         * Method Name: `GetMinHealth`
         */
        MIN_HEALTH = 147, // 最低生命值
        /**
         * Method Name: `GetAbsoluteNoDamagePhysical`
         */
        ABSOLUTE_NO_DAMAGE_PHYSICAL = 148, // 绝对物理免疫
        /**
         * Method Name: `GetAbsoluteNoDamageMagical`
         */
        ABSOLUTE_NO_DAMAGE_MAGICAL = 149, // 绝对魔法免疫
        /**
         * Method Name: `GetAbsoluteNoDamagePure`
         */
        ABSOLUTE_NO_DAMAGE_PURE = 150, // 绝对纯粹免疫
        /**
         * Method Name: `GetIsIllusion`
         */
        IS_ILLUSION = 151, // 是否幻象
        /**
         * Method Name: `GetModifierIllusionLabel`
         */
        ILLUSION_LABEL = 152, // 幻象标签
        /**
         * Method Name: `GetModifierStrongIllusion`
         */
        STRONG_ILLUSION = 153, // 强力幻象
        /**
         * Method Name: `GetModifierSuperIllusion`
         */
        SUPER_ILLUSION = 154, // 超强幻象
        /**
         * Method Name: `GetModifierSuperIllusionWithUltimate`
         */
        SUPER_ILLUSION_WITH_ULTIMATE = 155, // 携带终极技能的超强幻象
        /**
         * Method Name: `GetModifierXPDuringDeath`
         */
        XP_DURING_DEATH = 156, // 死亡时经验增益
        /**
         * Method Name: `GetModifierTurnRate_Percentage`
         */
        TURN_RATE_PERCENTAGE = 157, // 转身速度百分比加成
        /**
         * Method Name: `GetModifierTurnRate_Override`
         */
        TURN_RATE_OVERRIDE = 158, // 转身速度覆盖
        /**
         * Method Name: `GetDisableHealing`
         */
        DISABLE_HEALING = 159, // 禁用治疗
        /**
         * Method Name: `GetAlwaysAllowAttack`
         */
        ALWAYS_ALLOW_ATTACK = 160, // 始终允许攻击
        /**
         * Method Name: `GetAllowEtherealAttack`
         */
        ALWAYS_ETHEREAL_ATTACK = 161, // 始终使用虚无攻击
        /**
         * Method Name: `GetOverrideAttackMagical`
         */
        OVERRIDE_ATTACK_MAGICAL = 162, // 覆盖物理攻击为魔法攻击
        /**
         * Method Name: `GetModifierUnitStatsNeedsRefresh`
         */
        UNIT_STATS_NEEDS_REFRESH = 163, // 单位属性需要刷新
        BOUNTY_CREEP_MULTIPLIER = 164, // 小兵奖励倍率
        BOUNTY_OTHER_MULTIPLIER = 165, // 其他单位奖励倍率
        /**
         * Method Name: `GetModifierUnitDisllowUpgrading`
         */
        UNIT_DISALLOW_UPGRADING = 166, // 禁止单位升级
        /**
         * Method Name: `GetModifierDodgeProjectile`
         */
        DODGE_PROJECTILE = 167, // 躲避投射物
        /**
         * Method Name: `GetTriggerCosmeticAndEndAttack`
         */
        TRIGGER_COSMETIC_AND_END_ATTACK = 168, // 触发化妆和结束攻击
        /**
         * Method Name: `GetModifierMaxDebuffDuration`
         */
        MAX_DEBUFF_DURATION = 169, // 最大减益持续时间
        /**
         * Method Name: `GetPrimaryStatDamageMultiplier`
         */
        PRIMARY_STAT_DAMAGE_MULTIPLIER = 170, // 主属性伤害倍率
        /**
         * Method Name: `GetModifierPreAttack_DeadlyBlow`
         */
        PREATTACK_DEADLY_BLOW = 171, // 攻击前致命一击
        /**
         * Method Name: `GetAlwaysAutoAttackWhileHoldPosition`
         */
        ALWAYS_AUTOATTACK_WHILE_HOLD_POSITION = 172, // 始终在原地保持攻击
        /**
         * Method Name: `OnSpellTargetReady`
         */
        ON_SPELL_TARGET_READY = 173, // 当技能目标准备好时
        /**
         * Method Name: `OnAttackRecord`
         */
        ON_ATTACK_RECORD = 174, // 在攻击记录时
        /**
         * Method Name: `OnAttackStart`
         */
        ON_ATTACK_START = 175, // 在攻击开始时
        /**
         * Method Name: `OnAttack`
         */
        ON_ATTACK = 176, // 在攻击时
        /**
         * Method Name: `OnAttackLanded`
         */
        ON_ATTACK_LANDED = 177, // 在攻击命中时
        /**
         * Method Name: `OnAttackFail`
         */
        ON_ATTACK_FAIL = 178, // 在攻击失败时
        /**
         * Happens even if attack can't be issued.
         *
         *
         *
         * Method Name: `OnAttackAllied`.
         */
        ON_ATTACK_ALLIED = 179, // 当单位攻击盟友时
        /**
         * Method Name: `OnProjectileDodge`
         */
        ON_PROJECTILE_DODGE = 180, // 当单位躲避抛射物时
        /**
         * Method Name: `OnOrder`
         */
        ON_ORDER = 181, // 当单位接收到指令时
        /**
         * Method Name: `OnUnitMoved`
         */
        ON_UNIT_MOVED = 182, // 当单位移动时
        /**
         * Method Name: `OnAbilityStart`
         */
        ON_ABILITY_START = 183, // 当单位开始释放技能时
        /**
         * Method Name: `OnAbilityExecuted`
         */
        ON_ABILITY_EXECUTED = 184, // 当单位成功施放技能时
        /**
         * Method Name: `OnAbilityFullyCast`
         */
        ON_ABILITY_FULLY_CAST = 185, // 当单位完全释放技能时
        /**
         * Method Name: `OnBreakInvisibility`
         */
        ON_BREAK_INVISIBILITY = 186, // 当单位破坏隐身状态时
        /**
         * Method Name: `OnAbilityEndChannel`
         */
        ON_ABILITY_END_CHANNEL = 187, // 当单位结束技能引导时
        ON_PROCESS_UPGRADE = 188, // 当单位进行升级处理时
        ON_REFRESH = 189, // 当单位刷新时
        /**
         * Method Name: `OnTakeDamage`
         */
        ON_TAKEDAMAGE = 190, // 当单位受到伤害时
        /**
         * Method Name: `OnDamagePrevented`
         */
        ON_DEATH_PREVENTED = 191, // 当单位死亡被阻止时
        /**
         * Method Name: `OnStateChanged`
         */
        ON_STATE_CHANGED = 192, // 当单位状态改变时
        ON_ORB_EFFECT = 193, // 当单位拥有球形效果时
        /**
         * Method Name: `OnProcessCleave`
         */
        ON_PROCESS_CLEAVE = 194, // 当单位进行裂伤处理时
        /**
         * Method Name: `OnDamageCalculated`
         */
        ON_DAMAGE_CALCULATED = 195, // 当计算伤害时
        /**
         * Method Name: `OnMagicDamageCalculated`
         */
        ON_MAGIC_DAMAGE_CALCULATED = 196, // 当计算魔法伤害时
        /**
         * Method Name: `OnAttacked`
         */
        ON_ATTACKED = 197, // 当单位被攻击时
        /**
         * Method Name: `OnDeath`
         */
        ON_DEATH = 198, // 当单位死亡时
        /**
         * Method Name: `OnRespawn`
         */
        ON_RESPAWN = 199, // 当单位重生时
        /**
         * Method Name: `OnSpentMana`
         */
        ON_SPENT_MANA = 200, // 当单位消耗魔法时
        /**
         * Method Name: `OnTeleporting`
         */
        ON_TELEPORTING = 201, // 当单位正在传送时
        /**
         * Method Name: `OnTeleported`
         */
        ON_TELEPORTED = 202, // 当单位传送完成时
        /**
         * Method Name: `OnSetLocation`
         */
        ON_SET_LOCATION = 203, // 当单位位置发生变化时
        /**
         * Method Name: `OnHealthGained`
         */
        ON_HEALTH_GAINED = 204, // 当单位恢复生命值时
        /**
         * Method Name: `OnManaGained`
         */
        ON_MANA_GAINED = 205, // 当单位获得魔法值时
        /**
         * Method Name: `OnTakeDamageKillCredit`
         */
        ON_TAKEDAMAGE_KILLCREDIT = 206, // 当单位受到伤害，但不被杀死时
        /**
         * Method Name: `OnHeroKilled`
         */
        ON_HERO_KILLED = 207, // 当英雄被击杀时
        /**
         * Method Name: `OnHealReceived`
         */
        ON_HEAL_RECEIVED = 208, // 当单位接收治疗时
        /**
         * Method Name: `OnBuildingKilled`
         */
        ON_BUILDING_KILLED = 209, // 当建筑被击杀时
        /**
         * Method Name: `OnModelChanged`
         */
        ON_MODEL_CHANGED = 210, // 当模型发生变化时
        /**
         * Method Name: `OnModifierAdded`
         */
        ON_MODIFIER_ADDED = 211, // 当单位获得状态修饰器时
        /**
         * Method Name: `OnTooltip`
         */
        TOOLTIP = 212, // 当鼠标悬停在单位上时，弹出提示框
        /**
         * Method Name: `GetModifierModelChange`
         */
        MODEL_CHANGE = 213, // 当单位模型发生变化时
        /**
         * Method Name: `GetModifierModelScale`
         */
        MODEL_SCALE = 214, // 当单位模型缩放时
        /**
         * Always applies scepter when this property is active
         *
         *
         *
         * Method Name: `GetModifierScepter`.
         */
        IS_SCEPTER = 215, // 是否为魔权杖 scepter
        /**
         * Method Name: `GetModifierShard`
         */
        IS_SHARD = 216, // 是否为碎片 shard
        /**
         * Method Name: `GetModifierRadarCooldownReduction`
         */
        RADAR_COOLDOWN_REDUCTION = 217, // 雷达冷却时间缩减
        /**
         * Method Name: `GetActivityTranslationModifiers`
         */
        TRANSLATE_ACTIVITY_MODIFIERS = 218, // 活动修饰器翻译
        /**
         * Method Name: `GetAttackSound`
         */
        TRANSLATE_ATTACK_SOUND = 219, // 攻击音效翻译
        /**
         * Method Name: `GetUnitLifetimeFraction`
         */
        LIFETIME_FRACTION = 220, // 生命周期分数
        /**
         * Method Name: `GetModifierProvidesFOWVision`
         */
        PROVIDES_FOW_POSITION = 221, // 提供视野位置
        /**
         * Method Name: `GetModifierSpellsRequireHP`
         */
        SPELLS_REQUIRE_HP = 222, // 法术需要生命值
        /**
         * Method Name: `GetForceDrawOnMinimap`
         */
        FORCE_DRAW_MINIMAP = 223, // 强制绘制小地图
        /**
         * Method Name: `GetModifierDisableTurning`
         */
        DISABLE_TURNING = 224, // 禁用旋转
        /**
         * Method Name: `GetModifierIgnoreCastAngle`
         */
        IGNORE_CAST_ANGLE = 225, // 忽略施法角度
        /**
         * Method Name: `GetModifierChangeAbilityValue`
         */
        CHANGE_ABILITY_VALUE = 226, // 更改技能值
        /**
         * Method Name: `GetModifierOverrideAbilitySpecial`
         */
        OVERRIDE_ABILITY_SPECIAL = 227, // 覆盖技能特殊值
        /**
         * Method Name: `GetModifierOverrideAbilitySpecialValue`
         */
        OVERRIDE_ABILITY_SPECIAL_VALUE = 228, // 覆盖技能特殊值
        /**
         * Method Name: `GetModifierAbilityLayout`
         */
        ABILITY_LAYOUT = 229, // 技能布局
        /**
         * Method Name: `OnDominated`
         */
        ON_DOMINATED = 230, // 当单位被支配时
        /**
         * Method Name: `OnKill`
         */
        ON_KILL = 231, // 当单位杀死敌人时
        /**
         * Method Name: `OnAssist`
         */
        ON_ASSIST = 232, // 当单位协助杀死敌人时
        /**
         * Method Name: `GetModifierTempestDouble`
         */
        TEMPEST_DOUBLE = 233, // 风暴双倍
        /**
         * Method Name: `PreserveParticlesOnModelChanged`
         */
        PRESERVE_PARTICLES_ON_MODEL_CHANGE = 234, // 在模型更改时保留粒子效果
        /**
         * Method Name: `OnAttackFinished`
         */
        ON_ATTACK_FINISHED = 235, // 当攻击完成时
        /**
         * Method Name: `GetModifierIgnoreCooldown`
         */
        IGNORE_COOLDOWN = 236, // 忽略冷却时间
        /**
         * Method Name: `GetModifierCanAttackTrees`
         */
        CAN_ATTACK_TREES = 237, // 可攻击树木
        /**
         * Method Name: `GetVisualZDelta`
         */
        VISUAL_Z_DELTA = 238, // 视觉 Z 值增量
        INCOMING_DAMAGE_ILLUSION = 239, // 伤害被幻象所受
        /**
         * Method Name: `GetModifierNoVisionOfAttacker`
         */
        DONT_GIVE_VISION_OF_ATTACKER = 240, // 不显示攻击者的视野
        /**
         * Method Name: `OnTooltip2`
         */
        TOOLTIP2 = 241, // 鼠标悬停在单位上时，弹出提示框
        /**
         * Method Name: `OnAttackRecordDestroy`
         */
        ON_ATTACK_RECORD_DESTROY = 242, // 当攻击记录被销毁时
        /**
         * Method Name: `OnProjectileObstructionHit`
         */
        ON_PROJECTILE_OBSTRUCTION_HIT = 243, // 当抛射物阻挡命中时
        /**
         * Method Name: `GetSuppressTeleport`
         */
        SUPPRESS_TELEPORT = 244, // 抑制传送
        /**
         * Method Name: `OnAttackCancelled`
         */
        ON_ATTACK_CANCELLED = 245, // 当攻击被取消时
        /**
         * Method Name: `GetSuppressCleave`
         */
        SUPPRESS_CLEAVE = 246, // 抑制裂伤
        /**
         * Method Name: `BotAttackScoreBonus`
         */
        BOT_ATTACK_SCORE_BONUS = 247, // 机器人攻击评分奖励
        /**
         * Method Name: `GetModifierAttackSpeedReductionPercentage`
         */
        ATTACKSPEED_REDUCTION_PERCENTAGE = 248, // 攻击速度减少百分比
        /**
         * Method Name: `GetModifierMoveSpeedReductionPercentage`
         */
        MOVESPEED_REDUCTION_PERCENTAGE = 249, // 移动速度减少百分比
        ATTACK_WHILE_MOVING_TARGET = 250, // 攻击移动目标
        /**
         * Method Name: `GetModifierAttackSpeedPercentage`
         */
        ATTACKSPEED_PERCENTAGE = 251, // 攻击速度百分比
        /**
         * Method Name: `OnAttemptProjectileDodge`
         */
        ON_ATTEMPT_PROJECTILE_DODGE = 252, // 当尝试躲避抛射物时
        /**
         * Method Name: `OnPreDebuffApplied`
         */
        ON_PREDEBUFF_APPLIED = 253, // 当预减益被施加时
        /**
         * Method Name: `GetModifierPercentageCooldownStacking`
         */
        COOLDOWN_PERCENTAGE_STACKING = 254, // 冷却时间百分比堆叠
        /**
         * Method Name: `GetModifierSpellRedirectTarget`
         */
        SPELL_REDIRECT_TARGET = 255, // 法术重定向目标
        /**
         * Method Name: `GetModifierTurnRateConstant`
         */
        TURN_RATE_CONSTANT = 256, // 转身速率常数
        /**
         * Method Name: `GetModifierIsRatPack`
         */
        RAT_PACK = 257, // 鼠妈
        INVALID = 65535, // 无效
    }
}
