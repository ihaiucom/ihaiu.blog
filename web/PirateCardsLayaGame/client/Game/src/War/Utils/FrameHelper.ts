export default class FrameHelper
{
    static getFrame(t)
    {
        return t < 10 ? "000" + t: t >= 10 && t < 100 ? "00" + t: t >= 100 && t < 1e3 ? "0" + t: t.toString()
    }
}
    