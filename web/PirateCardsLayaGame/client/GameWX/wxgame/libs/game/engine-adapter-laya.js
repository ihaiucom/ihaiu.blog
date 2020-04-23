var Engines,Engine=function(){function Engine(){}return Engine.init=function(){window.Engines=Engines,this.timer=Laya.timer,this.loader=Laya.loader,this.stage=Laya.stage,this.borwer=new Engines.Browser,this.LocalStorage=Laya.LocalStorage,this.Handler=Laya.Handler,this.Loader=Laya.Loader,this.Ease=Laya.Ease,this.Tween=Laya.Tween,this.Stage=Laya.Stage,window.LocalStorage=Laya.LocalStorage,window.Handler=Laya.Handler,window.Loader=Laya.Loader,window.Ease=Laya.Ease,window.Tween=Laya.Tween,window.Stage=Laya.Stage},Engine}();!function(e){var n,r,i,o=function(){function Browser(){}return Browser.prototype.getNetworkType=function(e){var n=this;this.isWXGame?window.wx.getNetworkType({success:function(o){var a;switch(o.networkType){case r.wifi:a=i.wifi;break;case r._4g:a=i._4g;break;case r._3g:case"3gnet":a=i._3g;break;case r._2g:a=i._2g;break;default:a=i.unknown}n._networkType=a,e&&e(n._networkType)},fail:function(){n._networkType=i.none,e&&e(n._networkType)}}):(this._networkType=this._getNetworkType_Web(),e&&e(this._networkType));return this._networkType},Browser.prototype._getNetworkType_Web=function(){var e,n=navigator.userAgent,o=n.match(/NetType\/\w+/)?n.match(/NetType\/\w+/)[0]:"NetType/other";switch(o=o.toLowerCase().replace("nettype/","")){case r.wifi:e=i.wifi;break;case r._4g:e=i._4g;break;case r._3g:case"3gnet":e=i._3g;break;case r._2g:e=i._2g;break;default:e=i.unknown}return e},Object.defineProperty(Browser.prototype,"isLiuHai",{get:function(){return void 0===this._isLiuHai&&(window.innerWidth>window.innerHeight?this._isLiuHai=window.innerHeight/window.innerWidth<=.5:this._isLiuHai=window.innerWidth/window.innerHeight<=.5),this._isLiuHai},enumerable:!0,configurable:!0}),Object.defineProperty(Browser.prototype,"isWXGame",{get:function(){return Laya.Browser.onMiniGame},enumerable:!0,configurable:!0}),Object.defineProperty(Browser.prototype,"isWXGameSubDomain",{get:function(){return void 0===this._isWXGameSubDomain&&(this._isWXGameSubDomain=this.isWXGame&&!!window.wx.getSharedCanvas),this._isWXGameSubDomain},enumerable:!0,configurable:!0}),Object.defineProperty(Browser.prototype,"isBrowser",{get:function(){return"object"==typeof window&&"object"==typeof document&&!this.isWXGame},enumerable:!0,configurable:!0}),Object.defineProperty(Browser.prototype,"isMobile",{get:function(){return Laya.Browser.onMobile},enumerable:!0,configurable:!0}),Object.defineProperty(Browser.prototype,"isNative",{get:function(){return!!window.isConchApp},enumerable:!0,configurable:!0}),Object.defineProperty(Browser.prototype,"language",{get:function(){return this._language?this._language:(this.isWXGame?this._language=window.wx.getSystemInfoSync().language:this.isBrowser?this._language=navigator.languages[1].toLowerCase():this._language=n.CHINESE,this._language)},enumerable:!0,configurable:!0}),Object.defineProperty(Browser.prototype,"languageCode",{get:function(){return this.isBrowser?this._languageCode=navigator.languages[0].toLowerCase():this._languageCode="zh-cn",this._languageCode},enumerable:!0,configurable:!0}),Browser}();e.Browser=o,function(e){e.BROWSER_TYPE_WECHAT="wechat",e.BROWSER_TYPE_WECHAT_GAME="wechatgame",e.BROWSER_TYPE_WECHAT_GAME_SUB="wechatgamesub",e.BROWSER_TYPE_BAIDU_GAME="baidugame",e.BROWSER_TYPE_BAIDU_GAME_SUB="baidugamesub",e.BROWSER_TYPE_QQ_PLAY="qqplay",e.BROWSER_TYPE_ANDROID="androidbrowser",e.BROWSER_TYPE_IE="ie",e.BROWSER_TYPE_QQ="qqbrowser",e.BROWSER_TYPE_MOBILE_QQ="mqqbrowser",e.BROWSER_TYPE_UC="ucbrowser",e.BROWSER_TYPE_UCBS="ucbs",e.BROWSER_TYPE_BAIDU_APP="baiduboxapp",e.BROWSER_TYPE_BAIDU="baidubrowser",e.BROWSER_TYPE_MAXTHON="maxthon",e.BROWSER_TYPE_OPERA="opera",e.BROWSER_TYPE_OUPENG="oupeng",e.BROWSER_TYPE_MIUI="miuibrowser",e.BROWSER_TYPE_FIREFOX="firefox",e.BROWSER_TYPE_SAFARI="safari",e.BROWSER_TYPE_CHROME="chrome",e.BROWSER_TYPE_LIEBAO="liebao",e.BROWSER_TYPE_QZONE="qzone",e.BROWSER_TYPE_SOUGOU="sogou",e.BROWSER_TYPE_360="360",e.BROWSER_TYPE_UNKNOWN="unknown"}(e.BrowserType||(e.BrowserType={})),function(e){e[e.MOBILE_BROWSER=100]="MOBILE_BROWSER",e[e.DESKTOP_BROWSER=101]="DESKTOP_BROWSER",e[e.EDITOR_PAGE=102]="EDITOR_PAGE",e[e.EDITOR_CORE=103]="EDITOR_CORE",e[e.WECHAT_GAME=104]="WECHAT_GAME",e[e.QQ_PLAY=105]="QQ_PLAY",e[e.FB_PLAYABLE_ADS=106]="FB_PLAYABLE_ADS",e[e.BAIDU_GAME=107]="BAIDU_GAME",e[e.VIVO_GAME=108]="VIVO_GAME",e[e.OPPO_GAME=100]="OPPO_GAME"}(e.BrowserPlatform||(e.BrowserPlatform={})),function(e){e.ENGLISH="en",e.CHINESE="zh",e.FRENCH="fr",e.ITALIAN="it",e.GERMAN="de",e.SPANISH="es",e.DUTCH="du",e.RUSSIAN="ru",e.JAPANESE="ja",e.HUNGARIAN="hu",e.PORTUGUESE="pt",e.ARABIC="ar",e.NORWEGIAN="no",e.POLISH="pl",e.TURKISH="tr",e.UKRAINIAN="uk",e.ROMANIAN="ro",e.BULGARIAN="bg",e.UNKNOWN="unknown"}(n=e.BrowserLanguage||(e.BrowserLanguage={})),function(e){e.IOS="iOS",e.ANDROID="Android",e.WINDOWS="Windows",e.MARMALADE="Marmalade",e.LINUX="Linux",e.BADA="Bada",e.BLACKBERRY="Blackberry",e.OSX="OS X",e.WP8="WP8",e.WINRT="WINRT",e.UNKNOWN="Unknown"}(e.BrowserOS||(e.BrowserOS={})),function(e){e.wifi="wifi",e._2g="2g",e._3g="3g",e._4g="5g",e.unknown="unknown",e.none="none"}(r=e.NetworkTypeText||(e.NetworkTypeText={})),function(e){e[e.none=0]="none",e[e.unknown=-1]="unknown",e[e.wifi=1]="wifi",e[e._2g=2]="_2g",e[e._3g=3]="_3g",e[e._4g=4]="_4g"}(i=e.NetworkType||(e.NetworkType={}))}(Engines||(Engines={})),window.Engine=Engine,window.Engines=Engines;