/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import JoystickViewStruct from "../../Generates/GameWar3DUI/JoystickViewStruct";
import { JoystickData, InputManager } from "../../../GameWar/Logic/Utils/InputManager";
import IntMath from "../../../GameWar/CoreLib/IntMath/IntMath";
import { War } from "../../../GameWar/Logic/War";
import Game from "../../../Game";
import { GuideGroup } from "../../../GameModule/DataModels/GuideModel";
import { GuideHelper } from "../../../GameModule/GuideModule/GuideHelper";
import MenuLayer from "../../../GameFrame/Menu/MenuLayer";
import GameEventKey from "../../../GameEventKey";
import GameLog, { EnumLogLevel } from "../../../GameLog";

export default class JoystickView extends JoystickViewStruct
{
    private _InitX: number;
    private _InitY: number;
    private _button: fgui.GButton;
    private _center: fgui.GObject;
    private _curPos: Laya.Point;
    
    public static JoystickMoving: string = "JoystickMoving";
    public static JoystickUp: string = "JoystickUp";

    public radius: number;
    private touchId: int = -1;
    public joystickData: JoystickData = new JoystickData();
    private m_iMagSqr : number = 0;
    /** 表示引导发送移动指令多少次 */
    private _guideMoveCount = 0;
    /** 表示当前出否处于引导 */
    private _isGuiding = false;

    /** 循环次数 */
    private count:number = 0;

    private _beforeParent : any = null;

    // 窗口初始化完毕
    onWindowInited(): void
    {
        this._button = this.m_btnJoystick;
        this._button.touchable = false;
        this._button.changeStateOnClick = false;
        this._center = this.m_imgCenter;

        this._InitX = this._center.x;
        this._InitY = this._center.y;
        this.radius = 80;
        this.m_imgCenter.alpha   = 0.3;
        this.m_btnJoystick.alpha = 0.3;
        this.m_iMagSqr = 0;
        this._curPos = new Laya.Point();
        this._beforeParent = null;
        this._guideMoveCount = 0;
        this._isGuiding = false;
    }

    // 窗口显示
    onWindowShow(): void
    {
        this.m_imgTouchArea.on(Laya.Event.MOUSE_DOWN, this, this.onTouchDown);

        Laya.timer.once(50, this, this.CheckIsGuide);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.m_imgTouchArea.off(Laya.Event.MOUSE_DOWN, this, this.onTouchDown);
        this.clear();
    }

    /**
     * 刷新网络，电量
     */
    updateView(): void
    {
        this.count++;

        if (this.count == 10) 
        {
            this.count = 0;
            this.m_labPing.changeText(War.setting.ping + "ms");
        }
    }

