export default class Upload
{
    logEnable: boolean = true;
    private lengthComputable: boolean = false;
    private totalSize: number = 0;
    private loadedSize: number = 0;
    private loadedRate: number = 0;
    private responseText: string;
    private url: string;
    private filename: string;
    private xhr: XMLHttpRequest;

    constructor()
    {
        this.url = "http://gidea.ihaiu.com/php/upload/upload_log.php";
    }

    reset()
    {
        this.lengthComputable = false;
        this.totalSize = 0;
        this.loadedSize = 0;
        this.loadedRate = 0;
        this.responseText = null;
        this.url = "http://gidea.ihaiu.com/php/upload/upload_log.php";
        this.filename = null;
        this.xhr = null;
    }



    uploadFile(content:any, filename: string, url?: string) 
    {
        this.filename = filename;

        if(url)
        {
            this.url = url;
        }

        if(!url)
            url = this.url;

        url += `?filename=${filename}`

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.responseType="text" ;
        
        xhr.onerror= this.onUploadError.bind(this);
		xhr.onabort= this.onUploadAbort.bind(this);
		xhr.onprogress= this.onUploadProgress.bind(this);
        xhr.onreadystatechange  = ()=>
        {
            if(this.logEnable)
            {
                console.log(`onreadystatechange: readyState=${xhr.readyState}, status=${xhr.status}， fielname=${this.filename} ` );
            }

            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) 
            {
                console.log(`上传完成: fielname=${this.filename}, url=${this.url}`);
                if(this.logEnable)
                {
                    console.log(xhr.responseText);
                }
            }
        }
        
        // let blob = new Blob([content],{type : "text/plain;charset=utf-8"});
        xhr.send(content);
        this.xhr = xhr;
    }

    onUploadProgress(evt:ProgressEvent) 
    {
        this.lengthComputable = evt.lengthComputable;
        if(this.lengthComputable)
        {
            this.loadedSize = evt.loaded;
            this.totalSize = evt.total;
            this.loadedRate = this.totalSize != 0 ? Math.round(this.loadedSize * 100 / this.totalSize) : 0;
    
            if(this.logEnable)
            {
                console.log(`onUploadProgress:  ${this.loadedRate}%  ${BitHelper.Byte2Str(this.loadedSize)}/${BitHelper.Byte2Str(this.loadedRate)} ` );
            }
        }
        else
        {
            console.log(`onUploadProgress: lengthComputable=${this.lengthComputable}`);
        }

    }


    onUploadError(evt) 
    {
        console.log(`onUploadError: fielname=${this.filename}, url=${this.url}`, evt);
    }

    onUploadAbort(evt) 
    {
        console.log(`onUploadAbort: fielname=${this.filename}, url=${this.url}`);
    }

    

    static current:Upload;
    static upload(content:string, filename: string, url?: string)
    {
        content = content.replace(/\[/g, '【').replace(/\]/g, '】');
        this.current = new Upload();
        this.current.uploadFile(content, filename);
    }
}

window['Upload'] = Upload;