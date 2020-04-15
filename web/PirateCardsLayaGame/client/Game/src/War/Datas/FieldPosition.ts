import { MoveType } from "../Enums/MoveType";
import Point from "./Point";
import Consts from "../Enums/Consts";

export default class FieldPosition
{
    column: number = 0;
    row: number = 0;

    constructor(column: number, row: number)
    {
        this.column = column;
        this.row = row;
    }

    getNewPosition (moveType: MoveType): FieldPosition
    {
        var fieldPosition = new FieldPosition(this.column, this.row);
        switch (moveType) 
        {
            case MoveType.Right:
                fieldPosition.column++;
                break;
            case MoveType.Down:
                fieldPosition.row++;
                break;
            case MoveType.Left:
                fieldPosition.column--;
                break;
            case MoveType.Up:
                fieldPosition.row--
        }
        return fieldPosition
    }

    
    getPoint () : Point
    {
        return new Point(this.pointX, this.pointY);
    }

    get pointX(): number
    {
        // return this.column * Consts.CardWidth  + this.column * Consts.CardSpaceBetweenWidth;
        return this.column * Consts.CardWidth + Consts.CardWidth / 2 + this.column * Consts.CardSpaceBetweenWidth;
    }
    
    get pointY(): number
    {
        // return this.row * Consts.CardHeight  + this.row * Consts.CardSpaceBetweenHeight;
        return this.row * Consts.CardHeight + Consts.CardHeight / 2 + this.row * Consts.CardSpaceBetweenHeight;
    }
}
