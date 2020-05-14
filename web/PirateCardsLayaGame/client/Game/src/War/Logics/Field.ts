import WarGame from "../WarGame";
import CardFactory from "./CardFactory";
import keyboardManager from "./KeyboardManager";
import FieldItems from "./FieldItems";
import GameStatus from "../Datas/GameStatus";
import Consts from "../Enums/Consts";
import RandomHelper from "../Utils/RandomHelper";
import FieldPosition from "../Datas/FieldPosition";
import { CardGenerationType } from "../Enums/CardGenerationType";
import { CardScoreType } from "../Enums/CardScoreType";
import Card from "./Card";
import SoundController from "./SoundController";
import ArrayUtils from "../Utils/ArrayUtils";
import SoundConsts from "../Enums/SoundConsts";
import { MoveType } from "../Enums/MoveType";
import { CardPositionType } from "../Enums/CardPositionType";
import TweenUtil from "../Utils/TweenUtil";
import TweenContainer from "../Utils/TweenContainer";
import Hero from "./Hero";
import ArtConsts from "../Enums/ArtConsts";
import FxShootCannon from "../../FGUI/Extends/GameHome/FxShootCannon";
import FxShootBoom from "../../FGUI/Extends/GameHome/FxShootBoom";
import { HeroType } from "../Enums/HeroType";
import FxSkull from "../../FGUI/Extends/GameHome/FxSkull";
import CardScoreTypeHelper from "../Utils/CardScoreTypeHelper";

export default class Field
{
    step = 1;

    
    game: WarGame;
    cardFactory: CardFactory;
    keyboardManager: keyboardManager;
    field: FieldItems = new FieldItems();

    constructor(game: WarGame)
    {
        this.game = game;
        this.cardFactory = game.cardFactory;
    }

    uninstall()
    {
        this.field.clear();
    }
    
    initField()
    {
        var list:TweenContainer[] = [],
        columnCount = GameStatus.ColumnCount,
        rowCount = GameStatus.RowCount,
        animationTime = Consts.AnimationTime - (rowCount * columnCount == 9 ? 0 : 50);

        this.field.clear();
        this.field.init(columnCount, rowCount, this.game);
        
        var randomVal = RandomHelper.getRandomIntInclusive(1, 5);
        
        for (var row = 0; row < rowCount; row++) 
        {
            for (var column = 0; column < columnCount; column++) 
            {
                var card = undefined,
                // 是否是英雄开始位置所在行
                isHeroStartRow = row === Consts.HeroStartRow - 1,
                // 是否是英雄开始位置所在列
                isHeroStartColumn = column === Consts.HeroStartColumn - 1;
                
                if (isHeroStartRow && isHeroStartColumn)
                {
                    card = this.cardFactory.getHero();
                    GameStatus.isHeroAlive = true;
                    GameStatus.isGameEnd = false;
                }
                // else if (GameStatus.isTutorialSeen)
                // {
                //     card = this.getCardFromFactory();
                // }
                // // 英雄右侧格子，显示新手教程 手指
                // else if (isHeroStartRow && column === Consts.HeroStartColumn) 
                // {
                //     card = this.getEnemyCardFromFactory(randomVal);
                //     var u = new Arm(this.game, -30, 30);
                //     card.shape.name = Consts.CardWithArm;
                //     card.shape.add(u);
                // } 
                else
                {
                    // if(row === Consts.HeroStartRow && column === Consts.HeroStartColumn)
                    // {
                    //     card = this.getHealsCardFromFactory(randomVal);
                    //     this.movingArm = new Arm(this.game, -30, -50);
                    //     this.movingArm.alpha = 0;
                    //     card.shape.add(this.movingArm);
                    //     card.shape.name = Consts.CardWithMovingArm;
                    //     this.movingArmY = -200;
                    // }
                    // else
                    {
                        card = this.getCardFromFactory();
                    }
                   
                } 
                var fieldPosition = new FieldPosition(column, row);
                var defaultCard = this.cardFactory.getDefault();
                list.push(this.moveAndSetWithAnimation(fieldPosition, <any>defaultCard, animationTime));
                list.push(this.replaceCardByPosition(fieldPosition, card).setAnimationDuration(1));
            }
        }

        // if(GameStatus.isTutorialSeen)
        // {
        //     return GameStatus.isTutorialSeen;
        // }
        // else
        // {
        //     this.addShadow();
        // }
        return list;
    }

    // 添加遮罩
    addShadow()
    {
        var e = this.game.add.graphics(0, 0);
        e.name = Consts.Shadow,
        e.alpha = .5,
        e.beginFill(0),
        e.drawRect(2 * -this.game.width, 2 * -this.game.height, 4 * this.game.width, 4 * this.game.height),
        this.cardFactory.container.add(e),
        this.cardFactory.container.bringToTop(this.cardFactory.container.getByName(Consts.Hero)),
        this.cardFactory.container.bringToTop(this.cardFactory.container.getByName(Consts.CardWithArm))
    }

