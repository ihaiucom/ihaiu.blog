/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HomeHeroDialogStruct from "../../Generates/SystemModuleHome/HomeHeroDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import HeroBodyIcon from "../CommonGame/HeroBodyIcon";
import { HeroData } from "../../../GameModule/DataStructs/HeroData";
import Game from "../../../Game";

export default class HomeHeroDialog extends HomeHeroDialogStruct
{
    private dialogCtrl: DialogCtrl;

    private heroList:number[] = [];

    private heroId:number = 0;

    /*----------------------默认视图接口---------------------------*/
    /** 视图实例化完成 */
    protected constructFromXML(xml: any): void  
    {
        super.constructFromXML(xml);

        this.dialogCtrl = new DialogCtrl().init(this);
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_btnClose.onClick(this, this.DialogClose);
        this.m_listHero.setItemRenderer(this.HeroRender, this);
        this.m_listHero.on(fgui.Events.CLICK_ITEM, this, this.HeroSelect);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_btnClose.offClick(this, this.DialogClose);
        this.m_listHero.itemRenderer.clear();
        this.m_listHero.off(fgui.Events.CLICK_ITEM, this, this.HeroSelect);

        this.Reset()
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 关闭弹框 */
    private DialogClose(): void
    {
        this.close();
    }

    /** 渲染英雄item */
    private HeroRender(index:number, item:HeroBodyIcon): void
    {
        item.RenderItem(this.heroList[index]);
    }

    /** 点击英雄item */
    private HeroSelect(item:HeroBodyIcon): void
    {
        let data = item.DataSource;
        if (data.id != this.heroId) 
        {
            Game.sender.hero.HeroImageChange(data.id);
            this.heroId = data.id;
        }
    }


    /*private----------------------EVENT事件操作-----------------------*/
    



    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.m_listHero.numItems = 0;
        this.m_listHero.itemPool.clear();

        this.heroList = [];
        this.heroId   = 0;
    }

    
    /*public----------------------外部接口---------------------------*/
    /** 打开弹框 */
    open(): void 
    {
        this.dialogCtrl.open();

        let idslist  = Game.config.hero.getConfigIDs();
        let herolist = Game.moduleModel.hero.Sort(idslist, false, false);
        this.heroList= herolist;
        this.m_listHero.numItems = herolist.length;
    }

    /** 关闭弹框 */
    close(): void 
    {
        this.dialogCtrl.close();
    }
}