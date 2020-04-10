import MModel from "../../GameFrame/Module/MModel";
import Game from "../../Game";

export default class LoginModel extends MModel
{
    get isIndulge():boolean
    {
        return this.timeLong >= Global.indulgeTime;
    }

    /** 时长，用于防沉迷 */
    private _timelong:number = 0;

    set timeLong(time:number)
    {
        this._timelong = time;

        // Laya.timer.once((lefttime) * 1000, this, ()=>{
        //     Game.event.dispatch("INDULGE_END");
        // }, null, true);
    }

    get timeLong():number
    {
        return this._timelong;
    }

    /** 状态，用于防沉迷 */
    private _error:number = 0;

    set error(error:number)
    {
        this._error = error;
        if(error == 0 || error == 1023)
        {
            Laya.timer.clearAll(this);
        }
    }

    get error():number
    {
        return this._error;
    }

    /** session，用于防沉迷 */
    private _session:string = "";

    set session(session:string)
    {
        this._session = session;
    }

    get session():string
    {
        return this._session;
    }
}