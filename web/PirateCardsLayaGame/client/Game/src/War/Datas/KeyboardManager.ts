import { MoveType } from "../Enums/MoveType";

export default class keyboardManager
{
    isUp = false;
    isDown = false;
    isLeft = false;
    isRight = false;
    isSpace = false;

    reset()
    {
        this.isUp = false;
        this.isDown = false;
        this.isLeft = false;
        this.isRight = false;
        this.isSpace = false;
    }

    getMoveType()
    {
        if(this.isDown)
        {
            return MoveType.Down;
        }

        
        if(this.isLeft)
        {
            return MoveType.Left;
        }

        if(this.isRight)
        {
            return MoveType.Right;
        }

        
        if(this.isUp)
        {
            return MoveType.Up;
        }
    }

    isPressed()
    {
        return this.isUp || this.isDown || this.isLeft || this.isRight || this.isSpace;
    }
}
