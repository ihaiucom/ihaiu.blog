// https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/Abilities_Data_Driven
namespace ZF
{
    public class BaseModifier
    {

        #region event 事件
        /// <summary>
        /// 技能开始
        /// </summary>
        public virtual void OnAbilityStart(ModifierAbilityEvent e)
        {
        }

        /// <summary>
        /// 释放技能
        /// </summary>
        public virtual void OnAbilityExecuted(ModifierAbilityEvent e)
        {
        }

        /// <summary>
        /// 停止施法
        /// </summary>
        public virtual void OnAbilityEndChannel(ModifierAbilityEvent e)
        {
        }
        #endregion
    }
}


// Modifiers
// 是只有data-driven类技能才能使用的，这个区域定义了一系列的Modifiers（一般可以认为是Buff或者DeBuff），每个Modifier通过在其中定义的KV(KeyValues)来定义。 参数有以下：

// 名称	可用参数
// Attributes	MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE, MODIFIER_ATTRIBUTE_MULTIPLE, MODIFIER_ATTRIBUTE_NONE, MODIFIER_ATTRIBUTE_PERMANENT
// 属性	忽视无敌，可叠加，无，正常
// Duration	FloatValue
// 持续时间	浮点值
// EffectAttachType	follow_origin, follow_overhead, follow_chest, follow_head, start_at_customorigin, world_origin
// 特效附着点类型	原点，头顶，胸膛，头部，自定义原点，世界原点
// EffectName	StringValue
// 特效名称	字符串(路径+特效名)
// IsBuff	BooleanValue
// 是否增益魔法	布尔值（1为增益魔法）
// IsDebuff	BooleanValue
// 是否减益魔法	布尔值（1为减益魔法）
// IsHidden	BooleanValue
// 是否隐藏	布尔值（1为隐藏）
// IsPurgable	BooleanValue
// 能否被驱散	布尔值（1为可被驱散）
// OverrideAnimation	ACT_DOTA_ATTACK, ACT_DOTA_CAST_ABILITY_1 (2, 3, 4, 5, 6), ACT_DOTA_DISABLED, ACT_DOTA_SPAWN, ACT_DOTA_TELEPORT, ACT_DOTA_VICTORY
// 覆盖模型动作	攻击动作，技能释放动作(1~6)，受伤动作，出生动作，回程动作，胜利动作
// Passive	BooleanValue
// 被动	布尔值（1为被动技能，会自动添加该Modifiers）
// TextureName	StringValue
// 图标名称	字符串
// ThinkInterval	FloatValue
// Think间隔	浮点值
// Modifier 属性
// Modifier属性能够改变对应Modifier影响的单位的游戏相关数值，以下示例定义的是一个降低目标攻击和移动速度的modifier（写在技能的Modifiers区域内），对于数值，你可以直接在区域直接写入数值，也可以使用 %name 来引用 AbilitySpecial区域内定义的数值，使用%name的好处是你能够针对不同的技能等级定义不同的数值，也可以在技能的说明中直接引用这个数值，在本示例中，Modifier的持续时间（"Duration"）引用了AbilitySpecial中的数值，减速的数值是直接写的数字。

