import MiniFileManager from "./MiniFileManager";

export default class MiniFileUtil
{
    /** 微信文件系统管理对象 */
    static fs:wx.FileSystemManager;
    /** 微信文件下载函数 */
    static wxdown:Function;

    /** 创建目录 */
    static MkdirSync(dirPath:string, recursive:boolean = true)
    {
        try 
        {
            this.fs.mkdirSync(dirPath, recursive);
        }
        catch (error) 
        {
            console.warn("创建目录已存在：", error);
        }
    }

    /** 创建目录 */
    static async MkdirAsync(dirPath:string, recursive:boolean = true):Promise<boolean>
    {
        return new Promise<boolean>((resolve)=>
        {
           this.Mkdir(dirPath, recursive, (result: boolean)=>
           {
                resolve(result);
           });

        });
    }

    
    /** 创建目录 */
    static Mkdir(dirPath:string, recursive:boolean = true, callback:((res: any) => void))
    {
        this.fs.mkdir(
        {
            dirPath:dirPath,
            recursive:recursive,
            success: function (data) 
            {
                if(callback) callback(true);
            }, 
            fail: function (data) 
            {
                if (data.errMsg.indexOf("file already exists") != -1)
                {
                    if(callback) callback(true);
                }
                else
                {
                    if(callback) callback(false);
                }
            } 
        });
    }


    /** 读取文件内容 */
    static ReadFileSync(miniFilePath:string, encoding:string = "utf8", isThrowError: boolean = true)
    {

        try 
        {
            let content = this.fs.readFileSync(miniFilePath, encoding);
            return content;
        }
        catch (error) 
        {
            if(isThrowError)
            {
                console.error("读取文件失败： ", miniFilePath,  error);
            }
            return null;
        }
    }

    
    static async ReadFileAsync(miniFilePath:string, encoding:string = "utf8", callback, isThrowError: boolean = true):Promise<any[]>
    {
        return new Promise<any[]>((resolve)=>
        {
           this.ReadFileAsync(miniFilePath, encoding, (results:any[])=>
           {
                resolve(results);
           });
        });
    }


    static ReadFile(miniFilePath:string, encoding:string = "utf8", callback, isThrowError: boolean = true)
    {
        this.fs.readFile(
            { 
                filePath: miniFilePath,
                encoding: encoding, 
                success: function (data) 
                {
                    callback([0, data]);
                }, 
                fail: function (data) 
                {
                    console.error("读取文件失败", miniFilePath, data);
                    callback([1, data]);
                } 
            });
    }

    /** 写入文件 */
    static WriteFileSync(miniFilePath: string, data:any, encoding:string = "utf8", isThrowError: boolean = true)
    {
        
        try 
        {
            this.fs.writeFileSync(miniFilePath, data, encoding);
            return true;
        }
        catch (error) 
        {
            if(isThrowError)
            {
                console.error("写入文件失败： ", miniFilePath,  error);
            }
            return false;
        }

    }
    
    /** 删除目录 */
    static DeleteDirSync(miniDirPath:string)
    {
        try 
        {
            this.fs.rmdirSync(miniDirPath, true);
        } 
        catch (error) 
        {
            console.error("删除目录", error);
        }
    }

    /** 异步删除文件 */
    static DeleteFileAsync(miniPath:string):Promise<number>
    {
        return new Promise<number>((resolve)=>
        {
           this.DeleteFile(miniPath, (errorCode)=>
           {
                resolve(errorCode);
           });

        });

    }

    /** 删除文件 */
    static DeleteFile(miniPath:string, callback)
    {
        this.fs.unlink(
            { 
                filePath: miniPath, 
                success: function (data) 
                {
                    if(callback)
                    {
                        callback(0);
                    }
                }, 
                fail: function (data) 
                {
                    console.warn("删除文件失败: ", miniPath, data);
                    if(callback)
                    {
                        callback(1);
                    }
                } 
            });

    }



    /** 异步下载文件 */
    static DownFileAsync(url, encoding = "utf8", onProgressUpdate = null) : Promise<any[]>
    {
        return new Promise<any[]>((resolve)=>
        {
            this.DownFile(url, encoding, (errorCode, data)=>
            {
                resolve([errorCode, data]);
            }, onProgressUpdate);
        });
    }
    
    /** 下载文件 */
    static DownFile(url, encoding = "utf8", onComplete = null, onProgressUpdate = null) 
    {
        var downloadTask = this.wxdown(
        { 
            url: url, 
            success:  (data)=>
            {
                if (data.statusCode === 200)
                {
                    onComplete != null && onComplete(0, data);
                }  
                // else if (data.statusCode === 403) 
                // {
                //     onComplete != null && onComplete(0, url);
                // }
                else 
                {
                    console.error("下载文件失败", url, data);
                    onComplete != null && onComplete(1, data);
                }
            }, 
            fail:  (data)=>
            {
                console.error("下载文件失败", url, data);
                onComplete != null && onComplete(1, data);
            } 
        });

        if(onProgressUpdate != null)
        {
            downloadTask.onProgressUpdate( (data) =>
            {
                onProgressUpdate(data);
            });

        }
    }

    /** 获取文件信息 */
    static async GetFileInfoAsync(miniPath:string)
    {
        return new Promise<any[]>((resolve)=>
        {
            this.fs.getFileInfo({
                filePath: miniPath,
                success:  (data)=>
                {
                    resolve([0, data]);
                },
                fail:  (data) =>
                {
                    console.error(`获取文件信息失败: miniPath=${miniPath}, data=${data}`);
                    resolve([1, data]);
                }
            })
        });
    }

    
    /** 异步拷贝文件 */
    static CopyFileAsync(srcPath:string, destPath:string):Promise<number>
    {
        return new Promise<number>((resolve)=>
        {
            this.CopyFile(srcPath, destPath, (errorCode)=>{
                resolve(errorCode);
            });
        });
    }

    /** 拷贝文件 */
    static CopyFile(srcPath:string, destPath:string, callback)
    {
        this.fs.copyFile(
            { 
                srcPath: srcPath,
                destPath: destPath,
                success: function (data2) 
                {
                    if(callback)
                    {
                        callback(0);
                    }
                }, 
                fail: function (data) 
                {
                    console.error(`拷贝文件失败 srcPath=${srcPath}, destPath=${destPath}`, data );
                    if(callback)
                    {
                        callback(1);
                    }
                } 
            });
    }


    
    /** 获取目录信息 */
    static GetDirInfo(dir:string, map:object)
    {
        try 
        {
            let dirInfo = map[dir] ? map[dir] : map[dir] = {fileCount:0, dirCount: 0, totalSize:0, size:0};
            let list = this.fs.readdirSync(dir);
            for(let fileName of list)
            {
                let filePath = dir + "/" + fileName;
                try 
                {
                    let state =  this.fs.statSync(filePath)
                    if(state.isDirectory())
                    {
                        this.GetDirInfo(filePath, map);
                        let childDirInfo = map[filePath];
                        if(childDirInfo)
                        {
                            dirInfo.totalSize += childDirInfo.totalSize;
                        }
                        dirInfo.dirCount ++;
                    }
                    else
                    {
                        dirInfo.totalSize += state.size;
                        dirInfo.size += state.size;
                        dirInfo.fileCount ++;
                        
                    }
                } 
                catch (error) 
                {
                    
                }
            }
        } 
        catch (error) 
        {
            console.log("获取目录信息出错",dir, error);
        }
        
    }

}

window['MiniFileUtil'] = MiniFileUtil;