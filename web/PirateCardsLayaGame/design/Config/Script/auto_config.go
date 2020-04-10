package frame
import (
	"antnet"
	"encoding/json"
	"io/ioutil"
)
type DTItemNum struct {
	ItemId int32 `json:"itemId"`
	ItemNum int32 `json:"itemNum"`
}
type DTRewardRandom struct {
	Weight int32 `json:"weight"`
	ItemType int32 `json:"itemType"`
	ItemId int32 `json:"itemId"`
	ItemNum int32 `json:"itemNum"`
}
type DTStoryNum struct {
	Star int32 `json:"star"`
	Num int32 `json:"num"`
}
type DTVector2 struct {
	X float32 `json:"x"`
	Y float32 `json:"y"`
}
type DTActorSkill struct {
	Group_id int32 `json:"group_id"`
	Lv int32 `json:"lv"`
}
type DTActorStory struct {
	Story int32 `json:"story"`
	Lv int32 `json:"lv"`
	Property int32 `json:"property"`
}
type DTActorFeature struct {
	Feature int32 `json:"feature"`
	Lv int32 `json:"lv"`
	Property int32 `json:"property"`
}
type DTActorCharacter struct {
	Character int32 `json:"character"`
	Lv int32 `json:"lv"`
	Property int32 `json:"property"`
}
type DTRandomInterval struct {
	Num1 int32 `json:"num1"`
	Num2 int32 `json:"num2"`
}
type DTShootType struct {
	Shoottypeid int32 `json:"shoottypeid"`
	Rate int32 `json:"rate"`
}
type DTStoryEffect struct {
	Storyeffect int32 `json:"storyeffect"`
	Rate int32 `json:"rate"`
}
type DTBuildingReq struct {
	Type int32 `json:"type"`
	Level int32 `json:"level"`
}
type DTValue2 struct {
	V1 int32 `json:"v1"`
	V2 int32 `json:"v2"`
}
type DTValue3 struct {
	V1 int32 `json:"v1"`
	V2 int32 `json:"v2"`
	V3 int32 `json:"v3"`
}
type DTDrop struct {
	X int32 `json:"x"`
	Y float32 `json:"y"`
}
type DTPerformActoin struct {
	V1 int32 `json:"v1"`
	V2 int32 `json:"v2"`
	V3 int32 `json:"v3"`
}
type DTPerformSpeak struct {
	V1 int32 `json:"v1"`
	V2 int32 `json:"v2"`
	V3 int32 `json:"v3"`
}
type DTParts struct {
	V1 string `json:"v1"`
	V2 string `json:"v2"`
}
type DTProficiency struct {
	V1 int32 `json:"v1"`
	V2 int32 `json:"v2"`
}
type DTDate struct {
	Y int32 `json:"y"`
	M int32 `json:"m"`
	D int32 `json:"d"`
}
type DTTime struct {
	H int32 `json:"h"`
	Mm int32 `json:"mm"`
	S int32 `json:"s"`
}
type DTDateTime struct {
	Y int32 `json:"y"`
	M int32 `json:"m"`
	D int32 `json:"d"`
	H int32 `json:"h"`
	Mm int32 `json:"mm"`
	S int32 `json:"s"`
}
type DTFixItemNum struct {
	ItemType int32 `json:"itemType"`
	ItemId int32 `json:"itemId"`
	ItemNum int32 `json:"itemNum"`
}
type DTGiftNum struct {
	ItemId int32 `json:"itemId"`
	ItemNum int32 `json:"itemNum"`
	Property int32 `json:"property"`
}
type DTLabelProperty struct {
	StoryTag int32 `json:"storyTag"`
	Property int32 `json:"property"`
}
type DTInitialLabel struct {
	StoryTag int32 `json:"storyTag"`
	Level int32 `json:"level"`
	Property int32 `json:"property"`
}
type DTPerformanceCondition struct {
	Lv int32 `json:"lv"`
	Property int32 `json:"property"`
	Num int32 `json:"num"`
}
type DTSkillTiggerCondition struct {
	TiggerConditon int32 `json:"tiggerConditon"`
	TiggerValue int32 `json:"tiggerValue"`
}
type DTburstlibrary struct {
	ItemId int32 `json:"itemId"`
	ItemNum int32 `json:"itemNum"`
	Rate int32 `json:"rate"`
}
type DTProp struct {
	PropID int32 `json:"PropID"`
	Rate int32 `json:"Rate"`
}
type DTRandNum struct {
	Num int32 `json:"Num"`
	Rate int32 `json:"Rate"`
}
type DTPropGrowupStep struct {
	Level int32 `json:"level"`
	Step int32 `json:"step"`
}
type DTDecompose struct {
	Percent int32 `json:"percent"`
	Rewardid int32 `json:"rewardid"`
}
type DTStarReward struct {
	Level int32 `json:"level"`
	Starnum int32 `json:"starnum"`
	Rewardid int32 `json:"rewardid"`
}
type DTBuffId struct {
	BuffID1 int32 `json:"buffID1"`
	BuffID2 int32 `json:"buffID2"`
	BuffID3 int32 `json:"buffID3"`
	BuffID4 int32 `json:"buffID4"`
	BuffID5 int32 `json:"buffID5"`
	BuffID6 int32 `json:"buffID6"`
}
type ConfigGlobal struct {
	EverydayUpdateTime	int32 `json:"everydayUpdateTime"`
	RoleNameAutoGen	string `json:"roleNameAutoGen"`
	RoleNameMaxLength	int32 `json:"roleNameMaxLength"`
	RoleNameMinLength	int32 `json:"roleNameMinLength"`
	SuperAccountSwitch	bool `json:"superAccountSwitch"`
	RoleNameRepated	bool `json:"roleNameRepated"`
	FriendReqMaxCnt	int32 `json:"friendReqMaxCnt"`
	FriendMaxCnt	int32 `json:"friendMaxCnt"`
	ChatGamerMaxCnt	int32 `json:"chatGamerMaxCnt"`
	ChatWorldMaxCnt	int32 `json:"chatWorldMaxCnt"`
	GamerMailMaxCnt	int32 `json:"gamerMailMaxCnt"`
	WorldMailMaxCnt	int32 `json:"worldMailMaxCnt"`
	WordCheck	bool `json:"wordCheck"`
	Notices	string `json:"notices"`
	PvpMatchTime	int32 `json:"PvpMatchTime"`
	PvpMatchTime2	int32 `json:"PvpMatchTime2"`
	ChannelMine	bool `json:"ChannelMine"`
	PvpResultMaxCnt	int32 `json:"pvpResultMaxCnt"`
	ShareTitle	string `json:"shareTitle"`
	ShareImgUrl	string `json:"shareImgUrl"`
	ShareImgId	string `json:"shareImgId"`
	Per1V10Icon	int32 `json:"per1V10Icon"`
	Per2V10Icon	int32 `json:"per2V10Icon"`
	WorldChatIcon	int32 `json:"worldChatIcon"`
	PvpIconReward	int32 `json:"pvpIconReward"`
	MaxBagSpace	int32 `json:"maxBagSpace"`
	DefAvatar	string `json:"DefAvatar"`
	PackInitCapacity	int32 `json:"PackInitCapacity"`
	Test	[]int32 `json:"test"`
	Test1	[]*DTItemNum `json:"test1"`
	Test2	*DTItemNum `json:"test2"`
	BestDecompose	[]*DTDecompose `json:"BestDecompose"`
	DraugTempAreaLength	int32 `json:"draugTempAreaLength"`
	NameCost	*DTItemNum `json:"nameCost"`
	HeroLevelItem	[]int32 `json:"heroLevelItem"`
	PowerIncrease	int32 `json:"powerIncrease"`
	UpdataDayTime	*DTTime `json:"updataDayTime"`
	BaseCount	[]int32 `json:"baseCount"`
	EliteBuyCount	[]*DTItemNum `json:"eliteBuyCount"`
	DevilBuyCount	[]*DTItemNum `json:"devilBuyCount"`
	ItemBag	int32 `json:"itemBag"`
	EquipBag	int32 `json:"equipBag"`
	TokenBag	int32 `json:"tokenBag"`
}
type ConfigActivities struct {
	Id	int32 `json:"id"`
	Type	int32 `json:"type"`
	StartType	int32 `json:"startType"`
	LevelReq	int32 `json:"levelReq"`
	BlockReq	int32 `json:"blockReq"`
	Start	int32 `json:"start"`
	Duration	int32 `json:"duration"`
	Icon	int32 `json:"icon"`
	IconChosen	int32 `json:"iconChosen"`
}
type ConfigAvatar struct {
	Id	int32 `json:"id"`
	En_name	string `json:"en_name"`
	Zh_cn_name	string `json:"zh_cn_name"`
}
type ConfigBag struct {
	Id	int32 `json:"id"`
	ItemId	int32 `json:"itemId"`
	Level	int32 `json:"level"`
	SellPrice	int32 `json:"sellPrice"`
	StackNumber	int32 `json:"stackNumber"`
}
type ConfigBattleFormula struct {
	Id	int32 `json:"id"`
	ParaName	string `json:"ParaName"`
	Tips	string `json:"Tips"`
	ParaValue	int32 `json:"ParaValue"`
	ValueType	int32 `json:"ValueType"`
}
type ConfigChapter struct {
	Id	int32 `json:"id"`
	Zh_cn_name	string `json:"zh_cn_name"`
	Icon	int32 `json:"icon"`
	StarReward	[]*DTStarReward `json:"starReward"`
}
type ConfigCheckPoint struct {
	Id	int32 `json:"id"`
	Type	int32 `json:"type"`
	Chapter	int32 `json:"chapter"`
	Zh_cn_name	string `json:"zh_cn_name"`
	Icon	int32 `json:"icon"`
	Picture	int32 `json:"picture"`
	ChallengePower	int32 `json:"challengePower"`
	Prepose	int32 `json:"prepose"`
	Level	int32 `json:"Level"`
	Time	int32 `json:"time"`
	Sweep	bool `json:"sweep"`
	FirstReward	int32 `json:"firstReward"`
	RewardId	int32 `json:"rewardId"`
	BaseReward	int32 `json:"baseReward"`
	ChallengeTime	int32 `json:"challengeTime"`
	ChallengeHp	int32 `json:"challengeHp"`
}
type ConfigCompound struct {
	Id	int32 `json:"id"`
	Syn_item	int32 `json:"syn_item"`
	Num_req	int32 `json:"num_req"`
	Split_list	[]*DTItemNum `json:"split_list"`
}
type ConfigCountActivities struct {
	Id	int32 `json:"id"`
	RewardId	int32 `json:"rewardId"`
	Avatar	int32 `json:"avatar"`
}
type ConfigDraug struct {
	Id	int32 `json:"id"`
	Name	string `json:"name"`
	Range	int32 `json:"range"`
	TypeName	int32 `json:"TypeName"`
	PosRate	[]int32 `json:"PosRate"`
	MaxRandNum	int32 `json:"MaxRandNum"`
	RandNum	[]*DTRandNum `json:"RandNum"`
	SecPropStep	int32 `json:"SecPropStep"`
	InitialExp	int32 `json:"initialExp"`
	ExpLevel	[]int32 `json:"ExpLevel"`
	Eat	bool `json:"eat"`
	Decompose	bool `json:"decompose"`
	CoinRatio	int32 `json:"CoinRatio"`
	OtherDrop	int32 `json:"OtherDrop"`
	PropPos1	[]*DTProp `json:"PropPos1"`
	Pos1PerModule	int32 `json:"Pos1PerModule"`
	PropPos2	[]*DTProp `json:"PropPos2"`
	Pos2PerModule	int32 `json:"Pos2PerModule"`
	PropPos3	[]*DTProp `json:"PropPos3"`
	Pos3PerModule	int32 `json:"Pos3PerModule"`
	PropPos4	[]*DTProp `json:"PropPos4"`
	Pos4PerModule	int32 `json:"Pos4PerModule"`
	PropPos5	[]*DTProp `json:"PropPos5"`
	Pos5PerModule	int32 `json:"Pos5PerModule"`
	PropPos6	[]*DTProp `json:"PropPos6"`
	Pos6PerModule	int32 `json:"Pos6PerModule"`
	SecProp	[]*DTProp `json:"SecProp"`
	SecPerModule	int32 `json:"SecPerModule"`
	BatterSecPropRate	int32 `json:"BatterSecPropRate"`
}
type ConfigDraugAwaken struct {
	Id	int32 `json:"id"`
	Name	string `json:"name"`
	Cost_coin	[]*DTItemNum `json:"cost_coin"`
	Rate	int32 `json:"rate"`
	Draug_rate	int32 `json:"draug_rate"`
}
type ConfigDraugSuit struct {
	Id	int32 `json:"id"`
	TypeName	int32 `json:"TypeName"`
	Suit2	int32 `json:"Suit2"`
	Suit2PerModule	int32 `json:"Suit2PerModule"`
	Suit4	int32 `json:"Suit4"`
	Suit4PerModule	int32 `json:"Suit4PerModule"`
}
type ConfigEquipExp struct {
	Id	int32 `json:"id"`
	Level	int32 `json:"level"`
	Exp	int32 `json:"exp"`
	Coin	int32 `json:"coin"`
}
type ConfigEquipment struct {
	Id	int32 `json:"id"`
	Zh_cn_name	string `json:"zh_cn_name"`
	Quality	int32 `json:"quality"`
	Icon	int32 `json:"icon"`
	EquipPos	int32 `json:"equipPos"`
	ArmorType	int32 `json:"armorType"`
	HeroType	int32 `json:"heroType"`
	BuffId	[]*DTBuffId `json:"buffId"`
	HeroID	[]int32 `json:"heroID"`
	AtkType	int32 `json:"atkType"`
	AtkRange	*DTRandomInterval `json:"atkRange"`
	PropID	[]*DTProp `json:"propID"`
	ExpPara	int32 `json:"expPara"`
	StarProp	[]*DTProp `json:"starProp"`
	Module	int32 `json:"module"`
	SpecStarItem	int32 `json:"specStarItem"`
	ItemNum	[]int32 `json:"itemNum"`
	StarLevelReq	[]int32 `json:"starLevelReq"`
	Eat	bool `json:"eat"`
	EatPara	int32 `json:"eatPara"`
	Decompose	bool `json:"decompose"`
	DropItem	int32 `json:"dropItem"`
}
type ConfigGashapon struct {
	Id	int32 `json:"id"`
	Type	int32 `json:"type"`
	Menu	int32 `json:"menu"`
	Num	int32 `json:"num"`
	Cost	[]*DTFixItemNum `json:"cost"`
	FreeNum	int32 `json:"freeNum"`
	FreeTime	int32 `json:"freeTime"`
	StartTime	*DTDateTime `json:"startTime"`
	EndTime	*DTDateTime `json:"endTime"`
	RewardId	int32 `json:"rewardId"`
	Allowance	int32 `json:"allowance"`
	AllowanceNum	int32 `json:"allowanceNum"`
}
type ConfigHeadPortrait struct {
	Id	int32 `json:"id"`
	Zh_cn_name	string `json:"zh_cn_name"`
	Sex	int32 `json:"sex"`
	Unlock	*DTItemNum `json:"unlock"`
	Icon	int32 `json:"icon"`
}
type ConfigHero struct {
	Id	int32 `json:"id"`
	Zh_cn_name	string `json:"zh_cn_name"`
	Quality	int32 `json:"quality"`
	Type	[]int32 `json:"type"`
	Basestar	int32 `json:"basestar"`
	HeroItem	int32 `json:"heroItem"`
	HeroItemNum	int32 `json:"heroItemNum"`
	Maxstar	int32 `json:"maxstar"`
	Icon	int32 `json:"icon"`
	Display	[]int32 `json:"display"`
	Tag	[]int32 `json:"tag"`
	PropId	[]int32 `json:"propId"`
	StarId	[]int32 `json:"starId"`
	BuffId	[]*DTBuffId `json:"buffId"`
	Skill1	int32 `json:"skill1"`
	Skill2	int32 `json:"skill2"`
	Skill3	int32 `json:"skill3"`
	Skill4	int32 `json:"skill4"`
}
type ConfigHeroExp struct {
	Id	int32 `json:"id"`
	Level	int32 `json:"level"`
	Exp	int32 `json:"exp"`
}
type ConfigHeroStar struct {
	Id	int32 `json:"id"`
	Quality	int32 `json:"quality"`
	StarNeed1	int32 `json:"starNeed1"`
	StarNeed2	int32 `json:"starNeed2"`
	StarNeed3	int32 `json:"starNeed3"`
	StarNeed4	int32 `json:"starNeed4"`
	StarNeed5	int32 `json:"starNeed5"`
}
type ConfigHeroTag struct {
	Id	int32 `json:"id"`
	Tag	int32 `json:"tag"`
	Zh_cn_name	string `json:"zh_cn_name"`
	Icon	int32 `json:"icon"`
}
type ConfigHeroTeam struct {
	Id	int32 `json:"id"`
	Zh_cn_name	string `json:"zh_cn_name"`
	NameValue	int32 `json:"nameValue"`
	NeedLevel	int32 `json:"needLevel"`
	Cost	[]*DTItemNum `json:"cost"`
	NeedRate	[]int32 `json:"needRate"`
}
type ConfigHeroType struct {
	Id	int32 `json:"id"`
	Type	int32 `json:"type"`
	Zh_cn_name	string `json:"zh_cn_name"`
}
type ConfigItem struct {
	Id	int32 `json:"id"`
	Zh_cn_name	string `json:"zh_cn_name"`
	Icon	int32 `json:"icon"`
	Quality	int32 `json:"quality"`
	Type	int32 `json:"type"`
	MaxNum	int32 `json:"maxNum"`
	MaxLimit	int32 `json:"maxLimit"`
	GetWay	[]int32 `json:"getWay"`
	UseType	[]int32 `json:"useType"`
	UseCost	[]*DTItemNum `json:"useCost"`
	RewardId	int32 `json:"rewardId"`
	CanSell	bool `json:"canSell"`
	Price	*DTItemNum `json:"price"`
	LimitTime	*DTTime `json:"limitTime"`
	PeriodTime	*DTDateTime `json:"periodTime"`
	Value	int32 `json:"value"`
}
type ConfigLoader struct {
	Id	int32 `json:"id"`
}
type ConfigMail struct {
	Id	int32 `json:"id"`
	Life_time	int32 `json:"life_time"`
	Zh_cn_title	string `json:"zh_cn_title"`
	En_title	string `json:"en_title"`
	Item	[]*DTFixItemNum `json:"item"`
	Zh_cn_content	string `json:"zh_cn_content"`
	En_content	string `json:"en_content"`
}
type ConfigMap struct {
	Id	int32 `json:"id"`
	G	int32 `json:"g"`
	Vx	int32 `json:"vx"`
	Vy	int32 `json:"vy"`
	Maxt	int32 `json:"maxt"`
	Mint	int32 `json:"mint"`
	MaxPillar	int32 `json:"maxPillar"`
}
type ConfigMenu struct {
	Id	int32 `json:"id"`
	Zh_cn_name	string `json:"zh_cn_name"`
	Icon	string `json:"icon"`
	ModuleName	string `json:"moduleName"`
	Layer	int32 `json:"layer"`
	CloseOtherType	int32 `json:"closeOtherType"`
	CloseHomeWindow	bool `json:"closeHomeWindow"`
	IsAutoOpenHomeWindow	bool `json:"isAutoOpenHomeWindow"`
	CacheTime	int32 `json:"cacheTime"`
	LoaderId	int32 `json:"loaderId"`
	BarType	int32 `json:"barType"`
	BarIndex	int32 `json:"barIndex"`
	OpenAnimation	int32 `json:"openAnimation"`
	CloseAnimation	int32 `json:"closeAnimation"`
	RedType	int32 `json:"redType"`
}
type ConfigMsg struct {
	Id	int32 `json:"id"`
	Key	string `json:"key"`
}
type ConfigPlayerLevel struct {
	Id	int32 `json:"id"`
	PlayerNeedExp	int32 `json:"playerNeedExp"`
	AddPower	int32 `json:"addPower"`
	MaxPower	int32 `json:"maxPower"`
	RewardId	int32 `json:"rewardId"`
}
type ConfigPlayerName struct {
	Id	int32 `json:"id"`
	Zh_cn_name1	string `json:"zh_cn_name1"`
	Zh_cn_name2	string `json:"zh_cn_name2"`
	Zh_cn_name3	string `json:"zh_cn_name3"`
}
type ConfigPower struct {
	Id	int32 `json:"id"`
	UseCount	int32 `json:"useCount"`
	CostID	[]*DTItemNum `json:"costID"`
	AddPower	[]int32 `json:"addPower"`
}
type ConfigPowerGive struct {
	Id	int32 `json:"id"`
	StartTime	*DTTime `json:"startTime"`
	OverTime	*DTTime `json:"overTime"`
	AddPower	int32 `json:"addPower"`
	VipAddPower	int32 `json:"vipAddPower"`
}
type ConfigProperty struct {
	Id	int32 `json:"id"`
	Field	string `json:"field"`
	Zh_cn_name	string `json:"zh_cn_name"`
	ValueType	int32 `json:"ValueType"`
	Icon	int32 `json:"icon"`
	GroupType	int32 `json:"groupType"`
	Visible	bool `json:"visible"`
}
type ConfigPropValue struct {
	Id	int32 `json:"id"`
	DisplayAss	string `json:"DisplayAss"`
	PropName	string `json:"PropName"`
	RandomInterval	*DTRandomInterval `json:"RandomInterval"`
	PropValue	uint64 `json:"PropValue"`
	GrowupMode	int32 `json:"GrowupMode"`
	Upgrade	[]*DTPropGrowupStep `json:"Upgrade"`
	RangeRatio	[]uint64 `json:"RangeRatio"`
}
type ConfigPvp struct {
	Id	int32 `json:"id"`
	Pos	int32 `json:"pos"`
	Length	int32 `json:"length"`
	R	int32 `json:"r"`
	G	int32 `json:"g"`
	B	int32 `json:"b"`
	X	int32 `json:"x"`
	Y	int32 `json:"y"`
	Delta	int32 `json:"delta"`
	BodyScale	int32 `json:"bodyScale"`
}
type ConfigReward struct {
	Id	int32 `json:"id"`
	FixedItems	[]*DTFixItemNum `json:"fixedItems"`
	MultipleReward	int32 `json:"multipleReward"`
	Noreward	int32 `json:"noreward"`
	RandomItems	[]*DTRewardRandom `json:"randomItems"`
	RandomCount	int32 `json:"randomCount"`
}
type ConfigShop struct {
	Id	int32 `json:"id"`
	Space	int32 `json:"space"`
	Count	int32 `json:"count"`
	OldPrice	int32 `json:"oldPrice"`
	NowPrice	int32 `json:"nowPrice"`
	Currency	int32 `json:"currency"`
}
type ConfigSkill struct {
	Id	int32 `json:"id"`
	Icon	int32 `json:"icon"`
	Zh_cn_Desc	string `json:"zh_cn_Desc"`
	Zh_cn_UpDesc	string `json:"zh_cn_UpDesc"`
	Zh_cn_tips	string `json:"zh_cn_tips"`
	Cost	[]*DTItemNum `json:"cost"`
	CostMana	int32 `json:"costMana"`
	CostRage	int32 `json:"costRage"`
	CostChargePoint	int32 `json:"costChargePoint"`
	BaseChargePoint	int32 `json:"baseChargePoint"`
	MaxChargePoint	int32 `json:"maxChargePoint"`
	RecoverChargePoint	int32 `json:"recoverChargePoint"`
	Cooldown	int32 `json:"cooldown"`
	ManaHitRecovery	int32 `json:"manaHitRecovery"`
	RageHitRecovery	int32 `json:"rageHitRecovery"`
	FixedDamage	[]int32 `json:"fixedDamage"`
	CoefficientDamage	[]int32 `json:"coefficientDamage"`
	DamageDistribution	[]int32 `json:"damageDistribution"`
	ProjectFactors	[]int32 `json:"projectFactors"`
}
type ConfigUnlock struct {
	Id	int32 `json:"id"`
	Zh_cn_name	string `json:"zh_cn_name"`
	Open_data	int32 `json:"open_data"`
}
type ConfigWay struct {
	Id	int32 `json:"id"`
}


