import Game from "../../Game";

export default class HeroSkeletonTemple 
{
    // private static pool = [];
    // static poolGet():HeroSkeletonTemple
    // {
    //     let item:HeroSkeletonTemple;
    //     if(this.pool.length > 0)
    //     {
    //         item = this.pool.shift();
    //     }
    //     else
    //     {
    //         item =  new HeroSkeletonTemple();
    //         item.install();
    //     }

    //     if (item.skeleton) item.skeleton.play(0, true);

    //     return item;
    // }

    // poolRecover()
    // {
    //     if(HeroSkeletonTemple.pool.indexOf(this) == -1 )
    //     {
    //         HeroSkeletonTemple.pool.push(this);
    //     }
    // }

    release()
    {
        if (this.skeleton) 
        {
            this.skeleton.stop();
            this.skeleton.removeSelf();
            this.skeleton.destroy();
            this.skeleton = null;
        }
        
        this.parent = null;
        this.x = 0;
        this.y = 0;


        this.templet.off(Laya.Event.COMPLETE, this, this.parseComplete);
        this.templet.off(Laya.Event.ERROR, this, this.onError);
        this.templet.destroy();
        this.templet  = null;

        // this.poolRecover();
    }

    private parent:Laya.Node;

    public x:number = 0;

    public y:number = 0;

    public skeleton:Laya.Skeleton;

    private templet:Laya.Templet;

    constructor()
    {
        this.templet = new Laya.Templet();
        this.templet.on(Laya.Event.COMPLETE, this, this.parseComplete);
        this.templet.on(Laya.Event.ERROR, this, this.onError);
    }

    install(heroId:number)
    {
        let heroconfig   = Game.config.hero.getConfig(heroId);
        let avatarconfig = Game.config.avatar.getConfig(heroconfig.display[0]);

        // load动画
        let res = avatarconfig.spine;
        this.templet.loadAni(`res/fspriteassets/${res}.sk`);

        // 设置位置
        let pos = avatarconfig.spinePos;
        this.setXY(pos[0], pos[1]);
    }

    onError() {
        console.error("parse HeroSkeletonTemple spine error");
    }

    parseComplete() {
        //创建第一个动画
        var skeleton: Laya.Skeleton;
        //从动画模板创建动画播放对象
        skeleton = this.templet.buildArmature(0);
        //设置皮肤
        skeleton.showSkinByIndex(1);
        //播放
        skeleton.play(0, true);
        
        if (this.parent && !skeleton.parent) 
        {
            this.parent.addChild(skeleton);
        }
        if (skeleton.x != this.x || skeleton.y != this.y) 
        {
            skeleton.pos(this.x, this.y)
        }
        this.skeleton = skeleton;
    }

    setParent(parent:Laya.Node)
    {
        if(this.skeleton && !this.skeleton.parent)
        {
            parent.addChild(this.skeleton);
        }
        this.parent = parent;
    }

    setXY(x:number, y:number)
    {
        if (this.skeleton && (this.x != x || this.y != y))
        {
            this.skeleton.pos(x, y)
        }
        this.x = x; this.y = y;
    }
}