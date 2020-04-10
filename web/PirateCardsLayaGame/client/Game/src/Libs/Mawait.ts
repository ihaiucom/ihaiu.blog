export class Mawait
{
    // 等待時間毫秒
    static async Time(m:int): Promise<any>
    {
        return new Promise<any>((resolve)=>
        {
            Engine.timer.once(m, this, ()=>{
                resolve();
            })
         });
    }
    
    // 等待時間毫秒
    static async Frame(frame:int): Promise<any>
    {
        return new Promise<any>((resolve)=>
        {
            Engine.timer.frameOnce(frame, this, ()=>{
                resolve();
            })
         });
    }
}