export enum TempHeroType
{
    LongQi      = 5,  //龙骑
    ZhanJi      = 6   //战姬
}

export enum HeroState
{
    Got, // 已获得
    CanGet, // 可招募
    NotGet, // 未获得
}

export enum HeroViewType
{
    List,
    Info,
}

export enum HeroDetailType
{
    Base,
    Skill,
    Equip,
    Star,
    MaxStar,
}

// 英雄攻击类型：物攻、魔攻
export enum HeroAttackType
{
    PAtt = 1,
    MAtt = 2,
}

export enum HeroWindowOpenType
{
    Default     = 0, // 正常打开
    BattlePlan  = 1, // 从备战界面进入
    Equip       = 2, // 从装备界面进入
    Team        = 3, // 从组队界面进入
}