using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    /// 物品的共享属性
    /// </summary>
    public enum ItemShareability
    {
        // 道具可共享性：完全可共享
        FULLY_SHAREABLE = 0,
        // 道具可共享性：部分可共享
        PARTIALLY_SHAREABLE = 1,
        // 道具可共享性：不可共享
        NOT_SHAREABLE = 2,
    }
}
