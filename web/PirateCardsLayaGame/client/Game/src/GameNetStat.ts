import Game from "./Game";
import TEXT from "./Config/Keys/TEXT";
declare var net;

export default class GameNetStat
{
    /** 是否连接成功 */
    isConnnected: boolean = false;
    /** 是否正在尝试连接 */
    isTryConnecting: boolean = false;

    /** 是否登录 */
    isLogined: boolean = false;
    Init()
    {
        net.logic.onConnect.on(this.onConnect, this);
        net.logic.onReconnect.on(this.onReconnect, this);
        net.logic.onClose.on(this.onClose, this);
        net.logic.onConnectError.on(this.onConnectError, this);
        net.logic.onSendTime.on(this.onSendTime, this);
        net.logic.onResponseTime.on(this.onResponseTime, this);
        Laya.timer.frameLoop(20, this,  this.onLoop);
    }

    onConnect()
    {
        this.isConnnected = true;
        this.isTryConnecting = false;
        
        if(this.isLogined)
        {
            fgui.GRoot.inst.closeModalWait();
        }
    }

    onConnectError()
    {
        this.isConnnected = false;
        this.isTryConnecting = false;
        
        if(this.isLogined)
        {
            Game.system.toastText(TEXT.NET_ERROR);
            
            // Game.system.alrtTextFull(TEXT.NET_ERROR, "", this, this.onClickConnect, "重新连接", false, true, true);
        }
    }

    onClose()
    {
        this.isConnnected = false;
        this.isTryConnecting = false;

        if(this.isLogined)
        {

        }
    }


    onReconnect()
    {
        this.isConnnected = false;
        this.isTryConnecting = true;
        
        if(this.isLogined)
        {
            fgui.GRoot.inst.showModalWait();
        }
    }

    onClickConnect()
    {
    }


    private lastSendFrame = 0;
    private lastResponseFrame = 0;
    private lastMsgSuccess: boolean = true;
    onSendTime()
    {
        if(this.lastMsgSuccess)
        {
            this.lastSendFrame = Laya.timer.currFrame;
        }
        this.lastMsgSuccess = false;
    }

    onResponseTime()
    {
        this.lastResponseFrame = Laya.timer.currFrame;
        this.lastMsgSuccess = true;

        if(this.timeOutShowModelWait)
        {
            fgui.GRoot.inst.closeModalWait();
            this.timeOutShowModelWait = false;
        }
    }


    private lastShowErrorFrame: number = 0;
    private timeOutShowModelWait: boolean = true;
    onLoop()
    {
        
        if(!this.lastMsgSuccess && !this.isTryConnecting)
        {
            if(Laya.timer.currFrame - this.lastShowErrorFrame > 300 && Laya.timer.currFrame - this.lastSendFrame > 300)
            {
                this.lastShowErrorFrame = Laya.timer.currFrame;
                if(!this.timeOutShowModelWait)
                {
                    fgui.GRoot.inst.showModalWait();
                }
                this.timeOutShowModelWait = true;
                this.onConnectError();
            }
        }
    }
}