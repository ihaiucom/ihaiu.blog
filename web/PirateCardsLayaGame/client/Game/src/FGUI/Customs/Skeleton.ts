import Res from '../../Config/Keys/Res';
export default class Skeleton
{
    private static pool = [];
    static poolGet(): Skeleton
    {
        let item: Skeleton;
        if(this.pool.length > 0)
        {
            item = this.pool.shift();
        }
        else
        {
            item = new Skeleton();
            item.templet.on(Laya.Event.COMPLETE,item,item.parseComplete);
            item.templet.on(Laya.Event.ERROR,item,item.onError);
        }

        if(item.skeleton) item.skeleton.play(0,false);

        return item;
    }

    poolRecover()
    {
        if(Skeleton.pool.indexOf(this) == -1)
        {
            Skeleton.pool.push(this);
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

    private templet: Laya.Templet;

    private parent: Laya.Node;

    public x: number = 0;

    public y: number = 0;

    public skeleton: Laya.Skeleton;

    constructor()
    {
        this.templet = new Laya.Templet();
        
    }

    completion: Function;

    Init(aniName: string, parent: any, x: number, y: number, completion: Function)
    {
        this.completion = completion;
        let path = Res.getSpineUISkPath(aniName);
        this.templet.loadAni(path);
        this.setXY(x,y);
        this.setParent(parent);
    }

    onError()
    {
        this.templet.off(Laya.Event.COMPLETE,this,this.parseComplete);
        this.templet.off(Laya.Event.ERROR,this,this.onError);
        console.log("parse spineUI-win-shengli error");
    }

    parseComplete()
    {
        //创建第一个动画
        var skeleton: Laya.Skeleton;
        //从动画模板创建动画播放对象
        skeleton = this.templet.buildArmature(0);
        //设置皮肤
        skeleton.showSkinByIndex(1);
        //播放

        if(this.parent) 
        {
            this.parent.addChild(skeleton);
        }
        if(skeleton.x != this.x || skeleton.y != this.y) 
        {
            skeleton.pos(this.x,this.y)
        }


        this.skeleton = skeleton;

        this.templet.off(Laya.Event.COMPLETE,this,this.parseComplete);
        this.templet.off(Laya.Event.ERROR,this,this.onError);
        if(this.completion)
            this.completion();
    }
    /**
     * 播放动画
     * @param nameOrIndex 动画名字或者索引
     * @param loop 是否循环播放
     * @param force false,如果要播的动画跟上一个相同就不生效,true,强制生效
     * @param start 起始时间
     * @param end 结束时间
     * @param freshSkin 是否刷新皮肤数据
     * @param playAudio 是否播放音频
     */
    play(nameOrIndex: any,loop: boolean,force?: boolean,start?: number,end?: number,freshSkin?: boolean,playAudio?: boolean): void
    {
        this.skeleton.play(nameOrIndex,loop, force, start, end, freshSkin, playAudio);
     }

    setParent(parent: Laya.Node, index: number = -1)
    {
        if(this.skeleton && !this.skeleton.parent)
        {
            parent.addChildAt(this.skeleton,index);
        }
        this.parent = parent;
    }

    setXY(x: number,y: number)
    {
        if(this.skeleton && (this.x != x || this.y != y))
        {
            this.skeleton.pos(x,y)
        }
        this.x = x; this.y = y;
    }
}