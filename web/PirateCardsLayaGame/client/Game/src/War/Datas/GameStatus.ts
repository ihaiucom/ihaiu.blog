import Game from "../../Game";
import { HeroType } from "../Enums/HeroType";
import { CardScoreType } from "../Enums/CardScoreType";
import CardScoreTypeHelper from "../Utils/CardScoreTypeHelper";
import ReportMonitor from "../../Libs/ReportMonitor";
import War from "../War";
declare var wx;
export default class GameStatus
{
    static sGold = new Signal();
    private static DATE_KEY = "GameStatus";
    private static data = 
    {
        // 累计金币
        goldCumulative: 0,
        // 当前金本
        gold: 0,
        // 历史最大金本
        bestGoldPerGame: 0,
        // 是否跑过新手教程
        isTutorialSeen: false,
        // 是否新手教程完成了第1个步骤
        isTutorialStep1Done: false,
        // 是否新手教程完成了第2个步骤
        isTutorialStep2Done: false,
        // 是否跑过新手教程开启宝箱
        isTutorialChestSeen: false,
        // 是否购买了炸弹英雄
        isBombHero: false,
        // 是否购买了钥匙英雄
        isKeyHero: false,
        // 是否购买了枪管英雄
        isGunHero: false,
        // 是否购买了4x4地形
        isFourXFour: false,
        // 是否购买了道具 马铁蹄
        isHorseshoe: false,
        // 是否购买了道具 生命
        isHeart: false,
        // 是否购买了道具 运气
        isLuck: false,
        // 是否购买了道具 钥匙
        isKey: false,
        // 最后一次广告使用道具的冷却时间 时间戳 Date.now
        lastAdvCoolDown: 0,
        // 最后一次广告使用的道具ID
        lastItemWithAdv: 0,
        // 最后一次广告结果 时间戳 Date.now
        lastResultAdvCoolDown: 0
    };

    static addGameLevel()
    {
        this.gameLevel ++;
    }
    
    // 游戏等级
    static gameLevel = 1;
    // 一个级别步骤
    static levelStep = 10;
    // 开出boss在第几个步骤
    static turnsToBoss = 10;
    // 游戏币叠加
    static goldPerGame = 0;
    // 卡牌数量 = 好牌数量 - 坏牌数量
    static cardCounter = 0;
    // 是否需要创建Boss
    static isNeedCreateBoss: boolean = false;
    // 是否需要创建宝箱
    static isNeedCreateChest: boolean = false;
    // 当前英雄
    static currentHero: HeroType = HeroType.Base;
    // 行数
    static RowCount = 3;
    // 列数
    static ColumnCount = 3;

    // 英雄是否活着
    static isHeroAlive: boolean =  false;
    // 游戏是否结束
    static isGameEnd: boolean =  false;

    // 是否需要创建宝箱，下一个步骤
    static isNeedCreateChestOnNextStep: boolean = false;

    static stepCardNum = 0;


    static init()
    {
        if(this.currentHero == HeroType.Key)
        {
            this.isKey = true;
        }
        this.isHeroAlive = true;
        this.gameLevel = 1;
        this.levelStep = 10;
        this.turnsToBoss = this.levelStep;
        this.goldPerGame = 0;
        this.movesAfterLastSpecialCard = 0;
        this.cardCounter = 0;
        this.isNeedCreateBoss = false;
        this.stepCardNum = 0;
        
    }


    static load()
    {
        if(Game.localStorage.hasItem(this.DATE_KEY, false))
        {
            this.data = Game.localStorage.getJSON(this.DATE_KEY);
            if(this.data.goldCumulative == undefined)
            {
                this.data.goldCumulative = 0;
            }
        }
    }

    static save()
    {
        Game.localStorage.setJSON(this.DATE_KEY, this.data, false);
    }

    static get gold(): number
    {
        return this.data.gold;
    }

    static set gold(val: number)
    {
        this.data.gold = val;
        this.save();
        this.sGold.dispatch();
    }

    static get goldCumulative(): number
    {
        return this.data.goldCumulative;
    }

    static set goldCumulative(val: number)
    {
        this.data.goldCumulative = val;
        this.save();
    }

    
    static addUserGold(t: number)
    {
        this.data.gold += t;
        this.data.goldCumulative += t;
        this.save();
        this.sGold.dispatch();

        
        if(window['wx'])
        {
            var scoreVal = {
                "wxgame": {
                    "score":GameStatus.goldCumulative,
                    "update_time": Date.now()
                },
                "cost_ms":Date.now() - War.launchtimestamp
            };
            var scoreValStr = JSON.stringify(scoreVal)

            var list = [];
            // list.push({ key: "score", value: GameStatus.goldCumulative.toString()});
            list.push({ key: "score", value: scoreValStr});
            wx.setUserCloudStorage({
                KVDataList: list,
                  success: (res)=>{
                    console.log("上传排行榜数据成功", res)
                  },
                  fail: (res)=>{
                    console.error("上传排行榜数据失败", res)
                  }
            });
        }
    }
    
    static get bestGoldPerGame(): number
    {
        return this.data.bestGoldPerGame;
    }

    static set bestGoldPerGame(val: number)
    {
        this.data.bestGoldPerGame = val;
        this.save();
    }

    
    static get isTutorialSeen(): boolean
    {
        return this.data.isTutorialSeen;
    }

