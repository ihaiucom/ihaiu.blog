import Game from "../../Game";

export default class BagSender
{
    async getItemList()
    {
        let s2c = await Game.net.AsyncGamerGetBackpackC2S();
    }

    async sellItem(itemId: number,num: number, uid: number)
    {
        let s2c = await Game.net.GamerSellItemC2S(itemId,num,uid);
    }

    async useItem(itemId: number,num: number,uid: number)
    {
        let s2c = await Game.net.GamerUseItemC2S(itemId,num,uid);
    }

    async splitItem(itemId: number,num: number,uid: number)
    {
        let s2c = await Game.net.GamerUseItemC2S(itemId,num,uid);
    }

    async sawItem(itemIds: number[])
    {
        let s2c = await Game.net.GamerChangeItemIsSawC2S(0, itemIds);
    }
}