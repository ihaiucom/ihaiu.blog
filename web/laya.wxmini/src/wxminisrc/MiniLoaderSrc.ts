/*
_loadResourceFilter
    _loadResource
        _loadSound
        _loadHttpRequestWhat
*/


import MiniFileMgr from "./MiniFileMgrSrc";
export default class MiniLoaderSrc extends Laya.EventDispatcher 
{
    constructor() 
    {
        super();
    }

    _loadResourceFilter(type, url) 
    {
        var thisLoader = this;
        if (url.indexOf(MiniAdpter.window.wx.env.USER_DATA_PATH) == -1 && (url.indexOf("http://") != -1 || url.indexOf("https://") != -1)) 
        {
            if (MiniFileMgr.loadPath != "") 
            {
                url = url.split(MiniFileMgr.loadPath)[1];
            }
            else 
            {
                var tempStr = Laya.URL.rootPath != "" ? Laya.URL.rootPath : Laya.URL._basePath;
                var tempUrl = url;
                if (tempStr != "")
                    url = url.split(tempStr)[1];
                if (!url) 
                {
                    url = tempUrl;
                }
            }
        }

        if (MiniAdpter.subNativeFiles && MiniAdpter.subNativeheads.length == 0) 
        {
            for (var key in MiniAdpter.subNativeFiles) 
            {
                var tempArr = MiniAdpter.subNativeFiles[key];
                MiniAdpter.subNativeheads = MiniAdpter.subNativeheads.concat(tempArr);
                for (var aa = 0; aa < tempArr.length; aa++) 
                {
                    MiniAdpter.subMaps[tempArr[aa]] = key + "/" + tempArr[aa];
                }
            }
        }

        if (MiniAdpter.subNativeFiles && url.indexOf("/") != -1) 
        {
            var curfileHead = url.split("/")[0] + "/";
            if (curfileHead && MiniAdpter.subNativeheads.indexOf(curfileHead) != -1) 
            {
                var newfileHead = MiniAdpter.subMaps[curfileHead];
                url = url.replace(curfileHead, newfileHead);
            }
        }

        switch (type) 
        {
            case Laya.Loader.IMAGE:
            case "htmlimage":
            case "nativeimage":
                MiniLoader._transformImgUrl(url, type, thisLoader);
                break;
            case Laya.Loader.SOUND:
                thisLoader._loadSound(url);
                break;
            default:
                thisLoader._loadResource(type, url);
        }
    }

    _loadSound(url) 
    {
        var thisLoader = this;
        var fileNativeUrl;
        if (MiniFileMgr.isLocalNativeFile(url)) 
        {
            var tempStr = Laya.URL.rootPath != "" ? Laya.URL.rootPath : Laya.URL._basePath;
            var tempUrl = url;
            if (tempStr != "" && (url.indexOf("http://") != -1 || url.indexOf("https://") != -1))
                fileNativeUrl = url.split(tempStr)[1];
            if (!fileNativeUrl) 
            {
                fileNativeUrl = tempUrl;
            }
            MiniLoader.onDownLoadCallBack(url, thisLoader, 0);
        }
        else 
        {
            var tempurl = Laya.URL.formatURL(url);
            if (!MiniFileMgr.isLocalNativeFile(url) && (tempurl.indexOf("http://") == -1 && tempurl.indexOf("https://") == -1) || (tempurl.indexOf(MiniAdpter.window.wx.env.USER_DATA_PATH) != -1)) 
            {
                MiniLoader.onDownLoadCallBack(url, thisLoader, 0);
            }
            else 
            {
                MiniFileMgr.downOtherFiles(encodeURI(tempurl), Laya.Handler.create(MiniLoader, MiniLoader.onDownLoadCallBack, [tempurl, thisLoader]), tempurl);
            }
        }
    }

