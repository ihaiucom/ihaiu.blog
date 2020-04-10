// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-12 09:47:00,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.GameData
{
    /// <summary>
    ///  获取玩家拓展信息
    /// </summary>
    [MessageHandler(URL = "GameData/GetGameInfoExt")]
    public class GetGameInfoExtHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetGameInfoExtResponse>>>();
            var arg = new CommonEventArgs<GetGameInfoExtResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetGameInfoExtResponse>.EventId, arg);
        }   
    }
}