using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    /// 枚举类型，用于表示物品拆解规则
    /// </summary>
    public enum ItemDisassembleRule
    {
        /// <summary>
        /// 总是可以拆解
        /// </summary>
        DOTA_ITEM_DISASSEMBLE_ALWAYS,
        /// <summary>
        /// 从不可以拆解
        /// </summary>
        DOTA_ITEM_DISASSEMBLE_NEVER
    }
}
