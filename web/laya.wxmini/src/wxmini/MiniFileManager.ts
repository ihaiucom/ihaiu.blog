import MiniFileUtil from "./MiniFileUtil";
import MiniFileManifest from "./MiniFileManifest";
import { IAssetItem } from "./IAssetItem";

export default class MiniFileManager
{
    
    /** 微信文件系统管理对象 */
    static fs:wx.FileSystemManager;
    /** 微信文件下载函数 */
    static wxdown:Function;

    /** 根目录文件夹名 */
    static rootDirName:string = "GameRoot";
    /** 根目录路径 "http://usr/GameRoot" */
    static rootPath:string;

    /** 文件清单名称 */
    static manifestFileName:string = "manifest.json";
    /** 文件清单 */
    static manifest:MiniFileManifest;

    /** 总空间大小, 50MB */
    static totalSize:number = 50 * 1024 * 1024;
    /** 必须保留空闲空间大小, 4MB */
    static freeSafeSize:number = 4 * 1024 * 1024;

    private static initTime: number = 0;

    /** 初始化 */
    static Init()
    {
        this.initTime = Laya.Browser.now();
        this.fs = wx.getFileSystemManager();
        this.wxdown = wx.downloadFile;

        MiniFileUtil.fs = this.fs;
        MiniFileUtil.wxdown = this.wxdown;


        // 设置根目录
        this.SetRootDir(this.rootDirName);

        // 创建根目录
        MiniFileUtil.MkdirSync(this.rootPath, true);

        // 加载文件清单
        this.manifest = MiniFileManifest.Load(this.manifestFileName);
    }

    /** 设置根目录 */
    static SetRootDir(name:string)
    {
        this.rootDirName = name;
        this.rootPath = MiniAdpter.window.wx.env.USER_DATA_PATH +"/"+ name
    }

    /** 转 Mini文件路径 */
    static ToMiniPath(path:string)
    {
        return this.rootPath + "/" + path;
    }

    
    /** 检测是否是 内嵌资源 */
    static isLocalNativeFile(url:string) : boolean
    {
        for (var i = 0, sz = MiniAdpter.nativefiles.length; i < sz; i++) 
        {
            if (url.indexOf(MiniAdpter.nativefiles[i]) != -1)
                return true;
        }
        return false;
    }

    /** 能使用的空间大小 */
    static get EnableSize(): number
    {
        return this.totalSize - this.freeSafeSize - this.manifest.fileUsedSize - Laya.MiniFileMgr.getCacheUseSize() ;
    }

    /**
     * 检测空间是否足够
     * @param needSize  需要的空间大小
     */
    static CheckSize(needSize:number): number
    {
        return this.EnableSize - needSize;
    }

    
    /**
     * 异步 清理文件 清理出空间大小
     * @param needClearSize 需要清理的大小
     */
    static ClearCacheZieAsync(needClearSize: number)
    {
        return new Promise<void>((resolve)=>
        {
           this.ClearCacheZie(needClearSize, ()=>
           {
                resolve();
           });

        });
    }

    /**
     * 清理文件 清理出空间大小
     * @param needClearSize 需要清理的大小
     */
    static ClearCacheZie(needClearSize: number, onComplete)
    {
        var assetList:IAssetItem[] = this.manifest.assetList;
       
        var list:IAssetItem[] = [];
        var clearSize = 0;
        for (let i = 1, sz = assetList.length; i < sz; i++) 
        {
            let assetItem = assetList[i];
            if (clearSize >= needClearSize)
                break;
            clearSize += assetItem.size;
            list.push(assetItem);
        }

        let count = list.length;
        let i = 0;
        for(let assetItem of list)
        {
            console.log("清理文件", bToStr(assetItem.size), assetItem.assetName, assetItem.times);
            MiniFileUtil.DeleteFile(assetItem.md5, (errorCode)=>
            {
                this.manifest.OnRemoveAsset(assetItem);
                i ++;
                if(i >= count)
                {
                    if(onComplete)
                    {
                        onComplete();
                    }
                }
            })
        }
    }

    
    /** 异步删除资源 */
    static async DeleteAssetAsync(assetItem: IAssetItem)
    {
        return new Promise<void>((resolve)=>
        {
           this.DeleteAsset(assetItem, ()=>
           {
                resolve();
           });

        });

    }

    /** 删除资源 */
    static DeleteAsset(assetItem: IAssetItem, onComplete)
    {
        MiniFileUtil.DeleteFile(assetItem.md5, (errorCode)=>
        {
            this.manifest.OnRemoveAsset(assetItem);
            if(onComplete)
            {
                onComplete();
            }
        })
    }

    
    /** 清除所有目录 */
    static async RemoveAll()
    {
        let dir = MiniAdpter.window.wx.env.USER_DATA_PATH;

        
        try 
        {
            let list = this.fs.readdirSync(dir);
            for(let fileName of list)
            {
                let filePath = dir + "/" + fileName;
                let state =  this.fs.statSync(filePath)
                if(state.isDirectory())
                {
                    MiniFileUtil.DeleteDirSync(filePath);
                }
                else
                {
                    await MiniFileUtil.DeleteFileAsync(filePath)
                }

            }
        }
        catch(error)
        {

        }

        this.manifest.OnRemoveAll();
        // 创建根目录
        MiniFileUtil.MkdirSync(this.rootPath, true);
    }