// "creature_slithereen_crush_slow"
// {
//     "Duration"      "%slow_duration"
//     "Properties"
//     {
//         "MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE"      "-20"
//         "MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT"      "-20"
//     }
// }
// Modifier 属性列表
// 名称	描述
// MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_MAGICAL	所有魔法攻击无效
// MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PHYSICAL	所有物理攻击无效
// MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PURE	所有神圣伤害无效
// MODIFIER_PROPERTY_ABSORB_SPELL	偷取法术？
// MODIFIER_PROPERTY_ATTACK_RANGE_BONUS	修改攻击范围
// MODIFIER_PROPERTY_ATTACK_RANGE_BONUS_UNIQUE	攻击距离增益（不叠加）
// MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT	修改攻击速度
// MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT_POWER_TREADS	*暂无说明*
// MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT_SECONDARY	*暂无说明*
// MODIFIER_PROPERTY_AVOID_CONSTANT	虚空假面的闪避？
// MODIFIER_PROPERTY_AVOID_SPELL	虚空假面的法术闪避？
// MODIFIER_PROPERTY_BASEATTACK_BONUSDAMAGE	修改基础攻击力
// MODIFIER_PROPERTY_BASE_ATTACK_TIME_CONSTANT	设定基础攻击间隔
// MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE	修改基础攻击伤害
// MODIFIER_PROPERTY_BASE_MANA_REGEN	修改基础魔法回复数值，对百分比回魔有影响
// MODIFIER_PROPERTY_BONUS_DAY_VISION	修改白天的视野距离
// MODIFIER_PROPERTY_BONUS_NIGHT_VISION	修改夜间的视野距离
// MODIFIER_PROPERTY_BONUS_VISION_PERCENTAGE	按百分比修改视野距离
// MODIFIER_PROPERTY_CAST_RANGE_BONUS	施法距离增益
// MODIFIER_PROPERTY_CHANGE_ABILITY_VALUE	改变技能数值
// MODIFIER_PROPERTY_COOLDOWN_PERCENTAGE_STACKING	冷却时间百分比堆叠
// MODIFIER_PROPERTY_COOLDOWN_REDUCTION_CONSTANT	减少冷却时间
// MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE	按百分比修改攻击力，负数降低攻击，正数提高攻击
// MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE_ILLUSION	降低幻象攻击力比例
// MODIFIER_PROPERTY_DEATHGOLDCOST	修改死亡损失的金钱
// MODIFIER_PROPERTY_DISABLE_AUTOATTACK	禁止自动攻击
// MODIFIER_PROPERTY_DISABLE_HEALING	禁止生命回复(1为禁止)
// MODIFIER_PROPERTY_DISABLE_TURNING	禁止转身
// MODIFIER_PROPERTY_EVASION_CONSTANT	闪避
// MODIFIER_PROPERTY_EXTRA_HEALTH_BONUS	*无效*额外生命值加成
// MODIFIER_PROPERTY_EXTRA_MANA_BONUS	*无效*额外魔法值加成
// MODIFIER_PROPERTY_EXTRA_STRENGTH_BONUS	*无效*额外力量加成
// MODIFIER_PROPERTY_FORCE_DRAW_MINIMAP	*暂无说明*
// MODIFIER_PROPERTY_HEALTH_BONUS	修改目前血量
// MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT	固定的生命回复数值
// MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE	根据装备带来的最大血量所产生的血量回复数值
// MODIFIER_PROPERTY_IGNORE_CAST_ANGLE	忽略施法角度
// MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE	按百分比修改受到的所有伤害，负数降低伤害，正数加深伤害
// MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_CONSTANT	所受物理伤害数值（数值物理伤害减免/增加）
// MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_PERCENTAGE	按百分比修改受到的物理伤害，负数降低伤害，正数加深伤害
// MODIFIER_PROPERTY_INCOMING_SPELL_DAMAGE_CONSTANT	按百分比修改受到的技能伤害，负数降低伤害，正数加深伤害
// MODIFIER_PROPERTY_INVISIBILITY_LEVEL	隐身等级？
// MODIFIER_PROPERTY_IS_ILLUSION	是否为某个单位的幻象
// MODIFIER_PROPERTY_IS_SCEPTER	是否携带蓝杖？
// MODIFIER_PROPERTY_LIFETIME_FRACTION	*暂无说明*
// MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS	魔法抗性，对神圣伤害无效，可以累加
// MODIFIER_PROPERTY_MAGICAL_RESISTANCE_DECREPIFY_UNIQUE	骨法的衰老，影响魔法抗性，不可累加
// MODIFIER_PROPERTY_MAGICAL_RESISTANCE_ITEM_UNIQUE	魔法抗性，对神圣伤害无效，不可以累加
// MODIFIER_PROPERTY_MAGICDAMAGEOUTGOING_PERCENTAGE	魔法输出百分比（百分比法伤增益/减益）
// MODIFIER_PROPERTY_MANA_BONUS	修改目前魔法量
// MODIFIER_PROPERTY_MANA_REGEN_CONSTANT	修改基础魔法回复数值，对百分比回魔没有影响
// MODIFIER_PROPERTY_MANA_REGEN_CONSTANT_UNIQUE	修改基础魔法回复数值，对百分比回魔没有影响，且 不可累积
// MODIFIER_PROPERTY_MANA_REGEN_PERCENTAGE	修改基础魔法回复数值
// MODIFIER_PROPERTY_MANA_REGEN_TOTAL_PERCENTAGE	修改所有魔法回复数值
// MODIFIER_PROPERTY_MAX_ATTACK_RANGE	最大攻击距离增益
// MODIFIER_PROPERTY_MIN_HEALTH	血量在设定值以下是不能杀死（斧王的斩杀依然有效）
// MODIFIER_PROPERTY_MISS_PERCENTAGE	增加miss的几率
// MODIFIER_PROPERTY_MODEL_CHANGE	设定模型
// MODIFIER_PROPERTY_MODEL_SCALE	设定模型大小
// MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE	设置移动速度
// MODIFIER_PROPERTY_MOVESPEED_BASE_OVERRIDE	设定基础移动速度
// MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT	增加移动速度数值
// MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE	百分比增加移动速度，自身不叠加
// MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE_UNIQUE	独立百分比增加移动速度，不叠加
// MODIFIER_PROPERTY_MOVESPEED_BONUS_UNIQUE	增加移动速度数值，不叠加，物品版本
// MODIFIER_PROPERTY_MOVESPEED_LIMIT	限制移动速度
// MODIFIER_PROPERTY_MOVESPEED_MAX	设置最大移动速度
// MODIFIER_PROPERTY_NEGATIVE_EVASION_CONSTANT	降低闪避概率
// MODIFIER_PROPERTY_OVERRIDE_ANIMATION	强制播放模型动作
// MODIFIER_PROPERTY_OVERRIDE_ANIMATION_RATE	设置播放模型动作快慢
// MODIFIER_PROPERTY_OVERRIDE_ANIMATION_WEIGHT	强制播放模型动作_重？
// MODIFIER_PROPERTY_OVERRIDE_ATTACK_MAGICAL	魔法攻击
// MODIFIER_PROPERTY_PERSISTENT_INVISIBILITY	永久性隐身
// MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS	增加护甲
// MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_ILLUSIONS	增加幻象的护甲
// MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_UNIQUE	增加护甲，不可叠加
// MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_UNIQUE_ACTIVE	改变圆盾减伤的效果？
// MODIFIER_PROPERTY_PHYSICAL_CONSTANT_BLOCK	数值减免伤害？
// MODIFIER_PROPERTY_POST_ATTACK	增加攻击力？
// MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE	修改附加攻击力
// MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_POST_CRIT	以增加伤害的方式修改伤害值，不计入暴击计算
// MODIFIER_PROPERTY_PREATTACK_CRITICALSTRIKE	致命一击
// MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_COMPOSITE	修改在普通攻击后计算的神圣伤害
// MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_MAGICAL	修改在普通攻击后计算的魔法伤害
// MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PHYSICAL	修改在普通攻击后计算的物理伤害
// MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PURE	修改在普通攻击后计算的神圣伤害
// MODIFIER_PROPERTY_PROCATTACK_FEEDBACK	法力燃烧？
// MODIFIER_PROPERTY_PROVIDES_FOW_POSITION	*暂无说明*
// MODIFIER_PROPERTY_REINCARNATION	不朽之守护或者是骷髅王的大招？
// MODIFIER_PROPERTY_RESPAWNTIME	修改重生时间
// MODIFIER_PROPERTY_RESPAWNTIME_PERCENTAGE	百分比修改重生时间
// MODIFIER_PROPERTY_RESPAWNTIME_STACKING	累积重生时间
// MODIFIER_PROPERTY_STATS_AGILITY_BONUS	修改敏捷
// MODIFIER_PROPERTY_STATS_INTELLECT_BONUS	修改智力
// MODIFIER_PROPERTY_STATS_STRENGTH_BONUS	修改力量
// MODIFIER_PROPERTY_SUPER_ILLUSION_WITH_ULTIMATE	VS A杖大招的那个幻象
// MODIFIER_PROPERTY_TOOLTIP	可被用于任何提示， 比如臂章的血量移除
// MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK	减免所有来源的伤害
// MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK_UNAVOIDABLE_PRE_ARMOR	对于自动攻击的伤害减免
// MODIFIER_PROPERTY_TOTALDAMAGEOUTGOING_PERCENTAGE	失效，不工作
// MODIFIER_PROPERTY_TRANSLATE_ACTIVITY_MODIFIERS	动作修改？
// MODIFIER_PROPERTY_TRANSLATE_ATTACK_SOUND	攻击音效修改？
// MODIFIER_PROPERTY_TURN_RATE_PERCENTAGE	百分比修改转向速度
// Modifier 状态
// Modifier状态和Modifier属性十分类似，只不过他们是只有三个数值："MODIFIER_STATE_VALUE_NO_ACTION"(不作为), "MODIFIER_STATE_VALUE_ENABLED"(启用) 或者 "MODIFIER_STATE_VALUE_DISABLED"(禁用)。以下的modifier示例给单位添加了一个简单的眩晕粒子特效，覆盖了单位的模型操作，让单位进入了眩晕状态。

