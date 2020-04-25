function compareVersion(v1, v2) {
  v1 = v1.split('.')
  v2 = v2.split('.')
  const len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i])
    const num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}
window.compareVersion = compareVersion;

(function () {
  'use strict';

  class GameConfig {
    constructor() { }
    static get isMobile() {
      var u = window.navigator.userAgent;
      return u.indexOf("Mobile") > -1;
    }
    static get scaleMode() {
      return Laya.Stage.SCALE_FIXED_AUTO;
    }
    static get scaleX() {
      return Laya.stage.width / this.width;
    }
    static get scaleY() {
      return Laya.stage.height / this.height;
    }
    static init() {
      var reg = Laya.ClassUtils.regClass;
    }
  }
  GameConfig.width = 750;
  GameConfig.height = 1334;
  GameConfig.screenMode = "none";
  GameConfig.alignV = Laya.Stage.ALIGN_TOP;
  GameConfig.alignH = Laya.Stage.ALIGN_CENTER;
  GameConfig.startScene = "test/TestScene.scene";
  GameConfig.sceneRoot = "";
  GameConfig.debug = false;
  GameConfig.stat = false;
  GameConfig.physicsDebug = false;
  GameConfig.exportSceneToJson = true;
  GameConfig.isAntialias = true;
  GameConfig.useWebGL2 = true;
  
  GameConfig.init();


  window.GameConfig = GameConfig;


  class GameMain 
  {
    constructor() 
    {
      if (window["Laya3D"])
        Laya3D.init(GameConfig.width, GameConfig.height);
      else
        Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
      Laya["Physics"] && Laya["Physics"].enable();
      Laya["DebugPanel"] && Laya["DebugPanel"].enable();
      Laya.stage.scaleMode = GameConfig.scaleMode;
      Laya.stage.screenMode = GameConfig.screenMode;
      Laya.stage.alignV = GameConfig.alignV;
      Laya.stage.alignH = GameConfig.alignH;
      Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
      if (window["Laya3D"]) Laya.Shader3D.debugMode = false;
      if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
        Laya["PhysicsDebugDraw"].enable();
      // if (GameConfig.stat)
      //   Laya.Stat.show();
      Laya.alertGlobalError = false;

      VersionConfig.Init();
      LayaExtendClass();
      LayaExtendLogic();
      MiniMainLib.Init();

      this.initLoader();


      // var getShareImage = function()
      // {
      //   var shareImage = 'https://ihaiu.gitee.io/gameweb/PirateCardsLayaGame/diao_share_image.png'

      //   if (window['VersionConfig']) {
      //     shareImage = VersionConfig.ShareImgUrl;
      //   }
      //   return shareImage;
      // }

      // wx.onShareAppMessage(function () {
      //   console.log("onShareAppMessage");
      //   return {
      //     imageUrl: getShareImage() // 图片 URL
      //     // imageUrl: canvas.toTempFilePathSync({
      //     //   destWidth: 750,
      //     //   destHeight: 1334
      //     // })
      //   }
      // })


      // 
    
      // console.log("Int32Array", Int32Array);
      // console.log("BigInt64Array", BigInt64Array);
      // console.log("Laya.WebGL._isWebGL2", Laya.WebGL._isWebGL2);
      // var extensions = Laya.LayaGL.instance.getSupportedExtensions();
      // console.log("getSupportedExtensions:");
      // console.log(extensions);
      // var gl = Laya.LayaGL.instance
      // var halfFloat = gl.getExtension('OES_texture_half_float');
      // console.log(halfFloat);
      // if (halfFloat)
      // {
      //   console.log("halfFloat.HALF_FLOAT_OES", halfFloat.HALF_FLOAT_OES);
      // }
      
    }


    initLoader() {

      let path = "res/sprite/launchlogo.png";

      let system = wx.getSystemInfoSync()
      var sprite = new Laya.Sprite();
      let w = Laya.stage.width;
      let h = Laya.stage.height;
      w = system.screenWidth * 2;
      h = system.screenHeight * 2;


      sprite.graphics.drawRect(0, 0, w, h, '#FFFFFF');
      sprite.graphics.loadImage(path, 0, 0, w, h);
      Laya.stage.addChild(sprite);
      window['launcherInitBG'] = sprite;

    }
  }
  new GameMain();


})();

// 几何世界 "appid": "wx8f6cdf2d4ba80fed",
// 群雄 wxe21ca1f9939efef3
// 完美六六六 wx5fde7c2ab8215f19
// 正式 wx3c1a3e0a9bc61d63

// 1. 优化战斗
// 2. 合并晨阳英雄
// 3. 合并高高资源预加载设置优化
// 4. 合并亚鹏遥感优化