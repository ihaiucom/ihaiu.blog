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
		public exp : number = 0;
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
	export class ConfigEffectType {
		public id : number = 0;
		public effectTypeKey : string = "";
		public describe : string = "";
	}
	export class ConfigItem {
		public id : number = 0;
		public zh_cn_name : string = "";
		public zh_cn_des : string = "";
		public icon : string = "";
		public typeKey : string = "";
		public type : number = 0;
		public coin : number = 0;
	}
	export class ConfigItemConsume {
		public id : number = 0;
		public zh_cn_name : string = "";
		public zh_cn_itemDes : string = "";
		public icon : string = "";
		public effectType : string = "";
		public effectArgs :  Array < number >  = null;
		public coin : number = 0;
	}
	export class ConfigItemDecorate {
		public id : number = 0;
		public zh_cn_name : string = "";
		public zh_cn_itemDes : string = "";
		public icon : string = "";
		public effectType : string = "";
		public effectArgs :  Array < number >  = null;
		public triggerType : string = "";
		public triggerArgs :  Array < number >  = null;
	}
	export class ConfigItemWeapon {
		public id : number = 0;
		public zh_cn_name : string = "";
		public zh_cn_itemDes : string = "";
		public icon : string = "";
		public effectType : string = "";
		public effectArgs :  Array < number >  = null;
		public triggerType : string = "";
		public triggerArgs :  Array < number >  = null;
	}
	export class ConfigLevel {
		public id : number = 0;
		public exp : number = 0;
		public randomWeaponList :  Array < number >  = null;
		public randomDecorateList :  Array < number >  = null;
		public randomConsumeList :  Array < number >  = null;
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
	export class ConfigProperty {
		public id : number = 0;
		public field : string = "";
		public des : string = "";
		public zh_cn_name : string = "";
		public ValueType : number = 0;
		public icon : number = 0;
		public groupType : number = 0;
		public visible : boolean = false;
	}
	export class ConfigTriggerType {
		public id : number = 0;
		public triggerTypeKey : string = "";
		public zh_cn_name : string = "";
		public cardTypeList :  Array < string >  = null;
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
		private m_EffectType : Map<number, ConfigEffectType > = null;
		private m_Item : Map<number, ConfigItem > = null;
		private m_ItemConsume : Map<number, ConfigItemConsume > = null;
		private m_ItemDecorate : Map<number, ConfigItemDecorate > = null;
		private m_ItemWeapon : Map<number, ConfigItemWeapon > = null;
		private m_Level : Map<number, ConfigLevel > = null;
		private m_Loader : Map<number, ConfigLoader > = null;
		private m_Menu : Map<number, ConfigMenu > = null;
		private m_Msg : Map<number, ConfigMsg > = null;
		private m_Property : Map<number, ConfigProperty > = null;
		private m_TriggerType : Map<number, ConfigTriggerType > = null;
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
	
		public get EffectType(){
			return this.m_EffectType;
		}
	
		public get Item(){
			return this.m_Item;
		}
	
		public get ItemConsume(){
			return this.m_ItemConsume;
		}
	
		public get ItemDecorate(){
			return this.m_ItemDecorate;
		}
	
		public get ItemWeapon(){
			return this.m_ItemWeapon;
		}
	
		public get Level(){
			return this.m_Level;
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
	
		public get Property(){
			return this.m_Property;
		}
	
		public get TriggerType(){
			return this.m_TriggerType;
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
	
		public getEffectType(id: number): ConfigEffectType {
			let obj = this.m_EffectType[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getItem(id: number): ConfigItem {
			let obj = this.m_Item[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getItemConsume(id: number): ConfigItemConsume {
			let obj = this.m_ItemConsume[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getItemDecorate(id: number): ConfigItemDecorate {
			let obj = this.m_ItemDecorate[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getItemWeapon(id: number): ConfigItemWeapon {
			let obj = this.m_ItemWeapon[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getLevel(id: number): ConfigLevel {
			let obj = this.m_Level[id];
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
	
		public getProperty(id: number): ConfigProperty {
			let obj = this.m_Property[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getTriggerType(id: number): ConfigTriggerType {
			let obj = this.m_TriggerType[id];
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
