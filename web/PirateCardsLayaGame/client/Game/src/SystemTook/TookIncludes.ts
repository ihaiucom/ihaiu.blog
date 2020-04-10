
import TestFixedTimeHookHandler from "./Handlers/TestFixedTimeHookHandler";
import TestHeartTookHandler from "./Handlers/TestHeartTookHandler";
import FixedTimeHookHandler_hms from "./Handlers/FixedTimeHookHandler_hms";
import Assembly from "../Libs/Cls/Assembly";
import SectionTimesTookHandler_hms from './Handlers/SectionTimesTookHandler_hms';


export default class TookIncludes
{
    private static isInstalled = false;
    static install()
    {
        if(this.isInstalled)
            return;

        // Assembly.register(<any>TestFixedTimeHookHandler, 'TestFixedTimeHookHandler');
        // Assembly.register(<any>TestHeartTookHandler, 'TestHeartTookHandler');
        Assembly.register(<any>FixedTimeHookHandler_hms, 'FixedTimeHookHandler_hms');
        // Assembly.register(<any>SectionTimesTookHandler_hms, 'SectionTimesTookHandler_hms');
    }
}