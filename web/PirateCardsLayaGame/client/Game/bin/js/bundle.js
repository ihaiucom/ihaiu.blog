(function () {
    'use strict';

    class GameConfig {
        constructor() { }
        static get isMobile() {
            var u = window.navigator.userAgent;
            return u.indexOf("Mobile") > -1;
        }
        static get scaleMode() {
            return Laya.Stage.SCALE_SHOWALL;
        }
        static get scaleX() {
            return Laya.stage.width / this.width;
        }
        static get scaleY() {
            return Laya.stage.height / this.height;
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
        }
    }
    GameConfig.width = 750;
    GameConfig.height = 1334;
    GameConfig.screenMode = "none";
    GameConfig.alignV = Laya.Stage.ALIGN_TOP;
    GameConfig.alignH = Laya.Stage.ALIGN_CENTER;
    GameConfig.startScene = "test/TestScene.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.isAntialias = true;
    GameConfig.init();

    class CardConfigLang extends excelconfigSources.Card {
        get name() {
            if (!Game.lang.isUseLang)
                return this.zhCnName;
            let value = Game.lang.getValue('Card', this.id, 'zhCnName');
            if (!isNullOrEmpty(value)) {
                return value;
            }
            return this.zhCnName;
        }
    }
    class CardScoreTypeConfigLang extends excelconfigSources.CardScoreType {
        get name() {
            if (!Game.lang.isUseLang)
                return this.zhCnName;
            let value = Game.lang.getValue('CardScoreType', this.id, 'zhCnName');
            if (!isNullOrEmpty(value)) {
                return value;
            }
            return this.zhCnName;
        }
    }
    class LoaderConfigLang extends excelconfigSources.Loader {
    }
    class MenuConfigLang extends excelconfigSources.Menu {
        get name() {
            if (!Game.lang.isUseLang)
                return this.zhCnName;
            let value = Game.lang.getValue('Menu', this.id, 'zhCnName');
            if (!isNullOrEmpty(value)) {
                return value;
            }
            return this.zhCnName;
        }
    }
    class MsgConfigLang extends excelconfigSources.Msg {
        get notice() {
            if (!Game.lang.isUseLang)
                return this.zhCnNotice;
            let value = Game.lang.getValue('Msg', this.id, 'zhCnNotice');
            if (!isNullOrEmpty(value)) {
                return value;
            }
            return this.zhCnNotice;
        }
    }
    class UnlockConfigLang extends excelconfigSources.Unlock {
        get name() {
            if (!Game.lang.isUseLang)
                return this.zhCnName;
            let value = Game.lang.getValue('Unlock', this.id, 'zhCnName');
            if (!isNullOrEmpty(value)) {
                return value;
            }
            return this.zhCnName;
        }
    }

    class CardViewStruct extends fgui.GButton {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CardView"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
        }
    }
    CardViewStruct.URL = "ui://moe42ygrsqzy9s";
    CardViewStruct.DependPackages = ["GameHome"];

    class CardViewFrontBgStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CardViewFrontBg"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_state = this.getController("state");
            this.m_icon = (this.getChild("icon"));
        }
    }
    CardViewFrontBgStruct.URL = "ui://moe42ygrsqzya8";
    CardViewFrontBgStruct.DependPackages = ["GameHome"];

    class CardViewFrontBg extends CardViewFrontBgStruct {
    }

    var CardBackgroundType;
    (function (CardBackgroundType) {
        CardBackgroundType[CardBackgroundType["Default"] = 0] = "Default";
        CardBackgroundType[CardBackgroundType["Warrior"] = 1] = "Warrior";
        CardBackgroundType[CardBackgroundType["Hero"] = 2] = "Hero";
        CardBackgroundType[CardBackgroundType["PowerUp"] = 3] = "PowerUp";
    })(CardBackgroundType || (CardBackgroundType = {}));

    class CardViewFrontHeroStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CardViewFrontHero"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_icon = (this.getChild("icon"));
            this.m_life = (this.getChild("life"));
            this.m_shield = (this.getChild("shield"));
            this.m_shopBar = (this.getChild("shopBar"));
        }
    }
    CardViewFrontHeroStruct.URL = "ui://moe42ygrsqzy9v";
    CardViewFrontHeroStruct.DependPackages = ["GameHome"];

    class Consts {
    }
    Consts.Width = 640;
    Consts.Height = 960;
    Consts.HeroStartRow = 2;
    Consts.HeroStartColumn = 2;
    Consts.CardWidth = 198;
    Consts.CardHeight = 226;
    Consts.CardSpaceBetweenWidth = 10;
    Consts.CardSpaceBetweenHeight = 10;
    Consts.AnimationTime = 185;
    Consts.AnimationMultiplier = .5;
    Consts.ScaleZoom = 1.2;
    Consts.ScaleSpeed = 50;
    Consts.FlipSpeed = 200;
    Consts.FlipZoom = 1.3;
    Consts.SmashDelay = 200;
    Consts.HeroCurrentLife1 = "HeroCurrentLife1";
    Consts.HeroCurrentLife2 = "HeroCurrentLife2";
    Consts.HeroTotalLife1 = "HeroTotalLife1";
    Consts.HeroTotalLife2 = "HeroTotalLife2";
    Consts.CardLife = "CardLife";
    Consts.CardLife1 = "CardLife1";
    Consts.CardLife2 = "CardLife2";
    Consts.PowerUpCircle = "PowerUpCircle";
    Consts.PowerUp = "PowerUp";
    Consts.CardManAnimation = "CardManAnimation";
    Consts.WaveSize = 7;
    Consts.ScaleSize = 30;
    Consts.textFontWeight = 22;
    Consts.numbersFontWeight = 28;
    Consts.resultNumbersFontWeight = 35;
    Consts.creditsColor = "#ffffff";
    Consts.creditsFontWeight = 24;
    Consts.BackgroundImageName = "BackgroundImageName";
    Consts.BackgroundName = "BackgroundName";
    Consts.LightningDuration = 50;
    Consts.ShakeIntensity = 20;
    Consts.ContainerName = "container";
    Consts.CoinMaxValue = 5;
    Consts.Shadow = "shadow";
    Consts.Hero = "hero";
    Consts.CardWithArm = "cardWithArm";
    Consts.CardWithMovingArm = "cardWithMovingArm";
    Consts.ShowTime = 300;
    Consts.StorageName = "pirated-cards-adventure";
    Consts.IsDev = false;
    Consts.IsAndroid = !1;
    Consts.HighResolutionScale = !1;
    Consts.MaxPixelRatio = 3;
    Consts.WarriorAnimationDuration = 500;

    class TweenContainer {
        constructor() {
            this.onStart = new Signal();
            this.onComplete = new Signal();
            this.tweens = [];
            this.duration = null;
            this._delay = 0;
        }
        static PoolGet() {
            return Pool.createByClass(TweenContainer);
        }
        recover() {
            Laya.timer.clearAll(this);
            this.recoverArray(this.tweens);
            this.tweens.length = 0;
            this.onStart.removeAll();
            this.onComplete.removeAll();
            this.duration = null;
            this._delay = 0;
            Pool.recoverByClass(this);
        }
        recoverArray(tweens) {
            if (tweens == null)
                return;
            if (tweens instanceof Array) {
                for (var item of tweens) {
                    if (item == null)
                        continue;
                    if (item instanceof Array) {
                        this.recoverArray(item);
                    }
                    else {
                        item.recover();
                    }
                }
            }
            else {
                tweens.recover();
            }
        }
        get animationDuration() {
            if (this.duration === null) {
                var time = 0;
                for (var i = 0, len = this.tweens.length; i < len; i++) {
                    var tween = this.tweens[i];
                    if (tween) {
                        if (tween instanceof TweenContainer) {
                            time = Math.max(tween.animationDuration, time);
                        }
                        else if (tween instanceof Array) {
                            if (tween.length > 0) {
                                var item = tween[0];
                                if (item) {
                                    if (item instanceof TweenContainer) {
                                        time = Math.max(item.animationDuration, time);
                                    }
                                    else {
                                        var t = item._duration + item._delay;
                                        time = Math.max(t, time);
                                    }
                                }
                                else {
                                    this.duration = 100;
                                }
                            }
                            else {
                                this.duration = 100;
                            }
                        }
                        else {
                            var t = tween._duration + tween._delay;
                            time = Math.max(t, time);
                        }
                    }
                }
                this.duration = time;
            }
            return this.duration;
        }
        set animationDuration(val) {
            this.duration = val;
        }
        setAnimationDuration(duration) {
            this.duration = duration;
            return this;
        }
        setFirstDelay(delay) {
            this._delay = delay;
        }
        restart() {
            setTimeout(this.onEnd.bind(this), this.animationDuration);
            this.onStart.dispatch();
            console.log(this.tweens);
            if (this._delay > 0) {
                Laya.timer.once(this._delay, this, this.playTweens);
            }
            else {
                this.playTweens();
            }
        }
        playTweens() {
            this.playArray(this.tweens);
        }
        playArray(tweens) {
            if (tweens == null)
                return;
            if (tweens instanceof Array) {
                for (var item of tweens) {
                    if (item == null)
                        continue;
                    if (item instanceof Array) {
                        this.playArray(item);
                    }
                    else {
                        if (item instanceof Laya.Tween) {
                            if (!item['_props'] || item['_props'].length == 0) {
                                console.error("没设置属性");
                                continue;
                            }
                        }
                        item.restart();
                    }
                }
            }
            else {
                tweens.restart();
            }
        }
        onEnd() {
            this.onComplete.dispatch();
            Laya.timer.once(3000, this, this.recover);
        }
    }

    var Tween$1 = Laya.Tween;
    class TweenUtil {
        static to(target, props, duration, ease = null, complete = null, delay = 0, coverBefore = false, autoRecover = true) {
            return Pool.getItemByClass("tween", Tween$1)._create(target, props, duration, ease, complete, delay, coverBefore, true, autoRecover, false);
        }
        static from(target, props, duration, ease = null, complete = null, delay = 0, coverBefore = false, autoRecover = true) {
            return Pool.getItemByClass("tween", Tween$1)._create(target, props, duration, ease, complete, delay, coverBefore, false, autoRecover, false);
        }
    }

    class TweenHelper {
        static spriteHide(view) {
            Laya.Tween.clearAll(view);
            Laya.Tween.to(view, {
                scaleX: 0,
                scaleY: 0,
                rotation: 360,
                alpha: 0
            }, 700, null, Laya.Handler.create(this, () => {
                view.visible = false;
                view.rotation = 0;
                view.alpha = 0;
            }));
        }
        static spriteShow(view) {
            view.visible = true;
            Laya.Tween.clearAll(view);
            Laya.Tween.to(view, {
                scaleX: 0,
                scaleY: 0
            }, 100);
            Laya.Tween.to(view, {
                scaleX: 1.5,
                scaleY: 1.5
            }, 250, null, null, 100);
            Laya.Tween.to(view, {
                scaleX: 1,
                scaleY: 1
            }, 100, null, null, 100 + 250);
        }
        static turnAnimationStart(tweenContainer, view) {
            if (!tweenContainer)
                tweenContainer = new TweenContainer();
            var t1 = TweenUtil.to(view, {
                scaleX: Consts.ScaleZoom,
                scaleY: Consts.ScaleZoom
            }, Consts.ScaleSpeed);
            tweenContainer.tweens.push(t1);
            var t2 = TweenUtil.to(view, {
                scaleX: 0.1,
                scaleY: Consts.FlipZoom
            }, Consts.FlipSpeed / 2, null, null, Consts.ScaleSpeed, false);
            tweenContainer.tweens.push(t2);
            return tweenContainer;
        }
        static turnAnimationEnd(tweenContainer, view) {
            if (!tweenContainer)
                tweenContainer = new TweenContainer();
            var t1 = TweenUtil.to(view, {
                scaleX: Consts.ScaleZoom,
                scaleY: Consts.ScaleZoom
            }, Consts.FlipSpeed / 2);
            tweenContainer.tweens.push(t1);
            var t2 = TweenUtil.to(view, {
                scaleX: 1,
                scaleY: 1
            }, Consts.FlipSpeed);
            tweenContainer.tweens.push(t2);
            return tweenContainer;
        }
        static scaleIn(tweenContainer, view, o = true) {
            if (!tweenContainer)
                tweenContainer = new TweenContainer();
            view.enabled = false;
            var t1 = TweenUtil.to(view, {
                scaleX: 0,
                scaleY: 0
            }, .25 * Consts.ShowTime, null, Laya.Handler.create(this, () => {
                view.setScale(1, 1);
                view.visible = false;
                view.enabled = true;
            }));
            tweenContainer.tweens.push(t1);
            return tweenContainer;
        }
        static scaleOut(tweenContainer, view, scale = 1) {
            view.setScale(0, 0);
            view.visible = true;
            view.enabled = true;
            if (!tweenContainer)
                tweenContainer = new TweenContainer();
            var t1 = TweenUtil.to(view, {
                scaleX: scale,
                scaleY: scale
            }, .25 * Consts.ShowTime);
            tweenContainer.tweens.push(t1);
            return tweenContainer;
        }
    }

    class CardViewFrontHero extends CardViewFrontHeroStruct {
        SetConfig(cardConfig) {
            this.cardConfig = cardConfig;
            this.m_icon.m_sprite.setSelectedIndex(cardConfig.id % 100 - 1);
        }
        SetCard(card) {
            this.card = card;
        }
        OnRecover() {
            this.cardView = null;
            this.cardConfig = null;
            this.card = null;
        }
        setArmorHide() {
            TweenHelper.spriteHide(this.m_shield);
        }
        setArmorShowOrChange() {
            TweenHelper.spriteShow(this.m_shield);
        }
    }

    class CardViewFrontPowerUpStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CardViewFrontPowerUp"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_icon = (this.getChild("icon"));
            this.m_life = (this.getChild("life"));
        }
    }
    CardViewFrontPowerUpStruct.URL = "ui://moe42ygrsqzyaa";
    CardViewFrontPowerUpStruct.DependPackages = ["GameHome"];

    class CardViewFrontPowerUp extends CardViewFrontPowerUpStruct {
        SetConfig(cardConfig) {
            this.cardConfig = cardConfig;
            this.m_icon.url = cardConfig.spriteUrl;
        }
        SetCard(card) {
            this.card = card;
        }
        OnRecover() {
            this.cardView = null;
            this.cardConfig = null;
            this.card = null;
        }
    }

    class CardViewFrontPowerUpBarrelStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CardViewFrontPowerUpBarrel"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_icon = (this.getChild("icon"));
            this.m_openFx = (this.getChild("openFx"));
            this.m_life = (this.getChild("life"));
        }
    }
    CardViewFrontPowerUpBarrelStruct.URL = "ui://moe42ygrsqzyab";
    CardViewFrontPowerUpBarrelStruct.DependPackages = ["GameHome"];

    class CardViewFrontPowerUpBarrel extends CardViewFrontPowerUpBarrelStruct {
        SetConfig(cardConfig) {
            this.cardConfig = cardConfig;
        }
        SetCard(card) {
            this.card = card;
        }
        OnRecover() {
            this.cardView = null;
            this.cardConfig = null;
            this.card = null;
        }
    }

    class CardViewFrontPowerUpCannonStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CardViewFrontPowerUpCannon"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_icon = (this.getChild("icon"));
            this.m_fx = (this.getChild("fx"));
            this.m_life = (this.getChild("life"));
        }
    }
    CardViewFrontPowerUpCannonStruct.URL = "ui://moe42ygrsqzy9y";
    CardViewFrontPowerUpCannonStruct.DependPackages = ["GameHome"];

    class CardViewFrontPowerUpCannon extends CardViewFrontPowerUpCannonStruct {
        SetConfig(cardConfig) {
            this.cardConfig = cardConfig;
        }
        SetCard(card) {
            this.card = card;
        }
        OnRecover() {
            this.cardView = null;
            this.cardConfig = null;
            this.card = null;
        }
    }

    class CardViewFrontPowerUpBombStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CardViewFrontPowerUpBomb"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_icon = (this.getChild("icon"));
            this.m_fx = (this.getChild("fx"));
            this.m_life = (this.getChild("life"));
        }
    }
    CardViewFrontPowerUpBombStruct.URL = "ui://moe42ygrsqzyad";
    CardViewFrontPowerUpBombStruct.DependPackages = ["GameHome"];

    class CardViewFrontPowerUpBomb extends CardViewFrontPowerUpBombStruct {
        SetConfig(cardConfig) {
            this.cardConfig = cardConfig;
        }
        SetCard(card) {
            this.card = card;
        }
        OnRecover() {
            this.cardView = null;
            this.cardConfig = null;
            this.card = null;
        }
    }

    class CardViewFrontPowerUpChestStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CardViewFrontPowerUpChest"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_state = this.getController("state");
            this.m_icon = (this.getChild("icon"));
            this.m_life = (this.getChild("life"));
        }
    }
    CardViewFrontPowerUpChestStruct.URL = "ui://moe42ygrsqzyac";
    CardViewFrontPowerUpChestStruct.DependPackages = ["GameHome"];

    class CardViewFrontPowerUpChest extends CardViewFrontPowerUpChestStruct {
        SetConfig(cardConfig) {
            this.cardConfig = cardConfig;
        }
        SetCard(card) {
            this.card = card;
        }
        OnRecover() {
            this.cardView = null;
            this.cardConfig = null;
            this.card = null;
        }
    }

    class CardViewFrontPowerUpSkullStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CardViewFrontPowerUpSkull"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_fx = (this.getChild("fx"));
            this.m_life = (this.getChild("life"));
        }
    }
    CardViewFrontPowerUpSkullStruct.URL = "ui://moe42ygrsqzyae";
    CardViewFrontPowerUpSkullStruct.DependPackages = ["GameHome"];

    class CardViewFrontPowerUpSkull extends CardViewFrontPowerUpSkullStruct {
        SetConfig(cardConfig) {
            this.cardConfig = cardConfig;
        }
        SetCard(card) {
            this.card = card;
        }
        OnRecover() {
            this.cardView = null;
            this.cardConfig = null;
            this.card = null;
        }
    }

    class CardViewFrontWarriowBossStruct extends fgui.GButton {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CardViewFrontWarriowBoss"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_icon = (this.getChild("icon"));
            this.m_life = (this.getChild("life"));
        }
    }
    CardViewFrontWarriowBossStruct.URL = "ui://moe42ygrsqzya6";
    CardViewFrontWarriowBossStruct.DependPackages = ["GameHome"];

    class CardViewFrontWarriowBoss extends CardViewFrontWarriowBossStruct {
        SetConfig(cardConfig) {
            this.cardConfig = cardConfig;
            this.m_icon.m_sprite.setSelectedIndex(cardConfig.id % 100 - 1);
        }
        SetCard(card) {
            this.card = card;
        }
        OnRecover() {
            this.cardView = null;
            this.cardConfig = null;
            this.card = null;
        }
    }

    class CardViewFrontWarriowEnemyStruct extends fgui.GButton {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CardViewFrontWarriowEnemy"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_icon = (this.getChild("icon"));
            this.m_life = (this.getChild("life"));
        }
    }
    CardViewFrontWarriowEnemyStruct.URL = "ui://moe42ygrsqzya3";
    CardViewFrontWarriowEnemyStruct.DependPackages = ["GameHome"];

    class CardViewFrontWarriowEnemy extends CardViewFrontWarriowEnemyStruct {
        SetConfig(cardConfig) {
            this.cardConfig = cardConfig;
            this.m_icon.m_sprite.setSelectedIndex(cardConfig.id % 100 - 1);
        }
        SetCard(card) {
            this.card = card;
        }
        OnRecover() {
            this.cardView = null;
            this.cardConfig = null;
            this.card = null;
        }
    }

    class CardViewFrontWarriowTrapStruct extends fgui.GButton {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CardViewFrontWarriowTrap"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_state = this.getController("state");
            this.m_icon = (this.getChild("icon"));
            this.m_life = (this.getChild("life"));
            this.m_DoClose = this.getTransition("DoClose");
            this.m_DoOpen = this.getTransition("DoOpen");
        }
    }
    CardViewFrontWarriowTrapStruct.URL = "ui://moe42ygrsqzya9";
    CardViewFrontWarriowTrapStruct.DependPackages = ["GameHome"];

    class CardViewFrontWarriowTrap extends CardViewFrontWarriowTrapStruct {
        SetConfig(cardConfig) {
            this.cardConfig = cardConfig;
        }
        SetCard(card) {
            this.card = card;
        }
        OnRecover() {
            this.cardView = null;
            this.cardConfig = null;
            this.card = null;
        }
    }

    class CardViewFrontWarriowStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CardViewFrontWarriow"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_icon = (this.getChild("icon"));
            this.m_life = (this.getChild("life"));
        }
    }
    CardViewFrontWarriowStruct.URL = "ui://moe42ygrsqzy9w";
    CardViewFrontWarriowStruct.DependPackages = ["GameHome"];

    class CardViewFrontWarriow extends CardViewFrontWarriowStruct {
        SetConfig(cardConfig) {
            this.cardConfig = cardConfig;
            this.m_icon.url = cardConfig.spriteUrl;
        }
        SetCard(card) {
            this.card = card;
        }
        OnRecover() {
            this.cardView = null;
            this.cardConfig = null;
            this.card = null;
        }
    }

    class CardView extends CardViewStruct {
        static get FrontClassMap() {
            if (!this._FrontClassMap) {
                var map = new Map();
                this._FrontClassMap = map;
                map.set("CardViewFrontHero", CardViewFrontHero);
                map.set("CardViewFrontPowerUp", CardViewFrontPowerUp);
                map.set("CardViewFrontPowerUpBarrel", CardViewFrontPowerUpBarrel);
                map.set("CardViewFrontPowerUpBomb", CardViewFrontPowerUpBomb);
                map.set("CardViewFrontPowerUpCannon", CardViewFrontPowerUpCannon);
                map.set("CardViewFrontPowerUpChest", CardViewFrontPowerUpChest);
                map.set("CardViewFrontPowerUpSkull", CardViewFrontPowerUpSkull);
                map.set("CardViewFrontWarriow", CardViewFrontWarriow);
                map.set("CardViewFrontWarriowBoss", CardViewFrontWarriowBoss);
                map.set("CardViewFrontWarriowEnemy", CardViewFrontWarriowEnemy);
                map.set("CardViewFrontWarriowTrap", CardViewFrontWarriowTrap);
            }
            return this._FrontClassMap;
        }
        static GetFrontClass(key) {
            if (!this.FrontClassMap.has(key)) {
                console.error("没有找到卡牌视图组件", key);
                return CardViewFrontPowerUp;
            }
            return this.FrontClassMap.get(key);
        }
        static GetFrontView(key) {
            var cls = CardView.GetFrontClass(key);
            var item = Pool.getItem(cls.URL);
            if (!item) {
                item = cls.createInstance();
            }
            return item;
        }
        static GetSpriteUrl(name) {
            return "ui://GameHome" + "/" + name;
        }
        static PoolGet() {
            var item = Pool.getItem(this.URL);
            if (!item) {
                item = CardView.createInstance();
            }
            return item;
        }
        PoolRecover() {
            this.RecoverFront();
            this.cardConfig = null;
            this.cardScoreConfig = null;
            Pool.recover(CardView.URL, this);
        }
        constructor() {
            super();
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.InitBg();
        }
        InitBg() {
            this.bg = CardViewFrontBg.createInstance();
            this.addChild(this.bg);
            this.bg.setXY(this.width * 0.5, this.height * 0.5);
        }
        SetBg(type) {
            this.bg.m_state.setSelectedIndex(type);
        }
        SetFront(frontComponentClassName) {
            var view = CardView.GetFrontView(frontComponentClassName);
            view.displayListContainer.mouseThrough = true;
            view.displayListContainer.mouseEnabled = false;
            view.cardView = this;
            this.addChild(view);
            view.setXY(this.width * 0.5, this.height * 0.5);
            this.front = view;
            var fun = this.front['SetConfig'];
            if (fun) {
                fun.call(this.front, this.cardConfig);
            }
            this.onClick(this, this.OnClickHandler);
        }
        RecoverFront() {
            if (this.front) {
                this.front.removeFromParent();
                var fun = this.front['OnRecover'];
                if (fun) {
                    fun.call(this.front);
                }
                var signal = this.front.constructor.URL;
                Pool.recover(signal, this.front);
                this.front = null;
            }
            this.offClick(this, this.OnClickHandler);
        }
        SetConfig(cardConfig) {
            this.RecoverFront();
            this.cardConfig = cardConfig;
            if (cardConfig) {
                var cardScoreConfig = this.cardScoreConfig = cardConfig.cardScoreConfig;
                if (!cardScoreConfig || cardScoreConfig.backgroundType == undefined) {
                    console.error("!cardScoreConfig || cardScoreConfig.backgroundType == undefined", cardScoreConfig, cardConfig);
                }
                this.SetBg(cardScoreConfig.backgroundType);
                this.SetFront(cardScoreConfig.frontView);
            }
            else {
                this.cardScoreConfig = null;
                this.SetBg(CardBackgroundType.Default);
            }
        }
        SetCard(card) {
            this.card = card;
            if (this.front) {
                var fun = this.front['SetCard'];
                if (fun) {
                    fun.call(this.front, this.card);
                }
            }
        }
        OnClickHandler() {
            if (this.card) {
                this.game.keyboardManager.OnClickCard(this.card);
            }
        }
        setHealthText() {
            if (this.card.isHero) {
                var hero = this.card;
                this.front.m_life.title = hero.currentLife + "/" + hero.totalLife;
            }
            else {
                this.front.m_life.title = this.card.currentLife.toString();
            }
        }
        setPowerUpText() {
            this.front.m_life.title = this.card.powerUpAmount.toString();
        }
        setArmor() {
            if (this.card.isHero) {
                var hero = this.card;
                var heroView = this.front;
                if (hero.armor > 0) {
                    heroView.setArmorShowOrChange();
                }
                else {
                    heroView.setArmorHide();
                }
                heroView.m_shield.title = hero.armor.toString();
            }
        }
        tweenLife() {
            var view = this.front.m_life;
            var tweenContainer = this.card.getScaleTween(view);
            tweenContainer.onComplete.addOnce(this.setHealthText, this);
            return tweenContainer;
        }
        tweenPowerUp() {
            var view = this.front.m_life;
            var tweenContainer = this.card.getScaleTween(view);
            tweenContainer.onComplete.addOnce(this.setHealthText, this);
            return tweenContainer;
        }
        useLuck() {
            if (this.card.isHero) {
                var hero = this.card;
                var heroView = this.front;
                heroView.m_shopBar.useLuck();
            }
        }
        increaseLifeByOneTween() {
        }
        setOpen() {
            if (this.card.isTrap) {
                this.front.m_DoOpen.play();
            }
        }
        setClose() {
            if (this.card.isTrap) {
                this.front.m_DoClose.play();
            }
        }
    }

    class CardConfig extends CardConfigLang {
        get cardScoreConfig() {
            return Game.config.cardScoreType.getConfig(this.scoreTypeKey);
        }
        get spriteUrl() {
            if (!this._spriteUrl) {
                this._spriteUrl = CardView.GetSpriteUrl(this.sprite);
            }
            return this._spriteUrl;
        }
    }

    class CardScoreTypeConfig extends CardScoreTypeConfigLang {
    }

    class LoaderConfig extends LoaderConfigLang {
    }

    var MenuId;
    (function (MenuId) {
        MenuId[MenuId["Notice"] = 0] = "Notice";
        MenuId[MenuId["Home"] = 100] = "Home";
        MenuId[MenuId["War"] = 601] = "War";
        MenuId[MenuId["Login"] = 101] = "Login";
        MenuId[MenuId["Plot"] = 102] = "Plot";
        MenuId[MenuId["Gashapon"] = 200] = "Gashapon";
        MenuId[MenuId["Hero"] = 201] = "Hero";
        MenuId[MenuId["Bag"] = 202] = "Bag";
        MenuId[MenuId["Equip"] = 203] = "Equip";
        MenuId[MenuId["Draug"] = 204] = "Draug";
        MenuId[MenuId["Sections"] = 207] = "Sections";
        MenuId[MenuId["Quest"] = 300] = "Quest";
        MenuId[MenuId["Team"] = 303] = "Team";
        MenuId[MenuId["BattlePlan"] = 304] = "BattlePlan";
        MenuId[MenuId["PVPHall"] = 401] = "PVPHall";
        MenuId[MenuId["PVEHall"] = 402] = "PVEHall";
        MenuId[MenuId["SystemSetting"] = 500] = "SystemSetting";
        MenuId[MenuId["Mail"] = 501] = "Mail";
        MenuId[MenuId["Rank"] = 502] = "Rank";
        MenuId[MenuId["PlayerInfo"] = 503] = "PlayerInfo";
    })(MenuId || (MenuId = {}));
    window["MenuId"] = MenuId;

    var LoaderId;
    (function (LoaderId) {
        LoaderId[LoaderId["None"] = 0] = "None";
        LoaderId[LoaderId["Circle"] = 1] = "Circle";
        LoaderId[LoaderId["Launch"] = 2] = "Launch";
        LoaderId[LoaderId["EnterWar"] = 3] = "EnterWar";
        LoaderId[LoaderId["EnterModule"] = 4] = "EnterModule";
    })(LoaderId || (LoaderId = {}));

    class Res {
        static get res3dzip_manifest() {
            return this.res3dzip + "manifest.json";
        }
        static get res3dzip_manifest_pve01() {
            return this.res3dzip + "pve_01_manifest.json";
        }
        static get res3dzip_zip_pve01() {
            return this.res3dzip + "pve_01.zip";
        }
        static get config() {
            return Res.root + "config/";
        }
        static get PathConfig() {
            return Res.root + "config/path/";
        }
        static get GmConfig() {
            return Res.root + "config/gm/";
        }
        static get shader() {
            return Res.root + "shader/";
        }
        static get particles() {
            return Res.root + "particles/";
        }
        static get spine() {
            return Res.root + "spine/";
        }
        static get spineUI() {
            return Res.root + "spineUI/";
        }
        static getConfigIcon(name) {
            return Res.fspriteassets + name + '.png';
        }
        static get fspriteassets() {
            return Res.root + "fspriteassets/";
        }
        static get actorBodyIcon() {
            return Res.root + "fspriteassets/ActorBodyIcon/";
        }
        static get draugHeroIcon() {
            return Res.root + "fspriteassets/icon/draugHeroIcon/";
        }
        static get draugIcon() {
            return Res.root + "fspriteassets/icon/draugIcon/";
        }
        static get menuIcon() {
            return Res.root + "fspriteassets/MenuItemIcon/";
        }
        static get HeroIcon() {
            return Res.root + "fspriteassets/icon/heroIcon/";
        }
        static getActorBodyIcon(actorName) {
            return Res.actorBodyIcon + `${actorName}.png`;
        }
        static getDraugHeroIcon(heroid) {
            let ids = Game.channel.serverItem.shieldHero;
            if (ids.indexOf(heroid) != -1) {
                heroid = 1001;
            }
            return Res.draugHeroIcon + `${heroid}.png`;
        }
        static getDraugIcon(draugtype) {
            return Res.draugIcon + `${draugtype}.png`;
        }
        static getMenuIcon(menuid) {
            return Res.menuIcon + `${menuid}.png`;
        }
        static getSpineSKPathF(boneName, skinName) {
            return Res.spine + `${boneName}_F/${skinName}_F/${skinName}_F.sk`;
        }
        static getSpineSKPathB(boneName, skinName) {
            return Res.spine + `${boneName}_B/${skinName}_B/${skinName}_B.sk`;
        }
        static getSpinePngPathF(boneName, skinName) {
            return Res.spine + `${boneName}_F/${skinName}_F/${skinName}_F.png`;
        }
        static getSpinePngPathB(boneName, skinName) {
            return Res.spine + `${boneName}_B/${skinName}_B/${skinName}_B.png`;
        }
        static getSpineUIPngPath(name) {
            return Res.spineUI + `${name}.png`;
        }
        static getSpineUISkPath(name) {
            return Res.spineUI + `${name}.sk`;
        }
        static getSpineSoltPartPath(path) {
            return Res.spine + "SlotTexture/" + path + ".png";
        }
        static getMenuIconUrl(path) {
            return Res.fspriteassets + "MenuIcon/" + path + ".png";
        }
        static getMenuNameIconUrl(path) {
            return Res.fspriteassets + "MenuNameIcon/" + path + ".png";
        }
        static getBgUrl(name) {
            return Res.fspriteassets + "Background/" + name + ".png";
        }
        static getSpritePath(path) {
            return Res.root + "sprite/" + path + ".png";
        }
        static getSpritePathHasExt(path) {
            return Res.root + "sprite/" + path;
        }
        static getShaderVS(filename) {
            return Res.shader + filename + ".vs";
        }
        static getShaderPS(filename) {
            return Res.shader + filename + ".fs";
        }
        static getParticles(filename) {
            return Res.particles + filename + ".part";
        }
        static GetBattleRoleIcon(filename) {
            return Res.fspriteassets + filename + ".png";
        }
        static GetAvatarSource(avatarid) {
            let config = Game.config.avatar.getConfig(avatarid);
            return Res.fspriteassets + config.icon + ".png";
        }
    }
    Res.res3dsrc = "";
    Res.res3dzip = "res3dzip/";
    Res.root = "res/";

    class TEXT {
    }
    TEXT.NET_ERROR = "网络连接失败！请检查网络设备!加油哦！！";
    TEXT.Login = "登录";
    TEXT.Auth = "授权";
    TEXT.LangSelectMsg = "语言需要重启游戏才有效!";
    TEXT.FunNoOpen = "此功能暂未开放，敬请期待！";
    TEXT.ButtonSelect = "选择";
    TEXT.ButtonOk = "确定";
    TEXT.ButtonCannel = "取消";
    TEXT.ButtonYes = "是";
    TEXT.ButtonNo = "否";
    TEXT.Disable = "内容优化";
    TEXT.Lock = "无解锁配置！";
    TEXT.LvUpMax = "等级达到最大";
    TEXT.LvUpTo = "玩家升级 {0} → {1}";
    TEXT.Lv = "{0}级";
    TEXT.LVDot = "等级：{0}";
    TEXT.PlayerExp = "主公经验：{0}";
    TEXT.FatigueNotEnough = "体力不足，无法进行挑战";
    TEXT.cannotRecharge = "游客不能充值";
    TEXT.cannotRechargeNoIos = "只支持ios内购";
    TEXT.rechargeError = "充值失败，请稍候重试";
    TEXT.systemTip = "系统提示";
    TEXT.TitleTip = "提示";
    TEXT.ErorNoInitProto = "没有初始化网络";
    TEXT.ErorRequestServerList = "请求服务器列表失败";
    TEXT.ErorAccountFrozen = "账号被冻结";
    TEXT.ErorAccountDropped = "账号被停用";
    TEXT.TipEnterRoleName = "输入你的名称";
    TEXT.ErrorNameEmpty = "名字不能是空的";
    TEXT.ErrorContentEmpty = "内容不能是空的";
    TEXT.ErrorNameUsed = "名称已经被使用";
    TEXT.ErrorFormatName = "存在非法字符串，请修改后重试";
    TEXT.ErrorHttpSendFail = "[Error] 发送请求失败";
    TEXT.HttpTimeOut = "网络超时! 当前设置的超时时间是{0}";
    TEXT.AlertTextBuyActor = "是否花费{0}{1}增加艺人数量";
    TEXT.AlertTextScountActor = "是否花费{0}{1} 探查艺人？";
    TEXT.ToastTextItemNotEnough = "{0}数量不足";
    TEXT.ToastTextItemNotEnough2 = "数量不足，需要{0} {1}";
    TEXT.ChangeNameCost = "本次改名需要 {0}";
    TEXT.DuelTempLevel = "当前决斗神殿段位：{0}";
    TEXT.DuelTempMaxLevel = "历史最高决斗神殿段位：{0}";
    TEXT.DuelTempCurrentPvpLevel = "当前竞技排名：{0}";
    TEXT.DuelTempMaxPvpLevel = "历史最高竞技排名：{0}";
    TEXT.BattlePlanTeamHeroNameAndLevel = "{0}  {1}级";
    TEXT.BagCapacity = "{0}/{1}";
    TEXT.BagItemCount = "拥有：{0}";
    TEXT.BagExpiredLimitTip = "{0}后过期";
    TEXT.BagExpiredPeriodTip = "将在{0}过期";
    TEXT.BagItemSell = "出售";
    TEXT.BagItemUse = "使用";
    TEXT.BagItemSplit = "分解";
    TEXT.BagItemForge = "锻造";
    TEXT.BagItemChangeEquip = "穿戴";
    TEXT.BagItemLevelUp = "使用可增加{0}英雄经验";
    TEXT.EquipPropDes = "{0}+{1}";
    TEXT.EquipExclusiveTxtMsg = "{0}专属！只有{1}才可穿戴次装备";
    TEXT.EquipExclusiveTxt = "{0}专属";
    TEXT.EquipEatExp = "该装备可提供{0}的强化经验";
    TEXT.EquipTypeWeapon = "武器";
    TEXT.EquipTypeHelmet = "头盔";
    TEXT.EquipTypeArmor = "战甲";
    TEXT.EquipTypeBoots = "战靴";
    TEXT.EquipTypePendant = "玉佩";
    TEXT.EquipTypeGem = "宝物";
    TEXT.EquipNotEnough = "道具不足，无法选择";
    TEXT.EquipLevelUpStr1 = "下一级属性";
    TEXT.EquipLevelUpStr2 = "强化到{0}级时属性增加";
    TEXT.EquipAtkRange = "系数";
    TEXT.MailTitle = "邮件";
    TEXT.DeleteRead = "删除已读";
    TEXT.ToReader = "致玩家：";
    TEXT.ReawrdMsg = "奖励内容：";
    TEXT.Progress = "{0}/{1}";
    TEXT.N0 = "零";
    TEXT.N1 = "一";
    TEXT.N2 = "二";
    TEXT.N3 = "三";
    TEXT.N4 = "四";
    TEXT.N5 = "五";
    TEXT.N6 = "六";
    TEXT.N7 = "七";
    TEXT.N8 = "八";
    TEXT.N9 = "九";
    TEXT.N10 = "十";
    TEXT.N100 = "百";
    TEXT.N1000 = "千";
    TEXT.N10000 = "万";
    TEXT.RewardItemCount = "x{0}";
    TEXT.DATE_MonthBefore = "{0}个月前";
    TEXT.DATE_WeekBefore = "{0}周前";
    TEXT.DATE_DayBefore = "{0}天前";
    TEXT.DATE_HourBefore = "{0}小时前";
    TEXT.DATE_MinuteBefore = "{0}分钟前";
    TEXT.DATE_SecondeBefore = "{0}秒前";
    TEXT.Hour = "小时";
    TEXT.Minute = "分";
    TEXT.Second = "秒";
    TEXT.MissionNotOpen = "该关卡尚未开启";
    TEXT.Chapter = "第{0}章";
    TEXT.ChapterStarTipTitle = "本章累计{0}星可领取";
    TEXT.ChapterStarNotEnough = "星星数量不足";
    TEXT.ChapterRewardAlreadyGet = "奖励已经领取过";
    TEXT.ChapterSpecialTimes = "今日精英剩余次数：{0}";
    TEXT.ChapterMonsterTimes = "今日剩余次数：{0}";
    TEXT.SecretBookTimes = "今日剩余次数：{0}";
    TEXT.SecretBookTimesNotEnough = "该副本今日挑战次数不足";
    TEXT.SectionSpecialTotalTimes = "每日一共可购买{0}次精英奖励次数";
    TEXT.SectionMonsterTotalTimes = "每日一共可购买{0}次魔王奖励次数";
    TEXT.SecretBookTotalTimes = "每日一共可购买{0}次秘闻奖励次数";
    TEXT.SectionBuyTimesToast = "奖励次数提升";
    TEXT.SectionCurrentTimes = "今日第{0}次购买";
    TEXT.SectionTimesNotEnough = "今日次数已用完";
    TEXT.MissionUnlockCondition = "{0}级开启";
    TEXT.ChapterCurrentStarNum = "{0}/{1}";
    TEXT.SecretTimesRemain = "今日剩余次数: {0}";
    TEXT.MissionMaxTime = "通关时间低于{0}秒";
    TEXT.MissionKillBoss = "打败首领";
    TEXT.MissionHPState = "剩余生命超过{0}%";
    TEXT.MissionStamina = "x{0}";
    TEXT.SecretMissionTimesRemain = "今日剩余次数：{0}";
    TEXT.SecretLand_BestScore = "最佳成绩：大秘境{0}";
    TEXT.SecretLand_CurrentKeyStone = "当前钥石：{0}级";
    TEXT.SecretLand_Buy_Roll_Tips = "是否消耗{0}点体力兑换Roll币";
    TEXT.SecretLand_Roll_tips = "当日可兑换次数为{0}，Roll积攒数量上限为{1}";
    TEXT.SecretLand_Fatigue_Not_Enough = "您没有足够的体力值，需要{0}体力兑换Roll币";
    TEXT.Keystone_LevelUp_Time_Limit = "{0}分钟";
    TEXT.SecretLand_Level_Limit = "等级达到{0}后开启{1}层大秘境";
    TEXT.SecretLand_Time_Cost = "通关时间: {0}";
    TEXT.SecretLand_New_Keystone = "获取新钥匙：{0}{1}级";
    TEXT.Gashapon_NextFreeTime = "{0}后免费";
    TEXT.Gashapon_Rate = "概率 {0}%";
    TEXT.Gashapon_PropDisplay = "{0} +{1}";
    TEXT.Gashapon_Times_Remain = "每日可招募{0}次，今日剩余{1}次";
    TEXT.Gashapon_Times_Not_Enough = "今日剩余次数不足";
    TEXT.DuelSeasonDuration = "{0} - {1}";
    TEXT.DuelSeasonRemainDays = "距离赛季结束还有{0}";
    TEXT.DuelCurrentWinTimes = "本赛季胜场：{0}";
    TEXT.DuelSelectHeroGroupFirst = "请先选择队伍";
    TEXT.DuelTempOldSeason = "恭喜您，在上赛季结算时的段位达到了{0}，赛季奖励已经发送 到您的邮箱";
    TEXT.DuelTempNewSeason = "由于您上赛季的出色表现，您在本赛季的起始段位为{0}";
    TEXT.DuelTempWinTimes = "胜场：{0}";
    TEXT.HeroSkillOpenLevel = "英雄等级达到{0}级别后解锁";
    TEXT.HeroMaxLevel = "已满级";
    TEXT.HeroInBattle = "当前英雄已在队伍中！！！";
    TEXT.HeroStarProStr = "成长";
    TEXT.HeroLevelUpNotEnough = "当前无法升级，请提升战队等级";
    TEXT.HeroLevelUpItemNotEnough = "物品不足，无法升级";
    TEXT.HeroLevelUpMax = "已提升当前最高级";
    TEXT.RankMyAllRank = "我的全区排行：{0}";
    TEXT.RankNotOnRank = "未上榜";
    TEXT.RankDanStar = "{0} {1}星";
    TEXT.HeroSkillLevelNotLevel = "升级条件不足，需英雄{0}级";
    TEXT.SecretBookHeroLevelNotEnough = "英雄{0}级开启";
    TEXT.GuideFinish = "现在引导结束了，你可以自由体验了";
    TEXT.GuideGoToBattle = "guide_go_section";
    TEXT.GuideBackHome = "guide_go_back_home";
    TEXT.GuideBack = "guide_go_back";

    class MenuValidate {
        constructor() {
            this.dict = new Dictionary();
        }
        static getInstance() {
            var Class = this;
            if (Class.__instance == null) {
                Class.__instance = new Class();
                Class.__instance.install();
            }
            return Class.__instance;
        }
        validate(menuId) {
            if (this.dict.hasKey(menuId)) {
                return this.dict.getValue(menuId).apply(this);
            }
            return true;
        }
        validateTab(menuIndexId, data) {
            return true;
        }
        openMenu(menuId, parent) {
        }
        openTab(menuIndexId, data, parent) {
        }
        openItem(menuId, data, parent) {
        }
        closeRed(parent) {
        }
        add(menuId, fun) {
            this.dict.add(menuId, fun);
        }
        install() {
        }
    }

    class MenuValidateEnableOpen extends MenuValidate {
        install() {
        }
        validate(menuId) {
            return super.validate(menuId);
        }
        warEnableOpen() {
            return true;
        }
    }

    class MenuValidateNew extends MenuValidate {
        install() {
        }
        validate(menuId) {
            if (this.dict.hasKey(menuId)) {
                return this.dict.getValue(menuId).apply(this);
            }
            return false;
        }
    }

    class ModuleConfig {
        constructor(menuId, windowClass) {
            this.menuId = menuId;
            this.windowClass = windowClass;
        }
    }

    var MenuLayerType;
    (function (MenuLayerType) {
        MenuLayerType[MenuLayerType["Home"] = 1] = "Home";
        MenuLayerType[MenuLayerType["HomeTop"] = 2] = "HomeTop";
        MenuLayerType[MenuLayerType["WarUI"] = 3] = "WarUI";
        MenuLayerType[MenuLayerType["Module"] = 4] = "Module";
        MenuLayerType[MenuLayerType["ModuleTop"] = 5] = "ModuleTop";
        MenuLayerType[MenuLayerType["MainUI"] = 6] = "MainUI";
        MenuLayerType[MenuLayerType["Dialog"] = 7] = "Dialog";
        MenuLayerType[MenuLayerType["Guide"] = 8] = "Guide";
        MenuLayerType[MenuLayerType["Loader"] = 9] = "Loader";
        MenuLayerType[MenuLayerType["GM"] = 10] = "GM";
        MenuLayerType[MenuLayerType["FloatMsg"] = 11] = "FloatMsg";
    })(MenuLayerType || (MenuLayerType = {}));

    class MenuLayer {
        static get dialogModel() {
            if (!MenuLayer._dialogModel) {
                MenuLayer._dialogModel = new fgui.GComponent();
            }
            return MenuLayer._dialogModel;
        }
        static showDialogModel() {
            MenuLayer.dialog.width = Game.screenSetting.screenWidth;
            MenuLayer.dialog.height = Game.screenSetting.screenHeight;
            MenuLayer.dialogModel.alpha = 0.8;
            MenuLayer.dialogModel.width = Game.screenSetting.screenWidth;
            MenuLayer.dialogModel.height = Game.screenSetting.screenHeight;
            if (MenuLayer.dialogModel)
                MenuLayer.dialog.addChildAt(MenuLayer.dialogModel, 0);
        }
        static resetDialogModelSize() {
            MenuLayer.dialog.width = Game.screenSetting.screenWidth;
            MenuLayer.dialog.height = Game.screenSetting.screenHeight;
            MenuLayer.dialogModel.width = Game.screenSetting.screenWidth;
            MenuLayer.dialogModel.height = Game.screenSetting.screenHeight;
        }
        static hideDialogModel() {
            if (MenuLayer.dialogModel)
                MenuLayer.dialogModel.removeFromParent();
        }
        static install() {
            Laya.stage.addChild(fgui.GRoot.inst.displayObject);
            MenuLayer.root = fgui.GRoot.inst;
            MenuLayer.home = MenuLayer.createLayer(MenuLayerType.Home, "MenuLayer-home");
            MenuLayer.warUI = MenuLayer.createLayer(MenuLayerType.WarUI, "MenuLayer-warUI");
            MenuLayer.module = MenuLayer.createLayer(MenuLayerType.Module, "MenuLayer-module");
            MenuLayer.mainUI = MenuLayer.createLayer(MenuLayerType.MainUI, "MenuLayer-mainUI");
            MenuLayer.dialog = MenuLayer.createLayer(MenuLayerType.Dialog, "MenuLayer-dialog");
            MenuLayer.guide = MenuLayer.createLayer(MenuLayerType.Guide, "MenuLayer-guide");
            MenuLayer.loader = MenuLayer.createLayer(MenuLayerType.Loader, "MenuLayer-loader");
            MenuLayer.gm = MenuLayer.createLayer(MenuLayerType.GM, "MenuLayer-gm");
            MenuLayer.floatMsg = MenuLayer.createLayer(MenuLayerType.FloatMsg, "MenuLayer-floatMsg");
            MenuLayer.dict.add(MenuLayerType.Home, MenuLayer.home);
            MenuLayer.dict.add(MenuLayerType.WarUI, MenuLayer.warUI);
            MenuLayer.dict.add(MenuLayerType.Module, MenuLayer.module);
            MenuLayer.dict.add(MenuLayerType.MainUI, MenuLayer.mainUI);
            MenuLayer.dict.add(MenuLayerType.Dialog, MenuLayer.dialog);
            MenuLayer.dict.add(MenuLayerType.Guide, MenuLayer.guide);
            MenuLayer.dict.add(MenuLayerType.Loader, MenuLayer.loader);
            MenuLayer.dict.add(MenuLayerType.GM, MenuLayer.gm);
            MenuLayer.dict.add(MenuLayerType.FloatMsg, MenuLayer.floatMsg);
        }
        static getLayer(layerType) {
            return MenuLayer.dict.getValue(layerType);
        }
        static createLayer(menuLayer, name) {
            let root = MenuLayer.root;
            let v = new fgui.GRoot();
            v["menuLayer"] = menuLayer;
            if (name) {
                v.name = name;
            }
            if (Engine.borwer.isLiuHai) {
                switch (menuLayer) {
                    case MenuLayerType.Loader:
                        v.x = 0;
                        v.y = 0;
                        v.setSize(root.width, root.height);
                        break;
                    default:
                        if (Game.screenSetting.isLandsape) {
                            v.x = Game.screenSetting.liuHaiHeightTop;
                            v.setSize(Game.screenSetting.screenWidthLiuHai, root.height);
                        }
                        else {
                            v.y = Game.screenSetting.liuHaiHeightTop;
                            v.setSize(root.width, root.height - Game.screenSetting.screenHeightLiuHai);
                        }
                }
            }
            else {
                v.setSize(root.width, root.height);
            }
            root.addChild(v);
            return v;
        }
        static getLayerHeight(menuLayer) {
            if (Engine.borwer.isLiuHai) {
                switch (menuLayer) {
                    case MenuLayer.loader:
                        return Game.screenSetting.screenHeight;
                    default:
                        return Game.screenSetting.screenHeightLiuHai;
                }
            }
            return Game.screenSetting.screenHeight;
        }
        static getLayerWidth(menuLayer) {
            if (Engine.borwer.isLiuHai) {
                switch (menuLayer) {
                    case MenuLayer.loader:
                        return Game.screenSetting.screenWidth;
                    default:
                        return Game.screenSetting.screenWidthLiuHai;
                }
            }
            return Game.screenSetting.screenWidth;
        }
    }
    MenuLayer.dict = new Dictionary();
    window["MenuLayer"] = MenuLayer;

    class FWindow extends fgui.Window {
        constructor() {
            super(...arguments);
            this.isAddedStage = false;
        }
        get isShowed() {
            if (this.contentPane)
                return this.parent != null;
            return false;
        }
        onWindowWillShow() {
            if (this.contentPane) {
                this.callChildOnWindowWillShow(this.contentPane);
            }
            this.setScreenSize();
            if (this.isAddedStage)
                return;
            this.isAddedStage = true;
            Laya.stage.on(Laya.Event.RESIZE, this, this.setScreenSize);
        }
        onWindowWillHide() {
            if (this.contentPane) {
                this.callChildOnWindowWillHide(this.contentPane);
            }
            this.isAddedStage = false;
            Laya.stage.off(Laya.Event.RESIZE, this, this.setScreenSize);
        }
        setScreenSize() {
            if (this.contentPane) {
                if (this.windowContainer && this.windowContainer["menuLayer"] !== undefined) {
                    if (Game.screenSetting.isLandsape) {
                        this.width = MenuLayer.getLayerWidth(this.windowContainer["menuLayer"]);
                        this.height = this.windowContainer.height;
                        this.contentPane.width = this.width;
                        this.contentPane.height = this.height;
                    }
                    else {
                        this.width = this.windowContainer.width;
                        this.height = MenuLayer.getLayerHeight(this.windowContainer["menuLayer"]);
                        this.contentPane.width = this.width;
                        this.contentPane.height = this.height;
                    }
                }
                else {
                    this.width = Game.screenSetting.screenWidth;
                    this.height = Game.screenSetting.screenHeight;
                    this.contentPane.width = Game.screenSetting.screenWidth;
                    this.contentPane.height = Game.screenSetting.screenHeight;
                }
                this.callChildOnWindowResize(this.contentPane);
            }
        }
        callChildOnWindowWillShow(com) {
            if (com) {
                let fun = com["onWindowWillShow"];
                if (fun) {
                    fun.apply(com);
                }
                if (com._children) {
                    for (let i = 0; i < com._children.length; i++) {
                        this.callChildOnWindowWillShow(com._children[i]);
                    }
                }
            }
        }
        callChildOnWindowWillHide(com) {
            if (com) {
                let fun = com["onWindowWillHide"];
                if (fun) {
                    fun.apply(com);
                }
                if (com._children) {
                    for (let i = 0; i < com._children.length; i++) {
                        this.callChildOnWindowWillHide(com._children[i]);
                    }
                }
            }
        }
        callChildOnWindowResize(com) {
            if (com) {
                let fun = com["onWindowResize"];
                if (fun) {
                    fun.apply(com);
                }
                if (com._children) {
                    for (let i = 0; i < com._children.length; i++) {
                        this.callChildOnWindowResize(com._children[i]);
                    }
                }
            }
        }
    }

    var AssetItemType;
    (function (AssetItemType) {
        AssetItemType[AssetItemType["FguiPackage"] = 0] = "FguiPackage";
        AssetItemType[AssetItemType["FspritePackage"] = 1] = "FspritePackage";
        AssetItemType[AssetItemType["Image"] = 2] = "Image";
        AssetItemType[AssetItemType["TEXTURE2D"] = 3] = "TEXTURE2D";
        AssetItemType[AssetItemType["Buffer"] = 4] = "Buffer";
        AssetItemType[AssetItemType["Sound"] = 5] = "Sound";
        AssetItemType[AssetItemType["Text"] = 6] = "Text";
        AssetItemType[AssetItemType["Json"] = 7] = "Json";
        AssetItemType[AssetItemType["Xml"] = 8] = "Xml";
        AssetItemType[AssetItemType["Font"] = 9] = "Font";
        AssetItemType[AssetItemType["TTF"] = 10] = "TTF";
        AssetItemType[AssetItemType["PKM"] = 11] = "PKM";
    })(AssetItemType || (AssetItemType = {}));

    var Loader = Laya.Loader;
    class AssetHelper {
        static get layaLoaderType2AssetItemTypeDict() {
            if (!AssetHelper._layaLoaderType2AssetItemTypeDict) {
                let dict = new Dictionary();
                dict.add(Loader.IMAGE, AssetItemType.Image);
                dict.add(Loader.TEXTURE2D, AssetItemType.TEXTURE2D);
                dict.add(Loader.BUFFER, AssetItemType.Buffer);
                dict.add(Loader.SOUND, AssetItemType.Sound);
                dict.add(Loader.TEXT, AssetItemType.Text);
                dict.add(Loader.JSON, AssetItemType.Json);
                dict.add(Loader.XML, AssetItemType.Xml);
                dict.add(Loader.FONT, AssetItemType.Font);
                dict.add(Loader.TTF, AssetItemType.TTF);
                AssetHelper._layaLoaderType2AssetItemTypeDict = dict;
            }
            return AssetHelper._layaLoaderType2AssetItemTypeDict;
        }
        static get assetItemType2LayaLoaderTypeDict() {
            if (!AssetHelper._assetItemType2LayaLoaderTypeDict) {
                let d = this.layaLoaderType2AssetItemTypeDict.__getDict();
                let dict = new Dictionary();
                for (let key in d) {
                    dict[d[key]] = d;
                }
                AssetHelper._assetItemType2LayaLoaderTypeDict = dict;
            }
            return AssetHelper._assetItemType2LayaLoaderTypeDict;
        }
        static layaLoaderType2AssetItemType(loader) {
            return AssetHelper.layaLoaderType2AssetItemTypeDict.getValue(loader);
        }
        static assetItemType2LayaLoaderType(type) {
            return AssetHelper.assetItemType2LayaLoaderTypeDict.getValue(type);
        }
        static getAssetItemKey(item) {
            return item.type + " " + item.url;
        }
    }

    class GuiPackageNames {
    }
    GuiPackageNames.GameHome = "GameHome";
    GuiPackageNames.GameLaunch = "GameLaunch";
    GuiPackageNames.ModuleLogin = "ModuleLogin";
    GuiPackageNames.Sound = "Sound";

    var MenuOpenType;
    (function (MenuOpenType) {
        MenuOpenType[MenuOpenType["None"] = 0] = "None";
        MenuOpenType[MenuOpenType["Tab"] = 2] = "Tab";
        MenuOpenType[MenuOpenType["Subwindow"] = 3] = "Subwindow";
    })(MenuOpenType || (MenuOpenType = {}));

    class GameEventKey {
    }
    GameEventKey.Test = "Test";
    GameEventKey.GameBattle_onSyncNormal = "GameFrame_onSyncNormal";
    GameEventKey.GameBattle_onSyncChasingFrame = "GameBattle_onSyncChasingFrame";
    GameEventKey.GameBattle_onEntityCreate = "GameBattle_onEntityCreate";
    GameEventKey.GameBattle_onEntityRemove = "GameFrame_onEntityRemove";
    GameEventKey.GameBattle_onEntityRollbackBegin = "GameFrame_onEntityRollbackBegin";
    GameEventKey.GameBattle_onEntityRollbackEnd = "GameBattle_onEntityRollbackEnd";
    GameEventKey.GameBattle_onShowDamageUI = "GameBattle_onShowDamageUI";
    GameEventKey.GameBattle_onShowHitUI = "GameFrame_onShowHitUI";
    GameEventKey.GameBattle_onShakeScreen = "GameFrame_onShakeScreen";
    GameEventKey.GameBattle_onScreenScale = "GameBattle_onScreenScale";
    GameEventKey.GameBattle_onScreenMove = "GameBattle_onScreenMove";
    GameEventKey.GameBattle_onAnimNotify = "GameFrame_onAnimNotify";
    GameEventKey.GameBattle_onChangeNotify = "GameFrame_onChangeNotify";
    GameEventKey.GameBattle_onCharacterBorn = "GameBattle_onCharacterBorn";
    GameEventKey.GameBattle_OnViewAlphaChange = "GameBattle_OnViewAlphaChange";
    GameEventKey.GameBattle_onPlaySound = "GameFrame_onPlaySound";
    GameEventKey.GameBattle_onPlaySoundBehit = "GameFrame_onPlaySoundBehit";
    GameEventKey.GameBattle_onTiggerEffectScreenShow = "GameBattle_onTiggerEffectScreenShow";
    GameEventKey.GameBattle_onTiggerEffectScreenHide = "GameBattle_onTiggerEffectScreenHide";
    GameEventKey.GameBattle_onSceneFadeOut = "GameFrame_onSceneFadeOut";
    GameEventKey.GameBattle_onTiggerUIScreenShow = "GameBattle_onTiggerUIScreenShow";
    GameEventKey.GameBattle_onTiggerUIScreenHide = "GameBattle_onTiggerUIScreenHide";
    GameEventKey.GameBattle_onTriggerChangeSceneBg = "GameBattle_onTriggerChangeSceneBg";
    GameEventKey.GameBattle_onBossAppear = "GameBattle_onBossAppear";
    GameEventKey.GameBttle_showBossSpecialView = "GameBttle_showBossSpecialView";
    GameEventKey.GameBattle_onShowGameStart = "GameBattle_onShowGameStart";
    GameEventKey.GameBattle_onServerError2300 = "GameBattle_onServerError2300";
    GameEventKey.GameBattle_MonsterCreater = "GameBattle_nextAirWallMonster";
    GameEventKey.GameBattle_WaveChange = "GameBattle_WaveChange";
    GameEventKey.GameBattle_MonsterHpChange = "GameBattle_MonsterHpChange";
    GameEventKey.GameBattle_EntityTeleport = "GameBattle_EntityTeleport";
    GameEventKey.GameBattle_PlayerRevive = "GameBattle_PlayerRevive";
    GameEventKey.GameBattle_EntityDead = "GameBattle_EntityDead";
    GameEventKey.GameFrame_OpenMenu = "GameFrame_OpenMenu";
    GameEventKey.GameFrame_CloseMenu = "GameFrame_CloseMenu";
    GameEventKey.GameFrame_ReLoginData_Begin = "GameFrame_ReLoginData_Begin";
    GameEventKey.GameFrame_ReLoginData_End = "GameFrame_ReLoginData_End";
    GameEventKey.GameFrame_Everyday_Update = "GameFrame_Everyday_Update";
    GameEventKey.GameFrame_HideOpenDialog = "GameFrame_HideOpenDialog";
    GameEventKey.GameFrame_ShowOpenDialog = "GameFrame_ShowOpenDialog";
    GameEventKey.GameFrame_TeamMemberNetStateChange = "GameFrame_TeamMemberStateChange";
    GameEventKey.GameFrame_TeamMemberLeave = "GameFrame_TeamMemberLeave";
    GameEventKey.GameFrame_UseItem = "GameFrame_UseItem";
    GameEventKey.GameFrame_ConsumeItem = "GameFrame_ConsumeItem";
    GameEventKey.GameFrame_HeroLevelUp = "GameFrame_HeroLevelUp";
    GameEventKey.GameFrame_HeroStarUp = "GameFrame_HeroStarUp";
    GameEventKey.GameFrame_AddHero = "GameFrame_AddHero";
    GameEventKey.GameFrame_HeroSkillLevel = "GameFrame_HeroSkillLevel";
    GameEventKey.GameFrame_HeroLeveling = "GameFrame_HeroLeveling";
    GameEventKey.GameFrame_UpdateEXP = "GameFrame_UpdateEXP";
    GameEventKey.GameFrame_UpdateProp = "GameFrame_UpdateProp";
    GameEventKey.GameFrame_BackUpData = "GameFrame_BackUpData";
    GameEventKey.GameFrame_RestoreData = "GameFrame_RestoreData";
    GameEventKey.GameFrame_ItemExceedBound = "GameFrame_ItemExceedBound";
    GameEventKey.GameFrame_LevelExceedBound = "GameFrame_LevelExceedBound";
    GameEventKey.GameFrame_LevelExceedMaxLevelInLoop = "GameFrame_LevelExceedMaxLevelInLoop";
    GameEventKey.GameFrame_EquipStarUp = "GameFrame_EquipStarUp";
    GameEventKey.GameFrame_EquipLevelUp = "GameFrame_EquipLevelUp";
    GameEventKey.GameFrame_EquipQualitySelect = "GameFrame_EquipQualitySelect";
    GameEventKey.GameFrame_EquipQualitySort = "GameFrame_EquipQualitySort";
    GameEventKey.GameFrame_EquipItemSelect = "GameFrame_EquipItemSelect";
    GameEventKey.GameFrame_HeroSelectEquip = "GameFrame_HeroSelectEquip";
    GameEventKey.GameFrame_BattlePlanDataUpdate = "GameFrame_BattlePlanDataUpdate";
    GameEventKey.GameFrame_BattlePlanUnlockNewTeam = "GameFrame_BattlePlanUnlockNewTeam";
    GameEventKey.GameFrame_BattlePlanChangeTeamName = "GameFrame_BattlePlanChangeTeamName";
    GameEventKey.GameFrame_BattlePlanChangeHero = "GameFrame_BattlePlanChangeHero";
    GameEventKey.GameFrame_BattlePlanTeamCentern = "GameFrame_BattlePlanTeamCentern";
    GameEventKey.GameFrame_BattlePlanUnlockNewHeroChair = "GameFrame_BattlePlanUnlockNewHeroChair";
    GameEventKey.GameFrame_BattlePlanSelectedTeam = "GameFrame_BattlePlanSelectedTeam";
    GameEventKey.GameFrame_BattlePlanSecondHero = "GameFrame_BattlePlanSecondHero";
    GameEventKey.GameFrame_BattlePlanRefreshCommonSkill = "GameFrame_BattlePlanRefreshCommonSkill";
    GameEventKey.GameFrame_HomeWindowBattleStartBtn = "GameFrame_HomeWindowBattleStartBtn";
    GameEventKey.GameFrame_HeroWindowEquipPanel = "GameFrame_HeroWindowEquipPanel";
    GameEventKey.GameFrame_HeroPanelBack = "GameFrame_HeroPanelBack";
    GameEventKey.Gameframe_HeroEquipClose = "Gameframe_HeroEquipClose";
    GameEventKey.GameFrame_BattleEnterOnClick = "GameFrame_BattleEnterOnClick";
    GameEventKey.GameFrame_SectionEnterOnClick = "GameFrame_SectionEnterOnClick";
    GameEventKey.GameFrame_SectionDeltaEnterOnClick = "GameFrame_SectionDeltaEnterOnClick";
    GameEventKey.GameFrame_BattlePlanEnter = "GameFrame_BattlePlanEnter";
    GameEventKey.GameFrame_GuideJoystickFinish = "GameFrame_GuideJoystickFinish";
    GameEventKey.GameFrame_BattleOneWave = "GameFrame_GuideAttackStart";
    GameEventKey.GameFrame_GuideAttackFinish = "GameFrame_GuideAttackFinish";
    GameEventKey.GameFrame_GuideFirSkillStart = "GameFrame_GuideFirSkillStart";
    GameEventKey.GameFrame_GuideFirSkillEnd = "GameFrame_GuideFirSkillEnd";
    GameEventKey.GameFrame_GuideBattleEndRemove = "GameFrame_GuideBattleEndRemove";
    GameEventKey.GameFrame_SectionBackBtnOnClick = "GameFrame_SectionBackBtnOnClick";
    GameEventKey.GameFrame_HomeHeroBtnOnClick = "GameFrame_HomeHeroBtnOnClick";
    GameEventKey.GameFrame_HeroPanelChooseHero = "GameFrame_HeroPanelChooseHero";
    GameEventKey.GameFrame_HeroBattleChooseHero = "GameFrame_HeroBattleChooseHero";
    GameEventKey.GameFrame_HeroBattleHero = "GameFrame_HeroBattleHero";
    GameEventKey.GameFrame_HeroInfoShowAddExpPanel = "GameFrame_HeroInfoShowAddExpPanel";
    GameEventKey.GameFrame_HeroExpIncreaseByItem = "GameFrame_HeroExpIncreaseByItem";
    GameEventKey.GameFrame_HeroChooseFinish = "GameFrame_HeroChooseFinish";
    GameEventKey.gameFrame_GuideOpenLevelUpPanel = "gameFrame_GuideOpenLevelUpPanel";
    GameEventKey.gameFrame_GuideEquipUIFinish = "gameFrame_GuideEquipUIFinish";
    GameEventKey.gameFrame_GuideEquipList = "gameFrame_GuideEquipUIFinish";
    GameEventKey.gameFrame_HeroEquip = "gameFrame_HeroEquip";
    GameEventKey.GameFrame_FinishGuideOpenHeroEquip = "GameFrame_FinishOpenHeroEquip";
    GameEventKey.GameFrame_OpenHeroEquipList = "GameFrame_OpenHeroEquipList";
    GameEventKey.GameFrame_gameStart = "GameFrame_onShowGameStart";
    GameEventKey.GameFrame_SectionFinishSuccess = "GameFrame_SectionFinishSuccess";
    GameEventKey.GameFrame_HomeEquipBtnOnClick = "GameFrame_HomeEquipBtnOnClick";
    GameEventKey.GameFrame_EquipSelectFirst = "GameFrame_EquipSelectFirst";
    GameEventKey.GameFrame_EquipStrengthenBtn = "GameFrame_EquipStrengthenBtn";
    GameEventKey.GameFrame_EquipStrengthenBtn2 = "GameFrame_EquipStrengthenBtn2";
    GameEventKey.GameFrame_EquipStrengthenEnterBtn = "GameFrame_EquipStrengthenEnterBtn";
    GameEventKey.GameFrame_BattleNormalBtn = "GameFrame_BattleNormal";
    GameEventKey.GameFrame_BattleSpecialBtn = "GameFrame_BattleSpecialBtn";
    GameEventKey.GameFrame_BattleSpecialList = "GameFrame_BattleSpecialList";
    GameEventKey.GameFrame_GuideChangeHero = "GameFrame_GuideChangeHero";
    GameEventKey.GameFrame_BtnBackOnClick = "GameFrame_BtnBackOnClick";
    GameEventKey.GameFrame_HeroLevelGuideUpClose = "GameFrame_HeroLevelUpClose";

    class FguiHelper {
        static setChildWindow(com, window) {
            if (com) {
                com["moduleWindow"] = window;
                if (com._children) {
                    for (let i = 0; i < com._children.length; i++) {
                        this.setChildWindow(com._children[i], window);
                    }
                }
            }
        }
        static callChildOnWindowInited(com) {
            if (com) {
                let fun = com["onWindowInited"];
                if (fun) {
                    fun.apply(com);
                }
                if (com._children) {
                    for (let i = 0; i < com._children.length; i++) {
                        this.callChildOnWindowInited(com._children[i]);
                    }
                }
            }
        }
        static callChildOnWindowDestory(com) {
            let container;
            if (com instanceof fgui.GObject) {
                container = com.displayObject;
            }
            if (com) {
                let fun = com["onWindowDestory"];
                if (fun) {
                    if (fun.apply(com)) {
                        return;
                    }
                }
                for (let i = container.numChildren - 1; i >= 0; i--) {
                    let display = container.getChildAt(i);
                    if (display["$owner"])
                        this.callChildOnWindowDestory(display["$owner"]);
                }
            }
        }
        static callChildOnWindowShow(com) {
            if (com) {
                let enbaleCall = true;
                let fun = com["onWindowShow"];
                if (fun) {
                    if (com["whenSelfVisiableCallWindowShowAndHide"] !== undefined) {
                        let whenSelfVisiableCallWindowShowAndHide = com["whenSelfVisiableCallWindowShowAndHide"];
                        if (whenSelfVisiableCallWindowShowAndHide) {
                            if (com.visible == false) {
                                enbaleCall = false;
                            }
                        }
                    }
                    if (enbaleCall) {
                        fun.apply(com);
                    }
                }
                if (enbaleCall && com._children) {
                    for (let i = com._children.length - 1; i >= 0; i--) {
                        this.callChildOnWindowShow(com._children[i]);
                    }
                }
            }
        }
        static callChildOnWindowHide(com) {
            if (com) {
                let enbaleCall = true;
                let fun = com["onWindowHide"];
                if (fun) {
                    if (com["whenSelfVisiableCallWindowShowAndHide"] !== undefined) {
                        let whenSelfVisiableCallWindowShowAndHide = com["whenSelfVisiableCallWindowShowAndHide"];
                        if (whenSelfVisiableCallWindowShowAndHide) {
                            if (com.visible == false) {
                                enbaleCall = false;
                            }
                        }
                    }
                    if (enbaleCall) {
                        fun.apply(com);
                    }
                }
                if (enbaleCall && com._children) {
                    for (let i = 0; i < com._children.length; i++) {
                        this.callChildOnWindowHide(com._children[i]);
                    }
                }
            }
        }
        static callChildOnTabShow(com) {
            if (com) {
                let fun = com["onTabShow"];
                if (fun) {
                    fun.apply(com);
                }
                if (com["_children"]) {
                    for (let i = 0; i < com["_children"]["length"]; i++) {
                        this.callChildOnTabShow(com["_children"][i]);
                    }
                }
            }
        }
        static callChildOnTabHide(com) {
            if (com) {
                let fun = com["onTabHide"];
                if (fun) {
                    fun.apply(com);
                }
                if (com["_children"]) {
                    for (let i = 0; i < com["_children"]["length"]; i++) {
                        this.callChildOnTabHide(com["_children"][i]);
                    }
                }
            }
        }
        static autoScreenScaleShrink(content, alignH, alignV) {
            let rate = Game.screenSetting.screenScaleShrink;
            content.scaleX = rate;
            content.scaleY = rate;
            if (alignH) {
                let parent = fgui.GRoot.inst;
                switch (alignH) {
                    case Laya.Stage.ALIGN_LEFT:
                        content.x = 0;
                        break;
                    case Laya.Stage.ALIGN_CENTER:
                        content.x = (parent.width - content.width * rate) * 0.5;
                        break;
                    case Laya.Stage.ALIGN_RIGHT:
                        content.x = parent.width - content.width * rate;
                        break;
                }
                switch (alignV) {
                    case Laya.Stage.ALIGN_TOP:
                        content.y = 0;
                        break;
                    case Laya.Stage.ALIGN_MIDDLE:
                        content.y = (parent.height - content.height * rate) * 0.5;
                        break;
                    case Laya.Stage.ALIGN_BOTTOM:
                        content.y = parent.height - content.height * rate;
                        break;
                }
            }
        }
        static autoScreenScaleShrink2(content, sourceScale = 1) {
            let rate = Game.screenSetting.screenScaleShrinkMax;
            content.scaleX = rate * sourceScale;
            content.scaleY = rate * sourceScale;
            if (content.parent) {
                content.x = content.parent.width * 0.5;
                content.y = content.parent.height * 0.5;
            }
        }
        static autoScreenScale(content, alignH, alignV) {
            let rate = Game.screenSetting.screenScaleExpand;
            content.scaleX = rate;
            content.scaleY = rate;
            if (alignH) {
                let parent = fgui.GRoot.inst;
                switch (alignH) {
                    case Laya.Stage.ALIGN_LEFT:
                        content.x = 0;
                        break;
                    case Laya.Stage.ALIGN_CENTER:
                        content.x = (parent.width - content.width * rate) * 0.5;
                        break;
                    case Laya.Stage.ALIGN_RIGHT:
                        content.x = parent.width - content.width * rate;
                        break;
                }
                switch (alignV) {
                    case Laya.Stage.ALIGN_TOP:
                        content.y = 0;
                        break;
                    case Laya.Stage.ALIGN_MIDDLE:
                        if (content.parent) {
                            this.helpPoint.y = (parent.height - content.height * rate) * 0.5;
                            this.helpPoint = content.parent.globalToLocal(0, this.helpPoint.y, this.helpPoint);
                            content.y = this.helpPoint.y;
                        }
                        else {
                            content.y = (parent.height - content.height * rate) * 0.5;
                        }
                        break;
                    case Laya.Stage.ALIGN_BOTTOM:
                        content.y = parent.height - content.height * rate;
                        break;
                }
            }
        }
        static autoScreenScale2(content) {
            let rate = Game.screenSetting.screenScaleExpand;
            content.scaleX = rate;
            content.scaleY = rate;
            if (content.parent) {
                content.x = content.parent.width * 0.5;
                content.y = content.parent.height * 0.5;
            }
        }
        static autoScreenScale3(content) {
            let rate = Game.screenSetting.screenScaleExpand;
            content.scaleX = rate;
            content.scaleY = rate;
        }
        static autoScreenSize(content, alignH, alignV) {
            let rate = Game.screenSetting.screenScaleExpand;
            content.width = content.sourceWidth * rate;
            content.height = content.sourceHeight * rate;
            if (alignH) {
                let parent = fgui.GRoot.inst;
                switch (alignH) {
                    case Laya.Stage.ALIGN_LEFT:
                        content.x = 0;
                        break;
                    case Laya.Stage.ALIGN_CENTER:
                        content.x = (parent.width - content.width) * 0.5;
                        break;
                    case Laya.Stage.ALIGN_RIGHT:
                        content.x = parent.width - content.width;
                        break;
                }
                switch (alignV) {
                    case Laya.Stage.ALIGN_TOP:
                        content.y = 0;
                        break;
                    case Laya.Stage.ALIGN_MIDDLE:
                        if (content.parent) {
                            this.helpPoint.y = (parent.height - content.height) * 0.5;
                            this.helpPoint = content.parent.globalToLocal(0, this.helpPoint.y, this.helpPoint);
                            content.y = this.helpPoint.y;
                        }
                        else {
                            content.y = (parent.height - content.height) * 0.5;
                        }
                        break;
                    case Laya.Stage.ALIGN_BOTTOM:
                        content.y = parent.height - content.height;
                        break;
                }
            }
        }
        static autoParentSize(content, alignH, alignV) {
            let rate = Game.screenSetting.screenScaleExpand;
            content.width = content.sourceWidth * rate;
            content.height = content.sourceHeight * rate;
            if (alignH) {
                let parent = fgui.GRoot.inst;
                switch (alignH) {
                    case Laya.Stage.ALIGN_LEFT:
                        content.x = 0;
                        break;
                    case Laya.Stage.ALIGN_CENTER:
                        content.x = (parent.width - content.width) * 0.5;
                        break;
                    case Laya.Stage.ALIGN_RIGHT:
                        content.x = parent.width - content.width;
                        break;
                }
                switch (alignV) {
                    case Laya.Stage.ALIGN_TOP:
                        content.y = 0;
                        break;
                    case Laya.Stage.ALIGN_MIDDLE:
                        content.y = (parent.height - content.height) * 0.5;
                        break;
                    case Laya.Stage.ALIGN_BOTTOM:
                        content.y = parent.height - content.height;
                        break;
                }
            }
        }
        static centerScreen(content) {
            content.x = (Game.screenSetting.screenWidth - content.width) * 0.5;
            content.y = (Game.screenSetting.screenHeight - content.height) * 0.5;
        }
        static centerScreenForCenter(content) {
            content.x = Game.screenSetting.screenWidth * 0.5;
            content.y = Game.screenSetting.screenHeight * 0.5;
        }
        static setScreenSize(content) {
            content.width = Game.screenSetting.screenWidth;
            content.height = Game.screenSetting.screenHeight;
        }
        static getValueForPath(path, content, ...args) {
            if (path.endsWith("()")) {
                return FguiHelper.getFunResultForPath(path, content, ...args);
            }
            else {
                return FguiHelper.getFieldValueForPath(path, content);
            }
        }
        static getFunResultForPath(path, content, ...args) {
            if (path.endsWith("()")) {
                path = path.replace("()", "");
                let fun = FguiHelper.getFieldValueForPath(path, content);
                if (fun) {
                    let paths = path.split(/[\.\/]/);
                    if (paths.length == 1) {
                        if (args.length == 1) {
                            return fun.apply(content, args[0]);
                        }
                        return fun.apply(content, args);
                    }
                    else {
                        let objPath = "";
                        let gap = "";
                        for (let i = 0; i < paths.length - 1; i++) {
                            objPath += gap + paths[i];
                            gap = ".";
                        }
                        let obj = FguiHelper.getFieldValueForPath(objPath, content);
                        if (args.length == 1) {
                            return fun.apply(obj, args[0]);
                        }
                        return fun.apply(obj, args);
                    }
                }
            }
            else {
                return FguiHelper.getFieldValueForPath(path, content);
            }
        }
        static getFieldValueForPath(path, content) {
            if (!content) {
                content = window;
                if (!content) {
                    content = this;
                }
            }
            let paths = path.split(/[\.\/]/);
            let val = content;
            for (let i = 0; i < paths.length; i++) {
                if (val[paths[i]]) {
                    val = val[paths[i]];
                }
                else {
                    return null;
                }
            }
            return val;
        }
        static setStringsSource(lang) {
            let txtmap = fgui.TranslationHelper["strings"] = {};
            let list = lang.getConfigList();
            for (let i = 0; i < list.length; i++) {
                let config = list[i];
                let name = config.dict.getValue("name");
                let value = config.dict.getValue("value");
                let index = name.indexOf("-");
                if (value === undefined || value === null)
                    continue;
                if (index == -1)
                    continue;
                var uiUrl = name.substr(0, index);
                var uiNodeName = name.substr(index + 1);
                var col = txtmap[uiUrl];
                if (!col) {
                    col = {};
                    txtmap[uiUrl] = col;
                }
                col[uiNodeName] = value;
            }
        }
        static setGray(component) {
            if (!component)
                return;
            if (!FguiHelper.grayscaleFilters) {
                var grayscaleFilter = new Laya.ColorFilter(FguiHelper.grayscaleMat);
                FguiHelper.grayscaleFilters = [grayscaleFilter];
            }
            component.displayObject.filters = FguiHelper.grayscaleFilters;
        }
        static clearFilters(component) {
            if (!component)
                return;
            component.displayObject.filters = null;
        }
        static get saturationFilters() {
            if (!FguiHelper._saturationFilters) {
                FguiHelper._saturationFilters = [new Laya.ColorFilter(FguiHelper.saturation)];
            }
            return FguiHelper._saturationFilters;
        }
        static get saturationFilters2() {
            if (!FguiHelper._saturationFilters2) {
                FguiHelper._saturationFilters2 = [new Laya.ColorFilter(FguiHelper.saturation2)];
            }
            return FguiHelper._saturationFilters2;
        }
        static get saturationFilters3() {
            if (!FguiHelper._saturationFilters3) {
                FguiHelper._saturationFilters3 = [new Laya.ColorFilter().adjustColor(0, -50, -100, 0)];
            }
            return FguiHelper._saturationFilters3;
        }
        static halfStaturation(obj) {
            if (!obj)
                return;
            obj.displayObject.filters = FguiHelper.saturationFilters;
        }
        static half2Staturation(obj) {
            if (!obj)
                return;
            obj.displayObject.filters = FguiHelper.saturationFilters2;
        }
        static half3Staturation(obj) {
            if (!obj)
                return;
            obj.displayObject.filters = FguiHelper.saturationFilters3;
        }
        static boundEffect(target, duration = 1000) {
            target.setPivot(0.5, 0.5);
            target.setScale(0.5, 0.5);
            Laya.Tween.to(target, { scaleX: 1, scaleY: 1 }, duration, Laya.Ease.backOut, Laya.Handler.create(null, () => {
            }), 0, true, true);
        }
    }
    FguiHelper.helpPoint = new Laya.Point();
    FguiHelper.grayscaleMat = [0.3086, 0.6094, 0.0820, 0, 0, 0.3086, 0.6094, 0.0820, 0, 0, 0.3086, 0.6094, 0.0820, 0, 0, 0, 0, 0, 1, 0];
    FguiHelper.grayscaleFilters = null;
    FguiHelper.normalFilters = null;
    FguiHelper.saturation = [
        0.5, 0, 0, 0, 0,
        0, 0.5, 0, 0, 0,
        0, 0, 0.5, 0, 0,
        0, 0, 0, 1, 0,
    ];
    FguiHelper.saturation2 = [
        0.25, 0, 0, 0, 0,
        0, 0.25, 0, 0, 0,
        0, 0, 0.25, 0, 0,
        0, 0, 0, 1, 0,
    ];

    var Point = Laya.Point;
    var Handler$1 = Laya.Handler;
    class MWindow extends FWindow {
        constructor() {
            super(...arguments);
            this.sShowComplete = new Signal();
            this.sHideComplete = new Signal();
            this.menuIsCreated = false;
            this.isDestoryed = false;
            this.enableShowAnimation = true;
            this.enableShowSignal = true;
            this.enableHideSignal = true;
            this._loadAssets = [];
            this._dynamicAssetsList = [];
            this.toPoint = new Point();
            this.srcPoint = new Point();
            this.sShowSubwindowComplete = new Signal();
            this.sHideSubwindowComplete = new Signal();
            this.subwindowDict = new Dictionary();
            this.subwindowStack = [];
            this.tabDict = new Dictionary();
            this.tabHistorys = [];
        }
        static async AsyncEnableOpen() {
            return Promise.resolve(true);
        }
        isOpenSubOrTab(index) {
            return this.menuParameter.openIndex == index;
        }
        addAssetForFguiPackagename(packagename) {
            this._loadAssets.push({ url: packagename, type: AssetItemType.FguiPackage });
        }
        addAssetForFguiComponent(fguiCom) {
            let names = fguiCom["DependPackages"];
            for (let i = 0; i < names.length; i++) {
                this.addAssetForFguiPackagename(names[i]);
            }
        }
        getLoadAssets(list, dict) {
            let assets = this._loadAssets;
            for (let i = 0; i < assets.length; i++) {
                let key = AssetHelper.getAssetItemKey(assets[i]);
                if (!dict.hasKey(key)) {
                    list.push(assets[i]);
                    dict.add(key, assets[i]);
                }
            }
            return list;
        }
        unloadAssetForFguiPackagename(packagename) {
            switch (packagename) {
                case GuiPackageNames._ResImageUIV1:
                case GuiPackageNames.__ResFont:
                case GuiPackageNames.CommonBase:
                case GuiPackageNames.CommonGame:
                case GuiPackageNames.CommonFx:
                case GuiPackageNames.SystemModuleDialog:
                    return;
            }
            Game.asset.unloadFgui(packagename);
        }
        unloadAssetForFguiComponent(fguiCom) {
            let names = fguiCom["DependPackages"];
            for (let i = 0; i < names.length; i++) {
                this.unloadAssetForFguiPackagename(names[i]);
            }
        }
        unloadAssetFroAssetList() {
            for (let i = 0; i < this._loadAssets.length; i++) {
                this.unloadAssetForFguiPackagename(this._loadAssets[i].url);
            }
        }
        addDynamicAsset(assetItem) {
            if (assetItem)
                this._dynamicAssetsList.push(assetItem);
        }
        addDynmicAssetForAvatarAll(avatarConfig) {
            avatarConfig.getAllAssset(this._dynamicAssetsList);
        }
        generateAssetsForDynmic() {
            this._dynamicAssetsList = [];
        }
        getLoadAssetsForDynamic(list, dict) {
            let assets = this._dynamicAssetsList;
            for (let i = 0; i < assets.length; i++) {
                let key = AssetHelper.getAssetItemKey(assets[i]);
                if (!dict.hasKey(key)) {
                    list.push(assets[i]);
                    dict.add(key, assets[i]);
                }
            }
            let subwindows = this.subwindowDict.getValues();
            for (let i = 0; i < subwindows.length; i++) {
                subwindows[i].getLoadAssetsForDynamic(list, dict);
            }
            return list;
        }
        onInit() {
            this.onMenuCreate();
            super.onInit();
        }
        onMenuCreate() {
            this.setChildWindow(this.contentPane);
            this.callChildOnWindowInited(this.contentPane);
            this.menuIsCreated = true;
            this.onMenuOpen(this.menuParameter);
        }
        setCloseBtnEvent() {
            if (this.contentPane && this.contentPane["m_frame"] && this.contentPane["m_frame"].getChild("closeBtn")) {
                this.contentPane["m_frame"].getChild("closeBtn").onClick(this, this.menuClose);
            }
        }
        setBackBtnEvent() {
            if (this.contentPane && this.contentPane["m_frame"] && this.contentPane["m_frame"].getChild("closeBtn")) {
                this.contentPane["m_frame"].getChild("closeBtn").onClick(this, this.menuBack);
            }
        }
        onMenuOpen(parameter) {
            this.enableShowSignal = true;
            this.enableShowAnimation = true;
            this.menuParameter = parameter;
            switch (parameter.openType) {
                case MenuOpenType.Subwindow:
                    this.enableShowSignal = false;
                    this.enableShowAnimation = false;
                    this.openSubwindowByIndex(parameter.openIndex, false, ...parameter.args);
                    break;
                case MenuOpenType.Tab:
                    this.openTab(parameter.openIndex);
                    break;
                default:
                    Game.event.dispatch(GameEventKey.GameFrame_OpenMenu, this.menuId, parameter.openType);
                    break;
            }
        }
        windowShow() {
            if (this.windowContainer)
                this.showOn(this.windowContainer);
            else
                this.show();
        }
        menuShow(root) {
            switch (this.menuParameter.openType) {
                case MenuOpenType.Subwindow:
                    if (!this.contentPane)
                        this.onInit();
                    break;
                default:
                    this.showOn(root);
                    break;
            }
        }
        menuClose() {
            Game.menu.close(this.menuId);
        }
        menuBack() {
            Game.menu.back(this.menuId);
        }
        destory() {
            this.callChildOnWindowDestory(this.contentPane);
            this.onMenuDestory();
            this.sShowComplete.removeAll();
            this.sHideComplete.removeAll();
            this.sShowSubwindowComplete.removeAll();
            this.sHideSubwindowComplete.removeAll();
            this.tabDict.clear();
            let list = this.subwindowDict.getValues();
            for (let i = 0; i < list.length; i++) {
                let item = list[i];
                item.destory();
            }
            this.subwindowDict.clear();
            if (this.contentPane) {
                this.contentPane.dispose();
                this.contentPane = null;
            }
            this.unloadAssetFroAssetList();
            super.dispose();
            this.isDestoryed = true;
        }
        onMenuDestory() {
        }
        doShowAnimation() {
            this.onWindowWillShow();
            if (this.openAnimation == 1) {
                this.srcPoint.x = this.panel.x;
                this.srcPoint.y = this.panel.y;
                this.panel.setScale(0.1, 0.1);
                this.calBuutonPos();
                this.panel.setXY(this.toPoint.x, this.toPoint.y);
                Laya.Tween.to(this.panel, { scaleX: 1, scaleY: 1, x: this.srcPoint.x, y: this.srcPoint.y }, 300, Laya.Ease.quadOut, Handler$1.create(this, () => {
                    this.onShown();
                }));
            }
            else {
                super.doShowAnimation();
            }
        }
        get panel() {
            if (this.contentPane["m_panel"]) {
                return this.contentPane["m_panel"];
            }
            return this.contentPane;
        }
        doHideAnimation() {
            this.onWindowWillHide();
            if (this.closeAnimation == 1) {
                this.panel.setScale(1, 1);
                this.calBuutonPos();
                Laya.Tween.to(this.panel, { scaleX: 0.1, scaleY: 0.1, x: this.toPoint.x, y: this.toPoint.y }, 300, Laya.Ease.quadOut, Handler$1.create(this, () => {
                    this.panel.x = this.srcPoint.x;
                    this.panel.y = this.srcPoint.y;
                    this.hideImmediately();
                }));
            }
            else {
                super.doHideAnimation();
            }
        }
        get openAnimation() {
            if (this.menuConfig == null) {
                return 0;
            }
            return this.menuConfig.openAnimation;
        }
        get closeAnimation() {
            if (this.menuConfig == null) {
                return 0;
            }
            return this.menuConfig.closeAnimation;
        }
        get menuConfig() {
            if (this.menuId > 0) {
                return Game.config.menu.getConfig(this.menuId);
            }
            return null;
        }
        calBuutonPos() {
        }
        onShown() {
            this.enableHideSignal = true;
            this.onShowComplete();
            if (this.contentPane) {
                this.callChildOnWindowShow(this.contentPane);
            }
        }
        onMenuClose() {
            this.hide();
            let list = this.subwindowDict.getValues();
            for (let i = 0; i < list.length; i++) {
                let item = list[i];
                item.hide();
            }
        }
        onHide() {
            this.enableShowSignal = true;
            this.onHideComplete();
            this.clearTabHistorys();
            if (this.contentPane) {
                this.callChildOnWindowHide(this.contentPane);
            }
        }
        onShowComplete() {
            if (this.enableShowSignal) {
                this.sShowComplete.dispatch();
            }
        }
        onHideComplete() {
            if (this.enableHideSignal) {
                this.sHideComplete.dispatch();
            }
        }
        getSubwindow(subwindowIndex) {
            return this.subwindowDict.getValue(subwindowIndex);
        }
        registerSubwindow(subwindow) {
            this.subwindowDict.add(subwindow.subwindowIndex, subwindow);
        }
        __onSubWindowClose(subwindow) {
            for (let i = this.subwindowStack.length - 1; i >= 0; i--) {
                if (this.subwindowStack[i] == subwindow)
                    this.subwindowStack.splice(i, 1);
            }
        }
        __getLastOpenSubWindow(excludeSubwindow) {
            for (let i = this.subwindowStack.length - 1; i >= 0; i--) {
                let ctl = this.subwindowStack[i];
                if (excludeSubwindow && excludeSubwindow.indexOf(ctl) != -1) {
                    continue;
                }
                return ctl;
            }
            return null;
        }
        closeAllSubwindowSelf(excludeSubwindow) {
            let list = [];
            for (let i = this.subwindowStack.length - 1; i >= 0; i--) {
                list.push(this.subwindowStack[i]);
            }
            for (let i = 0; i < list.length; i++) {
                let ctl = list[i];
                if (excludeSubwindow && excludeSubwindow.indexOf(ctl) != -1) {
                    continue;
                }
                ctl.closeSelf();
            }
        }
        closeLastSubwindowSelf() {
            let subWindow = this.__getLastOpenSubWindow();
            if (subWindow) {
                subWindow.closeSelf();
            }
        }
        getLastMenuParameter() {
            let subWindow = this.__getLastOpenSubWindow();
            if (subWindow) {
                return subWindow.menuParameter;
            }
            else {
                return this.menuParameter;
            }
        }
        openSubwindow(subwindow, dontCloseOther = false, ...args) {
            subwindow.__backSubWindow = this.__getLastOpenSubWindow([subwindow]);
            this.menuParameter.openType = MenuOpenType.Subwindow;
            this.menuParameter.openIndex = subwindow.subwindowIndex;
            this.menuParameter.args = args;
            let menuParmeter = {
                openType: this.menuParameter.openType,
                openIndex: this.menuParameter.openIndex,
                args: args,
                dontCloseOther: dontCloseOther
            };
            if (!dontCloseOther) {
                let caller = {
                    on: () => {
                        if (subwindow.whenOpenCloseMainwindow) {
                            this.enableHideSignal = false;
                            this.hideImmediately();
                        }
                        if (subwindow.whenOpenCloseOthersubwindow) {
                            let list = this.subwindowDict.getValues;
                            for (let i = 0; i < list.length; i++) {
                                let item = list[i];
                                if (item != subwindow) {
                                    item.hideImmediately();
                                    this.__onSubWindowClose(item);
                                }
                            }
                        }
                        this.sShowSubwindowComplete.dispatch();
                    }
                };
                subwindow.sShowComplete.addOnce(caller.on, caller);
            }
            let index = this.subwindowStack.indexOf(subwindow);
            if (index != -1)
                this.subwindowStack.splice(index, 1);
            this.subwindowStack.push(subwindow);
            if (subwindow.menuIsCreated) {
                subwindow.onMenuOpen(menuParmeter);
            }
            else {
                subwindow.menuParameter = menuParmeter;
            }
            subwindow.showOn(this.windowContainer);
            Game.event.dispatch(GameEventKey.GameFrame_OpenMenu, this.menuId, menuParmeter.openType, menuParmeter.openIndex);
        }
        openSubwindowByIndex(subwindowIndex, dontCloseOther = false, ...args) {
            let subwindow = this.getSubwindow(subwindowIndex);
            this.openSubwindow(subwindow, dontCloseOther, ...args);
        }
        onSubwindowBack(subwindow) {
            this.menuParameter.openType = MenuOpenType.None;
            this.menuParameter.openIndex = 0;
            this.sShowComplete.addOnce(() => {
                subwindow.hide();
            }, subwindow);
            if (this.windowContainer.parent) {
                subwindow.hide();
            }
            this.showOn(this.windowContainer);
            this.subwindowStack = [];
        }
        getTabDispyaObjects(tabIndex) {
            if (this.tabDict.hasKey(tabIndex)) {
                return this.tabDict.getValue(tabIndex);
            }
            let list = [];
            this.tabDict.add(tabIndex, list);
            return list;
        }
        registerControllerTab(tabCtrl, contentPane = null) {
            if (!contentPane)
                contentPane = this.contentPane;
            let count = contentPane.numChildren;
            for (let i = 0; i < count; i++) {
                let obj = contentPane.getChildAt(i);
                if (obj._gears && obj._gears.length > 0) {
                    for (let gear of obj._gears) {
                        if (gear && gear.controller == tabCtrl) {
                            if (gear instanceof fgui.GearDisplay) {
                                if (gear.pages && gear.pages.length > 0) {
                                    for (let pageIndexStr of gear.pages) {
                                        let tabIndex = toInt(pageIndexStr);
                                        this.registerTab(tabIndex, obj);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        registerTab(tabIndex, displayObject) {
            let list = this.getTabDispyaObjects(tabIndex);
            list.push(displayObject);
        }
        setTabVisiable(tabIndex, visiable) {
            let list = this.getTabDispyaObjects(tabIndex);
            for (let i = 0; i < list.length; i++) {
                if (visiable) {
                    this.callChildOnTabShow(list[i]);
                }
                else if (list[i].visible) {
                    this.callChildOnTabHide(list[i]);
                }
                list[i].visible = visiable;
            }
        }
        setOpenTab(tabIndex) {
            this.menuParameter.openIndex = tabIndex;
            let keys = this.tabDict.getKeys();
            for (let i = 0; i < keys.length; i++) {
                if (keys[i] != tabIndex) {
                    this.setTabVisiable(keys[i], false);
                }
            }
            this.setTabVisiable(tabIndex, true);
            this.onOpenTab(tabIndex);
        }
        openTab(tabIndex) {
            this.tabHistorys.push(tabIndex);
            this.setOpenTab(tabIndex);
            Game.event.dispatch(GameEventKey.GameFrame_OpenMenu, this.menuId, MenuOpenType.Tab, tabIndex);
        }
        onOpenTab(tabIndex) {
        }
        backTab() {
            if (this.tabHistorys.length > 0) {
                let lastIndex;
                for (let i = this.tabHistorys.length - 1; i >= 0; i--) {
                    if (this.tabHistorys[i] == this.menuParameter.openIndex) {
                        if (i > 0) {
                            if (this.tabHistorys[i - 1] != this.menuParameter.openIndex) {
                                lastIndex = this.tabHistorys[i - 1];
                            }
                        }
                    }
                }
                if (lastIndex === undefined) {
                    this.menuBack();
                }
                else {
                    this.openTab(lastIndex);
                }
            }
        }
        clearTabHistorys() {
            this.tabHistorys = [];
        }
        setChildWindow(com) {
            FguiHelper.setChildWindow(com, this);
        }
        callChildOnWindowInited(com) {
            FguiHelper.callChildOnWindowInited(com);
        }
        callChildOnWindowDestory(com) {
            FguiHelper.callChildOnWindowDestory(com);
        }
        callChildOnWindowShow(com) {
            FguiHelper.callChildOnWindowShow(com);
        }
        callChildOnWindowHide(com) {
            FguiHelper.callChildOnWindowHide(com);
        }
        callChildOnTabShow(com) {
            FguiHelper.callChildOnTabShow(com);
        }
        callChildOnTabHide(com) {
            FguiHelper.callChildOnTabHide(com);
        }
    }

    class LoginWindowUIStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("ModuleLogin", "LoginWindowUI"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_Show = this.getController("Show");
            this.m_txt_resVer = (this.getChild("txt_resVer"));
            this.m_txt_gamever = (this.getChild("txt_gamever"));
            this.m_screenBG = (this.getChild("screenBG"));
            this.m_loginPanel = (this.getChild("loginPanel"));
            this.m_wxPanel = (this.getChild("wxPanel"));
            this.m_cdkPanel = (this.getChild("cdkPanel"));
            this.m_panelCheckID = (this.getChild("panelCheckID"));
            this.m_btnBulletin = (this.getChild("btnBulletin"));
            this.m_panelBulletin = (this.getChild("panelBulletin"));
            this.m_panelServer = (this.getChild("panelServer"));
        }
    }
    LoginWindowUIStruct.URL = "ui://4698ugpknz0c0";
    LoginWindowUIStruct.DependPackages = ["ModuleLogin", "GameLaunch"];

    var eSex;
    (function (eSex) {
        eSex[eSex["None"] = 0] = "None";
        eSex[eSex["Man"] = 1] = "Man";
        eSex[eSex["Woman"] = 2] = "Woman";
    })(eSex || (eSex = {}));
    class SdkUserInfo {
        constructor() {
            this.language = "";
            this.nickName = "";
            this.avatarUrl = "";
            this.gender = eSex.None;
            this.country = "";
            this.province = "";
            this.city = "";
            this.unionId = "";
            this.openId = "";
            this.sessionId = "";
            this.sign = "";
        }
        ToString() {
            return " UserInfo::<br/>NickName:" + this.nickName
                + ",<br/>AvatarUrl:" + this.avatarUrl
                + ",<br/>OpenID:" + this.openId
                + ",<br/>City:" + this.city
                + ",<br/>SessionID:" + this.sessionId;
        }
    }
    class SdkLoginInfo {
        constructor() {
            this.code = "";
        }
    }
    class SystemInfo {
    }
    var MsgType;
    (function (MsgType) {
        MsgType[MsgType["RemoveRankList"] = 0] = "RemoveRankList";
        MsgType[MsgType["FetchFriendRankList"] = 1] = "FetchFriendRankList";
        MsgType[MsgType["SubmitScore"] = 3] = "SubmitScore";
        MsgType[MsgType["GameOverRank"] = 4] = "GameOverRank";
        MsgType[MsgType["FetchGroupFriendRankList"] = 5] = "FetchGroupFriendRankList";
        MsgType[MsgType["NotifyTime"] = 6] = "NotifyTime";
    })(MsgType || (MsgType = {}));
    class AntPlatformBase {
        constructor() {
            this.m_stSystemInfo = null;
            this.m_stSdkUserInfo = null;
            this.m_stSdkLoginInfo = null;
            this.m_stSystemInfo = new SystemInfo();
            this.m_stSdkUserInfo = new SdkUserInfo();
            this.m_stSdkLoginInfo = new SdkLoginInfo();
        }
        static get platformWX() {
            return Game.browserSetting.isWeixinMinigame;
        }
        get userInfo() {
            return this.m_stSdkUserInfo;
        }
        get systemInfo() {
            return this.m_stSystemInfo;
        }
        async Login(userName = null, password = "", server = 1, roletype = 1) {
            return null;
        }
        async Login2(userName = null, password = "") {
            return null;
        }
        async CheckCdk(session, cdk) {
            return null;
        }
        async CheckIDCard(session, name, idCard) {
            return null;
        }
        async Areas() {
            return null;
        }
        async newAndUseRole(session, name, server) {
            return null;
        }
        async useRole(session, id) {
            return null;
        }
        async FastLogin(name, channel, openid) {
            return null;
        }
        async GameDoSdkAuthAsync() {
            return null;
        }
        async GameDoSdkLoginAsync() {
            return new Promise(resolve => {
                resolve(this.m_stSdkLoginInfo);
            });
        }
        GetLaunchOptions() {
            return {};
        }
        async UserCheck() {
            return new Promise(resolve => {
                resolve(true);
            });
        }
        Share(title, imgUrl, query) {
            return null;
        }
    }

    class AntPlatformMine extends AntPlatformBase {
        constructor() {
            super();
        }
        async Login(userName = null, password = "", server = 1, roletype = 1) {
            net.config.channel = "mine";
            let name = userName;
            if (isNullOrEmpty(name))
                name = AntFrame.LocationUrlParam("name") || AntFrame.RandName(2, 7);
            return new Promise(resolve => {
                net.auth.mineLogin(name, password, name, roletype, server, function (ok, json) {
                    if (!ok) {
                        resolve(json);
                    }
                    else {
                        net.logic.connect();
                        let callback = function (e) {
                            net.logic.gamerLoginS2C.off(callback);
                            resolve(e);
                        };
                        net.logic.gamerLoginS2C.on(callback);
                    }
                });
            });
        }
        async Login2(userName = null, password = "") {
            net.config.channel = "mine";
            let name = userName;
            if (isNullOrEmpty(name))
                name = AntFrame.LocationUrlParam("name") || AntFrame.RandName(2, 7);
            return new Promise(resolve => {
                net.auth.mineLogin2(name, password, function (ok, json) {
                    resolve(json);
                });
            });
        }
        async CheckCdk(session, cdk) {
            return new Promise(resolve => {
                net.auth.checkcdk(session, cdk, function (ok, json) {
                    if (!ok) {
                        resolve(json);
                    }
                    else {
                        resolve({});
                    }
                });
            });
        }
        async CheckIDCard(session, name, idCard) {
            return new Promise(resolve => {
                net.auth.checkIDCard(session, name, idCard, function (ok, json) {
                    if (!ok) {
                        resolve(json);
                    }
                    else {
                        resolve({});
                    }
                });
            });
        }
        async Areas() {
            return new Promise(resolve => {
                net.auth.areas(function (ok, json) {
                    if (!ok) {
                        this.Areas();
                    }
                    else {
                        resolve(json);
                    }
                });
            });
        }
        async newAndUseRole(session, name, server) {
            return new Promise(resolve => {
                net.auth.newAndUseRole(session, name, 1, server, "", function (ok, json) {
                    if (!ok) {
                        resolve(json);
                    }
                    else {
                        net.logic.connect();
                        let callback = function (e) {
                            net.logic.gamerLoginS2C.off(callback);
                            resolve(e);
                        };
                        net.logic.gamerLoginS2C.on(callback);
                    }
                });
            });
        }
        async useRole(session, id) {
            return new Promise(resolve => {
                net.auth.useRole(session, id, function (ok, json) {
                    if (!ok) {
                        resolve(json);
                    }
                    else {
                        net.logic.connect();
                        let callback = function (e) {
                            net.logic.gamerLoginS2C.off(callback);
                            resolve(e);
                        };
                        net.logic.gamerLoginS2C.on(callback);
                    }
                });
            });
        }
        async FastLogin(name, channel, openid) {
            net.config.channel = channel;
            return new Promise(resolve => {
                net.auth.fastLogin(name, channel, openid, function (ok, json) {
                    if (!ok) {
                        resolve(json);
                    }
                    else {
                        net.logic.connect();
                        let callback = function (e) {
                            net.logic.gamerLoginS2C.off(callback);
                            resolve(e);
                        };
                        net.logic.gamerLoginS2C.on(callback);
                    }
                });
            });
        }
        async GameDoSdkAuthAsync() {
            this.m_stSdkUserInfo.nickName = "ANTMINE-NICKNAME";
            this.m_stSdkUserInfo.avatarUrl = "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKpmpnxfYeeUqFOlwK9x260xibs866I7NpmuHjgerLXgUk1B77HpIo2oZP0wAbnib4Lkc30N7yibYoww/132";
            this.m_stSdkUserInfo.gender = eSex.Man;
            this.m_stSdkUserInfo.city = "上海";
            this.m_stSdkUserInfo.country = "中国";
            this.m_stSdkUserInfo.language = "zh_CN";
            this.m_stSdkUserInfo.province = "上海";
            return new Promise(resolve => {
                resolve(this.m_stSdkUserInfo);
            });
        }
        GetLaunchOptions() {
            return {
                key1: AntFrame.LocationUrlParam("key1"),
                key2: AntFrame.LocationUrlParam("key2"),
            };
        }
    }

    class AntPlatformWX extends AntPlatformBase {
        constructor() {
            super();
            this.GetSystemInfo();
            wx.setKeepScreenOn && wx.setKeepScreenOn({
                keepScreenOn: true,
                success: function () {
                    console.log("常亮设置成功！");
                }
            });
        }
        async WXGetSdkAuthSetting() {
            return new Promise(resolve => {
                wx.getSetting({
                    success: function (res) {
                        console.info("success: wx.getSetting", res);
                        resolve(res.authSetting['scope.userInfo']);
                    },
                    fail: function (res) {
                        console.log("fail: wx.getSetting", res.errMsg);
                        resolve(false);
                    },
                });
            });
        }
        async UserCheck() {
            return await this.WXGetSdkAuthSetting();
        }
        async WXGetSdkUserInfo() {
            return new Promise(resolve => {
                console.log("发起向微信获取用户信息");
                wx.getUserInfo({
                    success: res => {
                        console.info("success: wx.getUserInfo", res);
                        resolve(res.userInfo);
                    },
                    fail: res => {
                        console.log("fail: wx.getUserInfo", res.errMsg);
                        resolve(null);
                    }
                });
            });
        }
        async WXAuth() {
            let sdkInfo = await this.GameDoSdkAuthAsync();
            while (!sdkInfo) {
                sdkInfo = await this.GameDoSdkAuthAsync();
            }
            return sdkInfo;
        }
        async Login(userName = null, password = "", server = 1, roletype = 1) {
            let loginInfo = await this.GameDoSdkLoginAsync();
            while (!loginInfo) {
                loginInfo = await this.GameDoSdkLoginAsync();
            }
            let code = this.m_stSdkLoginInfo.code;
            net.config.channel = "wechat";
            return new Promise(resolve => {
                net.auth.sdkLogin(code, "", this.m_stSdkUserInfo.nickName, roletype, server, null, function (ok, json) {
                    if (!ok) {
                        resolve(json);
                    }
                    else {
                        net.logic.connect();
                        let callback = function (e) {
                            net.logic.gamerLoginS2C.off(callback);
                            resolve(e);
                        };
                        net.logic.gamerLoginS2C.on(callback);
                    }
                });
            });
        }
        async Login2(userName = null, password = "") {
            let loginInfo = await this.GameDoSdkLoginAsync();
            while (!loginInfo) {
                loginInfo = await this.GameDoSdkLoginAsync();
            }
            let code = this.m_stSdkLoginInfo.code;
            net.config.channel = "wechat";
            return new Promise(resolve => {
                net.auth.sdkLogin2(code, "", function (ok, json) {
                    resolve(json);
                });
            });
        }
        async CheckCdk(session, cdk) {
            return new Promise(resolve => {
                net.auth.checkcdk(session, cdk, function (ok, json) {
                    if (!ok) {
                        resolve(json);
                    }
                    else {
                        resolve({});
                    }
                });
            });
        }
        async CheckIDCard(session, name, idCard) {
            return new Promise(resolve => {
                net.auth.checkIDCard(session, name, idCard, function (ok, json) {
                    if (!ok) {
                        resolve(json);
                    }
                    else {
                        resolve({});
                    }
                });
            });
        }
        async Areas() {
            return new Promise(resolve => {
                net.auth.areas(function (ok, json) {
                    if (!ok) {
                        this.Areas();
                    }
                    else {
                        resolve(json);
                    }
                });
            });
        }
        async newAndUseRole(session, name, server) {
            name = this.m_stSdkLoginInfo.code;
            return new Promise(resolve => {
                net.auth.newAndUseRole(session, name, 1, server, "", function (ok, json) {
                    if (!ok) {
                        resolve(json);
                    }
                    else {
                        net.logic.connect();
                        let callback = function (e) {
                            net.logic.gamerLoginS2C.off(callback);
                            resolve(e);
                        };
                        net.logic.gamerLoginS2C.on(callback);
                    }
                });
            });
        }
        async useRole(session, id) {
            return new Promise(resolve => {
                net.auth.useRole(session, id, function (ok, json) {
                    if (!ok) {
                        resolve(json);
                    }
                    else {
                        net.logic.connect();
                        let callback = function (e) {
                            net.logic.gamerLoginS2C.off(callback);
                            resolve(e);
                        };
                        net.logic.gamerLoginS2C.on(callback);
                    }
                });
            });
        }
        async GameDoSdkAuthAsync() {
            let flag = await this.WXGetSdkAuthSetting();
            let info = flag ? await this.WXGetSdkUserInfo() : await this.WXCreateWXUserButton();
            if (info) {
                this.SetUserInfo(info);
                return new Promise(resolve => {
                    resolve(this.m_stSdkUserInfo);
                });
            }
            else {
                return new Promise(resolve => {
                    resolve(null);
                });
            }
        }
        async GameDoSdkLoginAsync() {
            console.log("发起登录微信 wx.login");
            return new Promise(resolve => {
                wx.login({
                    success: res => {
                        console.info("success: wx.login", res);
                        this.m_stSdkLoginInfo.code = res.code;
                        resolve(this.m_stSdkLoginInfo);
                    },
                    fail: res => {
                        console.info("fail: wx.login", res);
                        resolve(null);
                    },
                });
            });
        }
        async WXCreateWXUserButton() {
            let button = wx.createUserInfoButton({
                type: 'text',
                lang: "zh_CN",
                text: '',
                style: {
                    left: 0,
                    top: 0,
                    width: 2000,
                    height: 2000,
                    lineHeight: 40,
                    textAlign: 'center',
                    fontSize: 16,
                    borderRadius: 4
                }
            });
            button.show();
            return new Promise(resolve => {
                button.onTap(function (res) {
                    if (res.userInfo) {
                        console.log("按钮获取用户信息成功", "wxLogin auth success");
                        button.hide();
                        resolve(res.userInfo);
                    }
                    else {
                        console.error("按钮获取用户信息失败");
                        resolve(null);
                    }
                });
            });
        }
        SetUserInfo(info) {
            console.info("用户信息", info);
            this.m_stSdkUserInfo.language = info.language;
            this.m_stSdkUserInfo.nickName = info.nickName;
            this.m_stSdkUserInfo.avatarUrl = info.avatarUrl;
            this.m_stSdkUserInfo.gender = info.gender;
            this.m_stSdkUserInfo.country = info.country;
            this.m_stSdkUserInfo.province = info.province;
            this.m_stSdkUserInfo.city = info.city;
        }
        GetSystemInfo() {
            let info = wx.getSystemInfoSync();
            console.info("wx.getSystemInfoSync:", info);
            this.m_stSystemInfo.benchmarkLevel = info.benchmarkLevel;
            this.m_stSystemInfo.model = info.model;
            this.m_stSystemInfo.pixelRatio = info.pixelRatio;
            this.m_stSystemInfo.platform = info.platform;
            this.m_stSystemInfo.screenHeight = info.screenHeight;
            this.m_stSystemInfo.screenWidth = info.screenWidth;
            this.m_stSystemInfo.system = info.system;
            this.m_stSystemInfo.version = info.version;
            this.m_stSystemInfo.windowHeight = info.windowHeight;
            this.m_stSystemInfo.windowWidth = info.windowWidth;
            this.m_stSystemInfo.SDKVersion = info.SDKVersion;
            return this.m_stSystemInfo;
        }
        Share(title, imgUrl, query) {
            return new Promise(resolve => {
                wx.shareAppMessage({
                    title: title,
                    imageUrl: imgUrl,
                    query: query,
                    success: function () {
                        console.error("share success!");
                        resolve(true);
                    },
                    fail: function () {
                        console.error("share fail!");
                        resolve(false);
                    }
                });
            });
        }
        GetLaunchOptions() {
            return wx.getLaunchOptionsSync().query;
        }
    }

    class AntFrame {
        static LocationUrlParam(name) {
            if (Engine.borwer.isWXGame) {
                return null;
            }
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
                return unescape(r[2]);
            }
            return null;
        }
        static RandName(min, max, randomFlag = true) {
            let str = "";
            let range = min;
            let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            if (randomFlag) {
                range = Math.round(Math.random() * (max - min)) + min;
            }
            for (var i = 0; i < range; i++) {
                let pos = Math.round(Math.random() * (arr.length - 1));
                str += arr[pos];
            }
            return str;
        }
        static get platform() {
            if (!AntFrame._insPlatform) {
                if (Engine.borwer.isWXGame && AntFrame.enableWXLogin) {
                    AntFrame._insPlatform = new AntPlatformWX();
                }
                else {
                    AntFrame._insPlatform = new AntPlatformMine();
                }
            }
            return AntFrame._insPlatform;
        }
    }
    AntFrame.enableWXLogin = VersionConfig.IsEnableWx;
    AntFrame._insPlatform = null;

    class LoginWindowUI extends LoginWindowUIStruct {
        onWindowShow() {
            this.m_panelBulletin.m_bg.m_btn_Close.onClick(this, this.onCloseBulletin);
            this.m_panelServer.m_btnChange.onClick(this, this.onChangeServer);
            this.m_panelServer.m_btnStart.onClick(this, this.onStartGame);
            this.m_panelServer.m_bg.m_btn_Close.onClick(this, this.onReturnServer);
            this.m_panelCheckID.m_btnClose.onClick(this, this.onCloseCheckID);
            this.m_panelCheckID.m_btnClose.visible = false;
            this.m_panelCheckID.m_btnMake.onClick(this, this.onMakeCheckID);
            this.m_loginPanel.m_btn_login.onClick(this, this.onClickLogin);
            this.m_loginPanel.m_btn_randomLogin.onClick(this, this.onClickRandomLogin);
            this.m_cdkPanel.m_btn_cdk.onClick(this, this.onClickCdk);
            Game.net.gamerLoginS2C.on(this.GamerLoginS2C, this);
            Game.event.add("SUCCESS_LOGIN", this.LoginSuccess, this);
            Game.event.add("LOGIN_CDK", this.LoginCdk, this);
            Game.event.add("ERROR_CDK", this.ErrorCdk, this);
            Game.event.add("ERROR_IDCARD", this.ErrorIdCard, this);
            Game.event.add("ERROR_AREAS", this.ErrorAreas, this);
            Game.event.add("SUCCESS_AREAS", this.SucessAreas, this);
            Game.event.add("INDULGE_END", this.IndulgeEnd, this);
            this.Init();
        }
        onWindowHide() {
            this.m_panelBulletin.m_bg.m_btn_Close.offClick(this, this.onCloseBulletin);
            this.m_panelServer.m_btnChange.offClick(this, this.onChangeServer);
            this.m_panelServer.m_btnStart.offClick(this, this.onStartGame);
            this.m_panelServer.m_bg.m_btn_Close.offClick(this, this.onReturnServer);
            this.m_panelCheckID.m_btnClose.onClick(this, this.onCloseCheckID);
            this.m_panelCheckID.m_btnMake.onClick(this, this.onMakeCheckID);
            this.m_loginPanel.m_btn_login.offClick(this, this.onClickLogin);
            this.m_loginPanel.m_btn_randomLogin.offClick(this, this.onClickRandomLogin);
            this.m_cdkPanel.m_btn_cdk.offClick(this, this.onClickCdk);
            Game.net.gamerLoginS2C.off(this.GamerLoginS2C, this);
            Game.event.remove("SUCCESS_LOGIN", this.LoginSuccess, this);
            Game.event.remove("LOGIN_CDK", this.LoginCdk, this);
            Game.event.remove("ERROR_CDK", this.ErrorCdk, this);
            Game.event.remove("ERROR_IDCARD", this.ErrorIdCard, this);
            Game.event.remove("ERROR_AREAS", this.ErrorAreas, this);
            Game.event.remove("SUCCESS_AREAS", this.SucessAreas, this);
            Game.event.remove("INDULGE_END", this.IndulgeEnd, this);
            this.Reset();
        }
        onCloseBulletin() {
            this.m_Show.selectedIndex = 3;
        }
        onChangeServer() {
            this.m_panelServer.m_Server.selectedIndex = 1;
        }
        onReturnServer() {
            this.m_panelServer.m_Server.selectedIndex = 0;
        }
        onCloseCheckID() {
            this.GetServer();
        }
        onMakeCheckID() {
            let index = this.m_panelCheckID.m_Type.selectedIndex;
            switch (index) {
                case 3:
                    if (Game.moduleModel.login.isIndulge) {
                        this.m_Show.selectedIndex = 0;
                    }
                    else {
                        this.GetServer();
                    }
                    break;
                case 1:
                    this.SendIDCard();
                    break;
            }
        }
        onStartGame() {
            let server = this.m_panelServer.lastServer;
            if (!server) {
                Game.system.toastText("尚未获取服务器列表！");
                return;
            }
            Game.localStorage.server = server.id;
            let role = this.m_panelServer.GetRole(server.id);
            if (role) {
                Game.sender.login.useRole(this.login_session, role.id);
            }
            else {
                Game.sender.login.newAndUseRole(this.login_session, this.m_loginPanel.account, server.id);
            }
        }
        onClickLogin() {
            this.m_loginPanel.password = "123";
            if (!Boolean(this.m_loginPanel.account) || !Boolean(this.m_loginPanel.password)) {
                Game.system.toastText("请输入账号和密码！");
                return;
            }
            Game.sender.login.login(this.m_loginPanel.account, this.m_loginPanel.password, true);
        }
        onClickRandomLogin() {
            this.m_loginPanel.account = AntFrame.RandName(2, 7);
            Game.sender.login.login(this.m_loginPanel.account, "123", true);
        }
        onClickCancel() {
            this.m_Show.selectedIndex = 0;
        }
        onClickCdk() {
            let session = this.login_session;
            let cdk = this.m_cdkPanel.cdk;
            let userName = this.m_loginPanel.account;
            let password = this.m_loginPanel.password;
            Game.sender.login.check(session, cdk, userName, password);
        }
        GamerLoginS2C(msg) {
            if (msg.error) {
                return;
            }
        }
        LoginSuccess(session, roles) {
            this.login_session = session;
            this.m_panelServer.SetRoles(roles);
            let nocheck = ["jjsg1", "jjsg2", "jjsg3", "jjsg4", "jjsg5", "jjsg6"];
            let name = this.m_loginPanel.account;
            if (VersionConfig.IsOpenIDCard && nocheck.indexOf(name) == -1) {
                this.SendIDCard();
            }
            else {
                this.GetServer();
            }
            this.m_Show.selectedIndex = 1;
        }
        LoginCdk(session) {
            this.login_session = session;
            this.m_Show.selectedIndex = 4;
        }
        ErrorCdk(error) {
            switch (error) {
                case 1017:
                    Game.system.toastText("验证码错误！");
                    break;
                case 1001:
                    Game.system.toastText("验证时间超时！");
                    this.onStartGame();
                    break;
                default:
                    break;
            }
        }
        ErrorIdCard(error) {
            switch (error) {
                case 0:
                case 1023:
                    if (this.m_panelCheckID.m_labName.text != "" && this.m_panelCheckID.m_labID.text != "") {
                        Game.system.toastText("实名制验证成功！");
                    }
                    this.GetServer();
                    break;
                case 1021:
                case 1022:
                case 1026:
                    Game.system.toastText("实名制验证失败！");
                case 1025:
                    this.m_Show.selectedIndex = 5;
                    this.m_panelCheckID.m_Type.selectedIndex = 1;
                    break;
                case 1024:
                    this.m_Show.selectedIndex = 5;
                    this.m_panelCheckID.m_Type.selectedIndex = 3;
                    break;
                default:
                    break;
            }
        }
        ErrorAreas() {
            Game.system.toastText("拉取服务器错误！");
        }
        SucessAreas(areas) {
            areas.sort((a, b) => {
                return a.id - b.id;
            });
            this.m_panelServer.Open(areas);
        }
        IndulgeEnd() {
            if (this.m_Show.selectedIndex != 5) {
                let model = Game.moduleModel.login;
                switch (model.error) {
                    case 1024:
                        this.m_panelCheckID.m_Type.selectedIndex = 0;
                        break;
                    default:
                        this.m_panelCheckID.m_Type.selectedIndex = 3;
                        break;
                }
            }
        }
        Init() {
            this.m_txt_gamever.text = "GameVersion:" + Game.version.localAppVersionData.toString();
            this.m_txt_resVer.text = "ResVersion:" + Game.version.localResVersionData.toString();
            this.StartGame();
        }
        Reset() {
            this.m_txt_gamever.text = "";
            this.m_txt_resVer.text = "";
            this.m_Show.selectedIndex = 0;
        }
        GetServer() {
            Game.sender.login.areas();
        }
        StartGame() {
            if (AntFrame.platform instanceof AntPlatformWX && VersionConfig.IsEnableWx) {
                Game.sender.login.login("", "");
                this.m_Show.selectedIndex = 3;
            }
            else {
                this.m_Show.selectedIndex = 0;
            }
        }
        SendIDCard() {
            let session = this.login_session;
            let name = this.m_panelCheckID.m_labName.text;
            let idcard = this.m_panelCheckID.m_labID.text;
            Game.sender.login.CheckIDCard(session, name, idcard);
        }
    }

    var LoginTabType;
    (function (LoginTabType) {
        LoginTabType[LoginTabType["Login"] = 0] = "Login";
        LoginTabType[LoginTabType["LoginGuest"] = 1] = "LoginGuest";
        LoginTabType[LoginTabType["Register"] = 2] = "Register";
        LoginTabType[LoginTabType["Agreement"] = 3] = "Agreement";
    })(LoginTabType || (LoginTabType = {}));
    class LoginWindow extends MWindow {
        constructor() {
            super();
            this.addAssetForFguiComponent(LoginWindowUI);
        }
        generateAssetsForDynmic() {
            super.generateAssetsForDynmic();
        }
        onMenuCreate() {
            let windowUI = LoginWindowUI.createInstance();
            this.conent = windowUI;
            this.contentPane = windowUI;
            super.onMenuCreate();
        }
        onShowComplete() {
            super.onShowComplete();
        }
        onHideComplete() {
            super.onHideComplete();
        }
    }

    class WindowHomeUIStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "WindowHomeUI"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_Tab = this.getController("Tab");
            this.m_bg = (this.getChild("bg"));
            this.m_mainMenu = (this.getChild("mainMenu"));
            this.m_chooseHero = (this.getChild("chooseHero"));
            this.m_shop = (this.getChild("shop"));
            this.m_chooseGameFormat = (this.getChild("chooseGameFormat"));
            this.m_result = (this.getChild("result"));
        }
    }
    WindowHomeUIStruct.URL = "ui://moe42ygrsqzy8a";
    WindowHomeUIStruct.DependPackages = ["GameHome", "GameLaunch"];

    class WindowHomeUI extends WindowHomeUIStruct {
    }

    class HomeWindow extends MWindow {
        constructor() {
            super();
            this.addAssetForFguiComponent(WindowHomeUI);
        }
        generateAssetsForDynmic() {
            super.generateAssetsForDynmic();
        }
        onMenuCreate() {
            let windowUI = WindowHomeUI.createInstance();
            this.conent = windowUI;
            this.contentPane = windowUI;
            super.onMenuCreate();
        }
        onShowComplete() {
            super.onShowComplete();
        }
        onHideComplete() {
            super.onHideComplete();
        }
    }

    class WindowWarUIStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "WindowWarUI"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_bg = (this.getChild("bg"));
            this.m_menuTopPanel = (this.getChild("menuTopPanel"));
            this.m_container = (this.getChild("container"));
            this.m_chectPopupPanel = (this.getChild("chectPopupPanel"));
        }
    }
    WindowWarUIStruct.URL = "ui://moe42ygrsqzy9c";
    WindowWarUIStruct.DependPackages = ["GameHome", "GameLaunch"];

    var CardScoreType;
    (function (CardScoreType) {
        CardScoreType[CardScoreType["None"] = 0] = "None";
        CardScoreType[CardScoreType["Hero"] = 1] = "Hero";
        CardScoreType[CardScoreType["Trap"] = 2] = "Trap";
        CardScoreType[CardScoreType["Enemy"] = 3] = "Enemy";
        CardScoreType[CardScoreType["Boss"] = 4] = "Boss";
        CardScoreType[CardScoreType["Warrior"] = 18] = "Warrior";
        CardScoreType[CardScoreType["Health"] = 5] = "Health";
        CardScoreType[CardScoreType["Gold"] = 6] = "Gold";
        CardScoreType[CardScoreType["Armor"] = 7] = "Armor";
        CardScoreType[CardScoreType["Cannon"] = 8] = "Cannon";
        CardScoreType[CardScoreType["Barrel"] = 9] = "Barrel";
        CardScoreType[CardScoreType["Chest"] = 10] = "Chest";
        CardScoreType[CardScoreType["Bomb"] = 11] = "Bomb";
        CardScoreType[CardScoreType["Poison"] = 12] = "Poison";
        CardScoreType[CardScoreType["Horseshoe"] = 13] = "Horseshoe";
        CardScoreType[CardScoreType["Lightning"] = 14] = "Lightning";
        CardScoreType[CardScoreType["Multiplier"] = 15] = "Multiplier";
        CardScoreType[CardScoreType["Skull"] = 16] = "Skull";
    })(CardScoreType || (CardScoreType = {}));

    var HeroType;
    (function (HeroType) {
        HeroType[HeroType["Base"] = 1] = "Base";
        HeroType[HeroType["Bomb"] = 2] = "Bomb";
        HeroType[HeroType["Gun"] = 3] = "Gun";
        HeroType[HeroType["Key"] = 4] = "Key";
    })(HeroType || (HeroType = {}));

    class GMath {
        static degToRad(deg) {
            return deg * GMath.DEG_TO_RAD;
        }
        static radToDeg(rad) {
            return rad * GMath.RAD_TO_DEG;
        }
        static getNextPowerOfTwo(v) {
            if (v > 0 && 0 == (v & v - 1))
                return v;
            for (var e = 1; e < v;)
                e <<= 1;
            return e;
        }
        static isPowerOfTwo(t, e) {
            return t > 0 && 0 == (t & t - 1) && e > 0 && 0 == (e & e - 1);
        }
        static random(t, e) {
            if (void 0 === t && (t = 0), void 0 === e && (e = 1), t === e)
                return t;
            if (t > e) {
                var i = t;
                t = e,
                    e = i;
            }
            return Math.random() * (e - t) + t;
        }
        static between(t, e) {
            if (void 0 === t && (t = 0), void 0 === e && (e = 1), t === e)
                return t;
            if (t > e) {
                var i = t;
                t = e,
                    e = i;
            }
            return t = Math.ceil(t),
                e = Math.floor(e),
                Math.floor(Math.random() * (e - t + 1)) + t;
        }
        static fuzzyEqual(t, e, i) {
            return void 0 === i && (i = 1e-4),
                Math.abs(t - e) < i;
        }
        static fuzzyLessThan(t, e, i) {
            return void 0 === i && (i = 1e-4),
                t < e + i;
        }
        static fuzzyGreaterThan(t, e, i) {
            return void 0 === i && (i = 1e-4),
                t > e - i;
        }
        static fuzzyCeil(t, e) {
            return void 0 === e && (e = 1e-4),
                Math.ceil(t - e);
        }
        static fuzzyFloor(t, e) {
            return void 0 === e && (e = 1e-4),
                Math.floor(t + e);
        }
        static average() {
            for (var t = 0, e = arguments.length, i = 0; i < e; i++)
                t += +arguments[i];
            return t / e;
        }
        static shear(t) {
            return t % 1;
        }
        static snapTo(t, e, i) {
            return void 0 === i && (i = 0),
                0 === e ? t : (t -= i, i + (t = e * Math.round(t / e)));
        }
        static snapToFloor(t, e, i) {
            return void 0 === i && (i = 0),
                0 === e ? t : (t -= i, i + (t = e * Math.floor(t / e)));
        }
        static snapToCeil(t, e, i) {
            return void 0 === i && (i = 0),
                0 === e ? t : (t -= i, i + (t = e * Math.ceil(t / e)));
        }
        static roundTo(t, e, i) {
            void 0 === e && (e = 0),
                void 0 === i && (i = 10);
            var s = Math.pow(i, -e);
            return Math.round(t * s) / s;
        }
        static floorTo(t, e, i) {
            void 0 === e && (e = 0),
                void 0 === i && (i = 10);
            var s = Math.pow(i, -e);
            return Math.floor(t * s) / s;
        }
        static ceilTo(t, e, i) {
            void 0 === e && (e = 0),
                void 0 === i && (i = 10);
            var s = Math.pow(i, -e);
            return Math.ceil(t * s) / s;
        }
        static trunc(t) {
            return isFinite(t) ? t - t % 1 || (t < 0 ? -0 : 0 === t ? t : 0) : t;
        }
        static rotateToAngle(e, i, s) {
            return void 0 === s && (s = .05),
                e === i ? e : (Math.abs(i - e) <= s || Math.abs(i - e) >= GMath.PI2 - s ? e = i : (Math.abs(i - e) > Math.PI && (i < e ? i += GMath.PI2 : i -= GMath.PI2), i > e ? e += s : i < e && (e -= s)), e);
        }
        static getShortestAngle(t, e) {
            var i = e - t;
            return 0 === i ? 0 : i - 360 * Math.floor((i - -180) / 360);
        }
        static angleBetween(t, e, i, s) {
            return Math.atan2(s - e, i - t);
        }
        static angleBetweenY(t, e, i, s) {
            return Math.atan2(i - t, s - e);
        }
        static angleBetweenPoints(t, e) {
            return Math.atan2(e.y - t.y, e.x - t.x);
        }
        static angleBetweenPointsY(t, e) {
            return Math.atan2(e.x - t.x, e.y - t.y);
        }
        static reverseAngle(t) {
            return this.normalizeAngle(t + Math.PI);
        }
        static normalizeAngle(t) {
            return (t %= 2 * Math.PI) >= 0 ? t : t + 2 * Math.PI;
        }
        static maxAdd(t, e, i) {
            return Math.min(t + e, i);
        }
        static minSub(t, e, i) {
            return Math.max(t - e, i);
        }
        static wrap(t, e, i) {
            var s = i - e;
            if (s <= 0)
                return 0;
            var n = (t - e) % s;
            return n < 0 && (n += s),
                n + e;
        }
        static wrapValue(t, e, i) {
            return ((t = Math.abs(t)) + (e = Math.abs(e))) % (i = Math.abs(i));
        }
        static isOdd(t) {
            return !!(1 & t);
        }
        static isEven(t) {
            return !(1 & t);
        }
        static min() {
            if (1 === arguments.length && "object" == typeof arguments[0])
                t = arguments[0];
            else
                var t = arguments;
            for (var e = 1, i = 0, s = t.length; e < s; e++)
                t[e] < t[i] && (i = e);
            return t[i];
        }
        static max() {
            if (1 === arguments.length && "object" == typeof arguments[0])
                t = arguments[0];
            else
                var t = arguments;
            for (var e = 1, i = 0, s = t.length; e < s; e++)
                t[e] > t[i] && (i = e);
            return t[i];
        }
        static minProperty(t) {
            if (2 === arguments.length && "object" == typeof arguments[1])
                e = arguments[1];
            else
                var e = arguments.slice(1);
            for (var i = 1, s = 0, n = e.length; i < n; i++)
                e[i][t] < e[s][t] && (s = i);
            return e[s][t];
        }
        static maxProperty(t) {
            if (2 === arguments.length && "object" == typeof arguments[1])
                e = arguments[1];
            else
                var e = arguments.slice(1);
            for (var i = 1, s = 0, n = e.length; i < n; i++)
                e[i][t] > e[s][t] && (s = i);
            return e[s][t];
        }
        static wrapAngle(t, e) {
            return e ? this.wrap(t, -Math.PI, Math.PI) : this.wrap(t, -180, 180);
        }
        static linearInterpolation(t, e) {
            var i = t.length - 1, s = i * e, n = Math.floor(s);
            return e < 0 ? this.linear(t[0], t[1], s) : e > 1 ? this.linear(t[i], t[i - 1], i - s) : this.linear(t[n], t[n + 1 > i ? i : n + 1], s - n);
        }
        static bezierInterpolation(t, e) {
            for (var i = 0, s = t.length - 1, n = 0; n <= s; n++)
                i += Math.pow(1 - e, s - n) * Math.pow(e, n) * t[n] * this.bernstein(s, n);
            return i;
        }
        static catmullRomInterpolation(t, e) {
            var i = t.length - 1, s = i * e, n = Math.floor(s);
            return t[0] === t[i] ? (e < 0 && (n = Math.floor(s = i * (1 + e))), this.catmullRom(t[(n - 1 + i) % i], t[n], t[(n + 1) % i], t[(n + 2) % i], s - n)) : e < 0 ? t[0] - (this.catmullRom(t[0], t[0], t[1], t[1], -s) - t[0]) : e > 1 ? t[i] - (this.catmullRom(t[i], t[i], t[i - 1], t[i - 1], s - i) - t[i]) : this.catmullRom(t[n ? n - 1 : 0], t[n], t[i < n + 1 ? i : n + 1], t[i < n + 2 ? i : n + 2], s - n);
        }
        static linear(t, e, i) {
            return (e - t) * i + t;
        }
        static bernstein(t, e) {
            return this.factorial(t) / this.factorial(e) / this.factorial(t - e);
        }
        static factorial(t) {
            if (0 === t)
                return 1;
            for (var e = t; --t;)
                e *= t;
            return e;
        }
        static catmullRom(t, e, i, s, n) {
            var r = .5 * (i - t), o = .5 * (s - e), a = n * n;
            return (2 * e - 2 * i + r + o) * (n * a) + (-3 * e + 3 * i - 2 * r - o) * a + r * n + e;
        }
        static difference(t, e) {
            return Math.abs(t - e);
        }
        static roundAwayFromZero(t) {
            return t > 0 ? Math.ceil(t) : Math.floor(t);
        }
        static sinCosGenerator(t, e, i, s) {
            void 0 === e && (e = 1),
                void 0 === i && (i = 1),
                void 0 === s && (s = 1);
            for (var n = e, r = i, o = s * Math.PI / t, a = [], h = [], l = 0; l < t; l++)
                n += (r -= n * o) * o,
                    a[l] = r,
                    h[l] = n;
            return {
                sin: h,
                cos: a,
                length: t
            };
        }
        static hypot(t, e) {
            return Math.sqrt(t * t + e * e);
        }
        static distance(t, e, i, s) {
            var n = t - i, r = e - s;
            return Math.sqrt(n * n + r * r);
        }
        static distanceSq(t, e, i, s) {
            var n = t - i, r = e - s;
            return n * n + r * r;
        }
        static distancePow(t, e, i, s, n) {
            return void 0 === n && (n = 2),
                Math.sqrt(Math.pow(i - t, n) + Math.pow(s - e, n));
        }
        static clamp(v, min, max) {
            return v < min ? min : max < v ? max : v;
        }
        static clampBottom(val, min) {
            return val < min ? min : val;
        }
        static within(t, e, i) {
            return Math.abs(t - e) <= i;
        }
        static mapLinear(t, e, i, s, n) {
            return s + (t - e) * (n - s) / (i - e);
        }
        static smoothstep(t, e, i) {
            return (t = Math.max(0, Math.min(1, (t - e) / (i - e)))) * t * (3 - 2 * t);
        }
        static smootherstep(t, e, i) {
            return (t = Math.max(0, Math.min(1, (t - e) / (i - e)))) * t * t * (t * (6 * t - 15) + 10);
        }
        static sign(t) {
            return t < 0 ? -1 : t > 0 ? 1 : 0;
        }
        static percent(t, e, i) {
            return void 0 === i && (i = 0),
                t > e || i > e ? 1 : t < i || i > t ? 0 : (t - i) / e;
        }
    }
    GMath.PI2 = 2 * Math.PI;
    GMath.HALF_PI = .5 * Math.PI;
    GMath.DEG_TO_RAD = Math.PI / 180;
    GMath.RAD_TO_DEG = 180 / Math.PI;

    class ArrayUtils {
        static getRandomItem(arr, e, i) {
            if (null === arr)
                return null;
            void 0 === e && (e = 0),
                void 0 === i && (i = arr.length);
            var s = e + Math.floor(Math.random() * i);
            return void 0 === arr[s] ? null : arr[s];
        }
        static removeRandomItem(t, e, i) {
            if (null == t)
                return null;
            void 0 === e && (e = 0),
                void 0 === i && (i = t.length);
            var s = e + Math.floor(Math.random() * i);
            if (s < t.length) {
                var n = t.splice(s, 1);
                return void 0 === n[0] ? null : n[0];
            }
            return null;
        }
        static remove(t, e, i) {
            var s = t.length;
            if (!(e >= s || 0 === i)) {
                null == i && (i = 1);
                for (var n = s - i, r = e; r < n; ++r)
                    t[r] = t[r + i];
                t.length = n;
            }
        }
        static shuffle(t) {
            for (var e = t.length - 1; e > 0; e--) {
                var i = Math.floor(Math.random() * (e + 1)), s = t[e];
                t[e] = t[i],
                    t[i] = s;
            }
            return t;
        }
        static transposeMatrix(t) {
            for (var e = t.length, i = t[0].length, s = new Array(i), n = 0; n < i; n++) {
                s[n] = new Array(e);
                for (var r = e - 1; r > -1; r--)
                    s[n][r] = t[r][n];
            }
            return s;
        }
        static rotateMatrix(e, i) {
            if ("string" != typeof i && (i = (i % 360 + 360) % 360), 90 === i || -270 === i || "rotateLeft" === i)
                e = (e = ArrayUtils.transposeMatrix(e)).reverse();
            else if (-90 === i || 270 === i || "rotateRight" === i)
                e = e.reverse(),
                    e = ArrayUtils.transposeMatrix(e);
            else if (180 === Math.abs(i) || "rotate180" === i) {
                for (var s = 0; s < e.length; s++)
                    e[s].reverse();
                e = e.reverse();
            }
            return e;
        }
        static findClosest(t, e) {
            if (!e.length)
                return NaN;
            if (1 === e.length || t < e[0])
                return e[0];
            for (var i = 1; e[i] < t;)
                i++;
            var s = e[i - 1], n = i < e.length ? e[i] : Number.POSITIVE_INFINITY;
            return n - t <= t - s ? n : s;
        }
        static rotateRight(t) {
            var e = t.pop();
            return t.unshift(e),
                e;
        }
        static rotateLeft(t) {
            var e = t.shift();
            return t.push(e),
                e;
        }
        static numberArray(t, e) {
            null != e || (e = t, t = 0);
            for (var i = [], s = t; s <= e; s++)
                i.push(s);
            return i;
        }
        static numberArrayStep(e, i, s) {
            null != e || (e = 0),
                null != i || (i = e, e = 0),
                void 0 === s && (s = 1);
            for (var n = [], r = Math.max(GMath.roundAwayFromZero((i - e) / (s || 1)), 0), o = 0; o < r; o++)
                n.push(e),
                    e += s;
            return n;
        }
    }

    class CardScoreTypeHelper {
        static isCardScoreTypeNegative(cardScoreType) {
            return cardScoreType == CardScoreType.Trap ||
                cardScoreType == CardScoreType.Boss ||
                cardScoreType == CardScoreType.Enemy ||
                cardScoreType == CardScoreType.Poison;
        }
        static isCardScoreTypePositive(cardScoreType) {
            return cardScoreType == CardScoreType.Health ||
                cardScoreType == CardScoreType.Armor ||
                cardScoreType == CardScoreType.Cannon ||
                cardScoreType == CardScoreType.Horseshoe ||
                cardScoreType == CardScoreType.Lightning ||
                cardScoreType == CardScoreType.Skull;
        }
        static getRandomFromChest() {
            return ArrayUtils.getRandomItem(CardScoreTypeHelper.itemsFromChest);
        }
        static getRandomPowerUpFromBarrel() {
            return ArrayUtils.getRandomItem(CardScoreTypeHelper.itemsFromBarrel);
        }
        static getRandomPowerUp() {
            return ArrayUtils.getRandomItem(CardScoreTypeHelper.powerUps);
        }
    }
    CardScoreTypeHelper.itemsFromChest = [CardScoreType.Bomb, CardScoreType.Poison, CardScoreType.Horseshoe, CardScoreType.Lightning, CardScoreType.Multiplier, CardScoreType.Skull];
    CardScoreTypeHelper.itemsFromBarrel = [CardScoreType.Health, CardScoreType.Gold, CardScoreType.Armor, CardScoreType.Cannon];
    CardScoreTypeHelper.powerUps = [CardScoreType.Health, CardScoreType.Armor, CardScoreType.Cannon, CardScoreType.Barrel, CardScoreType.Gold];

    class GameStatus {
        static init() {
            if (this.currentHero == HeroType.Key) {
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
        }
        static load() {
            if (Game.localStorage.hasItem(this.DATE_KEY, false)) {
                this.data = Game.localStorage.getJSON(this.DATE_KEY);
            }
        }
        static save() {
            Game.localStorage.setJSON(this.DATE_KEY, this.data, false);
        }
        static get gold() {
            return this.data.gold;
        }
        static set gold(val) {
            this.data.gold = val;
            this.save();
        }
        static get bestGoldPerGame() {
            return this.data.bestGoldPerGame;
        }
        static set bestGoldPerGame(val) {
            this.data.bestGoldPerGame = val;
            this.save();
        }
        static get isTutorialSeen() {
            return this.data.isTutorialSeen;
        }
        static set isTutorialSeen(val) {
            this.data.isTutorialSeen = val;
            this.save();
        }
        static get isTutorialStep1Done() {
            return this.data.isTutorialSeen;
        }
        static set isTutorialStep1Done(val) {
            this.data.isTutorialStep1Done = val;
            this.save();
        }
        static get isTutorialStep2Done() {
            return this.data.isTutorialStep2Done;
        }
        static set isTutorialStep2Done(val) {
            this.data.isTutorialStep2Done = val;
            this.save();
        }
        static get isTutorialChestSeen() {
            return this.data.isTutorialChestSeen;
        }
        static set isTutorialChestSeen(val) {
            this.data.isTutorialChestSeen = val;
            this.save();
        }
        static get isBombHero() {
            return this.data.isBombHero;
        }
        static set isBombHero(val) {
            this.data.isBombHero = val;
            this.save();
        }
        static get isKeyHero() {
            return this.data.isKeyHero;
        }
        static set isKeyHero(val) {
            this.data.isKeyHero = val;
            this.save();
        }
        static get isGunHero() {
            return this.data.isGunHero;
        }
        static set isGunHero(val) {
            this.data.isGunHero = val;
            this.save();
        }
        static get isFourXFour() {
            return this.data.isFourXFour;
        }
        static set isFourXFour(val) {
            this.data.isFourXFour = val;
            this.save();
        }
        static get isHorseshoe() {
            return this.data.isHorseshoe;
        }
        static set isHorseshoe(val) {
            this.data.isHorseshoe = val;
            this.save();
        }
        static get isHeart() {
            return this.data.isHeart;
        }
        static set isHeart(val) {
            this.data.isHeart = val;
            this.save();
        }
        static get isLuck() {
            return this.data.isLuck;
        }
        static set isLuck(val) {
            this.data.isLuck = val;
            this.save();
        }
        static get isKey() {
            return this.data.isKey;
        }
        static set isKey(val) {
            this.data.isKey = val;
            this.save();
        }
        static get lastAdvCoolDown() {
            return this.data.lastAdvCoolDown;
        }
        static set lastAdvCoolDown(val) {
            this.data.lastAdvCoolDown = val;
            this.save();
        }
        static get lastResultAdvCoolDown() {
            return this.data.lastResultAdvCoolDown;
        }
        static set lastResultAdvCoolDown(val) {
            this.data.lastResultAdvCoolDown = val;
            this.save();
        }
        static get lastItemWithAdv() {
            return this.data.lastItemWithAdv;
        }
        static set lastItemWithAdv(val) {
            this.data.lastItemWithAdv = val;
            this.save();
        }
        static addGold(t) {
            this.goldPerGame += t;
            if (this.bestGoldPerGame < this.goldPerGame) {
                this.bestGoldPerGame = this.goldPerGame;
            }
        }
        static resetShop() {
            this.isHeart = false;
            this.isHorseshoe = false;
            this.isLuck = false;
            this.isKey = false;
        }
        static updateMovesAfterSpecialCard(cardScoreType) {
            if (cardScoreType == CardScoreType.Health
                || cardScoreType == CardScoreType.Armor) {
                this.movesAfterLastSpecialCard = 0;
            }
            else {
                this.movesAfterLastSpecialCard++;
            }
        }
        static updateCardCounter(cardScoreType) {
            if (CardScoreTypeHelper.isCardScoreTypeNegative(cardScoreType)) {
                this.cardCounter--;
            }
            if (CardScoreTypeHelper.isCardScoreTypePositive(cardScoreType)) {
                this.cardCounter++;
            }
        }
        static stepUpdate() {
            if (this.isBossShouldBeCreated()) {
                this.isNeedCreateBoss = true;
                this.levelStep++;
                this.turnsToBoss = this.levelStep + 1;
                console.log("需要创建Bosss");
            }
        }
        static isBossShouldBeCreated() {
            return !this.isNeedCreateBoss && 1 == this.turnsToBoss;
        }
        static decreaseTurnsToBoss() {
            return this.turnsToBoss && this.turnsToBoss--;
        }
    }
    GameStatus.DATE_KEY = "GameStatus";
    GameStatus.data = {
        gold: 0,
        bestGoldPerGame: 0,
        isTutorialSeen: false,
        isTutorialStep1Done: false,
        isTutorialStep2Done: false,
        isTutorialChestSeen: false,
        isBombHero: false,
        isKeyHero: false,
        isGunHero: false,
        isFourXFour: false,
        isHorseshoe: false,
        isHeart: false,
        isLuck: false,
        isKey: false,
        lastAdvCoolDown: 0,
        lastItemWithAdv: 0,
        lastResultAdvCoolDown: 0
    };
    GameStatus.gameLevel = 1;
    GameStatus.levelStep = 10;
    GameStatus.turnsToBoss = 10;
    GameStatus.goldPerGame = 0;
    GameStatus.cardCounter = 0;
    GameStatus.isNeedCreateBoss = false;
    GameStatus.isNeedCreateChest = false;
    GameStatus.currentHero = HeroType.Base;
    GameStatus.RowCount = 3;
    GameStatus.ColumnCount = 3;
    GameStatus.isHeroAlive = false;
    GameStatus.isGameEnd = false;
    GameStatus.isNeedCreateChestOnNextStep = false;
    GameStatus.movesAfterLastSpecialCard = 0;
    window['GameStatus'] = GameStatus;

    class SoundController {
        static get instance() {
            if (!this._instance) {
                this._instance = new SoundController();
            }
            return this._instance;
        }
        playSound(key) {
            var path = `res/sounds/mp3/${key}.mp3`;
            Laya.SoundManager.playSound(path, 1);
        }
    }

    class SoundConsts {
    }
    SoundConsts.Click = "click";
    SoundConsts.Barrel1 = "barrel1";
    SoundConsts.Barrel2 = "barrel2";
    SoundConsts.Bomb = "bomb";
    SoundConsts.BossAppearance = "bossAppearance";
    SoundConsts.Buy = "buy";
    SoundConsts.Cannon = "cannon";
    SoundConsts.Card = "card";
    SoundConsts.ChestOpening = "chestOpening";
    SoundConsts.Coin = "coin";
    SoundConsts.CoinsBag = "coinsBag";
    SoundConsts.CoinsCounting = "coinsCounting";
    SoundConsts.Health1 = "health1";
    SoundConsts.Health2 = "health2";
    SoundConsts.HeroDies = "heroDies";
    SoundConsts.Hit1 = "hit1";
    SoundConsts.Hit2 = "hit2";
    SoundConsts.Horseshoe = "horseshoe";
    SoundConsts.Idol = "idol";
    SoundConsts.IncorrectClick = "incorrectClick";
    SoundConsts.Lighting = "lighting";
    SoundConsts.Melody = "melody";
    SoundConsts.PickLockFail = "picklockFail";
    SoundConsts.PickLockNeutral = "picklockNeutral";
    SoundConsts.PickLockSuccess = "picklockSuccess";
    SoundConsts.Poison = "poison";
    SoundConsts.Revive = "revive";
    SoundConsts.ShieldMetal = "shieldMetal";
    SoundConsts.ShieldWood = "shieldWood";
    SoundConsts.Skull = "skull";
    SoundConsts.Move01 = "move01";
    SoundConsts.Move02 = "move02";
    SoundConsts.Trap = "trap";

    class FxShootLightningBigStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "FxShootLightningBig"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_fx = (this.getChild("fx"));
        }
    }
    FxShootLightningBigStruct.URL = "ui://moe42ygrsqzyai";
    FxShootLightningBigStruct.DependPackages = ["GameHome"];

    class FxShootLightningSmallStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "FxShootLightningSmall"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_fx = (this.getChild("fx"));
        }
    }
    FxShootLightningSmallStruct.URL = "ui://moe42ygrsqzyal";
    FxShootLightningSmallStruct.DependPackages = ["GameHome"];

    class FxShootLightningSmall extends FxShootLightningSmallStruct {
        static PoolGet() {
            var item = Pool.getItem(this.URL);
            if (!item) {
                item = FxShootLightningSmall.createInstance();
            }
            return item;
        }
        PoolRecover() {
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this.m_fx);
            this.removeFromParent();
            this.m_fx.playing = false;
            Pool.recover(FxShootLightningSmall.URL, this);
        }
        Play() {
            this.m_fx.frame = 0;
            this.m_fx.playing = true;
            this.alpha = 0;
            var tweenContainer = TweenContainer.PoolGet();
            var tween = TweenUtil.to(this.m_fx, { alpha: 1 }, 1);
            tweenContainer.tweens.push(tween);
            var tween = TweenUtil.to(this, { alpha: 0 }, 1, null, null, 102);
            tweenContainer.tweens.push(tween);
            Laya.timer.once(103, this, this.PoolRecover);
            tweenContainer.restart();
            return tweenContainer;
        }
    }

    class RandomHelper {
        static getRandomIntInclusive(min, max) {
            return min = Math.ceil(min),
                max = Math.floor(max),
                Math.floor(Math.random() * (max - min + 1)) + min;
        }
        static getRandomBool() {
            return Math.random() > 0.5;
        }
        static shuffle(list) {
            for (var e, i, o = list.length; 0 !== o;)
                i = Math.floor(Math.random() * o),
                    e = list[o -= 1],
                    list[o] = list[i],
                    list[i] = e;
            return list;
        }
    }

    class FxShootLightningBig extends FxShootLightningBigStruct {
        static PoolGet() {
            var item = Pool.getItem(this.URL);
            if (!item) {
                item = FxShootLightningBig.createInstance();
            }
            return item;
        }
        PoolRecover() {
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this.m_fx);
            this.removeFromParent();
            this.m_fx.playing = false;
            Pool.recover(FxShootLightningBig.URL, this);
        }
        Play() {
            this.m_fx.frame = 0;
            this.m_fx.playing = true;
            this.m_fx.alpha = 0;
            this.m_fx.y = 20;
            var tweenContainer = TweenContainer.PoolGet();
            var tween = TweenUtil.to(this.m_fx, { alpha: 1 }, 50);
            tweenContainer.tweens.push(tween);
            var tween = TweenUtil.to(this.m_fx, { y: -20 }, 200, null, null, 50);
            tweenContainer.tweens.push(tween);
            var tween = TweenUtil.to(this.m_fx, { alpha: 0 }, 50, null, null, 50 + 200);
            tweenContainer.tweens.push(tween);
            tweenContainer.onStart.addOnce(this.onStart, this);
            Laya.timer.once(50 + 200 + 50, this, this.PoolRecover);
            return tweenContainer;
        }
        onStart() {
            if (this.parent) {
                var fx = FxShootLightningSmall.PoolGet();
                var x = Consts.CardWidth / 2 - 20;
                var y = Consts.CardHeight / 2 - 20;
                RandomHelper.getRandomBool() && (x = -x);
                RandomHelper.getRandomBool() && (y = -y);
                this.parent.addChild(fx);
                fx.setXY(this.x, this.y);
                fx.m_fx.setXY(x, y);
                fx.Play();
            }
        }
    }

    class Card {
        constructor() {
            this.type = CardScoreType.None;
            this.isOnClickInitiated = false;
            this.powerUpAmount = 0;
            this.lifeAmount = 0;
            this.initialLife = 0;
            this.currentLife = 0;
            this.isOpen = false;
            this.canLightningStrike = false;
            this.view = CardView.PoolGet();
            this.reset();
        }
        static GetDefault(game) {
            console.log("Card 创建空牌");
            var card = Pool.createByClass(Card);
            card.game = game;
            card.type = CardScoreType.None;
            card.SetEmpty();
            return card;
        }
        static GetNew(game, cardScoreType, level, score) {
            console.log("Card 创建", cardScoreType);
            var config = Game.config.card.getTypeLevelConfig(cardScoreType, level);
            if (config == null) {
                console.error("没有找到卡牌配置", cardScoreType, level, score);
            }
            var card = Pool.createByClass(Card);
            card.game = game;
            card.type = cardScoreType;
            card.SetConfig(config);
            card.setScore(score),
                GameStatus.updateCardCounter(cardScoreType),
                GameStatus.updateMovesAfterSpecialCard(cardScoreType);
            return card;
        }
        poolRecover() {
            this.reset();
            Pool.recoverByClass(this);
        }
        reset() {
            this.view.setXY(-100, -400);
            this.view.setScale(1, 1);
            this.isOnClickInitiated = false;
            this.powerUpAmount = 0;
            this.lifeAmount = 0;
            this.initialLife = 0;
            this.currentLife = 0;
            this.isOpen = false;
            this.canLightningStrike = false;
        }
        SetEmpty() {
            this.SetConfig(null);
        }
        SetConfig(config) {
            this.config = config;
            this.view.game = this.game;
            this.view.SetConfig(config);
            this.view.SetCard(this);
        }
        get isEmpty() {
            return this.type == CardScoreType.None;
        }
        get isHero() {
            return this.type == CardScoreType.Hero;
        }
        get isBoss() {
            return this.type == CardScoreType.Boss;
        }
        get isTrap() {
            return this.type == CardScoreType.Trap;
        }
        get level() {
            return this.config.level;
        }
        stepUpdate() {
            if (this.isTrap) {
                var isOpened = this.changeStatus();
                var isGrun = GameStatus.currentHero == HeroType.Gun;
                this.lifeAmount = isGrun ? 0 : isOpened ? this.powerUpAmount : 0;
                this.currentLife = this.lifeAmount;
                this.setHealthText();
            }
            this.type == CardScoreType.Poison && this.setPowerUp(this.powerUpAmount + 1),
                this.type == CardScoreType.Bomb && this.setPowerUp(this.powerUpAmount - 1),
                this.type == CardScoreType.Barrel && this.powerUpAmount > 2 && this.setPowerUp(this.powerUpAmount - 1);
        }
        changeStatus() {
            if (this.isOpen) {
                this.view.setClose();
                this.isOpen = false;
            }
            else {
                this.view.setClose();
                this.isOpen = true;
            }
            return this.isOpen;
        }
        getScore() {
            return this.type == CardScoreType.Trap ? this.lifeAmount : this.lifeAmount + this.powerUpAmount;
        }
        getLife() {
            return this.lifeAmount;
        }
        getPowerUp() {
            return this.powerUpAmount;
        }
        multiplyScore(mul) {
            if (this.lifeAmount > 0) {
                this.increaseLife(this.lifeAmount * mul);
                var tween = this.view.tweenLife();
                tween.onComplete.addOnce(() => {
                    this.increaseLife(mul);
                }, this);
                return tween;
            }
            else if (this.powerUpAmount > 0) {
                var tween = this.view.tweenLife();
                tween.onComplete.addOnce(() => {
                    this.increasePowerUp(mul);
                }, this);
                return tween;
            }
            else {
                return null;
            }
        }
        increaseLife(mul) {
            this.setLife(this.lifeAmount * mul);
            this.type === CardScoreType.Trap && this.setPowerUp(this.powerUpAmount * mul);
        }
        increasePowerUp(mul) {
            this.setPowerUp(this.powerUpAmount * mul);
        }
        reduceScoreInNSeconds(score, delay) {
            if (this.powerUpAmount > 0) {
                this.powerUpAmount = this.powerUpAmount - score;
                setTimeout(this.setPowerUpText.bind(this), delay);
            }
            if (this.lifeAmount > 0) {
                this.lifeAmount = this.lifeAmount - score;
                setTimeout(this.setHealthText.bind(this), delay);
            }
        }
        increaseScoreInNSeconds(score, delay) {
            if (this.powerUpAmount > 0) {
                this.powerUpAmount = this.powerUpAmount + score;
                setTimeout(this.increasePowerUpTween.bind(this), delay);
            }
            if (this.lifeAmount > 0) {
                this.lifeAmount = this.lifeAmount + score;
                setTimeout(this.increaseLifeTween.bind(this), delay);
            }
        }
        increasePowerUpTween() {
            var tweenContainer = this.view.tweenPowerUp();
            tweenContainer.restart();
        }
        increaseLifeTween() {
            var tweenContainer = this.view.tweenLife();
            tweenContainer.restart();
        }
        setScore(score) {
            switch (this.type) {
                case CardScoreType.Boss:
                case CardScoreType.Enemy:
                    this.initialLife = score;
                    this.currentLife = score;
                    this.setLife(score);
                    break;
                case CardScoreType.Gold:
                case CardScoreType.Health:
                case CardScoreType.Armor:
                case CardScoreType.Poison:
                case CardScoreType.Cannon:
                case CardScoreType.Lightning:
                case CardScoreType.Multiplier:
                case CardScoreType.Skull:
                case CardScoreType.Barrel:
                    this.setPowerUp(score);
                    break;
                case CardScoreType.Bomb:
                    this.setLife(score),
                        this.setPowerUp(10);
                    break;
                case CardScoreType.Trap:
                    this.setPowerUp(score),
                        this.setLife(score);
                    break;
                case CardScoreType.Chest:
                    break;
                case CardScoreType.Horseshoe:
                    this.setPowerUp(1);
            }
        }
        setPowerUp(t) {
            this.powerUpAmount = t,
                this.setPowerUpText();
        }
        setLife(val) {
            if (val != undefined) {
                this.lifeAmount = val;
            }
            this.setHealthText();
        }
        setHealthText() {
            this.view.setHealthText();
        }
        setPowerUpText() {
            this.view.setPowerUpText();
        }
        isNegative() {
            switch (this.type) {
                case CardScoreType.Trap:
                case CardScoreType.Bomb:
                case CardScoreType.Poison:
                    return true;
                case CardScoreType.Health:
                case CardScoreType.Gold:
                case CardScoreType.Armor:
                case CardScoreType.Cannon:
                case CardScoreType.Chest:
                case CardScoreType.Barrel:
                case CardScoreType.Horseshoe:
                case CardScoreType.Lightning:
                case CardScoreType.Multiplier:
                case CardScoreType.Skull:
                case CardScoreType.Hero:
                    return false;
            }
        }
        getGoldValue() {
            return this.initialLife;
        }
        moveTo(point, time) {
            this.game.container.addChild(this.view);
            return TweenUtil.to(this.view, point, time);
        }
        setCoordinate(point) {
            this.game.container.addChild(this.view);
            this.view.setXY(point.x, point.y);
        }
        open() {
            return null;
        }
        endTurnAnimationStart() {
            this.view.setScale(0, Consts.FlipZoom);
        }
        startTurnAnimation(endCallback, endCaller) {
            var tweenContainer = TweenHelper.turnAnimationStart(null, this.view);
            tweenContainer.onStart.add(this.playCardSoundInSeconds, this);
            tweenContainer.onComplete.add(this.removeShapeFromStage, this);
            tweenContainer.onComplete.add(endCallback, endCaller);
            return tweenContainer;
        }
        playCardSoundInSeconds() {
            setTimeout(this.playCardSound.bind(this), 50);
        }
        playCardSound() {
            SoundController.instance.playSound(SoundConsts.Card);
        }
        endTurnAnimationEnd() {
            if (this.isBoss) {
                SoundController.instance.playSound(SoundConsts.BossAppearance);
            }
            this.view.scaleX = 0.1;
            TweenHelper.turnAnimationEnd(null, this.view).restart();
        }
        getScaleTween(view, tweenContainer) {
            if (!tweenContainer) {
                tweenContainer = TweenContainer.PoolGet();
            }
            var tween = TweenUtil.to(view, { scaleX: 2.5, scaleY: 2.5 }, 200);
            tweenContainer.tweens.push(tween);
            tween = TweenUtil.to(view, { scaleX: 1, scaleY: 1 }, 200, null, null, 200);
            tweenContainer.tweens.push(tween);
            return tweenContainer;
        }
        removeChild() {
            var tweenContainer = TweenContainer.PoolGet();
            var tween = TweenUtil.to(this.view, { scaleX: 1.1, scaleY: 1.1 }, 50);
            tweenContainer.tweens.push(tween);
            tween = TweenUtil.to(this.view, { scaleX: 1, scaleY: 1 }, 50, null, null, 50);
            tweenContainer.tweens.push(tween);
            tween = TweenUtil.to(this.view, { scaleX: 1.1, scaleY: 1.1 }, 50, null, null, 50 + 50);
            tweenContainer.tweens.push(tween);
            tween = TweenUtil.to(this.view, { scaleX: 0, scaleY: 0 }, 80, null, Laya.Handler.create(this, this.removeShapeFromStage), 50 + 50 + 50);
            tweenContainer.tweens.push(tween);
            return tweenContainer;
        }
        removeShapeFromStage() {
            console.log("Card 移除", this);
            this.view.removeFromParent();
            this.delayPoolRecover();
        }
        delayPoolRecover() {
            Laya.timer.frameOnce(1, this, this.poolRecover);
        }
        getCenterX() {
            return this.view.x;
        }
        getCenterY() {
            return this.view.y;
        }
        runLightning() {
            var fx = FxShootLightningBig.PoolGet();
            fx.setXY(this.getCenterX(), this.getCenterY());
            this.game.container.addChild(fx);
            return fx.Play();
        }
    }

    var MoveType;
    (function (MoveType) {
        MoveType[MoveType["Right"] = 1] = "Right";
        MoveType[MoveType["Down"] = 2] = "Down";
        MoveType[MoveType["Left"] = 3] = "Left";
        MoveType[MoveType["Up"] = 4] = "Up";
    })(MoveType || (MoveType = {}));

    class Point$1 {
        constructor(x, y) {
            this.x = 0;
            this.y = 0;
            this.x = x;
            this.y = y;
        }
    }

    class FieldPosition {
        constructor(column, row) {
            this.column = 0;
            this.row = 0;
            this.column = column;
            this.row = row;
        }
        getNewPosition(moveType) {
            var fieldPosition = new FieldPosition(this.column, this.row);
            switch (moveType) {
                case MoveType.Right:
                    fieldPosition.column++;
                    break;
                case MoveType.Down:
                    fieldPosition.row++;
                    break;
                case MoveType.Left:
                    fieldPosition.column--;
                    break;
                case MoveType.Up:
                    fieldPosition.row--;
            }
            return fieldPosition;
        }
        getPoint() {
            return new Point$1(this.pointX, this.pointY);
        }
        get pointX() {
            return this.column * Consts.CardWidth + Consts.CardWidth / 2 + this.column * Consts.CardSpaceBetweenWidth;
        }
        get pointY() {
            return this.row * Consts.CardHeight + Consts.CardHeight / 2 + this.row * Consts.CardSpaceBetweenHeight;
        }
    }

    class FieldItems {
        constructor(columnCount = 3, rowCount = 3, game) {
            this.columnCount = 3;
            this.rowCount = 3;
            this.columnCount = columnCount;
            this.rowCount = rowCount;
            this.game = game;
            this.initArray();
        }
        initArray() {
            this.items = [];
            for (var y = 0; y < this.rowCount; y++) {
                var rowItems = [];
                for (var x = 0; x < this.columnCount; x++) {
                    rowItems.push(Card.GetDefault(this.game));
                }
                this.items.push(rowItems);
            }
        }
        getColumnCount() {
            return this.columnCount;
        }
        getRowCount() {
            return this.rowCount;
        }
        getAll() {
            var list = [];
            for (var y = 0; y < this.rowCount; y++) {
                for (var x = 0; x < this.columnCount; x++) {
                    list.push(this.items[x][y]);
                }
            }
            return list;
        }
        findHeroCard() {
            var item;
            for (var y = 0; y < this.rowCount; y++) {
                for (var x = 0; x < this.columnCount; x++) {
                    item = this.items[x][y];
                    if (item.isHero) {
                        return item;
                    }
                }
            }
            return null;
        }
        findHeroPosition() {
            var item;
            for (var y = 0; y < this.rowCount; y++) {
                for (var x = 0; x < this.columnCount; x++) {
                    item = this.items[x][y];
                    if (item.isHero) {
                        return new FieldPosition(x, y);
                    }
                }
            }
            return null;
        }
        findPosition(card) {
            var item;
            for (var y = 0; y < this.rowCount; y++) {
                for (var x = 0; x < this.columnCount; x++) {
                    item = this.items[x][y];
                    if (item == card) {
                        var filedPosition = new FieldPosition(x, y);
                        return filedPosition;
                    }
                }
            }
            return null;
        }
        getPosition(filterFun) {
            for (var y = 0; y < this.rowCount; y++) {
                for (var x = 0; x < this.columnCount; x++) {
                    var filedPosition = new FieldPosition(x, y);
                    if (filterFun(this.get(filedPosition))) {
                        return filedPosition;
                    }
                }
            }
            return null;
        }
        getPositions(filterFun) {
            var list = [];
            for (var y = 0; y < this.rowCount; y++) {
                for (var x = 0; x < this.columnCount; x++) {
                    var fieldPosition = new FieldPosition(x, y);
                    if (filterFun(this.get(fieldPosition))) {
                        list.push(fieldPosition);
                    }
                }
            }
            return list;
        }
        get(f) {
            return this.items[f.column][f.row];
        }
        set(f, card) {
            this.items[f.column][f.row] = card;
        }
        any(filterFun) {
            for (var y = 0; y < this.rowCount; y++) {
                for (var x = 0; x < this.columnCount; x++) {
                    var n = new FieldPosition(x, y);
                    if (filterFun(this.get(n))) {
                        return true;
                    }
                }
            }
            return false;
        }
        isPositionValid(f) {
            return f.column >= 0 && f.column < this.columnCount && f.row >= 0 && f.row < this.rowCount;
        }
    }

    var CardGenerationType;
    (function (CardGenerationType) {
        CardGenerationType[CardGenerationType["Random"] = 1] = "Random";
        CardGenerationType[CardGenerationType["AfterChest"] = 2] = "AfterChest";
        CardGenerationType[CardGenerationType["AfterBarrel"] = 3] = "AfterBarrel";
        CardGenerationType[CardGenerationType["Positive"] = 4] = "Positive";
    })(CardGenerationType || (CardGenerationType = {}));

    var CardPositionType;
    (function (CardPositionType) {
        CardPositionType[CardPositionType["Start"] = 1] = "Start";
        CardPositionType[CardPositionType["Center"] = 2] = "Center";
        CardPositionType[CardPositionType["End"] = 3] = "End";
    })(CardPositionType || (CardPositionType = {}));

    class FightResult {
        constructor(isHeroAlive, isChest, isMove) {
            this.isHeroAlive = isHeroAlive,
                this.isChest = isChest,
                this.isMove = isMove;
        }
    }

    class ArtConsts {
    }
    ArtConsts.Items1 = "Items1";
    ArtConsts.Items2 = "Items2";
    ArtConsts.Barrel = "Barrel";
    ArtConsts.Background = "background";
    ArtConsts.BackgroundMenu = "backgroundMenu";
    ArtConsts.BackgroundPause = "backgroundPause";
    ArtConsts.FamobiLogo = "famobiLogo";
    ArtConsts.PauseLogo = "PauseLogo";
    ArtConsts.Skull = "skull";
    ArtConsts.SkullLight = "skull_light";
    ArtConsts.MenuStar = "menuStar";
    ArtConsts.MenuLogo = "menuLogo";
    ArtConsts.Loading = "loading";
    ArtConsts.ChoiceBackground = "choiceBackground";
    ArtConsts.Lock = "lock";
    ArtConsts.CoinPanel = "coinPanel";
    ArtConsts.ThreeXThree = "ThreeXThree";
    ArtConsts.FourXFour = "FourXFour";
    ArtConsts.CardBackground = "cardBackrounds";
    ArtConsts.NoAccess = "noAccess";
    ArtConsts.Boss = "boss";
    ArtConsts.Enemy = "enemy";
    ArtConsts.Shield = "shields";
    ArtConsts.CardLifeCircle = "cardLifeCircle";
    ArtConsts.CardPowerUpCircle = "cardPowerUpCircle";
    ArtConsts.SmallRing = "smallRing";
    ArtConsts.BigRing = "bigRing";
    ArtConsts.Hero = "hero";
    ArtConsts.HeroBomb = "heroBomb";
    ArtConsts.HeroKey = "heroKey";
    ArtConsts.HeroGun = "heroGun";
    ArtConsts.Health = "health";
    ArtConsts.Coin = "coin";
    ArtConsts.CoinBag = "coinBag";
    ArtConsts.Cannon = "cannon";
    ArtConsts.BombFlame = "bomb_flame";
    ArtConsts.GameStatusPanel = "menuPanel";
    ArtConsts.SmallBtnBackground = "smallBtnBackground";
    ArtConsts.BigBtnBackground = "bigBtnBackground";
    ArtConsts.SoundBtn = "soundBtn";
    ArtConsts.PauseBtn = "pauseBtn";
    ArtConsts.HomeBtn = "homeBtn";
    ArtConsts.HomeSmallBtn = "homeBtnSmall";
    ArtConsts.GroupBtn = "groupBtn";
    ArtConsts.NextBtn = "nextBtn";
    ArtConsts.PrevBtn = "prevBtn";
    ArtConsts.PlayBtn = "playBtn";
    ArtConsts.PlusBtn = "plusBtn";
    ArtConsts.ResumeBtn = "resumeBtn";
    ArtConsts.SettingsBtn = "settingsBtn";
    ArtConsts.ControlBtn = "controlBtn";
    ArtConsts.AdvPlayBtn = "advPlayBtn";
    ArtConsts.IBtn = "iBtn";
    ArtConsts.Shadow = "shadow";
    ArtConsts.ShopItemBackground = "shopItemBackground";
    ArtConsts.BigHeart = "heartBig";
    ArtConsts.BigHorseshoe = "horseshoeBig";
    ArtConsts.BigLuck = "luckBig";
    ArtConsts.Key2 = "key2";
    ArtConsts.Key3 = "key3";
    ArtConsts.Key4 = "key4";
    ArtConsts.SmallHeart = "heartSmall";
    ArtConsts.SmallHorseshoe = "horseshoeSmall";
    ArtConsts.SmallLuck = "luckSmall";
    ArtConsts.SmallKey = "key_small";
    ArtConsts.Medal = "medal";
    ArtConsts.Trap = "trap";
    ArtConsts.Chest = "chest";
    ArtConsts.LockBody = "lockBody";
    ArtConsts.LockBridge = "lockBridge";
    ArtConsts.LockSwitch = "lockSwitch";
    ArtConsts.LockArrow = "lockArrow";
    ArtConsts.LockRod = "lockRod";
    ArtConsts.LockDoubleRod = "lockDoubleRod";
    ArtConsts.LockBomb = "lockBomb";
    ArtConsts.LockBombLamp = "lockBombLamp";
    ArtConsts.LockFixedRod = "lockFixedRod";
    ArtConsts.LockDoubleFixedRod = "lockDoubleFixedRod";
    ArtConsts.MouseClick = "mouse_click";
    ArtConsts.Core = "core";
    ArtConsts.Smoke1 = "smoke_1";
    ArtConsts.Smoke2 = "smoke_2";
    ArtConsts.Smoke3 = "smoke_3";
    ArtConsts.Smoke4 = "smoke_4";
    ArtConsts.Smoke5 = "smoke_5";
    ArtConsts.Bomb = "bomb";
    ArtConsts.Poison = "poison";
    ArtConsts.Boom = "boom";
    ArtConsts.Lightning = "lightning";
    ArtConsts.BigLightning = "lightning_1";
    ArtConsts.SmallLightning = "lightning_2";
    ArtConsts.Multiplier2 = "multiplier2";
    ArtConsts.Multiplier3 = "multiplier3";
    ArtConsts.Dust = "dust";
    ArtConsts.BarrelIronDot = "barrelIronDot";
    ArtConsts.BarrelIron = "barrelIron";
    ArtConsts.BarrelCircleDark = "barrelCircleDark";
    ArtConsts.BarrelCircleLight = "barrelCircleLight";
    ArtConsts.BarrelBoardRight1 = "barrelBoardRight1";
    ArtConsts.BarrelBoardRight2 = "barrelBoardRight2";
    ArtConsts.BarrelBoard1 = "barrelBoard1";
    ArtConsts.BarrelBoard2 = "barrelBoard2";
    ArtConsts.BarrelBoard3 = "barrelBoard3";
    ArtConsts.BarrelBoard4 = "barrelBoard4";
    ArtConsts.BarrelBoard5 = "barrelBoard5";
    ArtConsts.BarrelBoard6 = "barrelBoard6";
    ArtConsts.BarrelBoard7 = "barrelBoard7";
    ArtConsts.BarrelBoard8 = "barrelBoard8";
    ArtConsts.BarrelBoard9 = "barrelBoard9";
    ArtConsts.BarrelBoard10 = "barrelBoard10";
    ArtConsts.BarrelBoardStraight1 = "barrelBoardStraight1";
    ArtConsts.BarrelBoardStraight2 = "barrelBoardStraight2";
    ArtConsts.Enemy9Vane = "enemy_9_vane";
    ArtConsts.Enemy9Pipe = "enemy_9_pipe";
    ArtConsts.TurnsToBoss = "turnsToBoss";
    ArtConsts.CheckMark = "check";
    ArtConsts.Arm = "arm";
    ArtConsts.MoreGames = "more_games";
    ArtConsts.BigPlayBtn = "bigPlayBtn";
    ArtConsts.AdvPanel = "advPanel";
    ArtConsts.Smile = "smile";
    ArtConsts.NoIcon = "noIcon";

    class Hero extends Card {
        constructor() {
            super(...arguments);
            this.armor = 0;
            this.totalLife = 0;
            this.needRunLightning = false;
            this.lightningScore = 0;
            this.needShoot = false;
            this.shootScore = 0;
            this.needShootMultiplier = false;
            this.multiplierScore = 0;
            this.needShootSkull = false;
        }
        fight(card) {
            var fightResult = new FightResult(true, false, true);
            switch (card.type) {
                case CardScoreType.Trap:
                    if (card.getLife() > 0 && GameStatus.currentHero != HeroType.Gun) {
                        SoundController.instance.playSound(SoundConsts.Trap);
                        if (this.currentLife > card.getScore()) {
                            this.currentLife -= card.getScore();
                            GameStatus.addGold(card.getScore());
                            fightResult.isHeroAlive = true;
                        }
                        else {
                            fightResult.isHeroAlive = false;
                        }
                    }
                    break;
                case CardScoreType.Boss:
                case CardScoreType.Enemy:
                    SoundController.instance.playSound(ArrayUtils.getRandomItem([SoundConsts.Hit1, SoundConsts.Hit2]));
                    fightResult.isHeroAlive = this.fightWithEnemy(card);
                    if (fightResult.isHeroAlive && card.isBoss) {
                        fightResult.isNeedIncreaseLifeByOneAfterBoss = true;
                    }
                    break;
                case CardScoreType.Armor:
                    card.getScore(),
                        SoundController.instance.playSound(SoundConsts.ShieldWood);
                    if (GameStatus.currentHero == HeroType.Gun) {
                        this.needSmashLightning(card.getScore());
                    }
                    else {
                        if (this.armor < card.getScore()) {
                            this.armor = card.getScore();
                            this.setArmorFrame(card);
                        }
                        else if (GameStatus.currentHero == HeroType.Base) {
                            this.armor++;
                        }
                    }
                    break;
                case CardScoreType.Gold:
                    if (card.level == 1) {
                        SoundController.instance.playSound(SoundConsts.Coin);
                    }
                    else {
                        SoundController.instance.playSound(SoundConsts.CoinsBag);
                    }
                    GameStatus.addGold(card.getScore());
                    break;
                case CardScoreType.Health:
                    SoundController.instance.playSound(ArrayUtils.getRandomItem([SoundConsts.Health1, SoundConsts.Health2]));
                    this.currentLife += card.getScore();
                    if (this.currentLife > this.totalLife) {
                        this.currentLife = this.totalLife;
                    }
                    break;
                case CardScoreType.Cannon:
                    this.needShoot = true,
                        this.shootScore = card.getScore();
                    break;
                case CardScoreType.Chest:
                    fightResult.isChest = true;
                    break;
                case CardScoreType.Poison:
                    SoundController.instance.playSound(SoundConsts.Poison);
                    if (GameStatus.isLuck) {
                        fightResult.isHeroAlive = true;
                        this.useLuck();
                        return fightResult;
                    }
                    if (card.getScore() >= this.currentLife) {
                        fightResult.isHeroAlive = false;
                        return fightResult;
                    }
                    this.currentLife -= card.getScore();
                    break;
                case CardScoreType.Horseshoe:
                    fightResult.isNeedIncreaseLifeByOne = true;
                    break;
                case CardScoreType.Bomb:
                    break;
                case CardScoreType.Lightning:
                    this.needSmashLightning(card.getScore());
                    break;
                case CardScoreType.Multiplier:
                    this.needShootMultiplier = true,
                        this.multiplierScore = card.getScore();
                    break;
                case CardScoreType.Skull:
                    this.needShootSkull = true;
                    break;
                case CardScoreType.Barrel:
                    SoundController.instance.playSound(ArrayUtils.getRandomItem([SoundConsts.Barrel1, SoundConsts.Barrel2]));
                    fightResult.isMove = false;
            }
            this.setStatus();
            return fightResult;
        }
        needSmashLightning(score) {
            this.needRunLightning = true,
                this.lightningScore = score;
        }
        setStatus() {
            this.setLife(),
                this.setArmor();
        }
        stepUpdate() { }
        getScore() {
            return this.currentLife + this.armor;
        }
        reduceScoreInNSeconds(score, delay) {
            if (score <= this.armor) {
                this.armor -= score;
            }
            else {
                var i = score - this.armor;
                this.armor = 0,
                    this.currentLife -= i;
            }
            setTimeout(this.setStatus.bind(this), delay);
        }
        increaseScoreInNSeconds(score, delay) {
            if (this.totalLife - this.currentLife > score) {
                this.currentLife = this.totalLife;
            }
            else {
                this.currentLife += score;
            }
            setTimeout(this.setStatus.bind(this), delay);
        }
        setShopItemsStatus() {
        }
        addSpriteByName(e, i, o, n) {
            void 0 === o && (o = 0),
                void 0 === n && (n = 1);
            var s = 38 * i - .5 * Consts.CardWidth, a = t.ShapeFactoryHelper.getShape(this.game, s, 80, ArtConsts.Items1, e, 0);
            a.name = e,
                a.angle = o,
                a.scale.set(n),
                this.view.add(a);
        }
        destroySpriteByName(t) {
            var e = this.view.getByName(t);
            e && e.destroy();
        }
        setArmor() {
            this.view.setArmor();
        }
        setArmorFrame(card) {
            this.view.setArmor();
        }
        fightWithEnemy(e) {
            if (e.getScore() >= this.armor + this.currentLife)
                return !1;
            if (e.getScore() <= this.armor)
                e.getScore() < this.armor && GameStatus.currentHero == HeroType.Base ? this.armor -= 1 : this.armor -= e.getScore();
            else if (this.armor > 0) {
                var i = e.getScore() - this.armor;
                this.armor = 0,
                    this.currentLife -= i;
            }
            else
                this.currentLife -= e.getScore();
            return GameStatus.addGold(e.getScore()),
                !0;
        }
        useHeart() {
            var e = this.view.getByName(ArtConsts.SmallHeart);
            this.view.bringToTop(e);
            SoundController.instance.playSound(SoundConsts.Revive),
                e.animations.add("explode", Phaser.Animation.generateFrameNames(ArtConsts.SmallHeart, 0, 16, "", 4), 30, !1, !1),
                this.game.add.tween(e.scale).to({
                    x: 1,
                    y: 1
                }, 100, null, !0).onComplete.add(function () {
                    var t = e.animations.play("explode", 60, !1, !1);
                    t.onComplete.add(this.setStatus, this),
                        t.onComplete.add(this.setShopItemsStatus, this);
                }, this),
                this.currentLife = this.totalLife;
        }
        increaseLifeByOneTween() {
            var tweenContainer = this.view.tweenLife();
            tweenContainer.onStart.addOnce(this.playHorseshoe, this);
            tweenContainer.onComplete.addOnce(this.increaseLifeByOne, this);
            return tweenContainer;
        }
        playHorseshoe() {
            SoundController.instance.playSound(SoundConsts.Horseshoe);
        }
        increaseLifeByOne() {
            this.currentLife++,
                this.totalLife++,
                this.setLife();
        }
        useLuck() {
            GameStatus.isLuck = false;
            this.view.useLuck();
        }
        getGoldValue() {
            return 0;
        }
    }

    class FxShootCannonStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "FxShootCannon"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_core = (this.getChild("core"));
        }
    }
    FxShootCannonStruct.URL = "ui://moe42ygrsqzyaf";
    FxShootCannonStruct.DependPackages = ["GameHome"];

    class FxShootSmokeStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "FxShootSmoke"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_smoke = (this.getChild("smoke"));
        }
    }
    FxShootSmokeStruct.URL = "ui://moe42ygrsqzyag";
    FxShootSmokeStruct.DependPackages = ["GameHome"];

    class FxShootSmoke extends FxShootSmokeStruct {
        static PoolGet() {
            var item = Pool.getItem(this.URL);
            if (!item) {
                item = FxShootSmoke.createInstance();
            }
            return item;
        }
        PoolRecover() {
            Laya.timer.clearAll(this);
            this.removeFromParent();
            this.m_smoke.playing = false;
            Pool.recover(FxShootSmoke.URL, this);
        }
        Play() {
            this.m_smoke.frame = 0;
            this.m_smoke.playing = true;
            var delay = Math.floor(10 * 1000 / 24);
            Laya.timer.once(delay, this, this.PoolRecover);
        }
    }

    class FxShootBoomStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "FxShootBoom"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_boom = (this.getChild("boom"));
        }
    }
    FxShootBoomStruct.URL = "ui://moe42ygrsqzyah";
    FxShootBoomStruct.DependPackages = ["GameHome"];

    class FxShootBoom extends FxShootBoomStruct {
        static PoolGet() {
            var item = Pool.getItem(this.URL);
            if (!item) {
                item = FxShootBoom.createInstance();
            }
            return item;
        }
        PoolRecover() {
            Laya.timer.clearAll(this);
            this.removeFromParent();
            this.m_boom.playing = false;
            Pool.recover(FxShootBoom.URL, this);
        }
        DelayPalay(delay, parent) {
            Laya.timer.once(delay, this, () => {
                parent.addChild(this);
                this.Play();
            });
        }
        Play() {
            this.m_boom.frame = 0;
            this.m_boom.playing = true;
            var delay = Math.floor(18 * 1000 / 24);
            Laya.timer.once(delay, this, this.PoolRecover);
        }
    }

    class FxShootCannon extends FxShootCannonStruct {
        constructor() {
            super(...arguments);
            this._tweenProgress = 0;
        }
        static PoolGet() {
            var item = Pool.getItem(this.URL);
            if (!item) {
                item = FxShootCannon.createInstance();
            }
            return item;
        }
        PoolRecover() {
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this);
            this.removeFromParent();
            Pool.recover(FxShootCannon.URL, this);
        }
        moveTo(fromX, fromY, toX, toY, duration) {
            this.setXY(fromX, fromY);
            this.tweenProgress = 0;
            var tweenContainer = TweenContainer.PoolGet();
            var tween = TweenUtil.to(this, { x: toX, y: toY, tweenProgress: 100 }, duration, null, Laya.Handler.create(this, this.onMoveEnd));
            tweenContainer.tweens.push(tween);
            return tweenContainer;
        }
        get tweenProgress() {
            return this._tweenProgress;
        }
        set tweenProgress(val) {
            this._tweenProgress = val;
            if (Math.floor(val) % 10 && this.parent) {
                var fx = FxShootSmoke.PoolGet();
                this.parent.addChild(fx);
                fx.setXY(this.x, this.y);
                fx.Play();
            }
        }
        onMoveEnd() {
            if (this.parent) {
                var fx = FxShootBoom.PoolGet();
                this.parent.addChild(fx);
                fx.setXY(this.x, this.y);
                fx.Play();
            }
            Laya.timer.frameOnce(2, this, this.PoolRecover);
        }
    }

    class FxSkullStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "FxSkull"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_fx = (this.getChild("fx"));
        }
    }
    FxSkullStruct.URL = "ui://moe42ygrsqzyam";
    FxSkullStruct.DependPackages = ["GameHome"];

    class FxSkull extends FxSkullStruct {
        constructor() {
            super(...arguments);
            this._tweenProgress = 0;
        }
        static PoolGet() {
            var item = Pool.getItem(this.URL);
            if (!item) {
                item = FxSkull.createInstance();
            }
            return item;
        }
        PoolRecover() {
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this);
            this.removeFromParent();
            Pool.recover(FxSkull.URL, this);
        }
        moveTo(fromX, fromY, toX, toY, duration) {
            this.setXY(fromX, fromY);
            this.tweenProgress = 0;
            var tweenContainer = TweenContainer.PoolGet();
            var tween = TweenUtil.to(this, { x: toX, y: toY, tweenProgress: 100 }, duration, null, Laya.Handler.create(this, this.onMoveEnd));
            tweenContainer.tweens.push(tween);
            return tweenContainer;
        }
        get tweenProgress() {
            return this._tweenProgress;
        }
        set tweenProgress(val) {
            this._tweenProgress = val;
            if (Math.floor(val) % 10 && this.parent) {
                var fx = FxShootSmoke.PoolGet();
                this.parent.addChild(fx);
                fx.setXY(this.x, this.y);
                fx.Play();
            }
        }
        onMoveEnd() {
            if (this.parent) {
                var fx = FxShootBoom.PoolGet();
                this.parent.addChild(fx);
                fx.setXY(this.x, this.y);
                fx.Play();
            }
            Laya.timer.frameOnce(2, this, this.PoolRecover);
        }
    }

    class Field {
        constructor(game) {
            this.step = 1;
            this.game = game;
            this.cardFactory = game.cardFactory;
        }
        initField() {
            var list = [], columnCount = GameStatus.ColumnCount, rowCount = GameStatus.RowCount, animationTime = Consts.AnimationTime - (rowCount * columnCount == 9 ? 0 : 50);
            this.field = new FieldItems(columnCount, rowCount, this.game);
            var randomVal = RandomHelper.getRandomIntInclusive(1, 5);
            for (var row = 0; row < rowCount; row++) {
                for (var column = 0; column < columnCount; column++) {
                    var card = undefined, isHeroStartRow = row === Consts.HeroStartRow - 1, isHeroStartColumn = column === Consts.HeroStartColumn - 1;
                    if (isHeroStartRow && isHeroStartColumn) {
                        card = this.cardFactory.getHero();
                        GameStatus.isHeroAlive = true;
                        GameStatus.isGameEnd = false;
                    }
                    else {
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
            return list;
        }
        addShadow() {
            var e = this.game.add.graphics(0, 0);
            e.name = Consts.Shadow,
                e.alpha = .5,
                e.beginFill(0),
                e.drawRect(2 * -this.game.width, 2 * -this.game.height, 4 * this.game.width, 4 * this.game.height),
                this.cardFactory.container.add(e),
                this.cardFactory.container.bringToTop(this.cardFactory.container.getByName(Consts.Hero)),
                this.cardFactory.container.bringToTop(this.cardFactory.container.getByName(Consts.CardWithArm));
        }
        runArmTween() {
            var e = this.cardFactory.container.getByName(Consts.Shadow);
            e && this.cardFactory.container.bringToTop(e),
                this.cardFactory.container.bringToTop(this.cardFactory.container.getByName(Consts.Hero)),
                this.cardFactory.container.bringToTop(this.cardFactory.container.getByName(Consts.CardWithMovingArm)),
                this.movingArm.alpha = 1,
                this.movingArm.y = this.movingArmY;
            var i = this.movingArmY + 150, o = this.game.add.tween(this.movingArm).to({
                y: this.movingArmY
            }, 200).to({
                y: i
            }, 600), n = this.game.add.tween(this.movingArm).to({
                y: i
            }, 200);
            o.onStart.add(function () {
                this.movingArm.changeFrame(1);
            }, this),
                n.onStart.add(function () {
                    this.movingArm.changeFrame(0);
                }, this),
                n.onComplete.add(this.runArmTween, this),
                o.chain(n),
                o.start();
        }
        getChestCardFromFactory() {
            var card = this.cardFactory.getChestCard();
            return card;
        }
        getCardFromFactory(generationType = CardGenerationType.Random, score = 0) {
            var card = this.cardFactory.getCard(generationType, score, this.getCardTypesOnTheTable());
            return card;
        }
        getEnemyCardFromFactory(t) {
            var card = this.cardFactory.getEnemy(t);
            return card;
        }
        getHealsCardFromFactory(t) {
            return this.cardFactory.getHealth(t);
        }
        getCardTypesOnTheTable() {
            return this.field.getAll().map(function (card) {
                return card.type;
            });
        }
        getCoinCardFromFactory(score) {
            var card = this.cardFactory.getCoinCard(score);
            return card;
        }
        getHero() {
            return this.field.get(this.getHeroPosition());
        }
        getHeroPosition() {
            return this.field.findHeroPosition();
        }
        getCardToFight(moveType) {
            var position = this.field.findHeroPosition();
            if (null != position) {
                var position2 = position.getNewPosition(moveType);
                if (this.field.isPositionValid(position2)) {
                    return this.field.get(position2);
                }
            }
            return null;
        }
        replaceCard(moveType, cardGenerationType, score = 0) {
            var position = this.field.getPosition(function (e) {
                return e instanceof Hero;
            });
            var list = Array();
            var card = this.getCardFromFactory(cardGenerationType, score);
            list.push(this.replaceCardByPosition(position.getNewPosition(moveType), card));
            return list;
        }
        tutorialStep1() {
            var e = this;
            this.movingArm.animations.stop(),
                this.runArmTween(),
                GameStatus.isTutorialStep1Done = !0,
                this.field.getAll().forEach(function (i) {
                    i instanceof Card && i.view.name === Consts.CardWithMovingArm && i.setOnClickEvent(e.onCardDown, e.onCardUp, e);
                });
        }
        tutorialStep2(e) {
            GameStatus.isTutorialStep2Done = !0,
                this.runAllCardsAroundHero(e);
        }
        tutorialStep3(t) {
            this.runAllCardsAroundHero(t);
        }
        tutorialStep4() {
            var e = this.cardFactory.container.getByName(Consts.Shadow);
            this.game.add.tween(e).to({
                alpha: 0
            }, 100).start().onComplete.add(function () {
                var i = this;
                e.destroy(),
                    GameStatus.isTutorialSeen = !0,
                    this.field.getAll().forEach(function (e) {
                        e instanceof t.Card && e.setOnClickEvent(i.onCardDown, i.onCardUp, i);
                    });
            }.bind(this));
        }
        runAllCardsAroundHero(e) {
            for (var i = 0, o = [e.getNewPosition(MoveType.Left), e.getNewPosition(MoveType.Up), e.getNewPosition(MoveType.Right), e.getNewPosition(MoveType.Down)]; i < o.length; i++) {
                var n = o[i];
                if (this.field.isPositionValid(n)) {
                    var s = this.field.get(n);
                    this.cardFactory.container.bringToTop(s.view),
                        s instanceof t.Card && s.setOnClickEvent(this.onCardDown, this.onCardUp, this);
                }
            }
        }
        move(moveType) {
            var list = [];
            var heroPosition = this.getHeroPosition();
            var fieldPosition = heroPosition.getNewPosition(moveType);
            var card = this.field.get(fieldPosition);
            if (card.isEmpty)
                return list;
            this.isPlayMove(card) && setTimeout(this.playMoveSound.bind(this), 115);
            var tweens;
            var heroCard = this.field.get(heroPosition);
            if (card.type === CardScoreType.Bomb) {
                list.push(this.moveAndSetWithAnimation(heroPosition.getNewPosition(moveType), heroCard, Consts.AnimationTime).setAnimationDuration(1));
                list.push(this.moveAndSetWithAnimation(heroPosition, card, Consts.AnimationTime));
            }
            else {
                card.isBoss && GameStatus.gameLevel++;
                var cardPositionType = this.getCardPositionType(moveType, heroPosition);
                var replaceCard = this.getCardToReplace(card);
                var tweenContainer = TweenContainer.PoolGet();
                tweens = tweenContainer.tweens;
                tweens.push(card.removeChild());
                list.push(tweenContainer);
                switch (cardPositionType) {
                    case CardPositionType.Center:
                        list.push(this.moveAndSetWithAnimation(heroPosition.getNewPosition(moveType), heroCard, Consts.AnimationTime));
                        switch (moveType) {
                            case MoveType.Left:
                                if (0 === heroPosition.row) {
                                    var moveToPosition = heroPosition.getNewPosition(MoveType.Down);
                                    var tween = this.moveAllLine(MoveType.Down, MoveType.Up, moveToPosition, replaceCard);
                                    list.push(tween);
                                }
                                else {
                                    var moveToPosition = heroPosition.getNewPosition(MoveType.Up);
                                    var tween = this.moveAllLine(MoveType.Up, MoveType.Down, moveToPosition, replaceCard);
                                    list.push(tween);
                                }
                                break;
                            case MoveType.Right:
                                if (heroPosition.row === this.field.getRowCount() - 1) {
                                    var moveToPosition = heroPosition.getNewPosition(MoveType.Up);
                                    var tween = this.moveAllLine(MoveType.Up, MoveType.Down, moveToPosition, replaceCard);
                                    list.push(tween);
                                }
                                else {
                                    var moveToPosition = heroPosition.getNewPosition(MoveType.Down);
                                    var tween = this.moveAllLine(MoveType.Down, MoveType.Up, moveToPosition, replaceCard);
                                    list.push(tween);
                                }
                                break;
                            case MoveType.Up:
                                if (heroPosition.column === this.field.getColumnCount() - 1) {
                                    var moveToPosition = heroPosition.getNewPosition(MoveType.Left);
                                    var tween = this.moveAllLine(MoveType.Left, MoveType.Right, moveToPosition, replaceCard);
                                    list.push(tween);
                                }
                                else {
                                    var moveToPosition = heroPosition.getNewPosition(MoveType.Right);
                                    var tween = this.moveAllLine(MoveType.Right, MoveType.Left, moveToPosition, replaceCard);
                                    list.push(tween);
                                }
                                break;
                            case MoveType.Down:
                                if (0 === heroPosition.column) {
                                    var moveToPosition = heroPosition.getNewPosition(MoveType.Right);
                                    var tween = this.moveAllLine(MoveType.Right, MoveType.Left, moveToPosition, replaceCard);
                                    list.push(tween);
                                }
                                else {
                                    var moveToPosition = heroPosition.getNewPosition(MoveType.Left);
                                    var tween = this.moveAllLine(MoveType.Left, MoveType.Right, moveToPosition, replaceCard);
                                    list.push(tween);
                                }
                                break;
                        }
                        break;
                    case CardPositionType.End:
                        list.push(this.moveAllLine(this.getOppositeMoveType(moveType), moveType, heroPosition, replaceCard));
                        break;
                }
            }
            if (!GameStatus.isTutorialSeen) {
                this.step++;
            }
            return list;
        }
        isPlayMove(card) {
            switch (card.type) {
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
                    return true;
            }
        }
        playMoveSound() {
            SoundController.instance.playSound(ArrayUtils.getRandomItem([SoundConsts.Move01, SoundConsts.Move02]));
        }
        getCardToReplace(card) {
            if (card.isBoss) {
                return this.getChestCardFromFactory();
            }
            else {
                return this.getCardFromFactory();
            }
        }
        getCardToReplaceAfterSmash(card) {
            if (card.isBoss) {
                GameStatus.isNeedCreateChestOnNextStep = true;
            }
            var score;
            if (card.getGoldValue() > 0) {
                score = card.getGoldValue();
            }
            else {
                score = card.getScore();
            }
            return this.getCoinCardFromFactory(score);
        }
        getCardPositionType(moveType, fieldPosition) {
            switch (moveType) {
                case MoveType.Right:
                    if (fieldPosition.column == this.field.getColumnCount() - 1) {
                        return CardPositionType.Start;
                    }
                    else if (0 == fieldPosition.column) {
                        return CardPositionType.Center;
                    }
                    else {
                        return CardPositionType.End;
                    }
                case MoveType.Down:
                    if (fieldPosition.row == this.field.getRowCount() - 1) {
                        return CardPositionType.Start;
                    }
                    else if (0 == fieldPosition.row) {
                        return CardPositionType.Center;
                    }
                    else {
                        return CardPositionType.End;
                    }
                case MoveType.Left:
                    if (0 == fieldPosition.column) {
                        return CardPositionType.Start;
                    }
                    else if (fieldPosition.column == this.field.getColumnCount() - 1) {
                        return CardPositionType.Center;
                    }
                    else {
                        return CardPositionType.End;
                    }
                case MoveType.Up:
                    if (0 == fieldPosition.row) {
                        return CardPositionType.Start;
                    }
                    else if (fieldPosition.row == this.field.getRowCount() - 1) {
                        return CardPositionType.Center;
                    }
                    else {
                        return CardPositionType.End;
                    }
            }
        }
        removeAllChild() {
            var list = [];
            SoundController.instance.playSound(SoundConsts.HeroDies);
            for (var cardList = this.field.getAll(), i = 0, s = cardList = RandomHelper.shuffle(cardList); i < s.length; i++) {
                var card = cardList[i];
                var tweenContainer = TweenContainer.PoolGet();
                tweenContainer.animationDuration = RandomHelper.getRandomIntInclusive(50, 150);
                tweenContainer.tweens.push(card.removeChild());
                list.push(tweenContainer);
            }
            return list;
        }
        isBossInTheField() {
            return this.field.any(function (card) {
                return card.isBoss;
            });
        }
        moveAllLine(moveTo, moveTypeB, fieldPosition, card) {
            var animationList = [];
            for (var time = Consts.AnimationTime * Consts.AnimationMultiplier; this.field.isPositionValid(fieldPosition);) {
                animationList.push(this.moveAndSetWithAnimation(fieldPosition.getNewPosition(moveTypeB), this.field.get(fieldPosition), Consts.AnimationTime).setAnimationDuration(time)),
                    fieldPosition = fieldPosition.getNewPosition(moveTo);
            }
            var defaultCard = this.cardFactory.getDefault(), cardFieldPosition = fieldPosition.getNewPosition(moveTypeB);
            animationList.push(this.moveAndSetWithAnimation(cardFieldPosition, defaultCard, Consts.AnimationTime)),
                animationList.push(this.replaceCardByPosition(cardFieldPosition, card).setAnimationDuration(1));
            return animationList;
        }
        stepUpdate() {
            for (var i = 0, cardList = this.field.getAll(); i < cardList.length; i++) {
                var card = cardList[i];
                card.stepUpdate();
            }
        }
        shootCannon() {
            SoundController.instance.playSound(SoundConsts.Cannon);
            var heroPosition = this.getHeroPosition();
            var heroCard = this.field.get(heroPosition);
            var list = [];
            list.push(this.shootCannonInDirection(MoveType.Right, heroCard, heroPosition));
            list.push(this.shootCannonInDirection(MoveType.Left, heroCard, heroPosition));
            list.push(this.shootCannonInDirection(MoveType.Up, heroCard, heroPosition));
            list.push(this.shootCannonInDirection(MoveType.Down, heroCard, heroPosition));
            return list;
        }
        shootCannonInDirection(moveType, heroCard, heroPosition) {
            var list = [];
            var position = heroPosition.getNewPosition(moveType);
            if (!this.field.isPositionValid(position)) {
                return list;
            }
            var itemCard = this.field.get(position);
            if (Field.canShootCard(itemCard)) {
                var tween = this.shootCard(heroCard.getCenterX(), heroCard.getCenterY(), itemCard.getCenterX(), itemCard.getCenterY(), 200);
                list.push(tween);
                if (itemCard.type === CardScoreType.Cannon) {
                    itemCard.increaseScoreInNSeconds(heroCard.shootScore, 400);
                }
                else if (heroCard.shootScore >= itemCard.getScore()) {
                    var replaceCard = this.getCardToReplaceAfterSmash(itemCard);
                    var tweenContainer = this.replaceCardByPosition(position, replaceCard, true).setAnimationDuration(1);
                    tweenContainer.setFirstDelay(400);
                    list.push(tweenContainer);
                }
                else {
                    itemCard.reduceScoreInNSeconds(heroCard.shootScore, 400);
                }
            }
            return list;
        }
        shootCard(fromX, fromY, toX, toY, duration) {
            var fx = FxShootCannon.PoolGet();
            this.game.container.addChild(fx);
            var tweenContainer = fx.moveTo(fromX, fromY, toY, toY, duration);
            tweenContainer.animationDuration = 1;
            return tweenContainer;
        }
        static canShootCard(card) {
            if (card.isEmpty)
                return false;
            switch (card.type) {
                case CardScoreType.Boss:
                case CardScoreType.Enemy:
                case CardScoreType.Trap:
                case CardScoreType.Armor:
                case CardScoreType.Health:
                case CardScoreType.Poison:
                case CardScoreType.Cannon:
                    return true;
                default:
                    return false;
            }
        }
        smashBomb() {
            var bombPositionList = this.field.getPositions(function (card) {
                return card.type === CardScoreType.Bomb && card.getPowerUp() <= 0;
            });
            var list = [];
            for (var i = 0; i < bombPositionList.length; i++) {
                var position = bombPositionList[i];
                SoundController.instance.playSound(SoundConsts.Bomb);
                var card = this.field.get(position);
                this.addBombExplosionAnimation(card.view.x, card.view.y, 100);
                var replaceCard = this.getCardToReplaceAfterSmash(this.field.get(position));
                var tweenContainer = this.replaceCardByPosition(position, replaceCard, !0);
                list.push(tweenContainer);
                var life = card.getLife();
                var moveTypeList = [MoveType.Up, MoveType.Down, MoveType.Left, MoveType.Right];
                for (var d = 0; d < moveTypeList.length; d++) {
                    var moveType = moveTypeList[d];
                    list.push(this.smashBombInDirection(moveType, position, life));
                    if (!GameStatus.isHeroAlive) {
                        return list;
                    }
                }
            }
            return list;
        }
        smashBombInDirection(moveType, position, life) {
            var list = [];
            var smashDelay = Consts.SmashDelay;
            for (position = position.getNewPosition(moveType); this.field.isPositionValid(position);) {
                list.push(this.smashBombInPosition(position, smashDelay, life));
                if (!GameStatus.isHeroAlive)
                    return list;
                smashDelay += Consts.SmashDelay,
                    position = position.getNewPosition(moveType);
            }
            return list;
        }
        smashBombInPosition(position, smashDelay, life) {
            var card = this.field.get(position);
            var shakeTime = 4 == GameStatus.RowCount ? 1e3 : 500;
            this.game.shake(Consts.ShakeIntensity, shakeTime);
            this.addBombExplosionAnimation(card.view.x, card.view.y, smashDelay);
            if (card.type == CardScoreType.Chest)
                return [];
            if (card.isHero && GameStatus.currentHero == HeroType.Bomb)
                return [];
            if (life >= card.getScore()) {
                if (!card.isHero) {
                    var replaceCard = this.getCardToReplaceAfterSmash(card);
                    return [this.replaceCardByPosition(position, replaceCard, true).setAnimationDuration(1)];
                }
                if (!GameStatus.isHeart) {
                    GameStatus.isHeroAlive = false;
                    return this.removeAllChild();
                }
                var hero = card;
                GameStatus.isHeart = false;
                this.keyboardManager.reset();
                hero.useHeart();
            }
            else {
                card.reduceScoreInNSeconds(life, 1.2 * smashDelay);
            }
            return [];
        }
        addBombExplosionAnimation(x, y, delay) {
            setTimeout(this.playBombExplosionAnimation.bind(this, x, y), delay);
        }
        playBombExplosionAnimation(x, y) {
            var fx = FxShootBoom.PoolGet();
            fx.setXY(x, y);
            this.game.container.addChild(fx);
            fx.Play();
        }
        replaceCardByPosition(fieldPosition, card, isChangeState = false) {
            var tweenContainer = TweenContainer.PoolGet();
            var tweens = tweenContainer.tweens;
            var oldCard = this.field.get(fieldPosition);
            if (isChangeState) {
                if (oldCard.type == CardScoreType.Chest) {
                    tweens.push(oldCard.open());
                }
                else if (oldCard.type == CardScoreType.Barrel) {
                    tweens.push(oldCard.open());
                }
            }
            oldCard.isBoss && GameStatus.gameLevel++;
            this.moveAndSet(fieldPosition, card);
            card.endTurnAnimationStart();
            tweenContainer.tweens.push(oldCard.startTurnAnimation(card.endTurnAnimationEnd, card));
            return tweenContainer;
        }
        moveAndSet(position, card) {
            this.field.set(position, card),
                card.setCoordinate(position.getPoint());
        }
        moveAndSetWithAnimation(position, card, time) {
            var point = position.getPoint();
            this.field.set(position, card);
            var tweenContainer = TweenContainer.PoolGet();
            tweenContainer.tweens.push(card.moveTo(point, time));
            return tweenContainer;
        }
        getOppositeMoveType(moveType) {
            switch (moveType) {
                case MoveType.Up:
                    return MoveType.Down;
                case MoveType.Down:
                    return MoveType.Up;
                case MoveType.Left:
                    return MoveType.Right;
                case MoveType.Right:
                    return MoveType.Left;
            }
        }
        shootLightning() {
            var heroPosition = this.getHeroPosition();
            var heroCard = this.field.get(heroPosition);
            var list = [];
            var tween = this.shootLightningInAllDirections(heroCard.lightningScore, heroPosition, Consts.LightningDuration);
            list.push(tween);
            this.clearLightning();
            list.length > 0 && SoundController.instance.playSound(SoundConsts.Lighting);
            return list;
        }
        clearLightning() {
            this.field.getAll().forEach(function (card) {
                card.canLightningStrike = false;
            });
        }
        shootLightningInAllDirections(lightningScore, heroPosition, lightningDuration) {
            var list = [];
            list.push(this.shootLightningInDirection(MoveType.Right, lightningScore, heroPosition, lightningDuration));
            list.push(this.shootLightningInDirection(MoveType.Left, lightningScore, heroPosition, lightningDuration));
            list.push(this.shootLightningInDirection(MoveType.Up, lightningScore, heroPosition, lightningDuration));
            list.push(this.shootLightningInDirection(MoveType.Down, lightningScore, heroPosition, lightningDuration));
            return list;
        }
        shootLightningInDirection(moveType, lightningScore, heroPosition, lightningDuration) {
            var list = [];
            var position = heroPosition.getNewPosition(moveType);
            if (!this.field.isPositionValid(position)) {
                return list;
            }
            var card = this.field.get(position);
            if (card.isHero)
                return list;
            if (card.canLightningStrike)
                return list;
            if (Field.canShootLightning(card)) {
                var duration = lightningDuration + Consts.LightningDuration;
                var tweenContainer = TweenContainer.PoolGet();
                tweenContainer.tweens.push(card.runLightning());
                tweenContainer.setAnimationDuration(Consts.LightningDuration);
                list.push(tweenContainer);
                if (lightningScore >= card.getScore()) {
                    var replaceCard = this.getCardToReplaceAfterSmash(card);
                    replaceCard.canLightningStrike = true;
                    var replaceTweenContainer = this.replaceCardByPosition(position, replaceCard, true).setAnimationDuration(1);
                    replaceTweenContainer.setFirstDelay(2 * duration);
                    list.push(replaceTweenContainer);
                }
                else {
                    card.reduceScoreInNSeconds(lightningScore, 2 * duration);
                }
                card.canLightningStrike = false;
                list.push(this.shootLightningInAllDirections(lightningScore, position, duration));
            }
            return list;
        }
        static canShootLightning(card) {
            switch (card.type) {
                case CardScoreType.Boss:
                case CardScoreType.Enemy:
                case CardScoreType.Trap:
                    return true;
                default:
                    return false;
            }
        }
        shootMultiplier() {
            SoundController.instance.playSound(SoundConsts.Idol);
            var heroPosition = this.getHeroPosition();
            var heroCard = this.field.get(heroPosition);
            var list = [];
            list.push(this.shootMultiplierInDirection(MoveType.Right, heroCard.multiplierScore, heroPosition));
            list.push(this.shootMultiplierInDirection(MoveType.Left, heroCard.multiplierScore, heroPosition));
            list.push(this.shootMultiplierInDirection(MoveType.Up, heroCard.multiplierScore, heroPosition));
            list.push(this.shootMultiplierInDirection(MoveType.Down, heroCard.multiplierScore, heroPosition));
            return list;
        }
        shootSkull() {
            SoundController.instance.playSound(SoundConsts.Skull);
            var point = this.getHeroPosition().getPoint();
            var positionList = this.field.getPositions(function (card) {
                return !card.isHero;
            });
            var list = [];
            for (var i = 0; i < positionList.length; i++) {
                var position = positionList[i];
                var pos = position.getPoint();
                list.push(this.shootSkullInCoordinate(point.x, point.y, pos.x, pos.y, 300));
                var replaceCard = this.getCardToReplaceAfterSmash(this.field.get(position));
                var tweenContainer = this.replaceCardByPosition(position, replaceCard, true).setAnimationDuration(1);
                tweenContainer.setFirstDelay(350);
                list.push(tweenContainer);
            }
            return list;
        }
        shootSkullInCoordinate(heroX, heroY, posX, posY, time) {
            var fx = FxSkull.PoolGet();
            var tweenContainer = fx.moveTo(heroX, heroY, posX, posY, time);
            this.game.container.addChild(fx);
            tweenContainer.animationDuration = 1;
            return tweenContainer;
        }
        shootMultiplierInDirection(moveType, multiplierScore, heroPosition) {
            var list = [];
            var position = heroPosition.getNewPosition(moveType);
            if (!this.field.isPositionValid(position))
                return list;
            var card = this.field.get(position);
            if (Field.canMultiply(card.type, card.getScore())) {
                var tweenContainer = card.multiplyScore(multiplierScore);
                if (!tweenContainer)
                    return list;
                tweenContainer.setAnimationDuration(1);
                list.push(tweenContainer);
            }
            return list;
        }
        static canMultiply(cardScoreType, score) {
            switch (cardScoreType) {
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
        stopAllAnimations() {
        }
        playAllAnimations() {
        }
        replaceAllNegativeCards() {
            for (var e = [], i = 0, o = this.field.getPositions(function (e) {
                return !(e instanceof t.Hero);
            }); i < o.length; i++) {
                var n = o[i];
                if (this.field.get(n).isNegative()) {
                    var s = this.getCardFromFactory(t.CardGenerationType.Positive), a = this.replaceCardByPosition(n, s, !0).setAnimationDuration(1);
                    a.tweens[0].delay(200),
                        e.push(a);
                }
            }
            return e;
        }
        smashHero(delay) {
            var hero = this.getHero();
            this.addBombExplosionAnimation(hero.getCenterX(), hero.getCenterY(), delay);
        }
    }

    class FxMovieClipKey {
    }
    FxMovieClipKey.MVMouseClick = "MVMouseClick";

    class StageClickFx {
        constructor() {
            this._isInstalled = false;
            this._lastTime = 0;
            this.gap = 100;
        }
        install() {
            if (this._isInstalled)
                return;
            this._isInstalled = true;
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        }
        uninstall() {
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        }
        onMouseDown(event) {
            if (StageClickFxItem.showCount < 10 && Laya.timer.currTimer - this._lastTime > this.gap) {
                let item = StageClickFxItem.poolGet();
                item.setXY(event.stageX, event.stageY);
                item.show();
                this._lastTime = Laya.timer.currTimer;
            }
        }
    }
    class StageClickFxItem {
        constructor() {
            this.halfWidth = 100;
            this.halfHeight = 100;
            this.fx = fgui.UIPackage.createObject(GuiPackageNames.GameHome, FxMovieClipKey.MVMouseClick);
            this.fx.displayObject.blendMode = Laya.BlendMode.ADD;
            this.halfWidth = this.fx.width >> 1;
            this.halfHeight = this.fx.height >> 1;
        }
        show() {
            StageClickFxItem.showCount++;
            this.fx.setPlaySettings(0, -1, 1, -1, Laya.Handler.create(this, this.hide, null, true));
            MenuLayer.floatMsg.addChild(this.fx);
        }
        hide() {
            this.fx.removeFromParent();
            this.poolRecover();
            StageClickFxItem.showCount--;
        }
        setXY(x, y) {
            x -= this.halfWidth;
            y -= this.halfHeight;
            this.fx.setXY(x, y);
        }
        poolRecover() {
            StageClickFxItem._poolRecover(this);
        }
        static poolGet() {
            let item;
            if (StageClickFxItem.pool.length > 0) {
                item = StageClickFxItem.pool.pop();
            }
            else {
                item = new StageClickFxItem();
            }
            return item;
        }
        static _poolRecover(item) {
            if (this.pool.indexOf(item) == -1)
                this.pool.push(item);
        }
    }
    StageClickFxItem.showCount = 0;
    StageClickFxItem.pool = [];

    class KeyedCollection {
        constructor() {
            this.items = {};
            this.count = 0;
        }
        ContainsKey(key) {
            return this.items.hasOwnProperty(key);
        }
        Count() {
            return this.count;
        }
        Add(key, val) {
            this.items.hasOwnProperty(key) || this.count++,
                this.items[key] = val;
        }
        Remove(key) {
            var e = this.items[key];
            return delete this.items[key],
                this.count--,
                e;
        }
        Item(key) {
            return this.items[key];
        }
        Keys() {
            var list = [];
            for (var key in this.items)
                this.items.hasOwnProperty(key) && list.push(key);
            return list;
        }
        Values() {
            var list = [];
            for (var key in this.items)
                this.items.hasOwnProperty(key) && list.push(this.items[key]);
            return list;
        }
    }

    class Basket {
        constructor(updateVal = 0.2, step = 0.2, resetToZero = false) {
            this.status = new KeyedCollection();
            this.initialStatus = new KeyedCollection();
            this.updateVal = 0.2;
            this.step = 0.2;
            this.resetToZero = false;
            this.updateVal = updateVal,
                this.step = step,
                this.resetToZero = resetToZero;
        }
        fillBasket(start, len) {
            for (var i = start; i <= len; i++) {
                var val = 3 - (i - 1) * this.step;
                if (!this.initialStatus.ContainsKey(i.toString())) {
                    this.initialStatus.Add(i.toString(), val);
                    this.status.Add(i.toString(), val);
                }
            }
        }
        fillBasketWithStep(start, val, level, max) {
            this.fillBasket(start, GMath.clamp(val + Math.floor(GameStatus.gameLevel / level), start, max));
        }
        getFromBasket() {
            var statusValTotal = this.status.Values().reduce(function (t, e) {
                return t + e;
            });
            var randomVal = Math.random() * statusValTotal;
            var total = 0;
            for (var o = 0, keys = this.status.Keys(); o < keys.length; o++) {
                var key = keys[o], val = this.status.Item(key);
                if (randomVal > total && randomVal < val + total) {
                    this.removeFromBasket(key);
                    return key;
                }
                total += val;
            }
            throw new Error("Item not found in the basked");
        }
        removeFromBasket(key) {
            this.status.Keys().forEach((itemKey) => {
                if (itemKey === key) {
                    if (this.resetToZero) {
                        this.status.Add(key, 0);
                    }
                    else {
                        this.status.Add(key, this.initialStatus.Item(key));
                    }
                }
                else {
                    this.status.Add(itemKey, this.status.Item(itemKey) + this.updateVal);
                }
            });
        }
        static AfterChestBasket() {
            var basket = new Basket(.5, .2, !0);
            basket.add(CardScoreType.Horseshoe.toString(), 1),
                basket.add(CardScoreType.Bomb.toString(), 1),
                basket.add(CardScoreType.Lightning.toString(), 1),
                basket.add(CardScoreType.Skull.toString(), 1),
                basket.add(CardScoreType.Multiplier.toString(), 1);
            return basket;
        }
        add(key, val) {
            this.status.Add(key, val),
                this.initialStatus.Add(key, val);
        }
        print(t) {
            this.status.Values().reduce(function (t, e) {
                return t + e;
            });
            for (var e = 0, i = this.status.Keys(); e < i.length; e++) {
                var o = i[e];
                this.status.Item(o),
                    this.initialStatus.Item(o);
            }
            console.groupEnd();
        }
    }

    class LogInfo {
        static reset() {
            this.PositiveCardProbability = 0,
                this.CurrentPositiveCardProbability = 0,
                this.ChanceOfNegativeFromBox = 0,
                this.ChanceOfPositiveFromBox = 0;
        }
    }
    LogInfo.PositiveCardProbability = 0;
    LogInfo.CurrentPositiveCardProbability = 0;
    LogInfo.ChanceOfNegativeFromBox = 0;
    LogInfo.ChanceOfPositiveFromBox = 0;

    class CardFactory {
        constructor(game) {
            this.movesAfterLastSpecialCard = 0;
            this.healthBasket = new Basket();
            this.armorBasket = new Basket();
            this.cannonBasket = new Basket();
            this.enemyBasket = new Basket();
            this.goldBasket = new Basket();
            this.chestBasket = Basket.AfterChestBasket();
            this.game = game;
            this.container = game.container;
        }
        getDefault() {
            return Card.GetDefault(this.game);
        }
        getHero() {
            var cardConfig = Game.config.card.getTypeLevelConfig(CardScoreType.Hero, GameStatus.currentHero);
            var hero = new Hero();
            hero.game = this.game;
            hero.type = CardScoreType.Hero;
            hero.SetConfig(cardConfig);
            hero.setShopItemsStatus();
            hero.totalLife = 10;
            hero.currentLife = 10;
            hero.armor = 0;
            if (GameStatus.isHorseshoe) {
                hero.totalLife += 1;
                hero.currentLife += 1;
            }
            hero.setStatus(),
                this.movesAfterLastSpecialCard++;
            return hero;
        }
        getCard(cardGenerationType = CardGenerationType.Random, score, cardTypeList) {
            console.log("随机生成卡牌", "cardGenerationType=", cardGenerationType, "score=", score, "cardTypeList=", cardTypeList);
            if (GameStatus.isNeedCreateBoss && cardGenerationType == CardGenerationType.Random) {
                GameStatus.isNeedCreateBoss = false;
                return this.getBoss();
            }
            else if (GameStatus.isNeedCreateChest && cardGenerationType == CardGenerationType.Random) {
                GameStatus.isNeedCreateChest = false;
                return this.getChestCard();
            }
            else if (this.generateCardType(cardGenerationType, cardTypeList) == CardBackgroundType.Warrior) {
                return this.getEnemy(score);
            }
            else {
                return this.getPowerUp(cardGenerationType, score, cardTypeList);
            }
        }
        getHealth(score) {
            var cardScoreType = CardScoreType.Health;
            var level = 1;
            if (score <= 5) {
                level = 2;
            }
            return Card.GetNew(this.game, cardScoreType, level, score);
        }
        generateCardType(cardGenerationType, cardTypeList) {
            if (cardGenerationType == CardGenerationType.AfterBarrel && GameStatus.currentHero == HeroType.Key) {
                return CardBackgroundType.PowerUp;
            }
            if (cardGenerationType == CardGenerationType.AfterChest || cardGenerationType == CardGenerationType.Positive) {
                return CardBackgroundType.PowerUp;
            }
            if (cardGenerationType == CardGenerationType.AfterBarrel && Math.random() < .75) {
                return CardBackgroundType.PowerUp;
            }
            LogInfo.reset();
            if (GameStatus.cardCounter > 2) {
                var n = Math.random();
                if (LogInfo.ChanceOfNegativeFromBox = n, n < .8) {
                    return CardBackgroundType.Warrior;
                }
            }
            if (GameStatus.cardCounter < -3) {
                var s = Math.random();
                if (LogInfo.ChanceOfPositiveFromBox = s, s < .8) {
                    return CardBackgroundType.PowerUp;
                }
            }
            if (CardFactory.isShouldBePositiveCard(cardTypeList)) {
                return CardBackgroundType.PowerUp;
            }
            else {
                return CardBackgroundType.Warrior;
            }
        }
        static isShouldBePositiveCard(cardTypeList) {
            var positiveCount = cardTypeList.filter(CardScoreTypeHelper.isCardScoreTypePositive).length;
            var negativeCount = cardTypeList.filter(CardScoreTypeHelper.isCardScoreTypeNegative).length;
            if (!GameStatus.isFourXFour && Math.random() < .85 && positiveCount <= 1) {
                return Math.random() < .8;
            }
            if (GameStatus.isFourXFour && Math.random() < .85 && positiveCount <= 2) {
                return Math.random() < .8;
            }
            var n = Math.min(.35, .4 - .01 * GameStatus.levelStep), s = negativeCount * (GameStatus.isFourXFour ? .02 : .03), a = GMath.clamp(n + s, .2, .75);
            var r = Math.random();
            LogInfo.PositiveCardProbability = a;
            LogInfo.CurrentPositiveCardProbability = r;
            return r < a;
        }
        getPowerUp(cardGenerationTyp, score, cardTypeList) {
            var cardScoreType = this.generatePowerUpType(cardGenerationTyp, cardTypeList);
            var level = 1;
            var score = this.generateCardScore(cardScoreType, score);
            return Card.GetNew(this.game, cardScoreType, level, score);
        }
        generateCardScore(cardScoreType, score = 0) {
            if (score == 0) {
                switch (cardScoreType) {
                    case CardScoreType.Armor:
                        this.armorBasket.fillBasketWithStep(1, 4, 3, 10),
                            score = Number(this.armorBasket.getFromBasket());
                        break;
                    case CardScoreType.Health:
                        this.healthBasket.fillBasketWithStep(1, 4, 3, 10),
                            score = Number(this.healthBasket.getFromBasket());
                        break;
                    case CardScoreType.Cannon:
                        this.cannonBasket.fillBasketWithStep(1, 1, 3, 10),
                            score = Number(this.cannonBasket.getFromBasket()),
                            GameStatus.currentHero == HeroType.Bomb && (score += 2);
                        break;
                    case CardScoreType.Barrel:
                        score = this.generateScore(2, 4, 3, 10);
                        break;
                    case CardScoreType.Poison:
                        var o = 1 + Math.ceil(GameStatus.gameLevel / 2);
                        score = o > 10 ? 10 : o;
                        break;
                    case CardScoreType.Lightning:
                        score = this.generateScore(1, 4, 3, 10);
                        break;
                    case CardScoreType.Gold:
                        this.goldBasket.fillBasketWithStep(1, 4, 2, 1e3),
                            score = Number(this.goldBasket.getFromBasket());
                        break;
                    default:
                        score = this.game.rnd.integerInRange(1, 5);
                }
            }
            if (cardScoreType === CardScoreType.Bomb) {
                score = this.game.rnd.integerInRange(1, 4 + Math.ceil(GameStatus.gameLevel / 2));
                if (score > 10) {
                    score = 10;
                }
            }
            if (cardScoreType === CardScoreType.Multiplier) {
                score = 2;
            }
            return score;
        }
        generateScore(min, start, level, max) {
            var s = start + Math.ceil(GameStatus.gameLevel / level), a = this.game.rnd.integerInRange(min, s);
            return GMath.clamp(a, min, max);
        }
        getEnemy(score) {
            var level = this.generateEnemyPower(score);
            Consts.IsDev && this.enemyBasket.print("Enemy");
            if (0 == score) {
                score = level;
                if (GameStatus.gameLevel > 10) {
                    score += Math.floor((GameStatus.gameLevel - 10) / 2);
                }
            }
            if (0 == level) {
                return this.getTrap(score + 1);
            }
            else {
                return this.getWarrior(level, score);
            }
        }
        getTrap(score) {
            return Card.GetNew(this.game, CardScoreType.Trap, 1, score);
        }
        getWarrior(level, score) {
            return Card.GetNew(this.game, CardScoreType.Enemy, level, score);
        }
        static getTrapScore() {
            if (GameStatus.currentHero == HeroType.Gun) {
                return 0;
            }
            else {
                return 1 + RandomHelper.getRandomIntInclusive(0, Math.ceil(GameStatus.gameLevel / 4));
            }
        }
        getBoss() {
            var level = CardFactory.generateBossPower();
            var score = 8 + GameStatus.gameLevel;
            return Card.GetNew(this.game, CardScoreType.Boss, level, score);
        }
        getChestCard() {
            return Card.GetNew(this.game, CardScoreType.Chest, 1, 0);
        }
        getCoinCard(score) {
            var cardScoreType = CardScoreType.Gold;
            0 === score && (score = this.generateCardScore(cardScoreType));
            var level = score < 6 ? 1 : 2;
            return Card.GetNew(this.game, cardScoreType, level, score);
        }
        static generateBossPower() {
            return RandomHelper.getRandomIntInclusive(1, 3);
        }
        generatePowerUpType(cardGenerationTyp, cardTypeList) {
            if (cardGenerationTyp == CardGenerationType.AfterChest) {
                return this.generatePowerUpTypeFromChest();
            }
            else if (cardGenerationTyp == CardGenerationType.AfterBarrel) {
                return CardFactory.generatePowerUpTypeFromBarrel(cardTypeList);
            }
            else {
                return CardFactory.generatePowerUpCardScoreType(cardTypeList);
            }
        }
        generatePowerUpTypeFromChest() {
            return Number(this.chestBasket.getFromBasket());
        }
        static generatePowerUpTypeFromBarrel(cardTypeList) {
            return CardFactory.generateFromBasket(cardTypeList, CardScoreTypeHelper.getRandomPowerUpFromBarrel, this.maxPowerUpNumber());
        }
        static generatePowerUpCardScoreType(cardTypeList) {
            return CardFactory.generateFromBasket(cardTypeList, CardScoreTypeHelper.getRandomPowerUp, this.maxPowerUpNumber());
        }
        static generateFromBasket(cardTypeList, randomPowerUpFromBarrelFun, maxPowerUpNumber) {
            var filterFun = (itemCardScoreType) => {
                return itemCardScoreType === cardScoreType;
            };
            var cardScoreType;
            for (var i = 0; i < 10 && (cardScoreType = randomPowerUpFromBarrelFun(), !(cardTypeList.filter(filterFun).length < maxPowerUpNumber)); i++)
                ;
            return cardScoreType;
        }
        static maxPowerUpNumber() {
            return RandomHelper.getRandomIntInclusive(1, 2);
        }
        generateEnemyPower(score) {
            this.enemyBasket.fillBasketWithStep(0, 4, 2, 9);
            if (0 == score) {
                return Number(this.enemyBasket.getFromBasket());
            }
            var power = GMath.clamp(score, 0, 9);
            this.enemyBasket.removeFromBasket(power.toString());
            return power;
        }
    }

    class RandomDataGenerator {
        constructor(t = []) {
            this.c = 1;
            this.s0 = 0;
            this.s1 = 0;
            this.s2 = 0;
            if (typeof t == "string") {
                this.state(t);
            }
            else {
                this.sow(t);
            }
        }
        rnd() {
            var t = 2091639 * this.s0 + 2.3283064365386963e-10 * this.c;
            this.c = 0 | t,
                this.s0 = this.s1,
                this.s1 = this.s2,
                this.s2 = t - this.c;
            return this.s2;
        }
        sow(t) {
            if (this.s0 = this.hash(" "), this.s1 = this.hash(this.s0), this.s2 = this.hash(this.s1), this.c = 1, t)
                for (var e = 0; e < t.length && null != t[e]; e++) {
                    var i = t[e];
                    this.s0 -= this.hash(i),
                        this.s0 += ~~(this.s0 < 0),
                        this.s1 -= this.hash(i),
                        this.s1 += ~~(this.s1 < 0),
                        this.s2 -= this.hash(i),
                        this.s2 += ~~(this.s2 < 0);
                }
        }
        hash(t) {
            var e, i, s;
            for (s = 4022871197, t = t.toString(), i = 0; i < t.length; i++)
                e = .02519603282416938 * (s += t.charCodeAt(i)),
                    e -= s = e >>> 0,
                    s = (e *= s) >>> 0,
                    s += 4294967296 * (e -= s);
            return 2.3283064365386963e-10 * (s >>> 0);
        }
        integer() {
            return 4294967296 * this.rnd.apply(this);
        }
        frac() {
            return this.rnd.apply(this) + 1.1102230246251565e-16 * (2097152 * this.rnd.apply(this) | 0);
        }
        real() {
            return this.integer() + this.frac();
        }
        integerInRange(t, e) {
            return Math.floor(this.realInRange(0, e - t + 1) + t);
        }
        between(t, e) {
            return this.integerInRange(t, e);
        }
        realInRange(t, e) {
            return this.frac() * (e - t) + t;
        }
        normal() {
            return 1 - 2 * this.frac();
        }
        uuid() {
            var t = 0, e = "";
            for (; t++ < 36; e +=
                ~t % 5 | 3 * t & 4
                    ? (15 ^ t
                        ? 8 ^ this.frac() * (20 ^ t
                            ? 16 : 4)
                        : 4).toString(16)
                    : "-")
                ;
            return e;
        }
        pick(t) {
            return t[this.integerInRange(0, t.length - 1)];
        }
        sign() {
            return this.pick([-1, 1]);
        }
        weightedPick(t) {
            return t[~~(Math.pow(this.frac(), 2) * (t.length - 1) + .5)];
        }
        timestamp(t, e) {
            return this.realInRange(t || 9466848e5, e || 1577862e6);
        }
        angle() {
            return this.integerInRange(-180, 180);
        }
        state(t) {
            return "string" == typeof t && t.match(/^!rnd/) && (t = t.split(","), this.c = parseFloat(t[1]), this.s0 = parseFloat(t[2]), this.s1 = parseFloat(t[3]), this.s2 = parseFloat(t[4])),
                ["!rnd", this.c, this.s0, this.s1, this.s2].join(",");
        }
    }

    class keyboardManager {
        constructor() {
            this.isUp = false;
            this.isDown = false;
            this.isLeft = false;
            this.isRight = false;
            this.isSpace = false;
        }
        init(game) {
            this.game = game;
        }
        reset() {
            this.isUp = false;
            this.isDown = false;
            this.isLeft = false;
            this.isRight = false;
            this.isSpace = false;
        }
        getMoveType() {
            if (this.isDown) {
                return MoveType.Down;
            }
            if (this.isLeft) {
                return MoveType.Left;
            }
            if (this.isRight) {
                return MoveType.Right;
            }
            if (this.isUp) {
                return MoveType.Up;
            }
        }
        isPressed() {
            return this.isUp || this.isDown || this.isLeft || this.isRight || this.isSpace;
        }
        StartListenKeyboard() {
            Laya.stage.on(Laya.Event.KEY_UP, this, this.OnKeyboard);
        }
        StopListenKeyboard() {
            Laya.stage.off(Laya.Event.KEY_UP, this, this.OnKeyboard);
        }
        OnKeyboard(e) {
            switch (e.keyCode) {
                case Laya.Keyboard.LEFT:
                case Laya.Keyboard.A:
                    this.reset();
                    this.isLeft = true;
                    break;
                case Laya.Keyboard.RIGHT:
                case Laya.Keyboard.D:
                    this.reset();
                    this.isRight = true;
                    break;
                case Laya.Keyboard.UP:
                case Laya.Keyboard.W:
                    this.reset();
                    this.isUp = true;
                    break;
                case Laya.Keyboard.DOWN:
                case Laya.Keyboard.S:
                    this.reset();
                    this.isDown = true;
                    break;
            }
        }
        OnClickCard(card) {
            var heroPosition = this.game.field.field.findHeroPosition();
            var position = this.game.field.field.findPosition(card);
            if (heroPosition.row == position.row) {
                var sub = position.column - heroPosition.column;
                if (sub == 1) {
                    this.reset();
                    this.isRight = true;
                }
                else if (sub == -1) {
                    this.reset();
                    this.isLeft = true;
                }
            }
            else if (heroPosition.column == position.column) {
                var sub = position.row - heroPosition.row;
                if (sub == 1) {
                    this.reset();
                    this.isDown = true;
                }
                else if (sub == -1) {
                    this.reset();
                    this.isUp = true;
                }
            }
        }
    }

    class Shake {
        constructor() {
            this._isShaking = false;
            this._startTime = 0;
            this._offsetPos = [0, 0];
            this.shank_I = 0;
            this._orgX = 0;
            this._orgY = 0;
        }
        exe(target, intensity = 30, duration = 300, radius = 6) {
            if (this._isShaking) {
                return;
            }
            this._isShaking = true;
            this._startTime = Laya.timer.currTimer;
            this._offsetPos = [0, 0];
            this.shank_I = 0;
            this._target = target;
            this._orgX = target.x;
            this._orgY = target.y;
            Laya.timer.loop(intensity, this, this._pos, [duration, radius]);
        }
        _pos(duration, radius) {
            this._offsetPos[this.shank_I % 2] = (this._offsetPos[this.shank_I % 2] > 0) ? -radius : radius;
            this.shank_I++;
            this._target.x += this._offsetPos[0];
            this._target.y += this._offsetPos[1];
            if (Laya.timer.currTimer - this._startTime >= duration) {
                Laya.timer.clear(this, this._pos);
                this.shank_I = 0;
                this._isShaking = false;
                this._target.x = this._orgX;
                this._target.y = this._orgY;
                this._target = null;
            }
        }
    }

    class WarGame {
        constructor() {
            this.shakeHandler = new Shake();
            this.animationQueue = [];
            this.keyboardManager = new keyboardManager();
            this.isAnimationing = false;
            this.isPause = false;
            this.isChest = false;
        }
        init(windowUI) {
            window['game'] = this;
            this.windowUI = windowUI;
            this.container = windowUI.m_container;
            this.stageClickFx = new StageClickFx();
            this.keyboardManager.init(this);
            this.rnd = new RandomDataGenerator([(Date.now() * Math.random()).toString()]);
            this.cardFactory = new CardFactory(this);
            this.field = new Field(this);
        }
        testCardViews() {
            var colMax = 5;
            var list = Game.config.card.getConfigList();
            for (var i = 0, len = list.length; i < len; i++) {
                var config = list[i];
                var view = CardView.PoolGet();
                view.SetConfig(config);
                this.container.addChild(view);
                var x = i % colMax * view.width + view.width * 0.5;
                var y = Math.floor(i / colMax) * view.height;
                view.setXY(x, y);
                console.log(i, x, y, config.name, config.id);
            }
            this.container.setScale(0.5, 0.5);
        }
        launch() {
            GameStatus.init(),
                this.stageClickFx.install();
            this.keyboardManager.StartListenKeyboard();
            this.animationQueue = this.field.initField();
            Laya.timer.frameLoop(1, this, this.update);
        }
        stop() {
            Laya.timer.clear(this, this.update);
            this.stageClickFx.uninstall();
            this.keyboardManager.StopListenKeyboard();
        }
        update() {
            if (this.isPause) {
                return;
            }
            if (!this.isAnimationing) {
                if (this.animationQueue.length > 0) {
                    this.runAnimationFromQueue();
                }
                else {
                    this.fillQueue();
                }
            }
        }
        runAnimationFromQueue() {
            var animation = this.animationQueue.shift();
            if (animation instanceof TweenContainer) {
                var animationDuration = animation.animationDuration;
                this.isAnimationing = true;
                animation.restart();
                setTimeout(this.onAnimationComplete.bind(this), animationDuration);
            }
            else {
                console.error(animation);
                this.onAnimationComplete();
            }
        }
        onAnimationComplete() {
            this.isAnimationing = false;
            this.keyboardManager.reset();
        }
        fillQueue() {
            if (GameStatus.isHeroAlive) {
                var hero = this.field.getHero();
                if (hero.needShoot) {
                    this.addToAnimationQueue(this.field.shootCannon());
                    hero.needShoot = false;
                    return;
                }
                if (hero.needRunLightning) {
                    this.addToAnimationQueue(this.field.shootLightning());
                    hero.needRunLightning = false;
                    return;
                }
                if (hero.needShootMultiplier) {
                    this.addToAnimationQueue(this.field.shootMultiplier());
                    hero.needShootMultiplier = false;
                    return;
                }
                if (hero.needShootSkull) {
                    this.addToAnimationQueue(this.field.shootSkull());
                    hero.needShootSkull = false;
                    return;
                }
                this.addToAnimationQueue(this.field.smashBomb());
                this.checkKeyHandler();
            }
            else {
                GameStatus.isGameEnd = true;
            }
        }
        addToAnimationQueue(tweenList) {
            if (tweenList == null)
                return;
            if (tweenList instanceof Array) {
                for (var item of tweenList) {
                    if (item == null)
                        continue;
                    if (item instanceof Array) {
                        this.addToAnimationQueue(item);
                    }
                    else {
                        this.animationQueue.push(item);
                    }
                }
            }
            else {
                this.animationQueue.push(tweenList);
            }
        }
        checkKeyHandler() {
            var moveType = this.keyboardManager.getMoveType();
            if (moveType) {
                console.log(moveType);
                var tweenList = this.move(moveType);
                if (tweenList && tweenList.length > 0) {
                    this.field.stepUpdate();
                    this.addToAnimationQueue(tweenList);
                }
                else {
                    this.keyboardManager.reset();
                }
            }
        }
        move(moveType) {
            var fightCard = this.field.getCardToFight(moveType);
            if (null == fightCard)
                return [];
            var heroCard = this.field.getHero();
            var fightResult = heroCard.fight(fightCard);
            if (!fightResult.isHeroAlive) {
                if (GameStatus.isHeart) {
                    GameStatus.isHeart = false;
                    this.keyboardManager.reset();
                    heroCard.useHeart();
                    return this.field.move(moveType);
                }
                else {
                    GameStatus.isHeroAlive = false;
                    return this.field.removeAllChild();
                }
            }
            if (fightResult.isChest) {
                this.moveType = moveType;
                if (GameStatus.currentHero == HeroType.Key) {
                    this.chestOpened();
                }
                else if (GameStatus.isKey) {
                    this.field.getHero().setShopItemsStatus();
                    this.chestOpened();
                }
                else {
                    this.openChestPopUp();
                }
                return [];
            }
            var tweenContainer;
            var tweenList = [];
            GameStatus.stepUpdate();
            if (fightResult.isNeedIncreaseLifeByOne) {
                tweenContainer = TweenContainer.PoolGet();
                tweenContainer.tweens.push(this.field.getHero().increaseLifeByOneTween());
                tweenList.push(tweenContainer);
            }
            if (fightResult.isMove) {
                tweenList.push(this.field.move(moveType));
            }
            else {
                console.log("替换卡牌, 木桶替换");
                tweenContainer = TweenContainer.PoolGet();
                var tween = this.field.replaceCard(moveType, CardGenerationType.AfterBarrel, fightCard.getScore());
                tweenContainer.tweens.push(tween);
                tweenContainer.tweens.push(this.field.getHero().increaseLifeByOneTween());
                tweenList.push(tweenContainer);
            }
            if (this.isChangeTurnsToBoss()) {
                GameStatus.decreaseTurnsToBoss();
            }
            return tweenList;
        }
        isChangeTurnsToBoss() {
            return !GameStatus.isNeedCreateBoss && !this.field.isBossInTheField();
        }
        shake(intensity, time) {
            this.shakeHandler.exe(this.windowUI, intensity, time);
        }
        openChestPopUp() {
            if (!this.isPause && !this.isChest) {
                this.isChest = true;
                this.windowUI.m_chectPopupPanel.sResult.addOnce((isSuccess) => {
                    if (isSuccess) {
                        this.chestOpened();
                    }
                    else {
                        this.chestClosed();
                    }
                }, this);
                this.windowUI.m_chectPopupPanel.Open();
            }
        }
        chestOpened() {
            SoundController.instance.playSound(SoundConsts.ChestOpening);
            this.isChest = false,
                this.field.playAllAnimations();
            this.chestOpenedAction();
        }
        chestOpenedAction() {
            this.destroyChestDelayed();
            this.addToAnimationQueue(this.field.replaceCard(this.moveType, CardGenerationType.AfterChest));
            GameStatus.stepUpdate();
            this.isChangeTurnsToBoss();
            GameStatus.decreaseTurnsToBoss();
        }
        destroyChestDelayed(delay = 1) {
            setTimeout(this.destroyChest.bind(this), delay);
        }
        destroyChest() {
        }
        chestClosed() {
            this.isChest = false;
            var shakeTime = 4 == GameStatus.RowCount ? 1e3 : 500;
            this.shake(Consts.ShakeIntensity, shakeTime),
                this.field.smashHero(600);
            this.field.playAllAnimations();
            this.destroyChestDelayed(500);
            var heroCard = this.field.getHero();
            if (GameStatus.currentHero != HeroType.Bomb) {
                heroCard.reduceScoreInNSeconds(1, 1);
            }
            if (0 == heroCard.getScore()) {
                this.addToAnimationQueue(this.field.removeAllChild());
                GameStatus.isHeroAlive = false;
            }
            else {
                this.addToAnimationQueue(this.field.move(this.moveType));
            }
            GameStatus.stepUpdate();
            if (this.isChangeTurnsToBoss()) {
                GameStatus.decreaseTurnsToBoss();
            }
        }
    }

    class War {
        static init(windowUI) {
            if (this.isInited)
                return;
            this.game = new WarGame();
            this.game.init(windowUI);
            this.isInited = true;
        }
        static launch() {
            this.game.launch();
        }
        static stop() {
            this.game.stop();
        }
        static uninstall() {
        }
    }
    War.isInited = false;
    window['War'] = War;

    class WindowWarUI extends WindowWarUIStruct {
        onWindowInited() {
            War.init(this);
        }
        onWindowDestory() {
            return false;
        }
        onWindowWillShow() {
        }
        onWindowWillHide() {
        }
        onWindowShow() {
            War.launch();
        }
        onWindowHide() {
        }
    }

    class WarWindow extends MWindow {
        constructor() {
            super();
            this.addAssetForFguiComponent(WindowWarUI);
        }
        generateAssetsForDynmic() {
            super.generateAssetsForDynmic();
        }
        onMenuCreate() {
            let windowUI = WindowWarUI.createInstance();
            this.conent = windowUI;
            this.contentPane = windowUI;
            super.onMenuCreate();
        }
        onShowComplete() {
            super.onShowComplete();
        }
        onHideComplete() {
            super.onHideComplete();
        }
    }

    class MenuWindows {
        static get dict() {
            if (!this._dict) {
                this._dict = new Dictionary();
            }
            return this._dict;
        }
        static get(menuId) {
            return MenuWindows.dict.getValue(menuId);
        }
        static add(menuId, windowClass) {
            MenuWindows.dict.add(menuId, new ModuleConfig(menuId, windowClass));
        }
        static install() {
            MenuWindows.add(MenuId.Login, LoginWindow);
            MenuWindows.add(MenuId.Home, HomeWindow);
            MenuWindows.add(MenuId.War, WarWindow);
        }
    }

    class MenuConfig extends MenuConfigLang {
        get menuId() {
            return this.id;
        }
        get menuLayer() {
            return this.layer;
        }
        get menuCloseOtherType() {
            return this.closeOtherType;
        }
        get menuLoaderId() {
            switch (this.menuId) {
                case MenuId.War:
                    return LoaderId.Launch;
            }
            return this.loaderId;
        }
        get iconUrl() {
            if (!this._iconUrl) {
                if (!isNullOrEmpty(this.icon)) {
                    this._iconUrl = Res.getMenuIconUrl(this.icon);
                }
            }
            return this._iconUrl;
        }
        get nameIconUrl() {
            if (!this._nameIcon) {
                if (!isNullOrEmpty(this.moduleNameIcon)) {
                    this._nameIcon = Res.getMenuNameIconUrl(this.moduleNameIcon);
                }
            }
            return this._nameIcon;
        }
        get isSubbarMainButton() {
            return this.menuId >= MenuId.SubMenuButtonBegin;
        }
        get isUnlock() {
            let menuid = this.menuId;
            if (Game.config.unlock.hasConfig(menuid)) {
                return Game.moduleModel.home.IsOpen(menuid);
            }
            else {
                return true;
            }
        }
        get lockText() {
            let unlockConfig = Game.config.unlock.getUnlockConfig(this.menuId);
            if (unlockConfig) {
                let olevel = unlockConfig.openLevel <= Game.user.level ? "" : `需要主公等级达到${unlockConfig.openLevel}`;
                if (!unlockConfig.checkPoint) {
                    return olevel + "后开启";
                }
                let config = Game.config.checkPoint.getConfig(unlockConfig.checkPoint);
                let active = Game.moduleModel.section.getMissionDataById(unlockConfig.checkPoint).isActive;
                let cpoint = `通过关卡${config.chapter}-${config.mapID}`;
                return Boolean(olevel) ? olevel + (active ? ",且" + cpoint : "") : cpoint + "后开启";
            }
            return TEXT.Lock;
        }
        get lockVisiable() {
            let unlockConfig = Game.config.unlock.getConfig(this.menuId);
            if (unlockConfig) {
                return unlockConfig.showType == 0;
            }
            return true;
        }
        get enableOpen() {
            return MenuValidateEnableOpen.getInstance().validate(this.menuId);
        }
        get isNew() {
            return MenuValidateNew.getInstance().validate(this.menuId);
        }
        async openMenu() {
            if (this.menuId < MenuId.SubMenuButtonBegin) {
                if (!this.isUnlock) {
                    Game.system.toastText(this.lockText);
                    return false;
                }
                let windowConfig = MenuWindows.get(this.menuId);
                if (!windowConfig) {
                    Game.system.toastText(TEXT.Disable);
                    return false;
                }
                if (windowConfig.windowClass) {
                    let result = await windowConfig.windowClass.AsyncEnableOpen();
                    if (!result) {
                        return false;
                    }
                }
                if (this.enableOpen) {
                    Game.menu.open(this.menuId);
                    return true;
                }
            }
            return true;
        }
    }

    class MsgConfig extends MsgConfigLang {
    }

    class UnlockConfig extends UnlockConfigLang {
        get menuConfig() {
            return Game.config.menu.getConfig(this.menuId);
        }
        get lockvisible() {
            return this.showType == 1;
        }
        get isUnlock() {
            let menuConfig = this.menuConfig;
            if (menuConfig) {
                return menuConfig.isUnlock;
            }
            return false;
        }
        get IsNew() {
            let menuConfig = this.menuConfig;
            if (menuConfig) {
                return menuConfig.isNew;
            }
            return false;
        }
        get isOpenShow() {
            return false;
        }
        get isOpenShowMenu() {
            return false;
        }
        get iconUrl() {
            let url = "";
            return url;
        }
    }

    class ExcelConfigReader {
        constructor(tabelName, tabelConfigClass) {
            this._configList = [];
            this.tableName = tabelName;
            this.tabelConfigClass = tabelConfigClass;
        }
        onGameLoadedAll() {
        }
        get configDict() {
            if (!this._configDict) {
                this._configDict = ExcelConfigManager.pbconfig[this.tableName];
            }
            return this._configDict;
        }
        get configList() {
            if (this._configList.length == 0) {
                for (let id in this.configDict) {
                    this._configList.push(this.configDict[id]);
                }
            }
            return this._configList;
        }
        getConfigList() {
            return this.configList;
        }
        getConfig(id) {
            if (!this.configDict[id]) {
                console.log(`${this.tableName} 没有 id=${id} 的配置`);
            }
            return this.configDict[id];
        }
        hasConfig(id) {
            return this.configDict[id] ? true : false;
        }
        shieldConfig(ids) {
            for (let i = 0, len = ids.length; i < len; i++) {
                let id = ids[i];
                if (this.hasConfig(id)) {
                    delete this._configDict[id];
                    let configlist = this.configList;
                    for (let i = 0, len = configlist.length; i < len; i++)
                        if (configlist[i].id == id) {
                            configlist.splice(i, 1);
                            break;
                        }
                }
            }
        }
    }

    class CardConfigReader extends ExcelConfigReader {
        static GetId(type, level = 1) {
            return type * 100 + level;
        }
        getTypeLevelConfig(type, level = 1) {
            var id = CardConfigReader.GetId(type, level);
            return this.getConfig(id);
        }
    }

    class CardScoreTypeConfigReader extends ExcelConfigReader {
        constructor() {
            super(...arguments);
            this.configsByKey = new Map();
        }
        onGameLoadedAll() {
            super.onGameLoadedAll();
            let list = this.configList;
            for (let i = 0; i < list.length; i++) {
                let key = list[i].key;
                if (isNullOrEmpty(key)) {
                    key = list[i].id;
                }
                this.configsByKey.set(key, list[i]);
            }
        }
        getConfig(key) {
            if (!this.configsByKey.has(key)) {
                if (this.hasConfig(key)) {
                    return super.getConfig(key);
                }
                console.log(`${this.tableName} 没有 key=${key} 的配置`);
            }
            return this.configsByKey.get(key);
        }
    }

    class LoaderConfigReader extends ExcelConfigReader {
    }

    class MenuConfigReader extends ExcelConfigReader {
        constructor() {
            super(...arguments);
            this.barDict = new Dictionary();
        }
        getBarMenus(barType) {
            let configlist = [];
            configlist = this.barDict.getValue(barType);
            let isshowlist = [];
            for (let i = 0, len = configlist.length; i < len; i++) {
                let config = configlist[i];
                let unlock = Game.config.unlock.getUnlockConfig(config.menuId);
                (unlock && unlock.showType != 2 && config.menuId != MenuId.Sections) && isshowlist.push(config);
            }
            isshowlist.sort((a, b) => {
                return a.barIndex - b.barIndex;
            });
            return isshowlist;
        }
        getShowBarMenus(barType) {
            let configlist = [];
            configlist = this.barDict.getValue(barType);
            let isshowlist = [];
            for (let i = 0, len = configlist.length; i < len; i++) {
                let config = configlist[i];
                let unlock = Game.config.unlock.getUnlockConfig(config.menuId);
                (unlock && unlock.showType == 1 && unlock.showLevel <= Game.user.level) && isshowlist.push(config);
            }
            isshowlist.sort((a, b) => {
                return a.barIndex - b.barIndex;
            });
            return isshowlist;
        }
        onGameLoadedAll() {
            let list = this.configList;
            for (let i = 0; i < list.length; i++) {
                let config = list[i];
                let menuList = this.barDict.getValue(config.barType);
                if (!menuList) {
                    menuList = [];
                    this.barDict.add(config.barType, menuList);
                }
                menuList.push(config);
            }
        }
    }

    class MsgConfigReader extends ExcelConfigReader {
        constructor() {
            super(...arguments);
            this.configsByKey = new Map();
        }
        onGameLoadedAll() {
            super.onGameLoadedAll();
            let list = this.configList;
            for (let i = 0; i < list.length; i++) {
                let key = list[i].key;
                if (isNullOrEmpty(key)) {
                    key = list[i].id;
                }
                this.configsByKey.set(key, list[i]);
            }
        }
        getConfig(key) {
            if (!this.configsByKey.has(key)) {
                if (this.hasConfig(key)) {
                    return super.getConfig(key);
                }
                console.log(`${this.tableName} 没有 key=${key} 的配置`);
            }
            return this.configsByKey.get(key);
        }
        getTxt(key) {
            let config = this.getConfig(key);
            if (!config) {
                return `[Error]${this.tableName} 没有 key=${key} 的配置`;
            }
            return config.notice;
        }
        getTxtFormat(key, ...args) {
            let txt = this.getTxt(key).format(...args);
            return txt;
        }
    }

    class UnlockConfigReader extends ExcelConfigReader {
        constructor() {
            super(...arguments);
            this.menuConfigs = new Dictionary();
            this.menuGroups = new Dictionary();
            this.unlockGroups = new Dictionary();
            this.sortMenus = new Dictionary();
        }
        setConfig(config) {
            if (!config.menuIndexId) {
                this.menuConfigs.add(config.menuId, config);
            }
            else {
                this.menuConfigs.add(config.menuIndexId, config);
            }
            let list, group;
            group = config.group;
            if (this.menuGroups.hasKey(group)) {
                list = this.menuGroups.getValue(group);
            }
            else {
                list = [];
                this.menuGroups.add(group, list);
            }
            list.push(config);
            let openList, type;
            type = config.openType;
            if (this.unlockGroups.hasKey(type)) {
                openList = this.unlockGroups.getValue(type);
            }
            else {
                openList = [];
                this.unlockGroups.add(type, openList);
            }
            openList.push(config);
        }
        getUnlockConfig(menuId) {
            return this.menuConfigs.getValue(menuId);
        }
        getBarMenus(barType) {
            let list = this.menuGroups.getValue(barType);
            if (this.sortMenus.hasKey(barType) == false) {
                list.sort((a, b) => { return a.groupId - b.groupId; });
                this.sortMenus.add(barType, true);
            }
            return list;
        }
        getUnlocks(openType) {
            let list = this.unlockGroups.getValue(openType);
            return list;
        }
        onGameLoadedAll() {
            let list = this.configList;
            for (let config of list) {
                this.setConfig(config);
            }
        }
    }

    class ExcelConfigManager {
        constructor() {
            this.card = new CardConfigReader('Card', CardConfig);
            this.cardScoreType = new CardScoreTypeConfigReader('CardScoreType', CardScoreTypeConfig);
            this.loader = new LoaderConfigReader('Loader', LoaderConfig);
            this.menu = new MenuConfigReader('Menu', MenuConfig);
            this.msg = new MsgConfigReader('Msg', MsgConfig);
            this.unlock = new UnlockConfigReader('Unlock', UnlockConfig);
        }
        static Init() {
            excelconfig.Card = CardConfig;
            excelconfig.CardScoreType = CardScoreTypeConfig;
            excelconfig.Loader = LoaderConfig;
            excelconfig.Menu = MenuConfig;
            excelconfig.Msg = MsgConfig;
            excelconfig.Unlock = UnlockConfig;
        }
    }

    class ConfigManagerExpressionList extends ExcelConfigManager {
    }

    var EnumExcelConfigType;
    (function (EnumExcelConfigType) {
        EnumExcelConfigType[EnumExcelConfigType["pb"] = 0] = "pb";
        EnumExcelConfigType[EnumExcelConfigType["json"] = 1] = "json";
    })(EnumExcelConfigType || (EnumExcelConfigType = {}));
    class ConfigManager extends ConfigManagerExpressionList {
        constructor() {
            super(...arguments);
            this.sLoadProgress = new Typed3Signal();
            this.sLoaded = new Signal();
            this.loadProgress = 0;
            this.readers = [];
            this.readerMap = new Map();
            this.configType = EnumExcelConfigType.json;
        }
        initList() {
            ExcelConfigManager.Init();
            this.readers.length = 0;
            for (let key in this) {
                let item = this[key];
                if (item instanceof ExcelConfigReader) {
                    this.readers.push(item);
                    this.readerMap.set(item.tableName, item);
                }
            }
        }
        shieldList() {
            let heros = Game.channel.serverItem.shieldHero;
            if (heros && heros.length) {
                Game.config.hero.shieldConfig(heros);
            }
        }
        async loadAllAsync() {
            this.loadProgress = 0;
            let count = this.readers.length;
            switch (this.configType) {
                case EnumExcelConfigType.pb:
                    await this.loadPB();
                    break;
                default:
                    await this.loadJson();
                    break;
            }
            window['Global'] = ExcelConfigManager.pbconfig.Global;
            this.onGameLoadedAll();
        }
        async loadPB() {
            let arrayBuffer = await Game.asset.loadResAsync("res/config/pb/excelconfig.bin", Laya.Loader.BUFFER);
            let buffer = new Uint8Array(arrayBuffer);
            ExcelConfigManager.pbconfig = excelconfig.ConfigMng.decode(buffer);
        }
        async loadJson() {
            let json = await Game.asset.loadResAsync("res/config/pb/excelconfig.json", Laya.Loader.JSON);
            this.InstallJson(json);
        }
        InstallJson(json) {
            let cm = ExcelConfigManager.pbconfig = new excelconfig.ConfigMng();
            let globalJson = json['Global'];
            let globalConfig = new excelconfig.Global();
            for (var key in globalJson) {
                let configKey = this.keyToPbKey(key);
                globalConfig[key] = globalJson[key];
            }
            cm.Global = globalConfig;
            for (let tabelName in json) {
                let tabelJson = json[tabelName];
                if (!this.readerMap.has(tabelName))
                    continue;
                let reader = this.readerMap.get(tabelName);
                let configCls = reader.tabelConfigClass;
                cm[tabelName] = {};
                for (let id in tabelJson) {
                    let lineJson = tabelJson[id];
                    let config = new configCls();
                    for (var key in lineJson) {
                        let configKey = this.keyToPbKey(key);
                        config[configKey] = lineJson[key];
                    }
                    cm[tabelName][id] = config;
                }
            }
        }
        keyToPbKey(key) {
            if (key.indexOf("_") == -1)
                return key;
            let arr = key.split('_');
            for (let i = 1; i < arr.length; i++) {
                let str = arr[i];
                if (str.length >= 1) {
                    arr[i] = str.substr(0, 1).toUpperCase() + str.substr(1, str.length - 1);
                }
            }
            key = arr.join('');
            return key;
        }
        onGameLoadedAll() {
            for (let i = 0; i < this.readers.length; i++) {
                this.readers[i].onGameLoadedAll();
            }
            this.sLoaded.dispatch();
        }
    }

    class ScreenSettingConfig {
        constructor() {
            this.developWidth = 750;
            this.developHeight = 1334;
        }
        get developAspect() {
            return this.developWidth / this.developHeight;
        }
        get isLandsape() {
            return this.screenWidth > this.screenHeight;
        }
        get screenWidth() {
            return Laya.stage.width;
        }
        get screenHeight() {
            return Laya.stage.height;
        }
        get isWX() {
            return window['wx'] ? true : false;
        }
        get safeArea() {
            if (this.isWX) {
                return wx.getSystemInfoSync().safeArea;
            }
        }
        get liuHaiHeightTop() {
            return 44;
            if (this.isWX) {
                let safeArea = this.safeArea;
                if (safeArea.width < safeArea.height) {
                    return safeArea.top;
                }
                else {
                    return safeArea.left;
                }
            }
            return 44;
        }
        get liuHaiHeightBottom() {
            if (this.isWX) {
                return this.liuHaiHeightTop;
            }
            return 44;
        }
        get screenHeightLiuHai() {
            return fgui.GRoot.inst.height - this.liuHaiHeightTop - this.liuHaiHeightBottom;
        }
        get screenWidthLiuHai() {
            return fgui.GRoot.inst.width - this.liuHaiHeightTop - this.liuHaiHeightBottom;
        }
        get screenAspect() {
            return this.screenWidth / this.screenHeight;
        }
        get screenScaleExpand() {
            let rate = 1;
            if (this.screenAspect <= this.developAspect) {
                rate = this.screenHeight / this.developHeight / (this.screenWidth / this.developWidth);
            }
            else {
                rate = this.screenWidth / this.developWidth / (this.screenHeight / this.developHeight);
            }
            return rate;
        }
        get screenScaleX() {
            return this.screenWidth / this.developWidth;
        }
        get screenScaleY() {
            return this.screenHeight / this.developHeight;
        }
        get screenScaleShrink() {
            return Math.min(this.screenScaleX, this.screenScaleY);
        }
        get screenScaleShrinkMax() {
            return Math.max(this.screenScaleX, this.screenScaleY);
        }
    }

    class LocalStorage {
        get username() {
            if (!this._username) {
                this._username = this.getString("username", true);
            }
            return this._username;
        }
        set username(value) {
            this._username = value;
            this.setString("username", value, true);
            Game.sound.onLogin();
        }
        getKey(key, isGobal = false) {
            if (isGobal) {
                return key;
            }
            else {
                return this.username + "_" + key;
            }
        }
        setItem(key, value, isGobal = false) {
            Laya.LocalStorage.setItem(this.getKey(key, isGobal), value);
        }
        getItem(key, isGobal = false) {
            return Laya.LocalStorage.getItem(this.getKey(key, isGobal));
        }
        setString(key, value, isGobal = false) {
            Laya.LocalStorage.setItem(this.getKey(key, isGobal), value);
        }
        getString(key, isGobal = false) {
            let val = Laya.LocalStorage.getItem(this.getKey(key, isGobal));
            if (val === undefined || val === null) {
                val = "";
            }
            return val;
        }
        setBoolean(key, value, isGobal = false) {
            Laya.LocalStorage.setItem(this.getKey(key, isGobal), value ? "true" : "false");
        }
        getBoolean(key, isGobal = false) {
            return Laya.LocalStorage.getItem(this.getKey(key, isGobal)) == "true";
        }
        setInt(key, value, isGobal = false) {
            Laya.LocalStorage.setItem(this.getKey(key, isGobal), value.toString());
        }
        getInt(key, isGobal = false) {
            let val = Laya.LocalStorage.getItem(this.getKey(key, isGobal));
            if (val) {
                return parseInt(val);
            }
            return 0;
        }
        setFloat(key, value, isGobal = false) {
            Laya.LocalStorage.setItem(this.getKey(key, isGobal), value.toString());
        }
        getFloat(key, isGobal = false) {
            let val = Laya.LocalStorage.getItem(this.getKey(key, isGobal));
            if (val) {
                return parseFloat(val);
            }
            return 0;
        }
        setJSON(key, value, isGobal = false) {
            Laya.LocalStorage.setJSON(this.getKey(key, isGobal), value);
        }
        getJSON(key, isGobal = false) {
            return Laya.LocalStorage.getJSON(this.getKey(key, isGobal));
        }
        removeItem(key, isGobal = false) {
            return Laya.LocalStorage.removeItem(this.getKey(key, isGobal));
        }
        hasItem(key, isGobal = false) {
            return !isNullOrEmpty(Laya.LocalStorage.getItem(this.getKey(key, isGobal)));
        }
        clear() {
            return Laya.LocalStorage.clear();
        }
    }

    class GameLocalStorage extends LocalStorage {
        static get Instance() {
            if (!GameLocalStorage._Instance) {
                GameLocalStorage._Instance = new GameLocalStorage();
            }
            return GameLocalStorage._Instance;
        }
        get gmX() {
            if (this._gmX === undefined) {
                this._gmX = this.getFloat("gmX", true);
            }
            return this._gmX;
        }
        set gmX(value) {
            this._gmX = value;
            this.setFloat("gmX", value, true);
        }
        get gmY() {
            if (this._gmY === undefined) {
                if (this.hasItem("gmY", true)) {
                    this._gmY = this.getFloat("gmY", true);
                }
                else {
                    this._gmY = 100;
                }
            }
            return this._gmY;
        }
        set gmY(value) {
            this._gmY = value;
            this.setFloat("gmY", value, true);
        }
        get fontSetting() {
            if (!this._fontSetting) {
                this._fontSetting = this.getItem("fontSetting", true);
            }
            return this._fontSetting;
        }
        set fontSetting(value) {
            this._fontSetting = value;
            this.setItem("fontSetting", value, true);
        }
        get serverName() {
            if (!this._serverName) {
                this._serverName = this.getItem("serverName", true);
            }
            return this._serverName;
        }
        set serverName(value) {
            this._serverName = value;
            this.setItem("serverName", value, true);
        }
        get useraccountList() {
            if (!this._useraccountList) {
                this._useraccountList = this.getJSON("_useraccountList", true);
            }
            if (!this._useraccountList) {
                this._useraccountList = [];
            }
            return this._useraccountList;
        }
        set useraccountList(value) {
            this._useraccountList = value;
            this.setJSON("_useraccountList", value, true);
        }
        addUseraccount(username, password) {
            let has = false;
            let list = this.useraccountList ? this.useraccountList : [];
            for (let i = 0; i < list.length; i++) {
                if (list[i].username == username) {
                    list[i].password = password;
                    list[i].lasttime = Game.time.localTimeMS;
                    has = true;
                }
            }
            if (!has) {
                list.push({ username: username, password: password, lasttime: Game.time.localTimeMS });
            }
            list.sort((a, b) => { return b.lasttime - a.lasttime; });
            this.useraccountList = list;
        }
        get password() {
            if (!this._password) {
                this._password = this.getItem("password");
                if (this._password == null)
                    this._password = "";
            }
            return this._password;
        }
        set password(value) {
            this._password = value;
            this.setItem("password", value);
        }
        get server() {
            if (!this._server) {
                this._server = this.getInt("server");
                if (this._server == null)
                    this._server = 0;
            }
            return this._server;
        }
        set server(value) {
            this._server = value;
            this.setInt("server", value);
        }
        get deviceId() {
            if (!this._deviceId) {
                if (!this._deviceId || this._deviceId == "undefined" || this._deviceId == undefined) {
                    this._deviceId = this.getString("_deviceId", true);
                    if (!this._deviceId) {
                        let timestamp = new Date().getTime();
                        let random = Math.random();
                        this._deviceId = timestamp.toString() + "." + random.toString();
                    }
                }
            }
            return this._deviceId;
        }
        set deviceId(value) {
            this._deviceId = value;
            this.setString("_deviceId", value, true);
        }
        get guestusername() {
            if (!this._guestusername) {
                this._guestusername = this.getString("guest", true);
            }
            return this._guestusername;
        }
        set guestusername(value) {
            this._guestusername = value;
            this.setString("guest", value, true);
            Game.sound.onLogin();
        }
        get isGuest() {
            if (this._isGuest === undefined) {
                this._isGuest = this.getBoolean("isGuest", true);
            }
            return this._isGuest;
        }
        set isGuest(value) {
            this._isGuest = value;
            this.setBoolean("isGuest", value, true);
        }
        get isGameGuest() {
            if (this._isGameGuest === undefined) {
                this._isGameGuest = this.getBoolean("isGameGuest", true);
            }
            return this._isGameGuest;
        }
        set isGameGuest(value) {
            this._isGameGuest = value;
            this.setBoolean("isGameGuest", value, true);
        }
        get isNoticTodayNoOpen() {
            if (this._isNoticTodayNoOpen === undefined) {
                this._isNoticTodayNoOpen = this.getBoolean("isNoticTodayNoOpen", true);
            }
            return this._isNoticTodayNoOpen;
        }
        set isNoticTodayNoOpen(value) {
            this._isNoticTodayNoOpen = value;
            this.setBoolean("isNoticTodayNoOpen", value, true);
        }
        get lastOpenShopSpecialTime() {
            if (this._lastOpenShopSpecialTime === undefined) {
                this._lastOpenShopSpecialTime = this.getFloat("lastOpenShopSpecialTime", true);
            }
            return this._lastOpenShopSpecialTime;
        }
        set lastOpenShopSpecialTime(value) {
            this._lastOpenShopSpecialTime = value;
            this.setFloat("lastOpenShopSpecialTime", value, true);
        }
        get lastOpenShopSingleTime() {
            if (this._lastOpenShopSingleTime === undefined) {
                this._lastOpenShopSingleTime = this.getFloat("lastOpenShopSingleTime", true);
            }
            return this._lastOpenShopSingleTime;
        }
        set lastOpenShopSingleTime(value) {
            this._lastOpenShopSingleTime = value;
            this.setFloat("lastOpenShopSingleTime", value, true);
        }
    }

    var GameDevicePerformanceType;
    (function (GameDevicePerformanceType) {
        GameDevicePerformanceType[GameDevicePerformanceType["VeryLower"] = 0] = "VeryLower";
        GameDevicePerformanceType[GameDevicePerformanceType["Lower"] = 1] = "Lower";
        GameDevicePerformanceType[GameDevicePerformanceType["Middle"] = 2] = "Middle";
        GameDevicePerformanceType[GameDevicePerformanceType["Hight"] = 3] = "Hight";
    })(GameDevicePerformanceType || (GameDevicePerformanceType = {}));
    class GameDeviceConfig {
        constructor() {
            this.skeletonCacheMaxNum = 10;
            this.unitMaxNum = 10;
            this.roomUnitMaxNum = 2;
            this.menuCacheTime = 10000;
            this.fguiLoaderCacheNum = 100;
            this.fguiLoaderCacheTime = 100;
            this.trailNum = 5;
            this._performanceType = GameDevicePerformanceType.Lower;
            this._networkType = -1;
        }
        get performanceType() {
            return this._performanceType;
        }
        set performanceType(val) {
            this._performanceType = val;
            switch (val) {
                case GameDevicePerformanceType.VeryLower:
                    this.skeletonCacheMaxNum = 5;
                    this.unitMaxNum = 18;
                    this.roomUnitMaxNum = 2;
                    this.menuCacheTime = 3000;
                    this.fguiLoaderCacheNum = 50;
                    this.fguiLoaderCacheTime = 3000;
                    this.trailNum = 1;
                    break;
                case GameDevicePerformanceType.Lower:
                    this.skeletonCacheMaxNum = 10;
                    this.unitMaxNum = 20;
                    this.roomUnitMaxNum = 3;
                    this.menuCacheTime = 3000;
                    this.fguiLoaderCacheNum = 30;
                    this.fguiLoaderCacheTime = 3000;
                    this.trailNum = 2;
                    break;
                case GameDevicePerformanceType.Middle:
                    this.skeletonCacheMaxNum = 25;
                    this.unitMaxNum = 30;
                    this.roomUnitMaxNum = 4;
                    this.menuCacheTime = 10000;
                    this.fguiLoaderCacheNum = 60;
                    this.fguiLoaderCacheTime = 10000;
                    this.trailNum = 4;
                    break;
                case GameDevicePerformanceType.Hight:
                    this.skeletonCacheMaxNum = 50;
                    this.unitMaxNum = 50;
                    this.roomUnitMaxNum = 4;
                    this.menuCacheTime = 300000;
                    this.fguiLoaderCacheNum = 100;
                    this.fguiLoaderCacheTime = 100000;
                    this.trailNum = 5;
                    break;
            }
        }
        init() {
            let totalMem = this.getTotalMem();
            if (totalMem <= 0) {
                this.performanceType = GameDevicePerformanceType.Hight;
            }
            else if (totalMem <= 1 * 1024 * 1024) {
                this.performanceType = GameDevicePerformanceType.VeryLower;
            }
            else if (totalMem <= 2 * 1024 * 1024) {
                this.performanceType = GameDevicePerformanceType.Middle;
            }
            else {
                this.performanceType = GameDevicePerformanceType.Hight;
            }
        }
        get isApp() {
            return window["conch"] ? true : false;
        }
        getTotalMem() {
            if (this.isApp) {
                return window["conch"].config.getTotalMem();
            }
            return 0;
        }
        getUsedMem() {
            if (this.isApp) {
                return window["conch"].config.getUsedMem();
            }
            return 0;
        }
        getAvalidMem() {
            if (this.isApp) {
                return window["conch"].config.getAvalidMem();
            }
            return 0;
        }
        getNetworkType() {
            if (this._networkType == -1) {
                if (this.isApp) {
                    this._networkType = window["conch"].config.getNetworkType();
                    return this._networkType;
                }
            }
            else {
                return this._networkType;
            }
            return NetworkType.NET_UNKNOWN;
        }
        set networkType(type) {
            this._networkType = type;
        }
        printInfo() {
            let str = ` TotalMem: ${kbToStr(this.getTotalMem())}\n UsedMem: ${kbToStr(this.getUsedMem())}\n AvalidMem: ${kbToStr(this.getAvalidMem())}\n NetworkType: ${this.getNetworkType()}`;
            console.log(str);
        }
    }

    class LangType {
        static toLang(httpLang) {
            httpLang = httpLang.replace("-", "_").toLowerCase();
            if (httpLang.indexOf("en") != -1)
                httpLang = LangType.en;
            {
                let has = false;
                for (let v in LangType) {
                    if (v == httpLang) {
                        has = true;
                        break;
                    }
                }
                if (!has) {
                    httpLang = LangType.en;
                }
            }
            return httpLang;
        }
    }
    LangType.zh_cn = "zh_cn";
    LangType.zh_tw = "zh_tw";
    LangType.en = "en";

    class BaseConfigRender {
        constructor() {
            this.configs = new Dictionary();
        }
        getConfigList() {
            return this.configs.getValues();
        }
        get configList() {
            return this.configs.getValues();
        }
        getConfig(id) {
            if (!this.configs.hasKey(id)) {
                console.log(`${this.tableName} 没有 id=${id} 的配置`);
            }
            return this.configs.getValue(id);
        }
        addConfig(config) {
            this.configs.add(config.id, config);
        }
        getConfigPath() {
            return Res.config + `csv/${this.tableName}.csv`;
        }
        load(configLoader, onComplete) {
        }
        reload(configLoader, onComplete) {
        }
        onGameLoadedAll() {
        }
        clear() {
            this.configs.clear();
        }
    }

    class CsvConfigRender extends BaseConfigRender {
        constructor() {
            super(...arguments);
            this.csvDelimiter = "\t";
            this.csvSeparatorReplace = null;
            this.csvLineSeparatorReplace = "|n|";
            this.headTypes = new Dictionary();
            this.headKeyEns = new Dictionary();
            this.headKeyFields = new Dictionary();
            this.headKeyCns = new Dictionary();
        }
        ReplaceSpearator(txt) {
            if (this.tableName == "TextFgui" && txt.indexOf(this.csvLineSeparatorReplace) != -1) ;
            txt = txt.replace(/\|n\|/g, "\n");
            txt = txt.replace(/\r/g, "");
            return txt;
        }
        load(configLoader, onComplete) {
            configLoader.loadConfig(this.getConfigPath(), (txt, path) => {
                this.parse(txt);
                if (onComplete) {
                    onComplete(this);
                }
                configLoader.unloadConfig(this.getConfigPath());
            });
        }
        reload(configLoader, onComplete) {
            this.clear();
            this.load(configLoader, onComplete);
        }
        clear() {
            this.headTypes.clear();
            this.headKeyEns.clear();
            this.headKeyFields.clear();
            this.headKeyCns.clear();
            super.clear();
        }
        parse(txt) {
            if (txt == null) {
                console.error(`${this.tableName}: txt=${txt}`);
                return;
            }
            let lines = txt.split('\n');
            let line;
            let csv;
            line = lines[0];
            csv = line.split(this.csvDelimiter);
            this.ParseHeadTypes(csv);
            line = lines[1];
            csv = line.split(this.csvDelimiter);
            this.ParseHeadKeyCN(csv);
            line = lines[2];
            csv = line.split(this.csvDelimiter);
            this.ParseHeadKeyEN(csv);
            for (let i = 3; i < lines.length; i++) {
                line = lines[i];
                if (isNullOrEmpty(line))
                    continue;
                csv = line.split(this.csvDelimiter);
                for (let j = 0; j < csv.length; j++) {
                    csv[j] = this.ReplaceSpearator(csv[j]);
                }
                this.ParseCsv(csv);
            }
        }
        ParseHeadTypes(csv) {
            let key;
            for (let i = 0; i < csv.length; i++) {
                key = csv[i];
                if (!isNullOrEmpty(key)) {
                    key = key.trim();
                    this.headTypes.add(i, key);
                }
            }
        }
        ParseHeadKeyCN(csv) {
            let key;
            for (let i = 0; i < csv.length; i++) {
                key = this.ReplaceSpearator(csv[i]);
                if (!isNullOrEmpty(key)) {
                    key = key.trim();
                    this.headKeyCns.add(i, key);
                }
            }
        }
        ParseHeadKeyEN(csv) {
            let key;
            for (let i = 0; i < csv.length; i++) {
                key = csv[i];
                if (!isNullOrEmpty(key)) {
                    key = key.trim();
                    if (this.headKeyEns.hasKey(key)) {
                        console.error(`${this.tableName}: ParseHeadKeyEN 已经存在key= ${key},  i = ${i}`);
                    }
                    this.headKeyEns.add(key, i);
                    this.headKeyFields.add(i, key);
                }
            }
        }
        ParseCsv(csv) {
        }
        GetHeadType(index) {
            return this.headTypes.getValue(index);
        }
        GetHeadField(index) {
            return this.headKeyFields.getValue(index);
        }
        GetHeadIndex(enName) {
            if (this.headKeyEns.hasKey(enName)) {
                return this.headKeyEns.getValue(enName);
            }
            console.error(`${this.tableName}: headKeyEns[${enName}] = -1`);
            return -1;
        }
        onGameLoadedAll() {
        }
    }

    class BaseConfig {
    }

    class LangConfig extends BaseConfig {
        constructor() {
            super(...arguments);
            this.dict = new Dictionary();
        }
    }

    class ConfigFieldType {
    }
    ConfigFieldType.MString = "string";
    ConfigFieldType.MStringArray = "string[]";

    class LangConfigReader extends CsvConfigRender {
        constructor(tableName) {
            super();
            this.lang = "zh_cn";
            this.tableName = tableName;
        }
        getConfigPath() {
            return `config/lang/${this.lang}/${this.tableName}.csv`;
        }
        get headKeyFieldList() {
            if (!this._headKeyFieldList) {
                this._headKeyFieldList = this.headKeyFields.getValues();
            }
            return this._headKeyFieldList;
        }
        ParseCsv(csv) {
            let config = new LangConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            let fieldList = this.headKeyFieldList;
            for (let i = 0; i < fieldList.length; i++) {
                let txt = csvGetString(csv, this.GetHeadIndex(fieldList[i]));
                let headType = this.GetHeadType(i);
                switch (headType) {
                    case ConfigFieldType.MStringArray:
                        config.dict.add(fieldList[i], toStringArray(txt));
                        break;
                    default:
                        config.dict.add(fieldList[i], txt);
                        break;
                }
            }
            this.addConfig(config);
        }
    }

    class LangConfigLoaderList {
        constructor() {
            this.lang = "zh_cn";
            this.renders = [];
            this.textCode = new LangConfigReader("TextCode");
            this.textFgui = new LangConfigReader("TextFgui");
        }
        initList() {
        }
    }

    class LangConfigLoader extends LangConfigLoaderList {
        constructor() {
            super(...arguments);
            this.sLoadProgress = new Typed3Signal();
            this.sLoaded = new Signal();
            this.loadProgress = 0;
            this.isLoadCompleted = false;
            this.textRenders = [];
            this.sTextLoaded = new Signal();
        }
        async loadAllAsync() {
            return new Promise((resolve) => {
                this.loadAll();
                this.sLoaded.addOnce(() => {
                    resolve();
                }, this);
            });
        }
        loadAll() {
            this.loadProgress = 0;
            let count = this.renders.length;
            let loadedNum = 0;
            let onItemLoaded = () => {
                loadedNum++;
                this.loadProgress = loadedNum / count;
                this.sLoadProgress.dispatch(loadedNum, count, this.loadProgress);
                if (loadedNum >= count) {
                    this.onGameLoadedAll();
                }
            };
            for (let i = 0; i < this.renders.length; i++) {
                this.renders[i].lang = this.lang;
                this.renders[i].load(this.configLoader, onItemLoaded);
            }
        }
        onGameLoadedAll() {
            for (let i = 0; i < this.renders.length; i++) {
                this.renders[i].onGameLoadedAll();
            }
            this.setCodeTEXT();
            FguiHelper.setStringsSource(this.textFgui);
            this.isLoadCompleted = true;
            this.sLoaded.dispatch();
        }
        loadText() {
            let renders = this.textRenders;
            if (renders.length == 0) {
                renders.push(this.textCode);
                renders.push(this.textFgui);
            }
            this.loadProgress = 0;
            let count = renders.length;
            let loadedNum = 0;
            let onItemLoaded = () => {
                loadedNum++;
                if (loadedNum >= count) {
                    this.onLoadTextComplte();
                }
            };
            for (let i = 0; i < renders.length; i++) {
                renders[i].lang = this.lang;
                renders[i].load(this.configLoader, onItemLoaded);
            }
        }
        onLoadTextComplte() {
            let renders = this.textRenders;
            for (let i = 0; i < renders.length; i++) {
                renders[i].onGameLoadedAll();
            }
            this.setCodeTEXT();
            FguiHelper.setStringsSource(this.textFgui);
            this.sTextLoaded.dispatch();
        }
        setCodeTEXT() {
            if (!this._srcTEXT && TEXT) {
                this._srcTEXT = new Dictionary();
                for (let key in TEXT) {
                    this._srcTEXT.add(key, TEXT[key]);
                }
            }
            let list = this.textCode.getConfigList();
            for (let i = 0; i < list.length; i++) {
                let item = list[i];
                let key = item.dict.getValue("key");
                let value = item.dict.getValue("value");
                if (!isNullOrEmpty(value)) {
                    TEXT[key] = value;
                }
            }
        }
    }

    class LangManager {
        constructor() {
            this.isUseLang = false;
            this._lang = null;
            this.langListDict = new Dictionary();
        }
        static get Instance() {
            if (!LangManager._Instance) {
                LangManager._Instance = new LangManager();
            }
            return LangManager._Instance;
        }
        get httpLang() {
            if (!this._httpLang) {
                this.httpLang = this.lang;
            }
            return this._httpLang;
        }
        set httpLang(value) {
            value = value.replace("_", "-");
            if (value.indexOf("-")) {
                let arr = value.split("-");
                for (let i = 1; i < arr.length; i++) {
                    arr[i] = arr[i].toUpperCase();
                }
                value = arr.join("-");
            }
            this._httpLang = value;
        }
        get lang() {
            if (!this._lang) {
                if (Game.localStorage.hasItem("_lang", true)) {
                    this._lang = Game.localStorage.getString("_lang", true);
                }
                else {
                    this._lang = LangType.zh_cn;
                }
                this.httpLang = this._lang;
            }
            return this._lang;
        }
        set lang(value) {
            this._lang = value;
            this.httpLang = value;
            Game.localStorage.setString("_lang", value, true);
        }
        get current() {
            if (this._current) {
                return this._current;
            }
            if (!this.langListDict.hasKey(this.lang)) {
                let langList = new LangConfigLoader();
                langList.lang = this.lang;
                this.langListDict.add(langList.lang, langList);
                this._current = langList;
            }
            return this.langListDict.getValue(this.lang);
        }
        getValue(tableName, id, fieldName) {
            let langReader = this.current[tableName];
            if (langReader) {
                let config = langReader.getConfig(id);
                if (config) {
                    return config.dict.getValue(fieldName);
                }
            }
            return null;
        }
    }

    class GuiSetting {
        static getResPackagePath(packageName, dir) {
            if (isNullOrEmpty(dir)) {
                return `${GuiSetting.resRoot}${packageName}`;
            }
            else {
                return `${GuiSetting.resRoot}${dir}/${packageName}`;
            }
        }
        static getResPath(filename, dir) {
            if (isNullOrEmpty(dir)) {
                return `${GuiSetting.resRoot}${filename}`;
            }
            else {
                return `${GuiSetting.resRoot}${dir}/${filename}`;
            }
        }
        static getMapPath(filename) {
            return this.getResPath(filename, "map");
        }
        static addPackage(resKey, packageConfig) {
            if (GuiSetting._uiPackageDict.hasKey(resKey)) {
                return GuiSetting._uiPackageDict.getValue(resKey);
            }
            else {
                let pkg = fgui.UIPackage.addPackage(resKey);
                GuiSetting._uiPackageDict.add(resKey, pkg);
                return pkg;
            }
        }
        static removePackage(resKey, packageConfig) {
            let pkg = GuiSetting._uiPackageDict.getValue(resKey);
            if (pkg) {
                fgui.UIPackage.removePackage(pkg.id);
                pkg.dispose();
                GuiSetting._uiPackageDict.remove(resKey);
            }
            GuiSetting._uiPackageDictForReferenceNum.remove(resKey);
        }
        static hasLoadPackage(resKey) {
            return GuiSetting._uiPackageDict.hasKey(resKey);
        }
        static addPackageReferenceNum(resKey) {
            let num = GuiSetting.getPackageReferenceNum(resKey) + 1;
            if (num == 0) {
                num = 1;
            }
            console.log("~~addPackageReferenceNum:  " + num + "  " + resKey);
            GuiSetting._uiPackageDictForReferenceNum.add(resKey, num);
            return num;
        }
        static removePackageReferenceNum(resKey) {
            let num = GuiSetting.getPackageReferenceNum(resKey) - 1;
            if (num < 0) {
                num = 0;
            }
            console.log("~~removePackageReferenceNum:  " + num + "  " + resKey);
            GuiSetting._uiPackageDictForReferenceNum.add(resKey, num);
            return num;
        }
        static getPackageReferenceNum(resKey) {
            return GuiSetting._uiPackageDictForReferenceNum.hasKey(resKey) ? GuiSetting._uiPackageDictForReferenceNum.getValue(resKey) : 0;
        }
    }
    GuiSetting.resRoot = "res/";
    GuiSetting.packageFileExtension = "bin";
    GuiSetting._uiPackageDict = new Dictionary();
    GuiSetting._uiPackageDictForReferenceNum = new Dictionary();

    var Handler$2 = Laya.Handler;
    var Loader$1 = Laya.Loader;
    class AssetManager {
        constructor() {
            this.loadedAssets = new Dictionary();
        }
        loadConfig(path, callback) {
            if (callback) {
                let obj = {
                    onLoaded: () => {
                        let txt = Laya.loader.getRes(path);
                        callback(txt, path);
                    }
                };
                Laya.loader.load(path, Handler$2.create(obj, obj.onLoaded), null, Loader$1.TEXT);
            }
        }
        unloadConfig(path) {
            Laya.loader.clearRes(path);
        }
        loadList(list, onObj, onCompleteFun, onProgress) {
            let count = list.length;
            let index = 0;
            let callback = {
                onComplete: (isSuccess) => {
                    let item = list[index];
                    index++;
                    if (onProgress) {
                        let rate = count > 0 ? index / count : 1;
                        onProgress(rate, index, count, item);
                    }
                    if (index >= count) {
                        if (onCompleteFun) {
                            if (onObj) {
                                onCompleteFun.apply(onObj);
                            }
                            else {
                                onCompleteFun();
                            }
                        }
                    }
                },
                onProgress: (val) => {
                }
            };
            if (list && list.length > 0) {
                let assets = [];
                let item;
                for (let i = 0; i < list.length; i++) {
                    item = list[i];
                    if (!item) {
                        callback.onComplete(item);
                    }
                    switch (item.type) {
                        case AssetItemType.FguiPackage:
                            this.loadFguiByPackagename(item.url, callback, callback.onComplete);
                            break;
                        case AssetItemType.FspritePackage:
                            this.loadFSpriteByPackagename(item.url, callback, callback.onComplete);
                            break;
                        case AssetItemType.Image:
                            assets.push({ url: item.url, type: Loader$1.IMAGE });
                            break;
                        case AssetItemType.Buffer:
                            assets.push({ url: item.url, type: Loader$1.BUFFER });
                            break;
                        case AssetItemType.Sound:
                            assets.push({ url: item.url, type: Loader$1.SOUND });
                            break;
                        case AssetItemType.Text:
                            assets.push({ url: item.url, type: Loader$1.TEXT });
                            break;
                        case AssetItemType.Json:
                            assets.push({ url: item.url, type: Loader$1.JSON });
                            break;
                        case AssetItemType.Xml:
                            assets.push({ url: item.url, type: Loader$1.XML });
                            break;
                        case AssetItemType.Font:
                            assets.push({ url: item.url, type: Loader$1.FONT });
                            break;
                        case AssetItemType.TTF:
                            assets.push({ url: item.url, type: Loader$1.TTF });
                            break;
                    }
                }
                if (assets.length > 0) {
                    for (let j = 0; j < assets.length; j++) {
                        if (this.loadedAssets.hasKey(assets[j].url)) {
                            callback.onComplete(true);
                        }
                        else {
                            Laya.loader.load([assets[j]], Handler$2.create(callback, callback.onComplete), Handler$2.create(callback, callback.onProgress));
                        }
                        this.loadedAssets.add(assets[j].url, Game.time.localTimeMS);
                    }
                }
            }
            else {
                callback.onComplete(null);
            }
        }
        loadFguiByPackagename(packageName, caller, method) {
            let packageConfig = Game.guiRes.getconfig(packageName);
            this.loadFgui(packageConfig, caller, method);
        }
        async loadFguiByPackagenameAsync(packageName) {
            return new Promise((resolve) => {
                this.loadFguiByPackagename(packageName, this, (packageConfig) => {
                    resolve(packageConfig);
                });
            });
        }
        loadFSpriteByPackagename(packageName, caller, method) {
            let packageConfig = Game.spriteRes.getconfig(packageName);
            if (!packageConfig) {
                console.error(`AssetManager loadFSpriteByPackagename: packageConfig=${packageConfig} packageName=${packageName}`);
                return;
            }
            this.loadFgui(packageConfig, caller, method);
        }
        loadFgui(packageConfig, caller, method) {
            if (!packageConfig) {
                console.error(`AssetManager loadFgui: packageConfig=${packageConfig}`);
                return;
            }
            let callback = {
                apply: () => {
                    GuiSetting.addPackage(packageConfig.packagePath, packageConfig);
                    if (method) {
                        if (caller) {
                            return method.apply(caller, [packageConfig]);
                        }
                        else {
                            method(packageConfig);
                        }
                    }
                }
            };
            GuiSetting.addPackageReferenceNum(packageConfig.packagePath);
            if (GuiSetting.hasLoadPackage(packageConfig.packagePath)) {
                callback.apply();
                return;
            }
            Laya.loader.load(packageConfig.loadList, Handler$2.create(callback, callback.apply));
        }
        unloadFgui(packageName, forceDispose) {
            if (forceDispose === undefined)
                forceDispose = false;
            let packageConfig = Game.guiRes.getconfig(packageName);
            if (!packageConfig)
                packageConfig = Game.spriteRes.getconfig(packageName);
            if (packageConfig) {
                let referenceNum = GuiSetting.removePackageReferenceNum(packageConfig.packagePath);
                if (!forceDispose) {
                    if (referenceNum > 0) {
                        return;
                    }
                }
                GuiSetting.removePackage(packageConfig.packagePath, packageConfig);
                let list = packageConfig.loadList;
                for (let i = 0; i < list.length; i++) {
                    Laya.loader.clearRes(list[i].url);
                }
            }
        }
        loadFx(path, caller, complete) {
            Laya.loader.load(path, Handler$2.create(null, (setting) => {
                if (complete) {
                    if (caller) {
                        complete.apply(caller, setting);
                    }
                    else {
                        complete(setting);
                    }
                }
            }), null, Loader$1.JSON);
        }
        load(path, complete, caller, type) {
            Laya.loader.load(path, Handler$2.create(null, (res) => {
                if (complete) {
                    if (caller) {
                        complete.apply(caller, [res]);
                    }
                    else {
                        complete(res);
                    }
                }
            }), null, AssetHelper.assetItemType2LayaLoaderType(type));
        }
        async loadAsync(path, type) {
            return new Promise((resolve) => {
                this.load(path, (res) => {
                    resolve(res);
                }, null, type);
            });
        }
        async loadResAsync(path, type) {
            return new Promise((resolve) => {
                Laya.loader.load(path, Laya.Handler.create(null, (res) => {
                    Laya.timer.frameOnce(1, null, () => {
                        resolve(res);
                    });
                }), null, type);
            });
        }
        async loadShaderVSAsync(filename) {
            let code = await this.loadAsync(Res.getShaderVS(filename), AssetItemType.Text);
            return code.replace(/\r/g, "");
        }
        async loadShaderPSAsync(filename) {
            let code = await this.loadAsync(Res.getShaderPS(filename), AssetItemType.Text);
            return code.replace(/\r/g, "");
        }
        async preloadAndInstallSoundAsync(path) {
            return new Promise((resolve) => {
                if (!Engine.borwer.isWXGame) {
                    resolve(false);
                    return;
                }
                let sound = Laya.SoundManager.preloadSound(path);
                if (!sound) {
                    resolve(false);
                    return;
                }
                sound.once(Laya.Event.COMPLETE, this, () => {
                    resolve(true);
                    sound.offAll();
                });
                sound.once(Laya.Event.ERROR, this, () => {
                    resolve(false);
                    sound.offAll();
                });
            });
        }
        preloadAndInstallSound(path, callbacker, onComplete) {
            var completeFun = (v) => {
                if (onComplete) {
                    if (callbacker) {
                        onComplete.call(callbacker, v);
                    }
                    else {
                        onComplete(Vector4);
                    }
                }
            };
            let sound = Laya.SoundManager.preloadSound(path);
            if (!sound) {
                completeFun(false);
                return;
            }
            sound.once(Laya.Event.COMPLETE, this, () => {
                completeFun(true);
                sound.offAll();
            });
            sound.once(Laya.Event.ERROR, this, () => {
                completeFun(true);
                sound.offAll();
            });
        }
    }
    window['AssetManager'] = AssetManager;

    var Loader$2 = Laya.Loader;
    class GuiResPackageConfig {
        constructor() {
            this.resAtlas = [];
            this.sounds = [];
        }
        get loadList() {
            if (!this._loadList) {
                let list = [];
                list.push({ url: GuiSetting.getResPath(this.resBin, this.resDir), type: Loader$2.BUFFER });
                if (this.resAtlas) {
                    for (let i = 0; i < this.resAtlas.length; i++) {
                        list.push({ url: GuiSetting.getResPath(this.resAtlas[i], this.resDir), type: Loader$2.IMAGE });
                    }
                }
                if (this.sounds) {
                    for (let i = 0; i < this.sounds.length; i++) {
                        list.push({ url: GuiSetting.getResPath(this.sounds[i], this.resDir), type: Loader$2.SOUND });
                    }
                }
                this._loadList = list;
            }
            return this._loadList;
        }
        get packagePath() {
            return GuiSetting.getResPackagePath(this.packageName, this.resDir);
        }
    }

    class GuiResPackageConfigReader {
        constructor() {
            this.dict = new Dictionary();
        }
        addconfig(config) {
            this.dict.add(config.packageName, config);
        }
        getconfig(packageName) {
            return this.dict.getValue(packageName);
        }
        install() {
            let config;
            config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "GameHome";
            config.resBin = "GameHome.bin";
            config.resAtlas.push("GameHome_atlas0.png");
            config.resAtlas.push("GameHome_atlas_sqzy0.jpg");
            config.resAtlas.push("GameHome_atlas_sqzy1.jpg");
            config.resAtlas.push("GameHome_atlas_sqzy15.png");
            config.sounds.push("GameHome_sqzy7p.mp3");
            this.addconfig(config);
            config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "GameLaunch";
            config.resBin = "GameLaunch.bin";
            config.resAtlas.push("GameLaunch_atlas0.png");
            config.resAtlas.push("GameLaunch_atlas_qyvzw2s.png");
            config.resAtlas.push("GameLaunch_atlas_tnlhw3c.png");
            this.addconfig(config);
            config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleLogin";
            config.resBin = "ModuleLogin.bin";
            config.resAtlas.push("ModuleLogin_atlas0.png");
            config.resAtlas.push("ModuleLogin_atlas_je283m.png");
            config.resAtlas.push("ModuleLogin_atlas_je283n.png");
            config.resAtlas.push("ModuleLogin_atlas_tnlh35.png");
            config.resAtlas.push("ModuleLogin_atlas_tnlh3d.png");
            config.resAtlas.push("ModuleLogin_atlas_tnlh3e.png");
            config.resAtlas.push("ModuleLogin_atlas_tnlh3j.png");
            this.addconfig(config);
            config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Sound";
            config.resBin = "Sound.bin";
            this.addconfig(config);
        }
    }

    class SpriteResPackageConfigReader {
        constructor() {
            this.dict = new Dictionary();
        }
        addconfig(config) {
            this.dict.add(config.packageName, config);
        }
        getconfig(packageName) {
            return this.dict.getValue(packageName);
        }
        install() {
            let config;
            config = new GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "ActivityIcon";
            config.resBin = "ActivityIcon.bin";
            config.resAtlas.push("ActivityIcon@atlas0.png");
            this.addconfig(config);
            config = new GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "ActorBodyIcon";
            config.resBin = "ActorBodyIcon.bin";
            config.resAtlas.push("ActorBodyIcon@atlas0.png");
            config.resAtlas.push("ActorBodyIcon@atlas0_1.png");
            config.resAtlas.push("ActorBodyIcon@atlas0_2.png");
            config.resAtlas.push("ActorBodyIcon@atlas0_3.png");
            config.resAtlas.push("ActorBodyIcon@atlas0_4.png");
            config.resAtlas.push("ActorBodyIcon@atlas0_5.png");
            this.addconfig(config);
            config = new GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "BlockIcon";
            config.resBin = "BlockIcon.bin";
            config.resAtlas.push("BlockIcon@atlas0.png");
            this.addconfig(config);
            config = new GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "Building";
            config.resBin = "Building.bin";
            config.resAtlas.push("Building@atlas0.png");
            config.resAtlas.push("Building@atlas0_1.png");
            this.addconfig(config);
            config = new GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "CinemaIcon";
            config.resBin = "CinemaIcon.bin";
            config.resAtlas.push("CinemaIcon@atlas0.png");
            this.addconfig(config);
            config = new GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "Icon_En";
            config.resBin = "Icon_En.bin";
            config.resAtlas.push("Icon_En@atlas0.png");
            this.addconfig(config);
            config = new GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "Icon_ZH_CN";
            config.resBin = "Icon_ZH_CN.bin";
            config.resAtlas.push("Icon_ZH_CN@atlas0.png");
            this.addconfig(config);
            config = new GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "ItemIcon";
            config.resBin = "ItemIcon.bin";
            config.resAtlas.push("ItemIcon@atlas0.png");
            this.addconfig(config);
            config = new GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "MeetingIcon";
            config.resBin = "MeetingIcon.bin";
            config.resAtlas.push("MeetingIcon@atlas0.png");
            this.addconfig(config);
            config = new GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "MenuIcon";
            config.resBin = "MenuIcon.bin";
            config.resAtlas.push("MenuIcon@atlas0.png");
            this.addconfig(config);
            config = new GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "NPCHeadIcon";
            config.resBin = "NPCHeadIcon.bin";
            config.resAtlas.push("NPCHeadIcon@atlas0.png");
            this.addconfig(config);
            config = new GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "PlayerBodyIcon";
            config.resBin = "PlayerBodyIcon.bin";
            config.resAtlas.push("PlayerBodyIcon@atlas0.png");
            this.addconfig(config);
            config = new GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "PlayerHeadIcon";
            config.resBin = "PlayerHeadIcon.bin";
            config.resAtlas.push("PlayerHeadIcon@atlas0.png");
            this.addconfig(config);
            config = new GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "SettingIcon";
            config.resBin = "SettingIcon.bin";
            config.resAtlas.push("SettingIcon@atlas0.png");
            this.addconfig(config);
            config = new GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "ShootIcon";
            config.resBin = "ShootIcon.bin";
            config.resAtlas.push("ShootIcon@atlas0.png");
            this.addconfig(config);
            config = new GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "SkillIcon";
            config.resBin = "SkillIcon.bin";
            config.resAtlas.push("SkillIcon@atlas0.png");
            this.addconfig(config);
            config = new GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "StoryIcon";
            config.resBin = "StoryIcon.bin";
            config.resAtlas.push("StoryIcon@atlas0.png");
            config.resAtlas.push("StoryIcon@atlas0_1.png");
            config.resAtlas.push("StoryIcon@atlas0_2.png");
            config.resAtlas.push("StoryIcon@atlas0_3.png");
            this.addconfig(config);
            config = new GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "StoryStackIcon";
            config.resBin = "StoryStackIcon.bin";
            config.resAtlas.push("StoryStackIcon@atlas0.png");
            this.addconfig(config);
        }
    }

    var MenuCtlStateType;
    (function (MenuCtlStateType) {
        MenuCtlStateType[MenuCtlStateType["Closed"] = 1] = "Closed";
        MenuCtlStateType[MenuCtlStateType["Loading"] = 2] = "Loading";
        MenuCtlStateType[MenuCtlStateType["Opened"] = 3] = "Opened";
        MenuCtlStateType[MenuCtlStateType["Destoryed"] = 4] = "Destoryed";
    })(MenuCtlStateType || (MenuCtlStateType = {}));

    class SoundKey {
        static get idDict() {
            if (!SoundKey._idDict) {
                SoundKey.init();
            }
            return SoundKey._idDict;
        }
        static get extDict() {
            if (!SoundKey._extDict) {
                SoundKey.init();
            }
            return SoundKey._extDict;
        }
        static getId(key) {
            if (!SoundKey.idDict.hasKey(key)) {
                console.error("SoundKey 不存在 key=" + key);
                return "";
            }
            return SoundKey.idDict.getValue(key);
        }
        static getUrl(key) {
            return `ui://${SoundKey.SoundPackageId}${SoundKey.getId(key)}`;
        }
        static getPath(key) {
            return GuiSetting.getResPath(`${SoundKey.SoundPackageName}_${SoundKey.getId(key)}${SoundKey.extDict.getValue(key)}`, "fgui");
        }
        static init() {
            let dict = SoundKey._idDict = new Dictionary();
            let exts = SoundKey._extDict = new Dictionary();
        }
    }
    SoundKey.SoundPackageName = "Sound";
    SoundKey.SoundPackageId = "44whq70o";

    var MenuCloseOtherType;
    (function (MenuCloseOtherType) {
        MenuCloseOtherType[MenuCloseOtherType["None"] = 0] = "None";
        MenuCloseOtherType[MenuCloseOtherType["ExceptSelf_All"] = 1] = "ExceptSelf_All";
        MenuCloseOtherType[MenuCloseOtherType["ExceptSelf_Module"] = 2] = "ExceptSelf_Module";
        MenuCloseOtherType[MenuCloseOtherType["ExceptSelf_SameLayer"] = 3] = "ExceptSelf_SameLayer";
    })(MenuCloseOtherType || (MenuCloseOtherType = {}));

    class MenuCtl {
        constructor() {
            this.sOpen = new Signal();
            this.backMenuId = -1;
            this.backExcludeMenuIdMenuId = -1;
            this.closeTime = 0;
            this.closeIsDestory = true;
        }
        open(parametar) {
            this.openParametar = parametar;
            if (!this.moduleWindow) {
                this.moduleWindow = new this.menuWindowConfig.windowClass();
                this.moduleWindow.menuId = this.menuId;
                this.moduleWindow.name = this.menuConfig.name;
                this.moduleWindow.windowContainer = MenuLayer.getLayer(this.menuConfig.menuLayer);
            }
            this.load();
        }
        close() {
            if (this.state == MenuCtlStateType.Closed || this.state == MenuCtlStateType.Destoryed)
                return;
            this.__menuManager.__onMenuClose(this);
        }
        __delayClose() {
            if (this.moduleWindow && this.moduleWindow.menuIsCreated) {
                Game.event.dispatch(GameEventKey.GameFrame_CloseMenu, this.moduleWindow.menuId);
                this.moduleWindow.onMenuClose();
                this.closeTime = Game.time.localTimeMS;
            }
            this.state = MenuCtlStateType.Closed;
        }
        destory() {
            if (this.moduleWindow) {
                this.moduleWindow.sShowComplete.remove(this.closeOther, this);
                this.moduleWindow.destory();
                this.moduleWindow = null;
            }
            this.state = MenuCtlStateType.Destoryed;
        }
        load() {
            this.state = MenuCtlStateType.Loading;
            let list = this.getLoadAssets();
            if (!list || list.length == 0) {
                this.loadBeginTime = 0;
                this.onLoadComplete();
            }
            else {
                this.loadBeginTime = Game.time.localTimeMS;
                let loaderCtl = Game.loader.open(this.menuConfig.menuLoaderId);
                loaderCtl.setMax(list.length);
                loaderCtl.setProgress(0);
                let onProgress = (rate, current, max, assetItemInfo) => {
                    loaderCtl.setProgress(current);
                };
                Game.asset.loadList(list, this, this.onLoadComplete, onProgress);
            }
        }
        onLoadComplete() {
            this.setShow();
            Game.loader.close(this.menuConfig.menuLoaderId);
            if (this.loadBeginTime > 0)
                console.log("加载界面花费时间 (" + this.menuConfig.moduleName + ") :" + (Game.time.localTimeMS - this.loadBeginTime) + " 毫秒");
        }
        getLoadAssets() {
            let list = [];
            let dict = new Dictionary();
            if (!this.moduleWindow.menuIsCreated) {
                this.moduleWindow.getLoadAssets(list, dict);
            }
            this.moduleWindow.generateAssetsForDynmic();
            this.moduleWindow.getLoadAssetsForDynamic(list, dict);
            return list;
        }
        setShow() {
            if (!this.moduleWindow) {
                console.warn(`设置显示 但是模块已销毁 ${this.menuConfig.name}(${this.menuConfig.moduleName}): ${this.menuId}`);
                return;
            }
            console.log(`设置显示面板 ${this.menuConfig.name}(${this.menuConfig.moduleName}): ${this.menuId}`);
            this.moduleWindow.sShowComplete.addOnce(this.closeOther, this);
            this.moduleWindow.sShowSubwindowComplete.addOnce(this.closeOther, this);
            this.state = MenuCtlStateType.Opened;
            if (this.moduleWindow.menuIsCreated) {
                this.moduleWindow.onMenuOpen(this.openParametar);
            }
            else {
                this.moduleWindow.menuParameter = this.openParametar;
            }
            this.moduleWindow.menuShow(this.moduleWindow.windowContainer);
            switch (this.menuId) {
                case MenuId.Login:
                    Game.sound.playMusic(SoundKey.MM_BGM_01);
                    break;
                case MenuId.Home:
                    Game.sound.playMusic(SoundKey.MM_BGM_01);
                    break;
            }
            this.sOpen.dispatch();
        }
        setCloseDontDestory() {
        }
        closeOther() {
            let homeIsOpen = this.__menuManager.isOpened(MenuId.Home);
            let backMenuId = this.__menuManager.getLastModuleOpenMenuId([this.backExcludeMenuIdMenuId, this.menuId, MenuId.BattleResultWindow]);
            let hasCloseOtherMenu = false;
            let list = Game.menu.dict.getValues();
            switch (this.menuConfig.menuCloseOtherType) {
                case MenuCloseOtherType.None:
                    break;
                case MenuCloseOtherType.ExceptSelf_All:
                    for (let i = 0; i < list.length; i++) {
                        let ctl = list[i];
                        if (ctl != this) {
                            ctl.closeIsDestory = homeIsOpen;
                            ctl.close();
                            hasCloseOtherMenu = true;
                        }
                    }
                    break;
                case MenuCloseOtherType.ExceptSelf_Module:
                    for (let i = 0; i < list.length; i++) {
                        let ctl = list[i];
                        if (ctl != this && ctl.menuConfig.menuLayer == MenuLayerType.Module) {
                            ctl.closeIsDestory = homeIsOpen;
                            ctl.close();
                            hasCloseOtherMenu = true;
                        }
                    }
                    break;
                case MenuCloseOtherType.ExceptSelf_SameLayer:
                    for (let i = 0; i < list.length; i++) {
                        let ctl = list[i];
                        if (ctl.menuId == MenuId.Home)
                            continue;
                        if (ctl != this && ctl.menuConfig.menuLayer == this.menuConfig.menuLayer) {
                            ctl.closeIsDestory = homeIsOpen;
                            ctl.close();
                            hasCloseOtherMenu = true;
                        }
                    }
                    break;
            }
            if (this.menuConfig.closeHomeWindow) {
                let ctl = this.__menuManager.getMenuCtl(MenuId.Home);
                if (ctl && ctl.moduleWindow) {
                    ctl.close();
                }
            }
            if (hasCloseOtherMenu) {
                if (backMenuId != -1)
                    this.backMenuId = backMenuId;
            }
            else
                this.backMenuId = -1;
        }
    }

    class FGLoader extends fgui.GLoader {
        static get freeList() {
            if (FGLoader._freeList.length > 0) {
                FGLoader._freeList.length = 0;
            }
            let dict = FGLoader.freeDictForNum.__getDict();
            for (let url in dict) {
                if (FGLoader.freeDictForNum.getValue(url) <= 0) {
                    FGLoader._freeList.push(url);
                }
            }
            return FGLoader._freeList;
        }
        static setUse(url) {
            let num = FGLoader.freeDictForNum.hasKey(url) ? FGLoader.freeDictForNum.getValue(url) + 1 : 1;
            FGLoader.freeDictForNum.add(url, num);
        }
        static setFree(url) {
            if (url.indexOf("/MenuIcon/") != -1)
                return;
            FGLoader.freeDictForTime.add(url, Game.time.localTimeMS);
            let num = FGLoader.freeDictForNum.hasKey(url) ? FGLoader.freeDictForNum.getValue(url) - 1 : 0;
            if (num < 0)
                num = 0;
            FGLoader.freeDictForNum.add(url, num);
        }
        static removeFree(url) {
            FGLoader.freeDictForTime.remove(url);
            FGLoader.freeDictForNum.remove(url);
        }
        static clearAllFree(list) {
            if (!list)
                list = FGLoader.freeList;
            while (list.length > 0) {
                let url = list.pop();
                FGLoader.removeFree(url);
                Laya.loader.clearRes(url);
            }
        }
        static clearFreeLong() {
            if (FGLoader.freeDictForNum.count <= Game.deviceSetting.fguiLoaderCacheNum)
                return;
            FGLoader._freeLongList.length = 0;
            let dict = FGLoader.freeDictForNum.__getDict();
            for (let url in dict) {
                if (FGLoader.freeDictForNum.getValue(url) <= 0) {
                    let time = Game.time.localTimeMS - FGLoader.freeDictForTime.getValueOrDefault(url, 0);
                    if (time > Game.deviceSetting.fguiLoaderCacheTime)
                        FGLoader._freeLongList.push(url);
                }
            }
            FGLoader.clearAllFree(FGLoader._freeLongList);
        }
        loadContent() {
            super.loadContent();
        }
        getPackagenameByUrl(url) {
            return url.replace("ui://", "").split("/")[0];
        }
        loadFromPackage(itemURL) {
            let packageItem = fgui.UIPackage.getItemByURL(itemURL);
            if (packageItem) {
                super.loadFromPackage(itemURL);
            }
            else {
                let packagename = this.getPackagenameByUrl(itemURL);
                let config = Game.spriteRes.getconfig(packagename);
                if (!config) {
                    config = Game.guiRes.getconfig(packagename);
                }
                if (config) {
                    Game.asset.loadFgui(config, this, this.onLoadPackage);
                }
            }
        }
        onLoadPackage() {
            super.loadFromPackage(this.url);
        }
        loadExternal() {
            FGLoader.setUse(this.url);
            super.loadExternal();
        }
        freeExternal(texture) {
            super.freeExternal(texture);
            if (!isNullOrEmpty(texture.url)) {
                FGLoader.setFree(texture.url);
                texture.url = "";
            }
        }
        onExternalLoadSuccess(texture) {
            super.onExternalLoadSuccess(texture);
        }
        onExternalLoadFailed() {
            super.onExternalLoadFailed();
        }
    }
    FGLoader.freeDictForTime = new Dictionary();
    FGLoader.freeDictForNum = new Dictionary();
    FGLoader._freeList = [];
    FGLoader._freeLongList = [];

    var Pool$1 = Laya.Pool;
    class LogItem {
        constructor(logType, msg) {
            this.logType = logType;
            this.msg = msg + "";
        }
        poolRecover() {
            Pool$1.recover(LogItem.POOL_SIGN, this);
        }
        static poolGet() {
            let item = Pool$1.getItemByClass(LogItem.POOL_SIGN, LogItem);
            return item;
        }
    }
    LogItem.POOL_SIGN = "LogItem";

    class Loger {
        constructor() {
            this.maxcount = 1000;
            this.enable = true;
            this.dict = new Dictionary();
            this.list = [];
        }
        getList(type) {
            if (this.dict.hasKey(type))
                return this.dict.getValue(type);
            let l = [];
            this.dict.add(type, l);
            return l;
        }
        get listAll() {
            return this.list;
        }
        getListByTypes(types) {
            let list = [];
            for (let i = 0; i < this.list.length; i++) {
                if (types.indexOf(this.list[i].logType) != -1) {
                    list.push(this.list[i]);
                }
            }
            return list;
        }
        addLog(type, message, ...optionalParams) {
            if (!this.enable)
                return;
            if (message) {
                let item = LogItem.poolGet();
                item.logType = type;
                item.msg = this.stringFormat(message, ...optionalParams);
                this.add(item);
            }
            else {
                let item = LogItem.poolGet();
                item.logType = type;
                item.msg = message;
                this.add(item);
            }
        }
        add(item) {
            if (!this.enable)
                return;
            let l = this.getList(item.logType);
            l.push(item);
            this.list.push(item);
            if (this.list.length > this.maxcount) {
                this.list.shift().poolRecover();
            }
            if (l.length > this.maxcount) {
                l.shift().poolRecover();
            }
        }
        clear() {
            console.clear();
            for (let item of this.list) {
                item.poolRecover();
            }
            this.list = [];
            this.dict.clear();
        }
        stringFormat(message, ...optionalParams) {
            if (optionalParams) {
                for (let i = 0; i < optionalParams.length; i++) {
                    if (/%s|%d|%i|%o/.test(message)) {
                        message = message.replace(/%s|%d|%i|%o/, optionalParams[i]);
                    }
                    else {
                        break;
                    }
                }
            }
            return message;
        }
        debug(message, ...optionalParams) {
            this.addLog(LogLevel.Debug, message, ...optionalParams);
        }
        error(message, ...optionalParams) {
            this.addLog(LogLevel.Error, message, ...optionalParams);
        }
        info(message, ...optionalParams) {
            this.addLog(LogLevel.Info, message, ...optionalParams);
        }
        log(message, ...optionalParams) {
            this.addLog(LogLevel.Info, message, ...optionalParams);
        }
        warn(message, ...optionalParams) {
            this.addLog(LogLevel.Warn, message, ...optionalParams);
        }
    }

    var LogLevel;
    (function (LogLevel) {
        LogLevel[LogLevel["Debug"] = 0] = "Debug";
        LogLevel[LogLevel["Info"] = 0] = "Info";
        LogLevel[LogLevel["Warn"] = 2] = "Warn";
        LogLevel[LogLevel["Error"] = 3] = "Error";
    })(LogLevel || (LogLevel = {}));
    var LogLevelText;
    (function (LogLevelText) {
        LogLevelText["Debug"] = "Debug";
        LogLevelText["Info"] = "Info";
        LogLevelText["Warn"] = "Warn";
        LogLevelText["Error"] = "Error";
    })(LogLevelText || (LogLevelText = {}));
    class Log {
        static get Level() {
            return this.level;
        }
        static set Level(level) {
            this.level = level;
        }
        static Debug(...args) {
            if (this.level > LogLevel.Debug)
                return;
            this.logger.debug(...args);
            this.mineloger.debug(...args);
        }
        static Info(...args) {
            if (this.level > LogLevel.Info)
                return;
            this.logger.info(...args);
            this.mineloger.info(...args);
        }
        static Warn(...args) {
            if (this.level > LogLevel.Warn)
                return;
            this.logger.warn(...args);
            this.mineloger.warn(...args);
        }
        static Error(...args) {
            if (this.level > LogLevel.Warn)
                return;
            this.logger.error(...args);
            this.mineloger.error(...args);
        }
        static clear() {
            this.logger.clear();
            this.mineloger.clear();
        }
    }
    Log.mineloger = new Loger();
    Log.logger = console;
    Log.level = LogLevel.Debug;

    class MenuManager {
        constructor() {
            this.dict = new Dictionary();
            this.list = [];
            this.stack = [];
        }
        install() {
        }
        getMenuCtl(menuId) {
            return this.dict.getValue(menuId);
        }
        destory(menuId) {
            let ctl = this.getMenuCtl(menuId);
            if (ctl) {
                if (ctl.state == MenuCtlStateType.Opened) {
                    ctl.close();
                    setTimeout(() => {
                        ctl.destory();
                    }, 100);
                }
                else {
                    ctl.destory();
                }
            }
        }
        openTab(menuId, tabIndex, ...args) {
            return this._open(menuId, { openType: MenuOpenType.Tab, openIndex: tabIndex, args: args });
        }
        openSubWindow(menuId, subwindowIndex, ...args) {
            return this._open(menuId, { openType: MenuOpenType.Subwindow, openIndex: subwindowIndex, args: args });
        }
        async openAsync(menuId, ...args) {
            let ctl = this._open(menuId, { openType: MenuOpenType.None, openIndex: 0, args: args });
            if (ctl.state == MenuCtlStateType.Opened) {
                return ctl;
            }
            else {
                return new Promise((resolve) => {
                    ctl.sOpen.addOnce(() => {
                        resolve(ctl);
                    }, this);
                });
            }
        }
        open(menuId, ...args) {
            return this._open(menuId, { openType: MenuOpenType.None, openIndex: 0, args: args });
        }
        openByMenuIndexId(menuIndexId, ...args) {
            let indexConfig = Game.config.menuIndex.getConfig(menuIndexId);
            if (indexConfig) {
                switch (indexConfig.openType) {
                    case MenuOpenType.Subwindow:
                        this.openSubWindow(indexConfig.menuId, indexConfig.menuIndex, ...args);
                        break;
                    case MenuOpenType.Tab:
                        this.openTab(indexConfig.menuId, indexConfig.menuIndex, ...args);
                        break;
                    default:
                        this.open(indexConfig.menuId, ...args);
                        break;
                }
            }
            else {
                let menuConfig = Game.config.menu.getConfig(menuIndexId);
                if (menuConfig) {
                    this.open(menuIndexId, ...args);
                }
            }
        }
        openHome() {
            let home = this.getMenuCtl(MenuId.Home);
            if (!home || home.state != MenuCtlStateType.Opened) {
                home = this.open(MenuId.Home);
            }
            if (home.moduleWindow.contentPane && !home.moduleWindow.contentPane.visible) {
                home.moduleWindow.contentPane.visible = true;
            }
        }
        closeHome() {
            let home = this.getMenuCtl(MenuId.Home);
            if (home && home.moduleWindow && home.moduleWindow.contentPane) {
                home.moduleWindow.contentPane.visible = false;
            }
        }
        _open(menuId, parametar) {
            let ctl = this.getMenuCtl(menuId);
            if (!ctl) {
                let menuConfig = Game.config.menu.getConfig(menuId);
                if (!menuConfig) {
                    let log = `MenuManager.open 没有找到menuConfig, menuId=${menuId}`;
                    Game.system.toastText(log);
                    Log.Warn(log);
                    return null;
                }
                let menuWindowConfig = MenuWindows.get(menuId);
                if (!menuWindowConfig) {
                    Game.system.toastText(TEXT.Disable);
                    Log.Warn(`MenuManager.open 没有找到menuWindowConfig, menuId=${menuId}`);
                    return null;
                }
                if (!menuWindowConfig.windowClass) {
                    Log.Error(`MenuManager.open menuWindowConfig.windowClass=${menuWindowConfig.windowClass}, menuId=${menuId}`);
                    return null;
                }
                ctl = new MenuCtl();
                ctl.__menuManager = this;
                ctl.menuId = menuId;
                ctl.menuConfig = menuConfig;
                ctl.menuWindowConfig = menuWindowConfig;
                this.dict.add(menuId, ctl);
                if (ctl.menuId != MenuId.Home)
                    this.list.push(ctl);
            }
            ctl.open(parametar);
            let index = this.stack.indexOf(ctl);
            if (index != -1)
                this.stack.splice(index, 1);
            this.stack.push(ctl);
            return ctl;
        }
        back(menuId) {
            this.close(menuId);
            return;
            let ctl = this.getMenuCtl(menuId);
            if (ctl) {
                let backMenuId = ctl.backMenuId;
                if (backMenuId > 0) {
                    let backMenuCtl = this.getMenuCtl(backMenuId);
                    if (backMenuCtl) {
                        backMenuCtl.backExcludeMenuIdMenuId = menuId;
                        let openParametar = backMenuCtl.moduleWindow ? backMenuCtl.moduleWindow.getLastMenuParameter() : null;
                        if (!openParametar) {
                            openParametar = backMenuCtl.openParametar;
                        }
                        this._open(backMenuId, openParametar);
                    }
                }
                setTimeout(() => {
                    this.close(menuId);
                }, 100);
            }
        }
        close(menuId) {
            let ctl = this.getMenuCtl(menuId);
            if (ctl) {
                ctl.closeIsDestory = true;
                ctl.backMenuId = -1;
                ctl.close();
            }
        }
        closeAll() {
            for (let i = this.stack.length - 1; i >= 0; i--) {
                if (this.stack[i].menuId != MenuId.War) {
                    this.stack[i].close();
                }
            }
        }
        __onMenuClose(ctl) {
            for (let i = this.stack.length - 1; i >= 0; i--) {
                if (this.stack[i] == ctl)
                    this.stack.splice(i, 1);
            }
            let openedNum = 0;
            let sameLayoutOpenedNum = 0;
            let moduleOpenedNum = 0;
            for (let item of this.list) {
                if (item.menuId == ctl.menuId)
                    continue;
                switch (item.state) {
                    case MenuCtlStateType.Opened:
                        openedNum++;
                        if (item.menuConfig.menuLayer == ctl.menuConfig.menuLayer) {
                            sameLayoutOpenedNum++;
                        }
                        if (item.menuConfig.menuLayer == MenuLayerType.Module || item.menuConfig.menuLayer == MenuLayerType.ModuleTop || item.menuConfig.menuLayer == MenuLayerType.WarUI) {
                            moduleOpenedNum++;
                            break;
                        }
                }
            }
            console.log(`关闭面板 ${ctl.menuConfig.name} ( ${ctl.menuConfig.moduleName})  :" + openedNum=${openedNum}, sameLayoutOpenedNum=${sameLayoutOpenedNum}, moduleOpenedNum=${moduleOpenedNum}`);
            var isNeedOpenHome = moduleOpenedNum == 0;
            if (isNeedOpenHome) {
                if (this.needOpenHomeFun) {
                    isNeedOpenHome = this.needOpenHomeFun();
                }
            }
            if (isNeedOpenHome) {
                let home = this.getMenuCtl(MenuId.Home);
                if (!home || home.state != MenuCtlStateType.Opened) {
                    home = this.open(MenuId.Home);
                }
            }
            ctl.__delayClose();
            this.onTick();
            FGLoader.clearFreeLong();
        }
        getLastOpenMenuId() {
            if (this.stack.length > 0) {
                return this.stack[this.stack.length - 1].menuId;
            }
            return -1;
        }
        getLastModuleOpenMenuId(excludeMenuId) {
            for (let i = this.stack.length - 1; i >= 0; i--) {
                let ctl = this.stack[i];
                if (ctl.menuConfig.menuLayer == MenuLayerType.Module || ctl.menuConfig.menuLayer == MenuLayerType.ModuleTop) {
                    if (excludeMenuId && excludeMenuId.indexOf(ctl.menuId) != -1) {
                        continue;
                    }
                    return ctl.menuId;
                }
            }
            return -1;
        }
        isOpened(menuId) {
            let result = false;
            let ctl = this.getMenuCtl(menuId);
            if (ctl && ctl.state == MenuCtlStateType.Opened) {
                if (ctl.menuId == MenuId.Home) {
                    if (ctl.moduleWindow && ctl.moduleWindow.contentPane)
                        result = ctl.moduleWindow.contentPane.visible;
                }
                else {
                    result = true;
                }
            }
            return result;
        }
        isOpenedSubOrTab(menuId, index) {
            if (!this.isOpened(menuId)) {
                return false;
            }
            let ctl = this.getMenuCtl(menuId);
            if (ctl) {
                return ctl.moduleWindow.isOpenSubOrTab(index);
            }
            return false;
        }
        getSubWindow(menuId, index) {
            if (!this.isOpened(menuId)) {
                return null;
            }
            let ctl = this.getMenuCtl(menuId);
            if (ctl) {
                return ctl.moduleWindow.getSubwindow(index);
            }
            return null;
        }
        onTick() {
            for (let i = 0; i < this.list.length; i++) {
                let ctl = this.list[i];
                if (ctl.state == MenuCtlStateType.Closed) {
                    if (ctl.menuConfig.cacheTime != -1) {
                        let cacheTime = Math.max(ctl.menuConfig.cacheTime, Game.deviceSetting.menuCacheTime);
                        let subtime = Game.time.localTimeMS - ctl.closeTime;
                        if (subtime >= cacheTime && ctl.closeIsDestory) {
                            ctl.destory();
                        }
                    }
                }
            }
        }
    }

    class GameURL {
        static get serverCmdUrl() {
            return Res.GmConfig + 'ServerGM.json';
        }
        static get clientCmdUrl() {
            return Res.GmConfig + 'ClientGM.json';
        }
        static get serverListUrl() {
            return this._serverListUrl;
        }
        static getServerMainUrl(serverItem) {
            if (serverItem) {
                if (serverItem.https) {
                    if (serverItem.port == 443) {
                        return "https://" + serverItem.ip;
                    }
                    else {
                        return "https://" + serverItem.ip + ":" + serverItem.port;
                    }
                }
                else {
                    return "http://" + serverItem.ip + ":" + serverItem.port;
                }
            }
        }
    }
    GameURL._serverListUrl = "ServerList.json";

    class TimeHelper {
        static GetServerMonthDateNum(fullYear, month) {
            let date = this.GetServerDateByTimestamp();
            if (fullYear === null || fullYear === undefined)
                fullYear = date.getFullYear();
            if (month === null || month === undefined)
                month = date.getMonth() + 1;
            date = new Date(fullYear, month, 0);
            return date.getDate();
        }
        static ToStr(d) {
            return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} 周${d.getDay() == 0 ? 7 : d.getDay()}  ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
        }
        static ToTimeStamp(str) {
            var date = new Date(str.replace(/-/g, '/'));
            return Math.round(date.valueOf() / 1000);
        }
        static GetServerDateByTimestamp(timestamp) {
            if (timestamp == null) {
                timestamp = Game.time.serverSeconds;
            }
            return new Date(timestamp * 1000 - Game.time.localSubServerTimeZone);
        }
        static GetServerTimestampByHMS(h = 0, m = 0, s = 0) {
            let date = this.GetServerDateByHMS(h, m, s);
            return date.getTime();
        }
        static GetServerTimestampByHMSText(timeHMS) {
            let strTimes = timeHMS.split(':');
            let h, m, s;
            if (strTimes[0]) {
                h = Number(strTimes[0]) || 0;
            }
            if (strTimes[1]) {
                m = Number(strTimes[1]) || 0;
            }
            if (strTimes[2]) {
                s = Number(strTimes[2]) || 0;
            }
            return this.GetServerTimestampByHMS(h, m, s);
        }
        static GetServerDateByHMS(h = 0, m = 0, s = 0) {
            let date = this.GetServerDateByTimestamp();
            date.setHours(h);
            date.setMinutes(m);
            date.setSeconds(s);
            return date;
        }
        static getServerNextDate(h = 0, m = 0, s = 0) {
            let date = this.GetServerDateByHMS(h, m, s);
            if (date.getTime() >= Game.time.serverMilliseconds) {
                return date;
            }
            date.setHours(date.getHours() + 24);
            return date;
        }
        static getServerNextWeekDate(week, h = 0, m = 0, s = 0) {
            let date = this.GetServerDateByHMS(h, m, s);
            let subWeek = week - date.getDay();
            if (subWeek < 0) {
                subWeek += 7;
            }
            else if (subWeek == 0) {
                if (date.getTime() < Game.time.serverMilliseconds) {
                    subWeek += 7;
                }
            }
            date.setDate(date.getDate() + subWeek);
            return date;
        }
        static getServerNextMonthDate(monthDate, h = 0, m = 0, s = 0) {
            let date = this.GetServerDateByHMS(h, m, s);
            let mdate = monthDate;
            if (monthDate == 0) {
                mdate = date.getDate();
            }
            else if (monthDate < 0) {
                mdate = this.GetServerMonthDateNum() + monthDate + 1;
            }
            date.setDate(mdate);
            if (date.getTime() >= Game.time.serverMilliseconds) {
                return date;
            }
            let nextMothDateNum = this.GetServerMonthDateNum(date.getFullYear(), date.getMonth() + 1);
            if (monthDate < 0) {
                mdate = nextMothDateNum + monthDate + 1;
            }
            if (mdate > nextMothDateNum) {
                mdate = nextMothDateNum;
            }
            date.setMonth(date.getMonth() + 1);
            date.setDate(mdate);
            return date;
        }
        static getServerTomorrowZeroPointTimestamp() {
            return this.GetServerTimestampByHMS() + this.ONE_DAY_SECONDS * 1000;
        }
        static IsServerWeek(timestamp, week) {
            let date = this.GetServerDateByTimestamp(timestamp);
            return date.getDay() == week;
        }
        static isToday(timestamp) {
            let d = new Date(timestamp * 1000);
            let c = new Date();
            return d.getFullYear() == c.getFullYear() && d.getMonth() == c.getMonth() && d.getDate() == c.getDate();
        }
        static IsServerToday(timestamp) {
            let d1 = this.GetServerDateByTimestamp(timestamp);
            let d2 = this.GetServerDateByTimestamp();
            return d1.getFullYear() == d2.getFullYear() && d1.getMonth() == d2.getMonth() && d1.getDate() == d2.getDate();
        }
        static IsSameDay(timestamp1, timestamp2) {
            let d1 = new Date(timestamp1 * 1000);
            let d2 = new Date(timestamp2 * 1000);
            return d1.getFullYear() == d2.getFullYear() && d1.getMonth() == d2.getMonth() && d1.getDate() == d2.getDate();
        }
        static IsServerSameDay(timestamp1, timestamp2) {
            let d1 = this.GetServerDateByTimestamp(timestamp1);
            let d2 = this.GetServerDateByTimestamp(timestamp2);
            return d1.getFullYear() == d2.getFullYear() && d1.getMonth() == d2.getMonth() && d1.getDate() == d2.getDate();
        }
        static IsBeyondTimeInSameDay(timestamp, h = 0, m = 0, s = 0) {
            return this.BeyondTimeInSameDay(timestamp, h, m, s) / 1000 <= 0;
        }
        static BeyondTimeInSameDay(timestamp, h = 0, m = 0, s = 0) {
            if (h == 24) {
                h = 0;
                let date = this.GetServerDateByHMS(h, m, s);
                return (date.getTime() / 1000 + this.ONE_DAY_SECONDS) - timestamp;
            }
            let date = this.GetServerDateByHMS(h, m, s);
            return date.getTime() / 1000 - timestamp;
        }
        static SubSecondTimeInDay(timestamp, h = 0, m = 0, s = 0) {
            let seconds = this.BeyondTimeInSameDay(timestamp, h, m, s);
            if (seconds <= 0) {
                seconds = seconds + this.ONE_DAY_SECONDS;
            }
            return seconds;
        }
        static GetYMDHMS(timestamp, isHaveYear = true, isShowServerTimezoom = false) {
            if (timestamp !== undefined && timestamp !== null) {
                timestamp *= 1000;
            }
            let Dates = isShowServerTimezoom ? this.GetServerDateByTimestamp(timestamp) : new Date(timestamp);
            const Year = Dates.getFullYear();
            const Months = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
            const Day = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
            const Hours = Dates.getHours() < 10 ? '0' + Dates.getHours() : Dates.getHours();
            const Minutes = Dates.getMinutes() < 10 ? '0' + Dates.getMinutes() : Dates.getMinutes();
            if (LangManager.Instance.lang == LangType.zh_cn) {
                if (isHaveYear) {
                    return Year + '-' + Months + '-' + Day + ' ' + Hours + ':' + Minutes;
                }
                else {
                    return Months + '-' + Day + ' ' + Hours + ':' + Minutes;
                }
            }
            else {
                if (isHaveYear) {
                    return Year + ' ' + TimeHelper.MonthText[Dates.getMonth()] + ' ' + Day + ', ' + Hours + ':' + Minutes;
                }
                else {
                    return TimeHelper.MonthText[Dates.getMonth()] + ' ' + Day + ', ' + Hours + ':' + Minutes;
                }
            }
        }
        static GetYMD(timestamp, isShowServerTimezoom = false) {
            if (timestamp !== undefined && timestamp !== null) {
                timestamp *= 1000;
            }
            let Dates = isShowServerTimezoom ? this.GetServerDateByTimestamp(timestamp) : new Date(timestamp);
            const Year = Dates.getFullYear();
            const Months = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
            const Day = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
            if (LangManager.Instance.lang == LangType.zh_cn) {
                return Year + '-' + Months + '-' + Day;
            }
            else {
                return Year + ' ' + TimeHelper.MonthText[Dates.getMonth()] + ' ' + Day;
            }
        }
        static GetMD(timestamp, isShowServerTimezoom = false) {
            if (timestamp !== undefined && timestamp !== null) {
                timestamp *= 1000;
            }
            let Dates = isShowServerTimezoom ? this.GetServerDateByTimestamp(timestamp) : new Date(timestamp);
            const Months = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
            const Day = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
            if (LangManager.Instance.lang == LangType.zh_cn) {
                return Months + '-' + Day;
            }
            else {
                return TimeHelper.MonthText[Dates.getMonth()] + ' ' + Day;
            }
        }
        static GetHM(timestamp, isShowServerTimezoom = false) {
            if (timestamp !== undefined && timestamp !== null) {
                timestamp *= 1000;
            }
            let Dates = isShowServerTimezoom ? this.GetServerDateByTimestamp(timestamp) : new Date(timestamp);
            const Hours = Dates.getHours() < 10 ? '0' + Dates.getHours() : Dates.getHours();
            const Minutes = Dates.getMinutes() < 10 ? '0' + Dates.getMinutes() : Dates.getMinutes();
            return Hours + ':' + Minutes;
        }
        static DaysLeft(timestamp) {
            let days = 0;
            let time = timestamp - Game.time.serverSeconds;
            if (time > 0)
                days = Math.floor(time / this.ONE_DAY_SECONDS);
            return days;
        }
        static TimeleftHHMMSS(timestamp) {
            let time = timestamp - Game.time.serverSeconds;
            time = Math.max(time, 0);
            return this.TimeFormatFixedHHMMSS(time);
        }
        static TimeleftIsOver(timestamp) {
            let time = timestamp - Game.time.serverSeconds;
            return time <= 0 ? true : false;
        }
        static TimeFormatFixedHHMMSS(time) {
            let str = "";
            let hours = Math.floor(time / 3600);
            let minutes = Math.floor((time % 3600) / 60);
            let seconds = Math.floor(time % 60);
            str += hours < 10 ? "0" + hours : hours;
            str += ":" + (minutes < 10 ? "0" + minutes : minutes);
            str += ":" + (seconds < 10 ? "0" + seconds : seconds);
            return str;
        }
        static TimeFormatFixedMMSS(time) {
            let str = "";
            let minutes = Math.floor((time % 3600) / 60);
            let seconds = Math.floor(time % 60);
            str += ":" + (minutes < 10 ? "0" + minutes : minutes);
            str += ":" + (seconds < 10 ? "0" + seconds : seconds);
            return str;
        }
        static TimeFormatFixedHHMMSSCN(time) {
            let str = "";
            let t = Math.abs(time);
            let hours = Math.floor(t / 3600);
            let minutes = Math.floor((t % 3600) / 60);
            let seconds = Math.floor(t % 60);
            if (time < 0)
                str = '-';
            str += hours < 10 ? "0" + hours : hours;
            str += "：" + (minutes < 10 ? "0" + minutes : minutes);
            str += "：" + (seconds < 10 ? "0" + seconds : seconds);
            return str;
        }
        static TimeFormatFixedXHXMXS(time) {
            let str = "";
            let hours = Math.floor(time / 3600);
            let minutes = Math.floor((time % 3600) / 60);
            let seconds = Math.floor(time % 60);
            if (hours > 0)
                str += hours + TEXT.Hour;
            str += minutes + TEXT.Minute;
            str += seconds + TEXT.Second;
            return str;
        }
        static TimeFormatHHMMSS(time) {
            let str = "";
            let t = Math.abs(time);
            let hours = Math.floor(t / 3600);
            let minutes = Math.floor((t % 3600) / 60);
            let seconds = Math.floor(t % 60);
            if (time < 0)
                str = '-';
            str += hours == 0 ? "" : (hours < 10 ? "0" + hours : hours);
            str += (hours > 0 ? ":" : "") + (minutes < 10 ? "0" + minutes : minutes);
            str += ":" + (seconds < 10 ? "0" + seconds : seconds);
            return str;
        }
        static TimeFormatXHXMXS(time) {
            let str = "";
            let hours = Math.floor(time / 3600);
            let minutes = Math.floor((time % 3600) / 60);
            let seconds = Math.floor(time % 60);
            if (hours > 0)
                str += hours + TEXT.Hour;
            if (minutes > 0)
                str += minutes + TEXT.Minute;
            str += seconds + TEXT.Second;
            return str;
        }
        static TimeFormatXHXMXSWithoutZero(time) {
            let str = "";
            let hours = Math.floor(time / 3600);
            let minutes = Math.floor((time % 3600) / 60);
            let seconds = Math.floor(time % 60);
            if (hours > 0)
                str += hours + TEXT.Hour;
            if (minutes > 0)
                str += minutes + TEXT.Minute;
            if (seconds > 0)
                str += seconds + TEXT.Second;
            return str;
        }
        static TimeBeforeByTimestamp(timestamp) {
            let seconds = Game.time.serverSeconds - timestamp;
            return this.TimeBefore(seconds);
        }
        static TimeBefore(seconds) {
            let totalDays = seconds / this.ONE_DAY_SECONDS;
            if (totalDays > 60) {
                return this.GetYMD(totalDays);
            }
            else {
                if (totalDays > 30) {
                    return TEXT.DATE_MonthBefore.format(1);
                }
                else {
                    if (totalDays > 14) {
                        return TEXT.DATE_WeekBefore.format(2);
                    }
                    else {
                        if (totalDays > 7) {
                            return TEXT.DATE_WeekBefore.format(1);
                        }
                        else {
                            if (totalDays > 1) {
                                return TEXT.DATE_DayBefore.format(Math.floor(totalDays));
                            }
                            else {
                                let totalHours = seconds / this.ONE_HOUR_SECONDS;
                                if (totalHours > 1) {
                                    return TEXT.DATE_HourBefore.format(Math.floor(totalHours));
                                }
                                else {
                                    let totalMinutes = seconds / 60;
                                    if (totalMinutes > 1) {
                                        return TEXT.DATE_MinuteBefore.format(Math.floor(totalMinutes));
                                    }
                                    else if (seconds >= 1) {
                                        return TEXT.DATE_SecondeBefore.format(Math.floor(seconds));
                                    }
                                    else {
                                        return TEXT.DATE_SecondeBefore.format(1);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    TimeHelper.ONE_DAY_SECONDS = 86400;
    TimeHelper.ONE_HOUR_SECONDS = 3600;
    TimeHelper.MonthText = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    window['TimeHelper'] = TimeHelper;

    var ServerStateType;
    (function (ServerStateType) {
        ServerStateType[ServerStateType["Close"] = 0] = "Close";
        ServerStateType[ServerStateType["Noraml"] = 1] = "Noraml";
    })(ServerStateType || (ServerStateType = {}));
    var ServerNoticType;
    (function (ServerNoticType) {
        ServerNoticType[ServerNoticType["Normal"] = 1] = "Normal";
        ServerNoticType[ServerNoticType["StopServer"] = 2] = "StopServer";
    })(ServerNoticType || (ServerNoticType = {}));
    class ChannelManager {
        constructor() {
            this.defaultServerItem = { name: "默认", ip: "nisak.123u.com", port: 5000, state: ServerStateType.Noraml, https: true, test: false, shieldHero: [], main: "https://nisak.123u.com:5000" };
            this.channelUrl = `https://h5-jjsg-cdn.123u.com/server_config/config.${VersionConfig.AppVersion}.json`;
        }
        static get Instance() {
            if (!ChannelManager._Instance) {
                ChannelManager._Instance = new ChannelManager();
            }
            return ChannelManager._Instance;
        }
        get serverListUrl() {
            return GameURL.serverListUrl;
        }
        get noticUrl() {
            if (this.serverItem) {
                if (this.serverItem.noticUrl) {
                    return this.serverItem.noticUrl;
                }
                if (this.serverItem.https) {
                    return "https://" + this.serverItem.ip + "/notice.html";
                }
                else {
                    return "http://" + this.serverItem.ip + "/notice.html";
                }
            }
            return "http://172.16.0.93/notice.html";
        }
        getServerItem(serverName) {
            if (!serverName)
                return null;
            if (this.serverList) {
                for (let i = 0; i < this.serverList.list.length; i++) {
                    if (this.serverList.list[i].name == serverName) {
                        return this.serverList.list[i];
                    }
                }
            }
            return null;
        }
        get serverName() {
            if (!this._serverName) {
                if (Game.localStorage.serverName) {
                    let item = this.getServerItem(Game.localStorage.serverName);
                    if (item) {
                        this._serverName = Game.localStorage.serverName;
                    }
                }
                if (!this._serverName && this.serverList) {
                    let item = this.getServerItem(this.serverList.defaultServer);
                    if (item) {
                        this._serverName = this.serverList.defaultServer;
                    }
                    else if (this.serverList.list.length > 0) {
                        this._serverName = this.serverList.list[0].name;
                    }
                }
            }
            return this._serverName;
        }
        set serverName(name) {
            this._serverName = name;
            Game.localStorage.serverName = name;
        }
        get serverIndex() {
            if (this.serverList) {
                for (let i = 0; i < this.serverList.list.length; i++) {
                    if (this.serverList.list[i].name == this.serverName) {
                        return i;
                    }
                }
            }
            return -1;
        }
        get serverItem() {
            let item = this.getServerItem(this.serverName);
            if (item) {
                return item;
            }
            return this.defaultServerItem;
        }
        async requestServerListAsync() {
            if (this.serverList) {
                return true;
            }
            let url = this.serverListUrl;
            console.log("serverListUrl=" + url);
            let resust = await Game.asset.loadAsync(url, AssetItemType.Json);
            if (resust) {
                this.serverList = isString(resust) ? JSON.parse(resust) : resust;
                if (this.serverList && this.serverList.list) {
                    for (let item of this.serverList.list) {
                        item.main = GameURL.getServerMainUrl(item);
                    }
                }
                console.log("获取服务器列表成功");
                return true;
            }
            else {
                console.log("ChannelManager LoadFail: ServerList.json ");
                return false;
            }
        }
        get isTodayOpenedNotice() {
            if (Game.localStorage.isNoticTodayNoOpen) {
                if (Game.localStorage.hasItem("lastOpenNoticeTime", true)) {
                    let lastOpenTime = Game.localStorage.getInt("lastOpenNoticeTime", true);
                    return !TimeHelper.isToday(lastOpenTime);
                }
            }
            return true;
        }
        requestNotice() {
            console.log(this.noticUrl);
            Engine.loader.load(this.noticUrl, Handler.create(this, this.onResopneNotic));
        }
        onResopneNotic() {
            let resust = Engine.loader.getRes(this.noticUrl);
            console.log(resust);
            if (resust) {
                try {
                    this.serverNoticData = isString(resust) ? JSON.parse(resust) : resust;
                    if (!this.serverNoticData || this.serverNoticData.visible == false) {
                        return;
                    }
                    if (this.serverNoticData.type == ServerNoticType.Normal) {
                        if (this.isTodayOpenedNotice) {
                            Game.menu.open(MenuId.Notice);
                            Game.localStorage.setInt("lastOpenNoticeTime", Game.time.localTimeMS, true);
                        }
                    }
                    else {
                        Game.system.alrtTextFull(this.serverNoticData.content, this.serverNoticData.title, null, () => {
                            if (window["conch"] && window["conch"]["exit"])
                                window["conch"].exit();
                        });
                    }
                }
                catch (error) {
                    console.warn("通知有问题");
                }
            }
        }
        set channelServer(server) {
            this._channelServer = server;
        }
        get channelServer() {
            return this._channelServer;
        }
        async requestChannelServerAsync() {
            let url = this.channelUrl;
            let resust = await Game.asset.loadAsync(url, AssetItemType.Json);
            if (resust) {
                let channel = isString(resust) ? JSON.parse(resust) : resust;
                channel.main = GameURL.getServerMainUrl(channel);
                this.serverList = { list: [channel], defaultServer: channel.name };
                console.log(`ChannelUrl Request Successed: ${channel}`);
                return true;
            }
            else {
                this.requestChannelServerAsync();
                console.log(`ChannelUrl Request Failed: ${url} `);
            }
        }
    }

    class MModel {
        constructor() {
            this.sStateChange = new Signal();
        }
        install() {
            this.startListen();
        }
        refreshState() {
        }
        startListen() {
        }
        stopListen() {
        }
        onStateChange() {
            this.sStateChange.dispatch();
        }
    }

    class LoginModel extends MModel {
        constructor() {
            super(...arguments);
            this._timelong = 0;
            this._error = 0;
            this._session = "";
        }
        get isIndulge() {
            return false;
        }
        set timeLong(time) {
            this._timelong = time;
        }
        get timeLong() {
            return this._timelong;
        }
        set error(error) {
            this._error = error;
            if (error == 0 || error == 1023) {
                Laya.timer.clearAll(this);
            }
        }
        get error() {
            return this._error;
        }
        set session(session) {
            this._session = session;
        }
        get session() {
            return this._session;
        }
    }

    class ModelManagerList {
        constructor() {
            this.list = [];
            this.login = new LoginModel();
        }
        initList() {
            this.list.push(this.login);
        }
    }

    class ModelManager extends ModelManagerList {
        install() {
            this.initList();
            for (let i = 0; i < this.list.length; i++) {
                this.list[i].install();
            }
        }
    }

    class VersionData {
        constructor() {
            this.master = 0;
            this.minor = 0;
            this.revised = 0;
            this.revised2 = 0;
        }
        get isZero() {
            return this.master == 0 &&
                this.minor == 0 &&
                this.revised == 0 &&
                this.revised2 == 0;
        }
        setVersionTxt(versionTxt) {
            if (versionTxt === undefined || versionTxt === null)
                return this;
            if (isNullOrEmpty(versionTxt.trim()))
                return this;
            versionTxt = versionTxt.toLowerCase();
            versionTxt = versionTxt.replace("version:", "").replace("version", "").replace("ver", "").replace("v", "");
            var arr = versionTxt.split('.');
            this.master = parseInt(arr[0]);
            if (arr.length > 1)
                this.minor = parseInt(arr[1]);
            if (arr.length > 2)
                this.revised = parseInt(arr[2]);
            if (arr.length > 3)
                this.revised2 = parseInt(arr[3]);
            return this;
        }
        equal(target) {
            return this.master == target.master
                && this.minor == target.minor
                && this.revised == target.revised
                && this.revised2 == target.revised2;
        }
        toString() {
            return `v${this.master}.${this.minor}.${this.revised}.${this.revised2}`;
        }
    }

    var LocalStorage$1 = Laya.LocalStorage;
    class VersionManager {
        constructor() {
            this.sLocalVersionChange = new Signal();
            this.assetCopytoFileVersionData = new VersionData();
            this.localAppVersionData = new VersionData();
            this.webAppVersionData = new VersionData();
            this.localResVersionData = new VersionData();
            this.webResVersionData = new VersionData();
            this.localPartialVersionData = new VersionData();
            this.webPartialVersionData = new VersionData();
        }
        static get Instance() {
            if (!VersionManager._Instance) {
                VersionManager._Instance = new VersionManager();
            }
            return VersionManager._Instance;
        }
        init() {
            this.localAppVersionData.setVersionTxt(VersionConfig.AppVersion);
            this.localResVersionData.setVersionTxt(VersionConfig.ResVersion);
        }
        get localAppVersion() {
            if (window['VersionConfig'] && VersionConfig.AppVersion) {
                return VersionConfig.AppVersion;
            }
            return "v1.0.0.0";
        }
        get localResVersion() {
            if (!this.__localResVersion) {
                this.__localResVersion = LocalStorage$1.getItem("__localResVersion");
                if (!this.__localResVersion) {
                    this.__localResVersion = this.localAppVersion;
                }
            }
            return this.__localResVersion;
        }
        set localResVersion(version) {
            this.__localResVersion = version;
            LocalStorage$1.setItem("__localResVersion", version);
            this.sLocalVersionChange.dispatch();
        }
        get assetsCopytoFileVersion() {
            if (!this.__assetsCopytoFileVersion) {
                this.__assetsCopytoFileVersion = LocalStorage$1.getItem("__assetsCopytoFileVersion");
                if (!this.__assetsCopytoFileVersion) {
                    this.__assetsCopytoFileVersion = "0.0.0";
                }
            }
            return this.__assetsCopytoFileVersion;
        }
        set assetsCopytoFileVersion(version) {
            this.__assetsCopytoFileVersion = version;
            LocalStorage$1.setItem("__assetsCopytoFileVersion", version);
        }
        get localPartialVersion() {
            if (!this.__localPartialVersion) {
                this.__localPartialVersion = LocalStorage$1.getItem("__localPartialVersion");
                if (!this.__localPartialVersion) {
                    this.__localPartialVersion = "0.0.0";
                }
            }
            return this.__localPartialVersion;
        }
        set localPartialVersion(version) {
            this.__localPartialVersion = version;
            LocalStorage$1.setItem("__localPartialVersion", version);
        }
        get isNeedAssetsCopy() {
            return false;
        }
    }

    var SoundManager = Laya.SoundManager;
    var Handler$3 = Laya.Handler;
    class AudioManager {
        constructor() {
            this.soundPlayingDic = new Dictionary();
            this.localUseGlobal = true;
        }
        install() {
        }
        onAppResume() {
            this.replayMusic();
        }
        onLogin() {
            return;
            this.muted = this.muted;
            this.soundMuted = this.soundMuted;
            this.musicMuted = this.musicMuted;
            this.musicVolume = this.musicVolume;
            this.soundVolume = this.soundVolume;
        }
        playMusic(soundKey, loops, complete, startTime) {
            return;
            if (this.lastMusic == soundKey) {
                return;
            }
            this.lastMusic = soundKey;
            if (this.musicMuted) {
                return;
            }
            let path = SoundKey.getPath(soundKey);
            SoundManager.stopMusic();
            return SoundManager.playMusic(path, loops, complete, startTime);
        }
        replayMusic() {
            if (this.lastMusic) {
                this.playMusic(this.lastMusic);
            }
            else {
                this.playMusic(SoundKey.MM_BGM_01);
            }
        }
        playSound(soundKey, isStopPreSound, loops, complete, startTime) {
            return;
            if (!this.soundPlayingDic || this.soundPlayingDic === null) {
                this.soundPlayingDic = new Dictionary();
            }
            if (isStopPreSound) {
                this.stopAllSound();
                this.soundPlayingDic.clear();
            }
            let path = SoundKey.getPath(soundKey);
            let isPlay = true;
            if (!complete || complete === null) {
                complete = Handler$3.create(this, this.playSoundComplete, [path]);
                if (this.soundPlayingDic.hasKey(path)) {
                    isPlay = false;
                }
            }
            if (isPlay) {
                let soundChannel = SoundManager.playSound(path, loops, complete, null, startTime);
                this.soundPlayingDic.add(path, soundChannel);
            }
            return this.soundPlayingDic.getValue(path);
        }
        playSoundComplete(path) {
            if (this.soundPlayingDic.hasKey(path)) {
                this.soundPlayingDic.remove(path);
            }
        }
        stopSound(soundKey) {
            let path = SoundKey.getPath(soundKey);
            if (this.soundPlayingDic.hasKey(path)) {
                this.soundPlayingDic.remove(path);
            }
            SoundManager.stopSound(path);
        }
        stopAll() {
            if (this.soundPlayingDic) {
                this.soundPlayingDic.clear();
            }
            SoundManager.stopAll();
        }
        stopAllSound() {
            if (this.soundPlayingDic) {
                this.soundPlayingDic.clear();
            }
            SoundManager.stopAllSound();
        }
        stopMusic() {
            SoundManager.stopMusic();
        }
        get muted() {
            if (this._muted === undefined) {
                this._muted = Game.localStorage.hasItem("sound_muted", this.localUseGlobal) ? Game.localStorage.getBoolean("sound_muted", this.localUseGlobal) : false;
            }
            return this._muted;
        }
        set muted(value) {
            this._muted = value;
            Game.localStorage.setBoolean("sound_muted", value, this.localUseGlobal);
            SoundManager.muted = value;
        }
        get soundMuted() {
            if (this._soundMuted === undefined) {
                this._soundMuted = Game.localStorage.hasItem("sound_soundMuted", this.localUseGlobal) ? Game.localStorage.getBoolean("sound_soundMuted", this.localUseGlobal) : false;
            }
            return this._soundMuted;
        }
        set soundMuted(value) {
            this._soundMuted = value;
            Game.localStorage.setBoolean("sound_soundMuted", value, this.localUseGlobal);
            SoundManager.soundMuted = value;
        }
        get musicMuted() {
            if (this._musicMuted === undefined) {
                this._musicMuted = Game.localStorage.hasItem("sound_musicMuted", this.localUseGlobal) ? Game.localStorage.getBoolean("sound_musicMuted", this.localUseGlobal) : false;
            }
            return this._musicMuted;
        }
        set musicMuted(value) {
            this._musicMuted = value;
            Game.localStorage.setBoolean("sound_musicMuted", value, this.localUseGlobal);
            SoundManager.musicMuted = value;
            if (value) {
                SoundManager.stopMusic();
            }
            else {
                this.replayMusic();
            }
        }
        get musicVolume() {
            if (this._musicVolume === undefined) {
                this._musicVolume = Game.localStorage.hasItem("sound_musicVolume", this.localUseGlobal) ? Game.localStorage.getFloat("sound_musicVolume", this.localUseGlobal) : 1;
            }
            return this._musicVolume;
        }
        set musicVolume(value) {
            this._musicVolume = value;
            Game.localStorage.setFloat("sound_musicVolume", value, this.localUseGlobal);
            SoundManager.musicVolume = value;
        }
        get soundVolume() {
            if (this._soundVolume === undefined) {
                this._soundVolume = Game.localStorage.hasItem("sound_soundVolume", this.localUseGlobal) ? Game.localStorage.getFloat("sound_soundVolume", this.localUseGlobal) : 1;
            }
            return this._soundVolume;
        }
        set soundVolume(value) {
            this._soundVolume = value;
            Game.localStorage.setFloat("sound_soundVolume", value, this.localUseGlobal);
            SoundManager.soundVolume = value;
        }
        get autoStopMusic() {
            return this._autoStopMusic;
        }
        set autoStopMusic(value) {
            SoundManager.autoStopMusic = value;
            this._autoStopMusic = value;
        }
    }

    class DateTime {
        CopyValue(d) {
            d.year = this.year;
            d.month = this.month;
            d.date = this.date;
            d.week = this.week;
            d.hour = this.hour;
            d.minute = this.minute;
            d.second = this.second;
            d.timezone = this.timezone;
            d.timestamp = this.timezone;
        }
    }
    class GameTimeData {
        constructor() {
            this.sServerDateChange = new Typed2Signal();
            this._localDateTime = new DateTime();
            this._serverDateTime = new DateTime();
            this._server2LocalDateTime = new DateTime();
            this._preServer2LocalDateTime = new DateTime();
            this._preFrame = -1;
            this._settingTimestampServer = new Date().getTime();
            this._settingTimestampLocal = new Date().getTime();
            this._preServerFrame = 0;
            this.___testTimeDifference = 0;
            this._localSubServerTime = 0;
            this._localSubServerTimeZone = 0;
        }
        get localDateTime() {
            this.refresh();
            return this._localDateTime;
        }
        IsExcelArrived(exceltime) {
            let datatime = this.localDateTime;
            return (datatime.hour >= exceltime.H)
                && (datatime.minute >= exceltime.Mm)
                && (datatime.second >= exceltime.S);
        }
        IsExcelIn(starttime, endtime) {
            return this.IsExcelArrived(starttime) && !this.IsExcelArrived(endtime);
        }
        get serverDateTime() {
            this.refresh();
            return this._serverDateTime;
        }
        get server2LocalDateTime() {
            this.refresh();
            return this._server2LocalDateTime;
        }
        start() {
            this.stop();
            Laya.timer.loop(1000, this, this.refresh);
        }
        stop() {
            Laya.timer.clearAll(this);
        }
        refresh() {
            if (Laya.timer.currFrame != this._preFrame) {
                this._preFrame = Laya.timer.currFrame;
                let date = new Date();
                this._localDateTime.timestamp = date.getTime();
                this._localDateTime.year = date.getFullYear();
                this._localDateTime.month = date.getMonth();
                this._localDateTime.date = date.getDate();
                this._localDateTime.week = date.getDay();
                this._localDateTime.hour = date.getHours();
                this._localDateTime.minute = date.getMinutes();
                this._localDateTime.second = date.getSeconds();
                this._serverDateTime.timestamp = this.settingServerTimestamp + this.settingTimeLength;
                date = new Date(this._serverDateTime.timestamp);
                this._serverDateTime.year = date.getFullYear();
                this._serverDateTime.month = date.getMonth();
                this._serverDateTime.date = date.getDate();
                this._serverDateTime.week = date.getDay();
                this._serverDateTime.hour = date.getHours();
                this._serverDateTime.minute = date.getMinutes();
                this._serverDateTime.second = date.getSeconds();
                this._server2LocalDateTime.timestamp = this._serverDateTime.timestamp;
                date = new Date(this._serverDateTime.timestamp - this.localSubServerTimeZone);
                this._server2LocalDateTime.year = date.getFullYear();
                this._server2LocalDateTime.month = date.getMonth();
                this._server2LocalDateTime.date = date.getDate();
                this._server2LocalDateTime.week = date.getDay();
                this._server2LocalDateTime.hour = date.getHours();
                this._server2LocalDateTime.minute = date.getMinutes();
                this._server2LocalDateTime.second = date.getSeconds();
                this._server2LocalDateTime.timezone = this._serverDateTime.timezone;
                if (this._preServer2LocalDateTime.date) {
                    if (this._preServer2LocalDateTime.date != this._server2LocalDateTime.date) {
                        this.sServerDateChange.dispatch(this._preServer2LocalDateTime.date, this._server2LocalDateTime.date);
                    }
                }
                this._server2LocalDateTime.CopyValue(this._preServer2LocalDateTime);
            }
        }
        get serverTimezoneMilliseconds() {
            return this._serverDateTime.timezone * 60 * 60 * 1000;
        }
        get localTimeMS() {
            this.refresh();
            return this._localDateTime.timestamp;
        }
        get localTimeS() {
            this.refresh();
            return Math.floor(this._localDateTime.timestamp / 1000);
        }
        settingServerTime(timestamp, timezone) {
            if (timezone !== null && timezone !== undefined) {
                this._serverDateTime.timezone = timezone;
                this._localSubServerTimeZone = new Date().getTimezoneOffset() * 60 * 1000 * -1 - timezone * 60 * 60 * 1000;
            }
            if (timestamp !== null && timestamp !== undefined) {
                this.settingServerTimestamp = timestamp * 1000;
            }
        }
        get settingServerTimestamp() {
            return this._settingTimestampServer;
        }
        set settingServerTimestamp(value) {
            this._settingTimestampServer = value;
            this._settingTimestampLocal = this.localTimeMS;
            this._localSubServerTime = this._settingTimestampLocal - this._settingTimestampServer;
        }
        get settingTimeLength() {
            return this.localTimeMS - this._settingTimestampLocal;
        }
        get serverSeconds() {
            return Math.floor(this.serverMilliseconds / 1000);
        }
        get serverMilliseconds() {
            this.refresh();
            return this.serverDateTime.timestamp;
        }
        get localSubServerTime() {
            return this._localSubServerTime + this.___testTimeDifference;
        }
        get localSubServerTimeZone() {
            return this._localSubServerTimeZone + this.___testTimeDifference;
        }
        getSubSecondsPre(preunixSeconds) {
            let dTime = this.serverSeconds - preunixSeconds;
            if (dTime < 0)
                dTime = 0;
            return dTime;
        }
        getSubSecondsAfter(afterunixSeconds) {
            return afterunixSeconds - this.serverSeconds;
        }
        getSubMillisecondsPre(preunixMilliseconds) {
            return this.serverMilliseconds - preunixMilliseconds;
        }
        getSubMillisecondsAfter(afterunixMilliseconds) {
            return afterunixMilliseconds - this.serverMilliseconds;
        }
    }

    class SystemToastMessageStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameLaunch", "SystemToastMessage"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_title = (this.getChild("title"));
        }
    }
    SystemToastMessageStruct.URL = "ui://47qsdr42nk8t3";
    SystemToastMessageStruct.DependPackages = ["GameLaunch"];

    class SystemToastMessage extends SystemToastMessageStruct {
        play(txt, onComplete) {
            if (this._onCompleteHandler) {
                this._onCompleteHandler.recover();
            }
            this._onCompleteHandler = onComplete;
            this.m_title.text = txt;
            Tween.clearAll(this);
            MenuLayer.floatMsg.addChild(this);
            FguiHelper.centerScreen(this);
            this.alpha = 0;
            Tween.to(this, { y: this.y - 100, alpha: 1 }, 500, Ease.quadInOut);
            Tween.to(this, { y: this.y - 200, alpha: 0 }, 500, Ease.quadInOut, Handler.create(this, this.onComplete), 1000);
        }
        onComplete() {
            this.removeFromParent();
            if (this._onCompleteHandler) {
                this._onCompleteHandler.runWith(this);
                this._onCompleteHandler.recover();
                this._onCompleteHandler = null;
            }
        }
    }

    var Handler$4 = Laya.Handler;
    class SystemToastMessag {
        constructor() {
            this.list = [];
            this.pools = [];
            this.timeSpacing = 1;
        }
        play(txt) {
            if (txt != this.lastTxt) {
                this.show(txt);
            }
            else if (getTime() - this.lastTime >= this.timeSpacing) {
                this.show(txt);
            }
        }
        show(txt) {
            this.lastTxt = txt;
            this.lastTime = getTime();
            let item;
            if (this.pools.length > 0) {
                item = this.pools.pop();
            }
            else {
                item = SystemToastMessage.createInstance();
                this.list.push(item);
            }
            item.play(txt, Handler$4.create(this, this.onItemComplete));
        }
        onItemComplete(item) {
            this.pools.push(item);
        }
    }

    class SystemAlertMessageStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameLaunch", "SystemAlertMessage"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_content = (this.getChild("content"));
            this.m_title = (this.getChild("title"));
            this.m_dialog = (this.getChild("dialog"));
            this.m_okBtn = (this.getChild("okBtn"));
        }
    }
    SystemAlertMessageStruct.URL = "ui://47qsdr42nk8t1";
    SystemAlertMessageStruct.DependPackages = ["GameLaunch"];

    class SystemAlertMessage extends SystemAlertMessageStruct {
        get closeButton() {
            return this.m_dialog.m_closeButton;
        }
        open(txt, title = "", yesObj = null, yesFun = null, yesTxt = null, closeButtonVisiable = true, buttonEnable = true, isClickButtonAutoClose = true) {
            if (isNullOrEmpty(title)) {
                title = "";
            }
            this.yesFun = yesFun;
            this.yesObj = yesObj;
            this.isClickButtonAutoClose = isClickButtonAutoClose;
            this.m_content.text = txt;
            this.m_title.text = title;
            this.m_okBtn.title = yesTxt;
            this.m_okBtn.enabled = buttonEnable;
            this.closeButton.enabled = buttonEnable;
            this.closeButton.visible = closeButtonVisiable;
            this.m_okBtn.onClick(this, this.onClickYes);
            this.closeButton.onClick(this, this.close);
            MenuLayer.showDialogModel();
            FguiHelper.centerScreen(this);
            this.scaleX = 0;
            this.scaleY = 0;
            this.x = Game.screenSetting.screenWidth >> 1;
            this.y = Game.screenSetting.screenHeight >> 1;
            this.alpha = 0;
            Tween.to(this, { scaleX: 1, scaleY: 1, alpha: 1 }, 250, Ease.backInOut);
            MenuLayer.floatMsg.addChild(this);
        }
        close() {
            MenuLayer.hideDialogModel();
            Tween.to(this, { scaleX: 0, scaleY: 0, alpha: 0 }, 250, Ease.quadInOut, Handler.create(this, this.onHide));
        }
        onHide() {
            this.removeFromParent();
        }
        onClickYes() {
            if (this.isClickButtonAutoClose) {
                this.close();
            }
            if (this.yesFun) {
                if (this.yesObj) {
                    this.yesFun.apply(this.yesObj);
                }
                else {
                    this.yesFun();
                }
            }
        }
    }

    class SystemConfirmMessageStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameLaunch", "SystemConfirmMessage"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_content = (this.getChild("content"));
            this.m_title = (this.getChild("title"));
            this.m_dialog = (this.getChild("dialog"));
            this.m_okBtn = (this.getChild("okBtn"));
            this.m_cancleBtn = (this.getChild("cancleBtn"));
        }
    }
    SystemConfirmMessageStruct.URL = "ui://47qsdr42nk8t2";
    SystemConfirmMessageStruct.DependPackages = ["GameLaunch"];

    class SystemConfirmMessage extends SystemConfirmMessageStruct {
        get closeButton() {
            return this.m_dialog.m_closeButton;
        }
        open(txt, title = "", caller = null, yesFun = null, noFun = null, yesTxt = null, noTxt = null, closeButtonVisiable = true, isClickButtonAutoClose = true) {
            if (isNullOrEmpty(title)) {
                title = "";
            }
            this.caller = caller;
            this.yesFun = yesFun;
            this.noFun = noFun;
            this.isClickButtonAutoClose = isClickButtonAutoClose;
            this.m_content.text = txt;
            this.m_title.text = title;
            this.m_okBtn.title = yesTxt;
            this.m_cancleBtn.title = noTxt;
            this.closeButton.visible = closeButtonVisiable;
            this.m_okBtn.onClick(this, this.onClickYes);
            this.m_cancleBtn.onClick(this, this.onClickNo);
            this.closeButton.onClick(this, this.onClickClose);
            MenuLayer.showDialogModel();
            FguiHelper.centerScreen(this);
            Tween.clearAll(this);
            this.scaleX = 0;
            this.scaleY = 0;
            this.x = Game.screenSetting.screenWidth >> 1;
            this.y = Game.screenSetting.screenHeight >> 1;
            this.alpha = 0;
            Tween.to(this, { scaleX: 1, scaleY: 1, alpha: 1 }, 250, Ease.backInOut);
            MenuLayer.floatMsg.addChild(this);
        }
        close() {
            MenuLayer.hideDialogModel();
            Tween.to(this, { scaleX: 0, scaleY: 0, alpha: 0 }, 250, Ease.quadInOut, Handler.create(this, this.onHide));
        }
        onHide() {
            this.removeFromParent();
        }
        onClickYes() {
            if (this.isClickButtonAutoClose) {
                this.close();
            }
            if (this.yesFun) {
                if (this.caller) {
                    this.yesFun.apply(this.caller);
                }
                else {
                    this.yesFun();
                }
            }
        }
        onClickNo() {
            if (this.isClickButtonAutoClose) {
                this.close();
            }
            if (this.noFun) {
                if (this.caller) {
                    this.noFun.apply(this.caller);
                }
                else {
                    this.noFun();
                }
            }
        }
        onClickClose() {
            this.close();
        }
    }

    class SystemMessag {
        constructor() {
            this.toastMessage = new SystemToastMessag();
        }
        playOpenSound() {
            if (window["Game"] && window["Game"]["_isInstall"])
                Game.sound.playSound(SoundKey.MM02_Popup);
        }
        get alertMessage() {
            if (!this._alertMessage) {
                this._alertMessage = SystemAlertMessage.createInstance();
            }
            return this._alertMessage;
        }
        get confirmMessage() {
            if (!this._confirmMessage) {
                this._confirmMessage = SystemConfirmMessage.createInstance();
            }
            return this._confirmMessage;
        }
        toastText(txt) {
            this.toastMessage.play(txt);
        }
        toastMsg(msgKey, ...args) {
            let txt = Game.config.msg.getTxtFormat(msgKey, ...args);
            this.toastMessage.play(txt);
        }
        toastFormatText(txt, ...args) {
            this.toastText(format(txt, args));
        }
        toastItemNotEnough(id) {
            let config = Game.config.item.getConfig(id);
            let itemName = "";
            if (config)
                itemName = config.name;
            else
                itemName = id.toString();
            this.toastText(format(TEXT.ToastTextItemNotEnough, itemName));
        }
        alertText(txt, yesObj, yesFun) {
            this.alrtTextFull(txt, "", yesObj, yesFun);
        }
        alertMsg(msgKey, yesObj, yesFun) {
            let txt = Game.config.msg.getTxt(msgKey);
            this.alrtTextFull(txt, "", yesObj, yesFun);
        }
        alertMsgFormat(msgKey, msgargs, yesObj, yesFun) {
            let txt = Game.config.msg.getTxtFormat(msgKey, ...msgargs);
            this.alrtTextFull(txt, "", yesObj, yesFun);
        }
        alrtTMsgFull(msgkey, msgargs, title = "", yesObj = null, yesFun = null, yesTxt = null, buttonEnable = true, isClickButtonAutoClose = true) {
            let txt = Game.config.msg.getTxtFormat(msgkey, ...msgargs);
            this.alrtTextFull(txt, "", yesObj, yesFun, yesTxt, buttonEnable, isClickButtonAutoClose);
        }
        alrtTextFull(txt, title = "", yesObj = null, yesFun = null, yesTxt = null, closeButtonVisiable = true, buttonEnable = true, isClickButtonAutoClose = true) {
            if (isNullOrEmpty(yesTxt)) {
                yesTxt = Game.launchText.btnYes;
            }
            this.alertMessage.open(txt, title, yesObj, yesFun, yesTxt, closeButtonVisiable, buttonEnable, isClickButtonAutoClose);
            this.playOpenSound();
        }
        closeAlert() {
            this.alertMessage.close();
        }
        confirmMsg(msgkey, msgargs, title = "", caller = null, yesFun = null, noFun = null, yesTxt = null, noTxt = null, closeButtonVisiable = true, isClickButtonAutoClose = true) {
            let txt = Game.config.msg.getTxtFormat(msgkey, ...msgargs);
            this.confirmText(txt, title, caller, yesFun, noFun, yesTxt, noTxt, closeButtonVisiable, isClickButtonAutoClose);
        }
        confirmText(txt, title = "", caller = null, yesFun = null, noFun = null, yesTxt = null, noTxt = null, closeButtonVisiable = true, isClickButtonAutoClose = true) {
            if (isNullOrEmpty(yesTxt)) {
                yesTxt = TEXT.ButtonYes;
            }
            if (isNullOrEmpty(noTxt)) {
                noTxt = TEXT.ButtonNo;
            }
            this.confirmMessage.open(txt, title, caller, yesFun, noFun, yesTxt, noTxt, closeButtonVisiable, isClickButtonAutoClose);
            this.playOpenSound();
        }
        alertMessageHide() {
            if (this._alertMessage) {
                this._alertMessage.close();
            }
            if (this._confirmMessage) {
                this._confirmMessage.close();
            }
        }
    }

    class GameSystemMessag extends SystemMessag {
    }

    class LaunchText {
        constructor() {
            this.tips = [];
            this.btnYes = "确定";
            this.LoadedConfig = "加载配置文件";
            this.LoadedUI = "加载UI";
            this.LoadedWar = "加载战斗资源";
            this.LoadedWarConfig = "加载战斗配置";
            this.LoadedEnd = "加载完成";
        }
        setLangForEn() {
            this.tips =
                [];
            this.btnYes = "Ok";
            this.LoadedConfig = "Loading Config...";
            this.LoadedUI = "Loading UI...";
            this.LoadedEnd = "Loading Complete";
        }
    }

    class LoaderSettingHandler {
        constructor() {
            this.percent = 0;
            this.showPercent = 0;
        }
        setBegin() {
            this.percent = 0;
            this.showPercent = 0;
            this.setPercent(0);
        }
        loading(percent) {
            if (percent <= 0) {
                percent = 0.001;
            }
            else if (percent > 100) {
                percent = 100;
            }
            this.percent = percent;
        }
        setTip(txt) {
            let ctl = Game.loader.current;
            if (ctl) {
                ctl.setTip(txt);
            }
        }
        setPercent(percent) {
            let ctl = Game.loader.current;
            if (ctl) {
                ctl.setMax(100);
                ctl.setProgress(Math.ceil(percent));
            }
        }
        starTweenPrecent() {
            this.stopTweenPrecent();
            this._tweenHandler = setInterval(() => {
                this.showPercent = Math.min(100, Math.ceil(Mathf.Lerp(this.showPercent, this.percent, 0.5)));
                this.setPercent(this.showPercent);
                if (this.showPercent >= 100)
                    this.stopTweenPrecent();
            }, 100);
        }
        stopTweenPrecent() {
            if (this._tweenHandler) {
                clearInterval(this._tweenHandler);
                this._tweenHandler = null;
            }
        }
        onBegin() {
            this.setBegin();
            this.starTweenPrecent();
        }
        onLoadedConfig(index, count, rate) {
            this.setTip(Game.launchText.LoadedConfig);
            this.loading(0 + Math.ceil(rate * 40));
        }
        onLoadedLangConfig(index, count, rate) {
            this.setTip(Game.launchText.LoadedConfig);
            this.loading(40 + Math.ceil(rate * 20));
        }
        onLoadedFgui(index, count) {
            this.setTip(Game.launchText.LoadedUI);
            this.loading(60 + Math.ceil((index / count * 40)));
        }
        onEnd() {
            this.setTip(Game.launchText.LoadedEnd);
            this.loading(100);
        }
        Reset() {
            this.loading(0);
        }
    }

    class LoaderCtl {
        constructor() {
            this.isOpened = false;
            this.delayShowPanelHandler = -1;
        }
        get isDelayShowPanel() {
            return this.loaderId == LoaderId.EnterModule;
        }
        open() {
            this.isOpened = true;
            if (this.loaderPanel) {
                this.loaderPanel.showOn(MenuLayer.loader);
                this.loaderPanel.setContentVisiable(true);
                if (this.isDelayShowPanel) {
                    this.loaderPanel.setContentVisiable(false);
                    clearTimeout(this.delayShowPanelHandler);
                    this.delayShowPanelHandler = setTimeout(() => {
                        this.loaderPanel.setContentVisiable(true);
                    }, 100);
                }
            }
        }
        close() {
            if (this.delayShowPanelHandler != -1) {
                clearTimeout(this.delayShowPanelHandler);
                this.delayShowPanelHandler = -1;
            }
            this.isOpened = false;
            if (this.loaderPanel) {
                this.loaderPanel.hide();
                if (this.isDelayShowPanel) {
                    this.loaderPanel.setContentVisiable(false);
                }
            }
        }
        setProgress(progress) {
            if (progress <= 0) {
                progress = 1;
            }
            if (this.loaderPanel)
                this.loaderPanel.setValue(progress);
        }
        setMax(max) {
            if (this.loaderPanel)
                this.loaderPanel.setMax(max);
        }
        setTip(txt) {
            if (this.loaderPanel)
                this.loaderPanel.setTip(txt);
        }
        setTips(txts) {
            if (this.loaderPanel)
                this.loaderPanel.setTips(txts);
        }
        setVersion() {
            if (this.loaderPanel)
                this.loaderPanel.setVersion();
        }
    }

    class LoaderPanel extends FWindow {
        constructor() {
            super();
            this.sShowComplete = new Signal();
            this.sHideComplete = new Signal();
        }
        onInit() {
            super.onInit();
        }
        getContentVisiable() {
            if (this.contentPane) {
                return this.contentPane.visible;
            }
            return false;
        }
        setContentVisiable(value) {
            if (this.contentPane) {
                this.contentPane.visible = value;
            }
        }
        doShowAnimation() {
            this.onWindowWillShow();
            super.doShowAnimation();
        }
        doHideAnimation() {
            this.onWindowWillHide();
            super.doHideAnimation();
        }
        onShown() {
            this.sShowComplete.dispatch();
        }
        onHide() {
            this.sHideComplete.dispatch();
        }
        setMax(value) {
        }
        setValue(value) {
        }
        setTip(tip) {
        }
        setTips(tips) {
        }
        setVersion() {
        }
    }

    class EnterModuleLoaderStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameLaunch", "EnterModuleLoader"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_Reconnection = this.getController("Reconnection");
            this.m_title = (this.getChild("title"));
            this.m_help = (this.getChild("help"));
            this.m_txt_resVer = (this.getChild("txt_resVer"));
            this.m_txt_gamever = (this.getChild("txt_gamever"));
            this.m_screenBG = (this.getChild("screenBG"));
            this.m_progressBar = (this.getChild("progressBar"));
        }
    }
    EnterModuleLoaderStruct.URL = "ui://47qsdr42f84s0";
    EnterModuleLoaderStruct.DependPackages = ["GameLaunch"];

    class EnterModuleLoader extends EnterModuleLoaderStruct {
    }

    class LoaderEnterModelPanel extends LoaderPanel {
        constructor() {
            super();
            this.tips = [];
            this.__setTipHandlerTimer = -1;
        }
        onInit() {
            this.loader = EnterModuleLoader.createInstance();
            this.contentPane = this.loader;
            super.onInit();
            this.tips = Game.launchText.tips;
            this.setVersion();
        }
        onShown() {
            super.onShown();
            this.beginTips();
            this.setVersion();
            Game.version.sLocalVersionChange.add(this.setVersion, this);
        }
        onHide() {
            super.onHide();
            this.stopTips();
            Game.version.sLocalVersionChange.remove(this.setVersion, this);
        }
        beginTips() {
            this.stopTips();
            if (this.tips && this.tips.length > 0) {
                this.__setTipHandler();
            }
        }
        stopTips() {
            if (this.__setTipHandlerTimer > 0) {
                clearTimeout(this.__setTipHandlerTimer);
                this.__setTipHandlerTimer = -1;
            }
        }
        __setTipHandler() {
            this.loader.m_help.text = this.tips[Random.range(0, this.tips.length)];
            this.__setTipHandlerTimer = setTimeout(() => {
                this.__setTipHandler();
            }, Random.range(100, 400));
        }
        setMax(value) {
            this.loader.m_progressBar.max = value;
        }
        setValue(value) {
            this.loader.m_progressBar.value = value;
        }
        setTip(tip) {
            this.loader.m_title.text = tip;
        }
        setTips(tips) {
        }
        setVersion() {
            this.loader.m_txt_gamever.text = "GameVersion:" + Game.version.localAppVersionData.toString();
            this.loader.m_txt_resVer.text = "ResVersion:" + Game.version.localResVersionData.toString();
        }
    }

    class EnterLoginLoaderStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameLaunch", "EnterLoginLoader"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_title = (this.getChild("title"));
            this.m_help = (this.getChild("help"));
            this.m_txt_resVer = (this.getChild("txt_resVer"));
            this.m_txt_gamever = (this.getChild("txt_gamever"));
            this.m_progressBar = (this.getChild("progressBar"));
            this.m_imgLogo = (this.getChild("imgLogo"));
        }
    }
    EnterLoginLoaderStruct.URL = "ui://47qsdr42mrzrw2o";
    EnterLoginLoaderStruct.DependPackages = ["GameLaunch"];

    class EnterLoginLoader extends EnterLoginLoaderStruct {
    }

    class LoaderEnterLoginPanel extends LoaderPanel {
        constructor() {
            super();
            this.tips = [];
            this.__setTipHandlerTimer = -1;
        }
        onInit() {
            this.loader = EnterLoginLoader.createInstance();
            this.contentPane = this.loader;
            super.onInit();
            this.tips = Game.launchText.tips;
            this.setVersion();
        }
        onShown() {
            super.onShown();
            this.beginTips();
            this.setVersion();
            Game.version.sLocalVersionChange.add(this.setVersion, this);
        }
        onHide() {
            super.onHide();
            this.stopTips();
            Game.version.sLocalVersionChange.remove(this.setVersion, this);
        }
        beginTips() {
            this.stopTips();
            if (this.tips && this.tips.length > 0) {
                this.__setTipHandler();
            }
        }
        stopTips() {
            if (this.__setTipHandlerTimer > 0) {
                clearTimeout(this.__setTipHandlerTimer);
                this.__setTipHandlerTimer = -1;
            }
        }
        __setTipHandler() {
            this.loader.m_help.text = this.tips[Random.range(0, this.tips.length)];
            this.__setTipHandlerTimer = setTimeout(() => {
                this.__setTipHandler();
            }, Random.range(100, 400));
        }
        setMax(value) {
            this.loader.m_progressBar.max = value;
        }
        setValue(value) {
            this.loader.m_progressBar.value = value;
        }
        setTip(tip) {
            this.loader.m_title.text = tip;
        }
        setTips(tips) {
        }
        setVersion() {
            this.loader.m_txt_gamever.text = "GameVersion:" + Game.version.localAppVersionData.toString();
            this.loader.m_txt_resVer.text = "ResVersion:" + Game.version.localResVersionData.toString();
        }
    }

    class LoaderManager {
        constructor() {
            this.dict = new Dictionary();
            this.isInited = false;
        }
        static get Instance() {
            if (!LoaderManager._Instance) {
                LoaderManager._Instance = new LoaderManager();
            }
            return LoaderManager._Instance;
        }
        install() {
            if (this.isInited)
                return;
            this.isInited = true;
            let ctl = new LoaderCtl();
            ctl.loaderId = LoaderId.None;
            this.dict.add(ctl.loaderId, ctl);
            let defaultPanel = new LoaderEnterModelPanel();
            ctl = new LoaderCtl();
            ctl.loaderId = LoaderId.Circle;
            ctl.loaderPanel = defaultPanel;
            this.dict.add(ctl.loaderId, ctl);
            let loginPanel = new LoaderEnterLoginPanel();
            ctl = new LoaderCtl();
            ctl.loaderId = LoaderId.Launch;
            ctl.loaderPanel = loginPanel;
            this.dict.add(ctl.loaderId, ctl);
            let modelPanel = new LoaderEnterModelPanel();
            ctl = new LoaderCtl();
            ctl.loaderId = LoaderId.EnterModule;
            ctl.loaderPanel = modelPanel;
            this.dict.add(ctl.loaderId, ctl);
        }
        getLoaderCtl(loaderId) {
            return this.dict.getValue(loaderId);
        }
        open(loaderId) {
            let loaderCtl = this.getLoaderCtl(loaderId);
            if (!loaderCtl) {
                console.error("没有找到加载控制器 LoaderManager open loaderId=", loaderId);
            }
            loaderCtl.open();
            this.current = loaderCtl;
            return loaderCtl;
        }
        close(loaderId) {
            let loaderCtl = this.getLoaderCtl(loaderId);
            if (loaderCtl) {
                if (this.current == loaderCtl) {
                    this.current = null;
                }
                loaderCtl.close();
            }
        }
        closeAll() {
            let list = this.dict.getValues();
            for (let i = 0; i < list.length; i++) {
                list[i].close();
            }
            this.current = null;
        }
        setProgress(progress) {
            if (this.current) {
                this.current.setProgress(progress);
            }
        }
        setMax(max) {
            if (this.current) {
                this.current.setMax(max);
            }
        }
    }

    class AntNet {
        static get onError() {
            return net.logic.onError;
        }
        static get onConnect() {
            return net.logic.onConnect;
        }
        static get onClose() {
            return net.logic.onClose;
        }
        static get onReconnect() {
            return net.logic.onReconnect;
        }
        static get logicPing() {
            return net.logic.ping;
        }
        static GamerLoginC2S(session, addr) {
            net.logic.gamerLoginC2S(session, addr);
        }
        static get gamerLoginS2C() {
            return net.logic.gamerLoginS2C;
        }
        static async AsyncGamerLoginC2S(session, addr) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerLoginS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerLoginS2C.on(fun);
                AntNet.GamerLoginC2S(session, addr);
            });
        }
        static GamerLoginGetDataC2S() {
            net.logic.gamerLoginGetDataC2S();
        }
        static get gamerLoginGetDataS2C() {
            return net.logic.gamerLoginGetDataS2C;
        }
        static async AsyncGamerLoginGetDataC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerLoginGetDataS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerLoginGetDataS2C.on(fun);
                AntNet.GamerLoginGetDataC2S();
            });
        }
        static ServerTimeC2S() {
            net.logic.serverTimeC2S();
        }
        static get serverTimeS2C() {
            return net.logic.serverTimeS2C;
        }
        static async AsyncServerTimeC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.serverTimeS2C.off(fun);
                    resolve(e);
                };
                AntNet.serverTimeS2C.on(fun);
                AntNet.ServerTimeC2S();
            });
        }
        static GamerSubChatChannelC2S(channel, open) {
            net.logic.gamerSubChatChannelC2S(channel, open);
        }
        static get gamerSubChatChannelS2C() {
            return net.logic.gamerSubChatChannelS2C;
        }
        static async AsyncGamerSubChatChannelC2S(channel, open) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerSubChatChannelS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerSubChatChannelS2C.on(fun);
                AntNet.GamerSubChatChannelC2S(channel, open);
            });
        }
        static GamerChangeNameC2S(newName) {
            net.logic.gamerChangeNameC2S(newName);
        }
        static get gamerChangeNameS2C() {
            return net.logic.gamerChangeNameS2C;
        }
        static async AsyncGamerChangeNameC2S(newName) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerChangeNameS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerChangeNameS2C.on(fun);
                AntNet.GamerChangeNameC2S(newName);
            });
        }
        static GamerChangeAvatarC2S(Avatar) {
            net.logic.gamerChangeAvatarC2S(Avatar);
        }
        static get gamerChangeAvatarS2C() {
            return net.logic.gamerChangeAvatarS2C;
        }
        static async AsyncGamerChangeAvatarC2S(Avatar) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerChangeAvatarS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerChangeAvatarS2C.on(fun);
                AntNet.GamerChangeAvatarC2S(Avatar);
            });
        }
        static GamerGetBackpackC2S() {
            net.logic.gamerGetBackpackC2S();
        }
        static get gamerGetBackpackS2C() {
            return net.logic.gamerGetBackpackS2C;
        }
        static async AsyncGamerGetBackpackC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerGetBackpackS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerGetBackpackS2C.on(fun);
                AntNet.GamerGetBackpackC2S();
            });
        }
        static GamerSellItemC2S(itemId, num, uid) {
            net.logic.gamerSellItemC2S(itemId, num, uid);
        }
        static get gamerSellItemS2C() {
            return net.logic.gamerSellItemS2C;
        }
        static async AsyncGamerSellItemC2S(itemId, num, uid) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerSellItemS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerSellItemS2C.on(fun);
                AntNet.GamerSellItemC2S(itemId, num, uid);
            });
        }
        static GamerUseItemC2S(itemId, num, uid) {
            net.logic.gamerUseItemC2S(itemId, num, uid);
        }
        static get gamerUseItemS2C() {
            return net.logic.gamerUseItemS2C;
        }
        static async AsyncGamerUseItemC2S(itemId, num, uid) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerUseItemS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerUseItemS2C.on(fun);
                AntNet.GamerUseItemC2S(itemId, num, uid);
            });
        }
        static GamerFriendChatC2S(toId, msg) {
            net.logic.gamerFriendChatC2S(toId, msg);
        }
        static get gamerFriendChatS2C() {
            return net.logic.gamerFriendChatS2C;
        }
        static async AsyncGamerFriendChatC2S(toId, msg) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerFriendChatS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerFriendChatS2C.on(fun);
                AntNet.GamerFriendChatC2S(toId, msg);
            });
        }
        static GamerWorldChatC2S(server, msg) {
            net.logic.gamerWorldChatC2S(server, msg);
        }
        static get gamerWorldChatS2C() {
            return net.logic.gamerWorldChatS2C;
        }
        static async AsyncGamerWorldChatC2S(server, msg) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerWorldChatS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerWorldChatS2C.on(fun);
                AntNet.GamerWorldChatC2S(server, msg);
            });
        }
        static GamerTestChatC2S(toId, msg) {
            net.logic.gamerTestChatC2S(toId, msg);
        }
        static get gamerTestChatS2C() {
            return net.logic.gamerTestChatS2C;
        }
        static async AsyncGamerTestChatC2S(toId, msg) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerTestChatS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerTestChatS2C.on(fun);
                AntNet.GamerTestChatC2S(toId, msg);
            });
        }
        static GamerClubRequestC2S(clubId, msg) {
            net.logic.gamerClubRequestC2S(clubId, msg);
        }
        static get gamerClubRequestS2C() {
            return net.logic.gamerClubRequestS2C;
        }
        static async AsyncGamerClubRequestC2S(clubId, msg) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerClubRequestS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerClubRequestS2C.on(fun);
                AntNet.GamerClubRequestC2S(clubId, msg);
            });
        }
        static GamerNewFriendReqC2S(oid, msg) {
            net.logic.gamerNewFriendReqC2S(oid, msg);
        }
        static get gamerNewFriendReqS2C() {
            return net.logic.gamerNewFriendReqS2C;
        }
        static async AsyncGamerNewFriendReqC2S(oid, msg) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerNewFriendReqS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerNewFriendReqS2C.on(fun);
                AntNet.GamerNewFriendReqC2S(oid, msg);
            });
        }
        static GamerDelFriendC2S(oid) {
            net.logic.gamerDelFriendC2S(oid);
        }
        static get gamerDelFriendS2C() {
            return net.logic.gamerDelFriendS2C;
        }
        static async AsyncGamerDelFriendC2S(oid) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerDelFriendS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerDelFriendS2C.on(fun);
                AntNet.GamerDelFriendC2S(oid);
            });
        }
        static GamerProcessFriendReqC2S(oid, result) {
            net.logic.gamerProcessFriendReqC2S(oid, result);
        }
        static get gamerProcessFriendReqS2C() {
            return net.logic.gamerProcessFriendReqS2C;
        }
        static async AsyncGamerProcessFriendReqC2S(oid, result) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerProcessFriendReqS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerProcessFriendReqS2C.on(fun);
                AntNet.GamerProcessFriendReqC2S(oid, result);
            });
        }
        static GamerGetMailC2S() {
            net.logic.gamerGetMailC2S();
        }
        static get gamerGetMailS2C() {
            return net.logic.gamerGetMailS2C;
        }
        static async AsyncGamerGetMailC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerGetMailS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerGetMailS2C.on(fun);
                AntNet.GamerGetMailC2S();
            });
        }
        static GamerDelMailC2S(mailId) {
            net.logic.gamerDelMailC2S(mailId);
        }
        static get gamerDelMailS2C() {
            return net.logic.gamerDelMailS2C;
        }
        static async AsyncGamerDelMailC2S(mailId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerDelMailS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerDelMailS2C.on(fun);
                AntNet.GamerDelMailC2S(mailId);
            });
        }
        static GamerDelHaveReadMailC2S() {
            net.logic.gamerDelHaveReadMailC2S();
        }
        static get gamerDelHaveReadMailS2C() {
            return net.logic.gamerDelHaveReadMailS2C;
        }
        static async AsyncGamerDelHaveReadMailC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerDelHaveReadMailS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerDelHaveReadMailS2C.on(fun);
                AntNet.GamerDelHaveReadMailC2S();
            });
        }
        static GamerOneKeyRcvMailRewardC2S() {
            net.logic.gamerOneKeyRcvMailRewardC2S();
        }
        static get gamerOneKeyRcvMailRewardS2C() {
            return net.logic.gamerOneKeyRcvMailRewardS2C;
        }
        static async AsyncGamerOneKeyRcvMailRewardC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerOneKeyRcvMailRewardS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerOneKeyRcvMailRewardS2C.on(fun);
                AntNet.GamerOneKeyRcvMailRewardC2S();
            });
        }
        static GamerChangeMailStateC2S(mailId, state) {
            net.logic.gamerChangeMailStateC2S(mailId, state);
        }
        static get gamerChangeMailStateS2C() {
            return net.logic.gamerChangeMailStateS2C;
        }
        static async AsyncGamerChangeMailStateC2S(mailId, state) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerChangeMailStateS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerChangeMailStateS2C.on(fun);
                AntNet.GamerChangeMailStateC2S(mailId, state);
            });
        }
        static GamerNewHeroC2S(heroId) {
            net.logic.gamerNewHeroC2S(heroId);
        }
        static get gamerNewHeroS2C() {
            return net.logic.gamerNewHeroS2C;
        }
        static async AsyncGamerNewHeroC2S(heroId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerNewHeroS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerNewHeroS2C.on(fun);
                AntNet.GamerNewHeroC2S(heroId);
            });
        }
        static GamerUpgradeHeroC2S(heroId, upgradeNum) {
            net.logic.gamerUpgradeHeroC2S(heroId, upgradeNum);
        }
        static get gamerUpgradeHeroS2C() {
            return net.logic.gamerUpgradeHeroS2C;
        }
        static async AsyncGamerUpgradeHeroC2S(heroId, upgradeNum) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerUpgradeHeroS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerUpgradeHeroS2C.on(fun);
                AntNet.GamerUpgradeHeroC2S(heroId, upgradeNum);
            });
        }
        static GamerUseHeroMedicineC2S(heroId, itemId, useNum) {
            net.logic.gamerUseHeroMedicineC2S(heroId, itemId, useNum);
        }
        static get gamerUseHeroMedicineS2C() {
            return net.logic.gamerUseHeroMedicineS2C;
        }
        static async AsyncGamerUseHeroMedicineC2S(heroId, itemId, useNum) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerUseHeroMedicineS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerUseHeroMedicineS2C.on(fun);
                AntNet.GamerUseHeroMedicineC2S(heroId, itemId, useNum);
            });
        }
        static GamerUpStarHeroC2S(heroId) {
            net.logic.gamerUpStarHeroC2S(heroId);
        }
        static get gamerUpStarHeroS2C() {
            return net.logic.gamerUpStarHeroS2C;
        }
        static async AsyncGamerUpStarHeroC2S(heroId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerUpStarHeroS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerUpStarHeroS2C.on(fun);
                AntNet.GamerUpStarHeroC2S(heroId);
            });
        }
        static GamerUpHeroSkillC2S(heroId, skillId) {
            net.logic.gamerUpHeroSkillC2S(heroId, skillId);
        }
        static get gamerUpHeroSkillS2C() {
            return net.logic.gamerUpHeroSkillS2C;
        }
        static async AsyncGamerUpHeroSkillC2S(heroId, skillId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerUpHeroSkillS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerUpHeroSkillS2C.on(fun);
                AntNet.GamerUpHeroSkillC2S(heroId, skillId);
            });
        }
        static GamerGetHeroC2S() {
            net.logic.gamerGetHeroC2S();
        }
        static get gamerGetHeroS2C() {
            return net.logic.gamerGetHeroS2C;
        }
        static async AsyncGamerGetHeroC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerGetHeroS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerGetHeroS2C.on(fun);
                AntNet.GamerGetHeroC2S();
            });
        }
        static GamerPVPLoadingC2S(session, per) {
            net.logic.gamerPVPLoadingC2S(session, per);
        }
        static get gamerPVPLoadingS2C() {
            return net.logic.gamerPVPLoadingS2C;
        }
        static async AsyncGamerPVPLoadingC2S(session, per) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerPVPLoadingS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerPVPLoadingS2C.on(fun);
                AntNet.GamerPVPLoadingC2S(session, per);
            });
        }
        static GamerPVPSyncC2S(session, input, needFrames, crc, inputs, reconn, exit, index, gateAddr, result, recvTime, clientAddr) {
            net.logic.gamerPVPSyncC2S(session, input, needFrames, crc, inputs, reconn, exit, index, gateAddr, result, recvTime, clientAddr);
        }
        static get gamerPVPSyncS2C() {
            return net.logic.gamerPVPSyncS2C;
        }
        static async AsyncGamerPVPSyncC2S(session, input, needFrames, crc, inputs, reconn, exit, index, gateAddr, result, recvTime, clientAddr) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerPVPSyncS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerPVPSyncS2C.on(fun);
                AntNet.GamerPVPSyncC2S(session, input, needFrames, crc, inputs, reconn, exit, index, gateAddr, result, recvTime, clientAddr);
            });
        }
        static GamerReliveC2S(times, checkPointId) {
            net.logic.gamerReliveC2S(times, checkPointId);
        }
        static get gamerReliveS2C() {
            return net.logic.gamerReliveS2C;
        }
        static async AsyncGamerReliveC2S(times, checkPointId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerReliveS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerReliveS2C.on(fun);
                AntNet.GamerReliveC2S(times, checkPointId);
            });
        }
        static GamerGetRealTimeRankC2S() {
            net.logic.gamerGetRealTimeRankC2S();
        }
        static get gamerGetRealTimeRankS2C() {
            return net.logic.gamerGetRealTimeRankS2C;
        }
        static async AsyncGamerGetRealTimeRankC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerGetRealTimeRankS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerGetRealTimeRankS2C.on(fun);
                AntNet.GamerGetRealTimeRankC2S();
            });
        }
        static GamerCheckPVPBattleC2S(session) {
            net.logic.gamerCheckPVPBattleC2S(session);
        }
        static get gamerCheckPVPBattleS2C() {
            return net.logic.gamerCheckPVPBattleS2C;
        }
        static async AsyncGamerCheckPVPBattleC2S(session) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerCheckPVPBattleS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerCheckPVPBattleS2C.on(fun);
                AntNet.GamerCheckPVPBattleC2S(session);
            });
        }
        static GamerUploadWXInfoC2S(wxInfo) {
            net.logic.gamerUploadWXInfoC2S(wxInfo);
        }
        static get gamerUploadWXInfoS2C() {
            return net.logic.gamerUploadWXInfoS2C;
        }
        static async AsyncGamerUploadWXInfoC2S(wxInfo) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerUploadWXInfoS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerUploadWXInfoS2C.on(fun);
                AntNet.GamerUploadWXInfoC2S(wxInfo);
            });
        }
        static GamerGetNoviceGuideC2S() {
            net.logic.gamerGetNoviceGuideC2S();
        }
        static get gamerGetNoviceGuideS2C() {
            return net.logic.gamerGetNoviceGuideS2C;
        }
        static async AsyncGamerGetNoviceGuideC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerGetNoviceGuideS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerGetNoviceGuideS2C.on(fun);
                AntNet.GamerGetNoviceGuideC2S();
            });
        }
        static GamerNoviceGuideChangeC2S(noviceGuideList) {
            net.logic.gamerNoviceGuideChangeC2S(noviceGuideList);
        }
        static get gamerNoviceGuideChangeS2C() {
            return net.logic.gamerNoviceGuideChangeS2C;
        }
        static async AsyncGamerNoviceGuideChangeC2S(noviceGuideList) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerNoviceGuideChangeS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerNoviceGuideChangeS2C.on(fun);
                AntNet.GamerNoviceGuideChangeC2S(noviceGuideList);
            });
        }
        static GamerMatchC2S(type, heroId, teamId, checkPointId, danInfo, heroGroupId, heroList, secretLand) {
            net.logic.gamerMatchC2S(type, heroId, teamId, checkPointId, danInfo, heroGroupId, heroList, secretLand);
        }
        static get gamerMatchS2C() {
            return net.logic.gamerMatchS2C;
        }
        static async AsyncGamerMatchC2S(type, heroId, teamId, checkPointId, danInfo, heroGroupId, heroList, secretLand) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerMatchS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerMatchS2C.on(fun);
                AntNet.GamerMatchC2S(type, heroId, teamId, checkPointId, danInfo, heroGroupId, heroList, secretLand);
            });
        }
        static GamerCancelMatchC2S() {
            net.logic.gamerCancelMatchC2S();
        }
        static get gamerCancelMatchS2C() {
            return net.logic.gamerCancelMatchS2C;
        }
        static async AsyncGamerCancelMatchC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerCancelMatchS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerCancelMatchS2C.on(fun);
                AntNet.GamerCancelMatchC2S();
            });
        }
        static GamerGetRewardC2S(type) {
            net.logic.gamerGetRewardC2S(type);
        }
        static get gamerGetRewardS2C() {
            return net.logic.gamerGetRewardS2C;
        }
        static async AsyncGamerGetRewardC2S(type) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerGetRewardS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerGetRewardS2C.on(fun);
                AntNet.GamerGetRewardC2S(type);
            });
        }
        static GamerUseIconC2S(type, count, session) {
            net.logic.gamerUseIconC2S(type, count, session);
        }
        static get gamerUseIconS2C() {
            return net.logic.gamerUseIconS2C;
        }
        static async AsyncGamerUseIconC2S(type, count, session) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerUseIconS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerUseIconS2C.on(fun);
                AntNet.GamerUseIconC2S(type, count, session);
            });
        }
        static GamerExtractGashaponC2S(gashaponId) {
            net.logic.gamerExtractGashaponC2S(gashaponId);
        }
        static get gamerExtractGashaponS2C() {
            return net.logic.gamerExtractGashaponS2C;
        }
        static async AsyncGamerExtractGashaponC2S(gashaponId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerExtractGashaponS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerExtractGashaponS2C.on(fun);
                AntNet.GamerExtractGashaponC2S(gashaponId);
            });
        }
        static GamerGetGashaponPreviewC2S(gashaponType) {
            net.logic.gamerGetGashaponPreviewC2S(gashaponType);
        }
        static get gamerGetGashaponPreviewS2C() {
            return net.logic.gamerGetGashaponPreviewS2C;
        }
        static async AsyncGamerGetGashaponPreviewC2S(gashaponType) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerGetGashaponPreviewS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerGetGashaponPreviewS2C.on(fun);
                AntNet.GamerGetGashaponPreviewC2S(gashaponType);
            });
        }
        static GetActivityRewardC2S(activityId) {
            net.logic.getActivityRewardC2S(activityId);
        }
        static get getActivityRewardS2C() {
            return net.logic.getActivityRewardS2C;
        }
        static async AsyncGetActivityRewardC2S(activityId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.getActivityRewardS2C.off(fun);
                    resolve(e);
                };
                AntNet.getActivityRewardS2C.on(fun);
                AntNet.GetActivityRewardC2S(activityId);
            });
        }
        static CreateGuildC2S(guildName) {
            net.logic.createGuildC2S(guildName);
        }
        static get createGuildS2C() {
            return net.logic.createGuildS2C;
        }
        static async AsyncCreateGuildC2S(guildName) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.createGuildS2C.off(fun);
                    resolve(e);
                };
                AntNet.createGuildS2C.on(fun);
                AntNet.CreateGuildC2S(guildName);
            });
        }
        static GuildGamerLoginC2S(guildId) {
            net.logic.guildGamerLoginC2S(guildId);
        }
        static get guildGamerLoginS2C() {
            return net.logic.guildGamerLoginS2C;
        }
        static async AsyncGuildGamerLoginC2S(guildId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.guildGamerLoginS2C.off(fun);
                    resolve(e);
                };
                AntNet.guildGamerLoginS2C.on(fun);
                AntNet.GuildGamerLoginC2S(guildId);
            });
        }
        static GuildGamerLoginoutC2S(guildId) {
            net.logic.guildGamerLoginoutC2S(guildId);
        }
        static get guildGamerLoginoutS2C() {
            return net.logic.guildGamerLoginoutS2C;
        }
        static async AsyncGuildGamerLoginoutC2S(guildId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.guildGamerLoginoutS2C.off(fun);
                    resolve(e);
                };
                AntNet.guildGamerLoginoutS2C.on(fun);
                AntNet.GuildGamerLoginoutC2S(guildId);
            });
        }
        static DissolutionGuildC2S(guildId) {
            net.logic.dissolutionGuildC2S(guildId);
        }
        static get dissolutionGuildS2C() {
            return net.logic.dissolutionGuildS2C;
        }
        static async AsyncDissolutionGuildC2S(guildId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.dissolutionGuildS2C.off(fun);
                    resolve(e);
                };
                AntNet.dissolutionGuildS2C.on(fun);
                AntNet.DissolutionGuildC2S(guildId);
            });
        }
        static GetGuildC2S(guildId) {
            net.logic.getGuildC2S(guildId);
        }
        static get getGuildS2C() {
            return net.logic.getGuildS2C;
        }
        static async AsyncGetGuildC2S(guildId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.getGuildS2C.off(fun);
                    resolve(e);
                };
                AntNet.getGuildS2C.on(fun);
                AntNet.GetGuildC2S(guildId);
            });
        }
        static GetGuildListC2S(serverId, page) {
            net.logic.getGuildListC2S(serverId, page);
        }
        static get getGuildListS2C() {
            return net.logic.getGuildListS2C;
        }
        static async AsyncGetGuildListC2S(serverId, page) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.getGuildListS2C.off(fun);
                    resolve(e);
                };
                AntNet.getGuildListS2C.on(fun);
                AntNet.GetGuildListC2S(serverId, page);
            });
        }
        static ApplyJoinGuildC2S(guildId) {
            net.logic.applyJoinGuildC2S(guildId);
        }
        static get applyJoinGuildS2C() {
            return net.logic.applyJoinGuildS2C;
        }
        static async AsyncApplyJoinGuildC2S(guildId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.applyJoinGuildS2C.off(fun);
                    resolve(e);
                };
                AntNet.applyJoinGuildS2C.on(fun);
                AntNet.ApplyJoinGuildC2S(guildId);
            });
        }
        static ApprovalJoinGuildC2S(guildId, applyerGid, result) {
            net.logic.approvalJoinGuildC2S(guildId, applyerGid, result);
        }
        static get approvalJoinGuildS2C() {
            return net.logic.approvalJoinGuildS2C;
        }
        static async AsyncApprovalJoinGuildC2S(guildId, applyerGid, result) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.approvalJoinGuildS2C.off(fun);
                    resolve(e);
                };
                AntNet.approvalJoinGuildS2C.on(fun);
                AntNet.ApprovalJoinGuildC2S(guildId, applyerGid, result);
            });
        }
        static InviteJoinGuildC2S(inviteeGid, guildId) {
            net.logic.inviteJoinGuildC2S(inviteeGid, guildId);
        }
        static get inviteJoinGuildS2C() {
            return net.logic.inviteJoinGuildS2C;
        }
        static async AsyncInviteJoinGuildC2S(inviteeGid, guildId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.inviteJoinGuildS2C.off(fun);
                    resolve(e);
                };
                AntNet.inviteJoinGuildS2C.on(fun);
                AntNet.InviteJoinGuildC2S(inviteeGid, guildId);
            });
        }
        static AgreeJoinGuildC2S(guildId, result) {
            net.logic.agreeJoinGuildC2S(guildId, result);
        }
        static get agreeJoinGuildS2C() {
            return net.logic.agreeJoinGuildS2C;
        }
        static async AsyncAgreeJoinGuildC2S(guildId, result) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.agreeJoinGuildS2C.off(fun);
                    resolve(e);
                };
                AntNet.agreeJoinGuildS2C.on(fun);
                AntNet.AgreeJoinGuildC2S(guildId, result);
            });
        }
        static QuitGuildC2S(guildId) {
            net.logic.quitGuildC2S(guildId);
        }
        static get quitGuildS2C() {
            return net.logic.quitGuildS2C;
        }
        static async AsyncQuitGuildC2S(guildId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.quitGuildS2C.off(fun);
                    resolve(e);
                };
                AntNet.quitGuildS2C.on(fun);
                AntNet.QuitGuildC2S(guildId);
            });
        }
        static KickOutGuildC2S(guildId, kickedGid) {
            net.logic.kickOutGuildC2S(guildId, kickedGid);
        }
        static get kickOutGuildS2C() {
            return net.logic.kickOutGuildS2C;
        }
        static async AsyncKickOutGuildC2S(guildId, kickedGid) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.kickOutGuildS2C.off(fun);
                    resolve(e);
                };
                AntNet.kickOutGuildS2C.on(fun);
                AntNet.KickOutGuildC2S(guildId, kickedGid);
            });
        }
        static GuildChatC2S(guildId, msg) {
            net.logic.guildChatC2S(guildId, msg);
        }
        static get guildChatS2C() {
            return net.logic.guildChatS2C;
        }
        static async AsyncGuildChatC2S(guildId, msg) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.guildChatS2C.off(fun);
                    resolve(e);
                };
                AntNet.guildChatS2C.on(fun);
                AntNet.GuildChatC2S(guildId, msg);
            });
        }
        static GMC2S(gm) {
            net.logic.gMC2S(gm);
        }
        static get gMS2C() {
            return net.logic.gMS2C;
        }
        static async AsyncGMC2S(gm) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gMS2C.off(fun);
                    resolve(e);
                };
                AntNet.gMS2C.on(fun);
                AntNet.GMC2S(gm);
            });
        }
        static CheckPointListC2S() {
            net.logic.checkPointListC2S();
        }
        static get checkPointListS2C() {
            return net.logic.checkPointListS2C;
        }
        static async AsyncCheckPointListC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.checkPointListS2C.off(fun);
                    resolve(e);
                };
                AntNet.checkPointListS2C.on(fun);
                AntNet.CheckPointListC2S();
            });
        }
        static GetPlotStarRewardC2S(chapterGradeId, chapterLevel) {
            net.logic.getPlotStarRewardC2S(chapterGradeId, chapterLevel);
        }
        static get getPlotStarRewardS2C() {
            return net.logic.getPlotStarRewardS2C;
        }
        static async AsyncGetPlotStarRewardC2S(chapterGradeId, chapterLevel) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.getPlotStarRewardS2C.off(fun);
                    resolve(e);
                };
                AntNet.getPlotStarRewardS2C.on(fun);
                AntNet.GetPlotStarRewardC2S(chapterGradeId, chapterLevel);
            });
        }
        static BuyTimesCheckPointC2S(type, buyNum) {
            net.logic.buyTimesCheckPointC2S(type, buyNum);
        }
        static get buyTimesCheckPointS2C() {
            return net.logic.buyTimesCheckPointS2C;
        }
        static async AsyncBuyTimesCheckPointC2S(type, buyNum) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.buyTimesCheckPointS2C.off(fun);
                    resolve(e);
                };
                AntNet.buyTimesCheckPointS2C.on(fun);
                AntNet.BuyTimesCheckPointC2S(type, buyNum);
            });
        }
        static SweepCheckPointC2S(checkPointId, times) {
            net.logic.sweepCheckPointC2S(checkPointId, times);
        }
        static get sweepCheckPointS2C() {
            return net.logic.sweepCheckPointS2C;
        }
        static async AsyncSweepCheckPointC2S(checkPointId, times) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.sweepCheckPointS2C.off(fun);
                    resolve(e);
                };
                AntNet.sweepCheckPointS2C.on(fun);
                AntNet.SweepCheckPointC2S(checkPointId, times);
            });
        }
        static GamerSettlePVEC2S(checkPointId, battleTime, HeroList, reserve) {
            net.logic.gamerSettlePVEC2S(checkPointId, battleTime, HeroList, reserve);
        }
        static get gamerSettlePVES2C() {
            return net.logic.gamerSettlePVES2C;
        }
        static async AsyncGamerSettlePVEC2S(checkPointId, battleTime, HeroList, reserve) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerSettlePVES2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerSettlePVES2C.on(fun);
                AntNet.GamerSettlePVEC2S(checkPointId, battleTime, HeroList, reserve);
            });
        }
        static DraugListC2S() {
            net.logic.draugListC2S();
        }
        static get draugListS2C() {
            return net.logic.draugListS2C;
        }
        static async AsyncDraugListC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.draugListS2C.off(fun);
                    resolve(e);
                };
                AntNet.draugListS2C.on(fun);
                AntNet.DraugListC2S();
            });
        }
        static AwakenDraugC2S(type) {
            net.logic.awakenDraugC2S(type);
        }
        static get awakenDraugS2C() {
            return net.logic.awakenDraugS2C;
        }
        static async AsyncAwakenDraugC2S(type) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.awakenDraugS2C.off(fun);
                    resolve(e);
                };
                AntNet.awakenDraugS2C.on(fun);
                AntNet.AwakenDraugC2S(type);
            });
        }
        static PutDraugIntoPackC2S() {
            net.logic.putDraugIntoPackC2S();
        }
        static get putDraugIntoPackS2C() {
            return net.logic.putDraugIntoPackS2C;
        }
        static async AsyncPutDraugIntoPackC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.putDraugIntoPackS2C.off(fun);
                    resolve(e);
                };
                AntNet.putDraugIntoPackS2C.on(fun);
                AntNet.PutDraugIntoPackC2S();
            });
        }
        static SwallowDraugC2S(swallowId, heroId, beSwallowIdList) {
            net.logic.swallowDraugC2S(swallowId, heroId, beSwallowIdList);
        }
        static get swallowDraugS2C() {
            return net.logic.swallowDraugS2C;
        }
        static async AsyncSwallowDraugC2S(swallowId, heroId, beSwallowIdList) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.swallowDraugS2C.off(fun);
                    resolve(e);
                };
                AntNet.swallowDraugS2C.on(fun);
                AntNet.SwallowDraugC2S(swallowId, heroId, beSwallowIdList);
            });
        }
        static DecomposeDraugC2S(draugIdList) {
            net.logic.decomposeDraugC2S(draugIdList);
        }
        static get decomposeDraugS2C() {
            return net.logic.decomposeDraugS2C;
        }
        static async AsyncDecomposeDraugC2S(draugIdList) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.decomposeDraugS2C.off(fun);
                    resolve(e);
                };
                AntNet.decomposeDraugS2C.on(fun);
                AntNet.DecomposeDraugC2S(draugIdList);
            });
        }
        static LockDraugC2S(draugId) {
            net.logic.lockDraugC2S(draugId);
        }
        static get lockDraugS2C() {
            return net.logic.lockDraugS2C;
        }
        static async AsyncLockDraugC2S(draugId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.lockDraugS2C.off(fun);
                    resolve(e);
                };
                AntNet.lockDraugS2C.on(fun);
                AntNet.LockDraugC2S(draugId);
            });
        }
        static WearDraugC2S(draugId, heroId) {
            net.logic.wearDraugC2S(draugId, heroId);
        }
        static get wearDraugS2C() {
            return net.logic.wearDraugS2C;
        }
        static async AsyncWearDraugC2S(draugId, heroId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.wearDraugS2C.off(fun);
                    resolve(e);
                };
                AntNet.wearDraugS2C.on(fun);
                AntNet.WearDraugC2S(draugId, heroId);
            });
        }
        static UnwearDraugC2S(heroId, pos) {
            net.logic.unwearDraugC2S(heroId, pos);
        }
        static get unwearDraugS2C() {
            return net.logic.unwearDraugS2C;
        }
        static async AsyncUnwearDraugC2S(heroId, pos) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.unwearDraugS2C.off(fun);
                    resolve(e);
                };
                AntNet.unwearDraugS2C.on(fun);
                AntNet.UnwearDraugC2S(heroId, pos);
            });
        }
        static DraugSelectHeroC2S(selectHeroId) {
            net.logic.draugSelectHeroC2S(selectHeroId);
        }
        static get draugSelectHeroS2C() {
            return net.logic.draugSelectHeroS2C;
        }
        static async AsyncDraugSelectHeroC2S(selectHeroId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.draugSelectHeroS2C.off(fun);
                    resolve(e);
                };
                AntNet.draugSelectHeroS2C.on(fun);
                AntNet.DraugSelectHeroC2S(selectHeroId);
            });
        }
        static HeroGroupListC2S() {
            net.logic.heroGroupListC2S();
        }
        static get heroGroupListS2C() {
            return net.logic.heroGroupListS2C;
        }
        static async AsyncHeroGroupListC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.heroGroupListS2C.off(fun);
                    resolve(e);
                };
                AntNet.heroGroupListS2C.on(fun);
                AntNet.HeroGroupListC2S();
            });
        }
        static UnlockHeroGroupC2S(heroGroupId) {
            net.logic.unlockHeroGroupC2S(heroGroupId);
        }
        static get unlockHeroGroupS2C() {
            return net.logic.unlockHeroGroupS2C;
        }
        static async AsyncUnlockHeroGroupC2S(heroGroupId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.unlockHeroGroupS2C.off(fun);
                    resolve(e);
                };
                AntNet.unlockHeroGroupS2C.on(fun);
                AntNet.UnlockHeroGroupC2S(heroGroupId);
            });
        }
        static ChangeNameHeroGroupC2S(heroGroupId, name) {
            net.logic.changeNameHeroGroupC2S(heroGroupId, name);
        }
        static get changeNameHeroGroupS2C() {
            return net.logic.changeNameHeroGroupS2C;
        }
        static async AsyncChangeNameHeroGroupC2S(heroGroupId, name) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.changeNameHeroGroupS2C.off(fun);
                    resolve(e);
                };
                AntNet.changeNameHeroGroupS2C.on(fun);
                AntNet.ChangeNameHeroGroupC2S(heroGroupId, name);
            });
        }
        static HeroGroupChangeHeroC2S(heroGroupId, pos, heroId) {
            net.logic.heroGroupChangeHeroC2S(heroGroupId, pos, heroId);
        }
        static get heroGroupChangeHeroS2C() {
            return net.logic.heroGroupChangeHeroS2C;
        }
        static async AsyncHeroGroupChangeHeroC2S(heroGroupId, pos, heroId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.heroGroupChangeHeroS2C.off(fun);
                    resolve(e);
                };
                AntNet.heroGroupChangeHeroS2C.on(fun);
                AntNet.HeroGroupChangeHeroC2S(heroGroupId, pos, heroId);
            });
        }
        static HeroGroupChangeSkillC2S(heroGroupId, pos, skillId) {
            net.logic.heroGroupChangeSkillC2S(heroGroupId, pos, skillId);
        }
        static get heroGroupChangeSkillS2C() {
            return net.logic.heroGroupChangeSkillS2C;
        }
        static async AsyncHeroGroupChangeSkillC2S(heroGroupId, pos, skillId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.heroGroupChangeSkillS2C.off(fun);
                    resolve(e);
                };
                AntNet.heroGroupChangeSkillS2C.on(fun);
                AntNet.HeroGroupChangeSkillC2S(heroGroupId, pos, skillId);
            });
        }
        static BuyFatigueC2S(goodId) {
            net.logic.buyFatigueC2S(goodId);
        }
        static get buyFatigueS2C() {
            return net.logic.buyFatigueS2C;
        }
        static async AsyncBuyFatigueC2S(goodId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.buyFatigueS2C.off(fun);
                    resolve(e);
                };
                AntNet.buyFatigueS2C.on(fun);
                AntNet.BuyFatigueC2S(goodId);
            });
        }
        static GetFatigueWelfareC2S(welfareId) {
            net.logic.getFatigueWelfareC2S(welfareId);
        }
        static get getFatigueWelfareS2C() {
            return net.logic.getFatigueWelfareS2C;
        }
        static async AsyncGetFatigueWelfareC2S(welfareId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.getFatigueWelfareS2C.off(fun);
                    resolve(e);
                };
                AntNet.getFatigueWelfareS2C.on(fun);
                AntNet.GetFatigueWelfareC2S(welfareId);
            });
        }
        static UpStarEquipC2S(heroId, equipUid, type, eatUidList) {
            net.logic.upStarEquipC2S(heroId, equipUid, type, eatUidList);
        }
        static get upStarEquipS2C() {
            return net.logic.upStarEquipS2C;
        }
        static async AsyncUpStarEquipC2S(heroId, equipUid, type, eatUidList) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.upStarEquipS2C.off(fun);
                    resolve(e);
                };
                AntNet.upStarEquipS2C.on(fun);
                AntNet.UpStarEquipC2S(heroId, equipUid, type, eatUidList);
            });
        }
        static EatEquipsC2S(heroId, equipUid, eatUidList) {
            net.logic.eatEquipsC2S(heroId, equipUid, eatUidList);
        }
        static get eatEquipsS2C() {
            return net.logic.eatEquipsS2C;
        }
        static async AsyncEatEquipsC2S(heroId, equipUid, eatUidList) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.eatEquipsS2C.off(fun);
                    resolve(e);
                };
                AntNet.eatEquipsS2C.on(fun);
                AntNet.EatEquipsC2S(heroId, equipUid, eatUidList);
            });
        }
        static DesEquipC2S(equipUid) {
            net.logic.desEquipC2S(equipUid);
        }
        static get desEquipS2C() {
            return net.logic.desEquipS2C;
        }
        static async AsyncDesEquipC2S(equipUid) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.desEquipS2C.off(fun);
                    resolve(e);
                };
                AntNet.desEquipS2C.on(fun);
                AntNet.DesEquipC2S(equipUid);
            });
        }
        static TakeOnEquipC2S(heroIdOn, heroIdOff, equipUid) {
            net.logic.takeOnEquipC2S(heroIdOn, heroIdOff, equipUid);
        }
        static get takeOnEquipS2C() {
            return net.logic.takeOnEquipS2C;
        }
        static async AsyncTakeOnEquipC2S(heroIdOn, heroIdOff, equipUid) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.takeOnEquipS2C.off(fun);
                    resolve(e);
                };
                AntNet.takeOnEquipS2C.on(fun);
                AntNet.TakeOnEquipC2S(heroIdOn, heroIdOff, equipUid);
            });
        }
        static TakeOffEquipC2S(heroIdOff, equipUid) {
            net.logic.takeOffEquipC2S(heroIdOff, equipUid);
        }
        static get takeOffEquipS2C() {
            return net.logic.takeOffEquipS2C;
        }
        static async AsyncTakeOffEquipC2S(heroIdOff, equipUid) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.takeOffEquipS2C.off(fun);
                    resolve(e);
                };
                AntNet.takeOffEquipS2C.on(fun);
                AntNet.TakeOffEquipC2S(heroIdOff, equipUid);
            });
        }
        static RedSpotC2S() {
            net.logic.redSpotC2S();
        }
        static get redSpotS2C() {
            return net.logic.redSpotS2C;
        }
        static async AsyncRedSpotC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.redSpotS2C.off(fun);
                    resolve(e);
                };
                AntNet.redSpotS2C.on(fun);
                AntNet.RedSpotC2S();
            });
        }
        static MakeTeamC2S(aim, heroId, hero, secretLand) {
            net.logic.makeTeamC2S(aim, heroId, hero, secretLand);
        }
        static get makeTeamS2C() {
            return net.logic.makeTeamS2C;
        }
        static async AsyncMakeTeamC2S(aim, heroId, hero, secretLand) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.makeTeamS2C.off(fun);
                    resolve(e);
                };
                AntNet.makeTeamS2C.on(fun);
                AntNet.MakeTeamC2S(aim, heroId, hero, secretLand);
            });
        }
        static SetTeamAimC2S(aim) {
            net.logic.setTeamAimC2S(aim);
        }
        static get setTeamAimS2C() {
            return net.logic.setTeamAimS2C;
        }
        static async AsyncSetTeamAimC2S(aim) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.setTeamAimS2C.off(fun);
                    resolve(e);
                };
                AntNet.setTeamAimS2C.on(fun);
                AntNet.SetTeamAimC2S(aim);
            });
        }
        static JoinTeamC2S(teamId, heroId, hero, secretLand) {
            net.logic.joinTeamC2S(teamId, heroId, hero, secretLand);
        }
        static get joinTeamS2C() {
            return net.logic.joinTeamS2C;
        }
        static async AsyncJoinTeamC2S(teamId, heroId, hero, secretLand) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.joinTeamS2C.off(fun);
                    resolve(e);
                };
                AntNet.joinTeamS2C.on(fun);
                AntNet.JoinTeamC2S(teamId, heroId, hero, secretLand);
            });
        }
        static ExitTeamC2S() {
            net.logic.exitTeamC2S();
        }
        static get exitTeamS2C() {
            return net.logic.exitTeamS2C;
        }
        static async AsyncExitTeamC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.exitTeamS2C.off(fun);
                    resolve(e);
                };
                AntNet.exitTeamS2C.on(fun);
                AntNet.ExitTeamC2S();
            });
        }
        static TurnOverTeamLeaderC2S(newLeaderId) {
            net.logic.turnOverTeamLeaderC2S(newLeaderId);
        }
        static get turnOverTeamLeaderS2C() {
            return net.logic.turnOverTeamLeaderS2C;
        }
        static async AsyncTurnOverTeamLeaderC2S(newLeaderId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.turnOverTeamLeaderS2C.off(fun);
                    resolve(e);
                };
                AntNet.turnOverTeamLeaderS2C.on(fun);
                AntNet.TurnOverTeamLeaderC2S(newLeaderId);
            });
        }
        static InviteTeamC2S(gid) {
            net.logic.inviteTeamC2S(gid);
        }
        static get inviteTeamS2C() {
            return net.logic.inviteTeamS2C;
        }
        static async AsyncInviteTeamC2S(gid) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.inviteTeamS2C.off(fun);
                    resolve(e);
                };
                AntNet.inviteTeamS2C.on(fun);
                AntNet.InviteTeamC2S(gid);
            });
        }
        static RejectTeamC2S(teamId, gid, type) {
            net.logic.rejectTeamC2S(teamId, gid, type);
        }
        static get rejectTeamS2C() {
            return net.logic.rejectTeamS2C;
        }
        static async AsyncRejectTeamC2S(teamId, gid, type) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.rejectTeamS2C.off(fun);
                    resolve(e);
                };
                AntNet.rejectTeamS2C.on(fun);
                AntNet.RejectTeamC2S(teamId, gid, type);
            });
        }
        static KickTeamC2S(gid) {
            net.logic.kickTeamC2S(gid);
        }
        static get kickTeamS2C() {
            return net.logic.kickTeamS2C;
        }
        static async AsyncKickTeamC2S(gid) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.kickTeamS2C.off(fun);
                    resolve(e);
                };
                AntNet.kickTeamS2C.on(fun);
                AntNet.KickTeamC2S(gid);
            });
        }
        static SetTeamHelpC2S(isHelper) {
            net.logic.setTeamHelpC2S(isHelper);
        }
        static get setTeamHelpS2C() {
            return net.logic.setTeamHelpS2C;
        }
        static async AsyncSetTeamHelpC2S(isHelper) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.setTeamHelpS2C.off(fun);
                    resolve(e);
                };
                AntNet.setTeamHelpS2C.on(fun);
                AntNet.SetTeamHelpC2S(isHelper);
            });
        }
        static SetTeamHeroC2S(heroId, skillId, hero) {
            net.logic.setTeamHeroC2S(heroId, skillId, hero);
        }
        static get setTeamHeroS2C() {
            return net.logic.setTeamHeroS2C;
        }
        static async AsyncSetTeamHeroC2S(heroId, skillId, hero) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.setTeamHeroS2C.off(fun);
                    resolve(e);
                };
                AntNet.setTeamHeroS2C.on(fun);
                AntNet.SetTeamHeroC2S(heroId, skillId, hero);
            });
        }
        static SwitchTeamReadyC2S() {
            net.logic.switchTeamReadyC2S();
        }
        static get switchTeamReadyS2C() {
            return net.logic.switchTeamReadyS2C;
        }
        static async AsyncSwitchTeamReadyC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.switchTeamReadyS2C.off(fun);
                    resolve(e);
                };
                AntNet.switchTeamReadyS2C.on(fun);
                AntNet.SwitchTeamReadyC2S();
            });
        }
        static TeamBattleC2S() {
            net.logic.teamBattleC2S();
        }
        static get teamBattleS2C() {
            return net.logic.teamBattleS2C;
        }
        static async AsyncTeamBattleC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.teamBattleS2C.off(fun);
                    resolve(e);
                };
                AntNet.teamBattleS2C.on(fun);
                AntNet.TeamBattleC2S();
            });
        }
        static GetDanInfoC2S() {
            net.logic.getDanInfoC2S();
        }
        static get getDanInfoS2C() {
            return net.logic.getDanInfoS2C;
        }
        static async AsyncGetDanInfoC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.getDanInfoS2C.off(fun);
                    resolve(e);
                };
                AntNet.getDanInfoS2C.on(fun);
                AntNet.GetDanInfoC2S();
            });
        }
        static GetDuelRankC2S(type, seasonId, start, length) {
            net.logic.getDuelRankC2S(type, seasonId, start, length);
        }
        static get getDuelRankS2C() {
            return net.logic.getDuelRankS2C;
        }
        static async AsyncGetDuelRankC2S(type, seasonId, start, length) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.getDuelRankS2C.off(fun);
                    resolve(e);
                };
                AntNet.getDuelRankS2C.on(fun);
                AntNet.GetDuelRankC2S(type, seasonId, start, length);
            });
        }
        static SysListC2S() {
            net.logic.sysListC2S();
        }
        static get sysListS2C() {
            return net.logic.sysListS2C;
        }
        static async AsyncSysListC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.sysListS2C.off(fun);
                    resolve(e);
                };
                AntNet.sysListS2C.on(fun);
                AntNet.SysListC2S();
            });
        }
        static SysOpenShowC2S(sysid) {
            net.logic.sysOpenShowC2S(sysid);
        }
        static get sysOpenShowS2C() {
            return net.logic.sysOpenShowS2C;
        }
        static async AsyncSysOpenShowC2S(sysid) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.sysOpenShowS2C.off(fun);
                    resolve(e);
                };
                AntNet.sysOpenShowS2C.on(fun);
                AntNet.SysOpenShowC2S(sysid);
            });
        }
        static GetQuestsC2S() {
            net.logic.getQuestsC2S();
        }
        static get getQuestsS2C() {
            return net.logic.getQuestsS2C;
        }
        static async AsyncGetQuestsC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.getQuestsS2C.off(fun);
                    resolve(e);
                };
                AntNet.getQuestsS2C.on(fun);
                AntNet.GetQuestsC2S();
            });
        }
        static GetQuestRewardC2S(questId) {
            net.logic.getQuestRewardC2S(questId);
        }
        static get getQuestRewardS2C() {
            return net.logic.getQuestRewardS2C;
        }
        static async AsyncGetQuestRewardC2S(questId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.getQuestRewardS2C.off(fun);
                    resolve(e);
                };
                AntNet.getQuestRewardS2C.on(fun);
                AntNet.GetQuestRewardC2S(questId);
            });
        }
        static GetDailyQuestRewardC2S(rewardActive) {
            net.logic.getDailyQuestRewardC2S(rewardActive);
        }
        static get getDailyQuestRewardS2C() {
            return net.logic.getDailyQuestRewardS2C;
        }
        static async AsyncGetDailyQuestRewardC2S(rewardActive) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.getDailyQuestRewardS2C.off(fun);
                    resolve(e);
                };
                AntNet.getDailyQuestRewardS2C.on(fun);
                AntNet.GetDailyQuestRewardC2S(rewardActive);
            });
        }
        static GamerHeroImageChooseC2S() {
            net.logic.gamerHeroImageChooseC2S();
        }
        static get gamerHeroImageChooseS2C() {
            return net.logic.gamerHeroImageChooseS2C;
        }
        static async AsyncGamerHeroImageChooseC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerHeroImageChooseS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerHeroImageChooseS2C.on(fun);
                AntNet.GamerHeroImageChooseC2S();
            });
        }
        static GamerHeroImageChangeC2S(heroId) {
            net.logic.gamerHeroImageChangeC2S(heroId);
        }
        static get gamerHeroImageChangeS2C() {
            return net.logic.gamerHeroImageChangeS2C;
        }
        static async AsyncGamerHeroImageChangeC2S(heroId) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerHeroImageChangeS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerHeroImageChangeS2C.on(fun);
                AntNet.GamerHeroImageChangeC2S(heroId);
            });
        }
        static GamerBuyRollC2S(num) {
            net.logic.gamerBuyRollC2S(num);
        }
        static get gamerBuyRollS2C() {
            return net.logic.gamerBuyRollS2C;
        }
        static async AsyncGamerBuyRollC2S(num) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerBuyRollS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerBuyRollS2C.on(fun);
                AntNet.GamerBuyRollC2S(num);
            });
        }
        static GetGamerSecretLandC2S() {
            net.logic.getGamerSecretLandC2S();
        }
        static get getGamerSecretLandS2C() {
            return net.logic.getGamerSecretLandS2C;
        }
        static async AsyncGetGamerSecretLandC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.getGamerSecretLandS2C.off(fun);
                    resolve(e);
                };
                AntNet.getGamerSecretLandS2C.on(fun);
                AntNet.GetGamerSecretLandC2S();
            });
        }
        static GamerSecretLandBattleRewardC2S(useRoll) {
            net.logic.gamerSecretLandBattleRewardC2S(useRoll);
        }
        static get gamerSecretLandBattleRewardS2C() {
            return net.logic.gamerSecretLandBattleRewardS2C;
        }
        static async AsyncGamerSecretLandBattleRewardC2S(useRoll) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerSecretLandBattleRewardS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerSecretLandBattleRewardS2C.on(fun);
                AntNet.GamerSecretLandBattleRewardC2S(useRoll);
            });
        }
        static GamerSecretLandWeekRewardC2S() {
            net.logic.gamerSecretLandWeekRewardC2S();
        }
        static get gamerSecretLandWeekRewardS2C() {
            return net.logic.gamerSecretLandWeekRewardS2C;
        }
        static async AsyncGamerSecretLandWeekRewardC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerSecretLandWeekRewardS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerSecretLandWeekRewardS2C.on(fun);
                AntNet.GamerSecretLandWeekRewardC2S();
            });
        }
        static GamerSecretLandRankC2S(type) {
            net.logic.gamerSecretLandRankC2S(type);
        }
        static get gamerSecretLandRankS2C() {
            return net.logic.gamerSecretLandRankS2C;
        }
        static async AsyncGamerSecretLandRankC2S(type) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerSecretLandRankS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerSecretLandRankS2C.on(fun);
                AntNet.GamerSecretLandRankC2S(type);
            });
        }
        static GetGamerSecretLandInfoC2S() {
            net.logic.getGamerSecretLandInfoC2S();
        }
        static get getGamerSecretLandInfoS2C() {
            return net.logic.getGamerSecretLandInfoS2C;
        }
        static async AsyncGetGamerSecretLandInfoC2S() {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.getGamerSecretLandInfoS2C.off(fun);
                    resolve(e);
                };
                AntNet.getGamerSecretLandInfoS2C.on(fun);
                AntNet.GetGamerSecretLandInfoC2S();
            });
        }
        static GamerChangeItemIsSawC2S(type, uidList) {
            net.logic.gamerChangeItemIsSawC2S(type, uidList);
        }
        static get gamerChangeItemIsSawS2C() {
            return net.logic.gamerChangeItemIsSawS2C;
        }
        static async AsyncGamerChangeItemIsSawC2S(type, uidList) {
            return new Promise((resolve) => {
                let s2c = { error: 200 };
                let timeObj = setTimeout(() => {
                    resolve(s2c);
                }, 5000);
                let fun = function (e) {
                    clearTimeout(timeObj);
                    AntNet.gamerChangeItemIsSawS2C.off(fun);
                    resolve(e);
                };
                AntNet.gamerChangeItemIsSawS2C.on(fun);
                AntNet.GamerChangeItemIsSawC2S(type, uidList);
            });
        }
        static get gamerNotifyLoginOtherS2C() {
            return net.logic.gamerNotifyLoginOtherS2C;
        }
        static get gamerNotifyExpLevelS2C() {
            return net.logic.gamerNotifyExpLevelS2C;
        }
        static get gamerNotifyItemChangeS2C() {
            return net.logic.gamerNotifyItemChangeS2C;
        }
        static get gamerNotifyNewChatS2C() {
            return net.logic.gamerNotifyNewChatS2C;
        }
        static get gamerNotifyNewFriendReqS2C() {
            return net.logic.gamerNotifyNewFriendReqS2C;
        }
        static get gamerNotifyNewFriendS2C() {
            return net.logic.gamerNotifyNewFriendS2C;
        }
        static get gamerNotifyDelFriendS2C() {
            return net.logic.gamerNotifyDelFriendS2C;
        }
        static get gamerNotifyNoticeS2C() {
            return net.logic.gamerNotifyNoticeS2C;
        }
        static get gamerNotifyMailS2C() {
            return net.logic.gamerNotifyMailS2C;
        }
        static get gamerNotifyNewMailS2C() {
            return net.logic.gamerNotifyNewMailS2C;
        }
        static get gamerNotifyHerosChangeS2C() {
            return net.logic.gamerNotifyHerosChangeS2C;
        }
        static get gamerNotifyHeroPropUpdateS2C() {
            return net.logic.gamerNotifyHeroPropUpdateS2C;
        }
        static get gamerNotifyPVPLoadingS2C() {
            return net.logic.gamerNotifyPVPLoadingS2C;
        }
        static get gamerNotifyGamerMiniS2C() {
            return net.logic.gamerNotifyGamerMiniS2C;
        }
        static get gamerNotifyPVPSyncS2C() {
            return net.logic.gamerNotifyPVPSyncS2C;
        }
        static get gamerNotifyNewPVPResultS2C() {
            return net.logic.gamerNotifyNewPVPResultS2C;
        }
        static get gamerNotifyIconChangeS2C() {
            return net.logic.gamerNotifyIconChangeS2C;
        }
        static get gamerNotifyDiamonChangeS2C() {
            return net.logic.gamerNotifyDiamonChangeS2C;
        }
        static get gamerNotifyEnergyChangeS2C() {
            return net.logic.gamerNotifyEnergyChangeS2C;
        }
        static get gamerNotifyExpChangeS2C() {
            return net.logic.gamerNotifyExpChangeS2C;
        }
        static get gamerNotifyMatchInfoS2C() {
            return net.logic.gamerNotifyMatchInfoS2C;
        }
        static get gamerNotifyGashaponInfoS2C() {
            return net.logic.gamerNotifyGashaponInfoS2C;
        }
        static get gamerNotifyActivitiesS2C() {
            return net.logic.gamerNotifyActivitiesS2C;
        }
        static get gamerNotifyApplyJoinGuildS2C() {
            return net.logic.gamerNotifyApplyJoinGuildS2C;
        }
        static get gamerNotifyInviteJoinGuildS2C() {
            return net.logic.gamerNotifyInviteJoinGuildS2C;
        }
        static get gamerNotifyGuildMemUpdateS2C() {
            return net.logic.gamerNotifyGuildMemUpdateS2C;
        }
        static get gamerNotifyGuildChatS2C() {
            return net.logic.gamerNotifyGuildChatS2C;
        }
        static get gamerNotifyCheckPointListS2C() {
            return net.logic.gamerNotifyCheckPointListS2C;
        }
        static get gamerNotifyNewCheckPointListS2C() {
            return net.logic.gamerNotifyNewCheckPointListS2C;
        }
        static get gamerNotifyRewardS2C() {
            return net.logic.gamerNotifyRewardS2C;
        }
        static get gamerNotifyUnlockPosHeroGroupS2C() {
            return net.logic.gamerNotifyUnlockPosHeroGroupS2C;
        }
        static get gamerNotifyFatigueS2C() {
            return net.logic.gamerNotifyFatigueS2C;
        }
        static get gamerNotifyTeamS2C() {
            return net.logic.gamerNotifyTeamS2C;
        }
        static get gamerNotifyTeamInfoS2C() {
            return net.logic.gamerNotifyTeamInfoS2C;
        }
        static get gamerNotifyTeamChangeS2C() {
            return net.logic.gamerNotifyTeamChangeS2C;
        }
        static get gamerNotifyTeamMemberChangeS2C() {
            return net.logic.gamerNotifyTeamMemberChangeS2C;
        }
        static get gamerNotifyLeaveTeamS2C() {
            return net.logic.gamerNotifyLeaveTeamS2C;
        }
        static get gamerNotifyTeamReadyS2C() {
            return net.logic.gamerNotifyTeamReadyS2C;
        }
        static get gamerNotifyDanInfoS2C() {
            return net.logic.gamerNotifyDanInfoS2C;
        }
        static get gamerNotifyNewSeasonS2C() {
            return net.logic.gamerNotifyNewSeasonS2C;
        }
        static get gamerNotifyQuestsS2C() {
            return net.logic.gamerNotifyQuestsS2C;
        }
        static get gamerNotifyGamerSecretLandInfoS2C() {
            return net.logic.gamerNotifyGamerSecretLandInfoS2C;
        }
        static get gamerNotifySecretLandInfoS2C() {
            return net.logic.gamerNotifySecretLandInfoS2C;
        }
        static get gamerNotifySLTreasureBoxS2C() {
            return net.logic.gamerNotifySLTreasureBoxS2C;
        }
        static get gamerNotifyNewSecretLandResultS2C() {
            return net.logic.gamerNotifyNewSecretLandResultS2C;
        }
    }

    class RoleData {
        constructor() {
            this.id = 0;
            this.name = "TestName";
            this.vipLevel = 1;
        }
        setGamerMain(data) {
            for (var key in data) {
                this[key] = data[key];
            }
        }
        set setGamerMini(data) {
            for (var key in data) {
                this[key] = data[key];
            }
        }
    }

    class UserLevelSnapshotData {
    }
    class UserData extends RoleData {
        constructor() {
            super();
            this.maxLevel = 80;
            this.changeNameNum = 0;
            this.isLoginAndGetUserData = false;
            this.isShowLevelUp = false;
            this.levelSnapshotData = new UserLevelSnapshotData();
            this.InitTestData();
        }
        InitTestData() {
            this.exp = 0;
        }
        setGamerMain(data) {
            super.setGamerMain(data);
        }
        levelSnapshot() {
            this.levelSnapshotData.exp = this.exp;
            this.levelSnapshotData.level = this.level;
        }
    }

    class PanelMainMenuStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "PanelMainMenu"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_menuLogo = (this.getChild("menuLogo"));
            this.m_btnBar = (this.getChild("btnBar"));
        }
    }
    PanelMainMenuStruct.URL = "ui://moe42ygrsqzy7q";
    PanelMainMenuStruct.DependPackages = ["GameHome"];

    class PanelMainMenu extends PanelMainMenuStruct {
    }

    class PanelChooseHeroStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "PanelChooseHero"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_btnGroup = (this.getChild("btnGroup"));
            this.m_heroGroup = (this.getChild("heroGroup"));
            this.m_menuTopPanel = (this.getChild("menuTopPanel"));
            this.m_playBtn = (this.getChild("playBtn"));
            this.m_plusBtn = (this.getChild("plusBtn"));
            this.m_nextHeroBtn = (this.getChild("nextHeroBtn"));
            this.m_prevHeroBtn = (this.getChild("prevHeroBtn"));
            this.m_choiceHero = (this.getChild("choiceHero"));
        }
    }
    PanelChooseHeroStruct.URL = "ui://moe42ygrsqzy89";
    PanelChooseHeroStruct.DependPackages = ["GameHome"];

    class PanelChooseHero extends PanelChooseHeroStruct {
    }

    class HeroSpriteStruct extends fgui.GLabel {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "HeroSprite"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_sprite = this.getController("sprite");
            this.m_icon = (this.getChild("icon"));
            this.m_t0 = this.getTransition("t0");
        }
    }
    HeroSpriteStruct.URL = "ui://moe42ygrsqzy8m";
    HeroSpriteStruct.DependPackages = ["GameHome"];

    class HeroSprite extends HeroSpriteStruct {
    }

    class PanelShopStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "PanelShop"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_menuTopPanel = (this.getChild("menuTopPanel"));
            this.m_playBtn = (this.getChild("playBtn"));
        }
    }
    PanelShopStruct.URL = "ui://moe42ygrsqzy8y";
    PanelShopStruct.DependPackages = ["GameHome"];

    class PanelShop extends PanelShopStruct {
    }

    class PanelChooseGameFormatStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "PanelChooseGameFormat"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_formatGroup = (this.getChild("formatGroup"));
            this.m_menuTopPanel = (this.getChild("menuTopPanel"));
            this.m_format3x3 = (this.getChild("format3x3"));
            this.m_format4x4 = (this.getChild("format4x4"));
        }
    }
    PanelChooseGameFormatStruct.URL = "ui://moe42ygrsqzy8z";
    PanelChooseGameFormatStruct.DependPackages = ["GameHome"];

    class PanelChooseGameFormat extends PanelChooseGameFormatStruct {
    }

    class PanelResultStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "PanelResult"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_btnGroup = (this.getChild("btnGroup"));
            this.m_resultBg = (this.getChild("resultBg"));
            this.m_coinCurrent = (this.getChild("coinCurrent"));
            this.m_coinMax = (this.getChild("coinMax"));
            this.m_resultGroup = (this.getChild("resultGroup"));
            this.m_menuTopPanel = (this.getChild("menuTopPanel"));
            this.m_homeBtn = (this.getChild("homeBtn"));
            this.m_playBtn = (this.getChild("playBtn"));
        }
    }
    PanelResultStruct.URL = "ui://moe42ygrsqzy9d";
    PanelResultStruct.DependPackages = ["GameHome"];

    class PanelResult extends PanelResultStruct {
    }

    class MenuTopPanelWarStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "MenuTopPanelWar"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_coinText = (this.getChild("coinText"));
            this.m_countText = (this.getChild("countText"));
            this.m_levelTex = (this.getChild("levelTex"));
            this.m_coinText = (this.getChild("coinText"));
            this.m_puaseBtn = (this.getChild("puaseBtn"));
        }
    }
    MenuTopPanelWarStruct.URL = "ui://moe42ygrsqzy9e";
    MenuTopPanelWarStruct.DependPackages = ["GameHome"];

    class MenuTopPanelWar extends MenuTopPanelWarStruct {
    }

    class FxBarrelStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "FxBarrel"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
        }
    }
    FxBarrelStruct.URL = "ui://moe42ygrsqzy9g";
    FxBarrelStruct.DependPackages = ["GameHome"];

    class FxBarrel extends FxBarrelStruct {
    }

    class CardLifeHeroStruct extends fgui.GLabel {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CardLifeHero"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_title = (this.getChild("title"));
        }
    }
    CardLifeHeroStruct.URL = "ui://moe42ygrsqzy9u";
    CardLifeHeroStruct.DependPackages = ["GameHome"];

    class CardLifeHero extends CardLifeHeroStruct {
    }

    class CardLifeWarriowStruct extends fgui.GLabel {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CardLifeWarriow"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_title = (this.getChild("title"));
        }
    }
    CardLifeWarriowStruct.URL = "ui://moe42ygrsqzy9x";
    CardLifeWarriowStruct.DependPackages = ["GameHome"];

    class CardLifeWarriow extends CardLifeWarriowStruct {
    }

    class CardLifePowerUpStruct extends fgui.GLabel {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CardLifePowerUp"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_title = (this.getChild("title"));
        }
    }
    CardLifePowerUpStruct.URL = "ui://moe42ygrsqzy9z";
    CardLifePowerUpStruct.DependPackages = ["GameHome"];

    class CardLifePowerUp extends CardLifePowerUpStruct {
    }

    class CardShieldStruct extends fgui.GLabel {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CardShield"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_level = this.getController("level");
            this.m_icon = (this.getChild("icon"));
            this.m_title = (this.getChild("title"));
        }
    }
    CardShieldStruct.URL = "ui://moe42ygrsqzya0";
    CardShieldStruct.DependPackages = ["GameHome"];

    class CardShield extends CardShieldStruct {
    }

    class CardShopBarStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CardShopBar"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_shopHeart = (this.getChild("shopHeart"));
            this.m_shopHorseshoe = (this.getChild("shopHorseshoe"));
            this.m_shopLock = (this.getChild("shopLock"));
            this.m_shopKey = (this.getChild("shopKey"));
            this.m_fxHeart = (this.getChild("fxHeart"));
        }
    }
    CardShopBarStruct.URL = "ui://moe42ygrsqzya1";
    CardShopBarStruct.DependPackages = ["GameHome"];

    class CardShopBar extends CardShopBarStruct {
        useLuck() {
            this.m_shopHeart.visible = false;
            this.m_fxHeart.visible = true;
            this.m_fxHeart.frame = 1;
            this.m_fxHeart.playing = true;
            Laya.timer.once(1000, this, this.refresh);
        }
        refresh() {
        }
    }

    class CardViewBackStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CardViewBack"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_cardBack = (this.getChild("cardBack"));
        }
    }
    CardViewBackStruct.URL = "ui://moe42ygrsqzya2";
    CardViewBackStruct.DependPackages = ["GameHome"];

    class CardViewBack extends CardViewBackStruct {
    }

    class SpriteEnemyStruct extends fgui.GLabel {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "SpriteEnemy"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_sprite = this.getController("sprite");
            this.m_icon = (this.getChild("icon"));
            this.m_t0 = this.getTransition("t0");
        }
    }
    SpriteEnemyStruct.URL = "ui://moe42ygrsqzya4";
    SpriteEnemyStruct.DependPackages = ["GameHome"];

    class SpriteEnemy extends SpriteEnemyStruct {
    }

    class SpriteBossStruct extends fgui.GLabel {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "SpriteBoss"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_sprite = this.getController("sprite");
            this.m_icon = (this.getChild("icon"));
            this.m_t0 = this.getTransition("t0");
        }
    }
    SpriteBossStruct.URL = "ui://moe42ygrsqzya5";
    SpriteBossStruct.DependPackages = ["GameHome"];

    class SpriteBoss extends SpriteBossStruct {
    }

    class ContainerStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "Container"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
        }
    }
    ContainerStruct.URL = "ui://moe42ygrsqzya7";
    ContainerStruct.DependPackages = ["GameHome"];

    class Container extends ContainerStruct {
    }

    class PanelPopupChestStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "PanelPopupChest"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_bg = (this.getChild("bg"));
            this.m_lock = (this.getChild("lock"));
        }
    }
    PanelPopupChestStruct.URL = "ui://moe42ygrjak7ao";
    PanelPopupChestStruct.DependPackages = ["GameHome", "GameLaunch"];

    var ChestLockItemType;
    (function (ChestLockItemType) {
        ChestLockItemType[ChestLockItemType["LoadBig"] = 0] = "LoadBig";
        ChestLockItemType[ChestLockItemType["LoadSmall"] = 1] = "LoadSmall";
        ChestLockItemType[ChestLockItemType["FixedBig"] = 2] = "FixedBig";
        ChestLockItemType[ChestLockItemType["FiexedSmall"] = 3] = "FiexedSmall";
    })(ChestLockItemType || (ChestLockItemType = {}));
    class ChestLockData {
        constructor() {
            this.configs = [
                { type: ChestLockItemType.LoadBig, angle: 40, count: 1 },
                { type: ChestLockItemType.LoadSmall, angle: 20, count: 3 },
                { type: ChestLockItemType.FixedBig, angle: 50, count: 2 },
                { type: ChestLockItemType.FiexedSmall, angle: 24, count: 4 }
            ];
            this.beginAngle = -60;
            this.endAngle = 360 - 60 * 2;
            this.items = [];
            this.loadItems = [];
            this.clickMaxCount = 10;
            this.leftClickCount = 10;
            this.isEnd = false;
            this.initItems = [];
            var item;
            var id = 2;
            var angle = -70 + 25;
            for (var config of this.configs) {
                for (var i = 0; i < config.count; i++) {
                    item = { id: id, index: id, groundIndex: i, config: config, angle: angle, isOpen: false };
                    angle += config.angle;
                    this.initItems.push(item);
                    id++;
                }
            }
        }
        init() {
            this.isEnd = false;
            this.leftClickCount = this.clickMaxCount;
            this.items.length = 0;
            this.loadItems.length = 0;
            this.initItems = RandomHelper.shuffle(this.initItems);
            var angle = this.beginAngle;
            for (var i = 0, len = this.initItems.length; i < len; i++) {
                var item = this.initItems[i];
                angle += item.config.angle * 0.5;
                item.angle = this.angle360(angle);
                item.isOpen = false;
                angle += item.config.angle * 0.5;
                this.items.push(item);
                switch (item.config.type) {
                    case ChestLockItemType.LoadBig:
                    case ChestLockItemType.LoadSmall:
                        this.loadItems.push(item);
                        break;
                }
            }
        }
        getItemByAngle(angle) {
            angle = this.angle360(angle);
            for (var itemData of this.items) {
                var min = itemData.angle - itemData.config.angle * 0.5;
                var max = itemData.angle + itemData.config.angle * 0.5;
                min = this.angle360(min);
                max = this.angle360(max);
                console.log("angle=", angle, "min=", min, "max=", max);
                if (angle >= min && angle <= max) {
                    return itemData;
                }
            }
        }
        isOpendAll() {
            for (var itemData of this.loadItems) {
                if (!itemData.isOpen) {
                    return false;
                }
            }
            return true;
        }
        angle360(angle) {
            if (angle == 360) {
                return angle;
            }
            angle = angle % 360;
            if (angle < 0) {
                angle += 360;
            }
            return angle;
        }
        static Angle360(angle) {
            if (angle == 360) {
                return angle;
            }
            angle = angle % 360;
            if (angle < 0) {
                angle += 360;
            }
            return angle;
        }
        static AngleSub360(angleA, angleB) {
            angleA = this.Angle360(angleA);
            angleB = this.Angle360(angleB);
            return Math.abs(angleA - angleB);
        }
    }

    class PanelPopupChest extends PanelPopupChestStruct {
        constructor() {
            super(...arguments);
            this.lockData = new ChestLockData();
            this.sResult = new TypedSignal();
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            window['panelPopupChest'] = this;
        }
        Open() {
            this.lockData.init();
            this.m_lock.Init(this);
            this.visible = true;
            this.alpha = 0;
            Laya.Tween.to(this, { alpha: 1 }, 200);
        }
        Close() {
            Laya.Tween.to(this, { alpha: 0 }, 200, null, Laya.Handler.create(this, () => {
                this.visible = false;
            }));
        }
    }

    class CPLockLampStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CPLockLamp"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_state = this.getController("state");
            this.m_bg = (this.getChild("bg"));
            this.m_lighting = (this.getChild("lighting"));
        }
    }
    CPLockLampStruct.URL = "ui://moe42ygrjak7ar";
    CPLockLampStruct.DependPackages = ["GameHome"];

    class CPLockLamp extends CPLockLampStruct {
    }

    class CPLockBridgeStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CPLockBridge"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_state = this.getController("state");
        }
    }
    CPLockBridgeStruct.URL = "ui://moe42ygrjak7as";
    CPLockBridgeStruct.DependPackages = ["GameHome"];

    class CPLockBridge extends CPLockBridgeStruct {
    }

    class CPLockSwitchStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CPLockSwitch"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_button = this.getController("button");
            this.m_arrow = (this.getChild("arrow"));
        }
    }
    CPLockSwitchStruct.URL = "ui://moe42ygrjak7at";
    CPLockSwitchStruct.DependPackages = ["GameHome"];

    class CPLockSwitch extends CPLockSwitchStruct {
        constructor() {
            super(...arguments);
            this.speed = 0.05;
            this.elasticList = [Laya.Ease.linearInOut];
            this.isRuning = false;
        }
        Init(lockData) {
            this.lockData = lockData;
            this.m_arrow.rotation = lockData.beginAngle;
        }
        Run() {
            if (this.isRuning) {
                return;
            }
            this.isRuning = true;
            Laya.Tween.clearAll(this.m_arrow);
            this.ArrowTweenToMax();
        }
        Stop() {
            console.log("Stop");
            this.isRuning = false;
            Laya.Tween.clearAll(this.m_arrow);
        }
        ArrowTweenToMax() {
            console.log("ArrowTweenToMax", this.lockData.endAngle);
            Laya.Tween.clearAll(this.m_arrow);
            var duration = this.getDuration(this.lockData.endAngle);
            console.log(ChestLockData.AngleSub360(this.m_arrow.rotation, this.lockData.endAngle), duration);
            var tween = Laya.Tween.to(this.m_arrow, { rotation: this.lockData.endAngle }, duration, Laya.Ease.linearInOut, Laya.Handler.create(this, this.ArrowTweenToMin), 0, true, true);
        }
        ArrowTweenToMin() {
            console.log("ArrowTweenToMin", this.lockData.beginAngle);
            Laya.Tween.clearAll(this.m_arrow);
            var duration = this.getDuration(this.lockData.beginAngle);
            console.log(ChestLockData.AngleSub360(this.m_arrow.rotation, this.lockData.beginAngle), duration);
            var tween = Laya.Tween.to(this.m_arrow, { rotation: this.lockData.beginAngle }, duration, Laya.Ease.linearInOut, Laya.Handler.create(this, this.ArrowTweenToMax), 0, true, true);
        }
        getDuration(endAngle) {
            var duration = Math.ceil(ChestLockData.AngleSub360(this.m_arrow.rotation, endAngle) / this.speed);
            if (!duration) {
                duration = 200;
            }
            else if (duration > 3000) {
                duration = 3000;
            }
            return duration;
        }
    }

    class CPLockArrowStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CPLockArrow"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_clickSuccess = this.getTransition("clickSuccess");
            this.m_clickFail = this.getTransition("clickFail");
        }
    }
    CPLockArrowStruct.URL = "ui://moe42ygrjak7au";
    CPLockArrowStruct.DependPackages = ["GameHome"];

    class CPLockArrow extends CPLockArrowStruct {
    }

    class CPLockLampGroupStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CPLockLampGroup"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_lamp_1 = (this.getChild("lamp_1"));
            this.m_lamp_2 = (this.getChild("lamp_2"));
            this.m_lamp_3 = (this.getChild("lamp_3"));
            this.m_lamp_4 = (this.getChild("lamp_4"));
        }
    }
    CPLockLampGroupStruct.URL = "ui://moe42ygrjak7av";
    CPLockLampGroupStruct.DependPackages = ["GameHome"];

    class CPLockLampGroup extends CPLockLampGroupStruct {
        Init(lockData) {
            this.lockData = lockData;
            var itemDataList = lockData.loadItems;
            for (var i = 0, len = itemDataList.length; i < len; i++) {
                var itemData = itemDataList[i];
                var itemView = this[`m_lamp_${(i + 1)}`];
                itemData.itemViewLighting = itemView;
                if (itemView) {
                    itemView.m_state.setSelectedIndex(itemData.isOpen ? 1 : 0);
                }
            }
        }
        setItemState(itemData) {
            if (itemData.itemViewLighting) {
                itemData.itemViewLighting.m_state.setSelectedIndex(itemData.isOpen ? 1 : 0);
            }
        }
    }

    class CPLockDialLoadBigStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CPLockDialLoadBig"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_state = this.getController("state");
        }
    }
    CPLockDialLoadBigStruct.URL = "ui://moe42ygrjak7aw";
    CPLockDialLoadBigStruct.DependPackages = ["GameHome"];

    class CPLockDialLoadBig extends CPLockDialLoadBigStruct {
    }

    class CPLockDialLoadSmallStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CPLockDialLoadSmall"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_state = this.getController("state");
        }
    }
    CPLockDialLoadSmallStruct.URL = "ui://moe42ygrjak7ax";
    CPLockDialLoadSmallStruct.DependPackages = ["GameHome"];

    class CPLockDialLoadSmall extends CPLockDialLoadSmallStruct {
    }

    class CPLockDialFixedSmallStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CPLockDialFixedSmall"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
        }
    }
    CPLockDialFixedSmallStruct.URL = "ui://moe42ygrjak7ay";
    CPLockDialFixedSmallStruct.DependPackages = ["GameHome"];

    class CPLockDialFixedSmall extends CPLockDialFixedSmallStruct {
    }

    class CPLockDialFixedBigStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CPLockDialFixedBig"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
        }
    }
    CPLockDialFixedBigStruct.URL = "ui://moe42ygrjak7az";
    CPLockDialFixedBigStruct.DependPackages = ["GameHome"];

    class CPLockDialFixedBig extends CPLockDialFixedBigStruct {
    }

    class CPLockDialStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CPLockDial"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_fixedBig0 = (this.getChild("fixedBig0"));
            this.m_fixedBig1 = (this.getChild("fixedBig1"));
            this.m_fixedSmall0 = (this.getChild("fixedSmall0"));
            this.m_fixedSmall1 = (this.getChild("fixedSmall1"));
            this.m_fixedSmall2 = (this.getChild("fixedSmall2"));
            this.m_fixedSmall3 = (this.getChild("fixedSmall3"));
            this.m_loadBig0 = (this.getChild("loadBig0"));
            this.m_loadSmall0 = (this.getChild("loadSmall0"));
            this.m_loadSmall1 = (this.getChild("loadSmall1"));
            this.m_loadSmall2 = (this.getChild("loadSmall2"));
        }
    }
    CPLockDialStruct.URL = "ui://moe42ygrjak7b0";
    CPLockDialStruct.DependPackages = ["GameHome"];

    class CPLockDial extends CPLockDialStruct {
        Init(lockData) {
            this.lockData = lockData;
            var itemDataList = lockData.items;
            for (var itemData of itemDataList) {
                var itemView = this.getItemView(itemData);
                if (itemView) {
                    itemView.rotation = itemData.angle;
                    itemView['itemData'] = itemData;
                    itemData.itemView = itemView;
                    switch (itemData.config.type) {
                        case ChestLockItemType.LoadBig:
                        case ChestLockItemType.LoadSmall:
                            itemView.m_state.setSelectedIndex(itemData.isOpen ? 1 : 0);
                            break;
                    }
                }
                else {
                    console.error("CPLockDial Init itemView = null", itemData);
                }
            }
        }
        getItemView(itemData) {
            switch (itemData.config.type) {
                case ChestLockItemType.LoadBig:
                    return this[`m_loadBig${itemData.groundIndex}`];
                case ChestLockItemType.LoadSmall:
                    return this[`m_loadSmall${itemData.groundIndex}`];
                case ChestLockItemType.FixedBig:
                    return this[`m_fixedBig${itemData.groundIndex}`];
                case ChestLockItemType.FiexedSmall:
                    return this[`m_fixedSmall${itemData.groundIndex}`];
            }
        }
        setItemState(itemData) {
            if (itemData.itemView) {
                switch (itemData.config.type) {
                    case ChestLockItemType.LoadBig:
                    case ChestLockItemType.LoadSmall:
                        itemData.itemView.m_state.setSelectedIndex(itemData.isOpen ? 1 : 0);
                        break;
                }
            }
        }
    }

    class CPLockStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameHome", "CPLock"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_bg = (this.getChild("bg"));
            this.m_dial = (this.getChild("dial"));
            this.m_switch = (this.getChild("switch"));
            this.m_bridge = (this.getChild("bridge"));
            this.m_lampGroup = (this.getChild("lampGroup"));
        }
    }
    CPLockStruct.URL = "ui://moe42ygrjak7b1";
    CPLockStruct.DependPackages = ["GameHome"];

    class CPLock extends CPLockStruct {
        Init(panel) {
            this.panel = panel;
            var lockData = this.lockData = panel.lockData;
            this.m_dial.Init(lockData);
            this.m_switch.Init(lockData);
            this.m_lampGroup.Init(lockData);
            this.m_bridge.m_state.setSelectedIndex(0);
            this.Run();
        }
        Run() {
            this.panel.on(Laya.Event.MOUSE_DOWN, this, this.onClickHandler);
            this.m_switch.Run();
        }
        onClickHandler() {
            this.panel.off(Laya.Event.MOUSE_DOWN, this, this.onClickHandler);
            this.m_switch.Stop();
            var angle = this.m_switch.m_arrow.rotation;
            var itemData = this.lockData.getItemByAngle(angle);
            console.log(angle, itemData);
            if (itemData) {
                if (!itemData.isOpen && !this.lockData.isEnd) {
                    switch (itemData.config.type) {
                        case ChestLockItemType.LoadBig:
                        case ChestLockItemType.LoadSmall:
                            itemData.isOpen = true;
                            this.m_dial.setItemState(itemData);
                            this.m_lampGroup.setItemState(itemData);
                            this.m_switch.m_arrow.m_clickSuccess.play();
                            break;
                        default:
                            this.lockData.leftClickCount--;
                            this.m_switch.m_arrow.m_clickFail.play();
                            break;
                    }
                }
                else {
                    this.lockData.leftClickCount--;
                    this.m_switch.m_arrow.m_clickFail.play();
                }
            }
            else {
                this.lockData.leftClickCount--;
                this.m_switch.m_arrow.m_clickSuccess.play();
            }
            SoundController.instance.playSound(SoundConsts.PickLockNeutral);
            if (!this.lockData.isEnd) {
                var isOpenAll = this.lockData.isOpendAll();
                if (isOpenAll) {
                    this.lockData.isEnd = true;
                    this.OnSuccess();
                }
                else {
                    if (this.lockData.leftClickCount <= 0) {
                        this.lockData.isEnd = true;
                        this.OnFail();
                    }
                }
            }
            Laya.timer.once(500, this, this.Run);
        }
        OnSuccess() {
            this.m_bridge.m_state.setSelectedIndex(1);
            SoundController.instance.playSound(SoundConsts.PickLockSuccess);
            Laya.timer.once(500, this, this.SetResult, [true]);
        }
        OnFail() {
            SoundController.instance.playSound(SoundConsts.PickLockFail);
            for (var i = 0; i < 4; i++) {
                var fx = FxShootBoom.PoolGet();
                fx.setXY(RandomHelper.getRandomIntInclusive(-120, 120), RandomHelper.getRandomIntInclusive(-280, 120));
                fx.DelayPalay(RandomHelper.getRandomIntInclusive(0, 200), this);
            }
            Laya.timer.once(500, this, this.SetResult, [true]);
        }
        SetResult(isSuccess = true) {
            this.panel.sResult.dispatch(isSuccess);
            this.panel.Close();
        }
        OnClose() {
            Laya.timer.clearAll(this);
            this.m_switch.Stop();
        }
    }

    class GameHomeBinder {
        static bindAll() {
            let bind = fgui.UIObjectFactory.setPackageItemExtension;
            bind(PanelMainMenu.URL, PanelMainMenu);
            bind(PanelChooseHero.URL, PanelChooseHero);
            bind(WindowHomeUI.URL, WindowHomeUI);
            bind(HeroSprite.URL, HeroSprite);
            bind(PanelShop.URL, PanelShop);
            bind(PanelChooseGameFormat.URL, PanelChooseGameFormat);
            bind(WindowWarUI.URL, WindowWarUI);
            bind(PanelResult.URL, PanelResult);
            bind(MenuTopPanelWar.URL, MenuTopPanelWar);
            bind(FxBarrel.URL, FxBarrel);
            bind(CardView.URL, CardView);
            bind(CardLifeHero.URL, CardLifeHero);
            bind(CardViewFrontHero.URL, CardViewFrontHero);
            bind(CardViewFrontWarriow.URL, CardViewFrontWarriow);
            bind(CardLifeWarriow.URL, CardLifeWarriow);
            bind(CardViewFrontPowerUpCannon.URL, CardViewFrontPowerUpCannon);
            bind(CardLifePowerUp.URL, CardLifePowerUp);
            bind(CardShield.URL, CardShield);
            bind(CardShopBar.URL, CardShopBar);
            bind(CardViewBack.URL, CardViewBack);
            bind(CardViewFrontWarriowEnemy.URL, CardViewFrontWarriowEnemy);
            bind(SpriteEnemy.URL, SpriteEnemy);
            bind(SpriteBoss.URL, SpriteBoss);
            bind(CardViewFrontWarriowBoss.URL, CardViewFrontWarriowBoss);
            bind(Container.URL, Container);
            bind(CardViewFrontBg.URL, CardViewFrontBg);
            bind(CardViewFrontWarriowTrap.URL, CardViewFrontWarriowTrap);
            bind(CardViewFrontPowerUp.URL, CardViewFrontPowerUp);
            bind(CardViewFrontPowerUpBarrel.URL, CardViewFrontPowerUpBarrel);
            bind(CardViewFrontPowerUpChest.URL, CardViewFrontPowerUpChest);
            bind(CardViewFrontPowerUpBomb.URL, CardViewFrontPowerUpBomb);
            bind(CardViewFrontPowerUpSkull.URL, CardViewFrontPowerUpSkull);
            bind(FxShootCannon.URL, FxShootCannon);
            bind(FxShootSmoke.URL, FxShootSmoke);
            bind(FxShootBoom.URL, FxShootBoom);
            bind(FxShootLightningBig.URL, FxShootLightningBig);
            bind(FxShootLightningSmall.URL, FxShootLightningSmall);
            bind(FxSkull.URL, FxSkull);
            bind(PanelPopupChest.URL, PanelPopupChest);
            bind(CPLockLamp.URL, CPLockLamp);
            bind(CPLockBridge.URL, CPLockBridge);
            bind(CPLockSwitch.URL, CPLockSwitch);
            bind(CPLockArrow.URL, CPLockArrow);
            bind(CPLockLampGroup.URL, CPLockLampGroup);
            bind(CPLockDialLoadBig.URL, CPLockDialLoadBig);
            bind(CPLockDialLoadSmall.URL, CPLockDialLoadSmall);
            bind(CPLockDialFixedSmall.URL, CPLockDialFixedSmall);
            bind(CPLockDialFixedBig.URL, CPLockDialFixedBig);
            bind(CPLockDial.URL, CPLockDial);
            bind(CPLock.URL, CPLock);
        }
    }

    class ScreenBGStruct extends fgui.GLabel {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameLaunch", "ScreenBG"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_icon = (this.getChild("icon"));
        }
    }
    ScreenBGStruct.URL = "ui://47qsdr42f84s1";
    ScreenBGStruct.DependPackages = ["GameLaunch"];

    class ScreenBG extends ScreenBGStruct {
        onWindowShow() {
            this.setScreenSize();
            window["screenBG"] = this;
            Engine.stage.sResize.add(this.setScreenSize, this);
        }
        onWindowHide() {
            Engine.stage.sResize.remove(this.setScreenSize, this);
        }
        setScreenSize() {
        }
    }

    class DialogCloseWindowStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameLaunch", "DialogCloseWindow"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_closeButton = (this.getChild("closeButton"));
        }
    }
    DialogCloseWindowStruct.URL = "ui://47qsdr42f84sg";
    DialogCloseWindowStruct.DependPackages = ["GameLaunch"];

    class DialogCloseWindow extends DialogCloseWindowStruct {
    }

    class GMButtonStruct extends fgui.GButton {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameLaunch", "GMButton"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
        }
    }
    GMButtonStruct.URL = "ui://47qsdr42uohx13";
    GMButtonStruct.DependPackages = ["GameLaunch"];

    class GMButton extends GMButtonStruct {
    }

    class BGModelStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameLaunch", "BGModel"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
        }
    }
    BGModelStruct.URL = "ui://47qsdr42ae8aw2h";
    BGModelStruct.DependPackages = ["GameLaunch"];

    class BGModel extends BGModelStruct {
    }

    class GlobalModalWaitingStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameLaunch", "GlobalModalWaiting"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_circle = (this.getChild("circle"));
            this.m_rotation = this.getTransition("rotation");
        }
    }
    GlobalModalWaitingStruct.URL = "ui://47qsdr42x6asw2i";
    GlobalModalWaitingStruct.DependPackages = ["GameLaunch"];

    class GlobalModalWaiting extends GlobalModalWaitingStruct {
    }

    class WindowModalWaitingStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameLaunch", "WindowModalWaiting"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_circle = (this.getChild("circle"));
            this.m_rotation = this.getTransition("rotation");
        }
    }
    WindowModalWaitingStruct.URL = "ui://47qsdr42x6asw2j";
    WindowModalWaitingStruct.DependPackages = ["GameLaunch"];

    class WindowModalWaiting extends WindowModalWaitingStruct {
    }

    class LogoViewStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("GameLaunch", "LogoView"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_t0 = this.getTransition("t0");
        }
    }
    LogoViewStruct.URL = "ui://47qsdr42tnlhw2t";
    LogoViewStruct.DependPackages = ["GameLaunch"];

    class LogoView extends LogoViewStruct {
    }

    class GameLaunchBinder {
        static bindAll() {
            let bind = fgui.UIObjectFactory.setPackageItemExtension;
            bind(EnterModuleLoader.URL, EnterModuleLoader);
            bind(ScreenBG.URL, ScreenBG);
            bind(DialogCloseWindow.URL, DialogCloseWindow);
            bind(SystemAlertMessage.URL, SystemAlertMessage);
            bind(SystemConfirmMessage.URL, SystemConfirmMessage);
            bind(SystemToastMessage.URL, SystemToastMessage);
            bind(GMButton.URL, GMButton);
            bind(BGModel.URL, BGModel);
            bind(GlobalModalWaiting.URL, GlobalModalWaiting);
            bind(WindowModalWaiting.URL, WindowModalWaiting);
            bind(EnterLoginLoader.URL, EnterLoginLoader);
            bind(LogoView.URL, LogoView);
        }
    }

    class LoginPanelStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("ModuleLogin", "LoginPanel"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_type = this.getController("type");
            this.m_accountInput = (this.getChild("accountInput"));
            this.m_passwordInput = (this.getChild("passwordInput"));
            this.m_btn_login = (this.getChild("btn_login"));
            this.m_btn_offLine = (this.getChild("btn_offLine"));
            this.m_btn_randomLogin = (this.getChild("btn_randomLogin"));
            this.m_btn_testWar = (this.getChild("btn_testWar"));
        }
    }
    LoginPanelStruct.URL = "ui://4698ugpknz0c1g";
    LoginPanelStruct.DependPackages = ["ModuleLogin"];

    class LoginPanel extends LoginPanelStruct {
        onWindowInited() {
            console.log('LoginPanel onWindowInited');
            this.m_type.selectedIndex = 1;
            this.m_btn_randomLogin.visible = VersionConfig.IsDebugVer;
            this.m_btn_testWar.visible = VersionConfig.IsDebugVer;
            window['userAccount'] = this.m_accountInput.m_txt_account;
            window['userPassWorld'] = this.m_passwordInput.m_txt_password;
            window['loginPanel'] = this;
        }
        createDebugButton(text, fun, x, y) {
            var button = fgui.UIPackage.createObjectFromURL(this.m_btn_login.resourceURL);
            button.text = text;
            button.width = 150;
            button.height = 80;
            button.x = 200 + x * 200;
            button.y = 100 + y * 100;
            button.onClick(this, fun);
            fgui.GRoot.inst.addChild(button);
        }
        get account() {
            return this.m_accountInput.m_txt_account.text.trim();
        }
        set account(value) {
            this.m_accountInput.m_txt_account.text = value;
        }
        get password() {
            return this.m_passwordInput.m_txt_password.text.trim();
        }
        set password(value) {
            this.m_passwordInput.m_txt_password.text = value;
        }
        onWindowShow() {
            console.log('LoginPanel onWindowShow');
            if (isNullOrEmpty(this.account)) {
                this.account = Game.localStorage.username;
                if (Engine.borwer.isBrowser && VersionConfig.IsDebugVer) {
                    let username = sessionStorage.getItem('username');
                    this.account = username ? username : "";
                }
            }
            if (isNullOrEmpty(this.account)) {
                this.account = AntFrame.RandName(2, 7);
            }
            if (isNullOrEmpty(this.password)) {
                this.password = Game.localStorage.password;
                if (Engine.borwer.isBrowser && VersionConfig.IsDebugVer) {
                    let password = sessionStorage.getItem('password');
                    this.password = password ? password : "";
                }
            }
            if (Engine.borwer.isWXGame) ;
        }
        async getAuth() {
            if (AntFrame.platform instanceof AntPlatformWX) {
                let antWx = AntFrame.platform;
                let result = await antWx.WXGetSdkAuthSetting();
                if (!result) {
                    this.setModel(true);
                    let userInfo = await antWx.WXAuth();
                    if (userInfo) {
                        this.setModel(false);
                    }
                }
                else {
                    this.setModel(false);
                }
            }
        }
        setModel(isAuth) {
            this.m_btn_login.title = isAuth ? TEXT.Auth : TEXT.Login;
        }
    }

    class AccountInputStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("ModuleLogin", "AccountInput"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_txt_account = (this.getChild("txt_account"));
            this.m_accountComboBox = (this.getChild("accountComboBox"));
        }
    }
    AccountInputStruct.URL = "ui://4698ugpknz0c1h";
    AccountInputStruct.DependPackages = ["ModuleLogin"];

    class AccountInput extends AccountInputStruct {
    }

    class AccountComboBoxStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("ModuleLogin", "AccountComboBox"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_c1 = this.getController("c1");
        }
    }
    AccountComboBoxStruct.URL = "ui://4698ugpknz0c1i";
    AccountComboBoxStruct.DependPackages = ["ModuleLogin"];

    class AccountComboBox extends AccountComboBoxStruct {
    }

    class PasswordInputStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("ModuleLogin", "passwordInput"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_txt_password = (this.getChild("txt_password"));
        }
    }
    PasswordInputStruct.URL = "ui://4698ugpknz0c1n";
    PasswordInputStruct.DependPackages = ["ModuleLogin"];

    class PasswordInput extends PasswordInputStruct {
    }

    class BulletinPanelStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("ModuleLogin", "BulletinPanel"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_Type = this.getController("Type");
            this.m_listTest = (this.getChild("listTest"));
            this.m_listUpdate = (this.getChild("listUpdate"));
            this.m_bg = (this.getChild("bg"));
        }
    }
    BulletinPanelStruct.URL = "ui://4698ugpkrlfx2m";
    BulletinPanelStruct.DependPackages = ["ModuleLogin"];

    class BulletinPanel extends BulletinPanelStruct {
    }

    class WxPanelStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("ModuleLogin", "WxPanel"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_btn_login = (this.getChild("btn_login"));
        }
    }
    WxPanelStruct.URL = "ui://4698ugpkneo62p";
    WxPanelStruct.DependPackages = ["ModuleLogin"];

    class WxPanel extends WxPanelStruct {
    }

    class AccountShowStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("ModuleLogin", "AccountShow"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_txt_account = (this.getChild("txt_account"));
        }
    }
    AccountShowStruct.URL = "ui://4698ugpkneo62q";
    AccountShowStruct.DependPackages = ["ModuleLogin"];

    class AccountShow extends AccountShowStruct {
    }

    class ServerPanelStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("ModuleLogin", "ServerPanel"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_Server = this.getController("Server");
            this.m_listMenu = (this.getChild("listMenu"));
            this.m_listServer = (this.getChild("listServer"));
            this.m_btnChange = (this.getChild("btnChange"));
            this.m_btnStart = (this.getChild("btnStart"));
            this.m_bg = (this.getChild("bg"));
        }
    }
    ServerPanelStruct.URL = "ui://4698ugpklm612r";
    ServerPanelStruct.DependPackages = ["ModuleLogin"];

    class ServerPanel extends ServerPanelStruct {
        constructor() {
            super(...arguments);
            this.serverList = [];
            this.openServer = [];
            this.roles = new Dictionary();
        }
        onWindowInited() {
        }
        onWindowShow() {
            this.m_listMenu.setItemRenderer(this.MenuRender, this);
            this.m_listMenu.on(fgui.Events.CLICK_ITEM, this, this.MenuSelect);
            this.m_listServer.setItemRenderer(this.ServerRender, this);
            this.m_listServer.on(fgui.Events.CLICK_ITEM, this, this.ServerSelect);
        }
        onWindowHide() {
            this.m_listMenu.itemRenderer.clear();
            this.m_listMenu.off(fgui.Events.CLICK_ITEM, this, this.MenuSelect);
            this.m_listServer.itemRenderer.clear();
            this.m_listServer.off(fgui.Events.CLICK_ITEM, this, this.ServerSelect);
            this.Reset();
        }
        MenuRender(index, item) {
        }
        MenuSelect(item) {
        }
        ServerRender(index, item) {
            item.RenderItem(this.serverList[index]);
        }
        ServerSelect(item) {
            let lastserver = item.DataSource;
            this.lastServer = lastserver;
            this.m_btnChange.RenderItem(lastserver);
            this.m_Server.selectedIndex = 0;
        }
        Reset() {
            this.serverList = [];
            this.openServer = [];
            this.roles.clear();
        }
        UpdateServer() {
            let serverlist = this.serverList;
            this.m_listServer.numItems = serverlist.length;
            this.m_listMenu.selectedIndex = 0;
            let openserver = this.openServer;
            if (!serverlist.length) {
                return;
            }
            let serverid = Game.localStorage.server;
            let lastserver;
            if (!serverid) {
                lastserver = openserver.length ? openserver[openserver.length - 1] : serverlist[serverlist.length - 1];
            }
            else {
                lastserver = this.GetServer(serverid, true);
            }
            if (lastserver) {
                this.lastServer = lastserver;
                this.m_btnChange.RenderItem(lastserver);
            }
        }
        Open(serverlist) {
            this.serverList = serverlist;
            if (this.roles.count) {
                for (let i = 0, len = serverlist.length; i < len; i++) {
                    let server = serverlist[i];
                    if (this.roles.hasKey(server.id))
                        this.openServer.push(server);
                }
            }
            this.UpdateServer();
        }
        SetRoles(roles) {
            if (!roles || !roles.length) {
                return;
            }
            for (let i = 0, len = roles.length; i < len; i++) {
                let role = roles[i];
                this.roles.add(role.server, role);
            }
        }
        GetRole(server) {
            return this.roles.getValue(server);
        }
        GetServer(server, isopen) {
            let serverlist = isopen ? this.openServer : this.serverList;
            for (let i = 0, len = serverlist.length; i < len; i++) {
                if (serverlist[i].id = server)
                    return serverlist[i];
            }
            return this.GetServer(server);
        }
    }

    class ServerItemStruct extends fgui.GButton {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("ModuleLogin", "ServerItem"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_button = this.getController("button");
            this.m_State = this.getController("State");
            this.m_Type = this.getController("Type");
            this.m_View = this.getController("View");
            this.m_labServer = (this.getChild("labServer"));
            this.m_labLevel = (this.getChild("labLevel"));
        }
    }
    ServerItemStruct.URL = "ui://4698ugpklm612v";
    ServerItemStruct.DependPackages = ["ModuleLogin"];

    class ServerItem extends ServerItemStruct {
        RenderItem(data) {
            this.DataSource = data;
            this.m_labServer.text = data.name;
            this.m_labLevel.text = "";
        }
    }

    class CdkPanelStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("ModuleLogin", "CdkPanel"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_cdkInput = (this.getChild("cdkInput"));
            this.m_btn_cdk = (this.getChild("btn_cdk"));
        }
    }
    CdkPanelStruct.URL = "ui://4698ugpkipa82w";
    CdkPanelStruct.DependPackages = ["ModuleLogin"];

    class CdkPanel extends CdkPanelStruct {
        get cdk() {
            return this.m_cdkInput.m_txt_cdk.text.trim();
        }
        set cdk(value) {
            this.m_cdkInput.m_txt_cdk.text = value;
        }
    }

    class CdkInputStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("ModuleLogin", "CdkInput"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_txt_cdk = (this.getChild("txt_cdk"));
            this.m_accountComboBox = (this.getChild("accountComboBox"));
        }
    }
    CdkInputStruct.URL = "ui://4698ugpkipa82x";
    CdkInputStruct.DependPackages = ["ModuleLogin"];

    class CdkInput extends CdkInputStruct {
    }

    class CheckIDPanelStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("ModuleLogin", "CheckIDPanel"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_Type = this.getController("Type");
            this.m_labName = (this.getChild("labName"));
            this.m_labID = (this.getChild("labID"));
            this.m_btnClose = (this.getChild("btnClose"));
            this.m_btnMake = (this.getChild("btnMake"));
        }
    }
    CheckIDPanelStruct.URL = "ui://4698ugpkqdfe1c";
    CheckIDPanelStruct.DependPackages = ["ModuleLogin"];

    class CheckIDPanel extends CheckIDPanelStruct {
    }

    class CommonDialogBgStruct extends fgui.GButton {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("ModuleLogin", "CommonDialogBg"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_icon = (this.getChild("icon"));
            this.m_btn_Close = (this.getChild("btn_Close"));
        }
    }
    CommonDialogBgStruct.URL = "ui://4698ugpkje283k";
    CommonDialogBgStruct.DependPackages = ["ModuleLogin"];

    class CommonDialogBg extends CommonDialogBgStruct {
    }

    class BulletinItemStruct extends fgui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fgui.UIPackage.createObject("ModuleLogin", "BulletinItem"));
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.m_labtitle = (this.getChild("labtitle"));
            this.m_labItem = (this.getChild("labItem"));
        }
    }
    BulletinItemStruct.URL = "ui://4698ugpkje283x";
    BulletinItemStruct.DependPackages = ["ModuleLogin"];

    class BulletinItem extends BulletinItemStruct {
    }

    class ModuleLoginBinder {
        static bindAll() {
            let bind = fgui.UIObjectFactory.setPackageItemExtension;
            bind(LoginWindowUI.URL, LoginWindowUI);
            bind(LoginPanel.URL, LoginPanel);
            bind(AccountInput.URL, AccountInput);
            bind(AccountComboBox.URL, AccountComboBox);
            bind(PasswordInput.URL, PasswordInput);
            bind(BulletinPanel.URL, BulletinPanel);
            bind(WxPanel.URL, WxPanel);
            bind(AccountShow.URL, AccountShow);
            bind(ServerPanel.URL, ServerPanel);
            bind(ServerItem.URL, ServerItem);
            bind(CdkPanel.URL, CdkPanel);
            bind(CdkInput.URL, CdkInput);
            bind(CheckIDPanel.URL, CheckIDPanel);
            bind(CommonDialogBg.URL, CommonDialogBg);
            bind(BulletinItem.URL, BulletinItem);
        }
    }

    class SoundBinder {
        static bindAll() {
            let bind = fgui.UIObjectFactory.setPackageItemExtension;
        }
    }

    class GuiBinderList {
        static fguiBinderAll() {
            GameHomeBinder.bindAll();
            GameLaunchBinder.bindAll();
            ModuleLoginBinder.bindAll();
            SoundBinder.bindAll();
        }
    }

    class AntFrameConfig {
        static get json() {
            return this._netConfig;
        }
        static async GetNetConfig() {
            if (AntFrameConfig._netConfig && AntFrameConfig._netConfig.error == 0) {
                return new Promise(resolve => {
                    resolve(AntFrameConfig._netConfig);
                });
            }
            return new Promise(resolve => {
                net.auth.config((ok, j) => {
                    AntFrameConfig._netConfig = j;
                    resolve(AntFrameConfig._netConfig);
                });
            });
        }
        static async GetErrorStr(code) {
            if (AntFrameConfig._netConfig) {
                return new Promise(resolve => {
                    resolve(AntFrameConfig._netConfig.ErrStr[code.toString()]);
                });
            }
            await AntFrameConfig.GetNetConfig();
            return new Promise(resolve => {
                resolve(AntFrameConfig._netConfig.ErrStr[code.toString()]);
            });
        }
    }
    AntFrameConfig.FIRST_SCENE = "test";
    AntFrameConfig.GAME_WIDTH = 1334;
    AntFrameConfig.GAME_HEIGHT = 750;
    AntFrameConfig.GROUP_ID = 0;
    AntFrameConfig.WXAppID = "wxedab64fed19eb5b4";
    AntFrameConfig.SHARE_IMG_URL = "https://thkdev.123u.com/game/makemore/";
    AntFrameConfig.GO_URL = "http://192.168.2.80:5000";
    AntFrameConfig.shouldShowGuide = true;

    class Mawait {
        static async Time(m) {
            return new Promise((resolve) => {
                Engine.timer.once(m, this, () => {
                    resolve();
                });
            });
        }
        static async Frame(frame) {
            return new Promise((resolve) => {
                Engine.timer.frameOnce(frame, this, () => {
                    resolve();
                });
            });
        }
    }

    class GameLaunch {
        constructor() {
        }
        install(callback) {
            this.installAsync(callback);
        }
        async installAsync(callback) {
            if (VersionConfig) {
                VersionConfig.Init();
            }
            Game.init();
            MenuLayer.install();
            MenuWindows.install();
            Game.version.init();
            if (Engine.borwer.isWXGame) {
                await this.initFguiSetting();
                Game.loader.install();
                await this.loadVersionAsync();
                Game.localStorage.setString("__basePath__", Laya.URL.basePath, true);
            }
            else {
                await this.loadVersionAsync();
                Game.localStorage.setString("__basePath__", Laya.URL.basePath, true);
                await this.initFguiSetting();
                Game.loader.install();
            }
            Game.loader.open(LoaderId.Launch);
            Game.loaderSettingHandler.onBegin();
            await this.clearWXFileCache();
            await this.initConfig();
            await this.initLangConfig();
            Game.moduleModel.install();
            Game.loaderSettingHandler.onEnd();
            Game.sound.install();
            if (window['launcherInitBG']) {
                window['launcherInitBG'].removeSelf();
            }
            Game.loader.closeAll();
            if (callback) {
                callback();
            }
            else {
                Game.menu.open(MenuId.War);
            }
        }
        loadVersion() {
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
        }
        async loadVersionAsync() {
            return new Promise((resolve) => {
                Laya.ResourceVersion.enable("version.json?t=" + Laya.timer.currTimer, Laya.Handler.create(this, () => {
                    if (Laya.ResourceVersion.manifest) {
                        if (Laya.ResourceVersion.manifest["__ResVersion__"]) {
                            let resVersion = Laya.ResourceVersion.manifest["__ResVersion__"];
                            Game.version.localResVersionData.setVersionTxt(resVersion);
                            Game.version.localResVersion = resVersion;
                        }
                        if (!VersionConfig.IsUseZip) {
                            let manifest = Laya.ResourceVersion.manifest;
                            let keyList = [];
                            for (var key in manifest) {
                                keyList.push(key);
                            }
                            for (var key2 of keyList) {
                                manifest[key2.toLowerCase()] = manifest[key2];
                            }
                        }
                        if (Laya.MiniAdpter) {
                            Laya.MiniAdpter.AutoCacheDownFile = false;
                        }
                    }
                    this.checkWXFileCache();
                    resolve();
                }), Laya.ResourceVersion.FILENAME_VERSION);
            });
        }
        async checkWXFileCache() {
            if (Engine.borwer.isWXGame) {
                let preBasePath = Game.localStorage.getString("__basePath__", true);
                if (preBasePath != Laya.URL.basePath) {
                    console.log(`资源根目录不一样: preBasePath=${preBasePath}, Laya.URL.basePath=${Laya.URL.basePath}`);
                    Laya.MiniFileMgr.onSetVersion(preBasePath, Laya.URL.basePath);
                }
            }
        }
        async clearWXFileCache() {
            let vv = VersionConfig.VersionCacheCode;
            if (Engine.borwer.isWXGame) {
                let v = Game.localStorage.getInt("__verIsNeedClear__", true);
                if (v != vv) {
                    console.log("清理缓存 v=", v, "vv=", vv);
                    Game.loaderSettingHandler.setTip("清理缓存中...");
                    await Mawait.Frame(5);
                    Laya.MiniFileManager.RemoveAll();
                }
            }
            Game.localStorage.setInt("__verIsNeedClear__", vv, true);
        }
        async initFguiSetting() {
            Game.guiRes.install();
            fgui.UIConfig.packageFileExtension = GuiSetting.packageFileExtension;
            fgui.UIObjectFactory.setLoaderExtension(FGLoader);
            GuiBinderList.fguiBinderAll();
            fgui.UIConfig.buttonSound = "ui://moe42ygrsqzy7p";
            fgui.UIConfig.defaultFont = "_sans";
            let packageConfig = await Game.asset.loadFguiByPackagenameAsync(GuiPackageNames.GameLaunch);
            GuiSetting.addPackage(packageConfig.packagePath);
            fgui.UIConfig.globalModalWaiting = fgui.UIPackage.getItemURL(packageConfig.packageName, "GlobalModalWaiting");
            fgui.UIConfig.windowModalWaiting = fgui.UIPackage.getItemURL(packageConfig.packageName, "WindowModalWaiting");
        }
        async initConfig() {
            Game.config.configLoader = Game.asset;
            Game.config.initList();
            Game.config.sLoadProgress.add(Game.loaderSettingHandler.onLoadedConfig, Game.loaderSettingHandler);
            await Game.config.loadAllAsync();
            Game.config.sLoadProgress.remove(Game.loaderSettingHandler.onLoadedConfig, Game.loaderSettingHandler);
        }
        async initLangConfig() {
            Game.lang.current.configLoader = Game.asset;
            Game.lang.current.initList();
            if (Game.lang.isUseLang) {
                Game.lang.current.sLoadProgress.add(Game.loaderSettingHandler.onLoadedLangConfig, Game.loaderSettingHandler);
                await Game.lang.current.loadAllAsync();
                Game.lang.current.sLoadProgress.remove(Game.loaderSettingHandler.onLoadedLangConfig, Game.loaderSettingHandler);
            }
        }
        async installServerList() {
            if (VersionConfig.IsDebugVer) {
                await Game.channel.requestServerListAsync();
                net.config.url = Game.channel.serverItem.main;
            }
            else {
                await Game.channel.requestChannelServerAsync();
                net.config.url = Game.channel.serverItem.main;
            }
            net.logic.onError.on(this.onNetError, this);
        }
        async onNetError(error) {
            console.log("onNetError " + error);
            let txt = await AntFrameConfig.GetErrorStr(error);
            console.log(`OnNetError no=${error}  txt=${txt}`);
            if (!txt)
                txt = "服务器反馈错误: " + error;
            Game.system.toastText(txt);
        }
    }

    class ConfigExpression {
    }

    class GamePreload {
        constructor() {
            this.packageConfigs = [];
            this.assets = [];
            this.isRuning = false;
            this.isComplete = false;
            this.completeCallbackList = [];
        }
        addAssetForFguiPackagename(packagename) {
            this.assets.push({ url: packagename, type: AssetItemType.FguiPackage });
        }
        addAssetForFguiComponent(fguiCom) {
            let names = fguiCom["DependPackages"];
            for (let i = 0; i < names.length; i++) {
                this.addAssetForFguiPackagename(names[i]);
            }
        }
        addDynmicAssetForAvatarAll(avatarConfig) {
            avatarConfig.getAllAssset(this.assets);
        }
        generate() {
            if (this.list)
                return;
            let dict = new Dictionary();
            let packageDict = new Dictionary();
            for (let i = 0; i < this.assets.length; i++) {
                let item = this.assets[i];
                let packageConfig = null;
                switch (item.type) {
                    case AssetItemType.FguiPackage:
                        packageConfig = Game.guiRes.getconfig(item.url);
                        break;
                    case AssetItemType.FspritePackage:
                        packageConfig = Game.spriteRes.getconfig(item.url);
                        break;
                }
                if (packageConfig) {
                    if (!packageDict.hasKey(packageConfig.packagePath)) {
                        packageDict.add(packageConfig.packagePath, packageConfig);
                    }
                    let packageRes = packageConfig.loadList;
                    for (let packageItem of packageRes) {
                        if (!dict.hasKey(packageItem.url)) {
                            let mitem = { url: packageItem.url, type: AssetHelper.layaLoaderType2AssetItemType(packageItem.type) };
                            dict.add(mitem.url, mitem);
                        }
                    }
                }
                else {
                    if (!dict.hasKey(item.url)) {
                        dict.add(item.url, item);
                    }
                }
            }
            this.list = dict.getValues();
            this.packageConfigs = packageDict.getValues();
        }
        async start() {
            return new Promise((resolve) => {
                if (this.isComplete) {
                    resolve(true);
                }
                else {
                    let fun = () => {
                        resolve(true);
                    };
                    this.completeCallbackList.push(fun);
                    if (!this.isRuning) {
                        this.generate();
                        if (!this.list || this.list.length == 0) {
                            this.onComplete();
                        }
                        else {
                            Game.asset.loadList(this.list, this, this.onComplete, this.onProgress);
                        }
                    }
                }
            });
        }
        onProgress(rate, index, count, item) {
            Game.loaderSettingHandler.onLoadedFgui(index, count);
        }
        onComplete() {
            for (let packageConfig of this.packageConfigs) {
                GuiSetting.addPackage(packageConfig.packagePath);
            }
            for (let fun of this.completeCallbackList) {
                fun.apply(this);
            }
            this.isComplete = true;
        }
    }

    var AssemblyNamespace;
    (function (AssemblyNamespace) {
        AssemblyNamespace["SimulationBehaviours"] = "SimulationBehaviours";
        AssemblyNamespace["EComponents"] = "EComponents";
        AssemblyNamespace["ESystems"] = "ESystems";
        AssemblyNamespace["EEvents"] = "EEvents";
        AssemblyNamespace["ECSSystems"] = "ECSSystems";
        AssemblyNamespace["UnitCmds"] = "UnitCmds";
        AssemblyNamespace["UnitCmdActions"] = "UnitCmdActions";
        AssemblyNamespace["TookHandlers"] = "TookHandlers";
        AssemblyNamespace["RenderComponents"] = "RenderComponents";
        AssemblyNamespace["RenderSystems"] = "RenderSystems";
        AssemblyNamespace["RenderSimulationBehaviours"] = "RenderSimulationBehaviours";
    })(AssemblyNamespace || (AssemblyNamespace = {}));
    window['AssemblyNamespace'] = AssemblyNamespace;

    class TookHandler {
        constructor() {
            this.menuId = 0;
        }
        init() {
        }
        validate(serverMilliseconds) {
            return true;
        }
        exe() {
        }
        __onExe() {
        }
    }
    TookHandler.__namespace = AssemblyNamespace.TookHandlers;

    class MenuValidateOpening extends MenuValidate {
        constructor() {
            super(...arguments);
            this.closeDict = new Dictionary();
        }
        install() {
        }
        addClose(id, func) {
            this.closeDict.add(id, func);
        }
        validate(menuId) {
            let isClose = false;
            if (this.closeDict.hasKey(menuId)) {
                isClose = this.closeDict.getValue(menuId).apply(this);
            }
            if (isClose == true) {
                return false;
            }
            let unlockConfig = Game.config.unlock.getUnlockConfig(menuId);
            if (this.dict.hasKey(menuId)) {
                return this.dict.getValue(menuId).apply(this);
            }
            return super.validate(menuId);
        }
    }

    class MenuValidateUnlock extends MenuValidate {
        install() {
        }
        validate(menuId) {
            return MenuValidateOpening.getInstance().validate(menuId);
        }
    }

    class FixedTimeTookHandler extends TookHandler {
        constructor() {
            super(...arguments);
            this.fixedTimeList = [];
            this.endedTimeList = [];
        }
        validate(serverMilliseconds) {
            let result = false;
            let len = this.fixedTimeList.length;
            for (let i = 0; i < len; i++) {
                let fixitem = this.fixedTimeList[i];
                let enditem = this.endedTimeList[i];
                if (serverMilliseconds >= fixitem.timestamp) {
                    if (enditem) {
                        result = (serverMilliseconds <= enditem.timestamp);
                        result && enditem.reseTimestamp();
                    }
                    else {
                        result = true;
                        result && fixitem.reseTimestamp();
                    }
                    break;
                }
            }
            return result;
        }
    }
    var FixedTimeType;
    (function (FixedTimeType) {
        FixedTimeType[FixedTimeType["Day"] = 0] = "Day";
        FixedTimeType[FixedTimeType["Week"] = 1] = "Week";
        FixedTimeType[FixedTimeType["Month"] = 2] = "Month";
    })(FixedTimeType || (FixedTimeType = {}));
    var ResultTimeType;
    (function (ResultTimeType) {
        ResultTimeType[ResultTimeType["UnArrival"] = 0] = "UnArrival";
        ResultTimeType[ResultTimeType["Arrival"] = 1] = "Arrival";
        ResultTimeType[ResultTimeType["Overdue"] = 2] = "Overdue";
    })(ResultTimeType || (ResultTimeType = {}));
    class FixedTimeConfig {
        constructor() {
            this.timeType = FixedTimeType.Day;
            this.monthDate = 0;
            this.weekDay = 0;
            this.hour = 0;
            this.minute = 0;
            this.second = 0;
            this._timestamp = -1;
        }
        static CreateHMS(h, m = 0, s = 0) {
            let config = new FixedTimeConfig();
            config.timeType = FixedTimeType.Day;
            config.hour = h;
            config.minute = m;
            config.second = s;
            return config;
        }
        static CreateWeek(weekDay, h, m = 0, s = 0) {
            let config = new FixedTimeConfig();
            config.timeType = FixedTimeType.Week;
            config.weekDay = weekDay;
            config.hour = h;
            config.minute = m;
            config.second = s;
            return config;
        }
        static CreateMonthDate(monthDate, h, m = 0, s = 0) {
            let config = new FixedTimeConfig();
            config.timeType = FixedTimeType.Month;
            config.monthDate = monthDate;
            config.hour = h;
            config.minute = m;
            config.second = s;
            return config;
        }
        get timestamp() {
            if (this._timestamp <= 0) {
                this.reseTimestamp();
            }
            return this._timestamp;
        }
        reseTimestamp() {
            let date;
            switch (this.timeType) {
                case FixedTimeType.Day:
                    date = TimeHelper.getServerNextDate(this.hour, this.minute, this.second);
                    break;
                case FixedTimeType.Week:
                    date = TimeHelper.getServerNextWeekDate(this.weekDay, this.hour, this.minute, this.second);
                    break;
                case FixedTimeType.Month:
                    date = TimeHelper.getServerNextMonthDate(this.monthDate, this.hour, this.minute, this.second);
                    break;
            }
            console.log(TimeHelper.ToStr(date));
            this._timestamp = date.getTime();
        }
    }

    class FixedTimeHookHandler_hms extends FixedTimeTookHandler {
        init() {
            let d = Global.updataDayTime;
            this.fixedTimeList.push(FixedTimeConfig.CreateHMS(d.H, d.Mm, d.S));
            super.init();
        }
        exe() {
            super.exe();
            console.log("FixedTimeHookHandler_hms exe");
            Game.moduleModel.section.sectionData.resetData();
            Game.moduleModel.gashapon.resetGashaponData();
            Game.event.dispatch(GameEventKey.GameFrame_Everyday_Update);
        }
    }

    class Assembly {
        static register(classType, name) {
            classType.tag = name;
            this._namespace.addItem(classType.__namespace, classType);
        }
        static get(namespaceName) {
            return this._namespace.get(namespaceName);
        }
    }
    Assembly._namespace = new UnOrderMultiMap();
    window['Assembly'] = Assembly;

    class TookIncludes {
        static install() {
            if (this.isInstalled)
                return;
            Assembly.register(FixedTimeHookHandler_hms, 'FixedTimeHookHandler_hms');
        }
    }
    TookIncludes.isInstalled = false;

    class TookManager {
        constructor() {
            this.dict = new Dictionary();
            this.list = [];
            this.count = 0;
            this.isInsalled = false;
            this.serverMilliseconds = 0;
        }
        install() {
            if (this.isInsalled)
                return;
            this.isInsalled = true;
            TookIncludes.install();
            let clasList = Assembly.get(AssemblyNamespace.TookHandlers);
            if (clasList) {
                for (let classType of clasList) {
                    this.registerSystem(classType);
                }
            }
        }
        registerSystem(classType) {
            let tag = classType.tag || classType.name || classType["__tookClassUid"];
            if (!tag || !this.dict.hasKey(tag)) {
                tag = classType["__tookClassUid"] = TookManager.TookClassUid++;
            }
            let handler = new classType();
            if (handler instanceof TookHandler) {
                handler.init();
                this.dict.add(tag, handler);
                this.list.push(handler);
                this.count = this.list.length;
            }
        }
        fixedReseTimestamp() {
            for (let hander of this.list) {
                if (hander instanceof FixedTimeTookHandler) {
                    for (let item of hander.fixedTimeList) {
                        item.reseTimestamp();
                    }
                }
            }
        }
        start() {
            this.install();
            this.stop();
            Laya.timer.loop(1000, this, this.onTick);
        }
        stop() {
            Laya.timer.clear(this, this.onTick);
        }
        onTick() {
            this.serverMilliseconds = Game.time.serverMilliseconds;
            for (let i = 0; i < this.count; i++) {
                let took = this.list[i];
                if (this.validate(took)) {
                    took.exe();
                    took.__onExe();
                }
            }
        }
        validate(took) {
            if (!Game.user.isLoginAndGetUserData) {
                return false;
            }
            let result = true;
            if (result && took.menuId > 0)
                result = MenuValidateOpening.getInstance().validate(took.menuId);
            if (result && took.menuId > 0)
                result = MenuValidateUnlock.getInstance().validate(took.menuId);
            if (result && took.preconditionMenuIds && took.preconditionMenuIds.length > 0) {
                result = false;
                for (let itemId of took.preconditionMenuIds) {
                    if (Game.menu.isOpened(itemId)) {
                        result = true;
                        break;
                    }
                }
            }
            if (result)
                result = took.validate(this.serverMilliseconds);
            return result;
        }
    }
    TookManager.TookClassUid = 1;

    class LoginSender {
        async reLogin() {
        }
        async login(userName, password, isForce) {
            if (!isForce && Game.user.isLoginAndGetUserData) {
                return;
            }
            fgui.GRoot.inst.showModalWait();
            let s2c = await AntFrame.platform.Login2(userName, password);
            fgui.GRoot.inst.closeModalWait();
            if (s2c.error) {
                if (s2c.error == 45 || s2c.error == 304)
                    Game.launch.onNetError(s2c.error);
                if (s2c.error == 1018)
                    Game.event.dispatch("LOGIN_CDK", s2c["session"]);
                return;
            }
            Game.localStorage.username = userName;
            Game.localStorage.password = password;
            if (Engine.borwer.isBrowser && VersionConfig.IsDebugVer) {
                sessionStorage.setItem('username', userName);
                sessionStorage.setItem('password', password);
            }
            Game.event.dispatch("SUCCESS_LOGIN", s2c["session"], s2c["roles"]);
        }
        async check(session, cdk, userName, password) {
            let s2c = await AntFrame.platform.CheckCdk(session, cdk);
            if (s2c.error) {
                Game.event.dispatch("ERROR_CDK", s2c.error);
                return;
            }
            this.login(userName, password, true);
        }
        async CheckIDCard(session, name, idCard) {
            let s2c = await AntFrame.platform.CheckIDCard(session, name, idCard);
            console.log("当前验证身份状态：", s2c.error, s2c["timelong"]);
            if (s2c.error != 0 && s2c.error != 1023) {
                let model = Game.moduleModel.login;
                model.session = session;
                model.error = s2c.error;
                model.timeLong = s2c["timelong"];
            }
            Game.event.dispatch("ERROR_IDCARD", s2c.error);
        }
        async newAndUseRole(session, userName, server) {
            let s2c = await AntFrame.platform.newAndUseRole(session, userName, server);
            if (s2c.error) {
                return;
            }
            this.enter();
        }
        async useRole(session, roleid) {
            let s2c = await AntFrame.platform.useRole(session, roleid);
            if (s2c.error) {
                return;
            }
            this.enter();
        }
        async areas() {
            let s2c = await AntFrame.platform.Areas();
            if (s2c.error) {
                Game.event.dispatch("ERROR_AREAS");
                return;
            }
            Game.event.dispatch("SUCCESS_AREAS", s2c["areas"]);
        }
        async enter() {
            fgui.GRoot.inst.showModalWait();
            await Game.net.AsyncGamerLoginGetDataC2S();
            Game.user.isLoginAndGetUserData = true;
            Game.netStat.isLogined = true;
            fgui.GRoot.inst.closeModalWait();
        }
    }

    class UserSender {
        async changeName(name) {
            return await Game.net.AsyncGamerChangeNameC2S(name);
        }
        async changeHeadIcon(name) {
            let s2c = await Game.net.AsyncGamerChangeAvatarC2S(name);
        }
        async uploadWXInfo() {
        }
        async sawHeadIcon(heroIds) {
            let s2c = await Game.net.GamerChangeItemIsSawC2S(6, heroIds);
        }
    }

    class ProtoSenderList {
        constructor() {
            this.login = new LoginSender();
            this.user = new UserSender();
        }
    }

    class ProtoHandlerList {
        init() {
        }
    }

    class GameNetStat {
        constructor() {
            this.isConnnected = false;
            this.isTryConnecting = false;
            this.isLogined = false;
            this.lastSendFrame = 0;
            this.lastResponseFrame = 0;
            this.lastMsgSuccess = true;
            this.lastShowErrorFrame = 0;
            this.timeOutShowModelWait = true;
        }
        Init() {
            net.logic.onConnect.on(this.onConnect, this);
            net.logic.onReconnect.on(this.onReconnect, this);
            net.logic.onClose.on(this.onClose, this);
            net.logic.onConnectError.on(this.onConnectError, this);
            net.logic.onSendTime.on(this.onSendTime, this);
            net.logic.onResponseTime.on(this.onResponseTime, this);
            Laya.timer.frameLoop(20, this, this.onLoop);
        }
        onConnect() {
            this.isConnnected = true;
            this.isTryConnecting = false;
            if (this.isLogined) {
                fgui.GRoot.inst.closeModalWait();
            }
        }
        onConnectError() {
            this.isConnnected = false;
            this.isTryConnecting = false;
            if (this.isLogined) {
                Game.system.toastText(TEXT.NET_ERROR);
            }
        }
        onClose() {
            this.isConnnected = false;
            this.isTryConnecting = false;
            if (this.isLogined) ;
        }
        onReconnect() {
            this.isConnnected = false;
            this.isTryConnecting = true;
            if (this.isLogined) {
                fgui.GRoot.inst.showModalWait();
            }
        }
        onClickConnect() {
        }
        onSendTime() {
            if (this.lastMsgSuccess) {
                this.lastSendFrame = Laya.timer.currFrame;
            }
            this.lastMsgSuccess = false;
        }
        onResponseTime() {
            this.lastResponseFrame = Laya.timer.currFrame;
            this.lastMsgSuccess = true;
            if (this.timeOutShowModelWait) {
                fgui.GRoot.inst.closeModalWait();
                this.timeOutShowModelWait = false;
            }
        }
        onLoop() {
            if (!this.lastMsgSuccess && !this.isTryConnecting) {
                if (Laya.timer.currFrame - this.lastShowErrorFrame > 300 && Laya.timer.currFrame - this.lastSendFrame > 300) {
                    this.lastShowErrorFrame = Laya.timer.currFrame;
                    if (!this.timeOutShowModelWait) {
                        fgui.GRoot.inst.showModalWait();
                    }
                    this.timeOutShowModelWait = true;
                    this.onConnectError();
                }
            }
        }
    }

    class Game {
        static init() {
            if (this.isInited)
                return;
            this.isInited = true;
            this.screenSetting = new ScreenSettingConfig();
            this.deviceSetting = new GameDeviceConfig();
            this.launchText = new LaunchText();
            this.launch = new GameLaunch();
            this.asset = new AssetManager();
            this.config = new ConfigManager();
            this.lang = LangManager.Instance;
            this.configExp = new ConfigExpression();
            this.sound = new AudioManager();
            this.time = new GameTimeData();
            this.localStorage = GameLocalStorage.Instance;
            this.loader = LoaderManager.Instance;
            this.loaderSettingHandler = new LoaderSettingHandler();
            this.menu = new MenuManager();
            this.system = new GameSystemMessag();
            this.channel = ChannelManager.Instance;
            this.version = VersionManager.Instance;
            this.preload = new GamePreload();
            this.moduleModel = new ModelManager();
            this.user = new UserData();
            this.guiRes = new GuiResPackageConfigReader();
            this.spriteRes = new SpriteResPackageConfigReader();
            this.event = new Emitter();
            this.net = AntNet;
            this.netStat = new GameNetStat();
            this.netStat.Init();
            this.protoHandler = new ProtoHandlerList();
            this.protoHandler.init();
            this.sender = new ProtoSenderList();
            this.took = new TookManager();
        }
    }
    Game.net = AntNet;
    Game.isInited = false;
    window["Game"] = Game;

    class GameMain {
        constructor() {
            LayaExtendClass();
            if (!Laya3D._isInit) {
                this.InitLaya();
            }
            if (GameConfig.stat)
                Laya.Stat.show();
            LayaExtendLogic();
            FguiExtend();
            Engine.init();
            Game.init();
            Game.launch.install();
            Laya.stage.on(Laya.Event.KEY_DOWN, this, this.OnKeyDownHandler);
        }
        OnKeyDownHandler(e) {
            if (Laya.Keyboard.P == e.keyCode) {
                console.error("当前对象池信息:");
                console.error(Pool._poolDic);
            }
        }
        initLoader() {
            let path = "res/fgui/GameLaunch_atlas_upoiw2g.jpg";
            let system = wx.getSystemInfoSync();
            var sprite = new Laya.Sprite();
            let w = Laya.stage.width;
            let h = Laya.stage.height;
            sprite.graphics.drawRect(0, 0, w, h, '#FFFFFF');
            sprite.graphics.loadImage(path, 0, 0, w, h);
            Laya.stage.addChild(sprite);
            window['launcherInitBG'] = sprite;
        }
        InitLaya() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            Laya.Shader3D.debugMode = false;
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            Laya.alertGlobalError = true;
        }
    }
    new GameMain();

}());
//# sourceMappingURL=bundle.js.map
