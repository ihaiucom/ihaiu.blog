using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    // 定义了 Dota2 中语音消息的接收者类型的枚举类型
    public enum SpeechType
    {
        USER_INVALID = 0,           // 无效的接收者类型
        USER_SINGLE = 1,            // 个人接收者类型
        USER_TEAM = 2,              // 队伍接收者类型
        USER_TEAM_NEARBY = 3,       // 附近队伍接收者类型
        USER_NEARBY = 4,            // 附近玩家接收者类型
        USER_ALL = 5,               // 所有玩家接收者类型
        GOOD_TEAM = 6,              // 友方队伍接收者类型
        BAD_TEAM = 7,               // 敌方队伍接收者类型
        SPECTATOR = 8,              // 观众接收者类型
        USER_TEAM_NOSPECTATOR = 9,  // 非观众队伍接收者类型
        RECIPIENT_TYPE_MAX = 10,    // 接收者类型上限
    }
}
