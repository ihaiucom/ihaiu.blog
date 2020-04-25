function LayaExtendClass(){Laya.Stage.prototype.sResize=new Signal,window.Vector2=Laya.Vector2,window.Vector3=Laya.Vector3,window.Vector4=Laya.Vector4}function LayaExtendLogic(){Laya.stage.on(Laya.Event.RESIZE,null,function(){Laya.stage.sResize.dispatch()}),LayaExtendLogic_ResourceVersion(),LayaExtendLogic_URL(),LayaExtendLogic_Sound()}function LayaExtendLogic_ResourceVersion(){if(!Laya.ResourceVersion.__IsReplaceFun){Laya.ResourceVersion.__IsReplaceFun=!0;var a=Laya.ResourceVersion;a.src_addVersionPrefix=a.addVersionPrefix,a.addVersionPrefix=function(e){e=Laya.URL.getAdptedFilePath(e);var t=AssetUrlCache.GetVerpathByPath(e);if(t)return t;if(Laya.MiniFileMgr&&Laya.MiniFileMgr.isLocalNativeFile(e))t=e;else{var n=e.toLowerCase();t=a.manifest&&a.manifest[n]?a.src_addVersionPrefix(n):a.src_addVersionPrefix(e)}return AssetUrlCache.SetPathAndVerpath(e,t),t}}}function LayaExtendLogic_Laya3D(){var a=Laya.Laya3D;a&&(a.__IsReplaceFun||(a.__IsReplaceFun=!0,a.src_formatRelativePath=a.formatRelativePath,a.formatRelativePath=function(e,t){return-1!=t.indexOf("res3d/Conventional/")?t:-1!=t.indexOf(e)?t:a.src_formatRelativePath(e,t)}))}function LayaExtendLogic_URL(){if(!Laya.URL.__IsReplaceFun){Laya.URL.__IsReplaceFun=!0;var a=Laya.URL;a.src_formatURL=a.formatURL,a.formatURL=function(e){if(e.indexOf(":")>0)return e;var t=AssetUrlCache.GetUrlByPath(e);return t||(t=Laya.MiniFileMgr&&Laya.MiniFileMgr.isLocalNativeFile(e)?e:window.VersionConfig&&VersionConfig.IsUseCdnList?LayaExtendLogic_URL_formatURL(e):a.src_formatURL(e),AssetUrlCache.SetPathAndUrl(e,t),t)}}}var __formatURLCacheMap={},__formatURLIndex=0;function LayaExtendLogic_URL_formatURL(a){if(!a)return"null path";if(a.indexOf(":")>0)return a;var e=a;if(__formatURLCacheMap[a])return __formatURLCacheMap[a];var t=Laya.URL;if(null!=t.customFormat&&(a=t.customFormat(a)),a.indexOf(":")>0)return a;var n=a.charAt(0);if("."===n)return t._formatRelativePath(t._basePath+a);if("~"===n)return t.rootPath+a.substring(1);if("d"===n){if(0===a.indexOf("data:image"))return a}else if("/"===n)return a;var i=++__formatURLIndex%VersionConfig.CDNList.length,r=VersionConfig.CDNList[i]+VersionConfig.RootPath+a;return __formatURLCacheMap[e]=r,r}function LayaExtendLogic_Sound(){if(Laya.MiniSoundChannel&&!Laya.MiniSoundChannel.__IsReplaceFun){Laya.MiniSoundChannel.__IsReplaceFun=!0;var a=Laya.SoundManager,e=Laya.MiniSound,t=Laya.MiniSoundChannel,n=Laya.MiniAdpter,i=Laya.MiniFileMgr;a.__soundChannelCache=new Map,a.getSoundChannelCache=function(e){if(!a.__soundChannelCache.has(e))return null;var t=a.__soundChannelCache.get(e);if(0==t.length)return null;var n=t.shift();return n._audio?n:null},a.addSoundChannelCache=function(e){var t,n=e.url;a.__soundChannelCache.has(n)?t=a.__soundChannelCache.get(n):(t=[],a.__soundChannelCache.set(n,t)),t.push(e)},a.preloadSound=function(e,t=null){return a._isActive&&e?a._muted?null:(e=Laya.URL.formatURL(e))==a._bgMusic&&a._musicMuted?null:(t||(t=a._soundClass),n||(n=new t).load(e),(i=n.preloadSound())?(i.url=e,i.volume=e==a._bgMusic?a.musicVolume:a.soundVolume,n):null):null;var n,i},e.prototype.preloadSound=function(){var r;if(this.url==Laya.SoundManager._bgMusic?(e._musicAudio||(e._musicAudio=e._createSound()),r=e._musicAudio):r=e._audioCache[this.readyUrl]?e._audioCache[this.readyUrl]._sound:e._createSound(),!r)return null;if(n.autoCacheFile&&i.getFileInfo(this.url)){var o=i.getFileInfo(this.url).md5;r.src=this.url=i.getFileNativePath(o)}else r.src=this.url;var s=new t(r,this);return s.url=this.readyUrl,s.loops=1,s.loop=!1,s.startTime=0,r.stop(),a.addSoundChannelCache(s),s},e.prototype.onCanPlaySrc=e.prototype.onCanPlay,e.prototype.onCanPlay=function(){this.onCanPlaySrc(),this.dispose()},a.playSoundSrc=Laya.SoundManager.playSound,a.playSound=function(e,t=1,n=null,i=null,r=0){if(!a._isActive||!e)return null;if(a._muted)return null;if((e=Laya.URL.formatURL(e))==a._bgMusic&&a._musicMuted)return null;var o=a.getSoundChannelCache(e);return o?(o.volume=e==a._bgMusic?a.musicVolume:a.soundVolume,o.completeHandler=n,o.startTime=r,o.play(),o):a.playSoundSrc(e,t,n,i,r)},Laya.MiniSoundChannel.prototype.__onEndSrc=Laya.MiniSoundChannel.prototype.__onEnd,Laya.MiniSoundChannel.prototype.__onEnd=function(a){1==this.loops?(this.completeHandler&&(Laya.systemTimer.once(10,this,this.__runComplete,[this.completeHandler],!1),this.completeHandler=null),this.stop(!1),this.event(Laya.Event.COMPLETE)):this.__onEndSrc(a)},Laya.MiniSoundChannel.prototype.stopSrc=Laya.MiniSoundChannel.prototype.stop,Laya.MiniSoundChannel.prototype.stop=function(e=!0){this.isStopped=!0,Laya.SoundManager.removeChannel(this),this.completeHandler=null,this._audio&&(this._audio.stop(),e?this.loop||(this._audio.offEnded(null),this._miniSound.dispose(),this._audio=null,this._miniSound=null,this._onEnd=null):a.addSoundChannelCache(this))}}}window.LayaExtendClass=LayaExtendClass,window.LayaExtendLogic=LayaExtendLogic;class AssetUrlItem{constructor(){this.path=void 0,this.verpath=void 0,this.verpath=void 0}}class AssetUrlCache{static GetItem(a){var e=this.mapByPath[a];return e||(e=this.mapByUrl[a]),e||(e=this.mapByVerpath[a]),e}static GetPath(a){var e=this.GetItem(a);return e?e.path:null}static GetItemByPath(a){return this.mapByPath[a]}static GetVerpathByPath(a){var e=this.mapByPath[a];return e?e.verpath:e}static GetUrlByPath(a){var e=this.mapByPath[a];return e?e.url:e}static GetOrCreateItemByPath(a){var e=this.mapByPath[a];return e||((e=new AssetUrlItem).path=a,this.mapByPath[a]=e),e}static SetPathAndVerpath(a,e){var t=this.GetOrCreateItemByPath(a);t.verpath=e,this.mapByVerpath[t.verpath]=t}static SetPathAndUrl(a,e){var t=this.GetOrCreateItemByPath(a);t.url=e,this.mapByUrl[t.url]=t}}AssetUrlCache.mapByPath={},AssetUrlCache.mapByVerpath={},AssetUrlCache.mapByUrl={},window.AssetUrlCache=AssetUrlCache,window.AssetUrlItem=AssetUrlItem;