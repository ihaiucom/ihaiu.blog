export default class RandomHelper
{
    // 随机 两个数之间的值
    static getRandomIntInclusive(min: number, max: number)
    {
        return min = Math.ceil(min),
            max = Math.floor(max),
            Math.floor(Math.random() * (max - min + 1)) + min
    }

    static getRandomBool()
    {
        return Math.random() > 0.5;
    }

    // 洗牌
    static shuffle(list)
    {
        for (var e, i, o = list.length; 0 !== o;) i = Math.floor(Math.random() * o), 
        e = list[o -= 1],
        list[o] = list[i],
        list[i] = e;
        return list
    }


}