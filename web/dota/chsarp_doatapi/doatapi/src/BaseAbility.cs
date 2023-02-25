using ProjectileID = System.Int32;

namespace ZF
{
    public abstract class BaseAbility
    {


        #region event 事件
        /// <summary>
        /// 开始施法
        /// </summary>
        public virtual void OnSpellStart()
        {

        }

        /// <summary>
        /// 开始阶段，转身之前（如果铸造成功，则返回true）。
        /// </summary>
        public virtual bool OnAbilityPhaseStart()
        {
            return false;
        }

        /// <summary>
        /// 当拥有者死亡
        /// </summary>
        public virtual void OnOwnerDied(){
            
        }

        /// <summary>
        /// 当拥有者出生
        /// </summary>
        public virtual void OnOwnerSpawned(){
            
        }


        /// <summary>
        /// 当持续性施法 吟唱
        /// </summary>
        /// <param name="interval">间隔</param>
        public virtual void OnChannelThink(float interval) { 

        }


        /// <summary>
        /// 当持续性施法完成
        /// </summary>
        /// <param name="interrupted">true:当持续性施法被中断, false:当持续性施法成功</param>
        public virtual void OnChannelFinish(bool interrupted) { 

        }

        
        /// <summary>
        /// 当切换为开启/关闭状态
        /// </summary>
        public virtual void OnToggle() { 
            
        }

        
        /// <summary>
        /// 升级
        /// </summary>
        public virtual void OnUpgrade() { 
            
        }

        
        /// <summary>
        /// 强制转换时间未成功完成。
        /// </summary>
        public virtual void OnAbilityPhaseInterrupted() { 
            
        }


        
        /// <summary>
        /// 费用计数更改。
        /// </summary>
        public virtual void OnChargeCountChanged() { 
            
        }

        
        /// <summary>
        /// 施法者（仅限英雄）升级等级、技能或获得新属性奖金。
        /// </summary>
        public virtual void OnHeroCalculateStatBonus() { 
            
        }
        
        
        /// <summary>
        /// 一名英雄在附近死亡（即乌尔恩）
        /// </summary>
        public virtual void OnHeroDiedNearby(BaseNpc unit, BaseNpc attacker, object events) { 
            
        }

        /// <summary>
        /// 英雄升级了
        /// </summary>
        public virtual void OnHeroLevelUp()
        {

        }

        /// <summary>
        /// 库存内容已更新
        /// </summary>
        public virtual void OnInventoryContentsChanged()
        {

        }


        /// <summary>
        /// 装备
        /// </summary>
        public virtual void OnItemEquipped(BaseItem item)
        {

        }

        /// <summary>
        /// 投射物 和目标相撞或者到达目标位置。如果返回true，投射物将销毁
        /// </summary>
        public virtual bool OnProjectileHit(BaseNpc target, Vector location)
        {
            return true;
        }

        /// <summary>
        /// 投射物 和目标相撞或者到达目标位置。如果返回true，投射物将销毁
        /// </summary>
        public virtual bool OnProjectileHit_ExtraData(BaseNpc target, Vector location, object extraData)
        {
            return true;
        }

        /// <summary>
        /// 投射物 和目标相撞或者到达目标位置。如果返回true，投射物将销毁
        /// </summary>
        public virtual bool OnProjectileHitHandle(BaseNpc target, Vector location, ProjectileID projectileHandle)
        {
            return true;
        }


        /// <summary>
        /// 投射物正在移动
        /// </summary>
        public virtual void OnProjectileThink( Vector location)
        {
        }

        /// <summary>
        /// 投射物正在移动
        /// </summary>
        public virtual void OnProjectileThink_ExtraData(Vector location, object extraData)
        {
        }

        /// <summary>
        /// 投射物正在移动
        /// </summary>
        public virtual void OnProjectileThinkHandle(ProjectileID projectileHandle)
        {
        }

        /// <summary>
        /// 被法术偷取时的特殊行为。
        /// </summary>
        public virtual void OnStolen(BaseAbility sourceAbility)
        {
        }

