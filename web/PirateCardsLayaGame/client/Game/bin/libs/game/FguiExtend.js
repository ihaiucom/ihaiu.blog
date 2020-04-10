function FguiExtend()
{

    window.GRoot = fgui.GRoot;
    window.GObject = fgui.GObject;
    window.GComponent = fgui.GComponent;
    window.GImage = fgui.GImage;
    window.GTextField = fgui.GTextField;
    window.GTextInput = fgui.GTextInput;
    window.GRichTextField = fgui.GRichTextField;
    window.GGraph = fgui.GGraph;
    window.GGroup = fgui.GGroup;
    window.GList = fgui.GList;
    window.GLoader = fgui.GLoader;
    window.GMovieClip = fgui.GMovieClip;
    window.GButton = fgui.GButton;
    window.GComboBox = fgui.GComboBox;
    window.GLabel = fgui.GLabel;
    window.GProgressBar = fgui.GProgressBar;
    window.GScrollBar = fgui.GScrollBar;
    window.GSlider = fgui.GSlider;
    window.GObjectPool = fgui.GObjectPool;

    
    fgui.GList.prototype.setItemRenderer = function(method, caller)
    {
        if(caller)
        {
		    this.itemRenderer = Laya.Handler.create(caller, method, null, false);
        }
        else
        {
		    this.itemRenderer = Laya.Handler.create(null, method, null, false);
        }
    }

    
    fgui.GList.prototype.setItemProvider = function(method, caller)
    {
        if(caller)
        {
		    this.itemProvider = Laya.Handler.create(caller, method, null, false);
        }
        else
        {
		    this.itemProvider = Laya.Handler.create(null, method, null, false);
        }
    }

    fgui.GObject.isDelaying = false;
    
    fgui.GObject.prototype.delayOnClick = function(thisObj, listener, args = null)
    {
        this.delayOnClickWithTime(thisObj,listener,500,args);
    }

    fgui.GObject.prototype.delayOnClickWithTime = function(thisObj, listener,delay, args = null)
    {
        let funcName = listener.name;
        let delayFunc = ()=>{
            if(fgui.GObject.isDelaying)
                return;
            fgui.GObject.isDelaying = true;
            Laya.timer.once(delay,null,()=>{
                fgui.GObject.isDelaying = false;
            },null,false)
            thisObj[funcName]()
        }
        this.onClick(thisObj, delayFunc, args);
    }

    fgui.GObject.prototype.delayOffClick = function(thisObj, listener)
    {
        fgui.GObject.isDelaying = false;
        Laya.timer.clearAll(this);
        this.offClick(thisObj,listener);
    }

    fgui.GTextField.prototype.changeText = function(val)
    {
        this._displayObject.changeText(val);
    }

    fgui.GBasicTextField.prototype.changeText = function(val)
    {
        this._displayObject.changeText(val);
    }

    fgui.Image.prototype.drawTextureColor = function(color, alpha)
    {
        if(this.texture)
        {
            this.graphics.clear(false);
            this.graphics.drawTexture(this.texture, 0, 0, this.width, this.height);
            this.graphics.drawTexture(this.texture, 0, 0, this.width, this.height, undefined, alpha, color);
        }
    }

    


// TODO ZF 输入框默认不显示文字
// fgui.GTextInput.prototype.initSize = function()
// {
    
//     if(!this.node) return;
//     for(var i = 0; i < this.node.childrenCount; i ++)
//     {
//         this.node._children[i].width = this.node.width;
//         this.node._children[i].height = this.node.height;
//     }
// }


}



window.FguiExtend = FguiExtend;