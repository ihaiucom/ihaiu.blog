

// 战斗配置
require("libs/pbconfig/pbconfig.js"),
require("libs/pbconfig/pbconfig-extends.js"),

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
