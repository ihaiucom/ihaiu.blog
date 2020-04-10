(function() {
	var C2S = net.C2S;
	var _EventDispatch = net._EventDispatch;
	var netlogic = 
	{
		gamerLoginC2S: function(session, addr){
			C2S("GamerLoginC2S",{session: session, addr: addr});
		},
		gamerLoginS2C: new _EventDispatch(),

		gamerLoginGetDataC2S: function(){
			C2S("GamerLoginGetDataC2S",{});
		},
		gamerLoginGetDataS2C: new _EventDispatch(),

		serverTimeC2S: function(){
			C2S("ServerTimeC2S",{});
		},
		serverTimeS2C: new _EventDispatch(),

		gamerSubChatChannelC2S: function(channel, open){
			C2S("GamerSubChatChannelC2S",{channel: channel, open: open});
		},
		gamerSubChatChannelS2C: new _EventDispatch(),

		gamerChangeNameC2S: function(newName){
			C2S("GamerChangeNameC2S",{newName: newName});
		},
		gamerChangeNameS2C: new _EventDispatch(),

		gamerChangeAvatarC2S: function(Avatar){
			C2S("GamerChangeAvatarC2S",{Avatar: Avatar});
		},
		gamerChangeAvatarS2C: new _EventDispatch(),

		gamerGetBackpackC2S: function(){
			C2S("GamerGetBackpackC2S",{});
		},
		gamerGetBackpackS2C: new _EventDispatch(),

		gamerSellItemC2S: function(itemId, num, uid){
			C2S("GamerSellItemC2S",{itemId: itemId, num: num, uid: uid});
		},
		gamerSellItemS2C: new _EventDispatch(),

		gamerUseItemC2S: function(itemId, num, uid){
			C2S("GamerUseItemC2S",{itemId: itemId, num: num, uid: uid});
		},
		gamerUseItemS2C: new _EventDispatch(),

		gamerFriendChatC2S: function(toId, msg){
			C2S("GamerFriendChatC2S",{toId: toId, msg: msg});
		},
		gamerFriendChatS2C: new _EventDispatch(),

		gamerWorldChatC2S: function(server, msg){
			C2S("GamerWorldChatC2S",{server: server, msg: msg});
		},
		gamerWorldChatS2C: new _EventDispatch(),

		gamerTestChatC2S: function(toId, msg){
			C2S("GamerTestChatC2S",{toId: toId, msg: msg});
		},
		gamerTestChatS2C: new _EventDispatch(),

		gamerClubRequestC2S: function(clubId, msg){
			C2S("GamerClubRequestC2S",{clubId: clubId, msg: msg});
		},
		gamerClubRequestS2C: new _EventDispatch(),

		gamerNewFriendReqC2S: function(oid, msg){
			C2S("GamerNewFriendReqC2S",{oid: oid, msg: msg});
		},
		gamerNewFriendReqS2C: new _EventDispatch(),

		gamerDelFriendC2S: function(oid){
			C2S("GamerDelFriendC2S",{oid: oid});
		},
		gamerDelFriendS2C: new _EventDispatch(),

		gamerProcessFriendReqC2S: function(oid, result){
			C2S("GamerProcessFriendReqC2S",{oid: oid, result: result});
		},
		gamerProcessFriendReqS2C: new _EventDispatch(),

		gamerGetMailC2S: function(){
			C2S("GamerGetMailC2S",{});
		},
		gamerGetMailS2C: new _EventDispatch(),

		gamerDelMailC2S: function(mailId){
			C2S("GamerDelMailC2S",{mailId: mailId});
		},
		gamerDelMailS2C: new _EventDispatch(),

		gamerDelHaveReadMailC2S: function(){
			C2S("GamerDelHaveReadMailC2S",{});
		},
		gamerDelHaveReadMailS2C: new _EventDispatch(),

		gamerOneKeyRcvMailRewardC2S: function(){
			C2S("GamerOneKeyRcvMailRewardC2S",{});
		},
		gamerOneKeyRcvMailRewardS2C: new _EventDispatch(),

		gamerChangeMailStateC2S: function(mailId, state){
			C2S("GamerChangeMailStateC2S",{mailId: mailId, state: state});
		},
		gamerChangeMailStateS2C: new _EventDispatch(),

		gamerNewHeroC2S: function(heroId){
			C2S("GamerNewHeroC2S",{heroId: heroId});
		},
		gamerNewHeroS2C: new _EventDispatch(),

		gamerUpgradeHeroC2S: function(heroId, upgradeNum){
			C2S("GamerUpgradeHeroC2S",{heroId: heroId, upgradeNum: upgradeNum});
		},
		gamerUpgradeHeroS2C: new _EventDispatch(),

		gamerUseHeroMedicineC2S: function(heroId, itemId, useNum){
			C2S("GamerUseHeroMedicineC2S",{heroId: heroId, itemId: itemId, useNum: useNum});
		},
		gamerUseHeroMedicineS2C: new _EventDispatch(),

		gamerUpStarHeroC2S: function(heroId){
			C2S("GamerUpStarHeroC2S",{heroId: heroId});
		},
		gamerUpStarHeroS2C: new _EventDispatch(),

		gamerUpHeroSkillC2S: function(heroId, skillId){
			C2S("GamerUpHeroSkillC2S",{heroId: heroId, skillId: skillId});
		},
		gamerUpHeroSkillS2C: new _EventDispatch(),

		gamerGetHeroC2S: function(){
			C2S("GamerGetHeroC2S",{});
		},
		gamerGetHeroS2C: new _EventDispatch(),

		gamerPVPLoadingC2S: function(session, per){
			C2S("GamerPVPLoadingC2S",{session: session, per: per});
		},
		gamerPVPLoadingS2C: new _EventDispatch(),

		gamerPVPSyncC2S: function(session, input, needFrames, crc, inputs, reconn, exit, index, gateAddr, result, recvTime, clientAddr){
			C2S("GamerPVPSyncC2S",{session: session, input: input, needFrames: needFrames, crc: crc, inputs: inputs, reconn: reconn, exit: exit, index: index, gateAddr: gateAddr, result: result, recvTime: recvTime, clientAddr: clientAddr});
		},
		gamerPVPSyncS2C: new _EventDispatch(),

		gamerReliveC2S: function(times, checkPointId){
			C2S("GamerReliveC2S",{times: times, checkPointId: checkPointId});
		},
		gamerReliveS2C: new _EventDispatch(),

		gamerGetRealTimeRankC2S: function(){
			C2S("GamerGetRealTimeRankC2S",{});
		},
		gamerGetRealTimeRankS2C: new _EventDispatch(),

		gamerCheckPVPBattleC2S: function(session){
			C2S("GamerCheckPVPBattleC2S",{session: session});
		},
		gamerCheckPVPBattleS2C: new _EventDispatch(),

		gamerUploadWXInfoC2S: function(wxInfo){
			C2S("GamerUploadWXInfoC2S",{wxInfo: wxInfo});
		},
		gamerUploadWXInfoS2C: new _EventDispatch(),

		gamerGetNoviceGuideC2S: function(){
			C2S("GamerGetNoviceGuideC2S",{});
		},
		gamerGetNoviceGuideS2C: new _EventDispatch(),

		gamerNoviceGuideChangeC2S: function(noviceGuideList){
			C2S("GamerNoviceGuideChangeC2S",{noviceGuideList: noviceGuideList});
		},
		gamerNoviceGuideChangeS2C: new _EventDispatch(),

		gamerMatchC2S: function(type, heroId, teamId, checkPointId, danInfo, heroGroupId, heroList, secretLand){
			C2S("GamerMatchC2S",{type: type, heroId: heroId, teamId: teamId, checkPointId: checkPointId, danInfo: danInfo, heroGroupId: heroGroupId, heroList: heroList, secretLand: secretLand});
		},
		gamerMatchS2C: new _EventDispatch(),

		gamerCancelMatchC2S: function(){
			C2S("GamerCancelMatchC2S",{});
		},
		gamerCancelMatchS2C: new _EventDispatch(),

		gamerGetRewardC2S: function(type){
			C2S("GamerGetRewardC2S",{type: type});
		},
		gamerGetRewardS2C: new _EventDispatch(),

		gamerUseIconC2S: function(type, count, session){
			C2S("GamerUseIconC2S",{type: type, count: count, session: session});
		},
		gamerUseIconS2C: new _EventDispatch(),

		gamerExtractGashaponC2S: function(gashaponId){
			C2S("GamerExtractGashaponC2S",{gashaponId: gashaponId});
		},
		gamerExtractGashaponS2C: new _EventDispatch(),

		gamerGetGashaponPreviewC2S: function(gashaponType){
			C2S("GamerGetGashaponPreviewC2S",{gashaponType: gashaponType});
		},
		gamerGetGashaponPreviewS2C: new _EventDispatch(),

		getActivityRewardC2S: function(activityId){
			C2S("GetActivityRewardC2S",{activityId: activityId});
		},
		getActivityRewardS2C: new _EventDispatch(),

		createGuildC2S: function(guildName){
			C2S("CreateGuildC2S",{guildName: guildName});
		},
		createGuildS2C: new _EventDispatch(),

		guildGamerLoginC2S: function(guildId){
			C2S("GuildGamerLoginC2S",{guildId: guildId});
		},
		guildGamerLoginS2C: new _EventDispatch(),

		guildGamerLoginoutC2S: function(guildId){
			C2S("GuildGamerLoginoutC2S",{guildId: guildId});
		},
		guildGamerLoginoutS2C: new _EventDispatch(),

		dissolutionGuildC2S: function(guildId){
			C2S("DissolutionGuildC2S",{guildId: guildId});
		},
		dissolutionGuildS2C: new _EventDispatch(),

		getGuildC2S: function(guildId){
			C2S("GetGuildC2S",{guildId: guildId});
		},
		getGuildS2C: new _EventDispatch(),

		getGuildListC2S: function(serverId, page){
			C2S("GetGuildListC2S",{serverId: serverId, page: page});
		},
		getGuildListS2C: new _EventDispatch(),

		applyJoinGuildC2S: function(guildId){
			C2S("ApplyJoinGuildC2S",{guildId: guildId});
		},
		applyJoinGuildS2C: new _EventDispatch(),

		approvalJoinGuildC2S: function(guildId, applyerGid, result){
			C2S("ApprovalJoinGuildC2S",{guildId: guildId, applyerGid: applyerGid, result: result});
		},
		approvalJoinGuildS2C: new _EventDispatch(),

		inviteJoinGuildC2S: function(inviteeGid, guildId){
			C2S("InviteJoinGuildC2S",{inviteeGid: inviteeGid, guildId: guildId});
		},
		inviteJoinGuildS2C: new _EventDispatch(),

		agreeJoinGuildC2S: function(guildId, result){
			C2S("AgreeJoinGuildC2S",{guildId: guildId, result: result});
		},
		agreeJoinGuildS2C: new _EventDispatch(),

		quitGuildC2S: function(guildId){
			C2S("QuitGuildC2S",{guildId: guildId});
		},
		quitGuildS2C: new _EventDispatch(),

		kickOutGuildC2S: function(guildId, kickedGid){
			C2S("KickOutGuildC2S",{guildId: guildId, kickedGid: kickedGid});
		},
		kickOutGuildS2C: new _EventDispatch(),

		guildChatC2S: function(guildId, msg){
			C2S("GuildChatC2S",{guildId: guildId, msg: msg});
		},
		guildChatS2C: new _EventDispatch(),

		gMC2S: function(gm){
			C2S("GMC2S",{gm: gm});
		},
		gMS2C: new _EventDispatch(),

		checkPointListC2S: function(){
			C2S("CheckPointListC2S",{});
		},
		checkPointListS2C: new _EventDispatch(),

		getPlotStarRewardC2S: function(chapterGradeId, chapterLevel){
			C2S("GetPlotStarRewardC2S",{chapterGradeId: chapterGradeId, chapterLevel: chapterLevel});
		},
		getPlotStarRewardS2C: new _EventDispatch(),

		buyTimesCheckPointC2S: function(type, buyNum){
			C2S("BuyTimesCheckPointC2S",{type: type, buyNum: buyNum});
		},
		buyTimesCheckPointS2C: new _EventDispatch(),

		sweepCheckPointC2S: function(checkPointId, times){
			C2S("SweepCheckPointC2S",{checkPointId: checkPointId, times: times});
		},
		sweepCheckPointS2C: new _EventDispatch(),

		gamerSettlePVEC2S: function(checkPointId, battleTime, HeroList, reserve){
			C2S("GamerSettlePVEC2S",{checkPointId: checkPointId, battleTime: battleTime, HeroList: HeroList, reserve: reserve});
		},
		gamerSettlePVES2C: new _EventDispatch(),

		draugListC2S: function(){
			C2S("DraugListC2S",{});
		},
		draugListS2C: new _EventDispatch(),

		awakenDraugC2S: function(type){
			C2S("AwakenDraugC2S",{type: type});
		},
		awakenDraugS2C: new _EventDispatch(),

		putDraugIntoPackC2S: function(){
			C2S("PutDraugIntoPackC2S",{});
		},
		putDraugIntoPackS2C: new _EventDispatch(),

		swallowDraugC2S: function(swallowId, heroId, beSwallowIdList){
			C2S("SwallowDraugC2S",{swallowId: swallowId, heroId: heroId, beSwallowIdList: beSwallowIdList});
		},
		swallowDraugS2C: new _EventDispatch(),

		decomposeDraugC2S: function(draugIdList){
			C2S("DecomposeDraugC2S",{draugIdList: draugIdList});
		},
		decomposeDraugS2C: new _EventDispatch(),

		lockDraugC2S: function(draugId){
			C2S("LockDraugC2S",{draugId: draugId});
		},
		lockDraugS2C: new _EventDispatch(),

		wearDraugC2S: function(draugId, heroId){
			C2S("WearDraugC2S",{draugId: draugId, heroId: heroId});
		},
		wearDraugS2C: new _EventDispatch(),

		unwearDraugC2S: function(heroId, pos){
			C2S("UnwearDraugC2S",{heroId: heroId, pos: pos});
		},
		unwearDraugS2C: new _EventDispatch(),

		draugSelectHeroC2S: function(selectHeroId){
			C2S("DraugSelectHeroC2S",{selectHeroId: selectHeroId});
		},
		draugSelectHeroS2C: new _EventDispatch(),

		heroGroupListC2S: function(){
			C2S("HeroGroupListC2S",{});
		},
		heroGroupListS2C: new _EventDispatch(),

		unlockHeroGroupC2S: function(heroGroupId){
			C2S("UnlockHeroGroupC2S",{heroGroupId: heroGroupId});
		},
		unlockHeroGroupS2C: new _EventDispatch(),

		changeNameHeroGroupC2S: function(heroGroupId, name){
			C2S("ChangeNameHeroGroupC2S",{heroGroupId: heroGroupId, name: name});
		},
		changeNameHeroGroupS2C: new _EventDispatch(),

		heroGroupChangeHeroC2S: function(heroGroupId, pos, heroId){
			C2S("HeroGroupChangeHeroC2S",{heroGroupId: heroGroupId, pos: pos, heroId: heroId});
		},
		heroGroupChangeHeroS2C: new _EventDispatch(),

		heroGroupChangeSkillC2S: function(heroGroupId, pos, skillId){
			C2S("HeroGroupChangeSkillC2S",{heroGroupId: heroGroupId, pos: pos, skillId: skillId});
		},
		heroGroupChangeSkillS2C: new _EventDispatch(),

		buyFatigueC2S: function(goodId){
			C2S("BuyFatigueC2S",{goodId: goodId});
		},
		buyFatigueS2C: new _EventDispatch(),

		getFatigueWelfareC2S: function(welfareId){
			C2S("GetFatigueWelfareC2S",{welfareId: welfareId});
		},
		getFatigueWelfareS2C: new _EventDispatch(),

		upStarEquipC2S: function(heroId, equipUid, type, eatUidList){
			C2S("UpStarEquipC2S",{heroId: heroId, equipUid: equipUid, type: type, eatUidList: eatUidList});
		},
		upStarEquipS2C: new _EventDispatch(),

		eatEquipsC2S: function(heroId, equipUid, eatUidList){
			C2S("EatEquipsC2S",{heroId: heroId, equipUid: equipUid, eatUidList: eatUidList});
		},
		eatEquipsS2C: new _EventDispatch(),

		desEquipC2S: function(equipUid){
			C2S("DesEquipC2S",{equipUid: equipUid});
		},
		desEquipS2C: new _EventDispatch(),

		takeOnEquipC2S: function(heroIdOn, heroIdOff, equipUid){
			C2S("TakeOnEquipC2S",{heroIdOn: heroIdOn, heroIdOff: heroIdOff, equipUid: equipUid});
		},
		takeOnEquipS2C: new _EventDispatch(),

		takeOffEquipC2S: function(heroIdOff, equipUid){
			C2S("TakeOffEquipC2S",{heroIdOff: heroIdOff, equipUid: equipUid});
		},
		takeOffEquipS2C: new _EventDispatch(),

		redSpotC2S: function(){
			C2S("RedSpotC2S",{});
		},
		redSpotS2C: new _EventDispatch(),

		makeTeamC2S: function(aim, heroId, hero, secretLand){
			C2S("MakeTeamC2S",{aim: aim, heroId: heroId, hero: hero, secretLand: secretLand});
		},
		makeTeamS2C: new _EventDispatch(),

		setTeamAimC2S: function(aim){
			C2S("SetTeamAimC2S",{aim: aim});
		},
		setTeamAimS2C: new _EventDispatch(),

		joinTeamC2S: function(teamId, heroId, hero, secretLand){
			C2S("JoinTeamC2S",{teamId: teamId, heroId: heroId, hero: hero, secretLand: secretLand});
		},
		joinTeamS2C: new _EventDispatch(),

		exitTeamC2S: function(){
			C2S("ExitTeamC2S",{});
		},
		exitTeamS2C: new _EventDispatch(),

		turnOverTeamLeaderC2S: function(newLeaderId){
			C2S("TurnOverTeamLeaderC2S",{newLeaderId: newLeaderId});
		},
		turnOverTeamLeaderS2C: new _EventDispatch(),

		inviteTeamC2S: function(gid){
			C2S("InviteTeamC2S",{gid: gid});
		},
		inviteTeamS2C: new _EventDispatch(),

		rejectTeamC2S: function(teamId, gid, type){
			C2S("RejectTeamC2S",{teamId: teamId, gid: gid, type: type});
		},
		rejectTeamS2C: new _EventDispatch(),

		kickTeamC2S: function(gid){
			C2S("KickTeamC2S",{gid: gid});
		},
		kickTeamS2C: new _EventDispatch(),

		setTeamHelpC2S: function(isHelper){
			C2S("SetTeamHelpC2S",{isHelper: isHelper});
		},
		setTeamHelpS2C: new _EventDispatch(),

		setTeamHeroC2S: function(heroId, skillId, hero){
			C2S("SetTeamHeroC2S",{heroId: heroId, skillId: skillId, hero: hero});
		},
		setTeamHeroS2C: new _EventDispatch(),

		switchTeamReadyC2S: function(){
			C2S("SwitchTeamReadyC2S",{});
		},
		switchTeamReadyS2C: new _EventDispatch(),

		teamBattleC2S: function(){
			C2S("TeamBattleC2S",{});
		},
		teamBattleS2C: new _EventDispatch(),

		getDanInfoC2S: function(){
			C2S("GetDanInfoC2S",{});
		},
		getDanInfoS2C: new _EventDispatch(),

		getDuelRankC2S: function(type, seasonId, start, length){
			C2S("GetDuelRankC2S",{type: type, seasonId: seasonId, start: start, length: length});
		},
		getDuelRankS2C: new _EventDispatch(),

		sysListC2S: function(){
			C2S("SysListC2S",{});
		},
		sysListS2C: new _EventDispatch(),

		sysOpenShowC2S: function(sysid){
			C2S("SysOpenShowC2S",{sysid: sysid});
		},
		sysOpenShowS2C: new _EventDispatch(),

		getQuestsC2S: function(){
			C2S("GetQuestsC2S",{});
		},
		getQuestsS2C: new _EventDispatch(),

		getQuestRewardC2S: function(questId){
			C2S("GetQuestRewardC2S",{questId: questId});
		},
		getQuestRewardS2C: new _EventDispatch(),

		getDailyQuestRewardC2S: function(rewardActive){
			C2S("GetDailyQuestRewardC2S",{rewardActive: rewardActive});
		},
		getDailyQuestRewardS2C: new _EventDispatch(),

		gamerHeroImageChooseC2S: function(){
			C2S("GamerHeroImageChooseC2S",{});
		},
		gamerHeroImageChooseS2C: new _EventDispatch(),

		gamerHeroImageChangeC2S: function(heroId){
			C2S("GamerHeroImageChangeC2S",{heroId: heroId});
		},
		gamerHeroImageChangeS2C: new _EventDispatch(),

		gamerBuyRollC2S: function(num){
			C2S("GamerBuyRollC2S",{num: num});
		},
		gamerBuyRollS2C: new _EventDispatch(),

		getGamerSecretLandC2S: function(){
			C2S("GetGamerSecretLandC2S",{});
		},
		getGamerSecretLandS2C: new _EventDispatch(),

		gamerSecretLandBattleRewardC2S: function(useRoll){
			C2S("GamerSecretLandBattleRewardC2S",{useRoll: useRoll});
		},
		gamerSecretLandBattleRewardS2C: new _EventDispatch(),

		gamerSecretLandWeekRewardC2S: function(){
			C2S("GamerSecretLandWeekRewardC2S",{});
		},
		gamerSecretLandWeekRewardS2C: new _EventDispatch(),

		gamerSecretLandRankC2S: function(type){
			C2S("GamerSecretLandRankC2S",{type: type});
		},
		gamerSecretLandRankS2C: new _EventDispatch(),

		getGamerSecretLandInfoC2S: function(){
			C2S("GetGamerSecretLandInfoC2S",{});
		},
		getGamerSecretLandInfoS2C: new _EventDispatch(),

		gamerChangeItemIsSawC2S: function(type, uidList){
			C2S("GamerChangeItemIsSawC2S",{type: type, uidList: uidList});
		},
		gamerChangeItemIsSawS2C: new _EventDispatch(),

		gamerNotifyLoginOtherS2C: new _EventDispatch(),
		gamerNotifyExpLevelS2C: new _EventDispatch(),
		gamerNotifyItemChangeS2C: new _EventDispatch(),
		gamerNotifyNewChatS2C: new _EventDispatch(),
		gamerNotifyNewFriendReqS2C: new _EventDispatch(),
		gamerNotifyNewFriendS2C: new _EventDispatch(),
		gamerNotifyDelFriendS2C: new _EventDispatch(),
		gamerNotifyNoticeS2C: new _EventDispatch(),
		gamerNotifyMailS2C: new _EventDispatch(),
		gamerNotifyNewMailS2C: new _EventDispatch(),
		gamerNotifyHerosChangeS2C: new _EventDispatch(),
		gamerNotifyHeroPropUpdateS2C: new _EventDispatch(),
		gamerNotifyPVPLoadingS2C: new _EventDispatch(),
		gamerNotifyGamerMiniS2C: new _EventDispatch(),
		gamerNotifyPVPSyncS2C: new _EventDispatch(),
		gamerNotifyNewPVPResultS2C: new _EventDispatch(),
		gamerNotifyIconChangeS2C: new _EventDispatch(),
		gamerNotifyDiamonChangeS2C: new _EventDispatch(),
		gamerNotifyEnergyChangeS2C: new _EventDispatch(),
		gamerNotifyExpChangeS2C: new _EventDispatch(),
		gamerNotifyMatchInfoS2C: new _EventDispatch(),
		gamerNotifyGashaponInfoS2C: new _EventDispatch(),
		gamerNotifyActivitiesS2C: new _EventDispatch(),
		gamerNotifyApplyJoinGuildS2C: new _EventDispatch(),
		gamerNotifyInviteJoinGuildS2C: new _EventDispatch(),
		gamerNotifyGuildMemUpdateS2C: new _EventDispatch(),
		gamerNotifyGuildChatS2C: new _EventDispatch(),
		gamerNotifyCheckPointListS2C: new _EventDispatch(),
		gamerNotifyNewCheckPointListS2C: new _EventDispatch(),
		gamerNotifyRewardS2C: new _EventDispatch(),
		gamerNotifyUnlockPosHeroGroupS2C: new _EventDispatch(),
		gamerNotifyFatigueS2C: new _EventDispatch(),
		gamerNotifyTeamS2C: new _EventDispatch(),
		gamerNotifyTeamInfoS2C: new _EventDispatch(),
		gamerNotifyTeamChangeS2C: new _EventDispatch(),
		gamerNotifyTeamMemberChangeS2C: new _EventDispatch(),
		gamerNotifyLeaveTeamS2C: new _EventDispatch(),
		gamerNotifyTeamReadyS2C: new _EventDispatch(),
		gamerNotifyDanInfoS2C: new _EventDispatch(),
		gamerNotifyNewSeasonS2C: new _EventDispatch(),
		gamerNotifyQuestsS2C: new _EventDispatch(),
		gamerNotifyGamerSecretLandInfoS2C: new _EventDispatch(),
		gamerNotifySecretLandInfoS2C: new _EventDispatch(),
		gamerNotifySLTreasureBoxS2C: new _EventDispatch(),
		gamerNotifyNewSecretLandResultS2C: new _EventDispatch(),
	};

	for(var key in netlogic)
	{
		net.logic[key] = netlogic[key];
	}
})()