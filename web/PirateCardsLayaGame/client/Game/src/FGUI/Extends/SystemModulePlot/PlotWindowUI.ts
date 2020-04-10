/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlotWindowUIStruct from "../../Generates/SystemModulePlot/PlotWindowUIStruct";
import PlotWindow from "../../../GameModule/ViewWindows/PlotWindow";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import PlotData from "../../../GameModule/DataStructs/PlotData";
import PlotConfig from "../../../Config/ConfigExtends/PlotConfig";
import { EnumPlotTriggerType } from "../../../GameWar/Logic/Enum/EnumPlotNodeType";

export enum EnumPlotOutType
{
    No = 0, // 不需要
    Left = 1,
    Right = 2,
}

export enum EnumPlotEffectType
{
    behitBg = 1, // 红色背景闪烁，可循环
    behit = 2, // 刀光，不可循环
}

export enum EnumPlotPos
{
    left = 0,
    right = 1,
}

export enum EnumPlotContentType
{
    outBattle = 1, // 战外对话，人物位置偏上
    inBattle = 2, // 战内对话，人物位置偏下
}

export default class PlotWindowUI extends PlotWindowUIStruct
{
    /** 窗口 */
    moduleWindow: PlotWindow;
    private config: PlotConfig;
    private plotConfigIDList: number[]; // 剧情对话框数组
    private index: number = -1;
    
    onWindowShow()
    {
        this.m_bgFrame.m_closeBtn.onClick(this, this.onClickBg)
        this.m_btnJump.onClick(this, this.onClickJump)
    }

    onWindowHide()
    {
        this.m_bgFrame.m_closeBtn.offClick(this, this.onClickBg)
        this.m_btnJump.offClick(this, this.onClickJump)
    }

    onReset()
    {
        // this.m_leftIn.stop();
        // this.m_leftOut.stop();
        // this.m_rightIn.stop();
        // this.m_rightOut.stop();
        // this.m_leftIn2.stop();
        // this.m_leftOut2.stop();
        // this.m_rightIn2.stop();
        // this.m_rightOut2.stop();
        // this.m_bgAnimation.stop();
        // this.m_behitAnimation.stop();
        // this.m_behitAnimation2.stop();
        // this.m_leftBehitAni.stop();
        // this.m_rightBehitAni.stop();

        this.resetTextAnimation();
        this.lastLeftHeroID = -1;
        this.lastRightHeroID = -1;

        this.index = -1;
        this.plotConfigIDList = null;
        this.config = null;

        this.lastMapID = -1;
        this.bgAnimationIsPlay = false;
    }

    /** 关闭界面 */
    private close()
    {
        Game.menu.back(MenuId.Plot);
    }

    public open()
    {
        let data: PlotData = Game.moduleModel.plotManager.PlotData;
        let triggerType: EnumPlotTriggerType = Game.moduleModel.plotManager.triggerType;
        this.plotConfigIDList = data.plotConfigIDList;
        
        this.m_btnJump.visible = false; // TODO 功能未开放
        
        this.index = 0;
        this.m_textItem.alpha = 0; // 初始化隐藏详情面板
        this.hideBehitAnimation();
        
        this.m_leftItem.m_iconMask.visible = false;
        this.m_rightItem.m_iconMask.visible = false;
       
        if(triggerType == EnumPlotTriggerType.End)
        {
            this.onBattleEndShowSameNode(false);
            this.onBattleEndPlayBgAnimation();
        }
        else
        {
            this.onBattleEndShowSameNode(true);
            this.updateView();
        }
    }
    
    onBattleEndShowSameNode(isShow: boolean = true)
    {
        this.m_bgMap.visible = isShow;
        this.m_leftItem.visible = isShow;
        this.m_rightItem.visible = isShow;
        this.m_nameBg.visible = isShow;
        this.m_nameSprite.visible = isShow;
        this.m_labelName.visible = isShow;
        this.m_textItem.visible = isShow;
    }

    onBattleEndPlayBgAnimation()
    {
        let onAnimationEnd = function()
        {
            this.bgAnimationIsPlay = false;
            this.onBattleEndShowSameNode(true);
            this.updateView();
        }

        let callback = function()
        {
            let id = this.plotConfigIDList[this.index];
            let config = Game.config.plot.getConfig(id);
            // 局内对话，不需要背景地图
            if(config.contentType == EnumPlotContentType.outBattle)
            {
                this.m_bgMap.visible = true;
                let url = Game.config.avatar.getConfig(config.BackgroundMap).plotDialogueUrl;
                this.m_bgMap.url = url;
            }
        }
        this.bgAnimationIsPlay = true;
        let handler = new Laya.Handler(this, onAnimationEnd);
        this.m_bgAnimation.play(handler);

        Laya.timer.frameOnce(27, this, callback)
    }

