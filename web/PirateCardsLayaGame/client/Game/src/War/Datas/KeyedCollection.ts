export default class KeyedCollection
{
    private items = {};
    private count = 0;

    ContainsKey(key)
    {
        return this.items.hasOwnProperty(key);
    }

    Count()
    {
        return this.count;
    }

    Add(key, val)
    {
        this.items.hasOwnProperty(key) || this.count++,
        this.items[key] = val
    }
    
    Remove(key)
    {
        
        var e = this.items[key];
        return delete this.items[key],
        this.count--,
        e
    }


    Item(key)
    {
        return this.items[key];
    }

    Keys()
    {
        var list = [];
        for (var key in this.items) 
            this.items.hasOwnProperty(key) && list.push(key);
        return list
    }

    Values()
    {
        var list = [];
        for (var key in this.items) 
            this.items.hasOwnProperty(key) && list.push(this.items[key]);
        return list
    }
}
