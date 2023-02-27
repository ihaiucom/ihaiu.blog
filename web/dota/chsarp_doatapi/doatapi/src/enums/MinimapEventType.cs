using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    public enum MinimapEventType
    {
        ANCIENT_UNDER_ATTACK = 2,
        BASE_UNDER_ATTACK = 4,
        BASE_GLYPHED = 8,
        TEAMMATE_UNDER_ATTACK = 16,
        TEAMMATE_TELEPORTING = 32,
        TEAMMATE_DIED = 64,
        TUTORIAL_TASK_ACTIVE = 128,
        TUTORIAL_TASK_FINISHED = 256,
        HINT_LOCATION = 512,
        ENEMY_TELEPORTING = 1024,
        CANCEL_TELEPORTING = 2048,
        RADAR = 4096,
        RADAR_TARGET = 8192,
        MOVE_TO_TARGET = 16384,
    }
}