        /// <summary>
        /// 当被法术窃取丢失时的特殊行为。。
        /// </summary>
        public virtual void OnUnStolen()
        {
        }
        #endregion


    }
}

// 事件
// 引擎为技能提供了一系列触发事件，这些事件将能够在技能中触发：
// OnChannelFinish	当持续性施法完成
// OnChannelInterrupted	当持续性施法被中断
// OnChannelSucceeded	当持续性施法成功
// OnOwnerDied	当拥有者死亡
// OnOwnerSpawned	当拥有者出生
// OnProjectileFinish	当弹道粒子特效结束
// OnProjectileHitUnit	当弹道粒子特效命中单位
// OnSpellStart	当技能施法开始
// OnToggleOff	当切换为关闭状态
// OnToggleOn	当切换为开启状态
// OnUpgrade	当升级



// 技能行为
// "AbilityBehavior" (技能行为) 的全部类型，会使技能有不用的释放方式。你能够使用|来分割不同的常量，比如说 "DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_NO_TARGET" - 这些空格是很重要的！

// DOTA_ABILITY_BEHAVIOR_HIDDEN               = 1 << 0, //这个技能是单位所拥有的技能，但是不会在HUD上显示。
// DOTA_ABILITY_BEHAVIOR_PASSIVE              = 1 << 1, //这个技能是一个被动技能，不能被使用，但是会在HUD上显示。
// DOTA_ABILITY_BEHAVIOR_NO_TARGET            = 1 << 2, //不需要指定目标就能释放的技能，当按下技能按钮的时候，这个技能就会被释放。
// DOTA_ABILITY_BEHAVIOR_UNIT_TARGET          = 1 << 3, //技能需要指定一个目标来释放。
// DOTA_ABILITY_BEHAVIOR_POINT                = 1 << 4, //技能将会在鼠标指定的位置释放（如果鼠标指向了一个单位，会在单位所在的位置释放）。
// DOTA_ABILITY_BEHAVIOR_AOE                  = 1 << 5, //这个技能将会显示技能释放的范围，有点像DOTA_ABILITY_BEHAVIOR_POINT类的技能，但是会显示一个范围。
// DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE        = 1 << 6, //这个技能将能被释放，或者拥有对应的释放机制，但是不能被学习。（一般是用在类似炸弹人的引爆炸弹技能）。
// DOTA_ABILITY_BEHAVIOR_CHANNELLED           = 1 << 7, //持续性施法技能，如果施法者移动或者被沉默，这个技能将会被中断。
// DOTA_ABILITY_BEHAVIOR_ITEM                 = 1 << 8, //这个技能绑定了一个物品。
// DOTA_ABILITY_BEHAVIOR_TOGGLE               = 1 << 9, //切换类技能。
// DOTA_ABILITY_BEHAVIOR_DIRECTIONAL          = 1 << 10, //这个技能是一个从英雄出发的方向性技能，比如米拉娜的月之神剑或者屠夫的肉钩。
// DOTA_ABILITY_BEHAVIOR_IMMEDIATE            = 1 << 11, //这个技能将会被立即释放，不会进入操作序列。
// DOTA_ABILITY_BEHAVIOR_AUTOCAST             = 1 << 12, //这个技能可以被自动释放。
// DOTA_ABILITY_BEHAVIOR_NOASSIST             = 1 << 13, //这个技能将不会有辅助网格。
// DOTA_ABILITY_BEHAVIOR_AURA                 = 1 << 14, //这个技能是一个光环技能，Not really used other than to tag the ability as such.
// DOTA_ABILITY_BEHAVIOR_ATTACK               = 1 << 15, //这个技能是一个法球技能，不能对魔法免疫目标生效，
// DOTA_ABILITY_BEHAVIOR_DONT_RESUME_MOVEMENT = 1 << 16, //这个技能在释放完成之后不会继续之前的移动操作，只能和无目标或者立即释放类技能配合使用。
// DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES        = 1 << 17, //这个技能在单位被定身的时候无法使用。
// DOTA_ABILITY_BEHAVIOR_UNRESTRICTED         = 1 << 18, //这个技能在释放指令被限制的时候也能被使用。
// DOTA_ABILITY_BEHAVIOR_IGNORE_PSEUDO_QUEUE  = 1 << 19, //这个技能在被眩晕，施法和被强制攻击的时候也能使用，只能和自动释放类DOTA_ABILITY_BEHAVIOR_AUTOCAST配合使用。
// DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL       = 1 << 20, //这个技能即使施法被中断也能继续释放。
// DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_MOVEMENT = 1 << 21, //Doesn't cause certain modifiers to end, 目前未知，只在信使的速度爆发有见到。
// DOTA_ABILITY_BEHAVIOR_DONT_ALERT_TARGET    = 1 << 22, //这个技能在指定敌人释放的时候将不会惊醒他们。
// DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK   = 1 << 23, //这个技能在释放完成之后，将不会恢复对之前目标的自动攻击，只能配合无目标，非立即释放类和指定单位目标类技能使用。
// DOTA_ABILITY_BEHAVIOR_NORMAL_WHEN_STOLEN   = 1 << 24, //这个技能在被偷取之后，依然使用之前的施法前摇。
// DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING     = 1 << 25, //这个技能将会无视施法后摇。
// DOTA_ABILITY_BEHAVIOR_RUNE_TARGET          = 1 << 26, //这个技能能以神符为目标。


