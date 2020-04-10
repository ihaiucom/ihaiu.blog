/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GuiSetting from "../GuiSetting";

export default class SoundKey
{
	private static _idDict: Dictionary<string, string>;
	static get idDict(): Dictionary<string, string>
	{
		if (!SoundKey._idDict)
		{
			SoundKey.init();
		}
		return SoundKey._idDict;
	}


	private static _extDict: Dictionary<string, string>;
	static get extDict(): Dictionary<string, string>
	{
		if (!SoundKey._extDict)
		{
			SoundKey.init();
		}
		return SoundKey._extDict;
	}

	public static getId(key: string): string
	{
		if (!SoundKey.idDict.hasKey(key))
		{
			console.error("SoundKey 不存在 key=" + key);
			return "";
		}
		return SoundKey.idDict.getValue(key);
	}

	public static getUrl(key: string): string
	{
		return `ui://${SoundKey.SoundPackageId}${SoundKey.getId(key)}`
	}


	public static getPath(key: string): string
	{
		return GuiSetting.getResPath(`${SoundKey.SoundPackageName}_${SoundKey.getId(key)}${SoundKey.extDict.getValue(key)}`, "fgui")
	}


	private static init()
	{
		let dict = SoundKey._idDict = new Dictionary<string, string>();

		let exts = SoundKey._extDict = new Dictionary<string, string>();
	}


	static SoundPackageName = "Sound";
	static SoundPackageId =  "44whq70o";
	
}