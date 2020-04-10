/////////////////////////////////////
// ExportKey生成
// http://blog.ihaiu.com
/////////////////////////////////////

export default class MsgKey
{
	// 0 KeyField
	// 1 KeyValue
	// 2 ID
	// 3 ModuleName
	// 4 Name

	/** 1000  测试 --- 测试 */
	static Msg_test = "Msg_test";

	/** 1001  账号信息 --- 名称长度不对 */
	static account_name_long = "account_name_long";

	/** 1002  账号信息 --- 名称为纯数字 */
	static account_name_num = "account_name_num";

	/** 1003  账号信息 --- 名称开头和结尾有空格 */
	static account_name_space = "account_name_space";

	/** 1004  账号信息 --- 名称与原名相同 */
	static account_name_repeat = "account_name_repeat";

	/** 1005  账号信息 --- 名称中有屏蔽词 */
	static account_name_blockword = "account_name_blockword";

	/** 1006  账号信息 --- 名称与其他玩家重名 */
	static account_name_repeatothers = "account_name_repeatothers";

	/** 1007  英雄 --- 升级提示 */
	static hero_levelUp_notEnough = "hero_levelUp_notEnough";

	/** 1008  装备 --- 升级提示 */
	static Equip_levelUp_More_Player = "Equip_levelUp_More_Player";

	/** 1009  装备 --- 升级提示 */
	static Equip_levelUp_No_Item = "Equip_levelUp_No_Item";

	/** 1010  装备 ---穿装备提示 */
	static hero_changeEquip_notPos = "hero_changeEquip_notPos";

	/** 1011  装备 --- 穿装备提示 */
	static hero_changeEquip_notHero = "hero_changeEquip_notHero";

}