// "creature_bash_ministun"
// {
//     "Duration"              "%duration"
//     "EffectName"            "generic_stunned"
//     "EffectAttachType"      "follow_overhead"
//     "Duration"              "%stun_duration"
//     "OverrideAnimation"     "ACT_DOTA_DISABLED"
//     "States"
//     {
//         "MODIFIER_STATE_STUNNED" "MODIFIER_STATE_VALUE_ENABLED"
//     }         
// }
// Modifier状态列表
// 名称	描述
// MODIFIER_STATE_ATTACK_IMMUNE	攻击免疫状态
// MODIFIER_STATE_BLIND	致盲状态？无法物理攻击？
// MODIFIER_STATE_BLOCK_DISABLED	禁用伤害减免？
// MODIFIER_STATE_CANNOT_MISS	不能闪避？
// MODIFIER_STATE_COMMAND_RESTRICTED	禁魔状态
// MODIFIER_STATE_DISARMED	缴械状态
// MODIFIER_STATE_DOMINATED	支配状态？
// MODIFIER_STATE_EVADE_DISABLED	禁用躲避？
// MODIFIER_STATE_FLYING	飞行状态
// MODIFIER_STATE_FROZEN	冷冻状态
// MODIFIER_STATE_HEXED	妖术状态
// MODIFIER_STATE_INVISIBLE	隐身状态
// MODIFIER_STATE_INVULNERABLE	无敌状态
// MODIFIER_STATE_LOW_ATTACK_PRIORITY	低的攻击优先级
// MODIFIER_STATE_MAGIC_IMMUNE	魔法免疫状态
// MODIFIER_STATE_MUTED	禁用物品状态
// MODIFIER_STATE_NIGHTMARED	催眠状态
// MODIFIER_STATE_NO_HEALTH_BAR	没有生命条
// MODIFIER_STATE_NO_TEAM_MOVE_TO	没有移动到队伍状态
// MODIFIER_STATE_NO_TEAM_SELECT	没有选择队伍状态
// MODIFIER_STATE_NOT_ON_MINIMAP	不在小地图状态
// MODIFIER_STATE_NOT_ON_MINIMAP_FOR_ENEMIES	敌人不在小地图状态
// MODIFIER_STATE_NO_UNIT_COLLISION	没有单位碰撞状态
// MODIFIER_STATE_OUT_OF_GAME	离开游戏状态
// MODIFIER_STATE_PASSIVES_DISABLED	禁用被动技能状态
// MODIFIER_STATE_PROVIDES_VISION	提供视野状态
// MODIFIER_STATE_ROOTED	被缠绕状态
// MODIFIER_STATE_SILENCED	沉默状态
// MODIFIER_STATE_SOFT_DISARMED	软解除武装状态
// MODIFIER_STATE_SPECIALLY_DENIABLE	*暂无说明*
// MODIFIER_STATE_STUNNED	眩晕状态
// MODIFIER_STATE_UNSELECTABLE	无法选取状态
// Modifier 事件
// Modifiers也可以定义一些触发事件，以下的这些事件能够在modifier中定义 - 操作在本页面其他位置已经提及了

