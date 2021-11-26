import fs from 'fs';
import path from 'path';
import { cwd } from 'process';
import ProtoBuf from 'protobufjs';

var cwdPath = cwd();
var protoPath = "./bin/example.proto";
var protoPath = "./bin/excel.proto";
var jsonPath = "./bin/excelconfig.json";
var bytesPath = "./bin/excelconfig.bin";

if (!path.isAbsolute(protoPath)) {
    protoPath = path.join(cwdPath, protoPath)
}

console.log(protoPath);

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
    const destination = StructType.decode(buffer);
    console.log(destination);

    fs.writeFileSync(bytesPath, buffer, { encoding: 'binary', flag: "w" });
});
