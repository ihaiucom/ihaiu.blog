/*
 * @Descripttion: 
 * @version: 
 * @Author: ZengFeng
 * @Date: 2019-10-14 19:07:26
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-08 17:02:12
 */
import GameConfig from "./GameConfig";
import Game from "./Game";
class GameMain 
{
    constructor() 
    {
		LayaExtendClass();
		if(!Laya3D._isInit)
		{
			this.InitLaya();
		}
		
		if (GameConfig.stat) Laya.Stat.show();
        
		// 启动游戏
		LayaExtendLogic();
		FguiExtend();
		
		Game.init();
		
		Game.launch.install();
		
		Laya.stage.on(Laya.Event.KEY_DOWN, this, this.OnKeyDownHandler);
	}

	private OnKeyDownHandler(e:KeyboardEvent):void
	{
		if (Laya.Keyboard.P == e.keyCode)
        {
			console.error("当前对象池信息:");
			console.error(Pool._poolDic);
        }
    }

	initLoader() 
	{

		let path = "res/fgui/GameLaunch_atlas_upoiw2g.jpg";
  
		let system = wx.getSystemInfoSync()
		var sprite = new Laya.Sprite();
		let w = Laya.stage.width;
		let h = Laya.stage.height;
  
  
		sprite.graphics.drawRect(0, 0, w, h, '#FFFFFF');
		sprite.graphics.loadImage(path, 0, 0, w, h);
		Laya.stage.addChild(sprite);
		window['launcherInitBG'] = sprite;
  
	}

	InitLaya()
	{
		
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

		Laya.Shader3D.debugMode = false;

		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		// if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
		if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
		
		Laya.alertGlobalError = true;
	}

}


//激活启动类
new GameMain();