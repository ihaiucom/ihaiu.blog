/*
 * @Descripttion: 打印游戏日志，游戏内打印日志必须传入日志级别，这样可以通过修改logMask来选择过滤一部分日志
 * @Author: kevinwu
 * @Date: 2019-10-28 22:19:41
 */

export enum EnumLogLevel
{
    Detail = 0, //详细1
    Warning = 1, //警告2
    Error = 2, //错误4
    HighLevel, //最高级别显示，可以用来单独临时给自己想要调试的日志加这个最高级别，只显示自己的日志
}

export default class GameLog
{
    /**设置-1显示全部log，其余为掩码运算，默认只打印错误的*/
    public static logMask = EnumLogLevel.Error;

    public static Log(logLevel:EnumLogLevel, strLog:string)
    {
        //显示全部
        if ((this.logMask == -1) || (logLevel == EnumLogLevel.HighLevel) || ((1 << logLevel) & this.logMask))
        {
            this.ShowLog(logLevel, strLog);
        }
    }

    private static ShowLog(logLevel:EnumLogLevel, strLog:string):void
    {
        let strInfo = "";
        switch(logLevel)
        {
            case EnumLogLevel.Detail:
                strInfo = "Detail";
                break;
            case EnumLogLevel.Warning:
                strInfo = "Warning";
                break;
            case EnumLogLevel.Error:
                strInfo = "Error";
                break;
            default:
                strInfo = "Detail";
                break;
        }
        console.log(strInfo + ":" + strLog);
    }

    constructor()
    {

    }

}window['GameLog']=GameLog;
