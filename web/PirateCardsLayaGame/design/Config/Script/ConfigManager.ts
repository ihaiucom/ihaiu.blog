namespace configs{
	export class DTItemNum {
		public itemId : number = 0;
		public itemNum : number = 0;
	}
	export class DTRewardRandom {
		public weight : number = 0;
		public itemType : number = 0;
		public itemId : number = 0;
		public itemNum : number = 0;
	}
	export class DTStoryNum {
		public star : number = 0;
		public num : number = 0;
	}
	export class DTVector2 {
		public x : number = 0;
		public y : number = 0;
	}
	export class DTActorSkill {
		public group_id : number = 0;
		public lv : number = 0;
	}
	export class DTActorStory {
		public story : number = 0;
		public lv : number = 0;
		public property : number = 0;
	}
	export class DTActorFeature {
		public feature : number = 0;
		public lv : number = 0;
		public property : number = 0;
	}
	export class DTActorCharacter {
		public character : number = 0;
		public lv : number = 0;
		public property : number = 0;
	}
	export class DTRandomInterval {
		public num1 : number = 0;
		public num2 : number = 0;
	}
	export class DTShootType {
		public shoottypeid : number = 0;
		public rate : number = 0;
	}
	export class DTStoryEffect {
		public storyeffect : number = 0;
		public rate : number = 0;
	}
	export class DTBuildingReq {
		public type : number = 0;
		public level : number = 0;
	}
	export class DTValue2 {
		public v1 : number = 0;
		public v2 : number = 0;
	}
	export class DTValue3 {
		public v1 : number = 0;
		public v2 : number = 0;
		public v3 : number = 0;
	}
	export class DTDrop {
		public x : number = 0;
		public y : number = 0;
	}
	export class DTPerformActoin {
		public v1 : number = 0;
		public v2 : number = 0;
		public v3 : number = 0;
	}
	export class DTPerformSpeak {
		public v1 : number = 0;
		public v2 : number = 0;
		public v3 : number = 0;
	}
	export class DTParts {
		public v1 : string = "";
		public v2 : string = "";
	}
	export class DTProficiency {
		public v1 : number = 0;
		public v2 : number = 0;
	}
	export class DTDate {
		public y : number = 0;
		public m : number = 0;
		public d : number = 0;
	}
	export class DTTime {
		public h : number = 0;
		public mm : number = 0;
		public s : number = 0;
	}
	export class DTDateTime {
		public y : number = 0;
		public m : number = 0;
		public d : number = 0;
		public h : number = 0;
		public mm : number = 0;
		public s : number = 0;
	}
	export class DTFixItemNum {
		public itemType : number = 0;
		public itemId : number = 0;
		public itemNum : number = 0;
	}
	export class DTGiftNum {
		public itemId : number = 0;
		public itemNum : number = 0;
		public property : number = 0;
	}
	export class DTLabelProperty {
		public storyTag : number = 0;
		public property : number = 0;
	}
	export class DTInitialLabel {
		public storyTag : number = 0;
		public level : number = 0;
		public property : number = 0;
	}
	export class DTPerformanceCondition {
		public lv : number = 0;
		public property : number = 0;
		public num : number = 0;
	}
	export class DTSkillTiggerCondition {
		public tiggerConditon : number = 0;
		public tiggerValue : number = 0;
	}
	export class DTburstlibrary {
		public itemId : number = 0;
		public itemNum : number = 0;
		public rate : number = 0;
	}
	export class DTProp {
		public PropID : number = 0;
		public Rate : number = 0;
	}
	export class DTRandNum {
		public Num : number = 0;
		public Rate : number = 0;
	}
	export class DTPropGrowupStep {
		public level : number = 0;
		public step : number = 0;
	}
	export class DTDecompose {
		public percent : number = 0;
		public rewardid : number = 0;
	}
	export class DTStarReward {
		public level : number = 0;
		public starnum : number = 0;
		public rewardid : number = 0;
	}
	export class DTBuffId {
		public buffID1 : number = 0;
		public buffID2 : number = 0;
		public buffID3 : number = 0;
		public buffID4 : number = 0;
		public buffID5 : number = 0;
		public buffID6 : number = 0;
	}
	export class DTPropValue {
		public PropID : number = 0;
		public value : number = 0;
	}
	export class DTMapId {
		public chapterId : number = 0;
		public mapId : number = 0;
	}
	export class DTRandomMap {
		public part : number = 0;
		public mapNum : number = 0;
	}
	export class DTRewardRate {
		public rate : number = 0;
		public rewardid : number = 0;
	}
	export class DTGashaponReward {
		public Gashaponid : number = 0;
		public times : number = 0;
		public rewardid : number = 0;
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
		public notices : string = "";
		public PvpMatchTime : number = 0;
		public PvpMatchTime2 : number = 0;
		public ChannelMine : boolean = false;
		public pvpResultMaxCnt : number = 0;
		public shareTitle : string = "";
		public shareImgUrl : string = "";
		public shareImgId : string = "";
		public per1V10Icon : number = 0;
		public per2V10Icon : number = 0;
		public worldChatIcon : number = 0;
		public pvpIconReward : number = 0;
		public maxBagSpace : number = 0;
		public DefAvatar : string = "";
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