    // 手指 动画
    runArmTween()
    {
        var e = this.cardFactory.container.getByName(Consts.Shadow);
        e && this.cardFactory.container.bringToTop(e),
        this.cardFactory.container.bringToTop(this.cardFactory.container.getByName(Consts.Hero)),
        this.cardFactory.container.bringToTop(this.cardFactory.container.getByName(Consts.CardWithMovingArm)),
        this.movingArm.alpha = 1,
        this.movingArm.y = this.movingArmY;
        var i = this.movingArmY + 150,
        o = this.game.add.tween(this.movingArm).to({
            y: this.movingArmY
        },
        200).to({
            y: i
        },
        600),
        n = this.game.add.tween(this.movingArm).to({
            y: i
        },
        200);
        o.onStart.add(function() {
            this.movingArm.changeFrame(1)
        },
        this),
        n.onStart.add(function() {
            this.movingArm.changeFrame(0)
        },
        this),
        n.onComplete.add(this.runArmTween, this),
        o.chain(n),
        o.start()
    }

    // 生产卡牌 宝箱
    getChestCardFromFactory()
    {
        var card = this.cardFactory.getChestCard();
        return card;
    }

    // 生产卡牌 根据生成随机类型
    getCardFromFactory(generationType:CardGenerationType = CardGenerationType.Random, score = 0)
    {
        var card = this.cardFactory.getCard(generationType, score, this.getCardTypesOnTheTable());
        // if(GameStatus.isTutorialSeen)
        // {
        //     card.setOnClickEvent(this.onCardDown, this.onCardUp, this);
        // }
        return card;
    }

    // 生成卡牌 敌人小兵
    getEnemyCardFromFactory(t)
    {
        var card = this.cardFactory.getEnemy(t);
        return card;
    }

    // 生成卡牌 血量
    getHealsCardFromFactory(t)
    {
        return this.cardFactory.getHealth(t)
    }

    // 获取所有卡牌类型
    getCardTypesOnTheTable(): CardScoreType[]
    {
        return this.field.getAll().map(function(card: Card) 
        {
            return card.type
        })
    }

    // 生成卡牌 金币
    getCoinCardFromFactory(score)
    {
        var card = this.cardFactory.getCoinCard(score);
        return card
    }


    // 获取英雄Card
    getHero(): Hero
    {
        return <any>this.field.get(this.getHeroPosition())
    }

    // 获取英雄FieldPosition
    getHeroPosition() 
    {
        return this.field.findHeroPosition();
    }

    // 获取战斗卡牌
    getCardToFight (moveType: MoveType):Card
    {
        var position = this.field.findHeroPosition();
        if (null != position) 
        {
            var position2 = position.getNewPosition(moveType);
            if (this.field.isPositionValid(position2)) 
            {
                return this.field.get(position2)
            }
        }
        return null
    }


    // 替换卡牌
    replaceCard (moveType: MoveType, cardGenerationType: CardGenerationType, score: number = 0) 
    {
        var position = this.field.getPosition(function(e) 
        {
            return e instanceof Hero
        });

        var list = Array();
        var card = this.getCardFromFactory(cardGenerationType, score);

        list.push(this.replaceCardByPosition(position.getNewPosition(moveType), card));

        return list
    }

