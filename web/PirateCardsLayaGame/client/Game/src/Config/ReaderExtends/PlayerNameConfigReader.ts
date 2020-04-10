

import ExcelConfigReader from "../ExcelConfigReader";
import PlayerNameConfig from "../ConfigExtends/PlayerNameConfig";
export default class PlayerNameConfigReader extends ExcelConfigReader<PlayerNameConfig>
{
    public  getRandomName(): string
    {
        let parts: string[][] = [[],[],[]];
        for (let config of this.configList) {
            parts[0].push(config.name1);
            parts[1].push(config.name2);
            parts[2].push(config.name3);
        }
        let randomName = "";
        for (let part of parts) {
            randomName += this._getRandomItem(part);
        }
        return randomName;
    }

    private _getRandomItem(list: string[]): string
    {
        return list[Math.floor(Math.random() * list.length)];
    }
}