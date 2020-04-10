import FixedTimeTookHandler, { FixedTimeConfig } from "../FixedTimeTookHandler";
import Game from '../../Game';

export default class SectionTimesTookHandler_hms extends FixedTimeTookHandler
{
    /** 
         * 初始化, 配置你的订阅
         */
    init()
    {

        // // 前提模块ID, 只有这些模块是置顶时才通过
        // this.preconditionMenuIds = [MenuId.Home, MenuId.Studio];
        // // 自己所属模块，用来验证功能是否解锁
        // this.menuId = MenuId.Studio;
        let d = Global.updataDayTime;
        this.fixedTimeList.push(FixedTimeConfig.CreateHMS(d.H,d.Mm,d.S));
        super.init();
    }



    /** 执行 */
    exe()
    {
        Game.moduleModel.section.sectionData.resetData();
        super.init();
        console.log("FixedTimeHookHandler_hms exe");
    }
}