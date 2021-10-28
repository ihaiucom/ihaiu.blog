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
		if (GameConfig.stat) Laya.Stat.show();
		Laya.alertGlobalError(true);

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

		var txt = new Laya.TextArea();
		txt.text = str;
		txt.width =  Laya.stage.width - 40;
		txt.height = Laya.stage.height - 40;
		txt.x = 20;
		txt.y = 20;
		txt.color = "#ff0000";
		Laya.stage.addChild(txt);

		
		// this.scene.RotationTarget(box);
		Laya.loader.load("http://192.168.15.39:8901/bin/2_8x8_yflip.astc", Laya.Handler.create(null,  (tex: Laya.Texture2D)=> {
			material.albedoTexture = tex;
		}));

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
//激活启动类
new Main();
