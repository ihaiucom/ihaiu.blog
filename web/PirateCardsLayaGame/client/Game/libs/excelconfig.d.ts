declare module excelconfig {
	 interface IDTItemNum {
	    ItemId?: (number|null);
	    ItemNum?: (number|null);
	}
	 class DTItemNum implements IDTItemNum {
	    constructor(properties?: IDTItemNum);
	    public ItemId: number;
	    public ItemNum: number;
	    public static create(properties?: IDTItemNum): DTItemNum;
	    public static encode(message: IDTItemNum, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTItemNum, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTItemNum;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTItemNum;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTItemNum;
	    public static toObject(message: DTItemNum, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTRewardRandom {
	    Weight?: (number|null);
	    ItemType?: (number|null);
	    ItemId?: (number|null);
	    ItemNum?: (number|null);
	}
	 class DTRewardRandom implements IDTRewardRandom {
	    constructor(properties?: IDTRewardRandom);
	    public Weight: number;
	    public ItemType: number;
	    public ItemId: number;
	    public ItemNum: number;
	    public static create(properties?: IDTRewardRandom): DTRewardRandom;
	    public static encode(message: IDTRewardRandom, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTRewardRandom, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTRewardRandom;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTRewardRandom;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTRewardRandom;
	    public static toObject(message: DTRewardRandom, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTStoryNum {
	    Star?: (number|null);
	    Num?: (number|null);
	}
	 class DTStoryNum implements IDTStoryNum {
	    constructor(properties?: IDTStoryNum);
	    public Star: number;
	    public Num: number;
	    public static create(properties?: IDTStoryNum): DTStoryNum;
	    public static encode(message: IDTStoryNum, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTStoryNum, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTStoryNum;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTStoryNum;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTStoryNum;
	    public static toObject(message: DTStoryNum, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTVector2 {
	    X?: (number|null);
	    Y?: (number|null);
	}
	 class DTVector2 implements IDTVector2 {
	    constructor(properties?: IDTVector2);
	    public X: number;
	    public Y: number;
	    public static create(properties?: IDTVector2): DTVector2;
	    public static encode(message: IDTVector2, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTVector2, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTVector2;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTVector2;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTVector2;
	    public static toObject(message: DTVector2, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTActorSkill {
	    GroupId?: (number|null);
	    Lv?: (number|null);
	}
	 class DTActorSkill implements IDTActorSkill {
	    constructor(properties?: IDTActorSkill);
	    public GroupId: number;
	    public Lv: number;
	    public static create(properties?: IDTActorSkill): DTActorSkill;
	    public static encode(message: IDTActorSkill, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTActorSkill, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTActorSkill;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTActorSkill;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTActorSkill;
	    public static toObject(message: DTActorSkill, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTActorStory {
	    Story?: (number|null);
	    Lv?: (number|null);
	    Property?: (number|null);
	}
	 class DTActorStory implements IDTActorStory {
	    constructor(properties?: IDTActorStory);
	    public Story: number;
	    public Lv: number;
	    public Property: number;
	    public static create(properties?: IDTActorStory): DTActorStory;
	    public static encode(message: IDTActorStory, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTActorStory, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTActorStory;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTActorStory;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTActorStory;
	    public static toObject(message: DTActorStory, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTActorFeature {
	    Feature?: (number|null);
	    Lv?: (number|null);
	    Property?: (number|null);
	}
	 class DTActorFeature implements IDTActorFeature {
	    constructor(properties?: IDTActorFeature);
	    public Feature: number;
	    public Lv: number;
	    public Property: number;
	    public static create(properties?: IDTActorFeature): DTActorFeature;
	    public static encode(message: IDTActorFeature, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTActorFeature, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTActorFeature;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTActorFeature;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTActorFeature;
	    public static toObject(message: DTActorFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTActorCharacter {
	    Character?: (number|null);
	    Lv?: (number|null);
	    Property?: (number|null);
	}
	 class DTActorCharacter implements IDTActorCharacter {
	    constructor(properties?: IDTActorCharacter);
	    public Character: number;
	    public Lv: number;
	    public Property: number;
	    public static create(properties?: IDTActorCharacter): DTActorCharacter;
	    public static encode(message: IDTActorCharacter, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTActorCharacter, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTActorCharacter;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTActorCharacter;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTActorCharacter;
	    public static toObject(message: DTActorCharacter, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTRandomInterval {
	    Num1?: (number|null);
	    Num2?: (number|null);
	}
	 class DTRandomInterval implements IDTRandomInterval {
	    constructor(properties?: IDTRandomInterval);
	    public Num1: number;
	    public Num2: number;
	    public static create(properties?: IDTRandomInterval): DTRandomInterval;
	    public static encode(message: IDTRandomInterval, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTRandomInterval, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTRandomInterval;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTRandomInterval;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTRandomInterval;
	    public static toObject(message: DTRandomInterval, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTShootType {
	    Shoottypeid?: (number|null);
	    Rate?: (number|null);
	}
	 class DTShootType implements IDTShootType {
	    constructor(properties?: IDTShootType);
	    public Shoottypeid: number;
	    public Rate: number;
	    public static create(properties?: IDTShootType): DTShootType;
	    public static encode(message: IDTShootType, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTShootType, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTShootType;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTShootType;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTShootType;
	    public static toObject(message: DTShootType, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTStoryEffect {
	    Storyeffect?: (number|null);
	    Rate?: (number|null);
	}
	 class DTStoryEffect implements IDTStoryEffect {
	    constructor(properties?: IDTStoryEffect);
	    public Storyeffect: number;
	    public Rate: number;
	    public static create(properties?: IDTStoryEffect): DTStoryEffect;
	    public static encode(message: IDTStoryEffect, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTStoryEffect, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTStoryEffect;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTStoryEffect;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTStoryEffect;
	    public static toObject(message: DTStoryEffect, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTBuildingReq {
	    Type?: (number|null);
	    Level?: (number|null);
	}
	 class DTBuildingReq implements IDTBuildingReq {
	    constructor(properties?: IDTBuildingReq);
	    public Type: number;
	    public Level: number;
	    public static create(properties?: IDTBuildingReq): DTBuildingReq;
	    public static encode(message: IDTBuildingReq, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTBuildingReq, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTBuildingReq;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTBuildingReq;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTBuildingReq;
	    public static toObject(message: DTBuildingReq, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTValue2 {
	    V1?: (number|null);
	    V2?: (number|null);
	}
	 class DTValue2 implements IDTValue2 {
	    constructor(properties?: IDTValue2);
	    public V1: number;
	    public V2: number;
	    public static create(properties?: IDTValue2): DTValue2;
	    public static encode(message: IDTValue2, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTValue2, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTValue2;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTValue2;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTValue2;
	    public static toObject(message: DTValue2, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTValue3 {
	    V1?: (number|null);
	    V2?: (number|null);
	    V3?: (number|null);
	}
	 class DTValue3 implements IDTValue3 {
	    constructor(properties?: IDTValue3);
	    public V1: number;
	    public V2: number;
	    public V3: number;
	    public static create(properties?: IDTValue3): DTValue3;
	    public static encode(message: IDTValue3, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTValue3, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTValue3;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTValue3;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTValue3;
	    public static toObject(message: DTValue3, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTDrop {
	    X?: (number|null);
	    Y?: (number|null);
	}
	 class DTDrop implements IDTDrop {
	    constructor(properties?: IDTDrop);
	    public X: number;
	    public Y: number;
	    public static create(properties?: IDTDrop): DTDrop;
	    public static encode(message: IDTDrop, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTDrop, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTDrop;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTDrop;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTDrop;
	    public static toObject(message: DTDrop, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTPerformActoin {
	    V1?: (number|null);
	    V2?: (number|null);
	    V3?: (number|null);
	}
	 class DTPerformActoin implements IDTPerformActoin {
	    constructor(properties?: IDTPerformActoin);
	    public V1: number;
	    public V2: number;
	    public V3: number;
	    public static create(properties?: IDTPerformActoin): DTPerformActoin;
	    public static encode(message: IDTPerformActoin, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTPerformActoin, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTPerformActoin;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTPerformActoin;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTPerformActoin;
	    public static toObject(message: DTPerformActoin, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTPerformSpeak {
	    V1?: (number|null);
	    V2?: (number|null);
	    V3?: (number|null);
	}
	 class DTPerformSpeak implements IDTPerformSpeak {
	    constructor(properties?: IDTPerformSpeak);
	    public V1: number;
	    public V2: number;
	    public V3: number;
	    public static create(properties?: IDTPerformSpeak): DTPerformSpeak;
	    public static encode(message: IDTPerformSpeak, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTPerformSpeak, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTPerformSpeak;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTPerformSpeak;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTPerformSpeak;
	    public static toObject(message: DTPerformSpeak, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTParts {
	    V1?: (string|null);
	    V2?: (string|null);
	}
	 class DTParts implements IDTParts {
	    constructor(properties?: IDTParts);
	    public V1: string;
	    public V2: string;
	    public static create(properties?: IDTParts): DTParts;
	    public static encode(message: IDTParts, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTParts, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTParts;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTParts;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTParts;
	    public static toObject(message: DTParts, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTProficiency {
	    V1?: (number|null);
	    V2?: (number|null);
	}
	 class DTProficiency implements IDTProficiency {
	    constructor(properties?: IDTProficiency);
	    public V1: number;
	    public V2: number;
	    public static create(properties?: IDTProficiency): DTProficiency;
	    public static encode(message: IDTProficiency, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTProficiency, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTProficiency;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTProficiency;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTProficiency;
	    public static toObject(message: DTProficiency, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTDate {
	    Y?: (number|null);
	    M?: (number|null);
	    D?: (number|null);
	}
	 class DTDate implements IDTDate {
	    constructor(properties?: IDTDate);
	    public Y: number;
	    public M: number;
	    public D: number;
	    public static create(properties?: IDTDate): DTDate;
	    public static encode(message: IDTDate, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTDate, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTDate;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTDate;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTDate;
	    public static toObject(message: DTDate, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTTime {
	    H?: (number|null);
	    Mm?: (number|null);
	    S?: (number|null);
	}
	 class DTTime implements IDTTime {
	    constructor(properties?: IDTTime);
	    public H: number;
	    public Mm: number;
	    public S: number;
	    public static create(properties?: IDTTime): DTTime;
	    public static encode(message: IDTTime, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTTime, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTTime;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTTime;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTTime;
	    public static toObject(message: DTTime, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTDateTime {
	    Y?: (number|null);
	    M?: (number|null);
	    D?: (number|null);
	    H?: (number|null);
	    Mm?: (number|null);
	    S?: (number|null);
	}
	 class DTDateTime implements IDTDateTime {
	    constructor(properties?: IDTDateTime);
	    public Y: number;
	    public M: number;
	    public D: number;
	    public H: number;
	    public Mm: number;
	    public S: number;
	    public static create(properties?: IDTDateTime): DTDateTime;
	    public static encode(message: IDTDateTime, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTDateTime, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTDateTime;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTDateTime;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTDateTime;
	    public static toObject(message: DTDateTime, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTFixItemNum {
	    ItemType?: (number|null);
	    ItemId?: (number|null);
	    ItemNum?: (number|null);
	}
	 class DTFixItemNum implements IDTFixItemNum {
	    constructor(properties?: IDTFixItemNum);
	    public ItemType: number;
	    public ItemId: number;
	    public ItemNum: number;
	    public static create(properties?: IDTFixItemNum): DTFixItemNum;
	    public static encode(message: IDTFixItemNum, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTFixItemNum, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTFixItemNum;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTFixItemNum;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTFixItemNum;
	    public static toObject(message: DTFixItemNum, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTGiftNum {
	    ItemId?: (number|null);
	    ItemNum?: (number|null);
	    Property?: (number|null);
	}
	 class DTGiftNum implements IDTGiftNum {
	    constructor(properties?: IDTGiftNum);
	    public ItemId: number;
	    public ItemNum: number;
	    public Property: number;
	    public static create(properties?: IDTGiftNum): DTGiftNum;
	    public static encode(message: IDTGiftNum, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTGiftNum, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTGiftNum;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTGiftNum;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTGiftNum;
	    public static toObject(message: DTGiftNum, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTLabelProperty {
	    StoryTag?: (number|null);
	    Property?: (number|null);
	}
	 class DTLabelProperty implements IDTLabelProperty {
	    constructor(properties?: IDTLabelProperty);
	    public StoryTag: number;
	    public Property: number;
	    public static create(properties?: IDTLabelProperty): DTLabelProperty;
	    public static encode(message: IDTLabelProperty, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTLabelProperty, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTLabelProperty;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTLabelProperty;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTLabelProperty;
	    public static toObject(message: DTLabelProperty, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTInitialLabel {
	    StoryTag?: (number|null);
	    Level?: (number|null);
	    Property?: (number|null);
	}
	 class DTInitialLabel implements IDTInitialLabel {
	    constructor(properties?: IDTInitialLabel);
	    public StoryTag: number;
	    public Level: number;
	    public Property: number;
	    public static create(properties?: IDTInitialLabel): DTInitialLabel;
	    public static encode(message: IDTInitialLabel, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTInitialLabel, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTInitialLabel;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTInitialLabel;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTInitialLabel;
	    public static toObject(message: DTInitialLabel, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTPerformanceCondition {
	    Lv?: (number|null);
	    Property?: (number|null);
	    Num?: (number|null);
	}
	 class DTPerformanceCondition implements IDTPerformanceCondition {
	    constructor(properties?: IDTPerformanceCondition);
	    public Lv: number;
	    public Property: number;
	    public Num: number;
	    public static create(properties?: IDTPerformanceCondition): DTPerformanceCondition;
	    public static encode(message: IDTPerformanceCondition, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTPerformanceCondition, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTPerformanceCondition;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTPerformanceCondition;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTPerformanceCondition;
	    public static toObject(message: DTPerformanceCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTSkillTiggerCondition {
	    TiggerConditon?: (number|null);
	    TiggerValue?: (number|null);
	}
	 class DTSkillTiggerCondition implements IDTSkillTiggerCondition {
	    constructor(properties?: IDTSkillTiggerCondition);
	    public TiggerConditon: number;
	    public TiggerValue: number;
	    public static create(properties?: IDTSkillTiggerCondition): DTSkillTiggerCondition;
	    public static encode(message: IDTSkillTiggerCondition, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTSkillTiggerCondition, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTSkillTiggerCondition;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTSkillTiggerCondition;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTSkillTiggerCondition;
	    public static toObject(message: DTSkillTiggerCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTburstlibrary {
	    ItemId?: (number|null);
	    ItemNum?: (number|null);
	    Rate?: (number|null);
	}
	 class DTburstlibrary implements IDTburstlibrary {
	    constructor(properties?: IDTburstlibrary);
	    public ItemId: number;
	    public ItemNum: number;
	    public Rate: number;
	    public static create(properties?: IDTburstlibrary): DTburstlibrary;
	    public static encode(message: IDTburstlibrary, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTburstlibrary, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTburstlibrary;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTburstlibrary;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTburstlibrary;
	    public static toObject(message: DTburstlibrary, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTProp {
	    PropID?: (number|null);
	    Rate?: (number|null);
	}
	 class DTProp implements IDTProp {
	    constructor(properties?: IDTProp);
	    public PropID: number;
	    public Rate: number;
	    public static create(properties?: IDTProp): DTProp;
	    public static encode(message: IDTProp, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTProp, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTProp;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTProp;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTProp;
	    public static toObject(message: DTProp, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTRandNum {
	    Num?: (number|null);
	    Rate?: (number|null);
	}
	 class DTRandNum implements IDTRandNum {
	    constructor(properties?: IDTRandNum);
	    public Num: number;
	    public Rate: number;
	    public static create(properties?: IDTRandNum): DTRandNum;
	    public static encode(message: IDTRandNum, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTRandNum, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTRandNum;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTRandNum;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTRandNum;
	    public static toObject(message: DTRandNum, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTPropGrowupStep {
	    Level?: (number|null);
	    Step?: (number|null);
	}
	 class DTPropGrowupStep implements IDTPropGrowupStep {
	    constructor(properties?: IDTPropGrowupStep);
	    public Level: number;
	    public Step: number;
	    public static create(properties?: IDTPropGrowupStep): DTPropGrowupStep;
	    public static encode(message: IDTPropGrowupStep, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTPropGrowupStep, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTPropGrowupStep;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTPropGrowupStep;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTPropGrowupStep;
	    public static toObject(message: DTPropGrowupStep, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTDecompose {
	    Percent?: (number|null);
	    Rewardid?: (number|null);
	}
	 class DTDecompose implements IDTDecompose {
	    constructor(properties?: IDTDecompose);
	    public Percent: number;
	    public Rewardid: number;
	    public static create(properties?: IDTDecompose): DTDecompose;
	    public static encode(message: IDTDecompose, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTDecompose, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTDecompose;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTDecompose;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTDecompose;
	    public static toObject(message: DTDecompose, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTStarReward {
	    Level?: (number|null);
	    Starnum?: (number|null);
	    Rewardid?: (number|null);
	}
	 class DTStarReward implements IDTStarReward {
	    constructor(properties?: IDTStarReward);
	    public Level: number;
	    public Starnum: number;
	    public Rewardid: number;
	    public static create(properties?: IDTStarReward): DTStarReward;
	    public static encode(message: IDTStarReward, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTStarReward, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTStarReward;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTStarReward;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTStarReward;
	    public static toObject(message: DTStarReward, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTBuffId {
	    BuffID1?: (number|null);
	    BuffID2?: (number|null);
	    BuffID3?: (number|null);
	    BuffID4?: (number|null);
	    BuffID5?: (number|null);
	    BuffID6?: (number|null);
	}
	 class DTBuffId implements IDTBuffId {
	    constructor(properties?: IDTBuffId);
	    public BuffID1: number;
	    public BuffID2: number;
	    public BuffID3: number;
	    public BuffID4: number;
	    public BuffID5: number;
	    public BuffID6: number;
	    public static create(properties?: IDTBuffId): DTBuffId;
	    public static encode(message: IDTBuffId, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTBuffId, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTBuffId;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTBuffId;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTBuffId;
	    public static toObject(message: DTBuffId, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTPropValue {
	    PropID?: (number|null);
	    Value?: (number|null);
	}
	 class DTPropValue implements IDTPropValue {
	    constructor(properties?: IDTPropValue);
	    public PropID: number;
	    public Value: number;
	    public static create(properties?: IDTPropValue): DTPropValue;
	    public static encode(message: IDTPropValue, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTPropValue, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTPropValue;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTPropValue;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTPropValue;
	    public static toObject(message: DTPropValue, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTMapId {
	    ChapterId?: (number|null);
	    MapId?: (number|null);
	}
	 class DTMapId implements IDTMapId {
	    constructor(properties?: IDTMapId);
	    public ChapterId: number;
	    public MapId: number;
	    public static create(properties?: IDTMapId): DTMapId;
	    public static encode(message: IDTMapId, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTMapId, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTMapId;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTMapId;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTMapId;
	    public static toObject(message: DTMapId, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTRandomMap {
	    Part?: (number|null);
	    MapNum?: (number|null);
	}
	 class DTRandomMap implements IDTRandomMap {
	    constructor(properties?: IDTRandomMap);
	    public Part: number;
	    public MapNum: number;
	    public static create(properties?: IDTRandomMap): DTRandomMap;
	    public static encode(message: IDTRandomMap, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTRandomMap, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTRandomMap;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTRandomMap;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTRandomMap;
	    public static toObject(message: DTRandomMap, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTRewardRate {
	    Rate?: (number|null);
	    Rewardid?: (number|null);
	}
	 class DTRewardRate implements IDTRewardRate {
	    constructor(properties?: IDTRewardRate);
	    public Rate: number;
	    public Rewardid: number;
	    public static create(properties?: IDTRewardRate): DTRewardRate;
	    public static encode(message: IDTRewardRate, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTRewardRate, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTRewardRate;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTRewardRate;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTRewardRate;
	    public static toObject(message: DTRewardRate, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDTGashaponReward {
	    Gashaponid?: (number|null);
	    Times?: (number|null);
	    Rewardid?: (number|null);
	}
	 class DTGashaponReward implements IDTGashaponReward {
	    constructor(properties?: IDTGashaponReward);
	    public Gashaponid: number;
	    public Times: number;
	    public Rewardid: number;
	    public static create(properties?: IDTGashaponReward): DTGashaponReward;
	    public static encode(message: IDTGashaponReward, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDTGashaponReward, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DTGashaponReward;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DTGashaponReward;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DTGashaponReward;
	    public static toObject(message: DTGashaponReward, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IGlobal {
	    everydayUpdateTime?: (number|null);
	    roleNameAutoGen?: (string|null);
	    roleNameMaxLength?: (number|null);
	    roleNameMinLength?: (number|null);
	    superAccountSwitch?: (boolean|null);
	    roleNameRepated?: (boolean|null);
	    friendReqMaxCnt?: (number|null);
	    friendMaxCnt?: (number|null);
	    chatGamerMaxCnt?: (number|null);
	    chatWorldMaxCnt?: (number|null);
	    gamerMailMaxCnt?: (number|null);
	    worldMailMaxCnt?: (number|null);
	    wordCheck?: (boolean|null);
	    notices?: (string|null);
	    PvpMatchTime?: (number|null);
	    PvpMatchTime2?: (number|null);
	    ChannelMine?: (boolean|null);
	    pvpResultMaxCnt?: (number|null);
	    shareTitle?: (string|null);
	    shareImgUrl?: (string|null);
	    shareImgId?: (string|null);
	    per1V10Icon?: (number|null);
	    per2V10Icon?: (number|null);
	    worldChatIcon?: (number|null);
	    pvpIconReward?: (number|null);
	    maxBagSpace?: (number|null);
	    DefAvatar?: (string|null);
	    initItemList?: (IDTFixItemNum[]|null);
	    BestDecompose?: (IDTDecompose[]|null);
	    draugTempAreaLength?: (number|null);
	    nameCost?: (IDTItemNum|null);
	    heroLevelItem?: (number[]|null);
	    powerIncrease?: (number|null);
	    updataDayTime?: (IDTTime|null);
	    updataWeekTime?: (number|null);
	    baseCount?: (number[]|null);
	    NumberOfChallengesPerday?: (number|null);
	    eliteBuyCount?: (IDTItemNum[]|null);
	    devilBuyCount?: (IDTItemNum[]|null);
	    SecretBookBuyCount?: (IDTItemNum[]|null);
	    itemBag?: (number|null);
	    equipBag?: (number|null);
	    tokenBag?: (number|null);
	    duelBase?: (number[]|null);
	    duelTime?: (number|null);
	    inviteTime?: (number[]|null);
	    matchesNumber?: (number|null);
	    initialRealscore?: (number|null);
	    initialRanknum?: (number|null);
	    combowinA?: (number|null);
	    comboloseA?: (number|null);
	    combowinparaMax?: (number|null);
	    comboloseparaMax?: (number|null);
	    enemyA?: (number|null);
	    scoreperstar?: (number|null);
	    combowinJdscore?: (number|null);
	    enemyJdscore?: (number|null);
	    initialMatchRange?: (number|null);
	    maxMatchRange?: (number|null);
	    widenRange?: (number|null);
	    widenTime?: (number|null);
	    epuipPromotionItem?: (number[]|null);
	    duelTempMapList?: (IDTMapId[]|null);
	    duelDayQuest?: (number[]|null);
	    duelweekQuest?: (number[]|null);
	    min_SecretlandkeyLevel?: (number|null);
	    max_SecretlandkeyLevel?: (number|null);
	    max_RollcoinCollect?: (number|null);
	    max_RollcoinSell?: (number|null);
	    RollconsumePower?: (number|null);
	    tierlimit?: (number|null);
	    matchTimeout?: (number|null);
	    timeoutToCreateTeam?: (number|null);
	    DraugSecPropRateAdd?: (number[]|null);
	    teamBaseHero?: (number|null);
	    rollCoinId?: (number|null);
	    GashaponNReward?: (IDTGashaponReward[]|null);
	}
	 class Global implements IGlobal {
	    constructor(properties?: IGlobal);
	    public everydayUpdateTime: number;
	    public roleNameAutoGen: string;
	    public roleNameMaxLength: number;
	    public roleNameMinLength: number;
	    public superAccountSwitch: boolean;
	    public roleNameRepated: boolean;
	    public friendReqMaxCnt: number;
	    public friendMaxCnt: number;
	    public chatGamerMaxCnt: number;
	    public chatWorldMaxCnt: number;
	    public gamerMailMaxCnt: number;
	    public worldMailMaxCnt: number;
	    public wordCheck: boolean;
	    public notices: string;
	    public PvpMatchTime: number;
	    public PvpMatchTime2: number;
	    public ChannelMine: boolean;
	    public pvpResultMaxCnt: number;
	    public shareTitle: string;
	    public shareImgUrl: string;
	    public shareImgId: string;
	    public per1V10Icon: number;
	    public per2V10Icon: number;
	    public worldChatIcon: number;
	    public pvpIconReward: number;
	    public maxBagSpace: number;
	    public DefAvatar: string;
	    public initItemList: IDTFixItemNum[];
	    public BestDecompose: IDTDecompose[];
	    public draugTempAreaLength: number;
	    public nameCost?: (IDTItemNum|null);
	    public heroLevelItem: number[];
	    public powerIncrease: number;
	    public updataDayTime?: (IDTTime|null);
	    public updataWeekTime: number;
	    public baseCount: number[];
	    public NumberOfChallengesPerday: number;
	    public eliteBuyCount: IDTItemNum[];
	    public devilBuyCount: IDTItemNum[];
	    public SecretBookBuyCount: IDTItemNum[];
	    public itemBag: number;
	    public equipBag: number;
	    public tokenBag: number;
	    public duelBase: number[];
	    public duelTime: number;
	    public inviteTime: number[];
	    public matchesNumber: number;
	    public initialRealscore: number;
	    public initialRanknum: number;
	    public combowinA: number;
	    public comboloseA: number;
	    public combowinparaMax: number;
	    public comboloseparaMax: number;
	    public enemyA: number;
	    public scoreperstar: number;
	    public combowinJdscore: number;
	    public enemyJdscore: number;
	    public initialMatchRange: number;
	    public maxMatchRange: number;
	    public widenRange: number;
	    public widenTime: number;
	    public epuipPromotionItem: number[];
	    public duelTempMapList: IDTMapId[];
	    public duelDayQuest: number[];
	    public duelweekQuest: number[];
	    public min_SecretlandkeyLevel: number;
	    public max_SecretlandkeyLevel: number;
	    public max_RollcoinCollect: number;
	    public max_RollcoinSell: number;
	    public RollconsumePower: number;
	    public tierlimit: number;
	    public matchTimeout: number;
	    public timeoutToCreateTeam: number;
	    public DraugSecPropRateAdd: number[];
	    public teamBaseHero: number;
	    public rollCoinId: number;
	    public GashaponNReward: IDTGashaponReward[];
	    public static create(properties?: IGlobal): Global;
	    public static encode(message: IGlobal, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGlobal, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Global;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Global;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Global;
	    public static toObject(message: Global, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IAAAShield {
	    id?: (number|null);
	    ip?: (string|null);
	    name?: (string|null);
	    heroIds?: (number[]|null);
	    menuIds?: (number[]|null);
	    itemIds?: (number[]|null);
	}
	 class AAAShield implements IAAAShield {
	    constructor(properties?: IAAAShield);
	    public id: number;
	    public ip: string;
	    public name: string;
	    public heroIds: number[];
	    public menuIds: number[];
	    public itemIds: number[];
	    public static create(properties?: IAAAShield): AAAShield;
	    public static encode(message: IAAAShield, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IAAAShield, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AAAShield;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AAAShield;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): AAAShield;
	    public static toObject(message: AAAShield, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IActivities {
	    id?: (number|null);
	    type?: (number|null);
	    name?: (string|null);
	    startType?: (number|null);
	    levelReq?: (number|null);
	    blockReq?: (number|null);
	    start?: (number|null);
	    duration?: (number|null);
	    icon?: (number|null);
	    iconChosen?: (number|null);
	    info?: (string|null);
	}
	 class Activities implements IActivities {
	    constructor(properties?: IActivities);
	    public id: number;
	    public type: number;
	    public name: string;
	    public startType: number;
	    public levelReq: number;
	    public blockReq: number;
	    public start: number;
	    public duration: number;
	    public icon: number;
	    public iconChosen: number;
	    public info: string;
	    public static create(properties?: IActivities): Activities;
	    public static encode(message: IActivities, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IActivities, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activities;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activities;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Activities;
	    public static toObject(message: Activities, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IAffix {
	    id?: (number|null);
	    AffixName?: (string|null);
	    Group?: (number|null);
	    GroupName?: (string|null);
	    AffixIcon?: (number|null);
	    AffixExplain?: (string|null);
	    ExplainIcon?: (number|null);
	}
	 class Affix implements IAffix {
	    constructor(properties?: IAffix);
	    public id: number;
	    public AffixName: string;
	    public Group: number;
	    public GroupName: string;
	    public AffixIcon: number;
	    public AffixExplain: string;
	    public ExplainIcon: number;
	    public static create(properties?: IAffix): Affix;
	    public static encode(message: IAffix, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IAffix, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Affix;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Affix;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Affix;
	    public static toObject(message: Affix, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IAvatar {
	    id?: (number|null);
	    zhCnName?: (string|null);
	    zhCnIcon?: (string|null);
	    card?: (string|null);
	    drawing?: (string|null);
	    plotDialogue?: (string|null);
	    spine?: (string|null);
	    spinePos?: (number[]|null);
	    Shadow?: (string|null);
	    heroLoading?: (string|null);
	    heroTeam?: (string|null);
	    heroName?: (string|null);
	    bodyIcon?: (string|null);
	    halfIcon?: (string|null);
	    zhCnIconDes?: (string|null);
	    heroCutin?: (string|null);
	    monsterWords?: (string|null);
	    enIcon?: (string|null);
	    pieceIcon?: (string|null);
	    modelBones?: (string|null);
	    bgPic?: (string|null);
	    coVector?: (IDTVector2|null);
	}
	 class Avatar implements IAvatar {
	    constructor(properties?: IAvatar);
	    public id: number;
	    public zhCnName: string;
	    public zhCnIcon: string;
	    public card: string;
	    public drawing: string;
	    public plotDialogue: string;
	    public spine: string;
	    public spinePos: number[];
	    public Shadow: string;
	    public heroLoading: string;
	    public heroTeam: string;
	    public heroName: string;
	    public bodyIcon: string;
	    public halfIcon: string;
	    public zhCnIconDes: string;
	    public heroCutin: string;
	    public monsterWords: string;
	    public enIcon: string;
	    public pieceIcon: string;
	    public modelBones: string;
	    public bgPic: string;
	    public coVector?: (IDTVector2|null);
	    public static create(properties?: IAvatar): Avatar;
	    public static encode(message: IAvatar, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IAvatar, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Avatar;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Avatar;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Avatar;
	    public static toObject(message: Avatar, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IBag {
	    id?: (number|null);
	    itemId?: (number|null);
	    level?: (number|null);
	    sellPrice?: (number|null);
	    stackNumber?: (number|null);
	}
	 class Bag implements IBag {
	    constructor(properties?: IBag);
	    public id: number;
	    public itemId: number;
	    public level: number;
	    public sellPrice: number;
	    public stackNumber: number;
	    public static create(properties?: IBag): Bag;
	    public static encode(message: IBag, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IBag, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bag;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Bag;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Bag;
	    public static toObject(message: Bag, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IBattleFormula {
	    id?: (number|null);
	    ParaName?: (string|null);
	    Tips?: (string|null);
	    ParaValue?: (number|null);
	    ValueType?: (number|null);
	}
	 class BattleFormula implements IBattleFormula {
	    constructor(properties?: IBattleFormula);
	    public id: number;
	    public ParaName: string;
	    public Tips: string;
	    public ParaValue: number;
	    public ValueType: number;
	    public static create(properties?: IBattleFormula): BattleFormula;
	    public static encode(message: IBattleFormula, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IBattleFormula, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BattleFormula;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleFormula;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): BattleFormula;
	    public static toObject(message: BattleFormula, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IChapter {
	    id?: (number|null);
	    type?: (number|null);
	    zhCnName?: (string|null);
	    icon?: (number|null);
	    starReward?: (IDTStarReward[]|null);
	}
	 class Chapter implements IChapter {
	    constructor(properties?: IChapter);
	    public id: number;
	    public type: number;
	    public zhCnName: string;
	    public icon: number;
	    public starReward: IDTStarReward[];
	    public static create(properties?: IChapter): Chapter;
	    public static encode(message: IChapter, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IChapter, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Chapter;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Chapter;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Chapter;
	    public static toObject(message: Chapter, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface ICheckPoint {
	    id?: (number|null);
	    type?: (number|null);
	    chapter?: (number|null);
	    mapID?: (number|null);
	    heroId?: (number|null);
	    heroLevel?: (number|null);
	    zhCnName?: (string|null);
	    zhCnDescribe?: (string|null);
	    icon?: (number|null);
	    iconName?: (number|null);
	    iconBoss?: (number|null);
	    picture?: (number|null);
	    challengePower?: (number|null);
	    teamLimit?: (number|null);
	    prepose?: (number|null);
	    showLevel?: (number|null);
	    Level?: (number|null);
	    time?: (number|null);
	    sweep?: (boolean|null);
	    firstReward?: (number|null);
	    baseReward?: (number|null);
	    rewardId?: (number|null);
	    showReward?: (number|null);
	    challengeTime?: (number|null);
	    challengeHp?: (number|null);
	    randomMaps?: (number[]|null);
	    secretlandTime?: (number[]|null);
	    SingleRevive?: (IDTItemNum[]|null);
	    TeamRevive?: (number|null);
	    IndexNum?: (number|null);
	}
	 class CheckPoint implements ICheckPoint {
	    constructor(properties?: ICheckPoint);
	    public id: number;
	    public type: number;
	    public chapter: number;
	    public mapID: number;
	    public heroId: number;
	    public heroLevel: number;
	    public zhCnName: string;
	    public zhCnDescribe: string;
	    public icon: number;
	    public iconName: number;
	    public iconBoss: number;
	    public picture: number;
	    public challengePower: number;
	    public teamLimit: number;
	    public prepose: number;
	    public showLevel: number;
	    public Level: number;
	    public time: number;
	    public sweep: boolean;
	    public firstReward: number;
	    public baseReward: number;
	    public rewardId: number;
	    public showReward: number;
	    public challengeTime: number;
	    public challengeHp: number;
	    public randomMaps: number[];
	    public secretlandTime: number[];
	    public SingleRevive: IDTItemNum[];
	    public TeamRevive: number;
	    public IndexNum: number;
	    public static create(properties?: ICheckPoint): CheckPoint;
	    public static encode(message: ICheckPoint, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ICheckPoint, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CheckPoint;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CheckPoint;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): CheckPoint;
	    public static toObject(message: CheckPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface ICompound {
	    id?: (number|null);
	    synItem?: (number|null);
	    numReq?: (number|null);
	    splitList?: (IDTItemNum[]|null);
	}
	 class Compound implements ICompound {
	    constructor(properties?: ICompound);
	    public id: number;
	    public synItem: number;
	    public numReq: number;
	    public splitList: IDTItemNum[];
	    public static create(properties?: ICompound): Compound;
	    public static encode(message: ICompound, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ICompound, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Compound;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Compound;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Compound;
	    public static toObject(message: Compound, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface ICountActivities {
	    id?: (number|null);
	    rewardId?: (number|null);
	    avatar?: (number|null);
	}
	 class CountActivities implements ICountActivities {
	    constructor(properties?: ICountActivities);
	    public id: number;
	    public rewardId: number;
	    public avatar: number;
	    public static create(properties?: ICountActivities): CountActivities;
	    public static encode(message: ICountActivities, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ICountActivities, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CountActivities;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CountActivities;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): CountActivities;
	    public static toObject(message: CountActivities, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDaily {
	    id?: (number|null);
	    active?: (number|null);
	    reward?: (number|null);
	}
	 class Daily implements IDaily {
	    constructor(properties?: IDaily);
	    public id: number;
	    public active: number;
	    public reward: number;
	    public static create(properties?: IDaily): Daily;
	    public static encode(message: IDaily, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDaily, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Daily;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Daily;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Daily;
	    public static toObject(message: Daily, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDraug {
	    id?: (number|null);
	    name?: (string|null);
	    range?: (number|null);
	    TypeName?: (number|null);
	    PosRate?: (number[]|null);
	    MaxRandNum?: (number|null);
	    RandNum?: (IDTRandNum[]|null);
	    SecPropStep?: (number|null);
	    initialExp?: (number|null);
	    ExpLevel?: (number[]|null);
	    eat?: (boolean|null);
	    decompose?: (boolean|null);
	    CoinRatio?: (number|null);
	    OtherDrop?: (number|null);
	    PropPos1?: (IDTProp[]|null);
	    Pos1PerModule?: (number|null);
	    PropPos2?: (IDTProp[]|null);
	    Pos2PerModule?: (number|null);
	    PropPos3?: (IDTProp[]|null);
	    Pos3PerModule?: (number|null);
	    PropPos4?: (IDTProp[]|null);
	    Pos4PerModule?: (number|null);
	    PropPos5?: (IDTProp[]|null);
	    Pos5PerModule?: (number|null);
	    PropPos6?: (IDTProp[]|null);
	    Pos6PerModule?: (number|null);
	    SecProp?: (IDTProp[]|null);
	    SecPerModule?: (number|null);
	    BatterSecPropRate?: (number|null);
	    DonotPutin?: (number|null);
	}
	 class Draug implements IDraug {
	    constructor(properties?: IDraug);
	    public id: number;
	    public name: string;
	    public range: number;
	    public TypeName: number;
	    public PosRate: number[];
	    public MaxRandNum: number;
	    public RandNum: IDTRandNum[];
	    public SecPropStep: number;
	    public initialExp: number;
	    public ExpLevel: number[];
	    public eat: boolean;
	    public decompose: boolean;
	    public CoinRatio: number;
	    public OtherDrop: number;
	    public PropPos1: IDTProp[];
	    public Pos1PerModule: number;
	    public PropPos2: IDTProp[];
	    public Pos2PerModule: number;
	    public PropPos3: IDTProp[];
	    public Pos3PerModule: number;
	    public PropPos4: IDTProp[];
	    public Pos4PerModule: number;
	    public PropPos5: IDTProp[];
	    public Pos5PerModule: number;
	    public PropPos6: IDTProp[];
	    public Pos6PerModule: number;
	    public SecProp: IDTProp[];
	    public SecPerModule: number;
	    public BatterSecPropRate: number;
	    public DonotPutin: number;
	    public static create(properties?: IDraug): Draug;
	    public static encode(message: IDraug, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDraug, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Draug;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Draug;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Draug;
	    public static toObject(message: Draug, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDraugAwaken {
	    id?: (number|null);
	    name?: (string|null);
	    costCoin?: (IDTItemNum[]|null);
	    rate?: (number|null);
	    draugRate?: (number|null);
	    showRate?: (number|null);
	    rate1?: (number|null);
	    rate2?: (number|null);
	    rate3?: (number|null);
	    rate4?: (number|null);
	    rate5?: (number|null);
	}
	 class DraugAwaken implements IDraugAwaken {
	    constructor(properties?: IDraugAwaken);
	    public id: number;
	    public name: string;
	    public costCoin: IDTItemNum[];
	    public rate: number;
	    public draugRate: number;
	    public showRate: number;
	    public rate1: number;
	    public rate2: number;
	    public rate3: number;
	    public rate4: number;
	    public rate5: number;
	    public static create(properties?: IDraugAwaken): DraugAwaken;
	    public static encode(message: IDraugAwaken, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDraugAwaken, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DraugAwaken;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DraugAwaken;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DraugAwaken;
	    public static toObject(message: DraugAwaken, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDraugSuit {
	    id?: (number|null);
	    TypeName?: (number|null);
	    Suit2?: (number|null);
	    Suit2PerModule?: (number|null);
	    Suit4?: (number|null);
	    Suit4PerModule?: (number|null);
	}
	 class DraugSuit implements IDraugSuit {
	    constructor(properties?: IDraugSuit);
	    public id: number;
	    public TypeName: number;
	    public Suit2: number;
	    public Suit2PerModule: number;
	    public Suit4: number;
	    public Suit4PerModule: number;
	    public static create(properties?: IDraugSuit): DraugSuit;
	    public static encode(message: IDraugSuit, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDraugSuit, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DraugSuit;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DraugSuit;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DraugSuit;
	    public static toObject(message: DraugSuit, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDuelDan {
	    id?: (number|null);
	    zhCnName?: (string|null);
	    zhCnDes?: (string|null);
	    ranknum?: (number|null);
	    preDan?: (number|null);
	    nextDan?: (number|null);
	    icon?: (number|null);
	    dan?: (number|null);
	    level?: (number|null);
	    star?: (number|null);
	    totalStar?: (number|null);
	    reward?: (number|null);
	    resetId?: (number|null);
	    rankBaseScore?: (number|null);
	    winBaseJDScore?: (number|null);
	    loseBaseJDScore?: (number|null);
	    maxJDScore?: (number|null);
	    winBaseScore?: (number|null);
	    loseBaseScore?: (number|null);
	}
	 class DuelDan implements IDuelDan {
	    constructor(properties?: IDuelDan);
	    public id: number;
	    public zhCnName: string;
	    public zhCnDes: string;
	    public ranknum: number;
	    public preDan: number;
	    public nextDan: number;
	    public icon: number;
	    public dan: number;
	    public level: number;
	    public star: number;
	    public totalStar: number;
	    public reward: number;
	    public resetId: number;
	    public rankBaseScore: number;
	    public winBaseJDScore: number;
	    public loseBaseJDScore: number;
	    public maxJDScore: number;
	    public winBaseScore: number;
	    public loseBaseScore: number;
	    public static create(properties?: IDuelDan): DuelDan;
	    public static encode(message: IDuelDan, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDuelDan, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DuelDan;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DuelDan;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DuelDan;
	    public static toObject(message: DuelDan, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDuelPoint {
	    id?: (number|null);
	    zhCnName?: (string|null);
	    isDeduct?: (boolean|null);
	    upStarPoint?: (number|null);
	    downStarPoint?: (number|null);
	}
	 class DuelPoint implements IDuelPoint {
	    constructor(properties?: IDuelPoint);
	    public id: number;
	    public zhCnName: string;
	    public isDeduct: boolean;
	    public upStarPoint: number;
	    public downStarPoint: number;
	    public static create(properties?: IDuelPoint): DuelPoint;
	    public static encode(message: IDuelPoint, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDuelPoint, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DuelPoint;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DuelPoint;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DuelPoint;
	    public static toObject(message: DuelPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDuelRanking {
	    id?: (number|null);
	    zhCnName?: (string|null);
	    minRanking?: (number|null);
	    maxRanking?: (number|null);
	    reward?: (number|null);
	}
	 class DuelRanking implements IDuelRanking {
	    constructor(properties?: IDuelRanking);
	    public id: number;
	    public zhCnName: string;
	    public minRanking: number;
	    public maxRanking: number;
	    public reward: number;
	    public static create(properties?: IDuelRanking): DuelRanking;
	    public static encode(message: IDuelRanking, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDuelRanking, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DuelRanking;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DuelRanking;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DuelRanking;
	    public static toObject(message: DuelRanking, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IDuelSeason {
	    id?: (number|null);
	    type?: (number|null);
	    zhCnName?: (string|null);
	    startTime?: (IDTDateTime|null);
	    overTime?: (IDTDateTime|null);
	}
	 class DuelSeason implements IDuelSeason {
	    constructor(properties?: IDuelSeason);
	    public id: number;
	    public type: number;
	    public zhCnName: string;
	    public startTime?: (IDTDateTime|null);
	    public overTime?: (IDTDateTime|null);
	    public static create(properties?: IDuelSeason): DuelSeason;
	    public static encode(message: IDuelSeason, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IDuelSeason, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DuelSeason;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DuelSeason;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): DuelSeason;
	    public static toObject(message: DuelSeason, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IEquipExp {
	    id?: (number|null);
	    level?: (number|null);
	    exp?: (number|null);
	    coin?: (IDTItemNum|null);
	}
	 class EquipExp implements IEquipExp {
	    constructor(properties?: IEquipExp);
	    public id: number;
	    public level: number;
	    public exp: number;
	    public coin?: (IDTItemNum|null);
	    public static create(properties?: IEquipExp): EquipExp;
	    public static encode(message: IEquipExp, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IEquipExp, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EquipExp;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EquipExp;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): EquipExp;
	    public static toObject(message: EquipExp, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IEquipment {
	    id?: (number|null);
	    zhCnName?: (string|null);
	    indexName?: (string|null);
	    zhCnDes?: (string|null);
	    quality?: (number|null);
	    icon?: (number|null);
	    modle?: (number|null);
	    equipPos?: (number|null);
	    equipType?: (number|null);
	    armorType?: (number[]|null);
	    useType?: (number[]|null);
	    useUi?: (number[]|null);
	    getWay?: (number[]|null);
	    buffId?: (IDTBuffId[]|null);
	    heroID?: (number[]|null);
	    atkType?: (number|null);
	    atkRange?: (IDTRandomInterval|null);
	    propID?: (IDTProp[]|null);
	    expPara?: (number|null);
	    starProp?: (IDTProp[]|null);
	    module?: (number|null);
	    specStarItem?: (number|null);
	    itemNum?: (number[]|null);
	    starLevelReq?: (number[]|null);
	    eat?: (boolean|null);
	    eatPara?: (number|null);
	    decompose?: (boolean|null);
	    dropItem?: (number|null);
	    DonotPutin?: (number|null);
	}
	 class Equipment implements IEquipment {
	    constructor(properties?: IEquipment);
	    public id: number;
	    public zhCnName: string;
	    public indexName: string;
	    public zhCnDes: string;
	    public quality: number;
	    public icon: number;
	    public modle: number;
	    public equipPos: number;
	    public equipType: number;
	    public armorType: number[];
	    public useType: number[];
	    public useUi: number[];
	    public getWay: number[];
	    public buffId: IDTBuffId[];
	    public heroID: number[];
	    public atkType: number;
	    public atkRange?: (IDTRandomInterval|null);
	    public propID: IDTProp[];
	    public expPara: number;
	    public starProp: IDTProp[];
	    public module: number;
	    public specStarItem: number;
	    public itemNum: number[];
	    public starLevelReq: number[];
	    public eat: boolean;
	    public eatPara: number;
	    public decompose: boolean;
	    public dropItem: number;
	    public DonotPutin: number;
	    public static create(properties?: IEquipment): Equipment;
	    public static encode(message: IEquipment, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IEquipment, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Equipment;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Equipment;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Equipment;
	    public static toObject(message: Equipment, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IGashapon {
	    id?: (number|null);
	    type?: (number|null);
	    menu?: (number|null);
	    num?: (number|null);
	    cost?: (IDTFixItemNum[]|null);
	    freeNum?: (number|null);
	    freeTime?: (number|null);
	    startTime?: (IDTDateTime|null);
	    endTime?: (IDTDateTime|null);
	    pic?: (number|null);
	    rewardId?: (number|null);
	    allowance?: (number|null);
	    allowanceNum?: (number|null);
	    desc?: (string|null);
	}
	 class Gashapon implements IGashapon {
	    constructor(properties?: IGashapon);
	    public id: number;
	    public type: number;
	    public menu: number;
	    public num: number;
	    public cost: IDTFixItemNum[];
	    public freeNum: number;
	    public freeTime: number;
	    public startTime?: (IDTDateTime|null);
	    public endTime?: (IDTDateTime|null);
	    public pic: number;
	    public rewardId: number;
	    public allowance: number;
	    public allowanceNum: number;
	    public desc: string;
	    public static create(properties?: IGashapon): Gashapon;
	    public static encode(message: IGashapon, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGashapon, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Gashapon;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Gashapon;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Gashapon;
	    public static toObject(message: Gashapon, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IGashaponNew {
	    id?: (number|null);
	    type?: (number|null);
	    menu?: (number|null);
	    num?: (number|null);
	    cost?: (IDTFixItemNum[]|null);
	    freeNum?: (number|null);
	    freeTime?: (number|null);
	    startTime?: (IDTDateTime|null);
	    endTime?: (IDTDateTime|null);
	    pic?: (number|null);
	    rewardId?: (IDTRewardRate[]|null);
	    allowance?: (IDTRewardRate[]|null);
	    desc?: (string|null);
	}
	 class GashaponNew implements IGashaponNew {
	    constructor(properties?: IGashaponNew);
	    public id: number;
	    public type: number;
	    public menu: number;
	    public num: number;
	    public cost: IDTFixItemNum[];
	    public freeNum: number;
	    public freeTime: number;
	    public startTime?: (IDTDateTime|null);
	    public endTime?: (IDTDateTime|null);
	    public pic: number;
	    public rewardId: IDTRewardRate[];
	    public allowance: IDTRewardRate[];
	    public desc: string;
	    public static create(properties?: IGashaponNew): GashaponNew;
	    public static encode(message: IGashaponNew, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGashaponNew, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GashaponNew;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GashaponNew;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): GashaponNew;
	    public static toObject(message: GashaponNew, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IGuide {
	    id?: (number|null);
	    zhCnName?: (string|null);
	    zhCnDes?: (string|null);
	    trigger?: (number|null);
	    triggerValue?: (number[]|null);
	    group?: (number|null);
	    groupOrder?: (number|null);
	    plotGroupId?: (number|null);
	    type?: (number|null);
	    guideType?: (number|null);
	    nextGuideId?: (number|null);
	    isFinish?: (number|null);
	    finger?: (boolean|null);
	    fingerPostion?: (number[]|null);
	    halo?: (boolean|null);
	    haloPostion?: (number[]|null);
	    textPosition?: (number|null);
	    menuId?: (number|null);
	}
	 class Guide implements IGuide {
	    constructor(properties?: IGuide);
	    public id: number;
	    public zhCnName: string;
	    public zhCnDes: string;
	    public trigger: number;
	    public triggerValue: number[];
	    public group: number;
	    public groupOrder: number;
	    public plotGroupId: number;
	    public type: number;
	    public guideType: number;
	    public nextGuideId: number;
	    public isFinish: number;
	    public finger: boolean;
	    public fingerPostion: number[];
	    public halo: boolean;
	    public haloPostion: number[];
	    public textPosition: number;
	    public menuId: number;
	    public static create(properties?: IGuide): Guide;
	    public static encode(message: IGuide, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IGuide, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Guide;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Guide;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Guide;
	    public static toObject(message: Guide, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IHeadPortrait {
	    id?: (number|null);
	    zhCnName?: (string|null);
	    sex?: (number|null);
	    unlock?: (IDTItemNum|null);
	    icon?: (number|null);
	}
	 class HeadPortrait implements IHeadPortrait {
	    constructor(properties?: IHeadPortrait);
	    public id: number;
	    public zhCnName: string;
	    public sex: number;
	    public unlock?: (IDTItemNum|null);
	    public icon: number;
	    public static create(properties?: IHeadPortrait): HeadPortrait;
	    public static encode(message: IHeadPortrait, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IHeadPortrait, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeadPortrait;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeadPortrait;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): HeadPortrait;
	    public static toObject(message: HeadPortrait, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IHero {
	    id?: (number|null);
	    zhCnName?: (string|null);
	    quality?: (number|null);
	    type?: (number[]|null);
	    basestar?: (number|null);
	    heroItem?: (number|null);
	    heroItemNum?: (number|null);
	    maxstar?: (number|null);
	    icon?: (number|null);
	    display?: (number[]|null);
	    tag?: (number[]|null);
	    atkType?: (number|null);
	    propId?: (number[]|null);
	    starId?: (number[]|null);
	    buffId?: (IDTBuffId[]|null);
	    baseSkillId?: (number[]|null);
	    DonotPutin?: (number|null);
	    DuelProp?: (IDTPropValue[]|null);
	    hp?: (number|null);
	    atk?: (number|null);
	    crit?: (number|null);
	    hit?: (number|null);
	    dodge?: (number|null);
	}
	 class Hero implements IHero {
	    constructor(properties?: IHero);
	    public id: number;
	    public zhCnName: string;
	    public quality: number;
	    public type: number[];
	    public basestar: number;
	    public heroItem: number;
	    public heroItemNum: number;
	    public maxstar: number;
	    public icon: number;
	    public display: number[];
	    public tag: number[];
	    public atkType: number;
	    public propId: number[];
	    public starId: number[];
	    public buffId: IDTBuffId[];
	    public baseSkillId: number[];
	    public DonotPutin: number;
	    public DuelProp: IDTPropValue[];
	    public hp: number;
	    public atk: number;
	    public crit: number;
	    public hit: number;
	    public dodge: number;
	    public static create(properties?: IHero): Hero;
	    public static encode(message: IHero, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IHero, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hero;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hero;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Hero;
	    public static toObject(message: Hero, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IHeroExp {
	    id?: (number|null);
	    level?: (number|null);
	    exp?: (number|null);
	}
	 class HeroExp implements IHeroExp {
	    constructor(properties?: IHeroExp);
	    public id: number;
	    public level: number;
	    public exp: number;
	    public static create(properties?: IHeroExp): HeroExp;
	    public static encode(message: IHeroExp, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IHeroExp, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeroExp;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeroExp;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): HeroExp;
	    public static toObject(message: HeroExp, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IHeroStar {
	    id?: (number|null);
	    quality?: (number|null);
	    needStar?: (number[]|null);
	    starNeed1?: (number|null);
	    starNeed2?: (number|null);
	    starNeed3?: (number|null);
	    starNeed4?: (number|null);
	    starNeed5?: (number|null);
	    otherItem1?: (IDTItemNum[]|null);
	    otherItem2?: (IDTItemNum[]|null);
	    otherItem3?: (IDTItemNum[]|null);
	    otherItem4?: (IDTItemNum[]|null);
	    otherItem5?: (IDTItemNum[]|null);
	}
	 class HeroStar implements IHeroStar {
	    constructor(properties?: IHeroStar);
	    public id: number;
	    public quality: number;
	    public needStar: number[];
	    public starNeed1: number;
	    public starNeed2: number;
	    public starNeed3: number;
	    public starNeed4: number;
	    public starNeed5: number;
	    public otherItem1: IDTItemNum[];
	    public otherItem2: IDTItemNum[];
	    public otherItem3: IDTItemNum[];
	    public otherItem4: IDTItemNum[];
	    public otherItem5: IDTItemNum[];
	    public static create(properties?: IHeroStar): HeroStar;
	    public static encode(message: IHeroStar, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IHeroStar, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeroStar;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeroStar;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): HeroStar;
	    public static toObject(message: HeroStar, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IHeroTag {
	    id?: (number|null);
	    tag?: (number|null);
	    zhCnName?: (string|null);
	    icon?: (number|null);
	}
	 class HeroTag implements IHeroTag {
	    constructor(properties?: IHeroTag);
	    public id: number;
	    public tag: number;
	    public zhCnName: string;
	    public icon: number;
	    public static create(properties?: IHeroTag): HeroTag;
	    public static encode(message: IHeroTag, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IHeroTag, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeroTag;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeroTag;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): HeroTag;
	    public static toObject(message: HeroTag, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IHeroTeam {
	    id?: (number|null);
	    zhCnName?: (string|null);
	    nameValue?: (number|null);
	    needLevel?: (number|null);
	    cost?: (IDTItemNum[]|null);
	    needRate?: (number[]|null);
	    zhCnDes?: (string[]|null);
	}
	 class HeroTeam implements IHeroTeam {
	    constructor(properties?: IHeroTeam);
	    public id: number;
	    public zhCnName: string;
	    public nameValue: number;
	    public needLevel: number;
	    public cost: IDTItemNum[];
	    public needRate: number[];
	    public zhCnDes: string[];
	    public static create(properties?: IHeroTeam): HeroTeam;
	    public static encode(message: IHeroTeam, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IHeroTeam, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeroTeam;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeroTeam;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): HeroTeam;
	    public static toObject(message: HeroTeam, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IHeroType {
	    id?: (number|null);
	    type?: (number|null);
	    zhCnName?: (string|null);
	    icon?: (number|null);
	    buttonIcon1?: (number|null);
	    buttonIcon2?: (number|null);
	}
	 class HeroType implements IHeroType {
	    constructor(properties?: IHeroType);
	    public id: number;
	    public type: number;
	    public zhCnName: string;
	    public icon: number;
	    public buttonIcon1: number;
	    public buttonIcon2: number;
	    public static create(properties?: IHeroType): HeroType;
	    public static encode(message: IHeroType, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IHeroType, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeroType;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeroType;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): HeroType;
	    public static toObject(message: HeroType, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IItem {
	    id?: (number|null);
	    zhCnName?: (string|null);
	    zhCnItemDes?: (string|null);
	    indexName?: (string|null);
	    icon?: (number|null);
	    quality?: (number|null);
	    type?: (number|null);
	    maxNum?: (number|null);
	    maxLimit?: (number|null);
	    getWay?: (number[]|null);
	    useType?: (number[]|null);
	    useUi?: (number[]|null);
	    useCost?: (IDTItemNum[]|null);
	    rewardId?: (number|null);
	    canSell?: (boolean|null);
	    price?: (IDTItemNum|null);
	    limitTime?: (IDTTime|null);
	    periodTime?: (IDTDateTime|null);
	    value?: (number|null);
	    DonotPutin?: (number|null);
	}
	 class Item implements IItem {
	    constructor(properties?: IItem);
	    public id: number;
	    public zhCnName: string;
	    public zhCnItemDes: string;
	    public indexName: string;
	    public icon: number;
	    public quality: number;
	    public type: number;
	    public maxNum: number;
	    public maxLimit: number;
	    public getWay: number[];
	    public useType: number[];
	    public useUi: number[];
	    public useCost: IDTItemNum[];
	    public rewardId: number;
	    public canSell: boolean;
	    public price?: (IDTItemNum|null);
	    public limitTime?: (IDTTime|null);
	    public periodTime?: (IDTDateTime|null);
	    public value: number;
	    public DonotPutin: number;
	    public static create(properties?: IItem): Item;
	    public static encode(message: IItem, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IItem, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Item;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Item;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Item;
	    public static toObject(message: Item, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface ILoader {
	    id?: (number|null);
	    name?: (string|null);
	    isShowCircle?: (boolean|null);
	}
	 class Loader implements ILoader {
	    constructor(properties?: ILoader);
	    public id: number;
	    public name: string;
	    public isShowCircle: boolean;
	    public static create(properties?: ILoader): Loader;
	    public static encode(message: ILoader, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ILoader, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Loader;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Loader;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Loader;
	    public static toObject(message: Loader, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface ILoading {
	    id?: (number|null);
	    text?: (string|null);
	}
	 class Loading implements ILoading {
	    constructor(properties?: ILoading);
	    public id: number;
	    public text: string;
	    public static create(properties?: ILoading): Loading;
	    public static encode(message: ILoading, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ILoading, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Loading;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Loading;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Loading;
	    public static toObject(message: Loading, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IMail {
	    id?: (number|null);
	    zhCnTitle?: (string|null);
	    type?: (number|null);
	    lifeTime?: (number|null);
	    enTitle?: (string|null);
	    rewardId?: (number|null);
	    item?: (IDTFixItemNum[]|null);
	    zhCnContent?: (string|null);
	    enContent?: (string|null);
	}
	 class Mail implements IMail {
	    constructor(properties?: IMail);
	    public id: number;
	    public zhCnTitle: string;
	    public type: number;
	    public lifeTime: number;
	    public enTitle: string;
	    public rewardId: number;
	    public item: IDTFixItemNum[];
	    public zhCnContent: string;
	    public enContent: string;
	    public static create(properties?: IMail): Mail;
	    public static encode(message: IMail, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IMail, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Mail;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Mail;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Mail;
	    public static toObject(message: Mail, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IMap {
	    id?: (number|null);
	    g?: (number|null);
	    vx?: (number|null);
	    vy?: (number|null);
	    maxt?: (number|null);
	    mint?: (number|null);
	    maxPillar?: (number|null);
	}
	 class Map implements IMap {
	    constructor(properties?: IMap);
	    public id: number;
	    public g: number;
	    public vx: number;
	    public vy: number;
	    public maxt: number;
	    public mint: number;
	    public maxPillar: number;
	    public static create(properties?: IMap): Map;
	    public static encode(message: IMap, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IMap, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Map;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Map;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Map;
	    public static toObject(message: Map, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IMenu {
	    id?: (number|null);
	    zhCnName?: (string|null);
	    icon?: (string|null);
	    moduleNameIcon?: (string|null);
	    moduleName?: (string|null);
	    layer?: (number|null);
	    topInformation?: (number[]|null);
	    closeOtherType?: (number|null);
	    closeHomeWindow?: (boolean|null);
	    isAutoOpenHomeWindow?: (boolean|null);
	    cacheTime?: (number|null);
	    loaderId?: (number|null);
	    barType?: (number|null);
	    barIndex?: (number|null);
	    openAnimation?: (number|null);
	    closeAnimation?: (number|null);
	    redType?: (number|null);
	}
	 class Menu implements IMenu {
	    constructor(properties?: IMenu);
	    public id: number;
	    public zhCnName: string;
	    public icon: string;
	    public moduleNameIcon: string;
	    public moduleName: string;
	    public layer: number;
	    public topInformation: number[];
	    public closeOtherType: number;
	    public closeHomeWindow: boolean;
	    public isAutoOpenHomeWindow: boolean;
	    public cacheTime: number;
	    public loaderId: number;
	    public barType: number;
	    public barIndex: number;
	    public openAnimation: number;
	    public closeAnimation: number;
	    public redType: number;
	    public static create(properties?: IMenu): Menu;
	    public static encode(message: IMenu, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IMenu, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Menu;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Menu;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Menu;
	    public static toObject(message: Menu, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IMenuIndex {
	    id?: (number|null);
	    name?: (string|null);
	    menuId?: (number|null);
	    openType?: (number|null);
	    menuIndex?: (number|null);
	    redType?: (number|null);
	}
	 class MenuIndex implements IMenuIndex {
	    constructor(properties?: IMenuIndex);
	    public id: number;
	    public name: string;
	    public menuId: number;
	    public openType: number;
	    public menuIndex: number;
	    public redType: number;
	    public static create(properties?: IMenuIndex): MenuIndex;
	    public static encode(message: IMenuIndex, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IMenuIndex, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MenuIndex;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MenuIndex;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): MenuIndex;
	    public static toObject(message: MenuIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IMonsterDynamic {
	    id?: (number|null);
	    TeamMembers?: (string|null);
	    PropPara?: (IDTPropValue[]|null);
	}
	 class MonsterDynamic implements IMonsterDynamic {
	    constructor(properties?: IMonsterDynamic);
	    public id: number;
	    public TeamMembers: string;
	    public PropPara: IDTPropValue[];
	    public static create(properties?: IMonsterDynamic): MonsterDynamic;
	    public static encode(message: IMonsterDynamic, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IMonsterDynamic, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MonsterDynamic;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MonsterDynamic;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): MonsterDynamic;
	    public static toObject(message: MonsterDynamic, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IMonsterProp {
	    id?: (number|null);
	    Chapter?: (number|null);
	    Section?: (number|null);
	    MonsterType?: (number|null);
	    MonsterTag?: (number|null);
	    Level?: (number|null);
	    Whatamonster?: (string|null);
	    PropValue?: (IDTPropValue[]|null);
	    IsDynamicProp?: (boolean|null);
	    HPMax?: (number|null);
	    Patt?: (number|null);
	    Hit?: (number|null);
	    DamageReduction?: (number|null);
	    MonsterHpType?: (number|null);
	}
	 class MonsterProp implements IMonsterProp {
	    constructor(properties?: IMonsterProp);
	    public id: number;
	    public Chapter: number;
	    public Section: number;
	    public MonsterType: number;
	    public MonsterTag: number;
	    public Level: number;
	    public Whatamonster: string;
	    public PropValue: IDTPropValue[];
	    public IsDynamicProp: boolean;
	    public HPMax: number;
	    public Patt: number;
	    public Hit: number;
	    public DamageReduction: number;
	    public MonsterHpType: number;
	    public static create(properties?: IMonsterProp): MonsterProp;
	    public static encode(message: IMonsterProp, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IMonsterProp, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MonsterProp;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MonsterProp;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): MonsterProp;
	    public static toObject(message: MonsterProp, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IMsg {
	    id?: (number|null);
	    key?: (string|null);
	    module?: (string|null);
	    name?: (string|null);
	    zhCnNotice?: (string|null);
	    enNotice?: (string|null);
	}
	 class Msg implements IMsg {
	    constructor(properties?: IMsg);
	    public id: number;
	    public key: string;
	    public module: string;
	    public name: string;
	    public zhCnNotice: string;
	    public enNotice: string;
	    public static create(properties?: IMsg): Msg;
	    public static encode(message: IMsg, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IMsg, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Msg;
	    public static toObject(message: Msg, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface INotice {
	    id?: (number|null);
	    type?: (number|null);
	    zhCn_Des?: (string|null);
	    time?: (number|null);
	    target?: (number[]|null);
	}
	 class Notice implements INotice {
	    constructor(properties?: INotice);
	    public id: number;
	    public type: number;
	    public zhCn_Des: string;
	    public time: number;
	    public target: number[];
	    public static create(properties?: INotice): Notice;
	    public static encode(message: INotice, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: INotice, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Notice;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Notice;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Notice;
	    public static toObject(message: Notice, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IPlayerLevel {
	    id?: (number|null);
	    playerNeedExp?: (number|null);
	    addPower?: (number|null);
	    maxPower?: (number|null);
	    rewardId?: (number|null);
	}
	 class PlayerLevel implements IPlayerLevel {
	    constructor(properties?: IPlayerLevel);
	    public id: number;
	    public playerNeedExp: number;
	    public addPower: number;
	    public maxPower: number;
	    public rewardId: number;
	    public static create(properties?: IPlayerLevel): PlayerLevel;
	    public static encode(message: IPlayerLevel, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IPlayerLevel, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerLevel;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerLevel;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): PlayerLevel;
	    public static toObject(message: PlayerLevel, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IPlayerName {
	    id?: (number|null);
	    zhCnName1?: (string|null);
	    zhCnName2?: (string|null);
	    zhCnName3?: (string|null);
	}
	 class PlayerName implements IPlayerName {
	    constructor(properties?: IPlayerName);
	    public id: number;
	    public zhCnName1: string;
	    public zhCnName2: string;
	    public zhCnName3: string;
	    public static create(properties?: IPlayerName): PlayerName;
	    public static encode(message: IPlayerName, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IPlayerName, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerName;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerName;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): PlayerName;
	    public static toObject(message: PlayerName, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IPlayList {
	    id?: (number|null);
	    zhCnName?: (string|null);
	    zhCnDes?: (string|null);
	    icon?: (number|null);
	    menuId?: (number|null);
	    type?: (number|null);
	    mode?: (number|null);
	    unlock?: (number|null);
	    openTime1?: (IDTTime[]|null);
	    openTime2?: (IDTTime[]|null);
	}
	 class PlayList implements IPlayList {
	    constructor(properties?: IPlayList);
	    public id: number;
	    public zhCnName: string;
	    public zhCnDes: string;
	    public icon: number;
	    public menuId: number;
	    public type: number;
	    public mode: number;
	    public unlock: number;
	    public openTime1: IDTTime[];
	    public openTime2: IDTTime[];
	    public static create(properties?: IPlayList): PlayList;
	    public static encode(message: IPlayList, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IPlayList, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayList;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayList;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): PlayList;
	    public static toObject(message: PlayList, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IPlot {
	    id?: (number|null);
	    storyGroupId?: (number|null);
	    nextStoryGroupId?: (number|null);
	    zhCnScenename?: (string|null);
	    dialgBox?: (number|null);
	    leaveMode?: (number|null);
	    position?: (number|null);
	    zhCnName?: (string|null);
	    imageId?: (number|null);
	    expression?: (string|null);
	    contentType?: (number|null);
	    zhCnWord?: (string|null);
	    BackgroundMap?: (number|null);
	    backgroundMusic?: (string|null);
	    playType?: (number|null);
	    specialEffects?: (number[]|null);
	}
	 class Plot implements IPlot {
	    constructor(properties?: IPlot);
	    public id: number;
	    public storyGroupId: number;
	    public nextStoryGroupId: number;
	    public zhCnScenename: string;
	    public dialgBox: number;
	    public leaveMode: number;
	    public position: number;
	    public zhCnName: string;
	    public imageId: number;
	    public expression: string;
	    public contentType: number;
	    public zhCnWord: string;
	    public BackgroundMap: number;
	    public backgroundMusic: string;
	    public playType: number;
	    public specialEffects: number[];
	    public static create(properties?: IPlot): Plot;
	    public static encode(message: IPlot, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IPlot, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Plot;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Plot;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Plot;
	    public static toObject(message: Plot, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IPower {
	    id?: (number|null);
	    useCount?: (number|null);
	    icon?: (number|null);
	    costID?: (IDTItemNum[]|null);
	    addPower?: (number[]|null);
	}
	 class Power implements IPower {
	    constructor(properties?: IPower);
	    public id: number;
	    public useCount: number;
	    public icon: number;
	    public costID: IDTItemNum[];
	    public addPower: number[];
	    public static create(properties?: IPower): Power;
	    public static encode(message: IPower, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IPower, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Power;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Power;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Power;
	    public static toObject(message: Power, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IPowerGive {
	    id?: (number|null);
	    startTime?: (IDTTime|null);
	    overTime?: (IDTTime|null);
	    addPower?: (number|null);
	    vipAddPower?: (number|null);
	}
	 class PowerGive implements IPowerGive {
	    constructor(properties?: IPowerGive);
	    public id: number;
	    public startTime?: (IDTTime|null);
	    public overTime?: (IDTTime|null);
	    public addPower: number;
	    public vipAddPower: number;
	    public static create(properties?: IPowerGive): PowerGive;
	    public static encode(message: IPowerGive, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IPowerGive, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PowerGive;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PowerGive;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): PowerGive;
	    public static toObject(message: PowerGive, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IProperty {
	    id?: (number|null);
	    field?: (string|null);
	    des?: (string|null);
	    zhCnName?: (string|null);
	    ValueType?: (number|null);
	    icon?: (number|null);
	    groupType?: (number|null);
	    visible?: (boolean|null);
	}
	 class Property implements IProperty {
	    constructor(properties?: IProperty);
	    public id: number;
	    public field: string;
	    public des: string;
	    public zhCnName: string;
	    public ValueType: number;
	    public icon: number;
	    public groupType: number;
	    public visible: boolean;
	    public static create(properties?: IProperty): Property;
	    public static encode(message: IProperty, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IProperty, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Property;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Property;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Property;
	    public static toObject(message: Property, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IPropValue {
	    id?: (number|null);
	    DisplayAss?: (string|null);
	    PropName?: (string|null);
	    RandomInterval?: (IDTRandomInterval|null);
	    PropValue?: (number|null);
	    GrowupMode?: (number|null);
	    Upgrade?: (IDTPropGrowupStep[]|null);
	    RangeRatio?: (number[]|null);
	}
	 class PropValue implements IPropValue {
	    constructor(properties?: IPropValue);
	    public id: number;
	    public DisplayAss: string;
	    public PropName: string;
	    public RandomInterval?: (IDTRandomInterval|null);
	    public PropValue: number;
	    public GrowupMode: number;
	    public Upgrade: IDTPropGrowupStep[];
	    public RangeRatio: number[];
	    public static create(properties?: IPropValue): PropValue;
	    public static encode(message: IPropValue, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IPropValue, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PropValue;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PropValue;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): PropValue;
	    public static toObject(message: PropValue, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IPvpMap {
	    id?: (number|null);
	    chapter?: (number|null);
	    mapID?: (number|null);
	}
	 class PvpMap implements IPvpMap {
	    constructor(properties?: IPvpMap);
	    public id: number;
	    public chapter: number;
	    public mapID: number;
	    public static create(properties?: IPvpMap): PvpMap;
	    public static encode(message: IPvpMap, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IPvpMap, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PvpMap;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PvpMap;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): PvpMap;
	    public static toObject(message: PvpMap, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IQuest {
	    id?: (number|null);
	    zhCnName?: (string|null);
	    zhCn_Des?: (string|null);
	    type?: (number|null);
	    target?: (number|null);
	    value?: (number|null);
	    count?: (number|null);
	    menuId?: (number|null);
	    tabId?: (number|null);
	    level?: (number|null);
	    prepose?: (number[]|null);
	    unlock?: (number|null);
	    rewardId?: (number|null);
	    active?: (number|null);
	}
	 class Quest implements IQuest {
	    constructor(properties?: IQuest);
	    public id: number;
	    public zhCnName: string;
	    public zhCn_Des: string;
	    public type: number;
	    public target: number;
	    public value: number;
	    public count: number;
	    public menuId: number;
	    public tabId: number;
	    public level: number;
	    public prepose: number[];
	    public unlock: number;
	    public rewardId: number;
	    public active: number;
	    public static create(properties?: IQuest): Quest;
	    public static encode(message: IQuest, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IQuest, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Quest;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Quest;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Quest;
	    public static toObject(message: Quest, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IResCost {
	    id?: (number|null);
	    costItemNum?: (IDTFixItemNum[]|null);
	    multipleReward?: (number|null);
	}
	 class ResCost implements IResCost {
	    constructor(properties?: IResCost);
	    public id: number;
	    public costItemNum: IDTFixItemNum[];
	    public multipleReward: number;
	    public static create(properties?: IResCost): ResCost;
	    public static encode(message: IResCost, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IResCost, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResCost;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResCost;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): ResCost;
	    public static toObject(message: ResCost, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IReward {
	    id?: (number|null);
	    fixedItems?: (IDTFixItemNum[]|null);
	    multipleReward?: (number|null);
	    noreward?: (number|null);
	    randomItems?: (IDTRewardRandom[]|null);
	    randomCount?: (number|null);
	}
	 class Reward implements IReward {
	    constructor(properties?: IReward);
	    public id: number;
	    public fixedItems: IDTFixItemNum[];
	    public multipleReward: number;
	    public noreward: number;
	    public randomItems: IDTRewardRandom[];
	    public randomCount: number;
	    public static create(properties?: IReward): Reward;
	    public static encode(message: IReward, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IReward, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Reward;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Reward;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Reward;
	    public static toObject(message: Reward, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface ISecretLand {
	    id?: (number|null);
	    zhCnName?: (string|null);
	    KeyLevel?: (number|null);
	    MonsterLevel?: (number|null);
	    LevelLimit?: (number|null);
	    GoodRewardRate?: (number|null);
	    HighRewardID?: (number|null);
	    LowRewardID?: (number|null);
	    BaseRewardID?: (number|null);
	    NextWeekReward?: (number|null);
	    KeyDown?: (number|null);
	    AffixGroup?: (number|null);
	    SecretIcon?: (number|null);
	    ReviveFury?: (number|null);
	    ReviveHP?: (number|null);
	    ReviveMP?: (number|null);
	}
	 class SecretLand implements ISecretLand {
	    constructor(properties?: ISecretLand);
	    public id: number;
	    public zhCnName: string;
	    public KeyLevel: number;
	    public MonsterLevel: number;
	    public LevelLimit: number;
	    public GoodRewardRate: number;
	    public HighRewardID: number;
	    public LowRewardID: number;
	    public BaseRewardID: number;
	    public NextWeekReward: number;
	    public KeyDown: number;
	    public AffixGroup: number;
	    public SecretIcon: number;
	    public ReviveFury: number;
	    public ReviveHP: number;
	    public ReviveMP: number;
	    public static create(properties?: ISecretLand): SecretLand;
	    public static encode(message: ISecretLand, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISecretLand, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SecretLand;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SecretLand;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SecretLand;
	    public static toObject(message: SecretLand, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface ISecretLandMonster {
	    id?: (number|null);
	    IDGroup?: (number|null);
	    MonsterType?: (string|null);
	    IDDetail?: (number[]|null);
	}
	 class SecretLandMonster implements ISecretLandMonster {
	    constructor(properties?: ISecretLandMonster);
	    public id: number;
	    public IDGroup: number;
	    public MonsterType: string;
	    public IDDetail: number[];
	    public static create(properties?: ISecretLandMonster): SecretLandMonster;
	    public static encode(message: ISecretLandMonster, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISecretLandMonster, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SecretLandMonster;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SecretLandMonster;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SecretLandMonster;
	    public static toObject(message: SecretLandMonster, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface ISetHeroProp {
	    id?: (number|null);
	    HeroId?: (number|null);
	    Level?: (number|null);
	    PropValue?: (IDTPropValue[]|null);
	    HPMax?: (number|null);
	    Def?: (number|null);
	    Patt?: (number|null);
	    Matt?: (number|null);
	    Hit?: (number|null);
	    Dodge?: (number|null);
	    Crit?: (number|null);
	    Violence?: (number|null);
	}
	 class SetHeroProp implements ISetHeroProp {
	    constructor(properties?: ISetHeroProp);
	    public id: number;
	    public HeroId: number;
	    public Level: number;
	    public PropValue: IDTPropValue[];
	    public HPMax: number;
	    public Def: number;
	    public Patt: number;
	    public Matt: number;
	    public Hit: number;
	    public Dodge: number;
	    public Crit: number;
	    public Violence: number;
	    public static create(properties?: ISetHeroProp): SetHeroProp;
	    public static encode(message: ISetHeroProp, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISetHeroProp, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetHeroProp;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetHeroProp;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): SetHeroProp;
	    public static toObject(message: SetHeroProp, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IShop {
	    id?: (number|null);
	    space?: (number|null);
	    count?: (number|null);
	    oldPrice?: (number|null);
	    nowPrice?: (number|null);
	    currency?: (number|null);
	}
	 class Shop implements IShop {
	    constructor(properties?: IShop);
	    public id: number;
	    public space: number;
	    public count: number;
	    public oldPrice: number;
	    public nowPrice: number;
	    public currency: number;
	    public static create(properties?: IShop): Shop;
	    public static encode(message: IShop, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IShop, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Shop;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Shop;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Shop;
	    public static toObject(message: Shop, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface ISkill {
	    id?: (number|null);
	    heroId?: (number|null);
	    icon?: (number|null);
	    skillType?: (number|null);
	    zhCn_Name?: (string|null);
	    zhCn_Desc?: (string|null);
	    zhCn_Updesc1?: (string|null);
	    zhCn_Updesc2?: (string|null);
	    zhCn_Updesc3?: (string|null);
	    zhCn_Updesc4?: (string|null);
	    zhCn_Updesc5?: (string|null);
	    zhCn_Updesc6?: (string|null);
	    zhCnTips?: (string|null);
	    openSkillLv?: (number|null);
	    upSkillLv?: (number[]|null);
	    cost?: (number[]|null);
	    upSkillcost?: (IDTItemNum[]|null);
	    costMana?: (number|null);
	    costRage?: (number|null);
	    costChargePoint?: (number|null);
	    baseChargePoint?: (number|null);
	    maxChargePoint?: (number|null);
	    recoverChargePoint?: (number|null);
	    cooldown?: (number|null);
	    manaHitRecovery?: (number|null);
	    MPMostTimesPerHit?: (number|null);
	    rageHitRecovery?: (number|null);
	    FPMostTimesPerHit?: (number|null);
	    fixedDamage?: (number[]|null);
	    coefficientDamage?: (number[]|null);
	    damageDistribution?: (number[]|null);
	    projectFactors?: (number[]|null);
	    hitnums?: (number|null);
	    casttime?: (number|null);
	}
	 class Skill implements ISkill {
	    constructor(properties?: ISkill);
	    public id: number;
	    public heroId: number;
	    public icon: number;
	    public skillType: number;
	    public zhCn_Name: string;
	    public zhCn_Desc: string;
	    public zhCn_Updesc1: string;
	    public zhCn_Updesc2: string;
	    public zhCn_Updesc3: string;
	    public zhCn_Updesc4: string;
	    public zhCn_Updesc5: string;
	    public zhCn_Updesc6: string;
	    public zhCnTips: string;
	    public openSkillLv: number;
	    public upSkillLv: number[];
	    public cost: number[];
	    public upSkillcost: IDTItemNum[];
	    public costMana: number;
	    public costRage: number;
	    public costChargePoint: number;
	    public baseChargePoint: number;
	    public maxChargePoint: number;
	    public recoverChargePoint: number;
	    public cooldown: number;
	    public manaHitRecovery: number;
	    public MPMostTimesPerHit: number;
	    public rageHitRecovery: number;
	    public FPMostTimesPerHit: number;
	    public fixedDamage: number[];
	    public coefficientDamage: number[];
	    public damageDistribution: number[];
	    public projectFactors: number[];
	    public hitnums: number;
	    public casttime: number;
	    public static create(properties?: ISkill): Skill;
	    public static encode(message: ISkill, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISkill, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Skill;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Skill;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Skill;
	    public static toObject(message: Skill, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface ISound {
	    id?: (number|null);
	    mergeFileName?: (string|null);
	    soundName?: (string|null);
	    time?: (number|null);
	}
	 class Sound implements ISound {
	    constructor(properties?: ISound);
	    public id: number;
	    public mergeFileName: string;
	    public soundName: string;
	    public time: number;
	    public static create(properties?: ISound): Sound;
	    public static encode(message: ISound, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ISound, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Sound;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Sound;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Sound;
	    public static toObject(message: Sound, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IUnlock {
	    id?: (number|null);
	    zhCnName?: (string|null);
	    menuId?: (number|null);
	    menuIndexId?: (number|null);
	    showType?: (number|null);
	    showLevel?: (number|null);
	    openLevel?: (number|null);
	    checkPoint?: (number|null);
	    openShow?: (number|null);
	    showIcon?: (number|null);
	}
	 class Unlock implements IUnlock {
	    constructor(properties?: IUnlock);
	    public id: number;
	    public zhCnName: string;
	    public menuId: number;
	    public menuIndexId: number;
	    public showType: number;
	    public showLevel: number;
	    public openLevel: number;
	    public checkPoint: number;
	    public openShow: number;
	    public showIcon: number;
	    public static create(properties?: IUnlock): Unlock;
	    public static encode(message: IUnlock, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IUnlock, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Unlock;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Unlock;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Unlock;
	    public static toObject(message: Unlock, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IWay {
	    id?: (number|null);
	    zhCnName?: (string|null);
	    zhCnDes?: (string|null);
	    menu?: (number|null);
	    menuIndex?: (number|null);
	    Chapter?: (number|null);
	    value?: (number[]|null);
	    icon?: (number|null);
	}
	 class Way implements IWay {
	    constructor(properties?: IWay);
	    public id: number;
	    public zhCnName: string;
	    public zhCnDes: string;
	    public menu: number;
	    public menuIndex: number;
	    public Chapter: number;
	    public value: number[];
	    public icon: number;
	    public static create(properties?: IWay): Way;
	    public static encode(message: IWay, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IWay, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Way;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Way;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Way;
	    public static toObject(message: Way, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IConfigMng {
	    Global?: (IGlobal|null);
	    AAAShield?: ({ [k: string]: IAAAShield }|null);
	    Activities?: ({ [k: string]: IActivities }|null);
	    Affix?: ({ [k: string]: IAffix }|null);
	    Avatar?: ({ [k: string]: IAvatar }|null);
	    Bag?: ({ [k: string]: IBag }|null);
	    BattleFormula?: ({ [k: string]: IBattleFormula }|null);
	    Chapter?: ({ [k: string]: IChapter }|null);
	    CheckPoint?: ({ [k: string]: ICheckPoint }|null);
	    Compound?: ({ [k: string]: ICompound }|null);
	    CountActivities?: ({ [k: string]: ICountActivities }|null);
	    Daily?: ({ [k: string]: IDaily }|null);
	    Draug?: ({ [k: string]: IDraug }|null);
	    DraugAwaken?: ({ [k: string]: IDraugAwaken }|null);
	    DraugSuit?: ({ [k: string]: IDraugSuit }|null);
	    DuelDan?: ({ [k: string]: IDuelDan }|null);
	    DuelPoint?: ({ [k: string]: IDuelPoint }|null);
	    DuelRanking?: ({ [k: string]: IDuelRanking }|null);
	    DuelSeason?: ({ [k: string]: IDuelSeason }|null);
	    EquipExp?: ({ [k: string]: IEquipExp }|null);
	    Equipment?: ({ [k: string]: IEquipment }|null);
	    Gashapon?: ({ [k: string]: IGashapon }|null);
	    GashaponNew?: ({ [k: string]: IGashaponNew }|null);
	    Guide?: ({ [k: string]: IGuide }|null);
	    HeadPortrait?: ({ [k: string]: IHeadPortrait }|null);
	    Hero?: ({ [k: string]: IHero }|null);
	    HeroExp?: ({ [k: string]: IHeroExp }|null);
	    HeroStar?: ({ [k: string]: IHeroStar }|null);
	    HeroTag?: ({ [k: string]: IHeroTag }|null);
	    HeroTeam?: ({ [k: string]: IHeroTeam }|null);
	    HeroType?: ({ [k: string]: IHeroType }|null);
	    Item?: ({ [k: string]: IItem }|null);
	    Loader?: ({ [k: string]: ILoader }|null);
	    Loading?: ({ [k: string]: ILoading }|null);
	    Mail?: ({ [k: string]: IMail }|null);
	    Map?: ({ [k: string]: IMap }|null);
	    Menu?: ({ [k: string]: IMenu }|null);
	    MenuIndex?: ({ [k: string]: IMenuIndex }|null);
	    MonsterDynamic?: ({ [k: string]: IMonsterDynamic }|null);
	    MonsterProp?: ({ [k: string]: IMonsterProp }|null);
	    Msg?: ({ [k: string]: IMsg }|null);
	    Notice?: ({ [k: string]: INotice }|null);
	    PlayerLevel?: ({ [k: string]: IPlayerLevel }|null);
	    PlayerName?: ({ [k: string]: IPlayerName }|null);
	    PlayList?: ({ [k: string]: IPlayList }|null);
	    Plot?: ({ [k: string]: IPlot }|null);
	    Power?: ({ [k: string]: IPower }|null);
	    PowerGive?: ({ [k: string]: IPowerGive }|null);
	    Property?: ({ [k: string]: IProperty }|null);
	    PropValue?: ({ [k: string]: IPropValue }|null);
	    PvpMap?: ({ [k: string]: IPvpMap }|null);
	    Quest?: ({ [k: string]: IQuest }|null);
	    ResCost?: ({ [k: string]: IResCost }|null);
	    Reward?: ({ [k: string]: IReward }|null);
	    SecretLand?: ({ [k: string]: ISecretLand }|null);
	    SecretLandMonster?: ({ [k: string]: ISecretLandMonster }|null);
	    SetHeroProp?: ({ [k: string]: ISetHeroProp }|null);
	    Shop?: ({ [k: string]: IShop }|null);
	    Skill?: ({ [k: string]: ISkill }|null);
	    Sound?: ({ [k: string]: ISound }|null);
	    Unlock?: ({ [k: string]: IUnlock }|null);
	    Way?: ({ [k: string]: IWay }|null);
	}
	 class ConfigMng implements IConfigMng {
	    constructor(properties?: IConfigMng);
	    public Global?: (IGlobal|null);
	    public AAAShield: { [k: string]: IAAAShield };
	    public Activities: { [k: string]: IActivities };
	    public Affix: { [k: string]: IAffix };
	    public Avatar: { [k: string]: IAvatar };
	    public Bag: { [k: string]: IBag };
	    public BattleFormula: { [k: string]: IBattleFormula };
	    public Chapter: { [k: string]: IChapter };
	    public CheckPoint: { [k: string]: ICheckPoint };
	    public Compound: { [k: string]: ICompound };
	    public CountActivities: { [k: string]: ICountActivities };
	    public Daily: { [k: string]: IDaily };
	    public Draug: { [k: string]: IDraug };
	    public DraugAwaken: { [k: string]: IDraugAwaken };
	    public DraugSuit: { [k: string]: IDraugSuit };
	    public DuelDan: { [k: string]: IDuelDan };
	    public DuelPoint: { [k: string]: IDuelPoint };
	    public DuelRanking: { [k: string]: IDuelRanking };
	    public DuelSeason: { [k: string]: IDuelSeason };
	    public EquipExp: { [k: string]: IEquipExp };
	    public Equipment: { [k: string]: IEquipment };
	    public Gashapon: { [k: string]: IGashapon };
	    public GashaponNew: { [k: string]: IGashaponNew };
	    public Guide: { [k: string]: IGuide };
	    public HeadPortrait: { [k: string]: IHeadPortrait };
	    public Hero: { [k: string]: IHero };
	    public HeroExp: { [k: string]: IHeroExp };
	    public HeroStar: { [k: string]: IHeroStar };
	    public HeroTag: { [k: string]: IHeroTag };
	    public HeroTeam: { [k: string]: IHeroTeam };
	    public HeroType: { [k: string]: IHeroType };
	    public Item: { [k: string]: IItem };
	    public Loader: { [k: string]: ILoader };
	    public Loading: { [k: string]: ILoading };
	    public Mail: { [k: string]: IMail };
	    public Map: { [k: string]: IMap };
	    public Menu: { [k: string]: IMenu };
	    public MenuIndex: { [k: string]: IMenuIndex };
	    public MonsterDynamic: { [k: string]: IMonsterDynamic };
	    public MonsterProp: { [k: string]: IMonsterProp };
	    public Msg: { [k: string]: IMsg };
	    public Notice: { [k: string]: INotice };
	    public PlayerLevel: { [k: string]: IPlayerLevel };
	    public PlayerName: { [k: string]: IPlayerName };
	    public PlayList: { [k: string]: IPlayList };
	    public Plot: { [k: string]: IPlot };
	    public Power: { [k: string]: IPower };
	    public PowerGive: { [k: string]: IPowerGive };
	    public Property: { [k: string]: IProperty };
	    public PropValue: { [k: string]: IPropValue };
	    public PvpMap: { [k: string]: IPvpMap };
	    public Quest: { [k: string]: IQuest };
	    public ResCost: { [k: string]: IResCost };
	    public Reward: { [k: string]: IReward };
	    public SecretLand: { [k: string]: ISecretLand };
	    public SecretLandMonster: { [k: string]: ISecretLandMonster };
	    public SetHeroProp: { [k: string]: ISetHeroProp };
	    public Shop: { [k: string]: IShop };
	    public Skill: { [k: string]: ISkill };
	    public Sound: { [k: string]: ISound };
	    public Unlock: { [k: string]: IUnlock };
	    public Way: { [k: string]: IWay };
	    public static create(properties?: IConfigMng): ConfigMng;
	    public static encode(message: IConfigMng, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IConfigMng, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConfigMng;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConfigMng;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): ConfigMng;
	    public static toObject(message: ConfigMng, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
}
