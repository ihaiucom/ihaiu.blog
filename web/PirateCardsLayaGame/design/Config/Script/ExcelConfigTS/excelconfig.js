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
$excelRoot.DTRandomMap = (function() {
    function DTRandomMap(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTRandomMap.prototype.Part = 0;
    DTRandomMap.prototype.MapNum = 0;
    DTRandomMap.create = function create(properties) {
        return new DTRandomMap(properties);
    };
    DTRandomMap.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Part != null && message.hasOwnProperty("Part"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Part);
        if (message.MapNum != null && message.hasOwnProperty("MapNum"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.MapNum);
        return writer;
    };
    DTRandomMap.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTRandomMap.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTRandomMap();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Part = reader.int32();
                break;
            case 2:
                message.MapNum = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    DTRandomMap.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTRandomMap.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Part != null && message.hasOwnProperty("Part"))
            if (!$util.isInteger(message.Part))
                return "Part: integer expected";
        if (message.MapNum != null && message.hasOwnProperty("MapNum"))
            if (!$util.isInteger(message.MapNum))
                return "MapNum: integer expected";
        return null;
    };
    DTRandomMap.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTRandomMap)
            return object;
        var message = new $excelRoot.DTRandomMap();
        if (object.Part != null)
            message.Part = object.Part | 0;
        if (object.MapNum != null)
            message.MapNum = object.MapNum | 0;
        return message;
    };
    DTRandomMap.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Part = 0;
            object.MapNum = 0;
        }
        if (message.Part != null && message.hasOwnProperty("Part"))
            object.Part = message.Part;
        if (message.MapNum != null && message.hasOwnProperty("MapNum"))
            object.MapNum = message.MapNum;
        return object;
    };
    DTRandomMap.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTRandomMap;
})();
$excelRoot.DTRewardRate = (function() {
    function DTRewardRate(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTRewardRate.prototype.Rate = 0;
    DTRewardRate.prototype.Rewardid = 0;
    DTRewardRate.create = function create(properties) {
        return new DTRewardRate(properties);
    };
    DTRewardRate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Rate != null && message.hasOwnProperty("Rate"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Rate);
        if (message.Rewardid != null && message.hasOwnProperty("Rewardid"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Rewardid);
        return writer;
    };
    DTRewardRate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTRewardRate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTRewardRate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Rate = reader.int32();
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
    DTRewardRate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTRewardRate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Rate != null && message.hasOwnProperty("Rate"))
            if (!$util.isInteger(message.Rate))
                return "Rate: integer expected";
        if (message.Rewardid != null && message.hasOwnProperty("Rewardid"))
            if (!$util.isInteger(message.Rewardid))
                return "Rewardid: integer expected";
        return null;
    };
    DTRewardRate.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTRewardRate)
            return object;
        var message = new $excelRoot.DTRewardRate();
        if (object.Rate != null)
            message.Rate = object.Rate | 0;
        if (object.Rewardid != null)
            message.Rewardid = object.Rewardid | 0;
        return message;
    };
    DTRewardRate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Rate = 0;
            object.Rewardid = 0;
        }
        if (message.Rate != null && message.hasOwnProperty("Rate"))
            object.Rate = message.Rate;
        if (message.Rewardid != null && message.hasOwnProperty("Rewardid"))
            object.Rewardid = message.Rewardid;
        return object;
    };
    DTRewardRate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTRewardRate;
})();
$excelRoot.DTGashaponReward = (function() {
    function DTGashaponReward(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DTGashaponReward.prototype.Gashaponid = 0;
    DTGashaponReward.prototype.Times = 0;
    DTGashaponReward.prototype.Rewardid = 0;
    DTGashaponReward.create = function create(properties) {
        return new DTGashaponReward(properties);
    };
    DTGashaponReward.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Gashaponid != null && message.hasOwnProperty("Gashaponid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Gashaponid);
        if (message.Times != null && message.hasOwnProperty("Times"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Times);
        if (message.Rewardid != null && message.hasOwnProperty("Rewardid"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Rewardid);
        return writer;
    };
    DTGashaponReward.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DTGashaponReward.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $excelRoot.DTGashaponReward();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Gashaponid = reader.int32();
                break;
            case 2:
                message.Times = reader.int32();
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
    DTGashaponReward.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DTGashaponReward.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Gashaponid != null && message.hasOwnProperty("Gashaponid"))
            if (!$util.isInteger(message.Gashaponid))
                return "Gashaponid: integer expected";
        if (message.Times != null && message.hasOwnProperty("Times"))
            if (!$util.isInteger(message.Times))
                return "Times: integer expected";
        if (message.Rewardid != null && message.hasOwnProperty("Rewardid"))
            if (!$util.isInteger(message.Rewardid))
                return "Rewardid: integer expected";
        return null;
    };
    DTGashaponReward.fromObject = function fromObject(object) {
        if (object instanceof $excelRoot.DTGashaponReward)
            return object;
        var message = new $excelRoot.DTGashaponReward();
        if (object.Gashaponid != null)
            message.Gashaponid = object.Gashaponid | 0;
        if (object.Times != null)
            message.Times = object.Times | 0;
        if (object.Rewardid != null)
            message.Rewardid = object.Rewardid | 0;
        return message;
    };
    DTGashaponReward.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Gashaponid = 0;
            object.Times = 0;
            object.Rewardid = 0;
        }
        if (message.Gashaponid != null && message.hasOwnProperty("Gashaponid"))
            object.Gashaponid = message.Gashaponid;
        if (message.Times != null && message.hasOwnProperty("Times"))
            object.Times = message.Times;
        if (message.Rewardid != null && message.hasOwnProperty("Rewardid"))
            object.Rewardid = message.Rewardid;
        return object;
    };
    DTGashaponReward.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return DTGashaponReward;
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
        return object;
    };
    Global.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Global;
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
        if (message.Loader != null && message.hasOwnProperty("Loader"))
            for (var keys = Object.keys(message.Loader), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Loader.encode(message.Loader[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Menu != null && message.hasOwnProperty("Menu"))
            for (var keys = Object.keys(message.Menu), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Menu.encode(message.Menu[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Msg != null && message.hasOwnProperty("Msg"))
            for (var keys = Object.keys(message.Msg), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $excelRoot.Msg.encode(message.Msg[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.Unlock != null && message.hasOwnProperty("Unlock"))
            for (var keys = Object.keys(message.Unlock), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
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
                if (message.Loader === $util.emptyObject)
                    message.Loader = {};
                key = reader.int32();
                reader.pos++;
                message.Loader[key] = $excelRoot.Loader.decode(reader, reader.uint32());
                break;
            case 3:
                reader.skip().pos++;
                if (message.Menu === $util.emptyObject)
                    message.Menu = {};
                key = reader.int32();
                reader.pos++;
                message.Menu[key] = $excelRoot.Menu.decode(reader, reader.uint32());
                break;
            case 4:
                reader.skip().pos++;
                if (message.Msg === $util.emptyObject)
                    message.Msg = {};
                key = reader.int32();
                reader.pos++;
                message.Msg[key] = $excelRoot.Msg.decode(reader, reader.uint32());
                break;
            case 5:
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