// 触发事件名称	描述
// OnAttacked	当拥有modifier的单位被攻击时
// OnAttackLanded	当拥有modifier的单位攻击到某个目标时
// OnAttackStart	当拥有modifier的单位开始攻击某个目标
// OnCreated	当modifier被创建时
// OnDealDamage	当拥有modifier的单位施加伤害的时候
// OnDeath	当拥有modifier的单位死亡的时候
// OnDestroy	当这个modifier被移除的时候
// OnOrbFire	当法球modifier的法球被释放的时候
// OnOrbImpact	当法球modifier的法球命中目标之后
// OnTakeDamage	当拥有modifier的单位受到伤害的时候
// Orb	定义一个法球modifeir的特效等
// OnIntervalThink	循环执行定时器操作。在CreateThinker(创建定时器)下使用，配合Duration(持续时间)，ThinkInterval(间隔)。
// 新事件(14/08/26更新)	描述
// OnAttack	
// OnAttackFailed	当拥有modifier的单位攻击失败时
// OnAttackAllied	当拥有modifier的单位攻击盟友时
// OnProjectileDodge	当拥有modifier的单位闪避弹道粒子特效时
// OnEquip	当拥有modifier的单位装备物品
// OnOrder	当拥有modifier的单位执行指令
// OnUnitMoved	当拥有modifier的单位移动的时候
// OnAbilityStart	当拥有modifier的单位开始使用技能
// OnAbilityEndChannel	当拥有modifier的单位结束持续施法
// OnStateChanged	当拥有modifier的单位状态改变时
// OnRespawn	当拥有modifier的单位重生
// OnSpentMana	当拥有modifier的单位花费魔法时
// OnTeleporting	当拥有modifier的单位正在传送时
// OnTeleported	当拥有modifier的单位传送结束时
// OnHealthGained	当拥有modifier的单位获得生命值
// OnManaGained	当拥有modifier的单位获得魔法值
// OnHeroKilled	当拥有modifier的单位被英雄杀了
// OnHealReceived	当拥有modifier的单位受到治疗
// Modifier事件列表
// 这些事件并不可以应用在所有的数据驱动类技能中，仅作为参考。

