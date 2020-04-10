

import ExcelConfigReader from "../ExcelConfigReader";
import CheckPointConfig from '../ConfigExtends/CheckPointConfig';
import SectionType = proto.CheckPointType;
export default class CheckPointConfigReader extends ExcelConfigReader<CheckPointConfig>
{
    private chapterDict: Dictionary<int,CheckPointConfig[]> = new Dictionary<int,CheckPointConfig[]>();
    private secretBookDict: Dictionary<int, CheckPointConfig[]> = new Dictionary<int, CheckPointConfig[]>();
    
    private normalList: CheckPointConfig[];
    private specialList: CheckPointConfig[];
    private monsterList: CheckPointConfig[];
    private secretBookList: CheckPointConfig[];

    onGameLoadedAll()
    {
        super.onGameLoadedAll();
        this.normalList = [];
        this.specialList = [];
        this.monsterList = [];
        this.secretBookList = [];
        for(let config of this.configList)
        {
            if(config.type == proto.CheckPointType.Story) 
                this.normalList.push(config)
            else if(config.type == proto.CheckPointType.Elite)
                this.specialList.push(config);
            else if(config.type == proto.CheckPointType.Devil)
                this.monsterList.push(config)
            else if(config.type == proto.CheckPointType.SecretBook)
            {
                this.secretBookList.push(config);
                if(!this.secretBookDict.hasKey(config.heroId))
                    this.secretBookDict.add(config.heroId,[]);
                this.secretBookDict.getValue(config.heroId).push(config);
            }

            if(!this.chapterDict.hasKey(config.chapter))
                this.chapterDict.add(config.chapter,[]);
            this.chapterDict.getValue(config.chapter).push(config);
        }
    }

    getConfigListByType(type: int): CheckPointConfig[]
    {
        if(type == SectionType.Story && this.normalList)
            return this.normalList;
        else if(type == SectionType.Elite && this.specialList)
            return this.specialList;
        else if(type == SectionType.Devil && this.monsterList)
            return this.monsterList;
        else if(type == SectionType.SecretBook && this.secretBookList)
            return this.secretBookList;
    }

    getMaxChapter()
    {
        return this.chapterDict.getValues().length;
    }

    /**
     * 获取一个章节的所有关卡配置
     * @param chapter 章节
     */
    getConfigListByChapter(chapter: int)
    {
        return this.chapterDict.getValue(chapter);
    }

    getConifgByChapterAndMap(chapter : int, map : int)
    {
        let list = this.getConfigListByChapter(chapter);
        for(let i = 0 ; i < list.length ; i ++)
        {
            if(list[i].mapID == map)
            {
                return list[i];
            }
        }
        return null;
    }

    getConfigListByHeroId(heroId: number)
    {
        let list = this.secretBookDict.getValue(heroId);
        if(!list)
            list = [];
        return list;
    }

}