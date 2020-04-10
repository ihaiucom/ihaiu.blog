import MModel from "../../GameFrame/Module/MModel";
import GashaponData from "../DataStructs/GashaponData";
import GashaponType = proto.GashaponType;

export default class GashaponModel extends MModel {
    private dict: Dictionary<string, GashaponData>;
    constructor() {
        super();   
        this.dict = new Dictionary<string, GashaponData>();
    }

    /** 红点——可免费的抽奖 */
    public IsCanFreeGashapon()
    {
        let dashaponlist = this.dict.getValues();
        for(let gashapon of dashaponlist) 
        {
            if (this.IsFreeGashapon(gashapon)) 
            {
                return true;    
            }
        }

        return false;
    } 

    /** 红点——免费的抽奖 */
    public IsFreeGashapon(gashapon:GashaponData)
    {
        return gashapon.freeNum;
    } 

    /** 红点——免费的抽奖 */
    public IsFreeGashaponByType(type:GashaponType)
    {
        let dashaponlist = this.dict.getValues();
        for(let gashapon of dashaponlist) 
        {
            if (gashapon.type == type) 
            {
                return this.IsFreeGashapon(gashapon);    
            }
        }

        return false;
    } 

    
    
    /**
     * 设置抽奖信息
     * @param msg 
     */
    setGashaponList(msg: Array<any>): void{
        for(let i = 0;i < msg.length;i++)
        {
            let gashapon: GashaponData = GashaponData.Create(msg[i]);
            this.dict.add(gashapon.id,gashapon);
        }
    }

    updateGashaponData(msg: proto.GamerExtractGashaponS2C)
    {
        let data = this.getGashapon(msg.gashaponId);
        if(data)
        {
            data.updateExtractTimes(msg.todayExtractNum);
        }
    }

    /**
     * 获取抽奖
     * @param gashaponId 
     */
    getGashapon(gashaponId: number): GashaponData {
        return this.dict.getValue(gashaponId);
    }

    /**
     * 根据模块 获取抽奖
     * @param menuId 
     */
    getGashaponByMenuId(menuId: number): Array<GashaponData>
    {
        let list: Array<GashaponData> = [];
        let gashapons = this.dict.getValues();
        for(let i = 0;i < gashapons.length;i++)
        {

            if(gashapons[i].menuId == menuId)
            {
                list.push(gashapons[i]);
            }
        }

        list.sort(function(a: any,b: any): number
        {
            return a.id - b.id;
        });

        return list;
    }

    /** 隔天重置抽奖次数 */
    public resetGashaponData()
    {
        for(let gashapon of this.dict.getValues()) {
            gashapon.todayExtractNum = 0;
        }
    } 
}