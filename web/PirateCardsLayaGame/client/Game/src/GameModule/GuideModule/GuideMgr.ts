import GuideWindowUI from "../../FGUI/Extends/SystemModuleGuide/GuideWindowUI";
import Game from "../../Game";
import GuideDialogUI from "../../FGUI/Extends/SystemModuleGuide/GuideDialogUI";
import { EnumGuideType, EnumGuideTriggerType } from "./GuideEnum";
import GuideFinger from "../../FGUI/Extends/SystemModuleGuide/GuideFinger";
import GuideText from "../../FGUI/Extends/SystemModuleGuide/GuideText";
import { MenuId } from "../MenuId";
import MenuLayer from "../../GameFrame/Menu/MenuLayer";
import GuideData from "../DataStructs/GuideData";
import GameLog, { EnumLogLevel } from "../../GameLog";

export class GuideMgr
{
    /** 引导功能是否开启 */
    static isOpenGuide : boolean = VersionConfig.IsOpenGuide;

    static isShowingHomeDialog : boolean = false;

    static needReturnHomeWIndow : boolean = false;

    /** 放其他临时转移到这里的节点 */
    private _otherNode : fgui.GComponent;
    public get otherNode() : fgui.GComponent
    {
        return this._otherNode;
    } 
    public set otherNode(val : fgui.GComponent)
    {
        this._otherNode = val;
    }

    /** 手指的节点 */
    private _fingerNode : GuideFinger;
    public get fingerNode() : GuideFinger
    {
        return this._fingerNode;
    } 
    public set fingerNode(val : GuideFinger)
    {
        this._fingerNode = val;
    }

    /** 文字的节点 */
    private _textNode : GuideText;
    public get textNode() : GuideText
    {
        return this._textNode;
    } 
    public set textNode(val : GuideText)
    {
        this._textNode = val;
    }

    /** 遮罩的节点 */
    private _maskNode : GuideDialogUI;
    public get maskNode() : GuideDialogUI
    {
        return this._maskNode;
    } 
    public set maskNode(val : GuideDialogUI)
    {
        this._maskNode = val;
    }


    private _isGuiding : boolean;
    
    public get isGuiding() : boolean
    {
        return this._isGuiding;
    } 
    public set isGuiding(val : boolean)
    {
        this._isGuiding = val;
    }

    private _guideDialog : GuideDialogUI;
    /** 当前引导的配置id */
    private _nowGuideUid : int = -1;
    public get nowGuideUid() : int
    {
        return this._nowGuideUid;
    }
    public set nowGuideUid(val : int)
    {
        this._nowGuideUid = val;
    }
    /** 当前引导的组id */
    private _nowGuideGroup : number = -1;
    public get nowGuideGroup() : int
    {
        return this._nowGuideGroup;
    }
    public set nowGuideGroup(val : int)
    {
        this._nowGuideGroup = val;
    }


    /**
     * 获取guide遮罩Dialog
     */
    public get guideDialog()
    {
        if (!this._guideDialog) {
            this._guideDialog = GuideDialogUI.createInstance();
        }
        return this._guideDialog;
    }

    constructor()
    {
        this._isGuiding = false;
        this._nowGuideUid = -1;
        this._nowGuideGroup = -1;
        this._otherNode = new fgui.GComponent();
        this._fingerNode = GuideFinger.createInstance();
        this._maskNode = GuideDialogUI.createInstance();
        this._textNode = GuideText.createInstance();
        MenuLayer.guide.addChild(this._maskNode);
        MenuLayer.guide.addChild(this._otherNode);
        MenuLayer.guide.addChild(this._fingerNode);
        MenuLayer.guide.addChild(this._textNode);
        this._otherNode.visible = true;
        this._fingerNode.visible = false;
        this._maskNode.visible = false;
        this._textNode.visible = false;

    }

    public ChangeGuideDialog(x : number, y : number, width : number, height : number, text : string = "")
    {
        let config = Game.config.guide.getConfig(this.nowGuideUid);
        if(!config || !GuideMgr.isOpenGuide)
        {
            return;
        }
        if(config.type == EnumGuideType.COERCION)
        {
            Game.system.guideMgr.ShowGuideDialog(0, 0, 0, 0);
            // Game.system.guideMgr.ShowGuideDialog(x, y, width, height);
        }
        else
        {
            Game.system.guideMgr.HideGuideDialog();
        }
        let offsetX = config.fingerPostion[0] ? config.fingerPostion[0] : 0;
        let offsetY = config.fingerPostion[1] ? config.fingerPostion[1] : 0;
        
        if(config.finger)
        {
            Game.system.guideMgr.ShowFinger(x + offsetX, y + offsetY);
            if(text == "")
            {
                text = config.zhCnDes;
            }
            Game.system.guideMgr.ShowTextNode(x + offsetX, y + offsetY, config.textPosition, text);
        }
        else
        {
            this.HideFinger();
            this.HideTextNode();
        }
        
        
        
    }

    /**
     * 
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     * @param text 
     * @param fingerOffsetX 
     * @param fingerOffsetY 
     */
    public BackGuideShow(x : number, y : number, width : number, height : number, 
        fingerOffsetX : number, fingerOffsetY : number, textType : number = 1, text : string = "")
    {
        Game.system.guideMgr.ShowGuideDialog(x, y, width, height);
        
        Game.system.guideMgr.ShowFinger(x + fingerOffsetX, y + fingerOffsetY);
        Game.system.guideMgr.ShowTextNode(x + fingerOffsetX, y + fingerOffsetY, textType, text);
        
    }