// Actions
// Each of these keys is a block that contains one or more action descriptions.


// AddAbility
// Target, AbilityName
// ActOnTargets
// Target, Action
// ApplyModifier
// Target, ModifierName
// AttachEffect
// EffectName, EffectAttachType, Target, ControlPoints,
// TargetPoint, EffectRadius, EffectDurationScale, EffectLifeDurationScale ,EffectColorA, EffectColorB, EffectAlphaScale
// Blink
// Target
// CleaveAttack
// CleavePercent, CleaveRadius
// CreateThinker
// Target, ModifierName
// Damage
// Target, Type, MinDamage/MaxDamage, Damage, CurrentHealthPercentBasedDamage, MaxHealthPercentBasedDamage
// DelayedAction
// Delay, Action
// DestroyTrees
// Target, Radius
// FireEffect
// EffectName, EffectAttachType, Target, ControlPoints
// TargetPoint, EffectRadius, EffectDurationScale, EffectLifeDurationScale ,EffectColorA, EffectColorB, EffectAlphaScale
// FireSound
// EffectName, Target
// Heal
// HealAmount, Target
// Knockback
// Target, Center, Duration, Distance, Height, IsFixedDistance, ShouldStun
// LevelUpAbility
// Target, AbilityName
// Lifesteal
// Target, LifestealPercent
// LinearProjectile
// Target, EffectName, MoveSpeed, StartRadius, EndRadius, FixedDistance, StartPosition, TargetTeams, TargetTypes, TargetFlags, HasFrontalCone, ProvidesVision, VisionRadius
// Random
// Chance, PseudoRandom, OnSuccess, OnFailure
// RemoveAbility
// Target, AbilityName
// RemoveModifier
// Target, ModifierName
// RunScript
// Target, ScriptFile, Function
// SpawnUnit
// UnitName, UnitCount, UnitLimit, SpawnRadius, Duration, Target, GrantsGold, GrantsXP
// Stun
// Target, Duration
// TrackingProjectile
// Target, EffectName, Dodgeable, ProvidesVision, VisionRadius, MoveSpeed, SourceAttachment



// 操作
// 以下是你在技能中能够使用操作中的一些Key：

