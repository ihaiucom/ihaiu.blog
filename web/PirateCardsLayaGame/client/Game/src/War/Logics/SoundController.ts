export default class SoundController
{
    private static _instance:SoundController;
    static get instance()
    {
        if(!this._instance)
        {
            this._instance = new SoundController();
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
}