/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GamePlayerInfoWindowUIStruct from "../../Generates/GamePlayerInfoUI/GamePlayerInfoWindowUIStruct";
import GamePlayerInfoWindow from "../../../GameModule/ViewWindows/GamePlayerInfoWindow";
import Game from '../../../Game';
import ChangeNameViewCtrl from '../../Customs/ChangeNameViewCtrl';
import {MenuId} from "../../../GameModule/MenuId";
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import { MenuIndexId } from "../../../GameModule/MenuIndexId";

export default class GamePlayerInfoWindowUI extends GamePlayerInfoWindowUIStruct
{
    // 窗口
    moduleWindow: GamePlayerInfoWindow;

    // 窗口初始化完毕
    onWindowInited(): void
    {

    }

    // 窗口显示
    onWindowShow(): void
    {
        this.addEventListener();
        this.m_heroView.onShow();
        this.Init();
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.removeEventListener();
        this.m_heroView.onHide();
    }

    Init()
    {
        this.m_infoView.Init();
        this.m_ViewType.setSelectedIndex(0);
        this.m_backBtn.SetWindow(MenuId.PlayerInfo);

        // red
        this.RefreshRed();
    }

    /** 刷新红点 */
    RefreshRed()
    {
        // 角色信息
        MenuValidateRed.getInstance().openTab(MenuIndexId.PlayerInfo, null, this.m_tab_info);
        MenuValidateRed.getInstance().openTab(MenuIndexId.PlayerInfo, null, this.m_infoView.m_headIcon);
    }

    addEventListener()
    {
        Game.net.gamerChangeAvatarS2C.on(this.onChangeHeadIcon, this);
        this.m_ViewType.on(fgui.Events.STATE_CHANGED, this, this.onTabChanged);
        this.m_infoView.m_headIcon.onClick(this, this.showChangeHeadIconView);
        this.m_infoView.m_renameBtn.delayOnClickWithTime(this, this.showChangeNameView,1000);
        Game.event.add("SAW_HEADICON", this.RefreshRed, this);
    }
    removeEventListener()
    {
        Game.net.gamerChangeAvatarS2C.off(this.onChangeHeadIcon, this);
        this.m_ViewType.off(fgui.Events.STATE_CHANGED,this,this.onTabChanged);
        this.m_infoView.m_headIcon.offClick(this,this.showChangeHeadIconView);
        this.m_infoView.m_renameBtn.delayOffClick(this,this.showChangeNameView)
        Game.event.remove("SAW_HEADICON", this.RefreshRed, this);
    }

    private backBtnOnClick()
    {
        this.moduleWindow.menuBack();
    }

    /** 左侧tab切换 */
    onTabChanged()
    {
        //TODO: yjj 后面做红点处理
        switch(this.m_ViewType.selectedIndex) 
        {
            case 0:
                break;
            case 1:
                {
                    this.m_heroView.onShow();
                }
                break;

            default:
                break;
        }
    }

    /** 显示修改头像弹窗 */
    showChangeHeadIconView()
    {
        this.m_showChangeHeadIcon.setSelectedIndex(1);
        this.m_changeHeadView.selectIcon(this.hideChangeHeadIconView.bind(this));
    } 
    
    private onChangeHeadIcon()
    {
        this.hideChangeHeadIconView();
        this.m_infoView.changeHeadIcon();
    }
    
    /** 隐藏修改头像弹窗 */
    hideChangeHeadIconView()
    {
        this.m_showChangeHeadIcon.setSelectedIndex(0);
    }
    
    /** 显示修改名称弹窗 */
    showChangeNameView()
    {
        this.m_showChangeName.setSelectedIndex(1);
        let isFirst: boolean = Game.user.changeNameNum <= 0;
        let ctrl = ChangeNameViewCtrl.Singleton(this.m_changeNameView, isFirst);
        ctrl.selectName(this.hideChangeNameView.bind(this));
    }  
     
    /** 隐藏修改名称弹窗 */
    hideChangeNameView()  
    {
        this.m_showChangeName.setSelectedIndex(0);
        this.m_infoView.m_nameLb.text = Game.user.name;
    }

   
}