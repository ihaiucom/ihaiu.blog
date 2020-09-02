/*
_loadResourceFilter
    _loadResource
        _loadSound
        _loadHttpRequestWhat
*/


import MiniFileManager from "./MiniFileManager";
import { IAssetItem } from "./IAssetItem";
import MiniFileUtil from "./MiniFileUtil";
import MiniFileManifest from "./MiniFileManifest";
export default class MiniLoader extends Laya.EventDispatcher 
{
    constructor() 
    {
        super();
    }

    async _loadResourceFilter(type, url) 
    {
        var thisLoader = this;


        // 相对路径
        var path = AssetUrlCache.GetPath(url);
        var urlItem = AssetUrlCache.GetItem(url);

        var miniPath:string;
        
        
        // 检测是否是内嵌资源
        var isLocalNativeFile = false;
        if(MiniFileManager.isLocalNativeFile(url))
        {
            miniPath = url;
            isLocalNativeFile = true;
        }
        
        if(!miniPath && path)
        {
            if(MiniFileManager.isLocalNativeFile(path))
            {
                miniPath = path;
                isLocalNativeFile = true;
            }
        }

        
        // 检测是否本地缓存了该文件
        var isCachedFile = false;
        if(!isLocalNativeFile && path)
        {
            var assetItem = MiniFileManager.manifest.GetItem(path);
                
            if(assetItem)
            {
                if(assetItem.md5)
                {
                    // 检测版本是否相同
                    if(assetItem.verpath == urlItem.verpath)
                    {
                        miniPath = assetItem.md5;
                        isCachedFile = true;
                    }
                    else
                    {
                        // 移除之前的版本
                        await MiniFileManager.DeleteAssetAsync(assetItem);
                    }
                }
            }
        }

            
        // 不缓存
        var isDotCache = MiniFileManifest.IsDontCache(path);
        // 需要缓存文件，并且需要从网上下载缓存
        if(!isLocalNativeFile && !isCachedFile && !isDotCache)
        {
            // 如果本地没有缓存该文件，就去网上下载
            let results =  await MiniFileManager.DownAndSaveFileAsync(url, urlItem.path, urlItem.verpath);
            if(results[0] == 0)
            {
                var assetItem:IAssetItem = <any> results[1];
                miniPath = assetItem.md5;
            }
        }
        


        if(!miniPath)
        {
            // console.log("需要从网络下载资源", url);
        }

        // 设置最终URL
        let findleUrl = miniPath ? miniPath : url;
        // console.log("_lrf: ==================");
        // console.log("_lrf: path=", path);
        // console.log("_lrf: findleUrl=", findleUrl);
        // console.log("_lrf: url=", url);
        // console.log("_lrf: urlItem=", urlItem);
        // console.log("_lrf: isDotCache=", isDotCache);
        // console.log("_lrf: isLocalNativeFile=", isLocalNativeFile);
        // console.log("_lrf: isCachedFile=", isCachedFile);
        // console.log("_lrf: -------------------");
        
        switch (type) 
        {
            case Laya.Loader.IMAGE:
            case "htmlimage":
            case "nativeimage":
                thisLoader._loadImage(findleUrl, false);
                break;
            case Laya.Loader.SOUND:
                thisLoader._loadSound(findleUrl);
                break;
            default:
                thisLoader._loadResource(type, findleUrl);
        }

    }

    _loadSound(url) 
    {
        // console.log("MiniLoad _loadSound", url);
        var thisLoader = this;
        var sound = (new Laya.SoundManager._soundClass());
        sound.load(url);
        thisLoader.onLoaded(sound);
    }

    async _loadHttpRequestWhat(url, type) 
    {
        var thisLoader:any = this;
        var path = thisLoader.url;
        var encoding = MiniAdpter.getUrlEncode(path, type);
        if (Laya.Loader.preLoadedMap[path])
            thisLoader.onLoaded(Laya.Loader.preLoadedMap[path]);
        else 
        {
            let assetItem = MiniFileManager.manifest.GetItem(path);
            let hasCache = assetItem && assetItem.md5;

            
            // 不缓存
            var isDotCache = MiniFileManifest.IsDontCache(path);

            // 是否是内嵌资源
            var isLocalNativeFile = MiniFileManager.isLocalNativeFile(path);
            

            // console.log("lhr: ==================");
            // console.log("lhr: path=", path);
            // console.log("lhr: url=", url);
            // console.log("lhr: type=", type);
            // console.log("lhr: isDotCache=", isDotCache);
            // console.log("lhr: isLocalNativeFile=", isLocalNativeFile);
            // console.log("lhr: -------------------");

            // 可以缓存文件， 不是图片文件， 是内置资源或者有缓存
            if(type != Laya.Loader.IMAGE && (isLocalNativeFile || hasCache))
            {
                MiniFileUtil.ReadFile(url, encoding, (results)=>
                {
                    var errorCode = results[0];
                    var data = results[1];
                    if(errorCode == 0)
                    {
                        var tempData;
                        if (type == Laya.Loader.JSON || type == Laya.Loader.ATLAS || type == Laya.Loader.PREFAB || type == Laya.Loader.PLF) 
                        {
                            try 
                            {
                                tempData = MiniAdpter.getJson(data.data);
                            } 
                            catch (error) 
                            {
                                console.error("解析JSON出错", assetItem, data);
                            }
                        }
                        else if (type == Laya.Loader.XML) 
                        {
                            tempData = Laya.Utils.parseXMLFromString(data.data);
                        }
                        else 
                        {
                            tempData = data.data;
                        }


                        if(assetItem)
                        {
                            MiniFileManager.manifest.OnUseAsset(assetItem);
                        }

                        // console.log("读取本地文件成功", url);
                        thisLoader.onLoaded(tempData);
                    }
                    else
                    {
                        console.log("读取文件失败,需要从网络下载", url);
                        thisLoader._loadHttpRequest(url, type, thisLoader, thisLoader.onLoaded, thisLoader, thisLoader.onProgress, thisLoader, thisLoader.onError);
           
                    }

                });
            }
            else
            {
                // console.log(type,encoding,thisLoader.url, url);
                if(url.indexOf("wxfile://") != -1)
                {
                    let info =  await MiniFileUtil.GetFileInfoAsync(url);
                    console.log(thisLoader.url, info);
                    let c = MiniFileUtil.ReadFileSync(url)
                    console.log(thisLoader.url, c);
                }
                // console.log("需要直接从网络下载", url, "type", type);
                thisLoader._loadHttpRequest(url, type, thisLoader, thisLoader.onLoaded, thisLoader, thisLoader.onProgress, thisLoader, thisLoader.onError);
            }

        }
    }

    // src_loadHttpRequestMini(url, contentType, onLoadCaller, onLoad:Function, onProcessCaller, onProcess, onErrorCaller, onError)
    // {

    // }

    // _loadHttpRequest(url, contentType, onLoadCaller, onLoad:Function, onProcessCaller, onProcess, onErrorCaller, onError)
    // {
    //     this.src_loadHttpRequestMini(url, contentType, onLoadCaller, onLoad, onProcessCaller, onProcess, onErrorCaller, onError);
    //     console.log("MiniLoader _loadHttpRequest",url);
    // }
    


}