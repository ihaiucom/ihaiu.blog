import ChangeNamePanel from "../Extends/CommonGame/ChangeNamePanel";
import Game from "../../Game";
import TEXT from "../../Config/Keys/TEXT";

export default class ChangeNameViewCtrl
{
    private static _viewCtrl: ChangeNameViewCtrl;
    private _panel: ChangeNamePanel;
    private isFirst: boolean = false;

    static Singleton(view: ChangeNamePanel, isFirst: boolean = false): ChangeNameViewCtrl
    {
        if(!this._viewCtrl)
            this._viewCtrl = new ChangeNameViewCtrl();
        this._viewCtrl._panel = view;
        this._viewCtrl.isFirst = isFirst;
        return this._viewCtrl;
    }
    
    currentName: string;
    completion: Function;

    private get randomName(): string
    {
        return Game.config.playerName.getRandomName();
    }

    selectName(completion: Function)
    {
        this.completion = completion;
        if(this.isFirst)
        {
            this._panel.m_needCost.setSelectedIndex(0);
            this._panel.m_input.text = this.randomName;
        }
        else
        {
            this._panel.m_needCost.setSelectedIndex(1);
            let itemIcon = Game.config.item.getConfig(Global.nameCost.ItemId).iconUrl;
            this._panel.m_costLb.text = TEXT.ChangeNameCost.format(Global.nameCost.ItemNum);
            this._panel.m_costIcon.icon = itemIcon;
            this._panel.m_input.text = this.randomName;
        }
        this._panel.m_background.onClick(this, this.onHide);
        // Game.net.gamerChangeNameS2C.on(this.onChangeName,this);
        this._panel.m_commitBtn.onClick(this,this.onCommitBtnClick);
        this._panel.m_randomBtn.onClick(this,this.onClickRandomBtn);
        this._panel.onClick(this,this.onFocusOut);
        this._panel.m_input.m_title.on(Laya.Event.BLUR, this, this.onFocusIn);
    }

    private async onCommitBtnClick()
    {
        let name = this._panel.m_input.text
        if(!name)
        {
            Game.system.toastText(TEXT.ErrorNameEmpty);
            return;
        }
        if(name == Game.user.name)
        {
            Game.system.toastText(TEXT.ErrorNameUsed);
            return;
        }
        if(!this._reg.test(name))
        {
            Game.system.toastText(TEXT.ErrorFormatName);
            return;
        }
        let itemCount = Game.moduleModel.bag.getItemNum(Global.nameCost.ItemId);
        if(itemCount < Global.nameCost.ItemNum)
        {
            let name = Game.config.item.getConfig(Global.nameCost.ItemId).name;
            let needCount = Global.nameCost.ItemNum - itemCount;
            let txt = TEXT.ToastTextItemNotEnough2.format(needCount, name);
            Game.system.toastText(txt);
            return;
        }
        this.currentName = name;
        let s2c = await Game.sender.user.changeName(name);
        if(!s2c.error)
        {
            Game.user.name = this.currentName;
            this.onHide();
        }

    }

    private onClickRandomBtn()
    {
        this._panel.m_input.text = this.randomName;
    }

    private onChangeName(msg)
    {
        if(!msg.error)
        {
            Game.user.name = this.currentName;
            this.onHide();
        }
    }

    private __isFocusFlag:boolean = false;
    private onFocusIn()
    {
        this.__isFocusFlag = true;
    }
    private onFocusOut()
    {
        this.__isFocusFlag = false;
    }

    private onHide()
    {
        if(this.__isFocusFlag)
        {
            this.onFocusOut();
            return
        }
        // Game.net.gamerChangeNameS2C.off(this.onChangeName,this);
        this._panel.m_commitBtn.offClick(this,this.onHide);
        this._panel.m_randomBtn.offClick(this,this.onClickRandomBtn);
        this._panel.m_background.offClick(this,this.onHide);
        this._panel.offClick(this,this.onFocusOut);
        this._panel.m_input.m_title.off(Laya.Event.BLUR,this,this.onFocusIn);
        this.completion();
    }

    private get _reg(): RegExp
    {
        return new RegExp("^([0-9]|[a-zA-Z]|[\u4E00-\u9FFF])+$","g");
    }
}