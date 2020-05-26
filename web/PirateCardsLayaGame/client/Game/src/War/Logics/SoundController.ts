import RandomHelper from "../Utils/RandomHelper";

declare var wx;
export default class SoundController
{
    private static _instance:SoundController;
    static get instance()
    {
        if(!this._instance)
        {
            this._instance = new SoundController();
            // Laya.SoundManager.musicVolume = 0.1;
        }
        return this._instance;
    }
    
    constructor()
    {
        if(window['wx'])
        {
            wx.onShow(this.onAppShow.bind(this))
            wx.onHide(this.onAppHide.bind(this))
        }
    }

    isInit: boolean = false;
    onAppShow(res)
    {
        this.stopAll();
        Laya.timer.once(3000, this, this.playMusic);
    }

    onAppHide(res)
    {
        this.stopAll();
    }

    get soundBtnIndex()
    {
        return Laya.SoundManager.soundMuted ? 0 : 1;
    }

    changeSoundState()
    {
        var v = !Laya.SoundManager.soundMuted;
        if(!v)
        {
            Laya.SoundManager.stopMusic();
        }
        Laya.SoundManager.musicMuted = Laya.SoundManager.soundMuted = v;

        if(!v)
        {
            this.playMusic();
        }
    }


    playSound(key: string)
    {
        if(Laya.SoundManager.soundMuted)
        {
            return;
        }
        var path = `res/sounds/mp3/${key}.mp3`;
        Laya.SoundManager.playSound(path, 1);
    }

    playMusic()
    {
        this.isInit = true;
        if(Laya.SoundManager._musicMuted)
        {
            return;
        }

        Laya.timer.clearAll(this);
        var c = Laya.SoundManager.playMusic(`res/sounds/music/music${RandomHelper.getRandomIntInclusive(6, 15)}.mp3`, 1, Laya.Handler.create(this, this.onPlayMusicEnd), 0);
        if(c)
        {
            // c.volume = 0.1;
        }
        // Laya.timer.once(25 * 1000, this, this.playMusic);
    }

    private lastEndTime = 0;
    onPlayMusicEnd()
    {
        console.log("onPlayMusicEnd");
        if(Laya.timer.currTimer - this.lastEndTime < 1000 * 20)
        {
            return;
        }
        this.lastEndTime = Laya.timer.currTimer;
        Laya.timer.clearAll(this);
        Laya.timer.once(100, this, this.playMusic);
    }

    stopAll()
    {
        Laya.timer.clearAll(this);
        Laya.SoundManager.stopAll();
    }



}