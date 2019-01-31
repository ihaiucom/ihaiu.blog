"use strict";
var gl;
function main() {
    console.log("main");
    var canvas = document.getElementById("gameCanvas");
    // 初始化上下文
    gl = canvas.getContext("webgl");
    // 初始化视窗大小
    gl.viewport(0, 0, canvas.clientWidth, canvas.clientHeight);
    // 设置绘制背景颜色
    gl.clearColor(127 / 255, 0, 0, 1.0);
    // 绘制背景颜色
    gl.clear(gl.COLOR_BUFFER_BIT);
}
