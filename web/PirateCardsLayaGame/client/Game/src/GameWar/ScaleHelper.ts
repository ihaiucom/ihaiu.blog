import Consts from "../War/Enums/Consts";

export default class ScaleHelper
{
    static scaleContainer(display, w, h) 
    {
        var width = Consts.Width,
        height = Consts.Height,
        rate = Math.min(width / w, height / h);
        display.scale.set(rate, rate),
        display.x = .5 * (width - w * rate),
        display.y = .5 * (height - h * rate)
    }

    static scaleContainerFit(display, w, h) 
    {
        var width = Consts.Width + 200,
        height = Consts.Height + 200,
        a = Math.max(width / w, height / h);
        display.scale.set(a, a)
    }

}