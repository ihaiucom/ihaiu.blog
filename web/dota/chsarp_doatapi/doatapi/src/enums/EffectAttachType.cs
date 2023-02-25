
namespace ZF
{
    /// <summary>
    /// 特效附着类型
    /// </summary>
    public enum EffectAttachType
    {
        attach_hitloc, // 附着 受伤点
        attach_origin, // 附着 目标
        attach_attack, // 附着 攻击
        attach_attack1, // 附着 攻击1
        attach_attack2, // 附着 攻击2
        follow_origin, // 跟随 目标
        follow_hitloc, // 跟随 受伤点
        follow_overhead, // 跟随 头顶
        follow_chest, // 跟随 胸部
        follow_head, // 跟随 头部
        follow_customorigin, // 跟随 自定义目标
        follow_attachment, // 跟随 附件
        follow_eyes, // 跟随 双眼
        follow_attachment_substepped, // 跟随 附件分步
        follow_renderorigin, // 跟随 渲染目标
        follow_rootbone, // 跟随 根骨骼
        world_origin, // 世界中心
        start_at_customorigin, // 开始于自定义目标 
        start_at_origin, // 开始于目标 
    }
}
