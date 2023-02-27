using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    /// 控制台变量标签
    /// </summary>
    public enum ConVarFlags
    {
        NONE = 0,
        /**
         * If this is set, the convar will become anonymous and won't show up in the
         * 'find' results.
         */
        UNREGISTERED = 1,
        DEVELOPMENTONLY = 2,
        HIDDEN = 16,
        /**
         * Makes the ConVar value hidden from all clients (for example sv_password).
         *
         * Reported as "prot" by cvarlist.
         */
        PROTECTED = 32,
        /**
         * Executing the command or changing the ConVar is only allowed in singleplayer.
         *
         * Reported as "sp" by cvarlist.
         */
        SPONLY = 64,
        /**
         * Save the ConVar value into config.cfg.
         *
         * Reported as "a" by cvarlist, except Lua ConVars.
         */
        ARCHIVE = 128,
        /**
         * For serverside ConVars, notifies all players with blue chat text when the value
         * gets changed.
         *
         * Reported as "nf" by cvarlist.
         */
        NOTIFY = 256,
        /**
         * For clientside commands, sends the value to the server.
         *
         * Reported as "user" by cvarlist.
         */
        USERINFO = 512,
        /**
         * Forces the ConVar to only have printable characters (no control characters).
         *
         * Reported as "print" by cvarlist.
         */
        PRINTABLEONLY = 1024,
        /**
         * Don't log the ConVar changes to console/log files/users.
         *
         * Reported as "log" by cvarlist.
         */
        UNLOGGED = 2048,
        /**
         * Tells the engine to never print this variable as a string since it contains
         * control sequences.
         *
         * Reported as "numeric" by cvarlist.
         */
        NEVER_AS_STRING = 4096,
        /**
         * For serverside ConVars, it will send its value to all clients. The ConVar with
         * the same name must also exist on the client!
         *
         * Reported as "rep" by cvarlist.
         */
        REPLICATED = 8192,
        /**
         * Requires sv_cheats to be enabled to change the ConVar or run the command.
         *
         * Reported as "cheat" by cvarlist.
         */
        CHEAT = 16384,
        SS = 32768,
        /**
         * Force the ConVar to be recorded by demo recordings.
         *
         * Reported as "demo" by cvarlist.
         */
        DEMO = 65536,
        /**
         * Opposite of FCVAR_DEMO, ensures the ConVar is not recorded in demos.
         *
         * Reported as "norecord" by cvarlist.
         */
        DONTRECORD = 131072,
        /**
         * Makes the ConVar not changeable while connected to a server or in singleplayer.
         */
        NOT_CONNECTED = 4194304,
        VCONSOLE_SET_FOCUS = 1073741824,
    }
}
