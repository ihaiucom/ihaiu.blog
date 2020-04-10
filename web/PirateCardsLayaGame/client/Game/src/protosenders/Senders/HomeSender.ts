import Game from "../../Game";

export default class HomeSender
{
    /** 请求功能列表 */
    async SysList()
    {
        let s2c = await Game.net.AsyncSysListC2S();
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求开启功能 */
    async SysOpen(menuid:number)
    {
        let s2c = await Game.net.AsyncSysOpenShowC2S(menuid);
        if(s2c.error)
        {
            return;
        } 
    }
    
}