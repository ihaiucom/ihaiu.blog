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
        this.Loader = {};
        this.Menu = {};
        this.Msg = {};
        this.Unlock = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    ConfigMng.prototype.Global = null;
    ConfigMng.prototype.Card = $util.emptyObject;
    ConfigMng.prototype.CardScoreType = $util.emptyObject;
    ConfigMng.prototype.Loader = $util.emptyObject;
    ConfigMng.prototype.Menu = $util.emptyObject;
    ConfigMng.prototype.Msg = $util.emptyObject;
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
        if (message.Loader != null && message.hasOwnProperty("Loader"))
            for (var keys = Object.keys(message.Loader), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Loader.encode(message.Loader[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Menu != null && message.hasOwnProperty("Menu"))
            for (var keys = Object.keys(message.Menu), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Menu.encode(message.Menu[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Msg != null && message.hasOwnProperty("Msg"))
            for (var keys = Object.keys(message.Msg), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Msg.encode(message.Msg[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Unlock != null && message.hasOwnProperty("Unlock"))
            for (var keys = Object.keys(message.Unlock), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
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
                if (message.Loader === $util.emptyObject)
                    message.Loader = {};
                key = reader.int32();
                reader.pos++;
                message.Loader[key] = $excelRoot.Loader.decode(reader, reader.uint32());
                break;
            case 5:
                reader.skip().pos++;
                if (message.Menu === $util.emptyObject)
                    message.Menu = {};
                key = reader.int32();
                reader.pos++;
                message.Menu[key] = $excelRoot.Menu.decode(reader, reader.uint32());
                break;
            case 6:
                reader.skip().pos++;
                if (message.Msg === $util.emptyObject)
                    message.Msg = {};
                key = reader.int32();
                reader.pos++;
                message.Msg[key] = $excelRoot.Msg.decode(reader, reader.uint32());
                break;
            case 7:
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
            object.Loader = {};
            object.Menu = {};
            object.Msg = {};
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
