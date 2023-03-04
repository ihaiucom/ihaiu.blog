using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    /// 物品标签
    /// </summary>
    public enum ItemFlags
    {
        // 道具标志：对命中位置造成伤害
        ITEM_FLAG_DOHITLOCATIONDMG,
        // 道具标志：可用完
        ITEM_FLAG_EXHAUSTIBLE,
        // 道具标志：在世界中有限制
        ITEM_FLAG_LIMITINWORLD,
        // 道具标志：不能捡起弹药
        ITEM_FLAG_NOAMMOPICKUPS,
        // 道具标志：不能自动重新装填
        ITEM_FLAG_NOAUTORELOAD,
        // 道具标志：不能在装备为空时自动切换
        ITEM_FLAG_NOAUTOSWITCHEMPTY,
        // 道具标志：不能捡起道具
        ITEM_FLAG_NOITEMPICKUP,
        // 道具标志：在装备为空时可选择
        ITEM_FLAG_SELECTONEMPTY,
    }
}
