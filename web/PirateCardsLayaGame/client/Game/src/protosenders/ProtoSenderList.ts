import BagSender from './Senders/BagSender';
import BattleMatchPVPSender from "./Senders/BattleMatchPVPSender";
import BattleMatchSender from "./Senders/BattleMatchSender";
import BattlePlanSender from "./Senders/BattlePlanSender";
import DraugSender from "./Senders/DraugSender";
import EquipSender from "./Senders/EquipSender";
import GashaponSender from './Senders/GashaponSender';
import GMSender from './Senders/GMSender';
import HeroSender from "./Senders/HeroSender";
import LoginSender from "./Senders/LoginSender";
import PowerSender from "./Senders/PowerSender";
import PVPSender from './Senders/PVPSender';
import QuestSender from "./Senders/QuestSender";
import SectionSender from "./Senders/SectionSender";
import TeamSender from "./Senders/TeamSender";
import UserSender from './Senders/UserSender';
import GuideSender from './Senders/GuideSender';
import HomeSender from './Senders/HomeSender';
import SecretLandSender from './Senders/SecretLandSender';

//====================
// 消息发送器列表
//--------------------
export default class ProtoSenderList
{
    login = new LoginSender();
    gm = new GMSender();
    bag = new BagSender();
    battleMatch = new BattleMatchSender();
    battleMatchPVP = new BattleMatchPVPSender();
    gashapon = new GashaponSender();
    hero = new HeroSender();
    user = new UserSender();
    draug = new DraugSender();
    section = new SectionSender();
    battlePlan = new BattlePlanSender();

    power = new PowerSender();
    equip = new EquipSender();
    team = new TeamSender();
    pvp = new PVPSender();
    quest = new QuestSender();

    guide = new GuideSender();
    home = new HomeSender();

    secretLand = new SecretLandSender();
}