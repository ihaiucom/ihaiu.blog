
namespace ZF
{
    /// <summary>
    /// 粒子附着类型
    /// </summary>
    public enum ParticleAttachment
    {
        INVALID = -1, // 无效
        ABSORIGIN = 0, // 绝对 原点
        ABSORIGIN_FOLLOW = 1, // 绝对 原点 跟随
        CUSTOMORIGIN = 2, // 自定义 原点
        CUSTOMORIGIN_FOLLOW = 3, // 自定义 原点 跟随
        POINT = 4, // 点
        POINT_FOLLOW = 5, // 点 跟随
        EYES_FOLLOW = 6, // 眼睛 跟随
        OVERHEAD_FOLLOW = 7, // 头顶 跟随
        WORLDORIGIN = 8, // 世界 原点
        ROOTBONE_FOLLOW = 9, // 根骨骼 跟随
        RENDERORIGIN_FOLLOW = 10, // 渲染 原点
        MAIN_VIEW = 11, // 主视图
        WATERWAKE = 12, // 水
        CENTER_FOLLOW = 13, // 中心 跟随
        CUSTOM_GAME_STATE_1 = 14, // 自定义 状态
        HEALTHBAR = 15, // 血条
    }
}
