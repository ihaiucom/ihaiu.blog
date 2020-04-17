import { MoveType } from "../Enums/MoveType";
import Card from "./Card";
import WarGame from "../WarGame";
import FieldPosition from "../Datas/FieldPosition";

export default class keyboardManager
{
    game: WarGame;

    isUp = false;
    isDown = false;
    isLeft = false;
    isRight = false;
    isSpace = false;

    init(game: WarGame)
    {
        this.game = game;
    }

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

    StartListenKeyboard()
    {
        Laya.stage.on(Laya.Event.KEY_UP, this, this.OnKeyboard);

    }

    
    StopListenKeyboard()
    {
        Laya.stage.off(Laya.Event.KEY_UP, this, this.OnKeyboard);
    }

    OnKeyboard(e: Laya.Event)
    {
        switch(e.keyCode)
        {
            case Laya.Keyboard.LEFT:
            case Laya.Keyboard.A:
                this.reset();
                this.isLeft = true;
                break;
            case Laya.Keyboard.RIGHT:
            case Laya.Keyboard.D:
                this.reset();
                this.isRight = true;
                break;
            case Laya.Keyboard.UP:
            case Laya.Keyboard.W:
                this.reset();
                this.isUp = true;
                break;
            case Laya.Keyboard.DOWN:
            case Laya.Keyboard.S:
                this.reset();
                this.isDown = true;
                break;
        }
    }

    OnClickCard(card: Card)
    {
        var heroPosition = this.game.field.field.findHeroPosition();
        var position = this.game.field.field.findPosition(card);

        if(heroPosition.row == position.row)
        {
            var sub = position.column - heroPosition.column;
            if(sub == 1)
            {
                this.reset();
                this.isRight = true;
            }
            else if(sub == -1)
            {
                this.reset();
                this.isLeft = true;

            }
        }
        else if(heroPosition.column == position.column)
        {
            var sub = position.row - heroPosition.row;
            if(sub == 1)
            {
                this.reset();
                this.isDown = true;
            }
            else if(sub == -1)
            {
                this.reset();
                this.isUp = true;

            }
        }
    }
}
