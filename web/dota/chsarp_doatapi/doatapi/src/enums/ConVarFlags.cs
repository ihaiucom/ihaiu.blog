using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    /// 控制台变量标签
    /// </summary>
    public enum ConVarFlags
    {
        NONE = 0, // 无标志
        /**
         * 如果设置了此标志，ConVar 将成为匿名的，不会出现在“find”结果中。
         */
        UNREGISTERED = 1, // 未注册
        DEVELOPMENTONLY = 2, // 仅限开发
        HIDDEN = 16, // 隐藏
        /*
         * 使 ConVar 值对所有客户端隐藏（例如 sv_password）。
         *
         * 在 cvarlist 中报告为“prot”。
         */
        PROTECTED = 32, // 受保护
        /*
         * 执行命令或更改 ConVar 仅在单人游戏中允许。
         *
         * 在 cvarlist 中报告为“sp”。
         */
        SPONLY = 64, // 仅限单人游戏
        /*
         * 将 ConVar 值保存到 config.cfg 中。
         *
         * 在 cvarlist 中报告为“a”，除了 Lua ConVar。
         */
        ARCHIVE = 128, // 存档
        /*
         * 对于服务器端 ConVar，当值更改时，向所有玩家发送蓝色聊天文本通知。
         *
         * 在 cvarlist 中报告为“nf”。
         */
        NOTIFY = 256, // 通知
        /*
         * 对于客户端命令，将值发送到服务器。
         *
         * 在 cvarlist 中报告为“user”。
         */
        USERINFO = 512, // 用户信息
        /*
         * 强制 ConVar 仅具有可打印字符（无控制字符）。
         *
         * 在 cvarlist 中报告为“print”。
         */
        PRINTABLEONLY = 1024, // 仅限可打印字符
        /*
         * 不要将 ConVar 更改记录到控制台/日志文件/用户中。
         *
         * 在 cvarlist 中报告为“log”。
         */
        UNLOGGED = 2048, // 未记录
        /*
         * 告诉引擎永远不要将此变量打印为字符串，因为它包含控制序列。
         *
         * 在 cvarlist 中报告为“numeric”。
         */
        NEVER_AS_STRING = 4096, // 不作为字符串处理
        /*
         * 对于服务器端 ConVar，它将向所有客户端发送其值。客户端上也必须存在相同名称的 ConVar！
         *
         * 在 cvarlist 中报告为“rep”。
         */
        REPLICATED = 8192, // 已复制
        /*
         * 要更改 ConVar 或运行命令，需要启用 sv_cheats。
         *
         * 在 cvarlist 中报告为“cheat”。
         */
        CHEAT = 16384, // 作弊
        SS = 32768, // SS
        /*
         * 强制 ConVar 被演示记录。
         *
         * 在 cvarlist 中报告为“demo”。
         */
        DEMO = 65536, // 演示
        /*
         * FCVAR_DEMO 的反义词，确保 ConVar 不会在演示中记录。
         *
         * 在 cvarlist 中报告为“norecord”。
         */
        DONTRECORD = 131072, // 不记录
        /*
         * 使 ConVar 在连接到服务器或在单人游戏中时无法更改。
         */
        NOT_CONNECTED = 4194304, // 未连接
        VCONSOLE_SET_FOCUS = 1073741824, // VCONSOLE_SET_FOCUS
    }
}
