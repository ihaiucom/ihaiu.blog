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

export class EffectTypeConfigLang extends excelconfigSources.EffectType
{

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

	get des():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnDes

		let value = <string> Game.lang.getValue('Item', this.id, 'zhCnDes');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnDes
	}

}

export class ItemConsumeConfigLang extends excelconfigSources.ItemConsume
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('ItemConsume', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

	get itemDes():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnItemdes

		let value = <string> Game.lang.getValue('ItemConsume', this.id, 'zhCnItemdes');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnItemdes
	}

}

export class ItemDecorateConfigLang extends excelconfigSources.ItemDecorate
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('ItemDecorate', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

	get itemDes():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnItemdes

		let value = <string> Game.lang.getValue('ItemDecorate', this.id, 'zhCnItemdes');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnItemdes
	}

}

export class ItemWeaponConfigLang extends excelconfigSources.ItemWeapon
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('ItemWeapon', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

	get itemDes():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnItemdes

		let value = <string> Game.lang.getValue('ItemWeapon', this.id, 'zhCnItemdes');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnItemdes
	}

}

export class LevelConfigLang extends excelconfigSources.Level
{

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

export class PropertyConfigLang extends excelconfigSources.Property
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('Property', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
	}

}

export class TriggerTypeConfigLang extends excelconfigSources.TriggerType
{

	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zhCnName

		let value = <string> Game.lang.getValue('TriggerType', this.id, 'zhCnName');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zhCnName
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