    tutorialStep1 () {
        var e = this;
        this.movingArm.animations.stop(),
        this.runArmTween(),
        GameStatus.isTutorialStep1Done = !0,
        this.field.getAll().forEach(function(i) {
            i instanceof Card && i.view.name === Consts.CardWithMovingArm && i.setOnClickEvent(e.onCardDown, e.onCardUp, e)
        })
    }
    tutorialStep2 (e) {
        GameStatus.isTutorialStep2Done = !0,
        this.runAllCardsAroundHero(e)
    }
    tutorialStep3 (t) {
        this.runAllCardsAroundHero(t)
    }
    tutorialStep4 () {
        var e = this.cardFactory.container.getByName(Consts.Shadow);
        this.game.add.tween(e).to({
            alpha: 0
        },
        100).start().onComplete.add(function() {
            var i = this;
            e.destroy(),
            GameStatus.isTutorialSeen = !0,
            this.field.getAll().forEach(function(e) {
                e instanceof t.Card && e.setOnClickEvent(i.onCardDown, i.onCardUp, i)
            })
        }.bind(this))
    }
    runAllCardsAroundHero (e) {
        for (var i = 0,
        o = [e.getNewPosition(MoveType.Left), e.getNewPosition(MoveType.Up), e.getNewPosition(MoveType.Right), e.getNewPosition(MoveType.Down)]; i < o.length; i++) {
            var n = o[i];
            if (this.field.isPositionValid(n)) {
                var s = this.field.get(n);
                this.cardFactory.container.bringToTop(s.view),
                s instanceof t.Card && s.setOnClickEvent(this.onCardDown, this.onCardUp, this)
            }
        }
    }
    move (moveType: MoveType) 
    {
        var list = [];
        var heroPosition = this.getHeroPosition();
        var fieldPosition = heroPosition.getNewPosition(moveType);
        var card:Card = <any>this.field.get(fieldPosition);
        if (card.isEmpty)
             return list;
             
        //  卡牌是否播放声音
        this.isPlayMove(card) && setTimeout(this.playMoveSound.bind(this), 115);

        var tweens;
        var heroCard:Hero =<any> this.field.get(heroPosition);

        // 如果是炸弹，先把英雄移动炸弹位置，再播放炸弹动画
        if (card.type === CardScoreType.Bomb) 
        {
            list.push(this.moveAndSetWithAnimation(heroPosition.getNewPosition(moveType), <any>heroCard, Consts.AnimationTime).setAnimationDuration(1));
            list.push(this.moveAndSetWithAnimation(heroPosition, card, Consts.AnimationTime));
        }
        else 
        {
            // 如果是Boss，游戏关卡等级加1
            card.isBoss && GameStatus.addGameLevel();

            var cardPositionType:CardPositionType = this.getCardPositionType(moveType, heroPosition);
            var replaceCard = this.getCardToReplace(card);
            var tweenContainer = TweenContainer.PoolGet();
            tweens = tweenContainer.tweens;
            // 移除卡牌
            tweens.push(card.removeChild());
            list.push(tweenContainer);

            switch (cardPositionType) 
            {
                // 英雄往中间移动
                case CardPositionType.Center:
                    // 移动英雄卡牌
                    list.push(this.moveAndSetWithAnimation(  heroPosition.getNewPosition(moveType), <any>heroCard, Consts.AnimationTime) );
                    
                    switch (moveType) 
                    {
                        case MoveType.Left:
                            // 如果是在第1行 
                            if(0 === heroPosition.row )
                            {
                                // 该行卡牌向下移动
                                var moveToPosition = heroPosition.getNewPosition(MoveType.Down);
                                var tween = this.moveAllLine(MoveType.Down, MoveType.Up, moveToPosition, replaceCard);
                                list.push(tween);
                            }
                            else
                            {
                                // 该行卡牌向上移动
                                var moveToPosition = heroPosition.getNewPosition(MoveType.Up);
                                var tween = this.moveAllLine(MoveType.Up, MoveType.Down, moveToPosition, replaceCard);
                                list.push(tween);
                            }
                            break;
                        case MoveType.Right:
                            // 如果在最后1行
                            if(heroPosition.row === this.field.getRowCount() - 1 )
                            {
                                // 该行卡牌向上移动
                                var moveToPosition = heroPosition.getNewPosition(MoveType.Up);
                                var tween = this.moveAllLine(MoveType.Up, MoveType.Down, moveToPosition, replaceCard);
                                list.push(tween);
                            }
                            else
                            {
                                // 该行卡牌向下移动
                                var moveToPosition = heroPosition.getNewPosition(MoveType.Down);
                                var tween = this.moveAllLine(MoveType.Down, MoveType.Up, moveToPosition, replaceCard);
                                list.push(tween);
                            }
                            break;
                        case MoveType.Up:
                            // 如果在最后1列
                            if(heroPosition.column === this.field.getColumnCount() - 1)
                            {
                                // 该行卡牌向左移动
                                var moveToPosition = heroPosition.getNewPosition(MoveType.Left);
                                var tween = this.moveAllLine(MoveType.Left, MoveType.Right, moveToPosition, replaceCard);
                                list.push(tween);
                            }
                            else
                            {
                                // 该行卡牌向右移动
                                var moveToPosition = heroPosition.getNewPosition(MoveType.Right);
                                var tween = this.moveAllLine(MoveType.Right, MoveType.Left, moveToPosition, replaceCard);
                                list.push(tween);
                            }
                            break;
                        case MoveType.Down:
                            // 如果在第1列
                            if(0 === heroPosition.column)
                            {
                                // 该行卡牌向右移动
                                var moveToPosition = heroPosition.getNewPosition(MoveType.Right);
                                var tween = this.moveAllLine(MoveType.Right, MoveType.Left, moveToPosition, replaceCard);
                                list.push(tween);
                            }
                            else
                            {
                                // 该行卡牌向左移动
                                var moveToPosition = heroPosition.getNewPosition(MoveType.Left);
                                var tween = this.moveAllLine(MoveType.Left, MoveType.Right, moveToPosition, replaceCard);
                                list.push(tween);
                            }
                            break;

                    }
                    break;
                case CardPositionType.End:
                    list.push(this.moveAllLine(this.getOppositeMoveType(moveType), moveType, heroPosition, replaceCard))
                    break;
            }
        }

        if (!GameStatus.isTutorialSeen) 
        {
            // var u;
            // var p = this.cardFactory.container.getByName(Consts.Shadow);

            // if (p && this.cardFactory.container.bringToTop(p), this.cardFactory.container.bringToTop(this.cardFactory.container.getByName(Consts.Hero)), this.cardFactory.container.bringToTop(card.view), 1 === this.step)(u = list[list.length - 1]).tweens[u.tweens.length - 1].onComplete.add(function() {
            //     this.tutorialStep1()
            // }.bind(this));
            // if (2 === this.step)(u = list[list.length - 1]).tweens[u.tweens.length - 1].onComplete.add(function() {
            //     this.tutorialStep2(fieldPosition)
            // }.bind(this));
            // if (3 === this.step)(u = list[list.length - 1]).tweens[u.tweens.length - 1].onComplete.add(function() {
            //     this.tutorialStep3(fieldPosition)
            // }.bind(this));
            // if (4 === this.step)(u = list[list.length - 1]).tweens[u.tweens.length - 1].onComplete.add(function() {
            //     this.tutorialStep4()
            // }.bind(this));

            this.step++
        }
        return list
    }

