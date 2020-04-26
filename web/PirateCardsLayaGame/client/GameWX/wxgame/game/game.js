

// 战斗配置
// require("libs/pbconfig/pbconfig.js"),
// require("libs/pbconfig/pbconfig-extends.js"),

// Excel PB配置
require("libs/pbconfig/excelconfig.js"),

require('js/bundle.js');


// 设置屏幕常亮
wx.setKeepScreenOn && wx.setKeepScreenOn({
  keepScreenOn: true,
  success: function () {
    console.log("常亮设置成功！!!!");
  }
});

// require('testFile.js');

setTimeout(()=>{

  Laya.loader.load(["res/atlas/test.atlas"], Laya.Handler.create(null, function () {
    //加载完成
    //使用接口将图集透传到子域
    Laya.MiniAdpter.sendAtlasToOpenDataContext("res/atlas/test.atlas");
    showShareCanvas();
  }));
}, 5000);

 //显示子域
function showShareCanvas() {
  Laya.timer.frameLoop(1, this, function () {

    // var openDataContext = wx.getOpenDataContext()
    // var sharedCanvas = openDataContext.canvas
    // sharedCanvas.width = 640
    // sharedCanvas.height = 1136
    // console.log("sharedCanvas", sharedCanvas);


    var bitmap= new Laya.Texture2D();
    bitmap.loadImageSource(sharedCanvas);

    console.log("bitmap", bitmap.width, bitmap.height);
    var texture = new Laya.Texture(bitmap);

    // console.log("texture", texture);
    var sprite = new Laya.Sprite();
    sprite.zOrder = 1008;
    sprite.pos(100, 100);
    // var texture = window['sharedCanvas'].getTexture();
    // texture.bitmap.alwaysChange = true;//小程序使用，非常费
    // sprite.graphics.drawCircle(0, 0, 100, "#FF0000")
    sprite.graphics.drawImage(texture, 0, 0, texture.width, texture.height);
    // sprite.graphics.dr
    Laya.stage.addChild(sprite);
  })
}

// showShareCanvas();