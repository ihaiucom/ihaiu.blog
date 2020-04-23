namespace configs{
	export class DTItemNum {
		public itemId : number = 0;
		public itemNum : number = 0;
	}
	export class DTVector2 {
		public x : number = 0;
		public y : number = 0;
	}
	export class ConfigGlobal {
		public everydayUpdateTime : number = 0;
		public roleNameAutoGen : string = "";
		public roleNameMaxLength : number = 0;
		public roleNameMinLength : number = 0;
		public superAccountSwitch : boolean = false;
		public roleNameRepated : boolean = false;
		public friendReqMaxCnt : number = 0;
		public friendMaxCnt : number = 0;
		public chatGamerMaxCnt : number = 0;
		public chatWorldMaxCnt : number = 0;
		public gamerMailMaxCnt : number = 0;
		public worldMailMaxCnt : number = 0;
		public wordCheck : boolean = false;
	}
	export class ConfigCard {
		public id : number = 0;
		public scoreTypeKey : string = "";
		public en_name : string = "";
		public zh_cn_name : string = "";
		public level : number = 0;
		public sprite : string = "";
		public coin : number = 0;
	}
	export class ConfigCardScoreType {
		public id : number = 0;
		public key : string = "";
		public zh_cn_name : string = "";
		public backgroundType : number = 0;
		public frontView : string = "";
		public isInChest : boolean = false;
		public isInBarrel : boolean = false;
		public isPowerUp : boolean = false;
	}
	export class ConfigLoader {
		public id : number = 0;
		public name : string = "";
		public isShowCircle : boolean = false;
	}
	export class ConfigMenu {
		public id : number = 0;
		public zh_cn_name : string = "";
		public icon : string = "";
		public moduleNameIcon : string = "";
		public moduleName : string = "";
		public layer : number = 0;
		public topInformation :  Array < number >  = null;
		public closeOtherType : number = 0;
		public closeHomeWindow : boolean = false;
		public isAutoOpenHomeWindow : boolean = false;
		public cacheTime : number = 0;
		public loaderId : number = 0;
		public barType : number = 0;
		public barIndex : number = 0;
		public openAnimation : number = 0;
		public closeAnimation : number = 0;
		public redType : number = 0;
	}
	export class ConfigMsg {
		public id : number = 0;
		public key : string = "";
		public module : string = "";
		public name : string = "";
		public zh_cn_notice : string = "";
		public en_notice : string = "";
	}
	export class ConfigUnlock {
		public id : number = 0;
		public zh_cn_name : string = "";
		public menuId : number = 0;
		public menuIndexId : number = 0;
		public showType : number = 0;
		public showLevel : number = 0;
		public openLevel : number = 0;
		public checkPoint : number = 0;
		public openShow : number = 0;
		public showIcon : number = 0;
	}

	export class ConfigManager {
		private m_Global : ConfigGlobal = null;
		private m_ErrStr : Map<number, string > = null;
		private m_Card : Map<number, ConfigCard > = null;
		private m_CardScoreType : Map<number, ConfigCardScoreType > = null;
		private m_Loader : Map<number, ConfigLoader > = null;
		private m_Menu : Map<number, ConfigMenu > = null;
		private m_Msg : Map<number, ConfigMsg > = null;
		private m_Unlock : Map<number, ConfigUnlock > = null;

		public get ErrStr(){
			return this.m_ErrStr;
		}
		
		public get Global(){
			return this.m_Global;
		}
				
		public get Card(){
			return this.m_Card;
		}
	
		public get CardScoreType(){
			return this.m_CardScoreType;
		}
	
		public get Loader(){
			return this.m_Loader;
		}
	
		public get Menu(){
			return this.m_Menu;
		}
	
		public get Msg(){
			return this.m_Msg;
		}
	
		public get Unlock(){
			return this.m_Unlock;
		}
	
		public getErrStr(id: number): string{
			let obj = this.m_ErrStr[id];
			if (obj == null){
				return "";
			}
			return obj;
		}
		
		public getCard(id: number): ConfigCard {
			let obj = this.m_Card[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getCardScoreType(id: number): ConfigCardScoreType {
			let obj = this.m_CardScoreType[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getLoader(id: number): ConfigLoader {
			let obj = this.m_Loader[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getMenu(id: number): ConfigMenu {
			let obj = this.m_Menu[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getMsg(id: number): ConfigMsg {
			let obj = this.m_Msg[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getUnlock(id: number): ConfigUnlock {
			let obj = this.m_Unlock[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public loadConfig(jsonText : string) {
			let configItem= JSON.parse(jsonText);
			for(let key in configItem)
			{
				if(key == "Global") {
					this.m_Global = configItem[key];
					continue
				}
				for(let key1 in configItem[key])
				{
					this["m_" + key][Number.parseInt(key1)] = configItem[key][key1];
				}
			}
		}
	}
}
