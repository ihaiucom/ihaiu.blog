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
	 interface IConfigMng {
	    Global?: (IGlobal|null);
	    Loader?: ({ [k: string]: ILoader }|null);
	    Menu?: ({ [k: string]: IMenu }|null);
	    Msg?: ({ [k: string]: IMsg }|null);
	    Unlock?: ({ [k: string]: IUnlock }|null);
	}
	 class ConfigMng implements IConfigMng {
	    constructor(properties?: IConfigMng);
	    public Global?: (IGlobal|null);
	    public Loader: { [k: string]: ILoader };
	    public Menu: { [k: string]: IMenu };
	    public Msg: { [k: string]: IMsg };
	    public Unlock: { [k: string]: IUnlock };
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
