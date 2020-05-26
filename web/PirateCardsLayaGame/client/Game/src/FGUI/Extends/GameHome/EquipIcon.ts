/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EquipIconStruct from "../../Generates/GameHome/EquipIconStruct";
import { EquipData, Player } from "../../../War/Datas/Player";
import { ItemType } from "../../../GameModule/DataEnums/ItemType";
import TweenHelper from "../../../War/Utils/TweenHelper";

export default class EquipIcon extends EquipIconStruct
{
    data:EquipData;
    SetData(data:EquipData)
    {
        data.view = this;
        if(this.data)
        {
            this.data.sChange.remove(this.OnChange, this);
            this.data.sStepChange.remove(this.SetStep, this);
        }

        this.data = data;
        if(data)
        {
            this.data.sChange.add(this.OnChange, this);
            this.data.sStepChange.add(this.SetStep, this);
        }
        this.OnChange();
        this.scaleX = 1;
        this.scaleY = 1;
        this.alpha = 1;
    }

    OnChange()
    {
        this.SetStep();
        this.SetIcon();
        if(this.data && this.data.id > 0)
        {
            TweenHelper.spriteShow(this);
            this.title = this.data.config.name;
        }
        else
        {
            this.title = "";
        }
    }

    SetStep()
    {
        var data = this.data;
        if(data && data.stepMax >= 1)
        {
            this.m_stepText.text = data.step + "/" + data.stepMax;
            this.m_step.setSelectedIndex(1);
            // this.m_step.setSelectedIndex(data.config.type == ItemType.Decorate ? 1 : 0);
        }
        else
        {
            this.m_stepText.text = "";
            this.m_step.setSelectedIndex(0);
        }
    }
    
    SetIcon()
    {
        var data = this.data;
        if(data)
        {
            this.m_icon.url = data.iconUrl;
        }
        else
        {
            this.m_icon.url = "";
        }
    }
}