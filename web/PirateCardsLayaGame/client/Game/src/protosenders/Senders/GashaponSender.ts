import Game from '../../Game';
export default class GashaponSender
{
    async extractGashapon(id: number)
    {
        let s2c = await Game.net.AsyncGamerExtractGashaponC2S(id);
        if(!s2c.error)
            return true;
        return  false;
    }

    async preview(id: number)
    {
        let s2c = await Game.net.AsyncGamerGetGashaponPreviewC2S(id);
    }
}