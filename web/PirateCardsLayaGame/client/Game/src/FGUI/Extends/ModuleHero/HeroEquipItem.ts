/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroEquipItemStruct from "../../Generates/ModuleHero/HeroEquipItemStruct";
import { EquipType } from "../../../GameModule/DataEnums/EquipType";
import Game from "../../../Game";
import { EquipData } from "../../../GameModule/DataStructs/EquipData";
import { MenuId } from "../../../GameModule/MenuId";
import GameEventKey from "../../../GameEventKey";

export default class HeroEquipItem extends HeroEquipItemStruct
{
    pos: EquipType;
    heroID: int;
    data: EquipData;
    protected constructFromXML(xml: any): void {
        super.constructFromXML(xml);

        this.m_btnItem.onClick(this, this.OnClickItem);
        this.m_btnAdd.onClick(this, this.OnClickAdd);
        this.m_btnLv.onClick(this, this.onClickLevel);
    }

    public RenderItem(pos: int, heroID: int, data: EquipData)
    {
        this.heroID = heroID;
        this.pos = pos; 
        if(data)
        {
            this.m_state.selectedIndex = 0;
            this.m_name.text = data.name;
            this.m_star.m_starNum.selectedIndex = data.star;
            this.data = data;

            this.m_btnItem.updateItem(data);
        }
        else
        {
            this.m_state.selectedIndex = 1;
        }
    }

    public onClickLevel()
    {
        let params = [this.data.uid];
        Game.menu.open(MenuId.Equip, params);
    }

    public OnClickAdd()
    {
        Game.system.equipSelectShow(this.heroID, this.pos)
        Game.event.dispatch(GameEventKey.gameFrame_GuideEquipList);
    }

    public OnClickItem()
    {
        // let data = Game.moduleModel.equip.GetDataByUID(this.data.uid)
        // Game.system.equipTipShow(data);

        Game.system.equipSelectShow(this.heroID, this.pos)
    }
}