    /**
     * 显示引导遮罩
     */
    public ShowGuideDialog(x : number, y : number, width : number, height : number)
    {
        this.maskNode.visible = true;
        this.maskNode.m_allMask.visible = true;
        // this.maskNode.m_leftTopMask.width = x + width - 0.11;
        // this.maskNode.m_leftTopMask.height = y- 0.11;

        // this.maskNode.m_RightTopMask.width = MenuLayer.root.width - x - width- 0.11;;
        // this.maskNode.m_RightTopMask.height = y + height - 0.11;

        // this.maskNode.m_leftBottomMask.width = x- 0.11;;
        // this.maskNode.m_leftBottomMask.height = MenuLayer.root.height - y - 0.11;

        // this.maskNode.m_rightBottomMask.width = MenuLayer.root.width - x - 0.11;
        // this.maskNode.m_rightBottomMask.height = MenuLayer.root.height - y - height- 0.11;;
        // this.maskNode.m_RightTopMask.width = 
        // this.guideDialog.Open();
        // console.trace("ShowGuideDialog");
    }

    /**
     * 隐藏遮罩
     */
    public HideGuideDialog()
    {
        this.fingerNode.visible = false;
        this.maskNode.visible = false;
        this.textNode.visible = false;
        // this.guideDialog.Close();
        // console.trace("HideGuideDialog");
    }

    public ShowGuide()
    {
        this.fingerNode.visible = true;
        this.maskNode.visible = true;
        this.textNode.visible = true;
    }

    public HideGuide()
    {
        this.HideGuideDialog();
    }

    public ShowFinger(x : number, y : number)
    {
        this.fingerNode.visible = true;
        this.fingerNode.x = x;
        this.fingerNode.y = y;
    }

    public HideFinger()
    {
        this.fingerNode.visible = false;
    }

    public ShowTextNode(x : number, y : number, type : number = 0, text : string= "")
    {
        if(text == "")
        {
            this.textNode.visible = false;
            return;
        }
        let offsetX = 0;
        let offsetY = 0;
        switch(type)
        {
            case 1 :
                offsetX -= this.textNode.width - 30;
                offsetY -= this.textNode.height - 30;
                break;     
            case 2 :
                offsetX -= this.textNode.width - 30;
                offsetY += this.fingerNode.height;
                break;
            case 3 :
                offsetX += this.fingerNode.width;
                offsetY -= this.textNode.height - 30;
                break;
            case 4 :
                offsetX += this.fingerNode.width;
                offsetY += this.fingerNode.height;
                break;  
        }

        this.textNode.x = x + offsetX;
        this.textNode.y = y + offsetY;
        this.textNode.visible = true;
        this.textNode.m_content.text = text; 
    }

    public HideTextNode()
    {
        this.textNode.visible = false;
    }

    /**
     * 检查是否有引导类型，返回对应的引导配置
     * @param triggerType 
     */
    public CheckGuideList(triggerType : number, arg1? : number, arg2? : number) : number
    {
        if(!GuideMgr.isOpenGuide || this.isGuiding)
        {
            return 0;
        }

        let model = Game.moduleModel.guide;
        let config = Game.config.guide;
        if(!model || !config)
        {
            return 0;
        }


        let list = config.configList;
        for(let i = 0 ; i < list.length ; i ++)
        {
            let item = list[i];
            let data = model.GetData(item.group);
            if(item.trigger == triggerType && (!data || !data.isOver))
            {

                switch(item.trigger)
                {
                    case EnumGuideTriggerType.BATTLE_GUIDE :
                        this.StartGuide(item.id, true, item.group);
                        return item.group;
                        break;
                    case EnumGuideTriggerType.SYSTEM_OPEN :
                        if(arg1 !== undefined && arg1 !== null && item.triggerValue[0] == arg1)
                        {
                            this.StartGuide(item.id, true, item.group);
                            return item.group;
                        }
                        break;
                    case EnumGuideTriggerType.GUIDE_GROUP_FINISH :
                        if(arg1 !== undefined && arg1 !== null && item.triggerValue[0] == arg1)
                        {
                            this.StartGuide(item.id, true, item.group);
                            return item.group;
                        }
                        break;
                }
                
            }
        }
        return 0;
    }

    public StartGuide(guideId : number, isGuiding : boolean, guidGroup : number)
    {
        let model = Game.moduleModel.guide;

        if(!model || !GuideMgr.isOpenGuide)
        {
            return;
        }
        this.nowGuideUid = guideId;
        this._isGuiding = isGuiding;
        this.nowGuideGroup = guidGroup;
        if(!model.GetData(guidGroup))
        {
            model.AddNewGuideData(guidGroup);
            model.SendData();
        }
    }
    /**
     * 进入下一步
     */
    public GoToNextStop()
    {
        let model = Game.moduleModel.guide;
        if(!model || this.nowGuideGroup <= 0)
        {
            GameLog.Log(EnumLogLevel.Error, "GuideMgr GoToNextStop 出错, model不存在或ID出问题");
            return ;
        }
        model.DataGotoNextStep(this.nowGuideGroup);
    }
    /**
     * 隐藏遮罩
     */
    public HideMask()
    {
        this.maskNode.visible = false;
    }
}