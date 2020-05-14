import { Engine } from "./engine/Engine";
import { Shader } from "./engine/resource/Shader";

var canvas: HTMLCanvasElement;
var gl:WebGLRenderingContext;

var vertexShaderSource: string;
var fragmentShaderSource: string;

var vertexShader: WebGLShader;
var fragmentShader: WebGLShader;

var program:WebGLProgram;

function createCanvas()
{
    canvas = document.createElement("canvas");
    var style: any = canvas.style;
    style.position = 'absolute';
    style.top = style.left = "0px";
    style.background = "#000000";
    canvas.width = 500;
    canvas.height = 400;
    gl = canvas.getContext("webgl");
    document.body.appendChild(canvas);
}

// 创建着色器方法，输入参数：渲染上下文，着色器类型，数据源
function createShader(gl:WebGLRenderingContext, type: GLenum, source: string) : WebGLShader
{
    var shader: WebGLShader = gl.createShader(type); // 创建着色器对象
    gl.shaderSource(shader, source); // 提供数据源
    gl.compileShader(shader); // 编译 -> 生成着色器
    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
      return shader;
    }
   
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
}

function createProgram(gl: WebGLRenderingContext, vertextShader: WebGLShader, fragmentShader: WebGLShader)
{
    var program:WebGLProgram = gl.createProgram();
    gl.attachShader(program, vertextShader);
    gl.attachShader(program, fragmentShader);

    gl.linkProgram(program);
    var success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if(success)
    {
        return program;
    }
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
}


async function LoadShaderAsync()
{
    var shader = await Shader.LoadAsync("res/shader/Hello.vs");
    vertexShaderSource = shader.code;

    
    var shader = await Shader.LoadAsync("res/shader/Hello.fs");
    fragmentShaderSource = shader.code;
}

async function main()
{
    Engine.init(750, 1334);
    await LoadShaderAsync();

    createCanvas();
    vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    program = createProgram(gl, vertexShader, fragmentShader);


    // 获取顶点属性 地址
    var positionAttributeLocation : GLint = gl.getAttribLocation(program, "a_position");

    // 创建一个缓冲 
    var positionBuffer : WebGLBuffer = gl.createBuffer();
    // 首先绑定一个数据源到绑定点，然后可以引用绑定点指向该数据源。 所以让我们来绑定位置信息缓冲（下面的绑定点就是ARRAY_BUFFER）
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // 现在我们需要通过绑定点向缓冲中存放数据
    var vertexDatas = [
        0, 0,
        0, 0.5,
        0.7, 0 
    ];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexDatas), gl.STATIC_DRAW);

    // 接下来的代码是渲染代码，而这些代码将在我们每次要渲染或者绘制时执行。
    function loop()
    {
        // 这样就告诉WebGL裁剪空间的 -1 -> +1 分别对应到x轴的 0 -> gl.canvas.width 和y轴的 0 -> gl.canvas.height。
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        // 我们用0, 0, 0, 0清空画布，分别对应 r, g, b, alpha （红，绿，蓝，阿尔法）值， 所以在这个例子中我们让画布变透明了。
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        // 告诉它用我们之前写好的着色程序（一个着色器对）
        gl.useProgram(program);
        // 接下来我们需要告诉WebGL怎么从我们之前准备的缓冲中获取数据给着色器中的属性。 首先我们需要启用对应属性
        gl.enableVertexAttribArray(positionAttributeLocation);
        
        // 将绑定点绑定到缓冲数据（positionBuffer）
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

        var size = 2;          // 每次迭代运行提取两个单位数据
        var type = gl.FLOAT;   // 每个单位的数据类型是32位浮点型
        var normalize = false; // 不需要归一化数据
        var stride = 0;        // 0 = 移动单位数量 * 每个单位占用内存（sizeof(type)）
                               // 每次迭代运行运动多少内存到下一个数据开始点
        var offset = 0;        // 从缓冲起始位置开始读取
        gl.vertexAttribPointer( positionAttributeLocation, size, type, normalize, stride, offset);

        var primitiveType = gl.TRIANGLES;
        var offset = 0;
        var count = 3;
        gl.drawArrays(primitiveType, offset, count);

    }
    // loop();

    requestAnimationFrame(loop);

}

main();

        