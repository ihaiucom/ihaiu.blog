function FguiExtend(){window.GRoot=fgui.GRoot,window.GObject=fgui.GObject,window.GComponent=fgui.GComponent,window.GImage=fgui.GImage,window.GTextField=fgui.GTextField,window.GTextInput=fgui.GTextInput,window.GRichTextField=fgui.GRichTextField,window.GGraph=fgui.GGraph,window.GGroup=fgui.GGroup,window.GList=fgui.GList,window.GLoader=fgui.GLoader,window.GMovieClip=fgui.GMovieClip,window.GButton=fgui.GButton,window.GComboBox=fgui.GComboBox,window.GLabel=fgui.GLabel,window.GProgressBar=fgui.GProgressBar,window.GScrollBar=fgui.GScrollBar,window.GSlider=fgui.GSlider,window.GObjectPool=fgui.GObjectPool,fgui.GList.prototype.setItemRenderer=function(i,e){this.itemRenderer=e?Laya.Handler.create(e,i,null,!1):Laya.Handler.create(null,i,null,!1)},fgui.GList.prototype.setItemProvider=function(i,e){this.itemProvider=e?Laya.Handler.create(e,i,null,!1):Laya.Handler.create(null,i,null,!1)},fgui.GObject.isDelaying=!1,fgui.GObject.prototype.delayOnClick=function(i,e,t=null){this.delayOnClickWithTime(i,e,500,t)},fgui.GObject.prototype.delayOnClickWithTime=function(i,e,t,o=null){let n=e.name;this.onClick(i,()=>{fgui.GObject.isDelaying||(fgui.GObject.isDelaying=!0,Laya.timer.once(t,null,()=>{fgui.GObject.isDelaying=!1},null,!1),i[n]())},o)},fgui.GObject.prototype.delayOffClick=function(i,e){fgui.GObject.isDelaying=!1,Laya.timer.clearAll(this),this.offClick(i,e)},fgui.GTextField.prototype.changeText=function(i){this._displayObject.changeText(i)},fgui.GBasicTextField.prototype.changeText=function(i){this._displayObject.changeText(i)},fgui.Image.prototype.drawTextureColor=function(i,e){this.texture&&(this.graphics.clear(!1),this.graphics.drawTexture(this.texture,0,0,this.width,this.height),this.graphics.drawTexture(this.texture,0,0,this.width,this.height,void 0,e,i))}}window.FguiExtend=FguiExtend;