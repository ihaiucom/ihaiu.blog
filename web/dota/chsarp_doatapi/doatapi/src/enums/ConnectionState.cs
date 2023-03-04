using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    // 枚举连接状态
    public enum ConnectionState
    {
        UNKNOWN = 0, // 未知状态
        NOT_YET_CONNECTED = 1, // 尚未连接
        CONNECTED = 2, // 已连接
        DISCONNECTED = 3, // 已断开连接
        ABANDONED = 4, // 已丢弃
        LOADING = 5, // 正在加载
        FAILED = 6, // 连接失败
    }
}
