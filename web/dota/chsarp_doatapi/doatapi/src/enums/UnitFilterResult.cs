namespace ZF
{
    public enum UnitFilterResult {
        SUCCESS = 0, // �ɹ�
        FAIL_FRIENDLY = 1, // ʧ��:�Ѻõ�
        FAIL_ENEMY = 2, // ʧ��:����
        FAIL_HERO = 3, // ʧ��:Ӣ��
        FAIL_CONSIDERED_HERO = 4,  // ʧ��:����Ϊ�� Ӣ��
        FAIL_CREEP = 5, // ʧ��:����
        FAIL_BUILDING = 6, // ʧ��:������
        FAIL_COURIER = 7, // ʧ��:��ʹ
        FAIL_OTHER = 8,  // ʧ��:����
        FAIL_ANCIENT = 9, // ʧ��: ����
        FAIL_ILLUSION = 10, // ʧ��: ����
        FAIL_SUMMONED = 11, // ʧ��: ����
        FAIL_DOMINATED = 12, // ʧ��:����
        FAIL_MELEE = 13,  // ʧ��:��ս
        FAIL_RANGED = 14,  // ʧ��:��Χ
        FAIL_DEAD = 15,  // ʧ��: ��ȥ��
        FAIL_MAGIC_IMMUNE_ALLY = 16, // ʧ��: ħ������ ����
        FAIL_MAGIC_IMMUNE_ENEMY = 17, // ʧ��: ħ������ ����
        FAIL_INVULNERABLE = 18, //  ʧ��: �޵е�
        FAIL_IN_FOW = 19, //
        FAIL_INVISIBLE = 20, // ʧ��: ���ɼ�
        FAIL_NOT_PLAYER_CONTROLLED = 21, // ʧ��:����ҿ���
        FAIL_ATTACK_IMMUNE = 22, // ʧ��:��������
        FAIL_CUSTOM = 23, // ʧ��:�Զ���
        FAIL_INVALID_LOCATION = 24, // ʧ��:��Ч��λ��
        FAIL_DISABLE_HELP = 25, // ʧ��:���ð���
        FAIL_OUT_OF_WORLD = 26, // ʧ��:Խ��
        FAIL_NIGHTMARED = 27,  // ʧ��:ج�ΰ��
        FAIL_OBSTRUCTED = 28, // ʧ��:�赲
    }
}