/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HeroBodyIconStruct from "../../Generates/CommonGame/HeroBodyIconStruct";
import { HeroData } from "../../../GameModule/DataStructs/HeroData";
import Game from "../../../Game";

export default class HeroBodyIcon extends HeroBodyIconStruct
{
    DataSource:HeroData;

    /*----------------------默认视图接口---------------------------*/
    protected constructFromXML(xml: any): void {
        super.constructFromXML(xml);
    }

    /** 销毁视图 */
    dispose()
    {
        this.Reset();
        super.dispose();
    }

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.DataSource = null;
    }

    /*public----------------------外部接口---------------------------*/
    public RenderItem(heroid: number)  {
        let data = Game.moduleModel.hero.GetData(heroid)
        this.DataSource = data;

        let cardUrl = Game.moduleModel.hero.Card(data.id);
        this.m_bg.url = cardUrl;
        this.m_quality.selectedIndex = data.Quality - 1;
        this.m_name.text = data.Name;
        this.m_star.m_starNum.selectedIndex = data.star;
        this.m_star.m_starPos.selectedIndex = data.star;
    }
}