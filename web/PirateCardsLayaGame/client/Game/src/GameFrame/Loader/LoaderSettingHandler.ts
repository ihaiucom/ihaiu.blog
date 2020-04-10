import Game from "../../Game";
import { LoaderId } from "./LoaderId";
import LoaderEnterModelPanel from "./LoaderEnterModelPanel";


//======================
// 加载界面消息处理器
//----------------------
export default class LoaderSettingHandler
{
	percent: number = 0;
    private showPercent: number = 0;
	
	setBegin()
	{
		this.percent = 0;
		this.showPercent = 0;
		this.setPercent(0);
	}

	loading(percent: number)
	{
		if(percent <= 0)
		{
			percent = 0.001;
		}
		else if(percent > 100)
		{
			percent = 100;
		}
		this.percent = percent;
    }
    
	setTip(txt: string)
	{
        let ctl = Game.loader.current;
		if (ctl) 
		{
			ctl.setTip(txt);	
		}
    }

    setPercent(percent: number)
    {
        let ctl = Game.loader.current;
		if (ctl) 
		{
			ctl.setMax(100);
			ctl.setProgress(Math.ceil(percent));	
		}
    }

	private _tweenHandler;

	private starTweenPrecent()
	{
		this.stopTweenPrecent();
		this._tweenHandler = setInterval(() =>
		{
			this.showPercent = Math.min(100, Math.ceil(Mathf.Lerp(this.showPercent, this.percent, 0.2)));
			this.setPercent(this.showPercent);
			if(this.showPercent >= 100)
				this.stopTweenPrecent();
		}, 100);
	}

	private stopTweenPrecent()
	{
		if (this._tweenHandler)
		{
			clearInterval(this._tweenHandler);
			this._tweenHandler = null;
		}
	}


    
	// 开始加载	
	onBegin()
	{
		this.setBegin();
		this.starTweenPrecent();

		// let panel = Game.loader.current.loaderPanel;
		// if (panel instanceof LoaderEnterWarPanel) 
		// {
		// 	Laya.timer.loop(5000, this, this.Reconnection);
		// }
	}

	// 加载配置	
	onLoadedConfig(index: number, count: number, rate: number)
	{
		this.setTip(Game.launchText.LoadedConfig);
		this.loading(0 + Math.ceil(rate * 40));
	}

	// 加载语言配置
	onLoadedLangConfig(index: number, count: number, rate: number)
	{
		this.setTip(Game.launchText.LoadedConfig);
		this.loading(40 + Math.ceil(rate * 20));
    }
    
	// 加载UI
	onLoadedFgui(index: number, count: number)
	{
		this.setTip(Game.launchText.LoadedUI);
		this.loading(60 + Math.ceil((index / count * 40) ));
	}
	
	// 完成	
	onEnd()
	{
		this.setTip(Game.launchText.LoadedEnd);
		this.loading(100);

		// let panel = Game.loader.current.loaderPanel;
		// if (panel instanceof LoaderEnterWarPanel) 
		// {
		// 	Laya.timer.clear(this, this.Reconnection);
		// }
	}

	// 重置进度条
	Reset()
	{
		this.loading(0);
	}
}