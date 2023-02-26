using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    /// 音乐状态
    /// </summary>
    public enum MusicStatus
    {
        /// <summary>
        /// 无
        /// </summary>
        DOTA_MUSIC_STATUS_NONE = 0,
        /// <summary>
        /// 探索
        /// </summary>
        DOTA_MUSIC_STATUS_EXPLORATION = 1,
        /// <summary>
        /// 战斗
        /// </summary>
        DOTA_MUSIC_STATUS_BATTLE = 2,
        /// <summary>
        /// 游戏前探索
        /// </summary>
        DOTA_MUSIC_STATUS_PRE_GAME_EXPLORATION = 3,
        /// <summary>
        /// 死亡
        /// </summary>
        DOTA_MUSIC_STATUS_DEAD = 4,
        /// <summary>
        /// 最后
        /// </summary>
        DOTA_MUSIC_STATUS_LAST = 5,
    }
}
