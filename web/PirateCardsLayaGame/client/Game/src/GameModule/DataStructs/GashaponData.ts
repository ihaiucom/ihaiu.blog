import GashaponConfig from "../../Config/ConfigExtends/GashaponConfig";
import Game from "../../Game";
import DTFixItemNum = excelconfig.IDTFixItemNum;

export default class GashaponData extends proto.Gashapon {

    get config(): GashaponConfig 
    {
        return Game.config.gashapon.getConfig(this.id);
    }

    static Create(msg: any): GashaponData {
        let gashaponData = new GashaponData();
        for (const key in msg) {
            gashaponData[key] = msg[key];
        }
        return gashaponData;
    }

    //更新今日抽奖次数次数
    updateExtractTimes(times: number)
    {
        this.todayExtractNum = times;
    }

    /**
     * 所属模块
     */
    get menuId(): number {
        return this.config.menu;
    }

    /**
     * 类型
     */
    get type(): number {
        return this.config.type;
    }

    /**
     * 海报路径
     */
    get iconUrl(): string {
        return //this.config.pic;
    }

    /**
     * 抽奖消耗
     */
    get costItem(): DTFixItemNum {
        return this.config.cost[0];
    }
    
}