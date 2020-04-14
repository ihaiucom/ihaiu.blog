export default class LocalStorageData
{
     // 当前金本
     gold = 0;
     // 历史最大金本
     bestGoldPerGame = 0;
     // 是否跑过新手教程
     isTutorialSeen = false;
     // 是否新手教程完成了第1个步骤
     isTutorialStep1Done = false;
     // 是否新手教程完成了第2个步骤
     isTutorialStep2Done = false;
     // 是否跑过新手教程开启宝箱
     isTutorialChestSeen = false;
     // 是否购买了炸弹英雄
     isBombHero = false;
     // 是否购买了钥匙英雄
     isKeyHero = false;
     // 是否购买了枪管英雄
     isGunHero = false;
     // 是否购买了4x4地形
     isFourXFour = false;
     // 是否购买了道具 马铁蹄
     isHorseshoe = false;
     // 是否购买了道具 生命
     isHeart = false;
     // 是否购买了道具 运气
     isLuck = false;
     // 是否购买了道具 钥匙
     isKey = false;
     // 最后一次广告使用道具的冷却时间 时间戳 Date.now
     lastAdvCoolDown = 0;
     // 最后一次广告使用的道具ID
     lastItemWithAdv = 0;
     // 最后一次广告结果 时间戳 Date.now
     lastResultAdvCoolDown = 0;
}