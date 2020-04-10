

import ExcelConfigReader from "../ExcelConfigReader";
import SkillConfig from "../ConfigExtends/SkillConfig";
export default class SkillConfigReader extends ExcelConfigReader<SkillConfig>
{
    // 存储单个角色拥有的技能表，根据类型区分
    private heroSkillTypeDict: Dictionary<int, Dictionary<int, SkillConfig[]>> = new Dictionary<int, Dictionary<int, SkillConfig[]>>();

    // 存储单个角色拥有的技能
    private heroSkillDict: Dictionary<int, SkillConfig[]> = new Dictionary<int, SkillConfig[]>();

    onGameLoadedAll()
    {
        super.onGameLoadedAll();
        let listData = this.getConfigList();
        for(let data of listData)
        {
            let dict = new Dictionary<int, SkillConfig[]>();
            let group = [];
            let list = [];

            let heroID = data.heroId;
            let type = data.skillType;
            if(this.heroSkillTypeDict.hasKey(heroID))
            {
                dict = this.heroSkillTypeDict.getValue(heroID);
                if(dict.hasKey(type))
                {
                    group = dict.getValue(type);
                }
                else
                {
                    group = [];
                    dict.set(type, group)
                }
                group.push(data);
            }
            else
            {
                group.push(data);
                dict.set(type, group);
                this.heroSkillTypeDict.set(heroID, dict);
            }

            if(this.heroSkillDict.hasKey(heroID))
            {
                list = this.heroSkillDict.getValue(heroID);
            }
            else
            {
                this.heroSkillDict.set(heroID, list);
            }
            list.push(data);
        }
    }

    HeroSkillTypeList(heroID: int, skillType: int)
    {
        return this.heroSkillTypeDict.getValue(heroID).getValue(skillType);
    }

    HeroSkillList(heroID: int)
    {
        return this.heroSkillDict.getValue(heroID);
    }
}