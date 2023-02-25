
namespace ZF
{
    /// <summary>
    /// 游戏规则状态
    /// </summary>
    public enum GameState
    {
        DOTA_GAMERULES_STATE_INIT = 0, // 初始化
        DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD = 1, // 等待玩家加载
        DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP = 2, // 自定义游戏安装
        DOTA_GAMERULES_STATE_HERO_SELECTION = 3, // 英雄选择
        DOTA_GAMERULES_STATE_STRATEGY_TIME = 4, // 战略时间
        DOTA_GAMERULES_STATE_TEAM_SHOWCASE = 5, // 队伍展示
        DOTA_GAMERULES_STATE_WAIT_FOR_MAP_TO_LOAD = 6, // 等待地图加载
        DOTA_GAMERULES_STATE_PRE_GAME = 7, // 游戏开始前
        DOTA_GAMERULES_STATE_SCENARIO_SETUP = 8, // 剧本安装
        DOTA_GAMERULES_STATE_GAME_IN_PROGRESS = 9, // 游戏进行中
        DOTA_GAMERULES_STATE_POST_GAME = 10, // 游戏结束
        DOTA_GAMERULES_STATE_DISCONNECT = 11, // 断开连接
    }
}
