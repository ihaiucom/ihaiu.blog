using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    ///  https://developer.valvesoftware.com/wiki/Damage_types
    /// </summary>
    public enum SourceEngineDamageTypes
    {
        /**
        * Generic damage.
        */
        GENERIC = 0,
        /**
         * Caused by physics interaction. Ignored by airboat drivers.
         */
        CRUSH = 1,
        /**
         * Bullet damage.
         */
        BULLET = 2,
        /**
         * Sharp objects, such as Manhacks or other NPCs attacks.
         */
        SLASH = 4,
        /**
         * Damage from fire.
         */
        BURN = 8,
        /**
         * Hit by a vehicle. This will need to be set for passengers of some vehicle to
         * receive damage.
         */
        VEHICLE = 16,
        /**
         * Fall damage.
         */
        FALL = 32,
        /**
         * Explosion damage. Will be ignored by most vehicle passengers.
         */
        BLAST = 64,
        /**
         * Crowbar damage.
         */
        CLUB = 128,
        /**
         * Electrical damage, shows smoke at the damage position.
         */
        SHOCK = 256,
        /**
         * Sonic damage,used by the Gargantua and Houndeye NPCs.
         */
        SONIC = 512,
        /**
         * Laser.
         */
        ENERGYBEAM = 1024,
        /**
         * Prevent a physics force.
         */
        PREVENT_PHYSICS_FORCE = 2048,
        /**
         * Never creates gibs. Used by the crossbow.
         */
        NEVERGIB = 4096,
        /**
         * Always create gibs.
         */
        ALWAYSGIB = 8192,
        /**
         * Drown damage.
         */
        DROWN = 16384,
        /**
         * Same as DMG_POISON.
         */
        PARALYZE = 32768,
        /**
         * Neurotoxin damage.
         */
        NERVEGAS = 65536,
        /**
         * Poison damage.
         */
        POISON = 131072,
        /**
         * Radiation. Will be ignored by most vehicle passengers.
         */
        RADIATION = 262144,
        /**
         * Damage applied to the player to restore health after drowning.
         */
        DROWNRECOVER = 524288,
        /**
         * Toxic chemicals or acid burns.
         */
        ACID = 1048576,
        /**
         * In an oven.
         */
        SLOWBURN = 2097152,
        /**
         * Don't create a ragdoll on death.
         */
        REMOVENORAGDOLL = 4194304,
        /**
         * Damage done by the gravity gun.
         */
        PHYSGUN = 8388608,
        /**
         * Plasma.
         */
        PLASMA = 16777216,
    }
}
