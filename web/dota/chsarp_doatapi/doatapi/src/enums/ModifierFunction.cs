using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    public enum ModifierFunction
    {
        /**
         * Method Name: `GetModifierPreAttack_BonusDamage`
         */
        PREATTACK_BONUS_DAMAGE = 0,
        /**
         * Method Name: `GetModifierPreAttack_BonusDamage_Target`
         */
        PREATTACK_BONUS_DAMAGE_TARGET = 1,
        /**
         * Method Name: `GetModifierPreAttack_BonusDamage_Proc`
         */
        PREATTACK_BONUS_DAMAGE_PROC = 2,
        /**
         * Method Name: `GetModifierPreAttack_BonusDamagePostCrit`
         */
        PREATTACK_BONUS_DAMAGE_POST_CRIT = 3,
        /**
         * Method Name: `GetModifierBaseAttack_BonusDamage`
         */
        BASEATTACK_BONUSDAMAGE = 4,
        /**
         * Method Name: `GetModifierProcAttack_BonusDamage_Physical`
         */
        PROCATTACK_BONUS_DAMAGE_PHYSICAL = 5,
        /**
         * Method Name: `GetModifierProcAttack_ConvertPhysicalToMagical`
         */
        PROCATTACK_CONVERT_PHYSICAL_TO_MAGICAL = 6,
        /**
         * Method Name: `GetModifierProcAttack_BonusDamage_Magical`
         */
        PROCATTACK_BONUS_DAMAGE_MAGICAL = 7,
        /**
         * Method Name: `GetModifierProcAttack_BonusDamage_Pure`
         */
        PROCATTACK_BONUS_DAMAGE_PURE = 8,
        /**
         * Method Name: `GetModifierProcAttack_BonusDamage_Magical_Target`
         */
        PROCATTACK_BONUS_DAMAGE_MAGICAL_TARGET = 9,
        /**
         * Method Name: `GetModifierProcAttack_Feedback`
         */
        PROCATTACK_FEEDBACK = 10,
        /**
         * Method Name: `GetModifierOverrideAttackDamage`
         */
        OVERRIDE_ATTACK_DAMAGE = 11,
        /**
         * Method Name: `GetModifierPreAttack`
         */
        PRE_ATTACK = 12,
        /**
         * Method Name: `GetModifierInvisibilityLevel`
         */
        INVISIBILITY_LEVEL = 13,
        /**
         * Method Name: `GetModifierInvisibilityAttackBehaviorException`
         */
        INVISIBILITY_ATTACK_BEHAVIOR_EXCEPTION = 14,
        /**
         * Method Name: `GetModifierPersistentInvisibility`
         */
        PERSISTENT_INVISIBILITY = 15,
        /**
         * Method Name: `GetModifierMoveSpeedBonus_Constant`
         */
        MOVESPEED_BONUS_CONSTANT = 16,
        /**
         * Method Name: `GetModifierMoveSpeedOverride`
         */
        MOVESPEED_BASE_OVERRIDE = 17,
        /**
         * Method Name: `GetModifierMoveSpeedBonus_Percentage`
         */
        MOVESPEED_BONUS_PERCENTAGE = 18,
        /**
         * Method Name: `GetModifierMoveSpeedBonus_Percentage_Unique`
         */
        MOVESPEED_BONUS_PERCENTAGE_UNIQUE = 19,
        /**
         * Method Name: `GetModifierMoveSpeedBonus_Special_Boots`
         */
        MOVESPEED_BONUS_UNIQUE = 20,
        /**
         * Method Name: `GetModifierMoveSpeedBonus_Special_Boots_2`
         */
        MOVESPEED_BONUS_UNIQUE_2 = 21,
        /**
         * Method Name: `GetModifierMoveSpeedBonus_Constant_Unique`
         */
        MOVESPEED_BONUS_CONSTANT_UNIQUE = 22,
        /**
         * Method Name: `GetModifierMoveSpeedBonus_Constant_Unique_2`
         */
        MOVESPEED_BONUS_CONSTANT_UNIQUE_2 = 23,
        /**
         * Method Name: `GetModifierMoveSpeed_Absolute`
         */
        MOVESPEED_ABSOLUTE = 24,
        /**
         * Method Name: `GetModifierMoveSpeed_AbsoluteMin`
         */
        MOVESPEED_ABSOLUTE_MIN = 25,
        /**
         * Method Name: `GetModifierMoveSpeed_AbsoluteMax`
         */
        MOVESPEED_ABSOLUTE_MAX = 26,
        /**
         * Method Name: `GetModifierIgnoreMovespeedLimit`
         */
        IGNORE_MOVESPEED_LIMIT = 27,
        /**
         * Method Name: `GetModifierMoveSpeed_Limit`
         */
        MOVESPEED_LIMIT = 28,
        /**
         * Method Name: `GetModifierAttackSpeedBaseOverride`
         */
        ATTACKSPEED_BASE_OVERRIDE = 29,
        /**
         * Method Name: `GetModifierFixedAttackRate`
         */
        FIXED_ATTACK_RATE = 30,
        /**
         * Method Name: `GetModifierAttackSpeedBonus_Constant`
         */
        ATTACKSPEED_BONUS_CONSTANT = 31,
        /**
         * Method Name: `GetModifierAttackSpeed_Limit`
         */
        IGNORE_ATTACKSPEED_LIMIT = 32,
        /**
         * Method Name: `GetModifierCooldownReduction_Constant`
         */
        COOLDOWN_REDUCTION_CONSTANT = 33,
        /**
         * Method Name: `GetModifierManacostReduction_Constant`
         */
        MANACOST_REDUCTION_CONSTANT = 34,
        /**
         * Method Name: `GetModifierBaseAttackTimeConstant`
         */
        BASE_ATTACK_TIME_CONSTANT = 35,
        /**
         * Method Name: `GetModifierBaseAttackTimeConstant_Adjust`
         */
        BASE_ATTACK_TIME_CONSTANT_ADJUST = 36,
        /**
         * Method Name: `GetModifierBaseAttackTimePercentage`
         */
        BASE_ATTACK_TIME_PERCENTAGE = 37,
        /**
         * Method Name: `GetModifierAttackPointConstant`
         */
        ATTACK_POINT_CONSTANT = 38,
        /**
         * Method Name: `GetModifierBonusDamageOutgoing_Percentage`
         */
        BONUSDAMAGEOUTGOING_PERCENTAGE = 39,
        /**
         * Method Name: `GetModifierDamageOutgoing_Percentage`
         */
        DAMAGEOUTGOING_PERCENTAGE = 40,
        /**
         * Method Name: `GetModifierDamageOutgoing_Percentage_Illusion`
         */
        DAMAGEOUTGOING_PERCENTAGE_ILLUSION = 41,
        /**
         * Method Name: `GetModifierDamageOutgoing_Percentage_Illusion_Amplify`
         */
        DAMAGEOUTGOING_PERCENTAGE_ILLUSION_AMPLIFY = 42,
        /**
         * Method Name: `GetModifierTotalDamageOutgoing_Percentage`
         */
        TOTALDAMAGEOUTGOING_PERCENTAGE = 43,
        /**
         * Method Name: `GetModifierSpellAmplify_PercentageCreep`
         */
        SPELL_AMPLIFY_PERCENTAGE_CREEP = 44,
        /**
         * Method Name: `GetModifierSpellAmplify_Percentage`
         */
        SPELL_AMPLIFY_PERCENTAGE = 45,
        /**
         * Method Name: `GetModifierSpellAmplify_PercentageUnique`
         */
        SPELL_AMPLIFY_PERCENTAGE_UNIQUE = 46,
        /**
         * Method Name: `GetModifierHealAmplify_PercentageSource`
         */
        HEAL_AMPLIFY_PERCENTAGE_SOURCE = 47,
        /**
         * Method Name: `GetModifierHealAmplify_PercentageTarget`
         */
        HEAL_AMPLIFY_PERCENTAGE_TARGET = 48,
        /**
         * Method Name: `GetModifierHPRegen_CanBeNegative`
         */
        HP_REGEN_CAN_BE_NEGATIVE = 49,
        /**
         * Method Name: `GetModifierHPRegenAmplify_Percentage`
         */
        HP_REGEN_AMPLIFY_PERCENTAGE = 50,
        /**
         * Method Name: `GetModifierLifestealRegenAmplify_Percentage`
         */
        LIFESTEAL_AMPLIFY_PERCENTAGE = 51,
        /**
         * Method Name: `GetModifierSpellLifestealRegenAmplify_Percentage`
         */
        SPELL_LIFESTEAL_AMPLIFY_PERCENTAGE = 52,
        /**
         * Method Name: `GetModifierMPRegenAmplify_Percentage`
         */
        MP_REGEN_AMPLIFY_PERCENTAGE = 53,
        /**
         * Method Name: `GetModifierManaDrainAmplify_Percentage`
         */
        MANA_DRAIN_AMPLIFY_PERCENTAGE = 54,
        /**
         * Total amplify value is clamped to 0.
         *
         *
         *
         * Method Name: `GetModifierMPRestoreAmplify_Percentage`.
         */
        MP_RESTORE_AMPLIFY_PERCENTAGE = 55,
        /**
         * Method Name: `GetModifierBaseDamageOutgoing_Percentage`
         */
        BASEDAMAGEOUTGOING_PERCENTAGE = 56,
        /**
         * Method Name: `GetModifierBaseDamageOutgoing_PercentageUnique`
         */
        BASEDAMAGEOUTGOING_PERCENTAGE_UNIQUE = 57,
        /**
         * Method Name: `GetModifierIncomingDamage_Percentage`
         */
        INCOMING_DAMAGE_PERCENTAGE = 58,
        /**
         * Method Name: `GetModifierIncomingPhysicalDamage_Percentage`
         */
        INCOMING_PHYSICAL_DAMAGE_PERCENTAGE = 59,
        /**
         * Method Name: `GetModifierIncomingPhysicalDamageConstant`
         */
        INCOMING_PHYSICAL_DAMAGE_CONSTANT = 60,
        /**
         * Method Name: `GetModifierIncomingSpellDamageConstant`
         */
        INCOMING_SPELL_DAMAGE_CONSTANT = 61,
        /**
         * Method Name: `GetModifierEvasion_Constant`
         */
        EVASION_CONSTANT = 62,
        /**
         * Method Name: `GetModifierNegativeEvasion_Constant`
         */
        NEGATIVE_EVASION_CONSTANT = 63,
        /**
         * Method Name: `GetModifierStatusResistance`
         */
        STATUS_RESISTANCE = 64,
        /**
         * Method Name: `GetModifierStatusResistanceStacking`
         */
        STATUS_RESISTANCE_STACKING = 65,
        /**
         * Method Name: `GetModifierStatusResistanceCaster`
         */
        STATUS_RESISTANCE_CASTER = 66,
        /**
         * Method Name: `GetModifierAvoidDamage`
         */
        AVOID_DAMAGE = 67,
        /**
         * Method Name: `GetModifierAvoidSpell`
         */
        AVOID_SPELL = 68,
        /**
         * Method Name: `GetModifierMiss_Percentage`
         */
        MISS_PERCENTAGE = 69,
        /**
         * Values above 100% are ignored.
         *
         *
         *
         * Method Name: `GetModifierPhysicalArmorBase_Percentage`.
         */
        PHYSICAL_ARMOR_BASE_PERCENTAGE = 70,
        /**
         * Method Name: `GetModifierPhysicalArmorTotal_Percentage`
         */
        PHYSICAL_ARMOR_TOTAL_PERCENTAGE = 71,
        /**
         * Method Name: `GetModifierPhysicalArmorBonus`
         */
        PHYSICAL_ARMOR_BONUS = 72,
        /**
         * Method Name: `GetModifierPhysicalArmorBonusUnique`
         */
        PHYSICAL_ARMOR_BONUS_UNIQUE = 73,
        /**
         * Method Name: `GetModifierPhysicalArmorBonusUniqueActive`
         */
        PHYSICAL_ARMOR_BONUS_UNIQUE_ACTIVE = 74,
        /**
         * Method Name: `GetModifierPhysicalArmorBonusPost`
         */
        PHYSICAL_ARMOR_BONUS_POST = 75,
        /**
         * Method Name: `GetModifierIgnorePhysicalArmor`
         */
        IGNORE_PHYSICAL_ARMOR = 76,
        /**
         * Method Name: `GetModifierMagicalResistanceBaseReduction`
         */
        MAGICAL_RESISTANCE_BASE_REDUCTION = 77,
        /**
         * Method Name: `GetModifierMagicalResistanceDirectModification`
         */
        MAGICAL_RESISTANCE_DIRECT_MODIFICATION = 78,
        /**
         * Method Name: `GetModifierMagicalResistanceBonus`
         */
        MAGICAL_RESISTANCE_BONUS = 79,
        /**
         * Method Name: `GetModifierMagicalResistanceBonusIllusions`
         */
        MAGICAL_RESISTANCE_BONUS_ILLUSIONS = 80,
        /**
         * Method Name: `GetModifierMagicalResistanceDecrepifyUnique`
         */
        MAGICAL_RESISTANCE_DECREPIFY_UNIQUE = 81,
        /**
         * Method Name: `GetModifierBaseRegen`
         */
        BASE_MANA_REGEN = 82,
        /**
         * Method Name: `GetModifierConstantManaRegen`
         */
        MANA_REGEN_CONSTANT = 83,
        /**
         * Method Name: `GetModifierConstantManaRegenUnique`
         */
        MANA_REGEN_CONSTANT_UNIQUE = 84,
        /**
         * Method Name: `GetModifierTotalPercentageManaRegen`
         */
        MANA_REGEN_TOTAL_PERCENTAGE = 85,
        /**
         * Method Name: `GetModifierConstantHealthRegen`
         */
        HEALTH_REGEN_CONSTANT = 86,
        /**
         * Method Name: `GetModifierHealthRegenPercentage`
         */
        HEALTH_REGEN_PERCENTAGE = 87,
        /**
         * Method Name: `GetModifierHealthRegenPercentageUnique`
         */
        HEALTH_REGEN_PERCENTAGE_UNIQUE = 88,
        /**
         * Method Name: `GetModifierHealthBonus`
         */
        HEALTH_BONUS = 89,
        /**
         * Method Name: `GetModifierManaBonus`
         */
        MANA_BONUS = 90,
        /**
         * Method Name: `GetModifierExtraStrengthBonus`
         */
        EXTRA_STRENGTH_BONUS = 91,
        /**
         * Method Name: `GetModifierExtraHealthBonus`
         */
        EXTRA_HEALTH_BONUS = 92,
        /**
         * Method Name: `GetModifierExtraManaBonus`
         */
        EXTRA_MANA_BONUS = 93,
        /**
         * Method Name: `GetModifierExtraManaBonusPercentage`
         */
        EXTRA_MANA_BONUS_PERCENTAGE = 94,
        /**
         * Method Name: `GetModifierExtraHealthPercentage`
         */
        EXTRA_HEALTH_PERCENTAGE = 95,
        /**
         * Method Name: `GetModifierExtraManaPercentage`
         */
        EXTRA_MANA_PERCENTAGE = 96,
        /**
         * Method Name: `GetModifierBonusStats_Strength`
         */
        STATS_STRENGTH_BONUS = 97,
        /**
         * Method Name: `GetModifierBonusStats_Agility`
         */
        STATS_AGILITY_BONUS = 98,
        /**
         * Method Name: `GetModifierBonusStats_Intellect`
         */
        STATS_INTELLECT_BONUS = 99,
        /**
         * Method Name: `GetModifierBonusStats_Strength_Percentage`
         */
        STATS_STRENGTH_BONUS_PERCENTAGE = 100,
        /**
         * Method Name: `GetModifierBonusStats_Agility_Percentage`
         */
        STATS_AGILITY_BONUS_PERCENTAGE = 101,
        /**
         * Method Name: `GetModifierBonusStats_Intellect_Percentage`
         */
        STATS_INTELLECT_BONUS_PERCENTAGE = 102,
        /**
         * Method Name: `GetModifierCastRangeBonus`
         */
        CAST_RANGE_BONUS = 103,
        /**
         * Method Name: `GetModifierCastRangeBonusPercentage`
         */
        CAST_RANGE_BONUS_PERCENTAGE = 104,
        /**
         * Method Name: `GetModifierCastRangeBonusTarget`
         */
        CAST_RANGE_BONUS_TARGET = 105,
        /**
         * Method Name: `GetModifierCastRangeBonusStacking`
         */
        CAST_RANGE_BONUS_STACKING = 106,
        /**
         * Method Name: `GetModifierAttackRangeOverride`
         */
        ATTACK_RANGE_BASE_OVERRIDE = 107,
        /**
         * Method Name: `GetModifierAttackRangeBonus`
         */
        ATTACK_RANGE_BONUS = 108,
        /**
         * Method Name: `GetModifierAttackRangeBonusUnique`
         */
        ATTACK_RANGE_BONUS_UNIQUE = 109,
        /**
         * Method Name: `GetModifierAttackRangeBonusPercentage`
         */
        ATTACK_RANGE_BONUS_PERCENTAGE = 110,
        /**
         * Method Name: `GetModifierMaxAttackRange`
         */
        MAX_ATTACK_RANGE = 111,
        /**
         * Method Name: `GetModifierProjectileSpeedBonus`
         */
        PROJECTILE_SPEED_BONUS = 112,
        /**
         * Method Name: `GetModifierProjectileSpeedBonusPercentage`
         */
        PROJECTILE_SPEED_BONUS_PERCENTAGE = 113,
        /**
         * Method Name: `GetModifierProjectileName`
         */
        PROJECTILE_NAME = 114,
        /**
         * Method Name: `ReincarnateTime`
         */
        REINCARNATION = 115,
        /**
         * Method Name: `GetModifierConstantRespawnTime`
         */
        RESPAWNTIME = 116,
        /**
         * Method Name: `GetModifierPercentageRespawnTime`
         */
        RESPAWNTIME_PERCENTAGE = 117,
        /**
         * Method Name: `GetModifierStackingRespawnTime`
         */
        RESPAWNTIME_STACKING = 118,
        /**
         * Method Name: `GetModifierPercentageCooldown`
         */
        COOLDOWN_PERCENTAGE = 119,
        /**
         * Method Name: `GetModifierPercentageCooldownOngoing`
         */
        COOLDOWN_PERCENTAGE_ONGOING = 120,
        /**
         * Method Name: `GetModifierPercentageCasttime`
         */
        CASTTIME_PERCENTAGE = 121,
        /**
         * Method Name: `GetModifierPercentageAttackAnimTime`
         */
        ATTACK_ANIM_TIME_PERCENTAGE = 122,
        /**
         * Method Name: `GetModifierPercentageManacost`
         */
        MANACOST_PERCENTAGE = 123,
        /**
         * Method Name: `GetModifierPercentageManacostStacking`
         */
        MANACOST_PERCENTAGE_STACKING = 124,
        /**
         * Method Name: `GetModifierConstantDeathGoldCost`
         */
        DEATHGOLDCOST = 125,
        /**
         * Method Name: `GetModifierPercentageExpRateBoost`
         */
        EXP_RATE_BOOST = 126,
        /**
         * Method Name: `GetModifierPercentageGoldRateBoost`
         */
        GOLD_RATE_BOOST = 127,
        /**
         * Method Name: `GetModifierPreAttack_CriticalStrike`
         */
        PREATTACK_CRITICALSTRIKE = 128,
        /**
         * Method Name: `GetModifierPreAttack_Target_CriticalStrike`
         */
        PREATTACK_TARGET_CRITICALSTRIKE = 129,
        /**
         * Method Name: `GetModifierMagical_ConstantBlock`
         */
        MAGICAL_CONSTANT_BLOCK = 130,
        /**
         * Method Name: `GetModifierPhysical_ConstantBlock`
         */
        PHYSICAL_CONSTANT_BLOCK = 131,
        /**
         * Method Name: `GetModifierPhysical_ConstantBlockSpecial`
         */
        PHYSICAL_CONSTANT_BLOCK_SPECIAL = 132,
        /**
         * Method Name: `GetModifierPhysical_ConstantBlockUnavoidablePreArmor`
         */
        TOTAL_CONSTANT_BLOCK_UNAVOIDABLE_PRE_ARMOR = 133,
        /**
         * Method Name: `GetModifierTotal_ConstantBlock`
         */
        TOTAL_CONSTANT_BLOCK = 134,
        /**
         * Method Name: `GetOverrideAnimation`
         */
        OVERRIDE_ANIMATION = 135,
        /**
         * Method Name: `GetOverrideAnimationWeight`
         */
        OVERRIDE_ANIMATION_WEIGHT = 136,
        /**
         * Method Name: `GetOverrideAnimationRate`
         */
        OVERRIDE_ANIMATION_RATE = 137,
        /**
         * Method Name: `GetAbsorbSpell`
         */
        ABSORB_SPELL = 138,
        /**
         * Method Name: `GetReflectSpell`
         */
        REFLECT_SPELL = 139,
        /**
         * Method Name: `GetDisableAutoAttack`
         */
        DISABLE_AUTOATTACK = 140,
        /**
         * Method Name: `GetBonusDayVision`
         */
        BONUS_DAY_VISION = 141,
        /**
         * Method Name: `GetBonusNightVision`
         */
        BONUS_NIGHT_VISION = 142,
        /**
         * Method Name: `GetBonusNightVisionUnique`
         */
        BONUS_NIGHT_VISION_UNIQUE = 143,
        /**
         * Method Name: `GetBonusVisionPercentage`
         */
        BONUS_VISION_PERCENTAGE = 144,
        /**
         * Method Name: `GetFixedDayVision`
         */
        FIXED_DAY_VISION = 145,
        /**
         * Method Name: `GetFixedNightVision`
         */
        FIXED_NIGHT_VISION = 146,
        /**
         * Method Name: `GetMinHealth`
         */
        MIN_HEALTH = 147,
        /**
         * Method Name: `GetAbsoluteNoDamagePhysical`
         */
        ABSOLUTE_NO_DAMAGE_PHYSICAL = 148,
        /**
         * Method Name: `GetAbsoluteNoDamageMagical`
         */
        ABSOLUTE_NO_DAMAGE_MAGICAL = 149,
        /**
         * Method Name: `GetAbsoluteNoDamagePure`
         */
        ABSOLUTE_NO_DAMAGE_PURE = 150,
        /**
         * Method Name: `GetIsIllusion`
         */
        IS_ILLUSION = 151,
        /**
         * Method Name: `GetModifierIllusionLabel`
         */
        ILLUSION_LABEL = 152,
        /**
         * Method Name: `GetModifierStrongIllusion`
         */
        STRONG_ILLUSION = 153,
        /**
         * Method Name: `GetModifierSuperIllusion`
         */
        SUPER_ILLUSION = 154,
        /**
         * Method Name: `GetModifierSuperIllusionWithUltimate`
         */
        SUPER_ILLUSION_WITH_ULTIMATE = 155,
        /**
         * Method Name: `GetModifierXPDuringDeath`
         */
        XP_DURING_DEATH = 156,
        /**
         * Method Name: `GetModifierTurnRate_Percentage`
         */
        TURN_RATE_PERCENTAGE = 157,
        /**
         * Method Name: `GetModifierTurnRate_Override`
         */
        TURN_RATE_OVERRIDE = 158,
        /**
         * Method Name: `GetDisableHealing`
         */
        DISABLE_HEALING = 159,
        /**
         * Method Name: `GetAlwaysAllowAttack`
         */
        ALWAYS_ALLOW_ATTACK = 160,
        /**
         * Method Name: `GetAllowEtherealAttack`
         */
        ALWAYS_ETHEREAL_ATTACK = 161,
        /**
         * Method Name: `GetOverrideAttackMagical`
         */
        OVERRIDE_ATTACK_MAGICAL = 162,
        /**
         * Method Name: `GetModifierUnitStatsNeedsRefresh`
         */
        UNIT_STATS_NEEDS_REFRESH = 163,
        BOUNTY_CREEP_MULTIPLIER = 164,
        BOUNTY_OTHER_MULTIPLIER = 165,
        /**
         * Method Name: `GetModifierUnitDisllowUpgrading`
         */
        UNIT_DISALLOW_UPGRADING = 166,
        /**
         * Method Name: `GetModifierDodgeProjectile`
         */
        DODGE_PROJECTILE = 167,
        /**
         * Method Name: `GetTriggerCosmeticAndEndAttack`
         */
        TRIGGER_COSMETIC_AND_END_ATTACK = 168,
        /**
         * Method Name: `GetModifierMaxDebuffDuration`
         */
        MAX_DEBUFF_DURATION = 169,
        /**
         * Method Name: `GetPrimaryStatDamageMultiplier`
         */
        PRIMARY_STAT_DAMAGE_MULTIPLIER = 170,
        /**
         * Method Name: `GetModifierPreAttack_DeadlyBlow`
         */
        PREATTACK_DEADLY_BLOW = 171,
        /**
         * Method Name: `GetAlwaysAutoAttackWhileHoldPosition`
         */
        ALWAYS_AUTOATTACK_WHILE_HOLD_POSITION = 172,
        /**
         * Method Name: `OnSpellTargetReady`
         */
        ON_SPELL_TARGET_READY = 173,
        /**
         * Method Name: `OnAttackRecord`
         */
        ON_ATTACK_RECORD = 174,
        /**
         * Method Name: `OnAttackStart`
         */
        ON_ATTACK_START = 175,
        /**
         * Method Name: `OnAttack`
         */
        ON_ATTACK = 176,
        /**
         * Method Name: `OnAttackLanded`
         */
        ON_ATTACK_LANDED = 177,
        /**
         * Method Name: `OnAttackFail`
         */
        ON_ATTACK_FAIL = 178,
        /**
         * Happens even if attack can't be issued.
         *
         *
         *
         * Method Name: `OnAttackAllied`.
         */
        ON_ATTACK_ALLIED = 179,
        /**
         * Method Name: `OnProjectileDodge`
         */
        ON_PROJECTILE_DODGE = 180,
        /**
         * Method Name: `OnOrder`
         */
        ON_ORDER = 181,
        /**
         * Method Name: `OnUnitMoved`
         */
        ON_UNIT_MOVED = 182,
        /**
         * Method Name: `OnAbilityStart`
         */
        ON_ABILITY_START = 183,
        /**
         * Method Name: `OnAbilityExecuted`
         */
        ON_ABILITY_EXECUTED = 184,
        /**
         * Method Name: `OnAbilityFullyCast`
         */
        ON_ABILITY_FULLY_CAST = 185,
        /**
         * Method Name: `OnBreakInvisibility`
         */
        ON_BREAK_INVISIBILITY = 186,
        /**
         * Method Name: `OnAbilityEndChannel`
         */
        ON_ABILITY_END_CHANNEL = 187,
        ON_PROCESS_UPGRADE = 188,
        ON_REFRESH = 189,
        /**
         * Method Name: `OnTakeDamage`
         */
        ON_TAKEDAMAGE = 190,
        /**
         * Method Name: `OnDamagePrevented`
         */
        ON_DEATH_PREVENTED = 191,
        /**
         * Method Name: `OnStateChanged`
         */
        ON_STATE_CHANGED = 192,
        ON_ORB_EFFECT = 193,
        /**
         * Method Name: `OnProcessCleave`
         */
        ON_PROCESS_CLEAVE = 194,
        /**
         * Method Name: `OnDamageCalculated`
         */
        ON_DAMAGE_CALCULATED = 195,
        /**
         * Method Name: `OnMagicDamageCalculated`
         */
        ON_MAGIC_DAMAGE_CALCULATED = 196,
        /**
         * Method Name: `OnAttacked`
         */
        ON_ATTACKED = 197,
        /**
         * Method Name: `OnDeath`
         */
        ON_DEATH = 198,
        /**
         * Method Name: `OnRespawn`
         */
        ON_RESPAWN = 199,
        /**
         * Method Name: `OnSpentMana`
         */
        ON_SPENT_MANA = 200,
        /**
         * Method Name: `OnTeleporting`
         */
        ON_TELEPORTING = 201,
        /**
         * Method Name: `OnTeleported`
         */
        ON_TELEPORTED = 202,
        /**
         * Method Name: `OnSetLocation`
         */
        ON_SET_LOCATION = 203,
        /**
         * Method Name: `OnHealthGained`
         */
        ON_HEALTH_GAINED = 204,
        /**
         * Method Name: `OnManaGained`
         */
        ON_MANA_GAINED = 205,
        /**
         * Method Name: `OnTakeDamageKillCredit`
         */
        ON_TAKEDAMAGE_KILLCREDIT = 206,
        /**
         * Method Name: `OnHeroKilled`
         */
        ON_HERO_KILLED = 207,
        /**
         * Method Name: `OnHealReceived`
         */
        ON_HEAL_RECEIVED = 208,
        /**
         * Method Name: `OnBuildingKilled`
         */
        ON_BUILDING_KILLED = 209,
        /**
         * Method Name: `OnModelChanged`
         */
        ON_MODEL_CHANGED = 210,
        /**
         * Method Name: `OnModifierAdded`
         */
        ON_MODIFIER_ADDED = 211,
        /**
         * Method Name: `OnTooltip`
         */
        TOOLTIP = 212,
        /**
         * Method Name: `GetModifierModelChange`
         */
        MODEL_CHANGE = 213,
        /**
         * Method Name: `GetModifierModelScale`
         */
        MODEL_SCALE = 214,
        /**
         * Always applies scepter when this property is active
         *
         *
         *
         * Method Name: `GetModifierScepter`.
         */
        IS_SCEPTER = 215,
        /**
         * Method Name: `GetModifierShard`
         */
        IS_SHARD = 216,
        /**
         * Method Name: `GetModifierRadarCooldownReduction`
         */
        RADAR_COOLDOWN_REDUCTION = 217,
        /**
         * Method Name: `GetActivityTranslationModifiers`
         */
        TRANSLATE_ACTIVITY_MODIFIERS = 218,
        /**
         * Method Name: `GetAttackSound`
         */
        TRANSLATE_ATTACK_SOUND = 219,
        /**
         * Method Name: `GetUnitLifetimeFraction`
         */
        LIFETIME_FRACTION = 220,
        /**
         * Method Name: `GetModifierProvidesFOWVision`
         */
        PROVIDES_FOW_POSITION = 221,
        /**
         * Method Name: `GetModifierSpellsRequireHP`
         */
        SPELLS_REQUIRE_HP = 222,
        /**
         * Method Name: `GetForceDrawOnMinimap`
         */
        FORCE_DRAW_MINIMAP = 223,
        /**
         * Method Name: `GetModifierDisableTurning`
         */
        DISABLE_TURNING = 224,
        /**
         * Method Name: `GetModifierIgnoreCastAngle`
         */
        IGNORE_CAST_ANGLE = 225,
        /**
         * Method Name: `GetModifierChangeAbilityValue`
         */
        CHANGE_ABILITY_VALUE = 226,
        /**
         * Method Name: `GetModifierOverrideAbilitySpecial`
         */
        OVERRIDE_ABILITY_SPECIAL = 227,
        /**
         * Method Name: `GetModifierOverrideAbilitySpecialValue`
         */
        OVERRIDE_ABILITY_SPECIAL_VALUE = 228,
        /**
         * Method Name: `GetModifierAbilityLayout`
         */
        ABILITY_LAYOUT = 229,
        /**
         * Method Name: `OnDominated`
         */
        ON_DOMINATED = 230,
        /**
         * Method Name: `OnKill`
         */
        ON_KILL = 231,
        /**
         * Method Name: `OnAssist`
         */
        ON_ASSIST = 232,
        /**
         * Method Name: `GetModifierTempestDouble`
         */
        TEMPEST_DOUBLE = 233,
        /**
         * Method Name: `PreserveParticlesOnModelChanged`
         */
        PRESERVE_PARTICLES_ON_MODEL_CHANGE = 234,
        /**
         * Method Name: `OnAttackFinished`
         */
        ON_ATTACK_FINISHED = 235,
        /**
         * Method Name: `GetModifierIgnoreCooldown`
         */
        IGNORE_COOLDOWN = 236,
        /**
         * Method Name: `GetModifierCanAttackTrees`
         */
        CAN_ATTACK_TREES = 237,
        /**
         * Method Name: `GetVisualZDelta`
         */
        VISUAL_Z_DELTA = 238,
        INCOMING_DAMAGE_ILLUSION = 239,
        /**
         * Method Name: `GetModifierNoVisionOfAttacker`
         */
        DONT_GIVE_VISION_OF_ATTACKER = 240,
        /**
         * Method Name: `OnTooltip2`
         */
        TOOLTIP2 = 241,
        /**
         * Method Name: `OnAttackRecordDestroy`
         */
        ON_ATTACK_RECORD_DESTROY = 242,
        /**
         * Method Name: `OnProjectileObstructionHit`
         */
        ON_PROJECTILE_OBSTRUCTION_HIT = 243,
        /**
         * Method Name: `GetSuppressTeleport`
         */
        SUPPRESS_TELEPORT = 244,
        /**
         * Method Name: `OnAttackCancelled`
         */
        ON_ATTACK_CANCELLED = 245,
        /**
         * Method Name: `GetSuppressCleave`
         */
        SUPPRESS_CLEAVE = 246,
        /**
         * Method Name: `BotAttackScoreBonus`
         */
        BOT_ATTACK_SCORE_BONUS = 247,
        /**
         * Method Name: `GetModifierAttackSpeedReductionPercentage`
         */
        ATTACKSPEED_REDUCTION_PERCENTAGE = 248,
        /**
         * Method Name: `GetModifierMoveSpeedReductionPercentage`
         */
        MOVESPEED_REDUCTION_PERCENTAGE = 249,
        ATTACK_WHILE_MOVING_TARGET = 250,
        /**
         * Method Name: `GetModifierAttackSpeedPercentage`
         */
        ATTACKSPEED_PERCENTAGE = 251,
        /**
         * Method Name: `OnAttemptProjectileDodge`
         */
        ON_ATTEMPT_PROJECTILE_DODGE = 252,
        /**
         * Method Name: `OnPreDebuffApplied`
         */
        ON_PREDEBUFF_APPLIED = 253,
        /**
         * Method Name: `GetModifierPercentageCooldownStacking`
         */
        COOLDOWN_PERCENTAGE_STACKING = 254,
        /**
         * Method Name: `GetModifierSpellRedirectTarget`
         */
        SPELL_REDIRECT_TARGET = 255,
        /**
         * Method Name: `GetModifierTurnRateConstant`
         */
        TURN_RATE_CONSTANT = 256,
        /**
         * Method Name: `GetModifierIsRatPack`
         */
        RAT_PACK = 257,
        INVALID = 65535,
    }
}
