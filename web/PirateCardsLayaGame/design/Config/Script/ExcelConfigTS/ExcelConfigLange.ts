import Game from '../Game';


export class LoaderConfigLang extends excelconfigSources.Loader
{

}

export class MenuConfigLang extends excelconfigSources.Menu
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('Menu', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

}

export class MsgConfigLang extends excelconfigSources.Msg
{

	get notice():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnNotice

		let value = <string> Game.lang.getValue('Msg', this.id, 'zhCnNotice');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnNotice
	}

}

export class UnlockConfigLang extends excelconfigSources.Unlock
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('Unlock', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

}