// 名称	描述
// MODIFIER_EVENT_ON_ABILITY_END_CHANNEL	当持续性施法完成
// MODIFIER_EVENT_ON_ABILITY_EXECUTED	当施法执行完
// MODIFIER_EVENT_ON_ABILITY_START	当施法开始时
// MODIFIER_EVENT_ON_ATTACK	当攻击时
// MODIFIER_EVENT_ON_ATTACK_ALLIED	当攻击盟军时
// MODIFIER_EVENT_ON_ATTACKED	当攻击结束时
// MODIFIER_EVENT_ON_ATTACK_FAIL	当攻击失败
// MODIFIER_EVENT_ON_ATTACK_LANDED	当攻击击中时
// MODIFIER_EVENT_ON_ATTACK_START	当攻击开始时
// MODIFIER_EVENT_ON_BREAK_INVISIBILITY	当打破隐身状态
// MODIFIER_EVENT_ON_DEATH	当死亡时
// MODIFIER_EVENT_ON_HEAL_RECEIVED	当收到治疗
// MODIFIER_EVENT_ON_HEALTH_GAINED	当获得生命值
// MODIFIER_EVENT_ON_HERO_KILLED	当英雄死亡
// MODIFIER_EVENT_ON_MANA_GAINED	当获得魔法值
// MODIFIER_EVENT_ON_ORB_EFFECT	当在法球效果
// MODIFIER_EVENT_ON_ORDER	当命令结束时
// MODIFIER_EVENT_ON_PROCESS_UPGRADE	当在升级过程中
// MODIFIER_EVENT_ON_PROJECTILE_DODGE	当闪避弹道时
// MODIFIER_EVENT_ON_REFRESH	当刷新时
// MODIFIER_EVENT_ON_RESPAWN	当重生时
// MODIFIER_EVENT_ON_SPENT_MANA	当花费魔法值时
// MODIFIER_EVENT_ON_STATE_CHANGED	当状态改变时
// MODIFIER_EVENT_ON_TAKEDAMAGE	当带来伤害时
// MODIFIER_EVENT_ON_TAKEDAMAGE_REAPERSCYTHE	当在死神镰刀下带来伤害时
// MODIFIER_EVENT_ON_TELEPORTED	当在传送结束时
// MODIFIER_EVENT_ON_TELEPORTING	当正在传送时
// MODIFIER_EVENT_ON_UNIT_MOVED	当单位移动时






