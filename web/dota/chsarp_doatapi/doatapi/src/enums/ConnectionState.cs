using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    public enum ConnectionState
    {
        UNKNOWN = 0,
        NOT_YET_CONNECTED = 1,
        CONNECTED = 2,
        DISCONNECTED = 3,
        ABANDONED = 4,
        LOADING = 5,
        FAILED = 6,
    }
}
