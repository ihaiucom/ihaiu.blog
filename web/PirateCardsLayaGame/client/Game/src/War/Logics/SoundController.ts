import RandomHelper from "../Utils/RandomHelper";

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

    get soundBtnIndex()
    {
        return Laya.SoundManager.soundMuted ? 0 : 1;
    }

    changeSoundState()
    {
        Laya.SoundManager.musicMuted = Laya.SoundManager.soundMuted = !Laya.SoundManager.soundMuted;

        if(!Laya.SoundManager._musicMuted)
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
        if(Laya.SoundManager._musicMuted)
        {
            return;
        }

        Laya.timer.clearAll(this);
        var c = Laya.SoundManager.playMusic(`res/sounds/music/music0${RandomHelper.getRandomIntInclusive(1, 5)}.mp3`, 1, Laya.Handler.create(this, this.onPlayMusicEnd), 0);
        if(c)
        {
            // c.volume = 0.1;
        }
        // Laya.timer.once(25 * 1000, this, this.playMusic);
    }

    onPlayMusicEnd()
    {
        Laya.timer.clearAll(this);
        Laya.timer.once(100, this, this.playMusic);
    }



}