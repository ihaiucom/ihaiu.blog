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

    playSound(key: string)
    {

    }
}