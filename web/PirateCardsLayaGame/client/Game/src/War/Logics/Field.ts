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

export default class Field
{
    step = 1;

    
    game: WarGame;
    cardFactory: CardFactory;
    keyboardManager: keyboardManager;
    field: FieldItems;

    constructor(game: WarGame)
    {
        this.game = game;
        this.cardFactory = game.cardFactory;
    }

    
    initField()
    {
        var list:TweenContainer[] = [],
        columnCount = GameStatus.ColumnCount,
        rowCount = GameStatus.RowCount,
        animationTime = Consts.AnimationTime - (rowCount * columnCount == 9 ? 0 : 50);

        this.field = new FieldItems(columnCount, rowCount, this.game);
        
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
                    // card.shape.name = Consts.Hero,
                    GameStatus.isHeroAlive = false,
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
                list.push(this.moveAndSetWithAnimation(fieldPosition, defaultCard, animationTime));
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
        return <Hero>this.field.get(this.getHeroPosition())
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
    replaceCard (moveTyp: MoveType, cardGenerationType: CardGenerationType, score: number = 0) 
    {
        var position = this.field.getPosition(function(e) 
        {
            return e instanceof Hero
        });

        var list = Array();
        var card = this.getCardFromFactory(cardGenerationType, score);

        list.push(this.replaceCardByPosition(position.getNewPosition(moveType), card));

        if(!GameStatus.isTutorialSeen)
        {
            card.setOnClickEvent(this.onCardDown, this.onCardUp, this);
        }
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
        var list = Array(),
        heroPosition = this.getHeroPosition(),
        fieldPosition = heroPosition.getNewPosition(moveType);
        var card:Card = <any>this.field.get(fieldPosition);
        if (card instanceof NullCard)
             return list;
             
        //  卡牌是否播放声音
        this.isPlayMove(card) && setTimeout(this.playMoveSound.bind(this), 115);

        var tweens;
        var heroCard:Hero =<any> this.field.get(heroPosition);

        // 如果是炸弹，先把英雄移动炸弹位置，再播放炸弹动画
        if (card.type === CardScoreType.Bomb) 
        {
            list.push(this.moveAndSetWithAnimation(heroPosition.getNewPosition(moveType), heroCard, Consts.AnimationTime).setAnimationDuration(1));
            list.push(this.moveAndSetWithAnimation(heroPosition, card, Consts.AnimationTime));
        }
        else 
        {
            // 如果是Boss，游戏关卡等级加1
            card.isBoss && GameStatus.gameLevel++;

            var cardPositionType = this.getCardPositionType(moveType, heroPosition);
            var replaceCard = this.getCardToReplace(card);
            var tweenContainer = new TweenContainer;
            tweens = tweenContainer.tweens;
            // 移除卡牌
            tweens.push(card.removeChild());
            list.push(tweenContainer);

            switch (cardPositionType) 
            {
            // 英雄往中间移动
            case CardPositionType.Center:
                // 移动英雄卡牌
                list.push(this.moveAndSetWithAnimation(  heroPosition.getNewPosition(moveType), heroCard, Consts.AnimationTime) );
                
                switch (moveType) 
                {
                case MoveType.Left:
                    // 如果是在第1行 
                    0 === heroPosition.row 
                        ? list.push(this.moveAllLine(MoveType.Down, MoveType.Up, heroPosition.getNewPosition(MoveType.Down), replaceCard)) 
                        : list.push(this.moveAllLine(MoveType.Up, MoveType.Down, heroPosition.getNewPosition(MoveType.Up), replaceCard));
                    break;
                case MoveType.Right:
                    heroPosition.row === this.field.getRowCount() - 1 ? list.push.apply(list, this.moveAllLine(MoveType.Up, MoveType.Down, heroPosition.getNewPosition(MoveType.Up), replaceCard)) : list.push.apply(list, this.moveAllLine(MoveType.Down, MoveType.Up, heroPosition.getNewPosition(MoveType.Down), replaceCard));
                    break;
                case MoveType.Up:
                    heroPosition.column === this.field.getColumnCount() - 1 ? list.push.apply(list, this.moveAllLine(MoveType.Left, MoveType.Right, heroPosition.getNewPosition(MoveType.Left), replaceCard)) : list.push.apply(list, this.moveAllLine(MoveType.Right, MoveType.Left, heroPosition.getNewPosition(MoveType.Right), replaceCard));
                    break;
                case MoveType.Down:
                    0 === heroPosition.column ? list.push.apply(list, this.moveAllLine(MoveType.Right, MoveType.Left, heroPosition.getNewPosition(MoveType.Right), replaceCard)) : list.push.apply(list, this.moveAllLine(MoveType.Left, MoveType.Right, heroPosition.getNewPosition(MoveType.Left), replaceCard))
                }
                break;
            case CardPositionType.End:
                list.push.apply(list, this.moveAllLine(this.getOppositeMoveType(moveType), moveType, heroPosition, replaceCard))
            }
        }
        if (!GameStatus.isTutorialSeen) {
            var u, p = this.cardFactory.container.getByName(Consts.Shadow);
            if (p && this.cardFactory.container.bringToTop(p), this.cardFactory.container.bringToTop(this.cardFactory.container.getByName(Consts.Hero)), this.cardFactory.container.bringToTop(card.view), 1 === this.step)(u = list[list.length - 1]).tweens[u.tweens.length - 1].onComplete.add(function() {
                this.tutorialStep1()
            }.bind(this));
            if (2 === this.step)(u = list[list.length - 1]).tweens[u.tweens.length - 1].onComplete.add(function() {
                this.tutorialStep2(fieldPosition)
            }.bind(this));
            if (3 === this.step)(u = list[list.length - 1]).tweens[u.tweens.length - 1].onComplete.add(function() {
                this.tutorialStep3(fieldPosition)
            }.bind(this));
            if (4 === this.step)(u = list[list.length - 1]).tweens[u.tweens.length - 1].onComplete.add(function() {
                this.tutorialStep4()
            }.bind(this));
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
    getCardToReplaceAfterSmash (card:Card) 
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
                CardPositionType.End;
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
                CardPositionType.End;
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
                CardPositionType.End;
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
                CardPositionType.End;
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
            var tweenContainer = new TweenContainer();
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
    moveAllLine (moveTypeA:MoveType, moveTypeB: MoveType, fieldPosition:FieldPosition, card:Card) 
    {
        var animationList = [];

        for (var time = Consts.AnimationTime * Consts.AnimationMultiplier; this.field.isPositionValid(fieldPosition);) 
        {
            animationList.push(this.moveAndSetWithAnimation(fieldPosition.getNewPosition(moveTypeB), this.field.get(fieldPosition), Consts.AnimationTime).setAnimationDuration(time)),
            fieldPosition = fieldPosition.getNewPosition(moveTypeA);
        }

        var card = this.cardFactory.getDefault(),
        cardFieldPosition = fieldPosition.getNewPosition(moveTypeB);
        animationList.push(this.moveAndSetWithAnimation(cardFieldPosition, card, Consts.AnimationTime)),
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
    shootCannon () {
        SoundController.instance.playSound(SoundConsts.Cannon);
        var e = this.getHeroPosition(),
        i = this.field.get(e),
        o = [];
        return o.push.apply(o, this.shootCannonInDirection(MoveType.Right, i, e)),
        o.push.apply(o, this.shootCannonInDirection(MoveType.Left, i, e)),
        o.push.apply(o, this.shootCannonInDirection(MoveType.Up, i, e)),
        o.push.apply(o, this.shootCannonInDirection(MoveType.Down, i, e)),
        o
    }
    shootCannonInDirection (e, i, o) {
        var n = [],
        s = o.getNewPosition(e);
        if (!this.field.isPositionValid(s)) return n;
        var a = this.field.get(s);
        if (t.Field.canShootCard(a)) {
            if (n.push(this.shootCard(i.getCenterX(), i.getCenterY(), a.getCenterX(), a.getCenterY(), 200)), a.type === CardScoreType.Cannon) a.increaseScoreInNSeconds(i.shootScore, 400);
            else if (i.shootScore >= a.getScore()) {
                var r = this.getCardToReplaceAfterSmash(a),
                h = this.replaceCardByPosition(s, r, !0).setAnimationDuration(1);
                h.tweens[0].delay(400),
                n.push(h)
            } else a.reduceScoreInNSeconds(i.shootScore, 400)
        }
        return n
    }
    shootCard (e, i, o, n, s) {
        var a = t.ShapeFactoryHelper.getShape(this.game, e, i, t.ArtConsts.Items1, t.ArtConsts.Core);
        this.cardFactory.container.add(a);
        var r = this.game.add.tween(a).to({
            x: o,
            y: n
        },
        s);
        r.onUpdateCallback(this.onCoreFlyingUpdate, this),
        r.onComplete.add(this.onCoreFlyingComplete, this);
        var h = new TweenContainer;
        return h.animationDuration = 1,
        h.tweens.push(r),
        h
    }
    onCoreFlyingUpdate (e) {
        var i = new t.CannonFlyingSmoke(this.game, e.target.x, e.target.y);
        this.cardFactory.container.add(i)
    }
    onCoreFlyingComplete (t) {
        this.addBombExplosionAnimation(t.x, t.y, 0),
        t.kill()
    }

    // 炮管，是否可以攻击该卡牌
    static canShootCard (card: Card) 
    {
        if(card.isEmpty) return false;
        
        switch (card.type) 
        {
            case CardScoreType.Boss:
            case CardScoreType.Enemy:
            case CardScoreType.Trap:
            case CardScoreType.Armor:
            case CardScoreType.Health:
            case CardScoreType.Poison:
            case CardScoreType.Cannon:
                return true;
            default:
                return false
        }
    }
    smashBomb () {
        for (var e = [], i = 0, o = this.field.getPositions(function(e) {
            var i = e;
            return i && i.type === CardScoreType.Bomb && i.getPowerUp() <= 0
        }); i < o.length; i++) {
            var n = o[i];
            SoundController.instance.playSound(SoundConsts.Bomb);
            var s = this.field.get(n);
            this.addBombExplosionAnimation(s.view.x, s.view.y, 100);
            var a = this.getCardToReplaceAfterSmash(this.field.get(n)),
            r = this.replaceCardByPosition(n, a, !0);
            e.push(r);
            for (var h = s.getLife(), d = 0, c = [MoveType.Up, MoveType.Down, MoveType.Left, MoveType.Right]; d < c.length; d++) {
                var u = c[d];
                if (e.push.apply(e, this.smashBombInDirection(u, n, h)), !GameStatus.isHeroAlive) return e
            }
        }
        return e
    }
    smashBombInDirection (e, i, o) {
        var n = [],
        s = Consts.SmashDelay;
        for (i = i.getNewPosition(e); this.field.isPositionValid(i);) {
            if (n.push.apply(n, this.smashBombInPosition(i, s, o)), !GameStatus.isHeroAlive) return n;
            s += Consts.SmashDelay,
            i = i.getNewPosition(e)
        }
        return n
    }
    smashBombInPosition (e, i, o) {
        var n = this.field.get(e),
        s = 4 == GameStatus.RowCount ? 1e3: 500;
        if (this.game.camera.shake(Consts.ShakeIntensity, s), this.addBombExplosionAnimation(n.view.x, n.view.y, i), n.type == CardScoreType.Chest) return [];
        if (n instanceof t.Hero && GameStatus.currentHero == t.HeroType.Bomb) return [];
        if (o >= n.getScore()) {
            if (! (n instanceof t.Hero)) {
                var a = this.getCardToReplaceAfterSmash(n);
                return [this.replaceCardByPosition(e, a, !0).setAnimationDuration(1)]
            }
            if (!GameStatus.isHeart) return GameStatus.isHeroAlive = !1,
            this.removeAllChild();
            GameStatus.isHeart = !1,
            this.keyboardManager.reset(),
            n.useHeart()
        } else n.reduceScoreInNSeconds(o, 1.2 * i);
        return []
    }
    addBombExplosionAnimation (t, e, i) {
        setTimeout(this.playBombExplosionAnimation.bind(this, t, e), i)
    }
    playBombExplosionAnimation (e, i) {
        var o = new t.Boom(this.game, e, i);
        o.play(t.AnimationConsts.Action, 60, !1, !0),
        this.cardFactory.container.add(o)
    }
    // 替换卡牌
    replaceCardByPosition (fieldPosition, card: Card, isChangeState = false) 
    {
        var tweenContainer = new TweenContainer();
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
        oldCard.isBoss && GameStatus.gameLevel++;
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
    shootLightning () {
        var e = this.getHeroPosition(),
        i = this.field.get(e),
        o = [];
        return o.push.apply(o, this.shootLightningInAllDirections(i.lightningScore, e, Consts.LightningDuration)),
        this.clearLightning(),
        o.length > 0 && SoundController.instance.playSound(SoundConsts.Lighting),
        o
    }
    clearLightning () {
        this.field.getAll().forEach(function(t) {
            t.canLightningStrike = !1
        })
    }
    shootLightningInAllDirections (e, i, o) {
        var n = [];
        return n.push.apply(n, this.shootLightningInDirection(MoveType.Right, e, i, o)),
        n.push.apply(n, this.shootLightningInDirection(MoveType.Left, e, i, o)),
        n.push.apply(n, this.shootLightningInDirection(MoveType.Up, e, i, o)),
        n.push.apply(n, this.shootLightningInDirection(MoveType.Down, e, i, o)),
        n
    }
    shootLightningInDirection (i, o, n, s) {
        var a = [],
        r = n.getNewPosition(i);
        if (!this.field.isPositionValid(r)) return a;
        var h, d = this.field.get(r);
        if (d instanceof t.Hero) return a;
        if (d.canLightningStrike) return a;
        if (e.canShootLightning(d)) {
            var c = s + Consts.LightningDuration,
            u = new TweenContainer;
            if ((h = u.tweens).push.apply(h, d.runLightning()), u.setAnimationDuration(Consts.LightningDuration), a.push(u), o >= d.getScore()) {
                var p = this.getCardToReplaceAfterSmash(d);
                p.canLightningStrike = !0;
                var l = this.replaceCardByPosition(r, p, !0).setAnimationDuration(1);
                l.tweens[0].delay(2 * c),
                a.push(l)
            } else d.reduceScoreInNSeconds(o, 2 * c);
            d.canLightningStrike = !0,
            a.push.apply(a, this.shootLightningInAllDirections(o, r, c))
        }
        return a
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
    shootMultiplier () {
        SoundController.instance.playSound(SoundConsts.Idol);
        var e = this.getHeroPosition(),
        i = this.field.get(e),
        o = [];
        return o.push.apply(o, this.shootMultiplierInDirection(MoveType.Right, i.multiplierScore, e)),
        o.push.apply(o, this.shootMultiplierInDirection(MoveType.Left, i.multiplierScore, e)),
        o.push.apply(o, this.shootMultiplierInDirection(MoveType.Up, i.multiplierScore, e)),
        o.push.apply(o, this.shootMultiplierInDirection(MoveType.Down, i.multiplierScore, e)),
        o
    }
    shootSkull () {
        SoundController.instance.playSound(SoundConsts.Skull);
        for (var e = this.getHeroPosition().getPoint(), i = [], o = 0, n = this.field.getPositions(function(e) {
            return ! (e instanceof t.Hero)
        }); o < n.length; o++) {
            var s = n[o],
            a = s.getPoint();
            i.push(this.shootSkullInCoordinate(e.x, e.y, a.x, a.y, 300));
            var r = this.getCardToReplaceAfterSmash(this.field.get(s)),
            h = this.replaceCardByPosition(s, r, !0).setAnimationDuration(1);
            h.tweens[0].delay(350),
            i.push(h)
        }
        return i
    }
    shootSkullInCoordinate (e, i, o, n, s) {
        var a = new t.Skull(this.game, e, i);
        a.animations.play(t.AnimationConsts.Action),
        a.anchor.set(0, 0),
        a.rotation = Phaser.Point.angle(new Phaser.Point(o, n), new Phaser.Point(e, i)),
        this.cardFactory.container.add(a);
        var r = this.game.add.tween(a).to({
            x: o,
            y: n
        },
        s);
        r.onUpdateCallback(this.onSkullFlyingUpdate, this),
        r.onComplete.add(this.onSkullFlyingComplete, this);
        var h = new TweenContainer;
        return h.animationDuration = 1,
        h.tweens.push(r),
        h
    }
    onSkullFlyingUpdate (e) {
        var i = new t.SkullLight(this.game, e.target.x, e.target.y);
        this.cardFactory.container.addChild(i),
        e.target.bringToTop()
    }
    onSkullFlyingComplete (t) {
        this.addBombExplosionAnimation(t.x, t.y, 0),
        t.kill()
    }
    shootMultiplierInDirection (i, o, n) {
        var s = [],
        a = n.getNewPosition(i);
        if (!this.field.isPositionValid(a)) return s;
        var r = this.field.get(a);
        if (e.canMultiply(r.type, r.getScore())) {
            var h = r.multiplyScore(o);
            if (!h) return s;
            var d = (new TweenContainer).setAnimationDuration(1);
            return d.tweens.push(h),
            s.push(d),
            s
        }
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
            case CardScoreType.Horseshoe:
            case CardScoreType.Chest:
            case CardScoreType.Skull:
                return false;
        }
    }
    stopAllAnimations () {
        for (var e = 0,
        i = this.field.getAll(); e < i.length; e++) {
            i[e].view.children.filter(function(e) {
                return e instanceof t.SpriteAnimationBase
            }).forEach(function(t) {
                t.stopAnimation()
            })
        }
    }
    playAllAnimations () {
        for (var e = 0,
        i = this.field.getAll(); e < i.length; e++) {
            i[e].view.children.filter(function(e) {
                return e instanceof t.SpriteAnimationBase
            }).forEach(function(t) {
                t.playAnimation()
            })
        }
    }
    replaceAllNegativeCards () {
        for (var e = [], i = 0, o = this.field.getPositions(function(e) {
            return ! (e instanceof t.Hero)
        }); i < o.length; i++) {
            var n = o[i];
            if (this.field.get(n).isNegative()) {
                var s = this.getCardFromFactory(t.CardGenerationType.Positive),
                a = this.replaceCardByPosition(n, s, !0).setAnimationDuration(1);
                a.tweens[0].delay(200),
                e.push(a)
            }
        }
        return e
    }
    smashHero (t) {
        var e = this.getHero();
        this.addBombExplosionAnimation(e.shape.x, e.shape.y, t)
    }

    
}