import { MenuId } from "./MenuId";
import { MenuIndexId } from "./MenuIndexId";


//=========================
// 验证基类
//-------------------------
export default class MenuValidate
{

	/**
	 * 获取单例实例
	 */
	public static getInstance(): MenuValidate
	{
		var Class: any = this;
		if (Class.__instance == null)
		{
			Class.__instance = new Class();
			(<MenuValidate>Class.__instance).install();
		}
		return <MenuValidate>Class.__instance;
	}


	dict: Dictionary<MenuId, Function> = new Dictionary<MenuId, Function>();
	validate(menuId: MenuId): boolean | number
	{
		if (this.dict.hasKey(menuId))
		{
			return this.dict.getValue(menuId).apply(this);
		}
		return true;
	}

	validateTab(menuIndexId: MenuIndexId, data:any): boolean | number
	{
		return true;
	}

	openMenu(menuId: MenuId, parent?: GComponent)
	{

	}

	openTab(menuIndexId: MenuIndexId, data:any, parent?: GComponent)
	{

	}

	openItem(menuId: MenuId, data: any, parent?: GComponent)
	{

	}

	closeRed(parent: GComponent)
	{

	}

	add(menuId: MenuId, fun: Function)
	{
		this.dict.add(menuId, fun);
	}

	install()
	{
		
	}


}





