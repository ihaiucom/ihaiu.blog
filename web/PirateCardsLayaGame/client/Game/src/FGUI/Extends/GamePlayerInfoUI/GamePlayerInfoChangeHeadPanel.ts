/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GamePlayerInfoChangeHeadPanelStruct from "../../Generates/GamePlayerInfoUI/GamePlayerInfoChangeHeadPanelStruct";
import HeadIcon from '../CommonGame/HeadIcon';
import Game from '../../../Game';
import HeroConfig from '../../../Config/ConfigExtends/HeroConfig';
import MenuValidateRed from "../../../GameModule/MenuValidateRed";
import { MenuId } from "../../../GameModule/MenuId";
import { MenuIndexId } from "../../../GameModule/MenuIndexId";

export default class GamePlayerInfoChangeHeadPanel extends GamePlayerInfoChangeHeadPanelStruct
{
    completion: Function;

    selectIcon(completion: Function)
    {
        this.completion = completion;
        this.Init();
    }

    private Init()
    {
        window['btn']= this.m_commitBtn;
        this.m_viewType.setSelectedIndex(0);
        this.m_headList.selectNone();
        this.m_headList.itemRenderer = Laya.Handler.create(this, this.itemRenderer,null, false);
        this.m_headList.numItems = this.allHeroList.length;
        if(this.allHeroList.length > 0)
        {
            this.m_headList.selectedIndex = 0;
            this.itemSelected();
        }
        this.m_closeBtn.onClick(this, this.onHide);
        this.m_headList.onClick(this, this.itemSelected);
        this.m_commitBtn.onClick(this,this.CommitBtnOnClick);
        this.m_wxBtn.onClick(this,this.wxBtnOnClick);
        // this.m_commitBtn.enabled = false;

        this.RefreshRed();
    }

    RefreshRed()
    {
        // red
        MenuValidateRed.getInstance().openTab(MenuIndexId.PlayerInfo, null, this.m_tab_HeadIcon);
    }

    get allHeroList(): HeroConfig[]
    {
        return Game.config.hero.configList;
    }

    itemRenderer(index: number,item: HeadIcon)
    {
        let heroConfig = this.allHeroList[index];
        item.RendererItem(heroConfig);

        let herodata = Game.moduleModel.hero.GetData(heroConfig.id);
        MenuValidateRed.getInstance().openItem(MenuId.PlayerInfo, herodata, item);
    }

    itemSelected()
    {
        let index = this.m_headList.selectedIndex
        if(-1 != index)
        {
            let heroId = this.allHeroList[index].id;
            let heroModel = Game.moduleModel.hero;
            this.m_head.updateView(heroModel.GetData(heroId));
            this.m_des.text = Game.config.avatar.getConfig(heroId).zhCnIconDes;
            let isGet = heroModel.IsGet(heroId);
            // this.m_commitBtn.enabled = isGet;
            this.m_commitBtn.m_IsGray.setSelectedIndex(isGet?0:1);

            let heroData = heroModel.GetData(heroId);
            if (!heroData.isSaw) 
            {
                let item = <HeadIcon>this.m_headList.getChildAt(index);
                MenuValidateRed.getInstance().closeRed(item);  
                heroData.isSaw = true;
                Game.sender.user.sawHeadIcon([heroId]);

                this.RefreshRed();  
                Game.event.dispatch("SAW_HEADICON");
            }
        }


    }

    CommitBtnOnClick()
    {
        if(this.m_commitBtn.m_IsGray.selectedIndex == 1)
            return
        let index = this.m_headList.selectedIndex;
        let heroConfig = this.allHeroList[index];

        Game.sender.user.changeHeadIcon(heroConfig.id+"");
    }

    wxBtnOnClick()
    {

        // Game.sender.user.changeHeadIcon()
    }
    
    private onHide()
    {
        this.m_closeBtn.offClick(this,this.onHide);
        this.m_headList.offClick(this,this.itemSelected);
        this.m_commitBtn.offClick(this, this.CommitBtnOnClick);
        this.m_wxBtn.offClick(this,this.wxBtnOnClick);
        this.m_headList.itemRenderer.recover();
        this.completion();
    }
}