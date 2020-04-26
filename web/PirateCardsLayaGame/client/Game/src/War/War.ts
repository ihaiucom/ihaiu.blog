import WarGame from "./WarGame";
import WindowWarUI from "../FGUI/Extends/GameHome/WindowWarUI";
import Game from "../Game";
import { MenuId } from "../GameModule/MenuId";
import { HomeTabType } from "../GameModule/ViewWindows/HomeWindow";
import GameStatus from "./Datas/GameStatus";
import ReportMonitor from "../Libs/ReportMonitor";

declare var wx;
export default class War
{
    private static isInited: boolean = false;
    static game: WarGame;
    static init(windowUI: WindowWarUI)
    {
        if(this.isInited) return;

        this.game = new WarGame();
        this.game.init(windowUI);


        this.isInited = true;
    }

    static launchtimestamp = 0;
    static launch()
    {
        this.launchtimestamp = Date.now();
        this.uninstall();
        this.game.launch();
    }

    static setGameOver()
    {
        this.game.setGameOver();
    }

    static uninstall()
    {
        this.game.uninstall();
    }


    static exit()
    {
        GameStatus.addUserGold(GameStatus.goldPerGame);
        ReportMonitor.OnGload(GameStatus.goldPerGame);
        ReportMonitor.OnGloadBest(GameStatus.bestGoldPerGame);
        ReportMonitor.OnWarOver();

        this.uninstall();
        Game.menu.openTab(MenuId.Home, HomeTabType.Result);
    }


}

window['War'] = War;