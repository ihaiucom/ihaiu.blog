"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const process_1 = require("process");
const protobufjs_1 = __importDefault(require("protobufjs"));
var commander = require('commander');
commander
    .version('1.0.0', '-v, --version')
    .option("-p, --protoPath <protoPath>", "proto文件路径")
    .option("-j, --jsonPath <jsonPath>", "json文件路径")
    .option("-b, --bytesPath <bytesPath>", "导出的bytes文件路径")
    .parse(process.argv);
const options = commander.opts();
var cwdPath = process_1.cwd();
var protoPath = options.protoPath ? options.protoPath : "./bin/excel.proto";
var jsonPath = options.jsonPath ? options.jsonPath : "./bin/excelconfig.json";
var bytesPath = options.bytesPath ? options.bytesPath : "./bin/excelconfig.bin";
if (!path_1.default.isAbsolute(protoPath)) {
    protoPath = path_1.default.join(cwdPath, protoPath);
}
if (!path_1.default.isAbsolute(jsonPath)) {
    jsonPath = path_1.default.join(cwdPath, jsonPath);
}
if (!path_1.default.isAbsolute(bytesPath)) {
    bytesPath = path_1.default.join(cwdPath, bytesPath);
}
function checkDir(filePath) {
    var dirPath = path_1.default.dirname(filePath);
    if (!fs_1.default.existsSync(dirPath)) {
        fs_1.default.mkdirSync(dirPath, { recursive: true });
    }
}
protobufjs_1.default.load(protoPath, (err, root) => {
    if (!root) {
        console.error(err);
        return;
    }
    // console.log(root);
    const StructType = root.lookupType('ConfigMng');
    var jsonStr = fs_1.default.readFileSync(jsonPath, { encoding: "utf-8", flag: "r" });
    var json = JSON.parse(jsonStr);
    var errMsg = StructType.verify(json);
    if (errMsg)
        throw Error(errMsg);
    const msg = StructType.create(json);
    const buffer = StructType.encode(msg).finish();
    // const destination = StructType.decode(buffer);
    checkDir(bytesPath);
    fs_1.default.writeFileSync(bytesPath, buffer, { encoding: 'binary', flag: "w" });
});
