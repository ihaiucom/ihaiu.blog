/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DraugHeroItemStruct from "../../Generates/ModuleDraug/DraugHeroItemStruct";
import Game from "../../../Game";
import PartButton from "./PartButton";
import DraugData from "../../../GameModule/DataStructs/DraugData";
import { HeroData } from "../../../GameModule/DataStructs/HeroData";
import DraugSelectHeroS2C = proto.DraugSelectHeroS2C;
import Res from "../../../Config/Keys/Res";
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import { MenuId } from "../../../GameModule/MenuId";

export default class DraugHeroItem extends DraugHeroItemStruct
{
    /** 英雄索引 */
    private heroIndex:number = 0;

    /** 英雄ID列表 */
    private heroList:number[] = [];

    /** 英雄数据 */
    private DataSource:HeroData;

    /** 选中英雄 */
    private selectHero:number = 0;

    /** 窗口初始化完毕 */
    onWindowInited(): void
    {
    }

    /** 窗口显示 */
    onWindowShow(): void
    {
        this.m_btnLast.onClick(this, this.HeroLast);
        this.m_btnNext.onClick(this, this.HeroNext);
        Game.event.add("WEAR_DRAUG", this.WearDraug, this);
        Game.net.draugSelectHeroS2C.on(this.DraugSelectHeroS2C, this);

        this.Init();
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_btnLast.offClick(this, this.HeroLast);
        this.m_btnNext.offClick(this, this.HeroNext);
        Game.event.remove("WEAR_DRAUG", this.WearDraug, this);
        Game.net.draugSelectHeroS2C.off(this.DraugSelectHeroS2C, this);

        this.Reset();
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 上一个英雄 */
    private HeroLast()
    {
        if (this.heroIndex == 0) 
        {
            this.heroIndex = this.heroList.length - 1;
        } 
        else
        {
            this.heroIndex--;
        }

        
        this.UpdateHero();
    }

    /** 下一个英雄 */
    private HeroNext()
    {
        if (this.heroIndex == this.heroList.length - 1) 
        {
            this.heroIndex = 0;
        } 
        else
        {
            this.heroIndex++;
        }

        
        this.UpdateHero();
    }

    
    /** 接收战魂拖入 */
    private WearDraug(data:DraugData)
    {
        Game.sender.draug.DraugWear(data.uid, this.DataSource.ID);
    }

    /*private----------------------EVENT事件操作-----------------------*/
    /** 更新选择英雄后的战魂 */
    private DraugSelectHeroS2C(msg: DraugSelectHeroS2C)
    {
        this.selectHero = msg.selectHeroId;
    }

    /*private---------------------内部方法---------------------------*/
    /** 创建 */
    private Init()
    {
        for (let i = 1; i <= 6; i++) 
        {
            let heroPart = <PartButton>this[`m_heroPart${i}`];
            heroPart.SetPartIndex(i);
        }
    }

    /** 重置 */
    private Reset()
    {
        this.heroIndex  = 0;
        this.heroList   = [];
    }

    /** 设置英雄战魂 */
    private UpdateHero()
    {
        let herolist = this.heroList;
        let heroId   = herolist[this.heroIndex];
        let herodata = Game.moduleModel.hero.GetData(heroId);

        this.m_labHero.text = `${this.heroIndex + 1}/${herolist.length}`
        this.m_labLv.text   = `${herodata.level}`;
        this.m_labName.text = herodata.name;
        this.m_imgHero.url  = Res.getDraugHeroIcon(herodata.id);

        this.DataSource = herodata;
        this.UpdateHeroDraug();

        if (heroId != this.selectHero) 
        {
            Game.event.dispatch("CHANGE_HERO")
            Game.sender.draug.DraugSelectHero(heroId);
        }

        this.RefreshRed();
    }

    /** 刷新英雄战魂 */
    private UpdateHeroDraug()
    {
        let herodata = this.DataSource;

        for (let i = 1; i <= 6; i++) 
        {
            let heroPart = <PartButton>this[`m_heroPart${i}`];
            heroPart.ResetRender();

            let draugdata = new DraugData();
            draugdata.heroId = herodata.id;
            draugdata.pos    = i;
            MenuValidateRed.getInstance().openItem(MenuId.Draug, draugdata, heroPart);
        }

        
        for (let i = 0, len = herodata.DraugList.length; i < len; i++) 
        {
            let draugdata = herodata.DraugList[i];
            let heroPart  = <PartButton>this[`m_heroPart${draugdata.pos}`];
            draugdata.suitData = herodata.GetWearDraugSuit(draugdata.typeName);
            heroPart.RenderItem(draugdata);
        }
    }

    /** 刷新红点 */
    RefreshRed()
    {
        MenuValidateRed.getInstance().openItem(MenuId.Draug, this.DataSource, this.m_btnLast);
        MenuValidateRed.getInstance().openItem(MenuId.Draug, this.DataSource, this.m_btnNext);
    }

    /*public----------------------外部接口---------------------------*/
    /** 开启界面 */
    public Open(): void
    {
        let model = Game.moduleModel.draug;

        this.selectHero = model.selectHero;
        let herolist    = Game.moduleModel.hero.IDList;
        if (herolist.length) 
        {
            let heroindex  = herolist.indexOf(this.selectHero);
            // 当前未选中英雄，默认第一个。
            this.heroIndex = heroindex == -1 ? 0 : heroindex;
            this.heroList  = herolist;
            this.UpdateHero();
        }
    }

    /** 刷新界面 */
    public UpdateView()
    {
        this.UpdateHero();
    }

    /** 当前数据 */
    public GetData():HeroData
    {
        return this.DataSource;
    }

    
}