/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretLandRollViewStruct from "../../Generates/ModuleSecretLand/SecretLandRollViewStruct";
import TEXT from '../../../Config/Keys/TEXT';
import Game from '../../../Game';
import SecretLandRollWindow from '../../../GameModule/ViewWindows/SecretLandRollWindow';

export default class SecretLandRollView extends SecretLandRollViewStruct
{
    moduleWindow: SecretLandRollWindow;
    
    private get model()
    {
        return Game.moduleModel.secretLand;
    }
    OnShow()
    {
        Game.net.gamerBuyRollS2C.on(this.OnBuyRollS2c, this);
        this.m_yesBtn.onClick(this,this.OnClickYesBtn);
        this.m_btnClose.onClick(this,this.OnClickCloseBtn);
        this.m_cancelBtn.onClick(this,this.OnClickCloseBtn);
        this.UpdateView();
    }

    OnHide()
    {
        Game.net.gamerBuyRollS2C.off(this.OnBuyRollS2c,this);
        this.m_yesBtn.offClick(this,this.OnClickYesBtn);
        this.m_btnClose.offClick(this,this.OnClickCloseBtn);
        this.m_cancelBtn.offClick(this,this.OnClickCloseBtn);
        this.moduleWindow.menuBack();
    }

    private UpdateView()
    {
        let m = this.model;
        if(m.rollNum >= m.maxRollNum)
            this.m_View.setSelectedPage('maxNum');
        else if( m.buyTimes >= m.maxRollBuyTimes)
            this.m_View.setSelectedPage('noTimes');
        else if(Game.moduleModel.power.fatigueNum < m.buyRollCost)
        {
            this.m_View.setSelectedPage('fatigue');
            this.m_title.text = TEXT.SecretLand_Fatigue_Not_Enough.format(m.buyRollCost);
        }
        else
        {
            this.m_View.setSelectedPage('normal');
            this.m_title.text = this.model.buyRollCostTxt;
        }
        this.m_des.text = this.model.desRollTxt;
    }

    private OnClickYesBtn()
    {
        if(this.m_View.selectedPage == 'normal')
            Game.sender.secretLand.BuyRoll(1);
        else
            this.OnHide();
    }

    private OnClickCloseBtn()
    {
        this.OnHide();
    }

    private OnBuyRollS2c(msg)
    {
        if(!msg.error)
        {
            this.UpdateView();
        }
    }

}