// 操作名称	操作可用参数
// AddAbility	Target, AbilityName
// 添加技能	目标，技能名称
// ActOnTargets	Target, Action
// 使目标模型做出某个动作	目标，动作名称
// ApplyModifier	Target, ModifierName
// 应用Modifier	目标，Modifier名称
// AttachEffect	EffectName, EffectAttachType, Target, ControlPoints, EffectColorA, EffectColorB, EffectAlphaScale
// 附着点特效	特效名称，特效附着点类型，目标，控制点，特效颜色A，特效颜色B，特效不透明度比例
// Blink	Target
// 闪烁	目标
// CleaveAttack	CleavePercent, CleaveRadius
// 范围攻击	分裂伤害，分裂范围
// CreateThinker	Target, ModifierName
// 创建Thinker(定时器)	目标，Modifier名称
// Damage	Target, Type, MinDamage/MaxDamage, Damage, CurrentHealthPercentBasedDamage, MaxHealthPercentBasedDamage
// 伤害	目标，伤害类型，最小/最大伤害值，伤害值，基于当前生命百分比伤害，基于最大生命百分比伤害
// DelayedAction	Delay, Action
// 延迟操作	延迟时间，操作
// DestroyTrees	Target, Radius
// 摧毁树木	目标，范围
// FireEffect	EffectName, EffectAttachType, Target, ControlPoints, TargetPoint, EffectRadius, EffectDurationScale, EffectLifeDurationScale, EffectColorA, EffectColorB
// 播放特效	特效名称，特效附着点类型，目标，控制点，目标点，特效范围，特效播放时间比例，特效存活时间比例，特效颜色A，特效颜色B
// FireSound	EffectName, Target
// 播放声音	音效名称，目标
// Heal	HealAmount, Target
// 治愈	治疗量，目标
// Knockback	Target, Center, Duration, Distance, Height, IsFixedDistance, ShouldStun
// 击退	目标，中心，持续时间，距离，高度，固定距离，是否眩晕
// LevelUpAbility	Target, AbilityName
// 升级技能	目标，技能名称
// Lifesteal	Target, LifestealPercent
// 吸血	目标，吸血百分比
// LinearProjectile	Target, EffectName, MoveSpeed, StartRadius, EndRadius, FixedDistance, StartPosition, TargetTeams, TargetTypes, TargetFlags, HasFrontalCone, ProvidesVision, VisionRadius
// 线性投射物	目标，特效名称，移动速度，开始范围，结束范围，固定距离，开始位置，目标队伍，目标类型，目标状态，HasFrontalCone，提供视野，视野范围
// Random	Chance, PseudoRandom, OnSuccess, OnFailure
// 几率	概率，伪随机，成功时，失败时
// RemoveAbility	Target, AbilityName
// 移除技能	目标，技能名称
// RemoveModifier	Target, ModifierName
// 移除Modifier	目标，Modifier名称
// RunScript	Target, ScriptFile, Function
// 运行脚本	目标，脚本文件，运行函数
// SpawnUnit	UnitName, UnitCount, UnitLimit, SpawnRadius, Duration, Target, GrantsGold, GrantsXP
// 生产单位	单位名称，单位数量，单位上限，生产范围，持续时间，目标，死亡金钱量，死亡经验量
// Stun	Target, Duration
// 击晕	目标，持续时间
// TrackingProjectile	Target, EffectName, Dodgeable, ProvidesVision, VisionRadius, MoveSpeed, SourceAttachment
// 跟踪投射物	目标，特效名称，是否可闪避，提供视野，视野范围，移动速度，起源附着点
// Note.png 注意: 	AddAbility （增加技能）将会给单位添加一个0级的技能。 RemoveAbility （移除技能）将会移除对应技能（哪怕它已经升级了），更复杂的技能管理，应当通过程序来制作。




// 操作目标
// 在操作之前，首先应该选中目标(Target)。以下有几种选择方式。

// Note.png 注意: 	在几乎所有操作中，都需要选中目标。这非常重要，直接影响到你的技能效果。
// 单体目标
// 小范例：

// "Target"  "CASTER"
// 单体目标有以下这些值：

// 名称	描述
// CASTER	施法者
// TARGET	目标
// POINT	点
// ATTACKER	攻击者
// UNIT	单位
// 在页面最上例子中，就是用"Target(目标)" "CASTER(施法者)"，在施法者身上制造些特效。

// Note.png Note: 	在不同的操作中，这些字段提供的是不同的目标，你需要自己实际使用一下才能明白。
// 多个目标
// 小范例：

