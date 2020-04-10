import GamerLoginS2C = proto.GamerLoginS2C;
import GamerLoginGetDataS2C = proto.GamerLoginGetDataS2C;
import ServerTimeS2C = proto.ServerTimeS2C;
import GamerSubChatChannelS2C = proto.GamerSubChatChannelS2C;
import GamerChangeNameS2C = proto.GamerChangeNameS2C;
import GamerChangeAvatarS2C = proto.GamerChangeAvatarS2C;
import GamerGetBackpackS2C = proto.GamerGetBackpackS2C;
import GamerSellItemS2C = proto.GamerSellItemS2C;
import GamerUseItemS2C = proto.GamerUseItemS2C;
import GamerFriendChatS2C = proto.GamerFriendChatS2C;
import GamerWorldChatS2C = proto.GamerWorldChatS2C;
import GamerTestChatS2C = proto.GamerTestChatS2C;
import GamerClubRequestS2C = proto.GamerClubRequestS2C;
import GamerNewFriendReqS2C = proto.GamerNewFriendReqS2C;
import GamerDelFriendS2C = proto.GamerDelFriendS2C;
import GamerProcessFriendReqS2C = proto.GamerProcessFriendReqS2C;
import GamerGetMailS2C = proto.GamerGetMailS2C;
import GamerDelMailS2C = proto.GamerDelMailS2C;
import GamerDelHaveReadMailS2C = proto.GamerDelHaveReadMailS2C;
import GamerOneKeyRcvMailRewardS2C = proto.GamerOneKeyRcvMailRewardS2C;
import GamerChangeMailStateS2C = proto.GamerChangeMailStateS2C;
import MailState = proto.MailState;
import GamerNewHeroS2C = proto.GamerNewHeroS2C;
import GamerUpgradeHeroS2C = proto.GamerUpgradeHeroS2C;
import GamerUseHeroMedicineS2C = proto.GamerUseHeroMedicineS2C;
import GamerUpStarHeroS2C = proto.GamerUpStarHeroS2C;
import GamerUpHeroSkillS2C = proto.GamerUpHeroSkillS2C;
import GamerGetHeroS2C = proto.GamerGetHeroS2C;
import GamerPVPLoadingS2C = proto.GamerPVPLoadingS2C;
import GamerPVPSyncS2C = proto.GamerPVPSyncS2C;
import PVPInput = proto.PVPInput;
import PVPResult = proto.PVPResult;
import GamerReliveS2C = proto.GamerReliveS2C;
import GamerGetRealTimeRankS2C = proto.GamerGetRealTimeRankS2C;
import GamerCheckPVPBattleS2C = proto.GamerCheckPVPBattleS2C;
import GamerUploadWXInfoS2C = proto.GamerUploadWXInfoS2C;
import WXInfo = proto.WXInfo;
import GamerGetNoviceGuideS2C = proto.GamerGetNoviceGuideS2C;
import GamerNoviceGuideChangeS2C = proto.GamerNoviceGuideChangeS2C;
import Guide = proto.Guide;
import GamerMatchS2C = proto.GamerMatchS2C;
import PVPType = proto.PVPType;
import DanInfo = proto.DanInfo;
import GamerHero = proto.GamerHero;
import GamerSecretLand = proto.GamerSecretLand;
import GamerCancelMatchS2C = proto.GamerCancelMatchS2C;
import GamerGetRewardS2C = proto.GamerGetRewardS2C;
import GamerUseIconS2C = proto.GamerUseIconS2C;
import GamerExtractGashaponS2C = proto.GamerExtractGashaponS2C;
import GamerGetGashaponPreviewS2C = proto.GamerGetGashaponPreviewS2C;
import GetActivityRewardS2C = proto.GetActivityRewardS2C;
import CreateGuildS2C = proto.CreateGuildS2C;
import GuildGamerLoginS2C = proto.GuildGamerLoginS2C;
import GuildGamerLoginoutS2C = proto.GuildGamerLoginoutS2C;
import DissolutionGuildS2C = proto.DissolutionGuildS2C;
import GetGuildS2C = proto.GetGuildS2C;
import GetGuildListS2C = proto.GetGuildListS2C;
import ApplyJoinGuildS2C = proto.ApplyJoinGuildS2C;
import ApprovalJoinGuildS2C = proto.ApprovalJoinGuildS2C;
import InviteJoinGuildS2C = proto.InviteJoinGuildS2C;
import AgreeJoinGuildS2C = proto.AgreeJoinGuildS2C;
import QuitGuildS2C = proto.QuitGuildS2C;
import KickOutGuildS2C = proto.KickOutGuildS2C;
import GuildChatS2C = proto.GuildChatS2C;
import GMS2C = proto.GMS2C;
import CheckPointListS2C = proto.CheckPointListS2C;
import GetPlotStarRewardS2C = proto.GetPlotStarRewardS2C;
import BuyTimesCheckPointS2C = proto.BuyTimesCheckPointS2C;
import CheckPointType = proto.CheckPointType;
import SweepCheckPointS2C = proto.SweepCheckPointS2C;
import GamerSettlePVES2C = proto.GamerSettlePVES2C;
import HeroStatus = proto.HeroStatus;
import DraugListS2C = proto.DraugListS2C;
import AwakenDraugS2C = proto.AwakenDraugS2C;
import PutDraugIntoPackS2C = proto.PutDraugIntoPackS2C;
import SwallowDraugS2C = proto.SwallowDraugS2C;
import DecomposeDraugS2C = proto.DecomposeDraugS2C;
import LockDraugS2C = proto.LockDraugS2C;
import WearDraugS2C = proto.WearDraugS2C;
import UnwearDraugS2C = proto.UnwearDraugS2C;
import DraugSelectHeroS2C = proto.DraugSelectHeroS2C;
import HeroGroupListS2C = proto.HeroGroupListS2C;
import UnlockHeroGroupS2C = proto.UnlockHeroGroupS2C;
import ChangeNameHeroGroupS2C = proto.ChangeNameHeroGroupS2C;
import HeroGroupChangeHeroS2C = proto.HeroGroupChangeHeroS2C;
import HeroGroupChangeSkillS2C = proto.HeroGroupChangeSkillS2C;
import BuyFatigueS2C = proto.BuyFatigueS2C;
import GetFatigueWelfareS2C = proto.GetFatigueWelfareS2C;
import UpStarEquipS2C = proto.UpStarEquipS2C;
import EatEquipsS2C = proto.EatEquipsS2C;
import DesEquipS2C = proto.DesEquipS2C;
import TakeOnEquipS2C = proto.TakeOnEquipS2C;
import TakeOffEquipS2C = proto.TakeOffEquipS2C;
import RedSpotS2C = proto.RedSpotS2C;
import MakeTeamS2C = proto.MakeTeamS2C;
import SetTeamAimS2C = proto.SetTeamAimS2C;
import JoinTeamS2C = proto.JoinTeamS2C;
import ExitTeamS2C = proto.ExitTeamS2C;
import TurnOverTeamLeaderS2C = proto.TurnOverTeamLeaderS2C;
import InviteTeamS2C = proto.InviteTeamS2C;
import RejectTeamS2C = proto.RejectTeamS2C;
import InviteType = proto.InviteType;
import KickTeamS2C = proto.KickTeamS2C;
import SetTeamHelpS2C = proto.SetTeamHelpS2C;
import SetTeamHeroS2C = proto.SetTeamHeroS2C;
import SwitchTeamReadyS2C = proto.SwitchTeamReadyS2C;
import TeamBattleS2C = proto.TeamBattleS2C;
import GetDanInfoS2C = proto.GetDanInfoS2C;
import GetDuelRankS2C = proto.GetDuelRankS2C;
import RankType = proto.RankType;
import SysListS2C = proto.SysListS2C;
import SysOpenShowS2C = proto.SysOpenShowS2C;
import GetQuestsS2C = proto.GetQuestsS2C;
import GetQuestRewardS2C = proto.GetQuestRewardS2C;
import GetDailyQuestRewardS2C = proto.GetDailyQuestRewardS2C;
import GamerHeroImageChooseS2C = proto.GamerHeroImageChooseS2C;
import GamerHeroImageChangeS2C = proto.GamerHeroImageChangeS2C;
import GamerBuyRollS2C = proto.GamerBuyRollS2C;
import GetGamerSecretLandS2C = proto.GetGamerSecretLandS2C;
import GamerSecretLandBattleRewardS2C = proto.GamerSecretLandBattleRewardS2C;
import GamerSecretLandWeekRewardS2C = proto.GamerSecretLandWeekRewardS2C;
import GamerSecretLandRankS2C = proto.GamerSecretLandRankS2C;
import GetGamerSecretLandInfoS2C = proto.GetGamerSecretLandInfoS2C;
import GamerChangeItemIsSawS2C = proto.GamerChangeItemIsSawS2C;

declare var net;
export default class AntNet
{
	public static get onError(){
		return net.logic.onError;
	}
	public static get onConnect(){
		return net.logic.onConnect;
	}
	public static get onClose(){
		return net.logic.onClose;
	}
	public static get onReconnect(){
		return net.logic.onReconnect;
	}
	public static get logicPing() {
		return net.logic.ping;
	}
		
	public static GamerLoginC2S(session: string, addr: string){
		net.logic.gamerLoginC2S(session, addr);
	}

	public static get gamerLoginS2C(){
		return net.logic.gamerLoginS2C;
	}

	public static async AsyncGamerLoginC2S(session: string, addr: string):Promise<GamerLoginS2C>{
		return new Promise<GamerLoginS2C>((resolve)=>{
			let s2c = {error:200} as GamerLoginS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerLoginS2C){
				clearTimeout(timeObj);
				AntNet.gamerLoginS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerLoginS2C.on(fun);
			AntNet.GamerLoginC2S(session, addr);
		});
	}

	public static GamerLoginGetDataC2S(){
		net.logic.gamerLoginGetDataC2S();
	}

	public static get gamerLoginGetDataS2C(){
		return net.logic.gamerLoginGetDataS2C;
	}

	public static async AsyncGamerLoginGetDataC2S():Promise<GamerLoginGetDataS2C>{
		return new Promise<GamerLoginGetDataS2C>((resolve)=>{
			let s2c = {error:200} as GamerLoginGetDataS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerLoginGetDataS2C){
				clearTimeout(timeObj);
				AntNet.gamerLoginGetDataS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerLoginGetDataS2C.on(fun);
			AntNet.GamerLoginGetDataC2S();
		});
	}

	public static ServerTimeC2S(){
		net.logic.serverTimeC2S();
	}

	public static get serverTimeS2C(){
		return net.logic.serverTimeS2C;
	}

