using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    /// http://www.dota2rpg.com/forum.php?mod=viewthread&tid=1423
    /// 修改器状态
    /// </summary>
    //枚举类型：状态修改器
    public enum ModifierState
    {
        ROOTED = 0,                                 //被定身
        DISARMED = 1,                               //被缴械
        ATTACK_IMMUNE = 2,                          //攻击免疫
        SILENCED = 3,                               //被沉默
        MUTED = 4,                                  //被禁言
        STUNNED = 5,                                //被眩晕
        HEXED = 6,                                  //被妖术
        INVISIBLE = 7,                              //隐身状态
        INVULNERABLE = 8,                           //无敌状态
        MAGIC_IMMUNE = 9,                           //魔法免疫
        PROVIDES_VISION = 10,                       //提供视野
        NIGHTMARED = 11,                            //被噩梦缠绕
        BLOCK_DISABLED = 12,                        //无法格挡
        EVADE_DISABLED = 13,                        //无法闪避
        UNSELECTABLE = 14,                          //无法选中
        CANNOT_TARGET_ENEMIES = 15,                  //无法攻击敌人
        CANNOT_MISS = 16,                           //无法躲避
        SPECIALLY_DENIABLE = 17,                     //特殊可否认
        FROZEN = 18,                                //被冰冻
        COMMAND_RESTRICTED = 19,                     //受指令限制
        NOT_ON_MINIMAP = 20,                         //不在小地图上
        LOW_ATTACK_PRIORITY = 21,                    //低攻击优先级
        NO_HEALTH_BAR = 22,                          //没有生命条
        NO_HEALTH_BAR_FOR_ENEMIES = 23,              //敌人没有生命条
        FLYING = 24,                                //飞行状态
        NO_UNIT_COLLISION = 25,                      //无单位碰撞
        NO_TEAM_MOVE_TO = 26,                        //无法移动到团队
        NO_TEAM_SELECT = 27,                        //无法选择团队
        PASSIVES_DISABLED = 28,                      //被禁用被动技能
        DOMINATED = 29,                              //被支配
        BLIND = 30,                                 //被致盲
        OUT_OF_GAME = 31,                           //不在游戏中
        FAKE_ALLY = 32,                             //虚假盟友
        FLYING_FOR_PATHING_PURPOSES_ONLY = 33,      //仅用于寻路的飞行状态
        TRUESIGHT_IMMUNE = 34,                      //真视免疫
        UNTARGETABLE = 35,                          //无法被选中
        IGNORING_MOVE_AND_ATTACK_ORDERS = 36,        //忽略移动和攻击指令
        ALLOW_PATHING_THROUGH_TREES = 37,            //允许通过树木寻路
        NOT_ON_MINIMAP_FOR_ENEMIES = 38,             //敌人看不到在小地图上
        UNSLOWABLE = 39,                            //无法减速
        TETHERED = 40,                              //被束缚
        IGNORING_STOP_ORDERS = 41,                   //忽略停止指令
        FEARED = 42,                                //被恐惧
        TAUNTED = 43,                               //被嘲讽
        CANNOT_BE_MOTION_CONTROLLED = 44,            //无法被移动控制
        FORCED_FLYING_VISION = 45,                  //强制飞行视野
        ATTACK_ALLIES = 46,                         //攻击盟友
        ALLOW_PATHING_THROUGH_CLIFFS = 47,           //允许通过悬崖寻路
        ALLOW_PATHING_THROUGH_FISSURE = 48,          //允许通过裂缝寻路
        SPECIALLY_UNDENIABLE = 49,                   //特殊无法否认
    }
}
