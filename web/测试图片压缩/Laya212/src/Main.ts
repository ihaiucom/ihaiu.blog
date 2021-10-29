import GameConfig from "./GameConfig";
import { TestScene } from "./TestScene";
import Vector3 = Laya.Vector3;
class Main {
    scene: TestScene;
	constructor() {


		//根据IDE设置初始化引擎		
		if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
		else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
		Laya["Physics"] && Laya["Physics"].enable();
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
		Laya.stage.name = "stage";
		Laya.stage.scaleMode = GameConfig.scaleMode;
		Laya.stage.screenMode = GameConfig.screenMode;
		Laya.stage.alignV = GameConfig.alignV;
		Laya.stage.alignH = GameConfig.alignH;
		//兼容微信不支持加载scene后缀场景
		Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;

		if(Laya.MiniAdpter)Laya.MiniAdpter.autoCacheFile = false;
		

		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
		if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
		// if (GameConfig.stat) Laya.Stat.show();
		Laya.alertGlobalError(true);
		
		// var sp = new Laya.Sprite();
		// sp.width = Laya.stage.width;
		// sp.height = Laya.stage.height;
		// sp.graphics.drawRect(0, 0, sp.width, sp.height, "#FFFFFF");
		// Laya.stage.addChild(sp);

        this.scene = TestScene.create();
        Laya.stage.addChild(this.scene);

		var box = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createQuad(2, 2), "box");
		let material = new Laya.UnlitMaterial();
		material.renderMode = Laya.UnlitMaterial.RENDERMODE_TRANSPARENT
		box.meshRenderer.material = material;
		this.scene.addChild(box);
		
		// var sprite = new Laya.Sprite();
		// // sprite.loadImage("res/layabox.png");
		// // sprite.loadImage("1_8x8.astc");
		// sprite.loadImage("1.ktx");
		// Laya.stage.addChild(sprite);

		

		var gl = Laya['LayaGL'].instance;
		var availableExtensions: string[] = gl.getSupportedExtensions();
		var str = availableExtensions.join('\n');
		str += "\nLaya.WebGL._isWebGL2=" + Laya.WebGL._isWebGL2 + "\n";

		
		var availableExtensions = gl.getSupportedExtensions();
		for (var i = 0; i < availableExtensions.length; i++) {
			if (availableExtensions[i].indexOf('texture') >= 0
				&& availableExtensions[i].indexOf('compressed') >= 0) {
				// show in console
				console.log(availableExtensions[i]);
				str += availableExtensions[i] + "\n";
				var tc = gl.getExtension(availableExtensions[i]);
				for(var key in tc)
				{
					var itemStr =  key + "=0x" + tc[key].toString(16) + "(" +tc[key] + ")\n";
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
		txt.width =  Laya.stage.width - 40;
		txt.height = Laya.stage.height - 40;
		txt.x = 20;
		txt.y = 20;
		txt.color = "#ff0000";
		Laya.stage.addChild(txt);

		
		this.scene.RotationTarget(box);
		Laya.loader.load("http://192.168.15.39:8901/bin/6.dds", Laya.Handler.create(null,  (tex: Laya.Texture2D)=> {
			material.albedoTexture = tex;
		}));
		

		sp.loadImage("http://192.168.15.39:8901/bin/6.dds");
		window['renderNum'] = 0;

		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
		// Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
	}

	onVersionLoaded(): void {
		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
		Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
	}

	onConfigLoaded(): void {
		//加载IDE指定的场景
		GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
	}

	
}

function RunMain()
{
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

   if(v_useTex<=0.)color = vec4(1.,1.,1.,1.);
   color.a*=v_color.w;
   //color.rgb*=v_color.w;
   color.rgb*=v_color.rgb;
   //    color.rgba = vec4(color.a, color.a, color.a, color.r);
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


	//激活启动类
	new Main();

}

RunMain();