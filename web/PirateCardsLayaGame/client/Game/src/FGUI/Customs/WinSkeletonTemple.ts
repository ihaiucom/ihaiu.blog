export default class WinSkeletonTemple 
{
    private static pool = [];
    static poolGet():WinSkeletonTemple
    {
        let item:WinSkeletonTemple;
        if(this.pool.length > 0)
        {
            item = this.pool.shift();
        }
        else
        {
            item =  new WinSkeletonTemple();
            item.install();
        }

        if (item.skeleton) item.skeleton.play(0, false);

        return item;
    }

    poolRecover()
    {
        if(WinSkeletonTemple.pool.indexOf(this) == -1 )
        {
            WinSkeletonTemple.pool.push(this);
        }
    }

    release()
    {
        this.skeleton.stop();
        this.skeleton.removeSelf();
        this.parent = null;
        this.x = 0;
        this.y = 0;

        this.poolRecover();
    }

    private templet:Laya.Templet;

    private parent:Laya.Node;

    public x:number = 0;

    public y:number = 0;

    public skeleton:Laya.Skeleton;

    constructor()
    {
        this.templet = new Laya.Templet();
        this.templet.on(Laya.Event.COMPLETE, this, this.parseComplete);
        this.templet.on(Laya.Event.ERROR, this, this.onError);
    }

    install()
    {
        this.templet.loadAni("res/spineUI/win/shengli.sk");
    }

    onError() {
        console.log("parse spineUI-win-shengli error");
    }

    parseComplete() {
        //创建第一个动画
        var skeleton: Laya.Skeleton;
        //从动画模板创建动画播放对象
        skeleton = this.templet.buildArmature(0);
        //设置皮肤
        skeleton.showSkinByIndex(1);
        //播放
        skeleton.play(0, false);
        
        if (this.parent) 
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