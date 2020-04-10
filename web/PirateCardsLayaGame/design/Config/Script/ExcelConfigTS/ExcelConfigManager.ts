
import ExcelConfigReader from "./ExcelConfigReader";
import LoaderConfig from './ConfigExtends/LoaderConfig';
import MenuConfig from './ConfigExtends/MenuConfig';
import MsgConfig from './ConfigExtends/MsgConfig';
import UnlockConfig from './ConfigExtends/UnlockConfig';

import LoaderConfigReader from './ReaderExtends/LoaderConfigReader';
import MenuConfigReader from './ReaderExtends/MenuConfigReader';
import MsgConfigReader from './ReaderExtends/MsgConfigReader';
import UnlockConfigReader from './ReaderExtends/UnlockConfigReader';


export class ExcelConfigManager
{
	static pbconfig:excelconfig.ConfigMng;
	loader = new LoaderConfigReader('Loader', LoaderConfig);
	menu = new MenuConfigReader('Menu', MenuConfig);
	msg = new MsgConfigReader('Msg', MsgConfig);
	unlock = new UnlockConfigReader('Unlock', UnlockConfig);

	static Init()
	{
		excelconfig.Loader = LoaderConfig;
		excelconfig.Menu = MenuConfig;
		excelconfig.Msg = MsgConfig;
		excelconfig.Unlock = UnlockConfig;

	}
}