    onClickJump()
    {
        // TODO 跳过当前组还是当前关卡所有组？
        return
        this.index = -1;
        Game.moduleModel.plotManager.end();
    }

    onClickBg()
    {
        this.hideBehitAnimation();
        if(this.bgAnimationIsPlay)
        {
            return;
        }
        this.bgAnimationIsPlay = true;

        if(this.index < this.plotConfigIDList.length - 1)
        {
            let outType = this.needOutAnimation;
            if(this.config.leaveMode == 1) // 人物消失，不再显示
            {
                let pos = this.config.position
                if(pos == EnumPlotPos.left)
                {
                    this.m_leftItem.m_icon.url = "";
                }
                else
                {
                    this.m_rightItem.m_icon.url = "";
                }
                let callback = new Laya.Handler(this, this.next)
                this.hideTextItemAnimation(callback);
            }
            else if(outType != EnumPlotOutType.No) // 人物离开动画
            {
                this.hideTextItemAnimation();
                let callback = new Laya.Handler(this, this.next)
                this.hideItemAnimation(outType, callback);
            }
            else
            {
                let callback = new Laya.Handler(this, this.next)
                this.hideTextItemAnimation(callback);
            }
        }
        else
        {
            if(Game.moduleModel.plotManager.triggerType == EnumPlotTriggerType.Start)
            {
                let onViewOver = function()
                {
                    this.end();
                }
                this.bgAnimationIsPlay = true;
                let handler = new Laya.Handler(this, onViewOver);
                this.m_bgAnimation.play(handler);
                
                let func = function()
                {
                    this.onBattleEndShowSameNode(false);
                    Game.moduleModel.plotManager.next();
                }
                Laya.timer.frameOnce(20, this, func)
            }
            else
            {
                this.end();
                Game.moduleModel.plotManager.next();
            }
        }
    }

    next()
    {
        this.index ++;
        this.updateView()
    }

    end()
    {
        this.onReset();
        this.close();
    }

    updateView()
    {
        let id = this.plotConfigIDList[this.index];
        let config = Game.config.plot.getConfig(id);
        this.config = config;
        // console.log("界面步骤", this.index, id)

        this.m_labelName.text = config.scenename;
        this.m_textItem.m_labelName.text = config.name;
        this.m_textItem.m_bgState.selectedIndex = config.dialgBox;
        this.m_textItem.m_posState.selectedIndex = config.position;
        this.showBgAnimation();
    }

    private bgAnimationIsPlay: boolean = false;
    private lastMapID: number = -1;
    showBgAnimation()
    {
        // 局内对话，不需要背景地图
        if(this.config.contentType == EnumPlotContentType.inBattle)
        {
            this.bgAnimationIsPlay = false;
            this.m_bgMap.url = "";
            this.showItemAnimation();
            return;
        }

        let mapID = this.config.BackgroundMap;
        if(this.lastMapID != -1 && this.lastMapID != mapID)
        {
            this.bgAnimationIsPlay = true;
            let callback = new Laya.Handler(this, this.showItemAnimation)
            this.m_bgAnimation.play(callback)

            let func = function()
            {
                let url = Game.config.avatar.getConfig(mapID).plotDialogueUrl;
                this.m_bgMap.url = url;
            }
            Laya.timer.frameOnce(27, this, func)
        }
        else
        {
            this.bgAnimationIsPlay = false;
            let url = Game.config.avatar.getConfig(mapID).plotDialogueUrl;
            this.m_bgMap.url = url;
            this.showItemAnimation();
        }
        this.lastMapID = mapID;
    }