// Modifiers
// Modifiers may have following keys:

// Attributes
// MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE
// MODIFIER_ATTRIBUTE_MULTIPLE
// MODIFIER_ATTRIBUTE_NONE
// MODIFIER_ATTRIBUTE_PERMANENT
// Duration
// FloatValue
// EffectAttachType
// follow_origin, follow_overhead, start_at_customorigin, world_origin
// EffectName
// StringValue
// IsBuff
// BooleanValue
// IsDebuff
// BooleanValue
// IsHidden
// BooleanValue
// IsPurgable
// BooleanValue
// OverrideAnimation
// Other actions can be found at the action list, but these are the most commonly available ones.

// ACT_DOTA_ATTACK
// ACT_DOTA_CAST_ABILITY_1 (2, 3, 4, 5, 6)
// ACT_DOTA_DISABLED
// ACT_DOTA_RUN
// ACT_DOTA_SPAWN
// ACT_DOTA_TELEPORT
// ACT_DOTA_VICTORY
// Passive
// BooleanValue
// TextureName
// StringValue
// ThinkInterval
// FloatValue

// Modifier Properties
// Modifier properties are gameplay values a modifier can change on the unit it is applied to. Included here is a simple example of a modifier that slows attacks and movement speed (this chunk is a block inside the "Modifiers" block of an ability).

// To specify numeric values, you can put in a number or you can use %name formatting to grab values out of the "AbilitySpecial" block of the ability. The advantage to using the %name syntax is that the value can change as the ability levels up and the numeric value can be formatted into tooltips.

// In this example, the slow duration comes from an "AbilitySpecial" block, but the slow values are just numbers.

// "creature_slithereen_crush_slow"
// {
//     "Duration"      "%slow_duration"
//     "Properties"
//     {
//         "MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE"      "-20"
//         "MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT"      "-20"
//     }
// }
// Available Modifier Properties

// MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_MAGICAL
// MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PHYSICAL
// MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PURE
// MODIFIER_PROPERTY_ABSORB_SPELL
// MODIFIER_PROPERTY_ATTACK_RANGE_BONUS
// MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT
// MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT_POWER_TREADS
// MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT_SECONDARY
// MODIFIER_PROPERTY_AVOID_CONSTANT
// MODIFIER_PROPERTY_AVOID_SPELL
// MODIFIER_PROPERTY_BASEATTACK_BONUSDAMAGE
// MODIFIER_PROPERTY_BASE_ATTACK_TIME_CONSTANT
// MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE
// MODIFIER_PROPERTY_BASE_MANA_REGEN
// MODIFIER_PROPERTY_BONUS_DAY_VISION
// MODIFIER_PROPERTY_BONUS_NIGHT_VISION
// MODIFIER_PROPERTY_BONUS_VISION_PERCENTAGE
// MODIFIER_PROPERTY_CHANGE_ABILITY_VALUE
// MODIFIER_PROPERTY_COOLDOWN_REDUCTION_CONSTANT
// MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE
// MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE_ILLUSION
// MODIFIER_PROPERTY_DEATHGOLDCOST
// MODIFIER_PROPERTY_DISABLE_AUTOATTACK
// MODIFIER_PROPERTY_DISABLE_HEALING
// MODIFIER_PROPERTY_DISABLE_TURNING //unhandled
// MODIFIER_PROPERTY_EVASION_CONSTANT
// MODIFIER_PROPERTY_EXTRA_HEALTH_BONUS
// MODIFIER_PROPERTY_EXTRA_MANA_BONUS
// MODIFIER_PROPERTY_EXTRA_STRENGTH_BONUS
// MODIFIER_PROPERTY_FORCE_DRAW_MINIMAP
// MODIFIER_PROPERTY_HEALTH_BONUS
// MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT
// MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE
// MODIFIER_PROPERTY_IGNORE_CAST_ANGLE
// MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE
// MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_PERCENTAGE
// MODIFIER_PROPERTY_INCOMING_SPELL_DAMAGE_CONSTANT
// MODIFIER_PROPERTY_INVISIBILITY_LEVEL
// MODIFIER_PROPERTY_IS_ILLUSION
// MODIFIER_PROPERTY_IS_SCEPTER
// MODIFIER_PROPERTY_LIFETIME_FRACTION
// MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS
// MODIFIER_PROPERTY_MAGICAL_RESISTANCE_DECREPIFY_UNIQUE
// MODIFIER_PROPERTY_MAGICAL_RESISTANCE_ITEM_UNIQUE
// MODIFIER_PROPERTY_MANA_BONUS
// MODIFIER_PROPERTY_MANA_REGEN_CONSTANT
// MODIFIER_PROPERTY_MANA_REGEN_CONSTANT_UNIQUE
// MODIFIER_PROPERTY_MANA_REGEN_PERCENTAGE
// MODIFIER_PROPERTY_MANA_REGEN_TOTAL_PERCENTAGE
// MODIFIER_PROPERTY_MIN_HEALTH
// MODIFIER_PROPERTY_MISS_PERCENTAGE
// MODIFIER_PROPERTY_MODEL_CHANGE
// MODIFIER_PROPERTY_MODEL_SCALE // unhandled
// MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE
// MODIFIER_PROPERTY_MOVESPEED_BASE_OVERRIDE
// MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT
// MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE
// MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE_UNIQUE
// MODIFIER_PROPERTY_MOVESPEED_BONUS_UNIQUE
// MODIFIER_PROPERTY_MOVESPEED_LIMIT // unhandled
// MODIFIER_PROPERTY_MOVESPEED_MAX // unhandled
// MODIFIER_PROPERTY_OVERRIDE_ANIMATION
// MODIFIER_PROPERTY_OVERRIDE_ANIMATION_RATE
// MODIFIER_PROPERTY_OVERRIDE_ANIMATION_WEIGHT
// MODIFIER_PROPERTY_OVERRIDE_ATTACK_MAGICAL
// MODIFIER_PROPERTY_PERSISTENT_INVISIBILITY
// MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS
// MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_ILLUSIONS
// MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_UNIQUE
// MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_UNIQUE_ACTIVE
// MODIFIER_PROPERTY_PHYSICAL_CONSTANT_BLOCK
// MODIFIER_PROPERTY_POST_ATTACK
// MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE
// MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_POST_CRIT
// MODIFIER_PROPERTY_PREATTACK_CRITICALSTRIKE
// MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_COMPOSITE
// MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_MAGICAL
// MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PHYSICAL
// MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PURE
// MODIFIER_PROPERTY_PROCATTACK_FEEDBACK
// MODIFIER_PROPERTY_PROVIDES_FOW_POSITION
// MODIFIER_PROPERTY_REINCARNATION
// MODIFIER_PROPERTY_RESPAWNTIME
// MODIFIER_PROPERTY_RESPAWNTIME_PERCENTAGE
// MODIFIER_PROPERTY_RESPAWNTIME_STACKING
// MODIFIER_PROPERTY_STATS_AGILITY_BONUS
// MODIFIER_PROPERTY_STATS_INTELLECT_BONUS
// MODIFIER_PROPERTY_STATS_STRENGTH_BONUS
// MODIFIER_PROPERTY_TOOLTIP
// MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK
// MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK_UNAVOIDABLE_PRE_ARMOR
// MODIFIER_PROPERTY_TOTALDAMAGEOUTGOING_PERCENTAGE // unhandled
// MODIFIER_PROPERTY_TRANSLATE_ACTIVITY_MODIFIERS
// MODIFIER_PROPERTY_TRANSLATE_ATTACK_SOUND
// MODIFIER_PROPERTY_TURN_RATE_PERCENTAGE

