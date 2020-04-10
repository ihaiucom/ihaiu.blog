(function() {
    var config = {
        url: "http://127.0.0.1:5000",
        version: "1.0",
        channel: "mine",
        heartTime: 5000,
    }
    var proto = window.proto;
    var exports = {};
    window.net = exports;
    exports.config = config;
    exports.time = proto.ServerTime.create();
    exports.login_id = 0;
    var now = function(){
        return new Date() / 1000;
    }
    var genGetUrl= function(url){
        url += "?";
        for(var i = 1; i < arguments.length; i++) {
            var args = arguments[i]
            for(var k in args){
                url += k + "=" + ((args[k] == void 0) ? "" : args[k]) + "&";
            }
        }
        return url.substr(0, url.length - 1);
    }


    var TypedSignalHandler = /** @class */ (function () {
        function TypedSignalHandler(handler, self, once) {
            if (once === void 0) { once = false; }
            this._handler = handler;
            this._self = self;
            this._once = once;
        }
        TypedSignalHandler.prototype.apply = function (arg) {
            this._handler.apply(this._self, [arg]);
        };
        TypedSignalHandler.prototype.equals = function (handler, self) {
            return this._handler == handler && this._self == self;
        };
        TypedSignalHandler.prototype.once = function () {
            return this._once;
        };
        return TypedSignalHandler;
    }());
    
    
    var TypedSignal = /** @class */ (function () {
        function TypedSignal() {
            this._listeners = [];
        }
        TypedSignal.prototype.on = function (listener, self) {
            if (!this.hasListener(listener, self)) {
                this._listeners.push(new TypedSignalHandler(listener, self));
            }
        };
        TypedSignal.prototype.onOnce = function (listener, self) {
            if (!this.hasListener(listener, self)) {
                this._listeners.push(new TypedSignalHandler(listener, self, true));
            }
        };
        TypedSignal.prototype.hasListener = function (listener, self) {
            for (var i = 0; i < this._listeners.length; i++) {
                if (this._listeners[i].equals(listener, self)) {
                    return true;
                }
            }
            return false;
        };
        TypedSignal.prototype.off = function (listener, self) {
            for (var i = 0; i < this._listeners.length; i++) {
                if (this._listeners[i].equals(listener, self)) {
                    this._listeners.splice(i, 1);
                    break;
                }
            }
        };
        TypedSignal.prototype.clear = function () {
            this._listeners.length = 0;
        };
        TypedSignal.prototype.emit = function (value) {
            this._listeners.forEach(function (handler) { return handler.apply(value); });
            this._listeners = this._listeners.filter(function (handler, i, arr) { return !handler.once(); });
        };
        return TypedSignal;
    }());

    var _EventDispatch = TypedSignal;



    // var _EventDispatch = function(){
    //     this._listeners = [];
    //     this.on = function(callback){
    //         this._listeners.push(callback);
    //     }
    //     this.off = function(callback){
    //         var i = this._listeners.indexOf(callback);
    //         if(i > -1) {
    //             this._listeners.splice(i, 1);
    //         }
    //     }
    //     this.emit = function(arg){
    //         for(var j = 0,len = this._listeners.length; j < len; j++){
    //             this._listeners[j](arg);
    //         }
    //     }
    //     this.clear = function() {
    //         this._listeners = []
    //     }
    // }



    var _httpGet = function(url, callback){
        var xhr = new XMLHttpRequest();
        var json = {error: 45, errstr: "http net failed"};
        xhr.onreadystatechange = function (){
            var ok = xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400);
            if(ok) {
                // console.log(config.url + url, xhr.responseText);
                json = JSON.parse(xhr.responseText);
                ok = json.error == 0;
                if(callback != void 0) {
                    callback(ok, json, xhr);
                }
            } else if(xhr.readyState == 4) {
                callback(false, json);
            }
        };
        xhr.open("GET", encodeURI(config.url + url), true);
        xhr.send();
    }
    
    var logIgnores = {};
    logIgnores["ServerTimeS2C"] = true;
    logIgnores["ServerTimeC2S"] = true;
    
    logIgnores["GamerPVPSyncC2S"] = true;
    logIgnores["GamerNotifyPVPSyncS2C"] = true;

    var C2S = function(name, args) {
        var pb = proto;
        var c2s = pb.C2S.create();
        var fname = name.substring(0,1).toLowerCase()+name.substring(1);
        var pb = pb[name].create();
        c2s[fname] = pb;

        if(name == "GamerPVPSyncC2S" || name == "GamerPVPLoadingC2S") {
            c2s.key = args["session"]
        }

        pb.id = exports.login_id;

        pb.send = function () {
            if(!logIgnores[name])
                console.log("***************c->s: " + name + "  args: ", args);

            var pb = proto;
            var buf  = pb.C2S.encode(c2s).finish();
            // 抛出发送消息时刻，用于检查超时
            exports.logic.onSendTime.emit();
            exports.logic._ws.send(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
        }
        if(args == void 0) {
            return pb;
        } else {
            for(var k in args){
                pb[k] = args[k];
            }
            pb.send();
        }
    }

    exports.C2S = C2S;
    exports._EventDispatch = _EventDispatch;
    var _dispatchS2C = function(buf){
        // 抛出响应消息时刻，用于检查超时
        exports.logic.onResponseTime.emit();
        var pb = proto;
        var s2c = pb.S2C.decode(buf);
        if(s2c.key == ""){
            for(var k in exports.logic){
                if(s2c[k] != null){
                    s2c.key = k;
                    break;
                }
            }
        }
        if(s2c.key != "") {
            var msgName = s2c.key.substring(0,1).toUpperCase()+s2c.key.substring(1);
            s2c.key = s2c.key.substring(0,1).toLowerCase()+s2c.key.substring(1);
            var pbs2c = s2c[s2c.key];
            if(pbs2c.error == 0) {
                if(s2c.key == "gamerLoginS2C"){
                    exports.logic._session = pbs2c.main.session;
                } else if(s2c.key == "serverTimeS2C" || s2c.key == "gamerLoginGetDataS2C"){
                    exports.time = pbs2c.time;
                    if(s2c.key == "serverTimeS2C"){
                        exports.logic.ping = Math.round((now() - exports.logic._lastPingSend) * 1000);
                    }
                } else if(s2c.key == "gamerNotifyLoginOtherS2C"){
                    exports.logic._session = "";
                }
            }

            
            if(!logIgnores[msgName])
                console.log("***************s->c: " +s2c.key+ JSON.stringify(pbs2c));

            if(s2c.error == 0) 
            {
           
                var handler = Game.protoHandler[msgName];
                if(handler  !== void 0 && handler != null)
                {
                    handler(pbs2c);
                }

            }
            

            var dispatch = exports.logic[s2c.key];
            if(dispatch !== void 0 && dispatch != null)
            {
                dispatch.emit(pbs2c);
            }

        }
        if(s2c.error > 0){
            if(s2c.error == 2001 || s2c.error == 2003 || s2c.error == 2004) {
                exports.logic._session = "";
            }
            exports.logic.onError.emit(s2c.error);
        }
    }
    exports.auth = {
        config: function(callback){
            _httpGet(genGetUrl("/config"), callback);
        },
        register: function(name, passwd, callback){
            _httpGet(genGetUrl("/register", {channel:"mine", name:name, passwd:passwd}), callback);
        },
        login: function(name, passwd, callback) {
            _httpGet(genGetUrl("/login", {channel:config.channel, name:name, passwd:passwd}), callback);
        },
        checkcdk: function(session, cdk, callback) {
            _httpGet(genGetUrl("/checkcdk", {session:session, cdk:cdk}), callback);
        },
        checkIDCard: function(session, name, idCard, callback) {
            _httpGet(genGetUrl("/checkIDCard", {session:session, name:name, idCard:idCard}), callback);
        },
        areas: function(callback) {
            _httpGet(genGetUrl("/areas"), callback);
        },
        newRole: function(session, name, type, server, avatar, callback) {
            _httpGet(genGetUrl("/newrole", {session:session, name:name, type:type, server:server, avatar:avatar}), callback);
        },
        useRole: function(session, id, callback) {
            exports.login_id = id;
            exports.logic._session = "";
            _httpGet(genGetUrl("/userole", {session:session, id:id}), function(ok, json, xhr){
                if(ok){
                    exports.logic._compress = json.server.compress;
                    if(config.url.indexOf("http://") == 0) {
                        exports.logic._addr = config.url.replace("http:", "ws:") + "/proxy";
                    } else if(config.url.indexOf("https://") == 0) {
                        exports.logic._addr = config.url.replace("https:", "wss:") + "/proxy";
                    }
                }
                callback(ok, json, xhr);
            });
        },
        fastLogin: function(name, channel, openid, callback) {
            _httpGet(genGetUrl("/fastlogin", {name:name, channel:channel, openid:openid}), function(ok, json, xhr){
                if(ok){
                    exports.login_id = json.roleId;
                    exports.logic._session = "";
                    exports.logic._compress = json.server.compress;
                    if(config.url.indexOf("http://") == 0) {
                        exports.logic._addr = config.url.replace("http:", "ws:") + "/proxy";
                    } else if(config.url.indexOf("https://") == 0) {
                        exports.logic._addr = config.url.replace("https:", "wss:") + "/proxy";
                    }
                }
                callback(ok, json, xhr);
            });
        },
        newAndUseRole: function(session, name, type, server, avatar, callback){
            var self = this;
            this.newRole(session, name, type, server, avatar, function(ok, json){
                ok ? self.useRole(json.session, json.roles[0].id, callback) : callback(ok, json);
            })
        },
        mineLogin: function(name, passwd, roleName, type, server, callback){
            var self = this;
            self.login(name, passwd, function(ok, json){
                ok ? (json.roles == null ? self.newAndUseRole(json.session, roleName, type, server, "", callback) : self.useRole(json.session, json.roles[0].id, callback)) :
                    json.error != 1003 ? callback(ok, json) : self.register(name, passwd, function(ok, json) {
                        ok ? self.newAndUseRole(json.session, name, type, server, "", callback) : callback(ok, json);
                    });
            });
        },
        mineLogin2: function(name, passwd, callback){
            var self = this;
            self.login(name, passwd, function(ok, json){
                ok ? callback(ok, json) : json.error != 1003 ? callback(ok, json) : self.register(name, passwd, function(ok, json){
                    ok ? self.login(name, passwd, callback) : callback(ok, json);
                });
            });
        },

        sdkLogin: function(name, passwd, roleName, type, server, avatar, callback){
            var self = this;
            self.login(name, passwd, function(ok, json){
                ok ? (json.roles == null ? self.newAndUseRole(json.session, roleName, type, server, avatar, callback) : self.useRole(json.session, json.roles[0].id, callback)) :
                    callback(ok, json);
            });
        },

        sdkLogin2: function(name, passwd, callback){
            var self = this;
            self.login(name, passwd, function(ok, json){
                callback(ok, json);
            });
        }
    }

    exports.logic = {
        _addr: "",
        _ws: null,
        _session:"",
        _lastConnect:0,
        _heart:null,
        _compress:false,
        _lastPingSend:0,
        ping:50,
        connect: function(addr){
            this._lastConnect = now();
            if(addr != void 0) {
                this._addr = addr;
            }
            console.log("connect to addr:", this._addr, " session:", this._session);
            if(this._ws != null){
                this._ws.onerror = function(){}
                this._ws.onclose = function(){}
                this._ws.close();
                this._ws = null;
            }
            var onopen = function(){
                clearInterval(this._heart);
                this._heart = setInterval(function(){
                    this.serverTimeC2S();
                    this._lastPingSend = now();
                }.bind(this), config.heartTime);
                this.gamerLoginC2S(this._session);
                console.log("connect to addr:", this._addr, " ok session:", this._session);
                this.onConnect.emit();
            }.bind(this);
            var onmessage = function(e){
                if(e.data instanceof ArrayBuffer){
                    var data = new Uint8Array(e.data, e.data.byteOffset, e.data.byteLength);
                    _dispatchS2C(exports.logic._compress ? pako.inflate(data) : data);
                } else if (e.data instanceof Blob) {
                    var reader = new FileReader();
                    reader.readAsArrayBuffer(e.data);
                    reader.onload = function(evt){
                        if(evt.target.readyState == FileReader.DONE){
                            var data = new Uint8Array(evt.target.result)
                            _dispatchS2C(exports.logic._compress ? pako.inflate(data) : data);
                        }
                    }
                }
            };
            var onclose = function(e){
                console.log("onclose", e);
                clearInterval(this._heart);
                console.log("reconnect to addr:", this._addr, " session:", this._session);
                if(this._addr == "" || this._session == ""){
                    this.onClose.emit();
                } else {
                    this.onReconnect.emit();
                    if(now() - this._lastConnect >= 1){
                        this.connect();
                    }
                    this._heart = setInterval(function(){
                        this.onReconnect.emit();
                        this.connect();
                    }.bind(this), 1000);
                }
            }.bind(this);
            var onerror = function(e){
                console.log("onerror", e);
                this.onConnectError.emit();
                onclose();
            }.bind(this);

            this._ws = new WebSocket(this._addr);
            this._ws.binaryType="arraybuffer";
            this._ws.onopen = onopen;
            this._ws.onmessage = onmessage;
            this._ws.onerror = onerror;
            this._ws.onclose = onclose;
        },
        onError: new _EventDispatch(),
        onConnect:  new _EventDispatch(),
        onClose:  new _EventDispatch(),
        onReconnect: new _EventDispatch(),
        onConnectError: new _EventDispatch(),
        onSendTime: new _EventDispatch(),
        onResponseTime: new _EventDispatch(),


}})()


var protoSources = {};
window.protoSources = protoSources;
for(var key in proto)
{
    protoSources[key] = proto[key];
}
