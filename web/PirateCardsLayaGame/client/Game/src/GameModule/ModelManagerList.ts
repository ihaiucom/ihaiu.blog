import MModel from "../GameFrame/Module/MModel";
import LoginModel from "./DataModels/LoginModel";
import HeroModel from "./DataModels/HeroModel";

//======================
// 模块 数据模型 管理器
//----------------------
export default class ModelManagerList
{
	/** 列表 */
	list: MModel[] = [];

	/** 登录 */
	login: LoginModel 		= new LoginModel();
	/** 英雄 */
	hero: HeroModel 		= new HeroModel();
	
	// 初始化列表
	initList()
	{
		this.list.push(this.login);
		this.list.push(this.hero);
	}
}