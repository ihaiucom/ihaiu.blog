/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuTopPanelWarStruct from "../../Generates/GameHome/MenuTopPanelWarStruct";

export default class MenuTopPanelWar extends MenuTopPanelWarStruct
{
    PlayFxCoin()
    {
        Laya.timer.clear(this, this.SetCoinIconState);
        this.m_iconCoin.visible = false;
        this.m_fxCoin.visible = true;
        this.m_fxCoin.frame = 0;
        this.m_fxCoin.playing = true;
        Laya.timer.frameOnce(Math.ceil(60 / 24 * 10), this, this.SetCoinIconState);
    }

    SetCoinIconState()
    {
        this.m_iconCoin.visible = true;
        this.m_fxCoin.visible = false;
        this.m_fxCoin.playing = false;
    }
}