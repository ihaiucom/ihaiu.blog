import CarryProp = proto.CarryProp;
import ICarryProp = proto.ICarryProp;
import PropertyConfig from "../../Config/ConfigExtends/PropertyConfig";
import Game from "../../Game";
import Prop from "../../GameFrame/Props/Prop";
/**
 * 战魂数据
 */
export default class CarryPropData extends CarryProp 
{
    config:PropertyConfig;

    isPercent:boolean = false;

    get name():string
    {
        return this.config.name;
    }

    constructor()
    {
        super();
    }    

    /**
     * 生成战魂数据
     * @param draug 
     */
    static Create(prop:ICarryProp):Prop
    {
        let data = new Prop();
        // data.id     = prop.id;
        // data.value  = prop.value;
        // data.propTableId  = prop.propTableId;
        // data.level  = prop.level;

        // let config  = Game.config.property.getConfig(prop.id);
        // data.config = config;
        // let percent = prop.id > 100 || config.ValueType == 2;
        // data.isPercent = percent;
        // prop.id     = percent ? (prop.id - 100) : prop.id;
        
        return data;
    }    
}