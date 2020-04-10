import Game from "../../Game";
export default class HeroSender 
{
    /** 请求英雄列表 */
    async GetHeroList()
    {
        let s2c = await Game.net.AsyncGamerGetHeroC2S();
        if(s2c.error)
        {
            return s2c;
        }

        return s2c;
    }

    /** 英雄升级 */   
    async HeroLevelUp(heroId: number, itemId: number, useNum: number)
    {
        let s2c = await Game.net.AsyncGamerUseHeroMedicineC2S(heroId, itemId, useNum)
        if(s2c.error)
        {
            return;
        }
    }

    /** 英雄升星 */
    async HeroStarUp(heroId: number)
    {
        let s2c = await Game.net.AsyncGamerUpStarHeroC2S(heroId);
        if(s2c.error)
        {
            return;
        }
    }

    /** 新英雄激活 */
    async NewHero(heroId: number)
    {
        let s2c = await Game.net.AsyncGamerNewHeroC2S(heroId)
        if(s2c.error)
        {
            return;
        }
    }

    /** 穿、换装备 */
    async ChangeEquip(heroOnId: int,heroOffId :int, uid: int)
    {
        let s2c = await Game.net.AsyncTakeOnEquipC2S(heroOnId,heroOffId,uid);
        if(s2c.error)
        {
            return;
        }
    }
     /** 脱装备 */
    async UnEquip(heroOffId :int, uid: int)
    {
        let s2c = await Game.net.AsyncTakeOffEquipC2S(heroOffId,uid);
        if(s2c.error)
        {
            return;
        }
    }
  

    /** 技能升级 */
    async SkillLevelUp(heroId: int, skillID: int)
    {
        let s2c = await Game.net.AsyncGamerUpHeroSkillC2S(heroId, skillID);
        if(s2c.error)
        {
            return;
        }
    }

     /** 请求获取Home英雄立绘 */
     async HeroImageChoose()
     {
         let s2c = await Game.net.AsyncGamerHeroImageChooseC2S();
         if(s2c.error)
         {
             return;
         } 
     }
 
     /** 请求修改Home英雄立绘 */
     async HeroImageChange(heroId:number)
     {
         let s2c = await Game.net.AsyncGamerHeroImageChangeC2S(heroId);
         if(s2c.error)
         {
             return;
         } 
     }
}