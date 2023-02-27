using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    public enum UnitOrder
    {
        NONE = 0,
        MOVE_TO_POSITION = 1,
        MOVE_TO_TARGET = 2,
        ATTACK_MOVE = 3,
        ATTACK_TARGET = 4,
        CAST_POSITION = 5,
        CAST_TARGET = 6,
        CAST_TARGET_TREE = 7,
        CAST_NO_TARGET = 8,
        CAST_TOGGLE = 9,
        HOLD_POSITION = 10,
        TRAIN_ABILITY = 11,
        DROP_ITEM = 12,
        GIVE_ITEM = 13,
        PICKUP_ITEM = 14,
        PICKUP_RUNE = 15,
        PURCHASE_ITEM = 16,
        SELL_ITEM = 17,
        DISASSEMBLE_ITEM = 18,
        MOVE_ITEM = 19,
        CAST_TOGGLE_AUTO = 20,
        STOP = 21,
        TAUNT = 22,
        BUYBACK = 23,
        GLYPH = 24,
        EJECT_ITEM_FROM_STASH = 25,
        CAST_RUNE = 26,
        PING_ABILITY = 27,
        MOVE_TO_DIRECTION = 28,
        PATROL = 29,
        VECTOR_TARGET_POSITION = 30,
        RADAR = 31,
        SET_ITEM_COMBINE_LOCK = 32,
        CONTINUE = 33,
        VECTOR_TARGET_CANCELED = 34,
        CAST_RIVER_PAINT = 35,
        PREGAME_ADJUST_ITEM_ASSIGNMENT = 36,
        DROP_ITEM_AT_FOUNTAIN = 37,
        TAKE_ITEM_FROM_NEUTRAL_ITEM_STASH = 38,
        MOVE_RELATIVE = 39,
    }
}
