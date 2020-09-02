
import { IFilesListObj } from "./IFilesListObj";
import { IFilesItemObj } from "./IFilesItemObj";


export default class MiniFileMgrSrc
{
    /** 微信文件系统管理对象 */
    static fs:wx.FileSystemManager;
    /** 微信文件下载函数 */
    static wxdown:Function;
    
    
    /** 
     * 磁盘文件存储路径
     * "/layaairGame"
     */
    static fileNativeDir: string;

    /** 缓存文件Map */
	static filesListObj:IFilesListObj = {};
	static fakeObj:IFilesListObj = {};
	static fileListName:string = "layaairfiles.txt";
	static ziyuFileData = {};
	static ziyuFileTextureData = {};
	static loadPath:string = "";
	static DESCENDING = 2;
    static NUMERIC = 16;
    
    static Init()
    {
        this.fs = wx.getFileSystemManager();
        this.wxdown = wx.downloadFile;
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

    /** 获取文件信息 */
    static getFileInfo(fileUrl:string) : IFilesItemObj
    {
        var fileNativePath = fileUrl;
        var fileObj = MiniFileMgr.fakeObj[fileNativePath];
        if (fileObj == null)
            return null;
        else
            return fileObj;
    }


    /** 读取文件内容， 如果没有就从网络下载 */
    static read(filePath, encoding = "utf8", callBack = null, readyUrl = "", isSaveFile = false, fileType = "") 
    {
        var fileUrl;
        if (readyUrl != "" && (readyUrl.indexOf("http://") != -1 || readyUrl.indexOf("https://") != -1)) 
        {
            fileUrl = MiniFileMgr.getFileNativePath(filePath);
        }
        else 
        {
            fileUrl = filePath;
        }

        fileUrl = Laya.URL.getAdptedFilePath(fileUrl);
        MiniFileMgr.fs.readFile(
        { 
            filePath: fileUrl, encoding: encoding, 
            success: function (data) 
            {
                callBack != null && callBack.runWith([0, data]);
            }, 
            fail: function (data) 
            {
                if (data && readyUrl != "")
                    MiniFileMgr.downFiles(readyUrl, encoding, callBack, readyUrl, isSaveFile, fileType);
                else
                    callBack != null && callBack.runWith([1]);
            } 
        });
    }

    static downFiles(fileUrl, encoding = "utf8", callBack = null, readyUrl = "", isSaveFile = false, fileType = "", isAutoClear = true) 
    {
        var downloadTask = MiniFileMgr.wxdown(
        { 
            url: fileUrl, 
            success: function (data) 
            {
                if (data.statusCode === 200)
                    MiniFileMgr.readFile(data.tempFilePath, encoding, callBack, readyUrl, isSaveFile, fileType, isAutoClear);
                else if (data.statusCode === 403) 
                {
                    callBack != null && callBack.runWith([0, fileUrl]);
                }
                else 
                {
                    callBack != null && callBack.runWith([1, data]);
                }
            }, 
            fail: function (data) {
                callBack != null && callBack.runWith([1, data]);
            } 
        });

        downloadTask.onProgressUpdate(function (data) 
        {
            callBack != null && callBack.runWith([2, data.progress]);
        });
    }

    
    static downOtherFiles(fileUrl, callBack = null, readyUrl = "", isSaveFile = false, isAutoClear = true) 
    {
        MiniFileMgr.wxdown(
        { 
            url: fileUrl, 
            success: function (data) 
            {
                if (data.statusCode === 200) 
                {
                    if ((MiniAdpter.autoCacheFile || isSaveFile) && readyUrl.indexOf("qlogo.cn") == -1 && readyUrl.indexOf(".php") == -1) 
                    {
                        callBack != null && callBack.runWith([0, data.tempFilePath]);
                        MiniFileMgr.copyFile(data.tempFilePath, readyUrl, null, "", isAutoClear);
                    }
                    else
                        callBack != null && callBack.runWith([0, data.tempFilePath]);
                }
                else 
                {
                    callBack != null && callBack.runWith([1, data]);
                }
            }, 
            fail: function (data) 
            {
                callBack != null && callBack.runWith([1, data]);
            } 
        });
    }

    static readFile(filePath, encoding = "utf8", callBack = null, readyUrl = "", isSaveFile = false, fileType = "", isAutoClear = true) 
    {
        filePath = Laya.URL.getAdptedFilePath(filePath);
        MiniFileMgr.fs.readFile(
        { 
            filePath: filePath,
            encoding: encoding, 
            success: function (data) 
            {
                if (filePath.indexOf("http://") != -1 || filePath.indexOf("https://") != -1) 
                {
                    if (MiniAdpter.autoCacheFile || isSaveFile) 
                    {
                        callBack != null && callBack.runWith([0, data]);
                        MiniFileMgr.copyFile(filePath, readyUrl, null, encoding, isAutoClear);
                    }
                    else
                        callBack != null && callBack.runWith([0, data]);
                }
                else
                    callBack != null && callBack.runWith([0, data]);
            }, 
            fail: function (data) 
            {
                if (data)
                    callBack != null && callBack.runWith([1, data]);
            } 
        });
    }
    

    static downLoadFile(fileUrl, fileType = "", callBack = null, encoding = "utf8") 
    {
        if (window.navigator.userAgent.indexOf('MiniGame') < 0) 
        {
            Laya.loader.load(fileUrl, callBack);
        }
        else 
        {
            if (fileType == Laya.Loader.IMAGE || fileType == Laya.Loader.SOUND)
                MiniFileMgr.downOtherFiles(fileUrl, callBack, fileUrl, true, false);
            else
                MiniFileMgr.downFiles(fileUrl, encoding, callBack, fileUrl, true, fileType, false);
        }
    }

    static copyFile(tempFilePath, readyUrl, callBack, encoding = "", isAutoClear = true) 
    {
        var temp = tempFilePath.split("/");
        var tempFileName = temp[temp.length - 1];
        var fileurlkey = readyUrl;
        var fileObj = MiniFileMgr.getFileInfo(readyUrl);
        var saveFilePath = MiniFileMgr.getFileNativePath(tempFileName);
        MiniFileMgr.fakeObj[fileurlkey] = { md5: tempFileName, readyUrl: readyUrl, size: 0, times: Laya.Browser.now(), encoding: encoding };
        var totalSize = 50 * 1024 * 1024;
        var chaSize = 4 * 1024 * 1024;
        var fileUseSize = MiniFileMgr.getCacheUseSize();
        if (fileObj) 
        {
            if (fileObj.readyUrl != readyUrl) 
            {
                MiniFileMgr.fs.getFileInfo(
                {
                    filePath: tempFilePath,
                    success: function (data) 
                    {
                        if ((isAutoClear && (fileUseSize + chaSize + data.size) >= totalSize)) 
                        {
                            if (data.size > MiniAdpter.minClearSize)
                                MiniAdpter.minClearSize = data.size;
                            MiniFileMgr.onClearCacheRes();
                        }

                        MiniFileMgr.deleteFile(tempFilePath, readyUrl, callBack, encoding, data.size);
                    },
                    fail: function (data) 
                    {
                        callBack != null && callBack.runWith([1, data]);
                    }
                });
            }
            else
                callBack != null && callBack.runWith([0]);
        }
        else {
            MiniFileMgr.fs.getFileInfo({
                filePath: tempFilePath,
                success: function (data) {
                    if ((isAutoClear && (fileUseSize + chaSize + data.size) >= totalSize)) {
                        if (data.size > MiniAdpter.minClearSize)
                            MiniAdpter.minClearSize = data.size;
                        MiniFileMgr.onClearCacheRes();
                    }
                    MiniFileMgr.fs.copyFile({ srcPath: tempFilePath, destPath: saveFilePath, success: function (data2) {
                            MiniFileMgr.onSaveFile(readyUrl, tempFileName, true, encoding, callBack, data.size);
                        }, fail: function (data) {
                            callBack != null && callBack.runWith([1, data]);
                        } });
                },
                fail: function (data) {
                    callBack != null && callBack.runWith([1, data]);
                }
            });
        }
    }

    static onClearCacheRes() 
    {
        var memSize = MiniAdpter.minClearSize;
        var tempFileListArr = [];
        for (var key in MiniFileMgr.filesListObj) 
        {
            if (key != "fileUsedSize")
                tempFileListArr.push(MiniFileMgr.filesListObj[key]);
        }

        MiniFileMgr.sortOn(tempFileListArr, "times", MiniFileMgr.NUMERIC);

        var clearSize = 0;
        for (var i = 1, sz = tempFileListArr.length; i < sz; i++) 
        {
            var fileObj = tempFileListArr[i];
            if (clearSize >= memSize)
                break;
            clearSize += fileObj.size;
            MiniFileMgr.deleteFile("", fileObj.readyUrl);
        }
    }
    static sortOn(array, name, options = 0) 
    {
        if (options == MiniFileMgr.NUMERIC)
            return array.sort(function (a, b) { return a[name] - b[name]; });

        if (options == (MiniFileMgr.NUMERIC | MiniFileMgr.DESCENDING))
            return array.sort(function (a, b) { return b[name] - a[name]; });

        return array.sort(function (a, b) { return a[name] - b[name]; });
    }

    static getFileNativePath(fileName) 
    {
        return MiniFileMgr.fileNativeDir + "/" + fileName;
    }

    static deleteFile(tempFileName, readyUrl = "", callBack = null, encoding = "", fileSize = 0) 
    {
        var fileObj = MiniFileMgr.getFileInfo(readyUrl);
        var deleteFileUrl = MiniFileMgr.getFileNativePath(fileObj.md5);
        var isAdd = tempFileName != "" ? true : false;
        MiniFileMgr.onSaveFile(readyUrl, tempFileName, isAdd, encoding, callBack, fileSize);
        MiniFileMgr.fs.unlink(
        { 
            filePath: deleteFileUrl, 
            success: function (data) 
            {
                if (tempFileName != "") {
                    var saveFilePath = MiniFileMgr.getFileNativePath(tempFileName);
                    MiniFileMgr.fs.copyFile(
                    { 
                        srcPath: tempFileName, 
                        destPath: saveFilePath, 
                        success: function (data) 
                        {
                        },

                        fail: function (data) 
                        {
                            callBack != null && callBack.runWith([1, data]);
                        } 
                    });
                }
            }, 
            fail: function (data) 
            {
            } 
        });
    }

    static deleteAll() 
    {
        var tempFileListArr = [];
        for (var key in MiniFileMgr.filesListObj) 
        {
            if (key != "fileUsedSize")
                tempFileListArr.push(MiniFileMgr.filesListObj[key]);
        }

        for (var i = 1, sz = tempFileListArr.length; i < sz; i++) 
        {
            var fileObj = tempFileListArr[i];
            MiniFileMgr.deleteFile("", fileObj.readyUrl);
        }

        if (MiniFileMgr.filesListObj && MiniFileMgr.filesListObj.fileUsedSize) 
        {
            MiniFileMgr.filesListObj.fileUsedSize = 0;
        }
        MiniFileMgr.writeFilesList("", JSON.stringify({}), false);
    }

    static onSaveFile(readyUrl, md5Name, isAdd = true, encoding = "", callBack = null, fileSize = 0) 
    {
        var fileurlkey = readyUrl;
        if (MiniFileMgr.filesListObj['fileUsedSize'] == null)
            MiniFileMgr.filesListObj['fileUsedSize'] = 0;

        if (isAdd) 
        {
            var fileNativeName = MiniFileMgr.getFileNativePath(md5Name);
            MiniFileMgr.filesListObj[fileurlkey] = { md5: md5Name, readyUrl: readyUrl, size: fileSize, times: Laya.Browser.now(), encoding: encoding };
            MiniFileMgr.filesListObj['fileUsedSize'] = parseInt(MiniFileMgr.filesListObj['fileUsedSize']) + fileSize;
            MiniFileMgr.writeFilesList(fileurlkey, JSON.stringify(MiniFileMgr.filesListObj), true);
            callBack != null && callBack.runWith([0]);
        }
        else 
        {
            if (MiniFileMgr.filesListObj[fileurlkey]) 
            {
                var deletefileSize = parseInt(<any>MiniFileMgr.filesListObj[fileurlkey].size);
                MiniFileMgr.filesListObj['fileUsedSize'] = parseInt(MiniFileMgr.filesListObj['fileUsedSize']) - deletefileSize;
                delete MiniFileMgr.filesListObj[fileurlkey];
                MiniFileMgr.writeFilesList(fileurlkey, JSON.stringify(MiniFileMgr.filesListObj), false);
                callBack != null && callBack.runWith([0]);
            }
        }
    }

    static writeFilesList(fileurlkey, filesListStr, isAdd) 
    {
        var listFilesPath = MiniFileMgr.fileNativeDir + "/" + MiniFileMgr.fileListName;
        MiniFileMgr.fs.writeFile(
        { 
            filePath: listFilesPath, 
            encoding: 'utf8', 
            data: filesListStr, 
            success: function (data) 
            {
            }, 
            fail: function (data) 
            {
            } 
        });

        if (!MiniAdpter.isZiYu && MiniAdpter.isPosMsgYu) 
        {
            MiniAdpter.window.wx.postMessage(
            { 
                url: fileurlkey, 
                data: MiniFileMgr.filesListObj[fileurlkey], 
                isLoad: "filenative", 
                isAdd: isAdd 
            });
        }
    }

    static getCacheUseSize() 
    {
        if (MiniFileMgr.filesListObj && MiniFileMgr.filesListObj['fileUsedSize'])
            return MiniFileMgr.filesListObj['fileUsedSize'];
        return 0;
    }

    static existDir(dirPath, callBack) 
    {
        MiniFileMgr.fs.mkdir(
        { 
            dirPath: dirPath, 
            success: function (data) 
            {
                callBack != null && callBack.runWith([0, { data: JSON.stringify({}) }]);
            }, 
            fail: function (data) 
            {
                if (data.errMsg.indexOf("file already exists") != -1)
                    MiniFileMgr.readSync(MiniFileMgr.fileListName, "utf8", callBack);
                else
                    callBack != null && callBack.runWith([1, data]);
            } 
        });
    }

    static readSync(filePath, encoding = "utf8", callBack = null, readyUrl = "") 
    {
        var fileUrl = MiniFileMgr.getFileNativePath(filePath);
        var filesListStr;
        try 
        {
            filesListStr = MiniFileMgr.fs.readFileSync(fileUrl, encoding);
            callBack != null && callBack.runWith([0, { data: filesListStr }]);
        }
        catch (error) 
        {
            callBack != null && callBack.runWith([1]);
        }
    }

    static setNativeFileDir(value) 
    {
        MiniFileMgr.fileNativeDir = MiniAdpter.window.wx.env.USER_DATA_PATH + value;
    }
    
}

MiniFileMgr.Init();