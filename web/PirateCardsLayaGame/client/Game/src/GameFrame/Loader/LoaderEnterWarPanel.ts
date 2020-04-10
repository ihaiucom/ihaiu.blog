import LoaderPanel from "./LoaderPanel";
import Game from "../../Game";
import EnterWarLoader from "../../FGUI/Extends/GameLaunch/EnterWarLoader";

export default class LoaderEnterWarPanel extends LoaderPanel 
{
    loader: EnterWarLoader;

    tips: string[] = [];

    public constructor() 
    {
        super();
    }

    /** 创建 */
    protected onInit(): void
    {
        this.loader = EnterWarLoader.createInstance();
        this.loader.onInit();
        this.contentPane = this.loader;
        
        super.onInit();
        this.tips = Game.launchText.tips;
        this.setVersion();
    }


    /** 显示完成 */
    protected onShown(): void
    {
        super.onShown();
        this.loader.onShow();
        this.beginTips();
    }

    /** 隐藏完成 */
    protected onHide(): void
    {
        super.onHide();
        this.loader.onHide();
        this.stopTips();
    }

    beginTips()
    {
        this.stopTips();
        if (this.tips && this.tips.length > 0)
        {
            this.__setTipHandler();
        }
    }

    stopTips()
    {
        if (this.__setTipHandlerTimer > 0)
        {
            clearTimeout(this.__setTipHandlerTimer);
            this.__setTipHandlerTimer = -1;
        }
    }

    private __setTipHandlerTimer:any = -1;
    private __setTipHandler()
    {
        this.__setTipHandlerTimer = setTimeout(() =>
        {
            this.__setTipHandler();
        }, Random.range(100, 400));
    }


    /** 设置最大值 */
    setMax(value: number)
    {
        // console.log("value", value);
    }


    /** 设置加载进度 */
    setValue(value: number)
    {
        this.loader.setValue(value);
    }

    /** 设置Tip */
    setTip(tip: string)
    {
        
    }

    /** 设置Tips */
    setTips(tips: string[])
    {
        
    }


    
}