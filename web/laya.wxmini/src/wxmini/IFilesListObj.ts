import { IFilesItemObj } from "./IFilesItemObj";

export interface IFilesListObj
{
    // 已经使用的缓存大小
    fileUsedSize?: any; // number

    // key: "http://192.168.2.224:8900/bin/res/fgui/GameLaunch_atlas0.png",
    [url: string]: IFilesItemObj ;
}