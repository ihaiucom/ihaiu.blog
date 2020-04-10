import MModel from "../GameFrame/Module/MModel";
import MailModel from "./DataModels/MailModel";
import RoleModel from "./DataModels/RoleModel";
import GashaponModel from "./DataModels/GashaponModel";
import MatchRoomModel from "./DataModels/MatchRoomModel";
import MatchModel from "./DataModels/MatchModel";
import DraugModel from "./DataModels/DraugModel";
import SectionModel from './DataModels/SectionModel';
import HeroModel from "./DataModels/HeroModel";
import PowerModel from "./DataModels/PowerModel";
import BattlePlanModel from "./DataModels/BattlePlanModel";
import EquipModel from "./DataModels/EquipModel";
import TeamModel from "./DataModels/TeamModel";
import PVPModel from './DataModels/PVPModel';
import BagModel from './DataModels/BagModel';
import QuestModel from "./DataModels/QuestModel";
import GuideModel from "./DataModels/GuideModel";
import HomeModel from "./DataModels/HomeModel";
import LoginModel from "./DataModels/LoginModel";
import PlotModel from "./DataModels/PlotModel";
import PlotManager from "./DataModels/PlotManager";
import SecretLandModel from './DataModels/SecretLandModel';

//======================
// 模块 数据模型 管理器
//----------------------
export default class ModelManagerList
{
	/** 列表 */
	list: MModel[] = [];

	/** 登录 */
	login: LoginModel 		= new LoginModel();
	
	/** 主界面 */
	home: HomeModel 		= new HomeModel();

	/** 角色 */
	role: RoleModel 		= new RoleModel();

	/** 物品 */
	bag: BagModel 		= new BagModel();

	/** 邮件 */
	mail: MailModel 		= new MailModel();

	/** 抽奖 */
	gashapon: GashaponModel = new GashaponModel();

	/** 战魂 */
	draug:DraugModel		= new DraugModel();

	/** 匹配 */
	match: MatchModel 		= new MatchModel();
	/** 匹配房间 */
    room: MatchRoomModel	= new MatchRoomModel();
    
    section: SectionModel  = new SectionModel();

	/** 英雄 */
	// 英雄
	hero: HeroModel			= new HeroModel();
	// 装备
	equip: EquipModel			= new EquipModel();

	/** 体力 */
	power: PowerModel       = new PowerModel();

	/** 备战 */
	battlePlan : BattlePlanModel = new BattlePlanModel();

	/** 组队大厅 */
    team : TeamModel = new TeamModel();
    
    /** 竞技大厅 */
    pvp: PVPModel = new PVPModel();

	/** 任务 */
	quest: QuestModel = new QuestModel();

	/** 新手引导 */
	guide: GuideModel = new GuideModel();

	/** 剧情引导 */
	plot: PlotModel = new PlotModel();

	/** 剧情引导管理器 */
	plotManager: PlotManager = new PlotManager();
    
    /** 大秘境 */
    secretLand: SecretLandModel = new SecretLandModel();
	
	// 初始化列表
	initList()
	{
		this.list.push(this.login);
		this.list.push(this.role);
		this.list.push(this.bag);
		this.list.push(this.mail);
		this.list.push(this.draug);
		this.list.push(this.gashapon);
		this.list.push(this.match);
        this.list.push(this.room);
        this.list.push(this.section);
		this.list.push(this.room);
		this.list.push(this.hero);
		this.list.push(this.power);
		this.list.push(this.battlePlan);
        this.list.push(this.equip);
        this.list.push(this.pvp);
        this.list.push(this.secretLand);
		this.list.push(this.quest);
		this.list.push(this.guide);
		this.list.push(this.home);
		this.list.push(this.plot);
		this.list.push(this.plotManager);
        this.list.push(this.home);
	}
}