    private lastLeftHeroID: number = -1;
    private lastRightHeroID: number = -1;
    // private lastMaskPos: EnumPlotPos = null ;
    // private lastMaskUrl: string = "";
    showItemAnimation()
    {
        this.bgAnimationIsPlay = false;

        let config = this.config;
        let pos = config.position;
        let heroID = config.imageId;
        if(!heroID || heroID == 0)
        {
            if(pos == EnumPlotPos.left)
            {
                this.m_leftItem.m_iconMask.visible = false;
                this.m_leftItem.m_icon.url = "";
                this.lastLeftHeroID = heroID;
            }
            else
            {
                this.m_rightItem.m_iconMask.visible = false;
                this.m_rightItem.m_icon.url = "";
                this.lastRightHeroID = heroID;
            }

            this.showBehitAnimation();
            return;
        }

        let url = Game.config.avatar.getConfig(heroID).plotDialogueUrl;
        let callback = new Laya.Handler(this, this.showBehitAnimation)
        if(pos == EnumPlotPos.left)
        {
            if(this.index == 0)
            {
                this.m_rightItem.m_icon.url = "";
            }
            this.m_leftItem.m_iconMask.visible = false;
            this.m_leftItem.m_icon.url = url;
            
            if(this.m_rightItem.m_icon.url != "")
            {
                let maskUrl = Game.config.avatar.getConfig(this.lastRightHeroID).shadowUrl;
                this.m_rightItem.m_iconMask.visible = true;
                this.m_rightItem.m_iconMask.url = maskUrl;
                this.m_rightItem.m_iconMask.alpha = 0.5;
            }

            // console.log("左", heroID, url)
            // this.m_leftItem.m_iconMask.url = url;
            // this.m_leftItem.m_iconMask.visible = false;
            // console.log("上一次？", this.lastMaskUrl, this.lastMaskPos)
            // if(this.lastMaskPos == EnumPlotPos.right && this.m_rightItem.m_iconMask.url == this.lastMaskUrl)
            // {
            //     this.m_rightItem.m_iconMask.visible = true;
            // }
            // else
            // {
            //     if(this.m_rightItem.m_icon.url != "")
            //     {
            //         this.m_rightItem.m_iconMask.visible = true;
            //         this.m_rightItem.m_iconMask.drawTextureColor("#000000", 0.8);
            //         this.lastMaskPos = EnumPlotPos.right;
            //         this.lastMaskUrl = this.m_rightItem.m_iconMask.url;
            //         console.log("=====1111", this.m_rightItem.m_iconMask.url)
            //     }
            //     else
            //     {
            //         this.m_rightItem.m_iconMask.url = "";
            //         this.lastMaskPos = null;
            //         this.lastMaskUrl = this.m_rightItem.m_iconMask.url;
            //     }
            // }


            if(heroID != this.lastLeftHeroID)
            {
                if(config.contentType == EnumPlotContentType.inBattle)
                {
                    this.m_leftIn2.play(callback);
                }
                else
                {
                    this.m_leftIn.play(callback);
                }

                this.lastLeftHeroID = heroID
            }
            else
            {
                this.showBehitAnimation();
            }
        }
        else
        {
            if(this.index == 0)
            {
                this.m_leftItem.m_icon.url = "";
            }
            this.m_rightItem.m_iconMask.visible = false;
            this.m_rightItem.m_icon.url = url;

            if(this.m_leftItem.m_icon.url != "")
            {
                let maskUrl = Game.config.avatar.getConfig(this.lastLeftHeroID).shadowUrl;
                this.m_leftItem.m_iconMask.visible = true;
                this.m_leftItem.m_iconMask.url = maskUrl;
                this.m_leftItem.m_iconMask.alpha = 0.5;
            }

            // console.log("右", heroID, url)
            // this.m_rightItem.m_iconMask.url = url;
            // this.m_rightItem.m_iconMask.visible = false;
            // console.log("上一次222？", this.lastMaskUrl, this.lastMaskPos)
            // if(this.lastMaskPos == EnumPlotPos.left && this.m_leftItem.m_iconMask.url == this.lastMaskUrl)
            // {
            //     this.m_leftItem.m_iconMask.visible = true;
            // }
            // else
            // {
            //     if(this.m_leftItem.m_icon.url != "")
            //     {
            //         this.m_leftItem.m_iconMask.visible = true;
            //         this.m_leftItem.m_iconMask.drawTextureColor("#000000", 0.8);
            //         this.lastMaskPos = EnumPlotPos.left;
            //         this.lastMaskUrl = this.m_leftItem.m_iconMask.url;
            //         console.log("=====222", this.m_leftItem.m_iconMask.url)
            //     }
            //     else
            //     {
            //         this.m_leftItem.m_iconMask.url = "";
            //         this.lastMaskPos = null;
            //         this.lastMaskUrl = this.m_leftItem.m_iconMask.url;
            //     }
            // }
            

            if(heroID != this.lastRightHeroID)
            {
                if(config.contentType == EnumPlotContentType.inBattle)
                {
                    this.m_rightIn2.play(callback);
                }
                else
                {
                    this.m_rightIn.play(callback);
                }

                this.lastRightHeroID = heroID
            }
            else
            {
                this.showBehitAnimation();
            }
        }
    }

