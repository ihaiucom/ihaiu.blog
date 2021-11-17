(function () {
    'use strict';

    var Scene = Laya.Scene;
    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var test;
        (function (test) {
            class TestSceneUI extends Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("test/TestScene");
                }
            }
            test.TestSceneUI = TestSceneUI;
            REG("ui.test.TestSceneUI", TestSceneUI);
        })(test = ui.test || (ui.test = {}));
    })(ui || (ui = {}));

    class GameUI extends ui.test.TestSceneUI {
        constructor() {
            super();
            var scene = Laya.stage.addChild(new Laya.Scene3D());
            var camera = (scene.addChild(new Laya.Camera(0, 0.1, 100)));
            camera.transform.translate(new Laya.Vector3(0, 3, 3));
            camera.transform.rotate(new Laya.Vector3(-30, 0, 0), true, false);
            var directionLight = scene.addChild(new Laya.DirectionLight());
            directionLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
            directionLight.transform.worldMatrix.setForward(new Laya.Vector3(1, -1, 0));
            var box = scene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(1, 1, 1)));
            box.transform.rotate(new Laya.Vector3(0, 45, 0), false, false);
            var material = new Laya.BlinnPhongMaterial();
            Laya.Texture2D.load("res/layabox.png", Laya.Handler.create(null, function (tex) {
                material.albedoTexture = tex;
            }));
            box.meshRenderer.material = material;
        }
    }

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("script/GameUI.ts", GameUI);
        }
    }
    GameConfig.width = 640;
    GameConfig.height = 1136;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "test/TestScene.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = true;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    var Vector3 = Laya.Vector3;
    class TestScene extends Laya.Scene3D {
        static create() {
            let node = new TestScene();
            node.name = "WarScene";
            let scene = node;
            scene.init();
            return scene;
        }
        init() {
            window['warScene'] = this;
            this.initCamera();
        }
        initCamera() {
            var cameraRootNode = new Laya.Sprite3D("CameraRoot");
            var cameraRotationXNode = new Laya.Sprite3D("CameraRotationX");
            var camera = new Laya.Camera(0, 0.1, 1000);
            var screenLayer = new Laya.Sprite3D("ScreenLayer");
            cameraRootNode.addChild(cameraRotationXNode);
            cameraRotationXNode.addChild(camera);
            camera.addChild(screenLayer);
            cameraRotationXNode.transform.localRotationEulerX = -20;
            camera.transform.localPosition = new Vector3(0, 0, 10);
            camera.clearColor = new Laya.Vector4(0.2, 0.5, 0.8, 1);
            camera.orthographic = true;
            camera.orthographicVerticalSize = 2.6;
            camera.farPlane = 2000;
            this.camera = camera;
            this.cameraNode = cameraRootNode;
            this.screen3DLayer = screenLayer;
            let directionLight = this.addChild(new Laya.DirectionLight());
            directionLight.color = new Laya.Vector3(1, 1.0, 1.0);
            this.lightRotaitonSrc = directionLight.transform.localRotationEuler = new Laya.Vector3(-45, 80, 0);
            this.directionLight = directionLight;
            directionLight.transform.rotationEuler = new Laya.Vector3(-20, 20, 0);
            this.addChild(cameraRootNode);
            this.addChild(directionLight);
        }
        RotationTarget(rotationTarget) {
            this.rotationTarget = rotationTarget;
            this.lightRotaitonStop();
            this.lightRotaitonStart();
        }
        lightRotaitonStart() {
            this.lightRotaiton = this.rotationTarget.transform.localRotationEuler;
            Laya.timer.frameLoop(1, this, this.onLightRotaitonLoop);
        }
        lightRotaitonStop() {
            this.rotationTarget.transform.localRotationEuler = this.lightRotaitonSrc;
            Laya.timer.clear(this, this.onLightRotaitonLoop);
        }
        onLightRotaitonLoop() {
            this.lightRotaiton.x += 1;
            this.lightRotaiton.y += 2;
            this.lightRotaiton.z += 2;
            this.rotationTarget.transform.localRotationEuler = this.lightRotaiton;
        }
    }

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.name = "stage";
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (Laya.MiniAdpter)
                Laya.MiniAdpter.autoCacheFile = false;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            Laya.alertGlobalError(true);
            this.scene = TestScene.create();
            Laya.stage.addChild(this.scene);
            var box = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createQuad(2, 2), "box");
            let material = new Laya.UnlitMaterial();
            material.renderMode = Laya.UnlitMaterial.RENDERMODE_TRANSPARENT;
            box.meshRenderer.material = material;
            // this.scene.addChild(box);
            var gl = Laya['LayaGL'].instance;
            var availableExtensions = gl.getSupportedExtensions();
            var str = availableExtensions.join('\n');
            str += "\nLaya.WebGL._isWebGL2=" + Laya.WebGL._isWebGL2 + "\n";
            var availableExtensions = gl.getSupportedExtensions();
            for (var i = 0; i < availableExtensions.length; i++) {
                if (availableExtensions[i].indexOf('texture') >= 0
                    && availableExtensions[i].indexOf('compressed') >= 0) {
                    console.log(availableExtensions[i]);
                    str += availableExtensions[i] + "\n";
                    var tc = gl.getExtension(availableExtensions[i]);
                    for (var key in tc) {
                        var itemStr = key + "=0x" + tc[key].toString(16) + "(" + tc[key] + ")\n";
                        str += itemStr;
                        console.log(itemStr);
                    }
                }
            }
            var sp = new Laya.Sprite();
            sp.name = "ZFSprite";
            window['sp'] = sp;
            Laya.stage.addChild(sp);
            var txt = new Laya.TextArea();
            txt.name = "ZFTextArea";
            txt.text = str;
            txt.width = Laya.stage.width - 40;
            txt.height = Laya.stage.height - 40;
            txt.x = 20;
            txt.y = 20;
            txt.color = "#ff0000";
            Laya.stage.addChild(txt);
            // this.scene.RotationTarget(box);
            // Laya.loader.load("http://192.168.15.39:8901/bin/2_etc2_rgba8.ktx", Laya.Handler.create(null, (tex) => {
            //     material.albedoTexture = tex;
            // }));
            sp.loadImage("http://192.168.15.39:8901/bin/6.dds");
            window['renderNum'] = 0;
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    function RunMain() {
        window['zf_texture_ps'] = `
/*
	texture和fillrect使用的。
*/
#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了
precision highp float;
#else
precision mediump float;
#endif

varying vec4 v_texcoordAlpha;
varying vec4 v_color;
varying float v_useTex;
uniform sampler2D texture;
varying vec2 cliped;

#ifdef BLUR_FILTER
uniform vec4 strength_sig2_2sig2_gauss1;
uniform vec2 blurInfo;

#define PI 3.141593

float getGaussian(float x, float y){
    return strength_sig2_2sig2_gauss1.w*exp(-(x*x+y*y)/strength_sig2_2sig2_gauss1.z);
}

vec4 blur(){
    const float blurw = 9.0;
    vec4 vec4Color = vec4(0.0,0.0,0.0,0.0);
    vec2 halfsz=vec2(blurw,blurw)/2.0/blurInfo;    
    vec2 startpos=v_texcoordAlpha.xy-halfsz;
    vec2 ctexcoord = startpos;
    vec2 step = 1.0/blurInfo;  //每个像素      
    
    for(float y = 0.0;y<=blurw; ++y){
        ctexcoord.x=startpos.x;
        for(float x = 0.0;x<=blurw; ++x){
            //TODO 纹理坐标的固定偏移应该在vs中处理
            vec4Color += texture2D(texture, ctexcoord)*getGaussian(x-blurw/2.0,y-blurw/2.0);
            ctexcoord.x+=step.x;
        }
        ctexcoord.y+=step.y;
    }
    return vec4Color;
}
#endif

#ifdef COLOR_FILTER
uniform vec4 colorAlpha;
uniform mat4 colorMat;
#endif

#ifdef GLOW_FILTER
uniform vec4 u_color;
uniform vec4 u_blurInfo1;
uniform vec4 u_blurInfo2;
#endif

#ifdef COLOR_ADD
uniform vec4 colorAdd;
#endif

#ifdef FILLTEXTURE	
uniform vec4 u_TexRange;//startu,startv,urange, vrange
#endif
void main() {
	if(cliped.x<0.) discard;
	if(cliped.x>1.) discard;
	if(cliped.y<0.) discard;
	if(cliped.y>1.) discard;
	
#ifdef FILLTEXTURE	
   vec4 color= texture2D(texture, fract(v_texcoordAlpha.xy)*u_TexRange.zw + u_TexRange.xy);
#else
   vec4 color= texture2D(texture, v_texcoordAlpha.xy);
#endif

color.rgb *= color.a;

   if(v_useTex<=0.)color = vec4(1.,1.,1.,1.);
//    color.a*=v_color.w;
   //color.rgb*=v_color.w;
   color.rgb*=v_color.rgb;
    //   color.rgba = vec4(color.a, color.a, color.a, color.a);
   gl_FragColor=color;
   
   #ifdef COLOR_ADD
	gl_FragColor = vec4(colorAdd.rgb,colorAdd.a*gl_FragColor.a);
	gl_FragColor.xyz *= colorAdd.a;
   #endif
   
   #ifdef BLUR_FILTER
	gl_FragColor =   blur();
	gl_FragColor.w*=v_color.w;   
   #endif
   
   #ifdef COLOR_FILTER
	mat4 alphaMat =colorMat;

	alphaMat[0][3] *= gl_FragColor.a;
	alphaMat[1][3] *= gl_FragColor.a;
	alphaMat[2][3] *= gl_FragColor.a;

	gl_FragColor = gl_FragColor * alphaMat;
	gl_FragColor += colorAlpha/255.0*gl_FragColor.a;
   #endif
   
   #ifdef GLOW_FILTER
	const float c_IterationTime = 10.0;
	float floatIterationTotalTime = c_IterationTime * c_IterationTime;
	vec4 vec4Color = vec4(0.0,0.0,0.0,0.0);
	vec2 vec2FilterDir = vec2(-(u_blurInfo1.z)/u_blurInfo2.x,-(u_blurInfo1.w)/u_blurInfo2.y);
	vec2 vec2FilterOff = vec2(u_blurInfo1.x/u_blurInfo2.x/c_IterationTime * 2.0,u_blurInfo1.y/u_blurInfo2.y/c_IterationTime * 2.0);
	float maxNum = u_blurInfo1.x * u_blurInfo1.y;
	vec2 vec2Off = vec2(0.0,0.0);
	float floatOff = c_IterationTime/2.0;
	for(float i = 0.0;i<=c_IterationTime; ++i){
		for(float j = 0.0;j<=c_IterationTime; ++j){
			vec2Off = vec2(vec2FilterOff.x * (i - floatOff),vec2FilterOff.y * (j - floatOff));
			vec4Color += texture2D(texture, v_texcoordAlpha.xy + vec2FilterDir + vec2Off)/floatIterationTotalTime;
		}
	}
	gl_FragColor = vec4(u_color.rgb,vec4Color.a * u_blurInfo2.z);
	gl_FragColor.rgb *= gl_FragColor.a;   
   #endif
   
}`;
        new Main();
    }
    RunMain();

}());
//# sourceMappingURL=bundle.js.map