    // 卡牌是否需要播放移动声音
    isPlayMove (card:Card) 
    {
        switch (card.type) 
        {
        case CardScoreType.Boss:
        case CardScoreType.Enemy:
            return false;
        case CardScoreType.Trap:
            return !card.isOpen;
        case CardScoreType.Health:
        case CardScoreType.Gold:
        case CardScoreType.Armor:
        case CardScoreType.Cannon:
        case CardScoreType.Barrel:
        case CardScoreType.Chest:
        case CardScoreType.Bomb:
        case CardScoreType.Poison:
        case CardScoreType.Horseshoe:
        case CardScoreType.Lightning:
        case CardScoreType.Multiplier:
        case CardScoreType.MultiplierPositive:
        case CardScoreType.MultiplierNegative:
        case CardScoreType.AddPositive:
        case CardScoreType.AddNegative:
        case CardScoreType.Skull:
            return true
        }
    }

    playMoveSound () 
    {
        SoundController.instance.playSound(ArrayUtils.getRandomItem([SoundConsts.Move01, SoundConsts.Move02]))
    }

    // 获取替换的卡牌
    getCardToReplace (card:Card) : Card
    {
        if(card.isBoss)
        {
            return this.getChestCardFromFactory();
        }
        else
        {
            return this.getCardFromFactory();
        }
    }

    // 打碎后，获取替换的卡牌
    getCardToReplaceAfterSmash (card:Card) : Card
    {
        if(card.isBoss)
        {
            GameStatus.isNeedCreateChestOnNextStep = true;
        }

        var score: number;
        if(card.getGoldValue() > 0)
        {
            score = card.getGoldValue();
        }
        else
        {
            score = card.getScore();
        }

        return this.getCoinCardFromFactory(score);
    }

    // 移动后的卡牌位置类型
    getCardPositionType (moveType: MoveType, fieldPosition: FieldPosition) 
    {
        switch (moveType) 
        {
        case MoveType.Right:
            if(fieldPosition.column == this.field.getColumnCount() - 1)
            {
                return CardPositionType.Start;
            }
            else if(0 == fieldPosition.column)
            {
                return CardPositionType.Center;
            }
            else
            {
                return CardPositionType.End;
            }
        case MoveType.Down:
            
            if(fieldPosition.row == this.field.getRowCount() - 1)
            {
                return CardPositionType.Start;
            }
            else if(0 == fieldPosition.row)
            {
                return CardPositionType.Center;
            }
            else
            {
                return CardPositionType.End;
            }

        case MoveType.Left:
            if(0 == fieldPosition.column )
            {
                return CardPositionType.Start;
            }
            else if(fieldPosition.column == this.field.getColumnCount() - 1)
            {
                return CardPositionType.Center;
            }
            else
            {
                return CardPositionType.End;
            }

        case MoveType.Up:
            if(0 == fieldPosition.row)
            {
                return CardPositionType.Start;
            }
            else if(fieldPosition.row == this.field.getRowCount() - 1 )
            {
                return CardPositionType.Center;
            }
            else
            {
                return CardPositionType.End;
            }
        }
    }

    // 移除所有
    removeAllChild () 
    {
        var list = [];
        SoundController.instance.playSound(SoundConsts.HeroDies);
        for (var cardList = this.field.getAll(), i = 0, s = cardList = RandomHelper.shuffle(cardList); i < s.length; i++) 
        {
            var card:Card = cardList[i];
            var tweenContainer = TweenContainer.PoolGet();
            tweenContainer.animationDuration = RandomHelper.getRandomIntInclusive(50, 150);
            tweenContainer.tweens.push(card.removeChild());
            list.push(tweenContainer)
        }
        return list
    }

    // 是否有Boss存在
    isBossInTheField () 
    {
        return this.field.any(function(card:Card) 
        {
            return card.isBoss;
        })
    }