    static set isTutorialSeen(val: boolean)
    {
        this.data.isTutorialSeen = val;
        this.save();
    }


    static get isTutorialStep1Done(): boolean
    {
        return this.data.isTutorialSeen;
    }

    static set isTutorialStep1Done(val: boolean)
    {
        this.data.isTutorialStep1Done = val;
        this.save();
    }


    static get isTutorialStep2Done(): boolean
    {
        return this.data.isTutorialStep2Done;
    }

    static set isTutorialStep2Done(val: boolean)
    {
        this.data.isTutorialStep2Done = val;
        this.save();
    }
    

    static get isTutorialChestSeen(): boolean
    {
        return this.data.isTutorialChestSeen;
    }

    static set isTutorialChestSeen(val: boolean)
    {
        this.data.isTutorialChestSeen = val;
        this.save();
    }



    static get isBombHero(): boolean
    {
        return this.data.isBombHero;
    }

    static set isBombHero(val: boolean)
    {
        this.data.isBombHero = val;
        this.save();
    }
    

    static get isKeyHero(): boolean
    {
        return this.data.isKeyHero;
    }

    static set isKeyHero(val: boolean)
    {
        this.data.isKeyHero = val;
        this.save();
    }

    

    static get isGunHero(): boolean
    {
        return this.data.isGunHero;
    }

    static set isGunHero(val: boolean)
    {
        this.data.isGunHero = val;
        this.save();
    }

    
    static get isFourXFour(): boolean
    {
        return this.data.isFourXFour;
    }

    static set isFourXFour(val: boolean)
    {
        this.data.isFourXFour = val;
        this.save();
    }



    static get isHorseshoe(): boolean
    {
        return this.data.isHorseshoe;
    }

    static set isHorseshoe(val: boolean)
    {
        this.data.isHorseshoe = val;
        this.save();
    }

    

    // 是否购买了道具 生命
    static get isHeart(): boolean
    {
        return this.data.isHeart;
    }

    static set isHeart(val: boolean)
    {
        this.data.isHeart = val;
        this.save();
    }

    

    static get isLuck(): boolean
    {
        return this.data.isLuck;
    }

    static set isLuck(val: boolean)
    {
        this.data.isLuck = val;
        this.save();
    }

     
    // 是否购买了道具 钥匙
    static get isKey(): boolean
    {
        return this.data.isKey;
    }

    static set isKey(val: boolean)
    {
        this.data.isKey = val;
        this.save();
    }
    
    
    static get lastAdvCoolDown(): number
    {
        return this.data.lastAdvCoolDown;
    }

    static set lastAdvCoolDown(val: number)
    {
        this.data.lastAdvCoolDown = val;
        this.save();
    }


    
    static get lastResultAdvCoolDown(): number
    {
        return this.data.lastResultAdvCoolDown;
    }

    static set lastResultAdvCoolDown(val: number)
    {
        this.data.lastResultAdvCoolDown = val;
        this.save();
    }


    
    
    static get lastItemWithAdv(): number
    {
        return this.data.lastItemWithAdv;
    }

    static set lastItemWithAdv(val: number)
    {
        this.data.lastItemWithAdv = val;
        this.save();
    }


    static addGold(t: number)
    {
        this.goldPerGame += t;
        if(this.bestGoldPerGame < this.goldPerGame)
        {
            this.bestGoldPerGame = this.goldPerGame;
        }
    }

    static resetShop()
    {
        this.isHeart = false;
        this.isHorseshoe = false;
        this.isLuck = false;
        this.isKey = false;
    }

    // 移动后的特殊卡牌数量
    static movesAfterLastSpecialCard: number = 0;

    // 移动后，刷新特殊卡
    static updateMovesAfterSpecialCard(cardScoreType:CardScoreType)
    {
        // 血瓶, 盔甲
        if(cardScoreType == CardScoreType.Health 
            || cardScoreType == CardScoreType.Armor)
        {
            this.movesAfterLastSpecialCard = 0;
        }
        else
        {
            this.movesAfterLastSpecialCard ++;
        }
    }

    static updateCardCounter(cardScoreType: CardScoreType)
    {
        if(CardScoreTypeHelper.isCardScoreTypeNegative(cardScoreType))
        {
            this.cardCounter --;
        }
        
        if(CardScoreTypeHelper.isCardScoreTypePositive(cardScoreType))
        {
            this.cardCounter ++;
        }
    }

    static stepUpdate()
    {
        if(this.isBossShouldBeCreated())
        {
            this.isNeedCreateBoss = true;
            this.levelStep ++;
            this.turnsToBoss = this.levelStep + 1;
        }

        if(this.isNeedCreateChestOnNextStep)
        {
            this.isNeedCreateChestOnNextStep = false;
            this.isNeedCreateChest = true;
        }
    }

    // 是否应该创建Boss
    static isBossShouldBeCreated()
    {
        return !this.isNeedCreateBoss && 1 == this.turnsToBoss;
    }

    // 翻转Boss
    static decreaseTurnsToBoss()
    {
        return this.turnsToBoss && this.turnsToBoss --;
    }

}

window['GameStatus'] = GameStatus;