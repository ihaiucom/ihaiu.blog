import ConfigLoaderInterface from "../../Config/Interfaces/ConfigLoaderInterface";

import Handler = Laya.Handler;
import Loader = Laya.Loader;
import AssetItemInfo from "./AssetItemInfo";
import ProgressCallbackInterface from "./ProgressCallbackInterface";
import { AssetItemType } from "./AssetItemType";
import Game from "../../Game";
import GuiResPackageConfig from "../../FGUI/GuiResPackageConfig";
import GuiSetting from "../../FGUI/GuiSetting";
import { ConfigLoaderCallback } from "../../Config/Interfaces/ConfigLoaderCallback";
import AssetHelper from "./AssetHelper";
import Res from "../../Config/Keys/Res";

export default class AssetManager implements ConfigLoaderInterface
{
    loadedAssets = new Dictionary<string, number>();


    // 加载配置
    loadConfig(path: string, callback?: ConfigLoaderCallback)
    {
        if (callback)
        {
            // path = `config/csv/${path}.csv`;
            let obj = {
                onLoaded: () =>
                {
                    let txt = Laya.loader.getRes(path);
                    callback(txt, path);
                }
            };

            Laya.loader.load(path, Handler.create(obj, obj.onLoaded), null, Loader.TEXT);
        }
    }

    // 卸载配置文件
    unloadConfig(path: string)
    {
        Laya.loader.clearRes(path);
    }

    // 加载资源列表
    loadList(list: AssetItemInfo[], onObj?: any, onCompleteFun?: Function, onProgress?: ProgressCallbackInterface)
    {
        let count = list.length;
        let index = 0;
        let callback = {
            onComplete: (isSuccess) =>
            {
                let item: AssetItemInfo = list[index];
                // console.log("加载资源列表 onComplete: val=" + item);

                index++;

                if (onProgress)
                {
                    let rate = count > 0 ? index / count : 1;
                    onProgress(rate, index, count, item);
                }

                if (index >= count)
                {
                    if (onCompleteFun)
                    {
                        if (onObj)
                        {
                            onCompleteFun.apply(onObj);
                        }
                        else
                        {
                            onCompleteFun();
                        }

                    }
                }

            },
            onProgress: (val) =>
            {
                // console.log("加载资源列表 onProgress: val=" + val);
            }

        };

        if (list && list.length > 0)
        {
            let assets = [];
            let item: AssetItemInfo;
            for (let i = 0; i < list.length; i++)
            {
                item = list[i];
                if (!item)
                {
                    callback.onComplete(item);
                }

                // console.log(item.type + ", " + item.url);

                switch (item.type)
                {
                    case AssetItemType.FguiPackage:
                        this.loadFguiByPackagename(item.url, callback, callback.onComplete);
                        break;
                    case AssetItemType.FspritePackage:
                        this.loadFSpriteByPackagename(item.url, callback, callback.onComplete);
                        break;
                    case AssetItemType.Image:
                        assets.push({ url: item.url, type: Loader.IMAGE });
                        break;
                    case AssetItemType.Buffer:
                        assets.push({ url: item.url, type: Loader.BUFFER });
                        break;
                    case AssetItemType.Sound:
                        assets.push({ url: item.url, type: Loader.SOUND });
                        break;
                    case AssetItemType.Text:
                        assets.push({ url: item.url, type: Loader.TEXT });
                        break;
                    case AssetItemType.Json:
                        assets.push({ url: item.url, type: Loader.JSON });
                        break;
                    case AssetItemType.Xml:
                        assets.push({ url: item.url, type: Loader.XML });
                        break;
                    case AssetItemType.Font:
                        assets.push({ url: item.url, type: Loader.FONT });
                        break;
                    case AssetItemType.TTF:
                        assets.push({ url: item.url, type: Loader.TTF });
                        break;
                }
            }

            if (assets.length > 0)
            {
                for (let j = 0; j < assets.length; j++)
                {
                    if (this.loadedAssets.hasKey(assets[j].url))
                    {
                        callback.onComplete(true);
                    }
                    else
                    {
                        Laya.loader.load([assets[j]], Handler.create(callback, callback.onComplete), Handler.create(callback, callback.onProgress));
                    }

                    this.loadedAssets.add(assets[j].url, Game.time.localTimeMS);
                }
            }
        }
        else
        {
            callback.onComplete(null);
        }

    }

    // 加载fgui包
    loadFguiByPackagename(packageName: string, caller?: any, method?: Function)
    {
        let packageConfig: GuiResPackageConfig = Game.guiRes.getconfig(packageName);
        this.loadFgui(packageConfig, caller, method);
    }

    async loadFguiByPackagenameAsync(packageName: string):Promise<GuiResPackageConfig>
    {
        return new Promise<GuiResPackageConfig>((resolve)=>{
            this.loadFguiByPackagename(packageName, this, (packageConfig: GuiResPackageConfig)=>
            {
                resolve(packageConfig);
            })
		});
    }



    // 加载fsprite包
    loadFSpriteByPackagename(packageName: string, caller?: any, method?: Function)
    {
        let packageConfig: GuiResPackageConfig = Game.spriteRes.getconfig(packageName);
        if(!packageConfig)
        {
            console.error(`AssetManager loadFSpriteByPackagename: packageConfig=${packageConfig} packageName=${packageName}`);
            return;
        }
        this.loadFgui(packageConfig, caller, method);
    }

