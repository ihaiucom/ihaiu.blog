
namespace ZF
{
    /// <summary>
    /// 英雄类型
    /// </summary>
    public enum Attributes
    {
        DOTA_BOT_GANKER, // 游走杀人的位置 , 一般情况下走中带动节奏，当然也有劣势路单的时候，这类英雄在线上一般比较强势，劣势路单也不会轻易被杀死，如巫妖，蝙蝠，风行等。
        DOTA_BOT_HARD_CARRY, // 通常都是后期，负责打到后期挑大梁的人。
        DOTA_BOT_NUKER, // 指控制技能，nuker就是指控场了，比如es或者th这种
        DOTA_BOT_PURE_SUPPORT, // 存粹 辅助英雄
        DOTA_BOT_PUSH_SUPPORT, // 辅助英雄 推进，推倒。 指的就是推塔，多人推进的意思。
        DOTA_BOT_SEMI_CARRY, // 半 后期
        DOTA_BOT_STUN_SUPPORT, // 眩晕 辅助英雄
        DOTA_BOT_TANK, // 团队中的肉盾,吸引伤害的
    }
}
