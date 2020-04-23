function LayaExtendClass()
{
    Laya.Stage.prototype.sResize = new Signal();
    window['Vector2'] = Laya.Vector2;
    window['Vector3'] = Laya.Vector3;
    window['Vector4'] = Laya.Vector4;
    
}

function LayaExtendLogic()
{
    Laya.stage.on(Laya.Event.RESIZE, null, function()
    {
        Laya.stage.sResize.dispatch();
    });

    LayaExtendLogic_ResourceVersion();
    LayaExtendLogic_URL();
    // LayaExtendLogic_Laya3D();
    LayaExtendLogic_Sound();



}




function LayaExtendLogic_ResourceVersion()
{
    if(!Laya.ResourceVersion.__IsReplaceFun)
    {
        Laya.ResourceVersion.__IsReplaceFun = true;
        var ResourceVersion = Laya.ResourceVersion;
        ResourceVersion.src_addVersionPrefix = ResourceVersion.addVersionPrefix;
        ResourceVersion.addVersionPrefix = function(originURL)
        {
            originURL = Laya.URL.getAdptedFilePath(originURL);
            var verpath = AssetUrlCache.GetVerpathByPath(originURL);
            if(verpath)
            {
                return verpath;
            }

            if(Laya.MiniFileMgr && Laya.MiniFileMgr.isLocalNativeFile(originURL))
            {
                verpath = originURL;
            }
            else
            {
                var originURL2 = originURL.toLowerCase();
                if (ResourceVersion.manifest && ResourceVersion.manifest[originURL2]) 
                {
                    verpath = ResourceVersion.src_addVersionPrefix(originURL2);
                }
                else
                {
                    verpath = ResourceVersion.src_addVersionPrefix(originURL);
                }
            }
            

            AssetUrlCache.SetPathAndVerpath(originURL, verpath);
            return verpath;
        }
    }
}


function LayaExtendLogic_Laya3D()
{
    var Laya3D = Laya.Laya3D;
    if(!Laya3D)
        return;

    if(!Laya3D.__IsReplaceFun)
    {
        Laya3D.__IsReplaceFun = true;

        Laya3D.src_formatRelativePath = Laya3D.formatRelativePath;
        Laya3D.formatRelativePath = function(base, value)
        {
            if(value.indexOf("res3d/Conventional/") != -1)
            {
                return value;
            }
            if(value.indexOf(base) != -1)
            {
                return value;
            }
            // if(ZipManager)
            // {
            //     var char1 = value.charAt(0);
            
            //     if (char1 !== ".") 
            //     {
            //         if(value.indexOf(ZipManager.Instance.srcRootPath) != -1)
            //         {
            //             return value;
            //         }
            //     }
            // }
            return Laya3D.src_formatRelativePath(base, value);

        }
    }

    
}

function LayaExtendLogic_URL()
{
    if(!Laya.URL.__IsReplaceFun)
    {
        Laya.URL.__IsReplaceFun = true;
        var URL = Laya.URL;

        
        
        URL.src_formatURL = URL.formatURL;
        URL.formatURL = function(originURL)
        {
            
            if (originURL.indexOf(":") > 0) return originURL;

            var url = AssetUrlCache.GetUrlByPath(originURL);
            if(url)
            {
                return url;
            }

            if(Laya.MiniFileMgr && Laya.MiniFileMgr.isLocalNativeFile(originURL))
            {
                url = originURL;
            }
            else
            {
                if(window['VersionConfig'] && VersionConfig.IsUseCdnList)
                {
                    url = LayaExtendLogic_URL_formatURL(originURL);
                }
                else
                {
                    url = URL.src_formatURL(originURL);
                }
            }

            
            AssetUrlCache.SetPathAndUrl(originURL, url);

            return url;
        }


        // URL.src_customFormat = URL.customFormat;
        // URL.customFormat = function(originURL)
        // {
        //     if(Laya.MiniFileMgr.isLocalNativeFile(originURL))
        //     {
        //         return originURL;
        //     }
        //     else
        //     {
        //         return URL.src_customFormat(originURL);
        //     }
        // }
    }
}

