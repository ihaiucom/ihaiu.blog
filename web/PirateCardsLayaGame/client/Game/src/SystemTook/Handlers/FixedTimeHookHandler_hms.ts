import FixedTimeTookHandler, { FixedTimeConfig } from "../FixedTimeTookHandler";
import { MenuId } from "../../GameModule/MenuId";
import Game from "../../Game";
import GameEventKey from '../../GameEventKey';

/**
 * 0:0:0 执行
 */
export default class FixedTimeHookHandler_hms extends FixedTimeTookHandler
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
        super.exe();
        console.log("FixedTimeHookHandler_hms exe");
        //每日重置关卡体力数据
        Game.moduleModel.section.sectionData.resetData();
        //重置招募次数
        Game.moduleModel.gashapon.resetGashaponData();



        //发送隔日更新事件
        Game.event.dispatch(GameEventKey.GameFrame_Everyday_Update);
    }
}