"use strict";
// webgl上下文
var gl;
// 顶点shader
var vertexShaderObject;
// 面片shader
var fragmentShaderObject;
// 执行程序
var programObject;
// 顶点缓冲
var triangleBuffer;
// shader属性 顶点位置引用
var positionIndex = 0;
function main() {
    setTimeout(function () {
        draw();
    }, 1000);
}
function draw() {
    console.log("draw");
    var canvas = document.getElementById("gameCanvas");
    // 初始化上下文
    gl = canvas.getContext("webgl");
    // 初始化视窗大小
    gl.viewport(0, 0, canvas.clientWidth, canvas.clientHeight);
    // 创建 顶点shader对象
    vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
    // 创建 面片shader对象
    fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
    // 设置shader代码
    gl.shaderSource(vertexShaderObject, getShaderSource("shader-vs"));
    gl.shaderSource(fragmentShaderObject, getShaderSource("shader-fs"));
    // 编译shader
    gl.compileShader(vertexShaderObject);
    gl.compileShader(fragmentShaderObject);
    // 检查shader编译状态
    if (!gl.getShaderParameter(vertexShaderObject, gl.COMPILE_STATUS)) {
        alert("error: vetexShaderObject");
        return;
    }
    if (!gl.getShaderParameter(fragmentShaderObject, gl.COMPILE_STATUS)) {
        alert("error: fragmentShaderObject");
        return;
    }
    // 创建渲染程序
    programObject = gl.createProgram();
    // 设置渲染程序shader
    gl.attachShader(programObject, vertexShaderObject);
    gl.attachShader(programObject, fragmentShaderObject);
    // 绑定shader属性
    gl.bindAttribLocation(programObject, positionIndex, "position");
    // 链接渲染程序
    gl.linkProgram(programObject);
    // 检查渲染程序链接状态
    if (!gl.getProgramParameter(programObject, gl.LINK_STATUS)) {
        alert("error: programObject");
        return;
    }
    // 使用渲染程序
    gl.useProgram(programObject);
    // 顶点数据
    var jsArrayData = [
        0.0, 1.0, 0.0,
        -1.0, -1.0, 0.0,
        1.0, -1.0, 0.0
    ];
    // 创建顶点缓冲
    triangleBuffer = gl.createBuffer();
    // 设置当前要处理的顶点缓冲
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleBuffer);
    // 给顶点缓冲赋值数据
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(jsArrayData), gl.STATIC_DRAW);
    // 设置绘制背景颜色
    gl.clearColor(0.9, 0.9, 0, 1.0);
    // 绘制背景颜色
    gl.clear(gl.COLOR_BUFFER_BIT);
    // 设置当前要处理的顶点缓冲
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleBuffer);
    // 设置顶点shader属性
    gl.enableVertexAttribArray(positionIndex);
    // 给顶点shader的属性变量赋值
    gl.vertexAttribPointer(positionIndex, 3, gl.FLOAT, false, 0, 0);
    // 绘制 三角面
    gl.drawArrays(gl.TRIANGLES, 0, 3);
}
function getShaderSource(scriptId) {
    var shaderScript = document.getElementById(scriptId);
    if (shaderScript == null)
        return "";
    var sourceCode = "";
    var child = shaderScript.firstChild;
    while (child) {
        if (child.nodeType == child.TEXT_NODE)
            sourceCode += child.textContent;
        child = child.nextSibling;
    }
    return sourceCode;
}
