using System;
using System.Collections.Generic;
using System.Text;

namespace ZF
{
    /// <summary>
    ///  https://developer.valvesoftware.com/wiki/Animation_Events#Server_events
    /// </summary>
    //枚举类型：Source Engine动画事件
    public enum SourceEngineAnimationEvent
    {
        EMPTY = 0,  //空事件
        CL_PLAYSOUND = 1,   //客户端播放声音
        CL_PLAYSOUND_ATTACHMENT = 2,    //客户端播放附着声音
        CL_PLAYSOUND_POSITION = 3,  //客户端播放位置声音
        SV_PLAYSOUND = 4,   //服务器播放声音
        CL_STOPSOUND = 5,   //客户端停止播放声音
        CL_PLAYSOUND_LOOPING = 6,   //客户端循环播放声音
        CLIENT_EFFECT_ATTACH = 7,   //客户端附着特效
        CL_CREATE_PARTICLE_EFFECT = 8,  //客户端创建粒子特效
        CL_STOP_PARTICLE_EFFECT = 9,    //客户端停止粒子特效
        CL_ADD_PARTICLE_EFFECT_CP = 10,    //客户端添加粒子特效CP
        CL_CREATE_PARTICLE_EFFECT_CFG = 11,    //客户端创建粒子特效CFG
        CL_SUPPRESS_EVENTS_WITH_TAG = 12,   //客户端抑制带标记的事件
        START_SCRIPTED_EFFECT = 13, //开始脚本特效
        STOP_SCRIPTED_EFFECT = 14,  //停止脚本特效
        MUZZLEFLASH = 15,   //枪口火光
        SV_CREATE_PARTICLE_EFFECT_CFG = 16,   //服务器创建粒子特效CFG
        SV_STOP_PARTICLE_EFFECT = 17, //服务器停止粒子特效
        CL_HIDE_PARTICLE_EFFECT = 18, //客户端隐藏粒子特效
        CL_SHOW_PARTICLE_EFFECT = 19, //客户端显示粒子特效
        FOOTSTEP = 20,  //脚步声
        CL_FOOTSTEP_LEFT = 21,  //客户端左脚脚步声
        CL_FOOTSTEP_RIGHT = 22, //客户端右脚脚步声
        CL_MFOOTSTEP_LEFT = 23, //客户端左脚多人脚步声
        CL_MFOOTSTEP_RIGHT = 24,    //客户端右脚多人脚步声
        CL_MFOOTSTEP_LEFT_LOUD = 25,    //客户端大声左脚多人脚步声
        CL_MFOOTSTEP_RIGHT_LOUD = 26,   //客户端大声右脚多人脚步声
        RAGDOLL = 27,   //布娃娃
        CL_ENABLE_BODYGROUP = 28,   //客户端启用身体组
        CL_DISABLE_BODYGROUP = 29,  //客户端禁用身体组
        CL_BODYGROUP_SET_VALUE = 30,    //客户端设置身体组值
        SV_BODYGROUP_SET_VALUE = 31,    //服务器设置身体组值
        CL_BODYGROUP_SET_VALUE_CMODEL_WPN = 32,   //客户端设置CModel武器身体组值
        WPN_PRIMARYATTACK = 33, //武器主攻击
        WPN_PLAYWPNSOUND = 34,  //武器播放武器声音
        WPN_SECONDARYATTACK = 35,   //武器次攻击
        CL_SPEECH = 36, //客户端语音
        FIRE_INPUT = 37,    //开火输入
        CL_CLOTH_ATTR = 38, //客户端布料属性
        CL_CLOTH_GROUND_OFFSET = 39,   //客户端布料地面偏移
        CL_CLOTH_STIFFEN = 40, //客户端布料硬化
        CL_CLOTH_EFFECT = 41,  //客户端布料特效
        CL_CREATE_ANIM_SCOPE_PROP = 42, //客户端创建动画范围道具
        HAPTIC_PULSE = 43,  //触觉脉冲
        CL_DOTA_PLAY_STATUS_EFFECT = 44,    //客户端DOTA播放状态特效
        CL_DOTA_STOP_STATUS_EFFECT = 45,    //客户端DOTA停止状态特效
        CL_DOTA_NPC_CREATE_PARTICLE_EFFECT = 46, //客户端DOTA创建NPC粒子特效
        CL_DOTA_RUBICK_ARCANA_CREATE_PARTICLE_EFFECT = 47,    //客户端DOTA创建Rubick Arcana粒子特效
        DOTA_PET_ITEM_PICKUP = 48,  //DOTA宠物物品拾取
        DOTA_PET_ITEM_DROP = 49,   //DOTA宠物物品丢弃
        DOTA_SUPPRESS_CONSTANT_LAYER = 50,  //DOTA抑制常量层
        DOTA_PLAY_SOUND_ATTACK_SPECIAL = 51,    //DOTA播放攻击特殊声音
        DOTA_CREATE_CLINKZ_ATTACK = 52,  //DOTA创建Clinkz攻击
        DOTA_PLAY_SOUND_ATTACK_BACKSTAB = 53,  //DOTA播放背刺攻击声音
        DOTA_DIE_PHANTOM_DEATH_PARTICLES = 54, //DOTA幻影死亡粒子特效
        DOTA_SWITCH_ATTACK_COMBO = 55, //DOTA切换攻击组合
        DOTA_PLAY_SOUND_ATTACK = 57,    //DOTA播放攻击声音
    }
}
