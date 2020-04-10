import Game from "../../Game";

export default class PowerSender
{
    /** 请求购买体力 */
    async BuyFatigue(goodId:number)
    {
        let s2c = await Game.net.AsyncBuyFatigueC2S(goodId);
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求领取体力 */
    async GetFatigueWelfare(WelfareId:number)
    {
        let s2c = await Game.net.AsyncGetFatigueWelfareC2S(WelfareId);
        if(s2c.error)
        {
            return;
        } 
    }
}