    // 移动卡牌，和这条线方向上的其他卡牌，在最后一个空位生成新的卡牌
    moveAllLine (moveTo:MoveType, moveTypeB: MoveType, fieldPosition:FieldPosition, card:Card) 
    {
        var animationList = [];

        for (var time = Consts.AnimationTime * Consts.AnimationMultiplier; this.field.isPositionValid(fieldPosition);) 
        {
            animationList.push(this.moveAndSetWithAnimation(fieldPosition.getNewPosition(moveTypeB), this.field.get(fieldPosition), Consts.AnimationTime).setAnimationDuration(time)),
            fieldPosition = fieldPosition.getNewPosition(moveTo);
        }

        var defaultCard:any = this.cardFactory.getDefault(),
        cardFieldPosition = fieldPosition.getNewPosition(moveTypeB);
        animationList.push(this.moveAndSetWithAnimation(cardFieldPosition, defaultCard, Consts.AnimationTime)),
        animationList.push(this.replaceCardByPosition(cardFieldPosition, card).setAnimationDuration(1));
        return animationList;
    }

    stepUpdate () {
        for (var i = 0, cardList = this.field.getAll(); i < cardList.length; i++) 
        {
            var card = cardList[i];
            // card.view.getByName(Consts.CardManAnimation) instanceof Boss && this.cardFactory.container.bringToTop(card.view),
            card.stepUpdate()
        }
    }

    // 执行加农炮
    shootCannon () : TweenContainer[]
    {
        SoundController.instance.playSound(SoundConsts.Cannon);
        var heroPosition = this.getHeroPosition();
        var heroCard:Hero = <any> this.field.get(heroPosition);
        var list = [];
        list.push(this.shootCannonInDirection(MoveType.Right, heroCard, heroPosition));
        list.push(this.shootCannonInDirection(MoveType.Left, heroCard, heroPosition));
        list.push(this.shootCannonInDirection(MoveType.Up, heroCard, heroPosition));
        list.push(this.shootCannonInDirection(MoveType.Down, heroCard, heroPosition));
        return list;
    }

    // 执行加农炮攻击具体位置
    shootCannonInDirection (moveType:MoveType, heroCard:Hero, heroPosition: FieldPosition) 
    {
        var list = [];
        var position = heroPosition.getNewPosition(moveType);
        // 无效位置
        if (!this.field.isPositionValid(position))
        {
            return list;
        } 

        var itemCard = this.field.get(position);
        // 该卡牌是否可以被攻击
        if (Field.canShootCard(itemCard)) 
        {
            // 发射炮弹子弹攻击
            var tween = this.shootCard(heroCard.getCenterX(), heroCard.getCenterY(), itemCard.getCenterX(), itemCard.getCenterY(), 200);
            list.push(tween);

            // 如果卡牌是 加农炮， 设置积分添加
            if (itemCard.type === CardScoreType.Cannon)
            {
                itemCard.increaseScoreInNSeconds(heroCard.shootScore, 400);
            }
            // 如果是木桶
            else if(itemCard.type === CardScoreType.Barrel)
            {
                var replaceCard = this.getCardFromFactory(CardGenerationType.AfterBarrel, itemCard.getScore());
                var tweenContainer = this.replaceCardByPosition(position, replaceCard, true).setAnimationDuration(1);
                tweenContainer.setFirstDelay(400);
                list.push(tweenContainer);
            }
            // 替换卡牌
            else if (heroCard.shootScore >= itemCard.getScore()) 
            {
                var replaceCard = this.getCardToReplaceAfterSmash(itemCard);
                var tweenContainer = this.replaceCardByPosition(position, replaceCard, true).setAnimationDuration(1);
                tweenContainer.setFirstDelay(400);
                list.push(tweenContainer);
            } 
            // 减少血量, 延迟
            else 
            {
                itemCard.reduceScoreInNSeconds(heroCard.shootScore, 400)
            }
        }
        return list
    }

    // 发送炮弹
    shootCard (fromX: number, fromY: number, toX: number, toY: number, duration: number) 
    {
        var fx = FxShootCannon.PoolGet();
        this.game.container.addChild(fx);
        var tweenContainer =  fx.moveTo(fromX, fromY, toX, toY, duration);
        tweenContainer.animationDuration = 1;
        return tweenContainer;

    }

    // 炮管，是否可以攻击该卡牌
    static canShootCard (card: Card) 
    {
        if(card.isEmpty) return false;
        if(card.isHero) return false;
        
        switch (card.type) 
        {
            case CardScoreType.Boss:
            case CardScoreType.Enemy:
            case CardScoreType.Trap:
            case CardScoreType.Armor:
            case CardScoreType.Health:
            case CardScoreType.Poison:
            case CardScoreType.Cannon:
            case CardScoreType.Barrel:
                return true;
            default:
                return false
        }
    }

