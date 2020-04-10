/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandReadyWindowUIStruct from "../../Generates/ModuleSecretLand/SecretLandReadyWindowUIStruct";
import Game from '../../../Game';
import AffixCommon from "../CommonGame/AffixCommon";
import GameEventKey from "../../../GameEventKey";
import WarTigggerHandlers from "../../../GameWar/Logic/WarTigggerHandlers";

export default class SecretLandReadyWindowUI extends SecretLandReadyWindowUIStruct
{
    private get leader() {
        return Game.moduleModel.team.GetLeader();
    }
    private get secretLand()
    {
        return this.leader.secretLand;
    }

    private get model()
    {
        return Game.moduleModel.secretLand;
    }
    get isPlayEnd()
    {
        return !this.m_hide.playing;
    }

    /** 窗口显示 */
    onWindowWillShow(): void
    {
        WarTigggerHandlers.startBeforeHandlerList.push(this.warStartBefore.bind(this));

        this.m_AnimCtrl.setSelectedPage('show');
        this.m_show.play();
        this.m_list.setItemRenderer(this.renderListItem, this);
        // this.m_startBtn.onClick(this,this.OnClickStartBtn);
        this.UpdateView();
    }

    /** 窗口隐藏 */
    onWindowHide(): void
    {
        // this.m_startBtn.offClick(this,this.OnClickStartBtn);
        if(this.m_list.itemRenderer)
            this.m_list.itemRenderer.recover();
    }

    private UpdateView()
    {
        // Game.event.dispatch(GameEventKey.GameFrame_ShowSecretLandAnimation,this.m_hide._totalDuration * 1000+1000);
        let isEnable = this.leader.gamer.id == Game.user.id;
        // this.m_startBtn.visible = isEnable;
        let cp = Game.config.checkPoint.getConfig(this.secretLand.checkPointID);
        this.m_title.m_icon.icon = cp.nameIconUrl;
        this.m_time.UpdateView(cp.levelUpTime);
        this.m_level.UpdateView(this.secretLand.keyStone);
        this.m_list.numItems = this.model.thisAffixList.length;
        this.OnClickStartBtn();
    }
    renderListItem(index: number,item: AffixCommon)
    {
        let id = this.model.thisAffixList[index];
        item.updateView(id);
    }

    OnClickStartBtn()
    {
        this.m_AnimCtrl.setSelectedPage('hide');
        this.m_hide.play();
    }

    

    private warStartBefore()
    {
        let that = this;
        return new Promise((resolve) =>
        {
            var fun = () =>
            {
                if(that.isPlayEnd)
                {
                    Laya.timer.clear(null, fun);
                    resolve();
                }
            };
            Laya.timer.loop(100, null, fun);
            // if(that.isPlayEnd)
            // {
            //     resolve();
            //     return;
            // }
            // var fun = () =>
            // {
            //     if(that.isPlayEnd)
            //     {
            //         resolve();
            //         return;
            //     }
            //     else
            //         Laya.timer.once(100,null,fun)
            // };
            // Laya.timer.once(100,null,fun)
        });
}
}