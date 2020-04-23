
import ExcelConfigReader from "./ExcelConfigReader";
import CardConfig from './ConfigExtends/CardConfig';
import CardScoreTypeConfig from './ConfigExtends/CardScoreTypeConfig';
import ItemConfig from './ConfigExtends/ItemConfig';
import LoaderConfig from './ConfigExtends/LoaderConfig';
import MenuConfig from './ConfigExtends/MenuConfig';
import MsgConfig from './ConfigExtends/MsgConfig';
import UnlockConfig from './ConfigExtends/UnlockConfig';

import CardConfigReader from './ReaderExtends/CardConfigReader';
import CardScoreTypeConfigReader from './ReaderExtends/CardScoreTypeConfigReader';
import ItemConfigReader from './ReaderExtends/ItemConfigReader';
import LoaderConfigReader from './ReaderExtends/LoaderConfigReader';
import MenuConfigReader from './ReaderExtends/MenuConfigReader';
import MsgConfigReader from './ReaderExtends/MsgConfigReader';
import UnlockConfigReader from './ReaderExtends/UnlockConfigReader';


export class ExcelConfigManager
{
	static pbconfig:excelconfig.ConfigMng;
	card = new CardConfigReader('Card', CardConfig);
	cardScoreType = new CardScoreTypeConfigReader('CardScoreType', CardScoreTypeConfig);
	item = new ItemConfigReader('Item', ItemConfig);
	loader = new LoaderConfigReader('Loader', LoaderConfig);
	menu = new MenuConfigReader('Menu', MenuConfig);
	msg = new MsgConfigReader('Msg', MsgConfig);
	unlock = new UnlockConfigReader('Unlock', UnlockConfig);

	static Init()
	{
		excelconfig.Card = CardConfig;
		excelconfig.CardScoreType = CardScoreTypeConfig;
		excelconfig.Item = ItemConfig;
		excelconfig.Loader = LoaderConfig;
		excelconfig.Menu = MenuConfig;
		excelconfig.Msg = MsgConfig;
		excelconfig.Unlock = UnlockConfig;

	}
}