    clear()
    {
        this.touchId = -1;
        this._button.selected = false;
        this._center.x = this._InitX;
        this._center.y = this._InitY;
        this._button.x = this._InitX;
        this._button.y = this._InitY;
        this.m_imgCenter.alpha   = 0.3;
        this.m_btnJoystick.alpha = 0.3;
        this.m_iMagSqr = 0;

        this.joystickData.touching = false;
        this.joystickData.position.x = 0;
        this.joystickData.position.y = 0;
        this.joystickData.yaw = 0;
        InputManager.Get().updateMoveJoystick(this.joystickData);


        
        // fgui.GRoot.inst.off(Laya.Event.MOUSE_MOVE, this,this.OnTouchMove);
        // fgui.GRoot.inst.off(Laya.Event.MOUSE_UP, this, this.OnTouchUp);
        // fgui.GRoot.inst.off(Laya.Event.MOUSE_OUT, this, this.OnTouchUp);

        Laya.stage.off(Laya.Event.MOUSE_MOVE, this,this.OnTouchMove);
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this.OnTouchUp);
        Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.OnTouchUp);
    }

    public ChangeAlpha(alpha : number)
    {
        this.m_imgCenter.alpha   = alpha;
        this.m_btnJoystick.alpha = alpha;
    }

    private onTouchDown(evt: Laya.Event) 
    {
        this.touchId = evt.touchId;
        this._center.visible = true;
        this._button.selected = true;
        this.m_imgCenter.alpha   = 1.0;
        this.m_btnJoystick.alpha = 1.0;

        this.joystickData.touching = true;
        this.joystick(evt);
        
        // fgui.GRoot.inst.on(Laya.Event.MOUSE_MOVE, this,this.OnTouchMove);
        // fgui.GRoot.inst.on(Laya.Event.MOUSE_UP, this, this.OnTouchUp);
        // fgui.GRoot.inst.on(Laya.Event.MOUSE_OUT, this, this.OnTouchUp);

        Laya.stage.on(Laya.Event.MOUSE_MOVE, this,this.OnTouchMove);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.OnTouchUp);
        Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.OnTouchUp);
    }

    private OnTouchCancel(evt: Laya.Event): void 
    {
        if(evt.touchId == this.touchId)
        {
            this.clear();
        }
    }

    private OnTouchUp(evt: Laya.Event): void 
    {
        if(evt.touchId == this.touchId)
        {
            this.clear();
        }
    }

    private OnTouchMove(evt: Laya.Event): void 
    {
        // console.log("touch", evt.touchId, this.touchId);
        if(evt.touchId == this.touchId) 
        {
            this.joystick(evt);
        }
    }

  
    private joystick(evt: Laya.Event): void 
    {
        this._curPos = this._center.parent.globalToLocal(evt.stageX, evt.stageY, this._curPos);
        // console.log(this._curPos, this._InitX, this._InitY, this.pivotX, this.pivotY, this.width, this.height);

        var bx: number = this._curPos.x + this.pivotX * this.width;
        var by: number = this._curPos.y + this.pivotY * this.height;
        var deltaX: number = bx - this._InitX;
        var deltaY: number = by - this._InitY;

        this._curPos.x = deltaX;
        this._curPos.y = deltaY;
        this.m_iMagSqr =  Math.sqrt(this.magSqr);
        this.NormalizeSelf();

        
        this._curPos.y *= -1;
        this.joystickData.position.x = Math.round(this._curPos.x * IntMath.BaseCalFactor);
        this.joystickData.position.y = Math.round(this._curPos.y * IntMath.BaseCalFactor);
        let angle = Math.asin(this._curPos.x) * 57.2958;
        if(angle == 0 && this._curPos.y < 0)  angle = 180;
        if(this._curPos.x > 0 && this._curPos.y < 0) angle = 180 - angle;
        if(this._curPos.x < 0 && this._curPos.y > 0) angle = 360 + angle;
        if(this._curPos.x < 0 && this._curPos.y < 0) angle = 180 - angle;
        this.joystickData.yaw = Math.round(angle);



        this._curPos.y *= -1;
        this._button.x = this._InitX + this._curPos.x * Math.min(this.m_iMagSqr, this.radius);
        this._button.y = this._InitY + this._curPos.y * Math.min(this.m_iMagSqr, this.radius);
        
        Game.event.dispatch(GameEventKey.GameFrame_GuideJoystickFinish);
    
        InputManager.Get().updateMoveJoystick(this.joystickData);
    }

    
    private NormalizeSelf()
    {
        let b = Math.sqrt(this.magSqr);
        if(b == 0) {
            return;
        }
        this._curPos.x = this._curPos.x / b;
        this._curPos.y = this._curPos.y / b;
    }
    
    private get magSqr():number 
    {
        return this._curPos.x * this._curPos.x + this._curPos.y * this._curPos.y;
    }

    /**
     * 检查是否应该进入引导
     */
    private CheckIsGuide() : boolean
    {
        let model = Game.moduleModel.guide;
        if(!model)
        {
            return;
        }
        let data = model.GetData(GuideGroup.PVE_BATTLE);
        if(!data || data.isOver) // || !(data.progress == 4) 
        {
            return;
        }
        Game.event.add(GameEventKey.GameBattle_onShowGameStart, this.DoGuide, this);
        // this.DoGuide();
    }

    private DoGuide()
    {
        this.alpha = 1;
        this._isGuiding = true;
        let pos = GuideHelper.GetObjGlobalPosInLeftTopPovit(this); //this.parent.localToGlobal(this.x, this.y);
        Game.system.guideMgr.ChangeGuideDialog(pos.x, pos.y, 0, 0);

        this._beforeParent = this.parent;
        GuideHelper.ChangeObjParent(this, Game.system.guideMgr.otherNode);
        Game.event.add(GameEventKey.GameFrame_GuideJoystickFinish, this.FinishJoystickGuide, this);
        Game.event.add(GameEventKey.GameFrame_GuideFirSkillEnd, this.JoystickBack, this);
    }

    private FinishJoystickGuide()
    {
        let model = Game.moduleModel.guide;
        if(!model)
        {
            return;
        }
        model.DataGotoNextStep(GuideGroup.PVE_BATTLE);
        Game.event.remove(GameEventKey.GameFrame_GuideJoystickFinish, this.FinishJoystickGuide, this);
    }

    private JoystickBack()
    {
        if(!this._beforeParent)
        {
            GameLog.Log(EnumLogLevel.Error, "JoystickView, JoystickBack error");
        }
        GuideHelper.ChangeObjParent(this, this._beforeParent);
        Game.event.remove(GameEventKey.GameFrame_GuideFirSkillEnd, this.JoystickBack, this);
    }
}