export default class FightResult
{
    // 英雄是否活着
    isHeroAlive: boolean;
    // 是否是宝箱
    isChest: boolean;
    // 是否移动
    isMove: boolean;
    // 是否增加一条生命
    isNeedIncreaseLifeByOne: boolean;
    isNeedIncreaseLifeByOneAfterBoss: boolean;

    constructor(isHeroAlive, isChest, isMove) 
    {
        this.isHeroAlive = isHeroAlive,
        this.isChest = isChest,
        this.isMove = isMove
    }
}
