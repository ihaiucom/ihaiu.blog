/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AffixWindowUIStruct from "../../Generates/ModuleDialogs/AffixWindowUIStruct";
import AffixConfig from '../../../Config/ConfigExtends/AffixConfig';
import AffixWindow from '../../../GameModule/ViewWindows/AffixWindow';

export default class AffixWindowUI extends AffixWindowUIStruct
{
    moduleWindow: AffixWindow;
    onWindowShow(): void
    {
        this.m_bg.onClick(this,this.menuBack);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.m_bg.offClick(this,this.menuBack);
    }
    
    public ShowTips(affixConfig: AffixConfig, target: Laya.Sprite)
    {
        this.m_panel.m_title.text = affixConfig.AffixName + "："+ affixConfig.AffixExplain+affixConfig.AffixExplain;
        this.CalculatePosition(target);
    }

    menuBack()
    {
        this.moduleWindow.menuBack();
    }

    private CalculatePosition(target: Laya.Sprite)
    {
        //词缀btn位置
        let pt = Laya.Point.create();
        let gPt = target.localToGlobal(pt);
        let targetRight = gPt.x + target.width;
        let targetBottom = gPt.y + target.height;
        let stageWdith = Laya.stage.width;
        let stageHeiht = Laya.stage.height;
        //判断panel箭头位置
        let isLeft = targetRight + this.panelWidth > stageWdith;
        let isBottom = targetBottom + this.panelHeight > stageHeiht;
        //设置坐标
        let gX = isLeft ? gPt.x-this.panelWidth: targetRight;
        let gY = isBottom ? gPt.y - this.panelHeight : gPt.y;
        let pt2 = Laya.Point.create();
        pt2.setTo(gX,gY);
        let panelPt = this.displayObject.fromStagePoint(pt2);
        let panelY = panelPt.y > 8 ? panelPt.y: 8;
        this.m_panel.setXY(panelPt.x,panelY);
        let page = 'topLeft';
        if(!isLeft)
        {
            if(isBottom)
                page = 'bottomLeft';
            else
                page = 'topLeft';
        }
        else
        {
            if(isBottom)
                page ='bottomRight';
            else
                page = 'topRight';
        }
        this.m_panel.m_Direction.setSelectedPage(page);
    }

    private get panelWidth()
    {
        return this.m_panel.width;
    }

    private get panelHeight()
    {
        return this.m_panel.height;
    }
}