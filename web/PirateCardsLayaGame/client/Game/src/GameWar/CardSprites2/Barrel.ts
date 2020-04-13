export default class Barrel
{
    sprites: any[];
    animationTime = 500;

    playOpen()
    {
        this.runTween()
    }

    runTween()
    {
        this.sprites.forEach(this.runFlySprite.bind(this))
    }

    runFlySprite(sprite)
    {
        this.addDust();
        var e = new GraphObject(t);
        this.game.add.tween(e).to({
            angel: 180
        },
        this.animationTime, "Linear", !0).onComplete.add(function() {
            this.destroy()
        },
        t)
    }

    addDust()
    {
        for (var e = -60; e <= 90; e += 30) for (var i = -51; i <= 90; i += 30) if (( - 60 !== e && 90 !== e || -51 != i) && ( - 60 !== e && 90 !== e || 90 != i)) {
            var o = t.RandomHelper.getRandomIntInclusive(1, 3);
            if (2 !== o && 3 !== o) {
                var n = new t.Dust(this.game, e, i);
                n.x += t.RandomHelper.getRandomIntInclusive( - 15, 15),
                n.y += t.RandomHelper.getRandomIntInclusive( - 15, 15),
                this.addChild(n)
            }
        }
    }
}