import { Stage } from "./display/Stage";
import { Browser } from "./utils/Browser";
import { URL } from "./net/URL";
import { Utils } from "./utils/Utils";
import { Loader } from "./net/Loader";
import { Timer } from "./utils/Timer";
import { LoaderManager } from "./net/LoaderManager";

export class Engine
{
    
	/**@internal*/
	static Stage = Stage;
	/**@internal*/
	static Browser = Browser;
	/**@internal*/
	static Utils = Utils;
	/**@internal*/
	static URL = URL;
	/**@internal*/
	static Event = Event;
	/**@internal*/
	static Loader = Loader;
    static Timer = Timer;

	/** 舞台对象的引用。*/
    static stage: Stage;
	/**@private 系统时钟管理器，引擎内部使用*/
	static systemTimer: Timer = null;
	/**@private 组件的start时钟管理器*/
	static startTimer: Timer = null;
	/**@private 组件的物理时钟管理器*/
	static physicsTimer: Timer = null;
	/**@private 组件的update时钟管理器*/
	static updateTimer: Timer = null;
	/**@private 组件的lateUpdate时钟管理器*/
	static lateTimer: Timer = null;
	/**游戏主时针，同时也是管理场景，动画，缓动等效果时钟，通过控制本时针缩放，达到快进慢播效果*/
	static timer: Timer = null;
	/** 加载管理器的引用。*/
	static loader: LoaderManager = null;


	/**@internal */
    private static _isinit: boolean = false;
    
	/** 当前引擎版本。*/
	static version: string = "2.6.1beta";
    
	/**
	 * 初始化引擎。使用引擎需要先初始化引擎，否则可能会报错。
	 * @param	width 初始化的游戏窗口宽度，又称设计宽度。
	 * @param	height	初始化的游戏窗口高度，又称设计高度。
	 * @param	plugins 插件列表，比如 WebGL（使用WebGL方式渲染）。
	 * @return	返回原生canvas引用，方便对canvas属性进行修改
	 */
    static init(width: number, height: number, ...plugins): any 
    {
		if (this._isinit) return;
        this._isinit = true;
        
		ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = this._arrayBufferSlice);

        Browser.__init__();

        
        URL.rootPath = URL._basePath = this._getUrlPath();
        
        
		//temp TODO 以后分包
		Engine.systemTimer = new Timer(false);
		Timer.gSysTimer = Engine.systemTimer;
		Engine.startTimer = new Timer(false);
		Engine.physicsTimer = new Timer(false);
		Engine.updateTimer = new Timer(false);
		Engine.lateTimer = new Timer(false);
		Engine.timer = new Timer(false);

		Engine.loader = new LoaderManager();
        
    }

    
	/**@internal */
    static _getUrlPath(): string 
    {
		var location: any = Browser.window.location;
		var pathName: string = location.pathname;
		// 索引为2的字符如果是':'就是windows file协议
		pathName = pathName.charAt(2) == ':' ? pathName.substring(1) : pathName;
		return URL.getPath(location.protocol == "file:" ? pathName : location.protocol + "//" + location.host + location.pathname);
    }
    
    
	/**@internal */
    static _arrayBufferSlice(start: number, end: number): ArrayBuffer 
    {
		var arr: any = this;
		var arrU8List: Uint8Array = new Uint8Array(arr, start, end - start);
		var newU8List: Uint8Array = new Uint8Array(arrU8List.length);
		newU8List.set(arrU8List);
		return newU8List.buffer;
	}
}
