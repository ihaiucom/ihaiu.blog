(
	IObitUnlocker.exe /None "%cd:~0,-11%Config\Client","%cd:~0,-11%Config\Common","%cd:~0,-11%Config\Server","%cd:~0,-11%Config"
	svn update ../Config
	dotnet ./ExportXlsx/ExportXlsx.dll --optionSetting=./ExportXlsxSetting.json
	dotnet ./Copy/Copy.dll --setting=./CopyPlanSetting_WangXueJun.json
)