var __formatURLCacheMap = {};
var __formatURLIndex = 0;
function LayaExtendLogic_URL_formatURL(url) 
{
    if (!url) return "null path";
    //如果是全路径，直接返回，提高性能
    if (url.indexOf(":") > 0) return url;

    var path = url;
    if(__formatURLCacheMap[url])
    {
        return __formatURLCacheMap[url];
    }

    var  URL = Laya.URL;

    //自定义路径格式化
    if (URL.customFormat != null) url = URL.customFormat(url);
    //如果是全路径，直接返回，提高性能
    if (url.indexOf(":") > 0) return url;

    var char1 = url.charAt(0);
    if (char1 === ".") {
        return URL._formatRelativePath(URL._basePath + url);
    } else if (char1 === '~') {
        return URL.rootPath + url.substring(1);
    } else if (char1 === "d") {
        if (url.indexOf("data:image") === 0) return url;
    } else if (char1 === "/") {
        return url;
    }

    __formatURLIndex ++;
    var index = __formatURLIndex % VersionConfig.CDNList.length;
    var cdn = VersionConfig.CDNList[index];
    var httpUrl = cdn + VersionConfig.RootPath + url;
    __formatURLCacheMap[path] = httpUrl;
    return httpUrl;


}


function LayaExtendLogic_Sound()
{
    
    if(Laya.MiniSoundChannel && !Laya.MiniSoundChannel.__IsReplaceFun)
    {
        Laya.MiniSoundChannel.__IsReplaceFun = true;
        var SoundManager =  Laya.SoundManager;
        var MiniSound = Laya.MiniSound;
        var MiniSoundChannel = Laya.MiniSoundChannel;
        var MiniAdpter = Laya.MiniAdpter;
        var MiniFileMgr = Laya.MiniFileMgr;

        SoundManager.__soundChannelCache = new Map();

        SoundManager.getSoundChannelCache = function(url)
        {
            if(!SoundManager.__soundChannelCache.has(url))
            {
                return null;
            }

            var cacheList =  SoundManager.__soundChannelCache.get(url);
            if(cacheList.length == 0)
            {
                return null;
            }

            var channel = cacheList.shift();
            if(channel._audio)
            {
                return channel;
            }
            else
            {
                return null;
            }
        }

        
        SoundManager.addSoundChannelCache = function(channel)
        {
            var url = channel.url;
            var cacheList;
            if(!SoundManager.__soundChannelCache.has(url))
            {
                cacheList = [];
                SoundManager.__soundChannelCache.set(url, cacheList);
            }
            else
            {
                cacheList = SoundManager.__soundChannelCache.get(url);
            }
            cacheList.push(channel);
        };

        
        /** 预加载安装声音 */
        SoundManager.preloadSound = function(url, soundClass = null)
        {
            if (!SoundManager._isActive || !url) return null;
            if (SoundManager._muted) return null;

            url = Laya.URL.formatURL(url);
            if (url == SoundManager._bgMusic) 
            {
                if (SoundManager._musicMuted) return null;
            }
            
            var tSound;
            if (!soundClass) soundClass = SoundManager._soundClass;
            if (!tSound) {
                tSound = new soundClass();
                tSound.load(url);
            }

            var channel;
            channel = tSound.preloadSound();
            if (!channel) return null;
            channel.url = url;
            channel.volume = (url == SoundManager._bgMusic) ? SoundManager.musicVolume : SoundManager.soundVolume;

            return tSound;
        };

        MiniSound.prototype.preloadSound = function()
        {
            var tSound;
            if (this.url == Laya.SoundManager._bgMusic) 
            {
                    if (!MiniSound._musicAudio)
                            MiniSound._musicAudio = MiniSound._createSound();
                    tSound = MiniSound._musicAudio;
            } 
            else 
            {
                    if (MiniSound._audioCache[this.readyUrl]) 
                    {
                            tSound = MiniSound._audioCache[this.readyUrl]._sound;
                    } 
                    else 
                    {
                            tSound = MiniSound._createSound();
                    }
            }
            if (!tSound)
                    return null;

            if (MiniAdpter.autoCacheFile && MiniFileMgr.getFileInfo(this.url)) 
            {
                    var fileObj = MiniFileMgr.getFileInfo(this.url);
                    var fileMd5Name = fileObj.md5;
                    tSound.src = this.url = MiniFileMgr.getFileNativePath(fileMd5Name);
            } 
            else 
            {
                    tSound.src = this.url;
            }

            var channel = new MiniSoundChannel(tSound, this);
            channel.url = this.readyUrl;
            channel.loops = 1;
            channel.loop = false;
            channel.startTime = 0;
            tSound.stop();
            SoundManager.addSoundChannelCache(channel);
            return channel;

        }

        MiniSound.prototype.onCanPlaySrc = MiniSound.prototype.onCanPlay
        MiniSound.prototype.onCanPlay = function()
        {
            this.onCanPlaySrc();
            this.dispose();
        }





        SoundManager.playSoundSrc = Laya.SoundManager.playSound;
        SoundManager.playSound = function(url, loops = 1, complete = null, soundClass = null, startTime = 0)
        {
            if (!SoundManager._isActive || !url) return null;
            if (SoundManager._muted) return null;

            url = Laya.URL.formatURL(url);
            if (url == SoundManager._bgMusic) 
            {
                if (SoundManager._musicMuted) return null;
            }
            
            var channel =  SoundManager.getSoundChannelCache(url);
            if(!channel)
            {
                return SoundManager.playSoundSrc(url, loops, complete, soundClass, startTime);
            }

            channel.volume = (url == SoundManager._bgMusic) ? SoundManager.musicVolume : SoundManager.soundVolume;
            channel.completeHandler = complete;
            channel.startTime = startTime;
            channel.play();
            return channel;
        };





        Laya.MiniSoundChannel.prototype.__onEndSrc = Laya.MiniSoundChannel.prototype.__onEnd;
        Laya.MiniSoundChannel.prototype.__onEnd = function(evt)
        {
            if (this.loops == 1) 
            {
                if (this.completeHandler) 
                {
                    Laya.systemTimer.once(10, this, this.__runComplete, [this.completeHandler], false);
                    this.completeHandler = null;
                }
                this.stop(false);
                this.event(Laya.Event.COMPLETE);

            }
            else
            {
                this.__onEndSrc(evt);
            }
        };

        Laya.MiniSoundChannel.prototype.stopSrc = Laya.MiniSoundChannel.prototype.stop;
        Laya.MiniSoundChannel.prototype.stop = function(isDispose = true)
        {
            this.isStopped = true;
            Laya.SoundManager.removeChannel(this);
            this.completeHandler = null;
            if (!this._audio)
                return;
            this._audio.stop();
            if(isDispose)
            {
                if (!this.loop) 
                {
                    this._audio.offEnded(null);
                    this._miniSound.dispose();
                    this._audio = null;
                    this._miniSound = null;
                    this._onEnd = null;
                }
            }
            else
            {
                SoundManager.addSoundChannelCache(this);
            }
        };

       
    }
}

