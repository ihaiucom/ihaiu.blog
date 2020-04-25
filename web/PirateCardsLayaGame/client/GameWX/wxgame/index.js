window.screenOrientation = "sensor_landscape",
loadLib("libs/laya.core.js"),
  // loadLib("libs/laya.d3.js"),
// loadLib("libs/laya.html.js"),
  // loadLib("libs/laya.ani.js"),
  loadLib("libs/laya.wxmini2.js"),




loadLib("libs/fairygui/rawinflate.min.js"),
loadLib("libs/fairygui/fairygui.js"),



loadLib('VersionConfig.js'),
loadLib("libs/game/LayaExtend.js"),
loadLib("libs/game/GameCommonLib.js"),
loadLib("libs/game/StringExtend.js"),
loadLib("libs/game/engine-adapter-laya.js"),
loadLib("libs/game/FguiExtend.js");
// loadLib("libs/game/gpuskinning.js");
// loadLib("libs/game/MeshText.js");



// 扩展 -- zip
// loadLib("libs/zip/jszip.js");
// loadLib("libs/zip/zip.js");

// 网络协议
// require("libs/AntFrame/Net/pako.js"),
require("libs/AntFrame/Net/protobuf.js"),
// require("libs/AntFrame/Net/proto.js"),
// require("libs/AntFrame/Net/net.js"),
// require("libs/AntFrame/Net/netproto.js"),

  window.Parser = require("./libs/dom/dom_parser");
  loadLib("main.js");

function initTimeLog()
{

  console.time = function (tag) 
  {
    var timeMap = console['_timeMap'];
    if (!timeMap) {
      console['_timeMap'] = timeMap = new Map();
    }

    timeMap.set(tag, new Date().getTime());

  }


  console.timeEnd = function (tag) 
  {
    var timeMap = console['_timeMap'];
    if (!timeMap) {
      console['_timeMap'] = timeMap = new Map();
    }

    var begin = timeMap.get(tag);
    if (begin) 
    {
      console.log(`${tag}: ${new Date().getTime() - begin}ms`);
    }

  }
}

initTimeLog();


function loadSubpackage()
{
  const loadTask = wx.loadSubpackage({
    name: 'GameMain', // name 可以填 name 或者 root
    success: function (res) 
    {
      // 分包加载成功后通过 success 回调
      console.log("分包加载成功后");

    },
    fail: function (res) 
    {
      // 分包加载失败通过 fail 回调
      console.log("分包加载失败");
    }
  });

  loadTask.onProgressUpdate(res => {
    // console.log('下载进度', res.progress)
    // console.log('已经下载的数据长度', res.totalBytesWritten)
    // console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
  })
}

loadSubpackage();


