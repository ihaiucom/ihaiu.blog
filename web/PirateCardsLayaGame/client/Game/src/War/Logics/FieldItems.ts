import Card from "./Card";
import FieldPosition from "../Datas/FieldPosition";
import WarGame from "../WarGame";
import Hero from "./Hero";
import { CardScoreType } from "../Enums/CardScoreType";
import CardScoreTypeHelper from "../Utils/CardScoreTypeHelper";

export default class FieldItems
{
    game: WarGame;
    items: Card[][];
    columnCount = 3;
    rowCount = 3;


    clear()
    {
        if(!this.items || this.items.length == 0)
        {
            return;
        }
        
        for (var y = 0; y < this.rowCount; y++) 
        {
            for (var x = 0; x < this.columnCount; x++) 
            {
                var card = this.items[x][y];
                card.removeShapeFromStage();
            }
        }
        this.items.length = 0;
    }

    init(columnCount = 3, rowCount = 3, game: WarGame)
    {
        this.columnCount = columnCount;
        this.rowCount = rowCount;
        this.game = game;
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
                rowItems.push(Card.GetDefault(this.game));
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

    getAll() : Card[]
    {
        var list: Card[] = [];
        for (var y = 0; y < this.rowCount; y++) 
        {
            for (var x = 0; x < this.columnCount; x++) 
            {
                list.push(this.items[x][y]);
            }
        }
        return list
    }

    findHeroCard(): Hero
    {
        var item: Card;
        for (var y = 0; y < this.rowCount; y++) 
        {
            for (var x = 0; x < this.columnCount; x++) 
            {
                item = this.items[x][y];
                if(item.isHero)
                {
                    return <any> item;
                }
            }
        }
        return null;
    }

    findHeroPosition(): FieldPosition
    {
        var item: Card;
        for (var y = 0; y < this.rowCount; y++)
        {
            for (var x = 0; x < this.columnCount; x++) 
            {
                item = this.items[x][y];
                if(item.isHero)
                {
                    return new FieldPosition(x, y);
                }
            }
        }

        return null;
    }

    findPosition(card:Card)
    {
        var item: Card;
        for (var y = 0; y < this.rowCount; y++)
        {
            for (var x = 0; x < this.columnCount; x++) 
            {
                item = this.items[x][y];
                if(item == card)
                {
                    var filedPosition = new FieldPosition(x, y);
                    return filedPosition;
                }
            }
        }
        return null;
    }

    getPosition(    filterFun: (card:Card) => boolean    ) : FieldPosition
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

    getPositions(    filterFun: (card:Card) => boolean    ) :FieldPosition[]
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
    
    set(f: FieldPosition, card: Card) 
    {
        this.items[f.column][f.row] = card
    }

    /** 查找 */
    any(    filterFun: (card:Card) => boolean    ) : boolean
    {
        var arr = [];
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

    
    /** 查找 */
    find(    filterFun: (card:Card) => boolean    ) : Card[]
    {
        var arr = [];
        for (var y = 0; y < this.rowCount; y++) 
        {
            for (var x = 0; x < this.columnCount; x++) 
            {
                var n = new FieldPosition(x, y);
                var card = this.get(n)
                if (filterFun(this.get(n))) 
                {
                    arr.push(card);
                }
            }
        }
        return arr;
    }

    /** 查找怪物 */
    findEnemy(selfIsNegative: boolean = false)
    {
        return this.find((card: Card)=>{
            return CardScoreTypeHelper.isEnemyType(card.type, selfIsNegative)
        })
    }

    /** 验证位置是否有效 */
    isPositionValid(f) : boolean
    {
        return f.column >= 0 && f.column < this.columnCount && f.row >= 0 && f.row < this.rowCount
    }

}
