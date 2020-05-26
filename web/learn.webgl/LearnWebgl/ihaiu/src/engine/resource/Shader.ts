import { Resource } from "./Resource";
import { Handler } from "../utils/Handler";
import { Pool } from "../utils/Pool";
import { HttpRequest } from "../net/HttpRequest";
import { Event } from "../events/Event";

export class Shader extends Resource
{
    code: string;

    static LoadAsync(path: string): Promise<Shader>
    {
        return new Promise((resolve)=>{
            this.Load(path, Handler.create(null, (shader: Shader)=>{
                resolve(shader);
            }));
        })
    }

    static Load(path: string, complete: Handler)
    {
        var http:HttpRequest = Pool.createByClass(HttpRequest);
        http.once(Event.COMPLETE, null, (data:string)=>
        {
            data = data.replace(/\r/g, "");

            var shader =  Pool.createByClass(Shader);
            shader._setCreateURL(path);
            shader.code = data;
            complete.runWith(shader);
            http.offAll(Event.COMPLETE);
            Pool.recoverByClass(http);
        });
        http.send(path);
    }

}