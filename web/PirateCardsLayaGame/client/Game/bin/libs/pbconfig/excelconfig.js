"use strict";
var $protobuf = protobuf;
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $excelRoot = $protobuf.roots["excelconfig"] || ($protobuf.roots["excelconfig"] = {});
var excelconfig = $excelRoot;
var module = {}
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
$excelRoot.DTRewardRandom = (function() {
    function DTRewardRandom(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTRewardRandom.prototype.Weight = 0;
    DTRewardRandom.prototype.ItemType = 0;
    DTRewardRandom.prototype.ItemId = 0;
    DTRewardRandom.prototype.ItemNum = 0;
    DTRewardRandom.create = function create(properties) {
        return new DTRewardRandom(properties);
    };
    DTRewardRandom.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Weight != null && message.hasOwnProperty("Weight"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Weight);
        if (message.ItemType != null && message.hasOwnProperty("ItemType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ItemType);
        if (message.ItemId != null && message.hasOwnProperty("ItemId"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ItemId);
        if (message.ItemNum != null && message.hasOwnProperty("ItemNum"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ItemNum);
        return writer;
    };
    DTRewardRandom.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTRewardRandom.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTRewardRandom();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Weight = reader.int32();
                break;
            case 2:
                message.ItemType = reader.int32();
                break;
            case 3:
                message.ItemId = reader.int32();
                break;
            case 4:
                message.ItemNum = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTRewardRandom.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTRewardRandom.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Weight != null && message.hasOwnProperty("Weight"))
            if (!$util.isInteger(message.Weight))
                return "Weight: integer expected";
        if (message.ItemType != null && message.hasOwnProperty("ItemType"))
            if (!$util.isInteger(message.ItemType))
                return "ItemType: integer expected";
        if (message.ItemId != null && message.hasOwnProperty("ItemId"))
            if (!$util.isInteger(message.ItemId))
                return "ItemId: integer expected";
        if (message.ItemNum != null && message.hasOwnProperty("ItemNum"))
            if (!$util.isInteger(message.ItemNum))
                return "ItemNum: integer expected";
        return null;
    };
    DTRewardRandom.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTRewardRandom)
            return object;
        var message = new $excelRoot.DTRewardRandom();
        if (object.Weight != null)
            message.Weight = object.Weight | 0;
        if (object.ItemType != null)
            message.ItemType = object.ItemType | 0;
        if (object.ItemId != null)
            message.ItemId = object.ItemId | 0;
        if (object.ItemNum != null)
            message.ItemNum = object.ItemNum | 0;
        return message;
    };
    DTRewardRandom.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Weight = 0;
            object.ItemType = 0;
            object.ItemId = 0;
            object.ItemNum = 0;
        }
        if (message.Weight != null && message.hasOwnProperty("Weight"))
            object.Weight = message.Weight;
        if (message.ItemType != null && message.hasOwnProperty("ItemType"))
            object.ItemType = message.ItemType;
        if (message.ItemId != null && message.hasOwnProperty("ItemId"))
            object.ItemId = message.ItemId;
        if (message.ItemNum != null && message.hasOwnProperty("ItemNum"))
            object.ItemNum = message.ItemNum;
        return object;
    };
    DTRewardRandom.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTRewardRandom;
})();
$excelRoot.DTStoryNum = (function() {
    function DTStoryNum(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTStoryNum.prototype.Star = 0;
    DTStoryNum.prototype.Num = 0;
    DTStoryNum.create = function create(properties) {
        return new DTStoryNum(properties);
    };
    DTStoryNum.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Star != null && message.hasOwnProperty("Star"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Star);
        if (message.Num != null && message.hasOwnProperty("Num"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Num);
        return writer;
    };
    DTStoryNum.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTStoryNum.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTStoryNum();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Star = reader.int32();
                break;
            case 2:
                message.Num = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTStoryNum.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTStoryNum.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Star != null && message.hasOwnProperty("Star"))
            if (!$util.isInteger(message.Star))
                return "Star: integer expected";
        if (message.Num != null && message.hasOwnProperty("Num"))
            if (!$util.isInteger(message.Num))
                return "Num: integer expected";
        return null;
    };
    DTStoryNum.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTStoryNum)
            return object;
        var message = new $excelRoot.DTStoryNum();
        if (object.Star != null)
            message.Star = object.Star | 0;
        if (object.Num != null)
            message.Num = object.Num | 0;
        return message;
    };
    DTStoryNum.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Star = 0;
            object.Num = 0;
        }
        if (message.Star != null && message.hasOwnProperty("Star"))
            object.Star = message.Star;
        if (message.Num != null && message.hasOwnProperty("Num"))
            object.Num = message.Num;
        return object;
    };
    DTStoryNum.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTStoryNum;
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
$excelRoot.DTActorSkill = (function() {
    function DTActorSkill(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTActorSkill.prototype.GroupId = 0;
    DTActorSkill.prototype.Lv = 0;
    DTActorSkill.create = function create(properties) {
        return new DTActorSkill(properties);
    };
    DTActorSkill.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.GroupId != null && message.hasOwnProperty("GroupId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GroupId);
        if (message.Lv != null && message.hasOwnProperty("Lv"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Lv);
        return writer;
    };
    DTActorSkill.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTActorSkill.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTActorSkill();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.GroupId = reader.int32();
                break;
            case 2:
                message.Lv = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTActorSkill.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTActorSkill.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.GroupId != null && message.hasOwnProperty("GroupId"))
            if (!$util.isInteger(message.GroupId))
                return "GroupId: integer expected";
        if (message.Lv != null && message.hasOwnProperty("Lv"))
            if (!$util.isInteger(message.Lv))
                return "Lv: integer expected";
        return null;
    };
    DTActorSkill.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTActorSkill)
            return object;
        var message = new $excelRoot.DTActorSkill();
        if (object.GroupId != null)
            message.GroupId = object.GroupId | 0;
        if (object.Lv != null)
            message.Lv = object.Lv | 0;
        return message;
    };
    DTActorSkill.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.GroupId = 0;
            object.Lv = 0;
        }
        if (message.GroupId != null && message.hasOwnProperty("GroupId"))
            object.GroupId = message.GroupId;
        if (message.Lv != null && message.hasOwnProperty("Lv"))
            object.Lv = message.Lv;
        return object;
    };
    DTActorSkill.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTActorSkill;
})();
$excelRoot.DTActorStory = (function() {
    function DTActorStory(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTActorStory.prototype.Story = 0;
    DTActorStory.prototype.Lv = 0;
    DTActorStory.prototype.Property = 0;
    DTActorStory.create = function create(properties) {
        return new DTActorStory(properties);
    };
    DTActorStory.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Story != null && message.hasOwnProperty("Story"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Story);
        if (message.Lv != null && message.hasOwnProperty("Lv"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Lv);
        if (message.Property != null && message.hasOwnProperty("Property"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Property);
        return writer;
    };
    DTActorStory.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTActorStory.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTActorStory();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Story = reader.int32();
                break;
            case 2:
                message.Lv = reader.int32();
                break;
            case 3:
                message.Property = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTActorStory.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTActorStory.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Story != null && message.hasOwnProperty("Story"))
            if (!$util.isInteger(message.Story))
                return "Story: integer expected";
        if (message.Lv != null && message.hasOwnProperty("Lv"))
            if (!$util.isInteger(message.Lv))
                return "Lv: integer expected";
        if (message.Property != null && message.hasOwnProperty("Property"))
            if (!$util.isInteger(message.Property))
                return "Property: integer expected";
        return null;
    };
    DTActorStory.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTActorStory)
            return object;
        var message = new $excelRoot.DTActorStory();
        if (object.Story != null)
            message.Story = object.Story | 0;
        if (object.Lv != null)
            message.Lv = object.Lv | 0;
        if (object.Property != null)
            message.Property = object.Property | 0;
        return message;
    };
    DTActorStory.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Story = 0;
            object.Lv = 0;
            object.Property = 0;
        }
        if (message.Story != null && message.hasOwnProperty("Story"))
            object.Story = message.Story;
        if (message.Lv != null && message.hasOwnProperty("Lv"))
            object.Lv = message.Lv;
        if (message.Property != null && message.hasOwnProperty("Property"))
            object.Property = message.Property;
        return object;
    };
    DTActorStory.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTActorStory;
})();
$excelRoot.DTActorFeature = (function() {
    function DTActorFeature(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTActorFeature.prototype.Feature = 0;
    DTActorFeature.prototype.Lv = 0;
    DTActorFeature.prototype.Property = 0;
    DTActorFeature.create = function create(properties) {
        return new DTActorFeature(properties);
    };
    DTActorFeature.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Feature != null && message.hasOwnProperty("Feature"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Feature);
        if (message.Lv != null && message.hasOwnProperty("Lv"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Lv);
        if (message.Property != null && message.hasOwnProperty("Property"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Property);
        return writer;
    };
    DTActorFeature.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTActorFeature.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTActorFeature();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Feature = reader.int32();
                break;
            case 2:
                message.Lv = reader.int32();
                break;
            case 3:
                message.Property = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTActorFeature.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTActorFeature.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Feature != null && message.hasOwnProperty("Feature"))
            if (!$util.isInteger(message.Feature))
                return "Feature: integer expected";
        if (message.Lv != null && message.hasOwnProperty("Lv"))
            if (!$util.isInteger(message.Lv))
                return "Lv: integer expected";
        if (message.Property != null && message.hasOwnProperty("Property"))
            if (!$util.isInteger(message.Property))
                return "Property: integer expected";
        return null;
    };
    DTActorFeature.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTActorFeature)
            return object;
        var message = new $excelRoot.DTActorFeature();
        if (object.Feature != null)
            message.Feature = object.Feature | 0;
        if (object.Lv != null)
            message.Lv = object.Lv | 0;
        if (object.Property != null)
            message.Property = object.Property | 0;
        return message;
    };
    DTActorFeature.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Feature = 0;
            object.Lv = 0;
            object.Property = 0;
        }
        if (message.Feature != null && message.hasOwnProperty("Feature"))
            object.Feature = message.Feature;
        if (message.Lv != null && message.hasOwnProperty("Lv"))
            object.Lv = message.Lv;
        if (message.Property != null && message.hasOwnProperty("Property"))
            object.Property = message.Property;
        return object;
    };
    DTActorFeature.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTActorFeature;
})();
$excelRoot.DTActorCharacter = (function() {
    function DTActorCharacter(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTActorCharacter.prototype.Character = 0;
    DTActorCharacter.prototype.Lv = 0;
    DTActorCharacter.prototype.Property = 0;
    DTActorCharacter.create = function create(properties) {
        return new DTActorCharacter(properties);
    };
    DTActorCharacter.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Character != null && message.hasOwnProperty("Character"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Character);
        if (message.Lv != null && message.hasOwnProperty("Lv"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Lv);
        if (message.Property != null && message.hasOwnProperty("Property"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Property);
        return writer;
    };
    DTActorCharacter.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTActorCharacter.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTActorCharacter();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Character = reader.int32();
                break;
            case 2:
                message.Lv = reader.int32();
                break;
            case 3:
                message.Property = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTActorCharacter.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTActorCharacter.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Character != null && message.hasOwnProperty("Character"))
            if (!$util.isInteger(message.Character))
                return "Character: integer expected";
        if (message.Lv != null && message.hasOwnProperty("Lv"))
            if (!$util.isInteger(message.Lv))
                return "Lv: integer expected";
        if (message.Property != null && message.hasOwnProperty("Property"))
            if (!$util.isInteger(message.Property))
                return "Property: integer expected";
        return null;
    };
    DTActorCharacter.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTActorCharacter)
            return object;
        var message = new $excelRoot.DTActorCharacter();
        if (object.Character != null)
            message.Character = object.Character | 0;
        if (object.Lv != null)
            message.Lv = object.Lv | 0;
        if (object.Property != null)
            message.Property = object.Property | 0;
        return message;
    };
    DTActorCharacter.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Character = 0;
            object.Lv = 0;
            object.Property = 0;
        }
        if (message.Character != null && message.hasOwnProperty("Character"))
            object.Character = message.Character;
        if (message.Lv != null && message.hasOwnProperty("Lv"))
            object.Lv = message.Lv;
        if (message.Property != null && message.hasOwnProperty("Property"))
            object.Property = message.Property;
        return object;
    };
    DTActorCharacter.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTActorCharacter;
})();
$excelRoot.DTRandomInterval = (function() {
    function DTRandomInterval(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTRandomInterval.prototype.Num1 = 0;
    DTRandomInterval.prototype.Num2 = 0;
    DTRandomInterval.create = function create(properties) {
        return new DTRandomInterval(properties);
    };
    DTRandomInterval.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Num1 != null && message.hasOwnProperty("Num1"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Num1);
        if (message.Num2 != null && message.hasOwnProperty("Num2"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Num2);
        return writer;
    };
    DTRandomInterval.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTRandomInterval.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTRandomInterval();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Num1 = reader.int32();
                break;
            case 2:
                message.Num2 = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTRandomInterval.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTRandomInterval.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Num1 != null && message.hasOwnProperty("Num1"))
            if (!$util.isInteger(message.Num1))
                return "Num1: integer expected";
        if (message.Num2 != null && message.hasOwnProperty("Num2"))
            if (!$util.isInteger(message.Num2))
                return "Num2: integer expected";
        return null;
    };
    DTRandomInterval.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTRandomInterval)
            return object;
        var message = new $excelRoot.DTRandomInterval();
        if (object.Num1 != null)
            message.Num1 = object.Num1 | 0;
        if (object.Num2 != null)
            message.Num2 = object.Num2 | 0;
        return message;
    };
    DTRandomInterval.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Num1 = 0;
            object.Num2 = 0;
        }
        if (message.Num1 != null && message.hasOwnProperty("Num1"))
            object.Num1 = message.Num1;
        if (message.Num2 != null && message.hasOwnProperty("Num2"))
            object.Num2 = message.Num2;
        return object;
    };
    DTRandomInterval.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTRandomInterval;
})();
$excelRoot.DTShootType = (function() {
    function DTShootType(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTShootType.prototype.Shoottypeid = 0;
    DTShootType.prototype.Rate = 0;
    DTShootType.create = function create(properties) {
        return new DTShootType(properties);
    };
    DTShootType.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Shoottypeid != null && message.hasOwnProperty("Shoottypeid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Shoottypeid);
        if (message.Rate != null && message.hasOwnProperty("Rate"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Rate);
        return writer;
    };
    DTShootType.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTShootType.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTShootType();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Shoottypeid = reader.int32();
                break;
            case 2:
                message.Rate = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTShootType.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTShootType.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Shoottypeid != null && message.hasOwnProperty("Shoottypeid"))
            if (!$util.isInteger(message.Shoottypeid))
                return "Shoottypeid: integer expected";
        if (message.Rate != null && message.hasOwnProperty("Rate"))
            if (!$util.isInteger(message.Rate))
                return "Rate: integer expected";
        return null;
    };
    DTShootType.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTShootType)
            return object;
        var message = new $excelRoot.DTShootType();
        if (object.Shoottypeid != null)
            message.Shoottypeid = object.Shoottypeid | 0;
        if (object.Rate != null)
            message.Rate = object.Rate | 0;
        return message;
    };
    DTShootType.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Shoottypeid = 0;
            object.Rate = 0;
        }
        if (message.Shoottypeid != null && message.hasOwnProperty("Shoottypeid"))
            object.Shoottypeid = message.Shoottypeid;
        if (message.Rate != null && message.hasOwnProperty("Rate"))
            object.Rate = message.Rate;
        return object;
    };
    DTShootType.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTShootType;
})();
$excelRoot.DTStoryEffect = (function() {
    function DTStoryEffect(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTStoryEffect.prototype.Storyeffect = 0;
    DTStoryEffect.prototype.Rate = 0;
    DTStoryEffect.create = function create(properties) {
        return new DTStoryEffect(properties);
    };
    DTStoryEffect.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Storyeffect != null && message.hasOwnProperty("Storyeffect"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Storyeffect);
        if (message.Rate != null && message.hasOwnProperty("Rate"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Rate);
        return writer;
    };
    DTStoryEffect.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTStoryEffect.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTStoryEffect();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Storyeffect = reader.int32();
                break;
            case 2:
                message.Rate = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTStoryEffect.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTStoryEffect.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Storyeffect != null && message.hasOwnProperty("Storyeffect"))
            if (!$util.isInteger(message.Storyeffect))
                return "Storyeffect: integer expected";
        if (message.Rate != null && message.hasOwnProperty("Rate"))
            if (!$util.isInteger(message.Rate))
                return "Rate: integer expected";
        return null;
    };
    DTStoryEffect.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTStoryEffect)
            return object;
        var message = new $excelRoot.DTStoryEffect();
        if (object.Storyeffect != null)
            message.Storyeffect = object.Storyeffect | 0;
        if (object.Rate != null)
            message.Rate = object.Rate | 0;
        return message;
    };
    DTStoryEffect.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Storyeffect = 0;
            object.Rate = 0;
        }
        if (message.Storyeffect != null && message.hasOwnProperty("Storyeffect"))
            object.Storyeffect = message.Storyeffect;
        if (message.Rate != null && message.hasOwnProperty("Rate"))
            object.Rate = message.Rate;
        return object;
    };
    DTStoryEffect.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTStoryEffect;
})();
$excelRoot.DTBuildingReq = (function() {
    function DTBuildingReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTBuildingReq.prototype.Type = 0;
    DTBuildingReq.prototype.Level = 0;
    DTBuildingReq.create = function create(properties) {
        return new DTBuildingReq(properties);
    };
    DTBuildingReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Type != null && message.hasOwnProperty("Type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
        if (message.Level != null && message.hasOwnProperty("Level"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Level);
        return writer;
    };
    DTBuildingReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTBuildingReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTBuildingReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Type = reader.int32();
                break;
            case 2:
                message.Level = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTBuildingReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTBuildingReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Type != null && message.hasOwnProperty("Type"))
            if (!$util.isInteger(message.Type))
                return "Type: integer expected";
        if (message.Level != null && message.hasOwnProperty("Level"))
            if (!$util.isInteger(message.Level))
                return "Level: integer expected";
        return null;
    };
    DTBuildingReq.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTBuildingReq)
            return object;
        var message = new $excelRoot.DTBuildingReq();
        if (object.Type != null)
            message.Type = object.Type | 0;
        if (object.Level != null)
            message.Level = object.Level | 0;
        return message;
    };
    DTBuildingReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Type = 0;
            object.Level = 0;
        }
        if (message.Type != null && message.hasOwnProperty("Type"))
            object.Type = message.Type;
        if (message.Level != null && message.hasOwnProperty("Level"))
            object.Level = message.Level;
        return object;
    };
    DTBuildingReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTBuildingReq;
})();
$excelRoot.DTValue2 = (function() {
    function DTValue2(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTValue2.prototype.V1 = 0;
    DTValue2.prototype.V2 = 0;
    DTValue2.create = function create(properties) {
        return new DTValue2(properties);
    };
    DTValue2.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.V1 != null && message.hasOwnProperty("V1"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.V1);
        if (message.V2 != null && message.hasOwnProperty("V2"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.V2);
        return writer;
    };
    DTValue2.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTValue2.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTValue2();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.V1 = reader.int32();
                break;
            case 2:
                message.V2 = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTValue2.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTValue2.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.V1 != null && message.hasOwnProperty("V1"))
            if (!$util.isInteger(message.V1))
                return "V1: integer expected";
        if (message.V2 != null && message.hasOwnProperty("V2"))
            if (!$util.isInteger(message.V2))
                return "V2: integer expected";
        return null;
    };
    DTValue2.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTValue2)
            return object;
        var message = new $excelRoot.DTValue2();
        if (object.V1 != null)
            message.V1 = object.V1 | 0;
        if (object.V2 != null)
            message.V2 = object.V2 | 0;
        return message;
    };
    DTValue2.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.V1 = 0;
            object.V2 = 0;
        }
        if (message.V1 != null && message.hasOwnProperty("V1"))
            object.V1 = message.V1;
        if (message.V2 != null && message.hasOwnProperty("V2"))
            object.V2 = message.V2;
        return object;
    };
    DTValue2.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTValue2;
})();
$excelRoot.DTValue3 = (function() {
    function DTValue3(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTValue3.prototype.V1 = 0;
    DTValue3.prototype.V2 = 0;
    DTValue3.prototype.V3 = 0;
    DTValue3.create = function create(properties) {
        return new DTValue3(properties);
    };
    DTValue3.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.V1 != null && message.hasOwnProperty("V1"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.V1);
        if (message.V2 != null && message.hasOwnProperty("V2"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.V2);
        if (message.V3 != null && message.hasOwnProperty("V3"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.V3);
        return writer;
    };
    DTValue3.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTValue3.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTValue3();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.V1 = reader.int32();
                break;
            case 2:
                message.V2 = reader.int32();
                break;
            case 3:
                message.V3 = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTValue3.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTValue3.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.V1 != null && message.hasOwnProperty("V1"))
            if (!$util.isInteger(message.V1))
                return "V1: integer expected";
        if (message.V2 != null && message.hasOwnProperty("V2"))
            if (!$util.isInteger(message.V2))
                return "V2: integer expected";
        if (message.V3 != null && message.hasOwnProperty("V3"))
            if (!$util.isInteger(message.V3))
                return "V3: integer expected";
        return null;
    };
    DTValue3.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTValue3)
            return object;
        var message = new $excelRoot.DTValue3();
        if (object.V1 != null)
            message.V1 = object.V1 | 0;
        if (object.V2 != null)
            message.V2 = object.V2 | 0;
        if (object.V3 != null)
            message.V3 = object.V3 | 0;
        return message;
    };
    DTValue3.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.V1 = 0;
            object.V2 = 0;
            object.V3 = 0;
        }
        if (message.V1 != null && message.hasOwnProperty("V1"))
            object.V1 = message.V1;
        if (message.V2 != null && message.hasOwnProperty("V2"))
            object.V2 = message.V2;
        if (message.V3 != null && message.hasOwnProperty("V3"))
            object.V3 = message.V3;
        return object;
    };
    DTValue3.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTValue3;
})();
$excelRoot.DTDrop = (function() {
    function DTDrop(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTDrop.prototype.X = 0;
    DTDrop.prototype.Y = 0;
    DTDrop.create = function create(properties) {
        return new DTDrop(properties);
    };
    DTDrop.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.X != null && message.hasOwnProperty("X"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.X);
        if (message.Y != null && message.hasOwnProperty("Y"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.Y);
        return writer;
    };
    DTDrop.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTDrop.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTDrop();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.X = reader.int32();
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
    DTDrop.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTDrop.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.X != null && message.hasOwnProperty("X"))
            if (!$util.isInteger(message.X))
                return "X: integer expected";
        if (message.Y != null && message.hasOwnProperty("Y"))
            if (typeof message.Y !== "number")
                return "Y: number expected";
        return null;
    };
    DTDrop.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTDrop)
            return object;
        var message = new $excelRoot.DTDrop();
        if (object.X != null)
            message.X = object.X | 0;
        if (object.Y != null)
            message.Y = Number(object.Y);
        return message;
    };
    DTDrop.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.X = 0;
            object.Y = 0;
        }
        if (message.X != null && message.hasOwnProperty("X"))
            object.X = message.X;
        if (message.Y != null && message.hasOwnProperty("Y"))
            object.Y = options.json && !isFinite(message.Y) ? String(message.Y) : message.Y;
        return object;
    };
    DTDrop.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTDrop;
})();
$excelRoot.DTPerformActoin = (function() {
    function DTPerformActoin(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTPerformActoin.prototype.V1 = 0;
    DTPerformActoin.prototype.V2 = 0;
    DTPerformActoin.prototype.V3 = 0;
    DTPerformActoin.create = function create(properties) {
        return new DTPerformActoin(properties);
    };
    DTPerformActoin.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.V1 != null && message.hasOwnProperty("V1"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.V1);
        if (message.V2 != null && message.hasOwnProperty("V2"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.V2);
        if (message.V3 != null && message.hasOwnProperty("V3"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.V3);
        return writer;
    };
    DTPerformActoin.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTPerformActoin.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTPerformActoin();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.V1 = reader.int32();
                break;
            case 2:
                message.V2 = reader.int32();
                break;
            case 3:
                message.V3 = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTPerformActoin.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTPerformActoin.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.V1 != null && message.hasOwnProperty("V1"))
            if (!$util.isInteger(message.V1))
                return "V1: integer expected";
        if (message.V2 != null && message.hasOwnProperty("V2"))
            if (!$util.isInteger(message.V2))
                return "V2: integer expected";
        if (message.V3 != null && message.hasOwnProperty("V3"))
            if (!$util.isInteger(message.V3))
                return "V3: integer expected";
        return null;
    };
    DTPerformActoin.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTPerformActoin)
            return object;
        var message = new $excelRoot.DTPerformActoin();
        if (object.V1 != null)
            message.V1 = object.V1 | 0;
        if (object.V2 != null)
            message.V2 = object.V2 | 0;
        if (object.V3 != null)
            message.V3 = object.V3 | 0;
        return message;
    };
    DTPerformActoin.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.V1 = 0;
            object.V2 = 0;
            object.V3 = 0;
        }
        if (message.V1 != null && message.hasOwnProperty("V1"))
            object.V1 = message.V1;
        if (message.V2 != null && message.hasOwnProperty("V2"))
            object.V2 = message.V2;
        if (message.V3 != null && message.hasOwnProperty("V3"))
            object.V3 = message.V3;
        return object;
    };
    DTPerformActoin.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTPerformActoin;
})();
$excelRoot.DTPerformSpeak = (function() {
    function DTPerformSpeak(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTPerformSpeak.prototype.V1 = 0;
    DTPerformSpeak.prototype.V2 = 0;
    DTPerformSpeak.prototype.V3 = 0;
    DTPerformSpeak.create = function create(properties) {
        return new DTPerformSpeak(properties);
    };
    DTPerformSpeak.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.V1 != null && message.hasOwnProperty("V1"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.V1);
        if (message.V2 != null && message.hasOwnProperty("V2"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.V2);
        if (message.V3 != null && message.hasOwnProperty("V3"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.V3);
        return writer;
    };
    DTPerformSpeak.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTPerformSpeak.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTPerformSpeak();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.V1 = reader.int32();
                break;
            case 2:
                message.V2 = reader.int32();
                break;
            case 3:
                message.V3 = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTPerformSpeak.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTPerformSpeak.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.V1 != null && message.hasOwnProperty("V1"))
            if (!$util.isInteger(message.V1))
                return "V1: integer expected";
        if (message.V2 != null && message.hasOwnProperty("V2"))
            if (!$util.isInteger(message.V2))
                return "V2: integer expected";
        if (message.V3 != null && message.hasOwnProperty("V3"))
            if (!$util.isInteger(message.V3))
                return "V3: integer expected";
        return null;
    };
    DTPerformSpeak.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTPerformSpeak)
            return object;
        var message = new $excelRoot.DTPerformSpeak();
        if (object.V1 != null)
            message.V1 = object.V1 | 0;
        if (object.V2 != null)
            message.V2 = object.V2 | 0;
        if (object.V3 != null)
            message.V3 = object.V3 | 0;
        return message;
    };
    DTPerformSpeak.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.V1 = 0;
            object.V2 = 0;
            object.V3 = 0;
        }
        if (message.V1 != null && message.hasOwnProperty("V1"))
            object.V1 = message.V1;
        if (message.V2 != null && message.hasOwnProperty("V2"))
            object.V2 = message.V2;
        if (message.V3 != null && message.hasOwnProperty("V3"))
            object.V3 = message.V3;
        return object;
    };
    DTPerformSpeak.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTPerformSpeak;
})();
$excelRoot.DTParts = (function() {
    function DTParts(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTParts.prototype.V1 = "";
    DTParts.prototype.V2 = "";
    DTParts.create = function create(properties) {
        return new DTParts(properties);
    };
    DTParts.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.V1 != null && message.hasOwnProperty("V1"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.V1);
        if (message.V2 != null && message.hasOwnProperty("V2"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.V2);
        return writer;
    };
    DTParts.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTParts.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTParts();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.V1 = reader.string();
                break;
            case 2:
                message.V2 = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTParts.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTParts.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.V1 != null && message.hasOwnProperty("V1"))
            if (!$util.isString(message.V1))
                return "V1: string expected";
        if (message.V2 != null && message.hasOwnProperty("V2"))
            if (!$util.isString(message.V2))
                return "V2: string expected";
        return null;
    };
    DTParts.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTParts)
            return object;
        var message = new $excelRoot.DTParts();
        if (object.V1 != null)
            message.V1 = String(object.V1);
        if (object.V2 != null)
            message.V2 = String(object.V2);
        return message;
    };
    DTParts.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.V1 = "";
            object.V2 = "";
        }
        if (message.V1 != null && message.hasOwnProperty("V1"))
            object.V1 = message.V1;
        if (message.V2 != null && message.hasOwnProperty("V2"))
            object.V2 = message.V2;
        return object;
    };
    DTParts.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTParts;
})();
$excelRoot.DTProficiency = (function() {
    function DTProficiency(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTProficiency.prototype.V1 = 0;
    DTProficiency.prototype.V2 = 0;
    DTProficiency.create = function create(properties) {
        return new DTProficiency(properties);
    };
    DTProficiency.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.V1 != null && message.hasOwnProperty("V1"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.V1);
        if (message.V2 != null && message.hasOwnProperty("V2"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.V2);
        return writer;
    };
    DTProficiency.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTProficiency.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTProficiency();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.V1 = reader.int32();
                break;
            case 2:
                message.V2 = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTProficiency.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTProficiency.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.V1 != null && message.hasOwnProperty("V1"))
            if (!$util.isInteger(message.V1))
                return "V1: integer expected";
        if (message.V2 != null && message.hasOwnProperty("V2"))
            if (!$util.isInteger(message.V2))
                return "V2: integer expected";
        return null;
    };
    DTProficiency.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTProficiency)
            return object;
        var message = new $excelRoot.DTProficiency();
        if (object.V1 != null)
            message.V1 = object.V1 | 0;
        if (object.V2 != null)
            message.V2 = object.V2 | 0;
        return message;
    };
    DTProficiency.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.V1 = 0;
            object.V2 = 0;
        }
        if (message.V1 != null && message.hasOwnProperty("V1"))
            object.V1 = message.V1;
        if (message.V2 != null && message.hasOwnProperty("V2"))
            object.V2 = message.V2;
        return object;
    };
    DTProficiency.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTProficiency;
})();
$excelRoot.DTDate = (function() {
    function DTDate(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTDate.prototype.Y = 0;
    DTDate.prototype.M = 0;
    DTDate.prototype.D = 0;
    DTDate.create = function create(properties) {
        return new DTDate(properties);
    };
    DTDate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Y != null && message.hasOwnProperty("Y"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Y);
        if (message.M != null && message.hasOwnProperty("M"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.M);
        if (message.D != null && message.hasOwnProperty("D"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.D);
        return writer;
    };
    DTDate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTDate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTDate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Y = reader.int32();
                break;
            case 2:
                message.M = reader.int32();
                break;
            case 3:
                message.D = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTDate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTDate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Y != null && message.hasOwnProperty("Y"))
            if (!$util.isInteger(message.Y))
                return "Y: integer expected";
        if (message.M != null && message.hasOwnProperty("M"))
            if (!$util.isInteger(message.M))
                return "M: integer expected";
        if (message.D != null && message.hasOwnProperty("D"))
            if (!$util.isInteger(message.D))
                return "D: integer expected";
        return null;
    };
    DTDate.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTDate)
            return object;
        var message = new $excelRoot.DTDate();
        if (object.Y != null)
            message.Y = object.Y | 0;
        if (object.M != null)
            message.M = object.M | 0;
        if (object.D != null)
            message.D = object.D | 0;
        return message;
    };
    DTDate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Y = 0;
            object.M = 0;
            object.D = 0;
        }
        if (message.Y != null && message.hasOwnProperty("Y"))
            object.Y = message.Y;
        if (message.M != null && message.hasOwnProperty("M"))
            object.M = message.M;
        if (message.D != null && message.hasOwnProperty("D"))
            object.D = message.D;
        return object;
    };
    DTDate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTDate;
})();
$excelRoot.DTTime = (function() {
    function DTTime(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTTime.prototype.H = 0;
    DTTime.prototype.Mm = 0;
    DTTime.prototype.S = 0;
    DTTime.create = function create(properties) {
        return new DTTime(properties);
    };
    DTTime.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.H != null && message.hasOwnProperty("H"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.H);
        if (message.Mm != null && message.hasOwnProperty("Mm"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Mm);
        if (message.S != null && message.hasOwnProperty("S"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.S);
        return writer;
    };
    DTTime.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTTime.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTTime();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.H = reader.int32();
                break;
            case 2:
                message.Mm = reader.int32();
                break;
            case 3:
                message.S = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTTime.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTTime.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.H != null && message.hasOwnProperty("H"))
            if (!$util.isInteger(message.H))
                return "H: integer expected";
        if (message.Mm != null && message.hasOwnProperty("Mm"))
            if (!$util.isInteger(message.Mm))
                return "Mm: integer expected";
        if (message.S != null && message.hasOwnProperty("S"))
            if (!$util.isInteger(message.S))
                return "S: integer expected";
        return null;
    };
    DTTime.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTTime)
            return object;
        var message = new $excelRoot.DTTime();
        if (object.H != null)
            message.H = object.H | 0;
        if (object.Mm != null)
            message.Mm = object.Mm | 0;
        if (object.S != null)
            message.S = object.S | 0;
        return message;
    };
    DTTime.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.H = 0;
            object.Mm = 0;
            object.S = 0;
        }
        if (message.H != null && message.hasOwnProperty("H"))
            object.H = message.H;
        if (message.Mm != null && message.hasOwnProperty("Mm"))
            object.Mm = message.Mm;
        if (message.S != null && message.hasOwnProperty("S"))
            object.S = message.S;
        return object;
    };
    DTTime.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTTime;
})();
$excelRoot.DTDateTime = (function() {
    function DTDateTime(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTDateTime.prototype.Y = 0;
    DTDateTime.prototype.M = 0;
    DTDateTime.prototype.D = 0;
    DTDateTime.prototype.H = 0;
    DTDateTime.prototype.Mm = 0;
    DTDateTime.prototype.S = 0;
    DTDateTime.create = function create(properties) {
        return new DTDateTime(properties);
    };
    DTDateTime.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Y != null && message.hasOwnProperty("Y"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Y);
        if (message.M != null && message.hasOwnProperty("M"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.M);
        if (message.D != null && message.hasOwnProperty("D"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.D);
        if (message.H != null && message.hasOwnProperty("H"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.H);
        if (message.Mm != null && message.hasOwnProperty("Mm"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Mm);
        if (message.S != null && message.hasOwnProperty("S"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.S);
        return writer;
    };
    DTDateTime.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTDateTime.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTDateTime();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Y = reader.int32();
                break;
            case 2:
                message.M = reader.int32();
                break;
            case 3:
                message.D = reader.int32();
                break;
            case 4:
                message.H = reader.int32();
                break;
            case 5:
                message.Mm = reader.int32();
                break;
            case 6:
                message.S = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTDateTime.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTDateTime.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Y != null && message.hasOwnProperty("Y"))
            if (!$util.isInteger(message.Y))
                return "Y: integer expected";
        if (message.M != null && message.hasOwnProperty("M"))
            if (!$util.isInteger(message.M))
                return "M: integer expected";
        if (message.D != null && message.hasOwnProperty("D"))
            if (!$util.isInteger(message.D))
                return "D: integer expected";
        if (message.H != null && message.hasOwnProperty("H"))
            if (!$util.isInteger(message.H))
                return "H: integer expected";
        if (message.Mm != null && message.hasOwnProperty("Mm"))
            if (!$util.isInteger(message.Mm))
                return "Mm: integer expected";
        if (message.S != null && message.hasOwnProperty("S"))
            if (!$util.isInteger(message.S))
                return "S: integer expected";
        return null;
    };
    DTDateTime.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTDateTime)
            return object;
        var message = new $excelRoot.DTDateTime();
        if (object.Y != null)
            message.Y = object.Y | 0;
        if (object.M != null)
            message.M = object.M | 0;
        if (object.D != null)
            message.D = object.D | 0;
        if (object.H != null)
            message.H = object.H | 0;
        if (object.Mm != null)
            message.Mm = object.Mm | 0;
        if (object.S != null)
            message.S = object.S | 0;
        return message;
    };
    DTDateTime.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Y = 0;
            object.M = 0;
            object.D = 0;
            object.H = 0;
            object.Mm = 0;
            object.S = 0;
        }
        if (message.Y != null && message.hasOwnProperty("Y"))
            object.Y = message.Y;
        if (message.M != null && message.hasOwnProperty("M"))
            object.M = message.M;
        if (message.D != null && message.hasOwnProperty("D"))
            object.D = message.D;
        if (message.H != null && message.hasOwnProperty("H"))
            object.H = message.H;
        if (message.Mm != null && message.hasOwnProperty("Mm"))
            object.Mm = message.Mm;
        if (message.S != null && message.hasOwnProperty("S"))
            object.S = message.S;
        return object;
    };
    DTDateTime.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTDateTime;
})();
$excelRoot.DTFixItemNum = (function() {
    function DTFixItemNum(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTFixItemNum.prototype.ItemType = 0;
    DTFixItemNum.prototype.ItemId = 0;
    DTFixItemNum.prototype.ItemNum = 0;
    DTFixItemNum.create = function create(properties) {
        return new DTFixItemNum(properties);
    };
    DTFixItemNum.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ItemType != null && message.hasOwnProperty("ItemType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ItemType);
        if (message.ItemId != null && message.hasOwnProperty("ItemId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ItemId);
        if (message.ItemNum != null && message.hasOwnProperty("ItemNum"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ItemNum);
        return writer;
    };
    DTFixItemNum.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTFixItemNum.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTFixItemNum();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ItemType = reader.int32();
                break;
            case 2:
                message.ItemId = reader.int32();
                break;
            case 3:
                message.ItemNum = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTFixItemNum.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTFixItemNum.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ItemType != null && message.hasOwnProperty("ItemType"))
            if (!$util.isInteger(message.ItemType))
                return "ItemType: integer expected";
        if (message.ItemId != null && message.hasOwnProperty("ItemId"))
            if (!$util.isInteger(message.ItemId))
                return "ItemId: integer expected";
        if (message.ItemNum != null && message.hasOwnProperty("ItemNum"))
            if (!$util.isInteger(message.ItemNum))
                return "ItemNum: integer expected";
        return null;
    };
    DTFixItemNum.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTFixItemNum)
            return object;
        var message = new $excelRoot.DTFixItemNum();
        if (object.ItemType != null)
            message.ItemType = object.ItemType | 0;
        if (object.ItemId != null)
            message.ItemId = object.ItemId | 0;
        if (object.ItemNum != null)
            message.ItemNum = object.ItemNum | 0;
        return message;
    };
    DTFixItemNum.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.ItemType = 0;
            object.ItemId = 0;
            object.ItemNum = 0;
        }
        if (message.ItemType != null && message.hasOwnProperty("ItemType"))
            object.ItemType = message.ItemType;
        if (message.ItemId != null && message.hasOwnProperty("ItemId"))
            object.ItemId = message.ItemId;
        if (message.ItemNum != null && message.hasOwnProperty("ItemNum"))
            object.ItemNum = message.ItemNum;
        return object;
    };
    DTFixItemNum.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTFixItemNum;
})();
$excelRoot.DTGiftNum = (function() {
    function DTGiftNum(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTGiftNum.prototype.ItemId = 0;
    DTGiftNum.prototype.ItemNum = 0;
    DTGiftNum.prototype.Property = 0;
    DTGiftNum.create = function create(properties) {
        return new DTGiftNum(properties);
    };
    DTGiftNum.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ItemId != null && message.hasOwnProperty("ItemId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ItemId);
        if (message.ItemNum != null && message.hasOwnProperty("ItemNum"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ItemNum);
        if (message.Property != null && message.hasOwnProperty("Property"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Property);
        return writer;
    };
    DTGiftNum.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTGiftNum.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTGiftNum();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ItemId = reader.int32();
                break;
            case 2:
                message.ItemNum = reader.int32();
                break;
            case 3:
                message.Property = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTGiftNum.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTGiftNum.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ItemId != null && message.hasOwnProperty("ItemId"))
            if (!$util.isInteger(message.ItemId))
                return "ItemId: integer expected";
        if (message.ItemNum != null && message.hasOwnProperty("ItemNum"))
            if (!$util.isInteger(message.ItemNum))
                return "ItemNum: integer expected";
        if (message.Property != null && message.hasOwnProperty("Property"))
            if (!$util.isInteger(message.Property))
                return "Property: integer expected";
        return null;
    };
    DTGiftNum.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTGiftNum)
            return object;
        var message = new $excelRoot.DTGiftNum();
        if (object.ItemId != null)
            message.ItemId = object.ItemId | 0;
        if (object.ItemNum != null)
            message.ItemNum = object.ItemNum | 0;
        if (object.Property != null)
            message.Property = object.Property | 0;
        return message;
    };
    DTGiftNum.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.ItemId = 0;
            object.ItemNum = 0;
            object.Property = 0;
        }
        if (message.ItemId != null && message.hasOwnProperty("ItemId"))
            object.ItemId = message.ItemId;
        if (message.ItemNum != null && message.hasOwnProperty("ItemNum"))
            object.ItemNum = message.ItemNum;
        if (message.Property != null && message.hasOwnProperty("Property"))
            object.Property = message.Property;
        return object;
    };
    DTGiftNum.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTGiftNum;
})();
$excelRoot.DTLabelProperty = (function() {
    function DTLabelProperty(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTLabelProperty.prototype.StoryTag = 0;
    DTLabelProperty.prototype.Property = 0;
    DTLabelProperty.create = function create(properties) {
        return new DTLabelProperty(properties);
    };
    DTLabelProperty.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.StoryTag != null && message.hasOwnProperty("StoryTag"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.StoryTag);
        if (message.Property != null && message.hasOwnProperty("Property"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Property);
        return writer;
    };
    DTLabelProperty.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTLabelProperty.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTLabelProperty();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.StoryTag = reader.int32();
                break;
            case 2:
                message.Property = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTLabelProperty.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTLabelProperty.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.StoryTag != null && message.hasOwnProperty("StoryTag"))
            if (!$util.isInteger(message.StoryTag))
                return "StoryTag: integer expected";
        if (message.Property != null && message.hasOwnProperty("Property"))
            if (!$util.isInteger(message.Property))
                return "Property: integer expected";
        return null;
    };
    DTLabelProperty.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTLabelProperty)
            return object;
        var message = new $excelRoot.DTLabelProperty();
        if (object.StoryTag != null)
            message.StoryTag = object.StoryTag | 0;
        if (object.Property != null)
            message.Property = object.Property | 0;
        return message;
    };
    DTLabelProperty.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.StoryTag = 0;
            object.Property = 0;
        }
        if (message.StoryTag != null && message.hasOwnProperty("StoryTag"))
            object.StoryTag = message.StoryTag;
        if (message.Property != null && message.hasOwnProperty("Property"))
            object.Property = message.Property;
        return object;
    };
    DTLabelProperty.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTLabelProperty;
})();
$excelRoot.DTInitialLabel = (function() {
    function DTInitialLabel(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTInitialLabel.prototype.StoryTag = 0;
    DTInitialLabel.prototype.Level = 0;
    DTInitialLabel.prototype.Property = 0;
    DTInitialLabel.create = function create(properties) {
        return new DTInitialLabel(properties);
    };
    DTInitialLabel.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.StoryTag != null && message.hasOwnProperty("StoryTag"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.StoryTag);
        if (message.Level != null && message.hasOwnProperty("Level"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Level);
        if (message.Property != null && message.hasOwnProperty("Property"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Property);
        return writer;
    };
    DTInitialLabel.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTInitialLabel.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTInitialLabel();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.StoryTag = reader.int32();
                break;
            case 2:
                message.Level = reader.int32();
                break;
            case 3:
                message.Property = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTInitialLabel.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTInitialLabel.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.StoryTag != null && message.hasOwnProperty("StoryTag"))
            if (!$util.isInteger(message.StoryTag))
                return "StoryTag: integer expected";
        if (message.Level != null && message.hasOwnProperty("Level"))
            if (!$util.isInteger(message.Level))
                return "Level: integer expected";
        if (message.Property != null && message.hasOwnProperty("Property"))
            if (!$util.isInteger(message.Property))
                return "Property: integer expected";
        return null;
    };
    DTInitialLabel.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTInitialLabel)
            return object;
        var message = new $excelRoot.DTInitialLabel();
        if (object.StoryTag != null)
            message.StoryTag = object.StoryTag | 0;
        if (object.Level != null)
            message.Level = object.Level | 0;
        if (object.Property != null)
            message.Property = object.Property | 0;
        return message;
    };
    DTInitialLabel.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.StoryTag = 0;
            object.Level = 0;
            object.Property = 0;
        }
        if (message.StoryTag != null && message.hasOwnProperty("StoryTag"))
            object.StoryTag = message.StoryTag;
        if (message.Level != null && message.hasOwnProperty("Level"))
            object.Level = message.Level;
        if (message.Property != null && message.hasOwnProperty("Property"))
            object.Property = message.Property;
        return object;
    };
    DTInitialLabel.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTInitialLabel;
})();
$excelRoot.DTPerformanceCondition = (function() {
    function DTPerformanceCondition(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTPerformanceCondition.prototype.Lv = 0;
    DTPerformanceCondition.prototype.Property = 0;
    DTPerformanceCondition.prototype.Num = 0;
    DTPerformanceCondition.create = function create(properties) {
        return new DTPerformanceCondition(properties);
    };
    DTPerformanceCondition.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Lv != null && message.hasOwnProperty("Lv"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Lv);
        if (message.Property != null && message.hasOwnProperty("Property"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Property);
        if (message.Num != null && message.hasOwnProperty("Num"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Num);
        return writer;
    };
    DTPerformanceCondition.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTPerformanceCondition.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTPerformanceCondition();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Lv = reader.int32();
                break;
            case 2:
                message.Property = reader.int32();
                break;
            case 3:
                message.Num = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTPerformanceCondition.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTPerformanceCondition.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Lv != null && message.hasOwnProperty("Lv"))
            if (!$util.isInteger(message.Lv))
                return "Lv: integer expected";
        if (message.Property != null && message.hasOwnProperty("Property"))
            if (!$util.isInteger(message.Property))
                return "Property: integer expected";
        if (message.Num != null && message.hasOwnProperty("Num"))
            if (!$util.isInteger(message.Num))
                return "Num: integer expected";
        return null;
    };
    DTPerformanceCondition.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTPerformanceCondition)
            return object;
        var message = new $excelRoot.DTPerformanceCondition();
        if (object.Lv != null)
            message.Lv = object.Lv | 0;
        if (object.Property != null)
            message.Property = object.Property | 0;
        if (object.Num != null)
            message.Num = object.Num | 0;
        return message;
    };
    DTPerformanceCondition.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Lv = 0;
            object.Property = 0;
            object.Num = 0;
        }
        if (message.Lv != null && message.hasOwnProperty("Lv"))
            object.Lv = message.Lv;
        if (message.Property != null && message.hasOwnProperty("Property"))
            object.Property = message.Property;
        if (message.Num != null && message.hasOwnProperty("Num"))
            object.Num = message.Num;
        return object;
    };
    DTPerformanceCondition.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTPerformanceCondition;
})();
$excelRoot.DTSkillTiggerCondition = (function() {
    function DTSkillTiggerCondition(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTSkillTiggerCondition.prototype.TiggerConditon = 0;
    DTSkillTiggerCondition.prototype.TiggerValue = 0;
    DTSkillTiggerCondition.create = function create(properties) {
        return new DTSkillTiggerCondition(properties);
    };
    DTSkillTiggerCondition.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.TiggerConditon != null && message.hasOwnProperty("TiggerConditon"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TiggerConditon);
        if (message.TiggerValue != null && message.hasOwnProperty("TiggerValue"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TiggerValue);
        return writer;
    };
    DTSkillTiggerCondition.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTSkillTiggerCondition.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTSkillTiggerCondition();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.TiggerConditon = reader.int32();
                break;
            case 2:
                message.TiggerValue = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTSkillTiggerCondition.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTSkillTiggerCondition.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.TiggerConditon != null && message.hasOwnProperty("TiggerConditon"))
            if (!$util.isInteger(message.TiggerConditon))
                return "TiggerConditon: integer expected";
        if (message.TiggerValue != null && message.hasOwnProperty("TiggerValue"))
            if (!$util.isInteger(message.TiggerValue))
                return "TiggerValue: integer expected";
        return null;
    };
    DTSkillTiggerCondition.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTSkillTiggerCondition)
            return object;
        var message = new $excelRoot.DTSkillTiggerCondition();
        if (object.TiggerConditon != null)
            message.TiggerConditon = object.TiggerConditon | 0;
        if (object.TiggerValue != null)
            message.TiggerValue = object.TiggerValue | 0;
        return message;
    };
    DTSkillTiggerCondition.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.TiggerConditon = 0;
            object.TiggerValue = 0;
        }
        if (message.TiggerConditon != null && message.hasOwnProperty("TiggerConditon"))
            object.TiggerConditon = message.TiggerConditon;
        if (message.TiggerValue != null && message.hasOwnProperty("TiggerValue"))
            object.TiggerValue = message.TiggerValue;
        return object;
    };
    DTSkillTiggerCondition.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTSkillTiggerCondition;
})();
$excelRoot.DTburstlibrary = (function() {
    function DTburstlibrary(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTburstlibrary.prototype.ItemId = 0;
    DTburstlibrary.prototype.ItemNum = 0;
    DTburstlibrary.prototype.Rate = 0;
    DTburstlibrary.create = function create(properties) {
        return new DTburstlibrary(properties);
    };
    DTburstlibrary.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ItemId != null && message.hasOwnProperty("ItemId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ItemId);
        if (message.ItemNum != null && message.hasOwnProperty("ItemNum"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ItemNum);
        if (message.Rate != null && message.hasOwnProperty("Rate"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Rate);
        return writer;
    };
    DTburstlibrary.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTburstlibrary.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTburstlibrary();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ItemId = reader.int32();
                break;
            case 2:
                message.ItemNum = reader.int32();
                break;
            case 3:
                message.Rate = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTburstlibrary.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTburstlibrary.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ItemId != null && message.hasOwnProperty("ItemId"))
            if (!$util.isInteger(message.ItemId))
                return "ItemId: integer expected";
        if (message.ItemNum != null && message.hasOwnProperty("ItemNum"))
            if (!$util.isInteger(message.ItemNum))
                return "ItemNum: integer expected";
        if (message.Rate != null && message.hasOwnProperty("Rate"))
            if (!$util.isInteger(message.Rate))
                return "Rate: integer expected";
        return null;
    };
    DTburstlibrary.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTburstlibrary)
            return object;
        var message = new $excelRoot.DTburstlibrary();
        if (object.ItemId != null)
            message.ItemId = object.ItemId | 0;
        if (object.ItemNum != null)
            message.ItemNum = object.ItemNum | 0;
        if (object.Rate != null)
            message.Rate = object.Rate | 0;
        return message;
    };
    DTburstlibrary.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.ItemId = 0;
            object.ItemNum = 0;
            object.Rate = 0;
        }
        if (message.ItemId != null && message.hasOwnProperty("ItemId"))
            object.ItemId = message.ItemId;
        if (message.ItemNum != null && message.hasOwnProperty("ItemNum"))
            object.ItemNum = message.ItemNum;
        if (message.Rate != null && message.hasOwnProperty("Rate"))
            object.Rate = message.Rate;
        return object;
    };
    DTburstlibrary.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTburstlibrary;
})();
$excelRoot.DTProp = (function() {
    function DTProp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTProp.prototype.PropID = 0;
    DTProp.prototype.Rate = 0;
    DTProp.create = function create(properties) {
        return new DTProp(properties);
    };
    DTProp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.PropID != null && message.hasOwnProperty("PropID"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.PropID);
        if (message.Rate != null && message.hasOwnProperty("Rate"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Rate);
        return writer;
    };
    DTProp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTProp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTProp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.PropID = reader.int32();
                break;
            case 2:
                message.Rate = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTProp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTProp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.PropID != null && message.hasOwnProperty("PropID"))
            if (!$util.isInteger(message.PropID))
                return "PropID: integer expected";
        if (message.Rate != null && message.hasOwnProperty("Rate"))
            if (!$util.isInteger(message.Rate))
                return "Rate: integer expected";
        return null;
    };
    DTProp.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTProp)
            return object;
        var message = new $excelRoot.DTProp();
        if (object.PropID != null)
            message.PropID = object.PropID | 0;
        if (object.Rate != null)
            message.Rate = object.Rate | 0;
        return message;
    };
    DTProp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.PropID = 0;
            object.Rate = 0;
        }
        if (message.PropID != null && message.hasOwnProperty("PropID"))
            object.PropID = message.PropID;
        if (message.Rate != null && message.hasOwnProperty("Rate"))
            object.Rate = message.Rate;
        return object;
    };
    DTProp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTProp;
})();
$excelRoot.DTRandNum = (function() {
    function DTRandNum(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTRandNum.prototype.Num = 0;
    DTRandNum.prototype.Rate = 0;
    DTRandNum.create = function create(properties) {
        return new DTRandNum(properties);
    };
    DTRandNum.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Num != null && message.hasOwnProperty("Num"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Num);
        if (message.Rate != null && message.hasOwnProperty("Rate"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Rate);
        return writer;
    };
    DTRandNum.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTRandNum.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTRandNum();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Num = reader.int32();
                break;
            case 2:
                message.Rate = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTRandNum.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTRandNum.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Num != null && message.hasOwnProperty("Num"))
            if (!$util.isInteger(message.Num))
                return "Num: integer expected";
        if (message.Rate != null && message.hasOwnProperty("Rate"))
            if (!$util.isInteger(message.Rate))
                return "Rate: integer expected";
        return null;
    };
    DTRandNum.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTRandNum)
            return object;
        var message = new $excelRoot.DTRandNum();
        if (object.Num != null)
            message.Num = object.Num | 0;
        if (object.Rate != null)
            message.Rate = object.Rate | 0;
        return message;
    };
    DTRandNum.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Num = 0;
            object.Rate = 0;
        }
        if (message.Num != null && message.hasOwnProperty("Num"))
            object.Num = message.Num;
        if (message.Rate != null && message.hasOwnProperty("Rate"))
            object.Rate = message.Rate;
        return object;
    };
    DTRandNum.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTRandNum;
})();
$excelRoot.DTPropGrowupStep = (function() {
    function DTPropGrowupStep(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTPropGrowupStep.prototype.Level = 0;
    DTPropGrowupStep.prototype.Step = 0;
    DTPropGrowupStep.create = function create(properties) {
        return new DTPropGrowupStep(properties);
    };
    DTPropGrowupStep.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Level != null && message.hasOwnProperty("Level"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Level);
        if (message.Step != null && message.hasOwnProperty("Step"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Step);
        return writer;
    };
    DTPropGrowupStep.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTPropGrowupStep.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTPropGrowupStep();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Level = reader.int32();
                break;
            case 2:
                message.Step = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTPropGrowupStep.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTPropGrowupStep.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Level != null && message.hasOwnProperty("Level"))
            if (!$util.isInteger(message.Level))
                return "Level: integer expected";
        if (message.Step != null && message.hasOwnProperty("Step"))
            if (!$util.isInteger(message.Step))
                return "Step: integer expected";
        return null;
    };
    DTPropGrowupStep.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTPropGrowupStep)
            return object;
        var message = new $excelRoot.DTPropGrowupStep();
        if (object.Level != null)
            message.Level = object.Level | 0;
        if (object.Step != null)
            message.Step = object.Step | 0;
        return message;
    };
    DTPropGrowupStep.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Level = 0;
            object.Step = 0;
        }
        if (message.Level != null && message.hasOwnProperty("Level"))
            object.Level = message.Level;
        if (message.Step != null && message.hasOwnProperty("Step"))
            object.Step = message.Step;
        return object;
    };
    DTPropGrowupStep.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTPropGrowupStep;
})();
$excelRoot.DTDecompose = (function() {
    function DTDecompose(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTDecompose.prototype.Percent = 0;
    DTDecompose.prototype.Rewardid = 0;
    DTDecompose.create = function create(properties) {
        return new DTDecompose(properties);
    };
    DTDecompose.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Percent != null && message.hasOwnProperty("Percent"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Percent);
        if (message.Rewardid != null && message.hasOwnProperty("Rewardid"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Rewardid);
        return writer;
    };
    DTDecompose.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTDecompose.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTDecompose();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Percent = reader.int32();
                break;
            case 2:
                message.Rewardid = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTDecompose.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTDecompose.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Percent != null && message.hasOwnProperty("Percent"))
            if (!$util.isInteger(message.Percent))
                return "Percent: integer expected";
        if (message.Rewardid != null && message.hasOwnProperty("Rewardid"))
            if (!$util.isInteger(message.Rewardid))
                return "Rewardid: integer expected";
        return null;
    };
    DTDecompose.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTDecompose)
            return object;
        var message = new $excelRoot.DTDecompose();
        if (object.Percent != null)
            message.Percent = object.Percent | 0;
        if (object.Rewardid != null)
            message.Rewardid = object.Rewardid | 0;
        return message;
    };
    DTDecompose.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Percent = 0;
            object.Rewardid = 0;
        }
        if (message.Percent != null && message.hasOwnProperty("Percent"))
            object.Percent = message.Percent;
        if (message.Rewardid != null && message.hasOwnProperty("Rewardid"))
            object.Rewardid = message.Rewardid;
        return object;
    };
    DTDecompose.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTDecompose;
})();
$excelRoot.DTStarReward = (function() {
    function DTStarReward(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTStarReward.prototype.Level = 0;
    DTStarReward.prototype.Starnum = 0;
    DTStarReward.prototype.Rewardid = 0;
    DTStarReward.create = function create(properties) {
        return new DTStarReward(properties);
    };
    DTStarReward.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Level != null && message.hasOwnProperty("Level"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Level);
        if (message.Starnum != null && message.hasOwnProperty("Starnum"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Starnum);
        if (message.Rewardid != null && message.hasOwnProperty("Rewardid"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Rewardid);
        return writer;
    };
    DTStarReward.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTStarReward.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTStarReward();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Level = reader.int32();
                break;
            case 2:
                message.Starnum = reader.int32();
                break;
            case 3:
                message.Rewardid = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTStarReward.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTStarReward.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Level != null && message.hasOwnProperty("Level"))
            if (!$util.isInteger(message.Level))
                return "Level: integer expected";
        if (message.Starnum != null && message.hasOwnProperty("Starnum"))
            if (!$util.isInteger(message.Starnum))
                return "Starnum: integer expected";
        if (message.Rewardid != null && message.hasOwnProperty("Rewardid"))
            if (!$util.isInteger(message.Rewardid))
                return "Rewardid: integer expected";
        return null;
    };
    DTStarReward.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTStarReward)
            return object;
        var message = new $excelRoot.DTStarReward();
        if (object.Level != null)
            message.Level = object.Level | 0;
        if (object.Starnum != null)
            message.Starnum = object.Starnum | 0;
        if (object.Rewardid != null)
            message.Rewardid = object.Rewardid | 0;
        return message;
    };
    DTStarReward.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Level = 0;
            object.Starnum = 0;
            object.Rewardid = 0;
        }
        if (message.Level != null && message.hasOwnProperty("Level"))
            object.Level = message.Level;
        if (message.Starnum != null && message.hasOwnProperty("Starnum"))
            object.Starnum = message.Starnum;
        if (message.Rewardid != null && message.hasOwnProperty("Rewardid"))
            object.Rewardid = message.Rewardid;
        return object;
    };
    DTStarReward.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTStarReward;
})();
$excelRoot.DTBuffId = (function() {
    function DTBuffId(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTBuffId.prototype.BuffID1 = 0;
    DTBuffId.prototype.BuffID2 = 0;
    DTBuffId.prototype.BuffID3 = 0;
    DTBuffId.prototype.BuffID4 = 0;
    DTBuffId.prototype.BuffID5 = 0;
    DTBuffId.prototype.BuffID6 = 0;
    DTBuffId.create = function create(properties) {
        return new DTBuffId(properties);
    };
    DTBuffId.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.BuffID1 != null && message.hasOwnProperty("BuffID1"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.BuffID1);
        if (message.BuffID2 != null && message.hasOwnProperty("BuffID2"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.BuffID2);
        if (message.BuffID3 != null && message.hasOwnProperty("BuffID3"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.BuffID3);
        if (message.BuffID4 != null && message.hasOwnProperty("BuffID4"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.BuffID4);
        if (message.BuffID5 != null && message.hasOwnProperty("BuffID5"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.BuffID5);
        if (message.BuffID6 != null && message.hasOwnProperty("BuffID6"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.BuffID6);
        return writer;
    };
    DTBuffId.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTBuffId.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTBuffId();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.BuffID1 = reader.int32();
                break;
            case 2:
                message.BuffID2 = reader.int32();
                break;
            case 3:
                message.BuffID3 = reader.int32();
                break;
            case 4:
                message.BuffID4 = reader.int32();
                break;
            case 5:
                message.BuffID5 = reader.int32();
                break;
            case 6:
                message.BuffID6 = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTBuffId.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTBuffId.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.BuffID1 != null && message.hasOwnProperty("BuffID1"))
            if (!$util.isInteger(message.BuffID1))
                return "BuffID1: integer expected";
        if (message.BuffID2 != null && message.hasOwnProperty("BuffID2"))
            if (!$util.isInteger(message.BuffID2))
                return "BuffID2: integer expected";
        if (message.BuffID3 != null && message.hasOwnProperty("BuffID3"))
            if (!$util.isInteger(message.BuffID3))
                return "BuffID3: integer expected";
        if (message.BuffID4 != null && message.hasOwnProperty("BuffID4"))
            if (!$util.isInteger(message.BuffID4))
                return "BuffID4: integer expected";
        if (message.BuffID5 != null && message.hasOwnProperty("BuffID5"))
            if (!$util.isInteger(message.BuffID5))
                return "BuffID5: integer expected";
        if (message.BuffID6 != null && message.hasOwnProperty("BuffID6"))
            if (!$util.isInteger(message.BuffID6))
                return "BuffID6: integer expected";
        return null;
    };
    DTBuffId.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTBuffId)
            return object;
        var message = new $excelRoot.DTBuffId();
        if (object.BuffID1 != null)
            message.BuffID1 = object.BuffID1 | 0;
        if (object.BuffID2 != null)
            message.BuffID2 = object.BuffID2 | 0;
        if (object.BuffID3 != null)
            message.BuffID3 = object.BuffID3 | 0;
        if (object.BuffID4 != null)
            message.BuffID4 = object.BuffID4 | 0;
        if (object.BuffID5 != null)
            message.BuffID5 = object.BuffID5 | 0;
        if (object.BuffID6 != null)
            message.BuffID6 = object.BuffID6 | 0;
        return message;
    };
    DTBuffId.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.BuffID1 = 0;
            object.BuffID2 = 0;
            object.BuffID3 = 0;
            object.BuffID4 = 0;
            object.BuffID5 = 0;
            object.BuffID6 = 0;
        }
        if (message.BuffID1 != null && message.hasOwnProperty("BuffID1"))
            object.BuffID1 = message.BuffID1;
        if (message.BuffID2 != null && message.hasOwnProperty("BuffID2"))
            object.BuffID2 = message.BuffID2;
        if (message.BuffID3 != null && message.hasOwnProperty("BuffID3"))
            object.BuffID3 = message.BuffID3;
        if (message.BuffID4 != null && message.hasOwnProperty("BuffID4"))
            object.BuffID4 = message.BuffID4;
        if (message.BuffID5 != null && message.hasOwnProperty("BuffID5"))
            object.BuffID5 = message.BuffID5;
        if (message.BuffID6 != null && message.hasOwnProperty("BuffID6"))
            object.BuffID6 = message.BuffID6;
        return object;
    };
    DTBuffId.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTBuffId;
})();
$excelRoot.DTPropValue = (function() {
    function DTPropValue(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTPropValue.prototype.PropID = 0;
    DTPropValue.prototype.Value = 0;
    DTPropValue.create = function create(properties) {
        return new DTPropValue(properties);
    };
    DTPropValue.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.PropID != null && message.hasOwnProperty("PropID"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.PropID);
        if (message.Value != null && message.hasOwnProperty("Value"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Value);
        return writer;
    };
    DTPropValue.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTPropValue.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTPropValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.PropID = reader.int32();
                break;
            case 2:
                message.Value = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTPropValue.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTPropValue.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.PropID != null && message.hasOwnProperty("PropID"))
            if (!$util.isInteger(message.PropID))
                return "PropID: integer expected";
        if (message.Value != null && message.hasOwnProperty("Value"))
            if (!$util.isInteger(message.Value))
                return "Value: integer expected";
        return null;
    };
    DTPropValue.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTPropValue)
            return object;
        var message = new $excelRoot.DTPropValue();
        if (object.PropID != null)
            message.PropID = object.PropID | 0;
        if (object.Value != null)
            message.Value = object.Value | 0;
        return message;
    };
    DTPropValue.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.PropID = 0;
            object.Value = 0;
        }
        if (message.PropID != null && message.hasOwnProperty("PropID"))
            object.PropID = message.PropID;
        if (message.Value != null && message.hasOwnProperty("Value"))
            object.Value = message.Value;
        return object;
    };
    DTPropValue.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTPropValue;
})();
$excelRoot.DTMapId = (function() {
    function DTMapId(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTMapId.prototype.ChapterId = 0;
    DTMapId.prototype.MapId = 0;
    DTMapId.create = function create(properties) {
        return new DTMapId(properties);
    };
    DTMapId.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ChapterId != null && message.hasOwnProperty("ChapterId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ChapterId);
        if (message.MapId != null && message.hasOwnProperty("MapId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.MapId);
        return writer;
    };
    DTMapId.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTMapId.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTMapId();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ChapterId = reader.int32();
                break;
            case 2:
                message.MapId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTMapId.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTMapId.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ChapterId != null && message.hasOwnProperty("ChapterId"))
            if (!$util.isInteger(message.ChapterId))
                return "ChapterId: integer expected";
        if (message.MapId != null && message.hasOwnProperty("MapId"))
            if (!$util.isInteger(message.MapId))
                return "MapId: integer expected";
        return null;
    };
    DTMapId.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTMapId)
            return object;
        var message = new $excelRoot.DTMapId();
        if (object.ChapterId != null)
            message.ChapterId = object.ChapterId | 0;
        if (object.MapId != null)
            message.MapId = object.MapId | 0;
        return message;
    };
    DTMapId.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.ChapterId = 0;
            object.MapId = 0;
        }
        if (message.ChapterId != null && message.hasOwnProperty("ChapterId"))
            object.ChapterId = message.ChapterId;
        if (message.MapId != null && message.hasOwnProperty("MapId"))
            object.MapId = message.MapId;
        return object;
    };
    DTMapId.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTMapId;
})();
$excelRoot.Global = (function() {
    function Global(properties) {
        this.initItemList = [];
        this.BestDecompose = [];
        this.heroLevelItem = [];
        this.baseCount = [];
        this.eliteBuyCount = [];
        this.devilBuyCount = [];
        this.SecretBookBuyCount = [];
        this.duelBase = [];
        this.inviteTime = [];
        this.epuipPromotionItem = [];
        this.duelTempMapList = [];
        this.duelDayQuest = [];
        this.duelweekQuest = [];
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
    Global.prototype.notices = "";
    Global.prototype.PvpMatchTime = 0;
    Global.prototype.PvpMatchTime2 = 0;
    Global.prototype.ChannelMine = false;
    Global.prototype.pvpResultMaxCnt = 0;
    Global.prototype.shareTitle = "";
    Global.prototype.shareImgUrl = "";
    Global.prototype.shareImgId = "";
    Global.prototype.per1V10Icon = 0;
    Global.prototype.per2V10Icon = 0;
    Global.prototype.worldChatIcon = 0;
    Global.prototype.pvpIconReward = 0;
    Global.prototype.maxBagSpace = 0;
    Global.prototype.DefAvatar = "";
    Global.prototype.initItemList = $util.emptyArray;
    Global.prototype.BestDecompose = $util.emptyArray;
    Global.prototype.draugTempAreaLength = 0;
    Global.prototype.nameCost = null;
    Global.prototype.heroLevelItem = $util.emptyArray;
    Global.prototype.powerIncrease = 0;
    Global.prototype.updataDayTime = null;
    Global.prototype.baseCount = $util.emptyArray;
    Global.prototype.NumberOfChallengesPerday = 0;
    Global.prototype.eliteBuyCount = $util.emptyArray;
    Global.prototype.devilBuyCount = $util.emptyArray;
    Global.prototype.SecretBookBuyCount = $util.emptyArray;
    Global.prototype.itemBag = 0;
    Global.prototype.equipBag = 0;
    Global.prototype.tokenBag = 0;
    Global.prototype.duelBase = $util.emptyArray;
    Global.prototype.duelTime = 0;
    Global.prototype.inviteTime = $util.emptyArray;
    Global.prototype.matchesNumber = 0;
    Global.prototype.initialRealscore = 0;
    Global.prototype.initialRanknum = 0;
    Global.prototype.combowinA = 0;
    Global.prototype.comboloseA = 0;
    Global.prototype.combowinparaMax = 0;
    Global.prototype.comboloseparaMax = 0;
    Global.prototype.enemyA = 0;
    Global.prototype.scoreperstar = 0;
    Global.prototype.combowinJdscore = 0;
    Global.prototype.enemyJdscore = 0;
    Global.prototype.initialMatchRange = 0;
    Global.prototype.maxMatchRange = 0;
    Global.prototype.widenRange = 0;
    Global.prototype.widenTime = 0;
    Global.prototype.epuipPromotionItem = $util.emptyArray;
    Global.prototype.duelTempMapList = $util.emptyArray;
    Global.prototype.duelDayQuest = $util.emptyArray;
    Global.prototype.duelweekQuest = $util.emptyArray;
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
        if (message.notices != null && message.hasOwnProperty("notices"))
            writer.uint32(/* id 14, wireType 2 =*/114).string(message.notices);
        if (message.PvpMatchTime != null && message.hasOwnProperty("PvpMatchTime"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.PvpMatchTime);
        if (message.PvpMatchTime2 != null && message.hasOwnProperty("PvpMatchTime2"))
            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.PvpMatchTime2);
        if (message.ChannelMine != null && message.hasOwnProperty("ChannelMine"))
            writer.uint32(/* id 17, wireType 0 =*/136).bool(message.ChannelMine);
        if (message.pvpResultMaxCnt != null && message.hasOwnProperty("pvpResultMaxCnt"))
            writer.uint32(/* id 18, wireType 0 =*/144).int32(message.pvpResultMaxCnt);
        if (message.shareTitle != null && message.hasOwnProperty("shareTitle"))
            writer.uint32(/* id 19, wireType 2 =*/154).string(message.shareTitle);
        if (message.shareImgUrl != null && message.hasOwnProperty("shareImgUrl"))
            writer.uint32(/* id 20, wireType 2 =*/162).string(message.shareImgUrl);
        if (message.shareImgId != null && message.hasOwnProperty("shareImgId"))
            writer.uint32(/* id 21, wireType 2 =*/170).string(message.shareImgId);
        if (message.per1V10Icon != null && message.hasOwnProperty("per1V10Icon"))
            writer.uint32(/* id 22, wireType 0 =*/176).int32(message.per1V10Icon);
        if (message.per2V10Icon != null && message.hasOwnProperty("per2V10Icon"))
            writer.uint32(/* id 23, wireType 0 =*/184).int32(message.per2V10Icon);
        if (message.worldChatIcon != null && message.hasOwnProperty("worldChatIcon"))
            writer.uint32(/* id 24, wireType 0 =*/192).int32(message.worldChatIcon);
        if (message.pvpIconReward != null && message.hasOwnProperty("pvpIconReward"))
            writer.uint32(/* id 25, wireType 0 =*/200).int32(message.pvpIconReward);
        if (message.maxBagSpace != null && message.hasOwnProperty("maxBagSpace"))
            writer.uint32(/* id 26, wireType 0 =*/208).int32(message.maxBagSpace);
        if (message.DefAvatar != null && message.hasOwnProperty("DefAvatar"))
            writer.uint32(/* id 27, wireType 2 =*/218).string(message.DefAvatar);
        if (message.initItemList != null && message.initItemList.length)
            for (var i = 0; i < message.initItemList.length; ++i)
                $excelRoot.DTFixItemNum.encode(message.initItemList[i], writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
        if (message.BestDecompose != null && message.BestDecompose.length)
            for (var i = 0; i < message.BestDecompose.length; ++i)
                $excelRoot.DTDecompose.encode(message.BestDecompose[i], writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
        if (message.draugTempAreaLength != null && message.hasOwnProperty("draugTempAreaLength"))
            writer.uint32(/* id 30, wireType 0 =*/240).int32(message.draugTempAreaLength);
        if (message.nameCost != null && message.hasOwnProperty("nameCost"))
            $excelRoot.DTItemNum.encode(message.nameCost, writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
        if (message.heroLevelItem != null && message.heroLevelItem.length) {
            writer.uint32(/* id 32, wireType 2 =*/258).fork();
            for (var i = 0; i < message.heroLevelItem.length; ++i)
                writer.int32(message.heroLevelItem[i]);
            writer.ldelim();
        }
        if (message.powerIncrease != null && message.hasOwnProperty("powerIncrease"))
            writer.uint32(/* id 33, wireType 0 =*/264).int32(message.powerIncrease);
        if (message.updataDayTime != null && message.hasOwnProperty("updataDayTime"))
            $excelRoot.DTTime.encode(message.updataDayTime, writer.uint32(/* id 34, wireType 2 =*/274).fork()).ldelim();
        if (message.baseCount != null && message.baseCount.length) {
            writer.uint32(/* id 35, wireType 2 =*/282).fork();
            for (var i = 0; i < message.baseCount.length; ++i)
                writer.int32(message.baseCount[i]);
            writer.ldelim();
        }
        if (message.NumberOfChallengesPerday != null && message.hasOwnProperty("NumberOfChallengesPerday"))
            writer.uint32(/* id 36, wireType 0 =*/288).int32(message.NumberOfChallengesPerday);
        if (message.eliteBuyCount != null && message.eliteBuyCount.length)
            for (var i = 0; i < message.eliteBuyCount.length; ++i)
                $excelRoot.DTItemNum.encode(message.eliteBuyCount[i], writer.uint32(/* id 37, wireType 2 =*/298).fork()).ldelim();
        if (message.devilBuyCount != null && message.devilBuyCount.length)
            for (var i = 0; i < message.devilBuyCount.length; ++i)
                $excelRoot.DTItemNum.encode(message.devilBuyCount[i], writer.uint32(/* id 38, wireType 2 =*/306).fork()).ldelim();
        if (message.SecretBookBuyCount != null && message.SecretBookBuyCount.length)
            for (var i = 0; i < message.SecretBookBuyCount.length; ++i)
                $excelRoot.DTItemNum.encode(message.SecretBookBuyCount[i], writer.uint32(/* id 39, wireType 2 =*/314).fork()).ldelim();
        if (message.itemBag != null && message.hasOwnProperty("itemBag"))
            writer.uint32(/* id 40, wireType 0 =*/320).int32(message.itemBag);
        if (message.equipBag != null && message.hasOwnProperty("equipBag"))
            writer.uint32(/* id 41, wireType 0 =*/328).int32(message.equipBag);
        if (message.tokenBag != null && message.hasOwnProperty("tokenBag"))
            writer.uint32(/* id 42, wireType 0 =*/336).int32(message.tokenBag);
        if (message.duelBase != null && message.duelBase.length) {
            writer.uint32(/* id 43, wireType 2 =*/346).fork();
            for (var i = 0; i < message.duelBase.length; ++i)
                writer.int32(message.duelBase[i]);
            writer.ldelim();
        }
        if (message.duelTime != null && message.hasOwnProperty("duelTime"))
            writer.uint32(/* id 44, wireType 0 =*/352).int32(message.duelTime);
        if (message.inviteTime != null && message.inviteTime.length) {
            writer.uint32(/* id 45, wireType 2 =*/362).fork();
            for (var i = 0; i < message.inviteTime.length; ++i)
                writer.int32(message.inviteTime[i]);
            writer.ldelim();
        }
        if (message.matchesNumber != null && message.hasOwnProperty("matchesNumber"))
            writer.uint32(/* id 46, wireType 0 =*/368).int32(message.matchesNumber);
        if (message.initialRealscore != null && message.hasOwnProperty("initialRealscore"))
            writer.uint32(/* id 47, wireType 0 =*/376).int32(message.initialRealscore);
        if (message.initialRanknum != null && message.hasOwnProperty("initialRanknum"))
            writer.uint32(/* id 48, wireType 0 =*/384).int32(message.initialRanknum);
        if (message.combowinA != null && message.hasOwnProperty("combowinA"))
            writer.uint32(/* id 49, wireType 0 =*/392).int32(message.combowinA);
        if (message.comboloseA != null && message.hasOwnProperty("comboloseA"))
            writer.uint32(/* id 50, wireType 0 =*/400).int32(message.comboloseA);
        if (message.combowinparaMax != null && message.hasOwnProperty("combowinparaMax"))
            writer.uint32(/* id 51, wireType 0 =*/408).int32(message.combowinparaMax);
        if (message.comboloseparaMax != null && message.hasOwnProperty("comboloseparaMax"))
            writer.uint32(/* id 52, wireType 0 =*/416).int32(message.comboloseparaMax);
        if (message.enemyA != null && message.hasOwnProperty("enemyA"))
            writer.uint32(/* id 53, wireType 0 =*/424).int32(message.enemyA);
        if (message.scoreperstar != null && message.hasOwnProperty("scoreperstar"))
            writer.uint32(/* id 54, wireType 0 =*/432).int32(message.scoreperstar);
        if (message.combowinJdscore != null && message.hasOwnProperty("combowinJdscore"))
            writer.uint32(/* id 55, wireType 0 =*/440).int32(message.combowinJdscore);
        if (message.enemyJdscore != null && message.hasOwnProperty("enemyJdscore"))
            writer.uint32(/* id 56, wireType 0 =*/448).int32(message.enemyJdscore);
        if (message.initialMatchRange != null && message.hasOwnProperty("initialMatchRange"))
            writer.uint32(/* id 57, wireType 0 =*/456).int32(message.initialMatchRange);
        if (message.maxMatchRange != null && message.hasOwnProperty("maxMatchRange"))
            writer.uint32(/* id 58, wireType 0 =*/464).int32(message.maxMatchRange);
        if (message.widenRange != null && message.hasOwnProperty("widenRange"))
            writer.uint32(/* id 59, wireType 0 =*/472).int32(message.widenRange);
        if (message.widenTime != null && message.hasOwnProperty("widenTime"))
            writer.uint32(/* id 60, wireType 0 =*/480).int32(message.widenTime);
        if (message.epuipPromotionItem != null && message.epuipPromotionItem.length) {
            writer.uint32(/* id 61, wireType 2 =*/490).fork();
            for (var i = 0; i < message.epuipPromotionItem.length; ++i)
                writer.int32(message.epuipPromotionItem[i]);
            writer.ldelim();
        }
        if (message.duelTempMapList != null && message.duelTempMapList.length)
            for (var i = 0; i < message.duelTempMapList.length; ++i)
                $excelRoot.DTMapId.encode(message.duelTempMapList[i], writer.uint32(/* id 62, wireType 2 =*/498).fork()).ldelim();
        if (message.duelDayQuest != null && message.duelDayQuest.length) {
            writer.uint32(/* id 63, wireType 2 =*/506).fork();
            for (var i = 0; i < message.duelDayQuest.length; ++i)
                writer.int32(message.duelDayQuest[i]);
            writer.ldelim();
        }
        if (message.duelweekQuest != null && message.duelweekQuest.length) {
            writer.uint32(/* id 64, wireType 2 =*/514).fork();
            for (var i = 0; i < message.duelweekQuest.length; ++i)
                writer.int32(message.duelweekQuest[i]);
            writer.ldelim();
        }
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
            case 14:
                message.notices = reader.string();
                break;
            case 15:
                message.PvpMatchTime = reader.int32();
                break;
            case 16:
                message.PvpMatchTime2 = reader.int32();
                break;
            case 17:
                message.ChannelMine = reader.bool();
                break;
            case 18:
                message.pvpResultMaxCnt = reader.int32();
                break;
            case 19:
                message.shareTitle = reader.string();
                break;
            case 20:
                message.shareImgUrl = reader.string();
                break;
            case 21:
                message.shareImgId = reader.string();
                break;
            case 22:
                message.per1V10Icon = reader.int32();
                break;
            case 23:
                message.per2V10Icon = reader.int32();
                break;
            case 24:
                message.worldChatIcon = reader.int32();
                break;
            case 25:
                message.pvpIconReward = reader.int32();
                break;
            case 26:
                message.maxBagSpace = reader.int32();
                break;
            case 27:
                message.DefAvatar = reader.string();
                break;
            case 28:
                if (!(message.initItemList && message.initItemList.length))
                    message.initItemList = [];
                message.initItemList.push($excelRoot.DTFixItemNum.decode(reader, reader.uint32()));
                break;
            case 29:
                if (!(message.BestDecompose && message.BestDecompose.length))
                    message.BestDecompose = [];
                message.BestDecompose.push($excelRoot.DTDecompose.decode(reader, reader.uint32()));
                break;
            case 30:
                message.draugTempAreaLength = reader.int32();
                break;
            case 31:
                message.nameCost = $excelRoot.DTItemNum.decode(reader, reader.uint32());
                break;
            case 32:
                if (!(message.heroLevelItem && message.heroLevelItem.length))
                    message.heroLevelItem = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.heroLevelItem.push(reader.int32());
                } else
                    message.heroLevelItem.push(reader.int32());
                break;
            case 33:
                message.powerIncrease = reader.int32();
                break;
            case 34:
                message.updataDayTime = $excelRoot.DTTime.decode(reader, reader.uint32());
                break;
            case 35:
                if (!(message.baseCount && message.baseCount.length))
                    message.baseCount = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.baseCount.push(reader.int32());
                } else
                    message.baseCount.push(reader.int32());
                break;
            case 36:
                message.NumberOfChallengesPerday = reader.int32();
                break;
            case 37:
                if (!(message.eliteBuyCount && message.eliteBuyCount.length))
                    message.eliteBuyCount = [];
                message.eliteBuyCount.push($excelRoot.DTItemNum.decode(reader, reader.uint32()));
                break;
            case 38:
                if (!(message.devilBuyCount && message.devilBuyCount.length))
                    message.devilBuyCount = [];
                message.devilBuyCount.push($excelRoot.DTItemNum.decode(reader, reader.uint32()));
                break;
            case 39:
                if (!(message.SecretBookBuyCount && message.SecretBookBuyCount.length))
                    message.SecretBookBuyCount = [];
                message.SecretBookBuyCount.push($excelRoot.DTItemNum.decode(reader, reader.uint32()));
                break;
            case 40:
                message.itemBag = reader.int32();
                break;
            case 41:
                message.equipBag = reader.int32();
                break;
            case 42:
                message.tokenBag = reader.int32();
                break;
            case 43:
                if (!(message.duelBase && message.duelBase.length))
                    message.duelBase = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.duelBase.push(reader.int32());
                } else
                    message.duelBase.push(reader.int32());
                break;
            case 44:
                message.duelTime = reader.int32();
                break;
            case 45:
                if (!(message.inviteTime && message.inviteTime.length))
                    message.inviteTime = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.inviteTime.push(reader.int32());
                } else
                    message.inviteTime.push(reader.int32());
                break;
            case 46:
                message.matchesNumber = reader.int32();
                break;
            case 47:
                message.initialRealscore = reader.int32();
                break;
            case 48:
                message.initialRanknum = reader.int32();
                break;
            case 49:
                message.combowinA = reader.int32();
                break;
            case 50:
                message.comboloseA = reader.int32();
                break;
            case 51:
                message.combowinparaMax = reader.int32();
                break;
            case 52:
                message.comboloseparaMax = reader.int32();
                break;
            case 53:
                message.enemyA = reader.int32();
                break;
            case 54:
                message.scoreperstar = reader.int32();
                break;
            case 55:
                message.combowinJdscore = reader.int32();
                break;
            case 56:
                message.enemyJdscore = reader.int32();
                break;
            case 57:
                message.initialMatchRange = reader.int32();
                break;
            case 58:
                message.maxMatchRange = reader.int32();
                break;
            case 59:
                message.widenRange = reader.int32();
                break;
            case 60:
                message.widenTime = reader.int32();
                break;
            case 61:
                if (!(message.epuipPromotionItem && message.epuipPromotionItem.length))
                    message.epuipPromotionItem = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.epuipPromotionItem.push(reader.int32());
                } else
                    message.epuipPromotionItem.push(reader.int32());
                break;
            case 62:
                if (!(message.duelTempMapList && message.duelTempMapList.length))
                    message.duelTempMapList = [];
                message.duelTempMapList.push($excelRoot.DTMapId.decode(reader, reader.uint32()));
                break;
            case 63:
                if (!(message.duelDayQuest && message.duelDayQuest.length))
                    message.duelDayQuest = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.duelDayQuest.push(reader.int32());
                } else
                    message.duelDayQuest.push(reader.int32());
                break;
            case 64:
                if (!(message.duelweekQuest && message.duelweekQuest.length))
                    message.duelweekQuest = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.duelweekQuest.push(reader.int32());
                } else
                    message.duelweekQuest.push(reader.int32());
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
        if (message.notices != null && message.hasOwnProperty("notices"))
            if (!$util.isString(message.notices))
                return "notices: string expected";
        if (message.PvpMatchTime != null && message.hasOwnProperty("PvpMatchTime"))
            if (!$util.isInteger(message.PvpMatchTime))
                return "PvpMatchTime: integer expected";
        if (message.PvpMatchTime2 != null && message.hasOwnProperty("PvpMatchTime2"))
            if (!$util.isInteger(message.PvpMatchTime2))
                return "PvpMatchTime2: integer expected";
        if (message.ChannelMine != null && message.hasOwnProperty("ChannelMine"))
            if (typeof message.ChannelMine !== "boolean")
                return "ChannelMine: boolean expected";
        if (message.pvpResultMaxCnt != null && message.hasOwnProperty("pvpResultMaxCnt"))
            if (!$util.isInteger(message.pvpResultMaxCnt))
                return "pvpResultMaxCnt: integer expected";
        if (message.shareTitle != null && message.hasOwnProperty("shareTitle"))
            if (!$util.isString(message.shareTitle))
                return "shareTitle: string expected";
        if (message.shareImgUrl != null && message.hasOwnProperty("shareImgUrl"))
            if (!$util.isString(message.shareImgUrl))
                return "shareImgUrl: string expected";
        if (message.shareImgId != null && message.hasOwnProperty("shareImgId"))
            if (!$util.isString(message.shareImgId))
                return "shareImgId: string expected";
        if (message.per1V10Icon != null && message.hasOwnProperty("per1V10Icon"))
            if (!$util.isInteger(message.per1V10Icon))
                return "per1V10Icon: integer expected";
        if (message.per2V10Icon != null && message.hasOwnProperty("per2V10Icon"))
            if (!$util.isInteger(message.per2V10Icon))
                return "per2V10Icon: integer expected";
        if (message.worldChatIcon != null && message.hasOwnProperty("worldChatIcon"))
            if (!$util.isInteger(message.worldChatIcon))
                return "worldChatIcon: integer expected";
        if (message.pvpIconReward != null && message.hasOwnProperty("pvpIconReward"))
            if (!$util.isInteger(message.pvpIconReward))
                return "pvpIconReward: integer expected";
        if (message.maxBagSpace != null && message.hasOwnProperty("maxBagSpace"))
            if (!$util.isInteger(message.maxBagSpace))
                return "maxBagSpace: integer expected";
        if (message.DefAvatar != null && message.hasOwnProperty("DefAvatar"))
            if (!$util.isString(message.DefAvatar))
                return "DefAvatar: string expected";
        if (message.initItemList != null && message.hasOwnProperty("initItemList")) {
            if (!Array.isArray(message.initItemList))
                return "initItemList: array expected";
            for (var i = 0; i < message.initItemList.length; ++i) {
                var error = $excelRoot.DTFixItemNum.verify(message.initItemList[i]);
                if (error)
                    return "initItemList." + error;
            }
        }
        if (message.BestDecompose != null && message.hasOwnProperty("BestDecompose")) {
            if (!Array.isArray(message.BestDecompose))
                return "BestDecompose: array expected";
            for (var i = 0; i < message.BestDecompose.length; ++i) {
                var error = $excelRoot.DTDecompose.verify(message.BestDecompose[i]);
                if (error)
                    return "BestDecompose." + error;
            }
        }
        if (message.draugTempAreaLength != null && message.hasOwnProperty("draugTempAreaLength"))
            if (!$util.isInteger(message.draugTempAreaLength))
                return "draugTempAreaLength: integer expected";
        if (message.nameCost != null && message.hasOwnProperty("nameCost")) {
            var error = $excelRoot.DTItemNum.verify(message.nameCost);
            if (error)
                return "nameCost." + error;
        }
        if (message.heroLevelItem != null && message.hasOwnProperty("heroLevelItem")) {
            if (!Array.isArray(message.heroLevelItem))
                return "heroLevelItem: array expected";
            for (var i = 0; i < message.heroLevelItem.length; ++i)
                if (!$util.isInteger(message.heroLevelItem[i]))
                    return "heroLevelItem: integer[] expected";
        }
        if (message.powerIncrease != null && message.hasOwnProperty("powerIncrease"))
            if (!$util.isInteger(message.powerIncrease))
                return "powerIncrease: integer expected";
        if (message.updataDayTime != null && message.hasOwnProperty("updataDayTime")) {
            var error = $excelRoot.DTTime.verify(message.updataDayTime);
            if (error)
                return "updataDayTime." + error;
        }
        if (message.baseCount != null && message.hasOwnProperty("baseCount")) {
            if (!Array.isArray(message.baseCount))
                return "baseCount: array expected";
            for (var i = 0; i < message.baseCount.length; ++i)
                if (!$util.isInteger(message.baseCount[i]))
                    return "baseCount: integer[] expected";
        }
        if (message.NumberOfChallengesPerday != null && message.hasOwnProperty("NumberOfChallengesPerday"))
            if (!$util.isInteger(message.NumberOfChallengesPerday))
                return "NumberOfChallengesPerday: integer expected";
        if (message.eliteBuyCount != null && message.hasOwnProperty("eliteBuyCount")) {
            if (!Array.isArray(message.eliteBuyCount))
                return "eliteBuyCount: array expected";
            for (var i = 0; i < message.eliteBuyCount.length; ++i) {
                var error = $excelRoot.DTItemNum.verify(message.eliteBuyCount[i]);
                if (error)
                    return "eliteBuyCount." + error;
            }
        }
        if (message.devilBuyCount != null && message.hasOwnProperty("devilBuyCount")) {
            if (!Array.isArray(message.devilBuyCount))
                return "devilBuyCount: array expected";
            for (var i = 0; i < message.devilBuyCount.length; ++i) {
                var error = $excelRoot.DTItemNum.verify(message.devilBuyCount[i]);
                if (error)
                    return "devilBuyCount." + error;
            }
        }
        if (message.SecretBookBuyCount != null && message.hasOwnProperty("SecretBookBuyCount")) {
            if (!Array.isArray(message.SecretBookBuyCount))
                return "SecretBookBuyCount: array expected";
            for (var i = 0; i < message.SecretBookBuyCount.length; ++i) {
                var error = $excelRoot.DTItemNum.verify(message.SecretBookBuyCount[i]);
                if (error)
                    return "SecretBookBuyCount." + error;
            }
        }
        if (message.itemBag != null && message.hasOwnProperty("itemBag"))
            if (!$util.isInteger(message.itemBag))
                return "itemBag: integer expected";
        if (message.equipBag != null && message.hasOwnProperty("equipBag"))
            if (!$util.isInteger(message.equipBag))
                return "equipBag: integer expected";
        if (message.tokenBag != null && message.hasOwnProperty("tokenBag"))
            if (!$util.isInteger(message.tokenBag))
                return "tokenBag: integer expected";
        if (message.duelBase != null && message.hasOwnProperty("duelBase")) {
            if (!Array.isArray(message.duelBase))
                return "duelBase: array expected";
            for (var i = 0; i < message.duelBase.length; ++i)
                if (!$util.isInteger(message.duelBase[i]))
                    return "duelBase: integer[] expected";
        }
        if (message.duelTime != null && message.hasOwnProperty("duelTime"))
            if (!$util.isInteger(message.duelTime))
                return "duelTime: integer expected";
        if (message.inviteTime != null && message.hasOwnProperty("inviteTime")) {
            if (!Array.isArray(message.inviteTime))
                return "inviteTime: array expected";
            for (var i = 0; i < message.inviteTime.length; ++i)
                if (!$util.isInteger(message.inviteTime[i]))
                    return "inviteTime: integer[] expected";
        }
        if (message.matchesNumber != null && message.hasOwnProperty("matchesNumber"))
            if (!$util.isInteger(message.matchesNumber))
                return "matchesNumber: integer expected";
        if (message.initialRealscore != null && message.hasOwnProperty("initialRealscore"))
            if (!$util.isInteger(message.initialRealscore))
                return "initialRealscore: integer expected";
        if (message.initialRanknum != null && message.hasOwnProperty("initialRanknum"))
            if (!$util.isInteger(message.initialRanknum))
                return "initialRanknum: integer expected";
        if (message.combowinA != null && message.hasOwnProperty("combowinA"))
            if (!$util.isInteger(message.combowinA))
                return "combowinA: integer expected";
        if (message.comboloseA != null && message.hasOwnProperty("comboloseA"))
            if (!$util.isInteger(message.comboloseA))
                return "comboloseA: integer expected";
        if (message.combowinparaMax != null && message.hasOwnProperty("combowinparaMax"))
            if (!$util.isInteger(message.combowinparaMax))
                return "combowinparaMax: integer expected";
        if (message.comboloseparaMax != null && message.hasOwnProperty("comboloseparaMax"))
            if (!$util.isInteger(message.comboloseparaMax))
                return "comboloseparaMax: integer expected";
        if (message.enemyA != null && message.hasOwnProperty("enemyA"))
            if (!$util.isInteger(message.enemyA))
                return "enemyA: integer expected";
        if (message.scoreperstar != null && message.hasOwnProperty("scoreperstar"))
            if (!$util.isInteger(message.scoreperstar))
                return "scoreperstar: integer expected";
        if (message.combowinJdscore != null && message.hasOwnProperty("combowinJdscore"))
            if (!$util.isInteger(message.combowinJdscore))
                return "combowinJdscore: integer expected";
        if (message.enemyJdscore != null && message.hasOwnProperty("enemyJdscore"))
            if (!$util.isInteger(message.enemyJdscore))
                return "enemyJdscore: integer expected";
        if (message.initialMatchRange != null && message.hasOwnProperty("initialMatchRange"))
            if (!$util.isInteger(message.initialMatchRange))
                return "initialMatchRange: integer expected";
        if (message.maxMatchRange != null && message.hasOwnProperty("maxMatchRange"))
            if (!$util.isInteger(message.maxMatchRange))
                return "maxMatchRange: integer expected";
        if (message.widenRange != null && message.hasOwnProperty("widenRange"))
            if (!$util.isInteger(message.widenRange))
                return "widenRange: integer expected";
        if (message.widenTime != null && message.hasOwnProperty("widenTime"))
            if (!$util.isInteger(message.widenTime))
                return "widenTime: integer expected";
        if (message.epuipPromotionItem != null && message.hasOwnProperty("epuipPromotionItem")) {
            if (!Array.isArray(message.epuipPromotionItem))
                return "epuipPromotionItem: array expected";
            for (var i = 0; i < message.epuipPromotionItem.length; ++i)
                if (!$util.isInteger(message.epuipPromotionItem[i]))
                    return "epuipPromotionItem: integer[] expected";
        }
        if (message.duelTempMapList != null && message.hasOwnProperty("duelTempMapList")) {
            if (!Array.isArray(message.duelTempMapList))
                return "duelTempMapList: array expected";
            for (var i = 0; i < message.duelTempMapList.length; ++i) {
                var error = $excelRoot.DTMapId.verify(message.duelTempMapList[i]);
                if (error)
                    return "duelTempMapList." + error;
            }
        }
        if (message.duelDayQuest != null && message.hasOwnProperty("duelDayQuest")) {
            if (!Array.isArray(message.duelDayQuest))
                return "duelDayQuest: array expected";
            for (var i = 0; i < message.duelDayQuest.length; ++i)
                if (!$util.isInteger(message.duelDayQuest[i]))
                    return "duelDayQuest: integer[] expected";
        }
        if (message.duelweekQuest != null && message.hasOwnProperty("duelweekQuest")) {
            if (!Array.isArray(message.duelweekQuest))
                return "duelweekQuest: array expected";
            for (var i = 0; i < message.duelweekQuest.length; ++i)
                if (!$util.isInteger(message.duelweekQuest[i]))
                    return "duelweekQuest: integer[] expected";
        }
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
        if (object.notices != null)
            message.notices = String(object.notices);
        if (object.PvpMatchTime != null)
            message.PvpMatchTime = object.PvpMatchTime | 0;
        if (object.PvpMatchTime2 != null)
            message.PvpMatchTime2 = object.PvpMatchTime2 | 0;
        if (object.ChannelMine != null)
            message.ChannelMine = Boolean(object.ChannelMine);
        if (object.pvpResultMaxCnt != null)
            message.pvpResultMaxCnt = object.pvpResultMaxCnt | 0;
        if (object.shareTitle != null)
            message.shareTitle = String(object.shareTitle);
        if (object.shareImgUrl != null)
            message.shareImgUrl = String(object.shareImgUrl);
        if (object.shareImgId != null)
            message.shareImgId = String(object.shareImgId);
        if (object.per1V10Icon != null)
            message.per1V10Icon = object.per1V10Icon | 0;
        if (object.per2V10Icon != null)
            message.per2V10Icon = object.per2V10Icon | 0;
        if (object.worldChatIcon != null)
            message.worldChatIcon = object.worldChatIcon | 0;
        if (object.pvpIconReward != null)
            message.pvpIconReward = object.pvpIconReward | 0;
        if (object.maxBagSpace != null)
            message.maxBagSpace = object.maxBagSpace | 0;
        if (object.DefAvatar != null)
            message.DefAvatar = String(object.DefAvatar);
        if (object.initItemList) {
            if (!Array.isArray(object.initItemList))
                throw TypeError(".Global.initItemList: array expected");
            message.initItemList = [];
            for (var i = 0; i < object.initItemList.length; ++i) {
                if (typeof object.initItemList[i] !== "object")
                    throw TypeError(".Global.initItemList: object expected");
                message.initItemList[i] = $excelRoot.DTFixItemNum.fromObject(object.initItemList[i]);
            }
        }
        if (object.BestDecompose) {
            if (!Array.isArray(object.BestDecompose))
                throw TypeError(".Global.BestDecompose: array expected");
            message.BestDecompose = [];
            for (var i = 0; i < object.BestDecompose.length; ++i) {
                if (typeof object.BestDecompose[i] !== "object")
                    throw TypeError(".Global.BestDecompose: object expected");
                message.BestDecompose[i] = $excelRoot.DTDecompose.fromObject(object.BestDecompose[i]);
            }
        }
        if (object.draugTempAreaLength != null)
            message.draugTempAreaLength = object.draugTempAreaLength | 0;
        if (object.nameCost != null) {
            if (typeof object.nameCost !== "object")
                throw TypeError(".Global.nameCost: object expected");
            message.nameCost = $excelRoot.DTItemNum.fromObject(object.nameCost);
        }
        if (object.heroLevelItem) {
            if (!Array.isArray(object.heroLevelItem))
                throw TypeError(".Global.heroLevelItem: array expected");
            message.heroLevelItem = [];
            for (var i = 0; i < object.heroLevelItem.length; ++i)
                message.heroLevelItem[i] = object.heroLevelItem[i] | 0;
        }
        if (object.powerIncrease != null)
            message.powerIncrease = object.powerIncrease | 0;
        if (object.updataDayTime != null) {
            if (typeof object.updataDayTime !== "object")
                throw TypeError(".Global.updataDayTime: object expected");
            message.updataDayTime = $excelRoot.DTTime.fromObject(object.updataDayTime);
        }
        if (object.baseCount) {
            if (!Array.isArray(object.baseCount))
                throw TypeError(".Global.baseCount: array expected");
            message.baseCount = [];
            for (var i = 0; i < object.baseCount.length; ++i)
                message.baseCount[i] = object.baseCount[i] | 0;
        }
        if (object.NumberOfChallengesPerday != null)
            message.NumberOfChallengesPerday = object.NumberOfChallengesPerday | 0;
        if (object.eliteBuyCount) {
            if (!Array.isArray(object.eliteBuyCount))
                throw TypeError(".Global.eliteBuyCount: array expected");
            message.eliteBuyCount = [];
            for (var i = 0; i < object.eliteBuyCount.length; ++i) {
                if (typeof object.eliteBuyCount[i] !== "object")
                    throw TypeError(".Global.eliteBuyCount: object expected");
                message.eliteBuyCount[i] = $excelRoot.DTItemNum.fromObject(object.eliteBuyCount[i]);
            }
        }
        if (object.devilBuyCount) {
            if (!Array.isArray(object.devilBuyCount))
                throw TypeError(".Global.devilBuyCount: array expected");
            message.devilBuyCount = [];
            for (var i = 0; i < object.devilBuyCount.length; ++i) {
                if (typeof object.devilBuyCount[i] !== "object")
                    throw TypeError(".Global.devilBuyCount: object expected");
                message.devilBuyCount[i] = $excelRoot.DTItemNum.fromObject(object.devilBuyCount[i]);
            }
        }
        if (object.SecretBookBuyCount) {
            if (!Array.isArray(object.SecretBookBuyCount))
                throw TypeError(".Global.SecretBookBuyCount: array expected");
            message.SecretBookBuyCount = [];
            for (var i = 0; i < object.SecretBookBuyCount.length; ++i) {
                if (typeof object.SecretBookBuyCount[i] !== "object")
                    throw TypeError(".Global.SecretBookBuyCount: object expected");
                message.SecretBookBuyCount[i] = $excelRoot.DTItemNum.fromObject(object.SecretBookBuyCount[i]);
            }
        }
        if (object.itemBag != null)
            message.itemBag = object.itemBag | 0;
        if (object.equipBag != null)
            message.equipBag = object.equipBag | 0;
        if (object.tokenBag != null)
            message.tokenBag = object.tokenBag | 0;
        if (object.duelBase) {
            if (!Array.isArray(object.duelBase))
                throw TypeError(".Global.duelBase: array expected");
            message.duelBase = [];
            for (var i = 0; i < object.duelBase.length; ++i)
                message.duelBase[i] = object.duelBase[i] | 0;
        }
        if (object.duelTime != null)
            message.duelTime = object.duelTime | 0;
        if (object.inviteTime) {
            if (!Array.isArray(object.inviteTime))
                throw TypeError(".Global.inviteTime: array expected");
            message.inviteTime = [];
            for (var i = 0; i < object.inviteTime.length; ++i)
                message.inviteTime[i] = object.inviteTime[i] | 0;
        }
        if (object.matchesNumber != null)
            message.matchesNumber = object.matchesNumber | 0;
        if (object.initialRealscore != null)
            message.initialRealscore = object.initialRealscore | 0;
        if (object.initialRanknum != null)
            message.initialRanknum = object.initialRanknum | 0;
        if (object.combowinA != null)
            message.combowinA = object.combowinA | 0;
        if (object.comboloseA != null)
            message.comboloseA = object.comboloseA | 0;
        if (object.combowinparaMax != null)
            message.combowinparaMax = object.combowinparaMax | 0;
        if (object.comboloseparaMax != null)
            message.comboloseparaMax = object.comboloseparaMax | 0;
        if (object.enemyA != null)
            message.enemyA = object.enemyA | 0;
        if (object.scoreperstar != null)
            message.scoreperstar = object.scoreperstar | 0;
        if (object.combowinJdscore != null)
            message.combowinJdscore = object.combowinJdscore | 0;
        if (object.enemyJdscore != null)
            message.enemyJdscore = object.enemyJdscore | 0;
        if (object.initialMatchRange != null)
            message.initialMatchRange = object.initialMatchRange | 0;
        if (object.maxMatchRange != null)
            message.maxMatchRange = object.maxMatchRange | 0;
        if (object.widenRange != null)
            message.widenRange = object.widenRange | 0;
        if (object.widenTime != null)
            message.widenTime = object.widenTime | 0;
        if (object.epuipPromotionItem) {
            if (!Array.isArray(object.epuipPromotionItem))
                throw TypeError(".Global.epuipPromotionItem: array expected");
            message.epuipPromotionItem = [];
            for (var i = 0; i < object.epuipPromotionItem.length; ++i)
                message.epuipPromotionItem[i] = object.epuipPromotionItem[i] | 0;
        }
        if (object.duelTempMapList) {
            if (!Array.isArray(object.duelTempMapList))
                throw TypeError(".Global.duelTempMapList: array expected");
            message.duelTempMapList = [];
            for (var i = 0; i < object.duelTempMapList.length; ++i) {
                if (typeof object.duelTempMapList[i] !== "object")
                    throw TypeError(".Global.duelTempMapList: object expected");
                message.duelTempMapList[i] = $excelRoot.DTMapId.fromObject(object.duelTempMapList[i]);
            }
        }
        if (object.duelDayQuest) {
            if (!Array.isArray(object.duelDayQuest))
                throw TypeError(".Global.duelDayQuest: array expected");
            message.duelDayQuest = [];
            for (var i = 0; i < object.duelDayQuest.length; ++i)
                message.duelDayQuest[i] = object.duelDayQuest[i] | 0;
        }
        if (object.duelweekQuest) {
            if (!Array.isArray(object.duelweekQuest))
                throw TypeError(".Global.duelweekQuest: array expected");
            message.duelweekQuest = [];
            for (var i = 0; i < object.duelweekQuest.length; ++i)
                message.duelweekQuest[i] = object.duelweekQuest[i] | 0;
        }
        return message;
    };
    Global.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.initItemList = [];
            object.BestDecompose = [];
            object.heroLevelItem = [];
            object.baseCount = [];
            object.eliteBuyCount = [];
            object.devilBuyCount = [];
            object.SecretBookBuyCount = [];
            object.duelBase = [];
            object.inviteTime = [];
            object.epuipPromotionItem = [];
            object.duelTempMapList = [];
            object.duelDayQuest = [];
            object.duelweekQuest = [];
        }
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
            object.notices = "";
            object.PvpMatchTime = 0;
            object.PvpMatchTime2 = 0;
            object.ChannelMine = false;
            object.pvpResultMaxCnt = 0;
            object.shareTitle = "";
            object.shareImgUrl = "";
            object.shareImgId = "";
            object.per1V10Icon = 0;
            object.per2V10Icon = 0;
            object.worldChatIcon = 0;
            object.pvpIconReward = 0;
            object.maxBagSpace = 0;
            object.DefAvatar = "";
            object.draugTempAreaLength = 0;
            object.nameCost = null;
            object.powerIncrease = 0;
            object.updataDayTime = null;
            object.NumberOfChallengesPerday = 0;
            object.itemBag = 0;
            object.equipBag = 0;
            object.tokenBag = 0;
            object.duelTime = 0;
            object.matchesNumber = 0;
            object.initialRealscore = 0;
            object.initialRanknum = 0;
            object.combowinA = 0;
            object.comboloseA = 0;
            object.combowinparaMax = 0;
            object.comboloseparaMax = 0;
            object.enemyA = 0;
            object.scoreperstar = 0;
            object.combowinJdscore = 0;
            object.enemyJdscore = 0;
            object.initialMatchRange = 0;
            object.maxMatchRange = 0;
            object.widenRange = 0;
            object.widenTime = 0;
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
        if (message.notices != null && message.hasOwnProperty("notices"))
            object.notices = message.notices;
        if (message.PvpMatchTime != null && message.hasOwnProperty("PvpMatchTime"))
            object.PvpMatchTime = message.PvpMatchTime;
        if (message.PvpMatchTime2 != null && message.hasOwnProperty("PvpMatchTime2"))
            object.PvpMatchTime2 = message.PvpMatchTime2;
        if (message.ChannelMine != null && message.hasOwnProperty("ChannelMine"))
            object.ChannelMine = message.ChannelMine;
        if (message.pvpResultMaxCnt != null && message.hasOwnProperty("pvpResultMaxCnt"))
            object.pvpResultMaxCnt = message.pvpResultMaxCnt;
        if (message.shareTitle != null && message.hasOwnProperty("shareTitle"))
            object.shareTitle = message.shareTitle;
        if (message.shareImgUrl != null && message.hasOwnProperty("shareImgUrl"))
            object.shareImgUrl = message.shareImgUrl;
        if (message.shareImgId != null && message.hasOwnProperty("shareImgId"))
            object.shareImgId = message.shareImgId;
        if (message.per1V10Icon != null && message.hasOwnProperty("per1V10Icon"))
            object.per1V10Icon = message.per1V10Icon;
        if (message.per2V10Icon != null && message.hasOwnProperty("per2V10Icon"))
            object.per2V10Icon = message.per2V10Icon;
        if (message.worldChatIcon != null && message.hasOwnProperty("worldChatIcon"))
            object.worldChatIcon = message.worldChatIcon;
        if (message.pvpIconReward != null && message.hasOwnProperty("pvpIconReward"))
            object.pvpIconReward = message.pvpIconReward;
        if (message.maxBagSpace != null && message.hasOwnProperty("maxBagSpace"))
            object.maxBagSpace = message.maxBagSpace;
        if (message.DefAvatar != null && message.hasOwnProperty("DefAvatar"))
            object.DefAvatar = message.DefAvatar;
        if (message.initItemList && message.initItemList.length) {
            object.initItemList = [];
            for (var j = 0; j < message.initItemList.length; ++j)
                object.initItemList[j] = $excelRoot.DTFixItemNum.toObject(message.initItemList[j], options);
        }
        if (message.BestDecompose && message.BestDecompose.length) {
            object.BestDecompose = [];
            for (var j = 0; j < message.BestDecompose.length; ++j)
                object.BestDecompose[j] = $excelRoot.DTDecompose.toObject(message.BestDecompose[j], options);
        }
        if (message.draugTempAreaLength != null && message.hasOwnProperty("draugTempAreaLength"))
            object.draugTempAreaLength = message.draugTempAreaLength;
        if (message.nameCost != null && message.hasOwnProperty("nameCost"))
            object.nameCost = $excelRoot.DTItemNum.toObject(message.nameCost, options);
        if (message.heroLevelItem && message.heroLevelItem.length) {
            object.heroLevelItem = [];
            for (var j = 0; j < message.heroLevelItem.length; ++j)
                object.heroLevelItem[j] = message.heroLevelItem[j];
        }
        if (message.powerIncrease != null && message.hasOwnProperty("powerIncrease"))
            object.powerIncrease = message.powerIncrease;
        if (message.updataDayTime != null && message.hasOwnProperty("updataDayTime"))
            object.updataDayTime = $excelRoot.DTTime.toObject(message.updataDayTime, options);
        if (message.baseCount && message.baseCount.length) {
            object.baseCount = [];
            for (var j = 0; j < message.baseCount.length; ++j)
                object.baseCount[j] = message.baseCount[j];
        }
        if (message.NumberOfChallengesPerday != null && message.hasOwnProperty("NumberOfChallengesPerday"))
            object.NumberOfChallengesPerday = message.NumberOfChallengesPerday;
        if (message.eliteBuyCount && message.eliteBuyCount.length) {
            object.eliteBuyCount = [];
            for (var j = 0; j < message.eliteBuyCount.length; ++j)
                object.eliteBuyCount[j] = $excelRoot.DTItemNum.toObject(message.eliteBuyCount[j], options);
        }
        if (message.devilBuyCount && message.devilBuyCount.length) {
            object.devilBuyCount = [];
            for (var j = 0; j < message.devilBuyCount.length; ++j)
                object.devilBuyCount[j] = $excelRoot.DTItemNum.toObject(message.devilBuyCount[j], options);
        }
        if (message.SecretBookBuyCount && message.SecretBookBuyCount.length) {
            object.SecretBookBuyCount = [];
            for (var j = 0; j < message.SecretBookBuyCount.length; ++j)
                object.SecretBookBuyCount[j] = $excelRoot.DTItemNum.toObject(message.SecretBookBuyCount[j], options);
        }
        if (message.itemBag != null && message.hasOwnProperty("itemBag"))
            object.itemBag = message.itemBag;
        if (message.equipBag != null && message.hasOwnProperty("equipBag"))
            object.equipBag = message.equipBag;
        if (message.tokenBag != null && message.hasOwnProperty("tokenBag"))
            object.tokenBag = message.tokenBag;
        if (message.duelBase && message.duelBase.length) {
            object.duelBase = [];
            for (var j = 0; j < message.duelBase.length; ++j)
                object.duelBase[j] = message.duelBase[j];
        }
        if (message.duelTime != null && message.hasOwnProperty("duelTime"))
            object.duelTime = message.duelTime;
        if (message.inviteTime && message.inviteTime.length) {
            object.inviteTime = [];
            for (var j = 0; j < message.inviteTime.length; ++j)
                object.inviteTime[j] = message.inviteTime[j];
        }
        if (message.matchesNumber != null && message.hasOwnProperty("matchesNumber"))
            object.matchesNumber = message.matchesNumber;
        if (message.initialRealscore != null && message.hasOwnProperty("initialRealscore"))
            object.initialRealscore = message.initialRealscore;
        if (message.initialRanknum != null && message.hasOwnProperty("initialRanknum"))
            object.initialRanknum = message.initialRanknum;
        if (message.combowinA != null && message.hasOwnProperty("combowinA"))
            object.combowinA = message.combowinA;
        if (message.comboloseA != null && message.hasOwnProperty("comboloseA"))
            object.comboloseA = message.comboloseA;
        if (message.combowinparaMax != null && message.hasOwnProperty("combowinparaMax"))
            object.combowinparaMax = message.combowinparaMax;
        if (message.comboloseparaMax != null && message.hasOwnProperty("comboloseparaMax"))
            object.comboloseparaMax = message.comboloseparaMax;
        if (message.enemyA != null && message.hasOwnProperty("enemyA"))
            object.enemyA = message.enemyA;
        if (message.scoreperstar != null && message.hasOwnProperty("scoreperstar"))
            object.scoreperstar = message.scoreperstar;
        if (message.combowinJdscore != null && message.hasOwnProperty("combowinJdscore"))
            object.combowinJdscore = message.combowinJdscore;
        if (message.enemyJdscore != null && message.hasOwnProperty("enemyJdscore"))
            object.enemyJdscore = message.enemyJdscore;
        if (message.initialMatchRange != null && message.hasOwnProperty("initialMatchRange"))
            object.initialMatchRange = message.initialMatchRange;
        if (message.maxMatchRange != null && message.hasOwnProperty("maxMatchRange"))
            object.maxMatchRange = message.maxMatchRange;
        if (message.widenRange != null && message.hasOwnProperty("widenRange"))
            object.widenRange = message.widenRange;
        if (message.widenTime != null && message.hasOwnProperty("widenTime"))
            object.widenTime = message.widenTime;
        if (message.epuipPromotionItem && message.epuipPromotionItem.length) {
            object.epuipPromotionItem = [];
            for (var j = 0; j < message.epuipPromotionItem.length; ++j)
                object.epuipPromotionItem[j] = message.epuipPromotionItem[j];
        }
        if (message.duelTempMapList && message.duelTempMapList.length) {
            object.duelTempMapList = [];
            for (var j = 0; j < message.duelTempMapList.length; ++j)
                object.duelTempMapList[j] = $excelRoot.DTMapId.toObject(message.duelTempMapList[j], options);
        }
        if (message.duelDayQuest && message.duelDayQuest.length) {
            object.duelDayQuest = [];
            for (var j = 0; j < message.duelDayQuest.length; ++j)
                object.duelDayQuest[j] = message.duelDayQuest[j];
        }
        if (message.duelweekQuest && message.duelweekQuest.length) {
            object.duelweekQuest = [];
            for (var j = 0; j < message.duelweekQuest.length; ++j)
                object.duelweekQuest[j] = message.duelweekQuest[j];
        }
        return object;
    };
    Global.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Global;
})();
$excelRoot.Activities = (function() {
    function Activities(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Activities.prototype.id = 0;
    Activities.prototype.type = 0;
    Activities.prototype.name = "";
    Activities.prototype.startType = 0;
    Activities.prototype.levelReq = 0;
    Activities.prototype.blockReq = 0;
    Activities.prototype.start = 0;
    Activities.prototype.duration = 0;
    Activities.prototype.icon = 0;
    Activities.prototype.iconChosen = 0;
    Activities.prototype.info = "";
    Activities.create = function create(properties) {
        return new Activities(properties);
    };
    Activities.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
        if (message.startType != null && message.hasOwnProperty("startType"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.startType);
        if (message.levelReq != null && message.hasOwnProperty("levelReq"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.levelReq);
        if (message.blockReq != null && message.hasOwnProperty("blockReq"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.blockReq);
        if (message.start != null && message.hasOwnProperty("start"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.start);
        if (message.duration != null && message.hasOwnProperty("duration"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.duration);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.icon);
        if (message.iconChosen != null && message.hasOwnProperty("iconChosen"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.iconChosen);
        if (message.info != null && message.hasOwnProperty("info"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.info);
        return writer;
    };
    Activities.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Activities.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Activities();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.type = reader.int32();
                break;
            case 3:
                message.name = reader.string();
                break;
            case 4:
                message.startType = reader.int32();
                break;
            case 5:
                message.levelReq = reader.int32();
                break;
            case 6:
                message.blockReq = reader.int32();
                break;
            case 7:
                message.start = reader.int32();
                break;
            case 8:
                message.duration = reader.int32();
                break;
            case 9:
                message.icon = reader.int32();
                break;
            case 10:
                message.iconChosen = reader.int32();
                break;
            case 11:
                message.info = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Activities.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Activities.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.startType != null && message.hasOwnProperty("startType"))
            if (!$util.isInteger(message.startType))
                return "startType: integer expected";
        if (message.levelReq != null && message.hasOwnProperty("levelReq"))
            if (!$util.isInteger(message.levelReq))
                return "levelReq: integer expected";
        if (message.blockReq != null && message.hasOwnProperty("blockReq"))
            if (!$util.isInteger(message.blockReq))
                return "blockReq: integer expected";
        if (message.start != null && message.hasOwnProperty("start"))
            if (!$util.isInteger(message.start))
                return "start: integer expected";
        if (message.duration != null && message.hasOwnProperty("duration"))
            if (!$util.isInteger(message.duration))
                return "duration: integer expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isInteger(message.icon))
                return "icon: integer expected";
        if (message.iconChosen != null && message.hasOwnProperty("iconChosen"))
            if (!$util.isInteger(message.iconChosen))
                return "iconChosen: integer expected";
        if (message.info != null && message.hasOwnProperty("info"))
            if (!$util.isString(message.info))
                return "info: string expected";
        return null;
    };
    Activities.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Activities)
            return object;
        var message = new $excelRoot.Activities();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.type != null)
            message.type = object.type | 0;
        if (object.name != null)
            message.name = String(object.name);
        if (object.startType != null)
            message.startType = object.startType | 0;
        if (object.levelReq != null)
            message.levelReq = object.levelReq | 0;
        if (object.blockReq != null)
            message.blockReq = object.blockReq | 0;
        if (object.start != null)
            message.start = object.start | 0;
        if (object.duration != null)
            message.duration = object.duration | 0;
        if (object.icon != null)
            message.icon = object.icon | 0;
        if (object.iconChosen != null)
            message.iconChosen = object.iconChosen | 0;
        if (object.info != null)
            message.info = String(object.info);
        return message;
    };
    Activities.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.type = 0;
            object.name = "";
            object.startType = 0;
            object.levelReq = 0;
            object.blockReq = 0;
            object.start = 0;
            object.duration = 0;
            object.icon = 0;
            object.iconChosen = 0;
            object.info = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.startType != null && message.hasOwnProperty("startType"))
            object.startType = message.startType;
        if (message.levelReq != null && message.hasOwnProperty("levelReq"))
            object.levelReq = message.levelReq;
        if (message.blockReq != null && message.hasOwnProperty("blockReq"))
            object.blockReq = message.blockReq;
        if (message.start != null && message.hasOwnProperty("start"))
            object.start = message.start;
        if (message.duration != null && message.hasOwnProperty("duration"))
            object.duration = message.duration;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.iconChosen != null && message.hasOwnProperty("iconChosen"))
            object.iconChosen = message.iconChosen;
        if (message.info != null && message.hasOwnProperty("info"))
            object.info = message.info;
        return object;
    };
    Activities.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Activities;
})();
$excelRoot.Avatar = (function() {
    function Avatar(properties) {
        this.spinePos = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Avatar.prototype.id = 0;
    Avatar.prototype.zhCnName = "";
    Avatar.prototype.zhCnIcon = "";
    Avatar.prototype.card = "";
    Avatar.prototype.drawing = "";
    Avatar.prototype.spine = "";
    Avatar.prototype.spinePos = $util.emptyArray;
    Avatar.prototype.heroTeam = "";
    Avatar.prototype.heroName = "";
    Avatar.prototype.bodyIcon = "";
    Avatar.prototype.halfIcon = "";
    Avatar.prototype.zhCnIconDes = "";
    Avatar.prototype.heroCutin = "";
    Avatar.prototype.enIcon = "";
    Avatar.prototype.pieceIcon = "";
    Avatar.prototype.modelBones = "";
    Avatar.prototype.bgPic = "";
    Avatar.prototype.coVector = null;
    Avatar.create = function create(properties) {
        return new Avatar(properties);
    };
    Avatar.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.zhCnName);
        if (message.zhCnIcon != null && message.hasOwnProperty("zhCnIcon"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.zhCnIcon);
        if (message.card != null && message.hasOwnProperty("card"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.card);
        if (message.drawing != null && message.hasOwnProperty("drawing"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.drawing);
        if (message.spine != null && message.hasOwnProperty("spine"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.spine);
        if (message.spinePos != null && message.spinePos.length) {
            writer.uint32(/* id 7, wireType 2 =*/58).fork();
            for (var i = 0; i < message.spinePos.length; ++i)
                writer.int32(message.spinePos[i]);
            writer.ldelim();
        }
        if (message.heroTeam != null && message.hasOwnProperty("heroTeam"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.heroTeam);
        if (message.heroName != null && message.hasOwnProperty("heroName"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.heroName);
        if (message.bodyIcon != null && message.hasOwnProperty("bodyIcon"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.bodyIcon);
        if (message.halfIcon != null && message.hasOwnProperty("halfIcon"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.halfIcon);
        if (message.zhCnIconDes != null && message.hasOwnProperty("zhCnIconDes"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.zhCnIconDes);
        if (message.heroCutin != null && message.hasOwnProperty("heroCutin"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.heroCutin);
        if (message.enIcon != null && message.hasOwnProperty("enIcon"))
            writer.uint32(/* id 14, wireType 2 =*/114).string(message.enIcon);
        if (message.pieceIcon != null && message.hasOwnProperty("pieceIcon"))
            writer.uint32(/* id 15, wireType 2 =*/122).string(message.pieceIcon);
        if (message.modelBones != null && message.hasOwnProperty("modelBones"))
            writer.uint32(/* id 16, wireType 2 =*/130).string(message.modelBones);
        if (message.bgPic != null && message.hasOwnProperty("bgPic"))
            writer.uint32(/* id 17, wireType 2 =*/138).string(message.bgPic);
        if (message.coVector != null && message.hasOwnProperty("coVector"))
            $excelRoot.DTVector2.encode(message.coVector, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        return writer;
    };
    Avatar.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Avatar.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Avatar();
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
                message.zhCnIcon = reader.string();
                break;
            case 4:
                message.card = reader.string();
                break;
            case 5:
                message.drawing = reader.string();
                break;
            case 6:
                message.spine = reader.string();
                break;
            case 7:
                if (!(message.spinePos && message.spinePos.length))
                    message.spinePos = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.spinePos.push(reader.int32());
                } else
                    message.spinePos.push(reader.int32());
                break;
            case 8:
                message.heroTeam = reader.string();
                break;
            case 9:
                message.heroName = reader.string();
                break;
            case 10:
                message.bodyIcon = reader.string();
                break;
            case 11:
                message.halfIcon = reader.string();
                break;
            case 12:
                message.zhCnIconDes = reader.string();
                break;
            case 13:
                message.heroCutin = reader.string();
                break;
            case 14:
                message.enIcon = reader.string();
                break;
            case 15:
                message.pieceIcon = reader.string();
                break;
            case 16:
                message.modelBones = reader.string();
                break;
            case 17:
                message.bgPic = reader.string();
                break;
            case 18:
                message.coVector = $excelRoot.DTVector2.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Avatar.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Avatar.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.zhCnIcon != null && message.hasOwnProperty("zhCnIcon"))
            if (!$util.isString(message.zhCnIcon))
                return "zhCnIcon: string expected";
        if (message.card != null && message.hasOwnProperty("card"))
            if (!$util.isString(message.card))
                return "card: string expected";
        if (message.drawing != null && message.hasOwnProperty("drawing"))
            if (!$util.isString(message.drawing))
                return "drawing: string expected";
        if (message.spine != null && message.hasOwnProperty("spine"))
            if (!$util.isString(message.spine))
                return "spine: string expected";
        if (message.spinePos != null && message.hasOwnProperty("spinePos")) {
            if (!Array.isArray(message.spinePos))
                return "spinePos: array expected";
            for (var i = 0; i < message.spinePos.length; ++i)
                if (!$util.isInteger(message.spinePos[i]))
                    return "spinePos: integer[] expected";
        }
        if (message.heroTeam != null && message.hasOwnProperty("heroTeam"))
            if (!$util.isString(message.heroTeam))
                return "heroTeam: string expected";
        if (message.heroName != null && message.hasOwnProperty("heroName"))
            if (!$util.isString(message.heroName))
                return "heroName: string expected";
        if (message.bodyIcon != null && message.hasOwnProperty("bodyIcon"))
            if (!$util.isString(message.bodyIcon))
                return "bodyIcon: string expected";
        if (message.halfIcon != null && message.hasOwnProperty("halfIcon"))
            if (!$util.isString(message.halfIcon))
                return "halfIcon: string expected";
        if (message.zhCnIconDes != null && message.hasOwnProperty("zhCnIconDes"))
            if (!$util.isString(message.zhCnIconDes))
                return "zhCnIconDes: string expected";
        if (message.heroCutin != null && message.hasOwnProperty("heroCutin"))
            if (!$util.isString(message.heroCutin))
                return "heroCutin: string expected";
        if (message.enIcon != null && message.hasOwnProperty("enIcon"))
            if (!$util.isString(message.enIcon))
                return "enIcon: string expected";
        if (message.pieceIcon != null && message.hasOwnProperty("pieceIcon"))
            if (!$util.isString(message.pieceIcon))
                return "pieceIcon: string expected";
        if (message.modelBones != null && message.hasOwnProperty("modelBones"))
            if (!$util.isString(message.modelBones))
                return "modelBones: string expected";
        if (message.bgPic != null && message.hasOwnProperty("bgPic"))
            if (!$util.isString(message.bgPic))
                return "bgPic: string expected";
        if (message.coVector != null && message.hasOwnProperty("coVector")) {
            var error = $excelRoot.DTVector2.verify(message.coVector);
            if (error)
                return "coVector." + error;
        }
        return null;
    };
    Avatar.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Avatar)
            return object;
        var message = new $excelRoot.Avatar();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.zhCnIcon != null)
            message.zhCnIcon = String(object.zhCnIcon);
        if (object.card != null)
            message.card = String(object.card);
        if (object.drawing != null)
            message.drawing = String(object.drawing);
        if (object.spine != null)
            message.spine = String(object.spine);
        if (object.spinePos) {
            if (!Array.isArray(object.spinePos))
                throw TypeError(".Avatar.spinePos: array expected");
            message.spinePos = [];
            for (var i = 0; i < object.spinePos.length; ++i)
                message.spinePos[i] = object.spinePos[i] | 0;
        }
        if (object.heroTeam != null)
            message.heroTeam = String(object.heroTeam);
        if (object.heroName != null)
            message.heroName = String(object.heroName);
        if (object.bodyIcon != null)
            message.bodyIcon = String(object.bodyIcon);
        if (object.halfIcon != null)
            message.halfIcon = String(object.halfIcon);
        if (object.zhCnIconDes != null)
            message.zhCnIconDes = String(object.zhCnIconDes);
        if (object.heroCutin != null)
            message.heroCutin = String(object.heroCutin);
        if (object.enIcon != null)
            message.enIcon = String(object.enIcon);
        if (object.pieceIcon != null)
            message.pieceIcon = String(object.pieceIcon);
        if (object.modelBones != null)
            message.modelBones = String(object.modelBones);
        if (object.bgPic != null)
            message.bgPic = String(object.bgPic);
        if (object.coVector != null) {
            if (typeof object.coVector !== "object")
                throw TypeError(".Avatar.coVector: object expected");
            message.coVector = $excelRoot.DTVector2.fromObject(object.coVector);
        }
        return message;
    };
    Avatar.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.spinePos = [];
        if (options.defaults) {
            object.id = 0;
            object.zhCnName = "";
            object.zhCnIcon = "";
            object.card = "";
            object.drawing = "";
            object.spine = "";
            object.heroTeam = "";
            object.heroName = "";
            object.bodyIcon = "";
            object.halfIcon = "";
            object.zhCnIconDes = "";
            object.heroCutin = "";
            object.enIcon = "";
            object.pieceIcon = "";
            object.modelBones = "";
            object.bgPic = "";
            object.coVector = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.zhCnIcon != null && message.hasOwnProperty("zhCnIcon"))
            object.zhCnIcon = message.zhCnIcon;
        if (message.card != null && message.hasOwnProperty("card"))
            object.card = message.card;
        if (message.drawing != null && message.hasOwnProperty("drawing"))
            object.drawing = message.drawing;
        if (message.spine != null && message.hasOwnProperty("spine"))
            object.spine = message.spine;
        if (message.spinePos && message.spinePos.length) {
            object.spinePos = [];
            for (var j = 0; j < message.spinePos.length; ++j)
                object.spinePos[j] = message.spinePos[j];
        }
        if (message.heroTeam != null && message.hasOwnProperty("heroTeam"))
            object.heroTeam = message.heroTeam;
        if (message.heroName != null && message.hasOwnProperty("heroName"))
            object.heroName = message.heroName;
        if (message.bodyIcon != null && message.hasOwnProperty("bodyIcon"))
            object.bodyIcon = message.bodyIcon;
        if (message.halfIcon != null && message.hasOwnProperty("halfIcon"))
            object.halfIcon = message.halfIcon;
        if (message.zhCnIconDes != null && message.hasOwnProperty("zhCnIconDes"))
            object.zhCnIconDes = message.zhCnIconDes;
        if (message.heroCutin != null && message.hasOwnProperty("heroCutin"))
            object.heroCutin = message.heroCutin;
        if (message.enIcon != null && message.hasOwnProperty("enIcon"))
            object.enIcon = message.enIcon;
        if (message.pieceIcon != null && message.hasOwnProperty("pieceIcon"))
            object.pieceIcon = message.pieceIcon;
        if (message.modelBones != null && message.hasOwnProperty("modelBones"))
            object.modelBones = message.modelBones;
        if (message.bgPic != null && message.hasOwnProperty("bgPic"))
            object.bgPic = message.bgPic;
        if (message.coVector != null && message.hasOwnProperty("coVector"))
            object.coVector = $excelRoot.DTVector2.toObject(message.coVector, options);
        return object;
    };
    Avatar.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Avatar;
})();
$excelRoot.Bag = (function() {
    function Bag(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Bag.prototype.id = 0;
    Bag.prototype.itemId = 0;
    Bag.prototype.level = 0;
    Bag.prototype.sellPrice = 0;
    Bag.prototype.stackNumber = 0;
    Bag.create = function create(properties) {
        return new Bag(properties);
    };
    Bag.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.itemId != null && message.hasOwnProperty("itemId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.itemId);
        if (message.level != null && message.hasOwnProperty("level"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.level);
        if (message.sellPrice != null && message.hasOwnProperty("sellPrice"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sellPrice);
        if (message.stackNumber != null && message.hasOwnProperty("stackNumber"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.stackNumber);
        return writer;
    };
    Bag.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Bag.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Bag();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.itemId = reader.int32();
                break;
            case 3:
                message.level = reader.int32();
                break;
            case 4:
                message.sellPrice = reader.int32();
                break;
            case 5:
                message.stackNumber = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Bag.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Bag.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.itemId != null && message.hasOwnProperty("itemId"))
            if (!$util.isInteger(message.itemId))
                return "itemId: integer expected";
        if (message.level != null && message.hasOwnProperty("level"))
            if (!$util.isInteger(message.level))
                return "level: integer expected";
        if (message.sellPrice != null && message.hasOwnProperty("sellPrice"))
            if (!$util.isInteger(message.sellPrice))
                return "sellPrice: integer expected";
        if (message.stackNumber != null && message.hasOwnProperty("stackNumber"))
            if (!$util.isInteger(message.stackNumber))
                return "stackNumber: integer expected";
        return null;
    };
    Bag.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Bag)
            return object;
        var message = new $excelRoot.Bag();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.itemId != null)
            message.itemId = object.itemId | 0;
        if (object.level != null)
            message.level = object.level | 0;
        if (object.sellPrice != null)
            message.sellPrice = object.sellPrice | 0;
        if (object.stackNumber != null)
            message.stackNumber = object.stackNumber | 0;
        return message;
    };
    Bag.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.itemId = 0;
            object.level = 0;
            object.sellPrice = 0;
            object.stackNumber = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.itemId != null && message.hasOwnProperty("itemId"))
            object.itemId = message.itemId;
        if (message.level != null && message.hasOwnProperty("level"))
            object.level = message.level;
        if (message.sellPrice != null && message.hasOwnProperty("sellPrice"))
            object.sellPrice = message.sellPrice;
        if (message.stackNumber != null && message.hasOwnProperty("stackNumber"))
            object.stackNumber = message.stackNumber;
        return object;
    };
    Bag.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Bag;
})();
$excelRoot.BattleFormula = (function() {
    function BattleFormula(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    BattleFormula.prototype.id = 0;
    BattleFormula.prototype.ParaName = "";
    BattleFormula.prototype.Tips = "";
    BattleFormula.prototype.ParaValue = 0;
    BattleFormula.prototype.ValueType = 0;
    BattleFormula.create = function create(properties) {
        return new BattleFormula(properties);
    };
    BattleFormula.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.ParaName != null && message.hasOwnProperty("ParaName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.ParaName);
        if (message.Tips != null && message.hasOwnProperty("Tips"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.Tips);
        if (message.ParaValue != null && message.hasOwnProperty("ParaValue"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ParaValue);
        if (message.ValueType != null && message.hasOwnProperty("ValueType"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.ValueType);
        return writer;
    };
    BattleFormula.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    BattleFormula.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.BattleFormula();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.ParaName = reader.string();
                break;
            case 3:
                message.Tips = reader.string();
                break;
            case 4:
                message.ParaValue = reader.int32();
                break;
            case 5:
                message.ValueType = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    BattleFormula.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    BattleFormula.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.ParaName != null && message.hasOwnProperty("ParaName"))
            if (!$util.isString(message.ParaName))
                return "ParaName: string expected";
        if (message.Tips != null && message.hasOwnProperty("Tips"))
            if (!$util.isString(message.Tips))
                return "Tips: string expected";
        if (message.ParaValue != null && message.hasOwnProperty("ParaValue"))
            if (!$util.isInteger(message.ParaValue))
                return "ParaValue: integer expected";
        if (message.ValueType != null && message.hasOwnProperty("ValueType"))
            if (!$util.isInteger(message.ValueType))
                return "ValueType: integer expected";
        return null;
    };
    BattleFormula.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.BattleFormula)
            return object;
        var message = new $excelRoot.BattleFormula();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.ParaName != null)
            message.ParaName = String(object.ParaName);
        if (object.Tips != null)
            message.Tips = String(object.Tips);
        if (object.ParaValue != null)
            message.ParaValue = object.ParaValue | 0;
        if (object.ValueType != null)
            message.ValueType = object.ValueType | 0;
        return message;
    };
    BattleFormula.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.ParaName = "";
            object.Tips = "";
            object.ParaValue = 0;
            object.ValueType = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.ParaName != null && message.hasOwnProperty("ParaName"))
            object.ParaName = message.ParaName;
        if (message.Tips != null && message.hasOwnProperty("Tips"))
            object.Tips = message.Tips;
        if (message.ParaValue != null && message.hasOwnProperty("ParaValue"))
            object.ParaValue = message.ParaValue;
        if (message.ValueType != null && message.hasOwnProperty("ValueType"))
            object.ValueType = message.ValueType;
        return object;
    };
    BattleFormula.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return BattleFormula;
})();
$excelRoot.Chapter = (function() {
    function Chapter(properties) {
        this.starReward = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Chapter.prototype.id = 0;
    Chapter.prototype.type = 0;
    Chapter.prototype.zhCnName = "";
    Chapter.prototype.icon = 0;
    Chapter.prototype.starReward = $util.emptyArray;
    Chapter.create = function create(properties) {
        return new Chapter(properties);
    };
    Chapter.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.zhCnName);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.icon);
        if (message.starReward != null && message.starReward.length)
            for (var i = 0; i < message.starReward.length; ++i)
                $excelRoot.DTStarReward.encode(message.starReward[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };
    Chapter.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Chapter.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Chapter();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.type = reader.int32();
                break;
            case 3:
                message.zhCnName = reader.string();
                break;
            case 4:
                message.icon = reader.int32();
                break;
            case 5:
                if (!(message.starReward && message.starReward.length))
                    message.starReward = [];
                message.starReward.push($excelRoot.DTStarReward.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Chapter.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Chapter.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isInteger(message.icon))
                return "icon: integer expected";
        if (message.starReward != null && message.hasOwnProperty("starReward")) {
            if (!Array.isArray(message.starReward))
                return "starReward: array expected";
            for (var i = 0; i < message.starReward.length; ++i) {
                var error = $excelRoot.DTStarReward.verify(message.starReward[i]);
                if (error)
                    return "starReward." + error;
            }
        }
        return null;
    };
    Chapter.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Chapter)
            return object;
        var message = new $excelRoot.Chapter();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.type != null)
            message.type = object.type | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.icon != null)
            message.icon = object.icon | 0;
        if (object.starReward) {
            if (!Array.isArray(object.starReward))
                throw TypeError(".Chapter.starReward: array expected");
            message.starReward = [];
            for (var i = 0; i < object.starReward.length; ++i) {
                if (typeof object.starReward[i] !== "object")
                    throw TypeError(".Chapter.starReward: object expected");
                message.starReward[i] = $excelRoot.DTStarReward.fromObject(object.starReward[i]);
            }
        }
        return message;
    };
    Chapter.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.starReward = [];
        if (options.defaults) {
            object.id = 0;
            object.type = 0;
            object.zhCnName = "";
            object.icon = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.starReward && message.starReward.length) {
            object.starReward = [];
            for (var j = 0; j < message.starReward.length; ++j)
                object.starReward[j] = $excelRoot.DTStarReward.toObject(message.starReward[j], options);
        }
        return object;
    };
    Chapter.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Chapter;
})();
$excelRoot.CheckPoint = (function() {
    function CheckPoint(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    CheckPoint.prototype.id = 0;
    CheckPoint.prototype.type = 0;
    CheckPoint.prototype.chapter = 0;
    CheckPoint.prototype.mapID = 0;
    CheckPoint.prototype.heroId = 0;
    CheckPoint.prototype.heroLevel = 0;
    CheckPoint.prototype.zhCnName = "";
    CheckPoint.prototype.zhCnDescribe = "";
    CheckPoint.prototype.icon = 0;
    CheckPoint.prototype.iconName = 0;
    CheckPoint.prototype.iconBoss = 0;
    CheckPoint.prototype.picture = 0;
    CheckPoint.prototype.challengePower = 0;
    CheckPoint.prototype.teamLimit = 0;
    CheckPoint.prototype.prepose = 0;
    CheckPoint.prototype.showLevel = 0;
    CheckPoint.prototype.Level = 0;
    CheckPoint.prototype.time = 0;
    CheckPoint.prototype.sweep = false;
    CheckPoint.prototype.firstReward = 0;
    CheckPoint.prototype.baseReward = 0;
    CheckPoint.prototype.rewardId = 0;
    CheckPoint.prototype.showReward = 0;
    CheckPoint.prototype.challengeTime = 0;
    CheckPoint.prototype.challengeHp = 0;
    CheckPoint.create = function create(properties) {
        return new CheckPoint(properties);
    };
    CheckPoint.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        if (message.chapter != null && message.hasOwnProperty("chapter"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.chapter);
        if (message.mapID != null && message.hasOwnProperty("mapID"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.mapID);
        if (message.heroId != null && message.hasOwnProperty("heroId"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.heroId);
        if (message.heroLevel != null && message.hasOwnProperty("heroLevel"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.heroLevel);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.zhCnName);
        if (message.zhCnDescribe != null && message.hasOwnProperty("zhCnDescribe"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.zhCnDescribe);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.icon);
        if (message.iconName != null && message.hasOwnProperty("iconName"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.iconName);
        if (message.iconBoss != null && message.hasOwnProperty("iconBoss"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.iconBoss);
        if (message.picture != null && message.hasOwnProperty("picture"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.picture);
        if (message.challengePower != null && message.hasOwnProperty("challengePower"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.challengePower);
        if (message.teamLimit != null && message.hasOwnProperty("teamLimit"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.teamLimit);
        if (message.prepose != null && message.hasOwnProperty("prepose"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.prepose);
        if (message.showLevel != null && message.hasOwnProperty("showLevel"))
            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.showLevel);
        if (message.Level != null && message.hasOwnProperty("Level"))
            writer.uint32(/* id 17, wireType 0 =*/136).int32(message.Level);
        if (message.time != null && message.hasOwnProperty("time"))
            writer.uint32(/* id 18, wireType 0 =*/144).int32(message.time);
        if (message.sweep != null && message.hasOwnProperty("sweep"))
            writer.uint32(/* id 19, wireType 0 =*/152).bool(message.sweep);
        if (message.firstReward != null && message.hasOwnProperty("firstReward"))
            writer.uint32(/* id 20, wireType 0 =*/160).int32(message.firstReward);
        if (message.baseReward != null && message.hasOwnProperty("baseReward"))
            writer.uint32(/* id 21, wireType 0 =*/168).int32(message.baseReward);
        if (message.rewardId != null && message.hasOwnProperty("rewardId"))
            writer.uint32(/* id 22, wireType 0 =*/176).int32(message.rewardId);
        if (message.showReward != null && message.hasOwnProperty("showReward"))
            writer.uint32(/* id 23, wireType 0 =*/184).int32(message.showReward);
        if (message.challengeTime != null && message.hasOwnProperty("challengeTime"))
            writer.uint32(/* id 24, wireType 0 =*/192).int32(message.challengeTime);
        if (message.challengeHp != null && message.hasOwnProperty("challengeHp"))
            writer.uint32(/* id 25, wireType 0 =*/200).int32(message.challengeHp);
        return writer;
    };
    CheckPoint.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    CheckPoint.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.CheckPoint();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.type = reader.int32();
                break;
            case 3:
                message.chapter = reader.int32();
                break;
            case 4:
                message.mapID = reader.int32();
                break;
            case 5:
                message.heroId = reader.int32();
                break;
            case 6:
                message.heroLevel = reader.int32();
                break;
            case 7:
                message.zhCnName = reader.string();
                break;
            case 8:
                message.zhCnDescribe = reader.string();
                break;
            case 9:
                message.icon = reader.int32();
                break;
            case 10:
                message.iconName = reader.int32();
                break;
            case 11:
                message.iconBoss = reader.int32();
                break;
            case 12:
                message.picture = reader.int32();
                break;
            case 13:
                message.challengePower = reader.int32();
                break;
            case 14:
                message.teamLimit = reader.int32();
                break;
            case 15:
                message.prepose = reader.int32();
                break;
            case 16:
                message.showLevel = reader.int32();
                break;
            case 17:
                message.Level = reader.int32();
                break;
            case 18:
                message.time = reader.int32();
                break;
            case 19:
                message.sweep = reader.bool();
                break;
            case 20:
                message.firstReward = reader.int32();
                break;
            case 21:
                message.baseReward = reader.int32();
                break;
            case 22:
                message.rewardId = reader.int32();
                break;
            case 23:
                message.showReward = reader.int32();
                break;
            case 24:
                message.challengeTime = reader.int32();
                break;
            case 25:
                message.challengeHp = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    CheckPoint.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    CheckPoint.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.chapter != null && message.hasOwnProperty("chapter"))
            if (!$util.isInteger(message.chapter))
                return "chapter: integer expected";
        if (message.mapID != null && message.hasOwnProperty("mapID"))
            if (!$util.isInteger(message.mapID))
                return "mapID: integer expected";
        if (message.heroId != null && message.hasOwnProperty("heroId"))
            if (!$util.isInteger(message.heroId))
                return "heroId: integer expected";
        if (message.heroLevel != null && message.hasOwnProperty("heroLevel"))
            if (!$util.isInteger(message.heroLevel))
                return "heroLevel: integer expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.zhCnDescribe != null && message.hasOwnProperty("zhCnDescribe"))
            if (!$util.isString(message.zhCnDescribe))
                return "zhCnDescribe: string expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isInteger(message.icon))
                return "icon: integer expected";
        if (message.iconName != null && message.hasOwnProperty("iconName"))
            if (!$util.isInteger(message.iconName))
                return "iconName: integer expected";
        if (message.iconBoss != null && message.hasOwnProperty("iconBoss"))
            if (!$util.isInteger(message.iconBoss))
                return "iconBoss: integer expected";
        if (message.picture != null && message.hasOwnProperty("picture"))
            if (!$util.isInteger(message.picture))
                return "picture: integer expected";
        if (message.challengePower != null && message.hasOwnProperty("challengePower"))
            if (!$util.isInteger(message.challengePower))
                return "challengePower: integer expected";
        if (message.teamLimit != null && message.hasOwnProperty("teamLimit"))
            if (!$util.isInteger(message.teamLimit))
                return "teamLimit: integer expected";
        if (message.prepose != null && message.hasOwnProperty("prepose"))
            if (!$util.isInteger(message.prepose))
                return "prepose: integer expected";
        if (message.showLevel != null && message.hasOwnProperty("showLevel"))
            if (!$util.isInteger(message.showLevel))
                return "showLevel: integer expected";
        if (message.Level != null && message.hasOwnProperty("Level"))
            if (!$util.isInteger(message.Level))
                return "Level: integer expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time))
                return "time: integer expected";
        if (message.sweep != null && message.hasOwnProperty("sweep"))
            if (typeof message.sweep !== "boolean")
                return "sweep: boolean expected";
        if (message.firstReward != null && message.hasOwnProperty("firstReward"))
            if (!$util.isInteger(message.firstReward))
                return "firstReward: integer expected";
        if (message.baseReward != null && message.hasOwnProperty("baseReward"))
            if (!$util.isInteger(message.baseReward))
                return "baseReward: integer expected";
        if (message.rewardId != null && message.hasOwnProperty("rewardId"))
            if (!$util.isInteger(message.rewardId))
                return "rewardId: integer expected";
        if (message.showReward != null && message.hasOwnProperty("showReward"))
            if (!$util.isInteger(message.showReward))
                return "showReward: integer expected";
        if (message.challengeTime != null && message.hasOwnProperty("challengeTime"))
            if (!$util.isInteger(message.challengeTime))
                return "challengeTime: integer expected";
        if (message.challengeHp != null && message.hasOwnProperty("challengeHp"))
            if (!$util.isInteger(message.challengeHp))
                return "challengeHp: integer expected";
        return null;
    };
    CheckPoint.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.CheckPoint)
            return object;
        var message = new $excelRoot.CheckPoint();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.type != null)
            message.type = object.type | 0;
        if (object.chapter != null)
            message.chapter = object.chapter | 0;
        if (object.mapID != null)
            message.mapID = object.mapID | 0;
        if (object.heroId != null)
            message.heroId = object.heroId | 0;
        if (object.heroLevel != null)
            message.heroLevel = object.heroLevel | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.zhCnDescribe != null)
            message.zhCnDescribe = String(object.zhCnDescribe);
        if (object.icon != null)
            message.icon = object.icon | 0;
        if (object.iconName != null)
            message.iconName = object.iconName | 0;
        if (object.iconBoss != null)
            message.iconBoss = object.iconBoss | 0;
        if (object.picture != null)
            message.picture = object.picture | 0;
        if (object.challengePower != null)
            message.challengePower = object.challengePower | 0;
        if (object.teamLimit != null)
            message.teamLimit = object.teamLimit | 0;
        if (object.prepose != null)
            message.prepose = object.prepose | 0;
        if (object.showLevel != null)
            message.showLevel = object.showLevel | 0;
        if (object.Level != null)
            message.Level = object.Level | 0;
        if (object.time != null)
            message.time = object.time | 0;
        if (object.sweep != null)
            message.sweep = Boolean(object.sweep);
        if (object.firstReward != null)
            message.firstReward = object.firstReward | 0;
        if (object.baseReward != null)
            message.baseReward = object.baseReward | 0;
        if (object.rewardId != null)
            message.rewardId = object.rewardId | 0;
        if (object.showReward != null)
            message.showReward = object.showReward | 0;
        if (object.challengeTime != null)
            message.challengeTime = object.challengeTime | 0;
        if (object.challengeHp != null)
            message.challengeHp = object.challengeHp | 0;
        return message;
    };
    CheckPoint.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.type = 0;
            object.chapter = 0;
            object.mapID = 0;
            object.heroId = 0;
            object.heroLevel = 0;
            object.zhCnName = "";
            object.zhCnDescribe = "";
            object.icon = 0;
            object.iconName = 0;
            object.iconBoss = 0;
            object.picture = 0;
            object.challengePower = 0;
            object.teamLimit = 0;
            object.prepose = 0;
            object.showLevel = 0;
            object.Level = 0;
            object.time = 0;
            object.sweep = false;
            object.firstReward = 0;
            object.baseReward = 0;
            object.rewardId = 0;
            object.showReward = 0;
            object.challengeTime = 0;
            object.challengeHp = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.chapter != null && message.hasOwnProperty("chapter"))
            object.chapter = message.chapter;
        if (message.mapID != null && message.hasOwnProperty("mapID"))
            object.mapID = message.mapID;
        if (message.heroId != null && message.hasOwnProperty("heroId"))
            object.heroId = message.heroId;
        if (message.heroLevel != null && message.hasOwnProperty("heroLevel"))
            object.heroLevel = message.heroLevel;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.zhCnDescribe != null && message.hasOwnProperty("zhCnDescribe"))
            object.zhCnDescribe = message.zhCnDescribe;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.iconName != null && message.hasOwnProperty("iconName"))
            object.iconName = message.iconName;
        if (message.iconBoss != null && message.hasOwnProperty("iconBoss"))
            object.iconBoss = message.iconBoss;
        if (message.picture != null && message.hasOwnProperty("picture"))
            object.picture = message.picture;
        if (message.challengePower != null && message.hasOwnProperty("challengePower"))
            object.challengePower = message.challengePower;
        if (message.teamLimit != null && message.hasOwnProperty("teamLimit"))
            object.teamLimit = message.teamLimit;
        if (message.prepose != null && message.hasOwnProperty("prepose"))
            object.prepose = message.prepose;
        if (message.showLevel != null && message.hasOwnProperty("showLevel"))
            object.showLevel = message.showLevel;
        if (message.Level != null && message.hasOwnProperty("Level"))
            object.Level = message.Level;
        if (message.time != null && message.hasOwnProperty("time"))
            object.time = message.time;
        if (message.sweep != null && message.hasOwnProperty("sweep"))
            object.sweep = message.sweep;
        if (message.firstReward != null && message.hasOwnProperty("firstReward"))
            object.firstReward = message.firstReward;
        if (message.baseReward != null && message.hasOwnProperty("baseReward"))
            object.baseReward = message.baseReward;
        if (message.rewardId != null && message.hasOwnProperty("rewardId"))
            object.rewardId = message.rewardId;
        if (message.showReward != null && message.hasOwnProperty("showReward"))
            object.showReward = message.showReward;
        if (message.challengeTime != null && message.hasOwnProperty("challengeTime"))
            object.challengeTime = message.challengeTime;
        if (message.challengeHp != null && message.hasOwnProperty("challengeHp"))
            object.challengeHp = message.challengeHp;
        return object;
    };
    CheckPoint.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return CheckPoint;
})();
$excelRoot.Compound = (function() {
    function Compound(properties) {
        this.splitList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Compound.prototype.id = 0;
    Compound.prototype.synItem = 0;
    Compound.prototype.numReq = 0;
    Compound.prototype.splitList = $util.emptyArray;
    Compound.create = function create(properties) {
        return new Compound(properties);
    };
    Compound.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.synItem != null && message.hasOwnProperty("synItem"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.synItem);
        if (message.numReq != null && message.hasOwnProperty("numReq"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.numReq);
        if (message.splitList != null && message.splitList.length)
            for (var i = 0; i < message.splitList.length; ++i)
                $excelRoot.DTItemNum.encode(message.splitList[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };
    Compound.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Compound.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Compound();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 3:
                message.synItem = reader.int32();
                break;
            case 4:
                message.numReq = reader.int32();
                break;
            case 5:
                if (!(message.splitList && message.splitList.length))
                    message.splitList = [];
                message.splitList.push($excelRoot.DTItemNum.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Compound.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Compound.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.synItem != null && message.hasOwnProperty("synItem"))
            if (!$util.isInteger(message.synItem))
                return "synItem: integer expected";
        if (message.numReq != null && message.hasOwnProperty("numReq"))
            if (!$util.isInteger(message.numReq))
                return "numReq: integer expected";
        if (message.splitList != null && message.hasOwnProperty("splitList")) {
            if (!Array.isArray(message.splitList))
                return "splitList: array expected";
            for (var i = 0; i < message.splitList.length; ++i) {
                var error = $excelRoot.DTItemNum.verify(message.splitList[i]);
                if (error)
                    return "splitList." + error;
            }
        }
        return null;
    };
    Compound.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Compound)
            return object;
        var message = new $excelRoot.Compound();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.synItem != null)
            message.synItem = object.synItem | 0;
        if (object.numReq != null)
            message.numReq = object.numReq | 0;
        if (object.splitList) {
            if (!Array.isArray(object.splitList))
                throw TypeError(".Compound.splitList: array expected");
            message.splitList = [];
            for (var i = 0; i < object.splitList.length; ++i) {
                if (typeof object.splitList[i] !== "object")
                    throw TypeError(".Compound.splitList: object expected");
                message.splitList[i] = $excelRoot.DTItemNum.fromObject(object.splitList[i]);
            }
        }
        return message;
    };
    Compound.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.splitList = [];
        if (options.defaults) {
            object.id = 0;
            object.synItem = 0;
            object.numReq = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.synItem != null && message.hasOwnProperty("synItem"))
            object.synItem = message.synItem;
        if (message.numReq != null && message.hasOwnProperty("numReq"))
            object.numReq = message.numReq;
        if (message.splitList && message.splitList.length) {
            object.splitList = [];
            for (var j = 0; j < message.splitList.length; ++j)
                object.splitList[j] = $excelRoot.DTItemNum.toObject(message.splitList[j], options);
        }
        return object;
    };
    Compound.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Compound;
})();
$excelRoot.CountActivities = (function() {
    function CountActivities(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    CountActivities.prototype.id = 0;
    CountActivities.prototype.rewardId = 0;
    CountActivities.prototype.avatar = 0;
    CountActivities.create = function create(properties) {
        return new CountActivities(properties);
    };
    CountActivities.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.rewardId != null && message.hasOwnProperty("rewardId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.rewardId);
        if (message.avatar != null && message.hasOwnProperty("avatar"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.avatar);
        return writer;
    };
    CountActivities.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    CountActivities.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.CountActivities();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.rewardId = reader.int32();
                break;
            case 3:
                message.avatar = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    CountActivities.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    CountActivities.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.rewardId != null && message.hasOwnProperty("rewardId"))
            if (!$util.isInteger(message.rewardId))
                return "rewardId: integer expected";
        if (message.avatar != null && message.hasOwnProperty("avatar"))
            if (!$util.isInteger(message.avatar))
                return "avatar: integer expected";
        return null;
    };
    CountActivities.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.CountActivities)
            return object;
        var message = new $excelRoot.CountActivities();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.rewardId != null)
            message.rewardId = object.rewardId | 0;
        if (object.avatar != null)
            message.avatar = object.avatar | 0;
        return message;
    };
    CountActivities.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.rewardId = 0;
            object.avatar = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.rewardId != null && message.hasOwnProperty("rewardId"))
            object.rewardId = message.rewardId;
        if (message.avatar != null && message.hasOwnProperty("avatar"))
            object.avatar = message.avatar;
        return object;
    };
    CountActivities.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return CountActivities;
})();
$excelRoot.Daily = (function() {
    function Daily(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Daily.prototype.id = 0;
    Daily.prototype.active = 0;
    Daily.prototype.reward = 0;
    Daily.create = function create(properties) {
        return new Daily(properties);
    };
    Daily.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.active != null && message.hasOwnProperty("active"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.active);
        if (message.reward != null && message.hasOwnProperty("reward"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.reward);
        return writer;
    };
    Daily.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Daily.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Daily();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.active = reader.int32();
                break;
            case 3:
                message.reward = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Daily.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Daily.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.active != null && message.hasOwnProperty("active"))
            if (!$util.isInteger(message.active))
                return "active: integer expected";
        if (message.reward != null && message.hasOwnProperty("reward"))
            if (!$util.isInteger(message.reward))
                return "reward: integer expected";
        return null;
    };
    Daily.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Daily)
            return object;
        var message = new $excelRoot.Daily();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.active != null)
            message.active = object.active | 0;
        if (object.reward != null)
            message.reward = object.reward | 0;
        return message;
    };
    Daily.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.active = 0;
            object.reward = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.active != null && message.hasOwnProperty("active"))
            object.active = message.active;
        if (message.reward != null && message.hasOwnProperty("reward"))
            object.reward = message.reward;
        return object;
    };
    Daily.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Daily;
})();
$excelRoot.Draug = (function() {
    function Draug(properties) {
        this.PosRate = [];
        this.RandNum = [];
        this.ExpLevel = [];
        this.PropPos1 = [];
        this.PropPos2 = [];
        this.PropPos3 = [];
        this.PropPos4 = [];
        this.PropPos5 = [];
        this.PropPos6 = [];
        this.SecProp = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Draug.prototype.id = 0;
    Draug.prototype.name = "";
    Draug.prototype.range = 0;
    Draug.prototype.TypeName = 0;
    Draug.prototype.PosRate = $util.emptyArray;
    Draug.prototype.MaxRandNum = 0;
    Draug.prototype.RandNum = $util.emptyArray;
    Draug.prototype.SecPropStep = 0;
    Draug.prototype.initialExp = 0;
    Draug.prototype.ExpLevel = $util.emptyArray;
    Draug.prototype.eat = false;
    Draug.prototype.decompose = false;
    Draug.prototype.CoinRatio = 0;
    Draug.prototype.OtherDrop = 0;
    Draug.prototype.PropPos1 = $util.emptyArray;
    Draug.prototype.Pos1PerModule = 0;
    Draug.prototype.PropPos2 = $util.emptyArray;
    Draug.prototype.Pos2PerModule = 0;
    Draug.prototype.PropPos3 = $util.emptyArray;
    Draug.prototype.Pos3PerModule = 0;
    Draug.prototype.PropPos4 = $util.emptyArray;
    Draug.prototype.Pos4PerModule = 0;
    Draug.prototype.PropPos5 = $util.emptyArray;
    Draug.prototype.Pos5PerModule = 0;
    Draug.prototype.PropPos6 = $util.emptyArray;
    Draug.prototype.Pos6PerModule = 0;
    Draug.prototype.SecProp = $util.emptyArray;
    Draug.prototype.SecPerModule = 0;
    Draug.prototype.BatterSecPropRate = 0;
    Draug.create = function create(properties) {
        return new Draug(properties);
    };
    Draug.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.range != null && message.hasOwnProperty("range"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.range);
        if (message.TypeName != null && message.hasOwnProperty("TypeName"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.TypeName);
        if (message.PosRate != null && message.PosRate.length) {
            writer.uint32(/* id 5, wireType 2 =*/42).fork();
            for (var i = 0; i < message.PosRate.length; ++i)
                writer.int32(message.PosRate[i]);
            writer.ldelim();
        }
        if (message.MaxRandNum != null && message.hasOwnProperty("MaxRandNum"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.MaxRandNum);
        if (message.RandNum != null && message.RandNum.length)
            for (var i = 0; i < message.RandNum.length; ++i)
                $excelRoot.DTRandNum.encode(message.RandNum[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.SecPropStep != null && message.hasOwnProperty("SecPropStep"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.SecPropStep);
        if (message.initialExp != null && message.hasOwnProperty("initialExp"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.initialExp);
        if (message.ExpLevel != null && message.ExpLevel.length) {
            writer.uint32(/* id 10, wireType 2 =*/82).fork();
            for (var i = 0; i < message.ExpLevel.length; ++i)
                writer.int32(message.ExpLevel[i]);
            writer.ldelim();
        }
        if (message.eat != null && message.hasOwnProperty("eat"))
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.eat);
        if (message.decompose != null && message.hasOwnProperty("decompose"))
            writer.uint32(/* id 12, wireType 0 =*/96).bool(message.decompose);
        if (message.CoinRatio != null && message.hasOwnProperty("CoinRatio"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.CoinRatio);
        if (message.OtherDrop != null && message.hasOwnProperty("OtherDrop"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.OtherDrop);
        if (message.PropPos1 != null && message.PropPos1.length)
            for (var i = 0; i < message.PropPos1.length; ++i)
                $excelRoot.DTProp.encode(message.PropPos1[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.Pos1PerModule != null && message.hasOwnProperty("Pos1PerModule"))
            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.Pos1PerModule);
        if (message.PropPos2 != null && message.PropPos2.length)
            for (var i = 0; i < message.PropPos2.length; ++i)
                $excelRoot.DTProp.encode(message.PropPos2[i], writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.Pos2PerModule != null && message.hasOwnProperty("Pos2PerModule"))
            writer.uint32(/* id 18, wireType 0 =*/144).int32(message.Pos2PerModule);
        if (message.PropPos3 != null && message.PropPos3.length)
            for (var i = 0; i < message.PropPos3.length; ++i)
                $excelRoot.DTProp.encode(message.PropPos3[i], writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
        if (message.Pos3PerModule != null && message.hasOwnProperty("Pos3PerModule"))
            writer.uint32(/* id 20, wireType 0 =*/160).int32(message.Pos3PerModule);
        if (message.PropPos4 != null && message.PropPos4.length)
            for (var i = 0; i < message.PropPos4.length; ++i)
                $excelRoot.DTProp.encode(message.PropPos4[i], writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
        if (message.Pos4PerModule != null && message.hasOwnProperty("Pos4PerModule"))
            writer.uint32(/* id 22, wireType 0 =*/176).int32(message.Pos4PerModule);
        if (message.PropPos5 != null && message.PropPos5.length)
            for (var i = 0; i < message.PropPos5.length; ++i)
                $excelRoot.DTProp.encode(message.PropPos5[i], writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
        if (message.Pos5PerModule != null && message.hasOwnProperty("Pos5PerModule"))
            writer.uint32(/* id 24, wireType 0 =*/192).int32(message.Pos5PerModule);
        if (message.PropPos6 != null && message.PropPos6.length)
            for (var i = 0; i < message.PropPos6.length; ++i)
                $excelRoot.DTProp.encode(message.PropPos6[i], writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
        if (message.Pos6PerModule != null && message.hasOwnProperty("Pos6PerModule"))
            writer.uint32(/* id 26, wireType 0 =*/208).int32(message.Pos6PerModule);
        if (message.SecProp != null && message.SecProp.length)
            for (var i = 0; i < message.SecProp.length; ++i)
                $excelRoot.DTProp.encode(message.SecProp[i], writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
        if (message.SecPerModule != null && message.hasOwnProperty("SecPerModule"))
            writer.uint32(/* id 28, wireType 0 =*/224).int32(message.SecPerModule);
        if (message.BatterSecPropRate != null && message.hasOwnProperty("BatterSecPropRate"))
            writer.uint32(/* id 29, wireType 0 =*/232).int32(message.BatterSecPropRate);
        return writer;
    };
    Draug.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Draug.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Draug();
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
                message.range = reader.int32();
                break;
            case 4:
                message.TypeName = reader.int32();
                break;
            case 5:
                if (!(message.PosRate && message.PosRate.length))
                    message.PosRate = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.PosRate.push(reader.int32());
                } else
                    message.PosRate.push(reader.int32());
                break;
            case 6:
                message.MaxRandNum = reader.int32();
                break;
            case 7:
                if (!(message.RandNum && message.RandNum.length))
                    message.RandNum = [];
                message.RandNum.push($excelRoot.DTRandNum.decode(reader, reader.uint32()));
                break;
            case 8:
                message.SecPropStep = reader.int32();
                break;
            case 9:
                message.initialExp = reader.int32();
                break;
            case 10:
                if (!(message.ExpLevel && message.ExpLevel.length))
                    message.ExpLevel = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.ExpLevel.push(reader.int32());
                } else
                    message.ExpLevel.push(reader.int32());
                break;
            case 11:
                message.eat = reader.bool();
                break;
            case 12:
                message.decompose = reader.bool();
                break;
            case 13:
                message.CoinRatio = reader.int32();
                break;
            case 14:
                message.OtherDrop = reader.int32();
                break;
            case 15:
                if (!(message.PropPos1 && message.PropPos1.length))
                    message.PropPos1 = [];
                message.PropPos1.push($excelRoot.DTProp.decode(reader, reader.uint32()));
                break;
            case 16:
                message.Pos1PerModule = reader.int32();
                break;
            case 17:
                if (!(message.PropPos2 && message.PropPos2.length))
                    message.PropPos2 = [];
                message.PropPos2.push($excelRoot.DTProp.decode(reader, reader.uint32()));
                break;
            case 18:
                message.Pos2PerModule = reader.int32();
                break;
            case 19:
                if (!(message.PropPos3 && message.PropPos3.length))
                    message.PropPos3 = [];
                message.PropPos3.push($excelRoot.DTProp.decode(reader, reader.uint32()));
                break;
            case 20:
                message.Pos3PerModule = reader.int32();
                break;
            case 21:
                if (!(message.PropPos4 && message.PropPos4.length))
                    message.PropPos4 = [];
                message.PropPos4.push($excelRoot.DTProp.decode(reader, reader.uint32()));
                break;
            case 22:
                message.Pos4PerModule = reader.int32();
                break;
            case 23:
                if (!(message.PropPos5 && message.PropPos5.length))
                    message.PropPos5 = [];
                message.PropPos5.push($excelRoot.DTProp.decode(reader, reader.uint32()));
                break;
            case 24:
                message.Pos5PerModule = reader.int32();
                break;
            case 25:
                if (!(message.PropPos6 && message.PropPos6.length))
                    message.PropPos6 = [];
                message.PropPos6.push($excelRoot.DTProp.decode(reader, reader.uint32()));
                break;
            case 26:
                message.Pos6PerModule = reader.int32();
                break;
            case 27:
                if (!(message.SecProp && message.SecProp.length))
                    message.SecProp = [];
                message.SecProp.push($excelRoot.DTProp.decode(reader, reader.uint32()));
                break;
            case 28:
                message.SecPerModule = reader.int32();
                break;
            case 29:
                message.BatterSecPropRate = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Draug.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Draug.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.range != null && message.hasOwnProperty("range"))
            if (!$util.isInteger(message.range))
                return "range: integer expected";
        if (message.TypeName != null && message.hasOwnProperty("TypeName"))
            if (!$util.isInteger(message.TypeName))
                return "TypeName: integer expected";
        if (message.PosRate != null && message.hasOwnProperty("PosRate")) {
            if (!Array.isArray(message.PosRate))
                return "PosRate: array expected";
            for (var i = 0; i < message.PosRate.length; ++i)
                if (!$util.isInteger(message.PosRate[i]))
                    return "PosRate: integer[] expected";
        }
        if (message.MaxRandNum != null && message.hasOwnProperty("MaxRandNum"))
            if (!$util.isInteger(message.MaxRandNum))
                return "MaxRandNum: integer expected";
        if (message.RandNum != null && message.hasOwnProperty("RandNum")) {
            if (!Array.isArray(message.RandNum))
                return "RandNum: array expected";
            for (var i = 0; i < message.RandNum.length; ++i) {
                var error = $excelRoot.DTRandNum.verify(message.RandNum[i]);
                if (error)
                    return "RandNum." + error;
            }
        }
        if (message.SecPropStep != null && message.hasOwnProperty("SecPropStep"))
            if (!$util.isInteger(message.SecPropStep))
                return "SecPropStep: integer expected";
        if (message.initialExp != null && message.hasOwnProperty("initialExp"))
            if (!$util.isInteger(message.initialExp))
                return "initialExp: integer expected";
        if (message.ExpLevel != null && message.hasOwnProperty("ExpLevel")) {
            if (!Array.isArray(message.ExpLevel))
                return "ExpLevel: array expected";
            for (var i = 0; i < message.ExpLevel.length; ++i)
                if (!$util.isInteger(message.ExpLevel[i]))
                    return "ExpLevel: integer[] expected";
        }
        if (message.eat != null && message.hasOwnProperty("eat"))
            if (typeof message.eat !== "boolean")
                return "eat: boolean expected";
        if (message.decompose != null && message.hasOwnProperty("decompose"))
            if (typeof message.decompose !== "boolean")
                return "decompose: boolean expected";
        if (message.CoinRatio != null && message.hasOwnProperty("CoinRatio"))
            if (!$util.isInteger(message.CoinRatio))
                return "CoinRatio: integer expected";
        if (message.OtherDrop != null && message.hasOwnProperty("OtherDrop"))
            if (!$util.isInteger(message.OtherDrop))
                return "OtherDrop: integer expected";
        if (message.PropPos1 != null && message.hasOwnProperty("PropPos1")) {
            if (!Array.isArray(message.PropPos1))
                return "PropPos1: array expected";
            for (var i = 0; i < message.PropPos1.length; ++i) {
                var error = $excelRoot.DTProp.verify(message.PropPos1[i]);
                if (error)
                    return "PropPos1." + error;
            }
        }
        if (message.Pos1PerModule != null && message.hasOwnProperty("Pos1PerModule"))
            if (!$util.isInteger(message.Pos1PerModule))
                return "Pos1PerModule: integer expected";
        if (message.PropPos2 != null && message.hasOwnProperty("PropPos2")) {
            if (!Array.isArray(message.PropPos2))
                return "PropPos2: array expected";
            for (var i = 0; i < message.PropPos2.length; ++i) {
                var error = $excelRoot.DTProp.verify(message.PropPos2[i]);
                if (error)
                    return "PropPos2." + error;
            }
        }
        if (message.Pos2PerModule != null && message.hasOwnProperty("Pos2PerModule"))
            if (!$util.isInteger(message.Pos2PerModule))
                return "Pos2PerModule: integer expected";
        if (message.PropPos3 != null && message.hasOwnProperty("PropPos3")) {
            if (!Array.isArray(message.PropPos3))
                return "PropPos3: array expected";
            for (var i = 0; i < message.PropPos3.length; ++i) {
                var error = $excelRoot.DTProp.verify(message.PropPos3[i]);
                if (error)
                    return "PropPos3." + error;
            }
        }
        if (message.Pos3PerModule != null && message.hasOwnProperty("Pos3PerModule"))
            if (!$util.isInteger(message.Pos3PerModule))
                return "Pos3PerModule: integer expected";
        if (message.PropPos4 != null && message.hasOwnProperty("PropPos4")) {
            if (!Array.isArray(message.PropPos4))
                return "PropPos4: array expected";
            for (var i = 0; i < message.PropPos4.length; ++i) {
                var error = $excelRoot.DTProp.verify(message.PropPos4[i]);
                if (error)
                    return "PropPos4." + error;
            }
        }
        if (message.Pos4PerModule != null && message.hasOwnProperty("Pos4PerModule"))
            if (!$util.isInteger(message.Pos4PerModule))
                return "Pos4PerModule: integer expected";
        if (message.PropPos5 != null && message.hasOwnProperty("PropPos5")) {
            if (!Array.isArray(message.PropPos5))
                return "PropPos5: array expected";
            for (var i = 0; i < message.PropPos5.length; ++i) {
                var error = $excelRoot.DTProp.verify(message.PropPos5[i]);
                if (error)
                    return "PropPos5." + error;
            }
        }
        if (message.Pos5PerModule != null && message.hasOwnProperty("Pos5PerModule"))
            if (!$util.isInteger(message.Pos5PerModule))
                return "Pos5PerModule: integer expected";
        if (message.PropPos6 != null && message.hasOwnProperty("PropPos6")) {
            if (!Array.isArray(message.PropPos6))
                return "PropPos6: array expected";
            for (var i = 0; i < message.PropPos6.length; ++i) {
                var error = $excelRoot.DTProp.verify(message.PropPos6[i]);
                if (error)
                    return "PropPos6." + error;
            }
        }
        if (message.Pos6PerModule != null && message.hasOwnProperty("Pos6PerModule"))
            if (!$util.isInteger(message.Pos6PerModule))
                return "Pos6PerModule: integer expected";
        if (message.SecProp != null && message.hasOwnProperty("SecProp")) {
            if (!Array.isArray(message.SecProp))
                return "SecProp: array expected";
            for (var i = 0; i < message.SecProp.length; ++i) {
                var error = $excelRoot.DTProp.verify(message.SecProp[i]);
                if (error)
                    return "SecProp." + error;
            }
        }
        if (message.SecPerModule != null && message.hasOwnProperty("SecPerModule"))
            if (!$util.isInteger(message.SecPerModule))
                return "SecPerModule: integer expected";
        if (message.BatterSecPropRate != null && message.hasOwnProperty("BatterSecPropRate"))
            if (!$util.isInteger(message.BatterSecPropRate))
                return "BatterSecPropRate: integer expected";
        return null;
    };
    Draug.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Draug)
            return object;
        var message = new $excelRoot.Draug();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.name != null)
            message.name = String(object.name);
        if (object.range != null)
            message.range = object.range | 0;
        if (object.TypeName != null)
            message.TypeName = object.TypeName | 0;
        if (object.PosRate) {
            if (!Array.isArray(object.PosRate))
                throw TypeError(".Draug.PosRate: array expected");
            message.PosRate = [];
            for (var i = 0; i < object.PosRate.length; ++i)
                message.PosRate[i] = object.PosRate[i] | 0;
        }
        if (object.MaxRandNum != null)
            message.MaxRandNum = object.MaxRandNum | 0;
        if (object.RandNum) {
            if (!Array.isArray(object.RandNum))
                throw TypeError(".Draug.RandNum: array expected");
            message.RandNum = [];
            for (var i = 0; i < object.RandNum.length; ++i) {
                if (typeof object.RandNum[i] !== "object")
                    throw TypeError(".Draug.RandNum: object expected");
                message.RandNum[i] = $excelRoot.DTRandNum.fromObject(object.RandNum[i]);
            }
        }
        if (object.SecPropStep != null)
            message.SecPropStep = object.SecPropStep | 0;
        if (object.initialExp != null)
            message.initialExp = object.initialExp | 0;
        if (object.ExpLevel) {
            if (!Array.isArray(object.ExpLevel))
                throw TypeError(".Draug.ExpLevel: array expected");
            message.ExpLevel = [];
            for (var i = 0; i < object.ExpLevel.length; ++i)
                message.ExpLevel[i] = object.ExpLevel[i] | 0;
        }
        if (object.eat != null)
            message.eat = Boolean(object.eat);
        if (object.decompose != null)
            message.decompose = Boolean(object.decompose);
        if (object.CoinRatio != null)
            message.CoinRatio = object.CoinRatio | 0;
        if (object.OtherDrop != null)
            message.OtherDrop = object.OtherDrop | 0;
        if (object.PropPos1) {
            if (!Array.isArray(object.PropPos1))
                throw TypeError(".Draug.PropPos1: array expected");
            message.PropPos1 = [];
            for (var i = 0; i < object.PropPos1.length; ++i) {
                if (typeof object.PropPos1[i] !== "object")
                    throw TypeError(".Draug.PropPos1: object expected");
                message.PropPos1[i] = $excelRoot.DTProp.fromObject(object.PropPos1[i]);
            }
        }
        if (object.Pos1PerModule != null)
            message.Pos1PerModule = object.Pos1PerModule | 0;
        if (object.PropPos2) {
            if (!Array.isArray(object.PropPos2))
                throw TypeError(".Draug.PropPos2: array expected");
            message.PropPos2 = [];
            for (var i = 0; i < object.PropPos2.length; ++i) {
                if (typeof object.PropPos2[i] !== "object")
                    throw TypeError(".Draug.PropPos2: object expected");
                message.PropPos2[i] = $excelRoot.DTProp.fromObject(object.PropPos2[i]);
            }
        }
        if (object.Pos2PerModule != null)
            message.Pos2PerModule = object.Pos2PerModule | 0;
        if (object.PropPos3) {
            if (!Array.isArray(object.PropPos3))
                throw TypeError(".Draug.PropPos3: array expected");
            message.PropPos3 = [];
            for (var i = 0; i < object.PropPos3.length; ++i) {
                if (typeof object.PropPos3[i] !== "object")
                    throw TypeError(".Draug.PropPos3: object expected");
                message.PropPos3[i] = $excelRoot.DTProp.fromObject(object.PropPos3[i]);
            }
        }
        if (object.Pos3PerModule != null)
            message.Pos3PerModule = object.Pos3PerModule | 0;
        if (object.PropPos4) {
            if (!Array.isArray(object.PropPos4))
                throw TypeError(".Draug.PropPos4: array expected");
            message.PropPos4 = [];
            for (var i = 0; i < object.PropPos4.length; ++i) {
                if (typeof object.PropPos4[i] !== "object")
                    throw TypeError(".Draug.PropPos4: object expected");
                message.PropPos4[i] = $excelRoot.DTProp.fromObject(object.PropPos4[i]);
            }
        }
        if (object.Pos4PerModule != null)
            message.Pos4PerModule = object.Pos4PerModule | 0;
        if (object.PropPos5) {
            if (!Array.isArray(object.PropPos5))
                throw TypeError(".Draug.PropPos5: array expected");
            message.PropPos5 = [];
            for (var i = 0; i < object.PropPos5.length; ++i) {
                if (typeof object.PropPos5[i] !== "object")
                    throw TypeError(".Draug.PropPos5: object expected");
                message.PropPos5[i] = $excelRoot.DTProp.fromObject(object.PropPos5[i]);
            }
        }
        if (object.Pos5PerModule != null)
            message.Pos5PerModule = object.Pos5PerModule | 0;
        if (object.PropPos6) {
            if (!Array.isArray(object.PropPos6))
                throw TypeError(".Draug.PropPos6: array expected");
            message.PropPos6 = [];
            for (var i = 0; i < object.PropPos6.length; ++i) {
                if (typeof object.PropPos6[i] !== "object")
                    throw TypeError(".Draug.PropPos6: object expected");
                message.PropPos6[i] = $excelRoot.DTProp.fromObject(object.PropPos6[i]);
            }
        }
        if (object.Pos6PerModule != null)
            message.Pos6PerModule = object.Pos6PerModule | 0;
        if (object.SecProp) {
            if (!Array.isArray(object.SecProp))
                throw TypeError(".Draug.SecProp: array expected");
            message.SecProp = [];
            for (var i = 0; i < object.SecProp.length; ++i) {
                if (typeof object.SecProp[i] !== "object")
                    throw TypeError(".Draug.SecProp: object expected");
                message.SecProp[i] = $excelRoot.DTProp.fromObject(object.SecProp[i]);
            }
        }
        if (object.SecPerModule != null)
            message.SecPerModule = object.SecPerModule | 0;
        if (object.BatterSecPropRate != null)
            message.BatterSecPropRate = object.BatterSecPropRate | 0;
        return message;
    };
    Draug.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.PosRate = [];
            object.RandNum = [];
            object.ExpLevel = [];
            object.PropPos1 = [];
            object.PropPos2 = [];
            object.PropPos3 = [];
            object.PropPos4 = [];
            object.PropPos5 = [];
            object.PropPos6 = [];
            object.SecProp = [];
        }
        if (options.defaults) {
            object.id = 0;
            object.name = "";
            object.range = 0;
            object.TypeName = 0;
            object.MaxRandNum = 0;
            object.SecPropStep = 0;
            object.initialExp = 0;
            object.eat = false;
            object.decompose = false;
            object.CoinRatio = 0;
            object.OtherDrop = 0;
            object.Pos1PerModule = 0;
            object.Pos2PerModule = 0;
            object.Pos3PerModule = 0;
            object.Pos4PerModule = 0;
            object.Pos5PerModule = 0;
            object.Pos6PerModule = 0;
            object.SecPerModule = 0;
            object.BatterSecPropRate = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.range != null && message.hasOwnProperty("range"))
            object.range = message.range;
        if (message.TypeName != null && message.hasOwnProperty("TypeName"))
            object.TypeName = message.TypeName;
        if (message.PosRate && message.PosRate.length) {
            object.PosRate = [];
            for (var j = 0; j < message.PosRate.length; ++j)
                object.PosRate[j] = message.PosRate[j];
        }
        if (message.MaxRandNum != null && message.hasOwnProperty("MaxRandNum"))
            object.MaxRandNum = message.MaxRandNum;
        if (message.RandNum && message.RandNum.length) {
            object.RandNum = [];
            for (var j = 0; j < message.RandNum.length; ++j)
                object.RandNum[j] = $excelRoot.DTRandNum.toObject(message.RandNum[j], options);
        }
        if (message.SecPropStep != null && message.hasOwnProperty("SecPropStep"))
            object.SecPropStep = message.SecPropStep;
        if (message.initialExp != null && message.hasOwnProperty("initialExp"))
            object.initialExp = message.initialExp;
        if (message.ExpLevel && message.ExpLevel.length) {
            object.ExpLevel = [];
            for (var j = 0; j < message.ExpLevel.length; ++j)
                object.ExpLevel[j] = message.ExpLevel[j];
        }
        if (message.eat != null && message.hasOwnProperty("eat"))
            object.eat = message.eat;
        if (message.decompose != null && message.hasOwnProperty("decompose"))
            object.decompose = message.decompose;
        if (message.CoinRatio != null && message.hasOwnProperty("CoinRatio"))
            object.CoinRatio = message.CoinRatio;
        if (message.OtherDrop != null && message.hasOwnProperty("OtherDrop"))
            object.OtherDrop = message.OtherDrop;
        if (message.PropPos1 && message.PropPos1.length) {
            object.PropPos1 = [];
            for (var j = 0; j < message.PropPos1.length; ++j)
                object.PropPos1[j] = $excelRoot.DTProp.toObject(message.PropPos1[j], options);
        }
        if (message.Pos1PerModule != null && message.hasOwnProperty("Pos1PerModule"))
            object.Pos1PerModule = message.Pos1PerModule;
        if (message.PropPos2 && message.PropPos2.length) {
            object.PropPos2 = [];
            for (var j = 0; j < message.PropPos2.length; ++j)
                object.PropPos2[j] = $excelRoot.DTProp.toObject(message.PropPos2[j], options);
        }
        if (message.Pos2PerModule != null && message.hasOwnProperty("Pos2PerModule"))
            object.Pos2PerModule = message.Pos2PerModule;
        if (message.PropPos3 && message.PropPos3.length) {
            object.PropPos3 = [];
            for (var j = 0; j < message.PropPos3.length; ++j)
                object.PropPos3[j] = $excelRoot.DTProp.toObject(message.PropPos3[j], options);
        }
        if (message.Pos3PerModule != null && message.hasOwnProperty("Pos3PerModule"))
            object.Pos3PerModule = message.Pos3PerModule;
        if (message.PropPos4 && message.PropPos4.length) {
            object.PropPos4 = [];
            for (var j = 0; j < message.PropPos4.length; ++j)
                object.PropPos4[j] = $excelRoot.DTProp.toObject(message.PropPos4[j], options);
        }
        if (message.Pos4PerModule != null && message.hasOwnProperty("Pos4PerModule"))
            object.Pos4PerModule = message.Pos4PerModule;
        if (message.PropPos5 && message.PropPos5.length) {
            object.PropPos5 = [];
            for (var j = 0; j < message.PropPos5.length; ++j)
                object.PropPos5[j] = $excelRoot.DTProp.toObject(message.PropPos5[j], options);
        }
        if (message.Pos5PerModule != null && message.hasOwnProperty("Pos5PerModule"))
            object.Pos5PerModule = message.Pos5PerModule;
        if (message.PropPos6 && message.PropPos6.length) {
            object.PropPos6 = [];
            for (var j = 0; j < message.PropPos6.length; ++j)
                object.PropPos6[j] = $excelRoot.DTProp.toObject(message.PropPos6[j], options);
        }
        if (message.Pos6PerModule != null && message.hasOwnProperty("Pos6PerModule"))
            object.Pos6PerModule = message.Pos6PerModule;
        if (message.SecProp && message.SecProp.length) {
            object.SecProp = [];
            for (var j = 0; j < message.SecProp.length; ++j)
                object.SecProp[j] = $excelRoot.DTProp.toObject(message.SecProp[j], options);
        }
        if (message.SecPerModule != null && message.hasOwnProperty("SecPerModule"))
            object.SecPerModule = message.SecPerModule;
        if (message.BatterSecPropRate != null && message.hasOwnProperty("BatterSecPropRate"))
            object.BatterSecPropRate = message.BatterSecPropRate;
        return object;
    };
    Draug.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Draug;
})();
$excelRoot.DraugAwaken = (function() {
    function DraugAwaken(properties) {
        this.costCoin = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DraugAwaken.prototype.id = 0;
    DraugAwaken.prototype.name = "";
    DraugAwaken.prototype.costCoin = $util.emptyArray;
    DraugAwaken.prototype.rate = 0;
    DraugAwaken.prototype.draugRate = 0;
    DraugAwaken.create = function create(properties) {
        return new DraugAwaken(properties);
    };
    DraugAwaken.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.costCoin != null && message.costCoin.length)
            for (var i = 0; i < message.costCoin.length; ++i)
                $excelRoot.DTItemNum.encode(message.costCoin[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.rate != null && message.hasOwnProperty("rate"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.rate);
        if (message.draugRate != null && message.hasOwnProperty("draugRate"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.draugRate);
        return writer;
    };
    DraugAwaken.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DraugAwaken.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DraugAwaken();
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
                if (!(message.costCoin && message.costCoin.length))
                    message.costCoin = [];
                message.costCoin.push($excelRoot.DTItemNum.decode(reader, reader.uint32()));
                break;
            case 4:
                message.rate = reader.int32();
                break;
            case 5:
                message.draugRate = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DraugAwaken.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DraugAwaken.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.costCoin != null && message.hasOwnProperty("costCoin")) {
            if (!Array.isArray(message.costCoin))
                return "costCoin: array expected";
            for (var i = 0; i < message.costCoin.length; ++i) {
                var error = $excelRoot.DTItemNum.verify(message.costCoin[i]);
                if (error)
                    return "costCoin." + error;
            }
        }
        if (message.rate != null && message.hasOwnProperty("rate"))
            if (!$util.isInteger(message.rate))
                return "rate: integer expected";
        if (message.draugRate != null && message.hasOwnProperty("draugRate"))
            if (!$util.isInteger(message.draugRate))
                return "draugRate: integer expected";
        return null;
    };
    DraugAwaken.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DraugAwaken)
            return object;
        var message = new $excelRoot.DraugAwaken();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.name != null)
            message.name = String(object.name);
        if (object.costCoin) {
            if (!Array.isArray(object.costCoin))
                throw TypeError(".DraugAwaken.costCoin: array expected");
            message.costCoin = [];
            for (var i = 0; i < object.costCoin.length; ++i) {
                if (typeof object.costCoin[i] !== "object")
                    throw TypeError(".DraugAwaken.costCoin: object expected");
                message.costCoin[i] = $excelRoot.DTItemNum.fromObject(object.costCoin[i]);
            }
        }
        if (object.rate != null)
            message.rate = object.rate | 0;
        if (object.draugRate != null)
            message.draugRate = object.draugRate | 0;
        return message;
    };
    DraugAwaken.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.costCoin = [];
        if (options.defaults) {
            object.id = 0;
            object.name = "";
            object.rate = 0;
            object.draugRate = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.costCoin && message.costCoin.length) {
            object.costCoin = [];
            for (var j = 0; j < message.costCoin.length; ++j)
                object.costCoin[j] = $excelRoot.DTItemNum.toObject(message.costCoin[j], options);
        }
        if (message.rate != null && message.hasOwnProperty("rate"))
            object.rate = message.rate;
        if (message.draugRate != null && message.hasOwnProperty("draugRate"))
            object.draugRate = message.draugRate;
        return object;
    };
    DraugAwaken.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DraugAwaken;
})();
$excelRoot.DraugSuit = (function() {
    function DraugSuit(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DraugSuit.prototype.id = 0;
    DraugSuit.prototype.TypeName = 0;
    DraugSuit.prototype.Suit2 = 0;
    DraugSuit.prototype.Suit2PerModule = 0;
    DraugSuit.prototype.Suit4 = 0;
    DraugSuit.prototype.Suit4PerModule = 0;
    DraugSuit.create = function create(properties) {
        return new DraugSuit(properties);
    };
    DraugSuit.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.TypeName != null && message.hasOwnProperty("TypeName"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TypeName);
        if (message.Suit2 != null && message.hasOwnProperty("Suit2"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Suit2);
        if (message.Suit2PerModule != null && message.hasOwnProperty("Suit2PerModule"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Suit2PerModule);
        if (message.Suit4 != null && message.hasOwnProperty("Suit4"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Suit4);
        if (message.Suit4PerModule != null && message.hasOwnProperty("Suit4PerModule"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Suit4PerModule);
        return writer;
    };
    DraugSuit.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DraugSuit.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DraugSuit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.TypeName = reader.int32();
                break;
            case 3:
                message.Suit2 = reader.int32();
                break;
            case 4:
                message.Suit2PerModule = reader.int32();
                break;
            case 5:
                message.Suit4 = reader.int32();
                break;
            case 6:
                message.Suit4PerModule = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DraugSuit.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DraugSuit.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.TypeName != null && message.hasOwnProperty("TypeName"))
            if (!$util.isInteger(message.TypeName))
                return "TypeName: integer expected";
        if (message.Suit2 != null && message.hasOwnProperty("Suit2"))
            if (!$util.isInteger(message.Suit2))
                return "Suit2: integer expected";
        if (message.Suit2PerModule != null && message.hasOwnProperty("Suit2PerModule"))
            if (!$util.isInteger(message.Suit2PerModule))
                return "Suit2PerModule: integer expected";
        if (message.Suit4 != null && message.hasOwnProperty("Suit4"))
            if (!$util.isInteger(message.Suit4))
                return "Suit4: integer expected";
        if (message.Suit4PerModule != null && message.hasOwnProperty("Suit4PerModule"))
            if (!$util.isInteger(message.Suit4PerModule))
                return "Suit4PerModule: integer expected";
        return null;
    };
    DraugSuit.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DraugSuit)
            return object;
        var message = new $excelRoot.DraugSuit();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.TypeName != null)
            message.TypeName = object.TypeName | 0;
        if (object.Suit2 != null)
            message.Suit2 = object.Suit2 | 0;
        if (object.Suit2PerModule != null)
            message.Suit2PerModule = object.Suit2PerModule | 0;
        if (object.Suit4 != null)
            message.Suit4 = object.Suit4 | 0;
        if (object.Suit4PerModule != null)
            message.Suit4PerModule = object.Suit4PerModule | 0;
        return message;
    };
    DraugSuit.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.TypeName = 0;
            object.Suit2 = 0;
            object.Suit2PerModule = 0;
            object.Suit4 = 0;
            object.Suit4PerModule = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.TypeName != null && message.hasOwnProperty("TypeName"))
            object.TypeName = message.TypeName;
        if (message.Suit2 != null && message.hasOwnProperty("Suit2"))
            object.Suit2 = message.Suit2;
        if (message.Suit2PerModule != null && message.hasOwnProperty("Suit2PerModule"))
            object.Suit2PerModule = message.Suit2PerModule;
        if (message.Suit4 != null && message.hasOwnProperty("Suit4"))
            object.Suit4 = message.Suit4;
        if (message.Suit4PerModule != null && message.hasOwnProperty("Suit4PerModule"))
            object.Suit4PerModule = message.Suit4PerModule;
        return object;
    };
    DraugSuit.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DraugSuit;
})();
$excelRoot.DuelDan = (function() {
    function DuelDan(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DuelDan.prototype.id = 0;
    DuelDan.prototype.zhCnName = "";
    DuelDan.prototype.zhCnDes = "";
    DuelDan.prototype.preDan = 0;
    DuelDan.prototype.nextDan = 0;
    DuelDan.prototype.icon = 0;
    DuelDan.prototype.dan = 0;
    DuelDan.prototype.level = 0;
    DuelDan.prototype.star = 0;
    DuelDan.prototype.totalStar = 0;
    DuelDan.prototype.reward = 0;
    DuelDan.prototype.resetId = 0;
    DuelDan.prototype.rankBaseScore = 0;
    DuelDan.prototype.winBaseJDScore = 0;
    DuelDan.prototype.loseBaseJDScore = 0;
    DuelDan.prototype.maxJDScore = 0;
    DuelDan.prototype.winBaseScore = 0;
    DuelDan.prototype.loseBaseScore = 0;
    DuelDan.create = function create(properties) {
        return new DuelDan(properties);
    };
    DuelDan.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.zhCnName);
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.zhCnDes);
        if (message.preDan != null && message.hasOwnProperty("preDan"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.preDan);
        if (message.nextDan != null && message.hasOwnProperty("nextDan"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nextDan);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.icon);
        if (message.dan != null && message.hasOwnProperty("dan"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.dan);
        if (message.level != null && message.hasOwnProperty("level"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.level);
        if (message.star != null && message.hasOwnProperty("star"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.star);
        if (message.totalStar != null && message.hasOwnProperty("totalStar"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.totalStar);
        if (message.reward != null && message.hasOwnProperty("reward"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.reward);
        if (message.resetId != null && message.hasOwnProperty("resetId"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.resetId);
        if (message.rankBaseScore != null && message.hasOwnProperty("rankBaseScore"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.rankBaseScore);
        if (message.winBaseJDScore != null && message.hasOwnProperty("winBaseJDScore"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.winBaseJDScore);
        if (message.loseBaseJDScore != null && message.hasOwnProperty("loseBaseJDScore"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.loseBaseJDScore);
        if (message.maxJDScore != null && message.hasOwnProperty("maxJDScore"))
            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.maxJDScore);
        if (message.winBaseScore != null && message.hasOwnProperty("winBaseScore"))
            writer.uint32(/* id 17, wireType 0 =*/136).int32(message.winBaseScore);
        if (message.loseBaseScore != null && message.hasOwnProperty("loseBaseScore"))
            writer.uint32(/* id 18, wireType 0 =*/144).int32(message.loseBaseScore);
        return writer;
    };
    DuelDan.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DuelDan.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DuelDan();
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
                message.preDan = reader.int32();
                break;
            case 5:
                message.nextDan = reader.int32();
                break;
            case 6:
                message.icon = reader.int32();
                break;
            case 7:
                message.dan = reader.int32();
                break;
            case 8:
                message.level = reader.int32();
                break;
            case 9:
                message.star = reader.int32();
                break;
            case 10:
                message.totalStar = reader.int32();
                break;
            case 11:
                message.reward = reader.int32();
                break;
            case 12:
                message.resetId = reader.int32();
                break;
            case 13:
                message.rankBaseScore = reader.int32();
                break;
            case 14:
                message.winBaseJDScore = reader.int32();
                break;
            case 15:
                message.loseBaseJDScore = reader.int32();
                break;
            case 16:
                message.maxJDScore = reader.int32();
                break;
            case 17:
                message.winBaseScore = reader.int32();
                break;
            case 18:
                message.loseBaseScore = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DuelDan.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DuelDan.verify = function verify(message) {
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
        if (message.preDan != null && message.hasOwnProperty("preDan"))
            if (!$util.isInteger(message.preDan))
                return "preDan: integer expected";
        if (message.nextDan != null && message.hasOwnProperty("nextDan"))
            if (!$util.isInteger(message.nextDan))
                return "nextDan: integer expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isInteger(message.icon))
                return "icon: integer expected";
        if (message.dan != null && message.hasOwnProperty("dan"))
            if (!$util.isInteger(message.dan))
                return "dan: integer expected";
        if (message.level != null && message.hasOwnProperty("level"))
            if (!$util.isInteger(message.level))
                return "level: integer expected";
        if (message.star != null && message.hasOwnProperty("star"))
            if (!$util.isInteger(message.star))
                return "star: integer expected";
        if (message.totalStar != null && message.hasOwnProperty("totalStar"))
            if (!$util.isInteger(message.totalStar))
                return "totalStar: integer expected";
        if (message.reward != null && message.hasOwnProperty("reward"))
            if (!$util.isInteger(message.reward))
                return "reward: integer expected";
        if (message.resetId != null && message.hasOwnProperty("resetId"))
            if (!$util.isInteger(message.resetId))
                return "resetId: integer expected";
        if (message.rankBaseScore != null && message.hasOwnProperty("rankBaseScore"))
            if (!$util.isInteger(message.rankBaseScore))
                return "rankBaseScore: integer expected";
        if (message.winBaseJDScore != null && message.hasOwnProperty("winBaseJDScore"))
            if (!$util.isInteger(message.winBaseJDScore))
                return "winBaseJDScore: integer expected";
        if (message.loseBaseJDScore != null && message.hasOwnProperty("loseBaseJDScore"))
            if (!$util.isInteger(message.loseBaseJDScore))
                return "loseBaseJDScore: integer expected";
        if (message.maxJDScore != null && message.hasOwnProperty("maxJDScore"))
            if (!$util.isInteger(message.maxJDScore))
                return "maxJDScore: integer expected";
        if (message.winBaseScore != null && message.hasOwnProperty("winBaseScore"))
            if (!$util.isInteger(message.winBaseScore))
                return "winBaseScore: integer expected";
        if (message.loseBaseScore != null && message.hasOwnProperty("loseBaseScore"))
            if (!$util.isInteger(message.loseBaseScore))
                return "loseBaseScore: integer expected";
        return null;
    };
    DuelDan.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DuelDan)
            return object;
        var message = new $excelRoot.DuelDan();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.zhCnDes != null)
            message.zhCnDes = String(object.zhCnDes);
        if (object.preDan != null)
            message.preDan = object.preDan | 0;
        if (object.nextDan != null)
            message.nextDan = object.nextDan | 0;
        if (object.icon != null)
            message.icon = object.icon | 0;
        if (object.dan != null)
            message.dan = object.dan | 0;
        if (object.level != null)
            message.level = object.level | 0;
        if (object.star != null)
            message.star = object.star | 0;
        if (object.totalStar != null)
            message.totalStar = object.totalStar | 0;
        if (object.reward != null)
            message.reward = object.reward | 0;
        if (object.resetId != null)
            message.resetId = object.resetId | 0;
        if (object.rankBaseScore != null)
            message.rankBaseScore = object.rankBaseScore | 0;
        if (object.winBaseJDScore != null)
            message.winBaseJDScore = object.winBaseJDScore | 0;
        if (object.loseBaseJDScore != null)
            message.loseBaseJDScore = object.loseBaseJDScore | 0;
        if (object.maxJDScore != null)
            message.maxJDScore = object.maxJDScore | 0;
        if (object.winBaseScore != null)
            message.winBaseScore = object.winBaseScore | 0;
        if (object.loseBaseScore != null)
            message.loseBaseScore = object.loseBaseScore | 0;
        return message;
    };
    DuelDan.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.zhCnName = "";
            object.zhCnDes = "";
            object.preDan = 0;
            object.nextDan = 0;
            object.icon = 0;
            object.dan = 0;
            object.level = 0;
            object.star = 0;
            object.totalStar = 0;
            object.reward = 0;
            object.resetId = 0;
            object.rankBaseScore = 0;
            object.winBaseJDScore = 0;
            object.loseBaseJDScore = 0;
            object.maxJDScore = 0;
            object.winBaseScore = 0;
            object.loseBaseScore = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            object.zhCnDes = message.zhCnDes;
        if (message.preDan != null && message.hasOwnProperty("preDan"))
            object.preDan = message.preDan;
        if (message.nextDan != null && message.hasOwnProperty("nextDan"))
            object.nextDan = message.nextDan;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.dan != null && message.hasOwnProperty("dan"))
            object.dan = message.dan;
        if (message.level != null && message.hasOwnProperty("level"))
            object.level = message.level;
        if (message.star != null && message.hasOwnProperty("star"))
            object.star = message.star;
        if (message.totalStar != null && message.hasOwnProperty("totalStar"))
            object.totalStar = message.totalStar;
        if (message.reward != null && message.hasOwnProperty("reward"))
            object.reward = message.reward;
        if (message.resetId != null && message.hasOwnProperty("resetId"))
            object.resetId = message.resetId;
        if (message.rankBaseScore != null && message.hasOwnProperty("rankBaseScore"))
            object.rankBaseScore = message.rankBaseScore;
        if (message.winBaseJDScore != null && message.hasOwnProperty("winBaseJDScore"))
            object.winBaseJDScore = message.winBaseJDScore;
        if (message.loseBaseJDScore != null && message.hasOwnProperty("loseBaseJDScore"))
            object.loseBaseJDScore = message.loseBaseJDScore;
        if (message.maxJDScore != null && message.hasOwnProperty("maxJDScore"))
            object.maxJDScore = message.maxJDScore;
        if (message.winBaseScore != null && message.hasOwnProperty("winBaseScore"))
            object.winBaseScore = message.winBaseScore;
        if (message.loseBaseScore != null && message.hasOwnProperty("loseBaseScore"))
            object.loseBaseScore = message.loseBaseScore;
        return object;
    };
    DuelDan.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DuelDan;
})();
$excelRoot.DuelPoint = (function() {
    function DuelPoint(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DuelPoint.prototype.id = 0;
    DuelPoint.prototype.zhCnName = "";
    DuelPoint.prototype.isDeduct = false;
    DuelPoint.prototype.upStarPoint = 0;
    DuelPoint.prototype.downStarPoint = 0;
    DuelPoint.create = function create(properties) {
        return new DuelPoint(properties);
    };
    DuelPoint.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.zhCnName);
        if (message.isDeduct != null && message.hasOwnProperty("isDeduct"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isDeduct);
        if (message.upStarPoint != null && message.hasOwnProperty("upStarPoint"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.upStarPoint);
        if (message.downStarPoint != null && message.hasOwnProperty("downStarPoint"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.downStarPoint);
        return writer;
    };
    DuelPoint.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DuelPoint.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DuelPoint();
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
                message.isDeduct = reader.bool();
                break;
            case 4:
                message.upStarPoint = reader.int32();
                break;
            case 5:
                message.downStarPoint = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DuelPoint.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DuelPoint.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.isDeduct != null && message.hasOwnProperty("isDeduct"))
            if (typeof message.isDeduct !== "boolean")
                return "isDeduct: boolean expected";
        if (message.upStarPoint != null && message.hasOwnProperty("upStarPoint"))
            if (!$util.isInteger(message.upStarPoint))
                return "upStarPoint: integer expected";
        if (message.downStarPoint != null && message.hasOwnProperty("downStarPoint"))
            if (!$util.isInteger(message.downStarPoint))
                return "downStarPoint: integer expected";
        return null;
    };
    DuelPoint.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DuelPoint)
            return object;
        var message = new $excelRoot.DuelPoint();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.isDeduct != null)
            message.isDeduct = Boolean(object.isDeduct);
        if (object.upStarPoint != null)
            message.upStarPoint = object.upStarPoint | 0;
        if (object.downStarPoint != null)
            message.downStarPoint = object.downStarPoint | 0;
        return message;
    };
    DuelPoint.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.zhCnName = "";
            object.isDeduct = false;
            object.upStarPoint = 0;
            object.downStarPoint = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.isDeduct != null && message.hasOwnProperty("isDeduct"))
            object.isDeduct = message.isDeduct;
        if (message.upStarPoint != null && message.hasOwnProperty("upStarPoint"))
            object.upStarPoint = message.upStarPoint;
        if (message.downStarPoint != null && message.hasOwnProperty("downStarPoint"))
            object.downStarPoint = message.downStarPoint;
        return object;
    };
    DuelPoint.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DuelPoint;
})();
$excelRoot.DuelRanking = (function() {
    function DuelRanking(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DuelRanking.prototype.id = 0;
    DuelRanking.prototype.zhCnName = "";
    DuelRanking.prototype.minRanking = 0;
    DuelRanking.prototype.maxRanking = 0;
    DuelRanking.prototype.reward = 0;
    DuelRanking.create = function create(properties) {
        return new DuelRanking(properties);
    };
    DuelRanking.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.zhCnName);
        if (message.minRanking != null && message.hasOwnProperty("minRanking"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.minRanking);
        if (message.maxRanking != null && message.hasOwnProperty("maxRanking"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.maxRanking);
        if (message.reward != null && message.hasOwnProperty("reward"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.reward);
        return writer;
    };
    DuelRanking.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DuelRanking.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DuelRanking();
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
                message.minRanking = reader.int32();
                break;
            case 4:
                message.maxRanking = reader.int32();
                break;
            case 5:
                message.reward = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DuelRanking.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DuelRanking.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.minRanking != null && message.hasOwnProperty("minRanking"))
            if (!$util.isInteger(message.minRanking))
                return "minRanking: integer expected";
        if (message.maxRanking != null && message.hasOwnProperty("maxRanking"))
            if (!$util.isInteger(message.maxRanking))
                return "maxRanking: integer expected";
        if (message.reward != null && message.hasOwnProperty("reward"))
            if (!$util.isInteger(message.reward))
                return "reward: integer expected";
        return null;
    };
    DuelRanking.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DuelRanking)
            return object;
        var message = new $excelRoot.DuelRanking();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.minRanking != null)
            message.minRanking = object.minRanking | 0;
        if (object.maxRanking != null)
            message.maxRanking = object.maxRanking | 0;
        if (object.reward != null)
            message.reward = object.reward | 0;
        return message;
    };
    DuelRanking.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.zhCnName = "";
            object.minRanking = 0;
            object.maxRanking = 0;
            object.reward = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.minRanking != null && message.hasOwnProperty("minRanking"))
            object.minRanking = message.minRanking;
        if (message.maxRanking != null && message.hasOwnProperty("maxRanking"))
            object.maxRanking = message.maxRanking;
        if (message.reward != null && message.hasOwnProperty("reward"))
            object.reward = message.reward;
        return object;
    };
    DuelRanking.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DuelRanking;
})();
$excelRoot.DuelSeason = (function() {
    function DuelSeason(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DuelSeason.prototype.id = 0;
    DuelSeason.prototype.type = 0;
    DuelSeason.prototype.zhCnName = "";
    DuelSeason.prototype.startTime = null;
    DuelSeason.prototype.overTime = null;
    DuelSeason.create = function create(properties) {
        return new DuelSeason(properties);
    };
    DuelSeason.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.zhCnName);
        if (message.startTime != null && message.hasOwnProperty("startTime"))
            $excelRoot.DTDateTime.encode(message.startTime, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.overTime != null && message.hasOwnProperty("overTime"))
            $excelRoot.DTDateTime.encode(message.overTime, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };
    DuelSeason.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DuelSeason.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DuelSeason();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.type = reader.int32();
                break;
            case 3:
                message.zhCnName = reader.string();
                break;
            case 4:
                message.startTime = $excelRoot.DTDateTime.decode(reader, reader.uint32());
                break;
            case 5:
                message.overTime = $excelRoot.DTDateTime.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DuelSeason.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DuelSeason.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.startTime != null && message.hasOwnProperty("startTime")) {
            var error = $excelRoot.DTDateTime.verify(message.startTime);
            if (error)
                return "startTime." + error;
        }
        if (message.overTime != null && message.hasOwnProperty("overTime")) {
            var error = $excelRoot.DTDateTime.verify(message.overTime);
            if (error)
                return "overTime." + error;
        }
        return null;
    };
    DuelSeason.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DuelSeason)
            return object;
        var message = new $excelRoot.DuelSeason();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.type != null)
            message.type = object.type | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.startTime != null) {
            if (typeof object.startTime !== "object")
                throw TypeError(".DuelSeason.startTime: object expected");
            message.startTime = $excelRoot.DTDateTime.fromObject(object.startTime);
        }
        if (object.overTime != null) {
            if (typeof object.overTime !== "object")
                throw TypeError(".DuelSeason.overTime: object expected");
            message.overTime = $excelRoot.DTDateTime.fromObject(object.overTime);
        }
        return message;
    };
    DuelSeason.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.type = 0;
            object.zhCnName = "";
            object.startTime = null;
            object.overTime = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.startTime != null && message.hasOwnProperty("startTime"))
            object.startTime = $excelRoot.DTDateTime.toObject(message.startTime, options);
        if (message.overTime != null && message.hasOwnProperty("overTime"))
            object.overTime = $excelRoot.DTDateTime.toObject(message.overTime, options);
        return object;
    };
    DuelSeason.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DuelSeason;
})();
$excelRoot.EquipExp = (function() {
    function EquipExp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    EquipExp.prototype.id = 0;
    EquipExp.prototype.level = 0;
    EquipExp.prototype.exp = 0;
    EquipExp.prototype.coin = null;
    EquipExp.create = function create(properties) {
        return new EquipExp(properties);
    };
    EquipExp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.level != null && message.hasOwnProperty("level"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.level);
        if (message.exp != null && message.hasOwnProperty("exp"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.exp);
        if (message.coin != null && message.hasOwnProperty("coin"))
            $excelRoot.DTItemNum.encode(message.coin, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };
    EquipExp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    EquipExp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.EquipExp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.level = reader.int32();
                break;
            case 3:
                message.exp = reader.int32();
                break;
            case 4:
                message.coin = $excelRoot.DTItemNum.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    EquipExp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    EquipExp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.level != null && message.hasOwnProperty("level"))
            if (!$util.isInteger(message.level))
                return "level: integer expected";
        if (message.exp != null && message.hasOwnProperty("exp"))
            if (!$util.isInteger(message.exp))
                return "exp: integer expected";
        if (message.coin != null && message.hasOwnProperty("coin")) {
            var error = $excelRoot.DTItemNum.verify(message.coin);
            if (error)
                return "coin." + error;
        }
        return null;
    };
    EquipExp.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.EquipExp)
            return object;
        var message = new $excelRoot.EquipExp();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.level != null)
            message.level = object.level | 0;
        if (object.exp != null)
            message.exp = object.exp | 0;
        if (object.coin != null) {
            if (typeof object.coin !== "object")
                throw TypeError(".EquipExp.coin: object expected");
            message.coin = $excelRoot.DTItemNum.fromObject(object.coin);
        }
        return message;
    };
    EquipExp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.level = 0;
            object.exp = 0;
            object.coin = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.level != null && message.hasOwnProperty("level"))
            object.level = message.level;
        if (message.exp != null && message.hasOwnProperty("exp"))
            object.exp = message.exp;
        if (message.coin != null && message.hasOwnProperty("coin"))
            object.coin = $excelRoot.DTItemNum.toObject(message.coin, options);
        return object;
    };
    EquipExp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return EquipExp;
})();
$excelRoot.Equipment = (function() {
    function Equipment(properties) {
        this.armorType = [];
        this.useType = [];
        this.useUi = [];
        this.getWay = [];
        this.buffId = [];
        this.heroID = [];
        this.propID = [];
        this.starProp = [];
        this.itemNum = [];
        this.starLevelReq = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Equipment.prototype.id = 0;
    Equipment.prototype.zhCnName = "";
    Equipment.prototype.indexName = "";
    Equipment.prototype.zhCnDes = "";
    Equipment.prototype.quality = 0;
    Equipment.prototype.icon = 0;
    Equipment.prototype.modle = 0;
    Equipment.prototype.equipPos = 0;
    Equipment.prototype.equipType = 0;
    Equipment.prototype.armorType = $util.emptyArray;
    Equipment.prototype.useType = $util.emptyArray;
    Equipment.prototype.useUi = $util.emptyArray;
    Equipment.prototype.getWay = $util.emptyArray;
    Equipment.prototype.buffId = $util.emptyArray;
    Equipment.prototype.heroID = $util.emptyArray;
    Equipment.prototype.atkType = 0;
    Equipment.prototype.atkRange = null;
    Equipment.prototype.propID = $util.emptyArray;
    Equipment.prototype.expPara = 0;
    Equipment.prototype.starProp = $util.emptyArray;
    Equipment.prototype.module = 0;
    Equipment.prototype.specStarItem = 0;
    Equipment.prototype.itemNum = $util.emptyArray;
    Equipment.prototype.starLevelReq = $util.emptyArray;
    Equipment.prototype.eat = false;
    Equipment.prototype.eatPara = 0;
    Equipment.prototype.decompose = false;
    Equipment.prototype.dropItem = 0;
    Equipment.create = function create(properties) {
        return new Equipment(properties);
    };
    Equipment.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.zhCnName);
        if (message.indexName != null && message.hasOwnProperty("indexName"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.indexName);
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.zhCnDes);
        if (message.quality != null && message.hasOwnProperty("quality"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.quality);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.icon);
        if (message.modle != null && message.hasOwnProperty("modle"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.modle);
        if (message.equipPos != null && message.hasOwnProperty("equipPos"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.equipPos);
        if (message.equipType != null && message.hasOwnProperty("equipType"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.equipType);
        if (message.armorType != null && message.armorType.length) {
            writer.uint32(/* id 10, wireType 2 =*/82).fork();
            for (var i = 0; i < message.armorType.length; ++i)
                writer.int32(message.armorType[i]);
            writer.ldelim();
        }
        if (message.useType != null && message.useType.length) {
            writer.uint32(/* id 11, wireType 2 =*/90).fork();
            for (var i = 0; i < message.useType.length; ++i)
                writer.int32(message.useType[i]);
            writer.ldelim();
        }
        if (message.useUi != null && message.useUi.length) {
            writer.uint32(/* id 12, wireType 2 =*/98).fork();
            for (var i = 0; i < message.useUi.length; ++i)
                writer.int32(message.useUi[i]);
            writer.ldelim();
        }
        if (message.getWay != null && message.getWay.length) {
            writer.uint32(/* id 13, wireType 2 =*/106).fork();
            for (var i = 0; i < message.getWay.length; ++i)
                writer.int32(message.getWay[i]);
            writer.ldelim();
        }
        if (message.buffId != null && message.buffId.length)
            for (var i = 0; i < message.buffId.length; ++i)
                $excelRoot.DTBuffId.encode(message.buffId[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.heroID != null && message.heroID.length) {
            writer.uint32(/* id 15, wireType 2 =*/122).fork();
            for (var i = 0; i < message.heroID.length; ++i)
                writer.int32(message.heroID[i]);
            writer.ldelim();
        }
        if (message.atkType != null && message.hasOwnProperty("atkType"))
            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.atkType);
        if (message.atkRange != null && message.hasOwnProperty("atkRange"))
            $excelRoot.DTRandomInterval.encode(message.atkRange, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.propID != null && message.propID.length)
            for (var i = 0; i < message.propID.length; ++i)
                $excelRoot.DTProp.encode(message.propID[i], writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        if (message.expPara != null && message.hasOwnProperty("expPara"))
            writer.uint32(/* id 19, wireType 0 =*/152).int32(message.expPara);
        if (message.starProp != null && message.starProp.length)
            for (var i = 0; i < message.starProp.length; ++i)
                $excelRoot.DTProp.encode(message.starProp[i], writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
        if (message.module != null && message.hasOwnProperty("module"))
            writer.uint32(/* id 21, wireType 0 =*/168).int32(message.module);
        if (message.specStarItem != null && message.hasOwnProperty("specStarItem"))
            writer.uint32(/* id 22, wireType 0 =*/176).int32(message.specStarItem);
        if (message.itemNum != null && message.itemNum.length) {
            writer.uint32(/* id 23, wireType 2 =*/186).fork();
            for (var i = 0; i < message.itemNum.length; ++i)
                writer.int32(message.itemNum[i]);
            writer.ldelim();
        }
        if (message.starLevelReq != null && message.starLevelReq.length) {
            writer.uint32(/* id 24, wireType 2 =*/194).fork();
            for (var i = 0; i < message.starLevelReq.length; ++i)
                writer.int32(message.starLevelReq[i]);
            writer.ldelim();
        }
        if (message.eat != null && message.hasOwnProperty("eat"))
            writer.uint32(/* id 25, wireType 0 =*/200).bool(message.eat);
        if (message.eatPara != null && message.hasOwnProperty("eatPara"))
            writer.uint32(/* id 26, wireType 0 =*/208).int32(message.eatPara);
        if (message.decompose != null && message.hasOwnProperty("decompose"))
            writer.uint32(/* id 27, wireType 0 =*/216).bool(message.decompose);
        if (message.dropItem != null && message.hasOwnProperty("dropItem"))
            writer.uint32(/* id 28, wireType 0 =*/224).int32(message.dropItem);
        return writer;
    };
    Equipment.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Equipment.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Equipment();
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
                message.indexName = reader.string();
                break;
            case 4:
                message.zhCnDes = reader.string();
                break;
            case 5:
                message.quality = reader.int32();
                break;
            case 6:
                message.icon = reader.int32();
                break;
            case 7:
                message.modle = reader.int32();
                break;
            case 8:
                message.equipPos = reader.int32();
                break;
            case 9:
                message.equipType = reader.int32();
                break;
            case 10:
                if (!(message.armorType && message.armorType.length))
                    message.armorType = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.armorType.push(reader.int32());
                } else
                    message.armorType.push(reader.int32());
                break;
            case 11:
                if (!(message.useType && message.useType.length))
                    message.useType = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.useType.push(reader.int32());
                } else
                    message.useType.push(reader.int32());
                break;
            case 12:
                if (!(message.useUi && message.useUi.length))
                    message.useUi = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.useUi.push(reader.int32());
                } else
                    message.useUi.push(reader.int32());
                break;
            case 13:
                if (!(message.getWay && message.getWay.length))
                    message.getWay = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.getWay.push(reader.int32());
                } else
                    message.getWay.push(reader.int32());
                break;
            case 14:
                if (!(message.buffId && message.buffId.length))
                    message.buffId = [];
                message.buffId.push($excelRoot.DTBuffId.decode(reader, reader.uint32()));
                break;
            case 15:
                if (!(message.heroID && message.heroID.length))
                    message.heroID = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.heroID.push(reader.int32());
                } else
                    message.heroID.push(reader.int32());
                break;
            case 16:
                message.atkType = reader.int32();
                break;
            case 17:
                message.atkRange = $excelRoot.DTRandomInterval.decode(reader, reader.uint32());
                break;
            case 18:
                if (!(message.propID && message.propID.length))
                    message.propID = [];
                message.propID.push($excelRoot.DTProp.decode(reader, reader.uint32()));
                break;
            case 19:
                message.expPara = reader.int32();
                break;
            case 20:
                if (!(message.starProp && message.starProp.length))
                    message.starProp = [];
                message.starProp.push($excelRoot.DTProp.decode(reader, reader.uint32()));
                break;
            case 21:
                message.module = reader.int32();
                break;
            case 22:
                message.specStarItem = reader.int32();
                break;
            case 23:
                if (!(message.itemNum && message.itemNum.length))
                    message.itemNum = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.itemNum.push(reader.int32());
                } else
                    message.itemNum.push(reader.int32());
                break;
            case 24:
                if (!(message.starLevelReq && message.starLevelReq.length))
                    message.starLevelReq = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.starLevelReq.push(reader.int32());
                } else
                    message.starLevelReq.push(reader.int32());
                break;
            case 25:
                message.eat = reader.bool();
                break;
            case 26:
                message.eatPara = reader.int32();
                break;
            case 27:
                message.decompose = reader.bool();
                break;
            case 28:
                message.dropItem = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Equipment.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Equipment.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.indexName != null && message.hasOwnProperty("indexName"))
            if (!$util.isString(message.indexName))
                return "indexName: string expected";
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            if (!$util.isString(message.zhCnDes))
                return "zhCnDes: string expected";
        if (message.quality != null && message.hasOwnProperty("quality"))
            if (!$util.isInteger(message.quality))
                return "quality: integer expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isInteger(message.icon))
                return "icon: integer expected";
        if (message.modle != null && message.hasOwnProperty("modle"))
            if (!$util.isInteger(message.modle))
                return "modle: integer expected";
        if (message.equipPos != null && message.hasOwnProperty("equipPos"))
            if (!$util.isInteger(message.equipPos))
                return "equipPos: integer expected";
        if (message.equipType != null && message.hasOwnProperty("equipType"))
            if (!$util.isInteger(message.equipType))
                return "equipType: integer expected";
        if (message.armorType != null && message.hasOwnProperty("armorType")) {
            if (!Array.isArray(message.armorType))
                return "armorType: array expected";
            for (var i = 0; i < message.armorType.length; ++i)
                if (!$util.isInteger(message.armorType[i]))
                    return "armorType: integer[] expected";
        }
        if (message.useType != null && message.hasOwnProperty("useType")) {
            if (!Array.isArray(message.useType))
                return "useType: array expected";
            for (var i = 0; i < message.useType.length; ++i)
                if (!$util.isInteger(message.useType[i]))
                    return "useType: integer[] expected";
        }
        if (message.useUi != null && message.hasOwnProperty("useUi")) {
            if (!Array.isArray(message.useUi))
                return "useUi: array expected";
            for (var i = 0; i < message.useUi.length; ++i)
                if (!$util.isInteger(message.useUi[i]))
                    return "useUi: integer[] expected";
        }
        if (message.getWay != null && message.hasOwnProperty("getWay")) {
            if (!Array.isArray(message.getWay))
                return "getWay: array expected";
            for (var i = 0; i < message.getWay.length; ++i)
                if (!$util.isInteger(message.getWay[i]))
                    return "getWay: integer[] expected";
        }
        if (message.buffId != null && message.hasOwnProperty("buffId")) {
            if (!Array.isArray(message.buffId))
                return "buffId: array expected";
            for (var i = 0; i < message.buffId.length; ++i) {
                var error = $excelRoot.DTBuffId.verify(message.buffId[i]);
                if (error)
                    return "buffId." + error;
            }
        }
        if (message.heroID != null && message.hasOwnProperty("heroID")) {
            if (!Array.isArray(message.heroID))
                return "heroID: array expected";
            for (var i = 0; i < message.heroID.length; ++i)
                if (!$util.isInteger(message.heroID[i]))
                    return "heroID: integer[] expected";
        }
        if (message.atkType != null && message.hasOwnProperty("atkType"))
            if (!$util.isInteger(message.atkType))
                return "atkType: integer expected";
        if (message.atkRange != null && message.hasOwnProperty("atkRange")) {
            var error = $excelRoot.DTRandomInterval.verify(message.atkRange);
            if (error)
                return "atkRange." + error;
        }
        if (message.propID != null && message.hasOwnProperty("propID")) {
            if (!Array.isArray(message.propID))
                return "propID: array expected";
            for (var i = 0; i < message.propID.length; ++i) {
                var error = $excelRoot.DTProp.verify(message.propID[i]);
                if (error)
                    return "propID." + error;
            }
        }
        if (message.expPara != null && message.hasOwnProperty("expPara"))
            if (!$util.isInteger(message.expPara))
                return "expPara: integer expected";
        if (message.starProp != null && message.hasOwnProperty("starProp")) {
            if (!Array.isArray(message.starProp))
                return "starProp: array expected";
            for (var i = 0; i < message.starProp.length; ++i) {
                var error = $excelRoot.DTProp.verify(message.starProp[i]);
                if (error)
                    return "starProp." + error;
            }
        }
        if (message.module != null && message.hasOwnProperty("module"))
            if (!$util.isInteger(message.module))
                return "module: integer expected";
        if (message.specStarItem != null && message.hasOwnProperty("specStarItem"))
            if (!$util.isInteger(message.specStarItem))
                return "specStarItem: integer expected";
        if (message.itemNum != null && message.hasOwnProperty("itemNum")) {
            if (!Array.isArray(message.itemNum))
                return "itemNum: array expected";
            for (var i = 0; i < message.itemNum.length; ++i)
                if (!$util.isInteger(message.itemNum[i]))
                    return "itemNum: integer[] expected";
        }
        if (message.starLevelReq != null && message.hasOwnProperty("starLevelReq")) {
            if (!Array.isArray(message.starLevelReq))
                return "starLevelReq: array expected";
            for (var i = 0; i < message.starLevelReq.length; ++i)
                if (!$util.isInteger(message.starLevelReq[i]))
                    return "starLevelReq: integer[] expected";
        }
        if (message.eat != null && message.hasOwnProperty("eat"))
            if (typeof message.eat !== "boolean")
                return "eat: boolean expected";
        if (message.eatPara != null && message.hasOwnProperty("eatPara"))
            if (!$util.isInteger(message.eatPara))
                return "eatPara: integer expected";
        if (message.decompose != null && message.hasOwnProperty("decompose"))
            if (typeof message.decompose !== "boolean")
                return "decompose: boolean expected";
        if (message.dropItem != null && message.hasOwnProperty("dropItem"))
            if (!$util.isInteger(message.dropItem))
                return "dropItem: integer expected";
        return null;
    };
    Equipment.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Equipment)
            return object;
        var message = new $excelRoot.Equipment();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.indexName != null)
            message.indexName = String(object.indexName);
        if (object.zhCnDes != null)
            message.zhCnDes = String(object.zhCnDes);
        if (object.quality != null)
            message.quality = object.quality | 0;
        if (object.icon != null)
            message.icon = object.icon | 0;
        if (object.modle != null)
            message.modle = object.modle | 0;
        if (object.equipPos != null)
            message.equipPos = object.equipPos | 0;
        if (object.equipType != null)
            message.equipType = object.equipType | 0;
        if (object.armorType) {
            if (!Array.isArray(object.armorType))
                throw TypeError(".Equipment.armorType: array expected");
            message.armorType = [];
            for (var i = 0; i < object.armorType.length; ++i)
                message.armorType[i] = object.armorType[i] | 0;
        }
        if (object.useType) {
            if (!Array.isArray(object.useType))
                throw TypeError(".Equipment.useType: array expected");
            message.useType = [];
            for (var i = 0; i < object.useType.length; ++i)
                message.useType[i] = object.useType[i] | 0;
        }
        if (object.useUi) {
            if (!Array.isArray(object.useUi))
                throw TypeError(".Equipment.useUi: array expected");
            message.useUi = [];
            for (var i = 0; i < object.useUi.length; ++i)
                message.useUi[i] = object.useUi[i] | 0;
        }
        if (object.getWay) {
            if (!Array.isArray(object.getWay))
                throw TypeError(".Equipment.getWay: array expected");
            message.getWay = [];
            for (var i = 0; i < object.getWay.length; ++i)
                message.getWay[i] = object.getWay[i] | 0;
        }
        if (object.buffId) {
            if (!Array.isArray(object.buffId))
                throw TypeError(".Equipment.buffId: array expected");
            message.buffId = [];
            for (var i = 0; i < object.buffId.length; ++i) {
                if (typeof object.buffId[i] !== "object")
                    throw TypeError(".Equipment.buffId: object expected");
                message.buffId[i] = $excelRoot.DTBuffId.fromObject(object.buffId[i]);
            }
        }
        if (object.heroID) {
            if (!Array.isArray(object.heroID))
                throw TypeError(".Equipment.heroID: array expected");
            message.heroID = [];
            for (var i = 0; i < object.heroID.length; ++i)
                message.heroID[i] = object.heroID[i] | 0;
        }
        if (object.atkType != null)
            message.atkType = object.atkType | 0;
        if (object.atkRange != null) {
            if (typeof object.atkRange !== "object")
                throw TypeError(".Equipment.atkRange: object expected");
            message.atkRange = $excelRoot.DTRandomInterval.fromObject(object.atkRange);
        }
        if (object.propID) {
            if (!Array.isArray(object.propID))
                throw TypeError(".Equipment.propID: array expected");
            message.propID = [];
            for (var i = 0; i < object.propID.length; ++i) {
                if (typeof object.propID[i] !== "object")
                    throw TypeError(".Equipment.propID: object expected");
                message.propID[i] = $excelRoot.DTProp.fromObject(object.propID[i]);
            }
        }
        if (object.expPara != null)
            message.expPara = object.expPara | 0;
        if (object.starProp) {
            if (!Array.isArray(object.starProp))
                throw TypeError(".Equipment.starProp: array expected");
            message.starProp = [];
            for (var i = 0; i < object.starProp.length; ++i) {
                if (typeof object.starProp[i] !== "object")
                    throw TypeError(".Equipment.starProp: object expected");
                message.starProp[i] = $excelRoot.DTProp.fromObject(object.starProp[i]);
            }
        }
        if (object.module != null)
            message.module = object.module | 0;
        if (object.specStarItem != null)
            message.specStarItem = object.specStarItem | 0;
        if (object.itemNum) {
            if (!Array.isArray(object.itemNum))
                throw TypeError(".Equipment.itemNum: array expected");
            message.itemNum = [];
            for (var i = 0; i < object.itemNum.length; ++i)
                message.itemNum[i] = object.itemNum[i] | 0;
        }
        if (object.starLevelReq) {
            if (!Array.isArray(object.starLevelReq))
                throw TypeError(".Equipment.starLevelReq: array expected");
            message.starLevelReq = [];
            for (var i = 0; i < object.starLevelReq.length; ++i)
                message.starLevelReq[i] = object.starLevelReq[i] | 0;
        }
        if (object.eat != null)
            message.eat = Boolean(object.eat);
        if (object.eatPara != null)
            message.eatPara = object.eatPara | 0;
        if (object.decompose != null)
            message.decompose = Boolean(object.decompose);
        if (object.dropItem != null)
            message.dropItem = object.dropItem | 0;
        return message;
    };
    Equipment.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.armorType = [];
            object.useType = [];
            object.useUi = [];
            object.getWay = [];
            object.buffId = [];
            object.heroID = [];
            object.propID = [];
            object.starProp = [];
            object.itemNum = [];
            object.starLevelReq = [];
        }
        if (options.defaults) {
            object.id = 0;
            object.zhCnName = "";
            object.indexName = "";
            object.zhCnDes = "";
            object.quality = 0;
            object.icon = 0;
            object.modle = 0;
            object.equipPos = 0;
            object.equipType = 0;
            object.atkType = 0;
            object.atkRange = null;
            object.expPara = 0;
            object.module = 0;
            object.specStarItem = 0;
            object.eat = false;
            object.eatPara = 0;
            object.decompose = false;
            object.dropItem = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.indexName != null && message.hasOwnProperty("indexName"))
            object.indexName = message.indexName;
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            object.zhCnDes = message.zhCnDes;
        if (message.quality != null && message.hasOwnProperty("quality"))
            object.quality = message.quality;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.modle != null && message.hasOwnProperty("modle"))
            object.modle = message.modle;
        if (message.equipPos != null && message.hasOwnProperty("equipPos"))
            object.equipPos = message.equipPos;
        if (message.equipType != null && message.hasOwnProperty("equipType"))
            object.equipType = message.equipType;
        if (message.armorType && message.armorType.length) {
            object.armorType = [];
            for (var j = 0; j < message.armorType.length; ++j)
                object.armorType[j] = message.armorType[j];
        }
        if (message.useType && message.useType.length) {
            object.useType = [];
            for (var j = 0; j < message.useType.length; ++j)
                object.useType[j] = message.useType[j];
        }
        if (message.useUi && message.useUi.length) {
            object.useUi = [];
            for (var j = 0; j < message.useUi.length; ++j)
                object.useUi[j] = message.useUi[j];
        }
        if (message.getWay && message.getWay.length) {
            object.getWay = [];
            for (var j = 0; j < message.getWay.length; ++j)
                object.getWay[j] = message.getWay[j];
        }
        if (message.buffId && message.buffId.length) {
            object.buffId = [];
            for (var j = 0; j < message.buffId.length; ++j)
                object.buffId[j] = $excelRoot.DTBuffId.toObject(message.buffId[j], options);
        }
        if (message.heroID && message.heroID.length) {
            object.heroID = [];
            for (var j = 0; j < message.heroID.length; ++j)
                object.heroID[j] = message.heroID[j];
        }
        if (message.atkType != null && message.hasOwnProperty("atkType"))
            object.atkType = message.atkType;
        if (message.atkRange != null && message.hasOwnProperty("atkRange"))
            object.atkRange = $excelRoot.DTRandomInterval.toObject(message.atkRange, options);
        if (message.propID && message.propID.length) {
            object.propID = [];
            for (var j = 0; j < message.propID.length; ++j)
                object.propID[j] = $excelRoot.DTProp.toObject(message.propID[j], options);
        }
        if (message.expPara != null && message.hasOwnProperty("expPara"))
            object.expPara = message.expPara;
        if (message.starProp && message.starProp.length) {
            object.starProp = [];
            for (var j = 0; j < message.starProp.length; ++j)
                object.starProp[j] = $excelRoot.DTProp.toObject(message.starProp[j], options);
        }
        if (message.module != null && message.hasOwnProperty("module"))
            object.module = message.module;
        if (message.specStarItem != null && message.hasOwnProperty("specStarItem"))
            object.specStarItem = message.specStarItem;
        if (message.itemNum && message.itemNum.length) {
            object.itemNum = [];
            for (var j = 0; j < message.itemNum.length; ++j)
                object.itemNum[j] = message.itemNum[j];
        }
        if (message.starLevelReq && message.starLevelReq.length) {
            object.starLevelReq = [];
            for (var j = 0; j < message.starLevelReq.length; ++j)
                object.starLevelReq[j] = message.starLevelReq[j];
        }
        if (message.eat != null && message.hasOwnProperty("eat"))
            object.eat = message.eat;
        if (message.eatPara != null && message.hasOwnProperty("eatPara"))
            object.eatPara = message.eatPara;
        if (message.decompose != null && message.hasOwnProperty("decompose"))
            object.decompose = message.decompose;
        if (message.dropItem != null && message.hasOwnProperty("dropItem"))
            object.dropItem = message.dropItem;
        return object;
    };
    Equipment.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Equipment;
})();
$excelRoot.Gashapon = (function() {
    function Gashapon(properties) {
        this.cost = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Gashapon.prototype.id = 0;
    Gashapon.prototype.type = 0;
    Gashapon.prototype.menu = 0;
    Gashapon.prototype.num = 0;
    Gashapon.prototype.cost = $util.emptyArray;
    Gashapon.prototype.freeNum = 0;
    Gashapon.prototype.freeTime = 0;
    Gashapon.prototype.startTime = null;
    Gashapon.prototype.endTime = null;
    Gashapon.prototype.pic = 0;
    Gashapon.prototype.rewardId = 0;
    Gashapon.prototype.allowance = 0;
    Gashapon.prototype.allowanceNum = 0;
    Gashapon.prototype.desc = "";
    Gashapon.create = function create(properties) {
        return new Gashapon(properties);
    };
    Gashapon.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
        if (message.menu != null && message.hasOwnProperty("menu"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.menu);
        if (message.num != null && message.hasOwnProperty("num"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.num);
        if (message.cost != null && message.cost.length)
            for (var i = 0; i < message.cost.length; ++i)
                $excelRoot.DTFixItemNum.encode(message.cost[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.freeNum != null && message.hasOwnProperty("freeNum"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.freeNum);
        if (message.freeTime != null && message.hasOwnProperty("freeTime"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.freeTime);
        if (message.startTime != null && message.hasOwnProperty("startTime"))
            $excelRoot.DTDateTime.encode(message.startTime, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.endTime != null && message.hasOwnProperty("endTime"))
            $excelRoot.DTDateTime.encode(message.endTime, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.pic != null && message.hasOwnProperty("pic"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.pic);
        if (message.rewardId != null && message.hasOwnProperty("rewardId"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.rewardId);
        if (message.allowance != null && message.hasOwnProperty("allowance"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.allowance);
        if (message.allowanceNum != null && message.hasOwnProperty("allowanceNum"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.allowanceNum);
        if (message.desc != null && message.hasOwnProperty("desc"))
            writer.uint32(/* id 15, wireType 2 =*/122).string(message.desc);
        return writer;
    };
    Gashapon.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Gashapon.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Gashapon();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 3:
                message.type = reader.int32();
                break;
            case 4:
                message.menu = reader.int32();
                break;
            case 5:
                message.num = reader.int32();
                break;
            case 6:
                if (!(message.cost && message.cost.length))
                    message.cost = [];
                message.cost.push($excelRoot.DTFixItemNum.decode(reader, reader.uint32()));
                break;
            case 7:
                message.freeNum = reader.int32();
                break;
            case 8:
                message.freeTime = reader.int32();
                break;
            case 9:
                message.startTime = $excelRoot.DTDateTime.decode(reader, reader.uint32());
                break;
            case 10:
                message.endTime = $excelRoot.DTDateTime.decode(reader, reader.uint32());
                break;
            case 11:
                message.pic = reader.int32();
                break;
            case 12:
                message.rewardId = reader.int32();
                break;
            case 13:
                message.allowance = reader.int32();
                break;
            case 14:
                message.allowanceNum = reader.int32();
                break;
            case 15:
                message.desc = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Gashapon.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Gashapon.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.menu != null && message.hasOwnProperty("menu"))
            if (!$util.isInteger(message.menu))
                return "menu: integer expected";
        if (message.num != null && message.hasOwnProperty("num"))
            if (!$util.isInteger(message.num))
                return "num: integer expected";
        if (message.cost != null && message.hasOwnProperty("cost")) {
            if (!Array.isArray(message.cost))
                return "cost: array expected";
            for (var i = 0; i < message.cost.length; ++i) {
                var error = $excelRoot.DTFixItemNum.verify(message.cost[i]);
                if (error)
                    return "cost." + error;
            }
        }
        if (message.freeNum != null && message.hasOwnProperty("freeNum"))
            if (!$util.isInteger(message.freeNum))
                return "freeNum: integer expected";
        if (message.freeTime != null && message.hasOwnProperty("freeTime"))
            if (!$util.isInteger(message.freeTime))
                return "freeTime: integer expected";
        if (message.startTime != null && message.hasOwnProperty("startTime")) {
            var error = $excelRoot.DTDateTime.verify(message.startTime);
            if (error)
                return "startTime." + error;
        }
        if (message.endTime != null && message.hasOwnProperty("endTime")) {
            var error = $excelRoot.DTDateTime.verify(message.endTime);
            if (error)
                return "endTime." + error;
        }
        if (message.pic != null && message.hasOwnProperty("pic"))
            if (!$util.isInteger(message.pic))
                return "pic: integer expected";
        if (message.rewardId != null && message.hasOwnProperty("rewardId"))
            if (!$util.isInteger(message.rewardId))
                return "rewardId: integer expected";
        if (message.allowance != null && message.hasOwnProperty("allowance"))
            if (!$util.isInteger(message.allowance))
                return "allowance: integer expected";
        if (message.allowanceNum != null && message.hasOwnProperty("allowanceNum"))
            if (!$util.isInteger(message.allowanceNum))
                return "allowanceNum: integer expected";
        if (message.desc != null && message.hasOwnProperty("desc"))
            if (!$util.isString(message.desc))
                return "desc: string expected";
        return null;
    };
    Gashapon.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Gashapon)
            return object;
        var message = new $excelRoot.Gashapon();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.type != null)
            message.type = object.type | 0;
        if (object.menu != null)
            message.menu = object.menu | 0;
        if (object.num != null)
            message.num = object.num | 0;
        if (object.cost) {
            if (!Array.isArray(object.cost))
                throw TypeError(".Gashapon.cost: array expected");
            message.cost = [];
            for (var i = 0; i < object.cost.length; ++i) {
                if (typeof object.cost[i] !== "object")
                    throw TypeError(".Gashapon.cost: object expected");
                message.cost[i] = $excelRoot.DTFixItemNum.fromObject(object.cost[i]);
            }
        }
        if (object.freeNum != null)
            message.freeNum = object.freeNum | 0;
        if (object.freeTime != null)
            message.freeTime = object.freeTime | 0;
        if (object.startTime != null) {
            if (typeof object.startTime !== "object")
                throw TypeError(".Gashapon.startTime: object expected");
            message.startTime = $excelRoot.DTDateTime.fromObject(object.startTime);
        }
        if (object.endTime != null) {
            if (typeof object.endTime !== "object")
                throw TypeError(".Gashapon.endTime: object expected");
            message.endTime = $excelRoot.DTDateTime.fromObject(object.endTime);
        }
        if (object.pic != null)
            message.pic = object.pic | 0;
        if (object.rewardId != null)
            message.rewardId = object.rewardId | 0;
        if (object.allowance != null)
            message.allowance = object.allowance | 0;
        if (object.allowanceNum != null)
            message.allowanceNum = object.allowanceNum | 0;
        if (object.desc != null)
            message.desc = String(object.desc);
        return message;
    };
    Gashapon.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.cost = [];
        if (options.defaults) {
            object.id = 0;
            object.type = 0;
            object.menu = 0;
            object.num = 0;
            object.freeNum = 0;
            object.freeTime = 0;
            object.startTime = null;
            object.endTime = null;
            object.pic = 0;
            object.rewardId = 0;
            object.allowance = 0;
            object.allowanceNum = 0;
            object.desc = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.menu != null && message.hasOwnProperty("menu"))
            object.menu = message.menu;
        if (message.num != null && message.hasOwnProperty("num"))
            object.num = message.num;
        if (message.cost && message.cost.length) {
            object.cost = [];
            for (var j = 0; j < message.cost.length; ++j)
                object.cost[j] = $excelRoot.DTFixItemNum.toObject(message.cost[j], options);
        }
        if (message.freeNum != null && message.hasOwnProperty("freeNum"))
            object.freeNum = message.freeNum;
        if (message.freeTime != null && message.hasOwnProperty("freeTime"))
            object.freeTime = message.freeTime;
        if (message.startTime != null && message.hasOwnProperty("startTime"))
            object.startTime = $excelRoot.DTDateTime.toObject(message.startTime, options);
        if (message.endTime != null && message.hasOwnProperty("endTime"))
            object.endTime = $excelRoot.DTDateTime.toObject(message.endTime, options);
        if (message.pic != null && message.hasOwnProperty("pic"))
            object.pic = message.pic;
        if (message.rewardId != null && message.hasOwnProperty("rewardId"))
            object.rewardId = message.rewardId;
        if (message.allowance != null && message.hasOwnProperty("allowance"))
            object.allowance = message.allowance;
        if (message.allowanceNum != null && message.hasOwnProperty("allowanceNum"))
            object.allowanceNum = message.allowanceNum;
        if (message.desc != null && message.hasOwnProperty("desc"))
            object.desc = message.desc;
        return object;
    };
    Gashapon.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Gashapon;
})();
$excelRoot.Guide = (function() {
    function Guide(properties) {
        this.fingerPostion = [];
        this.haloPostion = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Guide.prototype.id = 0;
    Guide.prototype.trigger = 0;
    Guide.prototype.triggerValue = 0;
    Guide.prototype.group = 0;
    Guide.prototype.groupOrder = 0;
    Guide.prototype.plotGroupId = 0;
    Guide.prototype.type = 0;
    Guide.prototype.finger = false;
    Guide.prototype.fingerPostion = $util.emptyArray;
    Guide.prototype.halo = false;
    Guide.prototype.haloPostion = $util.emptyArray;
    Guide.prototype.zhCnName = "";
    Guide.prototype.zhCnDes = "";
    Guide.prototype.menuId = 0;
    Guide.create = function create(properties) {
        return new Guide(properties);
    };
    Guide.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.trigger != null && message.hasOwnProperty("trigger"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.trigger);
        if (message.triggerValue != null && message.hasOwnProperty("triggerValue"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.triggerValue);
        if (message.group != null && message.hasOwnProperty("group"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.group);
        if (message.groupOrder != null && message.hasOwnProperty("groupOrder"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.groupOrder);
        if (message.plotGroupId != null && message.hasOwnProperty("plotGroupId"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.plotGroupId);
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.type);
        if (message.finger != null && message.hasOwnProperty("finger"))
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.finger);
        if (message.fingerPostion != null && message.fingerPostion.length) {
            writer.uint32(/* id 9, wireType 2 =*/74).fork();
            for (var i = 0; i < message.fingerPostion.length; ++i)
                writer.int32(message.fingerPostion[i]);
            writer.ldelim();
        }
        if (message.halo != null && message.hasOwnProperty("halo"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.halo);
        if (message.haloPostion != null && message.haloPostion.length) {
            writer.uint32(/* id 11, wireType 2 =*/90).fork();
            for (var i = 0; i < message.haloPostion.length; ++i)
                writer.int32(message.haloPostion[i]);
            writer.ldelim();
        }
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.zhCnName);
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.zhCnDes);
        if (message.menuId != null && message.hasOwnProperty("menuId"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.menuId);
        return writer;
    };
    Guide.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Guide.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Guide();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.trigger = reader.int32();
                break;
            case 3:
                message.triggerValue = reader.int32();
                break;
            case 4:
                message.group = reader.int32();
                break;
            case 5:
                message.groupOrder = reader.int32();
                break;
            case 6:
                message.plotGroupId = reader.int32();
                break;
            case 7:
                message.type = reader.int32();
                break;
            case 8:
                message.finger = reader.bool();
                break;
            case 9:
                if (!(message.fingerPostion && message.fingerPostion.length))
                    message.fingerPostion = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.fingerPostion.push(reader.int32());
                } else
                    message.fingerPostion.push(reader.int32());
                break;
            case 10:
                message.halo = reader.bool();
                break;
            case 11:
                if (!(message.haloPostion && message.haloPostion.length))
                    message.haloPostion = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.haloPostion.push(reader.int32());
                } else
                    message.haloPostion.push(reader.int32());
                break;
            case 12:
                message.zhCnName = reader.string();
                break;
            case 13:
                message.zhCnDes = reader.string();
                break;
            case 14:
                message.menuId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Guide.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Guide.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.trigger != null && message.hasOwnProperty("trigger"))
            if (!$util.isInteger(message.trigger))
                return "trigger: integer expected";
        if (message.triggerValue != null && message.hasOwnProperty("triggerValue"))
            if (!$util.isInteger(message.triggerValue))
                return "triggerValue: integer expected";
        if (message.group != null && message.hasOwnProperty("group"))
            if (!$util.isInteger(message.group))
                return "group: integer expected";
        if (message.groupOrder != null && message.hasOwnProperty("groupOrder"))
            if (!$util.isInteger(message.groupOrder))
                return "groupOrder: integer expected";
        if (message.plotGroupId != null && message.hasOwnProperty("plotGroupId"))
            if (!$util.isInteger(message.plotGroupId))
                return "plotGroupId: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.finger != null && message.hasOwnProperty("finger"))
            if (typeof message.finger !== "boolean")
                return "finger: boolean expected";
        if (message.fingerPostion != null && message.hasOwnProperty("fingerPostion")) {
            if (!Array.isArray(message.fingerPostion))
                return "fingerPostion: array expected";
            for (var i = 0; i < message.fingerPostion.length; ++i)
                if (!$util.isInteger(message.fingerPostion[i]))
                    return "fingerPostion: integer[] expected";
        }
        if (message.halo != null && message.hasOwnProperty("halo"))
            if (typeof message.halo !== "boolean")
                return "halo: boolean expected";
        if (message.haloPostion != null && message.hasOwnProperty("haloPostion")) {
            if (!Array.isArray(message.haloPostion))
                return "haloPostion: array expected";
            for (var i = 0; i < message.haloPostion.length; ++i)
                if (!$util.isInteger(message.haloPostion[i]))
                    return "haloPostion: integer[] expected";
        }
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            if (!$util.isString(message.zhCnDes))
                return "zhCnDes: string expected";
        if (message.menuId != null && message.hasOwnProperty("menuId"))
            if (!$util.isInteger(message.menuId))
                return "menuId: integer expected";
        return null;
    };
    Guide.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Guide)
            return object;
        var message = new $excelRoot.Guide();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.trigger != null)
            message.trigger = object.trigger | 0;
        if (object.triggerValue != null)
            message.triggerValue = object.triggerValue | 0;
        if (object.group != null)
            message.group = object.group | 0;
        if (object.groupOrder != null)
            message.groupOrder = object.groupOrder | 0;
        if (object.plotGroupId != null)
            message.plotGroupId = object.plotGroupId | 0;
        if (object.type != null)
            message.type = object.type | 0;
        if (object.finger != null)
            message.finger = Boolean(object.finger);
        if (object.fingerPostion) {
            if (!Array.isArray(object.fingerPostion))
                throw TypeError(".Guide.fingerPostion: array expected");
            message.fingerPostion = [];
            for (var i = 0; i < object.fingerPostion.length; ++i)
                message.fingerPostion[i] = object.fingerPostion[i] | 0;
        }
        if (object.halo != null)
            message.halo = Boolean(object.halo);
        if (object.haloPostion) {
            if (!Array.isArray(object.haloPostion))
                throw TypeError(".Guide.haloPostion: array expected");
            message.haloPostion = [];
            for (var i = 0; i < object.haloPostion.length; ++i)
                message.haloPostion[i] = object.haloPostion[i] | 0;
        }
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.zhCnDes != null)
            message.zhCnDes = String(object.zhCnDes);
        if (object.menuId != null)
            message.menuId = object.menuId | 0;
        return message;
    };
    Guide.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.fingerPostion = [];
            object.haloPostion = [];
        }
        if (options.defaults) {
            object.id = 0;
            object.trigger = 0;
            object.triggerValue = 0;
            object.group = 0;
            object.groupOrder = 0;
            object.plotGroupId = 0;
            object.type = 0;
            object.finger = false;
            object.halo = false;
            object.zhCnName = "";
            object.zhCnDes = "";
            object.menuId = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.trigger != null && message.hasOwnProperty("trigger"))
            object.trigger = message.trigger;
        if (message.triggerValue != null && message.hasOwnProperty("triggerValue"))
            object.triggerValue = message.triggerValue;
        if (message.group != null && message.hasOwnProperty("group"))
            object.group = message.group;
        if (message.groupOrder != null && message.hasOwnProperty("groupOrder"))
            object.groupOrder = message.groupOrder;
        if (message.plotGroupId != null && message.hasOwnProperty("plotGroupId"))
            object.plotGroupId = message.plotGroupId;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.finger != null && message.hasOwnProperty("finger"))
            object.finger = message.finger;
        if (message.fingerPostion && message.fingerPostion.length) {
            object.fingerPostion = [];
            for (var j = 0; j < message.fingerPostion.length; ++j)
                object.fingerPostion[j] = message.fingerPostion[j];
        }
        if (message.halo != null && message.hasOwnProperty("halo"))
            object.halo = message.halo;
        if (message.haloPostion && message.haloPostion.length) {
            object.haloPostion = [];
            for (var j = 0; j < message.haloPostion.length; ++j)
                object.haloPostion[j] = message.haloPostion[j];
        }
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            object.zhCnDes = message.zhCnDes;
        if (message.menuId != null && message.hasOwnProperty("menuId"))
            object.menuId = message.menuId;
        return object;
    };
    Guide.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Guide;
})();
$excelRoot.HeadPortrait = (function() {
    function HeadPortrait(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    HeadPortrait.prototype.id = 0;
    HeadPortrait.prototype.zhCnName = "";
    HeadPortrait.prototype.sex = 0;
    HeadPortrait.prototype.unlock = null;
    HeadPortrait.prototype.icon = 0;
    HeadPortrait.create = function create(properties) {
        return new HeadPortrait(properties);
    };
    HeadPortrait.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.zhCnName);
        if (message.sex != null && message.hasOwnProperty("sex"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sex);
        if (message.unlock != null && message.hasOwnProperty("unlock"))
            $excelRoot.DTItemNum.encode(message.unlock, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.icon);
        return writer;
    };
    HeadPortrait.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    HeadPortrait.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.HeadPortrait();
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
                message.sex = reader.int32();
                break;
            case 4:
                message.unlock = $excelRoot.DTItemNum.decode(reader, reader.uint32());
                break;
            case 5:
                message.icon = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    HeadPortrait.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    HeadPortrait.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.sex != null && message.hasOwnProperty("sex"))
            if (!$util.isInteger(message.sex))
                return "sex: integer expected";
        if (message.unlock != null && message.hasOwnProperty("unlock")) {
            var error = $excelRoot.DTItemNum.verify(message.unlock);
            if (error)
                return "unlock." + error;
        }
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isInteger(message.icon))
                return "icon: integer expected";
        return null;
    };
    HeadPortrait.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.HeadPortrait)
            return object;
        var message = new $excelRoot.HeadPortrait();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.sex != null)
            message.sex = object.sex | 0;
        if (object.unlock != null) {
            if (typeof object.unlock !== "object")
                throw TypeError(".HeadPortrait.unlock: object expected");
            message.unlock = $excelRoot.DTItemNum.fromObject(object.unlock);
        }
        if (object.icon != null)
            message.icon = object.icon | 0;
        return message;
    };
    HeadPortrait.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.zhCnName = "";
            object.sex = 0;
            object.unlock = null;
            object.icon = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.sex != null && message.hasOwnProperty("sex"))
            object.sex = message.sex;
        if (message.unlock != null && message.hasOwnProperty("unlock"))
            object.unlock = $excelRoot.DTItemNum.toObject(message.unlock, options);
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        return object;
    };
    HeadPortrait.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return HeadPortrait;
})();
$excelRoot.Hero = (function() {
    function Hero(properties) {
        this.type = [];
        this.display = [];
        this.tag = [];
        this.propId = [];
        this.starId = [];
        this.buffId = [];
        this.baseSkillId = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Hero.prototype.id = 0;
    Hero.prototype.zhCnName = "";
    Hero.prototype.quality = 0;
    Hero.prototype.type = $util.emptyArray;
    Hero.prototype.basestar = 0;
    Hero.prototype.heroItem = 0;
    Hero.prototype.heroItemNum = 0;
    Hero.prototype.maxstar = 0;
    Hero.prototype.icon = 0;
    Hero.prototype.display = $util.emptyArray;
    Hero.prototype.tag = $util.emptyArray;
    Hero.prototype.atkType = 0;
    Hero.prototype.propId = $util.emptyArray;
    Hero.prototype.starId = $util.emptyArray;
    Hero.prototype.buffId = $util.emptyArray;
    Hero.prototype.baseSkillId = $util.emptyArray;
    Hero.create = function create(properties) {
        return new Hero(properties);
    };
    Hero.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.zhCnName);
        if (message.quality != null && message.hasOwnProperty("quality"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.quality);
        if (message.type != null && message.type.length) {
            writer.uint32(/* id 5, wireType 2 =*/42).fork();
            for (var i = 0; i < message.type.length; ++i)
                writer.int32(message.type[i]);
            writer.ldelim();
        }
        if (message.basestar != null && message.hasOwnProperty("basestar"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.basestar);
        if (message.heroItem != null && message.hasOwnProperty("heroItem"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.heroItem);
        if (message.heroItemNum != null && message.hasOwnProperty("heroItemNum"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.heroItemNum);
        if (message.maxstar != null && message.hasOwnProperty("maxstar"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.maxstar);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.icon);
        if (message.display != null && message.display.length) {
            writer.uint32(/* id 11, wireType 2 =*/90).fork();
            for (var i = 0; i < message.display.length; ++i)
                writer.int32(message.display[i]);
            writer.ldelim();
        }
        if (message.tag != null && message.tag.length) {
            writer.uint32(/* id 12, wireType 2 =*/98).fork();
            for (var i = 0; i < message.tag.length; ++i)
                writer.int32(message.tag[i]);
            writer.ldelim();
        }
        if (message.atkType != null && message.hasOwnProperty("atkType"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.atkType);
        if (message.propId != null && message.propId.length) {
            writer.uint32(/* id 14, wireType 2 =*/114).fork();
            for (var i = 0; i < message.propId.length; ++i)
                writer.int32(message.propId[i]);
            writer.ldelim();
        }
        if (message.starId != null && message.starId.length) {
            writer.uint32(/* id 15, wireType 2 =*/122).fork();
            for (var i = 0; i < message.starId.length; ++i)
                writer.int32(message.starId[i]);
            writer.ldelim();
        }
        if (message.buffId != null && message.buffId.length)
            for (var i = 0; i < message.buffId.length; ++i)
                $excelRoot.DTBuffId.encode(message.buffId[i], writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.baseSkillId != null && message.baseSkillId.length) {
            writer.uint32(/* id 17, wireType 2 =*/138).fork();
            for (var i = 0; i < message.baseSkillId.length; ++i)
                writer.int32(message.baseSkillId[i]);
            writer.ldelim();
        }
        return writer;
    };
    Hero.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Hero.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Hero();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.zhCnName = reader.string();
                break;
            case 4:
                message.quality = reader.int32();
                break;
            case 5:
                if (!(message.type && message.type.length))
                    message.type = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.type.push(reader.int32());
                } else
                    message.type.push(reader.int32());
                break;
            case 6:
                message.basestar = reader.int32();
                break;
            case 7:
                message.heroItem = reader.int32();
                break;
            case 8:
                message.heroItemNum = reader.int32();
                break;
            case 9:
                message.maxstar = reader.int32();
                break;
            case 10:
                message.icon = reader.int32();
                break;
            case 11:
                if (!(message.display && message.display.length))
                    message.display = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.display.push(reader.int32());
                } else
                    message.display.push(reader.int32());
                break;
            case 12:
                if (!(message.tag && message.tag.length))
                    message.tag = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.tag.push(reader.int32());
                } else
                    message.tag.push(reader.int32());
                break;
            case 13:
                message.atkType = reader.int32();
                break;
            case 14:
                if (!(message.propId && message.propId.length))
                    message.propId = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.propId.push(reader.int32());
                } else
                    message.propId.push(reader.int32());
                break;
            case 15:
                if (!(message.starId && message.starId.length))
                    message.starId = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.starId.push(reader.int32());
                } else
                    message.starId.push(reader.int32());
                break;
            case 16:
                if (!(message.buffId && message.buffId.length))
                    message.buffId = [];
                message.buffId.push($excelRoot.DTBuffId.decode(reader, reader.uint32()));
                break;
            case 17:
                if (!(message.baseSkillId && message.baseSkillId.length))
                    message.baseSkillId = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.baseSkillId.push(reader.int32());
                } else
                    message.baseSkillId.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Hero.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Hero.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.quality != null && message.hasOwnProperty("quality"))
            if (!$util.isInteger(message.quality))
                return "quality: integer expected";
        if (message.type != null && message.hasOwnProperty("type")) {
            if (!Array.isArray(message.type))
                return "type: array expected";
            for (var i = 0; i < message.type.length; ++i)
                if (!$util.isInteger(message.type[i]))
                    return "type: integer[] expected";
        }
        if (message.basestar != null && message.hasOwnProperty("basestar"))
            if (!$util.isInteger(message.basestar))
                return "basestar: integer expected";
        if (message.heroItem != null && message.hasOwnProperty("heroItem"))
            if (!$util.isInteger(message.heroItem))
                return "heroItem: integer expected";
        if (message.heroItemNum != null && message.hasOwnProperty("heroItemNum"))
            if (!$util.isInteger(message.heroItemNum))
                return "heroItemNum: integer expected";
        if (message.maxstar != null && message.hasOwnProperty("maxstar"))
            if (!$util.isInteger(message.maxstar))
                return "maxstar: integer expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isInteger(message.icon))
                return "icon: integer expected";
        if (message.display != null && message.hasOwnProperty("display")) {
            if (!Array.isArray(message.display))
                return "display: array expected";
            for (var i = 0; i < message.display.length; ++i)
                if (!$util.isInteger(message.display[i]))
                    return "display: integer[] expected";
        }
        if (message.tag != null && message.hasOwnProperty("tag")) {
            if (!Array.isArray(message.tag))
                return "tag: array expected";
            for (var i = 0; i < message.tag.length; ++i)
                if (!$util.isInteger(message.tag[i]))
                    return "tag: integer[] expected";
        }
        if (message.atkType != null && message.hasOwnProperty("atkType"))
            if (!$util.isInteger(message.atkType))
                return "atkType: integer expected";
        if (message.propId != null && message.hasOwnProperty("propId")) {
            if (!Array.isArray(message.propId))
                return "propId: array expected";
            for (var i = 0; i < message.propId.length; ++i)
                if (!$util.isInteger(message.propId[i]))
                    return "propId: integer[] expected";
        }
        if (message.starId != null && message.hasOwnProperty("starId")) {
            if (!Array.isArray(message.starId))
                return "starId: array expected";
            for (var i = 0; i < message.starId.length; ++i)
                if (!$util.isInteger(message.starId[i]))
                    return "starId: integer[] expected";
        }
        if (message.buffId != null && message.hasOwnProperty("buffId")) {
            if (!Array.isArray(message.buffId))
                return "buffId: array expected";
            for (var i = 0; i < message.buffId.length; ++i) {
                var error = $excelRoot.DTBuffId.verify(message.buffId[i]);
                if (error)
                    return "buffId." + error;
            }
        }
        if (message.baseSkillId != null && message.hasOwnProperty("baseSkillId")) {
            if (!Array.isArray(message.baseSkillId))
                return "baseSkillId: array expected";
            for (var i = 0; i < message.baseSkillId.length; ++i)
                if (!$util.isInteger(message.baseSkillId[i]))
                    return "baseSkillId: integer[] expected";
        }
        return null;
    };
    Hero.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Hero)
            return object;
        var message = new $excelRoot.Hero();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.quality != null)
            message.quality = object.quality | 0;
        if (object.type) {
            if (!Array.isArray(object.type))
                throw TypeError(".Hero.type: array expected");
            message.type = [];
            for (var i = 0; i < object.type.length; ++i)
                message.type[i] = object.type[i] | 0;
        }
        if (object.basestar != null)
            message.basestar = object.basestar | 0;
        if (object.heroItem != null)
            message.heroItem = object.heroItem | 0;
        if (object.heroItemNum != null)
            message.heroItemNum = object.heroItemNum | 0;
        if (object.maxstar != null)
            message.maxstar = object.maxstar | 0;
        if (object.icon != null)
            message.icon = object.icon | 0;
        if (object.display) {
            if (!Array.isArray(object.display))
                throw TypeError(".Hero.display: array expected");
            message.display = [];
            for (var i = 0; i < object.display.length; ++i)
                message.display[i] = object.display[i] | 0;
        }
        if (object.tag) {
            if (!Array.isArray(object.tag))
                throw TypeError(".Hero.tag: array expected");
            message.tag = [];
            for (var i = 0; i < object.tag.length; ++i)
                message.tag[i] = object.tag[i] | 0;
        }
        if (object.atkType != null)
            message.atkType = object.atkType | 0;
        if (object.propId) {
            if (!Array.isArray(object.propId))
                throw TypeError(".Hero.propId: array expected");
            message.propId = [];
            for (var i = 0; i < object.propId.length; ++i)
                message.propId[i] = object.propId[i] | 0;
        }
        if (object.starId) {
            if (!Array.isArray(object.starId))
                throw TypeError(".Hero.starId: array expected");
            message.starId = [];
            for (var i = 0; i < object.starId.length; ++i)
                message.starId[i] = object.starId[i] | 0;
        }
        if (object.buffId) {
            if (!Array.isArray(object.buffId))
                throw TypeError(".Hero.buffId: array expected");
            message.buffId = [];
            for (var i = 0; i < object.buffId.length; ++i) {
                if (typeof object.buffId[i] !== "object")
                    throw TypeError(".Hero.buffId: object expected");
                message.buffId[i] = $excelRoot.DTBuffId.fromObject(object.buffId[i]);
            }
        }
        if (object.baseSkillId) {
            if (!Array.isArray(object.baseSkillId))
                throw TypeError(".Hero.baseSkillId: array expected");
            message.baseSkillId = [];
            for (var i = 0; i < object.baseSkillId.length; ++i)
                message.baseSkillId[i] = object.baseSkillId[i] | 0;
        }
        return message;
    };
    Hero.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.type = [];
            object.display = [];
            object.tag = [];
            object.propId = [];
            object.starId = [];
            object.buffId = [];
            object.baseSkillId = [];
        }
        if (options.defaults) {
            object.id = 0;
            object.zhCnName = "";
            object.quality = 0;
            object.basestar = 0;
            object.heroItem = 0;
            object.heroItemNum = 0;
            object.maxstar = 0;
            object.icon = 0;
            object.atkType = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.quality != null && message.hasOwnProperty("quality"))
            object.quality = message.quality;
        if (message.type && message.type.length) {
            object.type = [];
            for (var j = 0; j < message.type.length; ++j)
                object.type[j] = message.type[j];
        }
        if (message.basestar != null && message.hasOwnProperty("basestar"))
            object.basestar = message.basestar;
        if (message.heroItem != null && message.hasOwnProperty("heroItem"))
            object.heroItem = message.heroItem;
        if (message.heroItemNum != null && message.hasOwnProperty("heroItemNum"))
            object.heroItemNum = message.heroItemNum;
        if (message.maxstar != null && message.hasOwnProperty("maxstar"))
            object.maxstar = message.maxstar;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.display && message.display.length) {
            object.display = [];
            for (var j = 0; j < message.display.length; ++j)
                object.display[j] = message.display[j];
        }
        if (message.tag && message.tag.length) {
            object.tag = [];
            for (var j = 0; j < message.tag.length; ++j)
                object.tag[j] = message.tag[j];
        }
        if (message.atkType != null && message.hasOwnProperty("atkType"))
            object.atkType = message.atkType;
        if (message.propId && message.propId.length) {
            object.propId = [];
            for (var j = 0; j < message.propId.length; ++j)
                object.propId[j] = message.propId[j];
        }
        if (message.starId && message.starId.length) {
            object.starId = [];
            for (var j = 0; j < message.starId.length; ++j)
                object.starId[j] = message.starId[j];
        }
        if (message.buffId && message.buffId.length) {
            object.buffId = [];
            for (var j = 0; j < message.buffId.length; ++j)
                object.buffId[j] = $excelRoot.DTBuffId.toObject(message.buffId[j], options);
        }
        if (message.baseSkillId && message.baseSkillId.length) {
            object.baseSkillId = [];
            for (var j = 0; j < message.baseSkillId.length; ++j)
                object.baseSkillId[j] = message.baseSkillId[j];
        }
        return object;
    };
    Hero.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Hero;
})();
$excelRoot.HeroExp = (function() {
    function HeroExp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    HeroExp.prototype.id = 0;
    HeroExp.prototype.level = 0;
    HeroExp.prototype.exp = 0;
    HeroExp.create = function create(properties) {
        return new HeroExp(properties);
    };
    HeroExp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.level != null && message.hasOwnProperty("level"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.level);
        if (message.exp != null && message.hasOwnProperty("exp"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.exp);
        return writer;
    };
    HeroExp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    HeroExp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.HeroExp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.level = reader.int32();
                break;
            case 3:
                message.exp = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    HeroExp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    HeroExp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.level != null && message.hasOwnProperty("level"))
            if (!$util.isInteger(message.level))
                return "level: integer expected";
        if (message.exp != null && message.hasOwnProperty("exp"))
            if (!$util.isInteger(message.exp))
                return "exp: integer expected";
        return null;
    };
    HeroExp.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.HeroExp)
            return object;
        var message = new $excelRoot.HeroExp();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.level != null)
            message.level = object.level | 0;
        if (object.exp != null)
            message.exp = object.exp | 0;
        return message;
    };
    HeroExp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.level = 0;
            object.exp = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.level != null && message.hasOwnProperty("level"))
            object.level = message.level;
        if (message.exp != null && message.hasOwnProperty("exp"))
            object.exp = message.exp;
        return object;
    };
    HeroExp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return HeroExp;
})();
$excelRoot.HeroStar = (function() {
    function HeroStar(properties) {
        this.needStar = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    HeroStar.prototype.id = 0;
    HeroStar.prototype.quality = 0;
    HeroStar.prototype.needStar = $util.emptyArray;
    HeroStar.prototype.starNeed1 = 0;
    HeroStar.prototype.starNeed2 = 0;
    HeroStar.prototype.starNeed3 = 0;
    HeroStar.prototype.starNeed4 = 0;
    HeroStar.prototype.starNeed5 = 0;
    HeroStar.create = function create(properties) {
        return new HeroStar(properties);
    };
    HeroStar.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.quality != null && message.hasOwnProperty("quality"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.quality);
        if (message.needStar != null && message.needStar.length) {
            writer.uint32(/* id 3, wireType 2 =*/26).fork();
            for (var i = 0; i < message.needStar.length; ++i)
                writer.int32(message.needStar[i]);
            writer.ldelim();
        }
        if (message.starNeed1 != null && message.hasOwnProperty("starNeed1"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.starNeed1);
        if (message.starNeed2 != null && message.hasOwnProperty("starNeed2"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.starNeed2);
        if (message.starNeed3 != null && message.hasOwnProperty("starNeed3"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.starNeed3);
        if (message.starNeed4 != null && message.hasOwnProperty("starNeed4"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.starNeed4);
        if (message.starNeed5 != null && message.hasOwnProperty("starNeed5"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.starNeed5);
        return writer;
    };
    HeroStar.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    HeroStar.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.HeroStar();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.quality = reader.int32();
                break;
            case 3:
                if (!(message.needStar && message.needStar.length))
                    message.needStar = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.needStar.push(reader.int32());
                } else
                    message.needStar.push(reader.int32());
                break;
            case 4:
                message.starNeed1 = reader.int32();
                break;
            case 5:
                message.starNeed2 = reader.int32();
                break;
            case 6:
                message.starNeed3 = reader.int32();
                break;
            case 7:
                message.starNeed4 = reader.int32();
                break;
            case 8:
                message.starNeed5 = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    HeroStar.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    HeroStar.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.quality != null && message.hasOwnProperty("quality"))
            if (!$util.isInteger(message.quality))
                return "quality: integer expected";
        if (message.needStar != null && message.hasOwnProperty("needStar")) {
            if (!Array.isArray(message.needStar))
                return "needStar: array expected";
            for (var i = 0; i < message.needStar.length; ++i)
                if (!$util.isInteger(message.needStar[i]))
                    return "needStar: integer[] expected";
        }
        if (message.starNeed1 != null && message.hasOwnProperty("starNeed1"))
            if (!$util.isInteger(message.starNeed1))
                return "starNeed1: integer expected";
        if (message.starNeed2 != null && message.hasOwnProperty("starNeed2"))
            if (!$util.isInteger(message.starNeed2))
                return "starNeed2: integer expected";
        if (message.starNeed3 != null && message.hasOwnProperty("starNeed3"))
            if (!$util.isInteger(message.starNeed3))
                return "starNeed3: integer expected";
        if (message.starNeed4 != null && message.hasOwnProperty("starNeed4"))
            if (!$util.isInteger(message.starNeed4))
                return "starNeed4: integer expected";
        if (message.starNeed5 != null && message.hasOwnProperty("starNeed5"))
            if (!$util.isInteger(message.starNeed5))
                return "starNeed5: integer expected";
        return null;
    };
    HeroStar.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.HeroStar)
            return object;
        var message = new $excelRoot.HeroStar();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.quality != null)
            message.quality = object.quality | 0;
        if (object.needStar) {
            if (!Array.isArray(object.needStar))
                throw TypeError(".HeroStar.needStar: array expected");
            message.needStar = [];
            for (var i = 0; i < object.needStar.length; ++i)
                message.needStar[i] = object.needStar[i] | 0;
        }
        if (object.starNeed1 != null)
            message.starNeed1 = object.starNeed1 | 0;
        if (object.starNeed2 != null)
            message.starNeed2 = object.starNeed2 | 0;
        if (object.starNeed3 != null)
            message.starNeed3 = object.starNeed3 | 0;
        if (object.starNeed4 != null)
            message.starNeed4 = object.starNeed4 | 0;
        if (object.starNeed5 != null)
            message.starNeed5 = object.starNeed5 | 0;
        return message;
    };
    HeroStar.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.needStar = [];
        if (options.defaults) {
            object.id = 0;
            object.quality = 0;
            object.starNeed1 = 0;
            object.starNeed2 = 0;
            object.starNeed3 = 0;
            object.starNeed4 = 0;
            object.starNeed5 = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.quality != null && message.hasOwnProperty("quality"))
            object.quality = message.quality;
        if (message.needStar && message.needStar.length) {
            object.needStar = [];
            for (var j = 0; j < message.needStar.length; ++j)
                object.needStar[j] = message.needStar[j];
        }
        if (message.starNeed1 != null && message.hasOwnProperty("starNeed1"))
            object.starNeed1 = message.starNeed1;
        if (message.starNeed2 != null && message.hasOwnProperty("starNeed2"))
            object.starNeed2 = message.starNeed2;
        if (message.starNeed3 != null && message.hasOwnProperty("starNeed3"))
            object.starNeed3 = message.starNeed3;
        if (message.starNeed4 != null && message.hasOwnProperty("starNeed4"))
            object.starNeed4 = message.starNeed4;
        if (message.starNeed5 != null && message.hasOwnProperty("starNeed5"))
            object.starNeed5 = message.starNeed5;
        return object;
    };
    HeroStar.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return HeroStar;
})();
$excelRoot.HeroTag = (function() {
    function HeroTag(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    HeroTag.prototype.id = 0;
    HeroTag.prototype.tag = 0;
    HeroTag.prototype.zhCnName = "";
    HeroTag.prototype.icon = 0;
    HeroTag.create = function create(properties) {
        return new HeroTag(properties);
    };
    HeroTag.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.tag != null && message.hasOwnProperty("tag"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tag);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.zhCnName);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.icon);
        return writer;
    };
    HeroTag.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    HeroTag.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.HeroTag();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.tag = reader.int32();
                break;
            case 3:
                message.zhCnName = reader.string();
                break;
            case 4:
                message.icon = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    HeroTag.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    HeroTag.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.tag != null && message.hasOwnProperty("tag"))
            if (!$util.isInteger(message.tag))
                return "tag: integer expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isInteger(message.icon))
                return "icon: integer expected";
        return null;
    };
    HeroTag.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.HeroTag)
            return object;
        var message = new $excelRoot.HeroTag();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.tag != null)
            message.tag = object.tag | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.icon != null)
            message.icon = object.icon | 0;
        return message;
    };
    HeroTag.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.tag = 0;
            object.zhCnName = "";
            object.icon = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.tag != null && message.hasOwnProperty("tag"))
            object.tag = message.tag;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        return object;
    };
    HeroTag.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return HeroTag;
})();
$excelRoot.HeroTeam = (function() {
    function HeroTeam(properties) {
        this.cost = [];
        this.needRate = [];
        this.zhCnDes = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    HeroTeam.prototype.id = 0;
    HeroTeam.prototype.zhCnName = "";
    HeroTeam.prototype.nameValue = 0;
    HeroTeam.prototype.needLevel = 0;
    HeroTeam.prototype.cost = $util.emptyArray;
    HeroTeam.prototype.needRate = $util.emptyArray;
    HeroTeam.prototype.zhCnDes = $util.emptyArray;
    HeroTeam.create = function create(properties) {
        return new HeroTeam(properties);
    };
    HeroTeam.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.zhCnName);
        if (message.nameValue != null && message.hasOwnProperty("nameValue"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nameValue);
        if (message.needLevel != null && message.hasOwnProperty("needLevel"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.needLevel);
        if (message.cost != null && message.cost.length)
            for (var i = 0; i < message.cost.length; ++i)
                $excelRoot.DTItemNum.encode(message.cost[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.needRate != null && message.needRate.length) {
            writer.uint32(/* id 6, wireType 2 =*/50).fork();
            for (var i = 0; i < message.needRate.length; ++i)
                writer.int32(message.needRate[i]);
            writer.ldelim();
        }
        if (message.zhCnDes != null && message.zhCnDes.length)
            for (var i = 0; i < message.zhCnDes.length; ++i)
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.zhCnDes[i]);
        return writer;
    };
    HeroTeam.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    HeroTeam.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.HeroTeam();
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
                message.nameValue = reader.int32();
                break;
            case 4:
                message.needLevel = reader.int32();
                break;
            case 5:
                if (!(message.cost && message.cost.length))
                    message.cost = [];
                message.cost.push($excelRoot.DTItemNum.decode(reader, reader.uint32()));
                break;
            case 6:
                if (!(message.needRate && message.needRate.length))
                    message.needRate = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.needRate.push(reader.int32());
                } else
                    message.needRate.push(reader.int32());
                break;
            case 7:
                if (!(message.zhCnDes && message.zhCnDes.length))
                    message.zhCnDes = [];
                message.zhCnDes.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    HeroTeam.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    HeroTeam.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.nameValue != null && message.hasOwnProperty("nameValue"))
            if (!$util.isInteger(message.nameValue))
                return "nameValue: integer expected";
        if (message.needLevel != null && message.hasOwnProperty("needLevel"))
            if (!$util.isInteger(message.needLevel))
                return "needLevel: integer expected";
        if (message.cost != null && message.hasOwnProperty("cost")) {
            if (!Array.isArray(message.cost))
                return "cost: array expected";
            for (var i = 0; i < message.cost.length; ++i) {
                var error = $excelRoot.DTItemNum.verify(message.cost[i]);
                if (error)
                    return "cost." + error;
            }
        }
        if (message.needRate != null && message.hasOwnProperty("needRate")) {
            if (!Array.isArray(message.needRate))
                return "needRate: array expected";
            for (var i = 0; i < message.needRate.length; ++i)
                if (!$util.isInteger(message.needRate[i]))
                    return "needRate: integer[] expected";
        }
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes")) {
            if (!Array.isArray(message.zhCnDes))
                return "zhCnDes: array expected";
            for (var i = 0; i < message.zhCnDes.length; ++i)
                if (!$util.isString(message.zhCnDes[i]))
                    return "zhCnDes: string[] expected";
        }
        return null;
    };
    HeroTeam.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.HeroTeam)
            return object;
        var message = new $excelRoot.HeroTeam();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.nameValue != null)
            message.nameValue = object.nameValue | 0;
        if (object.needLevel != null)
            message.needLevel = object.needLevel | 0;
        if (object.cost) {
            if (!Array.isArray(object.cost))
                throw TypeError(".HeroTeam.cost: array expected");
            message.cost = [];
            for (var i = 0; i < object.cost.length; ++i) {
                if (typeof object.cost[i] !== "object")
                    throw TypeError(".HeroTeam.cost: object expected");
                message.cost[i] = $excelRoot.DTItemNum.fromObject(object.cost[i]);
            }
        }
        if (object.needRate) {
            if (!Array.isArray(object.needRate))
                throw TypeError(".HeroTeam.needRate: array expected");
            message.needRate = [];
            for (var i = 0; i < object.needRate.length; ++i)
                message.needRate[i] = object.needRate[i] | 0;
        }
        if (object.zhCnDes) {
            if (!Array.isArray(object.zhCnDes))
                throw TypeError(".HeroTeam.zhCnDes: array expected");
            message.zhCnDes = [];
            for (var i = 0; i < object.zhCnDes.length; ++i)
                message.zhCnDes[i] = String(object.zhCnDes[i]);
        }
        return message;
    };
    HeroTeam.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.cost = [];
            object.needRate = [];
            object.zhCnDes = [];
        }
        if (options.defaults) {
            object.id = 0;
            object.zhCnName = "";
            object.nameValue = 0;
            object.needLevel = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.nameValue != null && message.hasOwnProperty("nameValue"))
            object.nameValue = message.nameValue;
        if (message.needLevel != null && message.hasOwnProperty("needLevel"))
            object.needLevel = message.needLevel;
        if (message.cost && message.cost.length) {
            object.cost = [];
            for (var j = 0; j < message.cost.length; ++j)
                object.cost[j] = $excelRoot.DTItemNum.toObject(message.cost[j], options);
        }
        if (message.needRate && message.needRate.length) {
            object.needRate = [];
            for (var j = 0; j < message.needRate.length; ++j)
                object.needRate[j] = message.needRate[j];
        }
        if (message.zhCnDes && message.zhCnDes.length) {
            object.zhCnDes = [];
            for (var j = 0; j < message.zhCnDes.length; ++j)
                object.zhCnDes[j] = message.zhCnDes[j];
        }
        return object;
    };
    HeroTeam.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return HeroTeam;
})();
$excelRoot.HeroType = (function() {
    function HeroType(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    HeroType.prototype.id = 0;
    HeroType.prototype.type = 0;
    HeroType.prototype.zhCnName = "";
    HeroType.create = function create(properties) {
        return new HeroType(properties);
    };
    HeroType.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.zhCnName);
        return writer;
    };
    HeroType.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    HeroType.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.HeroType();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.type = reader.int32();
                break;
            case 3:
                message.zhCnName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    HeroType.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    HeroType.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        return null;
    };
    HeroType.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.HeroType)
            return object;
        var message = new $excelRoot.HeroType();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.type != null)
            message.type = object.type | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        return message;
    };
    HeroType.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.type = 0;
            object.zhCnName = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        return object;
    };
    HeroType.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return HeroType;
})();
$excelRoot.Item = (function() {
    function Item(properties) {
        this.getWay = [];
        this.useType = [];
        this.useUi = [];
        this.useCost = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Item.prototype.id = 0;
    Item.prototype.zhCnName = "";
    Item.prototype.zhCnItemDes = "";
    Item.prototype.indexName = "";
    Item.prototype.icon = 0;
    Item.prototype.quality = 0;
    Item.prototype.type = 0;
    Item.prototype.maxNum = 0;
    Item.prototype.maxLimit = 0;
    Item.prototype.getWay = $util.emptyArray;
    Item.prototype.useType = $util.emptyArray;
    Item.prototype.useUi = $util.emptyArray;
    Item.prototype.useCost = $util.emptyArray;
    Item.prototype.rewardId = 0;
    Item.prototype.canSell = false;
    Item.prototype.price = null;
    Item.prototype.limitTime = null;
    Item.prototype.periodTime = null;
    Item.prototype.value = 0;
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
        if (message.zhCnItemDes != null && message.hasOwnProperty("zhCnItemDes"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.zhCnItemDes);
        if (message.indexName != null && message.hasOwnProperty("indexName"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.indexName);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.icon);
        if (message.quality != null && message.hasOwnProperty("quality"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.quality);
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.type);
        if (message.maxNum != null && message.hasOwnProperty("maxNum"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.maxNum);
        if (message.maxLimit != null && message.hasOwnProperty("maxLimit"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.maxLimit);
        if (message.getWay != null && message.getWay.length) {
            writer.uint32(/* id 10, wireType 2 =*/82).fork();
            for (var i = 0; i < message.getWay.length; ++i)
                writer.int32(message.getWay[i]);
            writer.ldelim();
        }
        if (message.useType != null && message.useType.length) {
            writer.uint32(/* id 11, wireType 2 =*/90).fork();
            for (var i = 0; i < message.useType.length; ++i)
                writer.int32(message.useType[i]);
            writer.ldelim();
        }
        if (message.useUi != null && message.useUi.length) {
            writer.uint32(/* id 12, wireType 2 =*/98).fork();
            for (var i = 0; i < message.useUi.length; ++i)
                writer.int32(message.useUi[i]);
            writer.ldelim();
        }
        if (message.useCost != null && message.useCost.length)
            for (var i = 0; i < message.useCost.length; ++i)
                $excelRoot.DTItemNum.encode(message.useCost[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.rewardId != null && message.hasOwnProperty("rewardId"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.rewardId);
        if (message.canSell != null && message.hasOwnProperty("canSell"))
            writer.uint32(/* id 15, wireType 0 =*/120).bool(message.canSell);
        if (message.price != null && message.hasOwnProperty("price"))
            $excelRoot.DTItemNum.encode(message.price, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.limitTime != null && message.hasOwnProperty("limitTime"))
            $excelRoot.DTTime.encode(message.limitTime, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.periodTime != null && message.hasOwnProperty("periodTime"))
            $excelRoot.DTDateTime.encode(message.periodTime, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        if (message.value != null && message.hasOwnProperty("value"))
            writer.uint32(/* id 19, wireType 0 =*/152).int32(message.value);
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
                message.zhCnItemDes = reader.string();
                break;
            case 4:
                message.indexName = reader.string();
                break;
            case 5:
                message.icon = reader.int32();
                break;
            case 6:
                message.quality = reader.int32();
                break;
            case 7:
                message.type = reader.int32();
                break;
            case 8:
                message.maxNum = reader.int32();
                break;
            case 9:
                message.maxLimit = reader.int32();
                break;
            case 10:
                if (!(message.getWay && message.getWay.length))
                    message.getWay = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.getWay.push(reader.int32());
                } else
                    message.getWay.push(reader.int32());
                break;
            case 11:
                if (!(message.useType && message.useType.length))
                    message.useType = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.useType.push(reader.int32());
                } else
                    message.useType.push(reader.int32());
                break;
            case 12:
                if (!(message.useUi && message.useUi.length))
                    message.useUi = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.useUi.push(reader.int32());
                } else
                    message.useUi.push(reader.int32());
                break;
            case 13:
                if (!(message.useCost && message.useCost.length))
                    message.useCost = [];
                message.useCost.push($excelRoot.DTItemNum.decode(reader, reader.uint32()));
                break;
            case 14:
                message.rewardId = reader.int32();
                break;
            case 15:
                message.canSell = reader.bool();
                break;
            case 16:
                message.price = $excelRoot.DTItemNum.decode(reader, reader.uint32());
                break;
            case 17:
                message.limitTime = $excelRoot.DTTime.decode(reader, reader.uint32());
                break;
            case 18:
                message.periodTime = $excelRoot.DTDateTime.decode(reader, reader.uint32());
                break;
            case 19:
                message.value = reader.int32();
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
        if (message.zhCnItemDes != null && message.hasOwnProperty("zhCnItemDes"))
            if (!$util.isString(message.zhCnItemDes))
                return "zhCnItemDes: string expected";
        if (message.indexName != null && message.hasOwnProperty("indexName"))
            if (!$util.isString(message.indexName))
                return "indexName: string expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isInteger(message.icon))
                return "icon: integer expected";
        if (message.quality != null && message.hasOwnProperty("quality"))
            if (!$util.isInteger(message.quality))
                return "quality: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.maxNum != null && message.hasOwnProperty("maxNum"))
            if (!$util.isInteger(message.maxNum))
                return "maxNum: integer expected";
        if (message.maxLimit != null && message.hasOwnProperty("maxLimit"))
            if (!$util.isInteger(message.maxLimit))
                return "maxLimit: integer expected";
        if (message.getWay != null && message.hasOwnProperty("getWay")) {
            if (!Array.isArray(message.getWay))
                return "getWay: array expected";
            for (var i = 0; i < message.getWay.length; ++i)
                if (!$util.isInteger(message.getWay[i]))
                    return "getWay: integer[] expected";
        }
        if (message.useType != null && message.hasOwnProperty("useType")) {
            if (!Array.isArray(message.useType))
                return "useType: array expected";
            for (var i = 0; i < message.useType.length; ++i)
                if (!$util.isInteger(message.useType[i]))
                    return "useType: integer[] expected";
        }
        if (message.useUi != null && message.hasOwnProperty("useUi")) {
            if (!Array.isArray(message.useUi))
                return "useUi: array expected";
            for (var i = 0; i < message.useUi.length; ++i)
                if (!$util.isInteger(message.useUi[i]))
                    return "useUi: integer[] expected";
        }
        if (message.useCost != null && message.hasOwnProperty("useCost")) {
            if (!Array.isArray(message.useCost))
                return "useCost: array expected";
            for (var i = 0; i < message.useCost.length; ++i) {
                var error = $excelRoot.DTItemNum.verify(message.useCost[i]);
                if (error)
                    return "useCost." + error;
            }
        }
        if (message.rewardId != null && message.hasOwnProperty("rewardId"))
            if (!$util.isInteger(message.rewardId))
                return "rewardId: integer expected";
        if (message.canSell != null && message.hasOwnProperty("canSell"))
            if (typeof message.canSell !== "boolean")
                return "canSell: boolean expected";
        if (message.price != null && message.hasOwnProperty("price")) {
            var error = $excelRoot.DTItemNum.verify(message.price);
            if (error)
                return "price." + error;
        }
        if (message.limitTime != null && message.hasOwnProperty("limitTime")) {
            var error = $excelRoot.DTTime.verify(message.limitTime);
            if (error)
                return "limitTime." + error;
        }
        if (message.periodTime != null && message.hasOwnProperty("periodTime")) {
            var error = $excelRoot.DTDateTime.verify(message.periodTime);
            if (error)
                return "periodTime." + error;
        }
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
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
        if (object.zhCnItemDes != null)
            message.zhCnItemDes = String(object.zhCnItemDes);
        if (object.indexName != null)
            message.indexName = String(object.indexName);
        if (object.icon != null)
            message.icon = object.icon | 0;
        if (object.quality != null)
            message.quality = object.quality | 0;
        if (object.type != null)
            message.type = object.type | 0;
        if (object.maxNum != null)
            message.maxNum = object.maxNum | 0;
        if (object.maxLimit != null)
            message.maxLimit = object.maxLimit | 0;
        if (object.getWay) {
            if (!Array.isArray(object.getWay))
                throw TypeError(".Item.getWay: array expected");
            message.getWay = [];
            for (var i = 0; i < object.getWay.length; ++i)
                message.getWay[i] = object.getWay[i] | 0;
        }
        if (object.useType) {
            if (!Array.isArray(object.useType))
                throw TypeError(".Item.useType: array expected");
            message.useType = [];
            for (var i = 0; i < object.useType.length; ++i)
                message.useType[i] = object.useType[i] | 0;
        }
        if (object.useUi) {
            if (!Array.isArray(object.useUi))
                throw TypeError(".Item.useUi: array expected");
            message.useUi = [];
            for (var i = 0; i < object.useUi.length; ++i)
                message.useUi[i] = object.useUi[i] | 0;
        }
        if (object.useCost) {
            if (!Array.isArray(object.useCost))
                throw TypeError(".Item.useCost: array expected");
            message.useCost = [];
            for (var i = 0; i < object.useCost.length; ++i) {
                if (typeof object.useCost[i] !== "object")
                    throw TypeError(".Item.useCost: object expected");
                message.useCost[i] = $excelRoot.DTItemNum.fromObject(object.useCost[i]);
            }
        }
        if (object.rewardId != null)
            message.rewardId = object.rewardId | 0;
        if (object.canSell != null)
            message.canSell = Boolean(object.canSell);
        if (object.price != null) {
            if (typeof object.price !== "object")
                throw TypeError(".Item.price: object expected");
            message.price = $excelRoot.DTItemNum.fromObject(object.price);
        }
        if (object.limitTime != null) {
            if (typeof object.limitTime !== "object")
                throw TypeError(".Item.limitTime: object expected");
            message.limitTime = $excelRoot.DTTime.fromObject(object.limitTime);
        }
        if (object.periodTime != null) {
            if (typeof object.periodTime !== "object")
                throw TypeError(".Item.periodTime: object expected");
            message.periodTime = $excelRoot.DTDateTime.fromObject(object.periodTime);
        }
        if (object.value != null)
            message.value = object.value | 0;
        return message;
    };
    Item.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.getWay = [];
            object.useType = [];
            object.useUi = [];
            object.useCost = [];
        }
        if (options.defaults) {
            object.id = 0;
            object.zhCnName = "";
            object.zhCnItemDes = "";
            object.indexName = "";
            object.icon = 0;
            object.quality = 0;
            object.type = 0;
            object.maxNum = 0;
            object.maxLimit = 0;
            object.rewardId = 0;
            object.canSell = false;
            object.price = null;
            object.limitTime = null;
            object.periodTime = null;
            object.value = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.zhCnItemDes != null && message.hasOwnProperty("zhCnItemDes"))
            object.zhCnItemDes = message.zhCnItemDes;
        if (message.indexName != null && message.hasOwnProperty("indexName"))
            object.indexName = message.indexName;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.quality != null && message.hasOwnProperty("quality"))
            object.quality = message.quality;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.maxNum != null && message.hasOwnProperty("maxNum"))
            object.maxNum = message.maxNum;
        if (message.maxLimit != null && message.hasOwnProperty("maxLimit"))
            object.maxLimit = message.maxLimit;
        if (message.getWay && message.getWay.length) {
            object.getWay = [];
            for (var j = 0; j < message.getWay.length; ++j)
                object.getWay[j] = message.getWay[j];
        }
        if (message.useType && message.useType.length) {
            object.useType = [];
            for (var j = 0; j < message.useType.length; ++j)
                object.useType[j] = message.useType[j];
        }
        if (message.useUi && message.useUi.length) {
            object.useUi = [];
            for (var j = 0; j < message.useUi.length; ++j)
                object.useUi[j] = message.useUi[j];
        }
        if (message.useCost && message.useCost.length) {
            object.useCost = [];
            for (var j = 0; j < message.useCost.length; ++j)
                object.useCost[j] = $excelRoot.DTItemNum.toObject(message.useCost[j], options);
        }
        if (message.rewardId != null && message.hasOwnProperty("rewardId"))
            object.rewardId = message.rewardId;
        if (message.canSell != null && message.hasOwnProperty("canSell"))
            object.canSell = message.canSell;
        if (message.price != null && message.hasOwnProperty("price"))
            object.price = $excelRoot.DTItemNum.toObject(message.price, options);
        if (message.limitTime != null && message.hasOwnProperty("limitTime"))
            object.limitTime = $excelRoot.DTTime.toObject(message.limitTime, options);
        if (message.periodTime != null && message.hasOwnProperty("periodTime"))
            object.periodTime = $excelRoot.DTDateTime.toObject(message.periodTime, options);
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };
    Item.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Item;
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
$excelRoot.Loading = (function() {
    function Loading(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Loading.prototype.id = 0;
    Loading.prototype.text = "";
    Loading.create = function create(properties) {
        return new Loading(properties);
    };
    Loading.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.text != null && message.hasOwnProperty("text"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
        return writer;
    };
    Loading.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Loading.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Loading();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.text = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Loading.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Loading.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.text != null && message.hasOwnProperty("text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        return null;
    };
    Loading.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Loading)
            return object;
        var message = new $excelRoot.Loading();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.text != null)
            message.text = String(object.text);
        return message;
    };
    Loading.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.text = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.text != null && message.hasOwnProperty("text"))
            object.text = message.text;
        return object;
    };
    Loading.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Loading;
})();
$excelRoot.Mail = (function() {
    function Mail(properties) {
        this.item = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Mail.prototype.id = 0;
    Mail.prototype.lifeTime = 0;
    Mail.prototype.zhCnTitle = "";
    Mail.prototype.enTitle = "";
    Mail.prototype.item = $util.emptyArray;
    Mail.prototype.zhCnContent = "";
    Mail.prototype.enContent = "";
    Mail.create = function create(properties) {
        return new Mail(properties);
    };
    Mail.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.lifeTime != null && message.hasOwnProperty("lifeTime"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.lifeTime);
        if (message.zhCnTitle != null && message.hasOwnProperty("zhCnTitle"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.zhCnTitle);
        if (message.enTitle != null && message.hasOwnProperty("enTitle"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.enTitle);
        if (message.item != null && message.item.length)
            for (var i = 0; i < message.item.length; ++i)
                $excelRoot.DTFixItemNum.encode(message.item[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.zhCnContent != null && message.hasOwnProperty("zhCnContent"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.zhCnContent);
        if (message.enContent != null && message.hasOwnProperty("enContent"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.enContent);
        return writer;
    };
    Mail.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Mail.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Mail();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 3:
                message.lifeTime = reader.int32();
                break;
            case 4:
                message.zhCnTitle = reader.string();
                break;
            case 5:
                message.enTitle = reader.string();
                break;
            case 6:
                if (!(message.item && message.item.length))
                    message.item = [];
                message.item.push($excelRoot.DTFixItemNum.decode(reader, reader.uint32()));
                break;
            case 7:
                message.zhCnContent = reader.string();
                break;
            case 8:
                message.enContent = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Mail.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Mail.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.lifeTime != null && message.hasOwnProperty("lifeTime"))
            if (!$util.isInteger(message.lifeTime))
                return "lifeTime: integer expected";
        if (message.zhCnTitle != null && message.hasOwnProperty("zhCnTitle"))
            if (!$util.isString(message.zhCnTitle))
                return "zhCnTitle: string expected";
        if (message.enTitle != null && message.hasOwnProperty("enTitle"))
            if (!$util.isString(message.enTitle))
                return "enTitle: string expected";
        if (message.item != null && message.hasOwnProperty("item")) {
            if (!Array.isArray(message.item))
                return "item: array expected";
            for (var i = 0; i < message.item.length; ++i) {
                var error = $excelRoot.DTFixItemNum.verify(message.item[i]);
                if (error)
                    return "item." + error;
            }
        }
        if (message.zhCnContent != null && message.hasOwnProperty("zhCnContent"))
            if (!$util.isString(message.zhCnContent))
                return "zhCnContent: string expected";
        if (message.enContent != null && message.hasOwnProperty("enContent"))
            if (!$util.isString(message.enContent))
                return "enContent: string expected";
        return null;
    };
    Mail.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Mail)
            return object;
        var message = new $excelRoot.Mail();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.lifeTime != null)
            message.lifeTime = object.lifeTime | 0;
        if (object.zhCnTitle != null)
            message.zhCnTitle = String(object.zhCnTitle);
        if (object.enTitle != null)
            message.enTitle = String(object.enTitle);
        if (object.item) {
            if (!Array.isArray(object.item))
                throw TypeError(".Mail.item: array expected");
            message.item = [];
            for (var i = 0; i < object.item.length; ++i) {
                if (typeof object.item[i] !== "object")
                    throw TypeError(".Mail.item: object expected");
                message.item[i] = $excelRoot.DTFixItemNum.fromObject(object.item[i]);
            }
        }
        if (object.zhCnContent != null)
            message.zhCnContent = String(object.zhCnContent);
        if (object.enContent != null)
            message.enContent = String(object.enContent);
        return message;
    };
    Mail.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.item = [];
        if (options.defaults) {
            object.id = 0;
            object.lifeTime = 0;
            object.zhCnTitle = "";
            object.enTitle = "";
            object.zhCnContent = "";
            object.enContent = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.lifeTime != null && message.hasOwnProperty("lifeTime"))
            object.lifeTime = message.lifeTime;
        if (message.zhCnTitle != null && message.hasOwnProperty("zhCnTitle"))
            object.zhCnTitle = message.zhCnTitle;
        if (message.enTitle != null && message.hasOwnProperty("enTitle"))
            object.enTitle = message.enTitle;
        if (message.item && message.item.length) {
            object.item = [];
            for (var j = 0; j < message.item.length; ++j)
                object.item[j] = $excelRoot.DTFixItemNum.toObject(message.item[j], options);
        }
        if (message.zhCnContent != null && message.hasOwnProperty("zhCnContent"))
            object.zhCnContent = message.zhCnContent;
        if (message.enContent != null && message.hasOwnProperty("enContent"))
            object.enContent = message.enContent;
        return object;
    };
    Mail.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Mail;
})();
$excelRoot.Map = (function() {
    function Map(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Map.prototype.id = 0;
    Map.prototype.g = 0;
    Map.prototype.vx = 0;
    Map.prototype.vy = 0;
    Map.prototype.maxt = 0;
    Map.prototype.mint = 0;
    Map.prototype.maxPillar = 0;
    Map.create = function create(properties) {
        return new Map(properties);
    };
    Map.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.g != null && message.hasOwnProperty("g"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.g);
        if (message.vx != null && message.hasOwnProperty("vx"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.vx);
        if (message.vy != null && message.hasOwnProperty("vy"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.vy);
        if (message.maxt != null && message.hasOwnProperty("maxt"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.maxt);
        if (message.mint != null && message.hasOwnProperty("mint"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.mint);
        if (message.maxPillar != null && message.hasOwnProperty("maxPillar"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.maxPillar);
        return writer;
    };
    Map.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Map.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Map();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.g = reader.int32();
                break;
            case 3:
                message.vx = reader.int32();
                break;
            case 4:
                message.vy = reader.int32();
                break;
            case 5:
                message.maxt = reader.int32();
                break;
            case 6:
                message.mint = reader.int32();
                break;
            case 7:
                message.maxPillar = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Map.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Map.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.g != null && message.hasOwnProperty("g"))
            if (!$util.isInteger(message.g))
                return "g: integer expected";
        if (message.vx != null && message.hasOwnProperty("vx"))
            if (!$util.isInteger(message.vx))
                return "vx: integer expected";
        if (message.vy != null && message.hasOwnProperty("vy"))
            if (!$util.isInteger(message.vy))
                return "vy: integer expected";
        if (message.maxt != null && message.hasOwnProperty("maxt"))
            if (!$util.isInteger(message.maxt))
                return "maxt: integer expected";
        if (message.mint != null && message.hasOwnProperty("mint"))
            if (!$util.isInteger(message.mint))
                return "mint: integer expected";
        if (message.maxPillar != null && message.hasOwnProperty("maxPillar"))
            if (!$util.isInteger(message.maxPillar))
                return "maxPillar: integer expected";
        return null;
    };
    Map.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Map)
            return object;
        var message = new $excelRoot.Map();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.g != null)
            message.g = object.g | 0;
        if (object.vx != null)
            message.vx = object.vx | 0;
        if (object.vy != null)
            message.vy = object.vy | 0;
        if (object.maxt != null)
            message.maxt = object.maxt | 0;
        if (object.mint != null)
            message.mint = object.mint | 0;
        if (object.maxPillar != null)
            message.maxPillar = object.maxPillar | 0;
        return message;
    };
    Map.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.g = 0;
            object.vx = 0;
            object.vy = 0;
            object.maxt = 0;
            object.mint = 0;
            object.maxPillar = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.g != null && message.hasOwnProperty("g"))
            object.g = message.g;
        if (message.vx != null && message.hasOwnProperty("vx"))
            object.vx = message.vx;
        if (message.vy != null && message.hasOwnProperty("vy"))
            object.vy = message.vy;
        if (message.maxt != null && message.hasOwnProperty("maxt"))
            object.maxt = message.maxt;
        if (message.mint != null && message.hasOwnProperty("mint"))
            object.mint = message.mint;
        if (message.maxPillar != null && message.hasOwnProperty("maxPillar"))
            object.maxPillar = message.maxPillar;
        return object;
    };
    Map.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Map;
})();
$excelRoot.Menu = (function() {
    function Menu(properties) {
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
        if (message.closeOtherType != null && message.hasOwnProperty("closeOtherType"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.closeOtherType);
        if (message.closeHomeWindow != null && message.hasOwnProperty("closeHomeWindow"))
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.closeHomeWindow);
        if (message.isAutoOpenHomeWindow != null && message.hasOwnProperty("isAutoOpenHomeWindow"))
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.isAutoOpenHomeWindow);
        if (message.cacheTime != null && message.hasOwnProperty("cacheTime"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.cacheTime);
        if (message.loaderId != null && message.hasOwnProperty("loaderId"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.loaderId);
        if (message.barType != null && message.hasOwnProperty("barType"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.barType);
        if (message.barIndex != null && message.hasOwnProperty("barIndex"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.barIndex);
        if (message.openAnimation != null && message.hasOwnProperty("openAnimation"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.openAnimation);
        if (message.closeAnimation != null && message.hasOwnProperty("closeAnimation"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.closeAnimation);
        if (message.redType != null && message.hasOwnProperty("redType"))
            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.redType);
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
                message.closeOtherType = reader.int32();
                break;
            case 8:
                message.closeHomeWindow = reader.bool();
                break;
            case 9:
                message.isAutoOpenHomeWindow = reader.bool();
                break;
            case 10:
                message.cacheTime = reader.int32();
                break;
            case 11:
                message.loaderId = reader.int32();
                break;
            case 12:
                message.barType = reader.int32();
                break;
            case 13:
                message.barIndex = reader.int32();
                break;
            case 14:
                message.openAnimation = reader.int32();
                break;
            case 15:
                message.closeAnimation = reader.int32();
                break;
            case 16:
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
$excelRoot.MenuIndex = (function() {
    function MenuIndex(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    MenuIndex.prototype.id = 0;
    MenuIndex.prototype.name = "";
    MenuIndex.prototype.menuId = 0;
    MenuIndex.prototype.openType = 0;
    MenuIndex.prototype.menuIndex = 0;
    MenuIndex.prototype.redType = 0;
    MenuIndex.create = function create(properties) {
        return new MenuIndex(properties);
    };
    MenuIndex.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.menuId != null && message.hasOwnProperty("menuId"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.menuId);
        if (message.openType != null && message.hasOwnProperty("openType"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.openType);
        if (message.menuIndex != null && message.hasOwnProperty("menuIndex"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.menuIndex);
        if (message.redType != null && message.hasOwnProperty("redType"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.redType);
        return writer;
    };
    MenuIndex.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    MenuIndex.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.MenuIndex();
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
                message.menuId = reader.int32();
                break;
            case 4:
                message.openType = reader.int32();
                break;
            case 5:
                message.menuIndex = reader.int32();
                break;
            case 6:
                message.redType = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    MenuIndex.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    MenuIndex.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.menuId != null && message.hasOwnProperty("menuId"))
            if (!$util.isInteger(message.menuId))
                return "menuId: integer expected";
        if (message.openType != null && message.hasOwnProperty("openType"))
            if (!$util.isInteger(message.openType))
                return "openType: integer expected";
        if (message.menuIndex != null && message.hasOwnProperty("menuIndex"))
            if (!$util.isInteger(message.menuIndex))
                return "menuIndex: integer expected";
        if (message.redType != null && message.hasOwnProperty("redType"))
            if (!$util.isInteger(message.redType))
                return "redType: integer expected";
        return null;
    };
    MenuIndex.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.MenuIndex)
            return object;
        var message = new $excelRoot.MenuIndex();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.name != null)
            message.name = String(object.name);
        if (object.menuId != null)
            message.menuId = object.menuId | 0;
        if (object.openType != null)
            message.openType = object.openType | 0;
        if (object.menuIndex != null)
            message.menuIndex = object.menuIndex | 0;
        if (object.redType != null)
            message.redType = object.redType | 0;
        return message;
    };
    MenuIndex.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.name = "";
            object.menuId = 0;
            object.openType = 0;
            object.menuIndex = 0;
            object.redType = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.menuId != null && message.hasOwnProperty("menuId"))
            object.menuId = message.menuId;
        if (message.openType != null && message.hasOwnProperty("openType"))
            object.openType = message.openType;
        if (message.menuIndex != null && message.hasOwnProperty("menuIndex"))
            object.menuIndex = message.menuIndex;
        if (message.redType != null && message.hasOwnProperty("redType"))
            object.redType = message.redType;
        return object;
    };
    MenuIndex.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return MenuIndex;
})();
$excelRoot.MonsterProp = (function() {
    function MonsterProp(properties) {
        this.PropValue = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    MonsterProp.prototype.id = 0;
    MonsterProp.prototype.Chapter = 0;
    MonsterProp.prototype.Section = 0;
    MonsterProp.prototype.MonsterType = 0;
    MonsterProp.prototype.MonsterTag = 0;
    MonsterProp.prototype.Level = 0;
    MonsterProp.prototype.Whatamonster = "";
    MonsterProp.prototype.PropValue = $util.emptyArray;
    MonsterProp.prototype.HPMax = 0;
    MonsterProp.prototype.Patt = 0;
    MonsterProp.prototype.Hit = 0;
    MonsterProp.prototype.DamageReduction = 0;
    MonsterProp.create = function create(properties) {
        return new MonsterProp(properties);
    };
    MonsterProp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.Chapter != null && message.hasOwnProperty("Chapter"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Chapter);
        if (message.Section != null && message.hasOwnProperty("Section"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Section);
        if (message.MonsterType != null && message.hasOwnProperty("MonsterType"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.MonsterType);
        if (message.MonsterTag != null && message.hasOwnProperty("MonsterTag"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.MonsterTag);
        if (message.Level != null && message.hasOwnProperty("Level"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Level);
        if (message.Whatamonster != null && message.hasOwnProperty("Whatamonster"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.Whatamonster);
        if (message.PropValue != null && message.PropValue.length)
            for (var i = 0; i < message.PropValue.length; ++i)
                $excelRoot.DTPropValue.encode(message.PropValue[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.HPMax != null && message.hasOwnProperty("HPMax"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.HPMax);
        if (message.Patt != null && message.hasOwnProperty("Patt"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.Patt);
        if (message.Hit != null && message.hasOwnProperty("Hit"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.Hit);
        if (message.DamageReduction != null && message.hasOwnProperty("DamageReduction"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.DamageReduction);
        return writer;
    };
    MonsterProp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    MonsterProp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.MonsterProp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.Chapter = reader.int32();
                break;
            case 3:
                message.Section = reader.int32();
                break;
            case 4:
                message.MonsterType = reader.int32();
                break;
            case 5:
                message.MonsterTag = reader.int32();
                break;
            case 6:
                message.Level = reader.int32();
                break;
            case 7:
                message.Whatamonster = reader.string();
                break;
            case 8:
                if (!(message.PropValue && message.PropValue.length))
                    message.PropValue = [];
                message.PropValue.push($excelRoot.DTPropValue.decode(reader, reader.uint32()));
                break;
            case 9:
                message.HPMax = reader.int32();
                break;
            case 10:
                message.Patt = reader.int32();
                break;
            case 11:
                message.Hit = reader.int32();
                break;
            case 12:
                message.DamageReduction = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    MonsterProp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    MonsterProp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.Chapter != null && message.hasOwnProperty("Chapter"))
            if (!$util.isInteger(message.Chapter))
                return "Chapter: integer expected";
        if (message.Section != null && message.hasOwnProperty("Section"))
            if (!$util.isInteger(message.Section))
                return "Section: integer expected";
        if (message.MonsterType != null && message.hasOwnProperty("MonsterType"))
            if (!$util.isInteger(message.MonsterType))
                return "MonsterType: integer expected";
        if (message.MonsterTag != null && message.hasOwnProperty("MonsterTag"))
            if (!$util.isInteger(message.MonsterTag))
                return "MonsterTag: integer expected";
        if (message.Level != null && message.hasOwnProperty("Level"))
            if (!$util.isInteger(message.Level))
                return "Level: integer expected";
        if (message.Whatamonster != null && message.hasOwnProperty("Whatamonster"))
            if (!$util.isString(message.Whatamonster))
                return "Whatamonster: string expected";
        if (message.PropValue != null && message.hasOwnProperty("PropValue")) {
            if (!Array.isArray(message.PropValue))
                return "PropValue: array expected";
            for (var i = 0; i < message.PropValue.length; ++i) {
                var error = $excelRoot.DTPropValue.verify(message.PropValue[i]);
                if (error)
                    return "PropValue." + error;
            }
        }
        if (message.HPMax != null && message.hasOwnProperty("HPMax"))
            if (!$util.isInteger(message.HPMax))
                return "HPMax: integer expected";
        if (message.Patt != null && message.hasOwnProperty("Patt"))
            if (!$util.isInteger(message.Patt))
                return "Patt: integer expected";
        if (message.Hit != null && message.hasOwnProperty("Hit"))
            if (!$util.isInteger(message.Hit))
                return "Hit: integer expected";
        if (message.DamageReduction != null && message.hasOwnProperty("DamageReduction"))
            if (!$util.isInteger(message.DamageReduction))
                return "DamageReduction: integer expected";
        return null;
    };
    MonsterProp.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.MonsterProp)
            return object;
        var message = new $excelRoot.MonsterProp();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.Chapter != null)
            message.Chapter = object.Chapter | 0;
        if (object.Section != null)
            message.Section = object.Section | 0;
        if (object.MonsterType != null)
            message.MonsterType = object.MonsterType | 0;
        if (object.MonsterTag != null)
            message.MonsterTag = object.MonsterTag | 0;
        if (object.Level != null)
            message.Level = object.Level | 0;
        if (object.Whatamonster != null)
            message.Whatamonster = String(object.Whatamonster);
        if (object.PropValue) {
            if (!Array.isArray(object.PropValue))
                throw TypeError(".MonsterProp.PropValue: array expected");
            message.PropValue = [];
            for (var i = 0; i < object.PropValue.length; ++i) {
                if (typeof object.PropValue[i] !== "object")
                    throw TypeError(".MonsterProp.PropValue: object expected");
                message.PropValue[i] = $excelRoot.DTPropValue.fromObject(object.PropValue[i]);
            }
        }
        if (object.HPMax != null)
            message.HPMax = object.HPMax | 0;
        if (object.Patt != null)
            message.Patt = object.Patt | 0;
        if (object.Hit != null)
            message.Hit = object.Hit | 0;
        if (object.DamageReduction != null)
            message.DamageReduction = object.DamageReduction | 0;
        return message;
    };
    MonsterProp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.PropValue = [];
        if (options.defaults) {
            object.id = 0;
            object.Chapter = 0;
            object.Section = 0;
            object.MonsterType = 0;
            object.MonsterTag = 0;
            object.Level = 0;
            object.Whatamonster = "";
            object.HPMax = 0;
            object.Patt = 0;
            object.Hit = 0;
            object.DamageReduction = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.Chapter != null && message.hasOwnProperty("Chapter"))
            object.Chapter = message.Chapter;
        if (message.Section != null && message.hasOwnProperty("Section"))
            object.Section = message.Section;
        if (message.MonsterType != null && message.hasOwnProperty("MonsterType"))
            object.MonsterType = message.MonsterType;
        if (message.MonsterTag != null && message.hasOwnProperty("MonsterTag"))
            object.MonsterTag = message.MonsterTag;
        if (message.Level != null && message.hasOwnProperty("Level"))
            object.Level = message.Level;
        if (message.Whatamonster != null && message.hasOwnProperty("Whatamonster"))
            object.Whatamonster = message.Whatamonster;
        if (message.PropValue && message.PropValue.length) {
            object.PropValue = [];
            for (var j = 0; j < message.PropValue.length; ++j)
                object.PropValue[j] = $excelRoot.DTPropValue.toObject(message.PropValue[j], options);
        }
        if (message.HPMax != null && message.hasOwnProperty("HPMax"))
            object.HPMax = message.HPMax;
        if (message.Patt != null && message.hasOwnProperty("Patt"))
            object.Patt = message.Patt;
        if (message.Hit != null && message.hasOwnProperty("Hit"))
            object.Hit = message.Hit;
        if (message.DamageReduction != null && message.hasOwnProperty("DamageReduction"))
            object.DamageReduction = message.DamageReduction;
        return object;
    };
    MonsterProp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return MonsterProp;
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
$excelRoot.PlayerLevel = (function() {
    function PlayerLevel(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    PlayerLevel.prototype.id = 0;
    PlayerLevel.prototype.playerNeedExp = 0;
    PlayerLevel.prototype.addPower = 0;
    PlayerLevel.prototype.maxPower = 0;
    PlayerLevel.prototype.rewardId = 0;
    PlayerLevel.create = function create(properties) {
        return new PlayerLevel(properties);
    };
    PlayerLevel.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.playerNeedExp != null && message.hasOwnProperty("playerNeedExp"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playerNeedExp);
        if (message.addPower != null && message.hasOwnProperty("addPower"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.addPower);
        if (message.maxPower != null && message.hasOwnProperty("maxPower"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.maxPower);
        if (message.rewardId != null && message.hasOwnProperty("rewardId"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.rewardId);
        return writer;
    };
    PlayerLevel.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    PlayerLevel.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.PlayerLevel();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.playerNeedExp = reader.int32();
                break;
            case 3:
                message.addPower = reader.int32();
                break;
            case 4:
                message.maxPower = reader.int32();
                break;
            case 5:
                message.rewardId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    PlayerLevel.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    PlayerLevel.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.playerNeedExp != null && message.hasOwnProperty("playerNeedExp"))
            if (!$util.isInteger(message.playerNeedExp))
                return "playerNeedExp: integer expected";
        if (message.addPower != null && message.hasOwnProperty("addPower"))
            if (!$util.isInteger(message.addPower))
                return "addPower: integer expected";
        if (message.maxPower != null && message.hasOwnProperty("maxPower"))
            if (!$util.isInteger(message.maxPower))
                return "maxPower: integer expected";
        if (message.rewardId != null && message.hasOwnProperty("rewardId"))
            if (!$util.isInteger(message.rewardId))
                return "rewardId: integer expected";
        return null;
    };
    PlayerLevel.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.PlayerLevel)
            return object;
        var message = new $excelRoot.PlayerLevel();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.playerNeedExp != null)
            message.playerNeedExp = object.playerNeedExp | 0;
        if (object.addPower != null)
            message.addPower = object.addPower | 0;
        if (object.maxPower != null)
            message.maxPower = object.maxPower | 0;
        if (object.rewardId != null)
            message.rewardId = object.rewardId | 0;
        return message;
    };
    PlayerLevel.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.playerNeedExp = 0;
            object.addPower = 0;
            object.maxPower = 0;
            object.rewardId = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.playerNeedExp != null && message.hasOwnProperty("playerNeedExp"))
            object.playerNeedExp = message.playerNeedExp;
        if (message.addPower != null && message.hasOwnProperty("addPower"))
            object.addPower = message.addPower;
        if (message.maxPower != null && message.hasOwnProperty("maxPower"))
            object.maxPower = message.maxPower;
        if (message.rewardId != null && message.hasOwnProperty("rewardId"))
            object.rewardId = message.rewardId;
        return object;
    };
    PlayerLevel.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return PlayerLevel;
})();
$excelRoot.PlayerName = (function() {
    function PlayerName(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    PlayerName.prototype.id = 0;
    PlayerName.prototype.zhCnName1 = "";
    PlayerName.prototype.zhCnName2 = "";
    PlayerName.prototype.zhCnName3 = "";
    PlayerName.create = function create(properties) {
        return new PlayerName(properties);
    };
    PlayerName.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.zhCnName1 != null && message.hasOwnProperty("zhCnName1"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.zhCnName1);
        if (message.zhCnName2 != null && message.hasOwnProperty("zhCnName2"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.zhCnName2);
        if (message.zhCnName3 != null && message.hasOwnProperty("zhCnName3"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.zhCnName3);
        return writer;
    };
    PlayerName.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    PlayerName.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.PlayerName();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.zhCnName1 = reader.string();
                break;
            case 3:
                message.zhCnName2 = reader.string();
                break;
            case 4:
                message.zhCnName3 = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    PlayerName.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    PlayerName.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.zhCnName1 != null && message.hasOwnProperty("zhCnName1"))
            if (!$util.isString(message.zhCnName1))
                return "zhCnName1: string expected";
        if (message.zhCnName2 != null && message.hasOwnProperty("zhCnName2"))
            if (!$util.isString(message.zhCnName2))
                return "zhCnName2: string expected";
        if (message.zhCnName3 != null && message.hasOwnProperty("zhCnName3"))
            if (!$util.isString(message.zhCnName3))
                return "zhCnName3: string expected";
        return null;
    };
    PlayerName.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.PlayerName)
            return object;
        var message = new $excelRoot.PlayerName();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.zhCnName1 != null)
            message.zhCnName1 = String(object.zhCnName1);
        if (object.zhCnName2 != null)
            message.zhCnName2 = String(object.zhCnName2);
        if (object.zhCnName3 != null)
            message.zhCnName3 = String(object.zhCnName3);
        return message;
    };
    PlayerName.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.zhCnName1 = "";
            object.zhCnName2 = "";
            object.zhCnName3 = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.zhCnName1 != null && message.hasOwnProperty("zhCnName1"))
            object.zhCnName1 = message.zhCnName1;
        if (message.zhCnName2 != null && message.hasOwnProperty("zhCnName2"))
            object.zhCnName2 = message.zhCnName2;
        if (message.zhCnName3 != null && message.hasOwnProperty("zhCnName3"))
            object.zhCnName3 = message.zhCnName3;
        return object;
    };
    PlayerName.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return PlayerName;
})();
$excelRoot.PlayList = (function() {
    function PlayList(properties) {
        this.openTime1 = [];
        this.openTime2 = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    PlayList.prototype.id = 0;
    PlayList.prototype.zhCnName = "";
    PlayList.prototype.zhCnDes = "";
    PlayList.prototype.icon = 0;
    PlayList.prototype.menuId = 0;
    PlayList.prototype.type = 0;
    PlayList.prototype.mode = 0;
    PlayList.prototype.unlock = 0;
    PlayList.prototype.openTime1 = $util.emptyArray;
    PlayList.prototype.openTime2 = $util.emptyArray;
    PlayList.create = function create(properties) {
        return new PlayList(properties);
    };
    PlayList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.zhCnName);
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.zhCnDes);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.icon);
        if (message.menuId != null && message.hasOwnProperty("menuId"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.menuId);
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.type);
        if (message.mode != null && message.hasOwnProperty("mode"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.mode);
        if (message.unlock != null && message.hasOwnProperty("unlock"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.unlock);
        if (message.openTime1 != null && message.openTime1.length)
            for (var i = 0; i < message.openTime1.length; ++i)
                $excelRoot.DTTime.encode(message.openTime1[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.openTime2 != null && message.openTime2.length)
            for (var i = 0; i < message.openTime2.length; ++i)
                $excelRoot.DTTime.encode(message.openTime2[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        return writer;
    };
    PlayList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    PlayList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.PlayList();
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
                message.icon = reader.int32();
                break;
            case 5:
                message.menuId = reader.int32();
                break;
            case 6:
                message.type = reader.int32();
                break;
            case 7:
                message.mode = reader.int32();
                break;
            case 8:
                message.unlock = reader.int32();
                break;
            case 9:
                if (!(message.openTime1 && message.openTime1.length))
                    message.openTime1 = [];
                message.openTime1.push($excelRoot.DTTime.decode(reader, reader.uint32()));
                break;
            case 10:
                if (!(message.openTime2 && message.openTime2.length))
                    message.openTime2 = [];
                message.openTime2.push($excelRoot.DTTime.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    PlayList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    PlayList.verify = function verify(message) {
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
            if (!$util.isInteger(message.icon))
                return "icon: integer expected";
        if (message.menuId != null && message.hasOwnProperty("menuId"))
            if (!$util.isInteger(message.menuId))
                return "menuId: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.mode != null && message.hasOwnProperty("mode"))
            if (!$util.isInteger(message.mode))
                return "mode: integer expected";
        if (message.unlock != null && message.hasOwnProperty("unlock"))
            if (!$util.isInteger(message.unlock))
                return "unlock: integer expected";
        if (message.openTime1 != null && message.hasOwnProperty("openTime1")) {
            if (!Array.isArray(message.openTime1))
                return "openTime1: array expected";
            for (var i = 0; i < message.openTime1.length; ++i) {
                var error = $excelRoot.DTTime.verify(message.openTime1[i]);
                if (error)
                    return "openTime1." + error;
            }
        }
        if (message.openTime2 != null && message.hasOwnProperty("openTime2")) {
            if (!Array.isArray(message.openTime2))
                return "openTime2: array expected";
            for (var i = 0; i < message.openTime2.length; ++i) {
                var error = $excelRoot.DTTime.verify(message.openTime2[i]);
                if (error)
                    return "openTime2." + error;
            }
        }
        return null;
    };
    PlayList.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.PlayList)
            return object;
        var message = new $excelRoot.PlayList();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.zhCnDes != null)
            message.zhCnDes = String(object.zhCnDes);
        if (object.icon != null)
            message.icon = object.icon | 0;
        if (object.menuId != null)
            message.menuId = object.menuId | 0;
        if (object.type != null)
            message.type = object.type | 0;
        if (object.mode != null)
            message.mode = object.mode | 0;
        if (object.unlock != null)
            message.unlock = object.unlock | 0;
        if (object.openTime1) {
            if (!Array.isArray(object.openTime1))
                throw TypeError(".PlayList.openTime1: array expected");
            message.openTime1 = [];
            for (var i = 0; i < object.openTime1.length; ++i) {
                if (typeof object.openTime1[i] !== "object")
                    throw TypeError(".PlayList.openTime1: object expected");
                message.openTime1[i] = $excelRoot.DTTime.fromObject(object.openTime1[i]);
            }
        }
        if (object.openTime2) {
            if (!Array.isArray(object.openTime2))
                throw TypeError(".PlayList.openTime2: array expected");
            message.openTime2 = [];
            for (var i = 0; i < object.openTime2.length; ++i) {
                if (typeof object.openTime2[i] !== "object")
                    throw TypeError(".PlayList.openTime2: object expected");
                message.openTime2[i] = $excelRoot.DTTime.fromObject(object.openTime2[i]);
            }
        }
        return message;
    };
    PlayList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.openTime1 = [];
            object.openTime2 = [];
        }
        if (options.defaults) {
            object.id = 0;
            object.zhCnName = "";
            object.zhCnDes = "";
            object.icon = 0;
            object.menuId = 0;
            object.type = 0;
            object.mode = 0;
            object.unlock = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.zhCnDes != null && message.hasOwnProperty("zhCnDes"))
            object.zhCnDes = message.zhCnDes;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.menuId != null && message.hasOwnProperty("menuId"))
            object.menuId = message.menuId;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.mode != null && message.hasOwnProperty("mode"))
            object.mode = message.mode;
        if (message.unlock != null && message.hasOwnProperty("unlock"))
            object.unlock = message.unlock;
        if (message.openTime1 && message.openTime1.length) {
            object.openTime1 = [];
            for (var j = 0; j < message.openTime1.length; ++j)
                object.openTime1[j] = $excelRoot.DTTime.toObject(message.openTime1[j], options);
        }
        if (message.openTime2 && message.openTime2.length) {
            object.openTime2 = [];
            for (var j = 0; j < message.openTime2.length; ++j)
                object.openTime2[j] = $excelRoot.DTTime.toObject(message.openTime2[j], options);
        }
        return object;
    };
    PlayList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return PlayList;
})();
$excelRoot.Plot = (function() {
    function Plot(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Plot.prototype.id = 0;
    Plot.prototype.storyGroupId = 0;
    Plot.prototype.nextStoryGroupId = 0;
    Plot.prototype.zhCnSceneName = "";
    Plot.prototype.dialgBox = 0;
    Plot.prototype.leaveMode = 0;
    Plot.prototype.position = 0;
    Plot.prototype.zhCnName = "";
    Plot.prototype.imageId = 0;
    Plot.prototype.expression = "";
    Plot.prototype.zhCnWord = "";
    Plot.prototype.BackgroundMap = "";
    Plot.prototype.backgroundMusic = "";
    Plot.prototype.playType = 0;
    Plot.prototype.specialEffects = 0;
    Plot.create = function create(properties) {
        return new Plot(properties);
    };
    Plot.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.storyGroupId != null && message.hasOwnProperty("storyGroupId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.storyGroupId);
        if (message.nextStoryGroupId != null && message.hasOwnProperty("nextStoryGroupId"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nextStoryGroupId);
        if (message.zhCnSceneName != null && message.hasOwnProperty("zhCnSceneName"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.zhCnSceneName);
        if (message.dialgBox != null && message.hasOwnProperty("dialgBox"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.dialgBox);
        if (message.leaveMode != null && message.hasOwnProperty("leaveMode"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.leaveMode);
        if (message.position != null && message.hasOwnProperty("position"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.position);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.zhCnName);
        if (message.imageId != null && message.hasOwnProperty("imageId"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.imageId);
        if (message.expression != null && message.hasOwnProperty("expression"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.expression);
        if (message.zhCnWord != null && message.hasOwnProperty("zhCnWord"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.zhCnWord);
        if (message.BackgroundMap != null && message.hasOwnProperty("BackgroundMap"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.BackgroundMap);
        if (message.backgroundMusic != null && message.hasOwnProperty("backgroundMusic"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.backgroundMusic);
        if (message.playType != null && message.hasOwnProperty("playType"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.playType);
        if (message.specialEffects != null && message.hasOwnProperty("specialEffects"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.specialEffects);
        return writer;
    };
    Plot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Plot.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Plot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.storyGroupId = reader.int32();
                break;
            case 3:
                message.nextStoryGroupId = reader.int32();
                break;
            case 4:
                message.zhCnSceneName = reader.string();
                break;
            case 5:
                message.dialgBox = reader.int32();
                break;
            case 6:
                message.leaveMode = reader.int32();
                break;
            case 7:
                message.position = reader.int32();
                break;
            case 8:
                message.zhCnName = reader.string();
                break;
            case 9:
                message.imageId = reader.int32();
                break;
            case 10:
                message.expression = reader.string();
                break;
            case 11:
                message.zhCnWord = reader.string();
                break;
            case 12:
                message.BackgroundMap = reader.string();
                break;
            case 13:
                message.backgroundMusic = reader.string();
                break;
            case 14:
                message.playType = reader.int32();
                break;
            case 15:
                message.specialEffects = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Plot.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Plot.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.storyGroupId != null && message.hasOwnProperty("storyGroupId"))
            if (!$util.isInteger(message.storyGroupId))
                return "storyGroupId: integer expected";
        if (message.nextStoryGroupId != null && message.hasOwnProperty("nextStoryGroupId"))
            if (!$util.isInteger(message.nextStoryGroupId))
                return "nextStoryGroupId: integer expected";
        if (message.zhCnSceneName != null && message.hasOwnProperty("zhCnSceneName"))
            if (!$util.isString(message.zhCnSceneName))
                return "zhCnSceneName: string expected";
        if (message.dialgBox != null && message.hasOwnProperty("dialgBox"))
            if (!$util.isInteger(message.dialgBox))
                return "dialgBox: integer expected";
        if (message.leaveMode != null && message.hasOwnProperty("leaveMode"))
            if (!$util.isInteger(message.leaveMode))
                return "leaveMode: integer expected";
        if (message.position != null && message.hasOwnProperty("position"))
            if (!$util.isInteger(message.position))
                return "position: integer expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.imageId != null && message.hasOwnProperty("imageId"))
            if (!$util.isInteger(message.imageId))
                return "imageId: integer expected";
        if (message.expression != null && message.hasOwnProperty("expression"))
            if (!$util.isString(message.expression))
                return "expression: string expected";
        if (message.zhCnWord != null && message.hasOwnProperty("zhCnWord"))
            if (!$util.isString(message.zhCnWord))
                return "zhCnWord: string expected";
        if (message.BackgroundMap != null && message.hasOwnProperty("BackgroundMap"))
            if (!$util.isString(message.BackgroundMap))
                return "BackgroundMap: string expected";
        if (message.backgroundMusic != null && message.hasOwnProperty("backgroundMusic"))
            if (!$util.isString(message.backgroundMusic))
                return "backgroundMusic: string expected";
        if (message.playType != null && message.hasOwnProperty("playType"))
            if (!$util.isInteger(message.playType))
                return "playType: integer expected";
        if (message.specialEffects != null && message.hasOwnProperty("specialEffects"))
            if (!$util.isInteger(message.specialEffects))
                return "specialEffects: integer expected";
        return null;
    };
    Plot.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Plot)
            return object;
        var message = new $excelRoot.Plot();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.storyGroupId != null)
            message.storyGroupId = object.storyGroupId | 0;
        if (object.nextStoryGroupId != null)
            message.nextStoryGroupId = object.nextStoryGroupId | 0;
        if (object.zhCnSceneName != null)
            message.zhCnSceneName = String(object.zhCnSceneName);
        if (object.dialgBox != null)
            message.dialgBox = object.dialgBox | 0;
        if (object.leaveMode != null)
            message.leaveMode = object.leaveMode | 0;
        if (object.position != null)
            message.position = object.position | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.imageId != null)
            message.imageId = object.imageId | 0;
        if (object.expression != null)
            message.expression = String(object.expression);
        if (object.zhCnWord != null)
            message.zhCnWord = String(object.zhCnWord);
        if (object.BackgroundMap != null)
            message.BackgroundMap = String(object.BackgroundMap);
        if (object.backgroundMusic != null)
            message.backgroundMusic = String(object.backgroundMusic);
        if (object.playType != null)
            message.playType = object.playType | 0;
        if (object.specialEffects != null)
            message.specialEffects = object.specialEffects | 0;
        return message;
    };
    Plot.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.storyGroupId = 0;
            object.nextStoryGroupId = 0;
            object.zhCnSceneName = "";
            object.dialgBox = 0;
            object.leaveMode = 0;
            object.position = 0;
            object.zhCnName = "";
            object.imageId = 0;
            object.expression = "";
            object.zhCnWord = "";
            object.BackgroundMap = "";
            object.backgroundMusic = "";
            object.playType = 0;
            object.specialEffects = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.storyGroupId != null && message.hasOwnProperty("storyGroupId"))
            object.storyGroupId = message.storyGroupId;
        if (message.nextStoryGroupId != null && message.hasOwnProperty("nextStoryGroupId"))
            object.nextStoryGroupId = message.nextStoryGroupId;
        if (message.zhCnSceneName != null && message.hasOwnProperty("zhCnSceneName"))
            object.zhCnSceneName = message.zhCnSceneName;
        if (message.dialgBox != null && message.hasOwnProperty("dialgBox"))
            object.dialgBox = message.dialgBox;
        if (message.leaveMode != null && message.hasOwnProperty("leaveMode"))
            object.leaveMode = message.leaveMode;
        if (message.position != null && message.hasOwnProperty("position"))
            object.position = message.position;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.imageId != null && message.hasOwnProperty("imageId"))
            object.imageId = message.imageId;
        if (message.expression != null && message.hasOwnProperty("expression"))
            object.expression = message.expression;
        if (message.zhCnWord != null && message.hasOwnProperty("zhCnWord"))
            object.zhCnWord = message.zhCnWord;
        if (message.BackgroundMap != null && message.hasOwnProperty("BackgroundMap"))
            object.BackgroundMap = message.BackgroundMap;
        if (message.backgroundMusic != null && message.hasOwnProperty("backgroundMusic"))
            object.backgroundMusic = message.backgroundMusic;
        if (message.playType != null && message.hasOwnProperty("playType"))
            object.playType = message.playType;
        if (message.specialEffects != null && message.hasOwnProperty("specialEffects"))
            object.specialEffects = message.specialEffects;
        return object;
    };
    Plot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Plot;
})();
$excelRoot.Power = (function() {
    function Power(properties) {
        this.costID = [];
        this.addPower = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Power.prototype.id = 0;
    Power.prototype.useCount = 0;
    Power.prototype.icon = 0;
    Power.prototype.costID = $util.emptyArray;
    Power.prototype.addPower = $util.emptyArray;
    Power.create = function create(properties) {
        return new Power(properties);
    };
    Power.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.useCount != null && message.hasOwnProperty("useCount"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.useCount);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.icon);
        if (message.costID != null && message.costID.length)
            for (var i = 0; i < message.costID.length; ++i)
                $excelRoot.DTItemNum.encode(message.costID[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.addPower != null && message.addPower.length) {
            writer.uint32(/* id 5, wireType 2 =*/42).fork();
            for (var i = 0; i < message.addPower.length; ++i)
                writer.int32(message.addPower[i]);
            writer.ldelim();
        }
        return writer;
    };
    Power.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Power.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Power();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.useCount = reader.int32();
                break;
            case 3:
                message.icon = reader.int32();
                break;
            case 4:
                if (!(message.costID && message.costID.length))
                    message.costID = [];
                message.costID.push($excelRoot.DTItemNum.decode(reader, reader.uint32()));
                break;
            case 5:
                if (!(message.addPower && message.addPower.length))
                    message.addPower = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.addPower.push(reader.int32());
                } else
                    message.addPower.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Power.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Power.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.useCount != null && message.hasOwnProperty("useCount"))
            if (!$util.isInteger(message.useCount))
                return "useCount: integer expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isInteger(message.icon))
                return "icon: integer expected";
        if (message.costID != null && message.hasOwnProperty("costID")) {
            if (!Array.isArray(message.costID))
                return "costID: array expected";
            for (var i = 0; i < message.costID.length; ++i) {
                var error = $excelRoot.DTItemNum.verify(message.costID[i]);
                if (error)
                    return "costID." + error;
            }
        }
        if (message.addPower != null && message.hasOwnProperty("addPower")) {
            if (!Array.isArray(message.addPower))
                return "addPower: array expected";
            for (var i = 0; i < message.addPower.length; ++i)
                if (!$util.isInteger(message.addPower[i]))
                    return "addPower: integer[] expected";
        }
        return null;
    };
    Power.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Power)
            return object;
        var message = new $excelRoot.Power();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.useCount != null)
            message.useCount = object.useCount | 0;
        if (object.icon != null)
            message.icon = object.icon | 0;
        if (object.costID) {
            if (!Array.isArray(object.costID))
                throw TypeError(".Power.costID: array expected");
            message.costID = [];
            for (var i = 0; i < object.costID.length; ++i) {
                if (typeof object.costID[i] !== "object")
                    throw TypeError(".Power.costID: object expected");
                message.costID[i] = $excelRoot.DTItemNum.fromObject(object.costID[i]);
            }
        }
        if (object.addPower) {
            if (!Array.isArray(object.addPower))
                throw TypeError(".Power.addPower: array expected");
            message.addPower = [];
            for (var i = 0; i < object.addPower.length; ++i)
                message.addPower[i] = object.addPower[i] | 0;
        }
        return message;
    };
    Power.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.costID = [];
            object.addPower = [];
        }
        if (options.defaults) {
            object.id = 0;
            object.useCount = 0;
            object.icon = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.useCount != null && message.hasOwnProperty("useCount"))
            object.useCount = message.useCount;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.costID && message.costID.length) {
            object.costID = [];
            for (var j = 0; j < message.costID.length; ++j)
                object.costID[j] = $excelRoot.DTItemNum.toObject(message.costID[j], options);
        }
        if (message.addPower && message.addPower.length) {
            object.addPower = [];
            for (var j = 0; j < message.addPower.length; ++j)
                object.addPower[j] = message.addPower[j];
        }
        return object;
    };
    Power.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Power;
})();
$excelRoot.PowerGive = (function() {
    function PowerGive(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    PowerGive.prototype.id = 0;
    PowerGive.prototype.startTime = null;
    PowerGive.prototype.overTime = null;
    PowerGive.prototype.addPower = 0;
    PowerGive.prototype.vipAddPower = 0;
    PowerGive.create = function create(properties) {
        return new PowerGive(properties);
    };
    PowerGive.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.startTime != null && message.hasOwnProperty("startTime"))
            $excelRoot.DTTime.encode(message.startTime, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.overTime != null && message.hasOwnProperty("overTime"))
            $excelRoot.DTTime.encode(message.overTime, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.addPower != null && message.hasOwnProperty("addPower"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.addPower);
        if (message.vipAddPower != null && message.hasOwnProperty("vipAddPower"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.vipAddPower);
        return writer;
    };
    PowerGive.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    PowerGive.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.PowerGive();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.startTime = $excelRoot.DTTime.decode(reader, reader.uint32());
                break;
            case 3:
                message.overTime = $excelRoot.DTTime.decode(reader, reader.uint32());
                break;
            case 4:
                message.addPower = reader.int32();
                break;
            case 5:
                message.vipAddPower = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    PowerGive.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    PowerGive.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.startTime != null && message.hasOwnProperty("startTime")) {
            var error = $excelRoot.DTTime.verify(message.startTime);
            if (error)
                return "startTime." + error;
        }
        if (message.overTime != null && message.hasOwnProperty("overTime")) {
            var error = $excelRoot.DTTime.verify(message.overTime);
            if (error)
                return "overTime." + error;
        }
        if (message.addPower != null && message.hasOwnProperty("addPower"))
            if (!$util.isInteger(message.addPower))
                return "addPower: integer expected";
        if (message.vipAddPower != null && message.hasOwnProperty("vipAddPower"))
            if (!$util.isInteger(message.vipAddPower))
                return "vipAddPower: integer expected";
        return null;
    };
    PowerGive.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.PowerGive)
            return object;
        var message = new $excelRoot.PowerGive();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.startTime != null) {
            if (typeof object.startTime !== "object")
                throw TypeError(".PowerGive.startTime: object expected");
            message.startTime = $excelRoot.DTTime.fromObject(object.startTime);
        }
        if (object.overTime != null) {
            if (typeof object.overTime !== "object")
                throw TypeError(".PowerGive.overTime: object expected");
            message.overTime = $excelRoot.DTTime.fromObject(object.overTime);
        }
        if (object.addPower != null)
            message.addPower = object.addPower | 0;
        if (object.vipAddPower != null)
            message.vipAddPower = object.vipAddPower | 0;
        return message;
    };
    PowerGive.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.startTime = null;
            object.overTime = null;
            object.addPower = 0;
            object.vipAddPower = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.startTime != null && message.hasOwnProperty("startTime"))
            object.startTime = $excelRoot.DTTime.toObject(message.startTime, options);
        if (message.overTime != null && message.hasOwnProperty("overTime"))
            object.overTime = $excelRoot.DTTime.toObject(message.overTime, options);
        if (message.addPower != null && message.hasOwnProperty("addPower"))
            object.addPower = message.addPower;
        if (message.vipAddPower != null && message.hasOwnProperty("vipAddPower"))
            object.vipAddPower = message.vipAddPower;
        return object;
    };
    PowerGive.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return PowerGive;
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
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.zhCnName);
        if (message.ValueType != null && message.hasOwnProperty("ValueType"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ValueType);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.icon);
        if (message.groupType != null && message.hasOwnProperty("groupType"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.groupType);
        if (message.visible != null && message.hasOwnProperty("visible"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.visible);
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
                message.zhCnName = reader.string();
                break;
            case 4:
                message.ValueType = reader.int32();
                break;
            case 5:
                message.icon = reader.int32();
                break;
            case 6:
                message.groupType = reader.int32();
                break;
            case 7:
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
$excelRoot.PropValue = (function() {
    function PropValue(properties) {
        this.Upgrade = [];
        this.RangeRatio = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    PropValue.prototype.id = 0;
    PropValue.prototype.DisplayAss = "";
    PropValue.prototype.PropName = "";
    PropValue.prototype.RandomInterval = null;
    PropValue.prototype.PropValue = 0;
    PropValue.prototype.GrowupMode = 0;
    PropValue.prototype.Upgrade = $util.emptyArray;
    PropValue.prototype.RangeRatio = $util.emptyArray;
    PropValue.create = function create(properties) {
        return new PropValue(properties);
    };
    PropValue.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.DisplayAss != null && message.hasOwnProperty("DisplayAss"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.DisplayAss);
        if (message.PropName != null && message.hasOwnProperty("PropName"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.PropName);
        if (message.RandomInterval != null && message.hasOwnProperty("RandomInterval"))
            $excelRoot.DTRandomInterval.encode(message.RandomInterval, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.PropValue != null && message.hasOwnProperty("PropValue"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.PropValue);
        if (message.GrowupMode != null && message.hasOwnProperty("GrowupMode"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.GrowupMode);
        if (message.Upgrade != null && message.Upgrade.length)
            for (var i = 0; i < message.Upgrade.length; ++i)
                $excelRoot.DTPropGrowupStep.encode(message.Upgrade[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.RangeRatio != null && message.RangeRatio.length) {
            writer.uint32(/* id 9, wireType 2 =*/74).fork();
            for (var i = 0; i < message.RangeRatio.length; ++i)
                writer.int32(message.RangeRatio[i]);
            writer.ldelim();
        }
        return writer;
    };
    PropValue.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    PropValue.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.PropValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 3:
                message.DisplayAss = reader.string();
                break;
            case 4:
                message.PropName = reader.string();
                break;
            case 5:
                message.RandomInterval = $excelRoot.DTRandomInterval.decode(reader, reader.uint32());
                break;
            case 6:
                message.PropValue = reader.int32();
                break;
            case 7:
                message.GrowupMode = reader.int32();
                break;
            case 8:
                if (!(message.Upgrade && message.Upgrade.length))
                    message.Upgrade = [];
                message.Upgrade.push($excelRoot.DTPropGrowupStep.decode(reader, reader.uint32()));
                break;
            case 9:
                if (!(message.RangeRatio && message.RangeRatio.length))
                    message.RangeRatio = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.RangeRatio.push(reader.int32());
                } else
                    message.RangeRatio.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    PropValue.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    PropValue.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.DisplayAss != null && message.hasOwnProperty("DisplayAss"))
            if (!$util.isString(message.DisplayAss))
                return "DisplayAss: string expected";
        if (message.PropName != null && message.hasOwnProperty("PropName"))
            if (!$util.isString(message.PropName))
                return "PropName: string expected";
        if (message.RandomInterval != null && message.hasOwnProperty("RandomInterval")) {
            var error = $excelRoot.DTRandomInterval.verify(message.RandomInterval);
            if (error)
                return "RandomInterval." + error;
        }
        if (message.PropValue != null && message.hasOwnProperty("PropValue"))
            if (!$util.isInteger(message.PropValue))
                return "PropValue: integer expected";
        if (message.GrowupMode != null && message.hasOwnProperty("GrowupMode"))
            if (!$util.isInteger(message.GrowupMode))
                return "GrowupMode: integer expected";
        if (message.Upgrade != null && message.hasOwnProperty("Upgrade")) {
            if (!Array.isArray(message.Upgrade))
                return "Upgrade: array expected";
            for (var i = 0; i < message.Upgrade.length; ++i) {
                var error = $excelRoot.DTPropGrowupStep.verify(message.Upgrade[i]);
                if (error)
                    return "Upgrade." + error;
            }
        }
        if (message.RangeRatio != null && message.hasOwnProperty("RangeRatio")) {
            if (!Array.isArray(message.RangeRatio))
                return "RangeRatio: array expected";
            for (var i = 0; i < message.RangeRatio.length; ++i)
                if (!$util.isInteger(message.RangeRatio[i]))
                    return "RangeRatio: integer[] expected";
        }
        return null;
    };
    PropValue.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.PropValue)
            return object;
        var message = new $excelRoot.PropValue();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.DisplayAss != null)
            message.DisplayAss = String(object.DisplayAss);
        if (object.PropName != null)
            message.PropName = String(object.PropName);
        if (object.RandomInterval != null) {
            if (typeof object.RandomInterval !== "object")
                throw TypeError(".PropValue.RandomInterval: object expected");
            message.RandomInterval = $excelRoot.DTRandomInterval.fromObject(object.RandomInterval);
        }
        if (object.PropValue != null)
            message.PropValue = object.PropValue | 0;
        if (object.GrowupMode != null)
            message.GrowupMode = object.GrowupMode | 0;
        if (object.Upgrade) {
            if (!Array.isArray(object.Upgrade))
                throw TypeError(".PropValue.Upgrade: array expected");
            message.Upgrade = [];
            for (var i = 0; i < object.Upgrade.length; ++i) {
                if (typeof object.Upgrade[i] !== "object")
                    throw TypeError(".PropValue.Upgrade: object expected");
                message.Upgrade[i] = $excelRoot.DTPropGrowupStep.fromObject(object.Upgrade[i]);
            }
        }
        if (object.RangeRatio) {
            if (!Array.isArray(object.RangeRatio))
                throw TypeError(".PropValue.RangeRatio: array expected");
            message.RangeRatio = [];
            for (var i = 0; i < object.RangeRatio.length; ++i)
                message.RangeRatio[i] = object.RangeRatio[i] | 0;
        }
        return message;
    };
    PropValue.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.Upgrade = [];
            object.RangeRatio = [];
        }
        if (options.defaults) {
            object.id = 0;
            object.DisplayAss = "";
            object.PropName = "";
            object.RandomInterval = null;
            object.PropValue = 0;
            object.GrowupMode = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.DisplayAss != null && message.hasOwnProperty("DisplayAss"))
            object.DisplayAss = message.DisplayAss;
        if (message.PropName != null && message.hasOwnProperty("PropName"))
            object.PropName = message.PropName;
        if (message.RandomInterval != null && message.hasOwnProperty("RandomInterval"))
            object.RandomInterval = $excelRoot.DTRandomInterval.toObject(message.RandomInterval, options);
        if (message.PropValue != null && message.hasOwnProperty("PropValue"))
            object.PropValue = message.PropValue;
        if (message.GrowupMode != null && message.hasOwnProperty("GrowupMode"))
            object.GrowupMode = message.GrowupMode;
        if (message.Upgrade && message.Upgrade.length) {
            object.Upgrade = [];
            for (var j = 0; j < message.Upgrade.length; ++j)
                object.Upgrade[j] = $excelRoot.DTPropGrowupStep.toObject(message.Upgrade[j], options);
        }
        if (message.RangeRatio && message.RangeRatio.length) {
            object.RangeRatio = [];
            for (var j = 0; j < message.RangeRatio.length; ++j)
                object.RangeRatio[j] = message.RangeRatio[j];
        }
        return object;
    };
    PropValue.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return PropValue;
})();
$excelRoot.PvpMap = (function() {
    function PvpMap(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    PvpMap.prototype.id = 0;
    PvpMap.prototype.chapter = 0;
    PvpMap.prototype.mapID = 0;
    PvpMap.create = function create(properties) {
        return new PvpMap(properties);
    };
    PvpMap.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.chapter != null && message.hasOwnProperty("chapter"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.chapter);
        if (message.mapID != null && message.hasOwnProperty("mapID"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.mapID);
        return writer;
    };
    PvpMap.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    PvpMap.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.PvpMap();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.chapter = reader.int32();
                break;
            case 3:
                message.mapID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    PvpMap.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    PvpMap.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.chapter != null && message.hasOwnProperty("chapter"))
            if (!$util.isInteger(message.chapter))
                return "chapter: integer expected";
        if (message.mapID != null && message.hasOwnProperty("mapID"))
            if (!$util.isInteger(message.mapID))
                return "mapID: integer expected";
        return null;
    };
    PvpMap.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.PvpMap)
            return object;
        var message = new $excelRoot.PvpMap();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.chapter != null)
            message.chapter = object.chapter | 0;
        if (object.mapID != null)
            message.mapID = object.mapID | 0;
        return message;
    };
    PvpMap.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.chapter = 0;
            object.mapID = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.chapter != null && message.hasOwnProperty("chapter"))
            object.chapter = message.chapter;
        if (message.mapID != null && message.hasOwnProperty("mapID"))
            object.mapID = message.mapID;
        return object;
    };
    PvpMap.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return PvpMap;
})();
$excelRoot.Quest = (function() {
    function Quest(properties) {
        this.prepose = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Quest.prototype.id = 0;
    Quest.prototype.zhCnName = "";
    Quest.prototype.zhCn_Des = "";
    Quest.prototype.type = 0;
    Quest.prototype.target = 0;
    Quest.prototype.value = 0;
    Quest.prototype.count = 0;
    Quest.prototype.menuId = 0;
    Quest.prototype.tabId = 0;
    Quest.prototype.level = 0;
    Quest.prototype.prepose = $util.emptyArray;
    Quest.prototype.unlock = 0;
    Quest.prototype.rewardId = 0;
    Quest.prototype.active = 0;
    Quest.create = function create(properties) {
        return new Quest(properties);
    };
    Quest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.zhCnName);
        if (message.zhCn_Des != null && message.hasOwnProperty("zhCn_Des"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.zhCn_Des);
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
        if (message.target != null && message.hasOwnProperty("target"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.target);
        if (message.value != null && message.hasOwnProperty("value"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.value);
        if (message.count != null && message.hasOwnProperty("count"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.count);
        if (message.menuId != null && message.hasOwnProperty("menuId"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.menuId);
        if (message.tabId != null && message.hasOwnProperty("tabId"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.tabId);
        if (message.level != null && message.hasOwnProperty("level"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.level);
        if (message.prepose != null && message.prepose.length) {
            writer.uint32(/* id 11, wireType 2 =*/90).fork();
            for (var i = 0; i < message.prepose.length; ++i)
                writer.int32(message.prepose[i]);
            writer.ldelim();
        }
        if (message.unlock != null && message.hasOwnProperty("unlock"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.unlock);
        if (message.rewardId != null && message.hasOwnProperty("rewardId"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.rewardId);
        if (message.active != null && message.hasOwnProperty("active"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.active);
        return writer;
    };
    Quest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Quest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Quest();
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
                message.zhCn_Des = reader.string();
                break;
            case 4:
                message.type = reader.int32();
                break;
            case 5:
                message.target = reader.int32();
                break;
            case 6:
                message.value = reader.int32();
                break;
            case 7:
                message.count = reader.int32();
                break;
            case 8:
                message.menuId = reader.int32();
                break;
            case 9:
                message.tabId = reader.int32();
                break;
            case 10:
                message.level = reader.int32();
                break;
            case 11:
                if (!(message.prepose && message.prepose.length))
                    message.prepose = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.prepose.push(reader.int32());
                } else
                    message.prepose.push(reader.int32());
                break;
            case 12:
                message.unlock = reader.int32();
                break;
            case 13:
                message.rewardId = reader.int32();
                break;
            case 14:
                message.active = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Quest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Quest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.zhCn_Des != null && message.hasOwnProperty("zhCn_Des"))
            if (!$util.isString(message.zhCn_Des))
                return "zhCn_Des: string expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.target != null && message.hasOwnProperty("target"))
            if (!$util.isInteger(message.target))
                return "target: integer expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        if (message.count != null && message.hasOwnProperty("count"))
            if (!$util.isInteger(message.count))
                return "count: integer expected";
        if (message.menuId != null && message.hasOwnProperty("menuId"))
            if (!$util.isInteger(message.menuId))
                return "menuId: integer expected";
        if (message.tabId != null && message.hasOwnProperty("tabId"))
            if (!$util.isInteger(message.tabId))
                return "tabId: integer expected";
        if (message.level != null && message.hasOwnProperty("level"))
            if (!$util.isInteger(message.level))
                return "level: integer expected";
        if (message.prepose != null && message.hasOwnProperty("prepose")) {
            if (!Array.isArray(message.prepose))
                return "prepose: array expected";
            for (var i = 0; i < message.prepose.length; ++i)
                if (!$util.isInteger(message.prepose[i]))
                    return "prepose: integer[] expected";
        }
        if (message.unlock != null && message.hasOwnProperty("unlock"))
            if (!$util.isInteger(message.unlock))
                return "unlock: integer expected";
        if (message.rewardId != null && message.hasOwnProperty("rewardId"))
            if (!$util.isInteger(message.rewardId))
                return "rewardId: integer expected";
        if (message.active != null && message.hasOwnProperty("active"))
            if (!$util.isInteger(message.active))
                return "active: integer expected";
        return null;
    };
    Quest.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Quest)
            return object;
        var message = new $excelRoot.Quest();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.zhCn_Des != null)
            message.zhCn_Des = String(object.zhCn_Des);
        if (object.type != null)
            message.type = object.type | 0;
        if (object.target != null)
            message.target = object.target | 0;
        if (object.value != null)
            message.value = object.value | 0;
        if (object.count != null)
            message.count = object.count | 0;
        if (object.menuId != null)
            message.menuId = object.menuId | 0;
        if (object.tabId != null)
            message.tabId = object.tabId | 0;
        if (object.level != null)
            message.level = object.level | 0;
        if (object.prepose) {
            if (!Array.isArray(object.prepose))
                throw TypeError(".Quest.prepose: array expected");
            message.prepose = [];
            for (var i = 0; i < object.prepose.length; ++i)
                message.prepose[i] = object.prepose[i] | 0;
        }
        if (object.unlock != null)
            message.unlock = object.unlock | 0;
        if (object.rewardId != null)
            message.rewardId = object.rewardId | 0;
        if (object.active != null)
            message.active = object.active | 0;
        return message;
    };
    Quest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.prepose = [];
        if (options.defaults) {
            object.id = 0;
            object.zhCnName = "";
            object.zhCn_Des = "";
            object.type = 0;
            object.target = 0;
            object.value = 0;
            object.count = 0;
            object.menuId = 0;
            object.tabId = 0;
            object.level = 0;
            object.unlock = 0;
            object.rewardId = 0;
            object.active = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.zhCn_Des != null && message.hasOwnProperty("zhCn_Des"))
            object.zhCn_Des = message.zhCn_Des;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = message.target;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        if (message.count != null && message.hasOwnProperty("count"))
            object.count = message.count;
        if (message.menuId != null && message.hasOwnProperty("menuId"))
            object.menuId = message.menuId;
        if (message.tabId != null && message.hasOwnProperty("tabId"))
            object.tabId = message.tabId;
        if (message.level != null && message.hasOwnProperty("level"))
            object.level = message.level;
        if (message.prepose && message.prepose.length) {
            object.prepose = [];
            for (var j = 0; j < message.prepose.length; ++j)
                object.prepose[j] = message.prepose[j];
        }
        if (message.unlock != null && message.hasOwnProperty("unlock"))
            object.unlock = message.unlock;
        if (message.rewardId != null && message.hasOwnProperty("rewardId"))
            object.rewardId = message.rewardId;
        if (message.active != null && message.hasOwnProperty("active"))
            object.active = message.active;
        return object;
    };
    Quest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Quest;
})();
$excelRoot.Reward = (function() {
    function Reward(properties) {
        this.fixedItems = [];
        this.randomItems = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Reward.prototype.id = 0;
    Reward.prototype.fixedItems = $util.emptyArray;
    Reward.prototype.multipleReward = 0;
    Reward.prototype.noreward = 0;
    Reward.prototype.randomItems = $util.emptyArray;
    Reward.prototype.randomCount = 0;
    Reward.create = function create(properties) {
        return new Reward(properties);
    };
    Reward.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.fixedItems != null && message.fixedItems.length)
            for (var i = 0; i < message.fixedItems.length; ++i)
                $excelRoot.DTFixItemNum.encode(message.fixedItems[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.multipleReward != null && message.hasOwnProperty("multipleReward"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.multipleReward);
        if (message.noreward != null && message.hasOwnProperty("noreward"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.noreward);
        if (message.randomItems != null && message.randomItems.length)
            for (var i = 0; i < message.randomItems.length; ++i)
                $excelRoot.DTRewardRandom.encode(message.randomItems[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.randomCount != null && message.hasOwnProperty("randomCount"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.randomCount);
        return writer;
    };
    Reward.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Reward.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Reward();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 3:
                if (!(message.fixedItems && message.fixedItems.length))
                    message.fixedItems = [];
                message.fixedItems.push($excelRoot.DTFixItemNum.decode(reader, reader.uint32()));
                break;
            case 4:
                message.multipleReward = reader.int32();
                break;
            case 5:
                message.noreward = reader.int32();
                break;
            case 6:
                if (!(message.randomItems && message.randomItems.length))
                    message.randomItems = [];
                message.randomItems.push($excelRoot.DTRewardRandom.decode(reader, reader.uint32()));
                break;
            case 7:
                message.randomCount = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Reward.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Reward.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.fixedItems != null && message.hasOwnProperty("fixedItems")) {
            if (!Array.isArray(message.fixedItems))
                return "fixedItems: array expected";
            for (var i = 0; i < message.fixedItems.length; ++i) {
                var error = $excelRoot.DTFixItemNum.verify(message.fixedItems[i]);
                if (error)
                    return "fixedItems." + error;
            }
        }
        if (message.multipleReward != null && message.hasOwnProperty("multipleReward"))
            if (!$util.isInteger(message.multipleReward))
                return "multipleReward: integer expected";
        if (message.noreward != null && message.hasOwnProperty("noreward"))
            if (!$util.isInteger(message.noreward))
                return "noreward: integer expected";
        if (message.randomItems != null && message.hasOwnProperty("randomItems")) {
            if (!Array.isArray(message.randomItems))
                return "randomItems: array expected";
            for (var i = 0; i < message.randomItems.length; ++i) {
                var error = $excelRoot.DTRewardRandom.verify(message.randomItems[i]);
                if (error)
                    return "randomItems." + error;
            }
        }
        if (message.randomCount != null && message.hasOwnProperty("randomCount"))
            if (!$util.isInteger(message.randomCount))
                return "randomCount: integer expected";
        return null;
    };
    Reward.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Reward)
            return object;
        var message = new $excelRoot.Reward();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.fixedItems) {
            if (!Array.isArray(object.fixedItems))
                throw TypeError(".Reward.fixedItems: array expected");
            message.fixedItems = [];
            for (var i = 0; i < object.fixedItems.length; ++i) {
                if (typeof object.fixedItems[i] !== "object")
                    throw TypeError(".Reward.fixedItems: object expected");
                message.fixedItems[i] = $excelRoot.DTFixItemNum.fromObject(object.fixedItems[i]);
            }
        }
        if (object.multipleReward != null)
            message.multipleReward = object.multipleReward | 0;
        if (object.noreward != null)
            message.noreward = object.noreward | 0;
        if (object.randomItems) {
            if (!Array.isArray(object.randomItems))
                throw TypeError(".Reward.randomItems: array expected");
            message.randomItems = [];
            for (var i = 0; i < object.randomItems.length; ++i) {
                if (typeof object.randomItems[i] !== "object")
                    throw TypeError(".Reward.randomItems: object expected");
                message.randomItems[i] = $excelRoot.DTRewardRandom.fromObject(object.randomItems[i]);
            }
        }
        if (object.randomCount != null)
            message.randomCount = object.randomCount | 0;
        return message;
    };
    Reward.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.fixedItems = [];
            object.randomItems = [];
        }
        if (options.defaults) {
            object.id = 0;
            object.multipleReward = 0;
            object.noreward = 0;
            object.randomCount = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.fixedItems && message.fixedItems.length) {
            object.fixedItems = [];
            for (var j = 0; j < message.fixedItems.length; ++j)
                object.fixedItems[j] = $excelRoot.DTFixItemNum.toObject(message.fixedItems[j], options);
        }
        if (message.multipleReward != null && message.hasOwnProperty("multipleReward"))
            object.multipleReward = message.multipleReward;
        if (message.noreward != null && message.hasOwnProperty("noreward"))
            object.noreward = message.noreward;
        if (message.randomItems && message.randomItems.length) {
            object.randomItems = [];
            for (var j = 0; j < message.randomItems.length; ++j)
                object.randomItems[j] = $excelRoot.DTRewardRandom.toObject(message.randomItems[j], options);
        }
        if (message.randomCount != null && message.hasOwnProperty("randomCount"))
            object.randomCount = message.randomCount;
        return object;
    };
    Reward.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Reward;
})();
$excelRoot.Shop = (function() {
    function Shop(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Shop.prototype.id = 0;
    Shop.prototype.space = 0;
    Shop.prototype.count = 0;
    Shop.prototype.oldPrice = 0;
    Shop.prototype.nowPrice = 0;
    Shop.prototype.currency = 0;
    Shop.create = function create(properties) {
        return new Shop(properties);
    };
    Shop.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.space != null && message.hasOwnProperty("space"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.space);
        if (message.count != null && message.hasOwnProperty("count"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.count);
        if (message.oldPrice != null && message.hasOwnProperty("oldPrice"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.oldPrice);
        if (message.nowPrice != null && message.hasOwnProperty("nowPrice"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nowPrice);
        if (message.currency != null && message.hasOwnProperty("currency"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.currency);
        return writer;
    };
    Shop.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Shop.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Shop();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.space = reader.int32();
                break;
            case 3:
                message.count = reader.int32();
                break;
            case 4:
                message.oldPrice = reader.int32();
                break;
            case 5:
                message.nowPrice = reader.int32();
                break;
            case 6:
                message.currency = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Shop.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Shop.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.space != null && message.hasOwnProperty("space"))
            if (!$util.isInteger(message.space))
                return "space: integer expected";
        if (message.count != null && message.hasOwnProperty("count"))
            if (!$util.isInteger(message.count))
                return "count: integer expected";
        if (message.oldPrice != null && message.hasOwnProperty("oldPrice"))
            if (!$util.isInteger(message.oldPrice))
                return "oldPrice: integer expected";
        if (message.nowPrice != null && message.hasOwnProperty("nowPrice"))
            if (!$util.isInteger(message.nowPrice))
                return "nowPrice: integer expected";
        if (message.currency != null && message.hasOwnProperty("currency"))
            if (!$util.isInteger(message.currency))
                return "currency: integer expected";
        return null;
    };
    Shop.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Shop)
            return object;
        var message = new $excelRoot.Shop();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.space != null)
            message.space = object.space | 0;
        if (object.count != null)
            message.count = object.count | 0;
        if (object.oldPrice != null)
            message.oldPrice = object.oldPrice | 0;
        if (object.nowPrice != null)
            message.nowPrice = object.nowPrice | 0;
        if (object.currency != null)
            message.currency = object.currency | 0;
        return message;
    };
    Shop.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.space = 0;
            object.count = 0;
            object.oldPrice = 0;
            object.nowPrice = 0;
            object.currency = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.space != null && message.hasOwnProperty("space"))
            object.space = message.space;
        if (message.count != null && message.hasOwnProperty("count"))
            object.count = message.count;
        if (message.oldPrice != null && message.hasOwnProperty("oldPrice"))
            object.oldPrice = message.oldPrice;
        if (message.nowPrice != null && message.hasOwnProperty("nowPrice"))
            object.nowPrice = message.nowPrice;
        if (message.currency != null && message.hasOwnProperty("currency"))
            object.currency = message.currency;
        return object;
    };
    Shop.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Shop;
})();
$excelRoot.Skill = (function() {
    function Skill(properties) {
        this.upSkillLv = [];
        this.cost = [];
        this.fixedDamage = [];
        this.coefficientDamage = [];
        this.damageDistribution = [];
        this.projectFactors = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Skill.prototype.id = 0;
    Skill.prototype.heroId = 0;
    Skill.prototype.icon = 0;
    Skill.prototype.skillType = 0;
    Skill.prototype.zhCn_Name = "";
    Skill.prototype.zhCn_Desc = "";
    Skill.prototype.zhCn_UpDesc = "";
    Skill.prototype.zhCnTips = "";
    Skill.prototype.openSkillLv = 0;
    Skill.prototype.upSkillLv = $util.emptyArray;
    Skill.prototype.cost = $util.emptyArray;
    Skill.prototype.costMana = 0;
    Skill.prototype.costRage = 0;
    Skill.prototype.costChargePoint = 0;
    Skill.prototype.baseChargePoint = 0;
    Skill.prototype.maxChargePoint = 0;
    Skill.prototype.recoverChargePoint = 0;
    Skill.prototype.cooldown = 0;
    Skill.prototype.manaHitRecovery = 0;
    Skill.prototype.MPMostTimesPerHit = 0;
    Skill.prototype.rageHitRecovery = 0;
    Skill.prototype.FPMostTimesPerHit = 0;
    Skill.prototype.fixedDamage = $util.emptyArray;
    Skill.prototype.coefficientDamage = $util.emptyArray;
    Skill.prototype.damageDistribution = $util.emptyArray;
    Skill.prototype.projectFactors = $util.emptyArray;
    Skill.prototype.hitnums = 0;
    Skill.prototype.casttime = 0;
    Skill.create = function create(properties) {
        return new Skill(properties);
    };
    Skill.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.heroId != null && message.hasOwnProperty("heroId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.heroId);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.icon);
        if (message.skillType != null && message.hasOwnProperty("skillType"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.skillType);
        if (message.zhCn_Name != null && message.hasOwnProperty("zhCn_Name"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.zhCn_Name);
        if (message.zhCn_Desc != null && message.hasOwnProperty("zhCn_Desc"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.zhCn_Desc);
        if (message.zhCn_UpDesc != null && message.hasOwnProperty("zhCn_UpDesc"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.zhCn_UpDesc);
        if (message.zhCnTips != null && message.hasOwnProperty("zhCnTips"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.zhCnTips);
        if (message.openSkillLv != null && message.hasOwnProperty("openSkillLv"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.openSkillLv);
        if (message.upSkillLv != null && message.upSkillLv.length) {
            writer.uint32(/* id 10, wireType 2 =*/82).fork();
            for (var i = 0; i < message.upSkillLv.length; ++i)
                writer.int32(message.upSkillLv[i]);
            writer.ldelim();
        }
        if (message.cost != null && message.cost.length) {
            writer.uint32(/* id 11, wireType 2 =*/90).fork();
            for (var i = 0; i < message.cost.length; ++i)
                writer.int32(message.cost[i]);
            writer.ldelim();
        }
        if (message.costMana != null && message.hasOwnProperty("costMana"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.costMana);
        if (message.costRage != null && message.hasOwnProperty("costRage"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.costRage);
        if (message.costChargePoint != null && message.hasOwnProperty("costChargePoint"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.costChargePoint);
        if (message.baseChargePoint != null && message.hasOwnProperty("baseChargePoint"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.baseChargePoint);
        if (message.maxChargePoint != null && message.hasOwnProperty("maxChargePoint"))
            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.maxChargePoint);
        if (message.recoverChargePoint != null && message.hasOwnProperty("recoverChargePoint"))
            writer.uint32(/* id 17, wireType 0 =*/136).int32(message.recoverChargePoint);
        if (message.cooldown != null && message.hasOwnProperty("cooldown"))
            writer.uint32(/* id 18, wireType 0 =*/144).int32(message.cooldown);
        if (message.manaHitRecovery != null && message.hasOwnProperty("manaHitRecovery"))
            writer.uint32(/* id 19, wireType 0 =*/152).int32(message.manaHitRecovery);
        if (message.MPMostTimesPerHit != null && message.hasOwnProperty("MPMostTimesPerHit"))
            writer.uint32(/* id 20, wireType 0 =*/160).int32(message.MPMostTimesPerHit);
        if (message.rageHitRecovery != null && message.hasOwnProperty("rageHitRecovery"))
            writer.uint32(/* id 21, wireType 0 =*/168).int32(message.rageHitRecovery);
        if (message.FPMostTimesPerHit != null && message.hasOwnProperty("FPMostTimesPerHit"))
            writer.uint32(/* id 22, wireType 0 =*/176).int32(message.FPMostTimesPerHit);
        if (message.fixedDamage != null && message.fixedDamage.length) {
            writer.uint32(/* id 23, wireType 2 =*/186).fork();
            for (var i = 0; i < message.fixedDamage.length; ++i)
                writer.int32(message.fixedDamage[i]);
            writer.ldelim();
        }
        if (message.coefficientDamage != null && message.coefficientDamage.length) {
            writer.uint32(/* id 24, wireType 2 =*/194).fork();
            for (var i = 0; i < message.coefficientDamage.length; ++i)
                writer.int32(message.coefficientDamage[i]);
            writer.ldelim();
        }
        if (message.damageDistribution != null && message.damageDistribution.length) {
            writer.uint32(/* id 25, wireType 2 =*/202).fork();
            for (var i = 0; i < message.damageDistribution.length; ++i)
                writer.int32(message.damageDistribution[i]);
            writer.ldelim();
        }
        if (message.projectFactors != null && message.projectFactors.length) {
            writer.uint32(/* id 26, wireType 2 =*/210).fork();
            for (var i = 0; i < message.projectFactors.length; ++i)
                writer.int32(message.projectFactors[i]);
            writer.ldelim();
        }
        if (message.hitnums != null && message.hasOwnProperty("hitnums"))
            writer.uint32(/* id 27, wireType 0 =*/216).int32(message.hitnums);
        if (message.casttime != null && message.hasOwnProperty("casttime"))
            writer.uint32(/* id 28, wireType 0 =*/224).int32(message.casttime);
        return writer;
    };
    Skill.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Skill.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Skill();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.heroId = reader.int32();
                break;
            case 3:
                message.icon = reader.int32();
                break;
            case 4:
                message.skillType = reader.int32();
                break;
            case 5:
                message.zhCn_Name = reader.string();
                break;
            case 6:
                message.zhCn_Desc = reader.string();
                break;
            case 7:
                message.zhCn_UpDesc = reader.string();
                break;
            case 8:
                message.zhCnTips = reader.string();
                break;
            case 9:
                message.openSkillLv = reader.int32();
                break;
            case 10:
                if (!(message.upSkillLv && message.upSkillLv.length))
                    message.upSkillLv = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.upSkillLv.push(reader.int32());
                } else
                    message.upSkillLv.push(reader.int32());
                break;
            case 11:
                if (!(message.cost && message.cost.length))
                    message.cost = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.cost.push(reader.int32());
                } else
                    message.cost.push(reader.int32());
                break;
            case 12:
                message.costMana = reader.int32();
                break;
            case 13:
                message.costRage = reader.int32();
                break;
            case 14:
                message.costChargePoint = reader.int32();
                break;
            case 15:
                message.baseChargePoint = reader.int32();
                break;
            case 16:
                message.maxChargePoint = reader.int32();
                break;
            case 17:
                message.recoverChargePoint = reader.int32();
                break;
            case 18:
                message.cooldown = reader.int32();
                break;
            case 19:
                message.manaHitRecovery = reader.int32();
                break;
            case 20:
                message.MPMostTimesPerHit = reader.int32();
                break;
            case 21:
                message.rageHitRecovery = reader.int32();
                break;
            case 22:
                message.FPMostTimesPerHit = reader.int32();
                break;
            case 23:
                if (!(message.fixedDamage && message.fixedDamage.length))
                    message.fixedDamage = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.fixedDamage.push(reader.int32());
                } else
                    message.fixedDamage.push(reader.int32());
                break;
            case 24:
                if (!(message.coefficientDamage && message.coefficientDamage.length))
                    message.coefficientDamage = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.coefficientDamage.push(reader.int32());
                } else
                    message.coefficientDamage.push(reader.int32());
                break;
            case 25:
                if (!(message.damageDistribution && message.damageDistribution.length))
                    message.damageDistribution = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.damageDistribution.push(reader.int32());
                } else
                    message.damageDistribution.push(reader.int32());
                break;
            case 26:
                if (!(message.projectFactors && message.projectFactors.length))
                    message.projectFactors = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.projectFactors.push(reader.int32());
                } else
                    message.projectFactors.push(reader.int32());
                break;
            case 27:
                message.hitnums = reader.int32();
                break;
            case 28:
                message.casttime = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Skill.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Skill.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.heroId != null && message.hasOwnProperty("heroId"))
            if (!$util.isInteger(message.heroId))
                return "heroId: integer expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isInteger(message.icon))
                return "icon: integer expected";
        if (message.skillType != null && message.hasOwnProperty("skillType"))
            if (!$util.isInteger(message.skillType))
                return "skillType: integer expected";
        if (message.zhCn_Name != null && message.hasOwnProperty("zhCn_Name"))
            if (!$util.isString(message.zhCn_Name))
                return "zhCn_Name: string expected";
        if (message.zhCn_Desc != null && message.hasOwnProperty("zhCn_Desc"))
            if (!$util.isString(message.zhCn_Desc))
                return "zhCn_Desc: string expected";
        if (message.zhCn_UpDesc != null && message.hasOwnProperty("zhCn_UpDesc"))
            if (!$util.isString(message.zhCn_UpDesc))
                return "zhCn_UpDesc: string expected";
        if (message.zhCnTips != null && message.hasOwnProperty("zhCnTips"))
            if (!$util.isString(message.zhCnTips))
                return "zhCnTips: string expected";
        if (message.openSkillLv != null && message.hasOwnProperty("openSkillLv"))
            if (!$util.isInteger(message.openSkillLv))
                return "openSkillLv: integer expected";
        if (message.upSkillLv != null && message.hasOwnProperty("upSkillLv")) {
            if (!Array.isArray(message.upSkillLv))
                return "upSkillLv: array expected";
            for (var i = 0; i < message.upSkillLv.length; ++i)
                if (!$util.isInteger(message.upSkillLv[i]))
                    return "upSkillLv: integer[] expected";
        }
        if (message.cost != null && message.hasOwnProperty("cost")) {
            if (!Array.isArray(message.cost))
                return "cost: array expected";
            for (var i = 0; i < message.cost.length; ++i)
                if (!$util.isInteger(message.cost[i]))
                    return "cost: integer[] expected";
        }
        if (message.costMana != null && message.hasOwnProperty("costMana"))
            if (!$util.isInteger(message.costMana))
                return "costMana: integer expected";
        if (message.costRage != null && message.hasOwnProperty("costRage"))
            if (!$util.isInteger(message.costRage))
                return "costRage: integer expected";
        if (message.costChargePoint != null && message.hasOwnProperty("costChargePoint"))
            if (!$util.isInteger(message.costChargePoint))
                return "costChargePoint: integer expected";
        if (message.baseChargePoint != null && message.hasOwnProperty("baseChargePoint"))
            if (!$util.isInteger(message.baseChargePoint))
                return "baseChargePoint: integer expected";
        if (message.maxChargePoint != null && message.hasOwnProperty("maxChargePoint"))
            if (!$util.isInteger(message.maxChargePoint))
                return "maxChargePoint: integer expected";
        if (message.recoverChargePoint != null && message.hasOwnProperty("recoverChargePoint"))
            if (!$util.isInteger(message.recoverChargePoint))
                return "recoverChargePoint: integer expected";
        if (message.cooldown != null && message.hasOwnProperty("cooldown"))
            if (!$util.isInteger(message.cooldown))
                return "cooldown: integer expected";
        if (message.manaHitRecovery != null && message.hasOwnProperty("manaHitRecovery"))
            if (!$util.isInteger(message.manaHitRecovery))
                return "manaHitRecovery: integer expected";
        if (message.MPMostTimesPerHit != null && message.hasOwnProperty("MPMostTimesPerHit"))
            if (!$util.isInteger(message.MPMostTimesPerHit))
                return "MPMostTimesPerHit: integer expected";
        if (message.rageHitRecovery != null && message.hasOwnProperty("rageHitRecovery"))
            if (!$util.isInteger(message.rageHitRecovery))
                return "rageHitRecovery: integer expected";
        if (message.FPMostTimesPerHit != null && message.hasOwnProperty("FPMostTimesPerHit"))
            if (!$util.isInteger(message.FPMostTimesPerHit))
                return "FPMostTimesPerHit: integer expected";
        if (message.fixedDamage != null && message.hasOwnProperty("fixedDamage")) {
            if (!Array.isArray(message.fixedDamage))
                return "fixedDamage: array expected";
            for (var i = 0; i < message.fixedDamage.length; ++i)
                if (!$util.isInteger(message.fixedDamage[i]))
                    return "fixedDamage: integer[] expected";
        }
        if (message.coefficientDamage != null && message.hasOwnProperty("coefficientDamage")) {
            if (!Array.isArray(message.coefficientDamage))
                return "coefficientDamage: array expected";
            for (var i = 0; i < message.coefficientDamage.length; ++i)
                if (!$util.isInteger(message.coefficientDamage[i]))
                    return "coefficientDamage: integer[] expected";
        }
        if (message.damageDistribution != null && message.hasOwnProperty("damageDistribution")) {
            if (!Array.isArray(message.damageDistribution))
                return "damageDistribution: array expected";
            for (var i = 0; i < message.damageDistribution.length; ++i)
                if (!$util.isInteger(message.damageDistribution[i]))
                    return "damageDistribution: integer[] expected";
        }
        if (message.projectFactors != null && message.hasOwnProperty("projectFactors")) {
            if (!Array.isArray(message.projectFactors))
                return "projectFactors: array expected";
            for (var i = 0; i < message.projectFactors.length; ++i)
                if (!$util.isInteger(message.projectFactors[i]))
                    return "projectFactors: integer[] expected";
        }
        if (message.hitnums != null && message.hasOwnProperty("hitnums"))
            if (!$util.isInteger(message.hitnums))
                return "hitnums: integer expected";
        if (message.casttime != null && message.hasOwnProperty("casttime"))
            if (!$util.isInteger(message.casttime))
                return "casttime: integer expected";
        return null;
    };
    Skill.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Skill)
            return object;
        var message = new $excelRoot.Skill();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.heroId != null)
            message.heroId = object.heroId | 0;
        if (object.icon != null)
            message.icon = object.icon | 0;
        if (object.skillType != null)
            message.skillType = object.skillType | 0;
        if (object.zhCn_Name != null)
            message.zhCn_Name = String(object.zhCn_Name);
        if (object.zhCn_Desc != null)
            message.zhCn_Desc = String(object.zhCn_Desc);
        if (object.zhCn_UpDesc != null)
            message.zhCn_UpDesc = String(object.zhCn_UpDesc);
        if (object.zhCnTips != null)
            message.zhCnTips = String(object.zhCnTips);
        if (object.openSkillLv != null)
            message.openSkillLv = object.openSkillLv | 0;
        if (object.upSkillLv) {
            if (!Array.isArray(object.upSkillLv))
                throw TypeError(".Skill.upSkillLv: array expected");
            message.upSkillLv = [];
            for (var i = 0; i < object.upSkillLv.length; ++i)
                message.upSkillLv[i] = object.upSkillLv[i] | 0;
        }
        if (object.cost) {
            if (!Array.isArray(object.cost))
                throw TypeError(".Skill.cost: array expected");
            message.cost = [];
            for (var i = 0; i < object.cost.length; ++i)
                message.cost[i] = object.cost[i] | 0;
        }
        if (object.costMana != null)
            message.costMana = object.costMana | 0;
        if (object.costRage != null)
            message.costRage = object.costRage | 0;
        if (object.costChargePoint != null)
            message.costChargePoint = object.costChargePoint | 0;
        if (object.baseChargePoint != null)
            message.baseChargePoint = object.baseChargePoint | 0;
        if (object.maxChargePoint != null)
            message.maxChargePoint = object.maxChargePoint | 0;
        if (object.recoverChargePoint != null)
            message.recoverChargePoint = object.recoverChargePoint | 0;
        if (object.cooldown != null)
            message.cooldown = object.cooldown | 0;
        if (object.manaHitRecovery != null)
            message.manaHitRecovery = object.manaHitRecovery | 0;
        if (object.MPMostTimesPerHit != null)
            message.MPMostTimesPerHit = object.MPMostTimesPerHit | 0;
        if (object.rageHitRecovery != null)
            message.rageHitRecovery = object.rageHitRecovery | 0;
        if (object.FPMostTimesPerHit != null)
            message.FPMostTimesPerHit = object.FPMostTimesPerHit | 0;
        if (object.fixedDamage) {
            if (!Array.isArray(object.fixedDamage))
                throw TypeError(".Skill.fixedDamage: array expected");
            message.fixedDamage = [];
            for (var i = 0; i < object.fixedDamage.length; ++i)
                message.fixedDamage[i] = object.fixedDamage[i] | 0;
        }
        if (object.coefficientDamage) {
            if (!Array.isArray(object.coefficientDamage))
                throw TypeError(".Skill.coefficientDamage: array expected");
            message.coefficientDamage = [];
            for (var i = 0; i < object.coefficientDamage.length; ++i)
                message.coefficientDamage[i] = object.coefficientDamage[i] | 0;
        }
        if (object.damageDistribution) {
            if (!Array.isArray(object.damageDistribution))
                throw TypeError(".Skill.damageDistribution: array expected");
            message.damageDistribution = [];
            for (var i = 0; i < object.damageDistribution.length; ++i)
                message.damageDistribution[i] = object.damageDistribution[i] | 0;
        }
        if (object.projectFactors) {
            if (!Array.isArray(object.projectFactors))
                throw TypeError(".Skill.projectFactors: array expected");
            message.projectFactors = [];
            for (var i = 0; i < object.projectFactors.length; ++i)
                message.projectFactors[i] = object.projectFactors[i] | 0;
        }
        if (object.hitnums != null)
            message.hitnums = object.hitnums | 0;
        if (object.casttime != null)
            message.casttime = object.casttime | 0;
        return message;
    };
    Skill.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.upSkillLv = [];
            object.cost = [];
            object.fixedDamage = [];
            object.coefficientDamage = [];
            object.damageDistribution = [];
            object.projectFactors = [];
        }
        if (options.defaults) {
            object.id = 0;
            object.heroId = 0;
            object.icon = 0;
            object.skillType = 0;
            object.zhCn_Name = "";
            object.zhCn_Desc = "";
            object.zhCn_UpDesc = "";
            object.zhCnTips = "";
            object.openSkillLv = 0;
            object.costMana = 0;
            object.costRage = 0;
            object.costChargePoint = 0;
            object.baseChargePoint = 0;
            object.maxChargePoint = 0;
            object.recoverChargePoint = 0;
            object.cooldown = 0;
            object.manaHitRecovery = 0;
            object.MPMostTimesPerHit = 0;
            object.rageHitRecovery = 0;
            object.FPMostTimesPerHit = 0;
            object.hitnums = 0;
            object.casttime = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.heroId != null && message.hasOwnProperty("heroId"))
            object.heroId = message.heroId;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.skillType != null && message.hasOwnProperty("skillType"))
            object.skillType = message.skillType;
        if (message.zhCn_Name != null && message.hasOwnProperty("zhCn_Name"))
            object.zhCn_Name = message.zhCn_Name;
        if (message.zhCn_Desc != null && message.hasOwnProperty("zhCn_Desc"))
            object.zhCn_Desc = message.zhCn_Desc;
        if (message.zhCn_UpDesc != null && message.hasOwnProperty("zhCn_UpDesc"))
            object.zhCn_UpDesc = message.zhCn_UpDesc;
        if (message.zhCnTips != null && message.hasOwnProperty("zhCnTips"))
            object.zhCnTips = message.zhCnTips;
        if (message.openSkillLv != null && message.hasOwnProperty("openSkillLv"))
            object.openSkillLv = message.openSkillLv;
        if (message.upSkillLv && message.upSkillLv.length) {
            object.upSkillLv = [];
            for (var j = 0; j < message.upSkillLv.length; ++j)
                object.upSkillLv[j] = message.upSkillLv[j];
        }
        if (message.cost && message.cost.length) {
            object.cost = [];
            for (var j = 0; j < message.cost.length; ++j)
                object.cost[j] = message.cost[j];
        }
        if (message.costMana != null && message.hasOwnProperty("costMana"))
            object.costMana = message.costMana;
        if (message.costRage != null && message.hasOwnProperty("costRage"))
            object.costRage = message.costRage;
        if (message.costChargePoint != null && message.hasOwnProperty("costChargePoint"))
            object.costChargePoint = message.costChargePoint;
        if (message.baseChargePoint != null && message.hasOwnProperty("baseChargePoint"))
            object.baseChargePoint = message.baseChargePoint;
        if (message.maxChargePoint != null && message.hasOwnProperty("maxChargePoint"))
            object.maxChargePoint = message.maxChargePoint;
        if (message.recoverChargePoint != null && message.hasOwnProperty("recoverChargePoint"))
            object.recoverChargePoint = message.recoverChargePoint;
        if (message.cooldown != null && message.hasOwnProperty("cooldown"))
            object.cooldown = message.cooldown;
        if (message.manaHitRecovery != null && message.hasOwnProperty("manaHitRecovery"))
            object.manaHitRecovery = message.manaHitRecovery;
        if (message.MPMostTimesPerHit != null && message.hasOwnProperty("MPMostTimesPerHit"))
            object.MPMostTimesPerHit = message.MPMostTimesPerHit;
        if (message.rageHitRecovery != null && message.hasOwnProperty("rageHitRecovery"))
            object.rageHitRecovery = message.rageHitRecovery;
        if (message.FPMostTimesPerHit != null && message.hasOwnProperty("FPMostTimesPerHit"))
            object.FPMostTimesPerHit = message.FPMostTimesPerHit;
        if (message.fixedDamage && message.fixedDamage.length) {
            object.fixedDamage = [];
            for (var j = 0; j < message.fixedDamage.length; ++j)
                object.fixedDamage[j] = message.fixedDamage[j];
        }
        if (message.coefficientDamage && message.coefficientDamage.length) {
            object.coefficientDamage = [];
            for (var j = 0; j < message.coefficientDamage.length; ++j)
                object.coefficientDamage[j] = message.coefficientDamage[j];
        }
        if (message.damageDistribution && message.damageDistribution.length) {
            object.damageDistribution = [];
            for (var j = 0; j < message.damageDistribution.length; ++j)
                object.damageDistribution[j] = message.damageDistribution[j];
        }
        if (message.projectFactors && message.projectFactors.length) {
            object.projectFactors = [];
            for (var j = 0; j < message.projectFactors.length; ++j)
                object.projectFactors[j] = message.projectFactors[j];
        }
        if (message.hitnums != null && message.hasOwnProperty("hitnums"))
            object.hitnums = message.hitnums;
        if (message.casttime != null && message.hasOwnProperty("casttime"))
            object.casttime = message.casttime;
        return object;
    };
    Skill.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Skill;
})();
$excelRoot.Sound = (function() {
    function Sound(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Sound.prototype.id = 0;
    Sound.prototype.mergeFileName = "";
    Sound.prototype.soundName = "";
    Sound.prototype.time = 0;
    Sound.create = function create(properties) {
        return new Sound(properties);
    };
    Sound.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.mergeFileName != null && message.hasOwnProperty("mergeFileName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.mergeFileName);
        if (message.soundName != null && message.hasOwnProperty("soundName"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.soundName);
        if (message.time != null && message.hasOwnProperty("time"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.time);
        return writer;
    };
    Sound.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Sound.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Sound();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.mergeFileName = reader.string();
                break;
            case 3:
                message.soundName = reader.string();
                break;
            case 4:
                message.time = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Sound.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Sound.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.mergeFileName != null && message.hasOwnProperty("mergeFileName"))
            if (!$util.isString(message.mergeFileName))
                return "mergeFileName: string expected";
        if (message.soundName != null && message.hasOwnProperty("soundName"))
            if (!$util.isString(message.soundName))
                return "soundName: string expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time))
                return "time: integer expected";
        return null;
    };
    Sound.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Sound)
            return object;
        var message = new $excelRoot.Sound();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.mergeFileName != null)
            message.mergeFileName = String(object.mergeFileName);
        if (object.soundName != null)
            message.soundName = String(object.soundName);
        if (object.time != null)
            message.time = object.time | 0;
        return message;
    };
    Sound.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.mergeFileName = "";
            object.soundName = "";
            object.time = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.mergeFileName != null && message.hasOwnProperty("mergeFileName"))
            object.mergeFileName = message.mergeFileName;
        if (message.soundName != null && message.hasOwnProperty("soundName"))
            object.soundName = message.soundName;
        if (message.time != null && message.hasOwnProperty("time"))
            object.time = message.time;
        return object;
    };
    Sound.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Sound;
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
$excelRoot.Way = (function() {
    function Way(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Way.prototype.id = 0;
    Way.prototype.zhCnName = "";
    Way.prototype.menu = 0;
    Way.prototype.menuIndex = 0;
    Way.prototype.value = 0;
    Way.prototype.icon = 0;
    Way.create = function create(properties) {
        return new Way(properties);
    };
    Way.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.zhCnName);
        if (message.menu != null && message.hasOwnProperty("menu"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.menu);
        if (message.menuIndex != null && message.hasOwnProperty("menuIndex"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.menuIndex);
        if (message.value != null && message.hasOwnProperty("value"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.value);
        if (message.icon != null && message.hasOwnProperty("icon"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.icon);
        return writer;
    };
    Way.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Way.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.Way();
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
                message.menu = reader.int32();
                break;
            case 4:
                message.menuIndex = reader.int32();
                break;
            case 5:
                message.value = reader.int32();
                break;
            case 6:
                message.icon = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Way.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Way.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            if (!$util.isString(message.zhCnName))
                return "zhCnName: string expected";
        if (message.menu != null && message.hasOwnProperty("menu"))
            if (!$util.isInteger(message.menu))
                return "menu: integer expected";
        if (message.menuIndex != null && message.hasOwnProperty("menuIndex"))
            if (!$util.isInteger(message.menuIndex))
                return "menuIndex: integer expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isInteger(message.icon))
                return "icon: integer expected";
        return null;
    };
    Way.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.Way)
            return object;
        var message = new $excelRoot.Way();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.zhCnName != null)
            message.zhCnName = String(object.zhCnName);
        if (object.menu != null)
            message.menu = object.menu | 0;
        if (object.menuIndex != null)
            message.menuIndex = object.menuIndex | 0;
        if (object.value != null)
            message.value = object.value | 0;
        if (object.icon != null)
            message.icon = object.icon | 0;
        return message;
    };
    Way.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.zhCnName = "";
            object.menu = 0;
            object.menuIndex = 0;
            object.value = 0;
            object.icon = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.zhCnName != null && message.hasOwnProperty("zhCnName"))
            object.zhCnName = message.zhCnName;
        if (message.menu != null && message.hasOwnProperty("menu"))
            object.menu = message.menu;
        if (message.menuIndex != null && message.hasOwnProperty("menuIndex"))
            object.menuIndex = message.menuIndex;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        return object;
    };
    Way.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Way;
})();
$excelRoot.ConfigMng = (function() {
    function ConfigMng(properties) {
        this.Activities = {};
        this.Avatar = {};
        this.Bag = {};
        this.BattleFormula = {};
        this.Chapter = {};
        this.CheckPoint = {};
        this.Compound = {};
        this.CountActivities = {};
        this.Daily = {};
        this.Draug = {};
        this.DraugAwaken = {};
        this.DraugSuit = {};
        this.DuelDan = {};
        this.DuelPoint = {};
        this.DuelRanking = {};
        this.DuelSeason = {};
        this.EquipExp = {};
        this.Equipment = {};
        this.Gashapon = {};
        this.Guide = {};
        this.HeadPortrait = {};
        this.Hero = {};
        this.HeroExp = {};
        this.HeroStar = {};
        this.HeroTag = {};
        this.HeroTeam = {};
        this.HeroType = {};
        this.Item = {};
        this.Loader = {};
        this.Loading = {};
        this.Mail = {};
        this.Map = {};
        this.Menu = {};
        this.MenuIndex = {};
        this.MonsterProp = {};
        this.Msg = {};
        this.PlayerLevel = {};
        this.PlayerName = {};
        this.PlayList = {};
        this.Plot = {};
        this.Power = {};
        this.PowerGive = {};
        this.Property = {};
        this.PropValue = {};
        this.PvpMap = {};
        this.Quest = {};
        this.Reward = {};
        this.Shop = {};
        this.Skill = {};
        this.Sound = {};
        this.Unlock = {};
        this.Way = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    ConfigMng.prototype.Global = null;
    ConfigMng.prototype.Activities = $util.emptyObject;
    ConfigMng.prototype.Avatar = $util.emptyObject;
    ConfigMng.prototype.Bag = $util.emptyObject;
    ConfigMng.prototype.BattleFormula = $util.emptyObject;
    ConfigMng.prototype.Chapter = $util.emptyObject;
    ConfigMng.prototype.CheckPoint = $util.emptyObject;
    ConfigMng.prototype.Compound = $util.emptyObject;
    ConfigMng.prototype.CountActivities = $util.emptyObject;
    ConfigMng.prototype.Daily = $util.emptyObject;
    ConfigMng.prototype.Draug = $util.emptyObject;
    ConfigMng.prototype.DraugAwaken = $util.emptyObject;
    ConfigMng.prototype.DraugSuit = $util.emptyObject;
    ConfigMng.prototype.DuelDan = $util.emptyObject;
    ConfigMng.prototype.DuelPoint = $util.emptyObject;
    ConfigMng.prototype.DuelRanking = $util.emptyObject;
    ConfigMng.prototype.DuelSeason = $util.emptyObject;
    ConfigMng.prototype.EquipExp = $util.emptyObject;
    ConfigMng.prototype.Equipment = $util.emptyObject;
    ConfigMng.prototype.Gashapon = $util.emptyObject;
    ConfigMng.prototype.Guide = $util.emptyObject;
    ConfigMng.prototype.HeadPortrait = $util.emptyObject;
    ConfigMng.prototype.Hero = $util.emptyObject;
    ConfigMng.prototype.HeroExp = $util.emptyObject;
    ConfigMng.prototype.HeroStar = $util.emptyObject;
    ConfigMng.prototype.HeroTag = $util.emptyObject;
    ConfigMng.prototype.HeroTeam = $util.emptyObject;
    ConfigMng.prototype.HeroType = $util.emptyObject;
    ConfigMng.prototype.Item = $util.emptyObject;
    ConfigMng.prototype.Loader = $util.emptyObject;
    ConfigMng.prototype.Loading = $util.emptyObject;
    ConfigMng.prototype.Mail = $util.emptyObject;
    ConfigMng.prototype.Map = $util.emptyObject;
    ConfigMng.prototype.Menu = $util.emptyObject;
    ConfigMng.prototype.MenuIndex = $util.emptyObject;
    ConfigMng.prototype.MonsterProp = $util.emptyObject;
    ConfigMng.prototype.Msg = $util.emptyObject;
    ConfigMng.prototype.PlayerLevel = $util.emptyObject;
    ConfigMng.prototype.PlayerName = $util.emptyObject;
    ConfigMng.prototype.PlayList = $util.emptyObject;
    ConfigMng.prototype.Plot = $util.emptyObject;
    ConfigMng.prototype.Power = $util.emptyObject;
    ConfigMng.prototype.PowerGive = $util.emptyObject;
    ConfigMng.prototype.Property = $util.emptyObject;
    ConfigMng.prototype.PropValue = $util.emptyObject;
    ConfigMng.prototype.PvpMap = $util.emptyObject;
    ConfigMng.prototype.Quest = $util.emptyObject;
    ConfigMng.prototype.Reward = $util.emptyObject;
    ConfigMng.prototype.Shop = $util.emptyObject;
    ConfigMng.prototype.Skill = $util.emptyObject;
    ConfigMng.prototype.Sound = $util.emptyObject;
    ConfigMng.prototype.Unlock = $util.emptyObject;
    ConfigMng.prototype.Way = $util.emptyObject;
    ConfigMng.create = function create(properties) {
        return new ConfigMng(properties);
    };
    ConfigMng.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Global != null && message.hasOwnProperty("Global"))
            $excelRoot.Global.encode(message.Global, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.Activities != null && message.hasOwnProperty("Activities"))
            for (var keys = Object.keys(message.Activities), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Activities.encode(message.Activities[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Avatar != null && message.hasOwnProperty("Avatar"))
            for (var keys = Object.keys(message.Avatar), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Avatar.encode(message.Avatar[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Bag != null && message.hasOwnProperty("Bag"))
            for (var keys = Object.keys(message.Bag), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Bag.encode(message.Bag[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.BattleFormula != null && message.hasOwnProperty("BattleFormula"))
            for (var keys = Object.keys(message.BattleFormula), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.BattleFormula.encode(message.BattleFormula[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Chapter != null && message.hasOwnProperty("Chapter"))
            for (var keys = Object.keys(message.Chapter), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Chapter.encode(message.Chapter[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.CheckPoint != null && message.hasOwnProperty("CheckPoint"))
            for (var keys = Object.keys(message.CheckPoint), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.CheckPoint.encode(message.CheckPoint[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Compound != null && message.hasOwnProperty("Compound"))
            for (var keys = Object.keys(message.Compound), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 8, wireType 2 =*/66).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Compound.encode(message.Compound[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.CountActivities != null && message.hasOwnProperty("CountActivities"))
            for (var keys = Object.keys(message.CountActivities), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 9, wireType 2 =*/74).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.CountActivities.encode(message.CountActivities[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Daily != null && message.hasOwnProperty("Daily"))
            for (var keys = Object.keys(message.Daily), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 10, wireType 2 =*/82).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Daily.encode(message.Daily[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Draug != null && message.hasOwnProperty("Draug"))
            for (var keys = Object.keys(message.Draug), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 11, wireType 2 =*/90).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Draug.encode(message.Draug[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.DraugAwaken != null && message.hasOwnProperty("DraugAwaken"))
            for (var keys = Object.keys(message.DraugAwaken), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 12, wireType 2 =*/98).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.DraugAwaken.encode(message.DraugAwaken[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.DraugSuit != null && message.hasOwnProperty("DraugSuit"))
            for (var keys = Object.keys(message.DraugSuit), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 13, wireType 2 =*/106).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.DraugSuit.encode(message.DraugSuit[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.DuelDan != null && message.hasOwnProperty("DuelDan"))
            for (var keys = Object.keys(message.DuelDan), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 14, wireType 2 =*/114).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.DuelDan.encode(message.DuelDan[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.DuelPoint != null && message.hasOwnProperty("DuelPoint"))
            for (var keys = Object.keys(message.DuelPoint), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 15, wireType 2 =*/122).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.DuelPoint.encode(message.DuelPoint[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.DuelRanking != null && message.hasOwnProperty("DuelRanking"))
            for (var keys = Object.keys(message.DuelRanking), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 16, wireType 2 =*/130).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.DuelRanking.encode(message.DuelRanking[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.DuelSeason != null && message.hasOwnProperty("DuelSeason"))
            for (var keys = Object.keys(message.DuelSeason), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 17, wireType 2 =*/138).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.DuelSeason.encode(message.DuelSeason[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.EquipExp != null && message.hasOwnProperty("EquipExp"))
            for (var keys = Object.keys(message.EquipExp), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 18, wireType 2 =*/146).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.EquipExp.encode(message.EquipExp[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Equipment != null && message.hasOwnProperty("Equipment"))
            for (var keys = Object.keys(message.Equipment), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 19, wireType 2 =*/154).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Equipment.encode(message.Equipment[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Gashapon != null && message.hasOwnProperty("Gashapon"))
            for (var keys = Object.keys(message.Gashapon), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 20, wireType 2 =*/162).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Gashapon.encode(message.Gashapon[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Guide != null && message.hasOwnProperty("Guide"))
            for (var keys = Object.keys(message.Guide), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 21, wireType 2 =*/170).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Guide.encode(message.Guide[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.HeadPortrait != null && message.hasOwnProperty("HeadPortrait"))
            for (var keys = Object.keys(message.HeadPortrait), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 22, wireType 2 =*/178).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.HeadPortrait.encode(message.HeadPortrait[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Hero != null && message.hasOwnProperty("Hero"))
            for (var keys = Object.keys(message.Hero), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 23, wireType 2 =*/186).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Hero.encode(message.Hero[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.HeroExp != null && message.hasOwnProperty("HeroExp"))
            for (var keys = Object.keys(message.HeroExp), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 24, wireType 2 =*/194).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.HeroExp.encode(message.HeroExp[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.HeroStar != null && message.hasOwnProperty("HeroStar"))
            for (var keys = Object.keys(message.HeroStar), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 25, wireType 2 =*/202).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.HeroStar.encode(message.HeroStar[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.HeroTag != null && message.hasOwnProperty("HeroTag"))
            for (var keys = Object.keys(message.HeroTag), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 26, wireType 2 =*/210).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.HeroTag.encode(message.HeroTag[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.HeroTeam != null && message.hasOwnProperty("HeroTeam"))
            for (var keys = Object.keys(message.HeroTeam), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 27, wireType 2 =*/218).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.HeroTeam.encode(message.HeroTeam[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.HeroType != null && message.hasOwnProperty("HeroType"))
            for (var keys = Object.keys(message.HeroType), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 28, wireType 2 =*/226).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.HeroType.encode(message.HeroType[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Item != null && message.hasOwnProperty("Item"))
            for (var keys = Object.keys(message.Item), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 29, wireType 2 =*/234).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Item.encode(message.Item[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Loader != null && message.hasOwnProperty("Loader"))
            for (var keys = Object.keys(message.Loader), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 30, wireType 2 =*/242).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Loader.encode(message.Loader[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Loading != null && message.hasOwnProperty("Loading"))
            for (var keys = Object.keys(message.Loading), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 31, wireType 2 =*/250).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Loading.encode(message.Loading[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Mail != null && message.hasOwnProperty("Mail"))
            for (var keys = Object.keys(message.Mail), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 32, wireType 2 =*/258).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Mail.encode(message.Mail[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Map != null && message.hasOwnProperty("Map"))
            for (var keys = Object.keys(message.Map), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 33, wireType 2 =*/266).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Map.encode(message.Map[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Menu != null && message.hasOwnProperty("Menu"))
            for (var keys = Object.keys(message.Menu), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 34, wireType 2 =*/274).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Menu.encode(message.Menu[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.MenuIndex != null && message.hasOwnProperty("MenuIndex"))
            for (var keys = Object.keys(message.MenuIndex), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 35, wireType 2 =*/282).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.MenuIndex.encode(message.MenuIndex[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.MonsterProp != null && message.hasOwnProperty("MonsterProp"))
            for (var keys = Object.keys(message.MonsterProp), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 36, wireType 2 =*/290).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.MonsterProp.encode(message.MonsterProp[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Msg != null && message.hasOwnProperty("Msg"))
            for (var keys = Object.keys(message.Msg), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 37, wireType 2 =*/298).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Msg.encode(message.Msg[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.PlayerLevel != null && message.hasOwnProperty("PlayerLevel"))
            for (var keys = Object.keys(message.PlayerLevel), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 38, wireType 2 =*/306).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.PlayerLevel.encode(message.PlayerLevel[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.PlayerName != null && message.hasOwnProperty("PlayerName"))
            for (var keys = Object.keys(message.PlayerName), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 39, wireType 2 =*/314).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.PlayerName.encode(message.PlayerName[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.PlayList != null && message.hasOwnProperty("PlayList"))
            for (var keys = Object.keys(message.PlayList), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 40, wireType 2 =*/322).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.PlayList.encode(message.PlayList[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Plot != null && message.hasOwnProperty("Plot"))
            for (var keys = Object.keys(message.Plot), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 41, wireType 2 =*/330).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Plot.encode(message.Plot[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Power != null && message.hasOwnProperty("Power"))
            for (var keys = Object.keys(message.Power), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 42, wireType 2 =*/338).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Power.encode(message.Power[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.PowerGive != null && message.hasOwnProperty("PowerGive"))
            for (var keys = Object.keys(message.PowerGive), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 43, wireType 2 =*/346).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.PowerGive.encode(message.PowerGive[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Property != null && message.hasOwnProperty("Property"))
            for (var keys = Object.keys(message.Property), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 44, wireType 2 =*/354).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Property.encode(message.Property[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.PropValue != null && message.hasOwnProperty("PropValue"))
            for (var keys = Object.keys(message.PropValue), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 45, wireType 2 =*/362).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.PropValue.encode(message.PropValue[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.PvpMap != null && message.hasOwnProperty("PvpMap"))
            for (var keys = Object.keys(message.PvpMap), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 46, wireType 2 =*/370).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.PvpMap.encode(message.PvpMap[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Quest != null && message.hasOwnProperty("Quest"))
            for (var keys = Object.keys(message.Quest), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 47, wireType 2 =*/378).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Quest.encode(message.Quest[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Reward != null && message.hasOwnProperty("Reward"))
            for (var keys = Object.keys(message.Reward), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 48, wireType 2 =*/386).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Reward.encode(message.Reward[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Shop != null && message.hasOwnProperty("Shop"))
            for (var keys = Object.keys(message.Shop), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 49, wireType 2 =*/394).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Shop.encode(message.Shop[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Skill != null && message.hasOwnProperty("Skill"))
            for (var keys = Object.keys(message.Skill), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 50, wireType 2 =*/402).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Skill.encode(message.Skill[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Sound != null && message.hasOwnProperty("Sound"))
            for (var keys = Object.keys(message.Sound), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 51, wireType 2 =*/410).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Sound.encode(message.Sound[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Unlock != null && message.hasOwnProperty("Unlock"))
            for (var keys = Object.keys(message.Unlock), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 52, wireType 2 =*/418).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Unlock.encode(message.Unlock[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Way != null && message.hasOwnProperty("Way"))
            for (var keys = Object.keys(message.Way), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 53, wireType 2 =*/426).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Way.encode(message.Way[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
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
                if (message.Activities === $util.emptyObject)
                    message.Activities = {};
                key = reader.int32();
                reader.pos++;
                message.Activities[key] = $excelRoot.Activities.decode(reader, reader.uint32());
                break;
            case 3:
                reader.skip().pos++;
                if (message.Avatar === $util.emptyObject)
                    message.Avatar = {};
                key = reader.int32();
                reader.pos++;
                message.Avatar[key] = $excelRoot.Avatar.decode(reader, reader.uint32());
                break;
            case 4:
                reader.skip().pos++;
                if (message.Bag === $util.emptyObject)
                    message.Bag = {};
                key = reader.int32();
                reader.pos++;
                message.Bag[key] = $excelRoot.Bag.decode(reader, reader.uint32());
                break;
            case 5:
                reader.skip().pos++;
                if (message.BattleFormula === $util.emptyObject)
                    message.BattleFormula = {};
                key = reader.int32();
                reader.pos++;
                message.BattleFormula[key] = $excelRoot.BattleFormula.decode(reader, reader.uint32());
                break;
            case 6:
                reader.skip().pos++;
                if (message.Chapter === $util.emptyObject)
                    message.Chapter = {};
                key = reader.int32();
                reader.pos++;
                message.Chapter[key] = $excelRoot.Chapter.decode(reader, reader.uint32());
                break;
            case 7:
                reader.skip().pos++;
                if (message.CheckPoint === $util.emptyObject)
                    message.CheckPoint = {};
                key = reader.int32();
                reader.pos++;
                message.CheckPoint[key] = $excelRoot.CheckPoint.decode(reader, reader.uint32());
                break;
            case 8:
                reader.skip().pos++;
                if (message.Compound === $util.emptyObject)
                    message.Compound = {};
                key = reader.int32();
                reader.pos++;
                message.Compound[key] = $excelRoot.Compound.decode(reader, reader.uint32());
                break;
            case 9:
                reader.skip().pos++;
                if (message.CountActivities === $util.emptyObject)
                    message.CountActivities = {};
                key = reader.int32();
                reader.pos++;
                message.CountActivities[key] = $excelRoot.CountActivities.decode(reader, reader.uint32());
                break;
            case 10:
                reader.skip().pos++;
                if (message.Daily === $util.emptyObject)
                    message.Daily = {};
                key = reader.int32();
                reader.pos++;
                message.Daily[key] = $excelRoot.Daily.decode(reader, reader.uint32());
                break;
            case 11:
                reader.skip().pos++;
                if (message.Draug === $util.emptyObject)
                    message.Draug = {};
                key = reader.int32();
                reader.pos++;
                message.Draug[key] = $excelRoot.Draug.decode(reader, reader.uint32());
                break;
            case 12:
                reader.skip().pos++;
                if (message.DraugAwaken === $util.emptyObject)
                    message.DraugAwaken = {};
                key = reader.int32();
                reader.pos++;
                message.DraugAwaken[key] = $excelRoot.DraugAwaken.decode(reader, reader.uint32());
                break;
            case 13:
                reader.skip().pos++;
                if (message.DraugSuit === $util.emptyObject)
                    message.DraugSuit = {};
                key = reader.int32();
                reader.pos++;
                message.DraugSuit[key] = $excelRoot.DraugSuit.decode(reader, reader.uint32());
                break;
            case 14:
                reader.skip().pos++;
                if (message.DuelDan === $util.emptyObject)
                    message.DuelDan = {};
                key = reader.int32();
                reader.pos++;
                message.DuelDan[key] = $excelRoot.DuelDan.decode(reader, reader.uint32());
                break;
            case 15:
                reader.skip().pos++;
                if (message.DuelPoint === $util.emptyObject)
                    message.DuelPoint = {};
                key = reader.int32();
                reader.pos++;
                message.DuelPoint[key] = $excelRoot.DuelPoint.decode(reader, reader.uint32());
                break;
            case 16:
                reader.skip().pos++;
                if (message.DuelRanking === $util.emptyObject)
                    message.DuelRanking = {};
                key = reader.int32();
                reader.pos++;
                message.DuelRanking[key] = $excelRoot.DuelRanking.decode(reader, reader.uint32());
                break;
            case 17:
                reader.skip().pos++;
                if (message.DuelSeason === $util.emptyObject)
                    message.DuelSeason = {};
                key = reader.int32();
                reader.pos++;
                message.DuelSeason[key] = $excelRoot.DuelSeason.decode(reader, reader.uint32());
                break;
            case 18:
                reader.skip().pos++;
                if (message.EquipExp === $util.emptyObject)
                    message.EquipExp = {};
                key = reader.int32();
                reader.pos++;
                message.EquipExp[key] = $excelRoot.EquipExp.decode(reader, reader.uint32());
                break;
            case 19:
                reader.skip().pos++;
                if (message.Equipment === $util.emptyObject)
                    message.Equipment = {};
                key = reader.int32();
                reader.pos++;
                message.Equipment[key] = $excelRoot.Equipment.decode(reader, reader.uint32());
                break;
            case 20:
                reader.skip().pos++;
                if (message.Gashapon === $util.emptyObject)
                    message.Gashapon = {};
                key = reader.int32();
                reader.pos++;
                message.Gashapon[key] = $excelRoot.Gashapon.decode(reader, reader.uint32());
                break;
            case 21:
                reader.skip().pos++;
                if (message.Guide === $util.emptyObject)
                    message.Guide = {};
                key = reader.int32();
                reader.pos++;
                message.Guide[key] = $excelRoot.Guide.decode(reader, reader.uint32());
                break;
            case 22:
                reader.skip().pos++;
                if (message.HeadPortrait === $util.emptyObject)
                    message.HeadPortrait = {};
                key = reader.int32();
                reader.pos++;
                message.HeadPortrait[key] = $excelRoot.HeadPortrait.decode(reader, reader.uint32());
                break;
            case 23:
                reader.skip().pos++;
                if (message.Hero === $util.emptyObject)
                    message.Hero = {};
                key = reader.int32();
                reader.pos++;
                message.Hero[key] = $excelRoot.Hero.decode(reader, reader.uint32());
                break;
            case 24:
                reader.skip().pos++;
                if (message.HeroExp === $util.emptyObject)
                    message.HeroExp = {};
                key = reader.int32();
                reader.pos++;
                message.HeroExp[key] = $excelRoot.HeroExp.decode(reader, reader.uint32());
                break;
            case 25:
                reader.skip().pos++;
                if (message.HeroStar === $util.emptyObject)
                    message.HeroStar = {};
                key = reader.int32();
                reader.pos++;
                message.HeroStar[key] = $excelRoot.HeroStar.decode(reader, reader.uint32());
                break;
            case 26:
                reader.skip().pos++;
                if (message.HeroTag === $util.emptyObject)
                    message.HeroTag = {};
                key = reader.int32();
                reader.pos++;
                message.HeroTag[key] = $excelRoot.HeroTag.decode(reader, reader.uint32());
                break;
            case 27:
                reader.skip().pos++;
                if (message.HeroTeam === $util.emptyObject)
                    message.HeroTeam = {};
                key = reader.int32();
                reader.pos++;
                message.HeroTeam[key] = $excelRoot.HeroTeam.decode(reader, reader.uint32());
                break;
            case 28:
                reader.skip().pos++;
                if (message.HeroType === $util.emptyObject)
                    message.HeroType = {};
                key = reader.int32();
                reader.pos++;
                message.HeroType[key] = $excelRoot.HeroType.decode(reader, reader.uint32());
                break;
            case 29:
                reader.skip().pos++;
                if (message.Item === $util.emptyObject)
                    message.Item = {};
                key = reader.int32();
                reader.pos++;
                message.Item[key] = $excelRoot.Item.decode(reader, reader.uint32());
                break;
            case 30:
                reader.skip().pos++;
                if (message.Loader === $util.emptyObject)
                    message.Loader = {};
                key = reader.int32();
                reader.pos++;
                message.Loader[key] = $excelRoot.Loader.decode(reader, reader.uint32());
                break;
            case 31:
                reader.skip().pos++;
                if (message.Loading === $util.emptyObject)
                    message.Loading = {};
                key = reader.int32();
                reader.pos++;
                message.Loading[key] = $excelRoot.Loading.decode(reader, reader.uint32());
                break;
            case 32:
                reader.skip().pos++;
                if (message.Mail === $util.emptyObject)
                    message.Mail = {};
                key = reader.int32();
                reader.pos++;
                message.Mail[key] = $excelRoot.Mail.decode(reader, reader.uint32());
                break;
            case 33:
                reader.skip().pos++;
                if (message.Map === $util.emptyObject)
                    message.Map = {};
                key = reader.int32();
                reader.pos++;
                message.Map[key] = $excelRoot.Map.decode(reader, reader.uint32());
                break;
            case 34:
                reader.skip().pos++;
                if (message.Menu === $util.emptyObject)
                    message.Menu = {};
                key = reader.int32();
                reader.pos++;
                message.Menu[key] = $excelRoot.Menu.decode(reader, reader.uint32());
                break;
            case 35:
                reader.skip().pos++;
                if (message.MenuIndex === $util.emptyObject)
                    message.MenuIndex = {};
                key = reader.int32();
                reader.pos++;
                message.MenuIndex[key] = $excelRoot.MenuIndex.decode(reader, reader.uint32());
                break;
            case 36:
                reader.skip().pos++;
                if (message.MonsterProp === $util.emptyObject)
                    message.MonsterProp = {};
                key = reader.int32();
                reader.pos++;
                message.MonsterProp[key] = $excelRoot.MonsterProp.decode(reader, reader.uint32());
                break;
            case 37:
                reader.skip().pos++;
                if (message.Msg === $util.emptyObject)
                    message.Msg = {};
                key = reader.int32();
                reader.pos++;
                message.Msg[key] = $excelRoot.Msg.decode(reader, reader.uint32());
                break;
            case 38:
                reader.skip().pos++;
                if (message.PlayerLevel === $util.emptyObject)
                    message.PlayerLevel = {};
                key = reader.int32();
                reader.pos++;
                message.PlayerLevel[key] = $excelRoot.PlayerLevel.decode(reader, reader.uint32());
                break;
            case 39:
                reader.skip().pos++;
                if (message.PlayerName === $util.emptyObject)
                    message.PlayerName = {};
                key = reader.int32();
                reader.pos++;
                message.PlayerName[key] = $excelRoot.PlayerName.decode(reader, reader.uint32());
                break;
            case 40:
                reader.skip().pos++;
                if (message.PlayList === $util.emptyObject)
                    message.PlayList = {};
                key = reader.int32();
                reader.pos++;
                message.PlayList[key] = $excelRoot.PlayList.decode(reader, reader.uint32());
                break;
            case 41:
                reader.skip().pos++;
                if (message.Plot === $util.emptyObject)
                    message.Plot = {};
                key = reader.int32();
                reader.pos++;
                message.Plot[key] = $excelRoot.Plot.decode(reader, reader.uint32());
                break;
            case 42:
                reader.skip().pos++;
                if (message.Power === $util.emptyObject)
                    message.Power = {};
                key = reader.int32();
                reader.pos++;
                message.Power[key] = $excelRoot.Power.decode(reader, reader.uint32());
                break;
            case 43:
                reader.skip().pos++;
                if (message.PowerGive === $util.emptyObject)
                    message.PowerGive = {};
                key = reader.int32();
                reader.pos++;
                message.PowerGive[key] = $excelRoot.PowerGive.decode(reader, reader.uint32());
                break;
            case 44:
                reader.skip().pos++;
                if (message.Property === $util.emptyObject)
                    message.Property = {};
                key = reader.int32();
                reader.pos++;
                message.Property[key] = $excelRoot.Property.decode(reader, reader.uint32());
                break;
            case 45:
                reader.skip().pos++;
                if (message.PropValue === $util.emptyObject)
                    message.PropValue = {};
                key = reader.int32();
                reader.pos++;
                message.PropValue[key] = $excelRoot.PropValue.decode(reader, reader.uint32());
                break;
            case 46:
                reader.skip().pos++;
                if (message.PvpMap === $util.emptyObject)
                    message.PvpMap = {};
                key = reader.int32();
                reader.pos++;
                message.PvpMap[key] = $excelRoot.PvpMap.decode(reader, reader.uint32());
                break;
            case 47:
                reader.skip().pos++;
                if (message.Quest === $util.emptyObject)
                    message.Quest = {};
                key = reader.int32();
                reader.pos++;
                message.Quest[key] = $excelRoot.Quest.decode(reader, reader.uint32());
                break;
            case 48:
                reader.skip().pos++;
                if (message.Reward === $util.emptyObject)
                    message.Reward = {};
                key = reader.int32();
                reader.pos++;
                message.Reward[key] = $excelRoot.Reward.decode(reader, reader.uint32());
                break;
            case 49:
                reader.skip().pos++;
                if (message.Shop === $util.emptyObject)
                    message.Shop = {};
                key = reader.int32();
                reader.pos++;
                message.Shop[key] = $excelRoot.Shop.decode(reader, reader.uint32());
                break;
            case 50:
                reader.skip().pos++;
                if (message.Skill === $util.emptyObject)
                    message.Skill = {};
                key = reader.int32();
                reader.pos++;
                message.Skill[key] = $excelRoot.Skill.decode(reader, reader.uint32());
                break;
            case 51:
                reader.skip().pos++;
                if (message.Sound === $util.emptyObject)
                    message.Sound = {};
                key = reader.int32();
                reader.pos++;
                message.Sound[key] = $excelRoot.Sound.decode(reader, reader.uint32());
                break;
            case 52:
                reader.skip().pos++;
                if (message.Unlock === $util.emptyObject)
                    message.Unlock = {};
                key = reader.int32();
                reader.pos++;
                message.Unlock[key] = $excelRoot.Unlock.decode(reader, reader.uint32());
                break;
            case 53:
                reader.skip().pos++;
                if (message.Way === $util.emptyObject)
                    message.Way = {};
                key = reader.int32();
                reader.pos++;
                message.Way[key] = $excelRoot.Way.decode(reader, reader.uint32());
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
        if (message.Activities != null && message.hasOwnProperty("Activities")) {
            if (!$util.isObject(message.Activities))
                return "Activities: object expected";
            var key = Object.keys(message.Activities);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Activities: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Activities.verify(message.Activities[key[i]]);
                    if (error)
                        return "Activities." + error;
                }
            }
        }
        if (message.Avatar != null && message.hasOwnProperty("Avatar")) {
            if (!$util.isObject(message.Avatar))
                return "Avatar: object expected";
            var key = Object.keys(message.Avatar);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Avatar: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Avatar.verify(message.Avatar[key[i]]);
                    if (error)
                        return "Avatar." + error;
                }
            }
        }
        if (message.Bag != null && message.hasOwnProperty("Bag")) {
            if (!$util.isObject(message.Bag))
                return "Bag: object expected";
            var key = Object.keys(message.Bag);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Bag: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Bag.verify(message.Bag[key[i]]);
                    if (error)
                        return "Bag." + error;
                }
            }
        }
        if (message.BattleFormula != null && message.hasOwnProperty("BattleFormula")) {
            if (!$util.isObject(message.BattleFormula))
                return "BattleFormula: object expected";
            var key = Object.keys(message.BattleFormula);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "BattleFormula: integer key{k:int32} expected";
                {
                    var error = $excelRoot.BattleFormula.verify(message.BattleFormula[key[i]]);
                    if (error)
                        return "BattleFormula." + error;
                }
            }
        }
        if (message.Chapter != null && message.hasOwnProperty("Chapter")) {
            if (!$util.isObject(message.Chapter))
                return "Chapter: object expected";
            var key = Object.keys(message.Chapter);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Chapter: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Chapter.verify(message.Chapter[key[i]]);
                    if (error)
                        return "Chapter." + error;
                }
            }
        }
        if (message.CheckPoint != null && message.hasOwnProperty("CheckPoint")) {
            if (!$util.isObject(message.CheckPoint))
                return "CheckPoint: object expected";
            var key = Object.keys(message.CheckPoint);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "CheckPoint: integer key{k:int32} expected";
                {
                    var error = $excelRoot.CheckPoint.verify(message.CheckPoint[key[i]]);
                    if (error)
                        return "CheckPoint." + error;
                }
            }
        }
        if (message.Compound != null && message.hasOwnProperty("Compound")) {
            if (!$util.isObject(message.Compound))
                return "Compound: object expected";
            var key = Object.keys(message.Compound);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Compound: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Compound.verify(message.Compound[key[i]]);
                    if (error)
                        return "Compound." + error;
                }
            }
        }
        if (message.CountActivities != null && message.hasOwnProperty("CountActivities")) {
            if (!$util.isObject(message.CountActivities))
                return "CountActivities: object expected";
            var key = Object.keys(message.CountActivities);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "CountActivities: integer key{k:int32} expected";
                {
                    var error = $excelRoot.CountActivities.verify(message.CountActivities[key[i]]);
                    if (error)
                        return "CountActivities." + error;
                }
            }
        }
        if (message.Daily != null && message.hasOwnProperty("Daily")) {
            if (!$util.isObject(message.Daily))
                return "Daily: object expected";
            var key = Object.keys(message.Daily);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Daily: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Daily.verify(message.Daily[key[i]]);
                    if (error)
                        return "Daily." + error;
                }
            }
        }
        if (message.Draug != null && message.hasOwnProperty("Draug")) {
            if (!$util.isObject(message.Draug))
                return "Draug: object expected";
            var key = Object.keys(message.Draug);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Draug: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Draug.verify(message.Draug[key[i]]);
                    if (error)
                        return "Draug." + error;
                }
            }
        }
        if (message.DraugAwaken != null && message.hasOwnProperty("DraugAwaken")) {
            if (!$util.isObject(message.DraugAwaken))
                return "DraugAwaken: object expected";
            var key = Object.keys(message.DraugAwaken);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "DraugAwaken: integer key{k:int32} expected";
                {
                    var error = $excelRoot.DraugAwaken.verify(message.DraugAwaken[key[i]]);
                    if (error)
                        return "DraugAwaken." + error;
                }
            }
        }
        if (message.DraugSuit != null && message.hasOwnProperty("DraugSuit")) {
            if (!$util.isObject(message.DraugSuit))
                return "DraugSuit: object expected";
            var key = Object.keys(message.DraugSuit);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "DraugSuit: integer key{k:int32} expected";
                {
                    var error = $excelRoot.DraugSuit.verify(message.DraugSuit[key[i]]);
                    if (error)
                        return "DraugSuit." + error;
                }
            }
        }
        if (message.DuelDan != null && message.hasOwnProperty("DuelDan")) {
            if (!$util.isObject(message.DuelDan))
                return "DuelDan: object expected";
            var key = Object.keys(message.DuelDan);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "DuelDan: integer key{k:int32} expected";
                {
                    var error = $excelRoot.DuelDan.verify(message.DuelDan[key[i]]);
                    if (error)
                        return "DuelDan." + error;
                }
            }
        }
        if (message.DuelPoint != null && message.hasOwnProperty("DuelPoint")) {
            if (!$util.isObject(message.DuelPoint))
                return "DuelPoint: object expected";
            var key = Object.keys(message.DuelPoint);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "DuelPoint: integer key{k:int32} expected";
                {
                    var error = $excelRoot.DuelPoint.verify(message.DuelPoint[key[i]]);
                    if (error)
                        return "DuelPoint." + error;
                }
            }
        }
        if (message.DuelRanking != null && message.hasOwnProperty("DuelRanking")) {
            if (!$util.isObject(message.DuelRanking))
                return "DuelRanking: object expected";
            var key = Object.keys(message.DuelRanking);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "DuelRanking: integer key{k:int32} expected";
                {
                    var error = $excelRoot.DuelRanking.verify(message.DuelRanking[key[i]]);
                    if (error)
                        return "DuelRanking." + error;
                }
            }
        }
        if (message.DuelSeason != null && message.hasOwnProperty("DuelSeason")) {
            if (!$util.isObject(message.DuelSeason))
                return "DuelSeason: object expected";
            var key = Object.keys(message.DuelSeason);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "DuelSeason: integer key{k:int32} expected";
                {
                    var error = $excelRoot.DuelSeason.verify(message.DuelSeason[key[i]]);
                    if (error)
                        return "DuelSeason." + error;
                }
            }
        }
        if (message.EquipExp != null && message.hasOwnProperty("EquipExp")) {
            if (!$util.isObject(message.EquipExp))
                return "EquipExp: object expected";
            var key = Object.keys(message.EquipExp);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "EquipExp: integer key{k:int32} expected";
                {
                    var error = $excelRoot.EquipExp.verify(message.EquipExp[key[i]]);
                    if (error)
                        return "EquipExp." + error;
                }
            }
        }
        if (message.Equipment != null && message.hasOwnProperty("Equipment")) {
            if (!$util.isObject(message.Equipment))
                return "Equipment: object expected";
            var key = Object.keys(message.Equipment);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Equipment: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Equipment.verify(message.Equipment[key[i]]);
                    if (error)
                        return "Equipment." + error;
                }
            }
        }
        if (message.Gashapon != null && message.hasOwnProperty("Gashapon")) {
            if (!$util.isObject(message.Gashapon))
                return "Gashapon: object expected";
            var key = Object.keys(message.Gashapon);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Gashapon: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Gashapon.verify(message.Gashapon[key[i]]);
                    if (error)
                        return "Gashapon." + error;
                }
            }
        }
        if (message.Guide != null && message.hasOwnProperty("Guide")) {
            if (!$util.isObject(message.Guide))
                return "Guide: object expected";
            var key = Object.keys(message.Guide);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Guide: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Guide.verify(message.Guide[key[i]]);
                    if (error)
                        return "Guide." + error;
                }
            }
        }
        if (message.HeadPortrait != null && message.hasOwnProperty("HeadPortrait")) {
            if (!$util.isObject(message.HeadPortrait))
                return "HeadPortrait: object expected";
            var key = Object.keys(message.HeadPortrait);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "HeadPortrait: integer key{k:int32} expected";
                {
                    var error = $excelRoot.HeadPortrait.verify(message.HeadPortrait[key[i]]);
                    if (error)
                        return "HeadPortrait." + error;
                }
            }
        }
        if (message.Hero != null && message.hasOwnProperty("Hero")) {
            if (!$util.isObject(message.Hero))
                return "Hero: object expected";
            var key = Object.keys(message.Hero);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Hero: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Hero.verify(message.Hero[key[i]]);
                    if (error)
                        return "Hero." + error;
                }
            }
        }
        if (message.HeroExp != null && message.hasOwnProperty("HeroExp")) {
            if (!$util.isObject(message.HeroExp))
                return "HeroExp: object expected";
            var key = Object.keys(message.HeroExp);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "HeroExp: integer key{k:int32} expected";
                {
                    var error = $excelRoot.HeroExp.verify(message.HeroExp[key[i]]);
                    if (error)
                        return "HeroExp." + error;
                }
            }
        }
        if (message.HeroStar != null && message.hasOwnProperty("HeroStar")) {
            if (!$util.isObject(message.HeroStar))
                return "HeroStar: object expected";
            var key = Object.keys(message.HeroStar);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "HeroStar: integer key{k:int32} expected";
                {
                    var error = $excelRoot.HeroStar.verify(message.HeroStar[key[i]]);
                    if (error)
                        return "HeroStar." + error;
                }
            }
        }
        if (message.HeroTag != null && message.hasOwnProperty("HeroTag")) {
            if (!$util.isObject(message.HeroTag))
                return "HeroTag: object expected";
            var key = Object.keys(message.HeroTag);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "HeroTag: integer key{k:int32} expected";
                {
                    var error = $excelRoot.HeroTag.verify(message.HeroTag[key[i]]);
                    if (error)
                        return "HeroTag." + error;
                }
            }
        }
        if (message.HeroTeam != null && message.hasOwnProperty("HeroTeam")) {
            if (!$util.isObject(message.HeroTeam))
                return "HeroTeam: object expected";
            var key = Object.keys(message.HeroTeam);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "HeroTeam: integer key{k:int32} expected";
                {
                    var error = $excelRoot.HeroTeam.verify(message.HeroTeam[key[i]]);
                    if (error)
                        return "HeroTeam." + error;
                }
            }
        }
        if (message.HeroType != null && message.hasOwnProperty("HeroType")) {
            if (!$util.isObject(message.HeroType))
                return "HeroType: object expected";
            var key = Object.keys(message.HeroType);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "HeroType: integer key{k:int32} expected";
                {
                    var error = $excelRoot.HeroType.verify(message.HeroType[key[i]]);
                    if (error)
                        return "HeroType." + error;
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
        if (message.Loading != null && message.hasOwnProperty("Loading")) {
            if (!$util.isObject(message.Loading))
                return "Loading: object expected";
            var key = Object.keys(message.Loading);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Loading: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Loading.verify(message.Loading[key[i]]);
                    if (error)
                        return "Loading." + error;
                }
            }
        }
        if (message.Mail != null && message.hasOwnProperty("Mail")) {
            if (!$util.isObject(message.Mail))
                return "Mail: object expected";
            var key = Object.keys(message.Mail);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Mail: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Mail.verify(message.Mail[key[i]]);
                    if (error)
                        return "Mail." + error;
                }
            }
        }
        if (message.Map != null && message.hasOwnProperty("Map")) {
            if (!$util.isObject(message.Map))
                return "Map: object expected";
            var key = Object.keys(message.Map);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Map: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Map.verify(message.Map[key[i]]);
                    if (error)
                        return "Map." + error;
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
        if (message.MenuIndex != null && message.hasOwnProperty("MenuIndex")) {
            if (!$util.isObject(message.MenuIndex))
                return "MenuIndex: object expected";
            var key = Object.keys(message.MenuIndex);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "MenuIndex: integer key{k:int32} expected";
                {
                    var error = $excelRoot.MenuIndex.verify(message.MenuIndex[key[i]]);
                    if (error)
                        return "MenuIndex." + error;
                }
            }
        }
        if (message.MonsterProp != null && message.hasOwnProperty("MonsterProp")) {
            if (!$util.isObject(message.MonsterProp))
                return "MonsterProp: object expected";
            var key = Object.keys(message.MonsterProp);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "MonsterProp: integer key{k:int32} expected";
                {
                    var error = $excelRoot.MonsterProp.verify(message.MonsterProp[key[i]]);
                    if (error)
                        return "MonsterProp." + error;
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
        if (message.PlayerLevel != null && message.hasOwnProperty("PlayerLevel")) {
            if (!$util.isObject(message.PlayerLevel))
                return "PlayerLevel: object expected";
            var key = Object.keys(message.PlayerLevel);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "PlayerLevel: integer key{k:int32} expected";
                {
                    var error = $excelRoot.PlayerLevel.verify(message.PlayerLevel[key[i]]);
                    if (error)
                        return "PlayerLevel." + error;
                }
            }
        }
        if (message.PlayerName != null && message.hasOwnProperty("PlayerName")) {
            if (!$util.isObject(message.PlayerName))
                return "PlayerName: object expected";
            var key = Object.keys(message.PlayerName);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "PlayerName: integer key{k:int32} expected";
                {
                    var error = $excelRoot.PlayerName.verify(message.PlayerName[key[i]]);
                    if (error)
                        return "PlayerName." + error;
                }
            }
        }
        if (message.PlayList != null && message.hasOwnProperty("PlayList")) {
            if (!$util.isObject(message.PlayList))
                return "PlayList: object expected";
            var key = Object.keys(message.PlayList);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "PlayList: integer key{k:int32} expected";
                {
                    var error = $excelRoot.PlayList.verify(message.PlayList[key[i]]);
                    if (error)
                        return "PlayList." + error;
                }
            }
        }
        if (message.Plot != null && message.hasOwnProperty("Plot")) {
            if (!$util.isObject(message.Plot))
                return "Plot: object expected";
            var key = Object.keys(message.Plot);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Plot: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Plot.verify(message.Plot[key[i]]);
                    if (error)
                        return "Plot." + error;
                }
            }
        }
        if (message.Power != null && message.hasOwnProperty("Power")) {
            if (!$util.isObject(message.Power))
                return "Power: object expected";
            var key = Object.keys(message.Power);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Power: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Power.verify(message.Power[key[i]]);
                    if (error)
                        return "Power." + error;
                }
            }
        }
        if (message.PowerGive != null && message.hasOwnProperty("PowerGive")) {
            if (!$util.isObject(message.PowerGive))
                return "PowerGive: object expected";
            var key = Object.keys(message.PowerGive);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "PowerGive: integer key{k:int32} expected";
                {
                    var error = $excelRoot.PowerGive.verify(message.PowerGive[key[i]]);
                    if (error)
                        return "PowerGive." + error;
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
        if (message.PropValue != null && message.hasOwnProperty("PropValue")) {
            if (!$util.isObject(message.PropValue))
                return "PropValue: object expected";
            var key = Object.keys(message.PropValue);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "PropValue: integer key{k:int32} expected";
                {
                    var error = $excelRoot.PropValue.verify(message.PropValue[key[i]]);
                    if (error)
                        return "PropValue." + error;
                }
            }
        }
        if (message.PvpMap != null && message.hasOwnProperty("PvpMap")) {
            if (!$util.isObject(message.PvpMap))
                return "PvpMap: object expected";
            var key = Object.keys(message.PvpMap);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "PvpMap: integer key{k:int32} expected";
                {
                    var error = $excelRoot.PvpMap.verify(message.PvpMap[key[i]]);
                    if (error)
                        return "PvpMap." + error;
                }
            }
        }
        if (message.Quest != null && message.hasOwnProperty("Quest")) {
            if (!$util.isObject(message.Quest))
                return "Quest: object expected";
            var key = Object.keys(message.Quest);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Quest: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Quest.verify(message.Quest[key[i]]);
                    if (error)
                        return "Quest." + error;
                }
            }
        }
        if (message.Reward != null && message.hasOwnProperty("Reward")) {
            if (!$util.isObject(message.Reward))
                return "Reward: object expected";
            var key = Object.keys(message.Reward);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Reward: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Reward.verify(message.Reward[key[i]]);
                    if (error)
                        return "Reward." + error;
                }
            }
        }
        if (message.Shop != null && message.hasOwnProperty("Shop")) {
            if (!$util.isObject(message.Shop))
                return "Shop: object expected";
            var key = Object.keys(message.Shop);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Shop: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Shop.verify(message.Shop[key[i]]);
                    if (error)
                        return "Shop." + error;
                }
            }
        }
        if (message.Skill != null && message.hasOwnProperty("Skill")) {
            if (!$util.isObject(message.Skill))
                return "Skill: object expected";
            var key = Object.keys(message.Skill);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Skill: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Skill.verify(message.Skill[key[i]]);
                    if (error)
                        return "Skill." + error;
                }
            }
        }
        if (message.Sound != null && message.hasOwnProperty("Sound")) {
            if (!$util.isObject(message.Sound))
                return "Sound: object expected";
            var key = Object.keys(message.Sound);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Sound: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Sound.verify(message.Sound[key[i]]);
                    if (error)
                        return "Sound." + error;
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
        if (message.Way != null && message.hasOwnProperty("Way")) {
            if (!$util.isObject(message.Way))
                return "Way: object expected";
            var key = Object.keys(message.Way);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "Way: integer key{k:int32} expected";
                {
                    var error = $excelRoot.Way.verify(message.Way[key[i]]);
                    if (error)
                        return "Way." + error;
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
        if (object.Activities) {
            if (typeof object.Activities !== "object")
                throw TypeError(".ConfigMng.Activities: object expected");
            message.Activities = {};
            for (var keys = Object.keys(object.Activities), i = 0; i < keys.length; ++i) {
                if (typeof object.Activities[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Activities: object expected");
                message.Activities[keys[i]] = $excelRoot.Activities.fromObject(object.Activities[keys[i]]);
            }
        }
        if (object.Avatar) {
            if (typeof object.Avatar !== "object")
                throw TypeError(".ConfigMng.Avatar: object expected");
            message.Avatar = {};
            for (var keys = Object.keys(object.Avatar), i = 0; i < keys.length; ++i) {
                if (typeof object.Avatar[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Avatar: object expected");
                message.Avatar[keys[i]] = $excelRoot.Avatar.fromObject(object.Avatar[keys[i]]);
            }
        }
        if (object.Bag) {
            if (typeof object.Bag !== "object")
                throw TypeError(".ConfigMng.Bag: object expected");
            message.Bag = {};
            for (var keys = Object.keys(object.Bag), i = 0; i < keys.length; ++i) {
                if (typeof object.Bag[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Bag: object expected");
                message.Bag[keys[i]] = $excelRoot.Bag.fromObject(object.Bag[keys[i]]);
            }
        }
        if (object.BattleFormula) {
            if (typeof object.BattleFormula !== "object")
                throw TypeError(".ConfigMng.BattleFormula: object expected");
            message.BattleFormula = {};
            for (var keys = Object.keys(object.BattleFormula), i = 0; i < keys.length; ++i) {
                if (typeof object.BattleFormula[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.BattleFormula: object expected");
                message.BattleFormula[keys[i]] = $excelRoot.BattleFormula.fromObject(object.BattleFormula[keys[i]]);
            }
        }
        if (object.Chapter) {
            if (typeof object.Chapter !== "object")
                throw TypeError(".ConfigMng.Chapter: object expected");
            message.Chapter = {};
            for (var keys = Object.keys(object.Chapter), i = 0; i < keys.length; ++i) {
                if (typeof object.Chapter[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Chapter: object expected");
                message.Chapter[keys[i]] = $excelRoot.Chapter.fromObject(object.Chapter[keys[i]]);
            }
        }
        if (object.CheckPoint) {
            if (typeof object.CheckPoint !== "object")
                throw TypeError(".ConfigMng.CheckPoint: object expected");
            message.CheckPoint = {};
            for (var keys = Object.keys(object.CheckPoint), i = 0; i < keys.length; ++i) {
                if (typeof object.CheckPoint[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.CheckPoint: object expected");
                message.CheckPoint[keys[i]] = $excelRoot.CheckPoint.fromObject(object.CheckPoint[keys[i]]);
            }
        }
        if (object.Compound) {
            if (typeof object.Compound !== "object")
                throw TypeError(".ConfigMng.Compound: object expected");
            message.Compound = {};
            for (var keys = Object.keys(object.Compound), i = 0; i < keys.length; ++i) {
                if (typeof object.Compound[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Compound: object expected");
                message.Compound[keys[i]] = $excelRoot.Compound.fromObject(object.Compound[keys[i]]);
            }
        }
        if (object.CountActivities) {
            if (typeof object.CountActivities !== "object")
                throw TypeError(".ConfigMng.CountActivities: object expected");
            message.CountActivities = {};
            for (var keys = Object.keys(object.CountActivities), i = 0; i < keys.length; ++i) {
                if (typeof object.CountActivities[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.CountActivities: object expected");
                message.CountActivities[keys[i]] = $excelRoot.CountActivities.fromObject(object.CountActivities[keys[i]]);
            }
        }
        if (object.Daily) {
            if (typeof object.Daily !== "object")
                throw TypeError(".ConfigMng.Daily: object expected");
            message.Daily = {};
            for (var keys = Object.keys(object.Daily), i = 0; i < keys.length; ++i) {
                if (typeof object.Daily[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Daily: object expected");
                message.Daily[keys[i]] = $excelRoot.Daily.fromObject(object.Daily[keys[i]]);
            }
        }
        if (object.Draug) {
            if (typeof object.Draug !== "object")
                throw TypeError(".ConfigMng.Draug: object expected");
            message.Draug = {};
            for (var keys = Object.keys(object.Draug), i = 0; i < keys.length; ++i) {
                if (typeof object.Draug[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Draug: object expected");
                message.Draug[keys[i]] = $excelRoot.Draug.fromObject(object.Draug[keys[i]]);
            }
        }
        if (object.DraugAwaken) {
            if (typeof object.DraugAwaken !== "object")
                throw TypeError(".ConfigMng.DraugAwaken: object expected");
            message.DraugAwaken = {};
            for (var keys = Object.keys(object.DraugAwaken), i = 0; i < keys.length; ++i) {
                if (typeof object.DraugAwaken[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.DraugAwaken: object expected");
                message.DraugAwaken[keys[i]] = $excelRoot.DraugAwaken.fromObject(object.DraugAwaken[keys[i]]);
            }
        }
        if (object.DraugSuit) {
            if (typeof object.DraugSuit !== "object")
                throw TypeError(".ConfigMng.DraugSuit: object expected");
            message.DraugSuit = {};
            for (var keys = Object.keys(object.DraugSuit), i = 0; i < keys.length; ++i) {
                if (typeof object.DraugSuit[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.DraugSuit: object expected");
                message.DraugSuit[keys[i]] = $excelRoot.DraugSuit.fromObject(object.DraugSuit[keys[i]]);
            }
        }
        if (object.DuelDan) {
            if (typeof object.DuelDan !== "object")
                throw TypeError(".ConfigMng.DuelDan: object expected");
            message.DuelDan = {};
            for (var keys = Object.keys(object.DuelDan), i = 0; i < keys.length; ++i) {
                if (typeof object.DuelDan[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.DuelDan: object expected");
                message.DuelDan[keys[i]] = $excelRoot.DuelDan.fromObject(object.DuelDan[keys[i]]);
            }
        }
        if (object.DuelPoint) {
            if (typeof object.DuelPoint !== "object")
                throw TypeError(".ConfigMng.DuelPoint: object expected");
            message.DuelPoint = {};
            for (var keys = Object.keys(object.DuelPoint), i = 0; i < keys.length; ++i) {
                if (typeof object.DuelPoint[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.DuelPoint: object expected");
                message.DuelPoint[keys[i]] = $excelRoot.DuelPoint.fromObject(object.DuelPoint[keys[i]]);
            }
        }
        if (object.DuelRanking) {
            if (typeof object.DuelRanking !== "object")
                throw TypeError(".ConfigMng.DuelRanking: object expected");
            message.DuelRanking = {};
            for (var keys = Object.keys(object.DuelRanking), i = 0; i < keys.length; ++i) {
                if (typeof object.DuelRanking[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.DuelRanking: object expected");
                message.DuelRanking[keys[i]] = $excelRoot.DuelRanking.fromObject(object.DuelRanking[keys[i]]);
            }
        }
        if (object.DuelSeason) {
            if (typeof object.DuelSeason !== "object")
                throw TypeError(".ConfigMng.DuelSeason: object expected");
            message.DuelSeason = {};
            for (var keys = Object.keys(object.DuelSeason), i = 0; i < keys.length; ++i) {
                if (typeof object.DuelSeason[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.DuelSeason: object expected");
                message.DuelSeason[keys[i]] = $excelRoot.DuelSeason.fromObject(object.DuelSeason[keys[i]]);
            }
        }
        if (object.EquipExp) {
            if (typeof object.EquipExp !== "object")
                throw TypeError(".ConfigMng.EquipExp: object expected");
            message.EquipExp = {};
            for (var keys = Object.keys(object.EquipExp), i = 0; i < keys.length; ++i) {
                if (typeof object.EquipExp[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.EquipExp: object expected");
                message.EquipExp[keys[i]] = $excelRoot.EquipExp.fromObject(object.EquipExp[keys[i]]);
            }
        }
        if (object.Equipment) {
            if (typeof object.Equipment !== "object")
                throw TypeError(".ConfigMng.Equipment: object expected");
            message.Equipment = {};
            for (var keys = Object.keys(object.Equipment), i = 0; i < keys.length; ++i) {
                if (typeof object.Equipment[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Equipment: object expected");
                message.Equipment[keys[i]] = $excelRoot.Equipment.fromObject(object.Equipment[keys[i]]);
            }
        }
        if (object.Gashapon) {
            if (typeof object.Gashapon !== "object")
                throw TypeError(".ConfigMng.Gashapon: object expected");
            message.Gashapon = {};
            for (var keys = Object.keys(object.Gashapon), i = 0; i < keys.length; ++i) {
                if (typeof object.Gashapon[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Gashapon: object expected");
                message.Gashapon[keys[i]] = $excelRoot.Gashapon.fromObject(object.Gashapon[keys[i]]);
            }
        }
        if (object.Guide) {
            if (typeof object.Guide !== "object")
                throw TypeError(".ConfigMng.Guide: object expected");
            message.Guide = {};
            for (var keys = Object.keys(object.Guide), i = 0; i < keys.length; ++i) {
                if (typeof object.Guide[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Guide: object expected");
                message.Guide[keys[i]] = $excelRoot.Guide.fromObject(object.Guide[keys[i]]);
            }
        }
        if (object.HeadPortrait) {
            if (typeof object.HeadPortrait !== "object")
                throw TypeError(".ConfigMng.HeadPortrait: object expected");
            message.HeadPortrait = {};
            for (var keys = Object.keys(object.HeadPortrait), i = 0; i < keys.length; ++i) {
                if (typeof object.HeadPortrait[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.HeadPortrait: object expected");
                message.HeadPortrait[keys[i]] = $excelRoot.HeadPortrait.fromObject(object.HeadPortrait[keys[i]]);
            }
        }
        if (object.Hero) {
            if (typeof object.Hero !== "object")
                throw TypeError(".ConfigMng.Hero: object expected");
            message.Hero = {};
            for (var keys = Object.keys(object.Hero), i = 0; i < keys.length; ++i) {
                if (typeof object.Hero[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Hero: object expected");
                message.Hero[keys[i]] = $excelRoot.Hero.fromObject(object.Hero[keys[i]]);
            }
        }
        if (object.HeroExp) {
            if (typeof object.HeroExp !== "object")
                throw TypeError(".ConfigMng.HeroExp: object expected");
            message.HeroExp = {};
            for (var keys = Object.keys(object.HeroExp), i = 0; i < keys.length; ++i) {
                if (typeof object.HeroExp[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.HeroExp: object expected");
                message.HeroExp[keys[i]] = $excelRoot.HeroExp.fromObject(object.HeroExp[keys[i]]);
            }
        }
        if (object.HeroStar) {
            if (typeof object.HeroStar !== "object")
                throw TypeError(".ConfigMng.HeroStar: object expected");
            message.HeroStar = {};
            for (var keys = Object.keys(object.HeroStar), i = 0; i < keys.length; ++i) {
                if (typeof object.HeroStar[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.HeroStar: object expected");
                message.HeroStar[keys[i]] = $excelRoot.HeroStar.fromObject(object.HeroStar[keys[i]]);
            }
        }
        if (object.HeroTag) {
            if (typeof object.HeroTag !== "object")
                throw TypeError(".ConfigMng.HeroTag: object expected");
            message.HeroTag = {};
            for (var keys = Object.keys(object.HeroTag), i = 0; i < keys.length; ++i) {
                if (typeof object.HeroTag[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.HeroTag: object expected");
                message.HeroTag[keys[i]] = $excelRoot.HeroTag.fromObject(object.HeroTag[keys[i]]);
            }
        }
        if (object.HeroTeam) {
            if (typeof object.HeroTeam !== "object")
                throw TypeError(".ConfigMng.HeroTeam: object expected");
            message.HeroTeam = {};
            for (var keys = Object.keys(object.HeroTeam), i = 0; i < keys.length; ++i) {
                if (typeof object.HeroTeam[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.HeroTeam: object expected");
                message.HeroTeam[keys[i]] = $excelRoot.HeroTeam.fromObject(object.HeroTeam[keys[i]]);
            }
        }
        if (object.HeroType) {
            if (typeof object.HeroType !== "object")
                throw TypeError(".ConfigMng.HeroType: object expected");
            message.HeroType = {};
            for (var keys = Object.keys(object.HeroType), i = 0; i < keys.length; ++i) {
                if (typeof object.HeroType[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.HeroType: object expected");
                message.HeroType[keys[i]] = $excelRoot.HeroType.fromObject(object.HeroType[keys[i]]);
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
        if (object.Loading) {
            if (typeof object.Loading !== "object")
                throw TypeError(".ConfigMng.Loading: object expected");
            message.Loading = {};
            for (var keys = Object.keys(object.Loading), i = 0; i < keys.length; ++i) {
                if (typeof object.Loading[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Loading: object expected");
                message.Loading[keys[i]] = $excelRoot.Loading.fromObject(object.Loading[keys[i]]);
            }
        }
        if (object.Mail) {
            if (typeof object.Mail !== "object")
                throw TypeError(".ConfigMng.Mail: object expected");
            message.Mail = {};
            for (var keys = Object.keys(object.Mail), i = 0; i < keys.length; ++i) {
                if (typeof object.Mail[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Mail: object expected");
                message.Mail[keys[i]] = $excelRoot.Mail.fromObject(object.Mail[keys[i]]);
            }
        }
        if (object.Map) {
            if (typeof object.Map !== "object")
                throw TypeError(".ConfigMng.Map: object expected");
            message.Map = {};
            for (var keys = Object.keys(object.Map), i = 0; i < keys.length; ++i) {
                if (typeof object.Map[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Map: object expected");
                message.Map[keys[i]] = $excelRoot.Map.fromObject(object.Map[keys[i]]);
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
        if (object.MenuIndex) {
            if (typeof object.MenuIndex !== "object")
                throw TypeError(".ConfigMng.MenuIndex: object expected");
            message.MenuIndex = {};
            for (var keys = Object.keys(object.MenuIndex), i = 0; i < keys.length; ++i) {
                if (typeof object.MenuIndex[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.MenuIndex: object expected");
                message.MenuIndex[keys[i]] = $excelRoot.MenuIndex.fromObject(object.MenuIndex[keys[i]]);
            }
        }
        if (object.MonsterProp) {
            if (typeof object.MonsterProp !== "object")
                throw TypeError(".ConfigMng.MonsterProp: object expected");
            message.MonsterProp = {};
            for (var keys = Object.keys(object.MonsterProp), i = 0; i < keys.length; ++i) {
                if (typeof object.MonsterProp[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.MonsterProp: object expected");
                message.MonsterProp[keys[i]] = $excelRoot.MonsterProp.fromObject(object.MonsterProp[keys[i]]);
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
        if (object.PlayerLevel) {
            if (typeof object.PlayerLevel !== "object")
                throw TypeError(".ConfigMng.PlayerLevel: object expected");
            message.PlayerLevel = {};
            for (var keys = Object.keys(object.PlayerLevel), i = 0; i < keys.length; ++i) {
                if (typeof object.PlayerLevel[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.PlayerLevel: object expected");
                message.PlayerLevel[keys[i]] = $excelRoot.PlayerLevel.fromObject(object.PlayerLevel[keys[i]]);
            }
        }
        if (object.PlayerName) {
            if (typeof object.PlayerName !== "object")
                throw TypeError(".ConfigMng.PlayerName: object expected");
            message.PlayerName = {};
            for (var keys = Object.keys(object.PlayerName), i = 0; i < keys.length; ++i) {
                if (typeof object.PlayerName[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.PlayerName: object expected");
                message.PlayerName[keys[i]] = $excelRoot.PlayerName.fromObject(object.PlayerName[keys[i]]);
            }
        }
        if (object.PlayList) {
            if (typeof object.PlayList !== "object")
                throw TypeError(".ConfigMng.PlayList: object expected");
            message.PlayList = {};
            for (var keys = Object.keys(object.PlayList), i = 0; i < keys.length; ++i) {
                if (typeof object.PlayList[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.PlayList: object expected");
                message.PlayList[keys[i]] = $excelRoot.PlayList.fromObject(object.PlayList[keys[i]]);
            }
        }
        if (object.Plot) {
            if (typeof object.Plot !== "object")
                throw TypeError(".ConfigMng.Plot: object expected");
            message.Plot = {};
            for (var keys = Object.keys(object.Plot), i = 0; i < keys.length; ++i) {
                if (typeof object.Plot[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Plot: object expected");
                message.Plot[keys[i]] = $excelRoot.Plot.fromObject(object.Plot[keys[i]]);
            }
        }
        if (object.Power) {
            if (typeof object.Power !== "object")
                throw TypeError(".ConfigMng.Power: object expected");
            message.Power = {};
            for (var keys = Object.keys(object.Power), i = 0; i < keys.length; ++i) {
                if (typeof object.Power[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Power: object expected");
                message.Power[keys[i]] = $excelRoot.Power.fromObject(object.Power[keys[i]]);
            }
        }
        if (object.PowerGive) {
            if (typeof object.PowerGive !== "object")
                throw TypeError(".ConfigMng.PowerGive: object expected");
            message.PowerGive = {};
            for (var keys = Object.keys(object.PowerGive), i = 0; i < keys.length; ++i) {
                if (typeof object.PowerGive[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.PowerGive: object expected");
                message.PowerGive[keys[i]] = $excelRoot.PowerGive.fromObject(object.PowerGive[keys[i]]);
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
        if (object.PropValue) {
            if (typeof object.PropValue !== "object")
                throw TypeError(".ConfigMng.PropValue: object expected");
            message.PropValue = {};
            for (var keys = Object.keys(object.PropValue), i = 0; i < keys.length; ++i) {
                if (typeof object.PropValue[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.PropValue: object expected");
                message.PropValue[keys[i]] = $excelRoot.PropValue.fromObject(object.PropValue[keys[i]]);
            }
        }
        if (object.PvpMap) {
            if (typeof object.PvpMap !== "object")
                throw TypeError(".ConfigMng.PvpMap: object expected");
            message.PvpMap = {};
            for (var keys = Object.keys(object.PvpMap), i = 0; i < keys.length; ++i) {
                if (typeof object.PvpMap[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.PvpMap: object expected");
                message.PvpMap[keys[i]] = $excelRoot.PvpMap.fromObject(object.PvpMap[keys[i]]);
            }
        }
        if (object.Quest) {
            if (typeof object.Quest !== "object")
                throw TypeError(".ConfigMng.Quest: object expected");
            message.Quest = {};
            for (var keys = Object.keys(object.Quest), i = 0; i < keys.length; ++i) {
                if (typeof object.Quest[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Quest: object expected");
                message.Quest[keys[i]] = $excelRoot.Quest.fromObject(object.Quest[keys[i]]);
            }
        }
        if (object.Reward) {
            if (typeof object.Reward !== "object")
                throw TypeError(".ConfigMng.Reward: object expected");
            message.Reward = {};
            for (var keys = Object.keys(object.Reward), i = 0; i < keys.length; ++i) {
                if (typeof object.Reward[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Reward: object expected");
                message.Reward[keys[i]] = $excelRoot.Reward.fromObject(object.Reward[keys[i]]);
            }
        }
        if (object.Shop) {
            if (typeof object.Shop !== "object")
                throw TypeError(".ConfigMng.Shop: object expected");
            message.Shop = {};
            for (var keys = Object.keys(object.Shop), i = 0; i < keys.length; ++i) {
                if (typeof object.Shop[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Shop: object expected");
                message.Shop[keys[i]] = $excelRoot.Shop.fromObject(object.Shop[keys[i]]);
            }
        }
        if (object.Skill) {
            if (typeof object.Skill !== "object")
                throw TypeError(".ConfigMng.Skill: object expected");
            message.Skill = {};
            for (var keys = Object.keys(object.Skill), i = 0; i < keys.length; ++i) {
                if (typeof object.Skill[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Skill: object expected");
                message.Skill[keys[i]] = $excelRoot.Skill.fromObject(object.Skill[keys[i]]);
            }
        }
        if (object.Sound) {
            if (typeof object.Sound !== "object")
                throw TypeError(".ConfigMng.Sound: object expected");
            message.Sound = {};
            for (var keys = Object.keys(object.Sound), i = 0; i < keys.length; ++i) {
                if (typeof object.Sound[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Sound: object expected");
                message.Sound[keys[i]] = $excelRoot.Sound.fromObject(object.Sound[keys[i]]);
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
        if (object.Way) {
            if (typeof object.Way !== "object")
                throw TypeError(".ConfigMng.Way: object expected");
            message.Way = {};
            for (var keys = Object.keys(object.Way), i = 0; i < keys.length; ++i) {
                if (typeof object.Way[keys[i]] !== "object")
                    throw TypeError(".ConfigMng.Way: object expected");
                message.Way[keys[i]] = $excelRoot.Way.fromObject(object.Way[keys[i]]);
            }
        }
        return message;
    };
    ConfigMng.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults) {
            object.Activities = {};
            object.Avatar = {};
            object.Bag = {};
            object.BattleFormula = {};
            object.Chapter = {};
            object.CheckPoint = {};
            object.Compound = {};
            object.CountActivities = {};
            object.Daily = {};
            object.Draug = {};
            object.DraugAwaken = {};
            object.DraugSuit = {};
            object.DuelDan = {};
            object.DuelPoint = {};
            object.DuelRanking = {};
            object.DuelSeason = {};
            object.EquipExp = {};
            object.Equipment = {};
            object.Gashapon = {};
            object.Guide = {};
            object.HeadPortrait = {};
            object.Hero = {};
            object.HeroExp = {};
            object.HeroStar = {};
            object.HeroTag = {};
            object.HeroTeam = {};
            object.HeroType = {};
            object.Item = {};
            object.Loader = {};
            object.Loading = {};
            object.Mail = {};
            object.Map = {};
            object.Menu = {};
            object.MenuIndex = {};
            object.MonsterProp = {};
            object.Msg = {};
            object.PlayerLevel = {};
            object.PlayerName = {};
            object.PlayList = {};
            object.Plot = {};
            object.Power = {};
            object.PowerGive = {};
            object.Property = {};
            object.PropValue = {};
            object.PvpMap = {};
            object.Quest = {};
            object.Reward = {};
            object.Shop = {};
            object.Skill = {};
            object.Sound = {};
            object.Unlock = {};
            object.Way = {};
        }
        if (options.defaults)
            object.Global = null;
        if (message.Global != null && message.hasOwnProperty("Global"))
            object.Global = $excelRoot.Global.toObject(message.Global, options);
        var keys2;
        if (message.Activities && (keys2 = Object.keys(message.Activities)).length) {
            object.Activities = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Activities[keys2[j]] = $excelRoot.Activities.toObject(message.Activities[keys2[j]], options);
        }
        if (message.Avatar && (keys2 = Object.keys(message.Avatar)).length) {
            object.Avatar = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Avatar[keys2[j]] = $excelRoot.Avatar.toObject(message.Avatar[keys2[j]], options);
        }
        if (message.Bag && (keys2 = Object.keys(message.Bag)).length) {
            object.Bag = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Bag[keys2[j]] = $excelRoot.Bag.toObject(message.Bag[keys2[j]], options);
        }
        if (message.BattleFormula && (keys2 = Object.keys(message.BattleFormula)).length) {
            object.BattleFormula = {};
            for (var j = 0; j < keys2.length; ++j)
                object.BattleFormula[keys2[j]] = $excelRoot.BattleFormula.toObject(message.BattleFormula[keys2[j]], options);
        }
        if (message.Chapter && (keys2 = Object.keys(message.Chapter)).length) {
            object.Chapter = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Chapter[keys2[j]] = $excelRoot.Chapter.toObject(message.Chapter[keys2[j]], options);
        }
        if (message.CheckPoint && (keys2 = Object.keys(message.CheckPoint)).length) {
            object.CheckPoint = {};
            for (var j = 0; j < keys2.length; ++j)
                object.CheckPoint[keys2[j]] = $excelRoot.CheckPoint.toObject(message.CheckPoint[keys2[j]], options);
        }
        if (message.Compound && (keys2 = Object.keys(message.Compound)).length) {
            object.Compound = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Compound[keys2[j]] = $excelRoot.Compound.toObject(message.Compound[keys2[j]], options);
        }
        if (message.CountActivities && (keys2 = Object.keys(message.CountActivities)).length) {
            object.CountActivities = {};
            for (var j = 0; j < keys2.length; ++j)
                object.CountActivities[keys2[j]] = $excelRoot.CountActivities.toObject(message.CountActivities[keys2[j]], options);
        }
        if (message.Daily && (keys2 = Object.keys(message.Daily)).length) {
            object.Daily = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Daily[keys2[j]] = $excelRoot.Daily.toObject(message.Daily[keys2[j]], options);
        }
        if (message.Draug && (keys2 = Object.keys(message.Draug)).length) {
            object.Draug = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Draug[keys2[j]] = $excelRoot.Draug.toObject(message.Draug[keys2[j]], options);
        }
        if (message.DraugAwaken && (keys2 = Object.keys(message.DraugAwaken)).length) {
            object.DraugAwaken = {};
            for (var j = 0; j < keys2.length; ++j)
                object.DraugAwaken[keys2[j]] = $excelRoot.DraugAwaken.toObject(message.DraugAwaken[keys2[j]], options);
        }
        if (message.DraugSuit && (keys2 = Object.keys(message.DraugSuit)).length) {
            object.DraugSuit = {};
            for (var j = 0; j < keys2.length; ++j)
                object.DraugSuit[keys2[j]] = $excelRoot.DraugSuit.toObject(message.DraugSuit[keys2[j]], options);
        }
        if (message.DuelDan && (keys2 = Object.keys(message.DuelDan)).length) {
            object.DuelDan = {};
            for (var j = 0; j < keys2.length; ++j)
                object.DuelDan[keys2[j]] = $excelRoot.DuelDan.toObject(message.DuelDan[keys2[j]], options);
        }
        if (message.DuelPoint && (keys2 = Object.keys(message.DuelPoint)).length) {
            object.DuelPoint = {};
            for (var j = 0; j < keys2.length; ++j)
                object.DuelPoint[keys2[j]] = $excelRoot.DuelPoint.toObject(message.DuelPoint[keys2[j]], options);
        }
        if (message.DuelRanking && (keys2 = Object.keys(message.DuelRanking)).length) {
            object.DuelRanking = {};
            for (var j = 0; j < keys2.length; ++j)
                object.DuelRanking[keys2[j]] = $excelRoot.DuelRanking.toObject(message.DuelRanking[keys2[j]], options);
        }
        if (message.DuelSeason && (keys2 = Object.keys(message.DuelSeason)).length) {
            object.DuelSeason = {};
            for (var j = 0; j < keys2.length; ++j)
                object.DuelSeason[keys2[j]] = $excelRoot.DuelSeason.toObject(message.DuelSeason[keys2[j]], options);
        }
        if (message.EquipExp && (keys2 = Object.keys(message.EquipExp)).length) {
            object.EquipExp = {};
            for (var j = 0; j < keys2.length; ++j)
                object.EquipExp[keys2[j]] = $excelRoot.EquipExp.toObject(message.EquipExp[keys2[j]], options);
        }
        if (message.Equipment && (keys2 = Object.keys(message.Equipment)).length) {
            object.Equipment = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Equipment[keys2[j]] = $excelRoot.Equipment.toObject(message.Equipment[keys2[j]], options);
        }
        if (message.Gashapon && (keys2 = Object.keys(message.Gashapon)).length) {
            object.Gashapon = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Gashapon[keys2[j]] = $excelRoot.Gashapon.toObject(message.Gashapon[keys2[j]], options);
        }
        if (message.Guide && (keys2 = Object.keys(message.Guide)).length) {
            object.Guide = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Guide[keys2[j]] = $excelRoot.Guide.toObject(message.Guide[keys2[j]], options);
        }
        if (message.HeadPortrait && (keys2 = Object.keys(message.HeadPortrait)).length) {
            object.HeadPortrait = {};
            for (var j = 0; j < keys2.length; ++j)
                object.HeadPortrait[keys2[j]] = $excelRoot.HeadPortrait.toObject(message.HeadPortrait[keys2[j]], options);
        }
        if (message.Hero && (keys2 = Object.keys(message.Hero)).length) {
            object.Hero = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Hero[keys2[j]] = $excelRoot.Hero.toObject(message.Hero[keys2[j]], options);
        }
        if (message.HeroExp && (keys2 = Object.keys(message.HeroExp)).length) {
            object.HeroExp = {};
            for (var j = 0; j < keys2.length; ++j)
                object.HeroExp[keys2[j]] = $excelRoot.HeroExp.toObject(message.HeroExp[keys2[j]], options);
        }
        if (message.HeroStar && (keys2 = Object.keys(message.HeroStar)).length) {
            object.HeroStar = {};
            for (var j = 0; j < keys2.length; ++j)
                object.HeroStar[keys2[j]] = $excelRoot.HeroStar.toObject(message.HeroStar[keys2[j]], options);
        }
        if (message.HeroTag && (keys2 = Object.keys(message.HeroTag)).length) {
            object.HeroTag = {};
            for (var j = 0; j < keys2.length; ++j)
                object.HeroTag[keys2[j]] = $excelRoot.HeroTag.toObject(message.HeroTag[keys2[j]], options);
        }
        if (message.HeroTeam && (keys2 = Object.keys(message.HeroTeam)).length) {
            object.HeroTeam = {};
            for (var j = 0; j < keys2.length; ++j)
                object.HeroTeam[keys2[j]] = $excelRoot.HeroTeam.toObject(message.HeroTeam[keys2[j]], options);
        }
        if (message.HeroType && (keys2 = Object.keys(message.HeroType)).length) {
            object.HeroType = {};
            for (var j = 0; j < keys2.length; ++j)
                object.HeroType[keys2[j]] = $excelRoot.HeroType.toObject(message.HeroType[keys2[j]], options);
        }
        if (message.Item && (keys2 = Object.keys(message.Item)).length) {
            object.Item = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Item[keys2[j]] = $excelRoot.Item.toObject(message.Item[keys2[j]], options);
        }
        if (message.Loader && (keys2 = Object.keys(message.Loader)).length) {
            object.Loader = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Loader[keys2[j]] = $excelRoot.Loader.toObject(message.Loader[keys2[j]], options);
        }
        if (message.Loading && (keys2 = Object.keys(message.Loading)).length) {
            object.Loading = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Loading[keys2[j]] = $excelRoot.Loading.toObject(message.Loading[keys2[j]], options);
        }
        if (message.Mail && (keys2 = Object.keys(message.Mail)).length) {
            object.Mail = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Mail[keys2[j]] = $excelRoot.Mail.toObject(message.Mail[keys2[j]], options);
        }
        if (message.Map && (keys2 = Object.keys(message.Map)).length) {
            object.Map = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Map[keys2[j]] = $excelRoot.Map.toObject(message.Map[keys2[j]], options);
        }
        if (message.Menu && (keys2 = Object.keys(message.Menu)).length) {
            object.Menu = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Menu[keys2[j]] = $excelRoot.Menu.toObject(message.Menu[keys2[j]], options);
        }
        if (message.MenuIndex && (keys2 = Object.keys(message.MenuIndex)).length) {
            object.MenuIndex = {};
            for (var j = 0; j < keys2.length; ++j)
                object.MenuIndex[keys2[j]] = $excelRoot.MenuIndex.toObject(message.MenuIndex[keys2[j]], options);
        }
        if (message.MonsterProp && (keys2 = Object.keys(message.MonsterProp)).length) {
            object.MonsterProp = {};
            for (var j = 0; j < keys2.length; ++j)
                object.MonsterProp[keys2[j]] = $excelRoot.MonsterProp.toObject(message.MonsterProp[keys2[j]], options);
        }
        if (message.Msg && (keys2 = Object.keys(message.Msg)).length) {
            object.Msg = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Msg[keys2[j]] = $excelRoot.Msg.toObject(message.Msg[keys2[j]], options);
        }
        if (message.PlayerLevel && (keys2 = Object.keys(message.PlayerLevel)).length) {
            object.PlayerLevel = {};
            for (var j = 0; j < keys2.length; ++j)
                object.PlayerLevel[keys2[j]] = $excelRoot.PlayerLevel.toObject(message.PlayerLevel[keys2[j]], options);
        }
        if (message.PlayerName && (keys2 = Object.keys(message.PlayerName)).length) {
            object.PlayerName = {};
            for (var j = 0; j < keys2.length; ++j)
                object.PlayerName[keys2[j]] = $excelRoot.PlayerName.toObject(message.PlayerName[keys2[j]], options);
        }
        if (message.PlayList && (keys2 = Object.keys(message.PlayList)).length) {
            object.PlayList = {};
            for (var j = 0; j < keys2.length; ++j)
                object.PlayList[keys2[j]] = $excelRoot.PlayList.toObject(message.PlayList[keys2[j]], options);
        }
        if (message.Plot && (keys2 = Object.keys(message.Plot)).length) {
            object.Plot = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Plot[keys2[j]] = $excelRoot.Plot.toObject(message.Plot[keys2[j]], options);
        }
        if (message.Power && (keys2 = Object.keys(message.Power)).length) {
            object.Power = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Power[keys2[j]] = $excelRoot.Power.toObject(message.Power[keys2[j]], options);
        }
        if (message.PowerGive && (keys2 = Object.keys(message.PowerGive)).length) {
            object.PowerGive = {};
            for (var j = 0; j < keys2.length; ++j)
                object.PowerGive[keys2[j]] = $excelRoot.PowerGive.toObject(message.PowerGive[keys2[j]], options);
        }
        if (message.Property && (keys2 = Object.keys(message.Property)).length) {
            object.Property = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Property[keys2[j]] = $excelRoot.Property.toObject(message.Property[keys2[j]], options);
        }
        if (message.PropValue && (keys2 = Object.keys(message.PropValue)).length) {
            object.PropValue = {};
            for (var j = 0; j < keys2.length; ++j)
                object.PropValue[keys2[j]] = $excelRoot.PropValue.toObject(message.PropValue[keys2[j]], options);
        }
        if (message.PvpMap && (keys2 = Object.keys(message.PvpMap)).length) {
            object.PvpMap = {};
            for (var j = 0; j < keys2.length; ++j)
                object.PvpMap[keys2[j]] = $excelRoot.PvpMap.toObject(message.PvpMap[keys2[j]], options);
        }
        if (message.Quest && (keys2 = Object.keys(message.Quest)).length) {
            object.Quest = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Quest[keys2[j]] = $excelRoot.Quest.toObject(message.Quest[keys2[j]], options);
        }
        if (message.Reward && (keys2 = Object.keys(message.Reward)).length) {
            object.Reward = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Reward[keys2[j]] = $excelRoot.Reward.toObject(message.Reward[keys2[j]], options);
        }
        if (message.Shop && (keys2 = Object.keys(message.Shop)).length) {
            object.Shop = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Shop[keys2[j]] = $excelRoot.Shop.toObject(message.Shop[keys2[j]], options);
        }
        if (message.Skill && (keys2 = Object.keys(message.Skill)).length) {
            object.Skill = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Skill[keys2[j]] = $excelRoot.Skill.toObject(message.Skill[keys2[j]], options);
        }
        if (message.Sound && (keys2 = Object.keys(message.Sound)).length) {
            object.Sound = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Sound[keys2[j]] = $excelRoot.Sound.toObject(message.Sound[keys2[j]], options);
        }
        if (message.Unlock && (keys2 = Object.keys(message.Unlock)).length) {
            object.Unlock = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Unlock[keys2[j]] = $excelRoot.Unlock.toObject(message.Unlock[keys2[j]], options);
        }
        if (message.Way && (keys2 = Object.keys(message.Way)).length) {
            object.Way = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Way[keys2[j]] = $excelRoot.Way.toObject(message.Way[keys2[j]], options);
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
window.excelconfig = $excelRoot;
	
var excelconfigSources = {};
window.excelconfigSources = excelconfigSources;
for(var key in excelconfig)
{
    excelconfigSources[key] = excelconfig[key];
}
