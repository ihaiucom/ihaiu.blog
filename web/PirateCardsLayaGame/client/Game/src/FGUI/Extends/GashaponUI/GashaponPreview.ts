/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GashaponPreviewStruct from "../../Generates/GashaponUI/GashaponPreviewStruct";
import Game from '../../../Game';
import ItemData from '../../../GameModule/DataStructs/ItemData';
import HeroConfig from '../../../Config/ConfigExtends/HeroConfig';
import GashaponType =  proto.GashaponType;
import ItemType = proto.ItemType;

export default class GashaponPreview extends GashaponPreviewStruct
{
    sHeroList: excelconfig.IDTRewardRandom[] = [];
    aHeroList: excelconfig.IDTRewardRandom[] = [];
    equipmentList: excelconfig.IDTRewardRandom[] = [];
    itemList: excelconfig.IDTRewardRandom[] = [];

    private type: GashaponType;
    
    updateView(type: GashaponType)
    {
        this.type = type;
        this.visible = true;
        // Game.sender.gashapon.preview(type);
        this.m_aHero.onShow();
        this.m_sHero.onShow();
        this.m_equipment.onShow();
        this.m_other.onShow();
        this.previewHandler();
    }

    onHide()
    {
        this.m_aHero.onHide();
        this.m_sHero.onHide();
        this.m_equipment.onHide();
        this.m_other.onHide();
        this.visible = false;
    }

    addEventListener()
    {
        this.m_background.onClick(this, this.onHide);
        Game.net.gamerGetGashaponPreviewS2C.on(this.previewHandler,this);
    }

    removeEventListener()
    {
        this.m_background.offClick(this, this.onHide);
        Game.net.gamerGetGashaponPreviewS2C.off(this.previewHandler, this);

    }

    previewHandler(msg?: proto.GamerGetGashaponPreviewS2C)
    {
        this.aHeroList = [];
        this.sHeroList = [];
        this.equipmentList = [];
        this.itemList = [];
        let allItems = Game.config.reward.getGashaponItemListByType(this.type);
        for(let i of allItems)
        {
            if(i.ItemType == ItemType.heroItem)
            {
                let item = ItemData.Create(i.ItemId,i.ItemNum, i.ItemType);
                if(item.quality == 1)
                    this.aHeroList.push(i);
                else if(item.quality == 2)
                    this.sHeroList.push(i);
            }
            else if(i.ItemType == ItemType.equipment)
                this.equipmentList.push(i);
            else
                this.itemList.push(i);
        }
        this.m_aHero.updateView(this.aHeroList, this.type);
        this.m_sHero.updateView(this.sHeroList, this.type);
        this.m_equipment.updateView(this.equipmentList, this.type);
        this.m_other.updateView(this.itemList, this.type);
    }
}