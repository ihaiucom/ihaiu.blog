import Game from "../../Game";
export default class SecretLandSender
{
    /** 请求创建队伍 */
    async BuyRoll(num:number)
    {
        let s2c = await Game.net.AsyncGamerBuyRollC2S(num);
        if(s2c.error)
        {
            return;
        } 
    }

    /** 领取上局奖励 */
    async BattleReward(useRoll: boolean)
    {
        let s2c = await Game.net.AsyncGamerSecretLandBattleRewardC2S(useRoll);
        return s2c;
    }

    /** 领取上周奖励 */
    async WeekReward()
    {
        let s2c = await Game.net.AsyncGamerSecretLandWeekRewardC2S();
        return s2c;
    }
    
}