import Game from "../../Game";
import { EnumDraugAwakenType } from "../../GameModule/DataEnums/EnumDraugAwakenType";

export default class BattlePlanSender 
{
    /** 请求备战列表 */
    async BattlePlanList()
    {
        let s2c = await Game.net.AsyncHeroGroupListC2S();
        if(s2c.error)
        {
            console.log(s2c.error);
            return;
        } 
    }
    /**
     *  解锁对应队伍
     * @param heroGroupId 队伍ID
     */
    async UnlockHeroGroup(heroGroupId : number)
    {
        let s2c = await Game.net.AsyncUnlockHeroGroupC2S(heroGroupId);
        if(s2c.error)
        {
            console.log(s2c.error);
            return;
        } 
    }
    /**
     * 改变对应队伍名称
     * @param heroGroupId 队伍ID
     * @param name 名称
     */
    async ChangeNameHeroGroup(heroGroupId : number, name : string)
    {
        let s2c = await Game.net.AsyncChangeNameHeroGroupC2S(heroGroupId, name);
        if(s2c.error)
        {
            console.log(s2c.error);
            return;
        } 
    }

    // /**
    //  * 解锁对应的英雄
    //  * @param heroGroupId 队伍ID
    //  * @param pos 对应英雄位置
    //  */
    // async UnlockPosHeroGroup(heroGroupId : number, pos : number)
    // {
    //     let s2c = await Game.net.AsyncUnlockPosHeroGroupC2S(heroGroupId, pos);
    //     if(s2c.error)
    //     {
    //         console.log(s2c.error);
    //         return;
    //     } 
    // }
    /**
     * 备战英雄修改
     * @param heroGroupId 队伍ID
     * @param pos 对应位置
     * @param heroId 对应英雄,0是代表换下
     */
    async BattleChangeHero(heroGroupId : number, pos : number, heroId : number)
    {
        let s2c = await Game.net.AsyncHeroGroupChangeHeroC2S(heroGroupId, pos, heroId);
        if(s2c.error)
        {
            console.log(s2c.error);
            return;
        }
    }
    /**
     * 改变技能
     * @param heroGroupId 队伍ID
     * @param pos 位置
     * @param skillId 技能id
     */
    async BattleChangeSkill(heroGroupId : number, pos : number, skillId : number)
    {
        let s2c = await Game.net.AsyncHeroGroupChangeSkillC2S(heroGroupId, pos, skillId);
        if(s2c.error)
        {
            console.log(s2c.error);
            return;
        }
    }
}