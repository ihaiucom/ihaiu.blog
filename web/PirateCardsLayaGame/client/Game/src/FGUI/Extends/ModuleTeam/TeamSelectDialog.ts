/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TeamSelectDialogStruct from "../../Generates/ModuleTeam/TeamSelectDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import TypeButton from "./TypeButton";
import SectionButton from "./SectionButton";
import Game from "../../../Game";
import MissionData from "../../../GameModule/DataStructs/MissionData";
import MenuWindows from "../../../GameModule/MenuWindows";
import { MenuId } from "../../../GameModule/MenuId";
import TeamWindow from "../../../GameModule/ViewWindows/TeamWindow";
import MenuCtl from "../../../GameFrame/Menu/MenuCtl";
import TeamWindowUI from "./TeamWindowUI";

export default class TeamSelectDialog extends TeamSelectDialogStruct
{
    private dialogCtrl: DialogCtrl;

    /** 默认选中 */
    private sctionId:number = 0;

    /** 关卡类型数据 */
    private typeList:any[]  = [];

    /** 关卡内容数据 */
    private sectionList:MissionData[] = [];

    /** 选中关卡 */
    private selectData:MissionData;

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
        // this.m_listType.setItemRenderer(this.TypeRender, this);
        // this.m_listType.on(fgui.Events.CLICK_ITEM, this, this.TypeSelect);
        this.m_listSection.setItemRenderer(this.SectionRender, this);
        this.m_listSection.on(fgui.Events.CLICK_ITEM, this, this.SectionSelect);
        this.m_bg.m_btn_Close.onClick(this, this.DialogClose);
        this.m_Type.on(fgui.Events.STATE_CHANGED, this, this.TypeChanged);
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        // this.m_listType.itemRenderer.clear();
        this.m_listSection.itemRenderer.clear();
        this.m_listSection.off(fgui.Events.CLICK_ITEM, this, this.SectionSelect);
        this.m_bg.m_btn_Close.offClick(this, this.DialogClose);
        this.m_Type.off(fgui.Events.STATE_CHANGED, this, this.TypeChanged);

        this.Reset()
    }

    /*private----------------------UI事件操作---------------------------*/
    /** 刷新关卡类型列表 */
    private TypeRender(index: number, item: TypeButton): void
    {   
        item.RenderItem(this.typeList[index]);
    }

    /** 刷新关卡内容列表 */
    private SectionRender(index: number, item: SectionButton): void
    {
        item.RenderItem(this.sectionList[index], this.sctionId == this.sectionList[index].id);
    }

    /** 点击关卡类型列表 */
    private TypeSelect(item: TypeButton): void
    {
        let sectionlist = [];
        switch (item.DataSource) 
        {
            case "精英关卡":
                sectionlist = Game.moduleModel.section.openSpecialMissions;
                break;
            case "魔王副本":
                sectionlist = Game.moduleModel.section.openMonsterMissions;
                break;
            case "大秘境":
                sectionlist = [Game.moduleModel.secretLand.missionData];
                break;
        }
        this.sectionList = sectionlist;
        this.m_listSection.numItems = sectionlist.length;
    }

    /** 类型切换 */
    private TypeChanged()
    {
        let sectionlist = [];
        switch (this.m_Type.selectedIndex) 
        {
            // case 0:
            //     sectionlist = Game.moduleModel.section.openSpecialMissions;
            //     break;
            case 0:
                sectionlist = Game.moduleModel.section.openMonsterMissions;
                break;
            case 1:
                sectionlist = Game.moduleModel.section.secretLandMissionDatas;
                // sectionlist = [Game.moduleModel.secretLand.missionData];
                break;
        }
        this.sectionList = sectionlist;
        this.m_listSection.numItems = sectionlist.length;

        this.selectData = null;
    }

    /** 点击关卡内容列表 */
    private SectionSelect(item: SectionButton): void
    {
        this.selectData = item.DataSource;

        this.Select();
    }

    /** 选择关卡 */
    private Select():void
    {
        if (Game.moduleModel.team.GetTeam()) 
        {
            if(this.m_IsLeader.selectedIndex)
            {
                Game.system.toastText("队长才可以选择目标!");
                return;
            }

            Game.sender.team.TeamSetAim(this.selectData.id);
        }

        let teamWindow   =  Game.menu.getMenuCtl(MenuId.Team);
        let teamWindowUI = <TeamWindowUI>  teamWindow.moduleWindow.contentPane;
        teamWindowUI.SetCheckPoint(this.selectData.id);
            
        this.close();
    }

    /** 关闭弹框 */
    private DialogClose():void
    {
        this.close();
    }

    /*private----------------------EVENT事件操作-----------------------*/

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset():void
    {
        // this.m_listType.numItems = 0;
        // this.m_listType.itemPool.clear();
        this.m_listSection.numItems = 0;
        this.m_listSection.itemPool.clear();

        this.typeList    = [];
        this.sectionList = [];
        this.sctionId    = 0;
        this.selectData  = null;
    }


    /*public----------------------外部接口---------------------------*/
    /** 打开弹框 */
    open(sctionId:number): void 
    {
        this.dialogCtrl.open();

        // this.typeList = ["精英关卡", "魔王副本"];
        // this.m_listType.numItems = 2;
        // this.m_listType.selectedIndex = 0;
        this.sctionId   = sctionId;
        this.m_Type.selectedIndex = 0;

        let sctionmodel = Game.moduleModel.section;
        let speciallist = sctionmodel.openMonsterMissions;
        this.sectionList = speciallist;
        this.m_listSection.numItems = speciallist.length;

        let teammodel = Game.moduleModel.team;
        this.m_IsLeader.selectedIndex = teammodel.IsLeader() ? 0 : 1;
    }

    /** 关闭弹框 */
    close(): void 
    {
        this.dialogCtrl.close();
    }
}