using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    public enum EntityThinkPhase
    {
        // 实体思考阶段：重新模拟
        RESIM = 0,
        // 实体思考阶段：重新感知
        RESENSING = 1,
        // 实体思考阶段：高级感知
        OSTSENSING = 2,
    }
}
