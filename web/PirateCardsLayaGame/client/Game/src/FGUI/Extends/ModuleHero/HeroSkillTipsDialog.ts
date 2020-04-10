/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroSkillTipsDialogStruct from "../../Generates/ModuleHero/HeroSkillTipsDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import Game from "../../../Game";

export default class HeroSkillTipsDialog extends HeroSkillTipsDialogStruct
{
    heroID: int; // 英雄ID
    skillID: int; // 技能ID

    private dialogCtrl: DialogCtrl;
    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);
        this.dialogCtrl.setCloseBtnEvent();    
    }

    open(heroID: int, skillID: int): void {
        this.heroID = heroID;
        this.skillID = skillID;
        this.updateView();

        this.dialogCtrl.open();
    }

    close(): void  {
        
        this.dialogCtrl.close();
    }

    updateView()
    {
        let data = Game.moduleModel.hero.GetSkillData(this.heroID, this.skillID);
        this.m_labelName.text = data.name;
        this.m_labelLevel.text = data.lv.toString();
        this.m_labelDesc.text = data.desc;
        this.m_icon.m_icon.url = data.icon;

        // TODO 天赋技能暂不处理
        if(data.IsMax)
        {
            this.m_state.selectedIndex = 0;
        }
        else
        {
            this.m_state.selectedIndex = 1;
            this.m_labelNextDesc.text = data.nextDesc;
        }

        Laya.timer.frameOnce(1, this, this.updateBgSize);
    }

    updateBgSize()
    {
        let index = this.m_state.selectedIndex
        let obj = this.m_labelDesc;
        if(index == 1)
        {
            obj = this.m_labelNextDesc;
        }
        else if(index == 2)
        {
            obj = this.m_labelText;
        }

        let bgY = this.m_bg.y;
        let objY = obj.y;
        let objHeight = obj.height;
        let height = objY - bgY + objHeight + 20;
        this.m_bg.height = height;

        let winHeight = Laya.stage.height;
        this.m_bg.y = winHeight/2 - height/2;
    }
}