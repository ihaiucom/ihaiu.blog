
function loadConfig(jsonText : string): excelconfig.ConfigMng{
    let configItem = jsonText;
    let config = new excelconfig.ConfigMng();
    for(let key in configItem)
    {
        if(key == "Global") {
            config.ConfigGlobal = configItem[key];
            continue
        }
        for(let key1 in configItem[key])
        {
            config[key][Number.parseInt(key1)] = configItem[key][key1];
        }
    }

    return config
}
			