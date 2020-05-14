import { Resource } from "./Resource";

var canvas: HTMLCanvasElement;
var gl: WebGLRenderingContext;
var program: WebGLProgram;

var width = 500;
var height = 300;

function createCanvas()
{
    canvas = document.createElement("canvas");
    var style:CSSStyleDeclaration = canvas.style;
    style.backgroundColor = "#000000";
    // style.width = width + "px";
    // style.height = height + "px";
    canvas.width = width;
    canvas.height = height;
    gl = canvas.getContext("webgl");
    document.body.appendChild(canvas);
    
    window['gl'] = gl;
    window['canvas'] = canvas;
}

function resetSize()
{
    width = window.innerWidth;
    height = window.innerHeight;
    
    // var style:CSSStyleDeclaration = canvas.style;
    // style.width = width + "px";
    // style.height = height + "px";

    canvas.width = width;
    canvas.height = height;
    // console.log(width, canvas.width)
}

function createShader(gl: WebGLRenderingContext, type: GLenum, shaderCode: string): WebGLShader
{
    var shader:WebGLShader = gl.createShader(type);
    gl.shaderSource(shader, shaderCode);
    gl.compileShader(shader);
    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if(success)
    {
        return shader;
    }

    console.error("编译Shader出错", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
}


function createProgram(gl: WebGLRenderingContext, vs:WebGLShader, fs: WebGLShader):WebGLProgram
{
    var program:WebGLProgram = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    var success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if(success)
    {
        return program;
    }

    console.error("WebGLProgram出错", gl.getProgramInfoLog(program));
    gl.deleteProgram(program);

    return null;
}

function randomInit(min: number, max: number)
{
    return Math.floor(Math.random() * (max - min) + min);
}

function setTriangle(gl: WebGLRenderingContext)
{
    var w = randomInit(100, width * 0.3);
    var h = randomInit(100, height * 0.3);
    var x = randomInit(0, width - w);
    var y = randomInit(0, height - h);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        x + randomInit(10, w), y + randomInit(10, h),
        x + randomInit(10, w), y + randomInit(10, h),
        x + randomInit(10, w), y + randomInit(10, h)
    ]), gl.STATIC_DRAW)
}


async function main()
{
    var vsCode = await Resource.LoadShaderAsync("res/shader/Screen.vs");
    var fsCode = await Resource.LoadShaderAsync("res/shader/ScreenNormalize.fs");

    createCanvas();
    var vs = createShader(gl, gl.VERTEX_SHADER, vsCode);
    var fs = createShader(gl, gl.FRAGMENT_SHADER, fsCode);
    program = createProgram(gl, vs, fs);

    var vertexs = [
        0, 0.0,
        200, 0.0,
        0.0, 200
    ];

    var positionAttributeLocation:GLint = gl.getAttribLocation(program, "a_position");
    var resolutionUniformLocation:WebGLUniformLocation = gl.getUniformLocation(program, "u_resolution");
    var colorUniformLocation: WebGLUniformLocation = gl.getUniformLocation(program, "u_color");
    var bufferData:WebGLBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferData);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexs), gl.STATIC_DRAW);


    var speed = 0.01;
    var val = 0;
    var loop = ()=>
    {
        for(var i = 0; i < vertexs.length; i += 2)
        {
            vertexs[i] += speed; 
        }
        val += speed;
        if(val > 0.5 || val < 0.5)
        {
            speed *= -1;
        }
        resetSize();
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.useProgram(program);
        // gl.bindBuffer(gl.ARRAY_BUFFER, bufferData);
        var size = 2;          // 每次迭代运行提取两个单位数据
        var type = gl.FLOAT;   // 每个单位的数据类型是32位浮点型
        var normalize = false; // 不需要归一化数据
        var stride = 0;        // 0 = 移动单位数量 * 每个单位占用内存（sizeof(type)）
                               // 每次迭代运行运动多少内存到下一个数据开始点
        var offset = 0;        // 从缓冲起始位置开始读取

        
        gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);

        gl.enableVertexAttribArray(positionAttributeLocation);
        gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

        for(var i = 0; i < 5; i ++)
        {
            setTriangle(gl);

            gl.drawArrays(gl.TRIANGLES, 0, vertexs.length / 2);
            gl.uniform4f(colorUniformLocation, Math.random(), Math.random(), Math.random(), Math.random());
        }



        
        requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);


}

main();