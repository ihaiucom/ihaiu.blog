import ItemDecorateConfig from "../../Config/ConfigExtends/ItemDecorateConfig";
import ItemWeaponConfig from "../../Config/ConfigExtends/ItemWeaponConfig";
import Game from "../../Game";

export class EquipData
{
    id: number;
    config:ItemDecorateConfig | ItemWeaponConfig;

    SetId(id: number)
    {
        this.id = id;
        this.config = <any> Game.config.item.getConfig(id);

    }
}

export class Player
{
    private static _current: Player;
    static get current():Player
    {
        if(!this._current)
        {
            this._current = new Player();
        }
        return this._current;
    }

    level: number = 1;
    exp: number = 0;

    equipDecorate: number = 0;
    equipWeapon: number = 0;

    levelExp = 0;
    levelExpMax = 100;

    reset()
    {
        this.level = 1;
        this.exp = 0;
        this.equipDecorate = 0;
        this.equipWeapon = 0;
    }
}