func (r *ConfigDoc) GetConfigActivities(id int32) *ConfigActivities {
	if value, founded := r.Activities[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Activities error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigAvatar(id int32) *ConfigAvatar {
	if value, founded := r.Avatar[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Avatar error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigBag(id int32) *ConfigBag {
	if value, founded := r.Bag[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Bag error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigBattleFormula(id int32) *ConfigBattleFormula {
	if value, founded := r.BattleFormula[id]; founded{
		return value
	}
	antnet.LogError("[config]get config BattleFormula error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigChapter(id int32) *ConfigChapter {
	if value, founded := r.Chapter[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Chapter error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigCheckPoint(id int32) *ConfigCheckPoint {
	if value, founded := r.CheckPoint[id]; founded{
		return value
	}
	antnet.LogError("[config]get config CheckPoint error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigCompound(id int32) *ConfigCompound {
	if value, founded := r.Compound[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Compound error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigCountActivities(id int32) *ConfigCountActivities {
	if value, founded := r.CountActivities[id]; founded{
		return value
	}
	antnet.LogError("[config]get config CountActivities error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigDraug(id int32) *ConfigDraug {
	if value, founded := r.Draug[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Draug error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigDraugAwaken(id int32) *ConfigDraugAwaken {
	if value, founded := r.DraugAwaken[id]; founded{
		return value
	}
	antnet.LogError("[config]get config DraugAwaken error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigDraugSuit(id int32) *ConfigDraugSuit {
	if value, founded := r.DraugSuit[id]; founded{
		return value
	}
	antnet.LogError("[config]get config DraugSuit error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigEquipExp(id int32) *ConfigEquipExp {
	if value, founded := r.EquipExp[id]; founded{
		return value
	}
	antnet.LogError("[config]get config EquipExp error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigEquipment(id int32) *ConfigEquipment {
	if value, founded := r.Equipment[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Equipment error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigGashapon(id int32) *ConfigGashapon {
	if value, founded := r.Gashapon[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Gashapon error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigHeadPortrait(id int32) *ConfigHeadPortrait {
	if value, founded := r.HeadPortrait[id]; founded{
		return value
	}
	antnet.LogError("[config]get config HeadPortrait error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigHero(id int32) *ConfigHero {
	if value, founded := r.Hero[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Hero error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigHeroExp(id int32) *ConfigHeroExp {
	if value, founded := r.HeroExp[id]; founded{
		return value
	}
	antnet.LogError("[config]get config HeroExp error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigHeroStar(id int32) *ConfigHeroStar {
	if value, founded := r.HeroStar[id]; founded{
		return value
	}
	antnet.LogError("[config]get config HeroStar error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigHeroTag(id int32) *ConfigHeroTag {
	if value, founded := r.HeroTag[id]; founded{
		return value
	}
	antnet.LogError("[config]get config HeroTag error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigHeroTeam(id int32) *ConfigHeroTeam {
	if value, founded := r.HeroTeam[id]; founded{
		return value
	}
	antnet.LogError("[config]get config HeroTeam error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigHeroType(id int32) *ConfigHeroType {
	if value, founded := r.HeroType[id]; founded{
		return value
	}
	antnet.LogError("[config]get config HeroType error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigItem(id int32) *ConfigItem {
	if value, founded := r.Item[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Item error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigLoader(id int32) *ConfigLoader {
	if value, founded := r.Loader[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Loader error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigMail(id int32) *ConfigMail {
	if value, founded := r.Mail[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Mail error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigMap(id int32) *ConfigMap {
	if value, founded := r.Map[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Map error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigMenu(id int32) *ConfigMenu {
	if value, founded := r.Menu[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Menu error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigMsg(id int32) *ConfigMsg {
	if value, founded := r.Msg[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Msg error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigPlayerLevel(id int32) *ConfigPlayerLevel {
	if value, founded := r.PlayerLevel[id]; founded{
		return value
	}
	antnet.LogError("[config]get config PlayerLevel error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigPlayerName(id int32) *ConfigPlayerName {
	if value, founded := r.PlayerName[id]; founded{
		return value
	}
	antnet.LogError("[config]get config PlayerName error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigPower(id int32) *ConfigPower {
	if value, founded := r.Power[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Power error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigPowerGive(id int32) *ConfigPowerGive {
	if value, founded := r.PowerGive[id]; founded{
		return value
	}
	antnet.LogError("[config]get config PowerGive error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigProperty(id int32) *ConfigProperty {
	if value, founded := r.Property[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Property error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigPropValue(id int32) *ConfigPropValue {
	if value, founded := r.PropValue[id]; founded{
		return value
	}
	antnet.LogError("[config]get config PropValue error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigPvp(id int32) *ConfigPvp {
	if value, founded := r.Pvp[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Pvp error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigReward(id int32) *ConfigReward {
	if value, founded := r.Reward[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Reward error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigShop(id int32) *ConfigShop {
	if value, founded := r.Shop[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Shop error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigSkill(id int32) *ConfigSkill {
	if value, founded := r.Skill[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Skill error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigUnlock(id int32) *ConfigUnlock {
	if value, founded := r.Unlock[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Unlock error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigWay(id int32) *ConfigWay {
	if value, founded := r.Way[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Way error %v",id)
	return nil
}

func ReadConfigDoc() *ConfigDoc {
	config := &ConfigDoc{}
	data, err := ioutil.ReadFile("conf/doc/serverConfig.json")
	if err != nil {
		antnet.LogError("read conf failed:%v",err)
		return nil
	}
	err = json.Unmarshal(data, config)
	if err != nil {
		antnet.LogError("read conf failed:%v",err)
		return nil
	}
	config.ErrStr = errMap
	antnet.LogInfo("read conf success")
	return config
}

type ConfigDoc struct {
	Global *ConfigGlobal `json:"Global"`
	ErrStr map[uint16]string `json:"ErrStr"`
	Activities map[int32]*ConfigActivities `json:"Activities"`
	Avatar map[int32]*ConfigAvatar `json:"Avatar"`
	Bag map[int32]*ConfigBag `json:"Bag"`
	BattleFormula map[int32]*ConfigBattleFormula `json:"BattleFormula"`
	Chapter map[int32]*ConfigChapter `json:"Chapter"`
	CheckPoint map[int32]*ConfigCheckPoint `json:"CheckPoint"`
	Compound map[int32]*ConfigCompound `json:"Compound"`
	CountActivities map[int32]*ConfigCountActivities `json:"CountActivities"`
	Draug map[int32]*ConfigDraug `json:"Draug"`
	DraugAwaken map[int32]*ConfigDraugAwaken `json:"DraugAwaken"`
	DraugSuit map[int32]*ConfigDraugSuit `json:"DraugSuit"`
	EquipExp map[int32]*ConfigEquipExp `json:"EquipExp"`
	Equipment map[int32]*ConfigEquipment `json:"Equipment"`
	Gashapon map[int32]*ConfigGashapon `json:"Gashapon"`
	HeadPortrait map[int32]*ConfigHeadPortrait `json:"HeadPortrait"`
	Hero map[int32]*ConfigHero `json:"Hero"`
	HeroExp map[int32]*ConfigHeroExp `json:"HeroExp"`
	HeroStar map[int32]*ConfigHeroStar `json:"HeroStar"`
	HeroTag map[int32]*ConfigHeroTag `json:"HeroTag"`
	HeroTeam map[int32]*ConfigHeroTeam `json:"HeroTeam"`
	HeroType map[int32]*ConfigHeroType `json:"HeroType"`
	Item map[int32]*ConfigItem `json:"Item"`
	Loader map[int32]*ConfigLoader `json:"Loader"`
	Mail map[int32]*ConfigMail `json:"Mail"`
	Map map[int32]*ConfigMap `json:"Map"`
	Menu map[int32]*ConfigMenu `json:"Menu"`
	Msg map[int32]*ConfigMsg `json:"Msg"`
	PlayerLevel map[int32]*ConfigPlayerLevel `json:"PlayerLevel"`
	PlayerName map[int32]*ConfigPlayerName `json:"PlayerName"`
	Power map[int32]*ConfigPower `json:"Power"`
	PowerGive map[int32]*ConfigPowerGive `json:"PowerGive"`
	Property map[int32]*ConfigProperty `json:"Property"`
	PropValue map[int32]*ConfigPropValue `json:"PropValue"`
	Pvp map[int32]*ConfigPvp `json:"Pvp"`
	Reward map[int32]*ConfigReward `json:"Reward"`
	Shop map[int32]*ConfigShop `json:"Shop"`
	Skill map[int32]*ConfigSkill `json:"Skill"`
	Unlock map[int32]*ConfigUnlock `json:"Unlock"`
	Way map[int32]*ConfigWay `json:"Way"`
}


