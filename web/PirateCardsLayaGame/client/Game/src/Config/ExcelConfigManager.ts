
import ExcelConfigReader from "./ExcelConfigReader";
import CardConfig from './ConfigExtends/CardConfig';
import CardScoreTypeConfig from './ConfigExtends/CardScoreTypeConfig';
import EffectTypeConfig from './ConfigExtends/EffectTypeConfig';
import ItemConfig from './ConfigExtends/ItemConfig';
import ItemConsumeConfig from './ConfigExtends/ItemConsumeConfig';
import ItemDecorateConfig from './ConfigExtends/ItemDecorateConfig';
import ItemWeaponConfig from './ConfigExtends/ItemWeaponConfig';
import LevelConfig from './ConfigExtends/LevelConfig';
import LoaderConfig from './ConfigExtends/LoaderConfig';
import MenuConfig from './ConfigExtends/MenuConfig';
import MsgConfig from './ConfigExtends/MsgConfig';
import PropertyConfig from './ConfigExtends/PropertyConfig';
import TriggerTypeConfig from './ConfigExtends/TriggerTypeConfig';
import UnlockConfig from './ConfigExtends/UnlockConfig';

import CardConfigReader from './ReaderExtends/CardConfigReader';
import CardScoreTypeConfigReader from './ReaderExtends/CardScoreTypeConfigReader';
import EffectTypeConfigReader from './ReaderExtends/EffectTypeConfigReader';
import ItemConfigReader from './ReaderExtends/ItemConfigReader';
import ItemConsumeConfigReader from './ReaderExtends/ItemConsumeConfigReader';
import ItemDecorateConfigReader from './ReaderExtends/ItemDecorateConfigReader';
import ItemWeaponConfigReader from './ReaderExtends/ItemWeaponConfigReader';
import LevelConfigReader from './ReaderExtends/LevelConfigReader';
import LoaderConfigReader from './ReaderExtends/LoaderConfigReader';
import MenuConfigReader from './ReaderExtends/MenuConfigReader';
import MsgConfigReader from './ReaderExtends/MsgConfigReader';
import PropertyConfigReader from './ReaderExtends/PropertyConfigReader';
import TriggerTypeConfigReader from './ReaderExtends/TriggerTypeConfigReader';
import UnlockConfigReader from './ReaderExtends/UnlockConfigReader';


export class ExcelConfigManager
{
	static pbconfig:excelconfig.ConfigMng;
	card = new CardConfigReader('Card', CardConfig);
	cardScoreType = new CardScoreTypeConfigReader('CardScoreType', CardScoreTypeConfig);
	effectType = new EffectTypeConfigReader('EffectType', EffectTypeConfig);
	item = new ItemConfigReader('Item', ItemConfig);
	itemConsume = new ItemConsumeConfigReader('ItemConsume', ItemConsumeConfig);
	itemDecorate = new ItemDecorateConfigReader('ItemDecorate', ItemDecorateConfig);
	itemWeapon = new ItemWeaponConfigReader('ItemWeapon', ItemWeaponConfig);
	level = new LevelConfigReader('Level', LevelConfig);
	loader = new LoaderConfigReader('Loader', LoaderConfig);
	menu = new MenuConfigReader('Menu', MenuConfig);
	msg = new MsgConfigReader('Msg', MsgConfig);
	property = new PropertyConfigReader('Property', PropertyConfig);
	triggerType = new TriggerTypeConfigReader('TriggerType', TriggerTypeConfig);
	unlock = new UnlockConfigReader('Unlock', UnlockConfig);

	static Init()
	{
		excelconfig.Card = CardConfig;
		excelconfig.CardScoreType = CardScoreTypeConfig;
		excelconfig.EffectType = EffectTypeConfig;
		excelconfig.Item = ItemConfig;
		excelconfig.ItemConsume = ItemConsumeConfig;
		excelconfig.ItemDecorate = ItemDecorateConfig;
		excelconfig.ItemWeapon = ItemWeaponConfig;
		excelconfig.Level = LevelConfig;
		excelconfig.Loader = LoaderConfig;
		excelconfig.Menu = MenuConfig;
		excelconfig.Msg = MsgConfig;
		excelconfig.Property = PropertyConfig;
		excelconfig.TriggerType = TriggerTypeConfig;
		excelconfig.Unlock = UnlockConfig;

	}
}
