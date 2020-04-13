import War from "./War";

export default class ScaleHelper
{
    static scaleContainer(display, w, h) 
    {
        var width = War.width,
        height = War.height,
        rate = Math.min(width / w, height / h);
        display.scale.set(rate, rate),
        display.x = .5 * (width - w * rate),
        display.y = .5 * (height - h * rate)
    }

    static scaleContainerFit(display, w, h) 
    {
        var width = War.width + 200,
        height = War.height + 200,
        a = Math.max(width / w, height / h);
        display.scale.set(a, a)
    }

}