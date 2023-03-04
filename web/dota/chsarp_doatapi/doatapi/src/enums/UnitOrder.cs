using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    /// 单位命令类型
    /// </summary>
    public enum UnitOrder
    {
        NONE = 0,                                     // 无
        MOVE_TO_POSITION = 1,                          // 移动到指定位置
        MOVE_TO_TARGET = 2,                            // 移动到指定目标
        ATTACK_MOVE = 3,                              // 进行攻击移动
        ATTACK_TARGET = 4,                            // 攻击指定目标
        CAST_POSITION = 5,                            // 施法到指定位置
        CAST_TARGET = 6,                              // 施法到指定目标
        CAST_TARGET_TREE = 7,                         // 施法到指定树木
        CAST_NO_TARGET = 8,                           // 施法无目标
        CAST_TOGGLE = 9,                              // 切换施法状态
        HOLD_POSITION = 10,                           // 停止移动
        TRAIN_ABILITY = 11,                           // 训练技能
        DROP_ITEM = 12,                               // 扔下物品
        GIVE_ITEM = 13,                               // 给予物品
        PICKUP_ITEM = 14,                             // 拾取物品
        PICKUP_RUNE = 15,                             // 拾取神符
        PURCHASE_ITEM = 16,                           // 购买物品
        SELL_ITEM = 17,                               // 出售物品
        DISASSEMBLE_ITEM = 18,                        // 分解物品
        MOVE_ITEM = 19,                               // 移动物品
        CAST_TOGGLE_AUTO = 20,                        // 切换自动施法状态
        STOP = 21,                                    // 停止行为
        TAUNT = 22,                                   // 嘲讽
        BUYBACK = 23,                                 // 赎回
        GLYPH = 24,                                   // 使用 Glyph
        EJECT_ITEM_FROM_STASH = 25,                   // 从储藏处拿出物品
        CAST_RUNE = 26,                               // 使用神符
        PING_ABILITY = 27,                            // 标记技能
        MOVE_TO_DIRECTION = 28,                       // 指定方向移动
        PATROL = 29,                                  // 巡逻
        VECTOR_TARGET_POSITION = 30,                  // 矢量目标位置
        RADAR = 31,                                   // Radar
        SET_ITEM_COMBINE_LOCK = 32,                    // 设置物品组合锁定
        CONTINUE = 33,                                // 继续行动
        VECTOR_TARGET_CANCELED = 34,                  // 取消矢量目标
        CAST_RIVER_PAINT = 35,                        // 涂鸦
        PREGAME_ADJUST_ITEM_ASSIGNMENT = 36,          // Pregame Adjust Item Assignment
        DROP_ITEM_AT_FOUNTAIN = 37,                   // 在喷泉处扔下物品
        TAKE_ITEM_FROM_NEUTRAL_ITEM_STASH = 38,       // 从中立物品储藏处拿取物品
        MOVE_RELATIVE = 39,                           // 相对移动
    }
}
