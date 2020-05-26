export class Resource
{
    static Load(url: string, callback:Function, callobject?:any)
    {
        var http = new XMLHttpRequest();
        http.open("get", url, true);
        http.onerror = function (e: any): void {
            console.error("加载error",e, url)
        }
        http.onabort = function (e: any): void {
            
            console.warn("加载中止",e, url)
        }
        http.onprogress = function (e: any): void {
            
        }
        http.onload = function (e: any): void {
            var status: number = http.status !== undefined ? http.status : 200;

            if (status === 200 || status === 204 || status === 0) 
            {
                var data = http.response || http.responseText;
                if(callobject)
                {
                    callback.call(callobject, data);
                }
                else
                {
                    callback(data);
                }
            } 
            else 
            {
                console.error("[" + http.status + "]" + http.statusText + ":" + http.responseURL);
            }
            
        }
        http.send( );
    }

    static async LoadAsync(url: string): Promise<any>
    {
        return new Promise((resole)=>
        {
            this.Load(url, (data)=>
            {
                resole(data);
            })
        })
    }

    static async LoadShaderAsync(url: string)
    {
        var code = await this.LoadAsync(url);
        code = code.replace(/\r/g, "");
        return code;
    }

    
}