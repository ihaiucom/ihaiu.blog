
import LoginSender from "./Senders/LoginSender";
import UserSender from './Senders/UserSender';

//====================
// 消息发送器列表
//--------------------
export default class ProtoSenderList
{
    login = new LoginSender();
    user = new UserSender();
}