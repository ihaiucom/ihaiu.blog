using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    /// 金币修改器
    /// </summary>
    public enum ModifyGoldReason
    {
        /// <summary>
        /// 未指定
        /// </summary>
        DOTA_ModifyGold_Unspecified = 0,
        /// <summary>
        /// 死亡
        /// </summary>
        DOTA_ModifyGold_Death = 1,
        /// <summary>
        /// 买活
        /// </summary>
        DOTA_ModifyGold_Buyback = 2,
        /// <summary>
        /// 购买消耗品
        /// </summary>
        DOTA_ModifyGold_PurchaseConsumable = 3,
        /// <summary>
        /// 购买物品
        /// </summary>
        DOTA_ModifyGold_PurchaseItem = 4,
        /// <summary>
        /// 放弃重新分配
        /// </summary>
        DOTA_ModifyGold_AbandonedRedistribute = 5,
        /// <summary>
        /// 出售物品
        /// </summary>
        DOTA_ModifyGold_SellItem = 6,
        /// <summary>
        /// 技能消耗
        /// </summary>
        DOTA_ModifyGold_AbilityCost = 7,
        /// <summary>
        /// 作弊命令
        /// </summary>
        DOTA_ModifyGold_CheatCommand = 8,
        /// <summary>
        /// 选择惩罚
        /// </summary>
        DOTA_ModifyGold_SelectionPenalty = 9,
        /// <summary>
        /// 游戏时间
        /// </summary>
        DOTA_ModifyGold_GameTick = 10,
        /// <summary>
        /// 建筑
        /// </summary>
        DOTA_ModifyGold_Building = 11,
        /// <summary>
        /// 英雄击杀
        /// </summary>
        DOTA_ModifyGold_HeroKill = 12,
        /// <summary>
        /// 小兵击杀
        /// </summary>
        DOTA_ModifyGold_CreepKill = 13,
        /// <summary>
        /// 中立单位击杀
        /// </summary>
        DOTA_ModifyGold_NeutralKill = 14,
        /// <summary>
        /// 罗山击杀
        /// </summary>
        DOTA_ModifyGold_RoshanKill = 15,
        /// <summary>
        /// 信使击杀
        /// </summary>
        DOTA_ModifyGold_CourierKill = 16,
        /// <summary>
        /// 奖励符文
        /// </summary>
        DOTA_ModifyGold_BountyRune = 17,
        /// <summary>
        /// 共享金钱
        /// </summary>
        DOTA_ModifyGold_SharedGold = 18,
        /// <summary>
        /// 技能金钱
        /// </summary>
        DOTA_ModifyGold_AbilityGold = 19,
        /// <summary>
        /// 守卫击杀
        /// </summary>
        DOTA_ModifyGold_WardKill = 20,
        /// <summary>
        /// 信使被这个玩家击杀
        /// </summary>
        DOTA_ModifyGold_CourierKilledByThisPlayer = 21,
    }
}
