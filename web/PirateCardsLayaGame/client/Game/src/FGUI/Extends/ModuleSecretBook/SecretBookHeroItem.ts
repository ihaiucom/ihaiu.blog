/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SecretBookHeroItemStruct from "../../Generates/ModuleSecretBook/SecretBookHeroItemStruct";
import Game from '../../../Game';
import { HeroData } from '../../../GameModule/DataStructs/HeroData';

export default class SecretBookHeroItem extends SecretBookHeroItemStruct
{
    heroData: HeroData;
    
    renderItem(data: HeroData)
    {
        this.heroData = data;
        this.m_item.RenderItem(data);
    }
}