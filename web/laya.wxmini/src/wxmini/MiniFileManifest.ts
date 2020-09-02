import { IMap } from "./IMap";
import { IAssetItem } from "./IAssetItem";
import MiniFileManager from "./MiniFileManager";
import MiniFileUtil from "./MiniFileUtil";

/** 文件清单 */
export default class MiniFileManifest
{
    static _DontCacheMap:IMap<string, boolean>;

    static get DontCacheMap():IMap<string, boolean>
    {
        if(!this._DontCacheMap)
        {
            this._DontCacheMap = 
            {
                "version.json":true,
                "ServerList.json":true,
                "https://h5-jjsg-cdn.123u.com/server_config/config_2_0.json": true,
            };

        }
        return this._DontCacheMap;
    }

    static IsDontCache(assetName:string): boolean
    {
        
        if(!assetName || assetName == "")
        {
            console.error("IsDontCache assetName=" + assetName);
            return true;
        }

        if(MiniFileManager.EnableSize <= 1 * 1024 * 1024 )
        {
            return true;
        }


        // if(assetName.indexOf("res3d/") != -1)
        // {
        //     if(assetName.indexOf("Effect_100") != -1|| assetName.indexOf("Hero_100") != -1)
        //     {
        //         return false;
        //     }
        //     return true;
        // }


        // if (assetName.indexOf("GPUSKinning_Monster_") != -1)
        // {
        //     return true;
        // }
        return this.DontCacheMap[assetName] === true;
    }



    static KEY_FILEUSEDSIZE = "fileUsedSize";
    manifestFileName:string = "manifest.json";
    manifestFilePath:string;

    assetMap: IMap<string, IAssetItem> = {};

    

    /** 已经使用的文件空间大小 */
    get fileUsedSize():number
    {
        return this.assetMap[MiniFileManifest.KEY_FILEUSEDSIZE] ? <number><any>(this.assetMap[MiniFileManifest.KEY_FILEUSEDSIZE]) : 0;
    }

    
    set fileUsedSize(value: number)
    {
        this.assetMap[MiniFileManifest.KEY_FILEUSEDSIZE] = <any>value;
    }

    /** 文件列表 */
    get assetList():IAssetItem[]
    {
        var list:IAssetItem[] = [];
        for (var key in this.assetMap) 
        {
            if (key != "fileUsedSize")
            {
                list.push(this.assetMap[key]);
            }
        }

        this.sortOn(list, "times");
        // list.sort()
        return list;
    }

    
    sortOn(array, key) 
    {
        return array.sort(function (a, b) { return a[key] - b[key]; });
    }

    static Load(manifestFileName:string): MiniFileManifest
    {
        let manifest = new MiniFileManifest();
        manifest.manifestFileName = manifestFileName;
        manifest.manifestFilePath = MiniFileManager.ToMiniPath(manifestFileName);
        manifest.Load();
        return manifest;
    }

    Load()
    {
        let txt :string= <any> MiniFileUtil.ReadFileSync(this.manifestFilePath, "utf8", false);
        if(txt)
        {
            this.assetMap = JSON.parse(txt);
        }
    }

    Save()
    {
        let txt = JSON.stringify(this.assetMap);
        var isSuccess = MiniFileUtil.WriteFileSync(this.manifestFilePath, txt);
        if(!isSuccess)
        {
            MiniFileManager.ClearCacheZie(1 * 1024 * 1024, ()=>{
                this.Save();
            });
        }
    }

    GetItem(assetName:string):IAssetItem
    {
        return this.assetMap[assetName];
    }

    /** 当清除所有文件时 */
    OnRemoveAll()
    {
        this.assetMap = {};
    }

    /** 移除文件 */
    OnRemoveAsset(assetItem:IAssetItem)
    {
        this.fileUsedSize -= assetItem.size;
        delete this.assetMap[assetItem.assetName];
        this.Save();
    }

    /** 添加资源 */
    OnAddAsset(assetItem:IAssetItem)
    {
        this.fileUsedSize += assetItem.size;
        this.assetMap[assetItem.assetName] = assetItem;
        this.Save();
    }

    /** 更新使用时间 */
    OnUseAsset(assetItem:IAssetItem)
    {
        assetItem.times = Laya.Browser.now();
        this.Save();
    }


}