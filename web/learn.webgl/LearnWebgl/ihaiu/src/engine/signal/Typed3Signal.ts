export class Typed3Signal<T, Y, U>
{

    private _listeners: Array<Typed3SignalHandler<T, Y, U>> = [];

    add(listener: (T, Y, U) => void, self: any)
    {
        if (!this.hasListener(listener, self))
        {
            this._listeners.push(new Typed3SignalHandler(listener, self));
        }
    }

    addOnce(listener: (T, Y, U) => void, self: any)
    {
        if (!this.hasListener(listener, self))
        {
            this._listeners.push(new Typed3SignalHandler(listener, self, true));
        }
    }

    private hasListener(listener: (T, Y, U) => void, self: any): boolean
    {
        for (var i = 0; i < this._listeners.length; i++)
        {
            if (this._listeners[i].equals(listener, self))
            {
                return true;
            }
        }
        return false;
    }

    remove(listener: (T, Y, u) => void, self: any)
    {
        for (var i = 0; i < this._listeners.length; i++)
        {
            if (this._listeners[i].equals(listener, self))
            {
                this._listeners.splice(i, 1);
                break;
            }
        }
    }

    removeAll()
    {
        this._listeners.length = 0;
    }

    dispatch(value1: T, value2: Y, value3: U)
    {
        this._listeners.forEach(handler => handler.apply(value1, value2, value3));

        this._listeners = this._listeners.filter(
            (handler, i, arr) => { return !handler.once() });
    }

    
    // 以下为别名
    on(listener: (T, Y, U) => void, self: any)
    {
        this.add(listener, self);
    }

    
    onOnce(listener: (T, Y, U) => void, self: any)
    {
        this.addOnce(listener, self);
    }

    off(listener: (T, Y, U) => void, self: any)
    {
        this.remove(listener, self);
    }

    
    clear()
    {
        this.removeAll();
    }

    emit(value1: T, value2: Y, value3: U)
    {
        this.dispatch(value1, value2, value3);
    }
}

class Typed3SignalHandler<T, Y, U> {

    private _handler: (T, Y, U) => void;
    private _self: any;
    private _once: boolean;

    constructor(handler: (T, Y, U) => void, self: any, once = false)
    {
        this._handler = handler;
        this._self = self;
        this._once = once;
    }

    apply(arg1: T, arg2: Y, arg3: U)
    {
        this._handler.apply(this._self, [arg1, arg2, arg3]);
    }

    equals(handler: (T, Y, U) => void, self: any): boolean
    {
        return this._handler == handler && this._self == self;
    }

    once(): boolean
    {
        return this._once;
    }
}
