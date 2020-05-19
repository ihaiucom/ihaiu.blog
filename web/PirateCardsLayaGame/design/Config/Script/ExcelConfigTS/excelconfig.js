"use strict";
var $protobuf = protobuf;
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $excelRoot = $protobuf.roots["excelconfig"] || ($protobuf.roots["excelconfig"] = {});
var excelconfig = $excelRoot;
var module = {}
$excelRoot.DTItemNum = (function() {
    function DTItemNum(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTItemNum.prototype.ItemId = 0;
    DTItemNum.prototype.ItemNum = 0;
    DTItemNum.create = function create(properties) {
        return new DTItemNum(properties);
    };
    DTItemNum.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ItemId != null && message.hasOwnProperty("ItemId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ItemId);
        if (message.ItemNum != null && message.hasOwnProperty("ItemNum"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ItemNum);
        return writer;
    };
    DTItemNum.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTItemNum.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTItemNum();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ItemId = reader.int32();
                break;
            case 2:
                message.ItemNum = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTItemNum.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTItemNum.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ItemId != null && message.hasOwnProperty("ItemId"))
            if (!$util.isInteger(message.ItemId))
                return "ItemId: integer expected";
        if (message.ItemNum != null && message.hasOwnProperty("ItemNum"))
            if (!$util.isInteger(message.ItemNum))
                return "ItemNum: integer expected";
        return null;
    };
    DTItemNum.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTItemNum)
            return object;
        var message = new $excelRoot.DTItemNum();
        if (object.ItemId != null)
            message.ItemId = object.ItemId | 0;
        if (object.ItemNum != null)
            message.ItemNum = object.ItemNum | 0;
        return message;
    };
    DTItemNum.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.ItemId = 0;
            object.ItemNum = 0;
        }
        if (message.ItemId != null && message.hasOwnProperty("ItemId"))
            object.ItemId = message.ItemId;
        if (message.ItemNum != null && message.hasOwnProperty("ItemNum"))
            object.ItemNum = message.ItemNum;
        return object;
    };
    DTItemNum.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTItemNum;
})();
$excelRoot.DTVector2 = (function() {
    function DTVector2(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTVector2.prototype.X = 0;
    DTVector2.prototype.Y = 0;
    DTVector2.create = function create(properties) {
        return new DTVector2(properties);
    };
    DTVector2.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.X != null && message.hasOwnProperty("X"))
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.X);
        if (message.Y != null && message.hasOwnProperty("Y"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.Y);
        return writer;
    };
    DTVector2.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTVector2.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTVector2();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.X = reader.double();
                break;
            case 2:
                message.Y = reader.double();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTVector2.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTVector2.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.X != null && message.hasOwnProperty("X"))
            if (typeof message.X !== "number")
                return "X: number expected";
        if (message.Y != null && message.hasOwnProperty("Y"))
            if (typeof message.Y !== "number")
                return "Y: number expected";
        return null;
    };
    DTVector2.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTVector2)
            return object;
        var message = new $excelRoot.DTVector2();
        if (object.X != null)
            message.X = Number(object.X);
        if (object.Y != null)
            message.Y = Number(object.Y);
        return message;
    };
    DTVector2.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.X = 0;
            object.Y = 0;
        }
        if (message.X != null && message.hasOwnProperty("X"))
            object.X = options.json && !isFinite(message.X) ? String(message.X) : message.X;
        if (message.Y != null && message.hasOwnProperty("Y"))
            object.Y = options.json && !isFinite(message.Y) ? String(message.Y) : message.Y;
        return object;
    };
    DTVector2.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTVector2;
})();
$excelRoot.Global = (function() {
    function Global(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Global.prototype.everydayUpdateTime = 0;
    Global.prototype.roleNameAutoGen = "";
    Global.prototype.roleNameMaxLength = 0;
    Global.prototype.roleNameMinLength = 0;
    Global.prototype.superAccountSwitch = false;
    Global.prototype.roleNameRepated = false;
    Global.prototype.friendReqMaxCnt = 0;
    Global.prototype.friendMaxCnt = 0;
    Global.prototype.chatGamerMaxCnt = 0;
    Global.prototype.chatWorldMaxCnt = 0;
    Global.prototype.gamerMailMaxCnt = 0;
    Global.prototype.worldMailMaxCnt = 0;
    Global.prototype.wordCheck = false;
    Global.create = function create(properties) {
        return new Global(properties);
    };
    Global.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.everydayUpdateTime != null && message.hasOwnProperty("everydayUpdateTime"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.everydayUpdateTime);
        if (message.roleNameAutoGen != null && message.hasOwnProperty("roleNameAutoGen"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.roleNameAutoGen);
        if (message.roleNameMaxLength != null && message.hasOwnProperty("roleNameMaxLength"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roleNameMaxLength);
        if (message.roleNameMinLength != null && message.hasOwnProperty("roleNameMinLength"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.roleNameMinLength);
        if (message.superAccountSwitch != null && message.hasOwnProperty("superAccountSwitch"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.superAccountSwitch);
        if (message.roleNameRepated != null && message.hasOwnProperty("roleNameRepated"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.roleNameRepated);
        if (message.friendReqMaxCnt != null && message.hasOwnProperty("friendReqMaxCnt"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.friendReqMaxCnt);
        if (message.friendMaxCnt != null && message.hasOwnProperty("friendMaxCnt"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.friendMaxCnt);
        if (message.chatGamerMaxCnt != null && message.hasOwnProperty("chatGamerMaxCnt"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.chatGamerMaxCnt);
        if (message.chatWorldMaxCnt != null && message.hasOwnProperty("chatWorldMaxCnt"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.chatWorldMaxCnt);
        if (message.gamerMailMaxCnt != null && message.hasOwnProperty("gamerMailMaxCnt"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.gamerMailMaxCnt);
        if (message.worldMailMaxCnt != null && message.hasOwnProperty("worldMailMaxCnt"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.worldMailMaxCnt);
        if (message.wordCheck != null && message.hasOwnProperty("wordCheck"))
            writer.uint32(/* id 13, wireType 0 =*/104).bool(message.wordCheck);
        return writer;
    };
    Global.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Global.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Global();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.everydayUpdateTime = reader.int32();
                break;
            case 2:
                message.roleNameAutoGen = reader.string();
                break;
            case 3:
                message.roleNameMaxLength = reader.int32();
                break;
            case 4:
                message.roleNameMinLength = reader.int32();
                break;
            case 5:
                message.superAccountSwitch = reader.bool();
                break;
            case 6:
                message.roleNameRepated = reader.bool();
                break;
            case 7:
                message.friendReqMaxCnt = reader.int32();
                break;
            case 8:
                message.friendMaxCnt = reader.int32();
                break;
            case 9:
                message.chatGamerMaxCnt = reader.int32();
                break;
            case 10:
                message.chatWorldMaxCnt = reader.int32();
                break;
            case 11:
                message.gamerMailMaxCnt = reader.int32();
                break;
            case 12:
                message.worldMailMaxCnt = reader.int32();
                break;
            case 13:
                message.wordCheck = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Global.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Global.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.everydayUpdateTime != null && message.hasOwnProperty("everydayUpdateTime"))
            if (!$util.isInteger(message.everydayUpdateTime))
                return "everydayUpdateTime: integer expected";
        if (message.roleNameAutoGen != null && message.hasOwnProperty("roleNameAutoGen"))
            if (!$util.isString(message.roleNameAutoGen))
                return "roleNameAutoGen: string expected";
        if (message.roleNameMaxLength != null && message.hasOwnProperty("roleNameMaxLength"))
            if (!$util.isInteger(message.roleNameMaxLength))
                return "roleNameMaxLength: integer expected";
        if (message.roleNameMinLength != null && message.hasOwnProperty("roleNameMinLength"))
            if (!$util.isInteger(message.roleNameMinLength))
                return "roleNameMinLength: integer expected";
        if (message.superAccountSwitch != null && message.hasOwnProperty("superAccountSwitch"))
            if (typeof message.superAccountSwitch !== "boolean")
                return "superAccountSwitch: boolean expected";
        if (message.roleNameRepated != null && message.hasOwnProperty("roleNameRepated"))
            if (typeof message.roleNameRepated !== "boolean")
                return "roleNameRepated: boolean expected";
        if (message.friendReqMaxCnt != null && message.hasOwnProperty("friendReqMaxCnt"))
            if (!$util.isInteger(message.friendReqMaxCnt))
                return "friendReqMaxCnt: integer expected";
        if (message.friendMaxCnt != null && message.hasOwnProperty("friendMaxCnt"))
            if (!$util.isInteger(message.friendMaxCnt))
                return "friendMaxCnt: integer expected";
        if (message.chatGamerMaxCnt != null && message.hasOwnProperty("chatGamerMaxCnt"))
            if (!$util.isInteger(message.chatGamerMaxCnt))
                return "chatGamerMaxCnt: integer expected";
        if (message.chatWorldMaxCnt != null && message.hasOwnProperty("chatWorldMaxCnt"))
            if (!$util.isInteger(message.chatWorldMaxCnt))
                return "chatWorldMaxCnt: integer expected";
        if (message.gamerMailMaxCnt != null && message.hasOwnProperty("gamerMailMaxCnt"))
            if (!$util.isInteger(message.gamerMailMaxCnt))
                return "gamerMailMaxCnt: integer expected";
        if (message.worldMailMaxCnt != null && message.hasOwnProperty("worldMailMaxCnt"))
            if (!$util.isInteger(message.worldMailMaxCnt))
                return "worldMailMaxCnt: integer expected";
        if (message.wordCheck != null && message.hasOwnProperty("wordCheck"))
            if (typeof message.wordCheck !== "boolean")
                return "wordCheck: boolean expected";
        return null;
    };
    Global.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Global)
            return object;
        var message = new $excelRoot.Global();
        if (object.everydayUpdateTime != null)
            message.everydayUpdateTime = object.everydayUpdateTime | 0;
        if (object.roleNameAutoGen != null)
            message.roleNameAutoGen = String(object.roleNameAutoGen);
        if (object.roleNameMaxLength != null)
            message.roleNameMaxLength = object.roleNameMaxLength | 0;
        if (object.roleNameMinLength != null)
            message.roleNameMinLength = object.roleNameMinLength | 0;
        if (object.superAccountSwitch != null)
            message.superAccountSwitch = Boolean(object.superAccountSwitch);
        if (object.roleNameRepated != null)
            message.roleNameRepated = Boolean(object.roleNameRepated);
        if (object.friendReqMaxCnt != null)
            message.friendReqMaxCnt = object.friendReqMaxCnt | 0;
        if (object.friendMaxCnt != null)
            message.friendMaxCnt = object.friendMaxCnt | 0;
        if (object.chatGamerMaxCnt != null)
            message.chatGamerMaxCnt = object.chatGamerMaxCnt | 0;
        if (object.chatWorldMaxCnt != null)
            message.chatWorldMaxCnt = object.chatWorldMaxCnt | 0;
        if (object.gamerMailMaxCnt != null)
            message.gamerMailMaxCnt = object.gamerMailMaxCnt | 0;
        if (object.worldMailMaxCnt != null)
            message.worldMailMaxCnt = object.worldMailMaxCnt | 0;
        if (object.wordCheck != null)
            message.wordCheck = Boolean(object.wordCheck);
        return message;
    };
    Global.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.everydayUpdateTime = 0;
            object.roleNameAutoGen = "";
            object.roleNameMaxLength = 0;
            object.roleNameMinLength = 0;
            object.superAccountSwitch = false;
            object.roleNameRepated = false;
            object.friendReqMaxCnt = 0;
            object.friendMaxCnt = 0;
            object.chatGamerMaxCnt = 0;
            object.chatWorldMaxCnt = 0;
            object.gamerMailMaxCnt = 0;
            object.worldMailMaxCnt = 0;
            object.wordCheck = false;
        }
        if (message.everydayUpdateTime != null && message.hasOwnProperty("everydayUpdateTime"))
            object.everydayUpdateTime = message.everydayUpdateTime;
        if (message.roleNameAutoGen != null && message.hasOwnProperty("roleNameAutoGen"))
            object.roleNameAutoGen = message.roleNameAutoGen;
        if (message.roleNameMaxLength != null && message.hasOwnProperty("roleNameMaxLength"))
            object.roleNameMaxLength = message.roleNameMaxLength;
        if (message.roleNameMinLength != null && message.hasOwnProperty("roleNameMinLength"))
            object.roleNameMinLength = message.roleNameMinLength;
        if (message.superAccountSwitch != null && message.hasOwnProperty("superAccountSwitch"))
            object.superAccountSwitch = message.superAccountSwitch;
        if (message.roleNameRepated != null && message.hasOwnProperty("roleNameRepated"))
            object.roleNameRepated = message.roleNameRepated;
        if (message.friendReqMaxCnt != null && message.hasOwnProperty("friendReqMaxCnt"))
            object.friendReqMaxCnt = message.friendReqMaxCnt;
        if (message.friendMaxCnt != null && message.hasOwnProperty("friendMaxCnt"))
            object.friendMaxCnt = message.friendMaxCnt;
        if (message.chatGamerMaxCnt != null && message.hasOwnProperty("chatGamerMaxCnt"))
            object.chatGamerMaxCnt = message.chatGamerMaxCnt;
        if (message.chatWorldMaxCnt != null && message.hasOwnProperty("chatWorldMaxCnt"))
            object.chatWorldMaxCnt = message.chatWorldMaxCnt;
        if (message.gamerMailMaxCnt != null && message.hasOwnProperty("gamerMailMaxCnt"))
            object.gamerMailMaxCnt = message.gamerMailMaxCnt;
        if (message.worldMailMaxCnt != null && message.hasOwnProperty("worldMailMaxCnt"))
            object.worldMailMaxCnt = message.worldMailMaxCnt;
        if (message.wordCheck != null && message.hasOwnProperty("wordCheck"))
            object.wordCheck = message.wordCheck;
        return object;
    };
    Global.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Global;
})();
$excelRoot.Card = (function() {
    function Card(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Card.prototype.id = 0;
    Card.prototype.scoreTypeKey = "";
    Card.prototype.enName = "";
    Card.prototype.zhCnName = "";
    Card.prototype.level = 0;
    Card.prototype.sprite = "";
    Card.prototype.coin = 0;
    Card.prototype.exp = 0;
    Card.create = function create(properties) {
        return new Card(properties);
    };
    Card.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.scoreTypeKey != null && message.hasOwnProperty("scoreTypeKey"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.scoreTypeKey);
        if (message.enName != null && message.hasOwnProperty("enName"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.enName);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.zhCnName);
        if (message.level != null && message.hasOwnProperty("level"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.level);
        if (message.sprite != null && message.hasOwnProperty("sprite"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.sprite);
        if (message.coin != null && message.hasOwnProperty("coin"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.coin);
        if (message.exp != null && message.hasOwnProperty("exp"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.exp);
        return writer;
    };
    Card.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Card.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Card();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.scoreTypeKey = reader.string();
                break;
            case 3:
                message.enName = reader.string();
                break;
            case 4:
                message.zhCnName = reader.string();
                break;
            case 5:
                message.level = reader.int32();
                break;
            case 6:
                message.sprite = reader.string();
                break;
            case 7:
                message.coin = reader.int32();
                break;
            case 8:
                message.exp = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Card.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Card.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.scoreTypeKey != null && message.hasOwnProperty("scoreTypeKey"))
            if (!$util.isString(message.scoreTypeKey))
                return "scoreTypeKey: string expected";
        if (message.enName != null && message.hasOwnProperty("enName"))
            if (!$util.isString(message.enName))
                return "enName: string expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.level != null && message.hasOwnProperty("level"))
            if (!$util.isInteger(message.level))
                return "level: integer expected";
        if (message.sprite != null && message.hasOwnProperty("sprite"))
            if (!$util.isString(message.sprite))
                return "sprite: string expected";
        if (message.coin != null && message.hasOwnProperty("coin"))
            if (!$util.isInteger(message.coin))
                return "coin: integer expected";
        if (message.exp != null && message.hasOwnProperty("exp"))
            if (!$util.isInteger(message.exp))
                return "exp: integer expected";
        return null;
    };
    Card.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Card)
            return object;
        var message = new $excelRoot.Card();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.scoreTypeKey != null)
            message.scoreTypeKey = String(object.scoreTypeKey);
        if (object.enName != null)
            message.enName = String(object.enName);
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.level != null)
            message.level = object.level | 0;
        if (object.sprite != null)
            message.sprite = String(object.sprite);
        if (object.coin != null)
            message.coin = object.coin | 0;
        if (object.exp != null)
            message.exp = object.exp | 0;
        return message;
    };
    Card.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.scoreTypeKey = "";
            object.enName = "";
            object.zhCnName = "";
            object.level = 0;
            object.sprite = "";
            object.coin = 0;
            object.exp = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.scoreTypeKey != null && message.hasOwnProperty("scoreTypeKey"))
            object.scoreTypeKey = message.scoreTypeKey;
        if (message.enName != null && message.hasOwnProperty("enName"))
            object.enName = message.enName;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.level != null && message.hasOwnProperty("level"))
            object.level = message.level;
        if (message.sprite != null && message.hasOwnProperty("sprite"))
            object.sprite = message.sprite;
        if (message.coin != null && message.hasOwnProperty("coin"))
            object.coin = message.coin;
        if (message.exp != null && message.hasOwnProperty("exp"))
            object.exp = message.exp;
        return object;
    };
    Card.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Card;
})();
$excelRoot.CardScoreType = (function() {
    function CardScoreType(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    CardScoreType.prototype.id = 0;
    CardScoreType.prototype.key = "";
    CardScoreType.prototype.zhCnName = "";
    CardScoreType.prototype.backgroundType = 0;
    CardScoreType.prototype.frontView = "";
    CardScoreType.prototype.isInChest = false;
    CardScoreType.prototype.isInBarrel = false;
    CardScoreType.prototype.isPowerUp = false;
    CardScoreType.create = function create(properties) {
        return new CardScoreType(properties);
    };
    CardScoreType.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.key != null && message.hasOwnProperty("key"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.zhCnName);
        if (message.backgroundType != null && message.hasOwnProperty("backgroundType"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.backgroundType);
        if (message.frontView != null && message.hasOwnProperty("frontView"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.frontView);
        if (message.isInChest != null && message.hasOwnProperty("isInChest"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isInChest);
        if (message.isInBarrel != null && message.hasOwnProperty("isInBarrel"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isInBarrel);
        if (message.isPowerUp != null && message.hasOwnProperty("isPowerUp"))
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.isPowerUp);
        return writer;
    };
    CardScoreType.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    CardScoreType.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.CardScoreType();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.key = reader.string();
                break;
            case 3:
                message.zhCnName = reader.string();
                break;
            case 4:
                message.backgroundType = reader.int32();
                break;
            case 5:
                message.frontView = reader.string();
                break;
            case 6:
                message.isInChest = reader.bool();
                break;
            case 7:
                message.isInBarrel = reader.bool();
                break;
            case 8:
                message.isPowerUp = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    CardScoreType.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    CardScoreType.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isString(message.key))
                return "key: string expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.backgroundType != null && message.hasOwnProperty("backgroundType"))
            if (!$util.isInteger(message.backgroundType))
                return "backgroundType: integer expected";
        if (message.frontView != null && message.hasOwnProperty("frontView"))
            if (!$util.isString(message.frontView))
                return "frontView: string expected";
        if (message.isInChest != null && message.hasOwnProperty("isInChest"))
            if (typeof message.isInChest !== "boolean")
                return "isInChest: boolean expected";
        if (message.isInBarrel != null && message.hasOwnProperty("isInBarrel"))
            if (typeof message.isInBarrel !== "boolean")
                return "isInBarrel: boolean expected";
        if (message.isPowerUp != null && message.hasOwnProperty("isPowerUp"))
            if (typeof message.isPowerUp !== "boolean")
                return "isPowerUp: boolean expected";
        return null;
    };
    CardScoreType.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.CardScoreType)
            return object;
        var message = new $excelRoot.CardScoreType();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.key != null)
            message.key = String(object.key);
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.backgroundType != null)
            message.backgroundType = object.backgroundType | 0;
        if (object.frontView != null)
            message.frontView = String(object.frontView);
        if (object.isInChest != null)
            message.isInChest = Boolean(object.isInChest);
        if (object.isInBarrel != null)
            message.isInBarrel = Boolean(object.isInBarrel);
        if (object.isPowerUp != null)
            message.isPowerUp = Boolean(object.isPowerUp);
        return message;
    };
    CardScoreType.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.key = "";
            object.zhCnName = "";
            object.backgroundType = 0;
            object.frontView = "";
            object.isInChest = false;
            object.isInBarrel = false;
            object.isPowerUp = false;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.backgroundType != null && message.hasOwnProperty("backgroundType"))
            object.backgroundType = message.backgroundType;
        if (message.frontView != null && message.hasOwnProperty("frontView"))
            object.frontView = message.frontView;
        if (message.isInChest != null && message.hasOwnProperty("isInChest"))
            object.isInChest = message.isInChest;
        if (message.isInBarrel != null && message.hasOwnProperty("isInBarrel"))
            object.isInBarrel = message.isInBarrel;
        if (message.isPowerUp != null && message.hasOwnProperty("isPowerUp"))
            object.isPowerUp = message.isPowerUp;
        return object;
    };
    CardScoreType.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return CardScoreType;
})();
$excelRoot.EffectType = (function() {
    function EffectType(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    EffectType.prototype.id = 0;
    EffectType.prototype.effectTypeKey = "";
    EffectType.prototype.describe = "";
    EffectType.create = function create(properties) {
        return new EffectType(properties);
    };
    EffectType.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.effectTypeKey != null && message.hasOwnProperty("effectTypeKey"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.effectTypeKey);
        if (message.describe != null && message.hasOwnProperty("describe"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.describe);
        return writer;
    };
    EffectType.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    EffectType.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.EffectType();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.effectTypeKey = reader.string();
                break;
            case 3:
                message.describe = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    EffectType.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    EffectType.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.effectTypeKey != null && message.hasOwnProperty("effectTypeKey"))
            if (!$util.isString(message.effectTypeKey))
                return "effectTypeKey: string expected";
        if (message.describe != null && message.hasOwnProperty("describe"))
            if (!$util.isString(message.describe))
                return "describe: string expected";
        return null;
    };
    EffectType.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.EffectType)
            return object;
        var message = new $excelRoot.EffectType();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.effectTypeKey != null)
            message.effectTypeKey = String(object.effectTypeKey);
        if (object.describe != null)
            message.describe = String(object.describe);
        return message;
    };
    EffectType.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.effectTypeKey = "";
            object.describe = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.effectTypeKey != null && message.hasOwnProperty("effectTypeKey"))
            object.effectTypeKey = message.effectTypeKey;
        if (message.describe != null && message.hasOwnProperty("describe"))
            object.describe = message.describe;
        return object;
    };
    EffectType.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return EffectType;
})();
$excelRoot.Item = (function() {
    function Item(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Item.prototype.id = 0;
    Item.prototype.zhCnName = "";
    Item.prototype.zhCnDes = "";
    Item.prototype.icon = "";
    Item.prototype.typeKey = "";
    Item.prototype.type = 0;
    Item.prototype.coin = 0;
    Item.create = function create(properties) {
        return new Item(properties);
    };
    Item.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.zhCnName);
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.zhCnDes);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.icon);
        if (message.typeKey != null && message.hasOwnProperty("typeKey"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.typeKey);
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.type);
        if (message.coin != null && message.hasOwnProperty("coin"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.coin);
        return writer;
    };
    Item.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Item.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Item();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.zhCnName = reader.string();
                break;
            case 3:
                message.zhCnDes = reader.string();
                break;
            case 4:
                message.icon = reader.string();
                break;
            case 5:
                message.typeKey = reader.string();
                break;
            case 6:
                message.type = reader.int32();
                break;
            case 7:
                message.coin = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Item.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Item.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            if (!$util.isString(message.zhCnDes))
                return "zhCnDes: string expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isString(message.icon))
                return "icon: string expected";
        if (message.typeKey != null && message.hasOwnProperty("typeKey"))
            if (!$util.isString(message.typeKey))
                return "typeKey: string expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.coin != null && message.hasOwnProperty("coin"))
            if (!$util.isInteger(message.coin))
                return "coin: integer expected";
        return null;
    };
    Item.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Item)
            return object;
        var message = new $excelRoot.Item();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.zhCnDes != null)
            message.zhCnDes = String(object.zhCnDes);
        if (object.icon != null)
            message.icon = String(object.icon);
        if (object.typeKey != null)
            message.typeKey = String(object.typeKey);
        if (object.type != null)
            message.type = object.type | 0;
        if (object.coin != null)
            message.coin = object.coin | 0;
        return message;
    };
    Item.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.zhCnName = "";
            object.zhCnDes = "";
            object.icon = "";
            object.typeKey = "";
            object.type = 0;
            object.coin = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            object.zhCnDes = message.zhCnDes;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.typeKey != null && message.hasOwnProperty("typeKey"))
            object.typeKey = message.typeKey;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.coin != null && message.hasOwnProperty("coin"))
            object.coin = message.coin;
        return object;
    };
    Item.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Item;
})();
$excelRoot.ItemConsume = (function() {
    function ItemConsume(properties) {
        this.effectArgs = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    ItemConsume.prototype.id = 0;
    ItemConsume.prototype.zhCnName = "";
    ItemConsume.prototype.zhCnDes = "";
    ItemConsume.prototype.icon = "";
    ItemConsume.prototype.effectType = "";
    ItemConsume.prototype.effectArgs = $util.emptyArray;
    ItemConsume.create = function create(properties) {
        return new ItemConsume(properties);
    };
    ItemConsume.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.zhCnName);
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.zhCnDes);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.icon);
        if (message.effectType != null && message.hasOwnProperty("effectType"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.effectType);
        if (message.effectArgs != null && message.effectArgs.length) {
            writer.uint32(/* id 6, wireType 2 =*/50).fork();
            for (var i = 0; i < message.effectArgs.length; ++i)
                writer.int32(message.effectArgs[i]);
            writer.ldelim();
        }
        return writer;
    };
    ItemConsume.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    ItemConsume.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.ItemConsume();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.zhCnName = reader.string();
                break;
            case 3:
                message.zhCnDes = reader.string();
                break;
            case 4:
                message.icon = reader.string();
                break;
            case 5:
                message.effectType = reader.string();
                break;
            case 6:
                if (!(message.effectArgs && message.effectArgs.length))
                    message.effectArgs = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.effectArgs.push(reader.int32());
                } else
                    message.effectArgs.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    ItemConsume.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    ItemConsume.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            if (!$util.isString(message.zhCnDes))
                return "zhCnDes: string expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isString(message.icon))
                return "icon: string expected";
        if (message.effectType != null && message.hasOwnProperty("effectType"))
            if (!$util.isString(message.effectType))
                return "effectType: string expected";
        if (message.effectArgs != null && message.hasOwnProperty("effectArgs")) {
            if (!Array.isArray(message.effectArgs))
                return "effectArgs: array expected";
            for (var i = 0; i < message.effectArgs.length; ++i)
                if (!$util.isInteger(message.effectArgs[i]))
                    return "effectArgs: integer[] expected";
        }
        return null;
    };
    ItemConsume.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.ItemConsume)
            return object;
        var message = new $excelRoot.ItemConsume();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.zhCnDes != null)
            message.zhCnDes = String(object.zhCnDes);
        if (object.icon != null)
            message.icon = String(object.icon);
        if (object.effectType != null)
            message.effectType = String(object.effectType);
        if (object.effectArgs) {
            if (!Array.isArray(object.effectArgs))
                throw TypeError(".ItemConsume.effectArgs: array expected");
            message.effectArgs = [];
            for (var i = 0; i < object.effectArgs.length; ++i)
                message.effectArgs[i] = object.effectArgs[i] | 0;
        }
        return message;
    };
    ItemConsume.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.effectArgs = [];
        if (options.defaults) {
            object.id = 0;
            object.zhCnName = "";
            object.zhCnDes = "";
            object.icon = "";
            object.effectType = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            object.zhCnDes = message.zhCnDes;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.effectType != null && message.hasOwnProperty("effectType"))
            object.effectType = message.effectType;
        if (message.effectArgs && message.effectArgs.length) {
            object.effectArgs = [];
            for (var j = 0; j < message.effectArgs.length; ++j)
                object.effectArgs[j] = message.effectArgs[j];
        }
        return object;
    };
    ItemConsume.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return ItemConsume;
})();
$excelRoot.ItemDecorate = (function() {
    function ItemDecorate(properties) {
        this.effectArgs = [];
        this.triggerArgs = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    ItemDecorate.prototype.id = 0;
    ItemDecorate.prototype.zhCnName = "";
    ItemDecorate.prototype.zhCnDes = "";
    ItemDecorate.prototype.icon = "";
    ItemDecorate.prototype.effectType = "";
    ItemDecorate.prototype.effectArgs = $util.emptyArray;
    ItemDecorate.prototype.triggerType = "";
    ItemDecorate.prototype.triggerArgs = $util.emptyArray;
    ItemDecorate.create = function create(properties) {
        return new ItemDecorate(properties);
    };
    ItemDecorate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.zhCnName);
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.zhCnDes);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.icon);
        if (message.effectType != null && message.hasOwnProperty("effectType"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.effectType);
        if (message.effectArgs != null && message.effectArgs.length) {
            writer.uint32(/* id 6, wireType 2 =*/50).fork();
            for (var i = 0; i < message.effectArgs.length; ++i)
                writer.int32(message.effectArgs[i]);
            writer.ldelim();
        }
        if (message.triggerType != null && message.hasOwnProperty("triggerType"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.triggerType);
        if (message.triggerArgs != null && message.triggerArgs.length) {
            writer.uint32(/* id 8, wireType 2 =*/66).fork();
            for (var i = 0; i < message.triggerArgs.length; ++i)
                writer.int32(message.triggerArgs[i]);
            writer.ldelim();
        }
        return writer;
    };
    ItemDecorate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    ItemDecorate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.ItemDecorate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.zhCnName = reader.string();
                break;
            case 3:
                message.zhCnDes = reader.string();
                break;
            case 4:
                message.icon = reader.string();
                break;
            case 5:
                message.effectType = reader.string();
                break;
            case 6:
                if (!(message.effectArgs && message.effectArgs.length))
                    message.effectArgs = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.effectArgs.push(reader.int32());
                } else
                    message.effectArgs.push(reader.int32());
                break;
            case 7:
                message.triggerType = reader.string();
                break;
            case 8:
                if (!(message.triggerArgs && message.triggerArgs.length))
                    message.triggerArgs = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.triggerArgs.push(reader.int32());
                } else
                    message.triggerArgs.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    ItemDecorate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    ItemDecorate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            if (!$util.isString(message.zhCnDes))
                return "zhCnDes: string expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isString(message.icon))
                return "icon: string expected";
        if (message.effectType != null && message.hasOwnProperty("effectType"))
            if (!$util.isString(message.effectType))
                return "effectType: string expected";
        if (message.effectArgs != null && message.hasOwnProperty("effectArgs")) {
            if (!Array.isArray(message.effectArgs))
                return "effectArgs: array expected";
            for (var i = 0; i < message.effectArgs.length; ++i)
                if (!$util.isInteger(message.effectArgs[i]))
                    return "effectArgs: integer[] expected";
        }
        if (message.triggerType != null && message.hasOwnProperty("triggerType"))
            if (!$util.isString(message.triggerType))
                return "triggerType: string expected";
        if (message.triggerArgs != null && message.hasOwnProperty("triggerArgs")) {
            if (!Array.isArray(message.triggerArgs))
                return "triggerArgs: array expected";
            for (var i = 0; i < message.triggerArgs.length; ++i)
                if (!$util.isInteger(message.triggerArgs[i]))
                    return "triggerArgs: integer[] expected";
        }
        return null;
    };
    ItemDecorate.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.ItemDecorate)
            return object;
        var message = new $excelRoot.ItemDecorate();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.zhCnDes != null)
            message.zhCnDes = String(object.zhCnDes);
        if (object.icon != null)
            message.icon = String(object.icon);
        if (object.effectType != null)
            message.effectType = String(object.effectType);
        if (object.effectArgs) {
            if (!Array.isArray(object.effectArgs))
                throw TypeError(".ItemDecorate.effectArgs: array expected");
            message.effectArgs = [];
            for (var i = 0; i < object.effectArgs.length; ++i)
                message.effectArgs[i] = object.effectArgs[i] | 0;
        }
        if (object.triggerType != null)
            message.triggerType = String(object.triggerType);
        if (object.triggerArgs) {
            if (!Array.isArray(object.triggerArgs))
                throw TypeError(".ItemDecorate.triggerArgs: array expected");
            message.triggerArgs = [];
            for (var i = 0; i < object.triggerArgs.length; ++i)
                message.triggerArgs[i] = object.triggerArgs[i] | 0;
        }
        return message;
    };
    ItemDecorate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.effectArgs = [];
            object.triggerArgs = [];
        }
        if (options.defaults) {
            object.id = 0;
            object.zhCnName = "";
            object.zhCnDes = "";
            object.icon = "";
            object.effectType = "";
            object.triggerType = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            object.zhCnDes = message.zhCnDes;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.effectType != null && message.hasOwnProperty("effectType"))
            object.effectType = message.effectType;
        if (message.effectArgs && message.effectArgs.length) {
            object.effectArgs = [];
            for (var j = 0; j < message.effectArgs.length; ++j)
                object.effectArgs[j] = message.effectArgs[j];
        }
        if (message.triggerType != null && message.hasOwnProperty("triggerType"))
            object.triggerType = message.triggerType;
        if (message.triggerArgs && message.triggerArgs.length) {
            object.triggerArgs = [];
            for (var j = 0; j < message.triggerArgs.length; ++j)
                object.triggerArgs[j] = message.triggerArgs[j];
        }
        return object;
    };
    ItemDecorate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return ItemDecorate;
})();
$excelRoot.ItemWeapon = (function() {
    function ItemWeapon(properties) {
        this.effectArgs = [];
        this.triggerArgs = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    ItemWeapon.prototype.id = 0;
    ItemWeapon.prototype.zhCnName = "";
    ItemWeapon.prototype.zhCnDes = "";
    ItemWeapon.prototype.icon = "";
    ItemWeapon.prototype.effectType = "";
    ItemWeapon.prototype.effectArgs = $util.emptyArray;
    ItemWeapon.prototype.triggerType = "";
    ItemWeapon.prototype.triggerArgs = $util.emptyArray;
    ItemWeapon.create = function create(properties) {
        return new ItemWeapon(properties);
    };
    ItemWeapon.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.zhCnName);
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.zhCnDes);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.icon);
        if (message.effectType != null && message.hasOwnProperty("effectType"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.effectType);
        if (message.effectArgs != null && message.effectArgs.length) {
            writer.uint32(/* id 6, wireType 2 =*/50).fork();
            for (var i = 0; i < message.effectArgs.length; ++i)
                writer.int32(message.effectArgs[i]);
            writer.ldelim();
        }
        if (message.triggerType != null && message.hasOwnProperty("triggerType"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.triggerType);
        if (message.triggerArgs != null && message.triggerArgs.length) {
            writer.uint32(/* id 8, wireType 2 =*/66).fork();
            for (var i = 0; i < message.triggerArgs.length; ++i)
                writer.int32(message.triggerArgs[i]);
            writer.ldelim();
        }
        return writer;
    };
    ItemWeapon.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    ItemWeapon.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.ItemWeapon();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.zhCnName = reader.string();
                break;
            case 3:
                message.zhCnDes = reader.string();
                break;
            case 4:
                message.icon = reader.string();
                break;
            case 5:
                message.effectType = reader.string();
                break;
            case 6:
                if (!(message.effectArgs && message.effectArgs.length))
                    message.effectArgs = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.effectArgs.push(reader.int32());
                } else
                    message.effectArgs.push(reader.int32());
                break;
            case 7:
                message.triggerType = reader.string();
                break;
            case 8:
                if (!(message.triggerArgs && message.triggerArgs.length))
                    message.triggerArgs = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.triggerArgs.push(reader.int32());
                } else
                    message.triggerArgs.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    ItemWeapon.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    ItemWeapon.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            if (!$util.isString(message.zhCnDes))
                return "zhCnDes: string expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isString(message.icon))
                return "icon: string expected";
        if (message.effectType != null && message.hasOwnProperty("effectType"))
            if (!$util.isString(message.effectType))
                return "effectType: string expected";
        if (message.effectArgs != null && message.hasOwnProperty("effectArgs")) {
            if (!Array.isArray(message.effectArgs))
                return "effectArgs: array expected";
            for (var i = 0; i < message.effectArgs.length; ++i)
                if (!$util.isInteger(message.effectArgs[i]))
                    return "effectArgs: integer[] expected";
        }
        if (message.triggerType != null && message.hasOwnProperty("triggerType"))
            if (!$util.isString(message.triggerType))
                return "triggerType: string expected";
        if (message.triggerArgs != null && message.hasOwnProperty("triggerArgs")) {
            if (!Array.isArray(message.triggerArgs))
                return "triggerArgs: array expected";
            for (var i = 0; i < message.triggerArgs.length; ++i)
                if (!$util.isInteger(message.triggerArgs[i]))
                    return "triggerArgs: integer[] expected";
        }
        return null;
    };
    ItemWeapon.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.ItemWeapon)
            return object;
        var message = new $excelRoot.ItemWeapon();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.zhCnDes != null)
            message.zhCnDes = String(object.zhCnDes);
        if (object.icon != null)
            message.icon = String(object.icon);
        if (object.effectType != null)
            message.effectType = String(object.effectType);
        if (object.effectArgs) {
            if (!Array.isArray(object.effectArgs))
                throw TypeError(".ItemWeapon.effectArgs: array expected");
            message.effectArgs = [];
            for (var i = 0; i < object.effectArgs.length; ++i)
                message.effectArgs[i] = object.effectArgs[i] | 0;
        }
        if (object.triggerType != null)
            message.triggerType = String(object.triggerType);
        if (object.triggerArgs) {
            if (!Array.isArray(object.triggerArgs))
                throw TypeError(".ItemWeapon.triggerArgs: array expected");
            message.triggerArgs = [];
            for (var i = 0; i < object.triggerArgs.length; ++i)
                message.triggerArgs[i] = object.triggerArgs[i] | 0;
        }
        return message;
    };
    ItemWeapon.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.effectArgs = [];
            object.triggerArgs = [];
        }
        if (options.defaults) {
            object.id = 0;
            object.zhCnName = "";
            object.zhCnDes = "";
            object.icon = "";
            object.effectType = "";
            object.triggerType = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            object.zhCnDes = message.zhCnDes;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.effectType != null && message.hasOwnProperty("effectType"))
            object.effectType = message.effectType;
        if (message.effectArgs && message.effectArgs.length) {
            object.effectArgs = [];
            for (var j = 0; j < message.effectArgs.length; ++j)
                object.effectArgs[j] = message.effectArgs[j];
        }
        if (message.triggerType != null && message.hasOwnProperty("triggerType"))
            object.triggerType = message.triggerType;
        if (message.triggerArgs && message.triggerArgs.length) {
            object.triggerArgs = [];
            for (var j = 0; j < message.triggerArgs.length; ++j)
                object.triggerArgs[j] = message.triggerArgs[j];
        }
        return object;
    };
    ItemWeapon.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return ItemWeapon;
})();
$excelRoot.Level = (function() {
    function Level(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Level.prototype.id = 0;
    Level.prototype.exp = 0;
    Level.create = function create(properties) {
        return new Level(properties);
    };
    Level.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.exp != null && message.hasOwnProperty("exp"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.exp);
        return writer;
    };
    Level.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Level.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Level();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.exp = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Level.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Level.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.exp != null && message.hasOwnProperty("exp"))
            if (!$util.isInteger(message.exp))
                return "exp: integer expected";
        return null;
    };
    Level.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Level)
            return object;
        var message = new $excelRoot.Level();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.exp != null)
            message.exp = object.exp | 0;
        return message;
    };
    Level.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.exp = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.exp != null && message.hasOwnProperty("exp"))
            object.exp = message.exp;
        return object;
    };
    Level.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Level;
})();
$excelRoot.Loader = (function() {
    function Loader(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Loader.prototype.id = 0;
    Loader.prototype.name = "";
    Loader.prototype.isShowCircle = false;
    Loader.create = function create(properties) {
        return new Loader(properties);
    };
    Loader.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.isShowCircle != null && message.hasOwnProperty("isShowCircle"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isShowCircle);
        return writer;
    };
    Loader.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Loader.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Loader();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.isShowCircle = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Loader.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Loader.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.isShowCircle != null && message.hasOwnProperty("isShowCircle"))
            if (typeof message.isShowCircle !== "boolean")
                return "isShowCircle: boolean expected";
        return null;
    };
    Loader.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Loader)
            return object;
        var message = new $excelRoot.Loader();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.name != null)
            message.name = String(object.name);
        if (object.isShowCircle != null)
            message.isShowCircle = Boolean(object.isShowCircle);
        return message;
    };
    Loader.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.name = "";
            object.isShowCircle = false;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.isShowCircle != null && message.hasOwnProperty("isShowCircle"))
            object.isShowCircle = message.isShowCircle;
        return object;
    };
    Loader.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Loader;
})();
$excelRoot.Menu = (function() {
    function Menu(properties) {
        this.topInformation = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Menu.prototype.id = 0;
    Menu.prototype.zhCnName = "";
    Menu.prototype.icon = "";
    Menu.prototype.moduleNameIcon = "";
    Menu.prototype.moduleName = "";
    Menu.prototype.layer = 0;
    Menu.prototype.topInformation = $util.emptyArray;
    Menu.prototype.closeOtherType = 0;
    Menu.prototype.closeHomeWindow = false;
    Menu.prototype.isAutoOpenHomeWindow = false;
    Menu.prototype.cacheTime = 0;
    Menu.prototype.loaderId = 0;
    Menu.prototype.barType = 0;
    Menu.prototype.barIndex = 0;
    Menu.prototype.openAnimation = 0;
    Menu.prototype.closeAnimation = 0;
    Menu.prototype.redType = 0;
    Menu.create = function create(properties) {
        return new Menu(properties);
    };
    Menu.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.zhCnName);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.icon);
        if (message.moduleNameIcon != null && message.hasOwnProperty("moduleNameIcon"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.moduleNameIcon);
        if (message.moduleName != null && message.hasOwnProperty("moduleName"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.moduleName);
        if (message.layer != null && message.hasOwnProperty("layer"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.layer);
        if (message.topInformation != null && message.topInformation.length) {
            writer.uint32(/* id 7, wireType 2 =*/58).fork();
            for (var i = 0; i < message.topInformation.length; ++i)
                writer.int32(message.topInformation[i]);
            writer.ldelim();
        }
        if (message.closeOtherType != null && message.hasOwnProperty("closeOtherType"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.closeOtherType);
        if (message.closeHomeWindow != null && message.hasOwnProperty("closeHomeWindow"))
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.closeHomeWindow);
        if (message.isAutoOpenHomeWindow != null && message.hasOwnProperty("isAutoOpenHomeWindow"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.isAutoOpenHomeWindow);
        if (message.cacheTime != null && message.hasOwnProperty("cacheTime"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.cacheTime);
        if (message.loaderId != null && message.hasOwnProperty("loaderId"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.loaderId);
        if (message.barType != null && message.hasOwnProperty("barType"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.barType);
        if (message.barIndex != null && message.hasOwnProperty("barIndex"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.barIndex);
        if (message.openAnimation != null && message.hasOwnProperty("openAnimation"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.openAnimation);
        if (message.closeAnimation != null && message.hasOwnProperty("closeAnimation"))
            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.closeAnimation);
        if (message.redType != null && message.hasOwnProperty("redType"))
            writer.uint32(/* id 17, wireType 0 =*/136).int32(message.redType);
        return writer;
    };
    Menu.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Menu.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Menu();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.zhCnName = reader.string();
                break;
            case 3:
                message.icon = reader.string();
                break;
            case 4:
                message.moduleNameIcon = reader.string();
                break;
            case 5:
                message.moduleName = reader.string();
                break;
            case 6:
                message.layer = reader.int32();
                break;
            case 7:
                if (!(message.topInformation && message.topInformation.length))
                    message.topInformation = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.topInformation.push(reader.int32());
                } else
                    message.topInformation.push(reader.int32());
                break;
            case 8:
                message.closeOtherType = reader.int32();
                break;
            case 9:
                message.closeHomeWindow = reader.bool();
                break;
            case 10:
                message.isAutoOpenHomeWindow = reader.bool();
                break;
            case 11:
                message.cacheTime = reader.int32();
                break;
            case 12:
                message.loaderId = reader.int32();
                break;
            case 13:
                message.barType = reader.int32();
                break;
            case 14:
                message.barIndex = reader.int32();
                break;
            case 15:
                message.openAnimation = reader.int32();
                break;
            case 16:
                message.closeAnimation = reader.int32();
                break;
            case 17:
                message.redType = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Menu.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Menu.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isString(message.icon))
                return "icon: string expected";
        if (message.moduleNameIcon != null && message.hasOwnProperty("moduleNameIcon"))
            if (!$util.isString(message.moduleNameIcon))
                return "moduleNameIcon: string expected";
        if (message.moduleName != null && message.hasOwnProperty("moduleName"))
            if (!$util.isString(message.moduleName))
                return "moduleName: string expected";
        if (message.layer != null && message.hasOwnProperty("layer"))
            if (!$util.isInteger(message.layer))
                return "layer: integer expected";
        if (message.topInformation != null && message.hasOwnProperty("topInformation")) {
            if (!Array.isArray(message.topInformation))
                return "topInformation: array expected";
            for (var i = 0; i < message.topInformation.length; ++i)
                if (!$util.isInteger(message.topInformation[i]))
                    return "topInformation: integer[] expected";
        }
        if (message.closeOtherType != null && message.hasOwnProperty("closeOtherType"))
            if (!$util.isInteger(message.closeOtherType))
                return "closeOtherType: integer expected";
        if (message.closeHomeWindow != null && message.hasOwnProperty("closeHomeWindow"))
            if (typeof message.closeHomeWindow !== "boolean")
                return "closeHomeWindow: boolean expected";
        if (message.isAutoOpenHomeWindow != null && message.hasOwnProperty("isAutoOpenHomeWindow"))
            if (typeof message.isAutoOpenHomeWindow !== "boolean")
                return "isAutoOpenHomeWindow: boolean expected";
        if (message.cacheTime != null && message.hasOwnProperty("cacheTime"))
            if (!$util.isInteger(message.cacheTime))
                return "cacheTime: integer expected";
        if (message.loaderId != null && message.hasOwnProperty("loaderId"))
            if (!$util.isInteger(message.loaderId))
                return "loaderId: integer expected";
        if (message.barType != null && message.hasOwnProperty("barType"))
            if (!$util.isInteger(message.barType))
                return "barType: integer expected";
        if (message.barIndex != null && message.hasOwnProperty("barIndex"))
            if (!$util.isInteger(message.barIndex))
                return "barIndex: integer expected";
        if (message.openAnimation != null && message.hasOwnProperty("openAnimation"))
            if (!$util.isInteger(message.openAnimation))
                return "openAnimation: integer expected";
        if (message.closeAnimation != null && message.hasOwnProperty("closeAnimation"))
            if (!$util.isInteger(message.closeAnimation))
                return "closeAnimation: integer expected";
        if (message.redType != null && message.hasOwnProperty("redType"))
            if (!$util.isInteger(message.redType))
                return "redType: integer expected";
        return null;
    };
    Menu.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Menu)
            return object;
        var message = new $excelRoot.Menu();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.icon != null)
            message.icon = String(object.icon);
        if (object.moduleNameIcon != null)
            message.moduleNameIcon = String(object.moduleNameIcon);
        if (object.moduleName != null)
            message.moduleName = String(object.moduleName);
        if (object.layer != null)
            message.layer = object.layer | 0;
        if (object.topInformation) {
            if (!Array.isArray(object.topInformation))
                throw TypeError(".Menu.topInformation: array expected");
            message.topInformation = [];
            for (var i = 0; i < object.topInformation.length; ++i)
                message.topInformation[i] = object.topInformation[i] | 0;
        }
        if (object.closeOtherType != null)
            message.closeOtherType = object.closeOtherType | 0;
        if (object.closeHomeWindow != null)
            message.closeHomeWindow = Boolean(object.closeHomeWindow);
        if (object.isAutoOpenHomeWindow != null)
            message.isAutoOpenHomeWindow = Boolean(object.isAutoOpenHomeWindow);
        if (object.cacheTime != null)
            message.cacheTime = object.cacheTime | 0;
        if (object.loaderId != null)
            message.loaderId = object.loaderId | 0;
        if (object.barType != null)
            message.barType = object.barType | 0;
        if (object.barIndex != null)
            message.barIndex = object.barIndex | 0;
        if (object.openAnimation != null)
            message.openAnimation = object.openAnimation | 0;
        if (object.closeAnimation != null)
            message.closeAnimation = object.closeAnimation | 0;
        if (object.redType != null)
            message.redType = object.redType | 0;
        return message;
    };
    Menu.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.topInformation = [];
        if (options.defaults) {
            object.id = 0;
            object.zhCnName = "";
            object.icon = "";
            object.moduleNameIcon = "";
            object.moduleName = "";
            object.layer = 0;
            object.closeOtherType = 0;
            object.closeHomeWindow = false;
            object.isAutoOpenHomeWindow = false;
            object.cacheTime = 0;
            object.loaderId = 0;
            object.barType = 0;
            object.barIndex = 0;
            object.openAnimation = 0;
            object.closeAnimation = 0;
            object.redType = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.moduleNameIcon != null && message.hasOwnProperty("moduleNameIcon"))
            object.moduleNameIcon = message.moduleNameIcon;
        if (message.moduleName != null && message.hasOwnProperty("moduleName"))
            object.moduleName = message.moduleName;
        if (message.layer != null && message.hasOwnProperty("layer"))
            object.layer = message.layer;
        if (message.topInformation && message.topInformation.length) {
            object.topInformation = [];
            for (var j = 0; j < message.topInformation.length; ++j)
                object.topInformation[j] = message.topInformation[j];
        }
        if (message.closeOtherType != null && message.hasOwnProperty("closeOtherType"))
            object.closeOtherType = message.closeOtherType;
        if (message.closeHomeWindow != null && message.hasOwnProperty("closeHomeWindow"))
            object.closeHomeWindow = message.closeHomeWindow;
        if (message.isAutoOpenHomeWindow != null && message.hasOwnProperty("isAutoOpenHomeWindow"))
            object.isAutoOpenHomeWindow = message.isAutoOpenHomeWindow;
        if (message.cacheTime != null && message.hasOwnProperty("cacheTime"))
            object.cacheTime = message.cacheTime;
        if (message.loaderId != null && message.hasOwnProperty("loaderId"))
            object.loaderId = message.loaderId;
        if (message.barType != null && message.hasOwnProperty("barType"))
            object.barType = message.barType;
        if (message.barIndex != null && message.hasOwnProperty("barIndex"))
            object.barIndex = message.barIndex;
        if (message.openAnimation != null && message.hasOwnProperty("openAnimation"))
            object.openAnimation = message.openAnimation;
        if (message.closeAnimation != null && message.hasOwnProperty("closeAnimation"))
            object.closeAnimation = message.closeAnimation;
        if (message.redType != null && message.hasOwnProperty("redType"))
            object.redType = message.redType;
        return object;
    };
    Menu.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Menu;
})();
$excelRoot.Msg = (function() {
    function Msg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Msg.prototype.id = 0;
    Msg.prototype.key = "";
    Msg.prototype.module = "";
    Msg.prototype.name = "";
    Msg.prototype.zhCnNotice = "";
    Msg.prototype.enNotice = "";
    Msg.create = function create(properties) {
        return new Msg(properties);
    };
    Msg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.key != null && message.hasOwnProperty("key"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
        if (message.module != null && message.hasOwnProperty("module"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.module);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
        if (message.zhCnNotice != null && message.hasOwnProperty("zhCnNotice"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.zhCnNotice);
        if (message.enNotice != null && message.hasOwnProperty("enNotice"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.enNotice);
        return writer;
    };
    Msg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Msg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Msg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.key = reader.string();
                break;
            case 3:
                message.module = reader.string();
                break;
            case 4:
                message.name = reader.string();
                break;
            case 5:
                message.zhCnNotice = reader.string();
                break;
            case 6:
                message.enNotice = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Msg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Msg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isString(message.key))
                return "key: string expected";
        if (message.module != null && message.hasOwnProperty("module"))
            if (!$util.isString(message.module))
                return "module: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.zhCnNotice != null && message.hasOwnProperty("zhCnNotice"))
            if (!$util.isString(message.zhCnNotice))
                return "zhCnNotice: string expected";
        if (message.enNotice != null && message.hasOwnProperty("enNotice"))
            if (!$util.isString(message.enNotice))
                return "enNotice: string expected";
        return null;
    };
    Msg.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Msg)
            return object;
        var message = new $excelRoot.Msg();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.key != null)
            message.key = String(object.key);
        if (object.module != null)
            message.module = String(object.module);
        if (object.name != null)
            message.name = String(object.name);
        if (object.zhCnNotice != null)
            message.zhCnNotice = String(object.zhCnNotice);
        if (object.enNotice != null)
            message.enNotice = String(object.enNotice);
        return message;
    };
    Msg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.key = "";
            object.module = "";
            object.name = "";
            object.zhCnNotice = "";
            object.enNotice = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        if (message.module != null && message.hasOwnProperty("module"))
            object.module = message.module;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.zhCnNotice != null && message.hasOwnProperty("zhCnNotice"))
            object.zhCnNotice = message.zhCnNotice;
        if (message.enNotice != null && message.hasOwnProperty("enNotice"))
            object.enNotice = message.enNotice;
        return object;
    };
    Msg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Msg;
})();
$excelRoot.Property = (function() {
    function Property(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Property.prototype.id = 0;
    Property.prototype.field = "";
    Property.prototype.des = "";
    Property.prototype.zhCnName = "";
    Property.prototype.ValueType = 0;
    Property.prototype.icon = 0;
    Property.prototype.groupType = 0;
    Property.prototype.visible = false;
    Property.create = function create(properties) {
        return new Property(properties);
    };
    Property.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.field != null && message.hasOwnProperty("field"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.field);
        if (message.des != null && message.hasOwnProperty("des"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.des);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.zhCnName);
        if (message.ValueType != null && message.hasOwnProperty("ValueType"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.ValueType);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.icon);
        if (message.groupType != null && message.hasOwnProperty("groupType"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.groupType);
        if (message.visible != null && message.hasOwnProperty("visible"))
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.visible);
        return writer;
    };
    Property.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Property.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Property();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.field = reader.string();
                break;
            case 3:
                message.des = reader.string();
                break;
            case 4:
                message.zhCnName = reader.string();
                break;
            case 5:
                message.ValueType = reader.int32();
                break;
            case 6:
                message.icon = reader.int32();
                break;
            case 7:
                message.groupType = reader.int32();
                break;
            case 8:
                message.visible = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Property.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Property.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.field != null && message.hasOwnProperty("field"))
            if (!$util.isString(message.field))
                return "field: string expected";
        if (message.des != null && message.hasOwnProperty("des"))
            if (!$util.isString(message.des))
                return "des: string expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.ValueType != null && message.hasOwnProperty("ValueType"))
            if (!$util.isInteger(message.ValueType))
                return "ValueType: integer expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isInteger(message.icon))
                return "icon: integer expected";
        if (message.groupType != null && message.hasOwnProperty("groupType"))
            if (!$util.isInteger(message.groupType))
                return "groupType: integer expected";
        if (message.visible != null && message.hasOwnProperty("visible"))
            if (typeof message.visible !== "boolean")
                return "visible: boolean expected";
        return null;
    };
    Property.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Property)
            return object;
        var message = new $excelRoot.Property();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.field != null)
            message.field = String(object.field);
        if (object.des != null)
            message.des = String(object.des);
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.ValueType != null)
            message.ValueType = object.ValueType | 0;
        if (object.icon != null)
            message.icon = object.icon | 0;
        if (object.groupType != null)
            message.groupType = object.groupType | 0;
        if (object.visible != null)
            message.visible = Boolean(object.visible);
        return message;
    };
    Property.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.field = "";
            object.des = "";
            object.zhCnName = "";
            object.ValueType = 0;
            object.icon = 0;
            object.groupType = 0;
            object.visible = false;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.field != null && message.hasOwnProperty("field"))
            object.field = message.field;
        if (message.des != null && message.hasOwnProperty("des"))
            object.des = message.des;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.ValueType != null && message.hasOwnProperty("ValueType"))
            object.ValueType = message.ValueType;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.groupType != null && message.hasOwnProperty("groupType"))
            object.groupType = message.groupType;
        if (message.visible != null && message.hasOwnProperty("visible"))
            object.visible = message.visible;
        return object;
    };
    Property.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Property;
})();
$excelRoot.TriggerType = (function() {
    function TriggerType(properties) {
        this.cardTypeList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    TriggerType.prototype.id = 0;
    TriggerType.prototype.triggerTypeKey = "";
    TriggerType.prototype.zhCnName = "";
    TriggerType.prototype.cardTypeList = $util.emptyArray;
    TriggerType.create = function create(properties) {
        return new TriggerType(properties);
    };
    TriggerType.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.triggerTypeKey != null && message.hasOwnProperty("triggerTypeKey"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.triggerTypeKey);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.zhCnName);
        if (message.cardTypeList != null && message.cardTypeList.length)
            for (var i = 0; i < message.cardTypeList.length; ++i)
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.cardTypeList[i]);
        return writer;
    };
    TriggerType.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    TriggerType.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.TriggerType();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.triggerTypeKey = reader.string();
                break;
            case 3:
                message.zhCnName = reader.string();
                break;
            case 4:
                if (!(message.cardTypeList && message.cardTypeList.length))
                    message.cardTypeList = [];
                message.cardTypeList.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    TriggerType.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    TriggerType.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.triggerTypeKey != null && message.hasOwnProperty("triggerTypeKey"))
            if (!$util.isString(message.triggerTypeKey))
                return "triggerTypeKey: string expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.cardTypeList != null && message.hasOwnProperty("cardTypeList")) {
            if (!Array.isArray(message.cardTypeList))
                return "cardTypeList: array expected";
            for (var i = 0; i < message.cardTypeList.length; ++i)
                if (!$util.isString(message.cardTypeList[i]))
                    return "cardTypeList: string[] expected";
        }
        return null;
    };
    TriggerType.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.TriggerType)
            return object;
        var message = new $excelRoot.TriggerType();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.triggerTypeKey != null)
            message.triggerTypeKey = String(object.triggerTypeKey);
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.cardTypeList) {
            if (!Array.isArray(object.cardTypeList))
                throw TypeError(".TriggerType.cardTypeList: array expected");
            message.cardTypeList = [];
            for (var i = 0; i < object.cardTypeList.length; ++i)
                message.cardTypeList[i] = String(object.cardTypeList[i]);
        }
        return message;
    };
    TriggerType.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.cardTypeList = [];
        if (options.defaults) {
            object.id = 0;
            object.triggerTypeKey = "";
            object.zhCnName = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.triggerTypeKey != null && message.hasOwnProperty("triggerTypeKey"))
            object.triggerTypeKey = message.triggerTypeKey;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.cardTypeList && message.cardTypeList.length) {
            object.cardTypeList = [];
            for (var j = 0; j < message.cardTypeList.length; ++j)
                object.cardTypeList[j] = message.cardTypeList[j];
        }
        return object;
    };
    TriggerType.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return TriggerType;
})();
$excelRoot.Unlock = (function() {
    function Unlock(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Unlock.prototype.id = 0;
    Unlock.prototype.zhCnName = "";
    Unlock.prototype.menuId = 0;
    Unlock.prototype.menuIndexId = 0;
    Unlock.prototype.showType = 0;
    Unlock.prototype.showLevel = 0;
    Unlock.prototype.openLevel = 0;
    Unlock.prototype.checkPoint = 0;
    Unlock.prototype.openShow = 0;
    Unlock.prototype.showIcon = 0;
    Unlock.create = function create(properties) {
        return new Unlock(properties);
    };
    Unlock.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.zhCnName);
        if (message.menuId != null && message.hasOwnProperty("menuId"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.menuId);
        if (message.menuIndexId != null && message.hasOwnProperty("menuIndexId"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.menuIndexId);
        if (message.showType != null && message.hasOwnProperty("showType"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.showType);
        if (message.showLevel != null && message.hasOwnProperty("showLevel"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.showLevel);
        if (message.openLevel != null && message.hasOwnProperty("openLevel"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.openLevel);
        if (message.checkPoint != null && message.hasOwnProperty("checkPoint"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.checkPoint);
        if (message.openShow != null && message.hasOwnProperty("openShow"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.openShow);
        if (message.showIcon != null && message.hasOwnProperty("showIcon"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.showIcon);
        return writer;
    };
    Unlock.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Unlock.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Unlock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.zhCnName = reader.string();
                break;
            case 3:
                message.menuId = reader.int32();
                break;
            case 4:
                message.menuIndexId = reader.int32();
                break;
            case 5:
                message.showType = reader.int32();
                break;
            case 6:
                message.showLevel = reader.int32();
                break;
            case 7:
                message.openLevel = reader.int32();
                break;
            case 8:
                message.checkPoint = reader.int32();
                break;
            case 9:
                message.openShow = reader.int32();
                break;
            case 10:
                message.showIcon = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Unlock.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Unlock.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.menuId != null && message.hasOwnProperty("menuId"))
            if (!$util.isInteger(message.menuId))
                return "menuId: integer expected";
        if (message.menuIndexId != null && message.hasOwnProperty("menuIndexId"))
            if (!$util.isInteger(message.menuIndexId))
                return "menuIndexId: integer expected";
        if (message.showType != null && message.hasOwnProperty("showType"))
            if (!$util.isInteger(message.showType))
                return "showType: integer expected";
        if (message.showLevel != null && message.hasOwnProperty("showLevel"))
            if (!$util.isInteger(message.showLevel))
                return "showLevel: integer expected";
        if (message.openLevel != null && message.hasOwnProperty("openLevel"))
            if (!$util.isInteger(message.openLevel))
                return "openLevel: integer expected";
        if (message.checkPoint != null && message.hasOwnProperty("checkPoint"))
            if (!$util.isInteger(message.checkPoint))
                return "checkPoint: integer expected";
        if (message.openShow != null && message.hasOwnProperty("openShow"))
            if (!$util.isInteger(message.openShow))
                return "openShow: integer expected";
        if (message.showIcon != null && message.hasOwnProperty("showIcon"))
            if (!$util.isInteger(message.showIcon))
                return "showIcon: integer expected";
        return null;
    };
    Unlock.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Unlock)
            return object;
        var message = new $excelRoot.Unlock();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.menuId != null)
            message.menuId = object.menuId | 0;
        if (object.menuIndexId != null)
            message.menuIndexId = object.menuIndexId | 0;
        if (object.showType != null)
            message.showType = object.showType | 0;
        if (object.showLevel != null)
            message.showLevel = object.showLevel | 0;
        if (object.openLevel != null)
            message.openLevel = object.openLevel | 0;
        if (object.checkPoint != null)
            message.checkPoint = object.checkPoint | 0;
        if (object.openShow != null)
            message.openShow = object.openShow | 0;
        if (object.showIcon != null)
            message.showIcon = object.showIcon | 0;
        return message;
    };
    Unlock.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.zhCnName = "";
            object.menuId = 0;
            object.menuIndexId = 0;
            object.showType = 0;
            object.showLevel = 0;
            object.openLevel = 0;
            object.checkPoint = 0;
            object.openShow = 0;
            object.showIcon = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.menuId != null && message.hasOwnProperty("menuId"))
            object.menuId = message.menuId;
        if (message.menuIndexId != null && message.hasOwnProperty("menuIndexId"))
            object.menuIndexId = message.menuIndexId;
        if (message.showType != null && message.hasOwnProperty("showType"))
            object.showType = message.showType;
        if (message.showLevel != null && message.hasOwnProperty("showLevel"))
            object.showLevel = message.showLevel;
        if (message.openLevel != null && message.hasOwnProperty("openLevel"))
            object.openLevel = message.openLevel;
        if (message.checkPoint != null && message.hasOwnProperty("checkPoint"))
            object.checkPoint = message.checkPoint;
        if (message.openShow != null && message.hasOwnProperty("openShow"))
            object.openShow = message.openShow;
        if (message.showIcon != null && message.hasOwnProperty("showIcon"))
            object.showIcon = message.showIcon;
        return object;
    };
    Unlock.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Unlock;
})();
$excelRoot.ConfigMng = (function() {
    function ConfigMng(properties) {
        this.Card = {};
        this.CardScoreType = {};
        this.EffectType = {};
        this.Item = {};
        this.ItemConsume = {};
        this.ItemDecorate = {};
        this.ItemWeapon = {};
        this.Level = {};
        this.Loader = {};
        this.Menu = {};
        this.Msg = {};
        this.Property = {};
        this.TriggerType = {};
        this.Unlock = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    ConfigMng.prototype.Global = null;
    ConfigMng.prototype.Card = $util.emptyObject;
    ConfigMng.prototype.CardScoreType = $util.emptyObject;
    ConfigMng.prototype.EffectType = $util.emptyObject;
    ConfigMng.prototype.Item = $util.emptyObject;
    ConfigMng.prototype.ItemConsume = $util.emptyObject;
    ConfigMng.prototype.ItemDecorate = $util.emptyObject;
    ConfigMng.prototype.ItemWeapon = $util.emptyObject;
    ConfigMng.prototype.Level = $util.emptyObject;
    ConfigMng.prototype.Loader = $util.emptyObject;
    ConfigMng.prototype.Menu = $util.emptyObject;
    ConfigMng.prototype.Msg = $util.emptyObject;
    ConfigMng.prototype.Property = $util.emptyObject;
    ConfigMng.prototype.TriggerType = $util.emptyObject;
    ConfigMng.prototype.Unlock = $util.emptyObject;
    ConfigMng.create = function create(properties) {
        return new ConfigMng(properties);
    };
    ConfigMng.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Global != null && message.hasOwnProperty("Global"))
            $excelRoot.Global.encode(message.Global, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.Card != null && message.hasOwnProperty("Card"))
            for (var keys = Object.keys(message.Card), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Card.encode(message.Card[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.CardScoreType != null && message.hasOwnProperty("CardScoreType"))
            for (var keys = Object.keys(message.CardScoreType), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.CardScoreType.encode(message.CardScoreType[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.EffectType != null && message.hasOwnProperty("EffectType"))
            for (var keys = Object.keys(message.EffectType), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.EffectType.encode(message.EffectType[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Item != null && message.hasOwnProperty("Item"))
            for (var keys = Object.keys(message.Item), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Item.encode(message.Item[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.ItemConsume != null && message.hasOwnProperty("ItemConsume"))
            for (var keys = Object.keys(message.ItemConsume), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.ItemConsume.encode(message.ItemConsume[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.ItemDecorate != null && message.hasOwnProperty("ItemDecorate"))
            for (var keys = Object.keys(message.ItemDecorate), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.ItemDecorate.encode(message.ItemDecorate[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.ItemWeapon != null && message.hasOwnProperty("ItemWeapon"))
            for (var keys = Object.keys(message.ItemWeapon), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 8, wireType 2 =*/66).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.ItemWeapon.encode(message.ItemWeapon[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Level != null && message.hasOwnProperty("Level"))
            for (var keys = Object.keys(message.Level), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 9, wireType 2 =*/74).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Level.encode(message.Level[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Loader != null && message.hasOwnProperty("Loader"))
            for (var keys = Object.keys(message.Loader), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 10, wireType 2 =*/82).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Loader.encode(message.Loader[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Menu != null && message.hasOwnProperty("Menu"))
            for (var keys = Object.keys(message.Menu), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 11, wireType 2 =*/90).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Menu.encode(message.Menu[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Msg != null && message.hasOwnProperty("Msg"))
            for (var keys = Object.keys(message.Msg), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 12, wireType 2 =*/98).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Msg.encode(message.Msg[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Property != null && message.hasOwnProperty("Property"))
            for (var keys = Object.keys(message.Property), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 13, wireType 2 =*/106).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Property.encode(message.Property[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.TriggerType != null && message.hasOwnProperty("TriggerType"))
            for (var keys = Object.keys(message.TriggerType), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 14, wireType 2 =*/114).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.TriggerType.encode(message.TriggerType[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Unlock != null && message.hasOwnProperty("Unlock"))
            for (var keys = Object.keys(message.Unlock), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 15, wireType 2 =*/122).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Unlock.encode(message.Unlock[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        return writer;
    };
    ConfigMng.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    ConfigMng.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.ConfigMng(), key;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Global = $excelRoot.Global.decode(reader, reader.uint32());
                break;
            case 2:
                reader.skip().pos++;
                if (message.Card === $util.emptyObject)
                    message.Card = {};
                key = reader.int32();
                reader.pos++;
                message.Card[key] = $excelRoot.Card.decode(reader, reader.uint32());
                break;
            case 3:
                reader.skip().pos++;
                if (message.CardScoreType === $util.emptyObject)
                    message.CardScoreType = {};
                key = reader.int32();
                reader.pos++;
                message.CardScoreType[key] = $excelRoot.CardScoreType.decode(reader, reader.uint32());
                break;
            case 4:
                reader.skip().pos++;
                if (message.EffectType === $util.emptyObject)
                    message.EffectType = {};
                key = reader.int32();
                reader.pos++;
                message.EffectType[key] = $excelRoot.EffectType.decode(reader, reader.uint32());
                break;
            case 5:
                reader.skip().pos++;
                if (message.Item === $util.emptyObject)
                    message.Item = {};
                key = reader.int32();
                reader.pos++;
                message.Item[key] = $excelRoot.Item.decode(reader, reader.uint32());
                break;
            case 6:
                reader.skip().pos++;
                if (message.ItemConsume === $util.emptyObject)
                    message.ItemConsume = {};
                key = reader.int32();
                reader.pos++;
                message.ItemConsume[key] = $excelRoot.ItemConsume.decode(reader, reader.uint32());
                break;
            case 7:
                reader.skip().pos++;
                if (message.ItemDecorate === $util.emptyObject)
                    message.ItemDecorate = {};
                key = reader.int32();
                reader.pos++;
                message.ItemDecorate[key] = $excelRoot.ItemDecorate.decode(reader, reader.uint32());
                break;
            case 8:
                reader.skip().pos++;
                if (message.ItemWeapon === $util.emptyObject)
                    message.ItemWeapon = {};
                key = reader.int32();
                reader.pos++;
                message.ItemWeapon[key] = $excelRoot.ItemWeapon.decode(reader, reader.uint32());
                break;
            case 9:
                reader.skip().pos++;
                if (message.Level === $util.emptyObject)
                    message.Level = {};
                key = reader.int32();
                reader.pos++;
                message.Level[key] = $excelRoot.Level.decode(reader, reader.uint32());
                break;
            case 10:
                reader.skip().pos++;
                if (message.Loader === $util.emptyObject)
                    message.Loader = {};
                key = reader.int32();
                reader.pos++;
                message.Loader[key] = $excelRoot.Loader.decode(reader, reader.uint32());
                break;
            case 11:
                reader.skip().pos++;
                if (message.Menu === $util.emptyObject)
                    message.Menu = {};
                key = reader.int32();
                reader.pos++;
                message.Menu[key] = $excelRoot.Menu.decode(reader, reader.uint32());
                break;
            case 12:
                reader.skip().pos++;
                if (message.Msg === $util.emptyObject)
                    message.Msg = {};
                key = reader.int32();
                reader.pos++;
                message.Msg[key] = $excelRoot.Msg.decode(reader, reader.uint32());
                break;
            case 13:
                reader.skip().pos++;
                if (message.Property === $util.emptyObject)
                    message.Property = {};
                key = reader.int32();
                reader.pos++;
                message.Property[key] = $excelRoot.Property.decode(reader, reader.uint32());
                break;
            case 14:
                reader.skip().pos++;
                if (message.TriggerType === $util.emptyObject)
                    message.TriggerType = {};
                key = reader.int32();
                reader.pos++;
                message.TriggerType[key] = $excelRoot.TriggerType.decode(reader, reader.uint32());
                break;
            case 15:
                reader.skip().pos++;
                if (message.Unlock === $util.emptyObject)
                    message.Unlock = {};
                key = reader.int32();
                reader.pos++;
                message.Unlock[key] = $excelRoot.Unlock.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    ConfigMng.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    ConfigMng.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Global != null && message.hasOwnProperty("Global")) {
            var error = $excelRoot.Global.verify(message.Global);
            if (error)
                return "Global." + error;
        }
        if (message.Card != null && message.hasOwnProperty("Card")) {
            if (!$util.isObject(message.Card))
                return "Card: object expected";
            var key = Object.keys(message.Card);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Card: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Card.verify(message.Card[key[i]]);
                    if (error)
                        return "Card." + error;
                }
            }
        }
        if (message.CardScoreType != null && message.hasOwnProperty("CardScoreType")) {
            if (!$util.isObject(message.CardScoreType))
                return "CardScoreType: object expected";
            var key = Object.keys(message.CardScoreType);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "CardScoreType: integer key{k:int32} expected";
                {
                    var error = $excelRoot.CardScoreType.verify(message.CardScoreType[key[i]]);
                    if (error)
                        return "CardScoreType." + error;
                }
            }
        }
        if (message.EffectType != null && message.hasOwnProperty("EffectType")) {
            if (!$util.isObject(message.EffectType))
                return "EffectType: object expected";
            var key = Object.keys(message.EffectType);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "EffectType: integer key{k:int32} expected";
                {
                    var error = $excelRoot.EffectType.verify(message.EffectType[key[i]]);
                    if (error)
                        return "EffectType." + error;
                }
            }
        }
        if (message.Item != null && message.hasOwnProperty("Item")) {
            if (!$util.isObject(message.Item))
                return "Item: object expected";
            var key = Object.keys(message.Item);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Item: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Item.verify(message.Item[key[i]]);
                    if (error)
                        return "Item." + error;
                }
            }
        }
        if (message.ItemConsume != null && message.hasOwnProperty("ItemConsume")) {
            if (!$util.isObject(message.ItemConsume))
                return "ItemConsume: object expected";
            var key = Object.keys(message.ItemConsume);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "ItemConsume: integer key{k:int32} expected";
                {
                    var error = $excelRoot.ItemConsume.verify(message.ItemConsume[key[i]]);
                    if (error)
                        return "ItemConsume." + error;
                }
            }
        }
        if (message.ItemDecorate != null && message.hasOwnProperty("ItemDecorate")) {
            if (!$util.isObject(message.ItemDecorate))
                return "ItemDecorate: object expected";
            var key = Object.keys(message.ItemDecorate);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "ItemDecorate: integer key{k:int32} expected";
                {
                    var error = $excelRoot.ItemDecorate.verify(message.ItemDecorate[key[i]]);
                    if (error)
                        return "ItemDecorate." + error;
                }
            }
        }
        if (message.ItemWeapon != null && message.hasOwnProperty("ItemWeapon")) {
            if (!$util.isObject(message.ItemWeapon))
                return "ItemWeapon: object expected";
            var key = Object.keys(message.ItemWeapon);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "ItemWeapon: integer key{k:int32} expected";
                {
                    var error = $excelRoot.ItemWeapon.verify(message.ItemWeapon[key[i]]);
                    if (error)
                        return "ItemWeapon." + error;
                }
            }
        }
        if (message.Level != null && message.hasOwnProperty("Level")) {
            if (!$util.isObject(message.Level))
                return "Level: object expected";
            var key = Object.keys(message.Level);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Level: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Level.verify(message.Level[key[i]]);
                    if (error)
                        return "Level." + error;
                }
            }
        }
        if (message.Loader != null && message.hasOwnProperty("Loader")) {
            if (!$util.isObject(message.Loader))
                return "Loader: object expected";
            var key = Object.keys(message.Loader);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Loader: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Loader.verify(message.Loader[key[i]]);
                    if (error)
                        return "Loader." + error;
                }
            }
        }
        if (message.Menu != null && message.hasOwnProperty("Menu")) {
            if (!$util.isObject(message.Menu))
                return "Menu: object expected";
            var key = Object.keys(message.Menu);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Menu: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Menu.verify(message.Menu[key[i]]);
                    if (error)
                        return "Menu." + error;
                }
            }
        }
        if (message.Msg != null && message.hasOwnProperty("Msg")) {
            if (!$util.isObject(message.Msg))
                return "Msg: object expected";
            var key = Object.keys(message.Msg);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Msg: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Msg.verify(message.Msg[key[i]]);
                    if (error)
                        return "Msg." + error;
                }
            }
        }
        if (message.Property != null && message.hasOwnProperty("Property")) {
            if (!$util.isObject(message.Property))
                return "Property: object expected";
            var key = Object.keys(message.Property);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Property: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Property.verify(message.Property[key[i]]);
                    if (error)
                        return "Property." + error;
                }
            }
        }
        if (message.TriggerType != null && message.hasOwnProperty("TriggerType")) {
            if (!$util.isObject(message.TriggerType))
                return "TriggerType: object expected";
            var key = Object.keys(message.TriggerType);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "TriggerType: integer key{k:int32} expected";
                {
                    var error = $excelRoot.TriggerType.verify(message.TriggerType[key[i]]);
                    if (error)
                        return "TriggerType." + error;
                }
            }
        }
        if (message.Unlock != null && message.hasOwnProperty("Unlock")) {
            if (!$util.isObject(message.Unlock))
                return "Unlock: object expected";
            var key = Object.keys(message.Unlock);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Unlock: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Unlock.verify(message.Unlock[key[i]]);
                    if (error)
                        return "Unlock." + error;
                }
            }
        }
        return null;
    };
    ConfigMng.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.ConfigMng)
            return object;
        var message = new $excelRoot.ConfigMng();
        if (object.Global != null) {
            if (typeof object.Global !== "object")
                throw TypeError(".ConfigMng.Global: object expected");
            message.Global = $excelRoot.Global.fromObject(object.Global);
        }
        if (object.Card) {
            if (typeof object.Card !== "object")
                throw TypeError(".ConfigMng.Card: object expected");
            message.Card = {};
            for (var keys = Object.keys(object.Card), i = 0; i < keys.length; ++i) {
                if (typeof object.Card[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Card: object expected");
                message.Card[keys[i]] = $excelRoot.Card.fromObject(object.Card[keys[i]]);
            }
        }
        if (object.CardScoreType) {
            if (typeof object.CardScoreType !== "object")
                throw TypeError(".ConfigMng.CardScoreType: object expected");
            message.CardScoreType = {};
            for (var keys = Object.keys(object.CardScoreType), i = 0; i < keys.length; ++i) {
                if (typeof object.CardScoreType[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.CardScoreType: object expected");
                message.CardScoreType[keys[i]] = $excelRoot.CardScoreType.fromObject(object.CardScoreType[keys[i]]);
            }
        }
        if (object.EffectType) {
            if (typeof object.EffectType !== "object")
                throw TypeError(".ConfigMng.EffectType: object expected");
            message.EffectType = {};
            for (var keys = Object.keys(object.EffectType), i = 0; i < keys.length; ++i) {
                if (typeof object.EffectType[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.EffectType: object expected");
                message.EffectType[keys[i]] = $excelRoot.EffectType.fromObject(object.EffectType[keys[i]]);
            }
        }
        if (object.Item) {
            if (typeof object.Item !== "object")
                throw TypeError(".ConfigMng.Item: object expected");
            message.Item = {};
            for (var keys = Object.keys(object.Item), i = 0; i < keys.length; ++i) {
                if (typeof object.Item[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Item: object expected");
                message.Item[keys[i]] = $excelRoot.Item.fromObject(object.Item[keys[i]]);
            }
        }
        if (object.ItemConsume) {
            if (typeof object.ItemConsume !== "object")
                throw TypeError(".ConfigMng.ItemConsume: object expected");
            message.ItemConsume = {};
            for (var keys = Object.keys(object.ItemConsume), i = 0; i < keys.length; ++i) {
                if (typeof object.ItemConsume[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.ItemConsume: object expected");
                message.ItemConsume[keys[i]] = $excelRoot.ItemConsume.fromObject(object.ItemConsume[keys[i]]);
            }
        }
        if (object.ItemDecorate) {
            if (typeof object.ItemDecorate !== "object")
                throw TypeError(".ConfigMng.ItemDecorate: object expected");
            message.ItemDecorate = {};
            for (var keys = Object.keys(object.ItemDecorate), i = 0; i < keys.length; ++i) {
                if (typeof object.ItemDecorate[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.ItemDecorate: object expected");
                message.ItemDecorate[keys[i]] = $excelRoot.ItemDecorate.fromObject(object.ItemDecorate[keys[i]]);
            }
        }
        if (object.ItemWeapon) {
            if (typeof object.ItemWeapon !== "object")
                throw TypeError(".ConfigMng.ItemWeapon: object expected");
            message.ItemWeapon = {};
            for (var keys = Object.keys(object.ItemWeapon), i = 0; i < keys.length; ++i) {
                if (typeof object.ItemWeapon[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.ItemWeapon: object expected");
                message.ItemWeapon[keys[i]] = $excelRoot.ItemWeapon.fromObject(object.ItemWeapon[keys[i]]);
            }
        }
        if (object.Level) {
            if (typeof object.Level !== "object")
                throw TypeError(".ConfigMng.Level: object expected");
            message.Level = {};
            for (var keys = Object.keys(object.Level), i = 0; i < keys.length; ++i) {
                if (typeof object.Level[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Level: object expected");
                message.Level[keys[i]] = $excelRoot.Level.fromObject(object.Level[keys[i]]);
            }
        }
        if (object.Loader) {
            if (typeof object.Loader !== "object")
                throw TypeError(".ConfigMng.Loader: object expected");
            message.Loader = {};
            for (var keys = Object.keys(object.Loader), i = 0; i < keys.length; ++i) {
                if (typeof object.Loader[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Loader: object expected");
                message.Loader[keys[i]] = $excelRoot.Loader.fromObject(object.Loader[keys[i]]);
            }
        }
        if (object.Menu) {
            if (typeof object.Menu !== "object")
                throw TypeError(".ConfigMng.Menu: object expected");
            message.Menu = {};
            for (var keys = Object.keys(object.Menu), i = 0; i < keys.length; ++i) {
                if (typeof object.Menu[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Menu: object expected");
                message.Menu[keys[i]] = $excelRoot.Menu.fromObject(object.Menu[keys[i]]);
            }
        }
        if (object.Msg) {
            if (typeof object.Msg !== "object")
                throw TypeError(".ConfigMng.Msg: object expected");
            message.Msg = {};
            for (var keys = Object.keys(object.Msg), i = 0; i < keys.length; ++i) {
                if (typeof object.Msg[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Msg: object expected");
                message.Msg[keys[i]] = $excelRoot.Msg.fromObject(object.Msg[keys[i]]);
            }
        }
        if (object.Property) {
            if (typeof object.Property !== "object")
                throw TypeError(".ConfigMng.Property: object expected");
            message.Property = {};
            for (var keys = Object.keys(object.Property), i = 0; i < keys.length; ++i) {
                if (typeof object.Property[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Property: object expected");
                message.Property[keys[i]] = $excelRoot.Property.fromObject(object.Property[keys[i]]);
            }
        }
        if (object.TriggerType) {
            if (typeof object.TriggerType !== "object")
                throw TypeError(".ConfigMng.TriggerType: object expected");
            message.TriggerType = {};
            for (var keys = Object.keys(object.TriggerType), i = 0; i < keys.length; ++i) {
                if (typeof object.TriggerType[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.TriggerType: object expected");
                message.TriggerType[keys[i]] = $excelRoot.TriggerType.fromObject(object.TriggerType[keys[i]]);
            }
        }
        if (object.Unlock) {
            if (typeof object.Unlock !== "object")
                throw TypeError(".ConfigMng.Unlock: object expected");
            message.Unlock = {};
            for (var keys = Object.keys(object.Unlock), i = 0; i < keys.length; ++i) {
                if (typeof object.Unlock[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Unlock: object expected");
                message.Unlock[keys[i]] = $excelRoot.Unlock.fromObject(object.Unlock[keys[i]]);
            }
        }
        return message;
    };
    ConfigMng.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults) {
            object.Card = {};
            object.CardScoreType = {};
            object.EffectType = {};
            object.Item = {};
            object.ItemConsume = {};
            object.ItemDecorate = {};
            object.ItemWeapon = {};
            object.Level = {};
            object.Loader = {};
            object.Menu = {};
            object.Msg = {};
            object.Property = {};
            object.TriggerType = {};
            object.Unlock = {};
        }
        if (options.defaults)
            object.Global = null;
        if (message.Global != null && message.hasOwnProperty("Global"))
            object.Global = $excelRoot.Global.toObject(message.Global, options);
        var keys2;
        if (message.Card && (keys2 = Object.keys(message.Card)).length) {
            object.Card = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Card[keys2[j]] = $excelRoot.Card.toObject(message.Card[keys2[j]], options);
        }
        if (message.CardScoreType && (keys2 = Object.keys(message.CardScoreType)).length) {
            object.CardScoreType = {};
            for (var j = 0; j < keys2.length; ++j)
                object.CardScoreType[keys2[j]] = $excelRoot.CardScoreType.toObject(message.CardScoreType[keys2[j]], options);
        }
        if (message.EffectType && (keys2 = Object.keys(message.EffectType)).length) {
            object.EffectType = {};
            for (var j = 0; j < keys2.length; ++j)
                object.EffectType[keys2[j]] = $excelRoot.EffectType.toObject(message.EffectType[keys2[j]], options);
        }
        if (message.Item && (keys2 = Object.keys(message.Item)).length) {
            object.Item = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Item[keys2[j]] = $excelRoot.Item.toObject(message.Item[keys2[j]], options);
        }
        if (message.ItemConsume && (keys2 = Object.keys(message.ItemConsume)).length) {
            object.ItemConsume = {};
            for (var j = 0; j < keys2.length; ++j)
                object.ItemConsume[keys2[j]] = $excelRoot.ItemConsume.toObject(message.ItemConsume[keys2[j]], options);
        }
        if (message.ItemDecorate && (keys2 = Object.keys(message.ItemDecorate)).length) {
            object.ItemDecorate = {};
            for (var j = 0; j < keys2.length; ++j)
                object.ItemDecorate[keys2[j]] = $excelRoot.ItemDecorate.toObject(message.ItemDecorate[keys2[j]], options);
        }
        if (message.ItemWeapon && (keys2 = Object.keys(message.ItemWeapon)).length) {
            object.ItemWeapon = {};
            for (var j = 0; j < keys2.length; ++j)
                object.ItemWeapon[keys2[j]] = $excelRoot.ItemWeapon.toObject(message.ItemWeapon[keys2[j]], options);
        }
        if (message.Level && (keys2 = Object.keys(message.Level)).length) {
            object.Level = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Level[keys2[j]] = $excelRoot.Level.toObject(message.Level[keys2[j]], options);
        }
        if (message.Loader && (keys2 = Object.keys(message.Loader)).length) {
            object.Loader = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Loader[keys2[j]] = $excelRoot.Loader.toObject(message.Loader[keys2[j]], options);
        }
        if (message.Menu && (keys2 = Object.keys(message.Menu)).length) {
            object.Menu = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Menu[keys2[j]] = $excelRoot.Menu.toObject(message.Menu[keys2[j]], options);
        }
        if (message.Msg && (keys2 = Object.keys(message.Msg)).length) {
            object.Msg = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Msg[keys2[j]] = $excelRoot.Msg.toObject(message.Msg[keys2[j]], options);
        }
        if (message.Property && (keys2 = Object.keys(message.Property)).length) {
            object.Property = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Property[keys2[j]] = $excelRoot.Property.toObject(message.Property[keys2[j]], options);
        }
        if (message.TriggerType && (keys2 = Object.keys(message.TriggerType)).length) {
            object.TriggerType = {};
            for (var j = 0; j < keys2.length; ++j)
                object.TriggerType[keys2[j]] = $excelRoot.TriggerType.toObject(message.TriggerType[keys2[j]], options);
        }
        if (message.Unlock && (keys2 = Object.keys(message.Unlock)).length) {
            object.Unlock = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Unlock[keys2[j]] = $excelRoot.Unlock.toObject(message.Unlock[keys2[j]], options);
        }
        return object;
    };
    ConfigMng.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return ConfigMng;
})();
module.exports = $excelRoot;
window.excelconfig = $excelRoot;
	
var excelconfigSources = {};
window.excelconfigSources = excelconfigSources;
for(var key in excelconfig)
{
    excelconfigSources[key] = excelconfig[key];
}