// Modifier States
// States are very similar to properties, except they are tri-state values. A state can have the value "MODIFIER_STATE_VALUE_NO_ACTION", "MODIFIER_STATE_VALUE_ENABLED" or "MODIFIER_STATE_VALUE_DISABLED". This example modifier attaches a simple stunned effect, overrides the base unit's animation and forces the unit into the stunned state:

// "creature_bash_ministun"
// {
//     "EffectName"            "generic_stunned"
//     "EffectAttachType"      "follow_overhead"
//     "Duration"              "%stun_duration"
//     "OverrideAnimation"     "ACT_DOTA_DISABLED"
//     "States"
//     {
//         "MODIFIER_STATE_STUNNED" "MODIFIER_STATE_VALUE_ENABLED"
//     }         
// }
// Available Modifier States
// Here is a list of all the states available to a modifier:

// MODIFIER_STATE_ATTACK_IMMUNE
// MODIFIER_STATE_BLIND
// MODIFIER_STATE_BLOCK_DISABLED
// MODIFIER_STATE_CANNOT_MISS
// MODIFIER_STATE_COMMAND_RESTRICTED
// MODIFIER_STATE_DISARMED
// MODIFIER_STATE_DOMINATED
// MODIFIER_STATE_EVADE_DISABLED
// MODIFIER_STATE_FLYING
// MODIFIER_STATE_FLYING_FOR_PATHING_PURPOSES_ONLY
// MODIFIER_STATE_FROZEN
// MODIFIER_STATE_HEXED
// MODIFIER_STATE_INVISIBLE
// MODIFIER_STATE_INVULNERABLE
// MODIFIER_STATE_LOW_ATTACK_PRIORITY
// MODIFIER_STATE_MAGIC_IMMUNE
// MODIFIER_STATE_MUTED
// MODIFIER_STATE_NIGHTMARED
// MODIFIER_STATE_NO_HEALTH_BAR
// MODIFIER_STATE_NO_TEAM_MOVE_TO
// MODIFIER_STATE_NO_TEAM_SELECT
// MODIFIER_STATE_NOT_ON_MINIMAP
// MODIFIER_STATE_NOT_ON_MINIMAP_FOR_ENEMIES
// MODIFIER_STATE_NO_UNIT_COLLISION
// MODIFIER_STATE_OUT_OF_GAME
// MODIFIER_STATE_PASSIVES_DISABLED
// MODIFIER_STATE_PROVIDES_VISION
// MODIFIER_STATE_ROOTED
// MODIFIER_STATE_SILENCED
// MODIFIER_STATE_SOFT_DISARMED
// MODIFIER_STATE_SPECIALLY_DENIABLE
// MODIFIER_STATE_STUNNED
// MODIFIER_STATE_UNSELECTABLE

// Modifier Events
// Modifiers can also describe actions that should happen on various in-game events. Each of these keys is a block that describes actions. The action description system is documented elsewhere on this page.

// OnAbilityExecuted
// OnAttacked - The unit this modifier is attached to has been attacked.
// OnAttackLanded - The unit this modifier is attached to has landed an attack on a target. "%attack_damage" is set to the damage value before mitigation. Autoattack damage is dealt after this block executes.
// OnAttackStart - The unit this modifier is attached to has started to attack a target (when the attack animation begins, not when the autoattack projectile is created).
// OnCreated - The modifier has been created.
// OnDealDamage - The unit this modifier is attached to has dealt damage. "%attack_damage" is set to the damage value after mitigation.
// OnDeath
// OnDestroy - The modifier has been removed.
// OnIntervalThink
// OnKill
// OnOrbFire
// OnOrbImpact
// OnTakeDamage - The unit this modifier is attached to has taken damage. "%attack_damage" is set to the damage value after mitigation.
// Orb
// A full list of modifier events is available but not all have been exposed to the data driven system and are unsupported at this time. These events are used by the modifier events data driven system and cannot be called directly.