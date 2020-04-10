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
		public initItemList :  Array < DTFixItemNum >  = null;
		public BestDecompose :  Array < DTDecompose >  = null;
		public draugTempAreaLength : number = 0;
		public nameCost : DTItemNum = null;
		public heroLevelItem :  Array < number >  = null;
		public powerIncrease : number = 0;
		public updataDayTime : DTTime = null;
		public baseCount :  Array < number >  = null;
		public NumberOfChallengesPerday : number = 0;
		public eliteBuyCount :  Array < DTItemNum >  = null;
		public devilBuyCount :  Array < DTItemNum >  = null;
		public SecretBookBuyCount :  Array < DTItemNum >  = null;
		public itemBag : number = 0;
		public equipBag : number = 0;
		public tokenBag : number = 0;
		public duelBase :  Array < number >  = null;
		public duelTime : number = 0;
		public inviteTime :  Array < number >  = null;
		public matchesNumber : number = 0;
		public initial_realscore : number = 0;
		public initial_ranknum : number = 0;
		public combowin_a : number = 0;
		public combolose_a : number = 0;
		public combowinpara_max : number = 0;
		public combolosepara_max : number = 0;
		public enemy_a : number = 0;
		public scoreperstar : number = 0;
		public combowin_jdscore : number = 0;
		public enemy_jdscore : number = 0;
		public initial_matchRange : number = 0;
		public max_matchRange : number = 0;
		public widenRange : number = 0;
		public widenTime : number = 0;
		public epuipPromotionItem :  Array < number >  = null;
		public duelTempMapList :  Array < DTMapId >  = null;
		public duelDayQuest :  Array < number >  = null;
		public duelweekQuest :  Array < number >  = null;
	}
	export class ConfigAAAShield {
		public id : number = 0;
		public ip : string = "";
		public name : string = "";
		public heroIds :  Array < number >  = null;
		public menuIds :  Array < number >  = null;
		public itemIds :  Array < number >  = null;
	}
	export class ConfigActivities {
		public id : number = 0;
		public type : number = 0;
		public name : string = "";
		public startType : number = 0;
		public levelReq : number = 0;
		public blockReq : number = 0;
		public start : number = 0;
		public duration : number = 0;
		public icon : number = 0;
		public iconChosen : number = 0;
		public info : string = "";
	}
	export class ConfigAvatar {
		public id : number = 0;
		public zh_cn_name : string = "";
		public zh_cn_icon : string = "";
		public card : string = "";
		public drawing : string = "";
		public spine : string = "";
		public spinePos :  Array < number >  = null;
		public heroTeam : string = "";
		public heroName : string = "";
		public bodyIcon : string = "";
		public halfIcon : string = "";
		public zh_cn_iconDes : string = "";
		public heroCutin : string = "";
		public en_icon : string = "";
		public pieceIcon : string = "";
		public modelBones : string = "";
		public bgPic : string = "";
		public coVector : DTVector2 = null;
	}
	export class ConfigBag {
		public id : number = 0;
		public itemId : number = 0;
		public level : number = 0;
		public sellPrice : number = 0;
		public stackNumber : number = 0;
	}
	export class ConfigBattleFormula {
		public id : number = 0;
		public ParaName : string = "";
		public Tips : string = "";
		public ParaValue : number = 0;
		public ValueType : number = 0;
	}
	export class ConfigChapter {
		public id : number = 0;
		public type : number = 0;
		public zh_cn_name : string = "";
		public icon : number = 0;
		public starReward :  Array < DTStarReward >  = null;
	}
	export class ConfigCheckPoint {
		public id : number = 0;
		public type : number = 0;
		public chapter : number = 0;
		public mapID : number = 0;
		public heroId : number = 0;
		public heroLevel : number = 0;
		public zh_cn_name : string = "";
		public zh_cn_describe : string = "";
		public icon : number = 0;
		public iconName : number = 0;
		public iconBoss : number = 0;
		public picture : number = 0;
		public challengePower : number = 0;
		public teamLimit : number = 0;
		public prepose : number = 0;
		public showLevel : number = 0;
		public Level : number = 0;
		public time : number = 0;
		public sweep : boolean = false;
		public firstReward : number = 0;
		public baseReward : number = 0;
		public rewardId : number = 0;
		public showReward : number = 0;
		public challengeTime : number = 0;
		public challengeHp : number = 0;
	}
	export class ConfigCompound {
		public id : number = 0;
		public syn_item : number = 0;
		public num_req : number = 0;
		public split_list :  Array < DTItemNum >  = null;
	}
	export class ConfigCountActivities {
		public id : number = 0;
		public rewardId : number = 0;
		public avatar : number = 0;
	}
	export class ConfigDaily {
		public id : number = 0;
		public active : number = 0;
		public reward : number = 0;
	}
	export class ConfigDraug {
		public id : number = 0;
		public name : string = "";
		public range : number = 0;
		public TypeName : number = 0;
		public PosRate :  Array < number >  = null;
		public MaxRandNum : number = 0;
		public RandNum :  Array < DTRandNum >  = null;
		public SecPropStep : number = 0;
		public initialExp : number = 0;
		public ExpLevel :  Array < number >  = null;
		public eat : boolean = false;
		public decompose : boolean = false;
		public CoinRatio : number = 0;
		public OtherDrop : number = 0;
		public PropPos1 :  Array < DTProp >  = null;
		public Pos1PerModule : number = 0;
		public PropPos2 :  Array < DTProp >  = null;
		public Pos2PerModule : number = 0;
		public PropPos3 :  Array < DTProp >  = null;
		public Pos3PerModule : number = 0;
		public PropPos4 :  Array < DTProp >  = null;
		public Pos4PerModule : number = 0;
		public PropPos5 :  Array < DTProp >  = null;
		public Pos5PerModule : number = 0;
		public PropPos6 :  Array < DTProp >  = null;
		public Pos6PerModule : number = 0;
		public SecProp :  Array < DTProp >  = null;
		public SecPerModule : number = 0;
		public BatterSecPropRate : number = 0;
	}
	export class ConfigDraugAwaken {
		public id : number = 0;
		public name : string = "";
		public cost_coin :  Array < DTItemNum >  = null;
		public rate : number = 0;
		public draug_rate : number = 0;
	}
	export class ConfigDraugSuit {
		public id : number = 0;
		public TypeName : number = 0;
		public Suit2 : number = 0;
		public Suit2PerModule : number = 0;
		public Suit4 : number = 0;
		public Suit4PerModule : number = 0;
	}
	export class ConfigDuelDan {
		public id : number = 0;
		public zh_cn_name : string = "";
		public zh_cn_des : string = "";
		public ranknum : number = 0;
		public preDan : number = 0;
		public nextDan : number = 0;
		public icon : number = 0;
		public dan : number = 0;
		public level : number = 0;
		public star : number = 0;
		public totalStar : number = 0;
		public reward : number = 0;
		public reset_id : number = 0;
		public rankBaseScore : number = 0;
		public winBaseJDScore : number = 0;
		public loseBaseJDScore : number = 0;
		public maxJDScore : number = 0;
		public winBaseScore : number = 0;
		public loseBaseScore : number = 0;
	}
	export class ConfigDuelRanking {
		public id : number = 0;
		public zh_cn_name : string = "";
		public minRanking : number = 0;
		public maxRanking : number = 0;
		public reward : number = 0;
	}
	export class ConfigDuelSeason {
		public id : number = 0;
		public type : number = 0;
		public zh_cn_name : string = "";
		public startTime : DTDateTime = null;
		public overTime : DTDateTime = null;
	}
	export class ConfigEquipExp {
		public id : number = 0;
		public level : number = 0;
		public exp : number = 0;
		public coin : DTItemNum = null;
	}
	export class ConfigEquipment {
		public id : number = 0;
		public zh_cn_name : string = "";
		public indexName : string = "";
		public zh_cn_des : string = "";
		public quality : number = 0;
		public icon : number = 0;
		public modle : number = 0;
		public equipPos : number = 0;
		public equipType : number = 0;
		public armorType :  Array < number >  = null;
		public useType :  Array < number >  = null;
		public useUi :  Array < number >  = null;
		public getWay :  Array < number >  = null;
		public buffId :  Array < DTBuffId >  = null;
		public heroID :  Array < number >  = null;
		public atkType : number = 0;
		public atkRange : DTRandomInterval = null;
		public propID :  Array < DTProp >  = null;
		public expPara : number = 0;
		public starProp :  Array < DTProp >  = null;
		public module : number = 0;
		public specStarItem : number = 0;
		public itemNum :  Array < number >  = null;
		public starLevelReq :  Array < number >  = null;
		public eat : boolean = false;
		public eatPara : number = 0;
		public decompose : boolean = false;
		public dropItem : number = 0;
	}
	export class ConfigGashapon {
		public id : number = 0;
		public type : number = 0;
		public menu : number = 0;
		public num : number = 0;
		public cost :  Array < DTFixItemNum >  = null;
		public freeNum : number = 0;
		public freeTime : number = 0;
		public startTime : DTDateTime = null;
		public endTime : DTDateTime = null;
		public pic : number = 0;
		public rewardId : number = 0;
		public allowance : number = 0;
		public allowanceNum : number = 0;
		public desc : string = "";
	}
	export class ConfigGuide {
		public id : number = 0;
		public zh_cn_name : string = "";
		public zh_cn_des : string = "";
		public trigger : number = 0;
		public trigger_value :  Array < number >  = null;
		public group : number = 0;
		public group_order : number = 0;
		public plot_group_id : number = 0;
		public type : number = 0;
		public guide_type : number = 0;
		public next_guide_id : number = 0;
		public is_finish : number = 0;
		public finger : boolean = false;
		public finger_postion :  Array < number >  = null;
		public halo : boolean = false;
		public halo_postion :  Array < number >  = null;
		public text_position : number = 0;
		public menu_id : number = 0;
	}
	export class ConfigHeadPortrait {
		public id : number = 0;
		public zh_cn_name : string = "";
		public sex : number = 0;
		public unlock : DTItemNum = null;
		public icon : number = 0;
	}
	export class ConfigHero {
		public id : number = 0;
		public zh_cn_name : string = "";
		public quality : number = 0;
		public type :  Array < number >  = null;
		public basestar : number = 0;
		public heroItem : number = 0;
		public heroItemNum : number = 0;
		public maxstar : number = 0;
		public icon : number = 0;
		public display :  Array < number >  = null;
		public tag :  Array < number >  = null;
		public atkType : number = 0;
		public propId :  Array < number >  = null;
		public starId :  Array < number >  = null;
		public buffId :  Array < DTBuffId >  = null;
		public baseSkillId :  Array < number >  = null;
	}
	export class ConfigHeroExp {
		public id : number = 0;
		public level : number = 0;
		public exp : number = 0;
	}
	export class ConfigHeroStar {
		public id : number = 0;
		public quality : number = 0;
		public needStar :  Array < number >  = null;
		public starNeed1 : number = 0;
		public starNeed2 : number = 0;
		public starNeed3 : number = 0;
		public starNeed4 : number = 0;
		public starNeed5 : number = 0;
	}
	export class ConfigHeroTag {
		public id : number = 0;
		public tag : number = 0;
		public zh_cn_name : string = "";
		public icon : number = 0;
	}
	export class ConfigHeroTeam {
		public id : number = 0;
		public zh_cn_name : string = "";
		public nameValue : number = 0;
		public needLevel : number = 0;
		public cost :  Array < DTItemNum >  = null;
		public needRate :  Array < number >  = null;
		public zh_cn_des :  Array < string >  = null;
	}
	export class ConfigHeroType {
		public id : number = 0;
		public type : number = 0;
		public zh_cn_name : string = "";
		public icon : number = 0;
		public buttonIcon1 : number = 0;
		public buttonIcon2 : number = 0;
	}
	export class ConfigItem {
		public id : number = 0;
		public zh_cn_name : string = "";
		public zh_cn_itemDes : string = "";
		public indexName : string = "";
		public icon : number = 0;
		public quality : number = 0;
		public type : number = 0;
		public maxNum : number = 0;
		public maxLimit : number = 0;
		public getWay :  Array < number >  = null;
		public useType :  Array < number >  = null;
		public useUi :  Array < number >  = null;
		public useCost :  Array < DTItemNum >  = null;
		public rewardId : number = 0;
		public canSell : boolean = false;
		public price : DTItemNum = null;
		public limitTime : DTTime = null;
		public periodTime : DTDateTime = null;
		public value : number = 0;
	}
	export class ConfigLoader {
		public id : number = 0;
		public name : string = "";
		public isShowCircle : boolean = false;
	}
	export class ConfigLoading {
		public id : number = 0;
		public text : string = "";
	}
	export class ConfigMail {
		public id : number = 0;
		public life_time : number = 0;
		public zh_cn_title : string = "";
		public en_title : string = "";
		public item :  Array < DTFixItemNum >  = null;
		public zh_cn_content : string = "";
		public en_content : string = "";
	}
	export class ConfigMap {
		public id : number = 0;
		public g : number = 0;
		public vx : number = 0;
		public vy : number = 0;
		public maxt : number = 0;
		public mint : number = 0;
		public maxPillar : number = 0;
	}
	export class ConfigMenu {
		public id : number = 0;
		public zh_cn_name : string = "";
		public icon : string = "";
		public moduleNameIcon : string = "";
		public moduleName : string = "";
		public layer : number = 0;
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
	export class ConfigMenuIndex {
		public id : number = 0;
		public name : string = "";
		public menuId : number = 0;
		public openType : number = 0;
		public menuIndex : number = 0;
		public redType : number = 0;
	}
	export class ConfigMonsterProp {
		public id : number = 0;
		public Chapter : number = 0;
		public Section : number = 0;
		public MonsterType : number = 0;
		public MonsterTag : number = 0;
		public Level : number = 0;
		public Whatamonster : string = "";
		public PropValue :  Array < DTPropValue >  = null;
		public HPMax : number = 0;
		public Patt : number = 0;
		public Hit : number = 0;
		public DamageReduction : number = 0;
	}
	export class ConfigMsg {
		public id : number = 0;
		public key : string = "";
		public module : string = "";
		public name : string = "";
		public zh_cn_notice : string = "";
		public en_notice : string = "";
	}
	export class ConfigPlayerLevel {
		public id : number = 0;
		public playerNeedExp : number = 0;
		public addPower : number = 0;
		public maxPower : number = 0;
		public rewardId : number = 0;
	}
	export class ConfigPlayerName {
		public id : number = 0;
		public zh_cn_name1 : string = "";
		public zh_cn_name2 : string = "";
		public zh_cn_name3 : string = "";
	}
	export class ConfigPlayList {
		public id : number = 0;
		public zh_cn_name : string = "";
		public zh_cn_des : string = "";
		public icon : number = 0;
		public menuId : number = 0;
		public type : number = 0;
		public mode : number = 0;
		public unlock : number = 0;
		public openTime1 :  Array < DTTime >  = null;
		public openTime2 :  Array < DTTime >  = null;
	}
	export class ConfigPlot {
		public id : number = 0;
		public storyGroupId : number = 0;
		public nextStoryGroupId : number = 0;
		public zh_cn_sceneName : string = "";
		public dialgBox : number = 0;
		public leaveMode : number = 0;
		public position : number = 0;
		public zh_cn_name : string = "";
		public imageId : number = 0;
		public expression : string = "";
		public zh_cn_word : string = "";
		public BackgroundMap : string = "";
		public backgroundMusic : string = "";
		public playType : number = 0;
		public specialEffects : number = 0;
	}
	export class ConfigPower {
		public id : number = 0;
		public useCount : number = 0;
		public icon : number = 0;
		public costID :  Array < DTItemNum >  = null;
		public addPower :  Array < number >  = null;
	}
	export class ConfigPowerGive {
		public id : number = 0;
		public startTime : DTTime = null;
		public overTime : DTTime = null;
		public addPower : number = 0;
		public vipAddPower : number = 0;
	}
	export class ConfigProperty {
		public id : number = 0;
		public field : string = "";
		public zh_cn_name : string = "";
		public ValueType : number = 0;
		public icon : number = 0;
		public groupType : number = 0;
		public visible : boolean = false;
	}
	export class ConfigPropValue {
		public id : number = 0;
		public DisplayAss : string = "";
		public PropName : string = "";
		public RandomInterval : DTRandomInterval = null;
		public PropValue : number = 0;
		public GrowupMode : number = 0;
		public Upgrade :  Array < DTPropGrowupStep >  = null;
		public RangeRatio :  Array < number >  = null;
	}
	export class ConfigPvpMap {
		public id : number = 0;
		public chapter : number = 0;
		public mapID : number = 0;
	}
	export class ConfigQuest {
		public id : number = 0;
		public zh_cn_name : string = "";
		public zh_cn_Des : string = "";
		public type : number = 0;
		public target : number = 0;
		public value : number = 0;
		public count : number = 0;
		public menuId : number = 0;
		public tabId : number = 0;
		public level : number = 0;
		public prepose :  Array < number >  = null;
		public unlock : number = 0;
		public rewardId : number = 0;
		public active : number = 0;
	}
	export class ConfigReward {
		public id : number = 0;
		public fixedItems :  Array < DTFixItemNum >  = null;
		public multipleReward : number = 0;
		public noreward : number = 0;
		public randomItems :  Array < DTRewardRandom >  = null;
		public randomCount : number = 0;
	}
	export class ConfigShop {
		public id : number = 0;
		public space : number = 0;
		public count : number = 0;
		public oldPrice : number = 0;
		public nowPrice : number = 0;
		public currency : number = 0;
	}
	export class ConfigSkill {
		public id : number = 0;
		public heroId : number = 0;
		public icon : number = 0;
		public skillType : number = 0;
		public zh_cn_Name : string = "";
		public zh_cn_Desc : string = "";
		public zh_cn_UpDesc : string = "";
		public zh_cn_tips : string = "";
		public openSkillLv : number = 0;
		public upSkillLv :  Array < number >  = null;
		public cost :  Array < number >  = null;
		public costMana : number = 0;
		public costRage : number = 0;
		public costChargePoint : number = 0;
		public baseChargePoint : number = 0;
		public maxChargePoint : number = 0;
		public recoverChargePoint : number = 0;
		public cooldown : number = 0;
		public manaHitRecovery : number = 0;
		public MPMostTimesPerHit : number = 0;
		public rageHitRecovery : number = 0;
		public FPMostTimesPerHit : number = 0;
		public fixedDamage :  Array < number >  = null;
		public coefficientDamage :  Array < number >  = null;
		public damageDistribution :  Array < number >  = null;
		public projectFactors :  Array < number >  = null;
		public hitnums : number = 0;
		public casttime : number = 0;
	}
	export class ConfigSound {
		public id : number = 0;
		public mergeFileName : string = "";
		public soundName : string = "";
		public time : number = 0;
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
	export class ConfigWay {
		public id : number = 0;
		public zh_cn_name : string = "";
		public menu : number = 0;
		public menuIndex : number = 0;
		public value : number = 0;
		public icon : number = 0;
	}

	export class ConfigManager {
		private m_Global : ConfigGlobal = null;
		private m_ErrStr : Map<number, string > = null;
		private m_AAAShield : Map<number, ConfigAAAShield > = null;
		private m_Activities : Map<number, ConfigActivities > = null;
		private m_Avatar : Map<number, ConfigAvatar > = null;
		private m_Bag : Map<number, ConfigBag > = null;
		private m_BattleFormula : Map<number, ConfigBattleFormula > = null;
		private m_Chapter : Map<number, ConfigChapter > = null;
		private m_CheckPoint : Map<number, ConfigCheckPoint > = null;
		private m_Compound : Map<number, ConfigCompound > = null;
		private m_CountActivities : Map<number, ConfigCountActivities > = null;
		private m_Daily : Map<number, ConfigDaily > = null;
		private m_Draug : Map<number, ConfigDraug > = null;
		private m_DraugAwaken : Map<number, ConfigDraugAwaken > = null;
		private m_DraugSuit : Map<number, ConfigDraugSuit > = null;
		private m_DuelDan : Map<number, ConfigDuelDan > = null;
		private m_DuelRanking : Map<number, ConfigDuelRanking > = null;
		private m_DuelSeason : Map<number, ConfigDuelSeason > = null;
		private m_EquipExp : Map<number, ConfigEquipExp > = null;
		private m_Equipment : Map<number, ConfigEquipment > = null;
		private m_Gashapon : Map<number, ConfigGashapon > = null;
		private m_Guide : Map<number, ConfigGuide > = null;
		private m_HeadPortrait : Map<number, ConfigHeadPortrait > = null;
		private m_Hero : Map<number, ConfigHero > = null;
		private m_HeroExp : Map<number, ConfigHeroExp > = null;
		private m_HeroStar : Map<number, ConfigHeroStar > = null;
		private m_HeroTag : Map<number, ConfigHeroTag > = null;
		private m_HeroTeam : Map<number, ConfigHeroTeam > = null;
		private m_HeroType : Map<number, ConfigHeroType > = null;
		private m_Item : Map<number, ConfigItem > = null;
		private m_Loader : Map<number, ConfigLoader > = null;
		private m_Loading : Map<number, ConfigLoading > = null;
		private m_Mail : Map<number, ConfigMail > = null;
		private m_Map : Map<number, ConfigMap > = null;
		private m_Menu : Map<number, ConfigMenu > = null;
		private m_MenuIndex : Map<number, ConfigMenuIndex > = null;
		private m_MonsterProp : Map<number, ConfigMonsterProp > = null;
		private m_Msg : Map<number, ConfigMsg > = null;
		private m_PlayerLevel : Map<number, ConfigPlayerLevel > = null;
		private m_PlayerName : Map<number, ConfigPlayerName > = null;
		private m_PlayList : Map<number, ConfigPlayList > = null;
		private m_Plot : Map<number, ConfigPlot > = null;
		private m_Power : Map<number, ConfigPower > = null;
		private m_PowerGive : Map<number, ConfigPowerGive > = null;
		private m_Property : Map<number, ConfigProperty > = null;
		private m_PropValue : Map<number, ConfigPropValue > = null;
		private m_PvpMap : Map<number, ConfigPvpMap > = null;
		private m_Quest : Map<number, ConfigQuest > = null;
		private m_Reward : Map<number, ConfigReward > = null;
		private m_Shop : Map<number, ConfigShop > = null;
		private m_Skill : Map<number, ConfigSkill > = null;
		private m_Sound : Map<number, ConfigSound > = null;
		private m_Unlock : Map<number, ConfigUnlock > = null;
		private m_Way : Map<number, ConfigWay > = null;

		public get ErrStr(){
			return this.m_ErrStr;
		}
		
		public get Global(){
			return this.m_Global;
		}
				
		public get AAAShield(){
			return this.m_AAAShield;
		}
	
		public get Activities(){
			return this.m_Activities;
		}
	
		public get Avatar(){
			return this.m_Avatar;
		}
	
		public get Bag(){
			return this.m_Bag;
		}
	
		public get BattleFormula(){
			return this.m_BattleFormula;
		}
	
		public get Chapter(){
			return this.m_Chapter;
		}
	
		public get CheckPoint(){
			return this.m_CheckPoint;
		}
	
		public get Compound(){
			return this.m_Compound;
		}
	
		public get CountActivities(){
			return this.m_CountActivities;
		}
	
		public get Daily(){
			return this.m_Daily;
		}
	
		public get Draug(){
			return this.m_Draug;
		}
	
		public get DraugAwaken(){
			return this.m_DraugAwaken;
		}
	
		public get DraugSuit(){
			return this.m_DraugSuit;
		}
	
		public get DuelDan(){
			return this.m_DuelDan;
		}
	
		public get DuelRanking(){
			return this.m_DuelRanking;
		}
	
		public get DuelSeason(){
			return this.m_DuelSeason;
		}
	
		public get EquipExp(){
			return this.m_EquipExp;
		}
	
		public get Equipment(){
			return this.m_Equipment;
		}
	
		public get Gashapon(){
			return this.m_Gashapon;
		}
	
		public get Guide(){
			return this.m_Guide;
		}
	
		public get HeadPortrait(){
			return this.m_HeadPortrait;
		}
	
		public get Hero(){
			return this.m_Hero;
		}
	
		public get HeroExp(){
			return this.m_HeroExp;
		}
	
		public get HeroStar(){
			return this.m_HeroStar;
		}
	
		public get HeroTag(){
			return this.m_HeroTag;
		}
	
		public get HeroTeam(){
			return this.m_HeroTeam;
		}
	
		public get HeroType(){
			return this.m_HeroType;
		}
	
		public get Item(){
			return this.m_Item;
		}
	
		public get Loader(){
			return this.m_Loader;
		}
	
		public get Loading(){
			return this.m_Loading;
		}
	
		public get Mail(){
			return this.m_Mail;
		}
	
		public get Map(){
			return this.m_Map;
		}
	
		public get Menu(){
			return this.m_Menu;
		}
	
		public get MenuIndex(){
			return this.m_MenuIndex;
		}
	
		public get MonsterProp(){
			return this.m_MonsterProp;
		}
	
		public get Msg(){
			return this.m_Msg;
		}
	
		public get PlayerLevel(){
			return this.m_PlayerLevel;
		}
	
		public get PlayerName(){
			return this.m_PlayerName;
		}
	
		public get PlayList(){
			return this.m_PlayList;
		}
	
		public get Plot(){
			return this.m_Plot;
		}
	
		public get Power(){
			return this.m_Power;
		}
	
		public get PowerGive(){
			return this.m_PowerGive;
		}
	
		public get Property(){
			return this.m_Property;
		}
	
		public get PropValue(){
			return this.m_PropValue;
		}
	
		public get PvpMap(){
			return this.m_PvpMap;
		}
	
		public get Quest(){
			return this.m_Quest;
		}
	
		public get Reward(){
			return this.m_Reward;
		}
	
		public get Shop(){
			return this.m_Shop;
		}
	
		public get Skill(){
			return this.m_Skill;
		}
	
		public get Sound(){
			return this.m_Sound;
		}
	
		public get Unlock(){
			return this.m_Unlock;
		}
	
		public get Way(){
			return this.m_Way;
		}
	
		public getErrStr(id: number): string{
			let obj = this.m_ErrStr[id];
			if (obj == null){
				return "";
			}
			return obj;
		}
		
		public getAAAShield(id: number): ConfigAAAShield {
			let obj = this.m_AAAShield[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getActivities(id: number): ConfigActivities {
			let obj = this.m_Activities[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getAvatar(id: number): ConfigAvatar {
			let obj = this.m_Avatar[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getBag(id: number): ConfigBag {
			let obj = this.m_Bag[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getBattleFormula(id: number): ConfigBattleFormula {
			let obj = this.m_BattleFormula[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getChapter(id: number): ConfigChapter {
			let obj = this.m_Chapter[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getCheckPoint(id: number): ConfigCheckPoint {
			let obj = this.m_CheckPoint[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getCompound(id: number): ConfigCompound {
			let obj = this.m_Compound[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getCountActivities(id: number): ConfigCountActivities {
			let obj = this.m_CountActivities[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getDaily(id: number): ConfigDaily {
			let obj = this.m_Daily[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getDraug(id: number): ConfigDraug {
			let obj = this.m_Draug[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getDraugAwaken(id: number): ConfigDraugAwaken {
			let obj = this.m_DraugAwaken[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getDraugSuit(id: number): ConfigDraugSuit {
			let obj = this.m_DraugSuit[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getDuelDan(id: number): ConfigDuelDan {
			let obj = this.m_DuelDan[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getDuelRanking(id: number): ConfigDuelRanking {
			let obj = this.m_DuelRanking[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getDuelSeason(id: number): ConfigDuelSeason {
			let obj = this.m_DuelSeason[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getEquipExp(id: number): ConfigEquipExp {
			let obj = this.m_EquipExp[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getEquipment(id: number): ConfigEquipment {
			let obj = this.m_Equipment[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getGashapon(id: number): ConfigGashapon {
			let obj = this.m_Gashapon[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getGuide(id: number): ConfigGuide {
			let obj = this.m_Guide[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getHeadPortrait(id: number): ConfigHeadPortrait {
			let obj = this.m_HeadPortrait[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getHero(id: number): ConfigHero {
			let obj = this.m_Hero[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getHeroExp(id: number): ConfigHeroExp {
			let obj = this.m_HeroExp[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getHeroStar(id: number): ConfigHeroStar {
			let obj = this.m_HeroStar[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getHeroTag(id: number): ConfigHeroTag {
			let obj = this.m_HeroTag[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getHeroTeam(id: number): ConfigHeroTeam {
			let obj = this.m_HeroTeam[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getHeroType(id: number): ConfigHeroType {
			let obj = this.m_HeroType[id];
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
	
		public getLoader(id: number): ConfigLoader {
			let obj = this.m_Loader[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getLoading(id: number): ConfigLoading {
			let obj = this.m_Loading[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getMail(id: number): ConfigMail {
			let obj = this.m_Mail[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getMap(id: number): ConfigMap {
			let obj = this.m_Map[id];
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
	
		public getMenuIndex(id: number): ConfigMenuIndex {
			let obj = this.m_MenuIndex[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getMonsterProp(id: number): ConfigMonsterProp {
			let obj = this.m_MonsterProp[id];
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
	
		public getPlayerLevel(id: number): ConfigPlayerLevel {
			let obj = this.m_PlayerLevel[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getPlayerName(id: number): ConfigPlayerName {
			let obj = this.m_PlayerName[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getPlayList(id: number): ConfigPlayList {
			let obj = this.m_PlayList[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getPlot(id: number): ConfigPlot {
			let obj = this.m_Plot[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getPower(id: number): ConfigPower {
			let obj = this.m_Power[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getPowerGive(id: number): ConfigPowerGive {
			let obj = this.m_PowerGive[id];
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
	
		public getPropValue(id: number): ConfigPropValue {
			let obj = this.m_PropValue[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getPvpMap(id: number): ConfigPvpMap {
			let obj = this.m_PvpMap[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getQuest(id: number): ConfigQuest {
			let obj = this.m_Quest[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getReward(id: number): ConfigReward {
			let obj = this.m_Reward[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getShop(id: number): ConfigShop {
			let obj = this.m_Shop[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getSkill(id: number): ConfigSkill {
			let obj = this.m_Skill[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	
		public getSound(id: number): ConfigSound {
			let obj = this.m_Sound[id];
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
	
		public getWay(id: number): ConfigWay {
			let obj = this.m_Way[id];
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
