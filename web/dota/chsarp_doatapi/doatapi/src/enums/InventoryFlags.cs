using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    /// 物品栏选项
    /// </summary>
    public enum InventoryFlags
    {
        /// <summary>
        /// 无权限
        /// </summary>
        ALLOW_NONE = 0,
        /// <summary>
        /// 主物品栏权限
        /// </summary>
        ALLOW_MAIN = 1,
        /// <summary>
        /// 储物箱权限
        /// </summary>
        ALLOW_STASH = 2,
        /// <summary>
        /// 全部权限
        /// </summary>
        ALL_ACCESS = 3,
        /// <summary>
        /// 允许掉落地面
        /// </summary>
        ALLOW_DROP_ON_GROUND = 4,
        /// <summary>
        /// 允许掉落喷泉
        /// </summary>
        ALLOW_DROP_AT_FOUNTAIN = 8,
        /// <summary>
        /// 限制掉落地面
        /// </summary>
        LIMIT_DROP_ON_GROUND = 16,
    }
}
