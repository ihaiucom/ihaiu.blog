function lx()
{
    var gl: WebGLRenderingContext;
    var vertexShader:WebGLShader;
    var fragmentShader:WebGLShader;
    function init()
    {
        // 初始化上下文
        var canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("gameCanvas");
        gl = canvas.getContext("webgl");
        gl.viewport(0, 0, canvas.clientWidth, canvas.clientHeight);

        // 创建shader程序
        vertexShader = gl.createShader(gl.VERTEX_SHADER);
        fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

        // shader代码
        var vertexCode = 
        `
            attribute vec3 position;
            void main(void)
            {
                gl_Position = vec4(position, 0);
            }
        `;

        var fragmentCode =
        `
            void main(void)
            {
                gl_FragColor = vec4(0.9, 0, 0, 1)
            }
        `;

        gl.shaderSource(vertexShader, vertexCode);
        gl.shaderSource(fragmentShader, fragmentCode);

        // 编译shader
        gl.compileShader(vertexShader);
        gl.compileShader(fragmentShader);

        var status = gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS);
        if(!status)
        {
            alert("error: vertexShader");
            return;
        }

        status = gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS);
        if(!status)
        {
            alert("error: fragmentShader");
            return;
        }

        // 创建程序
        var program = gl.createProgram();
        // 给程序附加shader
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);

        // 绑定 shader变量
        var positionIndex = 0;
        gl.bindAttribLocation(program, positionIndex, "position");

        // 链接程序
        gl.linkProgram(program);

        status = gl.getProgramParameter(program, gl.LINK_STATUS);
        if(!status)
        {
            alert("error: program");
            return;
        }

        // 使用程序
        gl.useProgram(program);

        // 创建顶点缓冲
        var vertexs = [
            // x        y       z
            0.5,        0.5,    0, // 右上角
            -0.5,       0.5,    0, // 左上角
            -0.5,       -0.5,   0   // 左下角
        ];

        var vextexBuff = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vextexBuff);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexs), gl.STATIC_DRAW);


        // 绘制背景
        gl.clearColor(0.9, 0.9, 0.9, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);



    }
}