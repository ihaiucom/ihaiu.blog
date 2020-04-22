export default class LogInfo
{
    // 随机好牌概率
    static PositiveCardProbability = 0;
    // 随机值
    static CurrentPositiveCardProbability = 0;
    
    // 随机坏牌的数值
    static ChanceOfNegativeFromBox = 0;
    // 随机好牌的数值
    static ChanceOfPositiveFromBox = 0;

    static reset()
    {
        this.PositiveCardProbability = 0,
        this.CurrentPositiveCardProbability = 0,
        this.ChanceOfNegativeFromBox = 0,
        this.ChanceOfPositiveFromBox = 0
    }
}
