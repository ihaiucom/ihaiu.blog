
import { LoaderId } from "./LoaderId";
import LoaderCtl from "./LoaderCtl";
import LoaderEnterModelPanel from "./LoaderEnterModelPanel";
import LoaderEnterWarPanel from "./LoaderEnterWarPanel";
import LoaderEnterLoginPanel from "./LoaderEnterLoginPanel";


//=================
// 加载界面管理器
//------------------
export default class LoaderManager
{
    
    private static _Instance: LoaderManager;
    static get Instance(): LoaderManager
    {
        if (!LoaderManager._Instance)
        {
            LoaderManager._Instance = new LoaderManager();
        }
        return LoaderManager._Instance;
    }



    // 加载器字典
    dict: Dictionary<LoaderId, LoaderCtl> = new Dictionary<LoaderId, LoaderCtl>();

    // 当前打开的界面
    current: LoaderCtl;

    private isInited = false;

    // 初始化
    install()
    {
        if (this.isInited)
            return;

        this.isInited = true;
        // None
        let ctl = new LoaderCtl();
        ctl.loaderId = LoaderId.None;
        this.dict.add(ctl.loaderId, ctl);

        let defaultPanel = new LoaderEnterModelPanel();

        // Circle   暂时无用
        ctl = new LoaderCtl();
        ctl.loaderId = LoaderId.Circle;
        ctl.loaderPanel = defaultPanel;
        this.dict.add(ctl.loaderId, ctl);

        // Launch   登录时用
        let loginPanel = new LoaderEnterLoginPanel();
        ctl = new LoaderCtl();
        ctl.loaderId = LoaderId.Launch;
        ctl.loaderPanel = loginPanel;
        this.dict.add(ctl.loaderId, ctl);

        
        // EnterWar 进入战斗用
        let warPanel = new LoaderEnterWarPanel();
        ctl = new LoaderCtl();
        ctl.loaderId = LoaderId.EnterWar;
        ctl.loaderPanel = warPanel;
        this.dict.add(ctl.loaderId, ctl);

        // Module   进入模块用
        let modelPanel = new LoaderEnterModelPanel();
        ctl = new LoaderCtl();
        ctl.loaderId = LoaderId.EnterModule;
        ctl.loaderPanel = modelPanel;
        this.dict.add(ctl.loaderId, ctl);
    }

    // 获取加载进度面板控制器
    getLoaderCtl(loaderId: LoaderId)
    {
        return this.dict.getValue(loaderId);
    }



    // 打开加载进度面板控制器
    open(loaderId: LoaderId): LoaderCtl
    {
        let loaderCtl = this.getLoaderCtl(loaderId);
        if(!loaderCtl)
        {
            console.error("没有找到加载控制器 LoaderManager open loaderId=", loaderId);
        }
        loaderCtl.open();

        this.current = loaderCtl;
        return loaderCtl;
    }

    // 关闭加载进度控制器
    close(loaderId: LoaderId)
    {
        let loaderCtl = this.getLoaderCtl(loaderId);

        if (loaderCtl)
        {
            if (this.current == loaderCtl)
            {
                this.current = null;
            }

            loaderCtl.close();
        }
    }

    // 关闭所有
    closeAll()
    {
        let list = this.dict.getValues();
        for (let i = 0; i < list.length; i++)
        {
            list[i].close();
        }

        this.current = null;
    }

    // 设置进度
    setProgress(progress: number)
    {
        if (this.current)
        {
            this.current.setProgress(progress);
        }
    }


    // 设置进度最大值
    setMax(max: number)
    {
        if (this.current)
        {
            this.current.setMax(max);
        }
    }

}