/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DraugItemStruct from "../../Generates/ModuleDraug/DraugItemStruct";
import DraugData from "../../../GameModule/DataStructs/DraugData";
import Res from "../../../Config/Keys/Res";

export default class DraugItem extends DraugItemStruct
{
    /** 战魂数据 */
    DataSource:DraugData;

    /** 战魂Id */
    uId:number = -1;

    /*----------------------默认视图接口---------------------------*/
    /** 初始化视图 */
    protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        // this.on(Laya.Event.MOUSE_DOWN, this, this.DragStart);
        // this.on(Laya.Event.MOUSE_UP, this, this.DragEnd);
    }

    /** 销毁视图 */
    dispose()
    {
        // this.off(Laya.Event.MOUSE_DOWN, this, this.DragStart);
        // this.off(Laya.Event.MOUSE_UP, this, this.DragEnd);
        this.Reset();
        super.dispose();
    }

    /*private----------------------UI事件操作---------------------------*/
    // /** 拖动开始 */
    // private DragStart()
    // {
    //     if (!this.Draging || this.IsSwallow() || this.CanSelect()) 
    //         return;
        

    //     this.Downing = true;
    //     Laya.timer.once(200, this, this.DragDowning, null, true);
    // }

    // /** 拖动结束 */
    // private DragEnd()
    // {
    //     this.Downing = false;
    //     Laya.timer.clear(this, this.DragDowning);
    // }
    
    /*private---------------------内部方法---------------------------*/
    /** 重置 */
    private Reset()
    {
        this.DataSource = null;
        this.uId     = -1;
    }

    // /** 长按拖动 */
    // private DragDowning()
    // {
    //     let data = this.DataSource;
    //     let item = DraugItem.createInstance();
    //     item.RenderItem(data);
    //     fgui.DragDropManager.inst.startDrag(item, data);
    // }

    /** 设置战魂信息 */
    private SetDraugInfo()
    {
        let datasouce = this.DataSource;

        this.m_imgItem.url      = Res.getDraugIcon(datasouce.typeName);
        this.m_labLevel.text    = `${datasouce.level}`;
        this.m_imgLock.visible  = datasouce.isLock;
        this.m_Quality.selectedIndex = datasouce.quality - 1;
        this.m_Part.selectedIndex    = datasouce.pos - 1;
    }
    
    /*public----------------------外部接口---------------------------*/
    /** 设置选中 */
    public SetSelect(selected?:boolean)
    {
        selected = selected != null ? selected : !this.m_btnSelect.selected;
        this.m_btnSelect.selected = selected;
    }

    /** 是否选中 */
    public IsSelect()
    {
        return this.m_btnSelect.selected;
    }

    /** 能否选中 */
    public CanSelect()
    {
        return this.m_btnSelect.visible;
    }

    /** 置灰选中 */
    public SetSelectGray(gray:boolean)
    {
        return this.m_btnSelect.grayed = gray;
    }

    /** 是否锁定 */
    public IsLock()
    {
        return this.DataSource.isLock;
    }

    /** 设置锁定 */
    public SetLock(lock:boolean)
    {
        this.m_imgLock.visible = lock;
        this.DataSource.isLock = lock;
    }

    /** 打开吞噬 */
    public OpenSwallow(isself:boolean)
    {
        this.m_imgSwallow.visible = isself;
        this.m_btnSelect.selected = false;
        this.m_btnSelect.visible  = !isself;
    }

    /** 关闭吞噬 */
    public CloseSwallow()
    {
        this.m_imgSwallow.visible = false;
        this.m_btnSelect.visible  = false;
    }

    /** 是否吞噬 */
    public IsSwallow()
    {
        return this.m_imgSwallow.visible;
    }

    /** 设置分解 */
    public SetDecompose()
    {
        this.m_btnSelect.visible = true;       
    }

    /** 能否分解 */
    public CanDecompose()
    {
        return this.m_btnSelect.visible;
    }

    /** 是否当前战魂 */
    public IsSelf(id:number)
    {
        return this.DataSource.uid == id;
    }

    /** 重置渲染 */
    public ResetRender()
    {
        this.m_imgSwallow.visible = false;
        this.m_btnSelect.selected = false;
        this.m_btnSelect.visible  = false;
    }
    
    /** 渲染Item */
    public RenderItem(datasouce:DraugData)
    {
        this.DataSource = datasouce;
        if (datasouce) 
        {
            this.uId        = datasouce.uid;

            this.m_State.selectedIndex = 0;
            this.SetDraugInfo();
        }
        else 
        {
            this.m_State.selectedIndex = 1;
        }
        
    }
}