    loadFgui(packageConfig: GuiResPackageConfig, caller?: any, method?: Function)
    {
        if(!packageConfig)
        {
            console.error(`AssetManager loadFgui: packageConfig=${packageConfig}`);
            return;
        }

        let callback = {
            apply: () =>
            {

                GuiSetting.addPackage(packageConfig.packagePath, packageConfig);

                if (method)
                {
                    if (caller)
                    {
                        return method.apply(caller, [packageConfig]);
                    }
                    else
                    {
                        method(packageConfig);
                    }
                }
            }
        };

        GuiSetting.addPackageReferenceNum(packageConfig.packagePath);
        if (GuiSetting.hasLoadPackage(packageConfig.packagePath))
        {
            callback.apply();
            return;
        }

        Laya.loader.load(<any>packageConfig.loadList, Handler.create(callback, callback.apply));
    }

    unloadFgui(packageName: string, forceDispose?: boolean)
    {
        if (forceDispose === undefined)
            forceDispose = false;


        let packageConfig: GuiResPackageConfig = Game.guiRes.getconfig(packageName);
        if (!packageConfig)
            packageConfig = Game.spriteRes.getconfig(packageName);

        if (packageConfig)
        {
            let referenceNum = GuiSetting.removePackageReferenceNum(packageConfig.packagePath);
            if (!forceDispose)
            {
                if (referenceNum > 0)
                {
                    return;
                }
            }

            GuiSetting.removePackage(packageConfig.packagePath, packageConfig);
            let list = packageConfig.loadList;
            for (let i = 0; i < list.length; i++)
            {
                // console.log("==clearRes:" + list[i].url);
                Laya.loader.clearRes(list[i].url);
            }
        }
    }



    //加载特效
    loadFx(path: string, caller: any, complete: Function): void
    {
        Laya.loader.load(path, Handler.create(null, (setting: Laya.ParticleSetting) =>
        {
            if (complete)
            {
                if (caller)
                {
                    complete.apply(caller, setting);
                }
                else
                {
                    complete(setting);
                }
            }
        }), null, Loader.JSON);
    }

    // 加载资源
    load(path: string, complete: Function, caller:any, type:AssetItemType)
    {
        Laya.loader.load(path, 
            Handler.create(null, (res: any) =>
            {
                if (complete)
                {
                    if (caller)
                    {
                        complete.apply(caller, [res]);
                    }
                    else
                    {
                        complete(res);
                    }
                }
            }), 
            null, AssetHelper.assetItemType2LayaLoaderType(type));
    }

    // 加载资源, 异步
    async loadAsync(path: string, type:AssetItemType): Promise<any>
    {
        return new Promise<void>((resolve)=>
        {
            this.load(path, (res: any)=>
            {
                resolve(res);
            }, null, type);
         });
    }
    
    
    // 加载资源, 异步
    async loadResAsync(path: string, type: string): Promise<any>
    {
        return new Promise<any>((resolve)=>
        {
            Laya.loader.load(path, 
                Laya.Handler.create(null, (res: any) =>
                {
                    Laya.timer.frameOnce(1, null, ()=>{
                        resolve(res);
                    })
                }), 
                null, type);
         });
    }

    // 加载Shader
    async loadShaderVSAsync(filename: string): Promise<string>
    {
        let code = await this.loadAsync(Res.getShaderVS(filename), AssetItemType.Text);
        return code.replace(/\r/g, "");
    }

    // 加载Shader
    async loadShaderPSAsync(filename: string): Promise<string>
    {
        let code =  await this.loadAsync(Res.getShaderPS(filename), AssetItemType.Text);
        return code.replace(/\r/g, "");
    }

    
    // 预装载声音
    async preloadAndInstallSoundAsync(path: string): Promise<boolean>
    {
        return new Promise<boolean>((resolve)=>
        {
            if(!Engine.borwer.isWXGame)
            {
                resolve(false);
                return;
            }

            let sound = Laya.SoundManager.preloadSound(path);
            if(!sound)
            {
                resolve(false);
                return;
            }
            sound.once(Laya.Event.COMPLETE, this, ()=>{
                resolve(true);
                sound.offAll();
            });

            sound.once(Laya.Event.ERROR, this, ()=>{
                resolve(false);
                sound.offAll();
            });
        });
    }
    preloadAndInstallSound(path: string, callbacker?:any, onComplete?:Function)
    {
        var completeFun = (v:boolean)=>{
            if(onComplete)
            {
                if(callbacker)
                {
                    onComplete.call(callbacker, v);
                }
                else
                {
                    onComplete(Vector4);
                }
            }
        }


        let sound = Laya.SoundManager.preloadSound(path);
        if(!sound)
        {
            completeFun(false);
            return;
        }
        sound.once(Laya.Event.COMPLETE, this, ()=>
        {
            completeFun(true);
            sound.offAll();
        });

        sound.once(Laya.Event.ERROR, this, ()=>
        {
            completeFun(true);
            sound.offAll();
        });
    }



}

window['AssetManager'] = AssetManager;