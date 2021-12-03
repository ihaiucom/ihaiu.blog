import fs from 'fs';
import path from 'path';
import { cwd } from 'process';
import ProtoBuf from 'protobufjs';

var commander = require('commander');
commander
    .version('1.0.0', '-v, --version')

    .option("-p, --protoPath <protoPath>", "proto文件路径")
    .option("-j, --jsonPath <jsonPath>", "json文件路径")
    .option("-b, --bytesPath <bytesPath>", "导出的bytes文件路径")
    .option("-o, --outPath2 <outPath2>", "导出的bytes文件路径2")
    .parse(process.argv);

const options = commander.opts();


var cwdPath = cwd();
var protoPath = options.protoPath ? options.protoPath : "./bin/excel.proto";
var jsonPath = options.jsonPath ? options.jsonPath : "./bin/excelconfig.json";
var bytesPath = options.bytesPath ? options.bytesPath : "./bin/excelconfig.bin";
var outPath2 = options.outPath2;

if (!path.isAbsolute(protoPath)) {
    protoPath = path.join(cwdPath, protoPath)
}

if (!path.isAbsolute(jsonPath)) {
    jsonPath = path.join(cwdPath, jsonPath)
}

if (!path.isAbsolute(bytesPath)) {
    bytesPath = path.join(cwdPath, bytesPath)
}

if (outPath2 && !path.isAbsolute(outPath2)) {
    outPath2 = path.join(cwdPath, outPath2)
}


function checkDir(filePath: string) {
    var dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

ProtoBuf.load(protoPath, (err, root?: ProtoBuf.Root) => {
    if (!root) {
        console.error(err);
        return;
    }
    // console.log(root);
    const StructType: ProtoBuf.Type = root.lookupType('ConfigMng');

    var jsonStr = fs.readFileSync(jsonPath, { encoding: "utf-8", flag: "r" });
    var json = JSON.parse(jsonStr);
    var errMsg = StructType.verify(json);
    if (errMsg)
        throw Error(errMsg);

    const msg = StructType.create(json);
    const buffer = StructType.encode(msg).finish();
    // const destination = StructType.decode(buffer);

    checkDir(bytesPath);
    console.log(bytesPath);

    fs.writeFileSync(bytesPath, buffer, { encoding: 'binary', flag: "w" });

    if (outPath2) {
        checkDir(outPath2);
        console.log(outPath2);
        fs.writeFileSync(outPath2, buffer, { encoding: 'binary', flag: "w" });
    }
});
