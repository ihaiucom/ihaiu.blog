import ItemType = proto.ItemType;
import Game from "../../Game";
import GuideConfig from "../../Config/ConfigExtends/GuideConfig";
import { GuideMgr } from "../GuideModule/GuideMgr";
import { EnumGuideTriggerType } from "../GuideModule/GuideEnum";


export default class GuideData extends proto.Guide
{
    // /** 当前的配置 */
    // private nowConfig : GuideConfig;

    /**
     * 生成数据
     * @param draug 
     */
    static Create():GuideData
    {
        let data = new GuideData();
        data.Reset();
        return data;
    }

    private get guideMgr() : GuideMgr
    {
        return Game.system.guideMgr;
    }

    constructor()
    {
        super();
    }

    /**
     * 设置内容
     * @param id uid
     * @param isOver 是否结束
     * @param progress 当前状态
     */
    public SetData(id : number, isOver : boolean, progress : number)
    {   
        this.id = id;
        this.isOver = isOver;
        this.progress = progress;
    }

    /**
     * 通过服务器的数据设置数据
     * @param serverData 服务器的数据类
     */
    public SetDataByServer(serverData:proto.IGuide)
    {
        this.SetData(serverData.id, serverData.isOver, serverData.progress);
    }

    /**
     * 设置当前引导状态是否结束
     * @param isOver shifuo jieshu 
     */
    public SetGuideState(isOver : boolean)
    {
        this.isOver = isOver;
    }
    /**
     * 设置当前引导状态
     * @param nowState 当前状态index
     */
    public SetGuideProgress(nowState : number)
    {
        let nowconfigID =  this.id * 1000 + nowState;
        let nowConfig = Game.config.guide.getConfig(nowconfigID);
        if(!nowConfig)
        {
            return;
        }
        this.progress = nowState;
        Game.system.guideMgr.nowGuideUid = this.id * 1000 + this.progress;
        // else
        // {
        //     Game.system.guideMgr.nowGuideUid = this.id * 1000 + this.progress + 1;
        // }

        // if(nowConfig.isFinish == 1)
        // {
        //     Game.moduleModel.guide.SendData();
        // }

    }

    public GoNextGuideProgress()
    {
        let nowConfigID = this.id * 1000 + this.progress;
        let nowConfig = Game.config.guide.getConfig(nowConfigID);
        if(!nowConfig)
        {
            return;
        }
        if(nowConfig.isFinish == 1)
        {
            Game.moduleModel.guide.SendData();
        }
        if(nowConfig.nextGuideId == 0)
        {
            this.FinishGuide();
        }
        else
        {
            Game.system.guideMgr.nowGuideUid = nowConfig.nextGuideId;
            let nextConifg = Game.config.guide.getConfig(nowConfig.nextGuideId);
            this.progress = nextConifg.groupOrder;
        }
    }

    public Reset()
    {
        this.id = -1;
        this.isOver = false;
        this.progress = 0;
    }

    public CheckProgress(_progress : number) : boolean
    {
        if(this.isOver || !GuideMgr.isOpenGuide)
        {
            return false;
        }
        if(_progress == this.progress)
        {
            return true;
        }
        return false;
    }

    /**
     * 结束某一个组的引导
     * @param group 
     */
    public FinishGuide()
    {
        // TODO 发送给服务器
        this.guideMgr.nowGuideUid = -1;
        this.guideMgr.nowGuideGroup = -1;
        this.guideMgr.isGuiding = false;
        this.guideMgr.HideGuideDialog();
        this.SetGuideState(true);
        
        Game.moduleModel.guide.SendData();

        this.guideMgr.CheckGuideList(EnumGuideTriggerType.GUIDE_GROUP_FINISH, this.id);

    }

}