window.LayaExtendClass = LayaExtendClass;
window.LayaExtendLogic = LayaExtendLogic;



class AssetUrlItem {
 

    constructor() 
    {
      /** 相对路径 */
      this.path = undefined;
      /** 有版本号的相对路径 */
      this.verpath = undefined;
      /** url路径 */
      this.verpath = undefined;
    }
  }
  
  class AssetUrlCache 
  {
  
  
    static GetItem(key) 
    {
      var item = this.mapByPath[key];
      if (!item) item = this.mapByUrl[key];
      if (!item) item = this.mapByVerpath[key];
  
      return item;
    }
  
    static GetPath(key) 
    {
      var item = this.GetItem(key);
      if (item) 
      {
        return item.path;
      }
      return null;
    }
  
    static GetItemByPath(path) 
    {
      return this.mapByPath[path];
    }
  
    static GetVerpathByPath(path) 
    {
      var item = this.mapByPath[path];
      if (item) {
        return item.verpath;
      }
      return item;
    }
  
    static GetUrlByPath(path) 
    {
      var item = this.mapByPath[path];
      if (item) 
      {
        return item.url;
      }
      return item;
    }
  
  
    static GetOrCreateItemByPath(path) 
    {
      var item = this.mapByPath[path];
      if (!item) 
      {
        item = new AssetUrlItem();
        item.path = path;
        this.mapByPath[path] = item;
      }
      return item;
    }
  
    static SetPathAndVerpath(path, verpath) 
    {
      var item = this.GetOrCreateItemByPath(path);
      item.verpath = verpath;
      this.mapByVerpath[item.verpath] = item;
    }
  
  
    static SetPathAndUrl(path, url) 
    {
      var item = this.GetOrCreateItemByPath(path);
      item.url = url;
      this.mapByUrl[item.url] = item;
    }
  
  }
  
  AssetUrlCache.mapByPath = {};
  AssetUrlCache. mapByVerpath = {};
  AssetUrlCache. mapByUrl = {};
  
  window.AssetUrlCache = AssetUrlCache;
  window.AssetUrlItem = AssetUrlItem;