	public static async AsyncServerTimeC2S():Promise<ServerTimeS2C>{
		return new Promise<ServerTimeS2C>((resolve)=>{
			let s2c = {error:200} as ServerTimeS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:ServerTimeS2C){
				clearTimeout(timeObj);
				AntNet.serverTimeS2C.off(fun);
				resolve(e);
			}
			AntNet.serverTimeS2C.on(fun);
			AntNet.ServerTimeC2S();
		});
	}

	public static GamerSubChatChannelC2S(channel: number, open: boolean){
		net.logic.gamerSubChatChannelC2S(channel, open);
	}

	public static get gamerSubChatChannelS2C(){
		return net.logic.gamerSubChatChannelS2C;
	}

	public static async AsyncGamerSubChatChannelC2S(channel: number, open: boolean):Promise<GamerSubChatChannelS2C>{
		return new Promise<GamerSubChatChannelS2C>((resolve)=>{
			let s2c = {error:200} as GamerSubChatChannelS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerSubChatChannelS2C){
				clearTimeout(timeObj);
				AntNet.gamerSubChatChannelS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerSubChatChannelS2C.on(fun);
			AntNet.GamerSubChatChannelC2S(channel, open);
		});
	}

	public static GamerChangeNameC2S(newName: string){
		net.logic.gamerChangeNameC2S(newName);
	}

	public static get gamerChangeNameS2C(){
		return net.logic.gamerChangeNameS2C;
	}

	public static async AsyncGamerChangeNameC2S(newName: string):Promise<GamerChangeNameS2C>{
		return new Promise<GamerChangeNameS2C>((resolve)=>{
			let s2c = {error:200} as GamerChangeNameS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerChangeNameS2C){
				clearTimeout(timeObj);
				AntNet.gamerChangeNameS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerChangeNameS2C.on(fun);
			AntNet.GamerChangeNameC2S(newName);
		});
	}

	public static GamerChangeAvatarC2S(Avatar: string){
		net.logic.gamerChangeAvatarC2S(Avatar);
	}

	public static get gamerChangeAvatarS2C(){
		return net.logic.gamerChangeAvatarS2C;
	}

	public static async AsyncGamerChangeAvatarC2S(Avatar: string):Promise<GamerChangeAvatarS2C>{
		return new Promise<GamerChangeAvatarS2C>((resolve)=>{
			let s2c = {error:200} as GamerChangeAvatarS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerChangeAvatarS2C){
				clearTimeout(timeObj);
				AntNet.gamerChangeAvatarS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerChangeAvatarS2C.on(fun);
			AntNet.GamerChangeAvatarC2S(Avatar);
		});
	}

	public static GamerGetBackpackC2S(){
		net.logic.gamerGetBackpackC2S();
	}

	public static get gamerGetBackpackS2C(){
		return net.logic.gamerGetBackpackS2C;
	}

	public static async AsyncGamerGetBackpackC2S():Promise<GamerGetBackpackS2C>{
		return new Promise<GamerGetBackpackS2C>((resolve)=>{
			let s2c = {error:200} as GamerGetBackpackS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerGetBackpackS2C){
				clearTimeout(timeObj);
				AntNet.gamerGetBackpackS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerGetBackpackS2C.on(fun);
			AntNet.GamerGetBackpackC2S();
		});
	}

	public static GamerSellItemC2S(itemId: number, num: number, uid: number){
		net.logic.gamerSellItemC2S(itemId, num, uid);
	}

	public static get gamerSellItemS2C(){
		return net.logic.gamerSellItemS2C;
	}

	public static async AsyncGamerSellItemC2S(itemId: number, num: number, uid: number):Promise<GamerSellItemS2C>{
		return new Promise<GamerSellItemS2C>((resolve)=>{
			let s2c = {error:200} as GamerSellItemS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerSellItemS2C){
				clearTimeout(timeObj);
				AntNet.gamerSellItemS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerSellItemS2C.on(fun);
			AntNet.GamerSellItemC2S(itemId, num, uid);
		});
	}

	public static GamerUseItemC2S(itemId: number, num: number, uid: number){
		net.logic.gamerUseItemC2S(itemId, num, uid);
	}

	public static get gamerUseItemS2C(){
		return net.logic.gamerUseItemS2C;
	}

	public static async AsyncGamerUseItemC2S(itemId: number, num: number, uid: number):Promise<GamerUseItemS2C>{
		return new Promise<GamerUseItemS2C>((resolve)=>{
			let s2c = {error:200} as GamerUseItemS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerUseItemS2C){
				clearTimeout(timeObj);
				AntNet.gamerUseItemS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerUseItemS2C.on(fun);
			AntNet.GamerUseItemC2S(itemId, num, uid);
		});
	}

	public static GamerFriendChatC2S(toId: number, msg: string){
		net.logic.gamerFriendChatC2S(toId, msg);
	}

	public static get gamerFriendChatS2C(){
		return net.logic.gamerFriendChatS2C;
	}

	public static async AsyncGamerFriendChatC2S(toId: number, msg: string):Promise<GamerFriendChatS2C>{
		return new Promise<GamerFriendChatS2C>((resolve)=>{
			let s2c = {error:200} as GamerFriendChatS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerFriendChatS2C){
				clearTimeout(timeObj);
				AntNet.gamerFriendChatS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerFriendChatS2C.on(fun);
			AntNet.GamerFriendChatC2S(toId, msg);
		});
	}

	public static GamerWorldChatC2S(server: number, msg: string){
		net.logic.gamerWorldChatC2S(server, msg);
	}

	public static get gamerWorldChatS2C(){
		return net.logic.gamerWorldChatS2C;
	}

	public static async AsyncGamerWorldChatC2S(server: number, msg: string):Promise<GamerWorldChatS2C>{
		return new Promise<GamerWorldChatS2C>((resolve)=>{
			let s2c = {error:200} as GamerWorldChatS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerWorldChatS2C){
				clearTimeout(timeObj);
				AntNet.gamerWorldChatS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerWorldChatS2C.on(fun);
			AntNet.GamerWorldChatC2S(server, msg);
		});
	}

	public static GamerTestChatC2S(toId: number, msg: string){
		net.logic.gamerTestChatC2S(toId, msg);
	}

	public static get gamerTestChatS2C(){
		return net.logic.gamerTestChatS2C;
	}

	public static async AsyncGamerTestChatC2S(toId: number, msg: string):Promise<GamerTestChatS2C>{
		return new Promise<GamerTestChatS2C>((resolve)=>{
			let s2c = {error:200} as GamerTestChatS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerTestChatS2C){
				clearTimeout(timeObj);
				AntNet.gamerTestChatS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerTestChatS2C.on(fun);
			AntNet.GamerTestChatC2S(toId, msg);
		});
	}

	public static GamerClubRequestC2S(clubId: number, msg: string){
		net.logic.gamerClubRequestC2S(clubId, msg);
	}

	public static get gamerClubRequestS2C(){
		return net.logic.gamerClubRequestS2C;
	}

	public static async AsyncGamerClubRequestC2S(clubId: number, msg: string):Promise<GamerClubRequestS2C>{
		return new Promise<GamerClubRequestS2C>((resolve)=>{
			let s2c = {error:200} as GamerClubRequestS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerClubRequestS2C){
				clearTimeout(timeObj);
				AntNet.gamerClubRequestS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerClubRequestS2C.on(fun);
			AntNet.GamerClubRequestC2S(clubId, msg);
		});
	}

	public static GamerNewFriendReqC2S(oid: number, msg: string){
		net.logic.gamerNewFriendReqC2S(oid, msg);
	}

	public static get gamerNewFriendReqS2C(){
		return net.logic.gamerNewFriendReqS2C;
	}

	public static async AsyncGamerNewFriendReqC2S(oid: number, msg: string):Promise<GamerNewFriendReqS2C>{
		return new Promise<GamerNewFriendReqS2C>((resolve)=>{
			let s2c = {error:200} as GamerNewFriendReqS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerNewFriendReqS2C){
				clearTimeout(timeObj);
				AntNet.gamerNewFriendReqS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerNewFriendReqS2C.on(fun);
			AntNet.GamerNewFriendReqC2S(oid, msg);
		});
	}

	public static GamerDelFriendC2S(oid: number){
		net.logic.gamerDelFriendC2S(oid);
	}

	public static get gamerDelFriendS2C(){
		return net.logic.gamerDelFriendS2C;
	}

	public static async AsyncGamerDelFriendC2S(oid: number):Promise<GamerDelFriendS2C>{
		return new Promise<GamerDelFriendS2C>((resolve)=>{
			let s2c = {error:200} as GamerDelFriendS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerDelFriendS2C){
				clearTimeout(timeObj);
				AntNet.gamerDelFriendS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerDelFriendS2C.on(fun);
			AntNet.GamerDelFriendC2S(oid);
		});
	}

	public static GamerProcessFriendReqC2S(oid: number, result: boolean){
		net.logic.gamerProcessFriendReqC2S(oid, result);
	}

	public static get gamerProcessFriendReqS2C(){
		return net.logic.gamerProcessFriendReqS2C;
	}

	public static async AsyncGamerProcessFriendReqC2S(oid: number, result: boolean):Promise<GamerProcessFriendReqS2C>{
		return new Promise<GamerProcessFriendReqS2C>((resolve)=>{
			let s2c = {error:200} as GamerProcessFriendReqS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerProcessFriendReqS2C){
				clearTimeout(timeObj);
				AntNet.gamerProcessFriendReqS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerProcessFriendReqS2C.on(fun);
			AntNet.GamerProcessFriendReqC2S(oid, result);
		});
	}

	public static GamerGetMailC2S(){
		net.logic.gamerGetMailC2S();
	}

	public static get gamerGetMailS2C(){
		return net.logic.gamerGetMailS2C;
	}

	public static async AsyncGamerGetMailC2S():Promise<GamerGetMailS2C>{
		return new Promise<GamerGetMailS2C>((resolve)=>{
			let s2c = {error:200} as GamerGetMailS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerGetMailS2C){
				clearTimeout(timeObj);
				AntNet.gamerGetMailS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerGetMailS2C.on(fun);
			AntNet.GamerGetMailC2S();
		});
	}

	public static GamerDelMailC2S(mailId: string){
		net.logic.gamerDelMailC2S(mailId);
	}

	public static get gamerDelMailS2C(){
		return net.logic.gamerDelMailS2C;
	}

	public static async AsyncGamerDelMailC2S(mailId: string):Promise<GamerDelMailS2C>{
		return new Promise<GamerDelMailS2C>((resolve)=>{
			let s2c = {error:200} as GamerDelMailS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerDelMailS2C){
				clearTimeout(timeObj);
				AntNet.gamerDelMailS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerDelMailS2C.on(fun);
			AntNet.GamerDelMailC2S(mailId);
		});
	}

	public static GamerDelHaveReadMailC2S(){
		net.logic.gamerDelHaveReadMailC2S();
	}

	public static get gamerDelHaveReadMailS2C(){
		return net.logic.gamerDelHaveReadMailS2C;
	}

	public static async AsyncGamerDelHaveReadMailC2S():Promise<GamerDelHaveReadMailS2C>{
		return new Promise<GamerDelHaveReadMailS2C>((resolve)=>{
			let s2c = {error:200} as GamerDelHaveReadMailS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerDelHaveReadMailS2C){
				clearTimeout(timeObj);
				AntNet.gamerDelHaveReadMailS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerDelHaveReadMailS2C.on(fun);
			AntNet.GamerDelHaveReadMailC2S();
		});
	}

	public static GamerOneKeyRcvMailRewardC2S(){
		net.logic.gamerOneKeyRcvMailRewardC2S();
	}

	public static get gamerOneKeyRcvMailRewardS2C(){
		return net.logic.gamerOneKeyRcvMailRewardS2C;
	}

	public static async AsyncGamerOneKeyRcvMailRewardC2S():Promise<GamerOneKeyRcvMailRewardS2C>{
		return new Promise<GamerOneKeyRcvMailRewardS2C>((resolve)=>{
			let s2c = {error:200} as GamerOneKeyRcvMailRewardS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerOneKeyRcvMailRewardS2C){
				clearTimeout(timeObj);
				AntNet.gamerOneKeyRcvMailRewardS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerOneKeyRcvMailRewardS2C.on(fun);
			AntNet.GamerOneKeyRcvMailRewardC2S();
		});
	}

	public static GamerChangeMailStateC2S(mailId: string, state: MailState){
		net.logic.gamerChangeMailStateC2S(mailId, state);
	}

	public static get gamerChangeMailStateS2C(){
		return net.logic.gamerChangeMailStateS2C;
	}

	public static async AsyncGamerChangeMailStateC2S(mailId: string, state: MailState):Promise<GamerChangeMailStateS2C>{
		return new Promise<GamerChangeMailStateS2C>((resolve)=>{
			let s2c = {error:200} as GamerChangeMailStateS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerChangeMailStateS2C){
				clearTimeout(timeObj);
				AntNet.gamerChangeMailStateS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerChangeMailStateS2C.on(fun);
			AntNet.GamerChangeMailStateC2S(mailId, state);
		});
	}

	public static GamerNewHeroC2S(heroId: number){
		net.logic.gamerNewHeroC2S(heroId);
	}

	public static get gamerNewHeroS2C(){
		return net.logic.gamerNewHeroS2C;
	}

	public static async AsyncGamerNewHeroC2S(heroId: number):Promise<GamerNewHeroS2C>{
		return new Promise<GamerNewHeroS2C>((resolve)=>{
			let s2c = {error:200} as GamerNewHeroS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerNewHeroS2C){
				clearTimeout(timeObj);
				AntNet.gamerNewHeroS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerNewHeroS2C.on(fun);
			AntNet.GamerNewHeroC2S(heroId);
		});
	}

	public static GamerUpgradeHeroC2S(heroId: number, upgradeNum: number){
		net.logic.gamerUpgradeHeroC2S(heroId, upgradeNum);
	}

	public static get gamerUpgradeHeroS2C(){
		return net.logic.gamerUpgradeHeroS2C;
	}

	public static async AsyncGamerUpgradeHeroC2S(heroId: number, upgradeNum: number):Promise<GamerUpgradeHeroS2C>{
		return new Promise<GamerUpgradeHeroS2C>((resolve)=>{
			let s2c = {error:200} as GamerUpgradeHeroS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerUpgradeHeroS2C){
				clearTimeout(timeObj);
				AntNet.gamerUpgradeHeroS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerUpgradeHeroS2C.on(fun);
			AntNet.GamerUpgradeHeroC2S(heroId, upgradeNum);
		});
	}

	public static GamerUseHeroMedicineC2S(heroId: number, itemId: number, useNum: number){
		net.logic.gamerUseHeroMedicineC2S(heroId, itemId, useNum);
	}

	public static get gamerUseHeroMedicineS2C(){
		return net.logic.gamerUseHeroMedicineS2C;
	}

	public static async AsyncGamerUseHeroMedicineC2S(heroId: number, itemId: number, useNum: number):Promise<GamerUseHeroMedicineS2C>{
		return new Promise<GamerUseHeroMedicineS2C>((resolve)=>{
			let s2c = {error:200} as GamerUseHeroMedicineS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerUseHeroMedicineS2C){
				clearTimeout(timeObj);
				AntNet.gamerUseHeroMedicineS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerUseHeroMedicineS2C.on(fun);
			AntNet.GamerUseHeroMedicineC2S(heroId, itemId, useNum);
		});
	}

	public static GamerUpStarHeroC2S(heroId: number){
		net.logic.gamerUpStarHeroC2S(heroId);
	}

	public static get gamerUpStarHeroS2C(){
		return net.logic.gamerUpStarHeroS2C;
	}

	public static async AsyncGamerUpStarHeroC2S(heroId: number):Promise<GamerUpStarHeroS2C>{
		return new Promise<GamerUpStarHeroS2C>((resolve)=>{
			let s2c = {error:200} as GamerUpStarHeroS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerUpStarHeroS2C){
				clearTimeout(timeObj);
				AntNet.gamerUpStarHeroS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerUpStarHeroS2C.on(fun);
			AntNet.GamerUpStarHeroC2S(heroId);
		});
	}

	public static GamerUpHeroSkillC2S(heroId: number, skillId: number){
		net.logic.gamerUpHeroSkillC2S(heroId, skillId);
	}

	public static get gamerUpHeroSkillS2C(){
		return net.logic.gamerUpHeroSkillS2C;
	}

	public static async AsyncGamerUpHeroSkillC2S(heroId: number, skillId: number):Promise<GamerUpHeroSkillS2C>{
		return new Promise<GamerUpHeroSkillS2C>((resolve)=>{
			let s2c = {error:200} as GamerUpHeroSkillS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerUpHeroSkillS2C){
				clearTimeout(timeObj);
				AntNet.gamerUpHeroSkillS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerUpHeroSkillS2C.on(fun);
			AntNet.GamerUpHeroSkillC2S(heroId, skillId);
		});
	}

	public static GamerGetHeroC2S(){
		net.logic.gamerGetHeroC2S();
	}

	public static get gamerGetHeroS2C(){
		return net.logic.gamerGetHeroS2C;
	}

	public static async AsyncGamerGetHeroC2S():Promise<GamerGetHeroS2C>{
		return new Promise<GamerGetHeroS2C>((resolve)=>{
			let s2c = {error:200} as GamerGetHeroS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerGetHeroS2C){
				clearTimeout(timeObj);
				AntNet.gamerGetHeroS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerGetHeroS2C.on(fun);
			AntNet.GamerGetHeroC2S();
		});
	}

	public static GamerPVPLoadingC2S(session: string, per: number){
		net.logic.gamerPVPLoadingC2S(session, per);
	}

	public static get gamerPVPLoadingS2C(){
		return net.logic.gamerPVPLoadingS2C;
	}

	public static async AsyncGamerPVPLoadingC2S(session: string, per: number):Promise<GamerPVPLoadingS2C>{
		return new Promise<GamerPVPLoadingS2C>((resolve)=>{
			let s2c = {error:200} as GamerPVPLoadingS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerPVPLoadingS2C){
				clearTimeout(timeObj);
				AntNet.gamerPVPLoadingS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerPVPLoadingS2C.on(fun);
			AntNet.GamerPVPLoadingC2S(session, per);
		});
	}

	public static GamerPVPSyncC2S(session: string, input: PVPInput, needFrames: number[], crc: number[], inputs: PVPInput[], reconn: boolean, exit: boolean, index: number, gateAddr: string, result: PVPResult, recvTime: number, clientAddr: string){
		net.logic.gamerPVPSyncC2S(session, input, needFrames, crc, inputs, reconn, exit, index, gateAddr, result, recvTime, clientAddr);
	}

	public static get gamerPVPSyncS2C(){
		return net.logic.gamerPVPSyncS2C;
	}

	public static async AsyncGamerPVPSyncC2S(session: string, input: PVPInput, needFrames: number[], crc: number[], inputs: PVPInput[], reconn: boolean, exit: boolean, index: number, gateAddr: string, result: PVPResult, recvTime: number, clientAddr: string):Promise<GamerPVPSyncS2C>{
		return new Promise<GamerPVPSyncS2C>((resolve)=>{
			let s2c = {error:200} as GamerPVPSyncS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerPVPSyncS2C){
				clearTimeout(timeObj);
				AntNet.gamerPVPSyncS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerPVPSyncS2C.on(fun);
			AntNet.GamerPVPSyncC2S(session, input, needFrames, crc, inputs, reconn, exit, index, gateAddr, result, recvTime, clientAddr);
		});
	}

	public static GamerReliveC2S(times: number, checkPointId: number){
		net.logic.gamerReliveC2S(times, checkPointId);
	}

	public static get gamerReliveS2C(){
		return net.logic.gamerReliveS2C;
	}

	public static async AsyncGamerReliveC2S(times: number, checkPointId: number):Promise<GamerReliveS2C>{
		return new Promise<GamerReliveS2C>((resolve)=>{
			let s2c = {error:200} as GamerReliveS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerReliveS2C){
				clearTimeout(timeObj);
				AntNet.gamerReliveS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerReliveS2C.on(fun);
			AntNet.GamerReliveC2S(times, checkPointId);
		});
	}

	public static GamerGetRealTimeRankC2S(){
		net.logic.gamerGetRealTimeRankC2S();
	}

	public static get gamerGetRealTimeRankS2C(){
		return net.logic.gamerGetRealTimeRankS2C;
	}

	public static async AsyncGamerGetRealTimeRankC2S():Promise<GamerGetRealTimeRankS2C>{
		return new Promise<GamerGetRealTimeRankS2C>((resolve)=>{
			let s2c = {error:200} as GamerGetRealTimeRankS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerGetRealTimeRankS2C){
				clearTimeout(timeObj);
				AntNet.gamerGetRealTimeRankS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerGetRealTimeRankS2C.on(fun);
			AntNet.GamerGetRealTimeRankC2S();
		});
	}

	public static GamerCheckPVPBattleC2S(session: string){
		net.logic.gamerCheckPVPBattleC2S(session);
	}

	public static get gamerCheckPVPBattleS2C(){
		return net.logic.gamerCheckPVPBattleS2C;
	}

	public static async AsyncGamerCheckPVPBattleC2S(session: string):Promise<GamerCheckPVPBattleS2C>{
		return new Promise<GamerCheckPVPBattleS2C>((resolve)=>{
			let s2c = {error:200} as GamerCheckPVPBattleS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerCheckPVPBattleS2C){
				clearTimeout(timeObj);
				AntNet.gamerCheckPVPBattleS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerCheckPVPBattleS2C.on(fun);
			AntNet.GamerCheckPVPBattleC2S(session);
		});
	}

	public static GamerUploadWXInfoC2S(wxInfo: WXInfo){
		net.logic.gamerUploadWXInfoC2S(wxInfo);
	}

	public static get gamerUploadWXInfoS2C(){
		return net.logic.gamerUploadWXInfoS2C;
	}

	public static async AsyncGamerUploadWXInfoC2S(wxInfo: WXInfo):Promise<GamerUploadWXInfoS2C>{
		return new Promise<GamerUploadWXInfoS2C>((resolve)=>{
			let s2c = {error:200} as GamerUploadWXInfoS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerUploadWXInfoS2C){
				clearTimeout(timeObj);
				AntNet.gamerUploadWXInfoS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerUploadWXInfoS2C.on(fun);
			AntNet.GamerUploadWXInfoC2S(wxInfo);
		});
	}

	public static GamerGetNoviceGuideC2S(){
		net.logic.gamerGetNoviceGuideC2S();
	}

	public static get gamerGetNoviceGuideS2C(){
		return net.logic.gamerGetNoviceGuideS2C;
	}

	public static async AsyncGamerGetNoviceGuideC2S():Promise<GamerGetNoviceGuideS2C>{
		return new Promise<GamerGetNoviceGuideS2C>((resolve)=>{
			let s2c = {error:200} as GamerGetNoviceGuideS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerGetNoviceGuideS2C){
				clearTimeout(timeObj);
				AntNet.gamerGetNoviceGuideS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerGetNoviceGuideS2C.on(fun);
			AntNet.GamerGetNoviceGuideC2S();
		});
	}

	public static GamerNoviceGuideChangeC2S(noviceGuideList: Guide[]){
		net.logic.gamerNoviceGuideChangeC2S(noviceGuideList);
	}

	public static get gamerNoviceGuideChangeS2C(){
		return net.logic.gamerNoviceGuideChangeS2C;
	}

	public static async AsyncGamerNoviceGuideChangeC2S(noviceGuideList: Guide[]):Promise<GamerNoviceGuideChangeS2C>{
		return new Promise<GamerNoviceGuideChangeS2C>((resolve)=>{
			let s2c = {error:200} as GamerNoviceGuideChangeS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerNoviceGuideChangeS2C){
				clearTimeout(timeObj);
				AntNet.gamerNoviceGuideChangeS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerNoviceGuideChangeS2C.on(fun);
			AntNet.GamerNoviceGuideChangeC2S(noviceGuideList);
		});
	}

	public static GamerMatchC2S(type: PVPType, heroId: number, teamId: number, checkPointId: number, danInfo: DanInfo, heroGroupId: number, heroList: GamerHero[], secretLand: GamerSecretLand){
		net.logic.gamerMatchC2S(type, heroId, teamId, checkPointId, danInfo, heroGroupId, heroList, secretLand);
	}

	public static get gamerMatchS2C(){
		return net.logic.gamerMatchS2C;
	}

	public static async AsyncGamerMatchC2S(type: PVPType, heroId: number, teamId: number, checkPointId: number, danInfo: DanInfo, heroGroupId: number, heroList: GamerHero[], secretLand: GamerSecretLand):Promise<GamerMatchS2C>{
		return new Promise<GamerMatchS2C>((resolve)=>{
			let s2c = {error:200} as GamerMatchS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerMatchS2C){
				clearTimeout(timeObj);
				AntNet.gamerMatchS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerMatchS2C.on(fun);
			AntNet.GamerMatchC2S(type, heroId, teamId, checkPointId, danInfo, heroGroupId, heroList, secretLand);
		});
	}

	public static GamerCancelMatchC2S(){
		net.logic.gamerCancelMatchC2S();
	}

	public static get gamerCancelMatchS2C(){
		return net.logic.gamerCancelMatchS2C;
	}

	public static async AsyncGamerCancelMatchC2S():Promise<GamerCancelMatchS2C>{
		return new Promise<GamerCancelMatchS2C>((resolve)=>{
			let s2c = {error:200} as GamerCancelMatchS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerCancelMatchS2C){
				clearTimeout(timeObj);
				AntNet.gamerCancelMatchS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerCancelMatchS2C.on(fun);
			AntNet.GamerCancelMatchC2S();
		});
	}

	public static GamerGetRewardC2S(type: number){
		net.logic.gamerGetRewardC2S(type);
	}

	public static get gamerGetRewardS2C(){
		return net.logic.gamerGetRewardS2C;
	}

	public static async AsyncGamerGetRewardC2S(type: number):Promise<GamerGetRewardS2C>{
		return new Promise<GamerGetRewardS2C>((resolve)=>{
			let s2c = {error:200} as GamerGetRewardS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerGetRewardS2C){
				clearTimeout(timeObj);
				AntNet.gamerGetRewardS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerGetRewardS2C.on(fun);
			AntNet.GamerGetRewardC2S(type);
		});
	}

	public static GamerUseIconC2S(type: number, count: number, session: string){
		net.logic.gamerUseIconC2S(type, count, session);
	}

	public static get gamerUseIconS2C(){
		return net.logic.gamerUseIconS2C;
	}

	public static async AsyncGamerUseIconC2S(type: number, count: number, session: string):Promise<GamerUseIconS2C>{
		return new Promise<GamerUseIconS2C>((resolve)=>{
			let s2c = {error:200} as GamerUseIconS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerUseIconS2C){
				clearTimeout(timeObj);
				AntNet.gamerUseIconS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerUseIconS2C.on(fun);
			AntNet.GamerUseIconC2S(type, count, session);
		});
	}

	public static GamerExtractGashaponC2S(gashaponId: number){
		net.logic.gamerExtractGashaponC2S(gashaponId);
	}

	public static get gamerExtractGashaponS2C(){
		return net.logic.gamerExtractGashaponS2C;
	}

	public static async AsyncGamerExtractGashaponC2S(gashaponId: number):Promise<GamerExtractGashaponS2C>{
		return new Promise<GamerExtractGashaponS2C>((resolve)=>{
			let s2c = {error:200} as GamerExtractGashaponS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerExtractGashaponS2C){
				clearTimeout(timeObj);
				AntNet.gamerExtractGashaponS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerExtractGashaponS2C.on(fun);
			AntNet.GamerExtractGashaponC2S(gashaponId);
		});
	}

	public static GamerGetGashaponPreviewC2S(gashaponType: number){
		net.logic.gamerGetGashaponPreviewC2S(gashaponType);
	}

	public static get gamerGetGashaponPreviewS2C(){
		return net.logic.gamerGetGashaponPreviewS2C;
	}

	public static async AsyncGamerGetGashaponPreviewC2S(gashaponType: number):Promise<GamerGetGashaponPreviewS2C>{
		return new Promise<GamerGetGashaponPreviewS2C>((resolve)=>{
			let s2c = {error:200} as GamerGetGashaponPreviewS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerGetGashaponPreviewS2C){
				clearTimeout(timeObj);
				AntNet.gamerGetGashaponPreviewS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerGetGashaponPreviewS2C.on(fun);
			AntNet.GamerGetGashaponPreviewC2S(gashaponType);
		});
	}

	public static GetActivityRewardC2S(activityId: number){
		net.logic.getActivityRewardC2S(activityId);
	}

	public static get getActivityRewardS2C(){
		return net.logic.getActivityRewardS2C;
	}

	public static async AsyncGetActivityRewardC2S(activityId: number):Promise<GetActivityRewardS2C>{
		return new Promise<GetActivityRewardS2C>((resolve)=>{
			let s2c = {error:200} as GetActivityRewardS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GetActivityRewardS2C){
				clearTimeout(timeObj);
				AntNet.getActivityRewardS2C.off(fun);
				resolve(e);
			}
			AntNet.getActivityRewardS2C.on(fun);
			AntNet.GetActivityRewardC2S(activityId);
		});
	}

	public static CreateGuildC2S(guildName: string){
		net.logic.createGuildC2S(guildName);
	}

	public static get createGuildS2C(){
		return net.logic.createGuildS2C;
	}

	public static async AsyncCreateGuildC2S(guildName: string):Promise<CreateGuildS2C>{
		return new Promise<CreateGuildS2C>((resolve)=>{
			let s2c = {error:200} as CreateGuildS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:CreateGuildS2C){
				clearTimeout(timeObj);
				AntNet.createGuildS2C.off(fun);
				resolve(e);
			}
			AntNet.createGuildS2C.on(fun);
			AntNet.CreateGuildC2S(guildName);
		});
	}

	public static GuildGamerLoginC2S(guildId: number){
		net.logic.guildGamerLoginC2S(guildId);
	}

	public static get guildGamerLoginS2C(){
		return net.logic.guildGamerLoginS2C;
	}

	public static async AsyncGuildGamerLoginC2S(guildId: number):Promise<GuildGamerLoginS2C>{
		return new Promise<GuildGamerLoginS2C>((resolve)=>{
			let s2c = {error:200} as GuildGamerLoginS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GuildGamerLoginS2C){
				clearTimeout(timeObj);
				AntNet.guildGamerLoginS2C.off(fun);
				resolve(e);
			}
			AntNet.guildGamerLoginS2C.on(fun);
			AntNet.GuildGamerLoginC2S(guildId);
		});
	}

	public static GuildGamerLoginoutC2S(guildId: number){
		net.logic.guildGamerLoginoutC2S(guildId);
	}

	public static get guildGamerLoginoutS2C(){
		return net.logic.guildGamerLoginoutS2C;
	}

	public static async AsyncGuildGamerLoginoutC2S(guildId: number):Promise<GuildGamerLoginoutS2C>{
		return new Promise<GuildGamerLoginoutS2C>((resolve)=>{
			let s2c = {error:200} as GuildGamerLoginoutS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GuildGamerLoginoutS2C){
				clearTimeout(timeObj);
				AntNet.guildGamerLoginoutS2C.off(fun);
				resolve(e);
			}
			AntNet.guildGamerLoginoutS2C.on(fun);
			AntNet.GuildGamerLoginoutC2S(guildId);
		});
	}

	public static DissolutionGuildC2S(guildId: number){
		net.logic.dissolutionGuildC2S(guildId);
	}

	public static get dissolutionGuildS2C(){
		return net.logic.dissolutionGuildS2C;
	}

	public static async AsyncDissolutionGuildC2S(guildId: number):Promise<DissolutionGuildS2C>{
		return new Promise<DissolutionGuildS2C>((resolve)=>{
			let s2c = {error:200} as DissolutionGuildS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:DissolutionGuildS2C){
				clearTimeout(timeObj);
				AntNet.dissolutionGuildS2C.off(fun);
				resolve(e);
			}
			AntNet.dissolutionGuildS2C.on(fun);
			AntNet.DissolutionGuildC2S(guildId);
		});
	}

	public static GetGuildC2S(guildId: number){
		net.logic.getGuildC2S(guildId);
	}

	public static get getGuildS2C(){
		return net.logic.getGuildS2C;
	}

	public static async AsyncGetGuildC2S(guildId: number):Promise<GetGuildS2C>{
		return new Promise<GetGuildS2C>((resolve)=>{
			let s2c = {error:200} as GetGuildS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GetGuildS2C){
				clearTimeout(timeObj);
				AntNet.getGuildS2C.off(fun);
				resolve(e);
			}
			AntNet.getGuildS2C.on(fun);
			AntNet.GetGuildC2S(guildId);
		});
	}

	public static GetGuildListC2S(serverId: number, page: number){
		net.logic.getGuildListC2S(serverId, page);
	}

	public static get getGuildListS2C(){
		return net.logic.getGuildListS2C;
	}

	public static async AsyncGetGuildListC2S(serverId: number, page: number):Promise<GetGuildListS2C>{
		return new Promise<GetGuildListS2C>((resolve)=>{
			let s2c = {error:200} as GetGuildListS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GetGuildListS2C){
				clearTimeout(timeObj);
				AntNet.getGuildListS2C.off(fun);
				resolve(e);
			}
			AntNet.getGuildListS2C.on(fun);
			AntNet.GetGuildListC2S(serverId, page);
		});
	}

	public static ApplyJoinGuildC2S(guildId: number){
		net.logic.applyJoinGuildC2S(guildId);
	}

	public static get applyJoinGuildS2C(){
		return net.logic.applyJoinGuildS2C;
	}

	public static async AsyncApplyJoinGuildC2S(guildId: number):Promise<ApplyJoinGuildS2C>{
		return new Promise<ApplyJoinGuildS2C>((resolve)=>{
			let s2c = {error:200} as ApplyJoinGuildS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:ApplyJoinGuildS2C){
				clearTimeout(timeObj);
				AntNet.applyJoinGuildS2C.off(fun);
				resolve(e);
			}
			AntNet.applyJoinGuildS2C.on(fun);
			AntNet.ApplyJoinGuildC2S(guildId);
		});
	}

	public static ApprovalJoinGuildC2S(guildId: number, applyerGid: number, result: boolean){
		net.logic.approvalJoinGuildC2S(guildId, applyerGid, result);
	}

	public static get approvalJoinGuildS2C(){
		return net.logic.approvalJoinGuildS2C;
	}

	public static async AsyncApprovalJoinGuildC2S(guildId: number, applyerGid: number, result: boolean):Promise<ApprovalJoinGuildS2C>{
		return new Promise<ApprovalJoinGuildS2C>((resolve)=>{
			let s2c = {error:200} as ApprovalJoinGuildS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:ApprovalJoinGuildS2C){
				clearTimeout(timeObj);
				AntNet.approvalJoinGuildS2C.off(fun);
				resolve(e);
			}
			AntNet.approvalJoinGuildS2C.on(fun);
			AntNet.ApprovalJoinGuildC2S(guildId, applyerGid, result);
		});
	}

	public static InviteJoinGuildC2S(inviteeGid: number, guildId: number){
		net.logic.inviteJoinGuildC2S(inviteeGid, guildId);
	}

	public static get inviteJoinGuildS2C(){
		return net.logic.inviteJoinGuildS2C;
	}

	public static async AsyncInviteJoinGuildC2S(inviteeGid: number, guildId: number):Promise<InviteJoinGuildS2C>{
		return new Promise<InviteJoinGuildS2C>((resolve)=>{
			let s2c = {error:200} as InviteJoinGuildS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:InviteJoinGuildS2C){
				clearTimeout(timeObj);
				AntNet.inviteJoinGuildS2C.off(fun);
				resolve(e);
			}
			AntNet.inviteJoinGuildS2C.on(fun);
			AntNet.InviteJoinGuildC2S(inviteeGid, guildId);
		});
	}

	public static AgreeJoinGuildC2S(guildId: number, result: boolean){
		net.logic.agreeJoinGuildC2S(guildId, result);
	}

	public static get agreeJoinGuildS2C(){
		return net.logic.agreeJoinGuildS2C;
	}

	public static async AsyncAgreeJoinGuildC2S(guildId: number, result: boolean):Promise<AgreeJoinGuildS2C>{
		return new Promise<AgreeJoinGuildS2C>((resolve)=>{
			let s2c = {error:200} as AgreeJoinGuildS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:AgreeJoinGuildS2C){
				clearTimeout(timeObj);
				AntNet.agreeJoinGuildS2C.off(fun);
				resolve(e);
			}
			AntNet.agreeJoinGuildS2C.on(fun);
			AntNet.AgreeJoinGuildC2S(guildId, result);
		});
	}

	public static QuitGuildC2S(guildId: number){
		net.logic.quitGuildC2S(guildId);
	}

	public static get quitGuildS2C(){
		return net.logic.quitGuildS2C;
	}

	public static async AsyncQuitGuildC2S(guildId: number):Promise<QuitGuildS2C>{
		return new Promise<QuitGuildS2C>((resolve)=>{
			let s2c = {error:200} as QuitGuildS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:QuitGuildS2C){
				clearTimeout(timeObj);
				AntNet.quitGuildS2C.off(fun);
				resolve(e);
			}
			AntNet.quitGuildS2C.on(fun);
			AntNet.QuitGuildC2S(guildId);
		});
	}

	public static KickOutGuildC2S(guildId: number, kickedGid: number){
		net.logic.kickOutGuildC2S(guildId, kickedGid);
	}

	public static get kickOutGuildS2C(){
		return net.logic.kickOutGuildS2C;
	}

	public static async AsyncKickOutGuildC2S(guildId: number, kickedGid: number):Promise<KickOutGuildS2C>{
		return new Promise<KickOutGuildS2C>((resolve)=>{
			let s2c = {error:200} as KickOutGuildS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:KickOutGuildS2C){
				clearTimeout(timeObj);
				AntNet.kickOutGuildS2C.off(fun);
				resolve(e);
			}
			AntNet.kickOutGuildS2C.on(fun);
			AntNet.KickOutGuildC2S(guildId, kickedGid);
		});
	}

	public static GuildChatC2S(guildId: number, msg: string){
		net.logic.guildChatC2S(guildId, msg);
	}

	public static get guildChatS2C(){
		return net.logic.guildChatS2C;
	}

	public static async AsyncGuildChatC2S(guildId: number, msg: string):Promise<GuildChatS2C>{
		return new Promise<GuildChatS2C>((resolve)=>{
			let s2c = {error:200} as GuildChatS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GuildChatS2C){
				clearTimeout(timeObj);
				AntNet.guildChatS2C.off(fun);
				resolve(e);
			}
			AntNet.guildChatS2C.on(fun);
			AntNet.GuildChatC2S(guildId, msg);
		});
	}

	public static GMC2S(gm: string){
		net.logic.gMC2S(gm);
	}

	public static get gMS2C(){
		return net.logic.gMS2C;
	}

	public static async AsyncGMC2S(gm: string):Promise<GMS2C>{
		return new Promise<GMS2C>((resolve)=>{
			let s2c = {error:200} as GMS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GMS2C){
				clearTimeout(timeObj);
				AntNet.gMS2C.off(fun);
				resolve(e);
			}
			AntNet.gMS2C.on(fun);
			AntNet.GMC2S(gm);
		});
	}

	public static CheckPointListC2S(){
		net.logic.checkPointListC2S();
	}

	public static get checkPointListS2C(){
		return net.logic.checkPointListS2C;
	}

	public static async AsyncCheckPointListC2S():Promise<CheckPointListS2C>{
		return new Promise<CheckPointListS2C>((resolve)=>{
			let s2c = {error:200} as CheckPointListS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:CheckPointListS2C){
				clearTimeout(timeObj);
				AntNet.checkPointListS2C.off(fun);
				resolve(e);
			}
			AntNet.checkPointListS2C.on(fun);
			AntNet.CheckPointListC2S();
		});
	}

	public static GetPlotStarRewardC2S(chapterGradeId: number, chapterLevel: number){
		net.logic.getPlotStarRewardC2S(chapterGradeId, chapterLevel);
	}

	public static get getPlotStarRewardS2C(){
		return net.logic.getPlotStarRewardS2C;
	}

	public static async AsyncGetPlotStarRewardC2S(chapterGradeId: number, chapterLevel: number):Promise<GetPlotStarRewardS2C>{
		return new Promise<GetPlotStarRewardS2C>((resolve)=>{
			let s2c = {error:200} as GetPlotStarRewardS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GetPlotStarRewardS2C){
				clearTimeout(timeObj);
				AntNet.getPlotStarRewardS2C.off(fun);
				resolve(e);
			}
			AntNet.getPlotStarRewardS2C.on(fun);
			AntNet.GetPlotStarRewardC2S(chapterGradeId, chapterLevel);
		});
	}

	public static BuyTimesCheckPointC2S(type: CheckPointType, buyNum: number){
		net.logic.buyTimesCheckPointC2S(type, buyNum);
	}

	public static get buyTimesCheckPointS2C(){
		return net.logic.buyTimesCheckPointS2C;
	}

	public static async AsyncBuyTimesCheckPointC2S(type: CheckPointType, buyNum: number):Promise<BuyTimesCheckPointS2C>{
		return new Promise<BuyTimesCheckPointS2C>((resolve)=>{
			let s2c = {error:200} as BuyTimesCheckPointS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:BuyTimesCheckPointS2C){
				clearTimeout(timeObj);
				AntNet.buyTimesCheckPointS2C.off(fun);
				resolve(e);
			}
			AntNet.buyTimesCheckPointS2C.on(fun);
			AntNet.BuyTimesCheckPointC2S(type, buyNum);
		});
	}

	public static SweepCheckPointC2S(checkPointId: number, times: number){
		net.logic.sweepCheckPointC2S(checkPointId, times);
	}

	public static get sweepCheckPointS2C(){
		return net.logic.sweepCheckPointS2C;
	}

	public static async AsyncSweepCheckPointC2S(checkPointId: number, times: number):Promise<SweepCheckPointS2C>{
		return new Promise<SweepCheckPointS2C>((resolve)=>{
			let s2c = {error:200} as SweepCheckPointS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:SweepCheckPointS2C){
				clearTimeout(timeObj);
				AntNet.sweepCheckPointS2C.off(fun);
				resolve(e);
			}
			AntNet.sweepCheckPointS2C.on(fun);
			AntNet.SweepCheckPointC2S(checkPointId, times);
		});
	}

	public static GamerSettlePVEC2S(checkPointId: number, battleTime: number, HeroList: HeroStatus[], reserve: string[]){
		net.logic.gamerSettlePVEC2S(checkPointId, battleTime, HeroList, reserve);
	}

	public static get gamerSettlePVES2C(){
		return net.logic.gamerSettlePVES2C;
	}

	public static async AsyncGamerSettlePVEC2S(checkPointId: number, battleTime: number, HeroList: HeroStatus[], reserve: string[]):Promise<GamerSettlePVES2C>{
		return new Promise<GamerSettlePVES2C>((resolve)=>{
			let s2c = {error:200} as GamerSettlePVES2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerSettlePVES2C){
				clearTimeout(timeObj);
				AntNet.gamerSettlePVES2C.off(fun);
				resolve(e);
			}
			AntNet.gamerSettlePVES2C.on(fun);
			AntNet.GamerSettlePVEC2S(checkPointId, battleTime, HeroList, reserve);
		});
	}

	public static DraugListC2S(){
		net.logic.draugListC2S();
	}

	public static get draugListS2C(){
		return net.logic.draugListS2C;
	}

	public static async AsyncDraugListC2S():Promise<DraugListS2C>{
		return new Promise<DraugListS2C>((resolve)=>{
			let s2c = {error:200} as DraugListS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:DraugListS2C){
				clearTimeout(timeObj);
				AntNet.draugListS2C.off(fun);
				resolve(e);
			}
			AntNet.draugListS2C.on(fun);
			AntNet.DraugListC2S();
		});
	}

	public static AwakenDraugC2S(type: number){
		net.logic.awakenDraugC2S(type);
	}

	public static get awakenDraugS2C(){
		return net.logic.awakenDraugS2C;
	}

	public static async AsyncAwakenDraugC2S(type: number):Promise<AwakenDraugS2C>{
		return new Promise<AwakenDraugS2C>((resolve)=>{
			let s2c = {error:200} as AwakenDraugS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:AwakenDraugS2C){
				clearTimeout(timeObj);
				AntNet.awakenDraugS2C.off(fun);
				resolve(e);
			}
			AntNet.awakenDraugS2C.on(fun);
			AntNet.AwakenDraugC2S(type);
		});
	}

	public static PutDraugIntoPackC2S(){
		net.logic.putDraugIntoPackC2S();
	}

	public static get putDraugIntoPackS2C(){
		return net.logic.putDraugIntoPackS2C;
	}

	public static async AsyncPutDraugIntoPackC2S():Promise<PutDraugIntoPackS2C>{
		return new Promise<PutDraugIntoPackS2C>((resolve)=>{
			let s2c = {error:200} as PutDraugIntoPackS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:PutDraugIntoPackS2C){
				clearTimeout(timeObj);
				AntNet.putDraugIntoPackS2C.off(fun);
				resolve(e);
			}
			AntNet.putDraugIntoPackS2C.on(fun);
			AntNet.PutDraugIntoPackC2S();
		});
	}

	public static SwallowDraugC2S(swallowId: number, heroId: number, beSwallowIdList: number[]){
		net.logic.swallowDraugC2S(swallowId, heroId, beSwallowIdList);
	}

	public static get swallowDraugS2C(){
		return net.logic.swallowDraugS2C;
	}

	public static async AsyncSwallowDraugC2S(swallowId: number, heroId: number, beSwallowIdList: number[]):Promise<SwallowDraugS2C>{
		return new Promise<SwallowDraugS2C>((resolve)=>{
			let s2c = {error:200} as SwallowDraugS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:SwallowDraugS2C){
				clearTimeout(timeObj);
				AntNet.swallowDraugS2C.off(fun);
				resolve(e);
			}
			AntNet.swallowDraugS2C.on(fun);
			AntNet.SwallowDraugC2S(swallowId, heroId, beSwallowIdList);
		});
	}

	public static DecomposeDraugC2S(draugIdList: number[]){
		net.logic.decomposeDraugC2S(draugIdList);
	}

	public static get decomposeDraugS2C(){
		return net.logic.decomposeDraugS2C;
	}

	public static async AsyncDecomposeDraugC2S(draugIdList: number[]):Promise<DecomposeDraugS2C>{
		return new Promise<DecomposeDraugS2C>((resolve)=>{
			let s2c = {error:200} as DecomposeDraugS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:DecomposeDraugS2C){
				clearTimeout(timeObj);
				AntNet.decomposeDraugS2C.off(fun);
				resolve(e);
			}
			AntNet.decomposeDraugS2C.on(fun);
			AntNet.DecomposeDraugC2S(draugIdList);
		});
	}

	public static LockDraugC2S(draugId: number){
		net.logic.lockDraugC2S(draugId);
	}

	public static get lockDraugS2C(){
		return net.logic.lockDraugS2C;
	}

	public static async AsyncLockDraugC2S(draugId: number):Promise<LockDraugS2C>{
		return new Promise<LockDraugS2C>((resolve)=>{
			let s2c = {error:200} as LockDraugS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:LockDraugS2C){
				clearTimeout(timeObj);
				AntNet.lockDraugS2C.off(fun);
				resolve(e);
			}
			AntNet.lockDraugS2C.on(fun);
			AntNet.LockDraugC2S(draugId);
		});
	}

	public static WearDraugC2S(draugId: number, heroId: number){
		net.logic.wearDraugC2S(draugId, heroId);
	}

	public static get wearDraugS2C(){
		return net.logic.wearDraugS2C;
	}

	public static async AsyncWearDraugC2S(draugId: number, heroId: number):Promise<WearDraugS2C>{
		return new Promise<WearDraugS2C>((resolve)=>{
			let s2c = {error:200} as WearDraugS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:WearDraugS2C){
				clearTimeout(timeObj);
				AntNet.wearDraugS2C.off(fun);
				resolve(e);
			}
			AntNet.wearDraugS2C.on(fun);
			AntNet.WearDraugC2S(draugId, heroId);
		});
	}

	public static UnwearDraugC2S(heroId: number, pos: number){
		net.logic.unwearDraugC2S(heroId, pos);
	}

	public static get unwearDraugS2C(){
		return net.logic.unwearDraugS2C;
	}

	public static async AsyncUnwearDraugC2S(heroId: number, pos: number):Promise<UnwearDraugS2C>{
		return new Promise<UnwearDraugS2C>((resolve)=>{
			let s2c = {error:200} as UnwearDraugS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:UnwearDraugS2C){
				clearTimeout(timeObj);
				AntNet.unwearDraugS2C.off(fun);
				resolve(e);
			}
			AntNet.unwearDraugS2C.on(fun);
			AntNet.UnwearDraugC2S(heroId, pos);
		});
	}

	public static DraugSelectHeroC2S(selectHeroId: number){
		net.logic.draugSelectHeroC2S(selectHeroId);
	}

	public static get draugSelectHeroS2C(){
		return net.logic.draugSelectHeroS2C;
	}

	public static async AsyncDraugSelectHeroC2S(selectHeroId: number):Promise<DraugSelectHeroS2C>{
		return new Promise<DraugSelectHeroS2C>((resolve)=>{
			let s2c = {error:200} as DraugSelectHeroS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:DraugSelectHeroS2C){
				clearTimeout(timeObj);
				AntNet.draugSelectHeroS2C.off(fun);
				resolve(e);
			}
			AntNet.draugSelectHeroS2C.on(fun);
			AntNet.DraugSelectHeroC2S(selectHeroId);
		});
	}

	public static HeroGroupListC2S(){
		net.logic.heroGroupListC2S();
	}

	public static get heroGroupListS2C(){
		return net.logic.heroGroupListS2C;
	}

	public static async AsyncHeroGroupListC2S():Promise<HeroGroupListS2C>{
		return new Promise<HeroGroupListS2C>((resolve)=>{
			let s2c = {error:200} as HeroGroupListS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:HeroGroupListS2C){
				clearTimeout(timeObj);
				AntNet.heroGroupListS2C.off(fun);
				resolve(e);
			}
			AntNet.heroGroupListS2C.on(fun);
			AntNet.HeroGroupListC2S();
		});
	}

	public static UnlockHeroGroupC2S(heroGroupId: number){
		net.logic.unlockHeroGroupC2S(heroGroupId);
	}

	public static get unlockHeroGroupS2C(){
		return net.logic.unlockHeroGroupS2C;
	}

	public static async AsyncUnlockHeroGroupC2S(heroGroupId: number):Promise<UnlockHeroGroupS2C>{
		return new Promise<UnlockHeroGroupS2C>((resolve)=>{
			let s2c = {error:200} as UnlockHeroGroupS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:UnlockHeroGroupS2C){
				clearTimeout(timeObj);
				AntNet.unlockHeroGroupS2C.off(fun);
				resolve(e);
			}
			AntNet.unlockHeroGroupS2C.on(fun);
			AntNet.UnlockHeroGroupC2S(heroGroupId);
		});
	}

	public static ChangeNameHeroGroupC2S(heroGroupId: number, name: string){
		net.logic.changeNameHeroGroupC2S(heroGroupId, name);
	}

	public static get changeNameHeroGroupS2C(){
		return net.logic.changeNameHeroGroupS2C;
	}

	public static async AsyncChangeNameHeroGroupC2S(heroGroupId: number, name: string):Promise<ChangeNameHeroGroupS2C>{
		return new Promise<ChangeNameHeroGroupS2C>((resolve)=>{
			let s2c = {error:200} as ChangeNameHeroGroupS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:ChangeNameHeroGroupS2C){
				clearTimeout(timeObj);
				AntNet.changeNameHeroGroupS2C.off(fun);
				resolve(e);
			}
			AntNet.changeNameHeroGroupS2C.on(fun);
			AntNet.ChangeNameHeroGroupC2S(heroGroupId, name);
		});
	}

	public static HeroGroupChangeHeroC2S(heroGroupId: number, pos: number, heroId: number){
		net.logic.heroGroupChangeHeroC2S(heroGroupId, pos, heroId);
	}

	public static get heroGroupChangeHeroS2C(){
		return net.logic.heroGroupChangeHeroS2C;
	}

	public static async AsyncHeroGroupChangeHeroC2S(heroGroupId: number, pos: number, heroId: number):Promise<HeroGroupChangeHeroS2C>{
		return new Promise<HeroGroupChangeHeroS2C>((resolve)=>{
			let s2c = {error:200} as HeroGroupChangeHeroS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:HeroGroupChangeHeroS2C){
				clearTimeout(timeObj);
				AntNet.heroGroupChangeHeroS2C.off(fun);
				resolve(e);
			}
			AntNet.heroGroupChangeHeroS2C.on(fun);
			AntNet.HeroGroupChangeHeroC2S(heroGroupId, pos, heroId);
		});
	}

	public static HeroGroupChangeSkillC2S(heroGroupId: number, pos: number, skillId: number){
		net.logic.heroGroupChangeSkillC2S(heroGroupId, pos, skillId);
	}

	public static get heroGroupChangeSkillS2C(){
		return net.logic.heroGroupChangeSkillS2C;
	}

	public static async AsyncHeroGroupChangeSkillC2S(heroGroupId: number, pos: number, skillId: number):Promise<HeroGroupChangeSkillS2C>{
		return new Promise<HeroGroupChangeSkillS2C>((resolve)=>{
			let s2c = {error:200} as HeroGroupChangeSkillS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:HeroGroupChangeSkillS2C){
				clearTimeout(timeObj);
				AntNet.heroGroupChangeSkillS2C.off(fun);
				resolve(e);
			}
			AntNet.heroGroupChangeSkillS2C.on(fun);
			AntNet.HeroGroupChangeSkillC2S(heroGroupId, pos, skillId);
		});
	}

	public static BuyFatigueC2S(goodId: number){
		net.logic.buyFatigueC2S(goodId);
	}

	public static get buyFatigueS2C(){
		return net.logic.buyFatigueS2C;
	}

	public static async AsyncBuyFatigueC2S(goodId: number):Promise<BuyFatigueS2C>{
		return new Promise<BuyFatigueS2C>((resolve)=>{
			let s2c = {error:200} as BuyFatigueS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:BuyFatigueS2C){
				clearTimeout(timeObj);
				AntNet.buyFatigueS2C.off(fun);
				resolve(e);
			}
			AntNet.buyFatigueS2C.on(fun);
			AntNet.BuyFatigueC2S(goodId);
		});
	}

	public static GetFatigueWelfareC2S(welfareId: number){
		net.logic.getFatigueWelfareC2S(welfareId);
	}

	public static get getFatigueWelfareS2C(){
		return net.logic.getFatigueWelfareS2C;
	}

	public static async AsyncGetFatigueWelfareC2S(welfareId: number):Promise<GetFatigueWelfareS2C>{
		return new Promise<GetFatigueWelfareS2C>((resolve)=>{
			let s2c = {error:200} as GetFatigueWelfareS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GetFatigueWelfareS2C){
				clearTimeout(timeObj);
				AntNet.getFatigueWelfareS2C.off(fun);
				resolve(e);
			}
			AntNet.getFatigueWelfareS2C.on(fun);
			AntNet.GetFatigueWelfareC2S(welfareId);
		});
	}

	public static UpStarEquipC2S(heroId: number, equipUid: number, type: number, eatUidList: number[]){
		net.logic.upStarEquipC2S(heroId, equipUid, type, eatUidList);
	}

	public static get upStarEquipS2C(){
		return net.logic.upStarEquipS2C;
	}

	public static async AsyncUpStarEquipC2S(heroId: number, equipUid: number, type: number, eatUidList: number[]):Promise<UpStarEquipS2C>{
		return new Promise<UpStarEquipS2C>((resolve)=>{
			let s2c = {error:200} as UpStarEquipS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:UpStarEquipS2C){
				clearTimeout(timeObj);
				AntNet.upStarEquipS2C.off(fun);
				resolve(e);
			}
			AntNet.upStarEquipS2C.on(fun);
			AntNet.UpStarEquipC2S(heroId, equipUid, type, eatUidList);
		});
	}

	public static EatEquipsC2S(heroId: number, equipUid: number, eatUidList: number[]){
		net.logic.eatEquipsC2S(heroId, equipUid, eatUidList);
	}

	public static get eatEquipsS2C(){
		return net.logic.eatEquipsS2C;
	}

	public static async AsyncEatEquipsC2S(heroId: number, equipUid: number, eatUidList: number[]):Promise<EatEquipsS2C>{
		return new Promise<EatEquipsS2C>((resolve)=>{
			let s2c = {error:200} as EatEquipsS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:EatEquipsS2C){
				clearTimeout(timeObj);
				AntNet.eatEquipsS2C.off(fun);
				resolve(e);
			}
			AntNet.eatEquipsS2C.on(fun);
			AntNet.EatEquipsC2S(heroId, equipUid, eatUidList);
		});
	}

	public static DesEquipC2S(equipUid: number){
		net.logic.desEquipC2S(equipUid);
	}

	public static get desEquipS2C(){
		return net.logic.desEquipS2C;
	}

	public static async AsyncDesEquipC2S(equipUid: number):Promise<DesEquipS2C>{
		return new Promise<DesEquipS2C>((resolve)=>{
			let s2c = {error:200} as DesEquipS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:DesEquipS2C){
				clearTimeout(timeObj);
				AntNet.desEquipS2C.off(fun);
				resolve(e);
			}
			AntNet.desEquipS2C.on(fun);
			AntNet.DesEquipC2S(equipUid);
		});
	}

	public static TakeOnEquipC2S(heroIdOn: number, heroIdOff: number, equipUid: number){
		net.logic.takeOnEquipC2S(heroIdOn, heroIdOff, equipUid);
	}

	public static get takeOnEquipS2C(){
		return net.logic.takeOnEquipS2C;
	}

	public static async AsyncTakeOnEquipC2S(heroIdOn: number, heroIdOff: number, equipUid: number):Promise<TakeOnEquipS2C>{
		return new Promise<TakeOnEquipS2C>((resolve)=>{
			let s2c = {error:200} as TakeOnEquipS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:TakeOnEquipS2C){
				clearTimeout(timeObj);
				AntNet.takeOnEquipS2C.off(fun);
				resolve(e);
			}
			AntNet.takeOnEquipS2C.on(fun);
			AntNet.TakeOnEquipC2S(heroIdOn, heroIdOff, equipUid);
		});
	}

	public static TakeOffEquipC2S(heroIdOff: number, equipUid: number){
		net.logic.takeOffEquipC2S(heroIdOff, equipUid);
	}

	public static get takeOffEquipS2C(){
		return net.logic.takeOffEquipS2C;
	}

	public static async AsyncTakeOffEquipC2S(heroIdOff: number, equipUid: number):Promise<TakeOffEquipS2C>{
		return new Promise<TakeOffEquipS2C>((resolve)=>{
			let s2c = {error:200} as TakeOffEquipS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:TakeOffEquipS2C){
				clearTimeout(timeObj);
				AntNet.takeOffEquipS2C.off(fun);
				resolve(e);
			}
			AntNet.takeOffEquipS2C.on(fun);
			AntNet.TakeOffEquipC2S(heroIdOff, equipUid);
		});
	}

	public static RedSpotC2S(){
		net.logic.redSpotC2S();
	}

	public static get redSpotS2C(){
		return net.logic.redSpotS2C;
	}

	public static async AsyncRedSpotC2S():Promise<RedSpotS2C>{
		return new Promise<RedSpotS2C>((resolve)=>{
			let s2c = {error:200} as RedSpotS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:RedSpotS2C){
				clearTimeout(timeObj);
				AntNet.redSpotS2C.off(fun);
				resolve(e);
			}
			AntNet.redSpotS2C.on(fun);
			AntNet.RedSpotC2S();
		});
	}

	public static MakeTeamC2S(aim: number, heroId: number, hero: GamerHero, secretLand: GamerSecretLand){
		net.logic.makeTeamC2S(aim, heroId, hero, secretLand);
	}

	public static get makeTeamS2C(){
		return net.logic.makeTeamS2C;
	}

	public static async AsyncMakeTeamC2S(aim: number, heroId: number, hero: GamerHero, secretLand: GamerSecretLand):Promise<MakeTeamS2C>{
		return new Promise<MakeTeamS2C>((resolve)=>{
			let s2c = {error:200} as MakeTeamS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:MakeTeamS2C){
				clearTimeout(timeObj);
				AntNet.makeTeamS2C.off(fun);
				resolve(e);
			}
			AntNet.makeTeamS2C.on(fun);
			AntNet.MakeTeamC2S(aim, heroId, hero, secretLand);
		});
	}

	public static SetTeamAimC2S(aim: number){
		net.logic.setTeamAimC2S(aim);
	}

	public static get setTeamAimS2C(){
		return net.logic.setTeamAimS2C;
	}

	public static async AsyncSetTeamAimC2S(aim: number):Promise<SetTeamAimS2C>{
		return new Promise<SetTeamAimS2C>((resolve)=>{
			let s2c = {error:200} as SetTeamAimS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:SetTeamAimS2C){
				clearTimeout(timeObj);
				AntNet.setTeamAimS2C.off(fun);
				resolve(e);
			}
			AntNet.setTeamAimS2C.on(fun);
			AntNet.SetTeamAimC2S(aim);
		});
	}

	public static JoinTeamC2S(teamId: number, heroId: number, hero: GamerHero, secretLand: GamerSecretLand){
		net.logic.joinTeamC2S(teamId, heroId, hero, secretLand);
	}

	public static get joinTeamS2C(){
		return net.logic.joinTeamS2C;
	}

	public static async AsyncJoinTeamC2S(teamId: number, heroId: number, hero: GamerHero, secretLand: GamerSecretLand):Promise<JoinTeamS2C>{
		return new Promise<JoinTeamS2C>((resolve)=>{
			let s2c = {error:200} as JoinTeamS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:JoinTeamS2C){
				clearTimeout(timeObj);
				AntNet.joinTeamS2C.off(fun);
				resolve(e);
			}
			AntNet.joinTeamS2C.on(fun);
			AntNet.JoinTeamC2S(teamId, heroId, hero, secretLand);
		});
	}

	public static ExitTeamC2S(){
		net.logic.exitTeamC2S();
	}

	public static get exitTeamS2C(){
		return net.logic.exitTeamS2C;
	}

	public static async AsyncExitTeamC2S():Promise<ExitTeamS2C>{
		return new Promise<ExitTeamS2C>((resolve)=>{
			let s2c = {error:200} as ExitTeamS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:ExitTeamS2C){
				clearTimeout(timeObj);
				AntNet.exitTeamS2C.off(fun);
				resolve(e);
			}
			AntNet.exitTeamS2C.on(fun);
			AntNet.ExitTeamC2S();
		});
	}

	public static TurnOverTeamLeaderC2S(newLeaderId: number){
		net.logic.turnOverTeamLeaderC2S(newLeaderId);
	}

	public static get turnOverTeamLeaderS2C(){
		return net.logic.turnOverTeamLeaderS2C;
	}

	public static async AsyncTurnOverTeamLeaderC2S(newLeaderId: number):Promise<TurnOverTeamLeaderS2C>{
		return new Promise<TurnOverTeamLeaderS2C>((resolve)=>{
			let s2c = {error:200} as TurnOverTeamLeaderS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:TurnOverTeamLeaderS2C){
				clearTimeout(timeObj);
				AntNet.turnOverTeamLeaderS2C.off(fun);
				resolve(e);
			}
			AntNet.turnOverTeamLeaderS2C.on(fun);
			AntNet.TurnOverTeamLeaderC2S(newLeaderId);
		});
	}

	public static InviteTeamC2S(gid: number){
		net.logic.inviteTeamC2S(gid);
	}

	public static get inviteTeamS2C(){
		return net.logic.inviteTeamS2C;
	}

	public static async AsyncInviteTeamC2S(gid: number):Promise<InviteTeamS2C>{
		return new Promise<InviteTeamS2C>((resolve)=>{
			let s2c = {error:200} as InviteTeamS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:InviteTeamS2C){
				clearTimeout(timeObj);
				AntNet.inviteTeamS2C.off(fun);
				resolve(e);
			}
			AntNet.inviteTeamS2C.on(fun);
			AntNet.InviteTeamC2S(gid);
		});
	}

	public static RejectTeamC2S(teamId: number, gid: number, type: InviteType){
		net.logic.rejectTeamC2S(teamId, gid, type);
	}

	public static get rejectTeamS2C(){
		return net.logic.rejectTeamS2C;
	}

	public static async AsyncRejectTeamC2S(teamId: number, gid: number, type: InviteType):Promise<RejectTeamS2C>{
		return new Promise<RejectTeamS2C>((resolve)=>{
			let s2c = {error:200} as RejectTeamS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:RejectTeamS2C){
				clearTimeout(timeObj);
				AntNet.rejectTeamS2C.off(fun);
				resolve(e);
			}
			AntNet.rejectTeamS2C.on(fun);
			AntNet.RejectTeamC2S(teamId, gid, type);
		});
	}

	public static KickTeamC2S(gid: number){
		net.logic.kickTeamC2S(gid);
	}

	public static get kickTeamS2C(){
		return net.logic.kickTeamS2C;
	}

	public static async AsyncKickTeamC2S(gid: number):Promise<KickTeamS2C>{
		return new Promise<KickTeamS2C>((resolve)=>{
			let s2c = {error:200} as KickTeamS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:KickTeamS2C){
				clearTimeout(timeObj);
				AntNet.kickTeamS2C.off(fun);
				resolve(e);
			}
			AntNet.kickTeamS2C.on(fun);
			AntNet.KickTeamC2S(gid);
		});
	}

	public static SetTeamHelpC2S(isHelper: boolean){
		net.logic.setTeamHelpC2S(isHelper);
	}

	public static get setTeamHelpS2C(){
		return net.logic.setTeamHelpS2C;
	}

	public static async AsyncSetTeamHelpC2S(isHelper: boolean):Promise<SetTeamHelpS2C>{
		return new Promise<SetTeamHelpS2C>((resolve)=>{
			let s2c = {error:200} as SetTeamHelpS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:SetTeamHelpS2C){
				clearTimeout(timeObj);
				AntNet.setTeamHelpS2C.off(fun);
				resolve(e);
			}
			AntNet.setTeamHelpS2C.on(fun);
			AntNet.SetTeamHelpC2S(isHelper);
		});
	}

	public static SetTeamHeroC2S(heroId: number, skillId: number, hero: GamerHero){
		net.logic.setTeamHeroC2S(heroId, skillId, hero);
	}

	public static get setTeamHeroS2C(){
		return net.logic.setTeamHeroS2C;
	}

	public static async AsyncSetTeamHeroC2S(heroId: number, skillId: number, hero: GamerHero):Promise<SetTeamHeroS2C>{
		return new Promise<SetTeamHeroS2C>((resolve)=>{
			let s2c = {error:200} as SetTeamHeroS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:SetTeamHeroS2C){
				clearTimeout(timeObj);
				AntNet.setTeamHeroS2C.off(fun);
				resolve(e);
			}
			AntNet.setTeamHeroS2C.on(fun);
			AntNet.SetTeamHeroC2S(heroId, skillId, hero);
		});
	}

	public static SwitchTeamReadyC2S(){
		net.logic.switchTeamReadyC2S();
	}

	public static get switchTeamReadyS2C(){
		return net.logic.switchTeamReadyS2C;
	}

	public static async AsyncSwitchTeamReadyC2S():Promise<SwitchTeamReadyS2C>{
		return new Promise<SwitchTeamReadyS2C>((resolve)=>{
			let s2c = {error:200} as SwitchTeamReadyS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:SwitchTeamReadyS2C){
				clearTimeout(timeObj);
				AntNet.switchTeamReadyS2C.off(fun);
				resolve(e);
			}
			AntNet.switchTeamReadyS2C.on(fun);
			AntNet.SwitchTeamReadyC2S();
		});
	}

	public static TeamBattleC2S(){
		net.logic.teamBattleC2S();
	}

	public static get teamBattleS2C(){
		return net.logic.teamBattleS2C;
	}

	public static async AsyncTeamBattleC2S():Promise<TeamBattleS2C>{
		return new Promise<TeamBattleS2C>((resolve)=>{
			let s2c = {error:200} as TeamBattleS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:TeamBattleS2C){
				clearTimeout(timeObj);
				AntNet.teamBattleS2C.off(fun);
				resolve(e);
			}
			AntNet.teamBattleS2C.on(fun);
			AntNet.TeamBattleC2S();
		});
	}

	public static GetDanInfoC2S(){
		net.logic.getDanInfoC2S();
	}

	public static get getDanInfoS2C(){
		return net.logic.getDanInfoS2C;
	}

	public static async AsyncGetDanInfoC2S():Promise<GetDanInfoS2C>{
		return new Promise<GetDanInfoS2C>((resolve)=>{
			let s2c = {error:200} as GetDanInfoS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GetDanInfoS2C){
				clearTimeout(timeObj);
				AntNet.getDanInfoS2C.off(fun);
				resolve(e);
			}
			AntNet.getDanInfoS2C.on(fun);
			AntNet.GetDanInfoC2S();
		});
	}

	public static GetDuelRankC2S(type: RankType, seasonId: number, start: number, length: number){
		net.logic.getDuelRankC2S(type, seasonId, start, length);
	}

	public static get getDuelRankS2C(){
		return net.logic.getDuelRankS2C;
	}

	public static async AsyncGetDuelRankC2S(type: RankType, seasonId: number, start: number, length: number):Promise<GetDuelRankS2C>{
		return new Promise<GetDuelRankS2C>((resolve)=>{
			let s2c = {error:200} as GetDuelRankS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GetDuelRankS2C){
				clearTimeout(timeObj);
				AntNet.getDuelRankS2C.off(fun);
				resolve(e);
			}
			AntNet.getDuelRankS2C.on(fun);
			AntNet.GetDuelRankC2S(type, seasonId, start, length);
		});
	}

	public static SysListC2S(){
		net.logic.sysListC2S();
	}

	public static get sysListS2C(){
		return net.logic.sysListS2C;
	}

	public static async AsyncSysListC2S():Promise<SysListS2C>{
		return new Promise<SysListS2C>((resolve)=>{
			let s2c = {error:200} as SysListS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:SysListS2C){
				clearTimeout(timeObj);
				AntNet.sysListS2C.off(fun);
				resolve(e);
			}
			AntNet.sysListS2C.on(fun);
			AntNet.SysListC2S();
		});
	}

	public static SysOpenShowC2S(sysid: number){
		net.logic.sysOpenShowC2S(sysid);
	}

	public static get sysOpenShowS2C(){
		return net.logic.sysOpenShowS2C;
	}

	public static async AsyncSysOpenShowC2S(sysid: number):Promise<SysOpenShowS2C>{
		return new Promise<SysOpenShowS2C>((resolve)=>{
			let s2c = {error:200} as SysOpenShowS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:SysOpenShowS2C){
				clearTimeout(timeObj);
				AntNet.sysOpenShowS2C.off(fun);
				resolve(e);
			}
			AntNet.sysOpenShowS2C.on(fun);
			AntNet.SysOpenShowC2S(sysid);
		});
	}

	public static GetQuestsC2S(){
		net.logic.getQuestsC2S();
	}

	public static get getQuestsS2C(){
		return net.logic.getQuestsS2C;
	}

	public static async AsyncGetQuestsC2S():Promise<GetQuestsS2C>{
		return new Promise<GetQuestsS2C>((resolve)=>{
			let s2c = {error:200} as GetQuestsS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GetQuestsS2C){
				clearTimeout(timeObj);
				AntNet.getQuestsS2C.off(fun);
				resolve(e);
			}
			AntNet.getQuestsS2C.on(fun);
			AntNet.GetQuestsC2S();
		});
	}

	public static GetQuestRewardC2S(questId: number){
		net.logic.getQuestRewardC2S(questId);
	}

	public static get getQuestRewardS2C(){
		return net.logic.getQuestRewardS2C;
	}

	public static async AsyncGetQuestRewardC2S(questId: number):Promise<GetQuestRewardS2C>{
		return new Promise<GetQuestRewardS2C>((resolve)=>{
			let s2c = {error:200} as GetQuestRewardS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GetQuestRewardS2C){
				clearTimeout(timeObj);
				AntNet.getQuestRewardS2C.off(fun);
				resolve(e);
			}
			AntNet.getQuestRewardS2C.on(fun);
			AntNet.GetQuestRewardC2S(questId);
		});
	}

	public static GetDailyQuestRewardC2S(rewardActive: number){
		net.logic.getDailyQuestRewardC2S(rewardActive);
	}

	public static get getDailyQuestRewardS2C(){
		return net.logic.getDailyQuestRewardS2C;
	}

	public static async AsyncGetDailyQuestRewardC2S(rewardActive: number):Promise<GetDailyQuestRewardS2C>{
		return new Promise<GetDailyQuestRewardS2C>((resolve)=>{
			let s2c = {error:200} as GetDailyQuestRewardS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GetDailyQuestRewardS2C){
				clearTimeout(timeObj);
				AntNet.getDailyQuestRewardS2C.off(fun);
				resolve(e);
			}
			AntNet.getDailyQuestRewardS2C.on(fun);
			AntNet.GetDailyQuestRewardC2S(rewardActive);
		});
	}

	public static GamerHeroImageChooseC2S(){
		net.logic.gamerHeroImageChooseC2S();
	}

	public static get gamerHeroImageChooseS2C(){
		return net.logic.gamerHeroImageChooseS2C;
	}

	public static async AsyncGamerHeroImageChooseC2S():Promise<GamerHeroImageChooseS2C>{
		return new Promise<GamerHeroImageChooseS2C>((resolve)=>{
			let s2c = {error:200} as GamerHeroImageChooseS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerHeroImageChooseS2C){
				clearTimeout(timeObj);
				AntNet.gamerHeroImageChooseS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerHeroImageChooseS2C.on(fun);
			AntNet.GamerHeroImageChooseC2S();
		});
	}

	public static GamerHeroImageChangeC2S(heroId: number){
		net.logic.gamerHeroImageChangeC2S(heroId);
	}

	public static get gamerHeroImageChangeS2C(){
		return net.logic.gamerHeroImageChangeS2C;
	}

	public static async AsyncGamerHeroImageChangeC2S(heroId: number):Promise<GamerHeroImageChangeS2C>{
		return new Promise<GamerHeroImageChangeS2C>((resolve)=>{
			let s2c = {error:200} as GamerHeroImageChangeS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerHeroImageChangeS2C){
				clearTimeout(timeObj);
				AntNet.gamerHeroImageChangeS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerHeroImageChangeS2C.on(fun);
			AntNet.GamerHeroImageChangeC2S(heroId);
		});
	}

	public static GamerBuyRollC2S(num: number){
		net.logic.gamerBuyRollC2S(num);
	}

	public static get gamerBuyRollS2C(){
		return net.logic.gamerBuyRollS2C;
	}

	public static async AsyncGamerBuyRollC2S(num: number):Promise<GamerBuyRollS2C>{
		return new Promise<GamerBuyRollS2C>((resolve)=>{
			let s2c = {error:200} as GamerBuyRollS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerBuyRollS2C){
				clearTimeout(timeObj);
				AntNet.gamerBuyRollS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerBuyRollS2C.on(fun);
			AntNet.GamerBuyRollC2S(num);
		});
	}

	public static GetGamerSecretLandC2S(){
		net.logic.getGamerSecretLandC2S();
	}

	public static get getGamerSecretLandS2C(){
		return net.logic.getGamerSecretLandS2C;
	}

	public static async AsyncGetGamerSecretLandC2S():Promise<GetGamerSecretLandS2C>{
		return new Promise<GetGamerSecretLandS2C>((resolve)=>{
			let s2c = {error:200} as GetGamerSecretLandS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GetGamerSecretLandS2C){
				clearTimeout(timeObj);
				AntNet.getGamerSecretLandS2C.off(fun);
				resolve(e);
			}
			AntNet.getGamerSecretLandS2C.on(fun);
			AntNet.GetGamerSecretLandC2S();
		});
	}

	public static GamerSecretLandBattleRewardC2S(useRoll: boolean){
		net.logic.gamerSecretLandBattleRewardC2S(useRoll);
	}

	public static get gamerSecretLandBattleRewardS2C(){
		return net.logic.gamerSecretLandBattleRewardS2C;
	}

	public static async AsyncGamerSecretLandBattleRewardC2S(useRoll: boolean):Promise<GamerSecretLandBattleRewardS2C>{
		return new Promise<GamerSecretLandBattleRewardS2C>((resolve)=>{
			let s2c = {error:200} as GamerSecretLandBattleRewardS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerSecretLandBattleRewardS2C){
				clearTimeout(timeObj);
				AntNet.gamerSecretLandBattleRewardS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerSecretLandBattleRewardS2C.on(fun);
			AntNet.GamerSecretLandBattleRewardC2S(useRoll);
		});
	}

	public static GamerSecretLandWeekRewardC2S(){
		net.logic.gamerSecretLandWeekRewardC2S();
	}

	public static get gamerSecretLandWeekRewardS2C(){
		return net.logic.gamerSecretLandWeekRewardS2C;
	}

	public static async AsyncGamerSecretLandWeekRewardC2S():Promise<GamerSecretLandWeekRewardS2C>{
		return new Promise<GamerSecretLandWeekRewardS2C>((resolve)=>{
			let s2c = {error:200} as GamerSecretLandWeekRewardS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerSecretLandWeekRewardS2C){
				clearTimeout(timeObj);
				AntNet.gamerSecretLandWeekRewardS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerSecretLandWeekRewardS2C.on(fun);
			AntNet.GamerSecretLandWeekRewardC2S();
		});
	}

	public static GamerSecretLandRankC2S(type: number){
		net.logic.gamerSecretLandRankC2S(type);
	}

	public static get gamerSecretLandRankS2C(){
		return net.logic.gamerSecretLandRankS2C;
	}

	public static async AsyncGamerSecretLandRankC2S(type: number):Promise<GamerSecretLandRankS2C>{
		return new Promise<GamerSecretLandRankS2C>((resolve)=>{
			let s2c = {error:200} as GamerSecretLandRankS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerSecretLandRankS2C){
				clearTimeout(timeObj);
				AntNet.gamerSecretLandRankS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerSecretLandRankS2C.on(fun);
			AntNet.GamerSecretLandRankC2S(type);
		});
	}

	public static GetGamerSecretLandInfoC2S(){
		net.logic.getGamerSecretLandInfoC2S();
	}

	public static get getGamerSecretLandInfoS2C(){
		return net.logic.getGamerSecretLandInfoS2C;
	}

	public static async AsyncGetGamerSecretLandInfoC2S():Promise<GetGamerSecretLandInfoS2C>{
		return new Promise<GetGamerSecretLandInfoS2C>((resolve)=>{
			let s2c = {error:200} as GetGamerSecretLandInfoS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GetGamerSecretLandInfoS2C){
				clearTimeout(timeObj);
				AntNet.getGamerSecretLandInfoS2C.off(fun);
				resolve(e);
			}
			AntNet.getGamerSecretLandInfoS2C.on(fun);
			AntNet.GetGamerSecretLandInfoC2S();
		});
	}

	public static GamerChangeItemIsSawC2S(type: number, uidList: number[]){
		net.logic.gamerChangeItemIsSawC2S(type, uidList);
	}

	public static get gamerChangeItemIsSawS2C(){
		return net.logic.gamerChangeItemIsSawS2C;
	}

	public static async AsyncGamerChangeItemIsSawC2S(type: number, uidList: number[]):Promise<GamerChangeItemIsSawS2C>{
		return new Promise<GamerChangeItemIsSawS2C>((resolve)=>{
			let s2c = {error:200} as GamerChangeItemIsSawS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerChangeItemIsSawS2C){
				clearTimeout(timeObj);
				AntNet.gamerChangeItemIsSawS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerChangeItemIsSawS2C.on(fun);
			AntNet.GamerChangeItemIsSawC2S(type, uidList);
		});
	}

	public static get gamerNotifyLoginOtherS2C(){
		return net.logic.gamerNotifyLoginOtherS2C;
	}

	public static get gamerNotifyExpLevelS2C(){
		return net.logic.gamerNotifyExpLevelS2C;
	}

	public static get gamerNotifyItemChangeS2C(){
		return net.logic.gamerNotifyItemChangeS2C;
	}

	public static get gamerNotifyNewChatS2C(){
		return net.logic.gamerNotifyNewChatS2C;
	}

	public static get gamerNotifyNewFriendReqS2C(){
		return net.logic.gamerNotifyNewFriendReqS2C;
	}

	public static get gamerNotifyNewFriendS2C(){
		return net.logic.gamerNotifyNewFriendS2C;
	}

	public static get gamerNotifyDelFriendS2C(){
		return net.logic.gamerNotifyDelFriendS2C;
	}

	public static get gamerNotifyNoticeS2C(){
		return net.logic.gamerNotifyNoticeS2C;
	}

	public static get gamerNotifyMailS2C(){
		return net.logic.gamerNotifyMailS2C;
	}

	public static get gamerNotifyNewMailS2C(){
		return net.logic.gamerNotifyNewMailS2C;
	}

	public static get gamerNotifyHerosChangeS2C(){
		return net.logic.gamerNotifyHerosChangeS2C;
	}

	public static get gamerNotifyHeroPropUpdateS2C(){
		return net.logic.gamerNotifyHeroPropUpdateS2C;
	}

	public static get gamerNotifyPVPLoadingS2C(){
		return net.logic.gamerNotifyPVPLoadingS2C;
	}

	public static get gamerNotifyGamerMiniS2C(){
		return net.logic.gamerNotifyGamerMiniS2C;
	}

	public static get gamerNotifyPVPSyncS2C(){
		return net.logic.gamerNotifyPVPSyncS2C;
	}

	public static get gamerNotifyNewPVPResultS2C(){
		return net.logic.gamerNotifyNewPVPResultS2C;
	}

	public static get gamerNotifyIconChangeS2C(){
		return net.logic.gamerNotifyIconChangeS2C;
	}

	public static get gamerNotifyDiamonChangeS2C(){
		return net.logic.gamerNotifyDiamonChangeS2C;
	}

	public static get gamerNotifyEnergyChangeS2C(){
		return net.logic.gamerNotifyEnergyChangeS2C;
	}

	public static get gamerNotifyExpChangeS2C(){
		return net.logic.gamerNotifyExpChangeS2C;
	}

	public static get gamerNotifyMatchInfoS2C(){
		return net.logic.gamerNotifyMatchInfoS2C;
	}

	public static get gamerNotifyGashaponInfoS2C(){
		return net.logic.gamerNotifyGashaponInfoS2C;
	}

	public static get gamerNotifyActivitiesS2C(){
		return net.logic.gamerNotifyActivitiesS2C;
	}

	public static get gamerNotifyApplyJoinGuildS2C(){
		return net.logic.gamerNotifyApplyJoinGuildS2C;
	}

	public static get gamerNotifyInviteJoinGuildS2C(){
		return net.logic.gamerNotifyInviteJoinGuildS2C;
	}

	public static get gamerNotifyGuildMemUpdateS2C(){
		return net.logic.gamerNotifyGuildMemUpdateS2C;
	}

	public static get gamerNotifyGuildChatS2C(){
		return net.logic.gamerNotifyGuildChatS2C;
	}

	public static get gamerNotifyCheckPointListS2C(){
		return net.logic.gamerNotifyCheckPointListS2C;
	}

	public static get gamerNotifyNewCheckPointListS2C(){
		return net.logic.gamerNotifyNewCheckPointListS2C;
	}

	public static get gamerNotifyRewardS2C(){
		return net.logic.gamerNotifyRewardS2C;
	}

	public static get gamerNotifyUnlockPosHeroGroupS2C(){
		return net.logic.gamerNotifyUnlockPosHeroGroupS2C;
	}

	public static get gamerNotifyFatigueS2C(){
		return net.logic.gamerNotifyFatigueS2C;
	}

	public static get gamerNotifyTeamS2C(){
		return net.logic.gamerNotifyTeamS2C;
	}

	public static get gamerNotifyTeamInfoS2C(){
		return net.logic.gamerNotifyTeamInfoS2C;
	}

	public static get gamerNotifyTeamChangeS2C(){
		return net.logic.gamerNotifyTeamChangeS2C;
	}

	public static get gamerNotifyTeamMemberChangeS2C(){
		return net.logic.gamerNotifyTeamMemberChangeS2C;
	}

	public static get gamerNotifyLeaveTeamS2C(){
		return net.logic.gamerNotifyLeaveTeamS2C;
	}

	public static get gamerNotifyTeamReadyS2C(){
		return net.logic.gamerNotifyTeamReadyS2C;
	}

	public static get gamerNotifyDanInfoS2C(){
		return net.logic.gamerNotifyDanInfoS2C;
	}

	public static get gamerNotifyNewSeasonS2C(){
		return net.logic.gamerNotifyNewSeasonS2C;
	}

	public static get gamerNotifyQuestsS2C(){
		return net.logic.gamerNotifyQuestsS2C;
	}

	public static get gamerNotifyGamerSecretLandInfoS2C(){
		return net.logic.gamerNotifyGamerSecretLandInfoS2C;
	}

	public static get gamerNotifySecretLandInfoS2C(){
		return net.logic.gamerNotifySecretLandInfoS2C;
	}

	public static get gamerNotifySLTreasureBoxS2C(){
		return net.logic.gamerNotifySLTreasureBoxS2C;
	}

	public static get gamerNotifyNewSecretLandResultS2C(){
		return net.logic.gamerNotifyNewSecretLandResultS2C;
	}

}
		