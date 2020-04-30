import { Engine } from "../Engine";

/**
 * <code>Browser</code> 是浏览器代理类。封装浏览器及原生 js 提供的一些功能。
 */
export class Browser 
{
    
    /** 浏览器代理信息。*/
    static userAgent: string;


    private static _window:any;
    private static _document:any;
    private static _container: any;
    private static _pixelRatio:any;
    private static mainCanvas:any;

    
    /** 全局离线画布（非主画布）。主要用来测量字体、获取image数据。*/
    // static canvas: HTMLCanvas;
    /** 全局离线画布上绘图的环境（非主画布）。 */
    static context: CanvasRenderingContext2D;


    
    /** 表示是否在移动设备，包括IOS和安卓等设备内。*/
    static onMobile: boolean;
    /** 表示是否在 IOS 设备内。*/
    static onIOS: boolean;
    /** 表示是否在 Mac 设备。*/
    static onMac: boolean;
    /** 表示是否在 IPhone 设备内。*/
    static onIPhone: boolean;
    /** 表示是否在 IPad 设备内。*/
    static onIPad: boolean;
    /** 表示是否在 Android 设备内。*/
    static onAndroid: boolean;
    /** 表示是否在 Windows Phone 设备内。*/
    static onWP: boolean;
    /** 表示是否在 QQ 浏览器内。*/
    static onQQBrowser: boolean;
    /** 表示是否在移动端 QQ 或 QQ 浏览器内。*/
    static onMQQBrowser: boolean;
    /** 表示是否在 Safari 内。*/
    static onSafari: boolean;
    /** 表示是否在 IE 浏览器内*/
    static onIE: boolean;
    /** 表示是否在 微信 内*/
    static onWeiXin: boolean;
    /** 表示是否在 PC 端。*/
    static onPC: boolean;
    /** 微信小游戏 **/
    static onMiniGame: boolean;
    /** 百度小游戏 **/
    static onBDMiniGame: boolean;
    /** 小米戏小游戏 **/
    static onKGMiniGame: boolean;
    /** OPPO小游戏 **/
    static onQGMiniGame: boolean;
    /** VIVO小游戏 **/
    static onVVMiniGame: boolean;
    /** 阿里小游戏 **/
    static onAlipayMiniGame: boolean;
    /***手机QQ小游戏 */
    static onQQMiniGame: boolean;
    /*** BILIBILI小游戏 */
    static onBLMiniGame:boolean;
    /** @private */
    static onFirefox: boolean;//TODO:求补充
    /** @private */
    static onEdge: boolean;//TODO:求补充
    /** @private */
    static onLayaRuntime: boolean;

    

    
    /** 表示是否支持WebAudio*/
    static supportWebAudio: boolean;
    /** 表示是否支持LocalStorage*/
    static supportLocalStorage: boolean;

    
    /**@internal */
    static __init__(): any 
    {
        if(this._window) return this._window;
        var win = this._window = window;
        var doc = this._document = win.document;
        var u = this.userAgent = win.navigator.userAgent;
        var platform = win.navigator.platform;

        var maxTouchPoints: number = win.navigator.maxTouchPoints || 0;
        
        //强制修改body样式
        var bodyStyle: any = doc.body.style;
        bodyStyle.margin = 0;
        bodyStyle.overflow = 'hidden';
        bodyStyle['-webkit-user-select'] = 'none';
        bodyStyle['-webkit-tap-highlight-color'] = 'rgba(200,200,200,0)';

        //强制修改meta标签，防止开发者写错
        var metas = doc.getElementsByTagName('meta');
        var i: number = 0;
        var flag: boolean = false;
        var content: any = 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no';
        while (i < metas.length) 
        {
            var meta: any = metas[i];
            if (meta.name == 'viewport') 
            {
                meta.content = content;
                flag = true;
                break;
            }
            i++;
        }

        if (!flag) 
        {
            meta = doc.createElement('meta');
            meta.name = 'viewport', meta.content = content;
            doc.getElementsByTagName('head')[0].appendChild(meta);
        }



        //处理兼容性			
        Browser.onMobile = u.indexOf("Mobile") > -1;
        Browser.onIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        Browser.onIPhone = u.indexOf("iPhone") > -1;
        Browser.onMac = u.indexOf("Mac OS X") > -1;
        Browser.onIPad = u.indexOf("iPad") > -1 || ( platform === 'MacIntel' && maxTouchPoints >1 );//"platform === 'MacIntel' && maxTouchPoints >1" is a temporary solution，maybe accidentally injure other platform.
        Browser.onAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
        Browser.onWP = u.indexOf("Windows Phone") > -1;
        Browser.onQQBrowser = u.indexOf("QQBrowser") > -1;
        Browser.onMQQBrowser = u.indexOf("MQQBrowser") > -1 || (u.indexOf("Mobile") > -1 && u.indexOf("QQ") > -1);
        Browser.onIE = !!win.ActiveXObject || "ActiveXObject" in win;
        Browser.onWeiXin = u.indexOf('MicroMessenger') > -1;
        Browser.onSafari = u.indexOf("Safari") > -1;
        Browser.onPC = !Browser.onMobile;
        Browser.onMiniGame = u.indexOf('MiniGame') > -1;
        Browser.onBDMiniGame = u.indexOf('SwanGame') > -1;
        Browser.onLayaRuntime = ! !((<any>Browser.window)).conch;
        if (u.indexOf('OPPO') > -1 && u.indexOf('MiniGame') > -1) {
            Browser.onQGMiniGame = true;//OPPO环境判断
            Browser.onMiniGame = false;
        } else if ("qq" in Browser.window && u.indexOf('MiniGame') > -1) {
            Browser.onQQMiniGame = true;//手机QQ环境判断
            Browser.onMiniGame = false;
        }else if("bl" in Browser.window&& u.indexOf('MiniGame') > -1){
            Browser.onBLMiniGame=true;//B站环境判断
            Browser.onMiniGame=true;
        }
        Browser.onVVMiniGame = u.indexOf('VVGame') > -1;//vivo
        Browser.onKGMiniGame = u.indexOf('QuickGame') > -1;//小米运行环境判断
        if (u.indexOf('AlipayMiniGame') > -1) {
            Browser.onAlipayMiniGame = true;//阿里小游戏环境判断
            Browser.onMiniGame = false;
        }


        return win;

    }

    
    /**
     * 创建浏览器原生节点。
     * @param	type 节点类型。
     * @return	创建的节点对象的引用。
     */
    static createElement(type: string): any {
        Browser.__init__();
        return Browser._document.createElement(type);
    }

