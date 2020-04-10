/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DraugInfoDialogStruct from "../../Generates/ModuleDraug/DraugInfoDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import DraugData from "../../../GameModule/DataStructs/DraugData";
import { EnumDraugDialogType } from "../../../GameModule/DataEnums/EnumDraugDialogType";
import Game from "../../../Game";

export default class DraugInfoDialog extends DraugInfoDialogStruct
{
    private dialogCtrl: DialogCtrl;

    private mainDraugData:DraugData;

    private viceDraugData:DraugData;

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
        Game.event.add("CLOSE_DIALOG", this.DialogClose, this);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        Game.event.remove("CLOSE_DIALOG", this.DialogClose, this);

        this.Reset()
    }

    /*private----------------------UI事件操作---------------------------*/
    

    /*private----------------------EVENT事件操作-----------------------*/
    /** 关闭弹框 */
    private DialogClose(): void
    {
        this.close();
    }

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.mainDraugData = null;
        this.viceDraugData = null;
        this.m_Type.selectedIndex = 0;
    }

    
    /*public----------------------外部接口---------------------------*/
    /** 打开弹框 */
    open(maindraugdata: DraugData, vicedraugdata: DraugData, type:EnumDraugDialogType): void 
    {
        this.dialogCtrl.open();

        this.mainDraugData = maindraugdata;
        this.viceDraugData = vicedraugdata;
        
        this.m_viceTips.m_Pos.selectedIndex = 1;
        switch (type) 
        {
            case EnumDraugDialogType.Awaken:
                this.m_mainTips.open(maindraugdata);
                break;
            case EnumDraugDialogType.Weared:
                this.m_viceTips.m_Pos.selectedIndex = 0;
                break;
            case EnumDraugDialogType.UnWearSwallowed:
                this.m_swallowTips.open(maindraugdata);
                break;
            case EnumDraugDialogType.UnWearBeSwallowed:
                this.m_beSwallowTips.open(maindraugdata);
                break;
            case EnumDraugDialogType.Decompose:
                this.m_mainTips.open(maindraugdata)
                break;
            
        }
        this.m_Type.selectedIndex = type;

        if (vicedraugdata) 
        {
            this.m_viceTips.open(vicedraugdata);
        }
        this.m_Wear.selectedIndex = vicedraugdata ? 0 : 1;
        this.m_swallowTips.m_Pos.selectedIndex = vicedraugdata ? 0 : 2;
    }

    /** 关闭弹框 */
    close(): void 
    {
        this.dialogCtrl.close();
    }
}