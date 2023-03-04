using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    /// 单位关系类
    /// </summary>
    public enum UnitRelationshipClass
    {
        DOTA_NPC_UNIT_RELATIONSHIP_TYPE_BARRACKS,  // 兵营单位
        DOTA_NPC_UNIT_RELATIONSHIP_TYPE_BUILDING,  // 建筑单位
        DOTA_NPC_UNIT_RELATIONSHIP_TYPE_COURIER,   // 信使单位
        DOTA_NPC_UNIT_RELATIONSHIP_TYPE_DEFAULT,   // 默认关系
        DOTA_NPC_UNIT_RELATIONSHIP_TYPE_HERO,      // 英雄单位
        DOTA_NPC_UNIT_RELATIONSHIP_TYPE_SIEGE,     // 攻城单位
        DOTA_NPC_UNIT_RELATIONSHIP_TYPE_WARD,      // 守卫单位
    }
}