    /**
     * 返回 Document 对象中拥有指定 id 的第一个对象的引用。
     * @param	type 节点id。
     * @return	节点对象。
     */
    static getElementById(type: string): any {
        Browser.__init__();
        return Browser._document.getElementById(type);
    }

    /**
     * 移除指定的浏览器原生节点对象。
     * @param	type 节点对象。
     */
    static removeElement(ele: any): void {
        if (ele && ele.parentNode) ele.parentNode.removeChild(ele);
    }
    
    /**
     * 获取浏览器当前时间戳，单位为毫秒。
     */
    static now(): number 
    {
        return Date.now();;
    }

    
    /**
     * 浏览器窗口可视宽度。
     * 通过分析浏览器信息获得。浏览器多个属性值优先级为：window.innerWidth(包含滚动条宽度) > document.body.clientWidth(不包含滚动条宽度)，如果前者为0或为空，则选择后者。
     */
    static get clientWidth(): number {
        Browser.__init__();
        return Browser._window.innerWidth || Browser._document.body.clientWidth;
    }

    /**
     * 浏览器窗口可视高度。
     * 通过分析浏览器信息获得。浏览器多个属性值优先级为：window.innerHeight(包含滚动条高度) > document.body.clientHeight(不包含滚动条高度) > document.documentElement.clientHeight(不包含滚动条高度)，如果前者为0或为空，则选择后者。
     */
    static get clientHeight(): number {
        Browser.__init__();
        return Browser._window.innerHeight || Browser._document.body.clientHeight || Browser._document.documentElement.clientHeight;
    }

    /** 浏览器窗口物理宽度。考虑了设备像素比。*/
    static get width(): number {
        Browser.__init__();
        return ((Engine.stage && Engine.stage.canvasRotation) ? Browser.clientHeight : Browser.clientWidth) * Browser.pixelRatio;
    }

    /** 浏览器窗口物理高度。考虑了设备像素比。*/
    static get height(): number {
        Browser.__init__();
        return ((Engine.stage && Engine.stage.canvasRotation) ? Browser.clientWidth : Browser.clientHeight) * Browser.pixelRatio;
    }

    /** 获得设备像素比。*/
    static get pixelRatio(): number {
        if (Browser._pixelRatio < 0) {
            Browser.__init__();
            if (Browser.userAgent.indexOf("Mozilla/6.0(Linux; Android 6.0; HUAWEI NXT-AL10 Build/HUAWEINXT-AL10)") > -1) Browser._pixelRatio = 2;
            else {
                Browser._pixelRatio = (Browser._window.devicePixelRatio || 1);
                if (Browser._pixelRatio < 1) Browser._pixelRatio = 1;
            }
        }
        return Browser._pixelRatio;
    }

    
    /**画布容器，用来盛放画布的容器。方便对画布进行控制*/
    static get container(): any {
        if (!Browser._container) {
            Browser.__init__();
            Browser._container = Browser.createElement("div");
            Browser._container.id = "layaContainer";
            Browser._document.body.appendChild(Browser._container);
        }
        return Browser._container;
    }

    static set container(value: any) {
        Browser._container = value;
    }

    /**浏览器原生 window 对象的引用。*/
    static get window(): any {
        return Browser._window || Browser.__init__();
    }

    /**浏览器原生 document 对象的引用。*/
    static get document(): any {
        Browser.__init__();
        return Browser._document;
    }
}