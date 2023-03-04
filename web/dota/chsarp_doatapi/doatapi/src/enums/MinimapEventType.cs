using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    public enum MinimapEventType
    {
        // 古代遭受攻击
        ANCIENT_UNDER_ATTACK = 2,
        // 基地遭受攻击
        BASE_UNDER_ATTACK = 4,
        // 基地被雕刻
        BASE_GLYPHED = 8,
        // 队友遭受攻击
        TEAMMATE_UNDER_ATTACK = 16,
        // 队友传送
        TEAMMATE_TELEPORTING = 32,
        // 队友死亡
        TEAMMATE_DIED = 64,
        // 教程任务激活
        TUTORIAL_TASK_ACTIVE = 128,
        // 教程任务完成
        TUTORIAL_TASK_FINISHED = 256,
        // 提示位置
        HINT_LOCATION = 512,
        // 敌人传送
        ENEMY_TELEPORTING = 1024,
        // 取消传送
        CANCEL_TELEPORTING = 2048,
        // 雷达
        RADAR = 4096,
        // 雷达目标
        RADAR_TARGET = 8192,
        // 移动到目标
        MOVE_TO_TARGET = 16384,
    }
}
