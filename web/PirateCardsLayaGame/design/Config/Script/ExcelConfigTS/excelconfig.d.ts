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
	 interface ICard {
	    id?: (number|null);
	    scoreTypeKey?: (string|null);
	    enName?: (string|null);
	    zhCnName?: (string|null);
	    level?: (number|null);
	    sprite?: (string|null);
	    coin?: (number|null);
	    exp?: (number|null);
	}
	 class Card implements ICard {
	    constructor(properties?: ICard);
	    public id: number;
	    public scoreTypeKey: string;
	    public enName: string;
	    public zhCnName: string;
	    public level: number;
	    public sprite: string;
	    public coin: number;
	    public exp: number;
	    public static create(properties?: ICard): Card;
	    public static encode(message: ICard, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ICard, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Card;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Card;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Card;
	    public static toObject(message: Card, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface ICardScoreType {
	    id?: (number|null);
	    key?: (string|null);
	    zhCnName?: (string|null);
	    backgroundType?: (number|null);
	    frontView?: (string|null);
	    isInChest?: (boolean|null);
	    isInBarrel?: (boolean|null);
	    isPowerUp?: (boolean|null);
	}
	 class CardScoreType implements ICardScoreType {
	    constructor(properties?: ICardScoreType);
	    public id: number;
	    public key: string;
	    public zhCnName: string;
	    public backgroundType: number;
	    public frontView: string;
	    public isInChest: boolean;
	    public isInBarrel: boolean;
	    public isPowerUp: boolean;
	    public static create(properties?: ICardScoreType): CardScoreType;
	    public static encode(message: ICardScoreType, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ICardScoreType, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardScoreType;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CardScoreType;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): CardScoreType;
	    public static toObject(message: CardScoreType, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IEffectType {
	    id?: (number|null);
	    effectTypeKey?: (string|null);
	    describe?: (string|null);
	}
	 class EffectType implements IEffectType {
	    constructor(properties?: IEffectType);
	    public id: number;
	    public effectTypeKey: string;
	    public describe: string;
	    public static create(properties?: IEffectType): EffectType;
	    public static encode(message: IEffectType, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IEffectType, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EffectType;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EffectType;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): EffectType;
	    public static toObject(message: EffectType, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IItem {
	    id?: (number|null);
	    zhCnName?: (string|null);
	    zhCnDes?: (string|null);
	    icon?: (string|null);
	    typeKey?: (string|null);
	    type?: (number|null);
	    coin?: (number|null);
	}
	 class Item implements IItem {
	    constructor(properties?: IItem);
	    public id: number;
	    public zhCnName: string;
	    public zhCnDes: string;
	    public icon: string;
	    public typeKey: string;
	    public type: number;
	    public coin: number;
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
	 interface IItemConsume {
	    id?: (number|null);
	    zhCnName?: (string|null);
	    zhCnDes?: (string|null);
	    icon?: (string|null);
	    effectType?: (string|null);
	    effectArgs?: (number[]|null);
	}
	 class ItemConsume implements IItemConsume {
	    constructor(properties?: IItemConsume);
	    public id: number;
	    public zhCnName: string;
	    public zhCnDes: string;
	    public icon: string;
	    public effectType: string;
	    public effectArgs: number[];
	    public static create(properties?: IItemConsume): ItemConsume;
	    public static encode(message: IItemConsume, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IItemConsume, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemConsume;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemConsume;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): ItemConsume;
	    public static toObject(message: ItemConsume, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IItemDecorate {
	    id?: (number|null);
	    zhCnName?: (string|null);
	    zhCnDes?: (string|null);
	    icon?: (string|null);
	    effectType?: (string|null);
	    effectArgs?: (number[]|null);
	    triggerType?: (string|null);
	    triggerArgs?: (number[]|null);
	}
	 class ItemDecorate implements IItemDecorate {
	    constructor(properties?: IItemDecorate);
	    public id: number;
	    public zhCnName: string;
	    public zhCnDes: string;
	    public icon: string;
	    public effectType: string;
	    public effectArgs: number[];
	    public triggerType: string;
	    public triggerArgs: number[];
	    public static create(properties?: IItemDecorate): ItemDecorate;
	    public static encode(message: IItemDecorate, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IItemDecorate, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemDecorate;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemDecorate;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): ItemDecorate;
	    public static toObject(message: ItemDecorate, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface IItemWeapon {
	    id?: (number|null);
	    zhCnName?: (string|null);
	    zhCnDes?: (string|null);
	    icon?: (string|null);
	    effectType?: (string|null);
	    effectArgs?: (number[]|null);
	    triggerType?: (string|null);
	    triggerArgs?: (number[]|null);
	}
	 class ItemWeapon implements IItemWeapon {
	    constructor(properties?: IItemWeapon);
	    public id: number;
	    public zhCnName: string;
	    public zhCnDes: string;
	    public icon: string;
	    public effectType: string;
	    public effectArgs: number[];
	    public triggerType: string;
	    public triggerArgs: number[];
	    public static create(properties?: IItemWeapon): ItemWeapon;
	    public static encode(message: IItemWeapon, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: IItemWeapon, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemWeapon;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemWeapon;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): ItemWeapon;
	    public static toObject(message: ItemWeapon, options?: $protobuf.IConversionOptions): { [k: string]: any };
	    public toJSON(): { [k: string]: any };
	}
	 interface ILevel {
	    id?: (number|null);
	    exp?: (number|null);
	    randomWeaponList?: (number[]|null);
	    randomDecorateList?: (number[]|null);
	    randomConsumeList?: (number[]|null);
	}
	 class Level implements ILevel {
	    constructor(properties?: ILevel);
	    public id: number;
	    public exp: number;
	    public randomWeaponList: number[];
	    public randomDecorateList: number[];
	    public randomConsumeList: number[];
	    public static create(properties?: ILevel): Level;
	    public static encode(message: ILevel, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ILevel, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Level;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Level;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): Level;
	    public static toObject(message: Level, options?: $protobuf.IConversionOptions): { [k: string]: any };
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
	 interface ITriggerType {
	    id?: (number|null);
	    triggerTypeKey?: (string|null);
	    zhCnName?: (string|null);
	    cardTypeList?: (string[]|null);
	}
	 class TriggerType implements ITriggerType {
	    constructor(properties?: ITriggerType);
	    public id: number;
	    public triggerTypeKey: string;
	    public zhCnName: string;
	    public cardTypeList: string[];
	    public static create(properties?: ITriggerType): TriggerType;
	    public static encode(message: ITriggerType, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static encodeDelimited(message: ITriggerType, writer?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TriggerType;
	    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TriggerType;
	    public static verify(message: { [k: string]: any }): (string|null);
	    public static fromObject(object: { [k: string]: any }): TriggerType;
	    public static toObject(message: TriggerType, options?: $protobuf.IConversionOptions): { [k: string]: any };
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
	    Card?: ({ [k: string]: ICard }|null);
	    CardScoreType?: ({ [k: string]: ICardScoreType }|null);
	    EffectType?: ({ [k: string]: IEffectType }|null);
	    Item?: ({ [k: string]: IItem }|null);
	    ItemConsume?: ({ [k: string]: IItemConsume }|null);
	    ItemDecorate?: ({ [k: string]: IItemDecorate }|null);
	    ItemWeapon?: ({ [k: string]: IItemWeapon }|null);
	    Level?: ({ [k: string]: ILevel }|null);
	    Loader?: ({ [k: string]: ILoader }|null);
	    Menu?: ({ [k: string]: IMenu }|null);
	    Msg?: ({ [k: string]: IMsg }|null);
	    Property?: ({ [k: string]: IProperty }|null);
	    TriggerType?: ({ [k: string]: ITriggerType }|null);
	    Unlock?: ({ [k: string]: IUnlock }|null);
	}
	 class ConfigMng implements IConfigMng {
	    constructor(properties?: IConfigMng);
	    public Global?: (IGlobal|null);
	    public Card: { [k: string]: ICard };
	    public CardScoreType: { [k: string]: ICardScoreType };
	    public EffectType: { [k: string]: IEffectType };
	    public Item: { [k: string]: IItem };
	    public ItemConsume: { [k: string]: IItemConsume };
	    public ItemDecorate: { [k: string]: IItemDecorate };
	    public ItemWeapon: { [k: string]: IItemWeapon };
	    public Level: { [k: string]: ILevel };
	    public Loader: { [k: string]: ILoader };
	    public Menu: { [k: string]: IMenu };
	    public Msg: { [k: string]: IMsg };
	    public Property: { [k: string]: IProperty };
	    public TriggerType: { [k: string]: ITriggerType };
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
