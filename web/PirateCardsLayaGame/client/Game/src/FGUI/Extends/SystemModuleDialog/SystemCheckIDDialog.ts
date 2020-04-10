/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SystemCheckIDDialogStruct from "../../Generates/SystemModuleDialog/SystemCheckIDDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import Game from "../../../Game";

export default class SystemCheckIDDialog extends SystemCheckIDDialogStruct
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
        this.m_chekIDView.m_btnMake.onClick(this, this.MakeCheckID);
        this.m_chekIDView.m_btnClose.onClick(this, this.CloseCheckID);
        this.m_btnOk.onClick(this, this.CloseCheckID);

        Game.event.add("ERROR_IDCARD", this.ErrorIdCard, this);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        this.m_chekIDView.m_btnMake.offClick(this, this.MakeCheckID);
        this.m_chekIDView.m_btnClose.offClick(this, this.CloseCheckID);
        this.m_btnOk.offClick(this, this.CloseCheckID);

        Game.event.remove("ERROR_IDCARD", this.ErrorIdCard, this);

        this.Reset()
    }

    /*private----------------------UI事件操作---------------------------*/
    private MakeCheckID()
    {
        let index = this.m_chekIDView.m_Type.selectedIndex;
        switch (index) {
            case 3:
                this.close();
                break;
            case 1:
                this.SendIDCard();
                break;
            case 0:
                this.m_chekIDView.m_Type.selectedIndex = 1;
                break;
        }
    }

    private CloseCheckID()
    {
        this.close();
    }

    /** 身份证错误返回 */
    private ErrorIdCard(error:number)
    {
        switch (error) {
            case 0:
            case 1023:
                Game.system.toastText("实名制验证成功！");
                this.close();
                break;
            case 1021:
            case 1022:
            case 1026:
                Game.system.toastText("实名制验证失败！");
            case 1025:
                this.m_chekIDView.m_Type.selectedIndex = 1;
                break;
            case 1024:
                this.m_chekIDView.m_Type.selectedIndex = 3;
                break;
            default:
                break;
        }
    }

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
    }

    /** 请求身份验证 */
    private SendIDCard()
    {
        let session = Game.moduleModel.login.session;
        let name    = this.m_chekIDView.m_labName.text;
        let idcard  = this.m_chekIDView.m_labID.text;
        Game.sender.login.CheckIDCard(session, name, idcard);
    }

    
    /*public----------------------外部接口---------------------------*/
    /** 打开弹框 */
    open(): void 
    {
        this.dialogCtrl.open();
        let model = Game.moduleModel.login;
        switch (model.error) {
            case 1024:
                this.m_chekIDView.m_Type.selectedIndex = 3;
                break;
            default:
                this.m_chekIDView.m_Type.selectedIndex = 0;
                break;
        }
        
    }

    /** 关闭弹框 */
    close(): void 
    {
        this.dialogCtrl.close();
    }
}