    // 检查炸弹，能量小于等于0的，就引爆
    smashBomb () 
    {
        var bombPositionList = this.field.getPositions(function(card:Card) 
        {
            return card.type === CardScoreType.Bomb && card.getPowerUp() <= 0
        });

        var list = [];
        for (var i = 0 ; i < bombPositionList.length; i++) 
        {
            var position = bombPositionList[i];
            SoundController.instance.playSound(SoundConsts.Bomb);
            var card = this.field.get(position);
            this.addBombExplosionAnimation(card.view.x, card.view.y, 100);
            var replaceCard = this.getCardToReplaceAfterSmash(this.field.get(position));
            var tweenContainer = this.replaceCardByPosition(position, replaceCard, !0);
            list.push(tweenContainer);


            var life = card.getLife();
            var moveTypeList = [MoveType.Up, MoveType.Down, MoveType.Left, MoveType.Right];
            for (var d = 0 ; d < moveTypeList.length; d++) 
            {
                var moveType = moveTypeList[d];
                list.push( this.smashBombInDirection(moveType, position, life));

                if (!GameStatus.isHeroAlive) 
                {
                    return list
                }
            }
        }
        return list
    }

    // 炸弹 附近一个位置 检查
    smashBombInDirection (moveType: MoveType, position: FieldPosition, life: number) 
    {
        var list = [];
        var smashDelay = Consts.SmashDelay;
        // 遍历该方向上有效位置
        for (position = position.getNewPosition(moveType); this.field.isPositionValid(position);) 
        {
            list.push(this.smashBombInPosition(position, smashDelay, life));

            // 如果英雄死了就返回
            if (!GameStatus.isHeroAlive) return list;

            smashDelay += Consts.SmashDelay,
            position = position.getNewPosition(moveType);
        }
        return list
    }
    // 炸弹 检查具体一个位置
    smashBombInPosition (position: FieldPosition, smashDelay: number, life: number) 
    {
        var card = this.field.get(position);
        var shakeTime = 4 == GameStatus.RowCount ? 1e3: 500;
        this.game.shake(Consts.ShakeIntensity, shakeTime);
        this.addBombExplosionAnimation(card.view.x, card.view.y, smashDelay);

        // 如果是宝箱
        if (card.type == CardScoreType.Chest) return [];

        // 如果当前卡牌是英雄，并且是炸弹英雄
        if (card.isHero && GameStatus.currentHero == HeroType.Bomb) return [];


        // 如果该卡牌被炸得没有血量
        if (life >= card.getScore()) 
        {
            // 非英雄, 生成新的卡牌替换
            if (!card.isHero) 
            {
                var replaceCard = this.getCardToReplaceAfterSmash(card);
                return [this.replaceCardByPosition(position, replaceCard, true).setAnimationDuration(1)]
            }

            // 如果没有生命道具，就结束游戏
            if (!GameStatus.isHeart)
            {
                GameStatus.isHeroAlive = false;
                return this.removeAllChild();
            } 

            // 英雄使用生命道具
            var hero:Hero =<any> card;
            GameStatus.isHeart = false;
            this.keyboardManager.reset();
            hero.useHeart();
        } 
        else 
        {
            // 减少血量, 延迟
            card.reduceScoreInNSeconds(life, 1.2 * smashDelay);
        }
        return []
    }

    // 延迟播放炸弹爆炸动画
    addBombExplosionAnimation (x: number, y: number, delay) 
    {
        setTimeout(this.playBombExplosionAnimation.bind(this, x, y), delay)
    }

    // 播放炸弹爆炸动画
    playBombExplosionAnimation (x: number, y: number) 
    {
        var fx = FxShootBoom.PoolGet();
        fx.setXY(x, y);
        this.game.container.addChild(fx);
        fx.Play();
    }

    // 替换卡牌
    replaceCardByPosition (fieldPosition, card: Card, isChangeState = false) : TweenContainer
    {
        var tweenContainer = TweenContainer.PoolGet();
        var tweens = tweenContainer.tweens;
        var oldCard = this.field.get(fieldPosition);
        if(isChangeState)
        {
            if(oldCard.type == CardScoreType.Chest)
            {
                tweens.push(oldCard.open());
            }
            else if(oldCard.type == CardScoreType.Barrel)
            {
                tweens.push(oldCard.open());
            }
        }

        // 如果是Boss , 关卡等级+1
        oldCard.isBoss && GameStatus.addGameLevel();
        // 设置新卡牌到对应位置
        this.moveAndSet(fieldPosition, card);

        // 设置翻转前初始状态
        card.endTurnAnimationStart();
        tweenContainer.tweens.push(oldCard.startTurnAnimation(card.endTurnAnimationEnd, card));
        return tweenContainer;
    }

    // 设置卡牌新位置
    moveAndSet (position:FieldPosition, card:Card) 
    {
        this.field.set(position, card),
        card.setCoordinate(position.getPoint())
    }

    // 设置卡牌新位置，并且播放移动动画
    moveAndSetWithAnimation (position:FieldPosition, card:Card, time: number) : TweenContainer
    {
        var point = position.getPoint();
        this.field.set(position, card);

        var tweenContainer = TweenContainer.PoolGet();
        tweenContainer.tweens.push(card.moveTo(point, time));
        return tweenContainer;
    }

