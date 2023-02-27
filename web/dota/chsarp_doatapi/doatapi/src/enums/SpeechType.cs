using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    public enum SpeechType
    {
        USER_INVALID = 0,
        USER_SINGLE = 1,
        USER_TEAM = 2,
        USER_TEAM_NEARBY = 3,
        USER_NEARBY = 4,
        USER_ALL = 5,
        GOOD_TEAM = 6,
        BAD_TEAM = 7,
        SPECTATOR = 8,
        USER_TEAM_NOSPECTATOR = 9,
        RECIPIENT_TYPE_MAX = 10,
    }
}
