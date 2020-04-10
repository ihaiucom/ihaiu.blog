/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuCenterBarStruct from "../../Generates/SystemModuleHome/MenuCenterBarStruct";
import Game from "../../../Game";
import HeroSkeletonTemple from "../../Customs/HeroSkeletonTemple";
import GamerHeroImageChooseS2C = proto.GamerHeroImageChooseS2C;
import GamerHeroImageChangeS2C = proto.GamerHeroImageChangeS2C;

export default class MenuCenterBar extends MenuCenterBarStruct
{
    private heroaction: HeroSkeletonTemple;

     /** 窗口初始化完毕 */
     onWindowInited(): void
     {
         
     }
 
     /** 窗口显示 */
     onWindowShow(): void
     {
        this.m_btnShow.onClick(this, this.OpenShow);

        Game.net.gamerHeroImageChooseS2C.on(this.GamerHeroImageChooseS2C, this);
        Game.net.gamerHeroImageChangeS2C.on(this.GamerHeroImageChangeS2C, this);
     }
 
     /** 窗口隐藏 */
     onWindowHide(): void
     {
         this.m_btnShow.offClick(this, this.OpenShow);
         this.Reset();
     }
 
    /*private----------------------UI事件操作---------------------------*/
    private OpenShow()
    {
        // Game.menu.open(Number(this.m_btnShow.title));
        let show = Game.config.unlock.getConfig(Number(this.m_btnShow.title));
        show.showType != 2 && Game.system.homeHeroShow();
    }

    /*private----------------------EVENT事件操作-----------------------*/
    /** 英雄立绘获取返回 */
    private GamerHeroImageChooseS2C(msg: GamerHeroImageChooseS2C)
    {
        this.CreateAction(msg.heroId);
    }

    /** 英雄立绘修改返回 */
    private GamerHeroImageChangeS2C(msg: GamerHeroImageChangeS2C)
    {
        this.Reset();

        this.CreateAction(msg.heroId);
    }

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        if (this.heroaction) 
        {
            this.heroaction.release();
            this.heroaction = null;    
        }
    }

    /** 创建动画 */
    private CreateAction(heroId:number)
    {
        let heroaction = new HeroSkeletonTemple();
        heroaction.install(heroId);
        heroaction.setParent(this.displayObject);
        this.heroaction = heroaction;
    }

     /*public----------------------外部接口---------------------------*/
    /** 打开界面 */
    public Open()
    {
        Game.sender.hero.HeroImageChoose();
    }
}