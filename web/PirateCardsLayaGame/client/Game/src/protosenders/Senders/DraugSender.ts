import Game from "../../Game";
import { EnumDraugAwakenType } from "../../GameModule/DataEnums/EnumDraugAwakenType";

export default class DraugSender 
{
    /** 请求战魂列表 */
    async DraugList()
    {
        let s2c = await Game.net.AsyncDraugListC2S();
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求战魂觉醒 */
    async DraugAwaken(type:EnumDraugAwakenType)
    {
        let s2c = await Game.net.AsyncAwakenDraugC2S(type);
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求战魂放入背包 */
    async DraugPutIntoPack()
    {
        let s2c = await Game.net.AsyncPutDraugIntoPackC2S();
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求战魂吞噬 */
    async DraugSwallow(swallowId:number, heroId:number, beSwallowIdList:number[])
    {
        heroId = heroId == -1 ? 0 : heroId;

        let s2c = await Game.net.AsyncSwallowDraugC2S(swallowId, heroId, beSwallowIdList);
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求战魂分解 */
    async DraugDecompose(draugIdList:number[])
    {
        let s2c = await Game.net.AsyncDecomposeDraugC2S(draugIdList);
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求战魂锁定 */
    async DraugLock(draugId:number)
    {
        let s2c = await Game.net.AsyncLockDraugC2S(draugId);
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求战魂装备 */
    async DraugWear(draugId:number, heroId:number)
    {
        let s2c = await Game.net.AsyncWearDraugC2S(draugId,heroId);
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求战魂卸载 */
    async DraugUnWear(heroId:number, pos:number)
    {
        let s2c = await Game.net.AsyncUnwearDraugC2S(heroId,pos);
        if(s2c.error)
        {
            return;
        } 
    }

    /** 请求英雄选择 */
    async DraugSelectHero(heroId:number)
    {
        let s2c = await Game.net.AsyncDraugSelectHeroC2S(heroId);
        if(s2c.error)
        {
            return;
        } 
    }
}