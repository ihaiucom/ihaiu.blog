export default class ArrayHelper
{
    // 查找接近的值
    static findNearestValue(value, list)
    {
        for (var i = Math.abs(list[0] - value), o = 0, n = 1; n < list.length; n++) 
        {
            var s = Math.abs(list[n] - value);
            s < i && (o = n, i = s)
        }
        return list[o]
    }
}