import CardConfig from "../../Config/ConfigExtends/CardConfig";

export default class HeroData
{
    id: number = 0;

    /** 卡牌配置 */
    cardConfig: CardConfig;

    /** 是否获取了 */
    isGeted: boolean = false;

}