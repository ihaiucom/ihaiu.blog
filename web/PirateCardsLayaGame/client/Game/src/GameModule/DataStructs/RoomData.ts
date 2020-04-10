export default class RoomData {
    /**房间ID  */
    id: number;        

    /**房主ID  */
    ownerId: number;

    /**匹配类型 */
    type: number;

    /**开始时间 */
    time: number;

    /**房间名字 */
    name: string;

    /**房间状态 */
    state:number;

    /**房间成员 */
    members: proto.IRoomMemInfo[];

    constructor()
    {

    }

    /**
     * 创建数据单元
     * @param msg 
     */
    static Create(msg:proto.IRoomInfo):RoomData
    {
        let roomdata:RoomData = new RoomData();
        roomdata.id = msg.id;
        roomdata.ownerId = msg.ownerId;
        roomdata.type = msg.type;
        roomdata.time = msg.id;
        roomdata.name = msg.name;
        roomdata.state= msg.state;
        roomdata.members = msg.members;

        return roomdata;
    }
}