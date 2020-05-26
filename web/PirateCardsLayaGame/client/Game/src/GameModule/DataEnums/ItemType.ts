// 作者:
// 0：普通道具
// 1：元宝
// 2：绑定元宝
// 3：铜钱
// 5：道具
// 6：英雄
// 7：英雄经验
// 8：玩家经验
// 9：体力
// 10：礼包
// 11：英雄碎片
// 12：武器
// 13：饰品
// 14：消耗品


// let list = this.configList;
// var itemList:any[] = Game.config.itemConsume.configList;
// this.addConfigList(itemList);

// var itemList:any[] = Game.config.itemDecorate.configList;
// this.addConfigList(itemList);

// var itemList:any[] = Game.config.itemWeapon.configList;
export enum ItemType
{
    /** 道具 */
    Tool = 5,


    /** 12：武器 */
    Weapon = 12,

    /** 13：饰品 */
    Decorate = 13,

    /** 14：消耗品 */
    Consume = 14,
}