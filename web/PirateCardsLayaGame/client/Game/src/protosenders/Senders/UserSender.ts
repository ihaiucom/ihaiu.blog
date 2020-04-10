import Game from "../../Game";

export default  class UserSender
{
    async changeName(name: string)
    {
        return await Game.net.AsyncGamerChangeNameC2S(name);
    }

    /**
     * 修改头像接口
     * @param name 头像 微信头像url或者英雄id
     */
    async changeHeadIcon(name: string)
    {
        let s2c = await Game.net.AsyncGamerChangeAvatarC2S(name);
    }

    async uploadWXInfo()
    {
        // let s2c = await Game.net.AsyncGamerUploadWXInfoC2S(proto.);

    }

    async sawHeadIcon(heroIds: number[])
    {
        let s2c = await Game.net.GamerChangeItemIsSawC2S(6, heroIds);
    }

}