    getOppositeMoveType (moveType: MoveType) {
        switch (moveType) {
        case MoveType.Up:
            return MoveType.Down;
        case MoveType.Down:
            return MoveType.Up;
        case MoveType.Left:
            return MoveType.Right;
        case MoveType.Right:
            return MoveType.Left
        }
    }

    // 执行闪电效果
    shootLightning () 
    {
        var heroPosition = this.getHeroPosition();
        var heroCard : Hero= <any> this.field.get(heroPosition);
        var list = [];

        var tween = this.shootLightningInAllDirections(heroCard.lightningScore, heroPosition, Consts.LightningDuration);
        list.push(tween);
        this.clearLightning();
        // 如果有受击的就播放闪电声音
        list.length > 0 && SoundController.instance.playSound(SoundConsts.Lighting);
        return list;
    }
    //  清楚闪电状态
    clearLightning () 
    {
        this.field.getAll().forEach(function(card:Card) 
        {
            card.canLightningStrike = false;
        })
    }

    // 执行闪电效果各个方向
    shootLightningInAllDirections (lightningScore: number, heroPosition: FieldPosition, lightningDuration: number) 
    {
        var list = [];
        list.push(this.shootLightningInDirection(MoveType.Right, lightningScore, heroPosition, lightningDuration));
        list.push(this.shootLightningInDirection(MoveType.Left, lightningScore, heroPosition, lightningDuration));
        list.push(this.shootLightningInDirection(MoveType.Up, lightningScore, heroPosition, lightningDuration));
        list.push(this.shootLightningInDirection(MoveType.Down, lightningScore, heroPosition, lightningDuration));
        return list;
    }
    // 执行闪电效果 道具体卡牌
    shootLightningInDirection (moveType: MoveType, lightningScore: number, heroPosition: FieldPosition, lightningDuration: number) 
    {
        var list = [];
        var position = heroPosition.getNewPosition(moveType);
        // 无效位置
        if (!this.field.isPositionValid(position)) 
        {
            return list;
        }

        var tweens;
        var card = this.field.get(position);
        // 如果是英雄
        if (card.isHero) return list;
        // 如果该卡牌已经在闪电忙碌状态
        if (card.canLightningStrike) return list;

        // 判断该卡牌是否可以受闪电攻击
        if (Field.canShootLightning(card)) 
        {
            var duration = lightningDuration + Consts.LightningDuration;
            var tweenContainer =TweenContainer.PoolGet();
            tweenContainer.tweens.push(card.runLightning());
            tweenContainer.setAnimationDuration(Consts.LightningDuration);
            list.push(tweenContainer);


            if (lightningScore >= card.getScore()) 
            {
                var replaceCard = this.getCardToReplaceAfterSmash(card);
                replaceCard.canLightningStrike = true;
                var replaceTweenContainer = this.replaceCardByPosition(position, replaceCard, true).setAnimationDuration(1);
                replaceTweenContainer.setFirstDelay(2 * duration);
                list.push(replaceTweenContainer)
            } 
            else
            {
                card.reduceScoreInNSeconds(lightningScore, 2 * duration);
            } 
            card.canLightningStrike = true;
            list.push(this.shootLightningInAllDirections(lightningScore, position, duration));
        }
        return list
    }

    // 闪电，是否可以攻击该卡牌
    static canShootLightning (card:Card) 
    {
        switch (card.type) 
        {
            case CardScoreType.Boss:
            case CardScoreType.Enemy:
            case CardScoreType.Trap:
                return true;
            default:
                return false;
        }
    }

    // 执行倍数
    shootMultiplier () 
    {
        SoundController.instance.playSound(SoundConsts.Idol);
        var heroPosition = this.getHeroPosition();
        var heroCard:Hero = <any> this.field.get(heroPosition);
        var list = [];

        
        // 不是英雄的位置
        var positionList = this.field.getPositions(function(card:Card) {
            return !card.isHero;
        });

        if(heroCard.multiplierType != CardScoreType.Multiplier)
        {
            for (var  i = 0; i < positionList.length; i++) 
            {
                var position = positionList[i];
                var tweenContainer = this.shootMultiplierInPosition(position,  heroCard.multiplierType,  heroCard.multiplierScore);
                list.push(tweenContainer);
            }
        }
        else
        {
            list.push(this.shootMultiplierInDirection(MoveType.Right, heroCard.multiplierScore, heroPosition, heroCard.multiplierType));
            list.push(this.shootMultiplierInDirection(MoveType.Left, heroCard.multiplierScore, heroPosition, heroCard.multiplierType));
            list.push(this.shootMultiplierInDirection(MoveType.Up, heroCard.multiplierScore, heroPosition, heroCard.multiplierType));
            list.push(this.shootMultiplierInDirection(MoveType.Down, heroCard.multiplierScore, heroPosition, heroCard.multiplierType));
            
        }

        return list;
    }

