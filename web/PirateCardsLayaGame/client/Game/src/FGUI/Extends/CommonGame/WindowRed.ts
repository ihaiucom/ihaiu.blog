/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WindowRedStruct from "../../Generates/CommonGame/WindowRedStruct";

export default class WindowRed extends WindowRedStruct
{
    private static pool = [];
    static poolGet():WindowRed
    {
        let item:WindowRed;
        if(this.pool.length > 0)
        {
            item = this.pool.shift();
        }
        else
        {
            item = WindowRed.createInstance();
            item._id = "red"
        }

        return item;
    }

    poolRecover()
    {
        if(WindowRed.pool.indexOf(this) == -1 )
        {
            WindowRed.pool.push(this);
        }
    }

    protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
        
        // this.onClick(this, this.release);
	}

    autoSize(parent:GComponent)
    {
        let width   = parent.width;
        let height  = parent.height;

        // 适配位置——右上角
        this.x      = width /2;
        this.y      = height / 2;
        this.width  = width;
        this.height = height 
    }

    release()
    {
        this.grayed = false;
        this.removeFromParent();
        this.poolRecover();
    }
}