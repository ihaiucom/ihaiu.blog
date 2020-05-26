import RandomHelper from "../Utils/RandomHelper";
import CPLockDialLoadBig from "../../FGUI/Extends/GameHome/CPLockDialLoadBig";
import CPLockLamp from "../../FGUI/Extends/GameHome/CPLockLamp";

export enum ChestLockItemType
{
    LoadBig,
    LoadSmall,
    FixedBig,
    FiexedSmall
}

export interface ChestLockItemConfig
{
    type: ChestLockItemType;
    angle: number;
    count: number;
}

export interface ChestLockItemData
{
    id: number;
    groundIndex: number;
    index: number;
    config: ChestLockItemConfig;
    angle: number;
    isOpen: boolean;

    itemView?: CPLockDialLoadBig;
    itemViewLighting?: CPLockLamp;
}

export class ChestLockData
{
    configs:ChestLockItemConfig[] = 
    [
        {type: ChestLockItemType.LoadBig, angle: 40, count: 1},
        {type: ChestLockItemType.LoadSmall, angle: 20, count : 3},
        {type: ChestLockItemType.FixedBig, angle: 50, count: 2},
        {type: ChestLockItemType.FiexedSmall, angle: 24, count: 4}
    ];

    beginAngle = -60;
    endAngle = 360 - 60 * 2;

    initItems: ChestLockItemData[];
    beginItem: ChestLockItemData;
    endItem: ChestLockItemData;

    items: ChestLockItemData[] = [];
    loadItems: ChestLockItemData[] = [];

    clickMaxCount =10;
    leftClickCount = 10;

    isEnd = false;

    constructor()
    {
        
        // this.beginAngle = this.angle360(this.beginAngle);
        // this.endAngle = this.angle360(this.endAngle);

        this.initItems = [];
        var item: ChestLockItemData;
        var id = 2;
        var angle = -70 + 25;
        for(var config of this.configs)
        {
            for(var i = 0; i < config.count; i ++)
            {
                item = {id: id, index: id, groundIndex: i, config: config, angle: angle, isOpen: false};
                angle += config.angle;
                this.initItems.push(item);
                id ++;
            }
        }

        // this.beginItem = {id: 0, index: 0, groundIndex: 4, config: this.configs[ChestLockItemType.FiexedSmall], angle: -70};
        // this.endItem = {id: 1, index: this.initItems.length + 1, groundIndex: 5, config: this.configs[ChestLockItemType.FiexedSmall], angle: 240};


        // this.initItems.push(this.beginItem);
        // this.initItems.push(this.endItem);
    }

    init()
    {
        this.isEnd = false;
        this.leftClickCount = this.clickMaxCount;

        this.items.length = 0;
        this.loadItems.length = 0;
        this.initItems = RandomHelper.shuffle(this.initItems);
        var angle = this.beginAngle;
        for(var i = 0, len = this.initItems.length; i< len; i ++)
        {
            var item =this.initItems[i];
            angle += item.config.angle * 0.5;
            item.angle =  this.angle360(angle);
            item.isOpen = false;
            angle += item.config.angle * 0.5;
            this.items.push(item);

            switch(item.config.type)
            {
                case ChestLockItemType.LoadBig:
                case ChestLockItemType.LoadSmall:
                    this.loadItems.push(item);
                    break;
            }
        }
       
    }

    
    getItemByAngle(angle: number): ChestLockItemData
    {
        angle = this.angle360(angle);
        for(var itemData of this.items)
        {
            var subAngle = Math.abs(this.angle360(itemData.angle) - angle);
            // console.log("angle=", angle, "itemData.angle=", this.angle360(itemData.angle), "configAngle=", itemData.config.angle, "subAngle=",  Math.abs(this.angle360(itemData.angle) - angle));
            if(subAngle <= itemData.config.angle * 0.5)
            {
                return itemData;
            }
        }

    }

    isOpendAll()
    {
        for(var itemData of this.loadItems)
        {
            if(!itemData.isOpen)
            {
                return false;
            }
        }

        return true;
    }

    angle360(angle: number)
    {
        if(angle == 360)
        {
            return angle;
        }

        angle = angle % 360;
        if(angle < 0)
        {
            angle += 360;
        }
        return angle;
    }

    
    static Angle360(angle: number)
    {
        if(angle == 360)
        {
            return angle;
        }

        angle = angle % 360;
        if(angle < 0)
        {
            angle += 360;
        }
        return angle;
    }

    
    static AngleSub360(angleA: number, angleB: number)
    {
        angleA = this.Angle360(angleA);
        angleB = this.Angle360(angleB);
        return Math.abs(angleA - angleB);
    }


}