    static onDownLoadCallBack(sourceUrl, thisLoader, errorCode, tempFilePath = null) 
    {
        if (!errorCode) 
        {
            var fileNativeUrl;
            if (MiniAdpter.autoCacheFile) 
            {
                if (!tempFilePath) 
                {
                    if (MiniFileMgr.isLocalNativeFile(sourceUrl)) 
                    {
                        var tempStr = Laya.URL.rootPath != "" ? Laya.URL.rootPath : Laya.URL._basePath;
                        var tempUrl = sourceUrl;
                        if (tempStr != "" && (sourceUrl.indexOf("http://") != -1 || sourceUrl.indexOf("https://") != -1))
                            fileNativeUrl = sourceUrl.split(tempStr)[1];
                        if (!fileNativeUrl) 
                        {
                            fileNativeUrl = tempUrl;
                        }
                    }
                    else 
                    {
                        var fileObj = MiniFileMgr.getFileInfo(sourceUrl);
                        if (fileObj && fileObj.md5) 
                        {
                            var fileMd5Name = fileObj.md5;
                            fileNativeUrl = MiniFileMgr.getFileNativePath(fileMd5Name);
                        }
                        else 
                        {
                            fileNativeUrl = sourceUrl;
                        }
                    }
                }
                else 
                {
                    fileNativeUrl = tempFilePath;
                }
            }
            sourceUrl = fileNativeUrl;
            var sound = (new Laya.SoundManager._soundClass());
            sound.load(sourceUrl);
            thisLoader.onLoaded(sound);
        }
        else 
        {
            thisLoader.event(Laya.Event.ERROR, "Load sound failed");
        }
    }

    static bindToThis(fun, scope) 
    {
        var rst = fun;
        rst = fun.bind(scope);
        return rst;
    }

    _loadHttpRequestWhat(url, contentType) 
    {
        var thisLoader = this;
        var encoding = MiniAdpter.getUrlEncode(url, contentType);
        if (Laya.Loader.preLoadedMap[url])
            thisLoader.onLoaded(Laya.Loader.preLoadedMap[url]);
        else 
        {
            var tempurl = Laya.URL.formatURL(url);
            if (!MiniFileMgr.isLocalNativeFile(url) && !MiniFileMgr.getFileInfo(tempurl) && url.indexOf(MiniAdpter.window.wx.env.USER_DATA_PATH) == -1 && (tempurl.indexOf("http://") != -1 || tempurl.indexOf("https://") != -1) && !MiniAdpter.AutoCacheDownFile) 
            {
                thisLoader._loadHttpRequest(tempurl, contentType, thisLoader, thisLoader.onLoaded, thisLoader, thisLoader.onProgress, thisLoader, thisLoader.onError);
            }
            else 
            {
                var fileObj = MiniFileMgr.getFileInfo(Laya.URL.formatURL(url));
                if (fileObj) 
                {
                    fileObj.encoding = fileObj.encoding == null ? "utf8" : fileObj.encoding;
                    MiniFileMgr.readFile(MiniFileMgr.getFileNativePath(fileObj.md5), encoding, new Laya.Handler(MiniLoader, MiniLoader.onReadNativeCallBack, [url, contentType, thisLoader]), url);
                }
                else if (thisLoader.type == "image" || thisLoader.type == "htmlimage") 
                {
                    thisLoader._transformUrl(url, contentType);
                }
                else 
                {
                    if (contentType != Laya.Loader.IMAGE && ((tempurl.indexOf("http://") == -1 && tempurl.indexOf("https://") == -1) || MiniFileMgr.isLocalNativeFile(url))) 
                    {
                        MiniFileMgr.readFile(url, encoding, new Laya.Handler(MiniLoader, MiniLoader.onReadNativeCallBack, [url, contentType, thisLoader]), url);
                    }
                    else 
                    {
                        MiniFileMgr.downFiles(tempurl, encoding, new Laya.Handler(MiniLoader, MiniLoader.onReadNativeCallBack, [url, contentType, thisLoader]), tempurl, true);
                    }
                }
            }
        }
    }