    get needOutAnimation()
    {
        let nextId = this.plotConfigIDList[this.index + 1];
        let nextConfig = Game.config.plot.getConfig(nextId);
        let pos = nextConfig.position;
        let nextHeroID = nextConfig.imageId;
        if(pos == EnumPlotPos.left)
        {
            if(nextHeroID != this.lastLeftHeroID)
            {
                return EnumPlotOutType.Left;
            }
        }
        else
        {
            if(nextHeroID != this.lastRightHeroID)
            {
                return EnumPlotOutType.Right;
            }
        }

        return EnumPlotOutType.No;
    }

    hideItemAnimation(outType: EnumPlotOutType, callback: Laya.Handler)
    {
        switch (outType)
        {
            case EnumPlotOutType.Left:
                if(this.config.contentType == EnumPlotContentType.inBattle)
                {
                    this.m_leftOut2.play(callback);
                }
                else
                {
                    this.m_leftOut.play(callback);
                }
                return;
            case EnumPlotOutType.Right:
                if(this.config.contentType == EnumPlotContentType.inBattle)
                {
                    this.m_rightOut2.play(callback);
                }
                else
                {
                    this.m_rightOut.play(callback);
                }
                return;
        }
    }

    showBehitAnimation()
    {
        let config = this.config;
        let effects = config.specialEffects;
        if(effects && effects.length > 0)
        {
            let onlyBgAnimation = true;
            for(let effectType of effects)
            {
                if(effectType == EnumPlotEffectType.behitBg)
                {
                    this.m_boomSprite.visible = true;
                    if(config.playType == 1)
                    {
                        this.m_behitAnimation2.setAutoPlay(true, -1);
                    }
                    else
                    {
                        let callback = function()
                        {
                            this.m_boomSprite.visible = false;
                        }
                        this.m_behitAnimation2.play(new Laya.Handler(this, callback));
                    }
                }
                else if(effectType == EnumPlotEffectType.behit)
                {
                    onlyBgAnimation = false;
                    let callback = function()
                    {
                        this.m_boomSprite.visible = false;
                        this.m_leftBehitSpr.visible = false;
                        this.m_rightBehitSpr.visible = false;
                        this.showTextItemAnimation();
                    }

                    this.m_boomSprite.visible = true;
                    let handler = new Laya.Handler(this, callback)
                    if(config.position == EnumPlotPos.left)
                    {
                        this.m_leftBehitSpr.visible = true;
                        this.m_leftBehitAni.play(handler);
                    }
                    else
                    {
                        this.m_rightBehitSpr.visible = true;
                        this.m_rightBehitAni.play(handler);
                    }

                    // this.m_boomSprite.visible = true;
                    // let onHitEnd = function()
                    // {
                    //     this.m_boomSprite.visible = false;
                    // }
                    // this.m_behitAnimation.play(new Laya.Handler(this, onHitEnd));
                }
            }
            if(onlyBgAnimation)
            {
                this.showTextItemAnimation();
            }
        }
        else
        {
            this.showTextItemAnimation();
        }
    }

    hideBehitAnimation()
    {
        this.m_rightBehitSpr.visible = false;
        this.m_leftBehitSpr.visible = false;
        this.m_boomSprite.visible = false;
    }

    showTextItemAnimation()
    {
        let str = this.config.word;
        this.m_textItem.m_labelDesc.text = "";
        if(str && str != "")
        {
            this.descStr = str;
            this.isStopTextAnimation = false;

            let callback = new Laya.Handler(this, this.showText)
            this.m_textIn.play(callback);
        }
    }

    hideTextItemAnimation(callback: Laya.Handler = null)
    {
        this.resetTextAnimation();
        this.m_textOut.play(callback)
    }

    private static tick = 1000/40;
    private strIndex = 0;
    private descStr: string;
    private isStopTextAnimation = true;
    showText()
    {
        if(this.isStopTextAnimation)
        {
            return;
        }

        if(this.strIndex > this.descStr.length - 1)
        {
            this.resetTextAnimation();
            return;
        }

        let tempStr = this.descStr.charAt(this.strIndex);
        this.m_textItem.m_labelDesc.text = this.m_textItem.m_labelDesc.text + tempStr;
        this.strIndex ++;
        Laya.timer.once(PlotWindowUI.tick, this, this.showText);
    }

    resetTextAnimation()
    {
        this.isStopTextAnimation = true;
        this.strIndex = 0;
        this.descStr = null;
    }
}
