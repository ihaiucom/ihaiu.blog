import FieldPosition from "../../War/Datas/FieldPosition";
import CardBase from "./CardBase";
import NullCard from "./NullCard";
import Card from "./Card";

export default class FieldItems
{
    items: CardBase[][];
    columnCount = 3;
    rowCount = 3;

    constructor(columnCount = 3, rowCount = 3)
    {
        this.columnCount = columnCount;
        this.rowCount = rowCount;
        this.initArray();
    }

    initArray() 
    {
        this.items = [];
        for (var y = 0; y < this.rowCount; y++) 
        {
            var rowItems = [];
            for (var x = 0; x < this.columnCount; x++) 
            {
                rowItems.push(new NullCard(null));
            }
            this.items.push(rowItems)
        }
    }

    
    getColumnCount() 
    {
        return this.columnCount
    }

    getRowCount() 
    {
        return this.rowCount
    }

    getAll() : CardBase[]
    {
        var list: CardBase[] = [];
        for (var y = 0; y < this.rowCount; y++) 
        {
            for (var x = 0; x < this.columnCount; x++) 
            {
                list.push(this.items[x][y]);
            }
        }
        return list
    }

    getPosition(filterFun) : FieldPosition
    {
        for (var y = 0; y < this.rowCount; y++)
        {
            for (var x = 0; x < this.columnCount; x++) 
            {
                var filedPosition = new FieldPosition(x, y);
                if (filterFun(this.get(filedPosition))) 
                {
                    return filedPosition
                }
            }
        }
        return null
    }

    getPositions(filterFun) :FieldPosition[]
    {
        var list:FieldPosition[] = [];
        for (var y = 0; y < this.rowCount; y++) 
        {
            for (var x = 0; x < this.columnCount; x++) 
            {
                var fieldPosition = new FieldPosition(x, y);
                if(filterFun(this.get(fieldPosition)))
                {
                    list.push(fieldPosition);
                }
            }
        }
        return list
    }

    get(f: FieldPosition) : Card
    {
        return <Card> this.items[f.column][f.row]
    }
    
    set(f: FieldPosition, card: CardBase) 
    {
        this.items[f.column][f.row] = card
    }

    any(filterFun) : boolean
    {
        for (var y = 0; y < this.rowCount; y++) 
        {
            for (var x = 0; x < this.columnCount; x++) 
            {
                var n = new FieldPosition(x, y);
                if (filterFun(this.get(n))) 
                {
                    return true;
                }
            }
        }
        return false;
    }

    isPositionValid(f) : boolean
    {
        return f.column >= 0 && f.column < this.columnCount && f.row >= 0 && f.row < this.rowCount
    }

}
