import WarGame from "./WarGame";
import WindowWarUI from "../FGUI/Extends/GameHome/WindowWarUI";

export default class War
{
    private static isInited: boolean = false;
    private static game: WarGame;
    static init(windowUI: WindowWarUI)
    {
        if(this.isInited) return;

        this.game = new WarGame();
        this.game.init(windowUI);


        this.isInited = true;
    }

    static launch()
    {
        this.game.launch();
    }

    static stop()
    {
        this.game.stop();
    }

    static uninstall()
    {

    }

}