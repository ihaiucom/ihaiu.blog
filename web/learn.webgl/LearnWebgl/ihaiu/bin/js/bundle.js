(function () {
	'use strict';

	class Stage {
	    constructor() {
	        this.designWidth = 0;
	        this.designHeight = 0;
	        this.canvasRotation = false;
	        this.canvasDegree = 0;
	    }
	}

	class Browser {
	    static __init__() {
	        if (this._window)
	            return this._window;
	        var win = this._window = window;
	        var doc = this._document = win.document;
	        var u = this.userAgent = win.navigator.userAgent;
	        var platform = win.navigator.platform;
	        var maxTouchPoints = win.navigator.maxTouchPoints || 0;
	        var bodyStyle = doc.body.style;
	        bodyStyle.margin = 0;
	        bodyStyle.overflow = 'hidden';
	        bodyStyle['-webkit-user-select'] = 'none';
	        bodyStyle['-webkit-tap-highlight-color'] = 'rgba(200,200,200,0)';
	        var metas = doc.getElementsByTagName('meta');
	        var i = 0;
	        var flag = false;
	        var content = 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no';
	        while (i < metas.length) {
	            var meta = metas[i];
	            if (meta.name == 'viewport') {
	                meta.content = content;
	                flag = true;
	                break;
	            }
	            i++;
	        }
	        if (!flag) {
	            meta = doc.createElement('meta');
	            meta.name = 'viewport', meta.content = content;
	            doc.getElementsByTagName('head')[0].appendChild(meta);
	        }
	        Browser.onMobile = u.indexOf("Mobile") > -1;
	        Browser.onIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	        Browser.onIPhone = u.indexOf("iPhone") > -1;
	        Browser.onMac = u.indexOf("Mac OS X") > -1;
	        Browser.onIPad = u.indexOf("iPad") > -1 || (platform === 'MacIntel' && maxTouchPoints > 1);
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
	        Browser.onLayaRuntime = !!Browser.window.conch;
	        if (u.indexOf('OPPO') > -1 && u.indexOf('MiniGame') > -1) {
	            Browser.onQGMiniGame = true;
	            Browser.onMiniGame = false;
	        }
	        else if ("qq" in Browser.window && u.indexOf('MiniGame') > -1) {
	            Browser.onQQMiniGame = true;
	            Browser.onMiniGame = false;
	        }
	        else if ("bl" in Browser.window && u.indexOf('MiniGame') > -1) {
	            Browser.onBLMiniGame = true;
	            Browser.onMiniGame = true;
	        }
	        Browser.onVVMiniGame = u.indexOf('VVGame') > -1;
	        Browser.onKGMiniGame = u.indexOf('QuickGame') > -1;
	        if (u.indexOf('AlipayMiniGame') > -1) {
	            Browser.onAlipayMiniGame = true;
	            Browser.onMiniGame = false;
	        }
	        return win;
	    }
	    static createElement(type) {
	        Browser.__init__();
	        return Browser._document.createElement(type);
	    }
	    static getElementById(type) {
	        Browser.__init__();
	        return Browser._document.getElementById(type);
	    }
	    static removeElement(ele) {
	        if (ele && ele.parentNode)
	            ele.parentNode.removeChild(ele);
	    }
	    static now() {
	        return Date.now();
	        ;
	    }
	    static get clientWidth() {
	        Browser.__init__();
	        return Browser._window.innerWidth || Browser._document.body.clientWidth;
	    }
	    static get clientHeight() {
	        Browser.__init__();
	        return Browser._window.innerHeight || Browser._document.body.clientHeight || Browser._document.documentElement.clientHeight;
	    }
	    static get width() {
	        Browser.__init__();
	        return ((Engine.stage && Engine.stage.canvasRotation) ? Browser.clientHeight : Browser.clientWidth) * Browser.pixelRatio;
	    }
	    static get height() {
	        Browser.__init__();
	        return ((Engine.stage && Engine.stage.canvasRotation) ? Browser.clientWidth : Browser.clientHeight) * Browser.pixelRatio;
	    }
	    static get pixelRatio() {
	        if (Browser._pixelRatio < 0) {
	            Browser.__init__();
	            if (Browser.userAgent.indexOf("Mozilla/6.0(Linux; Android 6.0; HUAWEI NXT-AL10 Build/HUAWEINXT-AL10)") > -1)
	                Browser._pixelRatio = 2;
	            else {
	                Browser._pixelRatio = (Browser._window.devicePixelRatio || 1);
	                if (Browser._pixelRatio < 1)
	                    Browser._pixelRatio = 1;
	            }
	        }
	        return Browser._pixelRatio;
	    }
	    static get container() {
	        if (!Browser._container) {
	            Browser.__init__();
	            Browser._container = Browser.createElement("div");
	            Browser._container.id = "layaContainer";
	            Browser._document.body.appendChild(Browser._container);
	        }
	        return Browser._container;
	    }
	    static set container(value) {
	        Browser._container = value;
	    }
	    static get window() {
	        return Browser._window || Browser.__init__();
	    }
	    static get document() {
	        Browser.__init__();
	        return Browser._document;
	    }
	}

	class URL {
	    constructor(url) {
	        this._url = URL.formatURL(url);
	        this._path = URL.getPath(url);
	    }
	    get url() {
	        return this._url;
	    }
	    get path() {
	        return this._path;
	    }
	    static set basePath(value) {
	        URL._basePath = Engine._getUrlPath();
	        URL._basePath = URL.formatURL(value);
	    }
	    static get basePath() {
	        return URL._basePath;
	    }
	    static formatURL(url) {
	        if (!url)
	            return "null path";
	        if (url.indexOf(":") > 0)
	            return url;
	        if (URL.customFormat != null)
	            url = URL.customFormat(url);
	        if (url.indexOf(":") > 0)
	            return url;
	        var char1 = url.charAt(0);
	        if (char1 === ".") {
	            return URL._formatRelativePath(URL._basePath + url);
	        }
	        else if (char1 === '~') {
	            return URL.rootPath + url.substring(1);
	        }
	        else if (char1 === "d") {
	            if (url.indexOf("data:image") === 0)
	                return url;
	        }
	        else if (char1 === "/") {
	            return url;
	        }
	        return URL._basePath + url;
	    }
	    static _formatRelativePath(value) {
	        var parts = value.split("/");
	        for (var i = 0, len = parts.length; i < len; i++) {
	            if (parts[i] == '..') {
	                parts.splice(i - 1, 2);
	                i -= 2;
	            }
	        }
	        return parts.join('/');
	    }
	    static getPath(url) {
	        var ofs = url.lastIndexOf('/');
	        return ofs > 0 ? url.substr(0, ofs + 1) : "";
	    }
	    static getFileName(url) {
	        var ofs = url.lastIndexOf('/');
	        return ofs > 0 ? url.substr(ofs + 1) : url;
	    }
	    static getAdptedFilePath(url) {
	        if (!URL.exportSceneToJson || !url)
	            return url;
	        var i, len;
	        len = URL._adpteTypeList.length;
	        var tArr;
	        for (i = 0; i < len; i++) {
	            tArr = URL._adpteTypeList[i];
	            url = url.replace(tArr[0], tArr[1]);
	        }
	        return url;
	    }
	}
	URL.version = {};
	URL.exportSceneToJson = false;
	URL._basePath = "";
	URL.rootPath = "";
	URL.customFormat = function (url) {
	    var newUrl = URL.version[url];
	    if (!window.conch && newUrl)
	        url += "?v=" + newUrl;
	    return url;
	};
	URL._adpteTypeList = [[".scene3d", ".json"], [".scene", ".json"], [".taa", ".json"], [".prefab", ".json"]];

	class Utils {
	    static toRadian(angle) {
	        return angle * Utils._pi2;
	    }
	    static toAngle(radian) {
	        return radian * Utils._pi;
	    }
	    static toHexColor(color) {
	        if (color < 0 || isNaN(color))
	            return null;
	        var str = color.toString(16);
	        while (str.length < 6)
	            str = "0" + str;
	        return "#" + str;
	    }
	    static getGID() {
	        return Utils._gid++;
	    }
	    static concatArray(source, array) {
	        if (!array)
	            return source;
	        if (!source)
	            return array;
	        var i, len = array.length;
	        for (i = 0; i < len; i++) {
	            source.push(array[i]);
	        }
	        return source;
	    }
	    static clearArray(array) {
	        if (!array)
	            return array;
	        array.length = 0;
	        return array;
	    }
	    static copyArray(source, array) {
	        source || (source = []);
	        if (!array)
	            return source;
	        source.length = array.length;
	        var i, len = array.length;
	        for (i = 0; i < len; i++) {
	            source[i] = array[i];
	        }
	        return source;
	    }
	    static bind(fun, scope) {
	        var rst = fun;
	        rst = fun.bind(scope);
	        ;
	        return rst;
	    }
	    static transPointList(points, x, y) {
	        var i, len = points.length;
	        for (i = 0; i < len; i += 2) {
	            points[i] += x;
	            points[i + 1] += y;
	        }
	    }
	    static parseInt(str, radix = 0) {
	        var result = parseInt(str, radix);
	        if (isNaN(result))
	            return 0;
	        return result;
	    }
	    static getFileExtension(path) {
	        Utils._extReg.lastIndex = path.lastIndexOf(".");
	        var result = Utils._extReg.exec(path);
	        if (result && result.length > 1) {
	            return result[1].toLowerCase();
	        }
	        return null;
	    }
	    static getQueryString(name) {
	        if (Engine.Browser.onMiniGame)
	            return null;
	        if (!window.location || !window.location.search)
	            return null;
	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	        var r = window.location.search.substr(1).match(reg);
	        if (r != null)
	            return unescape(r[2]);
	        return null;
	    }
	}
	Utils.gStage = null;
	Utils._gid = 1;
	Utils._pi = 180 / Math.PI;
	Utils._pi2 = Math.PI / 180;
	Utils._extReg = /\.(\w+)\??/g;
	Utils.parseXMLFromString = function (value) {
	    var rst;
	    value = value.replace(/>\s+</g, '><');
	    rst = (new DOMParser()).parseFromString(value, 'text/xml');
	    if (rst.firstChild.textContent.indexOf("This page contains the following errors") > -1) {
	        throw new Error(rst.firstChild.firstChild.textContent);
	    }
	    return rst;
	};

	class Loader {
	}

	class CallLater {
	    constructor() {
	        this._pool = [];
	        this._map = {};
	        this._laters = [];
	    }
	    _update() {
	        let laters = this._laters;
	        let len = laters.length;
	        if (len > 0) {
	            for (let i = 0, n = len - 1; i <= n; i++) {
	                let handler = laters[i];
	                this._map[handler.key] = null;
	                if (handler.method !== null) {
	                    handler.run();
	                    handler.clear();
	                }
	                this._pool.push(handler);
	                i === n && (n = laters.length - 1);
	            }
	            laters.length = 0;
	        }
	    }
	    _getHandler(caller, method) {
	        var cid = caller ? caller.$_GID || (caller.$_GID = Engine.Utils.getGID()) : 0;
	        var mid = method.$_TID || (method.$_TID = (Engine.Timer._mid++));
	        return this._map[cid + '.' + mid];
	    }
	    callLater(caller, method, args = null) {
	        if (this._getHandler(caller, method) == null) {
	            let handler;
	            if (this._pool.length)
	                handler = this._pool.pop();
	            else
	                handler = new LaterHandler();
	            handler.caller = caller;
	            handler.method = method;
	            handler.args = args;
	            var cid = caller ? caller.$_GID : 0;
	            var mid = method["$_TID"];
	            handler.key = cid + '.' + mid;
	            this._map[handler.key] = handler;
	            this._laters.push(handler);
	        }
	    }
	    runCallLater(caller, method) {
	        var handler = this._getHandler(caller, method);
	        if (handler && handler.method != null) {
	            this._map[handler.key] = null;
	            handler.run();
	            handler.clear();
	        }
	    }
	}
	CallLater.I = new CallLater();
	class LaterHandler {
	    clear() {
	        this.caller = null;
	        this.method = null;
	        this.args = null;
	    }
	    run() {
	        var caller = this.caller;
	        if (caller && caller.destroyed)
	            return this.clear();
	        var method = this.method;
	        var args = this.args;
	        if (method == null)
	            return;
	        args ? method.apply(caller, args) : method.call(caller);
	    }
	}

	class Timer {
	    constructor(autoActive = true) {
	        this.scale = 1;
	        this.currTimer = Date.now();
	        this.currFrame = 0;
	        this._delta = 0;
	        this._lastTimer = Date.now();
	        this._map = [];
	        this._handlers = [];
	        this._temp = [];
	        this._count = 0;
	        autoActive && Timer.gSysTimer && Timer.gSysTimer.frameLoop(1, this, this._update);
	    }
	    get delta() {
	        return this._delta;
	    }
	    _update() {
	        if (this.scale <= 0) {
	            this._lastTimer = Date.now();
	            this._delta = 0;
	            return;
	        }
	        var frame = this.currFrame = this.currFrame + this.scale;
	        var now = Date.now();
	        var awake = (now - this._lastTimer) > 30000;
	        this._delta = (now - this._lastTimer) * this.scale;
	        var timer = this.currTimer = this.currTimer + this._delta;
	        this._lastTimer = now;
	        var handlers = this._handlers;
	        this._count = 0;
	        for (var i = 0, n = handlers.length; i < n; i++) {
	            var handler = handlers[i];
	            if (handler.method !== null) {
	                var t = handler.userFrame ? frame : timer;
	                if (t >= handler.exeTime) {
	                    if (handler.repeat) {
	                        if (!handler.jumpFrame || awake) {
	                            handler.exeTime += handler.delay;
	                            handler.run(false);
	                            if (t > handler.exeTime) {
	                                handler.exeTime += Math.ceil((t - handler.exeTime) / handler.delay) * handler.delay;
	                            }
	                        }
	                        else {
	                            while (t >= handler.exeTime) {
	                                handler.exeTime += handler.delay;
	                                handler.run(false);
	                            }
	                        }
	                    }
	                    else {
	                        handler.run(true);
	                    }
	                }
	            }
	            else {
	                this._count++;
	            }
	        }
	        if (this._count > 30 || frame % 200 === 0)
	            this._clearHandlers();
	    }
	    _clearHandlers() {
	        var handlers = this._handlers;
	        for (var i = 0, n = handlers.length; i < n; i++) {
	            var handler = handlers[i];
	            if (handler.method !== null)
	                this._temp.push(handler);
	            else
	                this._recoverHandler(handler);
	        }
	        this._handlers = this._temp;
	        handlers.length = 0;
	        this._temp = handlers;
	    }
	    _recoverHandler(handler) {
	        if (this._map[handler.key] == handler)
	            this._map[handler.key] = null;
	        handler.clear();
	        Timer._pool.push(handler);
	    }
	    _create(useFrame, repeat, delay, caller, method, args, coverBefore) {
	        if (!delay) {
	            method.apply(caller, args);
	            return null;
	        }
	        if (coverBefore) {
	            var handler = this._getHandler(caller, method);
	            if (handler) {
	                handler.repeat = repeat;
	                handler.userFrame = useFrame;
	                handler.delay = delay;
	                handler.caller = caller;
	                handler.method = method;
	                handler.args = args;
	                handler.exeTime = delay + (useFrame ? this.currFrame : this.currTimer + Date.now() - this._lastTimer);
	                return handler;
	            }
	        }
	        handler = Timer._pool.length > 0 ? Timer._pool.pop() : new TimerHandler();
	        handler.repeat = repeat;
	        handler.userFrame = useFrame;
	        handler.delay = delay;
	        handler.caller = caller;
	        handler.method = method;
	        handler.args = args;
	        handler.exeTime = delay + (useFrame ? this.currFrame : this.currTimer + Date.now() - this._lastTimer);
	        this._indexHandler(handler);
	        this._handlers.push(handler);
	        return handler;
	    }
	    _indexHandler(handler) {
	        var caller = handler.caller;
	        var method = handler.method;
	        var cid = caller ? caller.$_GID || (caller.$_GID = Engine.Utils.getGID()) : 0;
	        var mid = method.$_TID || (method.$_TID = (Timer._mid++) * 100000);
	        handler.key = cid + mid;
	        this._map[handler.key] = handler;
	    }
	    once(delay, caller, method, args = null, coverBefore = true) {
	        this._create(false, false, delay, caller, method, args, coverBefore);
	    }
	    loop(delay, caller, method, args = null, coverBefore = true, jumpFrame = false) {
	        var handler = this._create(false, true, delay, caller, method, args, coverBefore);
	        if (handler)
	            handler.jumpFrame = jumpFrame;
	    }
	    frameOnce(delay, caller, method, args = null, coverBefore = true) {
	        this._create(true, false, delay, caller, method, args, coverBefore);
	    }
	    frameLoop(delay, caller, method, args = null, coverBefore = true) {
	        this._create(true, true, delay, caller, method, args, coverBefore);
	    }
	    toString() {
	        return " handlers:" + this._handlers.length + " pool:" + Timer._pool.length;
	    }
	    clear(caller, method) {
	        var handler = this._getHandler(caller, method);
	        if (handler) {
	            this._map[handler.key] = null;
	            handler.key = 0;
	            handler.clear();
	        }
	    }
	    clearAll(caller) {
	        if (!caller)
	            return;
	        for (var i = 0, n = this._handlers.length; i < n; i++) {
	            var handler = this._handlers[i];
	            if (handler.caller === caller) {
	                this._map[handler.key] = null;
	                handler.key = 0;
	                handler.clear();
	            }
	        }
	    }
	    _getHandler(caller, method) {
	        var cid = caller ? caller.$_GID || (caller.$_GID = Engine.Utils.getGID()) : 0;
	        var mid = method.$_TID || (method.$_TID = (Timer._mid++) * 100000);
	        return this._map[cid + mid];
	    }
	    callLater(caller, method, args = null) {
	        CallLater.I.callLater(caller, method, args);
	    }
	    runCallLater(caller, method) {
	        CallLater.I.runCallLater(caller, method);
	    }
	    runTimer(caller, method) {
	        var handler = this._getHandler(caller, method);
	        if (handler && handler.method != null) {
	            this._map[handler.key] = null;
	            handler.run(true);
	        }
	    }
	    pause() {
	        this.scale = 0;
	    }
	    resume() {
	        this.scale = 1;
	    }
	}
	Timer.gSysTimer = null;
	Timer._pool = [];
	Timer._mid = 1;
	class TimerHandler {
	    clear() {
	        this.caller = null;
	        this.method = null;
	        this.args = null;
	    }
	    run(withClear) {
	        var caller = this.caller;
	        if (caller && caller.destroyed)
	            return this.clear();
	        var method = this.method;
	        var args = this.args;
	        withClear && this.clear();
	        if (method == null)
	            return;
	        args ? method.apply(caller, args) : method.call(caller);
	    }
	}

	class Engine {
	    static init(width, height, ...plugins) {
	        if (this._isinit)
	            return;
	        this._isinit = true;
	        ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = this._arrayBufferSlice);
	        Browser.__init__();
	        URL.rootPath = URL._basePath = this._getUrlPath();
	        Engine.systemTimer = new Timer(false);
	        Timer.gSysTimer = Engine.systemTimer;
	        Engine.startTimer = new Timer(false);
	        Engine.physicsTimer = new Timer(false);
	        Engine.updateTimer = new Timer(false);
	        Engine.lateTimer = new Timer(false);
	        Engine.timer = new Timer(false);
	    }
	    static _getUrlPath() {
	        var location = Browser.window.location;
	        var pathName = location.pathname;
	        pathName = pathName.charAt(2) == ':' ? pathName.substring(1) : pathName;
	        return URL.getPath(location.protocol == "file:" ? pathName : location.protocol + "//" + location.host + location.pathname);
	    }
	    static _arrayBufferSlice(start, end) {
	        var arr = this;
	        var arrU8List = new Uint8Array(arr, start, end - start);
	        var newU8List = new Uint8Array(arrU8List.length);
	        newU8List.set(arrU8List);
	        return newU8List.buffer;
	    }
	}
	Engine.Stage = Stage;
	Engine.Browser = Browser;
	Engine.Utils = Utils;
	Engine.URL = URL;
	Engine.Event = Event;
	Engine.Loader = Loader;
	Engine.Timer = Timer;
	Engine.systemTimer = null;
	Engine.startTimer = null;
	Engine.physicsTimer = null;
	Engine.updateTimer = null;
	Engine.lateTimer = null;
	Engine.timer = null;
	Engine._isinit = false;
	Engine.version = "2.6.1beta";

	class Handler {
	    constructor(caller = null, method = null, args = null, once = false) {
	        this.once = false;
	        this._id = 0;
	        this.setTo(caller, method, args, once);
	    }
	    setTo(caller, method, args, once = false) {
	        this._id = Handler._gid++;
	        this.caller = caller;
	        this.method = method;
	        this.args = args;
	        this.once = once;
	        return this;
	    }
	    run() {
	        if (this.method == null)
	            return null;
	        var id = this._id;
	        var result = this.method.apply(this.caller, this.args);
	        this._id === id && this.once && this.recover();
	        return result;
	    }
	    runWith(data) {
	        if (this.method == null)
	            return null;
	        var id = this._id;
	        if (data == null)
	            var result = this.method.apply(this.caller, this.args);
	        else if (!this.args && !data.unshift)
	            result = this.method.call(this.caller, data);
	        else if (this.args)
	            result = this.method.apply(this.caller, this.args.concat(data));
	        else
	            result = this.method.apply(this.caller, data);
	        this._id === id && this.once && this.recover();
	        return result;
	    }
	    clear() {
	        this.caller = null;
	        this.method = null;
	        this.args = null;
	        return this;
	    }
	    recover() {
	        if (this._id > 0) {
	            this._id = 0;
	            Handler._pool.push(this.clear());
	        }
	    }
	    static create(caller, method, args = null, once = true) {
	        if (Handler._pool.length)
	            return Handler._pool.pop().setTo(caller, method, args, once);
	        return new Handler(caller, method, args, once);
	    }
	}
	Handler._pool = [];
	Handler._gid = 1;

	class EventDispatcher {
	    hasListener(type) {
	        var listener = this._events && this._events[type];
	        return !!listener;
	    }
	    event(type, data = null) {
	        if (!this._events || !this._events[type])
	            return false;
	        var listeners = this._events[type];
	        if (listeners.run) {
	            if (listeners.once)
	                delete this._events[type];
	            data != null ? listeners.runWith(data) : listeners.run();
	        }
	        else {
	            for (var i = 0, n = listeners.length; i < n; i++) {
	                var listener = listeners[i];
	                if (listener) {
	                    (data != null) ? listener.runWith(data) : listener.run();
	                }
	                if (!listener || listener.once) {
	                    listeners.splice(i, 1);
	                    i--;
	                    n--;
	                }
	            }
	            if (listeners.length === 0 && this._events)
	                delete this._events[type];
	        }
	        return true;
	    }
	    on(type, caller, listener, args = null) {
	        return this._createListener(type, caller, listener, args, false);
	    }
	    once(type, caller, listener, args = null) {
	        return this._createListener(type, caller, listener, args, true);
	    }
	    _createListener(type, caller, listener, args, once, offBefore = true) {
	        offBefore && this.off(type, caller, listener, once);
	        var handler = EventHandler.create(caller || this, listener, args, once);
	        this._events || (this._events = {});
	        var events = this._events;
	        if (!events[type])
	            events[type] = handler;
	        else {
	            if (!events[type].run)
	                events[type].push(handler);
	            else
	                events[type] = [events[type], handler];
	        }
	        return this;
	    }
	    off(type, caller, listener, onceOnly = false) {
	        if (!this._events || !this._events[type])
	            return this;
	        var listeners = this._events[type];
	        if (listeners != null) {
	            if (listeners.run) {
	                if ((!caller || listeners.caller === caller) && (listener == null || listeners.method === listener) && (!onceOnly || listeners.once)) {
	                    delete this._events[type];
	                    listeners.recover();
	                }
	            }
	            else {
	                var count = 0;
	                for (var i = 0, n = listeners.length; i < n; i++) {
	                    var item = listeners[i];
	                    if (!item) {
	                        count++;
	                        continue;
	                    }
	                    if (item && (!caller || item.caller === caller) && (listener == null || item.method === listener) && (!onceOnly || item.once)) {
	                        count++;
	                        listeners[i] = null;
	                        item.recover();
	                    }
	                }
	                if (count === n)
	                    delete this._events[type];
	            }
	        }
	        return this;
	    }
	    offAll(type = null) {
	        var events = this._events;
	        if (!events)
	            return this;
	        if (type) {
	            this._recoverHandlers(events[type]);
	            delete events[type];
	        }
	        else {
	            for (var name in events) {
	                this._recoverHandlers(events[name]);
	            }
	            this._events = null;
	        }
	        return this;
	    }
	    offAllCaller(caller) {
	        if (caller && this._events) {
	            for (var name in this._events) {
	                this.off(name, caller, null);
	            }
	        }
	        return this;
	    }
	    _recoverHandlers(arr) {
	        if (!arr)
	            return;
	        if (arr.run) {
	            arr.recover();
	        }
	        else {
	            for (var i = arr.length - 1; i > -1; i--) {
	                if (arr[i]) {
	                    arr[i].recover();
	                    arr[i] = null;
	                }
	            }
	        }
	    }
	    isMouseEvent(type) {
	        return EventDispatcher.MOUSE_EVENTS[type] || false;
	    }
	}
	EventDispatcher.MOUSE_EVENTS = { "rightmousedown": true, "rightmouseup": true, "rightclick": true, "mousedown": true, "mouseup": true, "mousemove": true, "mouseover": true, "mouseout": true, "click": true, "doubleclick": true };
	class EventHandler extends Handler {
	    constructor(caller, method, args, once) {
	        super(caller, method, args, once);
	    }
	    recover() {
	        if (this._id > 0) {
	            this._id = 0;
	            EventHandler._pool.push(this.clear());
	        }
	    }
	    static create(caller, method, args = null, once = true) {
	        if (EventHandler._pool.length)
	            return EventHandler._pool.pop().setTo(caller, method, args, once);
	        return new EventHandler(caller, method, args, once);
	    }
	}
	EventHandler._pool = [];

	class Resource extends EventDispatcher {
	    constructor() {
	        super();
	        this._id = 0;
	        this._url = null;
	        this._cpuMemory = 0;
	        this._gpuMemory = 0;
	        this._destroyed = false;
	        this._referenceCount = 0;
	        this.lock = false;
	        this.name = null;
	        this._id = ++Resource._uniqueIDCounter;
	        this._destroyed = false;
	        this._referenceCount = 0;
	        Resource._idResourcesMap[this.id] = this;
	        this.lock = false;
	    }
	    static get cpuMemory() {
	        return Resource._cpuMemory;
	    }
	    static get gpuMemory() {
	        return Resource._gpuMemory;
	    }
	    static _addCPUMemory(size) {
	        Resource._cpuMemory += size;
	    }
	    static _addGPUMemory(size) {
	        Resource._gpuMemory += size;
	    }
	    static _addMemory(cpuSize, gpuSize) {
	        Resource._cpuMemory += cpuSize;
	        Resource._gpuMemory += gpuSize;
	    }
	    static getResourceByID(id) {
	        return Resource._idResourcesMap[id];
	    }
	    static getResourceByURL(url, index = 0) {
	        return Resource._urlResourcesMap[url][index];
	    }
	    static destroyUnusedResources() {
	        for (var k in Resource._idResourcesMap) {
	            var res = Resource._idResourcesMap[k];
	            if (!res.lock && res._referenceCount === 0)
	                res.destroy();
	        }
	    }
	    get id() {
	        return this._id;
	    }
	    get url() {
	        return this._url;
	    }
	    get cpuMemory() {
	        return this._cpuMemory;
	    }
	    get gpuMemory() {
	        return this._gpuMemory;
	    }
	    get destroyed() {
	        return this._destroyed;
	    }
	    get referenceCount() {
	        return this._referenceCount;
	    }
	    _setCPUMemory(value) {
	        var offsetValue = value - this._cpuMemory;
	        this._cpuMemory = value;
	        Resource._addCPUMemory(offsetValue);
	    }
	    _setGPUMemory(value) {
	        var offsetValue = value - this._gpuMemory;
	        this._gpuMemory = value;
	        Resource._addGPUMemory(offsetValue);
	    }
	    _setCreateURL(url) {
	        url = URL.formatURL(url);
	        if (this._url !== url) {
	            var resList;
	            if (this._url) {
	                resList = Resource._urlResourcesMap[this._url];
	                resList.splice(resList.indexOf(this), 1);
	                (resList.length === 0) && (delete Resource._urlResourcesMap[this._url]);
	            }
	            if (url) {
	                resList = Resource._urlResourcesMap[url];
	                (resList) || (Resource._urlResourcesMap[url] = resList = []);
	                resList.push(this);
	            }
	            this._url = url;
	        }
	    }
	    _addReference(count = 1) {
	        this._referenceCount += count;
	    }
	    _removeReference(count = 1) {
	        this._referenceCount -= count;
	    }
	    _clearReference() {
	        this._referenceCount = 0;
	    }
	    _recoverResource() {
	    }
	    _disposeResource() {
	    }
	    _activeResource() {
	    }
	    destroy() {
	        if (this._destroyed)
	            return;
	        this._destroyed = true;
	        this.lock = false;
	        this._disposeResource();
	        delete Resource._idResourcesMap[this.id];
	        var resList;
	        if (this._url) {
	            resList = Resource._urlResourcesMap[this._url];
	            if (resList) {
	                resList.splice(resList.indexOf(this), 1);
	                (resList.length === 0) && (delete Resource._urlResourcesMap[this._url]);
	            }
	        }
	    }
	}
	Resource._uniqueIDCounter = 0;
	Resource._idResourcesMap = {};
	Resource._urlResourcesMap = {};
	Resource._cpuMemory = 0;
	Resource._gpuMemory = 0;

	class Gid {
	    static getGID() {
	        return this._gid++;
	    }
	}
	Gid._gid = 1;

	class Pool {
	    static getPoolBySign(sign) {
	        return Pool._poolDic[sign] || (Pool._poolDic[sign] = []);
	    }
	    static clearBySign(sign) {
	        if (Pool._poolDic[sign])
	            Pool._poolDic[sign].length = 0;
	    }
	    static recover(sign, item) {
	        if (item["__InPool"])
	            return;
	        item["__InPool"] = true;
	        Pool.getPoolBySign(sign).push(item);
	    }
	    static recoverByClass(instance) {
	        if (instance) {
	            var className = instance["__className"] || instance.constructor._$gid;
	            if (className)
	                Pool.recover(className, instance);
	        }
	    }
	    static createByClass(cls) {
	        return Pool.getItemByClass(Pool._getClassSign(cls), cls);
	    }
	    static _getClassSign(cla) {
	        var className = cla["__className"] || cla["_$gid"];
	        if (!className) {
	            cla["_$gid"] = className = Gid.getGID() + "";
	        }
	        return className;
	    }
	    static getItemByClass(sign, cls) {
	        if (!Pool._poolDic[sign])
	            return new cls();
	        var pool = Pool.getPoolBySign(sign);
	        if (pool.length) {
	            var rst = pool.pop();
	            rst["__InPool"] = false;
	        }
	        else {
	            rst = new cls();
	        }
	        return rst;
	    }
	    static getItemByCreateFun(sign, createFun, caller) {
	        var pool = Pool.getPoolBySign(sign);
	        var rst = pool.length ? pool.pop() : createFun.call(caller);
	        rst["__InPool"] = false;
	        return rst;
	    }
	    static getItem(sign) {
	        var pool = Pool.getPoolBySign(sign);
	        var rst = pool.length ? pool.pop() : null;
	        if (rst) {
	            rst["__InPool"] = false;
	        }
	        return rst;
	    }
	}
	Pool._poolDic = {};

	class Event$1 {
	}
	Event$1.EMPTY = new Event$1();
	Event$1.MOUSE_DOWN = "mousedown";
	Event$1.MOUSE_UP = "mouseup";
	Event$1.CLICK = "click";
	Event$1.RIGHT_MOUSE_DOWN = "rightmousedown";
	Event$1.RIGHT_MOUSE_UP = "rightmouseup";
	Event$1.RIGHT_CLICK = "rightclick";
	Event$1.MOUSE_MOVE = "mousemove";
	Event$1.MOUSE_OVER = "mouseover";
	Event$1.MOUSE_OUT = "mouseout";
	Event$1.MOUSE_WHEEL = "mousewheel";
	Event$1.ROLL_OVER = "mouseover";
	Event$1.ROLL_OUT = "mouseout";
	Event$1.DOUBLE_CLICK = "doubleclick";
	Event$1.CHANGE = "change";
	Event$1.CHANGED = "changed";
	Event$1.RESIZE = "resize";
	Event$1.ADDED = "added";
	Event$1.REMOVED = "removed";
	Event$1.DISPLAY = "display";
	Event$1.UNDISPLAY = "undisplay";
	Event$1.ERROR = "error";
	Event$1.COMPLETE = "complete";
	Event$1.LOADED = "loaded";
	Event$1.READY = "ready";
	Event$1.PROGRESS = "progress";
	Event$1.INPUT = "input";
	Event$1.RENDER = "render";
	Event$1.OPEN = "open";
	Event$1.MESSAGE = "message";
	Event$1.CLOSE = "close";
	Event$1.KEY_DOWN = "keydown";
	Event$1.KEY_PRESS = "keypress";
	Event$1.KEY_UP = "keyup";
	Event$1.FRAME = "enterframe";
	Event$1.DRAG_START = "dragstart";
	Event$1.DRAG_MOVE = "dragmove";
	Event$1.DRAG_END = "dragend";
	Event$1.ENTER = "enter";
	Event$1.SELECT = "select";
	Event$1.BLUR = "blur";
	Event$1.FOCUS = "focus";
	Event$1.VISIBILITY_CHANGE = "visibilitychange";
	Event$1.FOCUS_CHANGE = "focuschange";
	Event$1.PLAYED = "played";
	Event$1.PAUSED = "paused";
	Event$1.STOPPED = "stopped";
	Event$1.START = "start";
	Event$1.END = "end";
	Event$1.COMPONENT_ADDED = "componentadded";
	Event$1.COMPONENT_REMOVED = "componentremoved";
	Event$1.RELEASED = "released";
	Event$1.LINK = "link";
	Event$1.LABEL = "label";
	Event$1.FULL_SCREEN_CHANGE = "fullscreenchange";
	Event$1.DEVICE_LOST = "devicelost";
	Event$1.TRANSFORM_CHANGED = "transformchanged";
	Event$1.ANIMATION_CHANGED = "animationchanged";
	Event$1.TRAIL_FILTER_CHANGE = "trailfilterchange";
	Event$1.TRIGGER_ENTER = "triggerenter";
	Event$1.TRIGGER_STAY = "triggerstay";
	Event$1.TRIGGER_EXIT = "triggerexit";

	class HttpRequest extends EventDispatcher {
	    constructor() {
	        super(...arguments);
	        this._http = new XMLHttpRequest();
	    }
	    get url() {
	        return this._url;
	    }
	    get data() {
	        return this._data;
	    }
	    get http() {
	        return this._http;
	    }
	    send(url, data = null, method = "get", responseType = "text", headers = null) {
	        this._responseType = responseType;
	        this._data = null;
	        if (Browser.onVVMiniGame || Browser.onQGMiniGame || Browser.onQQMiniGame || Browser.onAlipayMiniGame || Browser.onBLMiniGame) {
	            url = HttpRequest._urlEncode(url);
	        }
	        this._url = url;
	        var _this = this;
	        var http = this._http;
	        url = URL.getAdptedFilePath(url);
	        http.open(method, url, true);
	        let isJson = false;
	        if (headers) {
	            for (var i = 0; i < headers.length; i++) {
	                http.setRequestHeader(headers[i++], headers[i]);
	            }
	        }
	        else if (!(window.conch)) {
	            if (!data || typeof (data) == 'string')
	                http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	            else {
	                http.setRequestHeader("Content-Type", "application/json");
	                isJson = true;
	            }
	        }
	        let restype = responseType !== "arraybuffer" ? "text" : "arraybuffer";
	        http.responseType = restype;
	        if (http.dataType) {
	            http.dataType = restype;
	        }
	        http.onerror = function (e) {
	            _this._onError(e);
	        };
	        http.onabort = function (e) {
	            _this._onAbort(e);
	        };
	        http.onprogress = function (e) {
	            _this._onProgress(e);
	        };
	        http.onload = function (e) {
	            _this._onLoad(e);
	        };
	        if (Browser.onBLMiniGame && Browser.onAndroid && !data)
	            data = {};
	        http.send(isJson ? JSON.stringify(data) : data);
	    }
	    _onProgress(e) {
	        if (e && e.lengthComputable)
	            this.event(Event$1.PROGRESS, e.loaded / e.total);
	    }
	    _onAbort(e) {
	        this.error("Request was aborted by user");
	    }
	    _onError(e) {
	        this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText);
	    }
	    _onLoad(e) {
	        var http = this._http;
	        var status = http.status !== undefined ? http.status : 200;
	        if (status === 200 || status === 204 || status === 0) {
	            this.complete();
	        }
	        else {
	            this.error("[" + http.status + "]" + http.statusText + ":" + http.responseURL);
	        }
	    }
	    clear() {
	        var http = this._http;
	        http.onerror = http.onabort = http.onprogress = http.onload = null;
	    }
	    error(message) {
	        this.clear();
	        console.warn(this.url, message);
	        this.event(Event$1.ERROR, message);
	    }
	    complete() {
	        this.clear();
	        var flag = true;
	        try {
	            if (this._responseType === "json") {
	                this._data = JSON.parse(this._http.responseText);
	            }
	            else if (this._responseType === "xml") {
	                this._data = Utils.parseXMLFromString(this._http.responseText);
	            }
	            else {
	                this._data = this._http.response || this._http.responseText;
	            }
	        }
	        catch (e) {
	            flag = false;
	            this.error(e.message);
	        }
	        flag && this.event(Event$1.COMPLETE, this._data instanceof Array ? [this._data] : this._data);
	    }
	}
	HttpRequest._urlEncode = encodeURI;

	class Shader extends Resource {
	    static LoadAsync(path) {
	        return new Promise((resolve) => {
	            this.Load(path, Handler.create(null, (shader) => {
	                resolve(shader);
	            }));
	        });
	    }
	    static Load(path, complete) {
	        var http = Pool.createByClass(HttpRequest);
	        http.once(Event$1.COMPLETE, null, (data) => {
	            data = data.replace(/\r/g, "");
	            var shader = Pool.createByClass(Shader);
	            shader._setCreateURL(path);
	            shader.code = data;
	            complete.runWith(shader);
	            http.offAll(Event$1.COMPLETE);
	            Pool.recoverByClass(http);
	        });
	        http.send(path);
	    }
	}

	var canvas;
	var gl;
	var vertexShaderSource;
	var fragmentShaderSource;
	var vertexShader;
	var fragmentShader;
	var program;
	function createCanvas() {
	    canvas = document.createElement("canvas");
	    var style = canvas.style;
	    style.position = 'absolute';
	    style.top = style.left = "0px";
	    style.background = "#000000";
	    canvas.width = 500;
	    canvas.height = 400;
	    gl = canvas.getContext("webgl");
	    document.body.appendChild(canvas);
	}
	function createShader(gl, type, source) {
	    var shader = gl.createShader(type);
	    gl.shaderSource(shader, source);
	    gl.compileShader(shader);
	    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
	    if (success) {
	        return shader;
	    }
	    console.log(gl.getShaderInfoLog(shader));
	    gl.deleteShader(shader);
	    return null;
	}
	function createProgram(gl, vertextShader, fragmentShader) {
	    var program = gl.createProgram();
	    gl.attachShader(program, vertextShader);
	    gl.attachShader(program, fragmentShader);
	    gl.linkProgram(program);
	    var success = gl.getProgramParameter(program, gl.LINK_STATUS);
	    if (success) {
	        return program;
	    }
	    console.log(gl.getProgramInfoLog(program));
	    gl.deleteProgram(program);
	}
	async function LoadShaderAsync() {
	    var shader = await Shader.LoadAsync("res/shader/Hello.vs");
	    vertexShaderSource = shader.code;
	    var shader = await Shader.LoadAsync("res/shader/Hello.fs");
	    fragmentShaderSource = shader.code;
	}
	async function main() {
	    Engine.init(750, 1334);
	    await LoadShaderAsync();
	    createCanvas();
	    vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
	    fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
	    program = createProgram(gl, vertexShader, fragmentShader);
	    var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
	    var positionBuffer = gl.createBuffer();
	    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
	    var vertexDatas = [
	        0, 0,
	        0, 0.5,
	        0.7, 0
	    ];
	    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexDatas), gl.STATIC_DRAW);
	    function loop() {
	        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
	        gl.clearColor(0, 0, 0, 0);
	        gl.clear(gl.COLOR_BUFFER_BIT);
	        gl.useProgram(program);
	        gl.enableVertexAttribArray(positionAttributeLocation);
	        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
	        var size = 2;
	        var type = gl.FLOAT;
	        var normalize = false;
	        var stride = 0;
	        var offset = 0;
	        gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);
	        var primitiveType = gl.TRIANGLES;
	        var offset = 0;
	        var count = 3;
	        gl.drawArrays(primitiveType, offset, count);
	    }
	    loop();
	}
	main();

}());
