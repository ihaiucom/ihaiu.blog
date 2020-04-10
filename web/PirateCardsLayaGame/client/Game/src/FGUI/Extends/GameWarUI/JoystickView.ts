/*
 * @Descripttion: 
 * @version: 
 * @Author: ZengFeng
 * @Date: 2019-09-20 17:04:52
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-14 11:27:16
 */
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import JoystickViewStruct from "../../Generates/GameWarUI/JoystickViewStruct";
import Game from "../../../Game";
import { JoystickData, InputManager } from "../../../GameWar/Logic/Utils/InputManager";
import IntMath from "../../../GameWar/CoreLib/IntMath/IntMath";

// import InputDirectionState from "../../../GameInput/Base/InputDirectionState";
// import WarLogic from "../../../GameWarLogic/WarLogic";
// import { MobileKeyType } from "../../../GameInput/Enum/MobileKeyType";
// import InputKeyCodeState from "../../../GameInput/Base/InputKeyCodeState";

export default class JoystickView extends JoystickViewStruct
{
    private _InitX: number;
    private _InitY: number;
    private _button: fgui.GButton;
    private _touchArea: fgui.GObject;
    private _thumb: fgui.GObject;
    private _center: fgui.GObject;
    private _curPos: Laya.Point;
    // private _tweener: cc.Tween;
    
    public static JoystickMoving: string = "JoystickMoving";
    public static JoystickUp: string = "JoystickUp";

    public radius: number;
    private touchId: int = -1;
    public joystickData: JoystickData = new JoystickData();

    // 窗口初始化完毕
    onWindowInited(): void
    {
        window["aaa"] = this;
        
        
        let scale = 1;
        this.setScale(scale, scale);

        this._button = this.m_btnJoystick;
        this._button.touchable = false;
        this._button.changeStateOnClick = false;
        this._touchArea = this.m_imgTouchArea;
        this._center = this.m_imgCenter;
        this._thumb = this._button.getChild("imgThumb");

        this._InitX = this._center.x;
        this._InitY = this._center.y;
        this.radius = 80;
        this.alpha = 0.3;

        // this._tweener = new cc.Tween();
        // this._tweener.to(300, { x: this._InitX,y: this._InitY}, {progress:null, easing: 'circOut'});
        // this._tweener.call(()=>{
        //     this._button.selected = false;
        //     this._thumb.rotation = 0;
        //     this._center.visible = true;
        //     this._center.x = this._InitX;
        //     this._center.y = this._InitY;
        // })
        
        this._curPos = new Laya.Point();
        this.m_labDegree.text = "Degree：" + 0;
    }

    // 窗口显示
    onWindowShow(): void
    {
        this._touchArea.on(Laya.Event.MOUSE_DOWN, this, this.onTouchDown);
        // cc.game.on(cc.game.EVENT_HIDE, this.onGameHide, this);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this._touchArea.off(Laya.Event.MOUSE_DOWN, this, this.onTouchDown);
        // cc.game.off(cc.game.EVENT_HIDE, this.onGameHide, this);
        this.clear();
    }

    private onGameHide()
    {
        this.clear();
    }
    

    private clear()
    {
        this.touchId = -1;
        this._button.selected = false;
        this._thumb.rotation = 0;
        this._center.x = this._InitX;
        this._center.y = this._InitY;
        this._button.x = this._InitX;
        this._button.y = this._InitY;
        this.alpha = 0.3;

        this.joystickData.touching = false;
        this.joystickData.position.x = 0;
        this.joystickData.position.y = 0;
        this.joystickData.yaw = 0;
        InputManager.Get().updateMoveJoystick(this.joystickData);
        this.m_labDegree.text = "Degree：" + 0;


        
        fgui.GRoot.inst.off(Laya.Event.MOUSE_MOVE, this,this.OnTouchMove);
        fgui.GRoot.inst.off(Laya.Event.MOUSE_UP, this, this.OnTouchUp);
        // fgui.GRoot.inst.off(Laya.Event.MOUSE_OUT,this, this.OnTouchCancel);
    }

    private onTouchDown(evt: Laya.Event) 
    {
        this.touchId = evt.touchId;
        this._center.visible = true;
        this._button.selected = true;
        this.alpha = 1.0;

        this.joystickData.touching = true;
        this.joystick(evt);
        
        console.log(evt);

        fgui.GRoot.inst.on(Laya.Event.MOUSE_MOVE, this,this.OnTouchMove);
        fgui.GRoot.inst.on(Laya.Event.MOUSE_UP, this, this.OnTouchUp);
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
        if(evt.touchId == this.touchId) 
        {
            this.joystick(evt);
        }
    }

  
    private joystick(evt: Laya.Event): void 
    {
        // this._curPos.x = evt.stageX;
        // this._curPos.y = evt.stageY;
        this._curPos = this._center.parent.globalToLocal(evt.stageX, evt.stageY, this._curPos);

        var bx: number = this._curPos.x + this.pivotX * this.width;
        var by: number = this._curPos.y + this.pivotY * this.height;
        var deltaX: number = bx - this._InitX;
        var deltaY: number = by - this._InitY;

        this._curPos.x = deltaX;
        this._curPos.y = deltaY;
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
        this._thumb.rotation = angle + 90;
        this._button.x = this._InitX + this._curPos.x * this.radius;
        this._button.y = this._InitY + this._curPos.y * this.radius;
        this.m_labDegree.text = "angle" + this.joystickData.yaw;
        
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
}