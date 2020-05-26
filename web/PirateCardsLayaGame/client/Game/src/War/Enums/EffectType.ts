export enum EffectType
{
    AddArmor = 1, //获得{0}点护盾
    AddHPMax = 2, //增加{0}点生命最大值
    AddHP = 3, //获得{0}生命
    AddHPPer = 4, //恢复{0}生命值
    AddDamageExtra = 5, //计算攻击时{0}
    TiggerLightning = 6, //触发一次{0}伤害的闪电链效果
    TiggerCannonOne = 8, //触发一次{0}伤害的飞箭效果
    TiggerBomb = 9, //触发一次十字{0}伤害的炸弹效果
    ImmuneFar = 10, //免疫远程伤害
    ImmunePoison = 11, //免疫毒性攻击
    Invincible = 12, //无敌一回合，回合结束，无论使用与否，无敌消失。
    GoldMultiplier = 13, //结算金币*{0}
    AutoUnlockChest = 14, //自动解锁宝箱
    

}