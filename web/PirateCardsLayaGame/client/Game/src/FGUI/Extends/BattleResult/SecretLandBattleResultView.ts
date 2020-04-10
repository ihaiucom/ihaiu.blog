/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandBattleResultViewStruct from "../../Generates/BattleResult/SecretLandBattleResultViewStruct";
import Game from '../../../Game';
import GamerNotifyNewSecretLandResultS2C = proto.GamerNotifyNewSecretLandResultS2C;
import ResultType = proto.SLBattleResultType;
import {War} from "../../../GameWar/Logic/War";
import BattleResultWindow from "../../../GameModule/ViewWindows/BattleResultWindow";
import TEXT from '../../../Config/Keys/TEXT';
import BattleResultBoxItem from "./BattleResultBoxItem";
import {MenuId} from "../../../GameModule/MenuId";

export default class SecretLandBattleResultView extends SecretLandBattleResultViewStruct
{
    moduleWindow: BattleResultWindow;

    private gidList: number[] = [];
    private boxKey: string = "";

    onWindowShow(): void
    {
        this.m_moduleHero.onClick(this,this.openMenu,[this.m_moduleHero.m_menuId.selectedPage]);
        this.m_moduleEquip.onClick(this,this.openMenu,[this.m_moduleEquip.m_menuId.selectedPage]);
        this.m_moduleDraug.onClick(this,this.openMenu,[this.m_moduleDraug.m_menuId.selectedPage]);
        this.m_exitBtn.delayOnClick(this, this.giveUpReward);
        for (let index = 0; index < 4   ; index++) {
            let box = <BattleResultBoxItem> this['m_box' + index];
            box.m_View.setSelectedPage('box');
            box.onClick(this, this.OnClickBoxItem,[index]);
        }

        Game.net.gamerNotifySLTreasureBoxS2C.on(this.UpdateTreasureBox,this);
        Game.net.gamerSecretLandBattleRewardS2C.on(this.UpdateMyReward,this);
    }

    onWindowHide()
    {
        this.m_exitBtn.offClick(this,this.giveUpReward);
        Game.net.gamerNotifySLTreasureBoxS2C.off(this.UpdateTreasureBox,this);
        Game.net.gamerSecretLandBattleRewardS2C.on(this.UpdateMyReward,this);
    }

    UpdateView(msg: GamerNotifyNewSecretLandResultS2C)
    {
        let checkpoint = Game.moduleModel.section.getMissionDataById(msg.checkPointId);
        if(checkpoint)
        {
            this.m_mapName.icon = checkpoint.nameIconUrl;
        }
        this.boxIndex = -1;
        this.boxKey = msg.boxKey;
        this.gidList = msg.gidList;
        this.m_timeLb.text = this.timeCostTxt(msg.costTime);
        this.m_level.text = msg.nowKeyStone + "层";
        let isKeystoneUp = true;
        switch (msg.result) {
            case ResultType.NotPass:
            case ResultType.ActiveExit:
                {
                    this.m_View.setSelectedPage('NotPass');
                    isKeystoneUp = false;
                }
                break;
            case ResultType.PassOutOfTime:
                {
                    isKeystoneUp = false;
                    this.m_View.setSelectedPage('PassTimeOver');
                    //展示宝箱
                }
                break;
            case ResultType.PassTimeOne:
            case ResultType.PassTimeTwo:
            case ResultType.PassTimeThree:
                this.m_View.setSelectedPage('Pass');
                isKeystoneUp = true;
                //宝箱
                break;
        
            default:
                break;
        }
        this.m_keystone.text = (isKeystoneUp ? "+" : "") + (msg.nowKeyStone - msg.preKeyStone);

    }

    private async giveUpReward()
    {
        let s2c = await Game.sender.secretLand.BattleReward(false);
        if(!s2c.error)
        {
            War.exit();
            this.moduleWindow.menuBack();
        }
    }

    private timeCostTxt(secs: number)
    {
        let minutesStr = Math.floor(secs / 60) + "";
        let secondsStr = secs % 60 + "";
        let time = minutesStr.padStart(2,'0') + ":" + secondsStr.padStart(2,'0');
        return TEXT.SecretLand_Time_Cost.format(time);
    }

    private async OnClickBoxItem(index: number)
    {
        let item = <BattleResultBoxItem> this['m_box' + index];
        if(item.m_View.selectedPage == 'reward')
            return;
        if(item.m_View.selectedPage == 'box')
        {
            if(this.boxIndex >= 0)
                return;
            let rollNum = Game.moduleModel.secretLand.infoData.roll;
            if(rollNum < 1)
            {
                Game.menu.open(MenuId.SecretLandRoll);
                return;
            }
            this.boxIndex = index;
            let s2c = await Game.sender.secretLand.BattleReward(true);
            if(!s2c.error)
            {
                Game.moduleModel.secretLand.infoData.roll--;
            }
        }
    }

    private boxIndex: number = -1;
    private items = [];

    private UpdateTreasureBox(msg)
    {
        let box = Game.moduleModel.secretLand.getTreasureBox(this.boxKey);
        if(box)
        {
            if(msg.id == Game.user.id && this.boxIndex >= 0)
            {
                let boxItem = <BattleResultBoxItem>this['m_box'+this.boxIndex];
                boxItem.UpdateView(msg.id,box,true, this.items);
            }
            else
            {
                let boxList = [this.m_box0, this.m_box1,this.m_box2,this.m_box3];
                let boxItem = boxList.find((box)=> box.m_View.selectedPage == 'box');
                if(boxItem)
                    boxItem.UpdateView(msg.id,box);
            }
        }
    }

    private UpdateMyReward(msg)
    {
        this.items = msg.items;
    }
    private openMenu(arg: string)
    {
        let menuId = Number(arg);
        if(Game.moduleModel.home.IsOpen(menuId))
            Game.menu.open(menuId);
        else
        {
            let menuConfig = Game.config.menu.getConfig(menuId);
            if(menuConfig)
                Game.system.toastText(menuConfig.lockText);
        }
    }

}