import Consts from "../Consts";
import RandomHelper from "../RandomHelper";

export default class CardBase
{
    shape;
    game;
    bigLightningSprite;
    smallLightningSprite;

    playNoAccess() {
        SoundController.instance.playSound(SoundConsts.IncorrectClick);
        var e = new NoAccess(this.shape.game, 0, -.5);
        this.shape.addChild(e),
        e.play(AnimationConsts.Action, 60, !1, !0)
    }
    setCoordinate(t) {
        this.shape.x = t.x,
        this.shape.y = t.y
    }
    moveTo(t, e) {
        return this.game.add.tween(this.shape).to({
            x: t.x,
            y: t.y
        },
        e)
    }
    getCenterX() {
        return this.shape.x
    }
    getCenterY() {
        return this.shape.y
    }
    runLightning() {
        this.bigLightningSprite || (this.bigLightningSprite = new BigLightning(this.game, 0, 0), this.bigLightningSprite.alpha = 0, this.shape.add(this.bigLightningSprite)),
        this.bigLightningSprite.y = 20;
        var e = [],
        i = this.game.add.tween(this.bigLightningSprite).to({
            alpha: 1
        },
        50).to({
            y: -20
        },
        200).to({
            alpha: 0
        },
        50);
        return i.onStart.add(this.onBigLightingStart, this),
        e.push(i),
        e
    }
    onBigLightingStart() {
        this.smallLightningSprite || (this.smallLightningSprite = new t.SmallLightning(this.game, 0, 0), this.smallLightningSprite.alpha = 0, this.shape.add(this.smallLightningSprite));
        var e = Consts.CardWidth / 2 - 20,
        i = Consts.CardHeight / 2 - 20;
        RandomHelper.getRandomBool() && (e = -e),
        RandomHelper.getRandomBool() && (i = -i),
        this.smallLightningSprite.x = e,
        this.smallLightningSprite.y = i,
        this.game.add.tween(this.smallLightningSprite).to({
            alpha: 1
        },
        1).to({
            alpha: 0
        },
        1, null, !0, 100)
    }
    getScaleTween(t, e) {
        for (var i = [], o = 2; o < arguments.length; o++) i[o - 2] = arguments[o];
        var n, s = this.game.add.tween(t.scale).to({
            x: 2.5,
            y: 2.5
        },
        200),
        a = this.game.add.tween(t.scale).to({
            x: 1,
            y: 1
        },
        200);
        return (n = s.onComplete).add.apply(n, [e, this, null].concat(i)),
        s.chain(a),
        s
    }
    getCardLifeText() {
        return this.shape.getByName(Consts.CardLife)
    }
}