    /** 清理老版本资源 */
    static ClearOldVerRes(progressHandler?: Function, completeHandler?: Function)
    {
        // 资源根目录是否相同
        var isSameBasePath = false;
        var preUrlBasePath = Laya.LocalStorage.getItem("__URL_basePath");
        if(preUrlBasePath == Laya.URL.basePath)
        {
            isSameBasePath = true;
        }

        if(Laya.ResourceVersion.manifest)
        {
            // web资源没勾选版本管理
            var size = 0;
            for(var assetName in Laya.ResourceVersion.manifest)
            {
              Laya.ResourceVersion.addVersionPrefix(assetName);
              size ++;
            }

            if(size <= 2 && isSameBasePath)
            {
                Laya.LocalStorage.setItem("__URL_basePath", Laya.URL.basePath);
                completeHandler && completeHandler();
                return;
            }
        }

        var list:IAssetItem[] = [];
        var assetList = MiniFileManager.manifest.assetList;
        for(var assetItem of assetList)
        {
            if(assetItem.md5)
            {
                
                var urlItem = AssetUrlCache.GetItem(assetItem.assetName);
                

                if(urlItem)
                {
                    if(assetItem.verpath != urlItem.verpath)
                    {
                        list.push(assetItem);
                    }

                }
                else
                {
                    list.push(assetItem);
                }
            }
        }


        var total = list.length;
        let currentNum = 0;



        var doNext = ()=>{
            if(list.length > 0)
            {
                var assetItem = list.shift();
                this.DeleteAsset(assetItem, ()=>{
                    currentNum ++;
                    // console.log("清理老版本资源：" + currentNum + "/" + total + "  " + assetItem.assetName);
                    progressHandler && progressHandler(currentNum, total);
                    Laya.timer.frameOnce(1, null, doNext)
                });
            }
            else
            {
                if(!isSameBasePath)
                {
                    Laya.LocalStorage.setItem("__URL_basePath", Laya.URL.basePath);
                }
                completeHandler && completeHandler();
            }
        }

        doNext();



    }

    
    /** 打印空间目录使用情况 */
    static PrintDirInfo()
    {
        let map = {};
        let dir = MiniAdpter.window.wx.env.USER_DATA_PATH;

        MiniFileUtil.GetDirInfo(dir, map);
        console.info("目录信息", map);

        for(let dirPath in map)
        {
            let dirInfo = map[dirPath];
            console.log(`${dirPath}, totalSize=${bToStr(dirInfo.totalSize)}, size=${bToStr(dirInfo.size)}`);
        }
        
    }


    /** 打印空间使用情况 */
    static PrintSizeInfo(needSize?: number, assetName?:string)
    {
        console.log(`当前使用了空间大小 manifest.fileUsedSize=${bToStr(this.manifest.fileUsedSize)}`);

        if(needSize != undefined)
        {
            console.log(`当前文件需要空间大小 needSize=${bToStr(needSize)}, ${assetName}`);
        }

        this.PrintDirInfo();

    }
    

    
    /** 下载文件并保存到缓存 */
    static async DownAndSaveFileAsync(url:string,  assetName:string, verpath:string, encoding = "utf8", onProgressUpdate = null) 
    {
        // 下载文件
        let downResults =  await MiniFileUtil.DownFileAsync(url, encoding, onProgressUpdate);
        var downErrorCode = downResults[0];
        var downData = downResults[1];
        /** 下载失败 */
        if(downErrorCode != 0)
        {
            return [1, null];
        }

        // 获取文件信息
        let fileInfoResults = await MiniFileUtil.GetFileInfoAsync(downData.tempFilePath);
        var fileInfoErroCode = fileInfoResults[0];
        var fileInfoData = fileInfoResults[1];
        if(fileInfoErroCode != 0)
        {
            return [1, null];
        }

        // 检测空闲空间
        let size = this.CheckSize(fileInfoData.size);

        if(size < 0)
        {
            console.log(`需要清理空间 当前使用了空间大小=${bToStr(this.manifest.fileUsedSize)}  当前文件大小=${bToStr(fileInfoData.size)}, 需要清理空间大小=${bToStr(size * - 1)}`);
            await this.ClearCacheZieAsync(size * - 1);
        }
        
        var temp = downData.tempFilePath.split("/");
        var tempFileName = temp[temp.length - 1];
       
        let miniPath = this.ToMiniPath(tempFileName);

        // 拷贝临时文件到用户缓存
        let copyErrorCode = await MiniFileUtil.CopyFileAsync(downData.tempFilePath, miniPath);
        if(copyErrorCode != 0)
        {
            this.PrintSizeInfo(fileInfoData.size, assetName);
            return [1, null];
        }

        let assetItem:IAssetItem = 
        {
            assetName: assetName,
            verpath: verpath,
            readyUrl:url,
            md5:miniPath,
            size: fileInfoData.size,
            times:  Laya.Browser.now(),
            encoding: encoding
        };

        this.manifest.OnAddAsset(assetItem);
        return [0, assetItem];
    }

}

window['MiniFileManager'] = MiniFileManager;