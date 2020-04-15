import WarGame from "./WarGame";

export default class War
{
    private static isInited: boolean = false;
    private static game: WarGame;
    static init()
    {
        if(this.isInited) return;

        this.game = new WarGame();


        this.isInited = true;
    }

    static launch()
    {
        this.game.launch();
    }
}