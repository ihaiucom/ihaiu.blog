import MiniLoader from "./wxmini/MiniLoader";
import MiniFileManager from "./wxmini/MiniFileManager";
import MiniFileUtil from "./wxmini/MiniFileUtil";
import MiniFileManifest from "./wxmini/MiniFileManifest";
import MiniHttpRequest from "./wxmini/Extends/MiniHttpRequest";


export default class MiniMainLib
{
    static Init()
    {
        window['MiniAdpter'] = Laya.MiniAdpter;
        var o:any = Laya ;
        o.MiniFileManifest = MiniFileManifest;
        o.MiniFileUtil = MiniFileUtil;
        o.MiniFileManager = MiniFileManager;
        o.MiniLoader = MiniLoader;
        Laya.Loader.prototype._loadResourceFilter = MiniLoader.prototype._loadResourceFilter;
        Laya.Loader.prototype._loadSound = MiniLoader.prototype._loadSound;
        Laya.Loader.prototype._loadHttpRequestWhat = MiniLoader.prototype._loadHttpRequestWhat;

        
        // Laya.Loader.prototype.src_loadHttpRequestMini = Laya.Loader.prototype._loadHttpRequest;
        // Laya.Loader.prototype._loadHttpRequest = MiniLoader.prototype._loadHttpRequest;
        
        // MiniHttpRequest.InitCode();
        MiniFileManager.Init();
    }
}

window['MiniMainLib'] = MiniMainLib;
