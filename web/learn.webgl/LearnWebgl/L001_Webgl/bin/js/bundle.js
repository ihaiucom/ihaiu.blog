(function () {
    'use strict';

    class Resource {
        static Load(url, callback, callobject) {
            var http = new XMLHttpRequest();
            http.open("get", url, true);
            http.onerror = function (e) {
                console.error("加载error", e, url);
            };
            http.onabort = function (e) {
                console.warn("加载中止", e, url);
            };
            http.onprogress = function (e) {
            };
            http.onload = function (e) {
                var status = http.status !== undefined ? http.status : 200;
                if (status === 200 || status === 204 || status === 0) {
                    var data = http.response || http.responseText;
                    if (callobject) {
                        callback.call(callobject, data);
                    }
                    else {
                        callback(data);
                    }
                }
                else {
                    console.error("[" + http.status + "]" + http.statusText + ":" + http.responseURL);
                }
            };
            http.send();
        }
        static async LoadAsync(url) {
            return new Promise((resole) => {
                this.Load(url, (data) => {
                    resole(data);
                });
            });
        }
        static async LoadShaderAsync(url) {
            var code = await this.LoadAsync(url);
            code = code.replace(/\r/g, "");
            return code;
        }
    }

    var canvas;
    var gl;
    var program;
    var width = 500;
    var height = 300;
    function createCanvas() {
        canvas = document.createElement("canvas");
        var style = canvas.style;
        style.backgroundColor = "#000000";
        canvas.width = width;
        canvas.height = height;
        gl = canvas.getContext("webgl");
        document.body.appendChild(canvas);
        window['gl'] = gl;
        window['canvas'] = canvas;
    }
    function resetSize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    function createShader(gl, type, shaderCode) {
        var shader = gl.createShader(type);
        gl.shaderSource(shader, shaderCode);
        gl.compileShader(shader);
        var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (success) {
            return shader;
        }
        console.error("编译Shader出错", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    function createProgram(gl, vs, fs) {
        var program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);
        var success = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (success) {
            return program;
        }
        console.error("WebGLProgram出错", gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return null;
    }
    function randomInit(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    function setTriangle(gl) {
        var w = randomInit(100, width * 0.3);
        var h = randomInit(100, height * 0.3);
        var x = randomInit(0, width - w);
        var y = randomInit(0, height - h);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            x + randomInit(10, w), y + randomInit(10, h),
            x + randomInit(10, w), y + randomInit(10, h),
            x + randomInit(10, w), y + randomInit(10, h)
        ]), gl.STATIC_DRAW);
    }
    async function main() {
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
        var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
        var resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
        var colorUniformLocation = gl.getUniformLocation(program, "u_color");
        var bufferData = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, bufferData);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexs), gl.STATIC_DRAW);
        var speed = 0.01;
        var val = 0;
        var loop = () => {
            for (var i = 0; i < vertexs.length; i += 2) {
                vertexs[i] += speed;
            }
            val += speed;
            if (val > 0.5 || val < 0.5) {
                speed *= -1;
            }
            resetSize();
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.useProgram(program);
            var size = 2;
            var type = gl.FLOAT;
            var normalize = false;
            var stride = 0;
            var offset = 0;
            gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
            gl.enableVertexAttribArray(positionAttributeLocation);
            gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);
            for (var i = 0; i < 5; i++) {
                setTriangle(gl);
                gl.drawArrays(gl.TRIANGLES, 0, vertexs.length / 2);
                gl.uniform4f(colorUniformLocation, Math.random(), Math.random(), Math.random(), Math.random());
            }
            requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
    }
    main();

}());
//# sourceMappingURL=bundle.js.map
