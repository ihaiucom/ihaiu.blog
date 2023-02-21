namespace ZF
{
    public enum UnitFilterResult {
        SUCCESS = 0, // 成功
        FAIL_FRIENDLY = 1, // 失败:友好的
        FAIL_ENEMY = 2, // 失败:敌人
        FAIL_HERO = 3, // 失败:英雄
        FAIL_CONSIDERED_HERO = 4,  // 失败:被认为的 英雄
        FAIL_CREEP = 5, // 失败:爬行
        FAIL_BUILDING = 6, // 失败:建筑物
        FAIL_COURIER = 7, // 失败:信使
        FAIL_OTHER = 8,  // 失败:其他
        FAIL_ANCIENT = 9, // 失败: 古树
        FAIL_ILLUSION = 10, // 失败: 古树
        FAIL_SUMMONED = 11, // 失败: 传唤
        FAIL_DOMINATED = 12, // 失败:控制
        FAIL_MELEE = 13,  // 失败:近战
        FAIL_RANGED = 14,  // 失败:范围
        FAIL_DEAD = 15,  // 失败: 死去的
        FAIL_MAGIC_IMMUNE_ALLY = 16, // 失败: 魔法免疫 盟友
        FAIL_MAGIC_IMMUNE_ENEMY = 17, // 失败: 魔法免疫 敌人
        FAIL_INVULNERABLE = 18, //  失败: 无敌的
        FAIL_IN_FOW = 19, //
        FAIL_INVISIBLE = 20, // 失败: 不可见
        FAIL_NOT_PLAYER_CONTROLLED = 21, // 失败:非玩家控制
        FAIL_ATTACK_IMMUNE = 22, // 失败:攻击免疫
        FAIL_CUSTOM = 23, // 失败:自定义
        FAIL_INVALID_LOCATION = 24, // 失败:无效的位置
        FAIL_DISABLE_HELP = 25, // 失败:禁用帮助
        FAIL_OUT_OF_WORLD = 26, // 失败:越出
        FAIL_NIGHTMARED = 27,  // 失败:噩梦般的
        FAIL_OBSTRUCTED = 28, // 失败:阻挡
    }
}