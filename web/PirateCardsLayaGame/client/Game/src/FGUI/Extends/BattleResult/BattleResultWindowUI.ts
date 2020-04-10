/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BattleResultWindow from "../../../GameModule/ViewWindows/BattleResultWindow";
import {War} from "../../../GameWar/Logic/War";
import BattleResultWindowUIStruct from "../../Generates/BattleResult/BattleResultWindowUIStruct";
import ResultType = proto.BattleResultType;
import PVPType = proto.PVPType;
import GamerNotifyNewSecretLandResultS2C = proto.GamerNotifyNewSecretLandResultS2C;

export default class BattleResultWindowUI extends BattleResultWindowUIStruct
{
    
    /** 窗口 */
    moduleWindow: BattleResultWindow;

    battleType: PVPType = PVPType.PVE_M1;
    /** 窗口显示 */
    onWindowShow(): void
    {
        let params = this.moduleWindow.menuParameter.args;
        let type = params.length > 1 ? params[1]: null;
        if(type == proto.CheckPointType.SecretLand)
        {
            this.m_type.setSelectedIndex(2);
            let msg: GamerNotifyNewSecretLandResultS2C = params[0];
            this.m_secretLand.UpdateView(msg);
            return;
        }
        let msg: proto.GamerNotifyNewPVPResultS2C = params[0];

        if(War.isLocalSignal)
        {
            this.m_pve.show(msg);
        }
        this.battleType = msg.battleType;
        switch (msg.battleType) {
            case proto.PVPType.PVP_M1V1:
            case proto.PVPType.PVP_M2V2:
            case proto.PVPType.PVP_M3V3:
            case proto.PVPType.PVP_M4V4:
                {
                    this.m_type.setSelectedIndex(1);
                    this.m_pvp.show(msg);
                }
                break;
            case proto.PVPType.PVE_M1:
            case proto.PVPType.PVE_M2:
            case proto.PVPType.PVE_M3:
            case proto.PVPType.PVE_M4:
                {
                    this.m_type.setSelectedIndex(0);
                    this.m_pve.show(msg);
                }
                break;

            default:
                    break;
        }
        
    }

    /** 窗口隐藏 */
    onWindowHide()
    {
        switch (this.battleType) {
            case proto.PVPType.PVP_M1V1:
            case proto.PVPType.PVP_M2V2:
            case proto.PVPType.PVP_M3V3:
            case proto.PVPType.PVP_M4V4:
                {
                    this.m_pvp.hide();
                }
                break;
            case proto.PVPType.PVE_M1:
            case proto.PVPType.PVE_M2:
            case proto.PVPType.PVE_M3:
            case proto.PVPType.PVE_M4:
            {
                this.m_pve.hide();
            }
            break;
        
            default:
                break;
    }
    }

}