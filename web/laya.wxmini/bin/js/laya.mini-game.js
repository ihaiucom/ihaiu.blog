var laya = (function () {
    'use strict';

    class MiniFileUtil {
        static MkdirSync(dirPath, recursive = true) {
            try {
                this.fs.mkdirSync(dirPath, recursive);
            }
            catch (error) {
                console.warn("创建目录已存在：", error);
            }
        }
        static async MkdirAsync(dirPath, recursive = true) {
            return new Promise((resolve) => {
                this.Mkdir(dirPath, recursive, (result) => {
                    resolve(result);
                });
            });
        }
        static Mkdir(dirPath, recursive = true, callback) {
            this.fs.mkdir({
                dirPath: dirPath,
                recursive: recursive,
                success: function (data) {
                    if (callback)
                        callback(true);
                },
                fail: function (data) {
                    if (data.errMsg.indexOf("file already exists") != -1) {
                        if (callback)
                            callback(true);
                    }
                    else {
                        if (callback)
                            callback(false);
                    }
                }
            });
        }
        static ReadFileSync(miniFilePath, encoding = "utf8", isThrowError = true) {
            try {
                let content = this.fs.readFileSync(miniFilePath, encoding);
                return content;
            }
            catch (error) {
                if (isThrowError) {
                    console.error("读取文件失败： ", miniFilePath, error);
                }
                return null;
            }
        }
        static async ReadFileAsync(miniFilePath, encoding = "utf8", callback, isThrowError = true) {
            return new Promise((resolve) => {
                this.ReadFileAsync(miniFilePath, encoding, (results) => {
                    resolve(results);
                });
            });
        }
        static ReadFile(miniFilePath, encoding = "utf8", callback, isThrowError = true) {
            this.fs.readFile({
                filePath: miniFilePath,
                encoding: encoding,
                success: function (data) {
                    callback([0, data]);
                },
                fail: function (data) {
                    console.error("读取文件失败", miniFilePath, data);
                    callback([1, data]);
                }
            });
        }
        static WriteFileSync(miniFilePath, data, encoding = "utf8", isThrowError = true) {
            try {
                this.fs.writeFileSync(miniFilePath, data, encoding);
                return true;
            }
            catch (error) {
                if (isThrowError) {
                    console.error("写入文件失败： ", miniFilePath, error);
                }
                return false;
            }
        }
        static DeleteDirSync(miniDirPath) {
            try {
                this.fs.rmdirSync(miniDirPath, true);
            }
            catch (error) {
                console.error("删除目录", error);
            }
        }
        static DeleteFileAsync(miniPath) {
            return new Promise((resolve) => {
                this.DeleteFile(miniPath, (errorCode) => {
                    resolve(errorCode);
                });
            });
        }
        static DeleteFile(miniPath, callback) {
            this.fs.unlink({
                filePath: miniPath,
                success: function (data) {
                    if (callback) {
                        callback(0);
                    }
                },
                fail: function (data) {
                    console.warn("删除文件失败: ", miniPath, data);
                    if (callback) {
                        callback(1);
                    }
                }
            });
        }
        static DownFileAsync(url, encoding = "utf8", onProgressUpdate = null) {
            return new Promise((resolve) => {
                this.DownFile(url, encoding, (errorCode, data) => {
                    resolve([errorCode, data]);
                }, onProgressUpdate);
            });
        }
        static DownFile(url, encoding = "utf8", onComplete = null, onProgressUpdate = null) {
            var downloadTask = this.wxdown({
                url: url,
                success: (data) => {
                    if (data.statusCode === 200) {
                        onComplete != null && onComplete(0, data);
                    }
                    else {
                        console.error("下载文件失败", url, data);
                        onComplete != null && onComplete(1, data);
                    }
                },
                fail: (data) => {
                    console.error("下载文件失败", url, data);
                    onComplete != null && onComplete(1, data);
                }
            });
            if (onProgressUpdate != null) {
                downloadTask.onProgressUpdate((data) => {
                    onProgressUpdate(data);
                });
            }
        }
        static async GetFileInfoAsync(miniPath) {
            return new Promise((resolve) => {
                this.fs.getFileInfo({
                    filePath: miniPath,
                    success: (data) => {
                        resolve([0, data]);
                    },
                    fail: (data) => {
                        console.error(`获取文件信息失败: miniPath=${miniPath}, data=${data}`);
                        resolve([1, data]);
                    }
                });
            });
        }
        static CopyFileAsync(srcPath, destPath) {
            return new Promise((resolve) => {
                this.CopyFile(srcPath, destPath, (errorCode) => {
                    resolve(errorCode);
                });
            });
        }
        static CopyFile(srcPath, destPath, callback) {
            this.fs.copyFile({
                srcPath: srcPath,
                destPath: destPath,
                success: function (data2) {
                    if (callback) {
                        callback(0);
                    }
                },
                fail: function (data) {
                    console.error(`拷贝文件失败 srcPath=${srcPath}, destPath=${destPath}`, data);
                    if (callback) {
                        callback(1);
                    }
                }
            });
        }
        static GetDirInfo(dir, map) {
            try {
                let dirInfo = map[dir] ? map[dir] : map[dir] = { fileCount: 0, dirCount: 0, totalSize: 0, size: 0 };
                let list = this.fs.readdirSync(dir);
                for (let fileName of list) {
                    let filePath = dir + "/" + fileName;
                    try {
                        let state = this.fs.statSync(filePath);
                        if (state.isDirectory()) {
                            this.GetDirInfo(filePath, map);
                            let childDirInfo = map[filePath];
                            if (childDirInfo) {
                                dirInfo.totalSize += childDirInfo.totalSize;
                            }
                            dirInfo.dirCount++;
                        }
                        else {
                            dirInfo.totalSize += state.size;
                            dirInfo.size += state.size;
                            dirInfo.fileCount++;
                        }
                    }
                    catch (error) {
                    }
                }
            }
            catch (error) {
                console.log("获取目录信息出错", dir, error);
            }
        }
    }
    window['MiniFileUtil'] = MiniFileUtil;

    class MiniFileManifest {
        constructor() {
            this.manifestFileName = "manifest.json";
            this.assetMap = {};
        }
        static get DontCacheMap() {
            if (!this._DontCacheMap) {
                this._DontCacheMap =
                    {
                        "version.json": true,
                        "ServerList.json": true,
                        "https://h5-jjsg-cdn.123u.com/server_config/config_2_0.json": true,
                    };
            }
            return this._DontCacheMap;
        }
        static IsDontCache(assetName) {
            if (!assetName || assetName == "") {
                console.error("IsDontCache assetName=" + assetName);
                return true;
            }
            if (MiniFileManager.EnableSize <= 1 * 1024 * 1024) {
                return true;
            }
            return this.DontCacheMap[assetName] === true;
        }
        get fileUsedSize() {
            return this.assetMap[MiniFileManifest.KEY_FILEUSEDSIZE] ? (this.assetMap[MiniFileManifest.KEY_FILEUSEDSIZE]) : 0;
        }
        set fileUsedSize(value) {
            this.assetMap[MiniFileManifest.KEY_FILEUSEDSIZE] = value;
        }
        get assetList() {
            var list = [];
            for (var key in this.assetMap) {
                if (key != "fileUsedSize") {
                    list.push(this.assetMap[key]);
                }
            }
            this.sortOn(list, "times");
            return list;
        }
        sortOn(array, key) {
            return array.sort(function (a, b) { return a[key] - b[key]; });
        }
        static Load(manifestFileName) {
            let manifest = new MiniFileManifest();
            manifest.manifestFileName = manifestFileName;
            manifest.manifestFilePath = MiniFileManager.ToMiniPath(manifestFileName);
            manifest.Load();
            return manifest;
        }
        Load() {
            let txt = MiniFileUtil.ReadFileSync(this.manifestFilePath, "utf8", false);
            if (txt) {
                this.assetMap = JSON.parse(txt);
            }
        }
        Save() {
            let txt = JSON.stringify(this.assetMap);
            var isSuccess = MiniFileUtil.WriteFileSync(this.manifestFilePath, txt);
            if (!isSuccess) {
                MiniFileManager.ClearCacheZie(1 * 1024 * 1024, () => {
                    this.Save();
                });
            }
        }
        GetItem(assetName) {
            return this.assetMap[assetName];
        }
        OnRemoveAll() {
            this.assetMap = {};
        }
        OnRemoveAsset(assetItem) {
            this.fileUsedSize -= assetItem.size;
            delete this.assetMap[assetItem.assetName];
            this.Save();
        }
        OnAddAsset(assetItem) {
            this.fileUsedSize += assetItem.size;
            this.assetMap[assetItem.assetName] = assetItem;
            this.Save();
        }
        OnUseAsset(assetItem) {
            assetItem.times = Laya.Browser.now();
            this.Save();
        }
    }
    MiniFileManifest.KEY_FILEUSEDSIZE = "fileUsedSize";

    class MiniFileManager {
        static Init() {
            this.initTime = Laya.Browser.now();
            this.fs = wx.getFileSystemManager();
            this.wxdown = wx.downloadFile;
            MiniFileUtil.fs = this.fs;
            MiniFileUtil.wxdown = this.wxdown;
            this.SetRootDir(this.rootDirName);
            MiniFileUtil.MkdirSync(this.rootPath, true);
            this.manifest = MiniFileManifest.Load(this.manifestFileName);
        }
        static SetRootDir(name) {
            this.rootDirName = name;
            this.rootPath = MiniAdpter.window.wx.env.USER_DATA_PATH + "/" + name;
        }
        static ToMiniPath(path) {
            return this.rootPath + "/" + path;
        }
        static isLocalNativeFile(url) {
            for (var i = 0, sz = MiniAdpter.nativefiles.length; i < sz; i++) {
                if (url.indexOf(MiniAdpter.nativefiles[i]) != -1)
                    return true;
            }
            return false;
        }
        static get EnableSize() {
            return this.totalSize - this.freeSafeSize - this.manifest.fileUsedSize - Laya.MiniFileMgr.getCacheUseSize();
        }
        static CheckSize(needSize) {
            return this.EnableSize - needSize;
        }
        static ClearCacheZieAsync(needClearSize) {
            return new Promise((resolve) => {
                this.ClearCacheZie(needClearSize, () => {
                    resolve();
                });
            });
        }
        static ClearCacheZie(needClearSize, onComplete) {
            var assetList = this.manifest.assetList;
            var list = [];
            var clearSize = 0;
            for (let i = 1, sz = assetList.length; i < sz; i++) {
                let assetItem = assetList[i];
                if (clearSize >= needClearSize)
                    break;
                clearSize += assetItem.size;
                list.push(assetItem);
            }
            let count = list.length;
            let i = 0;
            for (let assetItem of list) {
                console.log("清理文件", bToStr(assetItem.size), assetItem.assetName, assetItem.times);
                MiniFileUtil.DeleteFile(assetItem.md5, (errorCode) => {
                    this.manifest.OnRemoveAsset(assetItem);
                    i++;
                    if (i >= count) {
                        if (onComplete) {
                            onComplete();
                        }
                    }
                });
            }
        }
        static async DeleteAssetAsync(assetItem) {
            return new Promise((resolve) => {
                this.DeleteAsset(assetItem, () => {
                    resolve();
                });
            });
        }
        static DeleteAsset(assetItem, onComplete) {
            MiniFileUtil.DeleteFile(assetItem.md5, (errorCode) => {
                this.manifest.OnRemoveAsset(assetItem);
                if (onComplete) {
                    onComplete();
                }
            });
        }
        static async RemoveAll() {
            let dir = MiniAdpter.window.wx.env.USER_DATA_PATH;
            try {
                let list = this.fs.readdirSync(dir);
                for (let fileName of list) {
                    let filePath = dir + "/" + fileName;
                    let state = this.fs.statSync(filePath);
                    if (state.isDirectory()) {
                        MiniFileUtil.DeleteDirSync(filePath);
                    }
                    else {
                        await MiniFileUtil.DeleteFileAsync(filePath);
                    }
                }
            }
            catch (error) {
            }
            this.manifest.OnRemoveAll();
            MiniFileUtil.MkdirSync(this.rootPath, true);
        }
        static ClearOldVerRes(progressHandler, completeHandler) {
            var isSameBasePath = false;
            var preUrlBasePath = Laya.LocalStorage.getItem("__URL_basePath");
            if (preUrlBasePath == Laya.URL.basePath) {
                isSameBasePath = true;
            }
            if (Laya.ResourceVersion.manifest) {
                var size = 0;
                for (var assetName in Laya.ResourceVersion.manifest) {
                    Laya.ResourceVersion.addVersionPrefix(assetName);
                    size++;
                }
                if (size <= 2 && isSameBasePath) {
                    Laya.LocalStorage.setItem("__URL_basePath", Laya.URL.basePath);
                    completeHandler && completeHandler();
                    return;
                }
            }
            var list = [];
            var assetList = MiniFileManager.manifest.assetList;
            for (var assetItem of assetList) {
                if (assetItem.md5) {
                    var urlItem = AssetUrlCache.GetItem(assetItem.assetName);
                    if (urlItem) {
                        if (assetItem.verpath != urlItem.verpath) {
                            list.push(assetItem);
                        }
                    }
                    else {
                        list.push(assetItem);
                    }
                }
            }
            var total = list.length;
            let currentNum = 0;
            var doNext = () => {
                if (list.length > 0) {
                    var assetItem = list.shift();
                    this.DeleteAsset(assetItem, () => {
                        currentNum++;
                        progressHandler && progressHandler(currentNum, total);
                        Laya.timer.frameOnce(1, null, doNext);
                    });
                }
                else {
                    if (!isSameBasePath) {
                        Laya.LocalStorage.setItem("__URL_basePath", Laya.URL.basePath);
                    }
                    completeHandler && completeHandler();
                }
            };
            doNext();
        }
        static PrintDirInfo() {
            let map = {};
            let dir = MiniAdpter.window.wx.env.USER_DATA_PATH;
            MiniFileUtil.GetDirInfo(dir, map);
            console.info("目录信息", map);
            for (let dirPath in map) {
                let dirInfo = map[dirPath];
                console.log(`${dirPath}, totalSize=${bToStr(dirInfo.totalSize)}, size=${bToStr(dirInfo.size)}`);
            }
        }
        static PrintSizeInfo(needSize, assetName) {
            console.log(`当前使用了空间大小 manifest.fileUsedSize=${bToStr(this.manifest.fileUsedSize)}`);
            if (needSize != undefined) {
                console.log(`当前文件需要空间大小 needSize=${bToStr(needSize)}, ${assetName}`);
            }
            this.PrintDirInfo();
        }
        static async DownAndSaveFileAsync(url, assetName, verpath, encoding = "utf8", onProgressUpdate = null) {
            let downResults = await MiniFileUtil.DownFileAsync(url, encoding, onProgressUpdate);
            var downErrorCode = downResults[0];
            var downData = downResults[1];
            if (downErrorCode != 0) {
                return [1, null];
            }
            let fileInfoResults = await MiniFileUtil.GetFileInfoAsync(downData.tempFilePath);
            var fileInfoErroCode = fileInfoResults[0];
            var fileInfoData = fileInfoResults[1];
            if (fileInfoErroCode != 0) {
                return [1, null];
            }
            let size = this.CheckSize(fileInfoData.size);
            if (size < 0) {
                console.log(`需要清理空间 当前使用了空间大小=${bToStr(this.manifest.fileUsedSize)}  当前文件大小=${bToStr(fileInfoData.size)}, 需要清理空间大小=${bToStr(size * -1)}`);
                await this.ClearCacheZieAsync(size * -1);
            }
            var temp = downData.tempFilePath.split("/");
            var tempFileName = temp[temp.length - 1];
            let miniPath = this.ToMiniPath(tempFileName);
            let copyErrorCode = await MiniFileUtil.CopyFileAsync(downData.tempFilePath, miniPath);
            if (copyErrorCode != 0) {
                this.PrintSizeInfo(fileInfoData.size, assetName);
                return [1, null];
            }
            let assetItem = {
                assetName: assetName,
                verpath: verpath,
                readyUrl: url,
                md5: miniPath,
                size: fileInfoData.size,
                times: Laya.Browser.now(),
                encoding: encoding
            };
            this.manifest.OnAddAsset(assetItem);
            return [0, assetItem];
        }
    }
    MiniFileManager.rootDirName = "GameRoot";
    MiniFileManager.manifestFileName = "manifest.json";
    MiniFileManager.totalSize = 50 * 1024 * 1024;
    MiniFileManager.freeSafeSize = 4 * 1024 * 1024;
    MiniFileManager.initTime = 0;
    window['MiniFileManager'] = MiniFileManager;

    class MiniLoader extends Laya.EventDispatcher {
        constructor() {
            super();
        }
        async _loadResourceFilter(type, url) {
            var thisLoader = this;
            var path = AssetUrlCache.GetPath(url);
            var urlItem = AssetUrlCache.GetItem(url);
            var miniPath;
            var isLocalNativeFile = false;
            if (MiniFileManager.isLocalNativeFile(url)) {
                miniPath = url;
                isLocalNativeFile = true;
            }
            if (!miniPath && path) {
                if (MiniFileManager.isLocalNativeFile(path)) {
                    miniPath = path;
                    isLocalNativeFile = true;
                }
            }
            var isCachedFile = false;
            if (!isLocalNativeFile && path) {
                var assetItem = MiniFileManager.manifest.GetItem(path);
                if (assetItem) {
                    if (assetItem.md5) {
                        if (assetItem.verpath == urlItem.verpath) {
                            miniPath = assetItem.md5;
                            isCachedFile = true;
                        }
                        else {
                            await MiniFileManager.DeleteAssetAsync(assetItem);
                        }
                    }
                }
            }
            var isDotCache = MiniFileManifest.IsDontCache(path);
            if (!isLocalNativeFile && !isCachedFile && !isDotCache) {
                let results = await MiniFileManager.DownAndSaveFileAsync(url, urlItem.path, urlItem.verpath);
                if (results[0] == 0) {
                    var assetItem = results[1];
                    miniPath = assetItem.md5;
                }
            }
            let findleUrl = miniPath ? miniPath : url;
            switch (type) {
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
        _loadSound(url) {
            var thisLoader = this;
            var sound = (new Laya.SoundManager._soundClass());
            sound.load(url);
            thisLoader.onLoaded(sound);
        }
        async _loadHttpRequestWhat(url, type) {
            var thisLoader = this;
            var path = thisLoader.url;
            var encoding = MiniAdpter.getUrlEncode(path, type);
            if (Laya.Loader.preLoadedMap[path])
                thisLoader.onLoaded(Laya.Loader.preLoadedMap[path]);
            else {
                let assetItem = MiniFileManager.manifest.GetItem(path);
                let hasCache = assetItem && assetItem.md5;
                var isDotCache = MiniFileManifest.IsDontCache(path);
                var isLocalNativeFile = MiniFileManager.isLocalNativeFile(path);
                if (type != Laya.Loader.IMAGE && (isLocalNativeFile || hasCache)) {
                    MiniFileUtil.ReadFile(url, encoding, (results) => {
                        var errorCode = results[0];
                        var data = results[1];
                        if (errorCode == 0) {
                            var tempData;
                            if (type == Laya.Loader.JSON || type == Laya.Loader.ATLAS || type == Laya.Loader.PREFAB || type == Laya.Loader.PLF) {
                                try {
                                    tempData = MiniAdpter.getJson(data.data);
                                }
                                catch (error) {
                                    console.error("解析JSON出错", assetItem, data);
                                }
                            }
                            else if (type == Laya.Loader.XML) {
                                tempData = Laya.Utils.parseXMLFromString(data.data);
                            }
                            else {
                                tempData = data.data;
                            }
                            if (assetItem) {
                                MiniFileManager.manifest.OnUseAsset(assetItem);
                            }
                            thisLoader.onLoaded(tempData);
                        }
                        else {
                            console.log("读取文件失败,需要从网络下载", url);
                            thisLoader._loadHttpRequest(url, type, thisLoader, thisLoader.onLoaded, thisLoader, thisLoader.onProgress, thisLoader, thisLoader.onError);
                        }
                    });
                }
                else {
                    if (url.indexOf("wxfile://") != -1) {
                        let info = await MiniFileUtil.GetFileInfoAsync(url);
                        console.log(thisLoader.url, info);
                        let c = MiniFileUtil.ReadFileSync(url);
                        console.log(thisLoader.url, c);
                    }
                    thisLoader._loadHttpRequest(url, type, thisLoader, thisLoader.onLoaded, thisLoader, thisLoader.onProgress, thisLoader, thisLoader.onError);
                }
            }
        }
    }

    class MiniMainLib {
        static Init() {
            window['MiniAdpter'] = Laya.MiniAdpter;
            var o = Laya;
            o.MiniFileManifest = MiniFileManifest;
            o.MiniFileUtil = MiniFileUtil;
            o.MiniFileManager = MiniFileManager;
            o.MiniLoader = MiniLoader;
            Laya.Loader.prototype._loadResourceFilter = MiniLoader.prototype._loadResourceFilter;
            Laya.Loader.prototype._loadSound = MiniLoader.prototype._loadSound;
            Laya.Loader.prototype._loadHttpRequestWhat = MiniLoader.prototype._loadHttpRequestWhat;
            MiniFileManager.Init();
        }
    }
    window['MiniMainLib'] = MiniMainLib;

    return MiniMainLib;

}());
