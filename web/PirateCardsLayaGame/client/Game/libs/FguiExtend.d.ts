declare namespace fgui
{
    interface GList
    {
        setItemRenderer(method:Function, caller:any): void
        setItemProvider(method:Function, caller:any): void
    }

    interface GObject
    {
        /**延时按钮，防止频繁点击(时间间隔500ms) */
        delayOnClick(thisObj: any, listener: Function, args?: any[]): void;
        /**延时按钮，防止频繁点击(时间间隔delay ms),取消监听调用 delayOffClick*/
        delayOnClickWithTime(thisObj: any, listener: Function,delayTime: number, args?: any[]): void;
        delayOffClick(thisObj: any, listener: Function): void;
        
    }

    interface GTextField
    {
        changeText(val: string): void
    }

    interface GBasicTextField
    {
        changeText(val: string): void
    }

    interface Image
    {
        drawTextureColor(color:string, alpha:number): void
    }
}


declare class GRoot extends fgui.GRoot {}
declare class GObject extends fgui.GObject {}
declare class GComponent extends fgui.GComponent {}
declare class GImage extends fgui.GImage {}
declare class GTextField extends fgui.GTextField {}
declare class GTextInput extends fgui.GTextInput {}
declare class GRichTextField extends fgui.GRichTextField {}
declare class GGraph extends fgui.GGraph {}
declare class GGroup extends fgui.GGroup {}
declare class GLoader extends fgui.GLoader {}
declare class GList extends fgui.GList {}
declare class GMovieClip extends fgui.GMovieClip {}
declare class GButton extends fgui.GButton {}
declare class GComboBox extends fgui.GComboBox {}
declare class GLabel extends fgui.GLabel {}
declare class GProgressBar extends fgui.GProgressBar {}
declare class GScrollBar extends fgui.GScrollBar {}
declare class GSlider extends fgui.GSlider {}
declare class GObjectPool extends fgui.GObjectPool {}

declare function FguiExtend(): void;

