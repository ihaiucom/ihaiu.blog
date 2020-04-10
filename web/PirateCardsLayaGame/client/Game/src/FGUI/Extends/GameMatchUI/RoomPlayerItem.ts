/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RoomPlayerItemStruct from "../../Generates/GameMatchUI/RoomPlayerItemStruct";

export default class RoomPlayerItem extends RoomPlayerItemStruct
{
    private datasouce: proto.IRoomMemInfo;
    
    RenderItem(datasouce:proto.IRoomMemInfo, index: number)
    {
        this.datasouce = datasouce;

        this.name = datasouce.miniInfo.name;
        this.m_state.selectedIndex = index % 2;
    }
}