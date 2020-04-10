/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HomeOpenDialogStruct from "../../Generates/SystemModuleHome/HomeOpenDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import Res from "../../../Config/Keys/Res";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";
import { GuideMgr } from "../../../GameModule/GuideModule/GuideMgr";

export default class HomeOpenDialog extends HomeOpenDialogStruct
{
    private dialogCtrl: DialogCtrl;

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
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_btnClose.offClick(this, this.DialogClose);
        this.Reset()
        
        GuideMgr.isShowingHomeDialog =false
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 关闭弹框 */
    private DialogClose(): void
    {
        this.close();
        
        Game.event.dispatch(GameEventKey.GameFrame_HideOpenDialog);
    }
    /*private----------------------EVENT事件操作-----------------------*/
    



    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.m_imgMenu.url = "";
    }

    
    /*public----------------------外部接口---------------------------*/
    /** 打开弹框 */
    open(menu:number): void 
    {
        this.dialogCtrl.open();

        let config = Game.config.unlock.getConfig(menu);
        this.m_imgMenu.url  = Res.GetAvatarSource(config.showIcon);
        this.m_labMenu.text = config.name;

    }

    /** 关闭弹框 */
    close(): void 
    {
        this.dialogCtrl.close();

        Game.event.dispatch("OPEN_MENU");
    }
}