!function(){var e=net.C2S,n=net._EventDispatch,a={gamerLoginC2S:function(n,a){e("GamerLoginC2S",{session:n,addr:a})},gamerLoginS2C:new n,gamerLoginGetDataC2S:function(){e("GamerLoginGetDataC2S",{})},gamerLoginGetDataS2C:new n,serverTimeC2S:function(){e("ServerTimeC2S",{})},serverTimeS2C:new n,gamerSubChatChannelC2S:function(n,a){e("GamerSubChatChannelC2S",{channel:n,open:a})},gamerSubChatChannelS2C:new n,gamerChangeNameC2S:function(n){e("GamerChangeNameC2S",{newName:n})},gamerChangeNameS2C:new n,gamerChangeAvatarC2S:function(n){e("GamerChangeAvatarC2S",{Avatar:n})},gamerChangeAvatarS2C:new n,gamerGetBackpackC2S:function(){e("GamerGetBackpackC2S",{})},gamerGetBackpackS2C:new n,gamerSellItemC2S:function(n,a,t){e("GamerSellItemC2S",{itemId:n,num:a,uid:t})},gamerSellItemS2C:new n,gamerUseItemC2S:function(n,a,t){e("GamerUseItemC2S",{itemId:n,num:a,uid:t})},gamerUseItemS2C:new n,gamerFriendChatC2S:function(n,a){e("GamerFriendChatC2S",{toId:n,msg:a})},gamerFriendChatS2C:new n,gamerWorldChatC2S:function(n,a){e("GamerWorldChatC2S",{server:n,msg:a})},gamerWorldChatS2C:new n,gamerTestChatC2S:function(n,a){e("GamerTestChatC2S",{toId:n,msg:a})},gamerTestChatS2C:new n,gamerClubRequestC2S:function(n,a){e("GamerClubRequestC2S",{clubId:n,msg:a})},gamerClubRequestS2C:new n,gamerNewFriendReqC2S:function(n,a){e("GamerNewFriendReqC2S",{oid:n,msg:a})},gamerNewFriendReqS2C:new n,gamerDelFriendC2S:function(n){e("GamerDelFriendC2S",{oid:n})},gamerDelFriendS2C:new n,gamerProcessFriendReqC2S:function(n,a){e("GamerProcessFriendReqC2S",{oid:n,result:a})},gamerProcessFriendReqS2C:new n,gamerGetMailC2S:function(){e("GamerGetMailC2S",{})},gamerGetMailS2C:new n,gamerDelMailC2S:function(n){e("GamerDelMailC2S",{mailId:n})},gamerDelMailS2C:new n,gamerDelHaveReadMailC2S:function(){e("GamerDelHaveReadMailC2S",{})},gamerDelHaveReadMailS2C:new n,gamerOneKeyRcvMailRewardC2S:function(){e("GamerOneKeyRcvMailRewardC2S",{})},gamerOneKeyRcvMailRewardS2C:new n,gamerChangeMailStateC2S:function(n,a){e("GamerChangeMailStateC2S",{mailId:n,state:a})},gamerChangeMailStateS2C:new n,gamerNewHeroC2S:function(n){e("GamerNewHeroC2S",{heroId:n})},gamerNewHeroS2C:new n,gamerUpgradeHeroC2S:function(n,a){e("GamerUpgradeHeroC2S",{heroId:n,upgradeNum:a})},gamerUpgradeHeroS2C:new n,gamerUseHeroMedicineC2S:function(n,a,t){e("GamerUseHeroMedicineC2S",{heroId:n,itemId:a,useNum:t})},gamerUseHeroMedicineS2C:new n,gamerUpStarHeroC2S:function(n){e("GamerUpStarHeroC2S",{heroId:n})},gamerUpStarHeroS2C:new n,gamerUpHeroSkillC2S:function(n,a){e("GamerUpHeroSkillC2S",{heroId:n,skillId:a})},gamerUpHeroSkillS2C:new n,gamerGetHeroC2S:function(){e("GamerGetHeroC2S",{})},gamerGetHeroS2C:new n,gamerPVPLoadingC2S:function(n,a){e("GamerPVPLoadingC2S",{session:n,per:a})},gamerPVPLoadingS2C:new n,gamerPVPSyncC2S:function(n,a,t,r,i,C,S,o,u,m,g,d){e("GamerPVPSyncC2S",{session:n,input:a,needFrames:t,crc:r,inputs:i,reconn:C,exit:S,index:o,gateAddr:u,result:m,recvTime:g,clientAddr:d})},gamerPVPSyncS2C:new n,gamerReliveC2S:function(n,a){e("GamerReliveC2S",{times:n,checkPointId:a})},gamerReliveS2C:new n,gamerGetRealTimeRankC2S:function(){e("GamerGetRealTimeRankC2S",{})},gamerGetRealTimeRankS2C:new n,gamerCheckPVPBattleC2S:function(n){e("GamerCheckPVPBattleC2S",{session:n})},gamerCheckPVPBattleS2C:new n,gamerUploadWXInfoC2S:function(n){e("GamerUploadWXInfoC2S",{wxInfo:n})},gamerUploadWXInfoS2C:new n,gamerGetNoviceGuideC2S:function(){e("GamerGetNoviceGuideC2S",{})},gamerGetNoviceGuideS2C:new n,gamerNoviceGuideChangeC2S:function(n){e("GamerNoviceGuideChangeC2S",{noviceGuideList:n})},gamerNoviceGuideChangeS2C:new n,gamerMatchC2S:function(n,a,t,r,i,C,S,o){e("GamerMatchC2S",{type:n,heroId:a,teamId:t,checkPointId:r,danInfo:i,heroGroupId:C,heroList:S,secretLand:o})},gamerMatchS2C:new n,gamerCancelMatchC2S:function(){e("GamerCancelMatchC2S",{})},gamerCancelMatchS2C:new n,gamerGetRewardC2S:function(n){e("GamerGetRewardC2S",{type:n})},gamerGetRewardS2C:new n,gamerUseIconC2S:function(n,a,t){e("GamerUseIconC2S",{type:n,count:a,session:t})},gamerUseIconS2C:new n,gamerExtractGashaponC2S:function(n){e("GamerExtractGashaponC2S",{gashaponId:n})},gamerExtractGashaponS2C:new n,gamerGetGashaponPreviewC2S:function(n){e("GamerGetGashaponPreviewC2S",{gashaponType:n})},gamerGetGashaponPreviewS2C:new n,getActivityRewardC2S:function(n){e("GetActivityRewardC2S",{activityId:n})},getActivityRewardS2C:new n,createGuildC2S:function(n){e("CreateGuildC2S",{guildName:n})},createGuildS2C:new n,guildGamerLoginC2S:function(n){e("GuildGamerLoginC2S",{guildId:n})},guildGamerLoginS2C:new n,guildGamerLoginoutC2S:function(n){e("GuildGamerLoginoutC2S",{guildId:n})},guildGamerLoginoutS2C:new n,dissolutionGuildC2S:function(n){e("DissolutionGuildC2S",{guildId:n})},dissolutionGuildS2C:new n,getGuildC2S:function(n){e("GetGuildC2S",{guildId:n})},getGuildS2C:new n,getGuildListC2S:function(n,a){e("GetGuildListC2S",{serverId:n,page:a})},getGuildListS2C:new n,applyJoinGuildC2S:function(n){e("ApplyJoinGuildC2S",{guildId:n})},applyJoinGuildS2C:new n,approvalJoinGuildC2S:function(n,a,t){e("ApprovalJoinGuildC2S",{guildId:n,applyerGid:a,result:t})},approvalJoinGuildS2C:new n,inviteJoinGuildC2S:function(n,a){e("InviteJoinGuildC2S",{inviteeGid:n,guildId:a})},inviteJoinGuildS2C:new n,agreeJoinGuildC2S:function(n,a){e("AgreeJoinGuildC2S",{guildId:n,result:a})},agreeJoinGuildS2C:new n,quitGuildC2S:function(n){e("QuitGuildC2S",{guildId:n})},quitGuildS2C:new n,kickOutGuildC2S:function(n,a){e("KickOutGuildC2S",{guildId:n,kickedGid:a})},kickOutGuildS2C:new n,guildChatC2S:function(n,a){e("GuildChatC2S",{guildId:n,msg:a})},guildChatS2C:new n,gMC2S:function(n){e("GMC2S",{gm:n})},gMS2C:new n,checkPointListC2S:function(){e("CheckPointListC2S",{})},checkPointListS2C:new n,getPlotStarRewardC2S:function(n,a){e("GetPlotStarRewardC2S",{chapterGradeId:n,chapterLevel:a})},getPlotStarRewardS2C:new n,buyTimesCheckPointC2S:function(n,a){e("BuyTimesCheckPointC2S",{type:n,buyNum:a})},buyTimesCheckPointS2C:new n,sweepCheckPointC2S:function(n,a){e("SweepCheckPointC2S",{checkPointId:n,times:a})},sweepCheckPointS2C:new n,gamerSettlePVEC2S:function(n,a,t,r){e("GamerSettlePVEC2S",{checkPointId:n,battleTime:a,HeroList:t,reserve:r})},gamerSettlePVES2C:new n,draugListC2S:function(){e("DraugListC2S",{})},draugListS2C:new n,awakenDraugC2S:function(n){e("AwakenDraugC2S",{type:n})},awakenDraugS2C:new n,putDraugIntoPackC2S:function(){e("PutDraugIntoPackC2S",{})},putDraugIntoPackS2C:new n,swallowDraugC2S:function(n,a,t){e("SwallowDraugC2S",{swallowId:n,heroId:a,beSwallowIdList:t})},swallowDraugS2C:new n,decomposeDraugC2S:function(n){e("DecomposeDraugC2S",{draugIdList:n})},decomposeDraugS2C:new n,lockDraugC2S:function(n){e("LockDraugC2S",{draugId:n})},lockDraugS2C:new n,wearDraugC2S:function(n,a){e("WearDraugC2S",{draugId:n,heroId:a})},wearDraugS2C:new n,unwearDraugC2S:function(n,a){e("UnwearDraugC2S",{heroId:n,pos:a})},unwearDraugS2C:new n,draugSelectHeroC2S:function(n){e("DraugSelectHeroC2S",{selectHeroId:n})},draugSelectHeroS2C:new n,heroGroupListC2S:function(){e("HeroGroupListC2S",{})},heroGroupListS2C:new n,unlockHeroGroupC2S:function(n){e("UnlockHeroGroupC2S",{heroGroupId:n})},unlockHeroGroupS2C:new n,changeNameHeroGroupC2S:function(n,a){e("ChangeNameHeroGroupC2S",{heroGroupId:n,name:a})},changeNameHeroGroupS2C:new n,heroGroupChangeHeroC2S:function(n,a,t){e("HeroGroupChangeHeroC2S",{heroGroupId:n,pos:a,heroId:t})},heroGroupChangeHeroS2C:new n,heroGroupChangeSkillC2S:function(n,a,t){e("HeroGroupChangeSkillC2S",{heroGroupId:n,pos:a,skillId:t})},heroGroupChangeSkillS2C:new n,buyFatigueC2S:function(n){e("BuyFatigueC2S",{goodId:n})},buyFatigueS2C:new n,getFatigueWelfareC2S:function(n){e("GetFatigueWelfareC2S",{welfareId:n})},getFatigueWelfareS2C:new n,upStarEquipC2S:function(n,a,t,r){e("UpStarEquipC2S",{heroId:n,equipUid:a,type:t,eatUidList:r})},upStarEquipS2C:new n,eatEquipsC2S:function(n,a,t){e("EatEquipsC2S",{heroId:n,equipUid:a,eatUidList:t})},eatEquipsS2C:new n,desEquipC2S:function(n){e("DesEquipC2S",{equipUid:n})},desEquipS2C:new n,takeOnEquipC2S:function(n,a,t){e("TakeOnEquipC2S",{heroIdOn:n,heroIdOff:a,equipUid:t})},takeOnEquipS2C:new n,takeOffEquipC2S:function(n,a){e("TakeOffEquipC2S",{heroIdOff:n,equipUid:a})},takeOffEquipS2C:new n,redSpotC2S:function(){e("RedSpotC2S",{})},redSpotS2C:new n,makeTeamC2S:function(n,a,t,r){e("MakeTeamC2S",{aim:n,heroId:a,hero:t,secretLand:r})},makeTeamS2C:new n,setTeamAimC2S:function(n){e("SetTeamAimC2S",{aim:n})},setTeamAimS2C:new n,joinTeamC2S:function(n,a,t,r){e("JoinTeamC2S",{teamId:n,heroId:a,hero:t,secretLand:r})},joinTeamS2C:new n,exitTeamC2S:function(){e("ExitTeamC2S",{})},exitTeamS2C:new n,turnOverTeamLeaderC2S:function(n){e("TurnOverTeamLeaderC2S",{newLeaderId:n})},turnOverTeamLeaderS2C:new n,inviteTeamC2S:function(n){e("InviteTeamC2S",{gid:n})},inviteTeamS2C:new n,rejectTeamC2S:function(n,a,t){e("RejectTeamC2S",{teamId:n,gid:a,type:t})},rejectTeamS2C:new n,kickTeamC2S:function(n){e("KickTeamC2S",{gid:n})},kickTeamS2C:new n,setTeamHelpC2S:function(n){e("SetTeamHelpC2S",{isHelper:n})},setTeamHelpS2C:new n,setTeamHeroC2S:function(n,a,t){e("SetTeamHeroC2S",{heroId:n,skillId:a,hero:t})},setTeamHeroS2C:new n,switchTeamReadyC2S:function(){e("SwitchTeamReadyC2S",{})},switchTeamReadyS2C:new n,teamBattleC2S:function(){e("TeamBattleC2S",{})},teamBattleS2C:new n,getDanInfoC2S:function(){e("GetDanInfoC2S",{})},getDanInfoS2C:new n,getDuelRankC2S:function(n,a,t,r){e("GetDuelRankC2S",{type:n,seasonId:a,start:t,length:r})},getDuelRankS2C:new n,sysListC2S:function(){e("SysListC2S",{})},sysListS2C:new n,sysOpenShowC2S:function(n){e("SysOpenShowC2S",{sysid:n})},sysOpenShowS2C:new n,getQuestsC2S:function(){e("GetQuestsC2S",{})},getQuestsS2C:new n,getQuestRewardC2S:function(n){e("GetQuestRewardC2S",{questId:n})},getQuestRewardS2C:new n,getDailyQuestRewardC2S:function(n){e("GetDailyQuestRewardC2S",{rewardActive:n})},getDailyQuestRewardS2C:new n,gamerHeroImageChooseC2S:function(){e("GamerHeroImageChooseC2S",{})},gamerHeroImageChooseS2C:new n,gamerHeroImageChangeC2S:function(n){e("GamerHeroImageChangeC2S",{heroId:n})},gamerHeroImageChangeS2C:new n,gamerBuyRollC2S:function(n){e("GamerBuyRollC2S",{num:n})},gamerBuyRollS2C:new n,getGamerSecretLandC2S:function(){e("GetGamerSecretLandC2S",{})},getGamerSecretLandS2C:new n,gamerSecretLandBattleRewardC2S:function(n){e("GamerSecretLandBattleRewardC2S",{useRoll:n})},gamerSecretLandBattleRewardS2C:new n,gamerSecretLandWeekRewardC2S:function(){e("GamerSecretLandWeekRewardC2S",{})},gamerSecretLandWeekRewardS2C:new n,gamerSecretLandRankC2S:function(n){e("GamerSecretLandRankC2S",{type:n})},gamerSecretLandRankS2C:new n,getGamerSecretLandInfoC2S:function(){e("GetGamerSecretLandInfoC2S",{})},getGamerSecretLandInfoS2C:new n,gamerChangeItemIsSawC2S:function(n,a){e("GamerChangeItemIsSawC2S",{type:n,uidList:a})},gamerChangeItemIsSawS2C:new n,gamerNotifyLoginOtherS2C:new n,gamerNotifyExpLevelS2C:new n,gamerNotifyItemChangeS2C:new n,gamerNotifyNewChatS2C:new n,gamerNotifyNewFriendReqS2C:new n,gamerNotifyNewFriendS2C:new n,gamerNotifyDelFriendS2C:new n,gamerNotifyNoticeS2C:new n,gamerNotifyMailS2C:new n,gamerNotifyNewMailS2C:new n,gamerNotifyHerosChangeS2C:new n,gamerNotifyHeroPropUpdateS2C:new n,gamerNotifyPVPLoadingS2C:new n,gamerNotifyGamerMiniS2C:new n,gamerNotifyPVPSyncS2C:new n,gamerNotifyNewPVPResultS2C:new n,gamerNotifyIconChangeS2C:new n,gamerNotifyDiamonChangeS2C:new n,gamerNotifyEnergyChangeS2C:new n,gamerNotifyExpChangeS2C:new n,gamerNotifyMatchInfoS2C:new n,gamerNotifyGashaponInfoS2C:new n,gamerNotifyActivitiesS2C:new n,gamerNotifyApplyJoinGuildS2C:new n,gamerNotifyInviteJoinGuildS2C:new n,gamerNotifyGuildMemUpdateS2C:new n,gamerNotifyGuildChatS2C:new n,gamerNotifyCheckPointListS2C:new n,gamerNotifyNewCheckPointListS2C:new n,gamerNotifyRewardS2C:new n,gamerNotifyUnlockPosHeroGroupS2C:new n,gamerNotifyFatigueS2C:new n,gamerNotifyTeamS2C:new n,gamerNotifyTeamInfoS2C:new n,gamerNotifyTeamChangeS2C:new n,gamerNotifyTeamMemberChangeS2C:new n,gamerNotifyLeaveTeamS2C:new n,gamerNotifyTeamReadyS2C:new n,gamerNotifyDanInfoS2C:new n,gamerNotifyNewSeasonS2C:new n,gamerNotifyQuestsS2C:new n,gamerNotifyGamerSecretLandInfoS2C:new n,gamerNotifySecretLandInfoS2C:new n,gamerNotifySLTreasureBoxS2C:new n,gamerNotifyNewSecretLandResultS2C:new n};for(var t in a)net.logic[t]=a[t]}();