    // 执行骷髅清屏，除英雄位置外
    shootSkull () 
    {
        SoundController.instance.playSound(SoundConsts.Skull);
        var point = this.getHeroPosition().getPoint();
        // 不是英雄的位置
        var positionList = this.field.getPositions(function(card:Card) {
            return !card.isHero;
        });

        var  list = [];
        for (var  i = 0; i < positionList.length; i++) 
        {
            var position = positionList[i];
            var pos = position.getPoint();
            list.push(this.shootSkullInCoordinate(point.x, point.y, pos.x, pos.y, 300));
            // 替换卡牌
            var replaceCard = this.getCardToReplaceAfterSmash(this.field.get(position));
            var tweenContainer = this.replaceCardByPosition(position, replaceCard, true).setAnimationDuration(1);
            tweenContainer.setFirstDelay(350);
            list.push(tweenContainer);
        }
        return list
    }
    
    // 播放骷髅头轰炸动画
    shootSkullInCoordinate (heroX, heroY, posX, posY, time) 
    {
        var fx = FxSkull.PoolGet();
        var tweenContainer = fx.moveTo(heroX, heroY, posX, posY, time);
        this.game.container.addChild(fx);
        tweenContainer.animationDuration = 1;
        return tweenContainer;
    }


    // 执行倍数，具体卡牌
    shootMultiplierInDirection (moveType:MoveType, multiplierScore: number, heroPosition: FieldPosition, multiplierType: CardScoreType) 
    {
        var position = heroPosition.getNewPosition(moveType);
        return this.shootMultiplierInPosition(position, multiplierType, multiplierScore);
    }

    shootMultiplierInPosition(position:FieldPosition, multiplierType: CardScoreType, multiplierScore: number)
    {
        
        var list = [];
        // 验证位置是否有效
        if (!this.field.isPositionValid(position)) return list;

        var card = this.field.get(position);
        var isNegativeCard = CardScoreTypeHelper.isCardScoreTypeNegative(card.type)
        switch(multiplierType)
        {
            case CardScoreType.MultiplierPositive:
            case CardScoreType.AddPositive:
                if(isNegativeCard)
                {
                    return list;
                }
                break;
             
            case CardScoreType.MultiplierNegative:
            case CardScoreType.AddNegative:
                if(!isNegativeCard)
                {
                    return list;
                }
                break;   
        }
        // 判断 倍速，是否可以应用该卡牌类型
        if (Field.canMultiply(card.type, card.getScore())) 
        {
            var tweenContainer ;
            switch(multiplierType)
            {
                case CardScoreType.MultiplierPositive:
                case CardScoreType.MultiplierNegative:
                    tweenContainer = card.increaseScore(multiplierScore, true);
                    break;
                case CardScoreType.AddPositive:
                case CardScoreType.AddNegative:
                    tweenContainer = card.increaseScore(multiplierScore, false);
                    break;
            }
            if (!tweenContainer) return list;
            tweenContainer.setAnimationDuration(1);
            list.push(tweenContainer);
        }
        return list;
    }


    // 倍速，是否可以应用该卡牌类型
    static canMultiply (cardScoreType: CardScoreType, score: number) 
    {
        switch (cardScoreType) 
        {
            case CardScoreType.Armor:
            case CardScoreType.Bomb:
            case CardScoreType.Cannon:
            case CardScoreType.Gold:
            case CardScoreType.Health:
            case CardScoreType.Lightning:
            case CardScoreType.Poison:
            case CardScoreType.Boss:
            case CardScoreType.Enemy:
            case CardScoreType.Barrel:
                return true;
            case CardScoreType.Trap:
                return score > 0;
            case CardScoreType.Multiplier:
            case CardScoreType.MultiplierPositive:
            case CardScoreType.MultiplierNegative:
            case CardScoreType.AddPositive:
            case CardScoreType.AddNegative:
            case CardScoreType.Horseshoe:
            case CardScoreType.Skull:
            case CardScoreType.Chest:
            case CardScoreType.Chest:
                return false;
        }
    }
    stopAllAnimations () {
        // for (var e = 0,
        // i = this.field.getAll(); e < i.length; e++) {
        //     i[e].view.children.filter(function(e) {
        //         return e instanceof t.SpriteAnimationBase
        //     }).forEach(function(t) {
        //         t.stopAnimation()
        //     })
        // }
    }
    playAllAnimations () {
        // var cardList = this.field.getAll();
        // for (var i = 0; i < cardList.length; i++)
        // {
        //     cardList[i].filter(function(e) 
        //     {
        //         return e instanceof t.SpriteAnimationBase
        //     }).forEach(function(t) 
        //     {
        //         t.playAnimation()
        //     })
        // }
    }

    // 英雄位置播放爆炸特效
    smashHero (delay: number) 
    {
        var hero = this.getHero();
        this.addBombExplosionAnimation(hero.getCenterX(), hero.getCenterY(), delay);
    }

    
}