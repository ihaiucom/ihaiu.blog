import Game from '../Game';


export class CardConfigLang extends excelconfigSources.Card
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('Card', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

}

export class CardScoreTypeConfigLang extends excelconfigSources.CardScoreType
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('CardScoreType', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

}

export class ItemConfigLang extends excelconfigSources.Item
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('Item', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

	get en():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnEn

		let value = <string> Game.lang.getValue('Item', this.id, 'zhCnEn');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnEn
	}

	get itemDes():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnItemdes

		let value = <string> Game.lang.getValue('Item', this.id, 'zhCnItemdes');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnItemdes
	}

}

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