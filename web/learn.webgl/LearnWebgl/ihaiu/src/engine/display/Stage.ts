export class Stage
{
    /**设计宽度（初始化时设置的宽度Laya.init(width,height)）*/
	designWidth: number = 0;
	/**设计高度（初始化时设置的高度Laya.init(width,height)）*/
	designHeight: number = 0;
	/**画布是否发生翻转。*/
	canvasRotation: boolean = false;
	/**画布的旋转角度。*/
	canvasDegree: number = 0;
}