// "Target"
// {
//     "Center"    "POINT"
//     "Teams"     "DOTA_UNIT_TARGET_TEAM_ENEMY"
//     "Radius"    "300"
// }
// 想要在某个区域里选中多个目标，就需要在 Target代码块 中填入下面的参数：

// Center - 以目标为搜索范围的中心
// 中心目标	描述
// CASTER	施法者
// TARGET	目标
// POINT	点
// ATTACKER	攻击者
// UNIT	单位
// PROJECTILE	抛射物
// Radius - 搜索目标的范围
// [整数值]
// Teams - 根据队伍筛选目标（一样可以用 | 来指定多种类型）
// 目标队伍	描述
// DOTA_UNIT_TARGET_TEAM_BOTH	双方队伍
// DOTA_UNIT_TARGET_TEAM_CUSTOM	普通队伍
// DOTA_UNIT_TARGET_TEAM_ENEMY	敌方队伍
// DOTA_UNIT_TARGET_TEAM_FRIENDLY	友方队伍
// DOTA_UNIT_TARGET_TEAM_NONE	无
// Types - 指定的类型，ExcludeTypes - 排除对应的类型 （一样可以用 | 来指定多种类型）
// 类型	描述
// DOTA_UNIT_TARGET_ALL	所有
// DOTA_UNIT_TARGET_BASIC	基本
// DOTA_UNIT_TARGET_BUILDING	建筑
// DOTA_UNIT_TARGET_COURIER	信使
// DOTA_UNIT_TARGET_CREEP	野怪
// DOTA_UNIT_TARGET_CUSTOM	普通
// DOTA_UNIT_TARGET_HERO	英雄
// DOTA_UNIT_TARGET_MECHANICAL	机械
// DOTA_UNIT_TARGET_NONE	无
// DOTA_UNIT_TARGET_OTHER	其他
// DOTA_UNIT_TARGET_TREE	树木
// Flags - 指定目标的状态，ExcludeFlags - 排除对应状态的目标 （一样可以用 | 来指定多种类型）
// 名称	描述
// DOTA_UNIT_TARGET_FLAG_CHECK_DISABLE_HELP	检测玩家"禁用帮助"选项
// DOTA_UNIT_TARGET_FLAG_DEAD	已死亡
// DOTA_UNIT_TARGET_FLAG_FOW_VISIBLE	*暂无说明*
// DOTA_UNIT_TARGET_FLAG_INVULNERABLE	无敌
// DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES	魔法免疫的敌人
// DOTA_UNIT_TARGET_FLAG_MANA_ONLY	*暂无说明*
// DOTA_UNIT_TARGET_FLAG_MELEE_ONLY	*暂无说明*
// DOTA_UNIT_TARGET_FLAG_NO_INVIS	不是隐形的
// DOTA_UNIT_TARGET_FLAG_NONE	无
// DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS	不是远古
// DOTA_UNIT_TARGET_FLAG_NOT_ATTACK_IMMUNE	不是攻击免疫
// DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO	不是野怪
// DOTA_UNIT_TARGET_FLAG_NOT_DOMINATED	不可控制的
// DOTA_UNIT_TARGET_FLAG_NOT_ILLUSIONS	不是幻象
// DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES	不是魔法免疫的盟友
// DOTA_UNIT_TARGET_FLAG_NOT_NIGHTMARED	非被催眠的
// DOTA_UNIT_TARGET_FLAG_NOT_SUMMONED	非召唤的
// DOTA_UNIT_TARGET_FLAG_OUT_OF_WORLD	被放逐出世界的
// DOTA_UNIT_TARGET_FLAG_PLAYER_CONTROLLED	玩家控制的
// DOTA_UNIT_TARGET_FLAG_RANGED_ONLY	范围唯一的
// MaxTargets - 最多目标数量
// [整数值]
// Random - 在指定了最多目标数量之后，是否额外随机多选择一个单位。
// [布尔值]
// ScriptSelectPoints - *暂无说明*
// ScriptFile, Function, Radius, Count
// Note.png 注意: 	将Random 和 MaxTargets 共同使用，将Random 设置为0将会使操作只影响目标区域内MaxTargets或者更少的单位。