    static onReadNativeCallBack(url, type = null, thisLoader = null, errorCode = 0, data = null) 
    {
        if (!errorCode) 
        {
            var tempData;
            if (type == Laya.Loader.JSON || type == Laya.Loader.ATLAS || type == Laya.Loader.PREFAB || type == Laya.Loader.PLF) 
            {
                tempData = MiniAdpter.getJson(data.data);
            }
            else if (type == Laya.Loader.XML) 
            {
                tempData = Laya.Utils.parseXMLFromString(data.data);
            }
            else 
            {
                tempData = data.data;
            }

            if (!MiniAdpter.isZiYu && MiniAdpter.isPosMsgYu && type != Laya.Loader.BUFFER) 
            {
                MiniAdpter.window.wx.postMessage({ url: url, data: tempData, isLoad: "filedata" });
            }
            thisLoader.onLoaded(tempData);
        }
        else if (errorCode == 1) 
        {
            thisLoader._loadHttpRequest(url, type, thisLoader, thisLoader.onLoaded, thisLoader, thisLoader.onProgress, thisLoader, thisLoader.onError);
        }
    }

    static _transformImgUrl(url, type, thisLoader) 
    {
        if (MiniAdpter.isZiYu) 
        {
            thisLoader._loadImage(url, false);
            return;
        }

        if (MiniFileMgr.isLocalNativeFile(url)) 
        {
            thisLoader._loadImage(url, false);
            return;
        }

        if (!MiniFileMgr.isLocalNativeFile(url) && !MiniFileMgr.getFileInfo(Laya.URL.formatURL(url))) 
        {
            var tempUrl = Laya.URL.formatURL(url);
            if (url.indexOf(MiniAdpter.window.wx.env.USER_DATA_PATH) == -1 && (tempUrl.indexOf("http://") != -1 || tempUrl.indexOf("https://") != -1)) 
            {
                if (MiniAdpter.isZiYu) 
                {
                    thisLoader._loadImage(url, false);
                }
                else 
                {
                    MiniFileMgr.downOtherFiles(tempUrl, new Laya.Handler(MiniLoader, MiniLoader.onDownImgCallBack, [url, thisLoader]), tempUrl);
                }
            }
            else
                thisLoader._loadImage(url, false);
        }
        else 
        {
            thisLoader._loadImage(url, false);
        }
    }

    static onDownImgCallBack(sourceUrl, thisLoader, errorCode, tempFilePath = "") 
    {
        if (!errorCode)
            MiniLoader.onCreateImage(sourceUrl, thisLoader, false, tempFilePath);
        else 
        {
            thisLoader.onError(null);
        }
    }

    static onCreateImage(sourceUrl, thisLoader, isLocal = false, tempFilePath = "") 
    {
        var fileNativeUrl;
        if (MiniAdpter.autoCacheFile) 
        {
            if (!isLocal) 
            {
                if (tempFilePath != "") 
                {
                    fileNativeUrl = tempFilePath;
                }
                else 
                {
                    var fileObj = MiniFileMgr.getFileInfo(sourceUrl);
                    var fileMd5Name = fileObj.md5;
                    fileNativeUrl = MiniFileMgr.getFileNativePath(fileMd5Name);
                }
            }
            else if (MiniAdpter.isZiYu) 
            {
                var tempUrl = Laya.URL.formatURL(sourceUrl);
                if (MiniFileMgr.ziyuFileTextureData[tempUrl]) 
                {
                    fileNativeUrl = MiniFileMgr.ziyuFileTextureData[tempUrl];
                }
                else
                    fileNativeUrl = sourceUrl;
            }
            else
                fileNativeUrl = sourceUrl;
        }
        else 
        {
            if (!isLocal)
                fileNativeUrl = tempFilePath;
            else
                fileNativeUrl = sourceUrl;
        }
        thisLoader._loadImage(fileNativeUrl, false);
    }
}