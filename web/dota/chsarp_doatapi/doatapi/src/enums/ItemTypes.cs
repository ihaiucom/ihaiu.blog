using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    /// 物品类型
    /// </summary>
    public enum ItemTypes
    {
        // 道具类型：消耗品
        ITEM_CONSUMABLE,
        // 道具类型：核心
        ITEM_CORE,
        // 道具类型：派生
        ITEM_DERIVED,
        // 道具类型：扩展
        ITEM_EXTENSION,
        // 道具类型：奢侈品
        ITEM_LUXURY,
        // 道具类型：可出售
        ITEM_SELLABLE,
    }
}
