/**
 * 屏幕分辨率
 */
export default class ScreenSettingConfig
{
	// 开发分辨率
	developWidth = 750;
	developHeight = 1334;
	get developAspect(): number
	{
		return this.developWidth / this.developHeight;
	}

	
	// 是否是横屏
	get isLandsape()
	{
		return this.developWidth > this.developHeight;
		// return this.screenWidth > this.screenHeight;
	}

	// 屏幕分辨率
	get screenWidth(): number
	{
		return Laya.stage.width;
	}

	get screenHeight(): number
	{
		return Laya.stage.height;
	}

	get isWX(): boolean
	{
		return window['wx'] ? true :  false;
	}

	get safeArea()
	{
		if(this.isWX)
		{
			return wx.getSystemInfoSync().safeArea;
		}
	}

	// get isLiuHai(): boolean
	// {

	// }


	
	/** 刘海屏幕高度 */
	get liuHaiHeightTop(): number
	{
		return 44

		if(this.isWX)
		{
			let safeArea = this.safeArea;
			if(safeArea.width < safeArea.height)
			{
				return safeArea.top;
			}
			else
			{
				return safeArea.left;
			}
		}
		return 44;
	}

	
	/** 刘海屏幕高度 */
	get liuHaiHeightBottom(): number
	{
		if(this.isWX)
		{
			return this.liuHaiHeightTop;
		}
		return 44;
	}
	
	/** 刘海屏幕高度 */
	get screenHeightLiuHai(): number
	{
		return fgui.GRoot.inst.height - this.liuHaiHeightTop - this.liuHaiHeightBottom;
	}
	
	
	
	/** 刘海屏幕高度 */
	get screenWidthLiuHai(): number
	{
		return fgui.GRoot.inst.width - this.liuHaiHeightTop - this.liuHaiHeightBottom;
	}

	get screenAspect(): number
	{
		return this.screenWidth / this.screenHeight;
	}

	// 获取缩放比例
	get screenScaleExpand(): number
	{
		let rate = 1;
		if (this.screenAspect <= this.developAspect)
		{
			rate = this.screenHeight / this.developHeight / (this.screenWidth / this.developWidth);
		}
		else
		{
			rate = this.screenWidth / this.developWidth / (this.screenHeight / this.developHeight);
		}
		return rate;
	}

	get screenScaleX()
	{
		return this.screenWidth / this.developWidth;
	}

	get screenScaleY()
	{
		return this.screenHeight / this.developHeight;
	}

	get screenScaleShrink(): number
	{
		return Math.min(this.screenScaleX,this.screenScaleY);
		// let rate = 1;
		// if (this.screenAspect <= this.developAspect)
		// {
		// 	rate = this.screenHeight / this.developHeight;
		// }
		// else
		// {
		// 	rate = this.screenWidth / this.developWidth;
		// }
		// return rate;
	}

	
	get screenScaleShrinkMax(): number
	{
		// return Math.max(this.screenScaleX,this.screenScaleY);
		let rate = 1;
		if (this.screenAspect <= this.developAspect)
		{
			rate = this.screenHeight / this.developHeight;
		}
		else
		{
			rate = this.screenWidth / this.developWidth;
		}
		return rate;
	}
}