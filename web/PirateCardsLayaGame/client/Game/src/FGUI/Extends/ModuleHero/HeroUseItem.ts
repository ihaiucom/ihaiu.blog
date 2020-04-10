/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroUseItemStruct from "../../Generates/ModuleHero/HeroUseItemStruct";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";
export default class HeroUseItem extends HeroUseItemStruct
{
    itemID: number;

    itemNumber : number ;  //记录持续升级时 道具数量

    itemNumberBackUp:number;  // 点击升级时 备份原始道具数量 请求失败时恢复

    protected constructFromXML(xml: any): void {
        super.constructFromXML(xml);
        Game.event.add(GameEventKey.GameFrame_ConsumeItem, this.onUpdate, this);
        Game.event.add(GameEventKey.GameFrame_BackUpData, this.onBackUp, this);
        Game.event.add(GameEventKey.GameFrame_RestoreData, this.onRestore, this);  
    }

    /** 销毁视图 */
    dispose()
    {
        Game.event.remove(GameEventKey.GameFrame_ConsumeItem, this.onUpdate, this);
        Game.event.remove(GameEventKey.GameFrame_BackUpData, this.onBackUp, this);
        Game.event.remove(GameEventKey.GameFrame_RestoreData, this.onRestore, this);
        super.dispose();
    }

    public RenderItem(itemID: number)
    {
        this.itemID = itemID;
        let itemNum = Game.moduleModel.bag.getItemNum(itemID);
        this.itemNumber = itemNum;
        this.m_labelNum.text = itemNum.toString();
        let iconID = Game.config.item.getConfig(itemID).icon;
        this.m_itemLoader.url = Game.config.avatar.getConfig(iconID).iconUrl;
        let isBool = itemNum > 0?false: true;
        this.setGrayed(isBool);
        // this.touchable = itemNum > 0?true: false;
    }

    public setGrayed(isBool: boolean = false)
    {
        this.m_bg.grayed = isBool;
        this.m_itemLoader.grayed = isBool;
        this.m_numBg.grayed = isBool;
        this.m_labelNum.grayed = isBool;
    }
    
    onUpdate( itemID:number , MaxLevel : boolean)
    {
        if (this.itemID == itemID)
        {
            if (this.itemNumber < 1)
            {
                Game.event.dispatch(GameEventKey.GameFrame_ItemExceedBound);
            }
            else
            {
                if (!MaxLevel)
                {
                    this.itemNumber = this.itemNumber - 1;
                    this.m_labelNum.text = this.itemNumber.toString();
                    if(this.itemNumber == 0)
                    {
                        Game.event.dispatch(GameEventKey.GameFrame_ItemExceedBound);
                    }
                }
            }
        }

    }
    onBackUp(itemID:number)
    {
        if (this.itemID == itemID)
        {
            this.itemNumberBackUp = Game.moduleModel.bag.getItemNum(itemID);
        }

    }

    onRestore(itemID:number)
    {
        //if (this.itemID == itemID)
        {
            this.m_labelNum.text =this.itemNumberBackUp.toString();
        }

    }

}