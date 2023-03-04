using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{

    //枚举类型：头顶提示
    public enum OverheadAlert
    {
        GOLD = 0,                   //金币获得
        DENY = 1,                   //反补
        CRITICAL = 2,               //暴击
        XP = 3,                     //经验获得
        BONUS_SPELL_DAMAGE = 4,     //额外技能伤害
        MISS = 5,                   //攻击未命中
        DAMAGE = 6,                 //受到伤害
        EVADE = 7,                  //闪避
        BLOCK = 8,                  //格挡
        BONUS_POISON_DAMAGE = 9,    //额外毒性伤害
        HEAL = 10,                  //回复生命值
        MANA_ADD = 11,              //获得魔法值
        MANA_LOSS = 12,             //失去魔法值
        LAST_HIT_EARLY = 13,        //早期击杀
        LAST_HIT_CLOSE = 14,        //近距离击杀
        LAST_HIT_MISS = 15,         //未命中击杀
        MAGICAL_BLOCK = 16,         //魔法伤害格挡
        INCOMING_DAMAGE = 17,       //受到伤害预警
        OUTGOING_DAMAGE = 18,       //攻击伤害预警
        DISABLE_RESIST = 19,        //减益抵抗
        DEATH = 20,                 //死亡
        BLOCKED = 21,               //攻击被格挡
        ITEM_RECEIVED = 22,         //获得物品
        SHARD = 23,                 //碎片获得
        DEADLY_BLOW = 24,           //致命攻击
    }
}
