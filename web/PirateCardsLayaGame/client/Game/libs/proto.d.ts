declare module proto {
	 interface IC2S {
	    key?: (string|null);
	    gamerLoginC2S?: (IGamerLoginC2S|null);
	    gamerLoginGetDataC2S?: (IGamerLoginGetDataC2S|null);
	    serverTimeC2S?: (IServerTimeC2S|null);
	    gamerSubChatChannelC2S?: (IGamerSubChatChannelC2S|null);
	    gamerChangeNameC2S?: (IGamerChangeNameC2S|null);
	    gamerChangeAvatarC2S?: (IGamerChangeAvatarC2S|null);
	    gamerGetBackpackC2S?: (IGamerGetBackpackC2S|null);
	    gamerSellItemC2S?: (IGamerSellItemC2S|null);
	    gamerUseItemC2S?: (IGamerUseItemC2S|null);
	    gamerFriendChatC2S?: (IGamerFriendChatC2S|null);
	    gamerWorldChatC2S?: (IGamerWorldChatC2S|null);
	    gamerTestChatC2S?: (IGamerTestChatC2S|null);
	    gamerClubRequestC2S?: (IGamerClubRequestC2S|null);
	    gamerNewFriendReqC2S?: (IGamerNewFriendReqC2S|null);
	    gamerDelFriendC2S?: (IGamerDelFriendC2S|null);
	    gamerProcessFriendReqC2S?: (IGamerProcessFriendReqC2S|null);
	    gamerGetMailC2S?: (IGamerGetMailC2S|null);
	    gamerDelMailC2S?: (IGamerDelMailC2S|null);
	    gamerDelHaveReadMailC2S?: (IGamerDelHaveReadMailC2S|null);
	    gamerOneKeyRcvMailRewardC2S?: (IGamerOneKeyRcvMailRewardC2S|null);
	    gamerChangeMailStateC2S?: (IGamerChangeMailStateC2S|null);
	    gamerNewHeroC2S?: (IGamerNewHeroC2S|null);
	    gamerUpgradeHeroC2S?: (IGamerUpgradeHeroC2S|null);
	    gamerUseHeroMedicineC2S?: (IGamerUseHeroMedicineC2S|null);
	    gamerUpStarHeroC2S?: (IGamerUpStarHeroC2S|null);
	    gamerUpHeroSkillC2S?: (IGamerUpHeroSkillC2S|null);
	    gamerGetHeroC2S?: (IGamerGetHeroC2S|null);
	    gamerPVPLoadingC2S?: (IGamerPVPLoadingC2S|null);
	    gamerPVPSyncC2S?: (IGamerPVPSyncC2S|null);
	    gamerReliveC2S?: (IGamerReliveC2S|null);
	    gamerGetRealTimeRankC2S?: (IGamerGetRealTimeRankC2S|null);
	    gamerCheckPVPBattleC2S?: (IGamerCheckPVPBattleC2S|null);
	    gamerUploadWXInfoC2S?: (IGamerUploadWXInfoC2S|null);
	    gamerGetNoviceGuideC2S?: (IGamerGetNoviceGuideC2S|null);
	    gamerNoviceGuideChangeC2S?: (IGamerNoviceGuideChangeC2S|null);
	    gamerMatchC2S?: (IGamerMatchC2S|null);
	    gamerCancelMatchC2S?: (IGamerCancelMatchC2S|null);
	    gamerGetRewardC2S?: (IGamerGetRewardC2S|null);
	    gamerUseIconC2S?: (IGamerUseIconC2S|null);
	    gamerExtractGashaponC2S?: (IGamerExtractGashaponC2S|null);
	    gamerGetGashaponPreviewC2S?: (IGamerGetGashaponPreviewC2S|null);
	    getActivityRewardC2S?: (IGetActivityRewardC2S|null);
	    createGuildC2S?: (ICreateGuildC2S|null);
	    guildGamerLoginC2S?: (IGuildGamerLoginC2S|null);
	    guildGamerLoginoutC2S?: (IGuildGamerLoginoutC2S|null);
	    dissolutionGuildC2S?: (IDissolutionGuildC2S|null);
	    getGuildC2S?: (IGetGuildC2S|null);
	    getGuildListC2S?: (IGetGuildListC2S|null);
	    applyJoinGuildC2S?: (IApplyJoinGuildC2S|null);
	    approvalJoinGuildC2S?: (IApprovalJoinGuildC2S|null);
	    inviteJoinGuildC2S?: (IInviteJoinGuildC2S|null);
	    agreeJoinGuildC2S?: (IAgreeJoinGuildC2S|null);
	    quitGuildC2S?: (IQuitGuildC2S|null);
	    kickOutGuildC2S?: (IKickOutGuildC2S|null);
	    guildChatC2S?: (IGuildChatC2S|null);
	    gMC2S?: (IGMC2S|null);
	    checkPointListC2S?: (ICheckPointListC2S|null);
	    getPlotStarRewardC2S?: (IGetPlotStarRewardC2S|null);
	    buyTimesCheckPointC2S?: (IBuyTimesCheckPointC2S|null);
	    sweepCheckPointC2S?: (ISweepCheckPointC2S|null);
	    gamerSettlePVEC2S?: (IGamerSettlePVEC2S|null);
	    draugListC2S?: (IDraugListC2S|null);
	    awakenDraugC2S?: (IAwakenDraugC2S|null);
	    putDraugIntoPackC2S?: (IPutDraugIntoPackC2S|null);
	    swallowDraugC2S?: (ISwallowDraugC2S|null);
	    decomposeDraugC2S?: (IDecomposeDraugC2S|null);
	    lockDraugC2S?: (ILockDraugC2S|null);
	    wearDraugC2S?: (IWearDraugC2S|null);
	    unwearDraugC2S?: (IUnwearDraugC2S|null);
	    draugSelectHeroC2S?: (IDraugSelectHeroC2S|null);
	    heroGroupListC2S?: (IHeroGroupListC2S|null);
	    unlockHeroGroupC2S?: (IUnlockHeroGroupC2S|null);
	    changeNameHeroGroupC2S?: (IChangeNameHeroGroupC2S|null);
	    heroGroupChangeHeroC2S?: (IHeroGroupChangeHeroC2S|null);
	    heroGroupChangeSkillC2S?: (IHeroGroupChangeSkillC2S|null);
	    buyFatigueC2S?: (IBuyFatigueC2S|null);
	    getFatigueWelfareC2S?: (IGetFatigueWelfareC2S|null);
	    upStarEquipC2S?: (IUpStarEquipC2S|null);
	    eatEquipsC2S?: (IEatEquipsC2S|null);
	    desEquipC2S?: (IDesEquipC2S|null);
	    takeOnEquipC2S?: (ITakeOnEquipC2S|null);
	    takeOffEquipC2S?: (ITakeOffEquipC2S|null);
	    redSpotC2S?: (IRedSpotC2S|null);
	    makeTeamC2S?: (IMakeTeamC2S|null);
	    setTeamAimC2S?: (ISetTeamAimC2S|null);
	    joinTeamC2S?: (IJoinTeamC2S|null);
	    exitTeamC2S?: (IExitTeamC2S|null);
	    turnOverTeamLeaderC2S?: (ITurnOverTeamLeaderC2S|null);
	    inviteTeamC2S?: (IInviteTeamC2S|null);
	    rejectTeamC2S?: (IRejectTeamC2S|null);
	    kickTeamC2S?: (IKickTeamC2S|null);
	    setTeamHelpC2S?: (ISetTeamHelpC2S|null);
	    setTeamHeroC2S?: (ISetTeamHeroC2S|null);
	    switchTeamReadyC2S?: (ISwitchTeamReadyC2S|null);
	    teamBattleC2S?: (ITeamBattleC2S|null);
	    getDanInfoC2S?: (IGetDanInfoC2S|null);
	    getDuelRankC2S?: (IGetDuelRankC2S|null);
	    sysListC2S?: (ISysListC2S|null);
	    sysOpenShowC2S?: (ISysOpenShowC2S|null);
	    getQuestsC2S?: (IGetQuestsC2S|null);
	    getQuestRewardC2S?: (IGetQuestRewardC2S|null);
	    getDailyQuestRewardC2S?: (IGetDailyQuestRewardC2S|null);
	    gamerHeroImageChooseC2S?: (IGamerHeroImageChooseC2S|null);
	    gamerHeroImageChangeC2S?: (IGamerHeroImageChangeC2S|null);
	    gamerBuyRollC2S?: (IGamerBuyRollC2S|null);
	    getGamerSecretLandC2S?: (IGetGamerSecretLandC2S|null);
	    gamerSecretLandBattleRewardC2S?: (IGamerSecretLandBattleRewardC2S|null);
	    gamerSecretLandWeekRewardC2S?: (IGamerSecretLandWeekRewardC2S|null);
	    gamerSecretLandRankC2S?: (IGamerSecretLandRankC2S|null);
	    getGamerSecretLandInfoC2S?: (IGetGamerSecretLandInfoC2S|null);
	    gamerChangeItemIsSawC2S?: (IGamerChangeItemIsSawC2S|null);
	}
}
declare module proto {
	 class C2S implements IC2S {
	    constructor(properties?: IC2S);
	    public key: string;
	    public gamerLoginC2S?: (IGamerLoginC2S|null);
	    public gamerLoginGetDataC2S?: (IGamerLoginGetDataC2S|null);
	    public serverTimeC2S?: (IServerTimeC2S|null);
	    public gamerSubChatChannelC2S?: (IGamerSubChatChannelC2S|null);
	    public gamerChangeNameC2S?: (IGamerChangeNameC2S|null);
	    public gamerChangeAvatarC2S?: (IGamerChangeAvatarC2S|null);
	    public gamerGetBackpackC2S?: (IGamerGetBackpackC2S|null);
	    public gamerSellItemC2S?: (IGamerSellItemC2S|null);
	    public gamerUseItemC2S?: (IGamerUseItemC2S|null);
	    public gamerFriendChatC2S?: (IGamerFriendChatC2S|null);
	    public gamerWorldChatC2S?: (IGamerWorldChatC2S|null);
	    public gamerTestChatC2S?: (IGamerTestChatC2S|null);
	    public gamerClubRequestC2S?: (IGamerClubRequestC2S|null);
	    public gamerNewFriendReqC2S?: (IGamerNewFriendReqC2S|null);
	    public gamerDelFriendC2S?: (IGamerDelFriendC2S|null);
	    public gamerProcessFriendReqC2S?: (IGamerProcessFriendReqC2S|null);
	    public gamerGetMailC2S?: (IGamerGetMailC2S|null);
	    public gamerDelMailC2S?: (IGamerDelMailC2S|null);
	    public gamerDelHaveReadMailC2S?: (IGamerDelHaveReadMailC2S|null);
	    public gamerOneKeyRcvMailRewardC2S?: (IGamerOneKeyRcvMailRewardC2S|null);
	    public gamerChangeMailStateC2S?: (IGamerChangeMailStateC2S|null);
	    public gamerNewHeroC2S?: (IGamerNewHeroC2S|null);
	    public gamerUpgradeHeroC2S?: (IGamerUpgradeHeroC2S|null);
	    public gamerUseHeroMedicineC2S?: (IGamerUseHeroMedicineC2S|null);
	    public gamerUpStarHeroC2S?: (IGamerUpStarHeroC2S|null);
	    public gamerUpHeroSkillC2S?: (IGamerUpHeroSkillC2S|null);
	    public gamerGetHeroC2S?: (IGamerGetHeroC2S|null);
	    public gamerPVPLoadingC2S?: (IGamerPVPLoadingC2S|null);
	    public gamerPVPSyncC2S?: (IGamerPVPSyncC2S|null);
	    public gamerReliveC2S?: (IGamerReliveC2S|null);
	    public gamerGetRealTimeRankC2S?: (IGamerGetRealTimeRankC2S|null);
	    public gamerCheckPVPBattleC2S?: (IGamerCheckPVPBattleC2S|null);
	    public gamerUploadWXInfoC2S?: (IGamerUploadWXInfoC2S|null);
	    public gamerGetNoviceGuideC2S?: (IGamerGetNoviceGuideC2S|null);
	    public gamerNoviceGuideChangeC2S?: (IGamerNoviceGuideChangeC2S|null);
	    public gamerMatchC2S?: (IGamerMatchC2S|null);
	    public gamerCancelMatchC2S?: (IGamerCancelMatchC2S|null);
	    public gamerGetRewardC2S?: (IGamerGetRewardC2S|null);
	    public gamerUseIconC2S?: (IGamerUseIconC2S|null);
	    public gamerExtractGashaponC2S?: (IGamerExtractGashaponC2S|null);
	    public gamerGetGashaponPreviewC2S?: (IGamerGetGashaponPreviewC2S|null);
	    public getActivityRewardC2S?: (IGetActivityRewardC2S|null);
	    public createGuildC2S?: (ICreateGuildC2S|null);
	    public guildGamerLoginC2S?: (IGuildGamerLoginC2S|null);
	    public guildGamerLoginoutC2S?: (IGuildGamerLoginoutC2S|null);
	    public dissolutionGuildC2S?: (IDissolutionGuildC2S|null);
	    public getGuildC2S?: (IGetGuildC2S|null);
	    public getGuildListC2S?: (IGetGuildListC2S|null);
	    public applyJoinGuildC2S?: (IApplyJoinGuildC2S|null);
	    public approvalJoinGuildC2S?: (IApprovalJoinGuildC2S|null);
	    public inviteJoinGuildC2S?: (IInviteJoinGuildC2S|null);
	    public agreeJoinGuildC2S?: (IAgreeJoinGuildC2S|null);
	    public quitGuildC2S?: (IQuitGuildC2S|null);
	    public kickOutGuildC2S?: (IKickOutGuildC2S|null);
	    public guildChatC2S?: (IGuildChatC2S|null);
	    public gMC2S?: (IGMC2S|null);
	    public checkPointListC2S?: (ICheckPointListC2S|null);
	    public getPlotStarRewardC2S?: (IGetPlotStarRewardC2S|null);
	    public buyTimesCheckPointC2S?: (IBuyTimesCheckPointC2S|null);
	    public sweepCheckPointC2S?: (ISweepCheckPointC2S|null);
	    public gamerSettlePVEC2S?: (IGamerSettlePVEC2S|null);
	    public draugListC2S?: (IDraugListC2S|null);
	    public awakenDraugC2S?: (IAwakenDraugC2S|null);
	    public putDraugIntoPackC2S?: (IPutDraugIntoPackC2S|null);
	    public swallowDraugC2S?: (ISwallowDraugC2S|null);
	    public decomposeDraugC2S?: (IDecomposeDraugC2S|null);
	    public lockDraugC2S?: (ILockDraugC2S|null);
	    public wearDraugC2S?: (IWearDraugC2S|null);
	    public unwearDraugC2S?: (IUnwearDraugC2S|null);
	    public draugSelectHeroC2S?: (IDraugSelectHeroC2S|null);
	    public heroGroupListC2S?: (IHeroGroupListC2S|null);
	    public unlockHeroGroupC2S?: (IUnlockHeroGroupC2S|null);
	    public changeNameHeroGroupC2S?: (IChangeNameHeroGroupC2S|null);
	    public heroGroupChangeHeroC2S?: (IHeroGroupChangeHeroC2S|null);
	    public heroGroupChangeSkillC2S?: (IHeroGroupChangeSkillC2S|null);
	    public buyFatigueC2S?: (IBuyFatigueC2S|null);
	    public getFatigueWelfareC2S?: (IGetFatigueWelfareC2S|null);
	    public upStarEquipC2S?: (IUpStarEquipC2S|null);
	    public eatEquipsC2S?: (IEatEquipsC2S|null);
	    public desEquipC2S?: (IDesEquipC2S|null);
	    public takeOnEquipC2S?: (ITakeOnEquipC2S|null);
	    public takeOffEquipC2S?: (ITakeOffEquipC2S|null);
	    public redSpotC2S?: (IRedSpotC2S|null);
	    public makeTeamC2S?: (IMakeTeamC2S|null);
	    public setTeamAimC2S?: (ISetTeamAimC2S|null);
	    public joinTeamC2S?: (IJoinTeamC2S|null);
	    public exitTeamC2S?: (IExitTeamC2S|null);
	    public turnOverTeamLeaderC2S?: (ITurnOverTeamLeaderC2S|null);
	    public inviteTeamC2S?: (IInviteTeamC2S|null);
	    public rejectTeamC2S?: (IRejectTeamC2S|null);
	    public kickTeamC2S?: (IKickTeamC2S|null);
	    public setTeamHelpC2S?: (ISetTeamHelpC2S|null);
	    public setTeamHeroC2S?: (ISetTeamHeroC2S|null);
	    public switchTeamReadyC2S?: (ISwitchTeamReadyC2S|null);
	    public teamBattleC2S?: (ITeamBattleC2S|null);
	    public getDanInfoC2S?: (IGetDanInfoC2S|null);
	    public getDuelRankC2S?: (IGetDuelRankC2S|null);
	    public sysListC2S?: (ISysListC2S|null);
	    public sysOpenShowC2S?: (ISysOpenShowC2S|null);
	    public getQuestsC2S?: (IGetQuestsC2S|null);
	    public getQuestRewardC2S?: (IGetQuestRewardC2S|null);
	    public getDailyQuestRewardC2S?: (IGetDailyQuestRewardC2S|null);
	    public gamerHeroImageChooseC2S?: (IGamerHeroImageChooseC2S|null);
	    public gamerHeroImageChangeC2S?: (IGamerHeroImageChangeC2S|null);
	    public gamerBuyRollC2S?: (IGamerBuyRollC2S|null);
	    public getGamerSecretLandC2S?: (IGetGamerSecretLandC2S|null);
	    public gamerSecretLandBattleRewardC2S?: (IGamerSecretLandBattleRewardC2S|null);
	    public gamerSecretLandWeekRewardC2S?: (IGamerSecretLandWeekRewardC2S|null);
	    public gamerSecretLandRankC2S?: (IGamerSecretLandRankC2S|null);
	    public getGamerSecretLandInfoC2S?: (IGetGamerSecretLandInfoC2S|null);
	    public gamerChangeItemIsSawC2S?: (IGamerChangeItemIsSawC2S|null);
	    public static create(properties?: IC2S): C2S;
	    public static encode(message: IC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): C2S;
	    public static toObject(message: C2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerLoginC2S {
	    id?: (number|null);
	    session?: (string|null);
	    addr?: (string|null);
	}
}
declare module proto {
	 class GamerLoginC2S implements IGamerLoginC2S {
	    constructor(properties?: IGamerLoginC2S);
	    public id: number;
	    public session: string;
	    public addr: string;
	    public static create(properties?: IGamerLoginC2S): GamerLoginC2S;
	    public static encode(message: IGamerLoginC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerLoginC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerLoginC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerLoginC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerLoginC2S;
	    public static toObject(message: GamerLoginC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerLoginS2C {
	    error?: (number|null);
	    main?: (IGamerMain|null);
	    changeNameNum?: (number|null);
	}
}
declare module proto {
	 class GamerLoginS2C implements IGamerLoginS2C {
	    constructor(properties?: IGamerLoginS2C);
	    public error: number;
	    public main?: (IGamerMain|null);
	    public changeNameNum: number;
	    public static create(properties?: IGamerLoginS2C): GamerLoginS2C;
	    public static encode(message: IGamerLoginS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerLoginS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerLoginS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerLoginS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerLoginS2C;
	    public static toObject(message: GamerLoginS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerLoginGetDataC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class GamerLoginGetDataC2S implements IGamerLoginGetDataC2S {
	    constructor(properties?: IGamerLoginGetDataC2S);
	    public id: number;
	    public static create(properties?: IGamerLoginGetDataC2S): GamerLoginGetDataC2S;
	    public static encode(message: IGamerLoginGetDataC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerLoginGetDataC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerLoginGetDataC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerLoginGetDataC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerLoginGetDataC2S;
	    public static toObject(message: GamerLoginGetDataC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerLoginGetDataS2C {
	    error?: (number|null);
	    time?: (IServerTime|null);
	    friendReqs?: (IGamerFriendRequest[]|null);
	    friends?: (IGamerFriend[]|null);
	    heros?: (IGamerHero[]|null);
	    fatigue?: (IFatigueInfo|null);
	    lengthRank?: (number|null);
	    length?: (number|null);
	}
}
declare module proto {
	 class GamerLoginGetDataS2C implements IGamerLoginGetDataS2C {
	    constructor(properties?: IGamerLoginGetDataS2C);
	    public error: number;
	    public time?: (IServerTime|null);
	    public friendReqs: IGamerFriendRequest[];
	    public friends: IGamerFriend[];
	    public heros: IGamerHero[];
	    public fatigue?: (IFatigueInfo|null);
	    public lengthRank: number;
	    public length: number;
	    public static create(properties?: IGamerLoginGetDataS2C): GamerLoginGetDataS2C;
	    public static encode(message: IGamerLoginGetDataS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerLoginGetDataS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerLoginGetDataS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerLoginGetDataS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerLoginGetDataS2C;
	    public static toObject(message: GamerLoginGetDataS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IServerTimeC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class ServerTimeC2S implements IServerTimeC2S {
	    constructor(properties?: IServerTimeC2S);
	    public id: number;
	    public static create(properties?: IServerTimeC2S): ServerTimeC2S;
	    public static encode(message: IServerTimeC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IServerTimeC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerTimeC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerTimeC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): ServerTimeC2S;
	    public static toObject(message: ServerTimeC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IServerTimeS2C {
	    error?: (number|null);
	    time?: (IServerTime|null);
	}
}
declare module proto {
	 class ServerTimeS2C implements IServerTimeS2C {
	    constructor(properties?: IServerTimeS2C);
	    public error: number;
	    public time?: (IServerTime|null);
	    public static create(properties?: IServerTimeS2C): ServerTimeS2C;
	    public static encode(message: IServerTimeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IServerTimeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerTimeS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerTimeS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): ServerTimeS2C;
	    public static toObject(message: ServerTimeS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyLoginOtherS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerNotifyLoginOtherS2C implements IGamerNotifyLoginOtherS2C {
	    constructor(properties?: IGamerNotifyLoginOtherS2C);
	    public error: number;
	    public static create(properties?: IGamerNotifyLoginOtherS2C): GamerNotifyLoginOtherS2C;
	    public static encode(message: IGamerNotifyLoginOtherS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyLoginOtherS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyLoginOtherS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyLoginOtherS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyLoginOtherS2C;
	    public static toObject(message: GamerNotifyLoginOtherS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerSubChatChannelC2S {
	    id?: (number|null);
	    channel?: (number|null);
	    open?: (boolean|null);
	}
}
declare module proto {
	 class GamerSubChatChannelC2S implements IGamerSubChatChannelC2S {
	    constructor(properties?: IGamerSubChatChannelC2S);
	    public id: number;
	    public channel: number;
	    public open: boolean;
	    public static create(properties?: IGamerSubChatChannelC2S): GamerSubChatChannelC2S;
	    public static encode(message: IGamerSubChatChannelC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerSubChatChannelC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerSubChatChannelC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerSubChatChannelC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerSubChatChannelC2S;
	    public static toObject(message: GamerSubChatChannelC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerSubChatChannelS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerSubChatChannelS2C implements IGamerSubChatChannelS2C {
	    constructor(properties?: IGamerSubChatChannelS2C);
	    public error: number;
	    public static create(properties?: IGamerSubChatChannelS2C): GamerSubChatChannelS2C;
	    public static encode(message: IGamerSubChatChannelS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerSubChatChannelS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerSubChatChannelS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerSubChatChannelS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerSubChatChannelS2C;
	    public static toObject(message: GamerSubChatChannelS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerChangeNameC2S {
	    id?: (number|null);
	    newName?: (string|null);
	}
}
declare module proto {
	 class GamerChangeNameC2S implements IGamerChangeNameC2S {
	    constructor(properties?: IGamerChangeNameC2S);
	    public id: number;
	    public newName: string;
	    public static create(properties?: IGamerChangeNameC2S): GamerChangeNameC2S;
	    public static encode(message: IGamerChangeNameC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerChangeNameC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerChangeNameC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerChangeNameC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerChangeNameC2S;
	    public static toObject(message: GamerChangeNameC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerChangeNameS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerChangeNameS2C implements IGamerChangeNameS2C {
	    constructor(properties?: IGamerChangeNameS2C);
	    public error: number;
	    public static create(properties?: IGamerChangeNameS2C): GamerChangeNameS2C;
	    public static encode(message: IGamerChangeNameS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerChangeNameS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerChangeNameS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerChangeNameS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerChangeNameS2C;
	    public static toObject(message: GamerChangeNameS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerChangeAvatarC2S {
	    id?: (number|null);
	    Avatar?: (string|null);
	}
}
declare module proto {
	 class GamerChangeAvatarC2S implements IGamerChangeAvatarC2S {
	    constructor(properties?: IGamerChangeAvatarC2S);
	    public id: number;
	    public Avatar: string;
	    public static create(properties?: IGamerChangeAvatarC2S): GamerChangeAvatarC2S;
	    public static encode(message: IGamerChangeAvatarC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerChangeAvatarC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerChangeAvatarC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerChangeAvatarC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerChangeAvatarC2S;
	    public static toObject(message: GamerChangeAvatarC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerChangeAvatarS2C {
	    error?: (number|null);
	    Avatar?: (string|null);
	}
}
declare module proto {
	 class GamerChangeAvatarS2C implements IGamerChangeAvatarS2C {
	    constructor(properties?: IGamerChangeAvatarS2C);
	    public error: number;
	    public Avatar: string;
	    public static create(properties?: IGamerChangeAvatarS2C): GamerChangeAvatarS2C;
	    public static encode(message: IGamerChangeAvatarS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerChangeAvatarS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerChangeAvatarS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerChangeAvatarS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerChangeAvatarS2C;
	    public static toObject(message: GamerChangeAvatarS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyExpLevelS2C {
	    error?: (number|null);
	    exp?: (number|null);
	    level?: (number|null);
	}
}
declare module proto {
	 class GamerNotifyExpLevelS2C implements IGamerNotifyExpLevelS2C {
	    constructor(properties?: IGamerNotifyExpLevelS2C);
	    public error: number;
	    public exp: number;
	    public level: number;
	    public static create(properties?: IGamerNotifyExpLevelS2C): GamerNotifyExpLevelS2C;
	    public static encode(message: IGamerNotifyExpLevelS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyExpLevelS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyExpLevelS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyExpLevelS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyExpLevelS2C;
	    public static toObject(message: GamerNotifyExpLevelS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerGetBackpackC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class GamerGetBackpackC2S implements IGamerGetBackpackC2S {
	    constructor(properties?: IGamerGetBackpackC2S);
	    public id: number;
	    public static create(properties?: IGamerGetBackpackC2S): GamerGetBackpackC2S;
	    public static encode(message: IGamerGetBackpackC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerGetBackpackC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerGetBackpackC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerGetBackpackC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerGetBackpackC2S;
	    public static toObject(message: GamerGetBackpackC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerGetBackpackS2C {
	    error?: (number|null);
	    items?: (IGameItem[]|null);
	}
}
declare module proto {
	 class GamerGetBackpackS2C implements IGamerGetBackpackS2C {
	    constructor(properties?: IGamerGetBackpackS2C);
	    public error: number;
	    public items: IGameItem[];
	    public static create(properties?: IGamerGetBackpackS2C): GamerGetBackpackS2C;
	    public static encode(message: IGamerGetBackpackS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerGetBackpackS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerGetBackpackS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerGetBackpackS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerGetBackpackS2C;
	    public static toObject(message: GamerGetBackpackS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyItemChangeS2C {
	    error?: (number|null);
	    itemsChange?: (IGameItem[]|null);
	}
}
declare module proto {
	 class GamerNotifyItemChangeS2C implements IGamerNotifyItemChangeS2C {
	    constructor(properties?: IGamerNotifyItemChangeS2C);
	    public error: number;
	    public itemsChange: IGameItem[];
	    public static create(properties?: IGamerNotifyItemChangeS2C): GamerNotifyItemChangeS2C;
	    public static encode(message: IGamerNotifyItemChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyItemChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyItemChangeS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyItemChangeS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyItemChangeS2C;
	    public static toObject(message: GamerNotifyItemChangeS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerSellItemC2S {
	    id?: (number|null);
	    itemId?: (number|null);
	    num?: (number|null);
	    uid?: (number|null);
	}
}
declare module proto {
	 class GamerSellItemC2S implements IGamerSellItemC2S {
	    constructor(properties?: IGamerSellItemC2S);
	    public id: number;
	    public itemId: number;
	    public num: number;
	    public uid: number;
	    public static create(properties?: IGamerSellItemC2S): GamerSellItemC2S;
	    public static encode(message: IGamerSellItemC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerSellItemC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerSellItemC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerSellItemC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerSellItemC2S;
	    public static toObject(message: GamerSellItemC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerSellItemS2C {
	    error?: (number|null);
	    items?: (IGameItem[]|null);
	}
}
declare module proto {
	 class GamerSellItemS2C implements IGamerSellItemS2C {
	    constructor(properties?: IGamerSellItemS2C);
	    public error: number;
	    public items: IGameItem[];
	    public static create(properties?: IGamerSellItemS2C): GamerSellItemS2C;
	    public static encode(message: IGamerSellItemS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerSellItemS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerSellItemS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerSellItemS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerSellItemS2C;
	    public static toObject(message: GamerSellItemS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerUseItemC2S {
	    id?: (number|null);
	    itemId?: (number|null);
	    num?: (number|null);
	    uid?: (number|null);
	}
}
declare module proto {
	 class GamerUseItemC2S implements IGamerUseItemC2S {
	    constructor(properties?: IGamerUseItemC2S);
	    public id: number;
	    public itemId: number;
	    public num: number;
	    public uid: number;
	    public static create(properties?: IGamerUseItemC2S): GamerUseItemC2S;
	    public static encode(message: IGamerUseItemC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerUseItemC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUseItemC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUseItemC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerUseItemC2S;
	    public static toObject(message: GamerUseItemC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerUseItemS2C {
	    error?: (number|null);
	    useItemId?: (number|null);
	    items?: (IGameItem[]|null);
	}
}
declare module proto {
	 class GamerUseItemS2C implements IGamerUseItemS2C {
	    constructor(properties?: IGamerUseItemS2C);
	    public error: number;
	    public useItemId: number;
	    public items: IGameItem[];
	    public static create(properties?: IGamerUseItemS2C): GamerUseItemS2C;
	    public static encode(message: IGamerUseItemS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerUseItemS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUseItemS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUseItemS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerUseItemS2C;
	    public static toObject(message: GamerUseItemS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerFriendChatC2S {
	    id?: (number|null);
	    toId?: (number|null);
	    msg?: (string|null);
	}
}
declare module proto {
	 class GamerFriendChatC2S implements IGamerFriendChatC2S {
	    constructor(properties?: IGamerFriendChatC2S);
	    public id: number;
	    public toId: number;
	    public msg: string;
	    public static create(properties?: IGamerFriendChatC2S): GamerFriendChatC2S;
	    public static encode(message: IGamerFriendChatC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerFriendChatC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerFriendChatC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerFriendChatC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerFriendChatC2S;
	    public static toObject(message: GamerFriendChatC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerFriendChatS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerFriendChatS2C implements IGamerFriendChatS2C {
	    constructor(properties?: IGamerFriendChatS2C);
	    public error: number;
	    public static create(properties?: IGamerFriendChatS2C): GamerFriendChatS2C;
	    public static encode(message: IGamerFriendChatS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerFriendChatS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerFriendChatS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerFriendChatS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerFriendChatS2C;
	    public static toObject(message: GamerFriendChatS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerWorldChatC2S {
	    id?: (number|null);
	    server?: (number|null);
	    msg?: (string|null);
	}
}
declare module proto {
	 class GamerWorldChatC2S implements IGamerWorldChatC2S {
	    constructor(properties?: IGamerWorldChatC2S);
	    public id: number;
	    public server: number;
	    public msg: string;
	    public static create(properties?: IGamerWorldChatC2S): GamerWorldChatC2S;
	    public static encode(message: IGamerWorldChatC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerWorldChatC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerWorldChatC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerWorldChatC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerWorldChatC2S;
	    public static toObject(message: GamerWorldChatC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerWorldChatS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerWorldChatS2C implements IGamerWorldChatS2C {
	    constructor(properties?: IGamerWorldChatS2C);
	    public error: number;
	    public static create(properties?: IGamerWorldChatS2C): GamerWorldChatS2C;
	    public static encode(message: IGamerWorldChatS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerWorldChatS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerWorldChatS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerWorldChatS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerWorldChatS2C;
	    public static toObject(message: GamerWorldChatS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerTestChatC2S {
	    id?: (number|null);
	    toId?: (number|null);
	    msg?: (string|null);
	}
}
declare module proto {
	 class GamerTestChatC2S implements IGamerTestChatC2S {
	    constructor(properties?: IGamerTestChatC2S);
	    public id: number;
	    public toId: number;
	    public msg: string;
	    public static create(properties?: IGamerTestChatC2S): GamerTestChatC2S;
	    public static encode(message: IGamerTestChatC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerTestChatC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerTestChatC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerTestChatC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerTestChatC2S;
	    public static toObject(message: GamerTestChatC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerTestChatS2C {
	    error?: (number|null);
	    id?: (number|null);
	}
}
declare module proto {
	 class GamerTestChatS2C implements IGamerTestChatS2C {
	    constructor(properties?: IGamerTestChatS2C);
	    public error: number;
	    public id: number;
	    public static create(properties?: IGamerTestChatS2C): GamerTestChatS2C;
	    public static encode(message: IGamerTestChatS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerTestChatS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerTestChatS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerTestChatS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerTestChatS2C;
	    public static toObject(message: GamerTestChatS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerClubRequestC2S {
	    id?: (number|null);
	    clubId?: (number|null);
	    msg?: (string|null);
	}
}
declare module proto {
	 class GamerClubRequestC2S implements IGamerClubRequestC2S {
	    constructor(properties?: IGamerClubRequestC2S);
	    public id: number;
	    public clubId: number;
	    public msg: string;
	    public static create(properties?: IGamerClubRequestC2S): GamerClubRequestC2S;
	    public static encode(message: IGamerClubRequestC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerClubRequestC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerClubRequestC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerClubRequestC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerClubRequestC2S;
	    public static toObject(message: GamerClubRequestC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerClubRequestS2C {
	    error?: (number|null);
	    id?: (number|null);
	    ok?: (boolean|null);
	}
}
declare module proto {
	 class GamerClubRequestS2C implements IGamerClubRequestS2C {
	    constructor(properties?: IGamerClubRequestS2C);
	    public error: number;
	    public id: number;
	    public ok: boolean;
	    public static create(properties?: IGamerClubRequestS2C): GamerClubRequestS2C;
	    public static encode(message: IGamerClubRequestS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerClubRequestS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerClubRequestS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerClubRequestS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerClubRequestS2C;
	    public static toObject(message: GamerClubRequestS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyNewChatS2C {
	    error?: (number|null);
	    chats?: (IChatData[]|null);
	}
}
declare module proto {
	 class GamerNotifyNewChatS2C implements IGamerNotifyNewChatS2C {
	    constructor(properties?: IGamerNotifyNewChatS2C);
	    public error: number;
	    public chats: IChatData[];
	    public static create(properties?: IGamerNotifyNewChatS2C): GamerNotifyNewChatS2C;
	    public static encode(message: IGamerNotifyNewChatS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyNewChatS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyNewChatS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyNewChatS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyNewChatS2C;
	    public static toObject(message: GamerNotifyNewChatS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNewFriendReqC2S {
	    id?: (number|null);
	    oid?: (number|null);
	    msg?: (string|null);
	}
}
declare module proto {
	 class GamerNewFriendReqC2S implements IGamerNewFriendReqC2S {
	    constructor(properties?: IGamerNewFriendReqC2S);
	    public id: number;
	    public oid: number;
	    public msg: string;
	    public static create(properties?: IGamerNewFriendReqC2S): GamerNewFriendReqC2S;
	    public static encode(message: IGamerNewFriendReqC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNewFriendReqC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNewFriendReqC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNewFriendReqC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNewFriendReqC2S;
	    public static toObject(message: GamerNewFriendReqC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNewFriendReqS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerNewFriendReqS2C implements IGamerNewFriendReqS2C {
	    constructor(properties?: IGamerNewFriendReqS2C);
	    public error: number;
	    public static create(properties?: IGamerNewFriendReqS2C): GamerNewFriendReqS2C;
	    public static encode(message: IGamerNewFriendReqS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNewFriendReqS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNewFriendReqS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNewFriendReqS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNewFriendReqS2C;
	    public static toObject(message: GamerNewFriendReqS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerDelFriendC2S {
	    id?: (number|null);
	    oid?: (number|null);
	}
}
declare module proto {
	 class GamerDelFriendC2S implements IGamerDelFriendC2S {
	    constructor(properties?: IGamerDelFriendC2S);
	    public id: number;
	    public oid: number;
	    public static create(properties?: IGamerDelFriendC2S): GamerDelFriendC2S;
	    public static encode(message: IGamerDelFriendC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerDelFriendC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerDelFriendC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerDelFriendC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerDelFriendC2S;
	    public static toObject(message: GamerDelFriendC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerDelFriendS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerDelFriendS2C implements IGamerDelFriendS2C {
	    constructor(properties?: IGamerDelFriendS2C);
	    public error: number;
	    public static create(properties?: IGamerDelFriendS2C): GamerDelFriendS2C;
	    public static encode(message: IGamerDelFriendS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerDelFriendS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerDelFriendS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerDelFriendS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerDelFriendS2C;
	    public static toObject(message: GamerDelFriendS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyNewFriendReqS2C {
	    error?: (number|null);
	    request?: (IGamerFriendRequest|null);
	}
}
declare module proto {
	 class GamerNotifyNewFriendReqS2C implements IGamerNotifyNewFriendReqS2C {
	    constructor(properties?: IGamerNotifyNewFriendReqS2C);
	    public error: number;
	    public request?: (IGamerFriendRequest|null);
	    public static create(properties?: IGamerNotifyNewFriendReqS2C): GamerNotifyNewFriendReqS2C;
	    public static encode(message: IGamerNotifyNewFriendReqS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyNewFriendReqS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyNewFriendReqS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyNewFriendReqS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyNewFriendReqS2C;
	    public static toObject(message: GamerNotifyNewFriendReqS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerProcessFriendReqC2S {
	    id?: (number|null);
	    oid?: (number|null);
	    result?: (boolean|null);
	}
}
declare module proto {
	 class GamerProcessFriendReqC2S implements IGamerProcessFriendReqC2S {
	    constructor(properties?: IGamerProcessFriendReqC2S);
	    public id: number;
	    public oid: number;
	    public result: boolean;
	    public static create(properties?: IGamerProcessFriendReqC2S): GamerProcessFriendReqC2S;
	    public static encode(message: IGamerProcessFriendReqC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerProcessFriendReqC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerProcessFriendReqC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerProcessFriendReqC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerProcessFriendReqC2S;
	    public static toObject(message: GamerProcessFriendReqC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerProcessFriendReqS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerProcessFriendReqS2C implements IGamerProcessFriendReqS2C {
	    constructor(properties?: IGamerProcessFriendReqS2C);
	    public error: number;
	    public static create(properties?: IGamerProcessFriendReqS2C): GamerProcessFriendReqS2C;
	    public static encode(message: IGamerProcessFriendReqS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerProcessFriendReqS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerProcessFriendReqS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerProcessFriendReqS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerProcessFriendReqS2C;
	    public static toObject(message: GamerProcessFriendReqS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyNewFriendS2C {
	    error?: (number|null);
	    friend?: (IGamerFriend|null);
	}
}
declare module proto {
	 class GamerNotifyNewFriendS2C implements IGamerNotifyNewFriendS2C {
	    constructor(properties?: IGamerNotifyNewFriendS2C);
	    public error: number;
	    public friend?: (IGamerFriend|null);
	    public static create(properties?: IGamerNotifyNewFriendS2C): GamerNotifyNewFriendS2C;
	    public static encode(message: IGamerNotifyNewFriendS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyNewFriendS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyNewFriendS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyNewFriendS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyNewFriendS2C;
	    public static toObject(message: GamerNotifyNewFriendS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyDelFriendS2C {
	    error?: (number|null);
	    oid?: (number|null);
	}
}
declare module proto {
	 class GamerNotifyDelFriendS2C implements IGamerNotifyDelFriendS2C {
	    constructor(properties?: IGamerNotifyDelFriendS2C);
	    public error: number;
	    public oid: number;
	    public static create(properties?: IGamerNotifyDelFriendS2C): GamerNotifyDelFriendS2C;
	    public static encode(message: IGamerNotifyDelFriendS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyDelFriendS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyDelFriendS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyDelFriendS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyDelFriendS2C;
	    public static toObject(message: GamerNotifyDelFriendS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyNoticeS2C {
	    error?: (number|null);
	    type?: (NoticeType|null);
	    msg?: (string|null);
	}
}
declare module proto {
	 class GamerNotifyNoticeS2C implements IGamerNotifyNoticeS2C {
	    constructor(properties?: IGamerNotifyNoticeS2C);
	    public error: number;
	    public type: NoticeType;
	    public msg: string;
	    public static create(properties?: IGamerNotifyNoticeS2C): GamerNotifyNoticeS2C;
	    public static encode(message: IGamerNotifyNoticeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyNoticeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyNoticeS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyNoticeS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyNoticeS2C;
	    public static toObject(message: GamerNotifyNoticeS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyMailS2C {
	    error?: (number|null);
	    leftMailNum?: (number|null);
	    mails?: (IMail[]|null);
	}
}
declare module proto {
	 class GamerNotifyMailS2C implements IGamerNotifyMailS2C {
	    constructor(properties?: IGamerNotifyMailS2C);
	    public error: number;
	    public leftMailNum: number;
	    public mails: IMail[];
	    public static create(properties?: IGamerNotifyMailS2C): GamerNotifyMailS2C;
	    public static encode(message: IGamerNotifyMailS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyMailS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyMailS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyMailS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyMailS2C;
	    public static toObject(message: GamerNotifyMailS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyNewMailS2C {
	    error?: (number|null);
	    mails?: (IMail[]|null);
	}
}
declare module proto {
	 class GamerNotifyNewMailS2C implements IGamerNotifyNewMailS2C {
	    constructor(properties?: IGamerNotifyNewMailS2C);
	    public error: number;
	    public mails: IMail[];
	    public static create(properties?: IGamerNotifyNewMailS2C): GamerNotifyNewMailS2C;
	    public static encode(message: IGamerNotifyNewMailS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyNewMailS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyNewMailS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyNewMailS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyNewMailS2C;
	    public static toObject(message: GamerNotifyNewMailS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerGetMailC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class GamerGetMailC2S implements IGamerGetMailC2S {
	    constructor(properties?: IGamerGetMailC2S);
	    public id: number;
	    public static create(properties?: IGamerGetMailC2S): GamerGetMailC2S;
	    public static encode(message: IGamerGetMailC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerGetMailC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerGetMailC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerGetMailC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerGetMailC2S;
	    public static toObject(message: GamerGetMailC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerGetMailS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerGetMailS2C implements IGamerGetMailS2C {
	    constructor(properties?: IGamerGetMailS2C);
	    public error: number;
	    public static create(properties?: IGamerGetMailS2C): GamerGetMailS2C;
	    public static encode(message: IGamerGetMailS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerGetMailS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerGetMailS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerGetMailS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerGetMailS2C;
	    public static toObject(message: GamerGetMailS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerDelMailC2S {
	    id?: (number|null);
	    mailId?: (string|null);
	}
}
declare module proto {
	 class GamerDelMailC2S implements IGamerDelMailC2S {
	    constructor(properties?: IGamerDelMailC2S);
	    public id: number;
	    public mailId: string;
	    public static create(properties?: IGamerDelMailC2S): GamerDelMailC2S;
	    public static encode(message: IGamerDelMailC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerDelMailC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerDelMailC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerDelMailC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerDelMailC2S;
	    public static toObject(message: GamerDelMailC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerDelMailS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerDelMailS2C implements IGamerDelMailS2C {
	    constructor(properties?: IGamerDelMailS2C);
	    public error: number;
	    public static create(properties?: IGamerDelMailS2C): GamerDelMailS2C;
	    public static encode(message: IGamerDelMailS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerDelMailS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerDelMailS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerDelMailS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerDelMailS2C;
	    public static toObject(message: GamerDelMailS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerDelHaveReadMailC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class GamerDelHaveReadMailC2S implements IGamerDelHaveReadMailC2S {
	    constructor(properties?: IGamerDelHaveReadMailC2S);
	    public id: number;
	    public static create(properties?: IGamerDelHaveReadMailC2S): GamerDelHaveReadMailC2S;
	    public static encode(message: IGamerDelHaveReadMailC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerDelHaveReadMailC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerDelHaveReadMailC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerDelHaveReadMailC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerDelHaveReadMailC2S;
	    public static toObject(message: GamerDelHaveReadMailC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerDelHaveReadMailS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerDelHaveReadMailS2C implements IGamerDelHaveReadMailS2C {
	    constructor(properties?: IGamerDelHaveReadMailS2C);
	    public error: number;
	    public static create(properties?: IGamerDelHaveReadMailS2C): GamerDelHaveReadMailS2C;
	    public static encode(message: IGamerDelHaveReadMailS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerDelHaveReadMailS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerDelHaveReadMailS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerDelHaveReadMailS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerDelHaveReadMailS2C;
	    public static toObject(message: GamerDelHaveReadMailS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerOneKeyRcvMailRewardC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class GamerOneKeyRcvMailRewardC2S implements IGamerOneKeyRcvMailRewardC2S {
	    constructor(properties?: IGamerOneKeyRcvMailRewardC2S);
	    public id: number;
	    public static create(properties?: IGamerOneKeyRcvMailRewardC2S): GamerOneKeyRcvMailRewardC2S;
	    public static encode(message: IGamerOneKeyRcvMailRewardC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerOneKeyRcvMailRewardC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerOneKeyRcvMailRewardC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerOneKeyRcvMailRewardC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerOneKeyRcvMailRewardC2S;
	    public static toObject(message: GamerOneKeyRcvMailRewardC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerOneKeyRcvMailRewardS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerOneKeyRcvMailRewardS2C implements IGamerOneKeyRcvMailRewardS2C {
	    constructor(properties?: IGamerOneKeyRcvMailRewardS2C);
	    public error: number;
	    public static create(properties?: IGamerOneKeyRcvMailRewardS2C): GamerOneKeyRcvMailRewardS2C;
	    public static encode(message: IGamerOneKeyRcvMailRewardS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerOneKeyRcvMailRewardS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerOneKeyRcvMailRewardS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerOneKeyRcvMailRewardS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerOneKeyRcvMailRewardS2C;
	    public static toObject(message: GamerOneKeyRcvMailRewardS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerChangeMailStateC2S {
	    id?: (number|null);
	    mailId?: (string|null);
	    state?: (MailState|null);
	}
}
declare module proto {
	 class GamerChangeMailStateC2S implements IGamerChangeMailStateC2S {
	    constructor(properties?: IGamerChangeMailStateC2S);
	    public id: number;
	    public mailId: string;
	    public state: MailState;
	    public static create(properties?: IGamerChangeMailStateC2S): GamerChangeMailStateC2S;
	    public static encode(message: IGamerChangeMailStateC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerChangeMailStateC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerChangeMailStateC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerChangeMailStateC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerChangeMailStateC2S;
	    public static toObject(message: GamerChangeMailStateC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerChangeMailStateS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerChangeMailStateS2C implements IGamerChangeMailStateS2C {
	    constructor(properties?: IGamerChangeMailStateS2C);
	    public error: number;
	    public static create(properties?: IGamerChangeMailStateS2C): GamerChangeMailStateS2C;
	    public static encode(message: IGamerChangeMailStateS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerChangeMailStateS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerChangeMailStateS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerChangeMailStateS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerChangeMailStateS2C;
	    public static toObject(message: GamerChangeMailStateS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNewHeroC2S {
	    id?: (number|null);
	    heroId?: (number|null);
	}
}
declare module proto {
	 class GamerNewHeroC2S implements IGamerNewHeroC2S {
	    constructor(properties?: IGamerNewHeroC2S);
	    public id: number;
	    public heroId: number;
	    public static create(properties?: IGamerNewHeroC2S): GamerNewHeroC2S;
	    public static encode(message: IGamerNewHeroC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNewHeroC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNewHeroC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNewHeroC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNewHeroC2S;
	    public static toObject(message: GamerNewHeroC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNewHeroS2C {
	    error?: (number|null);
	    hero?: (IGamerHero|null);
	}
}
declare module proto {
	 class GamerNewHeroS2C implements IGamerNewHeroS2C {
	    constructor(properties?: IGamerNewHeroS2C);
	    public error: number;
	    public hero?: (IGamerHero|null);
	    public static create(properties?: IGamerNewHeroS2C): GamerNewHeroS2C;
	    public static encode(message: IGamerNewHeroS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNewHeroS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNewHeroS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNewHeroS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNewHeroS2C;
	    public static toObject(message: GamerNewHeroS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerUpgradeHeroC2S {
	    id?: (number|null);
	    heroId?: (number|null);
	    upgradeNum?: (number|null);
	}
}
declare module proto {
	 class GamerUpgradeHeroC2S implements IGamerUpgradeHeroC2S {
	    constructor(properties?: IGamerUpgradeHeroC2S);
	    public id: number;
	    public heroId: number;
	    public upgradeNum: number;
	    public static create(properties?: IGamerUpgradeHeroC2S): GamerUpgradeHeroC2S;
	    public static encode(message: IGamerUpgradeHeroC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerUpgradeHeroC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUpgradeHeroC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUpgradeHeroC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerUpgradeHeroC2S;
	    public static toObject(message: GamerUpgradeHeroC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerUpgradeHeroS2C {
	    error?: (number|null);
	    hero?: (IGamerHero|null);
	    upgradeNum?: (number|null);
	}
}
declare module proto {
	 class GamerUpgradeHeroS2C implements IGamerUpgradeHeroS2C {
	    constructor(properties?: IGamerUpgradeHeroS2C);
	    public error: number;
	    public hero?: (IGamerHero|null);
	    public upgradeNum: number;
	    public static create(properties?: IGamerUpgradeHeroS2C): GamerUpgradeHeroS2C;
	    public static encode(message: IGamerUpgradeHeroS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerUpgradeHeroS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUpgradeHeroS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUpgradeHeroS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerUpgradeHeroS2C;
	    public static toObject(message: GamerUpgradeHeroS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerUseHeroMedicineC2S {
	    id?: (number|null);
	    heroId?: (number|null);
	    itemId?: (number|null);
	    useNum?: (number|null);
	}
}
declare module proto {
	 class GamerUseHeroMedicineC2S implements IGamerUseHeroMedicineC2S {
	    constructor(properties?: IGamerUseHeroMedicineC2S);
	    public id: number;
	    public heroId: number;
	    public itemId: number;
	    public useNum: number;
	    public static create(properties?: IGamerUseHeroMedicineC2S): GamerUseHeroMedicineC2S;
	    public static encode(message: IGamerUseHeroMedicineC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerUseHeroMedicineC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUseHeroMedicineC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUseHeroMedicineC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerUseHeroMedicineC2S;
	    public static toObject(message: GamerUseHeroMedicineC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerUseHeroMedicineS2C {
	    error?: (number|null);
	    hero?: (IGamerHero|null);
	}
}
declare module proto {
	 class GamerUseHeroMedicineS2C implements IGamerUseHeroMedicineS2C {
	    constructor(properties?: IGamerUseHeroMedicineS2C);
	    public error: number;
	    public hero?: (IGamerHero|null);
	    public static create(properties?: IGamerUseHeroMedicineS2C): GamerUseHeroMedicineS2C;
	    public static encode(message: IGamerUseHeroMedicineS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerUseHeroMedicineS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUseHeroMedicineS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUseHeroMedicineS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerUseHeroMedicineS2C;
	    public static toObject(message: GamerUseHeroMedicineS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerUpStarHeroC2S {
	    id?: (number|null);
	    heroId?: (number|null);
	}
}
declare module proto {
	 class GamerUpStarHeroC2S implements IGamerUpStarHeroC2S {
	    constructor(properties?: IGamerUpStarHeroC2S);
	    public id: number;
	    public heroId: number;
	    public static create(properties?: IGamerUpStarHeroC2S): GamerUpStarHeroC2S;
	    public static encode(message: IGamerUpStarHeroC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerUpStarHeroC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUpStarHeroC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUpStarHeroC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerUpStarHeroC2S;
	    public static toObject(message: GamerUpStarHeroC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerUpStarHeroS2C {
	    error?: (number|null);
	    hero?: (IGamerHero|null);
	}
}
declare module proto {
	 class GamerUpStarHeroS2C implements IGamerUpStarHeroS2C {
	    constructor(properties?: IGamerUpStarHeroS2C);
	    public error: number;
	    public hero?: (IGamerHero|null);
	    public static create(properties?: IGamerUpStarHeroS2C): GamerUpStarHeroS2C;
	    public static encode(message: IGamerUpStarHeroS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerUpStarHeroS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUpStarHeroS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUpStarHeroS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerUpStarHeroS2C;
	    public static toObject(message: GamerUpStarHeroS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerUpHeroSkillC2S {
	    id?: (number|null);
	    heroId?: (number|null);
	    skillId?: (number|null);
	}
}
declare module proto {
	 class GamerUpHeroSkillC2S implements IGamerUpHeroSkillC2S {
	    constructor(properties?: IGamerUpHeroSkillC2S);
	    public id: number;
	    public heroId: number;
	    public skillId: number;
	    public static create(properties?: IGamerUpHeroSkillC2S): GamerUpHeroSkillC2S;
	    public static encode(message: IGamerUpHeroSkillC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerUpHeroSkillC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUpHeroSkillC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUpHeroSkillC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerUpHeroSkillC2S;
	    public static toObject(message: GamerUpHeroSkillC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerUpHeroSkillS2C {
	    error?: (number|null);
	    hero?: (IGamerHero|null);
	}
}
declare module proto {
	 class GamerUpHeroSkillS2C implements IGamerUpHeroSkillS2C {
	    constructor(properties?: IGamerUpHeroSkillS2C);
	    public error: number;
	    public hero?: (IGamerHero|null);
	    public static create(properties?: IGamerUpHeroSkillS2C): GamerUpHeroSkillS2C;
	    public static encode(message: IGamerUpHeroSkillS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerUpHeroSkillS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUpHeroSkillS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUpHeroSkillS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerUpHeroSkillS2C;
	    public static toObject(message: GamerUpHeroSkillS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerGetHeroC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class GamerGetHeroC2S implements IGamerGetHeroC2S {
	    constructor(properties?: IGamerGetHeroC2S);
	    public id: number;
	    public static create(properties?: IGamerGetHeroC2S): GamerGetHeroC2S;
	    public static encode(message: IGamerGetHeroC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerGetHeroC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerGetHeroC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerGetHeroC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerGetHeroC2S;
	    public static toObject(message: GamerGetHeroC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerGetHeroS2C {
	    error?: (number|null);
	    heroList?: (IGamerHero[]|null);
	    teamSelectHeroId?: (number|null);
	}
}
declare module proto {
	 class GamerGetHeroS2C implements IGamerGetHeroS2C {
	    constructor(properties?: IGamerGetHeroS2C);
	    public error: number;
	    public heroList: IGamerHero[];
	    public teamSelectHeroId: number;
	    public static create(properties?: IGamerGetHeroS2C): GamerGetHeroS2C;
	    public static encode(message: IGamerGetHeroS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerGetHeroS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerGetHeroS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerGetHeroS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerGetHeroS2C;
	    public static toObject(message: GamerGetHeroS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyHerosChangeS2C {
	    error?: (number|null);
	    heroList?: (IGamerHero[]|null);
	}
}
declare module proto {
	 class GamerNotifyHerosChangeS2C implements IGamerNotifyHerosChangeS2C {
	    constructor(properties?: IGamerNotifyHerosChangeS2C);
	    public error: number;
	    public heroList: IGamerHero[];
	    public static create(properties?: IGamerNotifyHerosChangeS2C): GamerNotifyHerosChangeS2C;
	    public static encode(message: IGamerNotifyHerosChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyHerosChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyHerosChangeS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyHerosChangeS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyHerosChangeS2C;
	    public static toObject(message: GamerNotifyHerosChangeS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyHeroPropUpdateS2C {
	    error?: (number|null);
	    hero?: (IGamerHero|null);
	}
}
declare module proto {
	 class GamerNotifyHeroPropUpdateS2C implements IGamerNotifyHeroPropUpdateS2C {
	    constructor(properties?: IGamerNotifyHeroPropUpdateS2C);
	    public error: number;
	    public hero?: (IGamerHero|null);
	    public static create(properties?: IGamerNotifyHeroPropUpdateS2C): GamerNotifyHeroPropUpdateS2C;
	    public static encode(message: IGamerNotifyHeroPropUpdateS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyHeroPropUpdateS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyHeroPropUpdateS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyHeroPropUpdateS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyHeroPropUpdateS2C;
	    public static toObject(message: GamerNotifyHeroPropUpdateS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerPVPLoadingC2S {
	    id?: (number|null);
	    session?: (string|null);
	    per?: (number|null);
	}
}
declare module proto {
	 class GamerPVPLoadingC2S implements IGamerPVPLoadingC2S {
	    constructor(properties?: IGamerPVPLoadingC2S);
	    public id: number;
	    public session: string;
	    public per: number;
	    public static create(properties?: IGamerPVPLoadingC2S): GamerPVPLoadingC2S;
	    public static encode(message: IGamerPVPLoadingC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerPVPLoadingC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerPVPLoadingC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerPVPLoadingC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerPVPLoadingC2S;
	    public static toObject(message: GamerPVPLoadingC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerPVPLoadingS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerPVPLoadingS2C implements IGamerPVPLoadingS2C {
	    constructor(properties?: IGamerPVPLoadingS2C);
	    public error: number;
	    public static create(properties?: IGamerPVPLoadingS2C): GamerPVPLoadingS2C;
	    public static encode(message: IGamerPVPLoadingS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerPVPLoadingS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerPVPLoadingS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerPVPLoadingS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerPVPLoadingS2C;
	    public static toObject(message: GamerPVPLoadingS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyPVPLoadingS2C {
	    error?: (number|null);
	    state?: (number|null);
	    loading?: (IPVPLoading[]|null);
	}
}
declare module proto {
	 class GamerNotifyPVPLoadingS2C implements IGamerNotifyPVPLoadingS2C {
	    constructor(properties?: IGamerNotifyPVPLoadingS2C);
	    public error: number;
	    public state: number;
	    public loading: IPVPLoading[];
	    public static create(properties?: IGamerNotifyPVPLoadingS2C): GamerNotifyPVPLoadingS2C;
	    public static encode(message: IGamerNotifyPVPLoadingS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyPVPLoadingS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyPVPLoadingS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyPVPLoadingS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyPVPLoadingS2C;
	    public static toObject(message: GamerNotifyPVPLoadingS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerPVPSyncC2S {
	    id?: (number|null);
	    session?: (string|null);
	    input?: (IPVPInput|null);
	    needFrames?: (number[]|null);
	    crc?: ((number|any)[]|null);
	    inputs?: (IPVPInput[]|null);
	    reconn?: (boolean|null);
	    exit?: (boolean|null);
	    index?: (number|null);
	    gateAddr?: (string|null);
	    result?: (IPVPResult|null);
	    recvTime?: (number|any|null);
	    clientAddr?: (string|null);
	}
}
declare module proto {
	 class GamerPVPSyncC2S implements IGamerPVPSyncC2S {
	    constructor(properties?: IGamerPVPSyncC2S);
	    public id: number;
	    public session: string;
	    public input?: (IPVPInput|null);
	    public needFrames: number[];
	    public crc: (number|any)[];
	    public inputs: IPVPInput[];
	    public reconn: boolean;
	    public exit: boolean;
	    public index: number;
	    public gateAddr: string;
	    public result?: (IPVPResult|null);
	    public recvTime: (number|any);
	    public clientAddr: string;
	    public static create(properties?: IGamerPVPSyncC2S): GamerPVPSyncC2S;
	    public static encode(message: IGamerPVPSyncC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerPVPSyncC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerPVPSyncC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerPVPSyncC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerPVPSyncC2S;
	    public static toObject(message: GamerPVPSyncC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerPVPSyncS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerPVPSyncS2C implements IGamerPVPSyncS2C {
	    constructor(properties?: IGamerPVPSyncS2C);
	    public error: number;
	    public static create(properties?: IGamerPVPSyncS2C): GamerPVPSyncS2C;
	    public static encode(message: IGamerPVPSyncS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerPVPSyncS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerPVPSyncS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerPVPSyncS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerPVPSyncS2C;
	    public static toObject(message: GamerPVPSyncS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyGamerMiniS2C {
	    error?: (number|null);
	    mini?: (IGamerMini|null);
	}
}
declare module proto {
	 class GamerNotifyGamerMiniS2C implements IGamerNotifyGamerMiniS2C {
	    constructor(properties?: IGamerNotifyGamerMiniS2C);
	    public error: number;
	    public mini?: (IGamerMini|null);
	    public static create(properties?: IGamerNotifyGamerMiniS2C): GamerNotifyGamerMiniS2C;
	    public static encode(message: IGamerNotifyGamerMiniS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyGamerMiniS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyGamerMiniS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyGamerMiniS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyGamerMiniS2C;
	    public static toObject(message: GamerNotifyGamerMiniS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyPVPSyncS2C {
	    error?: (number|null);
	    maxFrameCount?: (number|null);
	    frames?: (IPVPFrame[]|null);
	    framesData?: (Uint8Array|null);
	    frameData?: (Uint8Array[]|null);
	    index?: (number|null);
	    delta?: (number|null);
	    session?: (string|null);
	    serverFrame?: (number|null);
	}
}
declare module proto {
	 class GamerNotifyPVPSyncS2C implements IGamerNotifyPVPSyncS2C {
	    constructor(properties?: IGamerNotifyPVPSyncS2C);
	    public error: number;
	    public maxFrameCount: number;
	    public frames: IPVPFrame[];
	    public framesData: Uint8Array;
	    public frameData: Uint8Array[];
	    public index: number;
	    public delta: number;
	    public session: string;
	    public serverFrame: number;
	    public static create(properties?: IGamerNotifyPVPSyncS2C): GamerNotifyPVPSyncS2C;
	    public static encode(message: IGamerNotifyPVPSyncS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyPVPSyncS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyPVPSyncS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyPVPSyncS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyPVPSyncS2C;
	    public static toObject(message: GamerNotifyPVPSyncS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyNewPVPResultS2C {
	    error?: (number|null);
	    battleStar?: (number|null);
	    costTime?: (number|null);
	    checkPointId?: (number|null);
	    result?: (BattleResultType|null);
	    firstRewardList?: (IGameItem[]|null);
	    baseRewardList?: (IGameItem[]|null);
	    ItemRewardList?: (IGameItem[]|null);
	    heroList?: (IGamerHero[]|null);
	    battleType?: (PVPType|null);
	    ComboTime?: (number|null);
	    BaseScore?: (number|null);
	    StreakScore?: (number|null);
	    StrongEnemyScore?: (number|null);
	}
}
declare module proto {
	 class GamerNotifyNewPVPResultS2C implements IGamerNotifyNewPVPResultS2C {
	    constructor(properties?: IGamerNotifyNewPVPResultS2C);
	    public error: number;
	    public battleStar: number;
	    public costTime: number;
	    public checkPointId: number;
	    public result: BattleResultType;
	    public firstRewardList: IGameItem[];
	    public baseRewardList: IGameItem[];
	    public ItemRewardList: IGameItem[];
	    public heroList: IGamerHero[];
	    public battleType: PVPType;
	    public ComboTime: number;
	    public BaseScore: number;
	    public StreakScore: number;
	    public StrongEnemyScore: number;
	    public static create(properties?: IGamerNotifyNewPVPResultS2C): GamerNotifyNewPVPResultS2C;
	    public static encode(message: IGamerNotifyNewPVPResultS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyNewPVPResultS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyNewPVPResultS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyNewPVPResultS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyNewPVPResultS2C;
	    public static toObject(message: GamerNotifyNewPVPResultS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerReliveC2S {
	    id?: (number|null);
	    times?: (number|null);
	    checkPointId?: (number|null);
	}
}
declare module proto {
	 class GamerReliveC2S implements IGamerReliveC2S {
	    constructor(properties?: IGamerReliveC2S);
	    public id: number;
	    public times: number;
	    public checkPointId: number;
	    public static create(properties?: IGamerReliveC2S): GamerReliveC2S;
	    public static encode(message: IGamerReliveC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerReliveC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerReliveC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerReliveC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerReliveC2S;
	    public static toObject(message: GamerReliveC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerReliveS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerReliveS2C implements IGamerReliveS2C {
	    constructor(properties?: IGamerReliveS2C);
	    public error: number;
	    public static create(properties?: IGamerReliveS2C): GamerReliveS2C;
	    public static encode(message: IGamerReliveS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerReliveS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerReliveS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerReliveS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerReliveS2C;
	    public static toObject(message: GamerReliveS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyIconChangeS2C {
	    error?: (number|null);
	    icon?: (number|null);
	}
}
declare module proto {
	 class GamerNotifyIconChangeS2C implements IGamerNotifyIconChangeS2C {
	    constructor(properties?: IGamerNotifyIconChangeS2C);
	    public error: number;
	    public icon: number;
	    public static create(properties?: IGamerNotifyIconChangeS2C): GamerNotifyIconChangeS2C;
	    public static encode(message: IGamerNotifyIconChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyIconChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyIconChangeS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyIconChangeS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyIconChangeS2C;
	    public static toObject(message: GamerNotifyIconChangeS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyDiamonChangeS2C {
	    error?: (number|null);
	    diamon?: (number|null);
	}
}
declare module proto {
	 class GamerNotifyDiamonChangeS2C implements IGamerNotifyDiamonChangeS2C {
	    constructor(properties?: IGamerNotifyDiamonChangeS2C);
	    public error: number;
	    public diamon: number;
	    public static create(properties?: IGamerNotifyDiamonChangeS2C): GamerNotifyDiamonChangeS2C;
	    public static encode(message: IGamerNotifyDiamonChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyDiamonChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyDiamonChangeS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyDiamonChangeS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyDiamonChangeS2C;
	    public static toObject(message: GamerNotifyDiamonChangeS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyEnergyChangeS2C {
	    error?: (number|null);
	    energy?: (number|null);
	}
}
declare module proto {
	 class GamerNotifyEnergyChangeS2C implements IGamerNotifyEnergyChangeS2C {
	    constructor(properties?: IGamerNotifyEnergyChangeS2C);
	    public error: number;
	    public energy: number;
	    public static create(properties?: IGamerNotifyEnergyChangeS2C): GamerNotifyEnergyChangeS2C;
	    public static encode(message: IGamerNotifyEnergyChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyEnergyChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyEnergyChangeS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyEnergyChangeS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyEnergyChangeS2C;
	    public static toObject(message: GamerNotifyEnergyChangeS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyExpChangeS2C {
	    error?: (number|null);
	    exp?: (number|null);
	}
}
declare module proto {
	 class GamerNotifyExpChangeS2C implements IGamerNotifyExpChangeS2C {
	    constructor(properties?: IGamerNotifyExpChangeS2C);
	    public error: number;
	    public exp: number;
	    public static create(properties?: IGamerNotifyExpChangeS2C): GamerNotifyExpChangeS2C;
	    public static encode(message: IGamerNotifyExpChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyExpChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyExpChangeS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyExpChangeS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyExpChangeS2C;
	    public static toObject(message: GamerNotifyExpChangeS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerGetRealTimeRankC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class GamerGetRealTimeRankC2S implements IGamerGetRealTimeRankC2S {
	    constructor(properties?: IGamerGetRealTimeRankC2S);
	    public id: number;
	    public static create(properties?: IGamerGetRealTimeRankC2S): GamerGetRealTimeRankC2S;
	    public static encode(message: IGamerGetRealTimeRankC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerGetRealTimeRankC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerGetRealTimeRankC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerGetRealTimeRankC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerGetRealTimeRankC2S;
	    public static toObject(message: GamerGetRealTimeRankC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerGetRealTimeRankS2C {
	    error?: (number|null);
	    ranks?: (IRankLength[]|null);
	}
}
declare module proto {
	 class GamerGetRealTimeRankS2C implements IGamerGetRealTimeRankS2C {
	    constructor(properties?: IGamerGetRealTimeRankS2C);
	    public error: number;
	    public ranks: IRankLength[];
	    public static create(properties?: IGamerGetRealTimeRankS2C): GamerGetRealTimeRankS2C;
	    public static encode(message: IGamerGetRealTimeRankS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerGetRealTimeRankS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerGetRealTimeRankS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerGetRealTimeRankS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerGetRealTimeRankS2C;
	    public static toObject(message: GamerGetRealTimeRankS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerCheckPVPBattleC2S {
	    id?: (number|null);
	    session?: (string|null);
	}
}
declare module proto {
	 class GamerCheckPVPBattleC2S implements IGamerCheckPVPBattleC2S {
	    constructor(properties?: IGamerCheckPVPBattleC2S);
	    public id: number;
	    public session: string;
	    public static create(properties?: IGamerCheckPVPBattleC2S): GamerCheckPVPBattleC2S;
	    public static encode(message: IGamerCheckPVPBattleC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerCheckPVPBattleC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerCheckPVPBattleC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerCheckPVPBattleC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerCheckPVPBattleC2S;
	    public static toObject(message: GamerCheckPVPBattleC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerCheckPVPBattleS2C {
	    error?: (number|null);
	    matchInfo?: (IMatchInfo|null);
	}
}
declare module proto {
	 class GamerCheckPVPBattleS2C implements IGamerCheckPVPBattleS2C {
	    constructor(properties?: IGamerCheckPVPBattleS2C);
	    public error: number;
	    public matchInfo?: (IMatchInfo|null);
	    public static create(properties?: IGamerCheckPVPBattleS2C): GamerCheckPVPBattleS2C;
	    public static encode(message: IGamerCheckPVPBattleS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerCheckPVPBattleS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerCheckPVPBattleS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerCheckPVPBattleS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerCheckPVPBattleS2C;
	    public static toObject(message: GamerCheckPVPBattleS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerUploadWXInfoC2S {
	    id?: (number|null);
	    wxInfo?: (IWXInfo|null);
	}
}
declare module proto {
	 class GamerUploadWXInfoC2S implements IGamerUploadWXInfoC2S {
	    constructor(properties?: IGamerUploadWXInfoC2S);
	    public id: number;
	    public wxInfo?: (IWXInfo|null);
	    public static create(properties?: IGamerUploadWXInfoC2S): GamerUploadWXInfoC2S;
	    public static encode(message: IGamerUploadWXInfoC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerUploadWXInfoC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUploadWXInfoC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUploadWXInfoC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerUploadWXInfoC2S;
	    public static toObject(message: GamerUploadWXInfoC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerUploadWXInfoS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerUploadWXInfoS2C implements IGamerUploadWXInfoS2C {
	    constructor(properties?: IGamerUploadWXInfoS2C);
	    public error: number;
	    public static create(properties?: IGamerUploadWXInfoS2C): GamerUploadWXInfoS2C;
	    public static encode(message: IGamerUploadWXInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerUploadWXInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUploadWXInfoS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUploadWXInfoS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerUploadWXInfoS2C;
	    public static toObject(message: GamerUploadWXInfoS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerGetNoviceGuideC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class GamerGetNoviceGuideC2S implements IGamerGetNoviceGuideC2S {
	    constructor(properties?: IGamerGetNoviceGuideC2S);
	    public id: number;
	    public static create(properties?: IGamerGetNoviceGuideC2S): GamerGetNoviceGuideC2S;
	    public static encode(message: IGamerGetNoviceGuideC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerGetNoviceGuideC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerGetNoviceGuideC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerGetNoviceGuideC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerGetNoviceGuideC2S;
	    public static toObject(message: GamerGetNoviceGuideC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerGetNoviceGuideS2C {
	    error?: (number|null);
	    noviceGuideList?: (IGuide[]|null);
	}
}
declare module proto {
	 class GamerGetNoviceGuideS2C implements IGamerGetNoviceGuideS2C {
	    constructor(properties?: IGamerGetNoviceGuideS2C);
	    public error: number;
	    public noviceGuideList: IGuide[];
	    public static create(properties?: IGamerGetNoviceGuideS2C): GamerGetNoviceGuideS2C;
	    public static encode(message: IGamerGetNoviceGuideS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerGetNoviceGuideS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerGetNoviceGuideS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerGetNoviceGuideS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerGetNoviceGuideS2C;
	    public static toObject(message: GamerGetNoviceGuideS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNoviceGuideChangeC2S {
	    id?: (number|null);
	    noviceGuideList?: (IGuide[]|null);
	}
}
declare module proto {
	 class GamerNoviceGuideChangeC2S implements IGamerNoviceGuideChangeC2S {
	    constructor(properties?: IGamerNoviceGuideChangeC2S);
	    public id: number;
	    public noviceGuideList: IGuide[];
	    public static create(properties?: IGamerNoviceGuideChangeC2S): GamerNoviceGuideChangeC2S;
	    public static encode(message: IGamerNoviceGuideChangeC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNoviceGuideChangeC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNoviceGuideChangeC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNoviceGuideChangeC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNoviceGuideChangeC2S;
	    public static toObject(message: GamerNoviceGuideChangeC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNoviceGuideChangeS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerNoviceGuideChangeS2C implements IGamerNoviceGuideChangeS2C {
	    constructor(properties?: IGamerNoviceGuideChangeS2C);
	    public error: number;
	    public static create(properties?: IGamerNoviceGuideChangeS2C): GamerNoviceGuideChangeS2C;
	    public static encode(message: IGamerNoviceGuideChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNoviceGuideChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNoviceGuideChangeS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNoviceGuideChangeS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNoviceGuideChangeS2C;
	    public static toObject(message: GamerNoviceGuideChangeS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerMatchC2S {
	    id?: (number|null);
	    type?: (PVPType|null);
	    heroId?: (number|null);
	    teamId?: (number|null);
	    checkPointId?: (number|null);
	    danInfo?: (IDanInfo|null);
	    heroGroupId?: (number|null);
	    heroList?: (IGamerHero[]|null);
	    secretLand?: (IGamerSecretLand|null);
	}
}
declare module proto {
	 class GamerMatchC2S implements IGamerMatchC2S {
	    constructor(properties?: IGamerMatchC2S);
	    public id: number;
	    public type: PVPType;
	    public heroId: number;
	    public teamId: number;
	    public checkPointId: number;
	    public danInfo?: (IDanInfo|null);
	    public heroGroupId: number;
	    public heroList: IGamerHero[];
	    public secretLand?: (IGamerSecretLand|null);
	    public static create(properties?: IGamerMatchC2S): GamerMatchC2S;
	    public static encode(message: IGamerMatchC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerMatchC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerMatchC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerMatchC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerMatchC2S;
	    public static toObject(message: GamerMatchC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerMatchS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerMatchS2C implements IGamerMatchS2C {
	    constructor(properties?: IGamerMatchS2C);
	    public error: number;
	    public static create(properties?: IGamerMatchS2C): GamerMatchS2C;
	    public static encode(message: IGamerMatchS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerMatchS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerMatchS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerMatchS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerMatchS2C;
	    public static toObject(message: GamerMatchS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerCancelMatchC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class GamerCancelMatchC2S implements IGamerCancelMatchC2S {
	    constructor(properties?: IGamerCancelMatchC2S);
	    public id: number;
	    public static create(properties?: IGamerCancelMatchC2S): GamerCancelMatchC2S;
	    public static encode(message: IGamerCancelMatchC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerCancelMatchC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerCancelMatchC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerCancelMatchC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerCancelMatchC2S;
	    public static toObject(message: GamerCancelMatchC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerCancelMatchS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerCancelMatchS2C implements IGamerCancelMatchS2C {
	    constructor(properties?: IGamerCancelMatchS2C);
	    public error: number;
	    public static create(properties?: IGamerCancelMatchS2C): GamerCancelMatchS2C;
	    public static encode(message: IGamerCancelMatchS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerCancelMatchS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerCancelMatchS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerCancelMatchS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerCancelMatchS2C;
	    public static toObject(message: GamerCancelMatchS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyMatchInfoS2C {
	    error?: (number|null);
	    matchInfo?: (IMatchInfo|null);
	    reconn?: (boolean|null);
	}
}
declare module proto {
	 class GamerNotifyMatchInfoS2C implements IGamerNotifyMatchInfoS2C {
	    constructor(properties?: IGamerNotifyMatchInfoS2C);
	    public error: number;
	    public matchInfo?: (IMatchInfo|null);
	    public reconn: boolean;
	    public static create(properties?: IGamerNotifyMatchInfoS2C): GamerNotifyMatchInfoS2C;
	    public static encode(message: IGamerNotifyMatchInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyMatchInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyMatchInfoS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyMatchInfoS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyMatchInfoS2C;
	    public static toObject(message: GamerNotifyMatchInfoS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerGetRewardC2S {
	    id?: (number|null);
	    type?: (number|null);
	}
}
declare module proto {
	 class GamerGetRewardC2S implements IGamerGetRewardC2S {
	    constructor(properties?: IGamerGetRewardC2S);
	    public id: number;
	    public type: number;
	    public static create(properties?: IGamerGetRewardC2S): GamerGetRewardC2S;
	    public static encode(message: IGamerGetRewardC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerGetRewardC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerGetRewardC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerGetRewardC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerGetRewardC2S;
	    public static toObject(message: GamerGetRewardC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerGetRewardS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerGetRewardS2C implements IGamerGetRewardS2C {
	    constructor(properties?: IGamerGetRewardS2C);
	    public error: number;
	    public static create(properties?: IGamerGetRewardS2C): GamerGetRewardS2C;
	    public static encode(message: IGamerGetRewardS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerGetRewardS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerGetRewardS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerGetRewardS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerGetRewardS2C;
	    public static toObject(message: GamerGetRewardS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerUseIconC2S {
	    id?: (number|null);
	    type?: (number|null);
	    count?: (number|null);
	    session?: (string|null);
	}
}
declare module proto {
	 class GamerUseIconC2S implements IGamerUseIconC2S {
	    constructor(properties?: IGamerUseIconC2S);
	    public id: number;
	    public type: number;
	    public count: number;
	    public session: string;
	    public static create(properties?: IGamerUseIconC2S): GamerUseIconC2S;
	    public static encode(message: IGamerUseIconC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerUseIconC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUseIconC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUseIconC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerUseIconC2S;
	    public static toObject(message: GamerUseIconC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerUseIconS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerUseIconS2C implements IGamerUseIconS2C {
	    constructor(properties?: IGamerUseIconS2C);
	    public error: number;
	    public static create(properties?: IGamerUseIconS2C): GamerUseIconS2C;
	    public static encode(message: IGamerUseIconS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerUseIconS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerUseIconS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerUseIconS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerUseIconS2C;
	    public static toObject(message: GamerUseIconS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyGashaponInfoS2C {
	    error?: (number|null);
	    infos?: (IGashapon[]|null);
	}
}
declare module proto {
	 class GamerNotifyGashaponInfoS2C implements IGamerNotifyGashaponInfoS2C {
	    constructor(properties?: IGamerNotifyGashaponInfoS2C);
	    public error: number;
	    public infos: IGashapon[];
	    public static create(properties?: IGamerNotifyGashaponInfoS2C): GamerNotifyGashaponInfoS2C;
	    public static encode(message: IGamerNotifyGashaponInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyGashaponInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyGashaponInfoS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyGashaponInfoS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyGashaponInfoS2C;
	    public static toObject(message: GamerNotifyGashaponInfoS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerExtractGashaponC2S {
	    id?: (number|null);
	    gashaponId?: (number|null);
	}
}
declare module proto {
	 class GamerExtractGashaponC2S implements IGamerExtractGashaponC2S {
	    constructor(properties?: IGamerExtractGashaponC2S);
	    public id: number;
	    public gashaponId: number;
	    public static create(properties?: IGamerExtractGashaponC2S): GamerExtractGashaponC2S;
	    public static encode(message: IGamerExtractGashaponC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerExtractGashaponC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerExtractGashaponC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerExtractGashaponC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerExtractGashaponC2S;
	    public static toObject(message: GamerExtractGashaponC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerExtractGashaponS2C {
	    error?: (number|null);
	    gashaponId?: (number|null);
	    items?: (IGameItem[]|null);
	    lastTime?: (number|any|null);
	    todayExtractNum?: (number|null);
	}
}
declare module proto {
	 class GamerExtractGashaponS2C implements IGamerExtractGashaponS2C {
	    constructor(properties?: IGamerExtractGashaponS2C);
	    public error: number;
	    public gashaponId: number;
	    public items: IGameItem[];
	    public lastTime: (number|any);
	    public todayExtractNum: number;
	    public static create(properties?: IGamerExtractGashaponS2C): GamerExtractGashaponS2C;
	    public static encode(message: IGamerExtractGashaponS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerExtractGashaponS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerExtractGashaponS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerExtractGashaponS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerExtractGashaponS2C;
	    public static toObject(message: GamerExtractGashaponS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerGetGashaponPreviewC2S {
	    id?: (number|null);
	    gashaponType?: (number|null);
	}
}
declare module proto {
	 class GamerGetGashaponPreviewC2S implements IGamerGetGashaponPreviewC2S {
	    constructor(properties?: IGamerGetGashaponPreviewC2S);
	    public id: number;
	    public gashaponType: number;
	    public static create(properties?: IGamerGetGashaponPreviewC2S): GamerGetGashaponPreviewC2S;
	    public static encode(message: IGamerGetGashaponPreviewC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerGetGashaponPreviewC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerGetGashaponPreviewC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerGetGashaponPreviewC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerGetGashaponPreviewC2S;
	    public static toObject(message: GamerGetGashaponPreviewC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerGetGashaponPreviewS2C {
	    error?: (number|null);
	    gashaponType?: (number|null);
	    items?: (IGameItem[]|null);
	}
}
declare module proto {
	 class GamerGetGashaponPreviewS2C implements IGamerGetGashaponPreviewS2C {
	    constructor(properties?: IGamerGetGashaponPreviewS2C);
	    public error: number;
	    public gashaponType: number;
	    public items: IGameItem[];
	    public static create(properties?: IGamerGetGashaponPreviewS2C): GamerGetGashaponPreviewS2C;
	    public static encode(message: IGamerGetGashaponPreviewS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerGetGashaponPreviewS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerGetGashaponPreviewS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerGetGashaponPreviewS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerGetGashaponPreviewS2C;
	    public static toObject(message: GamerGetGashaponPreviewS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyActivitiesS2C {
	    error?: (number|null);
	    countActivity?: (ICountActivity|null);
	}
}
declare module proto {
	 class GamerNotifyActivitiesS2C implements IGamerNotifyActivitiesS2C {
	    constructor(properties?: IGamerNotifyActivitiesS2C);
	    public error: number;
	    public countActivity?: (ICountActivity|null);
	    public static create(properties?: IGamerNotifyActivitiesS2C): GamerNotifyActivitiesS2C;
	    public static encode(message: IGamerNotifyActivitiesS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyActivitiesS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyActivitiesS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyActivitiesS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyActivitiesS2C;
	    public static toObject(message: GamerNotifyActivitiesS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetActivityRewardC2S {
	    id?: (number|null);
	    activityId?: (number|null);
	}
}
declare module proto {
	 class GetActivityRewardC2S implements IGetActivityRewardC2S {
	    constructor(properties?: IGetActivityRewardC2S);
	    public id: number;
	    public activityId: number;
	    public static create(properties?: IGetActivityRewardC2S): GetActivityRewardC2S;
	    public static encode(message: IGetActivityRewardC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetActivityRewardC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetActivityRewardC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetActivityRewardC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetActivityRewardC2S;
	    public static toObject(message: GetActivityRewardC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetActivityRewardS2C {
	    error?: (number|null);
	    activityId?: (number|null);
	}
}
declare module proto {
	 class GetActivityRewardS2C implements IGetActivityRewardS2C {
	    constructor(properties?: IGetActivityRewardS2C);
	    public error: number;
	    public activityId: number;
	    public static create(properties?: IGetActivityRewardS2C): GetActivityRewardS2C;
	    public static encode(message: IGetActivityRewardS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetActivityRewardS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetActivityRewardS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetActivityRewardS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetActivityRewardS2C;
	    public static toObject(message: GetActivityRewardS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ICreateGuildC2S {
	    id?: (number|null);
	    guildName?: (string|null);
	}
}
declare module proto {
	 class CreateGuildC2S implements ICreateGuildC2S {
	    constructor(properties?: ICreateGuildC2S);
	    public id: number;
	    public guildName: string;
	    public static create(properties?: ICreateGuildC2S): CreateGuildC2S;
	    public static encode(message: ICreateGuildC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ICreateGuildC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CreateGuildC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreateGuildC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): CreateGuildC2S;
	    public static toObject(message: CreateGuildC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ICreateGuildS2C {
	    error?: (number|null);
	    guildInfo?: (IGuild|null);
	}
}
declare module proto {
	 class CreateGuildS2C implements ICreateGuildS2C {
	    constructor(properties?: ICreateGuildS2C);
	    public error: number;
	    public guildInfo?: (IGuild|null);
	    public static create(properties?: ICreateGuildS2C): CreateGuildS2C;
	    public static encode(message: ICreateGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ICreateGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CreateGuildS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreateGuildS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): CreateGuildS2C;
	    public static toObject(message: CreateGuildS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGuildGamerLoginC2S {
	    id?: (number|null);
	    guildId?: (number|null);
	}
}
declare module proto {
	 class GuildGamerLoginC2S implements IGuildGamerLoginC2S {
	    constructor(properties?: IGuildGamerLoginC2S);
	    public id: number;
	    public guildId: number;
	    public static create(properties?: IGuildGamerLoginC2S): GuildGamerLoginC2S;
	    public static encode(message: IGuildGamerLoginC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGuildGamerLoginC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GuildGamerLoginC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GuildGamerLoginC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GuildGamerLoginC2S;
	    public static toObject(message: GuildGamerLoginC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGuildGamerLoginS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GuildGamerLoginS2C implements IGuildGamerLoginS2C {
	    constructor(properties?: IGuildGamerLoginS2C);
	    public error: number;
	    public static create(properties?: IGuildGamerLoginS2C): GuildGamerLoginS2C;
	    public static encode(message: IGuildGamerLoginS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGuildGamerLoginS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GuildGamerLoginS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GuildGamerLoginS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GuildGamerLoginS2C;
	    public static toObject(message: GuildGamerLoginS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGuildGamerLoginoutC2S {
	    id?: (number|null);
	    guildId?: (number|null);
	}
}
declare module proto {
	 class GuildGamerLoginoutC2S implements IGuildGamerLoginoutC2S {
	    constructor(properties?: IGuildGamerLoginoutC2S);
	    public id: number;
	    public guildId: number;
	    public static create(properties?: IGuildGamerLoginoutC2S): GuildGamerLoginoutC2S;
	    public static encode(message: IGuildGamerLoginoutC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGuildGamerLoginoutC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GuildGamerLoginoutC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GuildGamerLoginoutC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GuildGamerLoginoutC2S;
	    public static toObject(message: GuildGamerLoginoutC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGuildGamerLoginoutS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GuildGamerLoginoutS2C implements IGuildGamerLoginoutS2C {
	    constructor(properties?: IGuildGamerLoginoutS2C);
	    public error: number;
	    public static create(properties?: IGuildGamerLoginoutS2C): GuildGamerLoginoutS2C;
	    public static encode(message: IGuildGamerLoginoutS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGuildGamerLoginoutS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GuildGamerLoginoutS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GuildGamerLoginoutS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GuildGamerLoginoutS2C;
	    public static toObject(message: GuildGamerLoginoutS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IDissolutionGuildC2S {
	    id?: (number|null);
	    guildId?: (number|null);
	}
}
declare module proto {
	 class DissolutionGuildC2S implements IDissolutionGuildC2S {
	    constructor(properties?: IDissolutionGuildC2S);
	    public id: number;
	    public guildId: number;
	    public static create(properties?: IDissolutionGuildC2S): DissolutionGuildC2S;
	    public static encode(message: IDissolutionGuildC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDissolutionGuildC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DissolutionGuildC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DissolutionGuildC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DissolutionGuildC2S;
	    public static toObject(message: DissolutionGuildC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IDissolutionGuildS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class DissolutionGuildS2C implements IDissolutionGuildS2C {
	    constructor(properties?: IDissolutionGuildS2C);
	    public error: number;
	    public static create(properties?: IDissolutionGuildS2C): DissolutionGuildS2C;
	    public static encode(message: IDissolutionGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDissolutionGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DissolutionGuildS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DissolutionGuildS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DissolutionGuildS2C;
	    public static toObject(message: DissolutionGuildS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetGuildC2S {
	    id?: (number|null);
	    guildId?: (number|null);
	}
}
declare module proto {
	 class GetGuildC2S implements IGetGuildC2S {
	    constructor(properties?: IGetGuildC2S);
	    public id: number;
	    public guildId: number;
	    public static create(properties?: IGetGuildC2S): GetGuildC2S;
	    public static encode(message: IGetGuildC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetGuildC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetGuildC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetGuildC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetGuildC2S;
	    public static toObject(message: GetGuildC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetGuildS2C {
	    error?: (number|null);
	    guild?: (IGuild|null);
	}
}
declare module proto {
	 class GetGuildS2C implements IGetGuildS2C {
	    constructor(properties?: IGetGuildS2C);
	    public error: number;
	    public guild?: (IGuild|null);
	    public static create(properties?: IGetGuildS2C): GetGuildS2C;
	    public static encode(message: IGetGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetGuildS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetGuildS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetGuildS2C;
	    public static toObject(message: GetGuildS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetGuildListC2S {
	    id?: (number|null);
	    serverId?: (number|null);
	    page?: (number|null);
	}
}
declare module proto {
	 class GetGuildListC2S implements IGetGuildListC2S {
	    constructor(properties?: IGetGuildListC2S);
	    public id: number;
	    public serverId: number;
	    public page: number;
	    public static create(properties?: IGetGuildListC2S): GetGuildListC2S;
	    public static encode(message: IGetGuildListC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetGuildListC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetGuildListC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetGuildListC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetGuildListC2S;
	    public static toObject(message: GetGuildListC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetGuildListS2C {
	    error?: (number|null);
	    guilds?: (IGuild[]|null);
	}
}
declare module proto {
	 class GetGuildListS2C implements IGetGuildListS2C {
	    constructor(properties?: IGetGuildListS2C);
	    public error: number;
	    public guilds: IGuild[];
	    public static create(properties?: IGetGuildListS2C): GetGuildListS2C;
	    public static encode(message: IGetGuildListS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetGuildListS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetGuildListS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetGuildListS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetGuildListS2C;
	    public static toObject(message: GetGuildListS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyApplyJoinGuildS2C {
	    error?: (number|null);
	    guildId?: (number|null);
	    applyers?: (IGamerMini[]|null);
	}
}
declare module proto {
	 class GamerNotifyApplyJoinGuildS2C implements IGamerNotifyApplyJoinGuildS2C {
	    constructor(properties?: IGamerNotifyApplyJoinGuildS2C);
	    public error: number;
	    public guildId: number;
	    public applyers: IGamerMini[];
	    public static create(properties?: IGamerNotifyApplyJoinGuildS2C): GamerNotifyApplyJoinGuildS2C;
	    public static encode(message: IGamerNotifyApplyJoinGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyApplyJoinGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyApplyJoinGuildS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyApplyJoinGuildS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyApplyJoinGuildS2C;
	    public static toObject(message: GamerNotifyApplyJoinGuildS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IApplyJoinGuildC2S {
	    id?: (number|null);
	    guildId?: (number|null);
	}
}
declare module proto {
	 class ApplyJoinGuildC2S implements IApplyJoinGuildC2S {
	    constructor(properties?: IApplyJoinGuildC2S);
	    public id: number;
	    public guildId: number;
	    public static create(properties?: IApplyJoinGuildC2S): ApplyJoinGuildC2S;
	    public static encode(message: IApplyJoinGuildC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IApplyJoinGuildC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ApplyJoinGuildC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ApplyJoinGuildC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): ApplyJoinGuildC2S;
	    public static toObject(message: ApplyJoinGuildC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IApplyJoinGuildS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class ApplyJoinGuildS2C implements IApplyJoinGuildS2C {
	    constructor(properties?: IApplyJoinGuildS2C);
	    public error: number;
	    public static create(properties?: IApplyJoinGuildS2C): ApplyJoinGuildS2C;
	    public static encode(message: IApplyJoinGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IApplyJoinGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ApplyJoinGuildS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ApplyJoinGuildS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): ApplyJoinGuildS2C;
	    public static toObject(message: ApplyJoinGuildS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IApprovalJoinGuildC2S {
	    id?: (number|null);
	    guildId?: (number|null);
	    applyerGid?: (number|null);
	    result?: (boolean|null);
	}
}
declare module proto {
	 class ApprovalJoinGuildC2S implements IApprovalJoinGuildC2S {
	    constructor(properties?: IApprovalJoinGuildC2S);
	    public id: number;
	    public guildId: number;
	    public applyerGid: number;
	    public result: boolean;
	    public static create(properties?: IApprovalJoinGuildC2S): ApprovalJoinGuildC2S;
	    public static encode(message: IApprovalJoinGuildC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IApprovalJoinGuildC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ApprovalJoinGuildC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ApprovalJoinGuildC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): ApprovalJoinGuildC2S;
	    public static toObject(message: ApprovalJoinGuildC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IApprovalJoinGuildS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class ApprovalJoinGuildS2C implements IApprovalJoinGuildS2C {
	    constructor(properties?: IApprovalJoinGuildS2C);
	    public error: number;
	    public static create(properties?: IApprovalJoinGuildS2C): ApprovalJoinGuildS2C;
	    public static encode(message: IApprovalJoinGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IApprovalJoinGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ApprovalJoinGuildS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ApprovalJoinGuildS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): ApprovalJoinGuildS2C;
	    public static toObject(message: ApprovalJoinGuildS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyInviteJoinGuildS2C {
	    error?: (number|null);
	    guildId?: (number|null);
	    inviterGid?: (number|null);
	}
}
declare module proto {
	 class GamerNotifyInviteJoinGuildS2C implements IGamerNotifyInviteJoinGuildS2C {
	    constructor(properties?: IGamerNotifyInviteJoinGuildS2C);
	    public error: number;
	    public guildId: number;
	    public inviterGid: number;
	    public static create(properties?: IGamerNotifyInviteJoinGuildS2C): GamerNotifyInviteJoinGuildS2C;
	    public static encode(message: IGamerNotifyInviteJoinGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyInviteJoinGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyInviteJoinGuildS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyInviteJoinGuildS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyInviteJoinGuildS2C;
	    public static toObject(message: GamerNotifyInviteJoinGuildS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IInviteJoinGuildC2S {
	    id?: (number|null);
	    inviteeGid?: (number|null);
	    guildId?: (number|null);
	}
}
declare module proto {
	 class InviteJoinGuildC2S implements IInviteJoinGuildC2S {
	    constructor(properties?: IInviteJoinGuildC2S);
	    public id: number;
	    public inviteeGid: number;
	    public guildId: number;
	    public static create(properties?: IInviteJoinGuildC2S): InviteJoinGuildC2S;
	    public static encode(message: IInviteJoinGuildC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IInviteJoinGuildC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InviteJoinGuildC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InviteJoinGuildC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): InviteJoinGuildC2S;
	    public static toObject(message: InviteJoinGuildC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IInviteJoinGuildS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class InviteJoinGuildS2C implements IInviteJoinGuildS2C {
	    constructor(properties?: IInviteJoinGuildS2C);
	    public error: number;
	    public static create(properties?: IInviteJoinGuildS2C): InviteJoinGuildS2C;
	    public static encode(message: IInviteJoinGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IInviteJoinGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InviteJoinGuildS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InviteJoinGuildS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): InviteJoinGuildS2C;
	    public static toObject(message: InviteJoinGuildS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IAgreeJoinGuildC2S {
	    id?: (number|null);
	    guildId?: (number|null);
	    result?: (boolean|null);
	}
}
declare module proto {
	 class AgreeJoinGuildC2S implements IAgreeJoinGuildC2S {
	    constructor(properties?: IAgreeJoinGuildC2S);
	    public id: number;
	    public guildId: number;
	    public result: boolean;
	    public static create(properties?: IAgreeJoinGuildC2S): AgreeJoinGuildC2S;
	    public static encode(message: IAgreeJoinGuildC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IAgreeJoinGuildC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AgreeJoinGuildC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AgreeJoinGuildC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): AgreeJoinGuildC2S;
	    public static toObject(message: AgreeJoinGuildC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IAgreeJoinGuildS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class AgreeJoinGuildS2C implements IAgreeJoinGuildS2C {
	    constructor(properties?: IAgreeJoinGuildS2C);
	    public error: number;
	    public static create(properties?: IAgreeJoinGuildS2C): AgreeJoinGuildS2C;
	    public static encode(message: IAgreeJoinGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IAgreeJoinGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AgreeJoinGuildS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AgreeJoinGuildS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): AgreeJoinGuildS2C;
	    public static toObject(message: AgreeJoinGuildS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IQuitGuildC2S {
	    id?: (number|null);
	    guildId?: (number|null);
	}
}
declare module proto {
	 class QuitGuildC2S implements IQuitGuildC2S {
	    constructor(properties?: IQuitGuildC2S);
	    public id: number;
	    public guildId: number;
	    public static create(properties?: IQuitGuildC2S): QuitGuildC2S;
	    public static encode(message: IQuitGuildC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IQuitGuildC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QuitGuildC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): QuitGuildC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): QuitGuildC2S;
	    public static toObject(message: QuitGuildC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IQuitGuildS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class QuitGuildS2C implements IQuitGuildS2C {
	    constructor(properties?: IQuitGuildS2C);
	    public error: number;
	    public static create(properties?: IQuitGuildS2C): QuitGuildS2C;
	    public static encode(message: IQuitGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IQuitGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QuitGuildS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): QuitGuildS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): QuitGuildS2C;
	    public static toObject(message: QuitGuildS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IKickOutGuildC2S {
	    id?: (number|null);
	    guildId?: (number|null);
	    kickedGid?: (number|null);
	}
}
declare module proto {
	 class KickOutGuildC2S implements IKickOutGuildC2S {
	    constructor(properties?: IKickOutGuildC2S);
	    public id: number;
	    public guildId: number;
	    public kickedGid: number;
	    public static create(properties?: IKickOutGuildC2S): KickOutGuildC2S;
	    public static encode(message: IKickOutGuildC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IKickOutGuildC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): KickOutGuildC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): KickOutGuildC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): KickOutGuildC2S;
	    public static toObject(message: KickOutGuildC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IKickOutGuildS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class KickOutGuildS2C implements IKickOutGuildS2C {
	    constructor(properties?: IKickOutGuildS2C);
	    public error: number;
	    public static create(properties?: IKickOutGuildS2C): KickOutGuildS2C;
	    public static encode(message: IKickOutGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IKickOutGuildS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): KickOutGuildS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): KickOutGuildS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): KickOutGuildS2C;
	    public static toObject(message: KickOutGuildS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyGuildMemUpdateS2C {
	    error?: (number|null);
	    mem?: (IGuildMember|null);
	}
}
declare module proto {
	 class GamerNotifyGuildMemUpdateS2C implements IGamerNotifyGuildMemUpdateS2C {
	    constructor(properties?: IGamerNotifyGuildMemUpdateS2C);
	    public error: number;
	    public mem?: (IGuildMember|null);
	    public static create(properties?: IGamerNotifyGuildMemUpdateS2C): GamerNotifyGuildMemUpdateS2C;
	    public static encode(message: IGamerNotifyGuildMemUpdateS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyGuildMemUpdateS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyGuildMemUpdateS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyGuildMemUpdateS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyGuildMemUpdateS2C;
	    public static toObject(message: GamerNotifyGuildMemUpdateS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGuildChatC2S {
	    id?: (number|null);
	    guildId?: (number|null);
	    msg?: (string|null);
	}
}
declare module proto {
	 class GuildChatC2S implements IGuildChatC2S {
	    constructor(properties?: IGuildChatC2S);
	    public id: number;
	    public guildId: number;
	    public msg: string;
	    public static create(properties?: IGuildChatC2S): GuildChatC2S;
	    public static encode(message: IGuildChatC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGuildChatC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GuildChatC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GuildChatC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GuildChatC2S;
	    public static toObject(message: GuildChatC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGuildChatS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GuildChatS2C implements IGuildChatS2C {
	    constructor(properties?: IGuildChatS2C);
	    public error: number;
	    public static create(properties?: IGuildChatS2C): GuildChatS2C;
	    public static encode(message: IGuildChatS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGuildChatS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GuildChatS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GuildChatS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GuildChatS2C;
	    public static toObject(message: GuildChatS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyGuildChatS2C {
	    error?: (number|null);
	    oid?: (number|null);
	    msg?: (string|null);
	}
}
declare module proto {
	 class GamerNotifyGuildChatS2C implements IGamerNotifyGuildChatS2C {
	    constructor(properties?: IGamerNotifyGuildChatS2C);
	    public error: number;
	    public oid: number;
	    public msg: string;
	    public static create(properties?: IGamerNotifyGuildChatS2C): GamerNotifyGuildChatS2C;
	    public static encode(message: IGamerNotifyGuildChatS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyGuildChatS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyGuildChatS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyGuildChatS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyGuildChatS2C;
	    public static toObject(message: GamerNotifyGuildChatS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGMC2S {
	    id?: (number|null);
	    gm?: (string|null);
	}
}
declare module proto {
	 class GMC2S implements IGMC2S {
	    constructor(properties?: IGMC2S);
	    public id: number;
	    public gm: string;
	    public static create(properties?: IGMC2S): GMC2S;
	    public static encode(message: IGMC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGMC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GMC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GMC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GMC2S;
	    public static toObject(message: GMC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGMS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GMS2C implements IGMS2C {
	    constructor(properties?: IGMS2C);
	    public error: number;
	    public static create(properties?: IGMS2C): GMS2C;
	    public static encode(message: IGMS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGMS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GMS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GMS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GMS2C;
	    public static toObject(message: GMS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ICheckPointListC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class CheckPointListC2S implements ICheckPointListC2S {
	    constructor(properties?: ICheckPointListC2S);
	    public id: number;
	    public static create(properties?: ICheckPointListC2S): CheckPointListC2S;
	    public static encode(message: ICheckPointListC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ICheckPointListC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CheckPointListC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CheckPointListC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): CheckPointListC2S;
	    public static toObject(message: CheckPointListC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ICheckPointListS2C {
	    error?: (number|null);
	    data?: (ICheckPointData|null);
	    chapterList?: (IChapter[]|null);
	    checkPointList?: (ICheckPoint[]|null);
	}
}
declare module proto {
	 class CheckPointListS2C implements ICheckPointListS2C {
	    constructor(properties?: ICheckPointListS2C);
	    public error: number;
	    public data?: (ICheckPointData|null);
	    public chapterList: IChapter[];
	    public checkPointList: ICheckPoint[];
	    public static create(properties?: ICheckPointListS2C): CheckPointListS2C;
	    public static encode(message: ICheckPointListS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ICheckPointListS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CheckPointListS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CheckPointListS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): CheckPointListS2C;
	    public static toObject(message: CheckPointListS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyCheckPointListS2C {
	    error?: (number|null);
	    checkPoint?: (ICheckPoint|null);
	    chapter?: (IChapter|null);
	    data?: (ICheckPointData|null);
	}
}
declare module proto {
	 class GamerNotifyCheckPointListS2C implements IGamerNotifyCheckPointListS2C {
	    constructor(properties?: IGamerNotifyCheckPointListS2C);
	    public error: number;
	    public checkPoint?: (ICheckPoint|null);
	    public chapter?: (IChapter|null);
	    public data?: (ICheckPointData|null);
	    public static create(properties?: IGamerNotifyCheckPointListS2C): GamerNotifyCheckPointListS2C;
	    public static encode(message: IGamerNotifyCheckPointListS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyCheckPointListS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyCheckPointListS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyCheckPointListS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyCheckPointListS2C;
	    public static toObject(message: GamerNotifyCheckPointListS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyNewCheckPointListS2C {
	    error?: (number|null);
	    checkPointList?: (number[]|null);
	}
}
declare module proto {
	 class GamerNotifyNewCheckPointListS2C implements IGamerNotifyNewCheckPointListS2C {
	    constructor(properties?: IGamerNotifyNewCheckPointListS2C);
	    public error: number;
	    public checkPointList: number[];
	    public static create(properties?: IGamerNotifyNewCheckPointListS2C): GamerNotifyNewCheckPointListS2C;
	    public static encode(message: IGamerNotifyNewCheckPointListS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyNewCheckPointListS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyNewCheckPointListS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyNewCheckPointListS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyNewCheckPointListS2C;
	    public static toObject(message: GamerNotifyNewCheckPointListS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyRewardS2C {
	    error?: (number|null);
	    rewardList?: (IGameItem[]|null);
	}
}
declare module proto {
	 class GamerNotifyRewardS2C implements IGamerNotifyRewardS2C {
	    constructor(properties?: IGamerNotifyRewardS2C);
	    public error: number;
	    public rewardList: IGameItem[];
	    public static create(properties?: IGamerNotifyRewardS2C): GamerNotifyRewardS2C;
	    public static encode(message: IGamerNotifyRewardS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyRewardS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyRewardS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyRewardS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyRewardS2C;
	    public static toObject(message: GamerNotifyRewardS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetPlotStarRewardC2S {
	    id?: (number|null);
	    chapterGradeId?: (number|null);
	    chapterLevel?: (number|null);
	}
}
declare module proto {
	 class GetPlotStarRewardC2S implements IGetPlotStarRewardC2S {
	    constructor(properties?: IGetPlotStarRewardC2S);
	    public id: number;
	    public chapterGradeId: number;
	    public chapterLevel: number;
	    public static create(properties?: IGetPlotStarRewardC2S): GetPlotStarRewardC2S;
	    public static encode(message: IGetPlotStarRewardC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetPlotStarRewardC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetPlotStarRewardC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetPlotStarRewardC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetPlotStarRewardC2S;
	    public static toObject(message: GetPlotStarRewardC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetPlotStarRewardS2C {
	    error?: (number|null);
	    chapterGradeId?: (number|null);
	    chapterLevel?: (number|null);
	}
}
declare module proto {
	 class GetPlotStarRewardS2C implements IGetPlotStarRewardS2C {
	    constructor(properties?: IGetPlotStarRewardS2C);
	    public error: number;
	    public chapterGradeId: number;
	    public chapterLevel: number;
	    public static create(properties?: IGetPlotStarRewardS2C): GetPlotStarRewardS2C;
	    public static encode(message: IGetPlotStarRewardS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetPlotStarRewardS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetPlotStarRewardS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetPlotStarRewardS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetPlotStarRewardS2C;
	    public static toObject(message: GetPlotStarRewardS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IBuyTimesCheckPointC2S {
	    id?: (number|null);
	    type?: (CheckPointType|null);
	    buyNum?: (number|null);
	}
}
declare module proto {
	 class BuyTimesCheckPointC2S implements IBuyTimesCheckPointC2S {
	    constructor(properties?: IBuyTimesCheckPointC2S);
	    public id: number;
	    public type: CheckPointType;
	    public buyNum: number;
	    public static create(properties?: IBuyTimesCheckPointC2S): BuyTimesCheckPointC2S;
	    public static encode(message: IBuyTimesCheckPointC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IBuyTimesCheckPointC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BuyTimesCheckPointC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BuyTimesCheckPointC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): BuyTimesCheckPointC2S;
	    public static toObject(message: BuyTimesCheckPointC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IBuyTimesCheckPointS2C {
	    error?: (number|null);
	    checkPointData?: (ICheckPointData|null);
	}
}
declare module proto {
	 class BuyTimesCheckPointS2C implements IBuyTimesCheckPointS2C {
	    constructor(properties?: IBuyTimesCheckPointS2C);
	    public error: number;
	    public checkPointData?: (ICheckPointData|null);
	    public static create(properties?: IBuyTimesCheckPointS2C): BuyTimesCheckPointS2C;
	    public static encode(message: IBuyTimesCheckPointS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IBuyTimesCheckPointS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BuyTimesCheckPointS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BuyTimesCheckPointS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): BuyTimesCheckPointS2C;
	    public static toObject(message: BuyTimesCheckPointS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISweepCheckPointC2S {
	    id?: (number|null);
	    checkPointId?: (number|null);
	    times?: (number|null);
	}
}
declare module proto {
	 class SweepCheckPointC2S implements ISweepCheckPointC2S {
	    constructor(properties?: ISweepCheckPointC2S);
	    public id: number;
	    public checkPointId: number;
	    public times: number;
	    public static create(properties?: ISweepCheckPointC2S): SweepCheckPointC2S;
	    public static encode(message: ISweepCheckPointC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISweepCheckPointC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SweepCheckPointC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SweepCheckPointC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SweepCheckPointC2S;
	    public static toObject(message: SweepCheckPointC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISweepCheckPointS2C {
	    error?: (number|null);
	    checkPointId?: (number|null);
	    times?: (number|null);
	    baseReward?: (IItemList|null);
	    itemReward?: (IItemList[]|null);
	}
}
declare module proto {
	 class SweepCheckPointS2C implements ISweepCheckPointS2C {
	    constructor(properties?: ISweepCheckPointS2C);
	    public error: number;
	    public checkPointId: number;
	    public times: number;
	    public baseReward?: (IItemList|null);
	    public itemReward: IItemList[];
	    public static create(properties?: ISweepCheckPointS2C): SweepCheckPointS2C;
	    public static encode(message: ISweepCheckPointS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISweepCheckPointS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SweepCheckPointS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SweepCheckPointS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SweepCheckPointS2C;
	    public static toObject(message: SweepCheckPointS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerSettlePVEC2S {
	    id?: (number|null);
	    checkPointId?: (number|null);
	    battleTime?: (number|null);
	    HeroList?: (IHeroStatus[]|null);
	    reserve?: (string[]|null);
	}
}
declare module proto {
	 class GamerSettlePVEC2S implements IGamerSettlePVEC2S {
	    constructor(properties?: IGamerSettlePVEC2S);
	    public id: number;
	    public checkPointId: number;
	    public battleTime: number;
	    public HeroList: IHeroStatus[];
	    public reserve: string[];
	    public static create(properties?: IGamerSettlePVEC2S): GamerSettlePVEC2S;
	    public static encode(message: IGamerSettlePVEC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerSettlePVEC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerSettlePVEC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerSettlePVEC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerSettlePVEC2S;
	    public static toObject(message: GamerSettlePVEC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerSettlePVES2C {
	    error?: (number|null);
	    checkPointId?: (number|null);
	    firstReward?: (IItemList|null);
	    baseReward?: (IItemList|null);
	    itemReward?: (IItemList|null);
	    battleType?: (number|null);
	    reserve?: (string[]|null);
	}
}
declare module proto {
	 class GamerSettlePVES2C implements IGamerSettlePVES2C {
	    constructor(properties?: IGamerSettlePVES2C);
	    public error: number;
	    public checkPointId: number;
	    public firstReward?: (IItemList|null);
	    public baseReward?: (IItemList|null);
	    public itemReward?: (IItemList|null);
	    public battleType: number;
	    public reserve: string[];
	    public static create(properties?: IGamerSettlePVES2C): GamerSettlePVES2C;
	    public static encode(message: IGamerSettlePVES2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerSettlePVES2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerSettlePVES2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerSettlePVES2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerSettlePVES2C;
	    public static toObject(message: GamerSettlePVES2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IDraugListC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class DraugListC2S implements IDraugListC2S {
	    constructor(properties?: IDraugListC2S);
	    public id: number;
	    public static create(properties?: IDraugListC2S): DraugListC2S;
	    public static encode(message: IDraugListC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDraugListC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DraugListC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DraugListC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DraugListC2S;
	    public static toObject(message: DraugListC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IDraugListS2C {
	    error?: (number|null);
	    awakenLevel?: (number|null);
	    selectHeroId?: (number|null);
	    draugList?: (IDraug[]|null);
	    tempAreaDraugList?: (IDraug[]|null);
	}
}
declare module proto {
	 class DraugListS2C implements IDraugListS2C {
	    constructor(properties?: IDraugListS2C);
	    public error: number;
	    public awakenLevel: number;
	    public selectHeroId: number;
	    public draugList: IDraug[];
	    public tempAreaDraugList: IDraug[];
	    public static create(properties?: IDraugListS2C): DraugListS2C;
	    public static encode(message: IDraugListS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDraugListS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DraugListS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DraugListS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DraugListS2C;
	    public static toObject(message: DraugListS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IAwakenDraugC2S {
	    id?: (number|null);
	    type?: (number|null);
	}
}
declare module proto {
	 class AwakenDraugC2S implements IAwakenDraugC2S {
	    constructor(properties?: IAwakenDraugC2S);
	    public id: number;
	    public type: number;
	    public static create(properties?: IAwakenDraugC2S): AwakenDraugC2S;
	    public static encode(message: IAwakenDraugC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IAwakenDraugC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AwakenDraugC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AwakenDraugC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): AwakenDraugC2S;
	    public static toObject(message: AwakenDraugC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IAwakenDraugS2C {
	    error?: (number|null);
	    awakenLevel?: (number|null);
	    draugList?: (IDraug[]|null);
	}
}
declare module proto {
	 class AwakenDraugS2C implements IAwakenDraugS2C {
	    constructor(properties?: IAwakenDraugS2C);
	    public error: number;
	    public awakenLevel: number;
	    public draugList: IDraug[];
	    public static create(properties?: IAwakenDraugS2C): AwakenDraugS2C;
	    public static encode(message: IAwakenDraugS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IAwakenDraugS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AwakenDraugS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AwakenDraugS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): AwakenDraugS2C;
	    public static toObject(message: AwakenDraugS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IPutDraugIntoPackC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class PutDraugIntoPackC2S implements IPutDraugIntoPackC2S {
	    constructor(properties?: IPutDraugIntoPackC2S);
	    public id: number;
	    public static create(properties?: IPutDraugIntoPackC2S): PutDraugIntoPackC2S;
	    public static encode(message: IPutDraugIntoPackC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IPutDraugIntoPackC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PutDraugIntoPackC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PutDraugIntoPackC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): PutDraugIntoPackC2S;
	    public static toObject(message: PutDraugIntoPackC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IPutDraugIntoPackS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class PutDraugIntoPackS2C implements IPutDraugIntoPackS2C {
	    constructor(properties?: IPutDraugIntoPackS2C);
	    public error: number;
	    public static create(properties?: IPutDraugIntoPackS2C): PutDraugIntoPackS2C;
	    public static encode(message: IPutDraugIntoPackS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IPutDraugIntoPackS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PutDraugIntoPackS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PutDraugIntoPackS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): PutDraugIntoPackS2C;
	    public static toObject(message: PutDraugIntoPackS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISwallowDraugC2S {
	    id?: (number|null);
	    swallowId?: (number|null);
	    heroId?: (number|null);
	    beSwallowIdList?: (number[]|null);
	}
}
declare module proto {
	 class SwallowDraugC2S implements ISwallowDraugC2S {
	    constructor(properties?: ISwallowDraugC2S);
	    public id: number;
	    public swallowId: number;
	    public heroId: number;
	    public beSwallowIdList: number[];
	    public static create(properties?: ISwallowDraugC2S): SwallowDraugC2S;
	    public static encode(message: ISwallowDraugC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISwallowDraugC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SwallowDraugC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SwallowDraugC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SwallowDraugC2S;
	    public static toObject(message: SwallowDraugC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISwallowDraugS2C {
	    error?: (number|null);
	    draug?: (IDraug|null);
	    heroId?: (number|null);
	    beSwallowIdList?: (number[]|null);
	}
}
declare module proto {
	 class SwallowDraugS2C implements ISwallowDraugS2C {
	    constructor(properties?: ISwallowDraugS2C);
	    public error: number;
	    public draug?: (IDraug|null);
	    public heroId: number;
	    public beSwallowIdList: number[];
	    public static create(properties?: ISwallowDraugS2C): SwallowDraugS2C;
	    public static encode(message: ISwallowDraugS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISwallowDraugS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SwallowDraugS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SwallowDraugS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SwallowDraugS2C;
	    public static toObject(message: SwallowDraugS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IDecomposeDraugC2S {
	    id?: (number|null);
	    draugIdList?: (number[]|null);
	}
}
declare module proto {
	 class DecomposeDraugC2S implements IDecomposeDraugC2S {
	    constructor(properties?: IDecomposeDraugC2S);
	    public id: number;
	    public draugIdList: number[];
	    public static create(properties?: IDecomposeDraugC2S): DecomposeDraugC2S;
	    public static encode(message: IDecomposeDraugC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDecomposeDraugC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DecomposeDraugC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DecomposeDraugC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DecomposeDraugC2S;
	    public static toObject(message: DecomposeDraugC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IDecomposeDraugS2C {
	    error?: (number|null);
	    draugIdList?: (number[]|null);
	}
}
declare module proto {
	 class DecomposeDraugS2C implements IDecomposeDraugS2C {
	    constructor(properties?: IDecomposeDraugS2C);
	    public error: number;
	    public draugIdList: number[];
	    public static create(properties?: IDecomposeDraugS2C): DecomposeDraugS2C;
	    public static encode(message: IDecomposeDraugS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDecomposeDraugS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DecomposeDraugS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DecomposeDraugS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DecomposeDraugS2C;
	    public static toObject(message: DecomposeDraugS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ILockDraugC2S {
	    id?: (number|null);
	    draugId?: (number|null);
	}
}
declare module proto {
	 class LockDraugC2S implements ILockDraugC2S {
	    constructor(properties?: ILockDraugC2S);
	    public id: number;
	    public draugId: number;
	    public static create(properties?: ILockDraugC2S): LockDraugC2S;
	    public static encode(message: ILockDraugC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ILockDraugC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LockDraugC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LockDraugC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): LockDraugC2S;
	    public static toObject(message: LockDraugC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ILockDraugS2C {
	    error?: (number|null);
	    draugId?: (number|null);
	    isLock?: (boolean|null);
	}
}
declare module proto {
	 class LockDraugS2C implements ILockDraugS2C {
	    constructor(properties?: ILockDraugS2C);
	    public error: number;
	    public draugId: number;
	    public isLock: boolean;
	    public static create(properties?: ILockDraugS2C): LockDraugS2C;
	    public static encode(message: ILockDraugS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ILockDraugS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LockDraugS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LockDraugS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): LockDraugS2C;
	    public static toObject(message: LockDraugS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IWearDraugC2S {
	    id?: (number|null);
	    draugId?: (number|null);
	    heroId?: (number|null);
	}
}
declare module proto {
	 class WearDraugC2S implements IWearDraugC2S {
	    constructor(properties?: IWearDraugC2S);
	    public id: number;
	    public draugId: number;
	    public heroId: number;
	    public static create(properties?: IWearDraugC2S): WearDraugC2S;
	    public static encode(message: IWearDraugC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IWearDraugC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WearDraugC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WearDraugC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): WearDraugC2S;
	    public static toObject(message: WearDraugC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IWearDraugS2C {
	    error?: (number|null);
	    draugId?: (number|null);
	    heroId?: (number|null);
	    unwearDraug?: (IDraug|null);
	}
}
declare module proto {
	 class WearDraugS2C implements IWearDraugS2C {
	    constructor(properties?: IWearDraugS2C);
	    public error: number;
	    public draugId: number;
	    public heroId: number;
	    public unwearDraug?: (IDraug|null);
	    public static create(properties?: IWearDraugS2C): WearDraugS2C;
	    public static encode(message: IWearDraugS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IWearDraugS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WearDraugS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WearDraugS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): WearDraugS2C;
	    public static toObject(message: WearDraugS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IUnwearDraugC2S {
	    id?: (number|null);
	    heroId?: (number|null);
	    pos?: (number|null);
	}
}
declare module proto {
	 class UnwearDraugC2S implements IUnwearDraugC2S {
	    constructor(properties?: IUnwearDraugC2S);
	    public id: number;
	    public heroId: number;
	    public pos: number;
	    public static create(properties?: IUnwearDraugC2S): UnwearDraugC2S;
	    public static encode(message: IUnwearDraugC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IUnwearDraugC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UnwearDraugC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UnwearDraugC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): UnwearDraugC2S;
	    public static toObject(message: UnwearDraugC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IUnwearDraugS2C {
	    error?: (number|null);
	    heroId?: (number|null);
	    unwearDraug?: (IDraug|null);
	}
}
declare module proto {
	 class UnwearDraugS2C implements IUnwearDraugS2C {
	    constructor(properties?: IUnwearDraugS2C);
	    public error: number;
	    public heroId: number;
	    public unwearDraug?: (IDraug|null);
	    public static create(properties?: IUnwearDraugS2C): UnwearDraugS2C;
	    public static encode(message: IUnwearDraugS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IUnwearDraugS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UnwearDraugS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UnwearDraugS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): UnwearDraugS2C;
	    public static toObject(message: UnwearDraugS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IDraugSelectHeroC2S {
	    id?: (number|null);
	    selectHeroId?: (number|null);
	}
}
declare module proto {
	 class DraugSelectHeroC2S implements IDraugSelectHeroC2S {
	    constructor(properties?: IDraugSelectHeroC2S);
	    public id: number;
	    public selectHeroId: number;
	    public static create(properties?: IDraugSelectHeroC2S): DraugSelectHeroC2S;
	    public static encode(message: IDraugSelectHeroC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDraugSelectHeroC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DraugSelectHeroC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DraugSelectHeroC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DraugSelectHeroC2S;
	    public static toObject(message: DraugSelectHeroC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IDraugSelectHeroS2C {
	    error?: (number|null);
	    selectHeroId?: (number|null);
	}
}
declare module proto {
	 class DraugSelectHeroS2C implements IDraugSelectHeroS2C {
	    constructor(properties?: IDraugSelectHeroS2C);
	    public error: number;
	    public selectHeroId: number;
	    public static create(properties?: IDraugSelectHeroS2C): DraugSelectHeroS2C;
	    public static encode(message: IDraugSelectHeroS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDraugSelectHeroS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DraugSelectHeroS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DraugSelectHeroS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DraugSelectHeroS2C;
	    public static toObject(message: DraugSelectHeroS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IHeroGroupListC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class HeroGroupListC2S implements IHeroGroupListC2S {
	    constructor(properties?: IHeroGroupListC2S);
	    public id: number;
	    public static create(properties?: IHeroGroupListC2S): HeroGroupListC2S;
	    public static encode(message: IHeroGroupListC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IHeroGroupListC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeroGroupListC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeroGroupListC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): HeroGroupListC2S;
	    public static toObject(message: HeroGroupListC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IHeroGroupListS2C {
	    error?: (number|null);
	    heroGroupList?: (IHeroGroup[]|null);
	}
}
declare module proto {
	 class HeroGroupListS2C implements IHeroGroupListS2C {
	    constructor(properties?: IHeroGroupListS2C);
	    public error: number;
	    public heroGroupList: IHeroGroup[];
	    public static create(properties?: IHeroGroupListS2C): HeroGroupListS2C;
	    public static encode(message: IHeroGroupListS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IHeroGroupListS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeroGroupListS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeroGroupListS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): HeroGroupListS2C;
	    public static toObject(message: HeroGroupListS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IUnlockHeroGroupC2S {
	    id?: (number|null);
	    heroGroupId?: (number|null);
	}
}
declare module proto {
	 class UnlockHeroGroupC2S implements IUnlockHeroGroupC2S {
	    constructor(properties?: IUnlockHeroGroupC2S);
	    public id: number;
	    public heroGroupId: number;
	    public static create(properties?: IUnlockHeroGroupC2S): UnlockHeroGroupC2S;
	    public static encode(message: IUnlockHeroGroupC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IUnlockHeroGroupC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UnlockHeroGroupC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UnlockHeroGroupC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): UnlockHeroGroupC2S;
	    public static toObject(message: UnlockHeroGroupC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IUnlockHeroGroupS2C {
	    error?: (number|null);
	    heroGroup?: (IHeroGroup|null);
	}
}
declare module proto {
	 class UnlockHeroGroupS2C implements IUnlockHeroGroupS2C {
	    constructor(properties?: IUnlockHeroGroupS2C);
	    public error: number;
	    public heroGroup?: (IHeroGroup|null);
	    public static create(properties?: IUnlockHeroGroupS2C): UnlockHeroGroupS2C;
	    public static encode(message: IUnlockHeroGroupS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IUnlockHeroGroupS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UnlockHeroGroupS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UnlockHeroGroupS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): UnlockHeroGroupS2C;
	    public static toObject(message: UnlockHeroGroupS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IChangeNameHeroGroupC2S {
	    id?: (number|null);
	    heroGroupId?: (number|null);
	    name?: (string|null);
	}
}
declare module proto {
	 class ChangeNameHeroGroupC2S implements IChangeNameHeroGroupC2S {
	    constructor(properties?: IChangeNameHeroGroupC2S);
	    public id: number;
	    public heroGroupId: number;
	    public name: string;
	    public static create(properties?: IChangeNameHeroGroupC2S): ChangeNameHeroGroupC2S;
	    public static encode(message: IChangeNameHeroGroupC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IChangeNameHeroGroupC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChangeNameHeroGroupC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChangeNameHeroGroupC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): ChangeNameHeroGroupC2S;
	    public static toObject(message: ChangeNameHeroGroupC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IChangeNameHeroGroupS2C {
	    error?: (number|null);
	    heroGroupId?: (number|null);
	    name?: (string|null);
	}
}
declare module proto {
	 class ChangeNameHeroGroupS2C implements IChangeNameHeroGroupS2C {
	    constructor(properties?: IChangeNameHeroGroupS2C);
	    public error: number;
	    public heroGroupId: number;
	    public name: string;
	    public static create(properties?: IChangeNameHeroGroupS2C): ChangeNameHeroGroupS2C;
	    public static encode(message: IChangeNameHeroGroupS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IChangeNameHeroGroupS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChangeNameHeroGroupS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChangeNameHeroGroupS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): ChangeNameHeroGroupS2C;
	    public static toObject(message: ChangeNameHeroGroupS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyUnlockPosHeroGroupS2C {
	    error?: (number|null);
	    heroGroupList?: (IHeroGroup[]|null);
	}
}
declare module proto {
	 class GamerNotifyUnlockPosHeroGroupS2C implements IGamerNotifyUnlockPosHeroGroupS2C {
	    constructor(properties?: IGamerNotifyUnlockPosHeroGroupS2C);
	    public error: number;
	    public heroGroupList: IHeroGroup[];
	    public static create(properties?: IGamerNotifyUnlockPosHeroGroupS2C): GamerNotifyUnlockPosHeroGroupS2C;
	    public static encode(message: IGamerNotifyUnlockPosHeroGroupS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyUnlockPosHeroGroupS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyUnlockPosHeroGroupS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyUnlockPosHeroGroupS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyUnlockPosHeroGroupS2C;
	    public static toObject(message: GamerNotifyUnlockPosHeroGroupS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IHeroGroupChangeHeroC2S {
	    id?: (number|null);
	    heroGroupId?: (number|null);
	    pos?: (number|null);
	    heroId?: (number|null);
	}
}
declare module proto {
	 class HeroGroupChangeHeroC2S implements IHeroGroupChangeHeroC2S {
	    constructor(properties?: IHeroGroupChangeHeroC2S);
	    public id: number;
	    public heroGroupId: number;
	    public pos: number;
	    public heroId: number;
	    public static create(properties?: IHeroGroupChangeHeroC2S): HeroGroupChangeHeroC2S;
	    public static encode(message: IHeroGroupChangeHeroC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IHeroGroupChangeHeroC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeroGroupChangeHeroC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeroGroupChangeHeroC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): HeroGroupChangeHeroC2S;
	    public static toObject(message: HeroGroupChangeHeroC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IHeroGroupChangeHeroS2C {
	    error?: (number|null);
	    heroGroupId?: (number|null);
	    pos?: (number|null);
	    heroId?: (number|null);
	}
}
declare module proto {
	 class HeroGroupChangeHeroS2C implements IHeroGroupChangeHeroS2C {
	    constructor(properties?: IHeroGroupChangeHeroS2C);
	    public error: number;
	    public heroGroupId: number;
	    public pos: number;
	    public heroId: number;
	    public static create(properties?: IHeroGroupChangeHeroS2C): HeroGroupChangeHeroS2C;
	    public static encode(message: IHeroGroupChangeHeroS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IHeroGroupChangeHeroS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeroGroupChangeHeroS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeroGroupChangeHeroS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): HeroGroupChangeHeroS2C;
	    public static toObject(message: HeroGroupChangeHeroS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IHeroGroupChangeSkillC2S {
	    id?: (number|null);
	    heroGroupId?: (number|null);
	    pos?: (number|null);
	    skillId?: (number|null);
	}
}
declare module proto {
	 class HeroGroupChangeSkillC2S implements IHeroGroupChangeSkillC2S {
	    constructor(properties?: IHeroGroupChangeSkillC2S);
	    public id: number;
	    public heroGroupId: number;
	    public pos: number;
	    public skillId: number;
	    public static create(properties?: IHeroGroupChangeSkillC2S): HeroGroupChangeSkillC2S;
	    public static encode(message: IHeroGroupChangeSkillC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IHeroGroupChangeSkillC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeroGroupChangeSkillC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeroGroupChangeSkillC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): HeroGroupChangeSkillC2S;
	    public static toObject(message: HeroGroupChangeSkillC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IHeroGroupChangeSkillS2C {
	    error?: (number|null);
	    heroGroupId?: (number|null);
	    pos?: (number|null);
	    skillId?: (number|null);
	}
}
declare module proto {
	 class HeroGroupChangeSkillS2C implements IHeroGroupChangeSkillS2C {
	    constructor(properties?: IHeroGroupChangeSkillS2C);
	    public error: number;
	    public heroGroupId: number;
	    public pos: number;
	    public skillId: number;
	    public static create(properties?: IHeroGroupChangeSkillS2C): HeroGroupChangeSkillS2C;
	    public static encode(message: IHeroGroupChangeSkillS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IHeroGroupChangeSkillS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeroGroupChangeSkillS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeroGroupChangeSkillS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): HeroGroupChangeSkillS2C;
	    public static toObject(message: HeroGroupChangeSkillS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IBuyFatigueC2S {
	    id?: (number|null);
	    goodId?: (number|null);
	}
}
declare module proto {
	 class BuyFatigueC2S implements IBuyFatigueC2S {
	    constructor(properties?: IBuyFatigueC2S);
	    public id: number;
	    public goodId: number;
	    public static create(properties?: IBuyFatigueC2S): BuyFatigueC2S;
	    public static encode(message: IBuyFatigueC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IBuyFatigueC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BuyFatigueC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BuyFatigueC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): BuyFatigueC2S;
	    public static toObject(message: BuyFatigueC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IBuyFatigueS2C {
	    error?: (number|null);
	    goodId?: (number|null);
	}
}
declare module proto {
	 class BuyFatigueS2C implements IBuyFatigueS2C {
	    constructor(properties?: IBuyFatigueS2C);
	    public error: number;
	    public goodId: number;
	    public static create(properties?: IBuyFatigueS2C): BuyFatigueS2C;
	    public static encode(message: IBuyFatigueS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IBuyFatigueS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BuyFatigueS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BuyFatigueS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): BuyFatigueS2C;
	    public static toObject(message: BuyFatigueS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetFatigueWelfareC2S {
	    id?: (number|null);
	    welfareId?: (number|null);
	}
}
declare module proto {
	 class GetFatigueWelfareC2S implements IGetFatigueWelfareC2S {
	    constructor(properties?: IGetFatigueWelfareC2S);
	    public id: number;
	    public welfareId: number;
	    public static create(properties?: IGetFatigueWelfareC2S): GetFatigueWelfareC2S;
	    public static encode(message: IGetFatigueWelfareC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetFatigueWelfareC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetFatigueWelfareC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetFatigueWelfareC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetFatigueWelfareC2S;
	    public static toObject(message: GetFatigueWelfareC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetFatigueWelfareS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GetFatigueWelfareS2C implements IGetFatigueWelfareS2C {
	    constructor(properties?: IGetFatigueWelfareS2C);
	    public error: number;
	    public static create(properties?: IGetFatigueWelfareS2C): GetFatigueWelfareS2C;
	    public static encode(message: IGetFatigueWelfareS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetFatigueWelfareS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetFatigueWelfareS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetFatigueWelfareS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetFatigueWelfareS2C;
	    public static toObject(message: GetFatigueWelfareS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyFatigueS2C {
	    error?: (number|null);
	    fatigueInfo?: (IFatigueInfo|null);
	}
}
declare module proto {
	 class GamerNotifyFatigueS2C implements IGamerNotifyFatigueS2C {
	    constructor(properties?: IGamerNotifyFatigueS2C);
	    public error: number;
	    public fatigueInfo?: (IFatigueInfo|null);
	    public static create(properties?: IGamerNotifyFatigueS2C): GamerNotifyFatigueS2C;
	    public static encode(message: IGamerNotifyFatigueS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyFatigueS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyFatigueS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyFatigueS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyFatigueS2C;
	    public static toObject(message: GamerNotifyFatigueS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IUpStarEquipC2S {
	    id?: (number|null);
	    heroId?: (number|null);
	    equipUid?: (number|null);
	    type?: (number|null);
	    eatUidList?: (number[]|null);
	}
}
declare module proto {
	 class UpStarEquipC2S implements IUpStarEquipC2S {
	    constructor(properties?: IUpStarEquipC2S);
	    public id: number;
	    public heroId: number;
	    public equipUid: number;
	    public type: number;
	    public eatUidList: number[];
	    public static create(properties?: IUpStarEquipC2S): UpStarEquipC2S;
	    public static encode(message: IUpStarEquipC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IUpStarEquipC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpStarEquipC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpStarEquipC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): UpStarEquipC2S;
	    public static toObject(message: UpStarEquipC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IUpStarEquipS2C {
	    error?: (number|null);
	    equip?: (IGameItem|null);
	}
}
declare module proto {
	 class UpStarEquipS2C implements IUpStarEquipS2C {
	    constructor(properties?: IUpStarEquipS2C);
	    public error: number;
	    public equip?: (IGameItem|null);
	    public static create(properties?: IUpStarEquipS2C): UpStarEquipS2C;
	    public static encode(message: IUpStarEquipS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IUpStarEquipS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpStarEquipS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpStarEquipS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): UpStarEquipS2C;
	    public static toObject(message: UpStarEquipS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IEatEquipsC2S {
	    id?: (number|null);
	    heroId?: (number|null);
	    equipUid?: (number|null);
	    eatUidList?: (number[]|null);
	}
}
declare module proto {
	 class EatEquipsC2S implements IEatEquipsC2S {
	    constructor(properties?: IEatEquipsC2S);
	    public id: number;
	    public heroId: number;
	    public equipUid: number;
	    public eatUidList: number[];
	    public static create(properties?: IEatEquipsC2S): EatEquipsC2S;
	    public static encode(message: IEatEquipsC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IEatEquipsC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EatEquipsC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EatEquipsC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): EatEquipsC2S;
	    public static toObject(message: EatEquipsC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IEatEquipsS2C {
	    error?: (number|null);
	    equip?: (IGameItem|null);
	}
}
declare module proto {
	 class EatEquipsS2C implements IEatEquipsS2C {
	    constructor(properties?: IEatEquipsS2C);
	    public error: number;
	    public equip?: (IGameItem|null);
	    public static create(properties?: IEatEquipsS2C): EatEquipsS2C;
	    public static encode(message: IEatEquipsS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IEatEquipsS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EatEquipsS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EatEquipsS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): EatEquipsS2C;
	    public static toObject(message: EatEquipsS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IDesEquipC2S {
	    id?: (number|null);
	    equipUid?: (number|null);
	}
}
declare module proto {
	 class DesEquipC2S implements IDesEquipC2S {
	    constructor(properties?: IDesEquipC2S);
	    public id: number;
	    public equipUid: number;
	    public static create(properties?: IDesEquipC2S): DesEquipC2S;
	    public static encode(message: IDesEquipC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDesEquipC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DesEquipC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DesEquipC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DesEquipC2S;
	    public static toObject(message: DesEquipC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IDesEquipS2C {
	    error?: (number|null);
	    equipUid?: (number|null);
	}
}
declare module proto {
	 class DesEquipS2C implements IDesEquipS2C {
	    constructor(properties?: IDesEquipS2C);
	    public error: number;
	    public equipUid: number;
	    public static create(properties?: IDesEquipS2C): DesEquipS2C;
	    public static encode(message: IDesEquipS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDesEquipS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DesEquipS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DesEquipS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DesEquipS2C;
	    public static toObject(message: DesEquipS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ITakeOnEquipC2S {
	    id?: (number|null);
	    heroIdOn?: (number|null);
	    heroIdOff?: (number|null);
	    equipUid?: (number|null);
	}
}
declare module proto {
	 class TakeOnEquipC2S implements ITakeOnEquipC2S {
	    constructor(properties?: ITakeOnEquipC2S);
	    public id: number;
	    public heroIdOn: number;
	    public heroIdOff: number;
	    public equipUid: number;
	    public static create(properties?: ITakeOnEquipC2S): TakeOnEquipC2S;
	    public static encode(message: ITakeOnEquipC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ITakeOnEquipC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TakeOnEquipC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TakeOnEquipC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): TakeOnEquipC2S;
	    public static toObject(message: TakeOnEquipC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ITakeOnEquipS2C {
	    error?: (number|null);
	    heroIdOn?: (IGamerHero|null);
	    heroIdOff?: (IGamerHero|null);
	    equip?: (IGameItem|null);
	}
}
declare module proto {
	 class TakeOnEquipS2C implements ITakeOnEquipS2C {
	    constructor(properties?: ITakeOnEquipS2C);
	    public error: number;
	    public heroIdOn?: (IGamerHero|null);
	    public heroIdOff?: (IGamerHero|null);
	    public equip?: (IGameItem|null);
	    public static create(properties?: ITakeOnEquipS2C): TakeOnEquipS2C;
	    public static encode(message: ITakeOnEquipS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ITakeOnEquipS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TakeOnEquipS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TakeOnEquipS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): TakeOnEquipS2C;
	    public static toObject(message: TakeOnEquipS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ITakeOffEquipC2S {
	    id?: (number|null);
	    heroIdOff?: (number|null);
	    equipUid?: (number|null);
	}
}
declare module proto {
	 class TakeOffEquipC2S implements ITakeOffEquipC2S {
	    constructor(properties?: ITakeOffEquipC2S);
	    public id: number;
	    public heroIdOff: number;
	    public equipUid: number;
	    public static create(properties?: ITakeOffEquipC2S): TakeOffEquipC2S;
	    public static encode(message: ITakeOffEquipC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ITakeOffEquipC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TakeOffEquipC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TakeOffEquipC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): TakeOffEquipC2S;
	    public static toObject(message: TakeOffEquipC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ITakeOffEquipS2C {
	    error?: (number|null);
	    heroIdOff?: (IGamerHero|null);
	    equip?: (IGameItem|null);
	}
}
declare module proto {
	 class TakeOffEquipS2C implements ITakeOffEquipS2C {
	    constructor(properties?: ITakeOffEquipS2C);
	    public error: number;
	    public heroIdOff?: (IGamerHero|null);
	    public equip?: (IGameItem|null);
	    public static create(properties?: ITakeOffEquipS2C): TakeOffEquipS2C;
	    public static encode(message: ITakeOffEquipS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ITakeOffEquipS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TakeOffEquipS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TakeOffEquipS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): TakeOffEquipS2C;
	    public static toObject(message: TakeOffEquipS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IRedSpotC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class RedSpotC2S implements IRedSpotC2S {
	    constructor(properties?: IRedSpotC2S);
	    public id: number;
	    public static create(properties?: IRedSpotC2S): RedSpotC2S;
	    public static encode(message: IRedSpotC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IRedSpotC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedSpotC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedSpotC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): RedSpotC2S;
	    public static toObject(message: RedSpotC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IRedSpotS2C {
	    error?: (number|null);
	    redSpot?: (IRedSpot|null);
	}
}
declare module proto {
	 class RedSpotS2C implements IRedSpotS2C {
	    constructor(properties?: IRedSpotS2C);
	    public error: number;
	    public redSpot?: (IRedSpot|null);
	    public static create(properties?: IRedSpotS2C): RedSpotS2C;
	    public static encode(message: IRedSpotS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IRedSpotS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedSpotS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedSpotS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): RedSpotS2C;
	    public static toObject(message: RedSpotS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IMakeTeamC2S {
	    id?: (number|null);
	    aim?: (number|null);
	    heroId?: (number|null);
	    hero?: (IGamerHero|null);
	    secretLand?: (IGamerSecretLand|null);
	}
}
declare module proto {
	 class MakeTeamC2S implements IMakeTeamC2S {
	    constructor(properties?: IMakeTeamC2S);
	    public id: number;
	    public aim: number;
	    public heroId: number;
	    public hero?: (IGamerHero|null);
	    public secretLand?: (IGamerSecretLand|null);
	    public static create(properties?: IMakeTeamC2S): MakeTeamC2S;
	    public static encode(message: IMakeTeamC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IMakeTeamC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MakeTeamC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MakeTeamC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): MakeTeamC2S;
	    public static toObject(message: MakeTeamC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IMakeTeamS2C {
	    error?: (number|null);
	    team?: (ITeam|null);
	}
}
declare module proto {
	 class MakeTeamS2C implements IMakeTeamS2C {
	    constructor(properties?: IMakeTeamS2C);
	    public error: number;
	    public team?: (ITeam|null);
	    public static create(properties?: IMakeTeamS2C): MakeTeamS2C;
	    public static encode(message: IMakeTeamS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IMakeTeamS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MakeTeamS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MakeTeamS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): MakeTeamS2C;
	    public static toObject(message: MakeTeamS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISetTeamAimC2S {
	    id?: (number|null);
	    aim?: (number|null);
	}
}
declare module proto {
	 class SetTeamAimC2S implements ISetTeamAimC2S {
	    constructor(properties?: ISetTeamAimC2S);
	    public id: number;
	    public aim: number;
	    public static create(properties?: ISetTeamAimC2S): SetTeamAimC2S;
	    public static encode(message: ISetTeamAimC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISetTeamAimC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetTeamAimC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetTeamAimC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SetTeamAimC2S;
	    public static toObject(message: SetTeamAimC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISetTeamAimS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class SetTeamAimS2C implements ISetTeamAimS2C {
	    constructor(properties?: ISetTeamAimS2C);
	    public error: number;
	    public static create(properties?: ISetTeamAimS2C): SetTeamAimS2C;
	    public static encode(message: ISetTeamAimS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISetTeamAimS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetTeamAimS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetTeamAimS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SetTeamAimS2C;
	    public static toObject(message: SetTeamAimS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IJoinTeamC2S {
	    id?: (number|null);
	    teamId?: (number|null);
	    heroId?: (number|null);
	    hero?: (IGamerHero|null);
	    secretLand?: (IGamerSecretLand|null);
	}
}
declare module proto {
	 class JoinTeamC2S implements IJoinTeamC2S {
	    constructor(properties?: IJoinTeamC2S);
	    public id: number;
	    public teamId: number;
	    public heroId: number;
	    public hero?: (IGamerHero|null);
	    public secretLand?: (IGamerSecretLand|null);
	    public static create(properties?: IJoinTeamC2S): JoinTeamC2S;
	    public static encode(message: IJoinTeamC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IJoinTeamC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): JoinTeamC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): JoinTeamC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): JoinTeamC2S;
	    public static toObject(message: JoinTeamC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IJoinTeamS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class JoinTeamS2C implements IJoinTeamS2C {
	    constructor(properties?: IJoinTeamS2C);
	    public error: number;
	    public static create(properties?: IJoinTeamS2C): JoinTeamS2C;
	    public static encode(message: IJoinTeamS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IJoinTeamS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): JoinTeamS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): JoinTeamS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): JoinTeamS2C;
	    public static toObject(message: JoinTeamS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IExitTeamC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class ExitTeamC2S implements IExitTeamC2S {
	    constructor(properties?: IExitTeamC2S);
	    public id: number;
	    public static create(properties?: IExitTeamC2S): ExitTeamC2S;
	    public static encode(message: IExitTeamC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IExitTeamC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExitTeamC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ExitTeamC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): ExitTeamC2S;
	    public static toObject(message: ExitTeamC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IExitTeamS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class ExitTeamS2C implements IExitTeamS2C {
	    constructor(properties?: IExitTeamS2C);
	    public error: number;
	    public static create(properties?: IExitTeamS2C): ExitTeamS2C;
	    public static encode(message: IExitTeamS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IExitTeamS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExitTeamS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ExitTeamS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): ExitTeamS2C;
	    public static toObject(message: ExitTeamS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ITurnOverTeamLeaderC2S {
	    id?: (number|null);
	    newLeaderId?: (number|null);
	}
}
declare module proto {
	 class TurnOverTeamLeaderC2S implements ITurnOverTeamLeaderC2S {
	    constructor(properties?: ITurnOverTeamLeaderC2S);
	    public id: number;
	    public newLeaderId: number;
	    public static create(properties?: ITurnOverTeamLeaderC2S): TurnOverTeamLeaderC2S;
	    public static encode(message: ITurnOverTeamLeaderC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ITurnOverTeamLeaderC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TurnOverTeamLeaderC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TurnOverTeamLeaderC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): TurnOverTeamLeaderC2S;
	    public static toObject(message: TurnOverTeamLeaderC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ITurnOverTeamLeaderS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class TurnOverTeamLeaderS2C implements ITurnOverTeamLeaderS2C {
	    constructor(properties?: ITurnOverTeamLeaderS2C);
	    public error: number;
	    public static create(properties?: ITurnOverTeamLeaderS2C): TurnOverTeamLeaderS2C;
	    public static encode(message: ITurnOverTeamLeaderS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ITurnOverTeamLeaderS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TurnOverTeamLeaderS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TurnOverTeamLeaderS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): TurnOverTeamLeaderS2C;
	    public static toObject(message: TurnOverTeamLeaderS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IInviteTeamC2S {
	    id?: (number|null);
	    gid?: (number|null);
	}
}
declare module proto {
	 class InviteTeamC2S implements IInviteTeamC2S {
	    constructor(properties?: IInviteTeamC2S);
	    public id: number;
	    public gid: number;
	    public static create(properties?: IInviteTeamC2S): InviteTeamC2S;
	    public static encode(message: IInviteTeamC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IInviteTeamC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InviteTeamC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InviteTeamC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): InviteTeamC2S;
	    public static toObject(message: InviteTeamC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IInviteTeamS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class InviteTeamS2C implements IInviteTeamS2C {
	    constructor(properties?: IInviteTeamS2C);
	    public error: number;
	    public static create(properties?: IInviteTeamS2C): InviteTeamS2C;
	    public static encode(message: IInviteTeamS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IInviteTeamS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InviteTeamS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InviteTeamS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): InviteTeamS2C;
	    public static toObject(message: InviteTeamS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IRejectTeamC2S {
	    id?: (number|null);
	    teamId?: (number|null);
	    gid?: (number|null);
	    type?: (InviteType|null);
	}
}
declare module proto {
	 class RejectTeamC2S implements IRejectTeamC2S {
	    constructor(properties?: IRejectTeamC2S);
	    public id: number;
	    public teamId: number;
	    public gid: number;
	    public type: InviteType;
	    public static create(properties?: IRejectTeamC2S): RejectTeamC2S;
	    public static encode(message: IRejectTeamC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IRejectTeamC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RejectTeamC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RejectTeamC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): RejectTeamC2S;
	    public static toObject(message: RejectTeamC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IRejectTeamS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class RejectTeamS2C implements IRejectTeamS2C {
	    constructor(properties?: IRejectTeamS2C);
	    public error: number;
	    public static create(properties?: IRejectTeamS2C): RejectTeamS2C;
	    public static encode(message: IRejectTeamS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IRejectTeamS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RejectTeamS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RejectTeamS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): RejectTeamS2C;
	    public static toObject(message: RejectTeamS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyTeamS2C {
	    error?: (number|null);
	    team?: (ITeam|null);
	}
}
declare module proto {
	 class GamerNotifyTeamS2C implements IGamerNotifyTeamS2C {
	    constructor(properties?: IGamerNotifyTeamS2C);
	    public error: number;
	    public team?: (ITeam|null);
	    public static create(properties?: IGamerNotifyTeamS2C): GamerNotifyTeamS2C;
	    public static encode(message: IGamerNotifyTeamS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyTeamS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyTeamS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyTeamS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyTeamS2C;
	    public static toObject(message: GamerNotifyTeamS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyTeamInfoS2C {
	    error?: (number|null);
	    teamId?: (number|null);
	    aim?: (number|null);
	    type?: (InviteType|null);
	    value?: (number|null);
	    timeStamp?: (number|any|null);
	}
}
declare module proto {
	 class GamerNotifyTeamInfoS2C implements IGamerNotifyTeamInfoS2C {
	    constructor(properties?: IGamerNotifyTeamInfoS2C);
	    public error: number;
	    public teamId: number;
	    public aim: number;
	    public type: InviteType;
	    public value: number;
	    public timeStamp: (number|any);
	    public static create(properties?: IGamerNotifyTeamInfoS2C): GamerNotifyTeamInfoS2C;
	    public static encode(message: IGamerNotifyTeamInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyTeamInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyTeamInfoS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyTeamInfoS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyTeamInfoS2C;
	    public static toObject(message: GamerNotifyTeamInfoS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyTeamChangeS2C {
	    error?: (number|null);
	    type?: (number|null);
	    value?: (number|null);
	    timeStamp?: (number|any|null);
	}
}
declare module proto {
	 class GamerNotifyTeamChangeS2C implements IGamerNotifyTeamChangeS2C {
	    constructor(properties?: IGamerNotifyTeamChangeS2C);
	    public error: number;
	    public type: number;
	    public value: number;
	    public timeStamp: (number|any);
	    public static create(properties?: IGamerNotifyTeamChangeS2C): GamerNotifyTeamChangeS2C;
	    public static encode(message: IGamerNotifyTeamChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyTeamChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyTeamChangeS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyTeamChangeS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyTeamChangeS2C;
	    public static toObject(message: GamerNotifyTeamChangeS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyTeamMemberChangeS2C {
	    error?: (number|null);
	    teamer?: (ITeamer|null);
	}
}
declare module proto {
	 class GamerNotifyTeamMemberChangeS2C implements IGamerNotifyTeamMemberChangeS2C {
	    constructor(properties?: IGamerNotifyTeamMemberChangeS2C);
	    public error: number;
	    public teamer?: (ITeamer|null);
	    public static create(properties?: IGamerNotifyTeamMemberChangeS2C): GamerNotifyTeamMemberChangeS2C;
	    public static encode(message: IGamerNotifyTeamMemberChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyTeamMemberChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyTeamMemberChangeS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyTeamMemberChangeS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyTeamMemberChangeS2C;
	    public static toObject(message: GamerNotifyTeamMemberChangeS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyLeaveTeamS2C {
	    error?: (number|null);
	    memberId?: (number|null);
	    newOwnerId?: (number|null);
	}
}
declare module proto {
	 class GamerNotifyLeaveTeamS2C implements IGamerNotifyLeaveTeamS2C {
	    constructor(properties?: IGamerNotifyLeaveTeamS2C);
	    public error: number;
	    public memberId: number;
	    public newOwnerId: number;
	    public static create(properties?: IGamerNotifyLeaveTeamS2C): GamerNotifyLeaveTeamS2C;
	    public static encode(message: IGamerNotifyLeaveTeamS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyLeaveTeamS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyLeaveTeamS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyLeaveTeamS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyLeaveTeamS2C;
	    public static toObject(message: GamerNotifyLeaveTeamS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IKickTeamC2S {
	    id?: (number|null);
	    gid?: (number|null);
	}
}
declare module proto {
	 class KickTeamC2S implements IKickTeamC2S {
	    constructor(properties?: IKickTeamC2S);
	    public id: number;
	    public gid: number;
	    public static create(properties?: IKickTeamC2S): KickTeamC2S;
	    public static encode(message: IKickTeamC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IKickTeamC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): KickTeamC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): KickTeamC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): KickTeamC2S;
	    public static toObject(message: KickTeamC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IKickTeamS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class KickTeamS2C implements IKickTeamS2C {
	    constructor(properties?: IKickTeamS2C);
	    public error: number;
	    public static create(properties?: IKickTeamS2C): KickTeamS2C;
	    public static encode(message: IKickTeamS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IKickTeamS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): KickTeamS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): KickTeamS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): KickTeamS2C;
	    public static toObject(message: KickTeamS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISetTeamHelpC2S {
	    id?: (number|null);
	    isHelper?: (boolean|null);
	}
}
declare module proto {
	 class SetTeamHelpC2S implements ISetTeamHelpC2S {
	    constructor(properties?: ISetTeamHelpC2S);
	    public id: number;
	    public isHelper: boolean;
	    public static create(properties?: ISetTeamHelpC2S): SetTeamHelpC2S;
	    public static encode(message: ISetTeamHelpC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISetTeamHelpC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetTeamHelpC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetTeamHelpC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SetTeamHelpC2S;
	    public static toObject(message: SetTeamHelpC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISetTeamHelpS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class SetTeamHelpS2C implements ISetTeamHelpS2C {
	    constructor(properties?: ISetTeamHelpS2C);
	    public error: number;
	    public static create(properties?: ISetTeamHelpS2C): SetTeamHelpS2C;
	    public static encode(message: ISetTeamHelpS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISetTeamHelpS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetTeamHelpS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetTeamHelpS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SetTeamHelpS2C;
	    public static toObject(message: SetTeamHelpS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISetTeamHeroC2S {
	    id?: (number|null);
	    heroId?: (number|null);
	    skillId?: (number|null);
	    hero?: (IGamerHero|null);
	}
}
declare module proto {
	 class SetTeamHeroC2S implements ISetTeamHeroC2S {
	    constructor(properties?: ISetTeamHeroC2S);
	    public id: number;
	    public heroId: number;
	    public skillId: number;
	    public hero?: (IGamerHero|null);
	    public static create(properties?: ISetTeamHeroC2S): SetTeamHeroC2S;
	    public static encode(message: ISetTeamHeroC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISetTeamHeroC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetTeamHeroC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetTeamHeroC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SetTeamHeroC2S;
	    public static toObject(message: SetTeamHeroC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISetTeamHeroS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class SetTeamHeroS2C implements ISetTeamHeroS2C {
	    constructor(properties?: ISetTeamHeroS2C);
	    public error: number;
	    public static create(properties?: ISetTeamHeroS2C): SetTeamHeroS2C;
	    public static encode(message: ISetTeamHeroS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISetTeamHeroS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetTeamHeroS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetTeamHeroS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SetTeamHeroS2C;
	    public static toObject(message: SetTeamHeroS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISwitchTeamReadyC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class SwitchTeamReadyC2S implements ISwitchTeamReadyC2S {
	    constructor(properties?: ISwitchTeamReadyC2S);
	    public id: number;
	    public static create(properties?: ISwitchTeamReadyC2S): SwitchTeamReadyC2S;
	    public static encode(message: ISwitchTeamReadyC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISwitchTeamReadyC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SwitchTeamReadyC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SwitchTeamReadyC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SwitchTeamReadyC2S;
	    public static toObject(message: SwitchTeamReadyC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISwitchTeamReadyS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class SwitchTeamReadyS2C implements ISwitchTeamReadyS2C {
	    constructor(properties?: ISwitchTeamReadyS2C);
	    public error: number;
	    public static create(properties?: ISwitchTeamReadyS2C): SwitchTeamReadyS2C;
	    public static encode(message: ISwitchTeamReadyS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISwitchTeamReadyS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SwitchTeamReadyS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SwitchTeamReadyS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SwitchTeamReadyS2C;
	    public static toObject(message: SwitchTeamReadyS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyTeamReadyS2C {
	    error?: (number|null);
	    memberId?: (number|null);
	    isReady?: (boolean|null);
	}
}
declare module proto {
	 class GamerNotifyTeamReadyS2C implements IGamerNotifyTeamReadyS2C {
	    constructor(properties?: IGamerNotifyTeamReadyS2C);
	    public error: number;
	    public memberId: number;
	    public isReady: boolean;
	    public static create(properties?: IGamerNotifyTeamReadyS2C): GamerNotifyTeamReadyS2C;
	    public static encode(message: IGamerNotifyTeamReadyS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyTeamReadyS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyTeamReadyS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyTeamReadyS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyTeamReadyS2C;
	    public static toObject(message: GamerNotifyTeamReadyS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ITeamBattleC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class TeamBattleC2S implements ITeamBattleC2S {
	    constructor(properties?: ITeamBattleC2S);
	    public id: number;
	    public static create(properties?: ITeamBattleC2S): TeamBattleC2S;
	    public static encode(message: ITeamBattleC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ITeamBattleC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TeamBattleC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TeamBattleC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): TeamBattleC2S;
	    public static toObject(message: TeamBattleC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ITeamBattleS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class TeamBattleS2C implements ITeamBattleS2C {
	    constructor(properties?: ITeamBattleS2C);
	    public error: number;
	    public static create(properties?: ITeamBattleS2C): TeamBattleS2C;
	    public static encode(message: ITeamBattleS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ITeamBattleS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TeamBattleS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TeamBattleS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): TeamBattleS2C;
	    public static toObject(message: TeamBattleS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetDanInfoC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class GetDanInfoC2S implements IGetDanInfoC2S {
	    constructor(properties?: IGetDanInfoC2S);
	    public id: number;
	    public static create(properties?: IGetDanInfoC2S): GetDanInfoC2S;
	    public static encode(message: IGetDanInfoC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetDanInfoC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetDanInfoC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetDanInfoC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetDanInfoC2S;
	    public static toObject(message: GetDanInfoC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetDanInfoS2C {
	    error?: (number|null);
	    gamerDan?: (IGamerDan|null);
	}
}
declare module proto {
	 class GetDanInfoS2C implements IGetDanInfoS2C {
	    constructor(properties?: IGetDanInfoS2C);
	    public error: number;
	    public gamerDan?: (IGamerDan|null);
	    public static create(properties?: IGetDanInfoS2C): GetDanInfoS2C;
	    public static encode(message: IGetDanInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetDanInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetDanInfoS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetDanInfoS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetDanInfoS2C;
	    public static toObject(message: GetDanInfoS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyDanInfoS2C {
	    error?: (number|null);
	    gamerDan?: (IGamerDan|null);
	}
}
declare module proto {
	 class GamerNotifyDanInfoS2C implements IGamerNotifyDanInfoS2C {
	    constructor(properties?: IGamerNotifyDanInfoS2C);
	    public error: number;
	    public gamerDan?: (IGamerDan|null);
	    public static create(properties?: IGamerNotifyDanInfoS2C): GamerNotifyDanInfoS2C;
	    public static encode(message: IGamerNotifyDanInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyDanInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyDanInfoS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyDanInfoS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyDanInfoS2C;
	    public static toObject(message: GamerNotifyDanInfoS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyNewSeasonS2C {
	    error?: (number|null);
	    newSeasonId?: (number|null);
	}
}
declare module proto {
	 class GamerNotifyNewSeasonS2C implements IGamerNotifyNewSeasonS2C {
	    constructor(properties?: IGamerNotifyNewSeasonS2C);
	    public error: number;
	    public newSeasonId: number;
	    public static create(properties?: IGamerNotifyNewSeasonS2C): GamerNotifyNewSeasonS2C;
	    public static encode(message: IGamerNotifyNewSeasonS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyNewSeasonS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyNewSeasonS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyNewSeasonS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyNewSeasonS2C;
	    public static toObject(message: GamerNotifyNewSeasonS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetDuelRankC2S {
	    id?: (number|null);
	    type?: (RankType|null);
	    seasonId?: (number|null);
	    start?: (number|null);
	    length?: (number|null);
	}
}
declare module proto {
	 class GetDuelRankC2S implements IGetDuelRankC2S {
	    constructor(properties?: IGetDuelRankC2S);
	    public id: number;
	    public type: RankType;
	    public seasonId: number;
	    public start: number;
	    public length: number;
	    public static create(properties?: IGetDuelRankC2S): GetDuelRankC2S;
	    public static encode(message: IGetDuelRankC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetDuelRankC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetDuelRankC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetDuelRankC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetDuelRankC2S;
	    public static toObject(message: GetDuelRankC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetDuelRankS2C {
	    error?: (number|null);
	    type?: (RankType|null);
	    seasonId?: (number|null);
	    ranks?: (IRankLength[]|null);
	}
}
declare module proto {
	 class GetDuelRankS2C implements IGetDuelRankS2C {
	    constructor(properties?: IGetDuelRankS2C);
	    public error: number;
	    public type: RankType;
	    public seasonId: number;
	    public ranks: IRankLength[];
	    public static create(properties?: IGetDuelRankS2C): GetDuelRankS2C;
	    public static encode(message: IGetDuelRankS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetDuelRankS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetDuelRankS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetDuelRankS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetDuelRankS2C;
	    public static toObject(message: GetDuelRankS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISysListC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class SysListC2S implements ISysListC2S {
	    constructor(properties?: ISysListC2S);
	    public id: number;
	    public static create(properties?: ISysListC2S): SysListC2S;
	    public static encode(message: ISysListC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISysListC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SysListC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SysListC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SysListC2S;
	    public static toObject(message: SysListC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISysListS2C {
	    error?: (number|null);
	    openedSys?: (number[]|null);
	    readySys?: (number[]|null);
	}
}
declare module proto {
	 class SysListS2C implements ISysListS2C {
	    constructor(properties?: ISysListS2C);
	    public error: number;
	    public openedSys: number[];
	    public readySys: number[];
	    public static create(properties?: ISysListS2C): SysListS2C;
	    public static encode(message: ISysListS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISysListS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SysListS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SysListS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SysListS2C;
	    public static toObject(message: SysListS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISysOpenShowC2S {
	    id?: (number|null);
	    sysid?: (number|null);
	}
}
declare module proto {
	 class SysOpenShowC2S implements ISysOpenShowC2S {
	    constructor(properties?: ISysOpenShowC2S);
	    public id: number;
	    public sysid: number;
	    public static create(properties?: ISysOpenShowC2S): SysOpenShowC2S;
	    public static encode(message: ISysOpenShowC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISysOpenShowC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SysOpenShowC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SysOpenShowC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SysOpenShowC2S;
	    public static toObject(message: SysOpenShowC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISysOpenShowS2C {
	    error?: (number|null);
	    sysid?: (number|null);
	}
}
declare module proto {
	 class SysOpenShowS2C implements ISysOpenShowS2C {
	    constructor(properties?: ISysOpenShowS2C);
	    public error: number;
	    public sysid: number;
	    public static create(properties?: ISysOpenShowS2C): SysOpenShowS2C;
	    public static encode(message: ISysOpenShowS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISysOpenShowS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SysOpenShowS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SysOpenShowS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SysOpenShowS2C;
	    public static toObject(message: SysOpenShowS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetQuestsC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class GetQuestsC2S implements IGetQuestsC2S {
	    constructor(properties?: IGetQuestsC2S);
	    public id: number;
	    public static create(properties?: IGetQuestsC2S): GetQuestsC2S;
	    public static encode(message: IGetQuestsC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetQuestsC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetQuestsC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetQuestsC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetQuestsC2S;
	    public static toObject(message: GetQuestsC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetQuestsS2C {
	    error?: (number|null);
	    questList?: (IGamerQuest[]|null);
	    active?: (IDailyActive|null);
	}
}
declare module proto {
	 class GetQuestsS2C implements IGetQuestsS2C {
	    constructor(properties?: IGetQuestsS2C);
	    public error: number;
	    public questList: IGamerQuest[];
	    public active?: (IDailyActive|null);
	    public static create(properties?: IGetQuestsS2C): GetQuestsS2C;
	    public static encode(message: IGetQuestsS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetQuestsS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetQuestsS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetQuestsS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetQuestsS2C;
	    public static toObject(message: GetQuestsS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyQuestsS2C {
	    error?: (number|null);
	    questList?: (IGamerQuest[]|null);
	    active?: (IDailyActive|null);
	}
}
declare module proto {
	 class GamerNotifyQuestsS2C implements IGamerNotifyQuestsS2C {
	    constructor(properties?: IGamerNotifyQuestsS2C);
	    public error: number;
	    public questList: IGamerQuest[];
	    public active?: (IDailyActive|null);
	    public static create(properties?: IGamerNotifyQuestsS2C): GamerNotifyQuestsS2C;
	    public static encode(message: IGamerNotifyQuestsS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyQuestsS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyQuestsS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyQuestsS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyQuestsS2C;
	    public static toObject(message: GamerNotifyQuestsS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetQuestRewardC2S {
	    id?: (number|null);
	    questId?: (number|null);
	}
}
declare module proto {
	 class GetQuestRewardC2S implements IGetQuestRewardC2S {
	    constructor(properties?: IGetQuestRewardC2S);
	    public id: number;
	    public questId: number;
	    public static create(properties?: IGetQuestRewardC2S): GetQuestRewardC2S;
	    public static encode(message: IGetQuestRewardC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetQuestRewardC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetQuestRewardC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetQuestRewardC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetQuestRewardC2S;
	    public static toObject(message: GetQuestRewardC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetQuestRewardS2C {
	    error?: (number|null);
	    itemList?: (IGameItem[]|null);
	}
}
declare module proto {
	 class GetQuestRewardS2C implements IGetQuestRewardS2C {
	    constructor(properties?: IGetQuestRewardS2C);
	    public error: number;
	    public itemList: IGameItem[];
	    public static create(properties?: IGetQuestRewardS2C): GetQuestRewardS2C;
	    public static encode(message: IGetQuestRewardS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetQuestRewardS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetQuestRewardS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetQuestRewardS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetQuestRewardS2C;
	    public static toObject(message: GetQuestRewardS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetDailyQuestRewardC2S {
	    id?: (number|null);
	    rewardActive?: (number|null);
	}
}
declare module proto {
	 class GetDailyQuestRewardC2S implements IGetDailyQuestRewardC2S {
	    constructor(properties?: IGetDailyQuestRewardC2S);
	    public id: number;
	    public rewardActive: number;
	    public static create(properties?: IGetDailyQuestRewardC2S): GetDailyQuestRewardC2S;
	    public static encode(message: IGetDailyQuestRewardC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetDailyQuestRewardC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetDailyQuestRewardC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetDailyQuestRewardC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetDailyQuestRewardC2S;
	    public static toObject(message: GetDailyQuestRewardC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetDailyQuestRewardS2C {
	    error?: (number|null);
	    active?: (IDailyActive|null);
	    itemList?: (IGameItem[]|null);
	}
}
declare module proto {
	 class GetDailyQuestRewardS2C implements IGetDailyQuestRewardS2C {
	    constructor(properties?: IGetDailyQuestRewardS2C);
	    public error: number;
	    public active?: (IDailyActive|null);
	    public itemList: IGameItem[];
	    public static create(properties?: IGetDailyQuestRewardS2C): GetDailyQuestRewardS2C;
	    public static encode(message: IGetDailyQuestRewardS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetDailyQuestRewardS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetDailyQuestRewardS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetDailyQuestRewardS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetDailyQuestRewardS2C;
	    public static toObject(message: GetDailyQuestRewardS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerHeroImageChooseC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class GamerHeroImageChooseC2S implements IGamerHeroImageChooseC2S {
	    constructor(properties?: IGamerHeroImageChooseC2S);
	    public id: number;
	    public static create(properties?: IGamerHeroImageChooseC2S): GamerHeroImageChooseC2S;
	    public static encode(message: IGamerHeroImageChooseC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerHeroImageChooseC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerHeroImageChooseC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerHeroImageChooseC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerHeroImageChooseC2S;
	    public static toObject(message: GamerHeroImageChooseC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerHeroImageChooseS2C {
	    error?: (number|null);
	    heroId?: (number|null);
	}
}
declare module proto {
	 class GamerHeroImageChooseS2C implements IGamerHeroImageChooseS2C {
	    constructor(properties?: IGamerHeroImageChooseS2C);
	    public error: number;
	    public heroId: number;
	    public static create(properties?: IGamerHeroImageChooseS2C): GamerHeroImageChooseS2C;
	    public static encode(message: IGamerHeroImageChooseS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerHeroImageChooseS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerHeroImageChooseS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerHeroImageChooseS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerHeroImageChooseS2C;
	    public static toObject(message: GamerHeroImageChooseS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerHeroImageChangeC2S {
	    id?: (number|null);
	    heroId?: (number|null);
	}
}
declare module proto {
	 class GamerHeroImageChangeC2S implements IGamerHeroImageChangeC2S {
	    constructor(properties?: IGamerHeroImageChangeC2S);
	    public id: number;
	    public heroId: number;
	    public static create(properties?: IGamerHeroImageChangeC2S): GamerHeroImageChangeC2S;
	    public static encode(message: IGamerHeroImageChangeC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerHeroImageChangeC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerHeroImageChangeC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerHeroImageChangeC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerHeroImageChangeC2S;
	    public static toObject(message: GamerHeroImageChangeC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerHeroImageChangeS2C {
	    error?: (number|null);
	    heroId?: (number|null);
	}
}
declare module proto {
	 class GamerHeroImageChangeS2C implements IGamerHeroImageChangeS2C {
	    constructor(properties?: IGamerHeroImageChangeS2C);
	    public error: number;
	    public heroId: number;
	    public static create(properties?: IGamerHeroImageChangeS2C): GamerHeroImageChangeS2C;
	    public static encode(message: IGamerHeroImageChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerHeroImageChangeS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerHeroImageChangeS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerHeroImageChangeS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerHeroImageChangeS2C;
	    public static toObject(message: GamerHeroImageChangeS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerBuyRollC2S {
	    id?: (number|null);
	    num?: (number|null);
	}
}
declare module proto {
	 class GamerBuyRollC2S implements IGamerBuyRollC2S {
	    constructor(properties?: IGamerBuyRollC2S);
	    public id: number;
	    public num: number;
	    public static create(properties?: IGamerBuyRollC2S): GamerBuyRollC2S;
	    public static encode(message: IGamerBuyRollC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerBuyRollC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerBuyRollC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerBuyRollC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerBuyRollC2S;
	    public static toObject(message: GamerBuyRollC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerBuyRollS2C {
	    error?: (number|null);
	    rollNum?: (number|null);
	}
}
declare module proto {
	 class GamerBuyRollS2C implements IGamerBuyRollS2C {
	    constructor(properties?: IGamerBuyRollS2C);
	    public error: number;
	    public rollNum: number;
	    public static create(properties?: IGamerBuyRollS2C): GamerBuyRollS2C;
	    public static encode(message: IGamerBuyRollS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerBuyRollS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerBuyRollS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerBuyRollS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerBuyRollS2C;
	    public static toObject(message: GamerBuyRollS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetGamerSecretLandC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class GetGamerSecretLandC2S implements IGetGamerSecretLandC2S {
	    constructor(properties?: IGetGamerSecretLandC2S);
	    public id: number;
	    public static create(properties?: IGetGamerSecretLandC2S): GetGamerSecretLandC2S;
	    public static encode(message: IGetGamerSecretLandC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetGamerSecretLandC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetGamerSecretLandC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetGamerSecretLandC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetGamerSecretLandC2S;
	    public static toObject(message: GetGamerSecretLandC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetGamerSecretLandS2C {
	    error?: (number|null);
	    secretLand?: (IGamerSecretLand|null);
	    thisWeekReward?: (number|null);
	    lastWeekReward?: (number|null);
	    lastBattleReward?: (ISecretLandReward|null);
	}
}
declare module proto {
	 class GetGamerSecretLandS2C implements IGetGamerSecretLandS2C {
	    constructor(properties?: IGetGamerSecretLandS2C);
	    public error: number;
	    public secretLand?: (IGamerSecretLand|null);
	    public thisWeekReward: number;
	    public lastWeekReward: number;
	    public lastBattleReward?: (ISecretLandReward|null);
	    public static create(properties?: IGetGamerSecretLandS2C): GetGamerSecretLandS2C;
	    public static encode(message: IGetGamerSecretLandS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetGamerSecretLandS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetGamerSecretLandS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetGamerSecretLandS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetGamerSecretLandS2C;
	    public static toObject(message: GetGamerSecretLandS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyGamerSecretLandInfoS2C {
	    error?: (number|null);
	    secretLand?: (IGamerSecretLand|null);
	    thisWeekReward?: (number|null);
	    lastWeekReward?: (number|null);
	    lastBattleReward?: (ISecretLandReward|null);
	}
}
declare module proto {
	 class GamerNotifyGamerSecretLandInfoS2C implements IGamerNotifyGamerSecretLandInfoS2C {
	    constructor(properties?: IGamerNotifyGamerSecretLandInfoS2C);
	    public error: number;
	    public secretLand?: (IGamerSecretLand|null);
	    public thisWeekReward: number;
	    public lastWeekReward: number;
	    public lastBattleReward?: (ISecretLandReward|null);
	    public static create(properties?: IGamerNotifyGamerSecretLandInfoS2C): GamerNotifyGamerSecretLandInfoS2C;
	    public static encode(message: IGamerNotifyGamerSecretLandInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyGamerSecretLandInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyGamerSecretLandInfoS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyGamerSecretLandInfoS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyGamerSecretLandInfoS2C;
	    public static toObject(message: GamerNotifyGamerSecretLandInfoS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifySecretLandInfoS2C {
	    error?: (number|null);
	    thisAffixList?: (number[]|null);
	    nextAffixList?: (number[]|null);
	    checkpointMap?: (ISecretLandMap[]|null);
	}
}
declare module proto {
	 class GamerNotifySecretLandInfoS2C implements IGamerNotifySecretLandInfoS2C {
	    constructor(properties?: IGamerNotifySecretLandInfoS2C);
	    public error: number;
	    public thisAffixList: number[];
	    public nextAffixList: number[];
	    public checkpointMap: ISecretLandMap[];
	    public static create(properties?: IGamerNotifySecretLandInfoS2C): GamerNotifySecretLandInfoS2C;
	    public static encode(message: IGamerNotifySecretLandInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifySecretLandInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifySecretLandInfoS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifySecretLandInfoS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifySecretLandInfoS2C;
	    public static toObject(message: GamerNotifySecretLandInfoS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerSecretLandBattleRewardC2S {
	    id?: (number|null);
	    useRoll?: (boolean|null);
	}
}
declare module proto {
	 class GamerSecretLandBattleRewardC2S implements IGamerSecretLandBattleRewardC2S {
	    constructor(properties?: IGamerSecretLandBattleRewardC2S);
	    public id: number;
	    public useRoll: boolean;
	    public static create(properties?: IGamerSecretLandBattleRewardC2S): GamerSecretLandBattleRewardC2S;
	    public static encode(message: IGamerSecretLandBattleRewardC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerSecretLandBattleRewardC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerSecretLandBattleRewardC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerSecretLandBattleRewardC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerSecretLandBattleRewardC2S;
	    public static toObject(message: GamerSecretLandBattleRewardC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerSecretLandBattleRewardS2C {
	    error?: (number|null);
	    items?: (IGameItem[]|null);
	}
}
declare module proto {
	 class GamerSecretLandBattleRewardS2C implements IGamerSecretLandBattleRewardS2C {
	    constructor(properties?: IGamerSecretLandBattleRewardS2C);
	    public error: number;
	    public items: IGameItem[];
	    public static create(properties?: IGamerSecretLandBattleRewardS2C): GamerSecretLandBattleRewardS2C;
	    public static encode(message: IGamerSecretLandBattleRewardS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerSecretLandBattleRewardS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerSecretLandBattleRewardS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerSecretLandBattleRewardS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerSecretLandBattleRewardS2C;
	    public static toObject(message: GamerSecretLandBattleRewardS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerSecretLandWeekRewardC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class GamerSecretLandWeekRewardC2S implements IGamerSecretLandWeekRewardC2S {
	    constructor(properties?: IGamerSecretLandWeekRewardC2S);
	    public id: number;
	    public static create(properties?: IGamerSecretLandWeekRewardC2S): GamerSecretLandWeekRewardC2S;
	    public static encode(message: IGamerSecretLandWeekRewardC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerSecretLandWeekRewardC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerSecretLandWeekRewardC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerSecretLandWeekRewardC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerSecretLandWeekRewardC2S;
	    public static toObject(message: GamerSecretLandWeekRewardC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerSecretLandWeekRewardS2C {
	    error?: (number|null);
	    items?: (IGameItem[]|null);
	}
}
declare module proto {
	 class GamerSecretLandWeekRewardS2C implements IGamerSecretLandWeekRewardS2C {
	    constructor(properties?: IGamerSecretLandWeekRewardS2C);
	    public error: number;
	    public items: IGameItem[];
	    public static create(properties?: IGamerSecretLandWeekRewardS2C): GamerSecretLandWeekRewardS2C;
	    public static encode(message: IGamerSecretLandWeekRewardS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerSecretLandWeekRewardS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerSecretLandWeekRewardS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerSecretLandWeekRewardS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerSecretLandWeekRewardS2C;
	    public static toObject(message: GamerSecretLandWeekRewardS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerSecretLandRankC2S {
	    id?: (number|null);
	    type?: (number|null);
	}
}
declare module proto {
	 class GamerSecretLandRankC2S implements IGamerSecretLandRankC2S {
	    constructor(properties?: IGamerSecretLandRankC2S);
	    public id: number;
	    public type: number;
	    public static create(properties?: IGamerSecretLandRankC2S): GamerSecretLandRankC2S;
	    public static encode(message: IGamerSecretLandRankC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerSecretLandRankC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerSecretLandRankC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerSecretLandRankC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerSecretLandRankC2S;
	    public static toObject(message: GamerSecretLandRankC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerSecretLandRankS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerSecretLandRankS2C implements IGamerSecretLandRankS2C {
	    constructor(properties?: IGamerSecretLandRankS2C);
	    public error: number;
	    public static create(properties?: IGamerSecretLandRankS2C): GamerSecretLandRankS2C;
	    public static encode(message: IGamerSecretLandRankS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerSecretLandRankS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerSecretLandRankS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerSecretLandRankS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerSecretLandRankS2C;
	    public static toObject(message: GamerSecretLandRankS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetGamerSecretLandInfoC2S {
	    id?: (number|null);
	}
}
declare module proto {
	 class GetGamerSecretLandInfoC2S implements IGetGamerSecretLandInfoC2S {
	    constructor(properties?: IGetGamerSecretLandInfoC2S);
	    public id: number;
	    public static create(properties?: IGetGamerSecretLandInfoC2S): GetGamerSecretLandInfoC2S;
	    public static encode(message: IGetGamerSecretLandInfoC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetGamerSecretLandInfoC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetGamerSecretLandInfoC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetGamerSecretLandInfoC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetGamerSecretLandInfoC2S;
	    public static toObject(message: GetGamerSecretLandInfoC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGetGamerSecretLandInfoS2C {
	    error?: (number|null);
	    thisAffixList?: (number[]|null);
	    nextAffixList?: (number[]|null);
	    checkpointMap?: (ISecretLandMap[]|null);
	}
}
declare module proto {
	 class GetGamerSecretLandInfoS2C implements IGetGamerSecretLandInfoS2C {
	    constructor(properties?: IGetGamerSecretLandInfoS2C);
	    public error: number;
	    public thisAffixList: number[];
	    public nextAffixList: number[];
	    public checkpointMap: ISecretLandMap[];
	    public static create(properties?: IGetGamerSecretLandInfoS2C): GetGamerSecretLandInfoS2C;
	    public static encode(message: IGetGamerSecretLandInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGetGamerSecretLandInfoS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetGamerSecretLandInfoS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetGamerSecretLandInfoS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GetGamerSecretLandInfoS2C;
	    public static toObject(message: GetGamerSecretLandInfoS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifySLTreasureBoxS2C {
	    error?: (number|null);
	    boxKey?: (string|null);
	    treasureBox?: (ISecretLandTreasureBox|null);
	    id?: (number|null);
	}
}
declare module proto {
	 class GamerNotifySLTreasureBoxS2C implements IGamerNotifySLTreasureBoxS2C {
	    constructor(properties?: IGamerNotifySLTreasureBoxS2C);
	    public error: number;
	    public boxKey: string;
	    public treasureBox?: (ISecretLandTreasureBox|null);
	    public id: number;
	    public static create(properties?: IGamerNotifySLTreasureBoxS2C): GamerNotifySLTreasureBoxS2C;
	    public static encode(message: IGamerNotifySLTreasureBoxS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifySLTreasureBoxS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifySLTreasureBoxS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifySLTreasureBoxS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifySLTreasureBoxS2C;
	    public static toObject(message: GamerNotifySLTreasureBoxS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerNotifyNewSecretLandResultS2C {
	    error?: (number|null);
	    costTime?: (number|null);
	    checkPointId?: (number|null);
	    level?: (number|null);
	    result?: (SLBattleResultType|null);
	    battleType?: (PVPType|null);
	    preKeyStone?: (number|null);
	    nowKeyStone?: (number|null);
	    boxKey?: (string|null);
	    gidList?: (number[]|null);
	}
}
declare module proto {
	 class GamerNotifyNewSecretLandResultS2C implements IGamerNotifyNewSecretLandResultS2C {
	    constructor(properties?: IGamerNotifyNewSecretLandResultS2C);
	    public error: number;
	    public costTime: number;
	    public checkPointId: number;
	    public level: number;
	    public result: SLBattleResultType;
	    public battleType: PVPType;
	    public preKeyStone: number;
	    public nowKeyStone: number;
	    public boxKey: string;
	    public gidList: number[];
	    public static create(properties?: IGamerNotifyNewSecretLandResultS2C): GamerNotifyNewSecretLandResultS2C;
	    public static encode(message: IGamerNotifyNewSecretLandResultS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerNotifyNewSecretLandResultS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerNotifyNewSecretLandResultS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerNotifyNewSecretLandResultS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerNotifyNewSecretLandResultS2C;
	    public static toObject(message: GamerNotifyNewSecretLandResultS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerChangeItemIsSawC2S {
	    id?: (number|null);
	    type?: (number|null);
	    uidList?: (number[]|null);
	}
}
declare module proto {
	 class GamerChangeItemIsSawC2S implements IGamerChangeItemIsSawC2S {
	    constructor(properties?: IGamerChangeItemIsSawC2S);
	    public id: number;
	    public type: number;
	    public uidList: number[];
	    public static create(properties?: IGamerChangeItemIsSawC2S): GamerChangeItemIsSawC2S;
	    public static encode(message: IGamerChangeItemIsSawC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerChangeItemIsSawC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerChangeItemIsSawC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerChangeItemIsSawC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerChangeItemIsSawC2S;
	    public static toObject(message: GamerChangeItemIsSawC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerChangeItemIsSawS2C {
	    error?: (number|null);
	}
}
declare module proto {
	 class GamerChangeItemIsSawS2C implements IGamerChangeItemIsSawS2C {
	    constructor(properties?: IGamerChangeItemIsSawS2C);
	    public error: number;
	    public static create(properties?: IGamerChangeItemIsSawS2C): GamerChangeItemIsSawS2C;
	    public static encode(message: IGamerChangeItemIsSawS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerChangeItemIsSawS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerChangeItemIsSawS2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerChangeItemIsSawS2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerChangeItemIsSawS2C;
	    public static toObject(message: GamerChangeItemIsSawS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IPrevC2S {
	    key?: (string|null);
	}
}
declare module proto {
	 class PrevC2S implements IPrevC2S {
	    constructor(properties?: IPrevC2S);
	    public key: string;
	    public static create(properties?: IPrevC2S): PrevC2S;
	    public static encode(message: IPrevC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IPrevC2S, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PrevC2S;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PrevC2S;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): PrevC2S;
	    public static toObject(message: PrevC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IProxyProto {
	    data?: (Uint8Array|null);
	    clientAddr?: (string|null);
	    gateAddr?: (string|null);
	}
}
declare module proto {
	 class ProxyProto implements IProxyProto {
	    constructor(properties?: IProxyProto);
	    public data: Uint8Array;
	    public clientAddr: string;
	    public gateAddr: string;
	    public static create(properties?: IProxyProto): ProxyProto;
	    public static encode(message: IProxyProto, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IProxyProto, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProxyProto;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProxyProto;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): ProxyProto;
	    public static toObject(message: ProxyProto, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IServerTime {
	    timestamp?: (number|any|null);
	    year?: (number|null);
	    month?: (number|null);
	    day?: (number|null);
	    hour?: (number|null);
	    minute?: (number|null);
	    second?: (number|null);
	    timezone?: (number|null);
	}
}
declare module proto {
	 class ServerTime implements IServerTime {
	    constructor(properties?: IServerTime);
	    public timestamp: (number|any);
	    public year: number;
	    public month: number;
	    public day: number;
	    public hour: number;
	    public minute: number;
	    public second: number;
	    public timezone: number;
	    public static create(properties?: IServerTime): ServerTime;
	    public static encode(message: IServerTime, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IServerTime, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerTime;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerTime;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): ServerTime;
	    public static toObject(message: ServerTime, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGameItem {
	    uid?: (number|null);
	    id?: (number|null);
	    type?: (number|null);
	    count?: (number|null);
	    obtainTime?: (number|any|null);
	    name?: (string|null);
	    expireTime?: (number|any|null);
	    equip?: (IEquip|null);
	    isSaw?: (boolean|null);
	}
}
declare module proto {
	 class GameItem implements IGameItem {
	    constructor(properties?: IGameItem);
	    public uid: number;
	    public id: number;
	    public type: number;
	    public count: number;
	    public obtainTime: (number|any);
	    public name: string;
	    public expireTime: (number|any);
	    public equip?: (IEquip|null);
	    public isSaw: boolean;
	    public static create(properties?: IGameItem): GameItem;
	    public static encode(message: IGameItem, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGameItem, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameItem;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameItem;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GameItem;
	    public static toObject(message: GameItem, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ITimeRecord {
	    lastSign?: (number|any|null);
	    lastGetPVPResult?: (number|any|null);
	    lastWeekRec?: (number|any|null);
	    totalTime?: (number|null);
	}
}
declare module proto {
	 class TimeRecord implements ITimeRecord {
	    constructor(properties?: ITimeRecord);
	    public lastSign: (number|any);
	    public lastGetPVPResult: (number|any);
	    public lastWeekRec: (number|any);
	    public totalTime: number;
	    public static create(properties?: ITimeRecord): TimeRecord;
	    public static encode(message: ITimeRecord, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ITimeRecord, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TimeRecord;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TimeRecord;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): TimeRecord;
	    public static toObject(message: TimeRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface INumberRecord {
	    elo?: (number|null);
	    normWin?: (number|null);
	    totalSignIn?: (number|null);
	    weekTotalSign?: (number|null);
	    weekGoldGet?: (number|null);
	    weekExpGet?: (number|null);
	    changeName?: (number|null);
	}
}
declare module proto {
	 class NumberRecord implements INumberRecord {
	    constructor(properties?: INumberRecord);
	    public elo: number;
	    public normWin: number;
	    public totalSignIn: number;
	    public weekTotalSign: number;
	    public weekGoldGet: number;
	    public weekExpGet: number;
	    public changeName: number;
	    public static create(properties?: INumberRecord): NumberRecord;
	    public static encode(message: INumberRecord, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: INumberRecord, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NumberRecord;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NumberRecord;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): NumberRecord;
	    public static toObject(message: NumberRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IWXInfo {
	    avatarUrl?: (string|null);
	    city?: (string|null);
	    gender?: (number|null);
	    openId?: (string|null);
	    language?: (string|null);
	    nickName?: (string|null);
	    province?: (string|null);
	    unionId?: (string|null);
	    country?: (string|null);
	    sessionId?: (string|null);
	    sign?: (string|null);
	}
}
declare module proto {
	 class WXInfo implements IWXInfo {
	    constructor(properties?: IWXInfo);
	    public avatarUrl: string;
	    public city: string;
	    public gender: number;
	    public openId: string;
	    public language: string;
	    public nickName: string;
	    public province: string;
	    public unionId: string;
	    public country: string;
	    public sessionId: string;
	    public sign: string;
	    public static create(properties?: IWXInfo): WXInfo;
	    public static encode(message: IWXInfo, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IWXInfo, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WXInfo;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WXInfo;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): WXInfo;
	    public static toObject(message: WXInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerMain {
	    id?: (number|null);
	    uid?: (string|null);
	    lsid?: (number|null);
	    psid?: (number|null);
	    state?: (number|null);
	    name?: (string|null);
	    level?: (number|null);
	    session?: (string|null);
	    create?: (number|any|null);
	    lastLogin?: (number|any|null);
	    lastLogout?: (number|any|null);
	    typeId?: (number|null);
	    icon?: (number|null);
	    diamond?: (number|null);
	    exp?: (number|null);
	    pvpSession?: (string|null);
	    avatar?: (string|null);
	    energy?: (number|null);
	    isNewbie?: (boolean|null);
	    guildId?: (number|null);
	}
}
declare module proto {
	 class GamerMain implements IGamerMain {
	    constructor(properties?: IGamerMain);
	    public id: number;
	    public uid: string;
	    public lsid: number;
	    public psid: number;
	    public state: number;
	    public name: string;
	    public level: number;
	    public session: string;
	    public create: (number|any);
	    public lastLogin: (number|any);
	    public lastLogout: (number|any);
	    public typeId: number;
	    public icon: number;
	    public diamond: number;
	    public exp: number;
	    public pvpSession: string;
	    public avatar: string;
	    public energy: number;
	    public isNewbie: boolean;
	    public guildId: number;
	    public static create(properties?: IGamerMain): GamerMain;
	    public static encode(message: IGamerMain, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerMain, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerMain;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerMain;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerMain;
	    public static toObject(message: GamerMain, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerMini {
	    id?: (number|null);
	    name?: (string|null);
	    level?: (number|null);
	    lsid?: (number|null);
	    state?: (number|null);
	    avatar?: (string|null);
	    channel?: (string|null);
	}
}
declare module proto {
	 class GamerMini implements IGamerMini {
	    constructor(properties?: IGamerMini);
	    public id: number;
	    public name: string;
	    public level: number;
	    public lsid: number;
	    public state: number;
	    public avatar: string;
	    public channel: string;
	    public static create(properties?: IGamerMini): GamerMini;
	    public static encode(message: IGamerMini, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerMini, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerMini;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerMini;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerMini;
	    public static toObject(message: GamerMini, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerFriendRequest {
	    id?: (number|null);
	    msg?: (string|null);
	    time?: (number|any|null);
	    gamerInfo?: (IGamerMini|null);
	}
}
declare module proto {
	 class GamerFriendRequest implements IGamerFriendRequest {
	    constructor(properties?: IGamerFriendRequest);
	    public id: number;
	    public msg: string;
	    public time: (number|any);
	    public gamerInfo?: (IGamerMini|null);
	    public static create(properties?: IGamerFriendRequest): GamerFriendRequest;
	    public static encode(message: IGamerFriendRequest, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerFriendRequest, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerFriendRequest;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerFriendRequest;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerFriendRequest;
	    public static toObject(message: GamerFriendRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerBlack {
	    id?: (number|null);
	}
}
declare module proto {
	 class GamerBlack implements IGamerBlack {
	    constructor(properties?: IGamerBlack);
	    public id: number;
	    public static create(properties?: IGamerBlack): GamerBlack;
	    public static encode(message: IGamerBlack, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerBlack, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerBlack;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerBlack;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerBlack;
	    public static toObject(message: GamerBlack, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerFriend {
	    id?: (number|null);
	    time?: (number|any|null);
	    gamerInfo?: (IGamerMini|null);
	}
}
declare module proto {
	 class GamerFriend implements IGamerFriend {
	    constructor(properties?: IGamerFriend);
	    public id: number;
	    public time: (number|any);
	    public gamerInfo?: (IGamerMini|null);
	    public static create(properties?: IGamerFriend): GamerFriend;
	    public static encode(message: IGamerFriend, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerFriend, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerFriend;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerFriend;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerFriend;
	    public static toObject(message: GamerFriend, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IChatData {
	    from?: (number|null);
	    time?: (number|any|null);
	    msg?: (string|null);
	    channel?: (ChatChannel|null);
	    gamerInfo?: (IGamerMini|null);
	}
}
declare module proto {
	 class ChatData implements IChatData {
	    constructor(properties?: IChatData);
	    public from: number;
	    public time: (number|any);
	    public msg: string;
	    public channel: ChatChannel;
	    public gamerInfo?: (IGamerMini|null);
	    public static create(properties?: IChatData): ChatData;
	    public static encode(message: IChatData, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IChatData, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatData;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatData;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): ChatData;
	    public static toObject(message: ChatData, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IMail {
	    id?: (string|null);
	    mailType?: (MailType|null);
	    time?: (number|any|null);
	    theme?: (string|null);
	    msg?: (string|null);
	    attachments?: (IGameItem[]|null);
	    state?: (MailState|null);
	    serverId?: (number|null);
	    senderId?: (number|null);
	    level?: (number|null);
	    endTime?: (number|any|null);
	    isDel?: (number|null);
	    cfgId?: (number|null);
	    save?: (boolean|null);
	    gamerInfo?: (IGamerMini|null);
	}
}
declare module proto {
	 class Mail implements IMail {
	    constructor(properties?: IMail);
	    public id: string;
	    public mailType: MailType;
	    public time: (number|any);
	    public theme: string;
	    public msg: string;
	    public attachments: IGameItem[];
	    public state: MailState;
	    public serverId: number;
	    public senderId: number;
	    public level: number;
	    public endTime: (number|any);
	    public isDel: number;
	    public cfgId: number;
	    public save: boolean;
	    public gamerInfo?: (IGamerMini|null);
	    public static create(properties?: IMail): Mail;
	    public static encode(message: IMail, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IMail, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mail;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mail;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Mail;
	    public static toObject(message: Mail, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerMatch {
	    mini?: (IGamerMini|null);
	    ai?: (boolean|null);
	    teamId?: (number|null);
	    danInfo?: (IDanInfo|null);
	    heroList?: (IGamerHero[]|null);
	    secretLand?: (IGamerSecretLand|null);
	    IsHelper?: (boolean|null);
	}
}
declare module proto {
	 class GamerMatch implements IGamerMatch {
	    constructor(properties?: IGamerMatch);
	    public mini?: (IGamerMini|null);
	    public ai: boolean;
	    public teamId: number;
	    public danInfo?: (IDanInfo|null);
	    public heroList: IGamerHero[];
	    public secretLand?: (IGamerSecretLand|null);
	    public IsHelper: boolean;
	    public static create(properties?: IGamerMatch): GamerMatch;
	    public static encode(message: IGamerMatch, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerMatch, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerMatch;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerMatch;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerMatch;
	    public static toObject(message: GamerMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IMatchInfo {
	    session?: (string|null);
	    time?: (number|any|null);
	    addr?: (string|null);
	    frameDelta?: (number|null);
	    minFrameDelta?: (number|null);
	    matchTime?: (number|null);
	    inputDelta?: (number|null);
	    pvpType?: (PVPType|null);
	    threadRecv?: (boolean|null);
	    checkPointId?: (number|null);
	    SingleReliveTimes?: (number|null);
	    TeamReliveTimes?: (number|null);
	    LeaderGid?: (number|null);
	    gamers?: (IGamerMatch[]|null);
	}
}
declare module proto {
	 class MatchInfo implements IMatchInfo {
	    constructor(properties?: IMatchInfo);
	    public session: string;
	    public time: (number|any);
	    public addr: string;
	    public frameDelta: number;
	    public minFrameDelta: number;
	    public matchTime: number;
	    public inputDelta: number;
	    public pvpType: PVPType;
	    public threadRecv: boolean;
	    public checkPointId: number;
	    public SingleReliveTimes: number;
	    public TeamReliveTimes: number;
	    public LeaderGid: number;
	    public gamers: IGamerMatch[];
	    public static create(properties?: IMatchInfo): MatchInfo;
	    public static encode(message: IMatchInfo, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IMatchInfo, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchInfo;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MatchInfo;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): MatchInfo;
	    public static toObject(message: MatchInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IPVPLoading {
	    id?: (number|null);
	    per?: (number|null);
	}
}
declare module proto {
	 class PVPLoading implements IPVPLoading {
	    constructor(properties?: IPVPLoading);
	    public id: number;
	    public per: number;
	    public static create(properties?: IPVPLoading): PVPLoading;
	    public static encode(message: IPVPLoading, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IPVPLoading, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PVPLoading;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PVPLoading;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): PVPLoading;
	    public static toObject(message: PVPLoading, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IPVPInput {
	    id?: (number|null);
	    yaw?: (number|null);
	    btn?: (number|null);
	    pos?: (number|null);
	    talk?: (number|null);
	    frame?: (number|null);
	    x?: (number|null);
	    y?: (number|null);
	    cmd?: (number|null);
	    cmdParamList?: (number[]|null);
	}
}
declare module proto {
	 class PVPInput implements IPVPInput {
	    constructor(properties?: IPVPInput);
	    public id: number;
	    public yaw: number;
	    public btn: number;
	    public pos: number;
	    public talk: number;
	    public frame: number;
	    public x: number;
	    public y: number;
	    public cmd: number;
	    public cmdParamList: number[];
	    public static create(properties?: IPVPInput): PVPInput;
	    public static encode(message: IPVPInput, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IPVPInput, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PVPInput;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PVPInput;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): PVPInput;
	    public static toObject(message: PVPInput, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IPVPFrame {
	    delta?: (number|null);
	    frame?: (number|null);
	    end?: (boolean|null);
	    inputs?: (IPVPInput[]|null);
	}
}
declare module proto {
	 class PVPFrame implements IPVPFrame {
	    constructor(properties?: IPVPFrame);
	    public delta: number;
	    public frame: number;
	    public end: boolean;
	    public inputs: IPVPInput[];
	    public static create(properties?: IPVPFrame): PVPFrame;
	    public static encode(message: IPVPFrame, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IPVPFrame, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PVPFrame;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PVPFrame;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): PVPFrame;
	    public static toObject(message: PVPFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IPVPFrames {
	    frames?: (IPVPFrame[]|null);
	}
}
declare module proto {
	 class PVPFrames implements IPVPFrames {
	    constructor(properties?: IPVPFrames);
	    public frames: IPVPFrame[];
	    public static create(properties?: IPVPFrames): PVPFrames;
	    public static encode(message: IPVPFrames, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IPVPFrames, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PVPFrames;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PVPFrames;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): PVPFrames;
	    public static toObject(message: PVPFrames, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IHeroStatus {
	    id?: (number|null);
	    maxHp?: (number|null);
	    remainHp?: (number|null);
	}
}
declare module proto {
	 class HeroStatus implements IHeroStatus {
	    constructor(properties?: IHeroStatus);
	    public id: number;
	    public maxHp: number;
	    public remainHp: number;
	    public static create(properties?: IHeroStatus): HeroStatus;
	    public static encode(message: IHeroStatus, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IHeroStatus, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeroStatus;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeroStatus;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): HeroStatus;
	    public static toObject(message: HeroStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerResult {
	    id?: (number|null);
	    battleResult?: (BattleResultType|null);
	    heroList?: (IHeroStatus[]|null);
	    kill?: (number|null);
	    maxComboNum?: (number|null);
	    starNum?: (number|null);
	    reliveTimes?: (number|null);
	    offlineTime?: (number|null);
	}
}
declare module proto {
	 class GamerResult implements IGamerResult {
	    constructor(properties?: IGamerResult);
	    public id: number;
	    public battleResult: BattleResultType;
	    public heroList: IHeroStatus[];
	    public kill: number;
	    public maxComboNum: number;
	    public starNum: number;
	    public reliveTimes: number;
	    public offlineTime: number;
	    public static create(properties?: IGamerResult): GamerResult;
	    public static encode(message: IGamerResult, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerResult, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerResult;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerResult;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerResult;
	    public static toObject(message: GamerResult, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IPVPResult {
	    gameResultList?: (IGamerResult[]|null);
	    time?: (number|any|null);
	    matchInfo?: (IMatchInfo|null);
	    frames?: (IPVPFrame[]|null);
	    md5?: (string|null);
	}
}
declare module proto {
	 class PVPResult implements IPVPResult {
	    constructor(properties?: IPVPResult);
	    public gameResultList: IGamerResult[];
	    public time: (number|any);
	    public matchInfo?: (IMatchInfo|null);
	    public frames: IPVPFrame[];
	    public md5: string;
	    public static create(properties?: IPVPResult): PVPResult;
	    public static encode(message: IPVPResult, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IPVPResult, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PVPResult;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PVPResult;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): PVPResult;
	    public static toObject(message: PVPResult, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IRankLength {
	    id?: (number|null);
	    length?: (number|null);
	    rank?: (number|null);
	    mini?: (IGamerMini|null);
	}
}
declare module proto {
	 class RankLength implements IRankLength {
	    constructor(properties?: IRankLength);
	    public id: number;
	    public length: number;
	    public rank: number;
	    public mini?: (IGamerMini|null);
	    public static create(properties?: IRankLength): RankLength;
	    public static encode(message: IRankLength, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IRankLength, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RankLength;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RankLength;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): RankLength;
	    public static toObject(message: RankLength, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGashapon {
	    id?: (number|null);
	    extractNum?: (number|null);
	    freeNum?: (number|null);
	    nextFreeTime?: (number|any|null);
	    startTime?: (number|any|null);
	    endTime?: (number|any|null);
	    guaranteedNum?: (number|null);
	    trigger?: (number|null);
	    lastTime?: (number|any|null);
	    todayExtractNum?: (number|null);
	}
}
declare module proto {
	 class Gashapon implements IGashapon {
	    constructor(properties?: IGashapon);
	    public id: number;
	    public extractNum: number;
	    public freeNum: number;
	    public nextFreeTime: (number|any);
	    public startTime: (number|any);
	    public endTime: (number|any);
	    public guaranteedNum: number;
	    public trigger: number;
	    public lastTime: (number|any);
	    public todayExtractNum: number;
	    public static create(properties?: IGashapon): Gashapon;
	    public static encode(message: IGashapon, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGashapon, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Gashapon;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Gashapon;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Gashapon;
	    public static toObject(message: Gashapon, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ITimes {
	    id?: (number|null);
	    times?: (number|null);
	}
}
declare module proto {
	 class Times implements ITimes {
	    constructor(properties?: ITimes);
	    public id: number;
	    public times: number;
	    public static create(properties?: ITimes): Times;
	    public static encode(message: ITimes, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ITimes, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Times;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Times;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Times;
	    public static toObject(message: Times, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IFatigueInfo {
	    fatigueNum?: (number|null);
	    maxFatigueNum?: (number|null);
	    lastUpdateTime?: (number|any|null);
	    buyTimes?: (ITimes[]|null);
	    lastBuyTime?: (number|any|null);
	    welfareStatus?: (number|null);
	    lastGetWelfareTime?: (number|any|null);
	}
}
declare module proto {
	 class FatigueInfo implements IFatigueInfo {
	    constructor(properties?: IFatigueInfo);
	    public fatigueNum: number;
	    public maxFatigueNum: number;
	    public lastUpdateTime: (number|any);
	    public buyTimes: ITimes[];
	    public lastBuyTime: (number|any);
	    public welfareStatus: number;
	    public lastGetWelfareTime: (number|any);
	    public static create(properties?: IFatigueInfo): FatigueInfo;
	    public static encode(message: IFatigueInfo, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IFatigueInfo, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FatigueInfo;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FatigueInfo;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): FatigueInfo;
	    public static toObject(message: FatigueInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ICountActivity {
	    id?: (number|null);
	    currentDay?: (number|null);
	    alreadyGetDay?: (number|null);
	}
}
declare module proto {
	 class CountActivity implements ICountActivity {
	    constructor(properties?: ICountActivity);
	    public id: number;
	    public currentDay: number;
	    public alreadyGetDay: number;
	    public static create(properties?: ICountActivity): CountActivity;
	    public static encode(message: ICountActivity, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ICountActivity, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CountActivity;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CountActivity;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): CountActivity;
	    public static toObject(message: CountActivity, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGuildMember {
	    gid?: (number|null);
	    contribution?: (number|null);
	    power?: (number|null);
	    position?: (number|null);
	    isOnline?: (boolean|null);
	    mini?: (IGamerMini|null);
	}
}
declare module proto {
	 class GuildMember implements IGuildMember {
	    constructor(properties?: IGuildMember);
	    public gid: number;
	    public contribution: number;
	    public power: number;
	    public position: number;
	    public isOnline: boolean;
	    public mini?: (IGamerMini|null);
	    public static create(properties?: IGuildMember): GuildMember;
	    public static encode(message: IGuildMember, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGuildMember, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GuildMember;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GuildMember;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GuildMember;
	    public static toObject(message: GuildMember, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGuild {
	    id?: (number|null);
	    name?: (string|null);
	    level?: (number|null);
	    experience?: (number|null);
	    memberNum?: (number|null);
	    mems?: (IGuildMember[]|null);
	    announcement?: (string|null);
	    lsid?: (number|null);
	    createdTime?: (number|any|null);
	    ownerId?: (number|null);
	    maxMemberNum?: (number|null);
	    onlineMemNum?: (number|null);
	    psid?: (number|null);
	}
}
declare module proto {
	 class Guild implements IGuild {
	    constructor(properties?: IGuild);
	    public id: number;
	    public name: string;
	    public level: number;
	    public experience: number;
	    public memberNum: number;
	    public mems: IGuildMember[];
	    public announcement: string;
	    public lsid: number;
	    public createdTime: (number|any);
	    public ownerId: number;
	    public maxMemberNum: number;
	    public onlineMemNum: number;
	    public psid: number;
	    public static create(properties?: IGuild): Guild;
	    public static encode(message: IGuild, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGuild, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Guild;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Guild;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Guild;
	    public static toObject(message: Guild, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ICarryProp {
	    id?: (number|null);
	    value?: (number|any|null);
	    propTableId?: (number|null);
	    level?: (number|null);
	    module?: (PropEffectModule|null);
	}
}
declare module proto {
	 class CarryProp implements ICarryProp {
	    constructor(properties?: ICarryProp);
	    public id: number;
	    public value: (number|any);
	    public propTableId: number;
	    public level: number;
	    public module: PropEffectModule;
	    public static create(properties?: ICarryProp): CarryProp;
	    public static encode(message: ICarryProp, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ICarryProp, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CarryProp;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CarryProp;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): CarryProp;
	    public static toObject(message: CarryProp, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IDraug {
	    uid?: (number|null);
	    id?: (number|null);
	    name?: (string|null);
	    exp?: (number|null);
	    level?: (number|null);
	    pos?: (number|null);
	    quality?: (QualityType|null);
	    isLock?: (boolean|null);
	    mainProp?: (ICarryProp|null);
	    propList?: (ICarryProp[]|null);
	    AddRatePos?: (number|null);
	}
}
declare module proto {
	 class Draug implements IDraug {
	    constructor(properties?: IDraug);
	    public uid: number;
	    public id: number;
	    public name: string;
	    public exp: number;
	    public level: number;
	    public pos: number;
	    public quality: QualityType;
	    public isLock: boolean;
	    public mainProp?: (ICarryProp|null);
	    public propList: ICarryProp[];
	    public AddRatePos: number;
	    public static create(properties?: IDraug): Draug;
	    public static encode(message: IDraug, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDraug, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Draug;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Draug;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Draug;
	    public static toObject(message: Draug, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IHeroGroupPos {
	    pos?: (number|null);
	    heroId?: (number|null);
	    skillId?: (number|null);
	}
}
declare module proto {
	 class HeroGroupPos implements IHeroGroupPos {
	    constructor(properties?: IHeroGroupPos);
	    public pos: number;
	    public heroId: number;
	    public skillId: number;
	    public static create(properties?: IHeroGroupPos): HeroGroupPos;
	    public static encode(message: IHeroGroupPos, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IHeroGroupPos, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeroGroupPos;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeroGroupPos;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): HeroGroupPos;
	    public static toObject(message: HeroGroupPos, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IHeroGroup {
	    id?: (number|null);
	    name?: (string|null);
	    posList?: (IHeroGroupPos[]|null);
	}
}
declare module proto {
	 class HeroGroup implements IHeroGroup {
	    constructor(properties?: IHeroGroup);
	    public id: number;
	    public name: string;
	    public posList: IHeroGroupPos[];
	    public static create(properties?: IHeroGroup): HeroGroup;
	    public static encode(message: IHeroGroup, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IHeroGroup, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeroGroup;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeroGroup;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): HeroGroup;
	    public static toObject(message: HeroGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISeasonsList {
	    seasonIds?: (number[]|null);
	}
}
declare module proto {
	 class SeasonsList implements ISeasonsList {
	    constructor(properties?: ISeasonsList);
	    public seasonIds: number[];
	    public static create(properties?: ISeasonsList): SeasonsList;
	    public static encode(message: ISeasonsList, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISeasonsList, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SeasonsList;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SeasonsList;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SeasonsList;
	    public static toObject(message: SeasonsList, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IEquip {
	    level?: (number|null);
	    star?: (number|null);
	    exp?: (number|null);
	    onWho?: (number|null);
	    pos?: (number|null);
	    quality?: (QualityType|null);
	    levelProp?: (ICarryProp|null);
	    starProp?: (ICarryProp|null);
	}
}
declare module proto {
	 class Equip implements IEquip {
	    constructor(properties?: IEquip);
	    public level: number;
	    public star: number;
	    public exp: number;
	    public onWho: number;
	    public pos: number;
	    public quality: QualityType;
	    public levelProp?: (ICarryProp|null);
	    public starProp?: (ICarryProp|null);
	    public static create(properties?: IEquip): Equip;
	    public static encode(message: IEquip, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IEquip, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Equip;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Equip;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Equip;
	    public static toObject(message: Equip, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IRedSpot {
	    name?: (string|null);
	    num?: (number|null);
	    subSpotList?: (IRedSpot[]|null);
	}
}
declare module proto {
	 class RedSpot implements IRedSpot {
	    constructor(properties?: IRedSpot);
	    public name: string;
	    public num: number;
	    public subSpotList: IRedSpot[];
	    public static create(properties?: IRedSpot): RedSpot;
	    public static encode(message: IRedSpot, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IRedSpot, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedSpot;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedSpot;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): RedSpot;
	    public static toObject(message: RedSpot, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISysOpenInfo {
	    sysId?: (number|null);
	    timeStamp?: (number|any|null);
	}
}
declare module proto {
	 class SysOpenInfo implements ISysOpenInfo {
	    constructor(properties?: ISysOpenInfo);
	    public sysId: number;
	    public timeStamp: (number|any);
	    public static create(properties?: ISysOpenInfo): SysOpenInfo;
	    public static encode(message: ISysOpenInfo, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISysOpenInfo, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SysOpenInfo;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SysOpenInfo;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SysOpenInfo;
	    public static toObject(message: SysOpenInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IInviteMessage {
	    gid?: (number|null);
	    timeStamp?: (number|any|null);
	    inviterGid?: (number|null);
	    type?: (number|null);
	}
}
declare module proto {
	 class InviteMessage implements IInviteMessage {
	    constructor(properties?: IInviteMessage);
	    public gid: number;
	    public timeStamp: (number|any);
	    public inviterGid: number;
	    public type: number;
	    public static create(properties?: IInviteMessage): InviteMessage;
	    public static encode(message: IInviteMessage, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IInviteMessage, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InviteMessage;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InviteMessage;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): InviteMessage;
	    public static toObject(message: InviteMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ITeamer {
	    gamer?: (IGamerMini|null);
	    hero?: (IGamerHero|null);
	    isHelper?: (boolean|null);
	    isReady?: (boolean|null);
	    danInfo?: (IDanInfo|null);
	    lastInviteList?: (IInviteMessage[]|null);
	    secretLand?: (IGamerSecretLand|null);
	}
}
declare module proto {
	 class Teamer implements ITeamer {
	    constructor(properties?: ITeamer);
	    public gamer?: (IGamerMini|null);
	    public hero?: (IGamerHero|null);
	    public isHelper: boolean;
	    public isReady: boolean;
	    public danInfo?: (IDanInfo|null);
	    public lastInviteList: IInviteMessage[];
	    public secretLand?: (IGamerSecretLand|null);
	    public static create(properties?: ITeamer): Teamer;
	    public static encode(message: ITeamer, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ITeamer, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Teamer;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Teamer;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Teamer;
	    public static toObject(message: Teamer, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ITeam {
	    teamId?: (number|null);
	    aim?: (number|null);
	    leaderGid?: (number|null);
	    lastInviteWolrd?: (number|null);
	    name?: (string|null);
	    pvpType?: (PVPType|null);
	    status?: (TeamStatus|null);
	    memberList?: (ITeamer[]|null);
	}
}
declare module proto {
	 class Team implements ITeam {
	    constructor(properties?: ITeam);
	    public teamId: number;
	    public aim: number;
	    public leaderGid: number;
	    public lastInviteWolrd: number;
	    public name: string;
	    public pvpType: PVPType;
	    public status: TeamStatus;
	    public memberList: ITeamer[];
	    public static create(properties?: ITeam): Team;
	    public static encode(message: ITeam, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ITeam, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Team;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Team;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Team;
	    public static toObject(message: Team, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ICheckPoint {
	    id?: (number|null);
	    type?: (CheckPointType|null);
	    star?: (number|null);
	    hasFirstReward?: (boolean|null);
	    challengeTimes?: (number|null);
	    lastChallengeTime?: (number|any|null);
	}
}
declare module proto {
	 class CheckPoint implements ICheckPoint {
	    constructor(properties?: ICheckPoint);
	    public id: number;
	    public type: CheckPointType;
	    public star: number;
	    public hasFirstReward: boolean;
	    public challengeTimes: number;
	    public lastChallengeTime: (number|any);
	    public static create(properties?: ICheckPoint): CheckPoint;
	    public static encode(message: ICheckPoint, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ICheckPoint, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CheckPoint;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CheckPoint;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): CheckPoint;
	    public static toObject(message: CheckPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IChapter {
	    Id?: (number|null);
	    plotStar?: (number|null);
	    plotChapterGradeIdList?: (number[]|null);
	}
}
declare module proto {
	 class Chapter implements IChapter {
	    constructor(properties?: IChapter);
	    public Id: number;
	    public plotStar: number;
	    public plotChapterGradeIdList: number[];
	    public static create(properties?: IChapter): Chapter;
	    public static encode(message: IChapter, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IChapter, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Chapter;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Chapter;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Chapter;
	    public static toObject(message: Chapter, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ICheckPointData {
	    eliteTimes?: (number|null);
	    eliteBuyTimes?: (number|null);
	    devilTimes?: (number|null);
	    devilBuyTimes?: (number|null);
	    secretTimes?: (number|null);
	    secretBuyTimes?: (number|null);
	    resetTime?: (number|any|null);
	}
}
declare module proto {
	 class CheckPointData implements ICheckPointData {
	    constructor(properties?: ICheckPointData);
	    public eliteTimes: number;
	    public eliteBuyTimes: number;
	    public devilTimes: number;
	    public devilBuyTimes: number;
	    public secretTimes: number;
	    public secretBuyTimes: number;
	    public resetTime: (number|any);
	    public static create(properties?: ICheckPointData): CheckPointData;
	    public static encode(message: ICheckPointData, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ICheckPointData, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CheckPointData;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CheckPointData;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): CheckPointData;
	    public static toObject(message: CheckPointData, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IProp {
	    id?: (number|null);
	    value?: (number|any|null);
	}
}
declare module proto {
	 class Prop implements IProp {
	    constructor(properties?: IProp);
	    public id: number;
	    public value: (number|any);
	    public static create(properties?: IProp): Prop;
	    public static encode(message: IProp, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IProp, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Prop;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Prop;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Prop;
	    public static toObject(message: Prop, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISkill {
	    id?: (number|null);
	    lv?: (number|null);
	}
}
declare module proto {
	 class Skill implements ISkill {
	    constructor(properties?: ISkill);
	    public id: number;
	    public lv: number;
	    public static create(properties?: ISkill): Skill;
	    public static encode(message: ISkill, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISkill, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Skill;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Skill;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Skill;
	    public static toObject(message: Skill, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerHero {
	    id?: (number|null);
	    name?: (string|null);
	    level?: (number|null);
	    exp?: (number|null);
	    quality?: (number|null);
	    star?: (number|null);
	    inBattle?: (boolean|null);
	    skillList?: (ISkill[]|null);
	    equipList?: (IGameItem[]|null);
	    draugList?: (IDraug[]|null);
	    baseProp?: (IProp[]|null);
	    allProp?: (IProp[]|null);
	    skin?: (number|null);
	    teamSkill?: (number|null);
	    commSkill?: (number|null);
	    isSaw?: (boolean|null);
	}
}
declare module proto {
	 class GamerHero implements IGamerHero {
	    constructor(properties?: IGamerHero);
	    public id: number;
	    public name: string;
	    public level: number;
	    public exp: number;
	    public quality: number;
	    public star: number;
	    public inBattle: boolean;
	    public skillList: ISkill[];
	    public equipList: IGameItem[];
	    public draugList: IDraug[];
	    public baseProp: IProp[];
	    public allProp: IProp[];
	    public skin: number;
	    public teamSkill: number;
	    public commSkill: number;
	    public isSaw: boolean;
	    public static create(properties?: IGamerHero): GamerHero;
	    public static encode(message: IGamerHero, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerHero, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerHero;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerHero;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerHero;
	    public static toObject(message: GamerHero, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IBagType {
	    id?: (number|null);
	    common?: (number|null);
	    equipment?: (number|null);
	    heroPieces?: (number|null);
	}
}
declare module proto {
	 class BagType implements IBagType {
	    constructor(properties?: IBagType);
	    public id: number;
	    public common: number;
	    public equipment: number;
	    public heroPieces: number;
	    public static create(properties?: IBagType): BagType;
	    public static encode(message: IBagType, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IBagType, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BagType;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BagType;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): BagType;
	    public static toObject(message: BagType, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IDanInfo {
	    danId?: (number|null);
	    star?: (number|null);
	    rewardPoint?: (number|null);
	    seasonId?: (number|null);
	    BattleTimes?: (number|null);
	    BattleWinTimes?: (number|null);
	    eloPoint?: (number|null);
	    winStreak?: (number|null);
	    loseStreak?: (number|null);
	}
}
declare module proto {
	 class DanInfo implements IDanInfo {
	    constructor(properties?: IDanInfo);
	    public danId: number;
	    public star: number;
	    public rewardPoint: number;
	    public seasonId: number;
	    public BattleTimes: number;
	    public BattleWinTimes: number;
	    public eloPoint: number;
	    public winStreak: number;
	    public loseStreak: number;
	    public static create(properties?: IDanInfo): DanInfo;
	    public static encode(message: IDanInfo, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDanInfo, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DanInfo;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DanInfo;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DanInfo;
	    public static toObject(message: DanInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerDan {
	    curDanInfo?: (IDanInfo|null);
	    historyDanInfo?: (IDanInfo[]|null);
	}
}
declare module proto {
	 class GamerDan implements IGamerDan {
	    constructor(properties?: IGamerDan);
	    public curDanInfo?: (IDanInfo|null);
	    public historyDanInfo: IDanInfo[];
	    public static create(properties?: IGamerDan): GamerDan;
	    public static encode(message: IGamerDan, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerDan, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerDan;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerDan;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerDan;
	    public static toObject(message: GamerDan, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerQuest {
	    id?: (number|null);
	    name?: (string|null);
	    N?: (number|null);
	    nowCount?: (number|null);
	    status?: (QuestState|null);
	    acceptTime?: (number|any|null);
	    preCount?: (number|null);
	    type?: (QuestType|null);
	}
}
declare module proto {
	 class GamerQuest implements IGamerQuest {
	    constructor(properties?: IGamerQuest);
	    public id: number;
	    public name: string;
	    public N: number;
	    public nowCount: number;
	    public status: QuestState;
	    public acceptTime: (number|any);
	    public preCount: number;
	    public type: QuestType;
	    public static create(properties?: IGamerQuest): GamerQuest;
	    public static encode(message: IGamerQuest, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerQuest, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerQuest;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerQuest;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerQuest;
	    public static toObject(message: GamerQuest, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IDailyActive {
	    id?: (number|null);
	    active?: (number|null);
	    receiveList?: (number[]|null);
	    calTime?: (number|any|null);
	}
}
declare module proto {
	 class DailyActive implements IDailyActive {
	    constructor(properties?: IDailyActive);
	    public id: number;
	    public active: number;
	    public receiveList: number[];
	    public calTime: (number|any);
	    public static create(properties?: IDailyActive): DailyActive;
	    public static encode(message: IDailyActive, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDailyActive, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyActive;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyActive;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DailyActive;
	    public static toObject(message: DailyActive, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGuide {
	    id?: (number|null);
	    progress?: (number|null);
	    isOver?: (boolean|null);
	}
}
declare module proto {
	 class Guide implements IGuide {
	    constructor(properties?: IGuide);
	    public id: number;
	    public progress: number;
	    public isOver: boolean;
	    public static create(properties?: IGuide): Guide;
	    public static encode(message: IGuide, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGuide, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Guide;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Guide;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Guide;
	    public static toObject(message: Guide, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IItemList {
	    ItemList?: (IGameItem[]|null);
	}
}
declare module proto {
	 class ItemList implements IItemList {
	    constructor(properties?: IItemList);
	    public ItemList: IGameItem[];
	    public static create(properties?: IItemList): ItemList;
	    public static encode(message: IItemList, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IItemList, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemList;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemList;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): ItemList;
	    public static toObject(message: ItemList, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IPersonIdentify {
	    uid?: (string|null);
	    state?: (AuthenticationType|null);
	    birthday?: (string|null);
	    timestamp?: (number|any|null);
	    timeany?: (number|Long|null);
	}
}
declare module proto {
	 class PersonIdentify implements IPersonIdentify {
	    constructor(properties?: IPersonIdentify);
	    public uid: string;
	    public state: AuthenticationType;
	    public birthday: string;
	    public timestamp: (number|any);
	    public timeany: (number|Long);
	    public static create(properties?: IPersonIdentify): PersonIdentify;
	    public static encode(message: IPersonIdentify, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IPersonIdentify, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PersonIdentify;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PersonIdentify;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): PersonIdentify;
	    public static toObject(message: PersonIdentify, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface IGamerSecretLand {
	    id?: (number|null);
	    keyStone?: (number|null);
	    checkPointID?: (number|null);
	    roll?: (number|null);
	    lastRollTime?: (number|any|null);
	    buyTimes?: (number|null);
	    highestLevel?: (number|null);
	    weekHighestLevel?: (number|null);
	    lastTimestamp?: (number|any|null);
	}
}
declare module proto {
	 class GamerSecretLand implements IGamerSecretLand {
	    constructor(properties?: IGamerSecretLand);
	    public id: number;
	    public keyStone: number;
	    public checkPointID: number;
	    public roll: number;
	    public lastRollTime: (number|any);
	    public buyTimes: number;
	    public highestLevel: number;
	    public weekHighestLevel: number;
	    public lastTimestamp: (number|any);
	    public static create(properties?: IGamerSecretLand): GamerSecretLand;
	    public static encode(message: IGamerSecretLand, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGamerSecretLand, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamerSecretLand;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamerSecretLand;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GamerSecretLand;
	    public static toObject(message: GamerSecretLand, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISecretLandReward {
	    timeStamp?: (number|any|null);
	    item?: (IGameItem|null);
	    level?: (number|null);
	    boxKey?: (string|null);
	    rewardID?: (number|null);
	}
}
declare module proto {
	 class SecretLandReward implements ISecretLandReward {
	    constructor(properties?: ISecretLandReward);
	    public timeStamp: (number|any);
	    public item?: (IGameItem|null);
	    public level: number;
	    public boxKey: string;
	    public rewardID: number;
	    public static create(properties?: ISecretLandReward): SecretLandReward;
	    public static encode(message: ISecretLandReward, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISecretLandReward, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SecretLandReward;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SecretLandReward;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SecretLandReward;
	    public static toObject(message: SecretLandReward, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISecretLandAffix {
	    affixList?: (number[]|null);
	    nextAffixList?: (number[]|null);
	    timestamp?: (number|any|null);
	}
}
declare module proto {
	 class SecretLandAffix implements ISecretLandAffix {
	    constructor(properties?: ISecretLandAffix);
	    public affixList: number[];
	    public nextAffixList: number[];
	    public timestamp: (number|any);
	    public static create(properties?: ISecretLandAffix): SecretLandAffix;
	    public static encode(message: ISecretLandAffix, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISecretLandAffix, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SecretLandAffix;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SecretLandAffix;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SecretLandAffix;
	    public static toObject(message: SecretLandAffix, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISecretLandMap {
	    checkpointID?: (number|null);
	    mapChoose?: (number[]|null);
	    timestamp?: (number|any|null);
	}
}
declare module proto {
	 class SecretLandMap implements ISecretLandMap {
	    constructor(properties?: ISecretLandMap);
	    public checkpointID: number;
	    public mapChoose: number[];
	    public timestamp: (number|any);
	    public static create(properties?: ISecretLandMap): SecretLandMap;
	    public static encode(message: ISecretLandMap, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISecretLandMap, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SecretLandMap;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SecretLandMap;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SecretLandMap;
	    public static toObject(message: SecretLandMap, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 interface ISecretLandTreasureBox {
	    no?: (string|null);
	    timeStamp?: (number|any|null);
	    items?: (IGameItem[]|null);
	    gidList?: (number[]|null);
	    rewardID?: (number|null);
	    teamID?: (number|null);
	    receive?: (boolean[]|null);
	    gidMain?: (IGamerMini[]|null);
	}
}
declare module proto {
	 class SecretLandTreasureBox implements ISecretLandTreasureBox {
	    constructor(properties?: ISecretLandTreasureBox);
	    public no: string;
	    public timeStamp: (number|any);
	    public items: IGameItem[];
	    public gidList: number[];
	    public rewardID: number;
	    public teamID: number;
	    public receive: boolean[];
	    public gidMain: IGamerMini[];
	    public static create(properties?: ISecretLandTreasureBox): SecretLandTreasureBox;
	    public static encode(message: ISecretLandTreasureBox, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISecretLandTreasureBox, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SecretLandTreasureBox;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SecretLandTreasureBox;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SecretLandTreasureBox;
	    public static toObject(message: SecretLandTreasureBox, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
declare module proto {
	 enum GamerStatus {
	    Offline = 0,
	    Online = 1,
	    Teaming = 2,
	    Matching = 3,
	    Fighting = 4
	}
}
declare module proto {
	 enum ChatChannel {
	    GamerChat = 0,
	    WorldChat = 1,
	    GuildChat = 2,
	    TeamChat = 3
	}
}
declare module proto {
	 enum MailType {
	    ActivityMail = 0,
	    SysMail = 1,
	    AnnouncementMail = 2,
	    GamerMail = 3
	}
}
declare module proto {
	 enum MailState {
	    MailUnRead = 0,
	    MailRead = 1,
	    MailReceived = 2
	}
}
declare module proto {
	 enum PVPType {
	    MINVALID = 0,
	    PVE_M1 = 1,
	    PVE_M2 = 2,
	    PVE_M3 = 3,
	    PVE_M4 = 4,
	    PVP_M1V1 = 100,
	    PVP_M2V2 = 101,
	    PVP_M3V3 = 102,
	    PVP_M4V4 = 103,
	    PVP_M5V5 = 104
	}
}
declare module proto {
	 enum ItemType {
	    other = 0,
	    gold = 1,
	    boundGold = 2,
	    silver = 3,
	    draugItem = 4,
	    equipment = 5,
	    heroItem = 6,
	    heroExpItem = 7,
	    exp = 8,
	    power = 9,
	    gift = 10,
	    heroPieces = 11
	}
}
declare module proto {
	 enum TaskState {
	    CannotAccept = 0,
	    CanAccept = 1,
	    Doing = 2,
	    Complete = 3,
	    TaskFinish = 4
	}
}
declare module proto {
	 enum GashaponType {
	    GashaponTypeInvalid = 0,
	    GeneralGashapon = 1,
	    AdvancedGashapon = 2,
	    ItemGashapon = 3
	}
}
declare module proto {
	 enum ShopType {
	    ShopType_None = 0,
	    currency = 1,
	    fashion = 2,
	    guild = 3,
	    hero = 4,
	    honor = 5,
	    limit = 6,
	    draugShop = 7
	}
}
declare module proto {
	 enum QualityType {
	    QualityType_None = 0,
	    white = 1,
	    green = 2,
	    blue = 3,
	    purple = 4,
	    orange = 5
	}
}
declare module proto {
	 enum CheckPointType {
	    CheckPointType_None = 0,
	    Story = 1,
	    Elite = 2,
	    Devil = 3,
	    SecretBook = 4,
	    SecretLand = 5
	}
}
declare module proto {
	 enum InviteType {
	    NullType = 0,
	    Friend = 1,
	    Reject = 2,
	    Wait = 3,
	    Kick = 4,
	    Military = 5
	}
}
declare module proto {
	 enum InviteCDType {
	    InviteTypeCD = 0,
	    RejectTypeCD = 1
	}
}
declare module proto {
	 enum TeamStatus {
	    TeamState_None = 0,
	    Normal = 1,
	    InMatching = 2
	}
}
declare module proto {
	 enum PropEffectModule {
	    AllModule = 0,
	    HeroModule = 1,
	    DraugModule = 2,
	    RubyModule = 3,
	    EquipmentModule = 4
	}
}
declare module proto {
	 enum BattleResultType {
	    Invalid = 0,
	    TotalWin = 1,
	    NarrowlyWin = 2,
	    Draw = 3,
	    NarrowlyLoss = 4,
	    TotalLoss = 5,
	    Exit = 6
	}
}
declare module proto {
	 enum RankType {
	    RankType_None = 0,
	    Total = 1,
	    Server = 2,
	    HallOfFame = 3
	}
}
declare module proto {
	 enum BattleStarType {
	    BattleStarType_None = 0,
	    Pass = 1,
	    HP = 2,
	    Time = 4
	}
}
declare module proto {
	 enum BackpackAction {
	    BackpackAction_None = 0,
	    CanSell = 1,
	    CanUse = 2,
	    CanSplit = 3
	}
}
declare module proto {
	 enum QuestType {
	    QuestType_None = 0,
	    GrowQuest = 1,
	    DailyQuest = 2,
	    AchievementQuest = 3,
	    RankDailyQuest = 4,
	    RankWeekQuest = 5
	}
}
declare module proto {
	 enum QuestState {
	    QuestLocked = 0,
	    QuestTacked = 1,
	    QuestComplete = 2,
	    QuestFinished = 3
	}
}
declare module proto {
	 enum HeroQuality {
	    HeroQuality_None = 0,
	    HeroQuality_A = 1,
	    HeroQuality_S = 2
	}
}
declare module proto {
	 enum HeroType {
	    HeroType_All = 0,
	    HeroType_Mechs = 1,
	    HeroType_Warrior = 2,
	    HeroType_Wise = 3,
	    HeroType_Assassin = 4,
	    HeroType_shooter = 5
	}
}
declare module proto {
	 enum AuthenticationType {
	    NotCertified = 0,
	    Failed = 1,
	    Adult = 2,
	    Underage = 3
	}
}
declare module proto {
	 enum SLBattleResultType {
	    None = 0,
	    ActiveExit = 1,
	    NotPass = 2,
	    PassTimeOne = 3,
	    PassTimeTwo = 4,
	    PassTimeThree = 5,
	    PassOutOfTime = 6
	}
}
declare module proto {
	 enum NoticeType {
	    NoticeType_horseLamp = 0
	}
}
declare module proto {
	 interface IS2C {
	    error?: (number|null);
	    key?: (string|null);
	    gamerLoginS2C?: (IGamerLoginS2C|null);
	    gamerLoginGetDataS2C?: (IGamerLoginGetDataS2C|null);
	    serverTimeS2C?: (IServerTimeS2C|null);
	    gamerNotifyLoginOtherS2C?: (IGamerNotifyLoginOtherS2C|null);
	    gamerSubChatChannelS2C?: (IGamerSubChatChannelS2C|null);
	    gamerChangeNameS2C?: (IGamerChangeNameS2C|null);
	    gamerChangeAvatarS2C?: (IGamerChangeAvatarS2C|null);
	    gamerNotifyExpLevelS2C?: (IGamerNotifyExpLevelS2C|null);
	    gamerGetBackpackS2C?: (IGamerGetBackpackS2C|null);
	    gamerNotifyItemChangeS2C?: (IGamerNotifyItemChangeS2C|null);
	    gamerSellItemS2C?: (IGamerSellItemS2C|null);
	    gamerUseItemS2C?: (IGamerUseItemS2C|null);
	    gamerFriendChatS2C?: (IGamerFriendChatS2C|null);
	    gamerWorldChatS2C?: (IGamerWorldChatS2C|null);
	    gamerTestChatS2C?: (IGamerTestChatS2C|null);
	    gamerClubRequestS2C?: (IGamerClubRequestS2C|null);
	    gamerNotifyNewChatS2C?: (IGamerNotifyNewChatS2C|null);
	    gamerNewFriendReqS2C?: (IGamerNewFriendReqS2C|null);
	    gamerDelFriendS2C?: (IGamerDelFriendS2C|null);
	    gamerNotifyNewFriendReqS2C?: (IGamerNotifyNewFriendReqS2C|null);
	    gamerProcessFriendReqS2C?: (IGamerProcessFriendReqS2C|null);
	    gamerNotifyNewFriendS2C?: (IGamerNotifyNewFriendS2C|null);
	    gamerNotifyDelFriendS2C?: (IGamerNotifyDelFriendS2C|null);
	    gamerNotifyNoticeS2C?: (IGamerNotifyNoticeS2C|null);
	    gamerNotifyMailS2C?: (IGamerNotifyMailS2C|null);
	    gamerNotifyNewMailS2C?: (IGamerNotifyNewMailS2C|null);
	    gamerGetMailS2C?: (IGamerGetMailS2C|null);
	    gamerDelMailS2C?: (IGamerDelMailS2C|null);
	    gamerDelHaveReadMailS2C?: (IGamerDelHaveReadMailS2C|null);
	    gamerOneKeyRcvMailRewardS2C?: (IGamerOneKeyRcvMailRewardS2C|null);
	    gamerChangeMailStateS2C?: (IGamerChangeMailStateS2C|null);
	    gamerNewHeroS2C?: (IGamerNewHeroS2C|null);
	    gamerUpgradeHeroS2C?: (IGamerUpgradeHeroS2C|null);
	    gamerUseHeroMedicineS2C?: (IGamerUseHeroMedicineS2C|null);
	    gamerUpStarHeroS2C?: (IGamerUpStarHeroS2C|null);
	    gamerUpHeroSkillS2C?: (IGamerUpHeroSkillS2C|null);
	    gamerGetHeroS2C?: (IGamerGetHeroS2C|null);
	    gamerNotifyHerosChangeS2C?: (IGamerNotifyHerosChangeS2C|null);
	    gamerNotifyHeroPropUpdateS2C?: (IGamerNotifyHeroPropUpdateS2C|null);
	    gamerPVPLoadingS2C?: (IGamerPVPLoadingS2C|null);
	    gamerNotifyPVPLoadingS2C?: (IGamerNotifyPVPLoadingS2C|null);
	    gamerPVPSyncS2C?: (IGamerPVPSyncS2C|null);
	    gamerNotifyGamerMiniS2C?: (IGamerNotifyGamerMiniS2C|null);
	    gamerNotifyPVPSyncS2C?: (IGamerNotifyPVPSyncS2C|null);
	    gamerNotifyNewPVPResultS2C?: (IGamerNotifyNewPVPResultS2C|null);
	    gamerReliveS2C?: (IGamerReliveS2C|null);
	    gamerNotifyIconChangeS2C?: (IGamerNotifyIconChangeS2C|null);
	    gamerNotifyDiamonChangeS2C?: (IGamerNotifyDiamonChangeS2C|null);
	    gamerNotifyEnergyChangeS2C?: (IGamerNotifyEnergyChangeS2C|null);
	    gamerNotifyExpChangeS2C?: (IGamerNotifyExpChangeS2C|null);
	    gamerGetRealTimeRankS2C?: (IGamerGetRealTimeRankS2C|null);
	    gamerCheckPVPBattleS2C?: (IGamerCheckPVPBattleS2C|null);
	    gamerUploadWXInfoS2C?: (IGamerUploadWXInfoS2C|null);
	    gamerGetNoviceGuideS2C?: (IGamerGetNoviceGuideS2C|null);
	    gamerNoviceGuideChangeS2C?: (IGamerNoviceGuideChangeS2C|null);
	    gamerMatchS2C?: (IGamerMatchS2C|null);
	    gamerCancelMatchS2C?: (IGamerCancelMatchS2C|null);
	    gamerNotifyMatchInfoS2C?: (IGamerNotifyMatchInfoS2C|null);
	    gamerGetRewardS2C?: (IGamerGetRewardS2C|null);
	    gamerUseIconS2C?: (IGamerUseIconS2C|null);
	    gamerNotifyGashaponInfoS2C?: (IGamerNotifyGashaponInfoS2C|null);
	    gamerExtractGashaponS2C?: (IGamerExtractGashaponS2C|null);
	    gamerGetGashaponPreviewS2C?: (IGamerGetGashaponPreviewS2C|null);
	    gamerNotifyActivitiesS2C?: (IGamerNotifyActivitiesS2C|null);
	    getActivityRewardS2C?: (IGetActivityRewardS2C|null);
	    createGuildS2C?: (ICreateGuildS2C|null);
	    guildGamerLoginS2C?: (IGuildGamerLoginS2C|null);
	    guildGamerLoginoutS2C?: (IGuildGamerLoginoutS2C|null);
	    dissolutionGuildS2C?: (IDissolutionGuildS2C|null);
	    getGuildS2C?: (IGetGuildS2C|null);
	    getGuildListS2C?: (IGetGuildListS2C|null);
	    gamerNotifyApplyJoinGuildS2C?: (IGamerNotifyApplyJoinGuildS2C|null);
	    applyJoinGuildS2C?: (IApplyJoinGuildS2C|null);
	    approvalJoinGuildS2C?: (IApprovalJoinGuildS2C|null);
	    gamerNotifyInviteJoinGuildS2C?: (IGamerNotifyInviteJoinGuildS2C|null);
	    inviteJoinGuildS2C?: (IInviteJoinGuildS2C|null);
	    agreeJoinGuildS2C?: (IAgreeJoinGuildS2C|null);
	    quitGuildS2C?: (IQuitGuildS2C|null);
	    kickOutGuildS2C?: (IKickOutGuildS2C|null);
	    gamerNotifyGuildMemUpdateS2C?: (IGamerNotifyGuildMemUpdateS2C|null);
	    guildChatS2C?: (IGuildChatS2C|null);
	    gamerNotifyGuildChatS2C?: (IGamerNotifyGuildChatS2C|null);
	    gMS2C?: (IGMS2C|null);
	    checkPointListS2C?: (ICheckPointListS2C|null);
	    gamerNotifyCheckPointListS2C?: (IGamerNotifyCheckPointListS2C|null);
	    gamerNotifyNewCheckPointListS2C?: (IGamerNotifyNewCheckPointListS2C|null);
	    gamerNotifyRewardS2C?: (IGamerNotifyRewardS2C|null);
	    getPlotStarRewardS2C?: (IGetPlotStarRewardS2C|null);
	    buyTimesCheckPointS2C?: (IBuyTimesCheckPointS2C|null);
	    sweepCheckPointS2C?: (ISweepCheckPointS2C|null);
	    gamerSettlePVES2C?: (IGamerSettlePVES2C|null);
	    draugListS2C?: (IDraugListS2C|null);
	    awakenDraugS2C?: (IAwakenDraugS2C|null);
	    putDraugIntoPackS2C?: (IPutDraugIntoPackS2C|null);
	    swallowDraugS2C?: (ISwallowDraugS2C|null);
	    decomposeDraugS2C?: (IDecomposeDraugS2C|null);
	    lockDraugS2C?: (ILockDraugS2C|null);
	    wearDraugS2C?: (IWearDraugS2C|null);
	    unwearDraugS2C?: (IUnwearDraugS2C|null);
	    draugSelectHeroS2C?: (IDraugSelectHeroS2C|null);
	    heroGroupListS2C?: (IHeroGroupListS2C|null);
	    unlockHeroGroupS2C?: (IUnlockHeroGroupS2C|null);
	    changeNameHeroGroupS2C?: (IChangeNameHeroGroupS2C|null);
	    gamerNotifyUnlockPosHeroGroupS2C?: (IGamerNotifyUnlockPosHeroGroupS2C|null);
	    heroGroupChangeHeroS2C?: (IHeroGroupChangeHeroS2C|null);
	    heroGroupChangeSkillS2C?: (IHeroGroupChangeSkillS2C|null);
	    buyFatigueS2C?: (IBuyFatigueS2C|null);
	    getFatigueWelfareS2C?: (IGetFatigueWelfareS2C|null);
	    gamerNotifyFatigueS2C?: (IGamerNotifyFatigueS2C|null);
	    upStarEquipS2C?: (IUpStarEquipS2C|null);
	    eatEquipsS2C?: (IEatEquipsS2C|null);
	    desEquipS2C?: (IDesEquipS2C|null);
	    takeOnEquipS2C?: (ITakeOnEquipS2C|null);
	    takeOffEquipS2C?: (ITakeOffEquipS2C|null);
	    redSpotS2C?: (IRedSpotS2C|null);
	    makeTeamS2C?: (IMakeTeamS2C|null);
	    setTeamAimS2C?: (ISetTeamAimS2C|null);
	    joinTeamS2C?: (IJoinTeamS2C|null);
	    exitTeamS2C?: (IExitTeamS2C|null);
	    turnOverTeamLeaderS2C?: (ITurnOverTeamLeaderS2C|null);
	    inviteTeamS2C?: (IInviteTeamS2C|null);
	    rejectTeamS2C?: (IRejectTeamS2C|null);
	    gamerNotifyTeamS2C?: (IGamerNotifyTeamS2C|null);
	    gamerNotifyTeamInfoS2C?: (IGamerNotifyTeamInfoS2C|null);
	    gamerNotifyTeamChangeS2C?: (IGamerNotifyTeamChangeS2C|null);
	    gamerNotifyTeamMemberChangeS2C?: (IGamerNotifyTeamMemberChangeS2C|null);
	    gamerNotifyLeaveTeamS2C?: (IGamerNotifyLeaveTeamS2C|null);
	    kickTeamS2C?: (IKickTeamS2C|null);
	    setTeamHelpS2C?: (ISetTeamHelpS2C|null);
	    setTeamHeroS2C?: (ISetTeamHeroS2C|null);
	    switchTeamReadyS2C?: (ISwitchTeamReadyS2C|null);
	    gamerNotifyTeamReadyS2C?: (IGamerNotifyTeamReadyS2C|null);
	    teamBattleS2C?: (ITeamBattleS2C|null);
	    getDanInfoS2C?: (IGetDanInfoS2C|null);
	    gamerNotifyDanInfoS2C?: (IGamerNotifyDanInfoS2C|null);
	    gamerNotifyNewSeasonS2C?: (IGamerNotifyNewSeasonS2C|null);
	    getDuelRankS2C?: (IGetDuelRankS2C|null);
	    sysListS2C?: (ISysListS2C|null);
	    sysOpenShowS2C?: (ISysOpenShowS2C|null);
	    getQuestsS2C?: (IGetQuestsS2C|null);
	    gamerNotifyQuestsS2C?: (IGamerNotifyQuestsS2C|null);
	    getQuestRewardS2C?: (IGetQuestRewardS2C|null);
	    getDailyQuestRewardS2C?: (IGetDailyQuestRewardS2C|null);
	    gamerHeroImageChooseS2C?: (IGamerHeroImageChooseS2C|null);
	    gamerHeroImageChangeS2C?: (IGamerHeroImageChangeS2C|null);
	    gamerBuyRollS2C?: (IGamerBuyRollS2C|null);
	    getGamerSecretLandS2C?: (IGetGamerSecretLandS2C|null);
	    gamerNotifyGamerSecretLandInfoS2C?: (IGamerNotifyGamerSecretLandInfoS2C|null);
	    gamerNotifySecretLandInfoS2C?: (IGamerNotifySecretLandInfoS2C|null);
	    gamerSecretLandBattleRewardS2C?: (IGamerSecretLandBattleRewardS2C|null);
	    gamerSecretLandWeekRewardS2C?: (IGamerSecretLandWeekRewardS2C|null);
	    gamerSecretLandRankS2C?: (IGamerSecretLandRankS2C|null);
	    getGamerSecretLandInfoS2C?: (IGetGamerSecretLandInfoS2C|null);
	    gamerNotifySLTreasureBoxS2C?: (IGamerNotifySLTreasureBoxS2C|null);
	    gamerNotifyNewSecretLandResultS2C?: (IGamerNotifyNewSecretLandResultS2C|null);
	    gamerChangeItemIsSawS2C?: (IGamerChangeItemIsSawS2C|null);
	}
}
declare module proto {
	 class S2C implements IS2C {
	    constructor(properties?: IS2C);
	    public error: number;
	    public key: string;
	    public gamerLoginS2C?: (IGamerLoginS2C|null);
	    public gamerLoginGetDataS2C?: (IGamerLoginGetDataS2C|null);
	    public serverTimeS2C?: (IServerTimeS2C|null);
	    public gamerNotifyLoginOtherS2C?: (IGamerNotifyLoginOtherS2C|null);
	    public gamerSubChatChannelS2C?: (IGamerSubChatChannelS2C|null);
	    public gamerChangeNameS2C?: (IGamerChangeNameS2C|null);
	    public gamerChangeAvatarS2C?: (IGamerChangeAvatarS2C|null);
	    public gamerNotifyExpLevelS2C?: (IGamerNotifyExpLevelS2C|null);
	    public gamerGetBackpackS2C?: (IGamerGetBackpackS2C|null);
	    public gamerNotifyItemChangeS2C?: (IGamerNotifyItemChangeS2C|null);
	    public gamerSellItemS2C?: (IGamerSellItemS2C|null);
	    public gamerUseItemS2C?: (IGamerUseItemS2C|null);
	    public gamerFriendChatS2C?: (IGamerFriendChatS2C|null);
	    public gamerWorldChatS2C?: (IGamerWorldChatS2C|null);
	    public gamerTestChatS2C?: (IGamerTestChatS2C|null);
	    public gamerClubRequestS2C?: (IGamerClubRequestS2C|null);
	    public gamerNotifyNewChatS2C?: (IGamerNotifyNewChatS2C|null);
	    public gamerNewFriendReqS2C?: (IGamerNewFriendReqS2C|null);
	    public gamerDelFriendS2C?: (IGamerDelFriendS2C|null);
	    public gamerNotifyNewFriendReqS2C?: (IGamerNotifyNewFriendReqS2C|null);
	    public gamerProcessFriendReqS2C?: (IGamerProcessFriendReqS2C|null);
	    public gamerNotifyNewFriendS2C?: (IGamerNotifyNewFriendS2C|null);
	    public gamerNotifyDelFriendS2C?: (IGamerNotifyDelFriendS2C|null);
	    public gamerNotifyNoticeS2C?: (IGamerNotifyNoticeS2C|null);
	    public gamerNotifyMailS2C?: (IGamerNotifyMailS2C|null);
	    public gamerNotifyNewMailS2C?: (IGamerNotifyNewMailS2C|null);
	    public gamerGetMailS2C?: (IGamerGetMailS2C|null);
	    public gamerDelMailS2C?: (IGamerDelMailS2C|null);
	    public gamerDelHaveReadMailS2C?: (IGamerDelHaveReadMailS2C|null);
	    public gamerOneKeyRcvMailRewardS2C?: (IGamerOneKeyRcvMailRewardS2C|null);
	    public gamerChangeMailStateS2C?: (IGamerChangeMailStateS2C|null);
	    public gamerNewHeroS2C?: (IGamerNewHeroS2C|null);
	    public gamerUpgradeHeroS2C?: (IGamerUpgradeHeroS2C|null);
	    public gamerUseHeroMedicineS2C?: (IGamerUseHeroMedicineS2C|null);
	    public gamerUpStarHeroS2C?: (IGamerUpStarHeroS2C|null);
	    public gamerUpHeroSkillS2C?: (IGamerUpHeroSkillS2C|null);
	    public gamerGetHeroS2C?: (IGamerGetHeroS2C|null);
	    public gamerNotifyHerosChangeS2C?: (IGamerNotifyHerosChangeS2C|null);
	    public gamerNotifyHeroPropUpdateS2C?: (IGamerNotifyHeroPropUpdateS2C|null);
	    public gamerPVPLoadingS2C?: (IGamerPVPLoadingS2C|null);
	    public gamerNotifyPVPLoadingS2C?: (IGamerNotifyPVPLoadingS2C|null);
	    public gamerPVPSyncS2C?: (IGamerPVPSyncS2C|null);
	    public gamerNotifyGamerMiniS2C?: (IGamerNotifyGamerMiniS2C|null);
	    public gamerNotifyPVPSyncS2C?: (IGamerNotifyPVPSyncS2C|null);
	    public gamerNotifyNewPVPResultS2C?: (IGamerNotifyNewPVPResultS2C|null);
	    public gamerReliveS2C?: (IGamerReliveS2C|null);
	    public gamerNotifyIconChangeS2C?: (IGamerNotifyIconChangeS2C|null);
	    public gamerNotifyDiamonChangeS2C?: (IGamerNotifyDiamonChangeS2C|null);
	    public gamerNotifyEnergyChangeS2C?: (IGamerNotifyEnergyChangeS2C|null);
	    public gamerNotifyExpChangeS2C?: (IGamerNotifyExpChangeS2C|null);
	    public gamerGetRealTimeRankS2C?: (IGamerGetRealTimeRankS2C|null);
	    public gamerCheckPVPBattleS2C?: (IGamerCheckPVPBattleS2C|null);
	    public gamerUploadWXInfoS2C?: (IGamerUploadWXInfoS2C|null);
	    public gamerGetNoviceGuideS2C?: (IGamerGetNoviceGuideS2C|null);
	    public gamerNoviceGuideChangeS2C?: (IGamerNoviceGuideChangeS2C|null);
	    public gamerMatchS2C?: (IGamerMatchS2C|null);
	    public gamerCancelMatchS2C?: (IGamerCancelMatchS2C|null);
	    public gamerNotifyMatchInfoS2C?: (IGamerNotifyMatchInfoS2C|null);
	    public gamerGetRewardS2C?: (IGamerGetRewardS2C|null);
	    public gamerUseIconS2C?: (IGamerUseIconS2C|null);
	    public gamerNotifyGashaponInfoS2C?: (IGamerNotifyGashaponInfoS2C|null);
	    public gamerExtractGashaponS2C?: (IGamerExtractGashaponS2C|null);
	    public gamerGetGashaponPreviewS2C?: (IGamerGetGashaponPreviewS2C|null);
	    public gamerNotifyActivitiesS2C?: (IGamerNotifyActivitiesS2C|null);
	    public getActivityRewardS2C?: (IGetActivityRewardS2C|null);
	    public createGuildS2C?: (ICreateGuildS2C|null);
	    public guildGamerLoginS2C?: (IGuildGamerLoginS2C|null);
	    public guildGamerLoginoutS2C?: (IGuildGamerLoginoutS2C|null);
	    public dissolutionGuildS2C?: (IDissolutionGuildS2C|null);
	    public getGuildS2C?: (IGetGuildS2C|null);
	    public getGuildListS2C?: (IGetGuildListS2C|null);
	    public gamerNotifyApplyJoinGuildS2C?: (IGamerNotifyApplyJoinGuildS2C|null);
	    public applyJoinGuildS2C?: (IApplyJoinGuildS2C|null);
	    public approvalJoinGuildS2C?: (IApprovalJoinGuildS2C|null);
	    public gamerNotifyInviteJoinGuildS2C?: (IGamerNotifyInviteJoinGuildS2C|null);
	    public inviteJoinGuildS2C?: (IInviteJoinGuildS2C|null);
	    public agreeJoinGuildS2C?: (IAgreeJoinGuildS2C|null);
	    public quitGuildS2C?: (IQuitGuildS2C|null);
	    public kickOutGuildS2C?: (IKickOutGuildS2C|null);
	    public gamerNotifyGuildMemUpdateS2C?: (IGamerNotifyGuildMemUpdateS2C|null);
	    public guildChatS2C?: (IGuildChatS2C|null);
	    public gamerNotifyGuildChatS2C?: (IGamerNotifyGuildChatS2C|null);
	    public gMS2C?: (IGMS2C|null);
	    public checkPointListS2C?: (ICheckPointListS2C|null);
	    public gamerNotifyCheckPointListS2C?: (IGamerNotifyCheckPointListS2C|null);
	    public gamerNotifyNewCheckPointListS2C?: (IGamerNotifyNewCheckPointListS2C|null);
	    public gamerNotifyRewardS2C?: (IGamerNotifyRewardS2C|null);
	    public getPlotStarRewardS2C?: (IGetPlotStarRewardS2C|null);
	    public buyTimesCheckPointS2C?: (IBuyTimesCheckPointS2C|null);
	    public sweepCheckPointS2C?: (ISweepCheckPointS2C|null);
	    public gamerSettlePVES2C?: (IGamerSettlePVES2C|null);
	    public draugListS2C?: (IDraugListS2C|null);
	    public awakenDraugS2C?: (IAwakenDraugS2C|null);
	    public putDraugIntoPackS2C?: (IPutDraugIntoPackS2C|null);
	    public swallowDraugS2C?: (ISwallowDraugS2C|null);
	    public decomposeDraugS2C?: (IDecomposeDraugS2C|null);
	    public lockDraugS2C?: (ILockDraugS2C|null);
	    public wearDraugS2C?: (IWearDraugS2C|null);
	    public unwearDraugS2C?: (IUnwearDraugS2C|null);
	    public draugSelectHeroS2C?: (IDraugSelectHeroS2C|null);
	    public heroGroupListS2C?: (IHeroGroupListS2C|null);
	    public unlockHeroGroupS2C?: (IUnlockHeroGroupS2C|null);
	    public changeNameHeroGroupS2C?: (IChangeNameHeroGroupS2C|null);
	    public gamerNotifyUnlockPosHeroGroupS2C?: (IGamerNotifyUnlockPosHeroGroupS2C|null);
	    public heroGroupChangeHeroS2C?: (IHeroGroupChangeHeroS2C|null);
	    public heroGroupChangeSkillS2C?: (IHeroGroupChangeSkillS2C|null);
	    public buyFatigueS2C?: (IBuyFatigueS2C|null);
	    public getFatigueWelfareS2C?: (IGetFatigueWelfareS2C|null);
	    public gamerNotifyFatigueS2C?: (IGamerNotifyFatigueS2C|null);
	    public upStarEquipS2C?: (IUpStarEquipS2C|null);
	    public eatEquipsS2C?: (IEatEquipsS2C|null);
	    public desEquipS2C?: (IDesEquipS2C|null);
	    public takeOnEquipS2C?: (ITakeOnEquipS2C|null);
	    public takeOffEquipS2C?: (ITakeOffEquipS2C|null);
	    public redSpotS2C?: (IRedSpotS2C|null);
	    public makeTeamS2C?: (IMakeTeamS2C|null);
	    public setTeamAimS2C?: (ISetTeamAimS2C|null);
	    public joinTeamS2C?: (IJoinTeamS2C|null);
	    public exitTeamS2C?: (IExitTeamS2C|null);
	    public turnOverTeamLeaderS2C?: (ITurnOverTeamLeaderS2C|null);
	    public inviteTeamS2C?: (IInviteTeamS2C|null);
	    public rejectTeamS2C?: (IRejectTeamS2C|null);
	    public gamerNotifyTeamS2C?: (IGamerNotifyTeamS2C|null);
	    public gamerNotifyTeamInfoS2C?: (IGamerNotifyTeamInfoS2C|null);
	    public gamerNotifyTeamChangeS2C?: (IGamerNotifyTeamChangeS2C|null);
	    public gamerNotifyTeamMemberChangeS2C?: (IGamerNotifyTeamMemberChangeS2C|null);
	    public gamerNotifyLeaveTeamS2C?: (IGamerNotifyLeaveTeamS2C|null);
	    public kickTeamS2C?: (IKickTeamS2C|null);
	    public setTeamHelpS2C?: (ISetTeamHelpS2C|null);
	    public setTeamHeroS2C?: (ISetTeamHeroS2C|null);
	    public switchTeamReadyS2C?: (ISwitchTeamReadyS2C|null);
	    public gamerNotifyTeamReadyS2C?: (IGamerNotifyTeamReadyS2C|null);
	    public teamBattleS2C?: (ITeamBattleS2C|null);
	    public getDanInfoS2C?: (IGetDanInfoS2C|null);
	    public gamerNotifyDanInfoS2C?: (IGamerNotifyDanInfoS2C|null);
	    public gamerNotifyNewSeasonS2C?: (IGamerNotifyNewSeasonS2C|null);
	    public getDuelRankS2C?: (IGetDuelRankS2C|null);
	    public sysListS2C?: (ISysListS2C|null);
	    public sysOpenShowS2C?: (ISysOpenShowS2C|null);
	    public getQuestsS2C?: (IGetQuestsS2C|null);
	    public gamerNotifyQuestsS2C?: (IGamerNotifyQuestsS2C|null);
	    public getQuestRewardS2C?: (IGetQuestRewardS2C|null);
	    public getDailyQuestRewardS2C?: (IGetDailyQuestRewardS2C|null);
	    public gamerHeroImageChooseS2C?: (IGamerHeroImageChooseS2C|null);
	    public gamerHeroImageChangeS2C?: (IGamerHeroImageChangeS2C|null);
	    public gamerBuyRollS2C?: (IGamerBuyRollS2C|null);
	    public getGamerSecretLandS2C?: (IGetGamerSecretLandS2C|null);
	    public gamerNotifyGamerSecretLandInfoS2C?: (IGamerNotifyGamerSecretLandInfoS2C|null);
	    public gamerNotifySecretLandInfoS2C?: (IGamerNotifySecretLandInfoS2C|null);
	    public gamerSecretLandBattleRewardS2C?: (IGamerSecretLandBattleRewardS2C|null);
	    public gamerSecretLandWeekRewardS2C?: (IGamerSecretLandWeekRewardS2C|null);
	    public gamerSecretLandRankS2C?: (IGamerSecretLandRankS2C|null);
	    public getGamerSecretLandInfoS2C?: (IGetGamerSecretLandInfoS2C|null);
	    public gamerNotifySLTreasureBoxS2C?: (IGamerNotifySLTreasureBoxS2C|null);
	    public gamerNotifyNewSecretLandResultS2C?: (IGamerNotifyNewSecretLandResultS2C|null);
	    public gamerChangeItemIsSawS2C?: (IGamerChangeItemIsSawS2C|null);
	    public static create(properties?: IS2C): S2C;
	    public static encode(message: IS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IS2C, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): S2C;
	    public static toObject(message: S2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}