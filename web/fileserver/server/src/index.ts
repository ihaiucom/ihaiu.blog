
import http from 'http';
import path from 'path';
import fs from 'fs';
import url from 'url';
import querystring from 'querystring';
import os from 'os';
import { Command } from 'commander';
import { time } from 'console';


const commander = new Command();
// 程序参数
commander
    .version('1.0.0', '-v, --version')
    .usage("[command] [args]")
    .option("-o, --outdir <outdir>", "保存目录")
    .option("-p, --port <port>", "监听端口")
    .parse(process.argv);

    
const options = commander.opts();
let port = options.port !== undefined ? options.port : 3000;
let outputPath = options.outputPath !== undefined ? options.outputPath : "unload";

let cwdDir: string = process.cwd();
if(path.isAbsolute(outputPath))
{
    outputPath = path.normalize(outputPath);
}
else
{
    outputPath = path.normalize(path.join(cwdDir, outputPath));
}


///获取本机ip///
function getIPAdress(isLocal: boolean = true) {
    var interfaces = os.networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        if(!iface) continue;
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            console.log(alias.family, alias.address);
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' ) {
                if(isLocal && !alias.internal)
                {
                    return alias.address;
                }
                else
                {
                    return alias.address;
                }
            }
        }
    }
}


var ip = getIPAdress(false);

var server:http.Server = http.createServer();


//3.添加响应事件
server.on('request', function (req:http.IncomingMessage, res:http.ServerResponse) {
    var urlPath: string = req.url as string;
    console.log("method:" + req.method + " " + req.url);
    var urlParseData = url.parse(urlPath);
    var arg = urlParseData.query as string ;
    console.log("arg ： " + arg);
    var params = querystring.parse(arg);
    var filename = params["filename"] as string;
    if(!filename)
    {
        filename = Date.now() + ".txt";
    }


    if(req.method == 'POST')
    {
        // 开始接受数据
        var data = "";
        req.on('data', function(chunk){
            console.log("chunk:", chunk);
            data += chunk;
        });

        // 数据接收完成
        req.on('end', function () {
            var filePath = path.join(outputPath, filename);

            var dirPath = path.dirname(filePath);
            if (!fs.existsSync(dirPath)) {
                // console.log("mkdir", dirPath);
                fs.mkdirSync(dirPath, { recursive: true });
            }

            fs.writeFileSync(filePath, data, { flag: "w", encoding: "utf8" });
            console.log("filePath:" + filePath);

        });
    }

    
    
    res.end(req.url);

});

//4.监听端口号
server.listen(port, function () {
    console.log(`服务器启动：${ip}:${port}`);
});


