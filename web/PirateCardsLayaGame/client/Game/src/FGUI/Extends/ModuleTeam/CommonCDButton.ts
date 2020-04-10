/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonCDButtonStruct from "../../Generates/ModuleTeam/CommonCDButtonStruct";
import Game from "../../../Game";

export default class CommonCDButton extends CommonCDButtonStruct
{
    DataSource:number = 0;

    /*----------------------默认视图接口---------------------------*/
    /** 初始化视图 */
    protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
    }

    /** 销毁视图 */
    public dispose()
    {
        this.Reset();
        super.dispose();
    }

    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.DataSource      = 0;
        this.m_labCD.text    = "0";
        this.m_State.selectedIndex = 0;
        Game.event.dispatch("FINISH_CD");

        Laya.timer.clear(this, this.UpdateCD);
    }

    /** 更新CD */
    private UpdateCD()
    {
        this.DataSource--;

        if (this.DataSource >= 0) 
        {
            this.m_labCD.text = String(this.DataSource);
        } 
        else 
        {
            this.Reset();    
        }
    }

    /*public----------------------外部接口---------------------------*/
    /** 设置倒计时 */
    public SetTime(time:number)
    {
        this.DataSource     = time;
        this.m_labCD.text   = String(time); 
        this.m_labCD.grayed = false;
        this.m_State.selectedIndex = 1;

        Laya.timer.loop(1000, this, this.UpdateCD);
    }
}